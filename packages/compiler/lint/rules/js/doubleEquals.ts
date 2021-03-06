/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {createVisitor, signals} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";
import {markup} from "@romefrontend/markup";

const SUGGESTION_DESCRIPTION = markup`This may be unsafe if you are relying on type coercion`;

export default createVisitor({
	name: "js/doubleEquals",
	enter(path) {
		const {node} = path;

		if (
			node.type === "JSBinaryExpression" &&
			node.right.type !== "JSNullLiteral" &&
			node.left.type !== "JSNullLiteral"
		) {
			if (node.operator === "!=") {
				return path.addFixableDiagnostic(
					{
						suggestions: [
							{
								title: markup`Use !==`,
								description: SUGGESTION_DESCRIPTION,
								fixed: signals.replace({
									...node,
									operator: "!==",
								}),
							},
						],
					},
					descriptions.LINT.JS_NEGATE_DOUBLE_EQUALS,
				);
			}

			if (node.operator === "==") {
				return path.addFixableDiagnostic(
					{
						suggestions: [
							{
								title: markup`Use ===`,
								description: SUGGESTION_DESCRIPTION,
								fixed: signals.replace({
									...node,
									operator: "===",
								}),
							},
						],
					},
					descriptions.LINT.JS_DOUBLE_EQUALS,
				);
			}
		}

		return signals.retain;
	},
});
