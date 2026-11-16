---
id: phrase
title: Phrase
---

# Phrase

The `Phrase` class is a lightweight template engine: a template with `{variable}` placeholders is compiled once, then rendered efficiently against different data objects.

## プロパティ

| プロパティ名     | 型          | 説明                                                                                                                     |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| `template` | Text       | Computed — returns the original template string.                                                       |
| `keys`     | Collection | Computed — returns the variable names found in the template, dot-notation keys joined back to strings. |

## Class constructor

Compile a template. Compilation walks the template once and extracts static parts and variable paths.

| 引数名        | 型    | 説明                                                         |
| ---------- | ---- | ---------------------------------------------------------- |
| *template* | Text | Template string with `{variable}` markers. |

```4d
var $tpl:=cs.EmbeddingStudio.Phrase.new("Hello {firstName}, you study at {schoolName}.")
$tpl.keys // → ["firstName"; "schoolName"]
```

## 関数

### render()

**render**(*data* : Object) : Text

Render the compiled template by replacing variables with values from *data*. Missing keys produce an empty string.

| 引数     | 型      | 説明                                                                                                     |
| ------ | ------ | ------------------------------------------------------------------------------------------------------ |
| *data* | Object | A plain object or a 4D.Entity whose fields supply the variable values. |
| 戻り値    | Text   | The rendered text.                                                                     |

```4d
var $text:=$tpl.render({firstName: "Alice"; school: {name: "MIT"}})
// → "Hello Alice, you study at MIT."

// Works directly on entities
$text:=$tpl.render(ds.Students.first())
```

### validate()

**validate**(*dataclass* : 4D.DataClass ; *options* : Object) : Object

Validate that all keys in the phrase can be resolved against the given dataclass. Walks dot-notation paths through N:1 / 1:1 relations.

| 引数        | 型                            | 説明                                                                                                                                    |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| *データクラス*  | 4D.DataClass | The dataclass to validate against.                                                                                    |
| *options* | Object                       | Optional validation flags (see below). All default to `False` — storage kind only. |
| 戻り値       | Object                       | `{success: Boolean, errors: Collection of {key, message}}`.                                                           |

#### オプション

| フィールド             | 型       | デフォルト   | 説明                                                                                                    |
| ----------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------- |
| `allowRelations`  | Boolean | `false` | Allow dot-notation paths through N:1 / 1:1 relations. |
| `allowCalculated` | Boolean | `false` | Allow calculated attributes.                                                          |
| `allowAlias`      | Boolean | `false` | Allow alias attributes.                                                               |

```4d
var $tpl:=cs.EmbeddingStudio.Phrase.new("{firstName} at {school.name}")

// Storage-only validation — fails because {school.name} uses a relation
var $v:=$tpl.validate(ds.Students)
// $v.success → False
// $v.errors → [{key: "school.name"; message: "..."}]

// Allow relations
$v:=$tpl.validate(ds.Students; {allowRelations: True})
// $v.success → True
```

#### Rejected shapes

Regardless of options:

- Attributes that do not exist on the dataclass.
- Attributes whose class ID is `4D.Vector`.
- 1:N relations (`relatedEntities`) as the final key.
- Intermediate segments that are not relations (when dot-notation is used).

### 属性()

**attributes**(*dataclass* : 4D.DataClass) : Collection

Resolves each phrase key against *dataclass* and returns an ordered Collection of ORDA attribute descriptor objects, one per key in the same order as `.keys`. For dot-notation paths, traverses N:1 relations to reach the final attribute. Pushes `Null` for any key whose path cannot be resolved (unknown attribute or non-relation intermediate segment).

| 引数       | 型                            | 説明                                                                                           |
| -------- | ---------------------------- | -------------------------------------------------------------------------------------------- |
| *データクラス* | 4D.DataClass | The dataclass to resolve attributes against.                                 |
| 戻り値      | Collection                   | Ordered collection of ORDA attribute objects (or `Null`). |

Each resolved entry is an ORDA attribute descriptor with `.name`, `.kind`, and more — see [DataClass.attributeName](https://developer.4d.com/docs/API/DataClassClass#attributename).

```4d
var $tpl:=cs.EmbeddingStudio.Phrase.new("{firstName} graduated from {school.name}")
var $attrs:=$tpl.attributes(ds.Students)
// $attrs[0].name → "firstName"   $attrs[0].type → "string"
// $attrs[1].name → "name"        $attrs[1].type → "string"   (from School dataclass)
// $attrs[1] is Null if school.name could not be resolved
```

## 参照

- [Definition](Definition.md) — holds a `Phrase`.
- [StudioEmbedder.render()](StudioEmbedder.md#render) — renders a phrase for an entity, non-persisting.
