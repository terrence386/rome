# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > yield-generator-arrow-concise-body`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: false
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 0
      index: 36
      line: 2
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    FunctionDeclaration {
      id: BindingIdentifier {
        name: 'g'
        loc: Object {
          filename: 'input.js'
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
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 35
          index: 35
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      head: FunctionHead {
        async: false
        generator: true
        hasHoistedVars: false
        params: Array []
        predicate: undefined
        rest: undefined
        returnType: undefined
        thisType: undefined
        typeParameters: undefined
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 14
            index: 14
            line: 1
          }
          start: Object {
            column: 11
            index: 11
            line: 1
          }
        }
      }
      body: BlockStatement {
        directives: Array []
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 35
            index: 35
            line: 1
          }
          start: Object {
            column: 14
            index: 14
            line: 1
          }
        }
        body: Array [
          ExpressionStatement {
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 33
                index: 33
                line: 1
              }
              start: Object {
                column: 16
                index: 16
                line: 1
              }
            }
            expression: ArrowFunctionExpression {
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 32
                  index: 32
                  line: 1
                }
                start: Object {
                  column: 16
                  index: 16
                  line: 1
                }
              }
              head: FunctionHead {
                async: false
                hasHoistedVars: false
                predicate: undefined
                rest: undefined
                returnType: undefined
                thisType: undefined
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 23
                    index: 23
                    line: 1
                  }
                  start: Object {
                    column: 16
                    index: 16
                    line: 1
                  }
                }
                params: Array [
                  BindingIdentifier {
                    name: 'x'
                    loc: Object {
                      filename: 'input.js'
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
                ]
              }
              body: BinaryExpression {
                operator: '*'
                loc: Object {
                  filename: 'input.js'
                  end: Object {
                    column: 32
                    index: 32
                    line: 1
                  }
                  start: Object {
                    column: 23
                    index: 23
                    line: 1
                  }
                }
                left: ReferenceIdentifier {
                  name: 'x'
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 24
                      index: 24
                      line: 1
                    }
                    start: Object {
                      column: 23
                      index: 23
                      line: 1
                    }
                  }
                }
                right: ReferenceIdentifier {
                  name: 'yield'
                  loc: Object {
                    filename: 'input.js'
                    end: Object {
                      column: 32
                      index: 32
                      line: 1
                    }
                    start: Object {
                      column: 27
                      index: 27
                      line: 1
                    }
                  }
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