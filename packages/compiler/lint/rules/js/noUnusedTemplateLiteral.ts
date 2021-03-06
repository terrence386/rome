import {createVisitor, signals} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";
import {JSTemplateElement, jsStringLiteral} from "@romefrontend/ast";

function containsSpecialCharacters(node: JSTemplateElement): boolean {
	return /['"\n]/.test(node.raw);
}

export default createVisitor({
	name: "js/jsNoUnusedTemplateLiteral",
	enter(path) {
		const {node} = path;

		if (
			node.type === "JSTemplateLiteral" &&
			path.parent.type !== "JSTaggedTemplateExpression" &&
			node.expressions.length === 0 &&
			!node.quasis.some(containsSpecialCharacters)
		) {
			return path.addFixableDiagnostic(
				{
					fixed: signals.replace(
						jsStringLiteral.quick(node.quasis.map((node) => node.cooked).join()),
					),
				},
				descriptions.LINT.JS_NO_UNUSED_TEMPLATE_LITERAL,
			);
		}

		return signals.retain;
	},
});
