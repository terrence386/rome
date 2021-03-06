import {Path, createVisitor, signals} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";
import {doesNodeMatchPattern, isConditional} from "@romefrontend/js-ast-utils";
import {insideClassComponent} from "../../utils/react";

function inComponentWillUpdate(path: Path): boolean {
	const func = path.findAncestry(({node}) => isConditional(node)) !== undefined;
	return (
		!func &&
		path.findAncestry(({node}) =>
			node.type === "JSClassMethod" &&
			node.key.type === "JSStaticPropertyKey" &&
			node.key.value.type === "JSIdentifier" &&
			(node.key.value.name === "componentWillUpdate" ||
			node.key.value.name === "UNSAFE_componentWillUpdate")
		) !== undefined
	);
}

export default createVisitor({
	name: "react/noWillUpdateSetState",
	enter(path) {
		const {node} = path;

		if (
			insideClassComponent(path) &&
			doesNodeMatchPattern(node, "this.setState") &&
			inComponentWillUpdate(path)
		) {
			path.context.addNodeDiagnostic(
				node,
				descriptions.LINT.REACT_NO_WILL_UPDATE_SET_STATE,
			);
		}

		return signals.retain;
	},
});
