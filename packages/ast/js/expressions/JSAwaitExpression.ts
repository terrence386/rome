/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface JSAwaitExpression extends NodeBaseWithComments {
	readonly type: "JSAwaitExpression";
	readonly argument?: AnyJSExpression;
}

export const jsAwaitExpression = createBuilder<JSAwaitExpression>(
	"JSAwaitExpression",
	{
		bindingKeys: {},
		visitorKeys: {
			argument: true,
		},
	},
);
