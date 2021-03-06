/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {UnknownObject} from "@romefrontend/typescript-helpers";
import {SourceMapConsumer} from "@romefrontend/codec-source-map";
import {sourceMapManager} from "@romefrontend/v8";
import internalModule = require("module");

import vm = require("vm");

import {
	Diagnostic,
	INTERNAL_ERROR_LOG_ADVICE,
	descriptions,
	truncateSourceText,
} from "@romefrontend/diagnostics";
import {AbsoluteFilePath} from "@romefrontend/path";
import {Position} from "@romefrontend/parser-core";
import {ob1Coerce1, ob1Number0, ob1Number0Neg1} from "@romefrontend/ob1";

type ExecuteMainOptions = {
	path: AbsoluteFilePath;
	code: string;
	args?: Array<string>;
	sourceMap?: SourceMapConsumer;
	globals?: UnknownObject;
};

export default async function executeMain(
	opts: ExecuteMainOptions,
): Promise<{
	syntaxError: undefined | Diagnostic;
	exitCode: undefined | number;
}> {
	const {path, code, sourceMap, globals, args = []} = opts;

	const filename = path.join();

	// Create global context
	const sandbox: UnknownObject = {
		process: {
			argv: [process.argv[0], filename, ...args],
			__proto__: process,
		},
		Buffer,
		clearImmediate,
		clearInterval,
		clearTimeout,
		setImmediate,
		setInterval,
		setTimeout,
		require: internalModule.createRequire
			? internalModule.createRequire(filename)
			: internalModule.createRequireFromPath(filename),
		console,
		__dirname: path.getParent().join(),
		__filename: filename,
		...globals,
	};
	sandbox.global = sandbox;
	const context = vm.createContext(sandbox);

	// Here we do some gymnastics to catch a syntax error to correctly identify it as being our fault
	let script;
	try {
		script = new vm.Script(
			code,
			{
				filename,
				displayErrors: true,
			},
		);
	} catch (err) {
		if (err instanceof SyntaxError && err.stack !== undefined) {
			const lineMatch = err.stack.match(/^(.*?):(\d+)/);
			if (lineMatch == null) {
				throw err;
			}

			const line = Number(lineMatch[2]);

			const pos: Position = {
				index: ob1Number0Neg1,
				column: ob1Number0,
				line: ob1Coerce1(line),
			};

			const syntaxError: Diagnostic = {
				description: {
					...descriptions.V8.SYNTAX_ERROR(err.message),
					advice: [INTERNAL_ERROR_LOG_ADVICE],
				},
				location: {
					start: pos,
					end: pos,
					filename,
					sourceText: truncateSourceText(code, pos, pos),
				},
			};
			return {syntaxError, exitCode: undefined};
		}

		throw err;
	}

	// Execute the script if there was no syntax error
	if (sourceMap !== undefined) {
		sourceMapManager.add(filename, sourceMap);
	}
	const res = await script.runInContext(context);

	let exitCode: undefined | number;

	if (typeof res === "object" && res != null && typeof res.main === "function") {
		const code = await Promise.resolve(res.main(args));
		if (typeof code === "number") {
			exitCode = code;
		}
	}

	return {syntaxError: undefined, exitCode};
}
