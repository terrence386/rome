# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > yield > parameter-name-strict-body`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/yield/parameter-name-strict-body/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/yield/parameter-name-strict-body/input.js"
		end: Object {
			column: 36
			index: 36
			line: 1
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
						"yield"
						RAW_MARKUP {value: " is a reserved word"}
					]
				}
			}
			location: Object {
				filename: "es2015/yield/parameter-name-strict-body/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 17
					index: 17
					line: 1
				}
				start: Object {
					column: 12
					index: 12
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "fn"
				loc: Object {
					filename: "es2015/yield/parameter-name-strict-body/input.js"
					identifierName: "fn"
					end: Object {
						column: 11
						index: 11
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
				filename: "es2015/yield/parameter-name-strict-body/input.js"
				end: Object {
					column: 36
					index: 36
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
				loc: Object {
					filename: "es2015/yield/parameter-name-strict-body/input.js"
					end: Object {
						column: 36
						index: 36
						line: 1
					}
					start: Object {
						column: 19
						index: 19
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "es2015/yield/parameter-name-strict-body/input.js"
							end: Object {
								column: 34
								index: 34
								line: 1
							}
							start: Object {
								column: 21
								index: 21
								line: 1
							}
						}
					}
				]
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
					filename: "es2015/yield/parameter-name-strict-body/input.js"
					end: Object {
						column: 18
						index: 18
						line: 1
					}
					start: Object {
						column: 11
						index: 11
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "yield"
						loc: Object {
							filename: "es2015/yield/parameter-name-strict-body/input.js"
							identifierName: "yield"
							end: Object {
								column: 17
								index: 17
								line: 1
							}
							start: Object {
								column: 12
								index: 12
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "es2015/yield/parameter-name-strict-body/input.js"
								end: Object {
									column: 17
									index: 17
									line: 1
								}
								start: Object {
									column: 12
									index: 12
									line: 1
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

 es2015/yield/parameter-name-strict-body/input.js:1:12 parse/js ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ yield is a reserved word

    function fn(yield) { "use strict"; }
                ^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
