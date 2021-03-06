import {createVisitor, signals} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";
import {JSXElement} from "@romefrontend/ast";
import {hasJSXAttribute, isJSXElement} from "@romefrontend/js-ast-utils";
import {
	ARIAProperty,
	ariaPropsMap,
} from "@romefrontend/compiler/lint/utils/aria";

function hasAriaAttributes(node: JSXElement): boolean {
	const hasRole = hasJSXAttribute(node, "role");

	return (
		hasRole ||
		node.attributes.some((attr) =>
			attr.type === "JSXAttribute" &&
			attr.name.type === "JSXIdentifier" &&
			ariaPropsMap.has((attr.name.name as ARIAProperty))
		)
	);
}

export default createVisitor({
	name: "jsx-a11y/ariaUnsupportedElements",
	enter(path) {
		const {node} = path;

		if (
			!(isJSXElement(node, "meta") ||
			isJSXElement(node, "html") ||
			isJSXElement(node, "script") ||
			isJSXElement(node, "style"))
		) {
			return signals.retain;
		}

		if (hasAriaAttributes(node)) {
			path.context.addNodeDiagnostic(
				node,
				descriptions.LINT.JSX_A11Y_ARIA_UNSUPPORTED_ELEMENTS,
			);
		}

		return signals.retain;
	},
});
