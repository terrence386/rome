import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "@romefrontend/ast/utils";
import {AnyCSSValue} from "../../../css-parser/types";

export interface CSSDeclaration extends NodeBaseWithComments {
	readonly type: "CSSDeclaration";
	readonly name: string;
	readonly important: boolean;
	readonly value: Array<AnyCSSValue | undefined>;
}
export const cssDeclaration = createBuilder<CSSDeclaration>(
	"CSSDeclaration",
	{
		bindingKeys: {},
		visitorKeys: {
			value: true,
		},
	},
);
