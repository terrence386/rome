# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > modules > duplicate-export-default`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/modules/duplicate-export-default/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2015/modules/duplicate-export-default/input.js"
		end: Object {
			column: 0
			index: 49
			line: 3
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
			location: Object {
				filename: "es2015/modules/duplicate-export-default/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 28
					index: 47
					line: 2
				}
				start: Object {
					column: 15
					index: 34
					line: 2
				}
			}
			description: Object {
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Only one default export allowed per module."}]}
				advice: Array [
					log {
						category: "info"
						text: MARKUP {parts: Array [RAW_MARKUP {value: "Defined already here"}]}
					}
					frame {
						location: Object {
							filename: "es2015/modules/duplicate-export-default/input.js"
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
				]
			}
		}
	]
	body: Array [
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "es2015/modules/duplicate-export-default/input.js"
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
			declaration: JSObjectExpression {
				properties: Array []
				loc: Object {
					filename: "es2015/modules/duplicate-export-default/input.js"
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
		}
		JSExportDefaultDeclaration {
			loc: Object {
				filename: "es2015/modules/duplicate-export-default/input.js"
				end: Object {
					column: 28
					index: 47
					line: 2
				}
				start: Object {
					column: 0
					index: 19
					line: 2
				}
			}
			declaration: JSFunctionDeclaration {
				id: JSBindingIdentifier {
					name: "*default*"
					loc: Object {
						filename: "es2015/modules/duplicate-export-default/input.js"
						end: Object {
							column: 28
							index: 47
							line: 2
						}
						start: Object {
							column: 15
							index: 34
							line: 2
						}
					}
				}
				loc: Object {
					filename: "es2015/modules/duplicate-export-default/input.js"
					end: Object {
						column: 28
						index: 47
						line: 2
					}
					start: Object {
						column: 15
						index: 34
						line: 2
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "es2015/modules/duplicate-export-default/input.js"
						end: Object {
							column: 28
							index: 47
							line: 2
						}
						start: Object {
							column: 26
							index: 45
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
						filename: "es2015/modules/duplicate-export-default/input.js"
						end: Object {
							column: 25
							index: 44
							line: 2
						}
						start: Object {
							column: 23
							index: 42
							line: 2
						}
					}
				}
			}
		}
		JSEmptyStatement {
			loc: Object {
				filename: "es2015/modules/duplicate-export-default/input.js"
				end: Object {
					column: 29
					index: 48
					line: 2
				}
				start: Object {
					column: 28
					index: 47
					line: 2
				}
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/modules/duplicate-export-default/input.js:2:15 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Only one default export allowed per module.

  ℹ Defined already here

  > 1 │ export default {};
      │                ^^
    2 │ export default function() {};

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
