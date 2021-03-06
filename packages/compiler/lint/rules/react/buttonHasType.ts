import {Scope, createVisitor, signals} from "@romefrontend/compiler";
import {descriptions} from "@romefrontend/diagnostics";
import {AnyNode} from "@romefrontend/ast";
import {
	getJSXAttribute,
	hasJSXAttribute,
	isJSXElement,
	tryStaticEvaluation,
} from "@romefrontend/js-ast-utils";
import {
	analyzeCreateElementProp,
	getCreateElementType,
} from "../../utils/react";

const BUTTON_TYPE_REGEX = /^(reset)|(submit)|(button)$/;

function createElementMissingType(node: AnyNode, scope: Scope) {
	if (getCreateElementType(node, scope) !== "button") {
		return;
	}
	const elementType = analyzeCreateElementProp(node, scope, "type");
	return typeof elementType !== "string" || !BUTTON_TYPE_REGEX.test(elementType);
}

function jsxMissingType(node: AnyNode, scope: Scope) {
	if (!isJSXElement(node, "button")) {
		return false;
	}
	if (!hasJSXAttribute(node, "type")) {
		return true;
	}
	const valueNode = getJSXAttribute(node, "type");
	if (!valueNode || !valueNode.value) {
		return false;
	}

	let valueTarget =
		valueNode.value.type === "JSXExpressionContainer"
			? valueNode.value.expression
			: valueNode.value;

	const {value} = tryStaticEvaluation(valueTarget, scope);
	if (typeof value !== "string" || !BUTTON_TYPE_REGEX.test(value)) {
		return true;
	}
	return false;
}

export default createVisitor({
	name: "react/buttonHasType",
	enter(path) {
		const {node, scope} = path;

		if (createElementMissingType(node, scope) || jsxMissingType(node, scope)) {
			path.context.addNodeDiagnostic(
				(isJSXElement(node, "button") && getJSXAttribute(node, "type")) || node,
				descriptions.LINT.REACT_BUTTON_HAS_TYPE,
			);
		}

		return signals.retain;
	},
});
