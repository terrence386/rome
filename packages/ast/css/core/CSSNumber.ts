import {NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "@romefrontend/ast/utils";

export interface CSSNumber extends NodeBaseWithComments {
	readonly type: "CSSNumber";
	readonly value: number;
}
export const cssNumber = createBuilder<CSSNumber>(
	"CSSNumber",
	{
		bindingKeys: {},
		visitorKeys: {
			value: true,
		},
	},
);
