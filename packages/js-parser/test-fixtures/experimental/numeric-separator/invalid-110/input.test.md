# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > numeric-separator > invalid-110`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "experimental/numeric-separator/invalid-110/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/numeric-separator/invalid-110/input.js"
		end: Object {
			column: 0
			index: 9
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Invalid or unexpected int token"}]}
			}
			location: Object {
				filename: "experimental/numeric-separator/invalid-110/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 1
					index: 1
					line: 1
				}
				start: Object {
					column: 1
					index: 1
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "experimental/numeric-separator/invalid-110/input.js"
				end: Object {
					column: 8
					index: 8
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSNumericLiteral {
				value: 17
				format: "hex"
				loc: Object {
					filename: "experimental/numeric-separator/invalid-110/input.js"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/numeric-separator/invalid-110/input.js:1:1 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid or unexpected int token

    (0x1_1_)
     ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
