# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `comments > regression > 11469`

### `ast`

```javascript
JSRoot {
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "comments/regression/11469/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "comments/regression/11469/input.js"
		end: Object {
			column: 0
			index: 194
			line: 19
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
			value: " this.member = 'value';"
			loc: Object {
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 29
					index: 50
					line: 3
				}
				start: Object {
					column: 4
					index: 25
					line: 3
				}
			}
		}
		CommentBlock {
			id: "1"
			value: " Trailing comment "
			loc: Object {
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 24
					index: 80
					line: 6
				}
				start: Object {
					column: 2
					index: 58
					line: 6
				}
			}
		}
		CommentLine {
			id: "2"
			value: " this.member = 'value';"
			loc: Object {
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 29
					index: 134
					line: 11
				}
				start: Object {
					column: 4
					index: 109
					line: 11
				}
			}
		}
		CommentLine {
			id: "3"
			value: " this.member = 'value';"
			loc: Object {
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 27
					index: 191
					line: 17
				}
				start: Object {
					column: 2
					index: 166
					line: 17
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "comments/regression/11469/input.js"
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
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 1
					index: 82
					line: 7
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
					filename: "comments/regression/11469/input.js"
					end: Object {
						column: 1
						index: 82
						line: 7
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "test"
								loc: Object {
									filename: "comments/regression/11469/input.js"
									identifierName: "test"
									end: Object {
										column: 6
										index: 16
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
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 6
									index: 16
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						trailingComments: Array ["1"]
						loc: Object {
							filename: "comments/regression/11469/input.js"
							end: Object {
								column: 3
								index: 54
								line: 4
							}
							start: Object {
								column: 2
								index: 12
								line: 2
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							trailingComments: undefined
							innerComments: Array ["0"]
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 3
									index: 54
									line: 4
								}
								start: Object {
									column: 9
									index: 19
									line: 2
								}
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
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 8
									index: 18
									line: 2
								}
								start: Object {
									column: 6
									index: 16
									line: 2
								}
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
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 6
									index: 16
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
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "B"
				loc: Object {
					filename: "comments/regression/11469/input.js"
					identifierName: "B"
					end: Object {
						column: 7
						index: 91
						line: 9
					}
					start: Object {
						column: 6
						index: 90
						line: 9
					}
				}
			}
			loc: Object {
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 1
					index: 140
					line: 13
				}
				start: Object {
					column: 0
					index: 84
					line: 9
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "comments/regression/11469/input.js"
					end: Object {
						column: 1
						index: 140
						line: 13
					}
					start: Object {
						column: 0
						index: 84
						line: 9
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "test"
								loc: Object {
									filename: "comments/regression/11469/input.js"
									identifierName: "test"
									end: Object {
										column: 6
										index: 100
										line: 10
									}
									start: Object {
										column: 2
										index: 96
										line: 10
									}
								}
							}
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 6
									index: 100
									line: 10
								}
								start: Object {
									column: 2
									index: 96
									line: 10
								}
							}
						}
						loc: Object {
							filename: "comments/regression/11469/input.js"
							end: Object {
								column: 3
								index: 138
								line: 12
							}
							start: Object {
								column: 2
								index: 96
								line: 10
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							trailingComments: Array []
							innerComments: Array ["2"]
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 3
									index: 138
									line: 12
								}
								start: Object {
									column: 9
									index: 103
									line: 10
								}
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
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 8
									index: 102
									line: 10
								}
								start: Object {
									column: 6
									index: 100
									line: 10
								}
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
								index: 96
								line: 10
							}
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 6
									index: 100
									line: 10
								}
								start: Object {
									column: 2
									index: 96
									line: 10
								}
							}
						}
					}
				]
			}
		}
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: Object {
					filename: "comments/regression/11469/input.js"
					identifierName: "C"
					end: Object {
						column: 7
						index: 149
						line: 15
					}
					start: Object {
						column: 6
						index: 148
						line: 15
					}
				}
			}
			loc: Object {
				filename: "comments/regression/11469/input.js"
				end: Object {
					column: 1
					index: 193
					line: 18
				}
				start: Object {
					column: 0
					index: 142
					line: 15
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "comments/regression/11469/input.js"
					end: Object {
						column: 1
						index: 193
						line: 18
					}
					start: Object {
						column: 0
						index: 142
						line: 15
					}
				}
				body: Array [
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "test"
								loc: Object {
									filename: "comments/regression/11469/input.js"
									identifierName: "test"
									end: Object {
										column: 6
										index: 158
										line: 16
									}
									start: Object {
										column: 2
										index: 154
										line: 16
									}
								}
							}
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 6
									index: 158
									line: 16
								}
								start: Object {
									column: 2
									index: 154
									line: 16
								}
							}
						}
						trailingComments: Array ["3"]
						loc: Object {
							filename: "comments/regression/11469/input.js"
							end: Object {
								column: 11
								index: 163
								line: 16
							}
							start: Object {
								column: 2
								index: 154
								line: 16
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							trailingComments: undefined
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 11
									index: 163
									line: 16
								}
								start: Object {
									column: 9
									index: 161
									line: 16
								}
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
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 8
									index: 160
									line: 16
								}
								start: Object {
									column: 6
									index: 158
									line: 16
								}
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
								index: 154
								line: 16
							}
							loc: Object {
								filename: "comments/regression/11469/input.js"
								end: Object {
									column: 6
									index: 158
									line: 16
								}
								start: Object {
									column: 2
									index: 154
									line: 16
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
