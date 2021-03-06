/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface JSRegExpWordBoundaryCharacter extends NodeBaseWithComments {
	readonly type: "JSRegExpWordBoundaryCharacter";
}

export const jsRegExpWordBoundaryCharacter = createBuilder<JSRegExpWordBoundaryCharacter>(
	"JSRegExpWordBoundaryCharacter",
	{
		bindingKeys: {},
		visitorKeys: {},
	},
);
