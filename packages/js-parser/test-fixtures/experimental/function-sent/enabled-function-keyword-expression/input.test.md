# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > function-sent > enabled-function-keyword-expression`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
		end: Object {
			column: 0
			index: 44
			line: 4
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
				message: MARKUP {
					parts: Array [
						RAW_MARKUP {value: "Unexpected token, expected "}
						","
					]
				}
			}
			location: Object {
				filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 20
					index: 38
					line: 2
				}
				start: Object {
					column: 19
					index: 37
					line: 2
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "foo"
				loc: Object {
					filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
					identifierName: "foo"
					end: Object {
						column: 13
						index: 13
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
				filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
				end: Object {
					column: 1
					index: 43
					line: 3
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
					filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
					end: Object {
						column: 15
						index: 15
						line: 1
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
					end: Object {
						column: 1
						index: 43
						line: 3
					}
					start: Object {
						column: 16
						index: 16
						line: 1
					}
				}
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
							end: Object {
								column: 18
								index: 36
								line: 2
							}
							start: Object {
								column: 2
								index: 20
								line: 2
							}
						}
						expression: JSCallExpression {
							arguments: Array []
							loc: Object {
								filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
								end: Object {
									column: 18
									index: 36
									line: 2
								}
								start: Object {
									column: 3
									index: 21
									line: 2
								}
							}
							callee: JSMetaProperty {
								loc: Object {
									filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
									end: Object {
										column: 16
										index: 34
										line: 2
									}
									start: Object {
										column: 3
										index: 21
										line: 2
									}
								}
								meta: JSIdentifier {
									name: "function"
									loc: Object {
										filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
										identifierName: "function"
										end: Object {
											column: 11
											index: 29
											line: 2
										}
										start: Object {
											column: 3
											index: 21
											line: 2
										}
									}
								}
								property: JSIdentifier {
									name: "sent"
									loc: Object {
										filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
										identifierName: "sent"
										end: Object {
											column: 16
											index: 34
											line: 2
										}
										start: Object {
											column: 12
											index: 30
											line: 2
										}
									}
								}
							}
						}
					}
					JSBlockStatement {
						body: Array []
						directives: Array []
						loc: Object {
							filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
							end: Object {
								column: 21
								index: 39
								line: 2
							}
							start: Object {
								column: 19
								index: 37
								line: 2
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
							end: Object {
								column: 23
								index: 41
								line: 2
							}
							start: Object {
								column: 21
								index: 39
								line: 2
							}
						}
						expression: JSReferenceIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: Object {
								filename: "experimental/function-sent/enabled-function-keyword-expression/input.js"
								end: Object {
									column: 22
									index: 40
									line: 2
								}
								start: Object {
									column: 21
									index: 39
									line: 2
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

 experimental/function-sent/enabled-function-keyword-expression/input.js:2:19 parse/js ━━━━━━━━━━━━━

  ✖ Unexpected token, expected ,

    1 │ function* foo() {
  > 2 │   (function.sent() {});
      │                    ^
    3 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
