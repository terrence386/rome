# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > expect-plugin > export-type-named`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/expect-plugin/export-type-named/input.js"
	hasHoistedVars: true
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "typescript/expect-plugin/export-type-named/input.js"
		end: Object {
			column: 0
			index: 30
			line: 3
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
				filename: "typescript/expect-plugin/export-type-named/input.js"
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
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "typescript/expect-plugin/export-type-named/input.js"
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
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "Foo"
							loc: Object {
								filename: "typescript/expect-plugin/export-type-named/input.js"
								identifierName: "Foo"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
						}
						init: undefined
						loc: Object {
							filename: "typescript/expect-plugin/export-type-named/input.js"
							end: Object {
								column: 7
								index: 7
								line: 1
							}
							start: Object {
								column: 4
								index: 4
								line: 1
							}
						}
					}
				]
			}
		}
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "type"
			loc: Object {
				filename: "typescript/expect-plugin/export-type-named/input.js"
				end: Object {
					column: 20
					index: 29
					line: 2
				}
				start: Object {
					column: 0
					index: 9
					line: 2
				}
			}
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: Object {
						filename: "typescript/expect-plugin/export-type-named/input.js"
						end: Object {
							column: 17
							index: 26
							line: 2
						}
						start: Object {
							column: 14
							index: 23
							line: 2
						}
					}
					exported: JSIdentifier {
						name: "Foo"
						loc: Object {
							filename: "typescript/expect-plugin/export-type-named/input.js"
							identifierName: "Foo"
							end: Object {
								column: 17
								index: 26
								line: 2
							}
							start: Object {
								column: 14
								index: 23
								line: 2
							}
						}
					}
					local: JSReferenceIdentifier {
						name: "Foo"
						loc: Object {
							filename: "typescript/expect-plugin/export-type-named/input.js"
							identifierName: "Foo"
							end: Object {
								column: 17
								index: 26
								line: 2
							}
							start: Object {
								column: 14
								index: 23
								line: 2
							}
						}
					}
				}
			]
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
