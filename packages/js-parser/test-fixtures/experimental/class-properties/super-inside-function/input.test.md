# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-properties > super-inside-function`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "experimental/class-properties/super-inside-function/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/class-properties/super-inside-function/input.js"
		end: Object {
			column: 0
			index: 55
			line: 6
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "super is only allowed in object methods and classes"}]}
			}
			location: Object {
				filename: "experimental/class-properties/super-inside-function/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 23
					index: 33
					line: 2
				}
				start: Object {
					column: 4
					index: 38
					line: 3
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "experimental/class-properties/super-inside-function/input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
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
				filename: "experimental/class-properties/super-inside-function/input.js"
				end: Object {
					column: 1
					index: 54
					line: 5
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "experimental/class-properties/super-inside-function/input.js"
					end: Object {
						column: 1
						index: 54
						line: 5
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "foo"
								loc: Object {
									filename: "experimental/class-properties/super-inside-function/input.js"
									identifierName: "foo"
									end: Object {
										column: 5
										index: 15
										line: 2
									}
									start: Object {
										column: 2
										index: 12
										line: 2
									}
								}
							}
							loc: Object {
								filename: "experimental/class-properties/super-inside-function/input.js"
								end: Object {
									column: 5
									index: 15
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						value: JSFunctionExpression {
							id: JSBindingIdentifier {
								name: "fn"
								loc: Object {
									filename: "experimental/class-properties/super-inside-function/input.js"
									identifierName: "fn"
									end: Object {
										column: 19
										index: 29
										line: 2
									}
									start: Object {
										column: 17
										index: 27
										line: 2
									}
								}
							}
							loc: Object {
								filename: "experimental/class-properties/super-inside-function/input.js"
								end: Object {
									column: 3
									index: 52
									line: 4
								}
								start: Object {
									column: 8
									index: 18
									line: 2
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
									filename: "experimental/class-properties/super-inside-function/input.js"
									end: Object {
										column: 21
										index: 31
										line: 2
									}
									start: Object {
										column: 19
										index: 29
										line: 2
									}
								}
							}
							body: JSBlockStatement {
								directives: Array []
								loc: Object {
									filename: "experimental/class-properties/super-inside-function/input.js"
									end: Object {
										column: 3
										index: 52
										line: 4
									}
									start: Object {
										column: 22
										index: 32
										line: 2
									}
								}
								body: Array [
									JSExpressionStatement {
										loc: Object {
											filename: "experimental/class-properties/super-inside-function/input.js"
											end: Object {
												column: 14
												index: 48
												line: 3
											}
											start: Object {
												column: 4
												index: 38
												line: 3
											}
										}
										expression: JSCallExpression {
											arguments: Array []
											loc: Object {
												filename: "experimental/class-properties/super-inside-function/input.js"
												end: Object {
													column: 13
													index: 47
													line: 3
												}
												start: Object {
													column: 4
													index: 38
													line: 3
												}
											}
											callee: JSMemberExpression {
												loc: Object {
													filename: "experimental/class-properties/super-inside-function/input.js"
													end: Object {
														column: 11
														index: 45
														line: 3
													}
													start: Object {
														column: 4
														index: 38
														line: 3
													}
												}
												object: JSSuper {
													loc: Object {
														filename: "experimental/class-properties/super-inside-function/input.js"
														end: Object {
															column: 9
															index: 43
															line: 3
														}
														start: Object {
															column: 4
															index: 38
															line: 3
														}
													}
												}
												property: JSStaticMemberProperty {
													value: JSIdentifier {
														name: "x"
														loc: Object {
															filename: "experimental/class-properties/super-inside-function/input.js"
															identifierName: "x"
															end: Object {
																column: 11
																index: 45
																line: 3
															}
															start: Object {
																column: 10
																index: 44
																line: 3
															}
														}
													}
													loc: Object {
														filename: "experimental/class-properties/super-inside-function/input.js"
														identifierName: "x"
														end: Object {
															column: 11
															index: 45
															line: 3
														}
														start: Object {
															column: 10
															index: 44
															line: 3
														}
													}
												}
											}
										}
									}
								]
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "experimental/class-properties/super-inside-function/input.js"
							end: Object {
								column: 3
								index: 52
								line: 4
							}
							start: Object {
								column: 2
								index: 12
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 12
								line: 2
							}
							loc: Object {
								filename: "experimental/class-properties/super-inside-function/input.js"
								end: Object {
									column: 5
									index: 15
									line: 2
								}
								start: Object {
									column: 2
									index: 12
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

 experimental/class-properties/super-inside-function/input.js:3:4 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ super is only allowed in object methods and classes

    1 │ class A {
    2 │   foo = function fn() {
    3 │     super.x();
    4 │   }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
