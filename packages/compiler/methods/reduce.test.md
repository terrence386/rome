# `reduce.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/compiler/methods/reduce.test.ts --update-snapshots` to update.

## `parent replace signal`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "unknown"
	hasHoistedVars: false
	sourceType: "script"
	syntax: Array []
	body: Array [
		JSIfStatement {
			test: JSReferenceIdentifier {name: "foo"}
			consequent: JSBlockStatement {
				body: Array []
				directives: Array []
			}
		}
	]
}
```

### `formatted`

```javascript
Object {
	code: "if (foo) {\n}\n"
	mappings: Array []
}
```

## `parent replace signal complicated`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "unknown"
	hasHoistedVars: false
	sourceType: "script"
	syntax: Array []
	body: Array [
		JSForStatement {
			init: JSReferenceIdentifier {name: "condition"}
			body: JSBlockStatement {
				directives: Array []
				body: Array [JSExpressionStatement {expression: JSReferenceIdentifier {name: "no"}}]
			}
		}
	]
}
```

### `formatted`

```javascript
Object {
	code: "for (condition; ; ) {\n\tno;\n}\n"
	mappings: Array []
}
```

## `remove signal (element)`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "unknown"
	hasHoistedVars: false
	sourceType: "script"
	syntax: Array []
	body: Array [
		JSIfStatement {
			test: JSReferenceIdentifier {name: "foo"}
			consequent: JSBlockStatement {
				body: Array []
				directives: Array []
			}
		}
	]
}
```

### `formatted`

```javascript
Object {
	code: "if (foo) {\n}\n"
	mappings: Array []
}
```

## `remove signal (property)`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "unknown"
	hasHoistedVars: false
	sourceType: "script"
	syntax: Array []
	body: Array [
		JSForStatement {
			body: JSBlockStatement {
				body: Array []
				directives: Array []
			}
		}
	]
}
```

### `formatted`

```javascript
Object {
	code: "for (;;) {}\n"
	mappings: Array []
}
```
