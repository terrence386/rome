/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ServerRequest} from "@romefrontend/core";
import {createServerCommand} from "../commands";
import {commandCategories} from "../../common/commands";
import {readFileText} from "@romefrontend/fs";
import {parseJSON, stringifyJSON} from "@romefrontend/codec-json";
import {markup} from "@romefrontend/markup";

export default createServerCommand({
	category: commandCategories.INTERNAL,
	description: markup`TODO`,
	usage: "",
	examples: [],
	defineFlags() {
		return {};
	},
	async callback(req: ServerRequest): Promise<undefined | string> {
		const {reporter} = req;
		const path = await req.resolveEntryAssertPathArg(0);

		const file = await readFileText(path);
		const value = parseJSON({
			path,
			input: file,
		});

		const json = stringifyJSON(value);
		reporter.write(json);
		return json;
	},
});
