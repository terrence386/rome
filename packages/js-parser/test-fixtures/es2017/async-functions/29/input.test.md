# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 29`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/async-functions/29/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/29/input.js"
		end: Object {
			column: 0
			index: 43
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2017/async-functions/29/input.js"
				end: Object {
					column: 42
					index: 42
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
					filename: "es2017/async-functions/29/input.js"
					end: Object {
						column: 42
						index: 42
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
						id: JSBindingIdentifier {
							name: "foo"
							loc: Object {
								filename: "es2017/async-functions/29/input.js"
								identifierName: "foo"
								end: Object {
									column: 9
									index: 9
									line: 1
								}
								start: Object {
									column: 6
									index: 6
									line: 1
								}
							}
						}
						loc: Object {
							filename: "es2017/async-functions/29/input.js"
							end: Object {
								column: 41
								index: 41
								line: 1
							}
							start: Object {
								column: 6
								index: 6
								line: 1
							}
						}
						init: JSFunctionExpression {
							id: undefined
							loc: Object {
								filename: "es2017/async-functions/29/input.js"
								end: Object {
									column: 41
									index: 41
									line: 1
								}
								start: Object {
									column: 12
									index: 12
									line: 1
								}
							}
							body: JSBlockStatement {
								body: Array []
								directives: Array []
								loc: Object {
									filename: "es2017/async-functions/29/input.js"
									end: Object {
										column: 41
										index: 41
										line: 1
									}
									start: Object {
										column: 39
										index: 39
										line: 1
									}
								}
							}
							head: JSFunctionHead {
								async: false
								generator: false
								hasHoistedVars: false
								rest: undefined
								returnType: undefined
								thisType: undefined
								typeParameters: undefined
								loc: Object {
									filename: "es2017/async-functions/29/input.js"
									end: Object {
										column: 38
										index: 38
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
								params: Array [
									JSBindingObjectPattern {
										rest: undefined
										loc: Object {
											filename: "es2017/async-functions/29/input.js"
											end: Object {
												column: 37
												index: 37
												line: 1
											}
											start: Object {
												column: 21
												index: 21
												line: 1
											}
										}
										meta: JSPatternMeta {
											optional: undefined
											typeAnnotation: undefined
											loc: Object {
												filename: "es2017/async-functions/29/input.js"
												end: Object {
													column: 37
													index: 37
													line: 1
												}
												start: Object {
													column: 21
													index: 21
													line: 1
												}
											}
										}
										properties: Array [
											JSBindingObjectPatternProperty {
												key: JSStaticPropertyKey {
													value: JSIdentifier {
														name: "async"
														loc: Object {
															filename: "es2017/async-functions/29/input.js"
															identifierName: "async"
															end: Object {
																column: 28
																index: 28
																line: 1
															}
															start: Object {
																column: 23
																index: 23
																line: 1
															}
														}
													}
													loc: Object {
														filename: "es2017/async-functions/29/input.js"
														end: Object {
															column: 28
															index: 28
															line: 1
														}
														start: Object {
															column: 23
															index: 23
															line: 1
														}
													}
												}
												value: JSBindingAssignmentPattern {
													loc: Object {
														filename: "es2017/async-functions/29/input.js"
														end: Object {
															column: 35
															index: 35
															line: 1
														}
														start: Object {
															column: 23
															index: 23
															line: 1
														}
													}
													right: JSBooleanLiteral {
														value: true
														loc: Object {
															filename: "es2017/async-functions/29/input.js"
															end: Object {
																column: 35
																index: 35
																line: 1
															}
															start: Object {
																column: 31
																index: 31
																line: 1
															}
														}
													}
													left: JSBindingIdentifier {
														name: "async"
														loc: Object {
															filename: "es2017/async-functions/29/input.js"
															identifierName: "async"
															end: Object {
																column: 28
																index: 28
																line: 1
															}
															start: Object {
																column: 23
																index: 23
																line: 1
															}
														}
													}
												}
												loc: Object {
													filename: "es2017/async-functions/29/input.js"
													end: Object {
														column: 35
														index: 35
														line: 1
													}
													start: Object {
														column: 23
														index: 23
														line: 1
													}
												}
											}
										]
									}
								]
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
