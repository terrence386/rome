# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 361`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/361/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/361/input.js"
		end: Object {
			column: 0
			index: 25
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Can not use 'await' as identifier inside an async function"}]}
			}
			location: Object {
				filename: "es2015/uncategorised/361/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 13
					index: 13
					line: 1
				}
				start: Object {
					column: 8
					index: 8
					line: 1
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2015/uncategorised/361/input.js"
				end: Object {
					column: 24
					index: 24
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "es2015/uncategorised/361/input.js"
					end: Object {
						column: 24
						index: 24
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingObjectPattern {
							rest: undefined
							loc: Object {
								filename: "es2015/uncategorised/361/input.js"
								end: Object {
									column: 15
									index: 15
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "await"
											loc: Object {
												filename: "es2015/uncategorised/361/input.js"
												identifierName: "await"
												end: Object {
													column: 13
													index: 13
													line: 1
												}
												start: Object {
													column: 8
													index: 8
													line: 1
												}
											}
										}
										loc: Object {
											filename: "es2015/uncategorised/361/input.js"
											end: Object {
												column: 13
												index: 13
												line: 1
											}
											start: Object {
												column: 8
												index: 8
												line: 1
											}
										}
									}
									value: JSBindingIdentifier {
										name: "await"
										loc: Object {
											filename: "es2015/uncategorised/361/input.js"
											identifierName: "await"
											end: Object {
												column: 13
												index: 13
												line: 1
											}
											start: Object {
												column: 8
												index: 8
												line: 1
											}
										}
									}
									loc: Object {
										filename: "es2015/uncategorised/361/input.js"
										end: Object {
											column: 13
											index: 13
											line: 1
										}
										start: Object {
											column: 8
											index: 8
											line: 1
										}
									}
								}
							]
						}
						loc: Object {
							filename: "es2015/uncategorised/361/input.js"
							end: Object {
								column: 23
								index: 23
								line: 1
							}
							start: Object {
								column: 6
								index: 6
								line: 1
							}
						}
						init: JSCallExpression {
							arguments: Array []
							loc: Object {
								filename: "es2015/uncategorised/361/input.js"
								end: Object {
									column: 23
									index: 23
									line: 1
								}
								start: Object {
									column: 18
									index: 18
									line: 1
								}
							}
							callee: JSReferenceIdentifier {
								name: "foo"
								loc: Object {
									filename: "es2015/uncategorised/361/input.js"
									identifierName: "foo"
									end: Object {
										column: 21
										index: 21
										line: 1
									}
									start: Object {
										column: 18
										index: 18
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

 es2015/uncategorised/361/input.js:1:8 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Can not use 'await' as identifier inside an async function

    const { await } = foo();
            ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
