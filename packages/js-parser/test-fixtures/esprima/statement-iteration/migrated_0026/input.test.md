# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-iteration > migrated_0026`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/statement-iteration/migrated_0026/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/statement-iteration/migrated_0026/input.js"
		end: Object {
			column: 0
			index: 17
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSForInStatement {
			loc: Object {
				filename: "esprima/statement-iteration/migrated_0026/input.js"
				end: Object {
					column: 16
					index: 16
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: JSEmptyStatement {
				loc: Object {
					filename: "esprima/statement-iteration/migrated_0026/input.js"
					end: Object {
						column: 16
						index: 16
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
			}
			right: JSReferenceIdentifier {
				name: "a"
				loc: Object {
					filename: "esprima/statement-iteration/migrated_0026/input.js"
					identifierName: "a"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
			}
			left: JSMemberExpression {
				loc: Object {
					filename: "esprima/statement-iteration/migrated_0026/input.js"
					end: Object {
						column: 9
						index: 9
						line: 1
					}
					start: Object {
						column: 5
						index: 5
						line: 1
					}
				}
				object: JSReferenceIdentifier {
					name: "a"
					loc: Object {
						filename: "esprima/statement-iteration/migrated_0026/input.js"
						identifierName: "a"
						end: Object {
							column: 6
							index: 6
							line: 1
						}
						start: Object {
							column: 5
							index: 5
							line: 1
						}
					}
				}
				property: JSStaticMemberProperty {
					value: JSIdentifier {
						name: "in"
						loc: Object {
							filename: "esprima/statement-iteration/migrated_0026/input.js"
							identifierName: "in"
							end: Object {
								column: 9
								index: 9
								line: 1
							}
							start: Object {
								column: 7
								index: 7
								line: 1
							}
						}
					}
					loc: Object {
						filename: "esprima/statement-iteration/migrated_0026/input.js"
						identifierName: "in"
						end: Object {
							column: 9
							index: 9
							line: 1
						}
						start: Object {
							column: 7
							index: 7
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
