## Project Configuration

Rome needs to know how to find your project and what files it includes. To do this we require a project configuration file.

Your config can be placed in a [few different locations](#supported-locations), but we recommend using a single `rome.rjson` file. This file is written using [RJSON](/docs/rjson) which is our flavor of JSON. It supports comments and allows you to omit syntax.

All properties are **optional**, you can even have an empty config! We recommend using the [`rome config`](/docs/cli/commands/config) command to modify your configuration, this works with any of the supported config locations, and when editing RJSON will even retain comments.

We are deliberately lean with our configuration. Any additional options increases the potential for bugs, makes it harder to maintain, and .


```json
name: "project-name"
version: "^0.0.0"

lint: {
	ignore: []
	globals: []
}
```

### Properties

#### `name`

This is your project name. It is typically whatever you have set as `name` in `package.json`. This is never shown to you, and is used internally to refer to your project.

The Rome cache is portable, meaning it contains no references to absolute paths. This allows it to be stored across different machines. This feature may not be important to you so it can be safely omitted in most cases.

```bash
rome config set name "project-name"
```

#### `version`

This is a semver range of the Rome version you want to set your project to. It is an optional layer of protection and can avoid version mismatches in large monorepos and projects.

```bash
rome config set version "^0.0.0"
```

#### `lint.ignore`

[Path patterns](#path-patterns) that you want to ignore from linting.

```bash
rome config push lint.ignore "some-path"
```

#### `lint.globals`

Custom variables you want to declare as global.

```bash
rome config push lint.globals SomeGlobal
```

### Supported Locations

You can specify your project config in a few different places.

##### `rome.rjson` (recommended)

This is the recommend location. It's the file we create when running `rome init`.

It can contains Rome's flavor of JSON, [RJSON](/docs/rjson), that allows comments and simpler syntax.

##### `rome.json`

You can also use `rome.json` with regular JSON. This is useful if you think you might want to process and manipulate project configuration with another tool or language.

##### `package.json` field

Alternatively, your project config can be included in a `rome` field inside of `package.json`:

```json
{
	"name": "my-package",
	"version": "0.0.0",
	"rome": {
		"version": "^0.0.1"
	}
}
```

### Path Patterns

Some configuration options contain path patterns. If you have ever used `.gitignore` then it's the same familiar syntax. These are also called [glob patterns](https://en.wikipedia.org/wiki/Glob_(programming)).

These are paths that contain special characters for matching files and directories. These are typically used for ignore rules.

We support the following syntax:

##### Wildcards

 - `*` matches any number of any characters including none in a directory.

##### Matching Directories

A pattern that matches a directory will also match every file inside of it. eg. `pages` is the same as writing `pages/**/*`.

##### Negations

Sometimes you want to add exceptions to a pattern. For example, you have a folder you want to ignore but there is a file inside of that you don't want to match. You can do this by prefixing it with `!`. For example:

```text
scripts
!scripts/navigation.js
```

will cause everything inside the ``.

##### Base Directory

Say that you have the following directory structure:

```text
babies/
	juniper

cats/
	babies/
		orion
		nev
```

And you only wanted to ignore the folder `babies` that contained `juniper`. If you wrote just `babies` then it would match both directories. However, you can prefix it with `/babies` and it will only match the folder at the base.
