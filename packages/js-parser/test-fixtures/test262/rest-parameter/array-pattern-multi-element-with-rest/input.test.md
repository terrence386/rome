# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `test262 > rest-parameter > array-pattern-multi-element-with-rest`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
		end: Object {
			column: 0
			index: 50
			line: 2
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
				name: "multiElementWithRest"
				loc: Object {
					filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
					identifierName: "multiElementWithRest"
					end: Object {
						column: 29
						index: 29
						line: 1
					}
					start: Object {
						column: 9
						index: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
				end: Object {
					column: 49
					index: 49
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
					end: Object {
						column: 49
						index: 49
						line: 1
					}
					start: Object {
						column: 47
						index: 47
						line: 1
					}
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
					end: Object {
						column: 46
						index: 46
						line: 1
					}
					start: Object {
						column: 29
						index: 29
						line: 1
					}
				}
				rest: JSBindingArrayPattern {
					loc: Object {
						filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
						end: Object {
							column: 45
							index: 45
							line: 1
						}
						start: Object {
							column: 33
							index: 33
							line: 1
						}
					}
					meta: JSPatternMeta {
						optional: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
							end: Object {
								column: 45
								index: 45
								line: 1
							}
							start: Object {
								column: 33
								index: 33
								line: 1
							}
						}
					}
					rest: JSBindingIdentifier {
						name: "c"
						loc: Object {
							filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
							identifierName: "c"
							end: Object {
								column: 44
								index: 44
								line: 1
							}
							start: Object {
								column: 43
								index: 43
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
								end: Object {
									column: 44
									index: 44
									line: 1
								}
								start: Object {
									column: 43
									index: 43
									line: 1
								}
							}
						}
					}
					elements: Array [
						JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
								identifierName: "a"
								end: Object {
									column: 35
									index: 35
									line: 1
								}
								start: Object {
									column: 34
									index: 34
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
									end: Object {
										column: 35
										index: 35
										line: 1
									}
									start: Object {
										column: 34
										index: 34
										line: 1
									}
								}
							}
						}
						JSBindingIdentifier {
							name: "b"
							loc: Object {
								filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
								identifierName: "b"
								end: Object {
									column: 38
									index: 38
									line: 1
								}
								start: Object {
									column: 37
									index: 37
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "test262/rest-parameter/array-pattern-multi-element-with-rest/input.js"
									end: Object {
										column: 38
										index: 38
										line: 1
									}
									start: Object {
										column: 37
										index: 37
										line: 1
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
