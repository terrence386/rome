# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 187`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/uncategorised/187/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/187/input.js"
		end: Object {
			column: 18
			index: 18
			line: 1
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
				filename: "es2015/uncategorised/187/input.js"
				end: Object {
					column: 18
					index: 18
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "es2015/uncategorised/187/input.js"
					end: Object {
						column: 18
						index: 18
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				right: JSReferenceIdentifier {
					name: "d"
					loc: Object {
						filename: "es2015/uncategorised/187/input.js"
						identifierName: "d"
						end: Object {
							column: 18
							index: 18
							line: 1
						}
						start: Object {
							column: 17
							index: 17
							line: 1
						}
					}
				}
				left: JSAssignmentArrayPattern {
					loc: Object {
						filename: "es2015/uncategorised/187/input.js"
						end: Object {
							column: 14
							index: 14
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					elements: Array [
						JSAssignmentIdentifier {
							name: "a"
							loc: Object {
								filename: "es2015/uncategorised/187/input.js"
								identifierName: "a"
								end: Object {
									column: 2
									index: 2
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
							}
						}
					]
					rest: JSAssignmentArrayPattern {
						rest: undefined
						loc: Object {
							filename: "es2015/uncategorised/187/input.js"
							end: Object {
								column: 13
								index: 13
								line: 1
							}
							start: Object {
								column: 7
								index: 7
								line: 1
							}
						}
						elements: Array [
							JSAssignmentIdentifier {
								name: "b"
								loc: Object {
									filename: "es2015/uncategorised/187/input.js"
									identifierName: "b"
									end: Object {
										column: 9
										index: 9
										line: 1
									}
									start: Object {
										column: 8
										index: 8
										line: 1
									}
								}
							}
							JSAssignmentIdentifier {
								name: "c"
								loc: Object {
									filename: "es2015/uncategorised/187/input.js"
									identifierName: "c"
									end: Object {
										column: 12
										index: 12
										line: 1
									}
									start: Object {
										column: 11
										index: 11
										line: 1
									}
								}
							}
						]
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
