# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 311`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 5
			index: 36
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	comments: Array [
		CommentLine {
			id: "0"
			value: " Comment"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 20
					index: 20
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 5
					index: 36
					line: 2
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSFunctionExpression {
				id: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 4
						index: 35
						line: 2
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 11
							index: 11
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 4
							index: 35
							line: 2
						}
						start: Object {
							column: 11
							index: 11
							line: 1
						}
					}
					body: Array [
						JSReturnStatement {
							argument: undefined
							trailingComments: Array ["0"]
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 19
									index: 19
									line: 1
								}
								start: Object {
									column: 13
									index: 13
									line: 1
								}
							}
						}
						JSExpressionStatement {
							leadingComments: Array ["0"]
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 2
									index: 33
									line: 2
								}
								start: Object {
									column: 0
									index: 31
									line: 2
								}
							}
							expression: JSReferenceIdentifier {
								name: "x"
								leadingComments: undefined
								loc: Object {
									filename: "input.js"
									identifierName: "x"
									end: Object {
										column: 1
										index: 32
										line: 2
									}
									start: Object {
										column: 0
										index: 31
										line: 2
									}
								}
							}
						}
					]
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