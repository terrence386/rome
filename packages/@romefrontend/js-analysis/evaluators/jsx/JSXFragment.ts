/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from "../../scopes";
import {AnyNode, JSXFragment, jsxFragment} from "@romefrontend/ast";

export default function JSXFragment(node: AnyNode, scope: Scope) {
	node = jsxFragment.assert(node);
	scope;
	throw new Error("unimplemented");
}