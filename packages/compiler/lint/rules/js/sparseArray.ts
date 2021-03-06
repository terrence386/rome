/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createVisitor, signals} from "@romefrontend/compiler";
import {jsReferenceIdentifier} from "@romefrontend/ast";
import {descriptions} from "@romefrontend/diagnostics";

export default createVisitor({
	name: "js/sparseArray",
	enter(path) {
		const {node, parent} = path;

		if (node.type === "JSArrayHole" && parent.type === "JSArrayExpression") {
			return path.addFixableDiagnostic(
				{
					fixed: signals.replace(
						jsReferenceIdentifier.create({name: "undefined"}),
					),
				},
				descriptions.LINT.JS_SPARSE_ARRAY,
			);
		}

		return signals.retain;
	},
});
