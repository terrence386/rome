import {CSSBlock, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "@romefrontend/ast/utils";
import {AnyCSSValue} from "../../../css-parser/types";

export interface CSSAtRule extends NodeBaseWithComments {
	readonly type: "CSSAtRule";
	readonly name: string;
	readonly prelude: Array<AnyCSSValue>;
	readonly block?: CSSBlock;
}
export const cssAtRule = createBuilder<CSSAtRule>(
	"CSSAtRule",
	{
		bindingKeys: {},
		visitorKeys: {
			block: true,
			prelude: true,
		},
	},
);
