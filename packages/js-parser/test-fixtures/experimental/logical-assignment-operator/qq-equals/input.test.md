# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > logical-assignment-operator > qq-equals`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "experimental/logical-assignment-operator/qq-equals/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/logical-assignment-operator/qq-equals/input.js"
		end: Object {
			column: 0
			index: 22
			line: 3
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
				filename: "experimental/logical-assignment-operator/qq-equals/input.js"
				end: Object {
					column: 8
					index: 8
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "??="
				loc: Object {
					filename: "experimental/logical-assignment-operator/qq-equals/input.js"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "a"
					loc: Object {
						filename: "experimental/logical-assignment-operator/qq-equals/input.js"
						identifierName: "a"
						end: Object {
							column: 1
							index: 1
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
				}
				right: JSReferenceIdentifier {
					name: "b"
					loc: Object {
						filename: "experimental/logical-assignment-operator/qq-equals/input.js"
						identifierName: "b"
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
			}
		}
		JSExpressionStatement {
			loc: Object {
				filename: "experimental/logical-assignment-operator/qq-equals/input.js"
				end: Object {
					column: 12
					index: 21
					line: 2
				}
				start: Object {
					column: 0
					index: 9
					line: 2
				}
			}
			expression: JSAssignmentExpression {
				operator: "??="
				loc: Object {
					filename: "experimental/logical-assignment-operator/qq-equals/input.js"
					end: Object {
						column: 11
						index: 20
						line: 2
					}
					start: Object {
						column: 0
						index: 9
						line: 2
					}
				}
				right: JSReferenceIdentifier {
					name: "b"
					loc: Object {
						filename: "experimental/logical-assignment-operator/qq-equals/input.js"
						identifierName: "b"
						end: Object {
							column: 11
							index: 20
							line: 2
						}
						start: Object {
							column: 10
							index: 19
							line: 2
						}
					}
				}
				left: JSMemberExpression {
					loc: Object {
						filename: "experimental/logical-assignment-operator/qq-equals/input.js"
						end: Object {
							column: 5
							index: 14
							line: 2
						}
						start: Object {
							column: 0
							index: 9
							line: 2
						}
					}
					object: JSReferenceIdentifier {
						name: "obj"
						loc: Object {
							filename: "experimental/logical-assignment-operator/qq-equals/input.js"
							identifierName: "obj"
							end: Object {
								column: 3
								index: 12
								line: 2
							}
							start: Object {
								column: 0
								index: 9
								line: 2
							}
						}
					}
					property: JSStaticMemberProperty {
						value: JSIdentifier {
							name: "a"
							loc: Object {
								filename: "experimental/logical-assignment-operator/qq-equals/input.js"
								identifierName: "a"
								end: Object {
									column: 5
									index: 14
									line: 2
								}
								start: Object {
									column: 4
									index: 13
									line: 2
								}
							}
						}
						loc: Object {
							filename: "experimental/logical-assignment-operator/qq-equals/input.js"
							identifierName: "a"
							end: Object {
								column: 5
								index: 14
								line: 2
							}
							start: Object {
								column: 4
								index: 13
								line: 2
							}
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
