# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > params-invalid-rest-trailing-comma`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
		end: Object {
			column: 0
			index: 21
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
				message: MARKUP {parts: Array [RAW_MARKUP {value: "The rest element has to be the last element when destructuring"}]}
			}
			location: Object {
				filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 12
					index: 12
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
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
				end: Object {
					column: 20
					index: 20
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
					end: Object {
						column: 19
						index: 19
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
						filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
						end: Object {
							column: 19
							index: 19
							line: 1
						}
						start: Object {
							column: 17
							index: 17
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: true
					hasHoistedVars: false
					params: Array []
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					rest: JSBindingIdentifier {
						name: "a"
						loc: Object {
							filename: "es2017/async-functions/params-invalid-rest-trailing-comma/input.js"
							identifierName: "a"
							end: Object {
								column: 11
								index: 11
								line: 1
							}
							start: Object {
								column: 10
								index: 10
								line: 1
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

 es2017/async-functions/params-invalid-rest-trailing-comma/input.js:1:12 parse/js ━━━━━━━━━━━━━━━━━━

  ✖ The rest element has to be the last element when destructuring

    async (...a,) => {};
                ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
