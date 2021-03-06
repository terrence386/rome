/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {TSAsExpression} from "@romefrontend/ast";
import {Builder, Token, concat, space} from "@romefrontend/formatter";

export default function TSAsExpression(
	builder: Builder,
	node: TSAsExpression,
): Token {
	if (builder.options.typeAnnotations) {
		return concat([
			builder.tokenize(node.expression, node),
			space,
			"as",
			space,
			builder.tokenize(node.typeAnnotation, node),
		]);
	} else {
		return builder.tokenize(node.expression, node);
	}
}
