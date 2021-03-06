import {CompilerContext, createVisitor, signals} from "@romefrontend/compiler";

import {descriptions} from "@romefrontend/diagnostics";
import {AnyNode} from "@romefrontend/ast";

const JSX_FILE_EXTENSIONS = [".jsx", ".tsx"];

function isJSXNode(node: AnyNode): boolean {
	return node.type === "JSXFragment" || node.type === "JSXElement";
}

function isJSXFile(context: CompilerContext): boolean {
	return JSX_FILE_EXTENSIONS.includes(context.path.getExtensions());
}

export default createVisitor({
	name: "jsx/fileExtension",
	enter(path) {
		const {node, context} = path;

		if (isJSXNode(node) && !isJSXFile(context)) {
			path.context.addNodeDiagnostic(
				node,
				descriptions.LINT.JSX_FILE_EXTENSION(
					context.path.getExtensions(),
					context.path.getExtensionlessBasename(),
				),
			);
		}

		return signals.retain;
	},
});
