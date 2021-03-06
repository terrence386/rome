import {parseCSS} from "@romefrontend/css-parser";
import {createFixtureTests} from "@romefrontend/test-helpers";
import {removeCarriageReturn} from "@romefrontend/string-utils";

const promise = createFixtureTests(async (fixture, t) => {
	const {files} = fixture;

	const inputFile = files.get("input.css");
	if (inputFile === undefined) {
		throw new Error(`The fixture ${fixture.dir} did not have an input.css`);
	}

	const filename = inputFile.relative;

	const inputContent = removeCarriageReturn(inputFile.content.toString());

	const ast = parseCSS({
		input: inputContent,
		path: filename,
	});

	const outputFile = inputFile.absolute.getParent().append(
		inputFile.absolute.getExtensionlessBasename(),
	).join();

	t.snapshot(ast, undefined, {filename: outputFile});
});

// @ts-ignore Doesn't support top-level await
await promise;
