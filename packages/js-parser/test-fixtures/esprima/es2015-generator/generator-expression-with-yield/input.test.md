# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-generator > generator-expression-with-yield`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
		end: Object {
			column: 0
			index: 27
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
				end: Object {
					column: 26
					index: 26
					line: 1
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
					filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
					end: Object {
						column: 25
						index: 25
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				head: JSFunctionHead {
					async: false
					generator: true
					hasHoistedVars: false
					params: Array []
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
						end: Object {
							column: 12
							index: 12
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
				}
				body: JSBlockStatement {
					directives: Array []
					loc: Object {
						filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
						end: Object {
							column: 25
							index: 25
							line: 1
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
					body: Array [
						JSExpressionStatement {
							loc: Object {
								filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
								end: Object {
									column: 23
									index: 23
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
							expression: JSYieldExpression {
								delegate: false
								loc: Object {
									filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
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
									value: 3
									format: undefined
									loc: Object {
										filename: "esprima/es2015-generator/generator-expression-with-yield/input.js"
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
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
