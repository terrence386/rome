# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > top-level-await > export-default`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "experimental/top-level-await/export-default/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "experimental/top-level-await/export-default/input.js"
		end: Object {
			column: 23
			index: 23
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "experimental/top-level-await/export-default/input.js"
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSAwaitExpression {
				loc: Object {
					filename: "experimental/top-level-await/export-default/input.js"
					end: Object {
						column: 22
						index: 22
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
				argument: JSNumericLiteral {
					value: 0
					format: undefined
					loc: Object {
						filename: "experimental/top-level-await/export-default/input.js"
						end: Object {
							column: 22
							index: 22
							line: 1
						}
						start: Object {
							column: 21
							index: 21
							line: 1
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
