# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > yield-star-inside-generator-function-declaration`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
		end: Object {
			column: 30
			index: 30
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "test"
				loc: Object {
					filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
					identifierName: "test"
					end: Object {
						column: 14
						index: 14
						line: 1
					}
					start: Object {
						column: 10
						index: 10
						line: 1
					}
				}
			}
			loc: Object {
				filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
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
					filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
					end: Object {
						column: 17
						index: 17
						line: 1
					}
					start: Object {
						column: 15
						index: 15
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
					end: Object {
						column: 30
						index: 30
						line: 1
					}
					start: Object {
						column: 18
						index: 18
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
							end: Object {
								column: 28
								index: 28
								line: 1
							}
							start: Object {
								column: 20
								index: 20
								line: 1
							}
						}
						expression: JSYieldExpression {
							delegate: true
							loc: Object {
								filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
								end: Object {
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 20
									index: 20
									line: 1
								}
							}
							argument: JSReferenceIdentifier {
								name: "v"
								loc: Object {
									filename: "es2015/yield/yield-star-inside-generator-function-declaration/input.js"
									identifierName: "v"
									end: Object {
										column: 28
										index: 28
										line: 1
									}
									start: Object {
										column: 27
										index: 27
										line: 1
									}
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
