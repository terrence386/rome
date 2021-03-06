/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {JSImportSpecifierLocal, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface JSImportNamespaceSpecifier extends NodeBaseWithComments {
	readonly type: "JSImportNamespaceSpecifier";
	readonly local: JSImportSpecifierLocal;
}

export const jsImportNamespaceSpecifier = createBuilder<JSImportNamespaceSpecifier>(
	"JSImportNamespaceSpecifier",
	{
		bindingKeys: {
			local: true,
		},
		visitorKeys: {
			local: true,
		},
	},
);
