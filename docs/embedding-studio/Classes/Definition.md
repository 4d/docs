---
id: definition
title: Definition
---

# Definition

The `Definition` class describes how a single vector field on a dataclass should be computed: which dataclass, which vector field, which model alias, and which text template ([Phrase](Phrase.md)) to render from each entity.

A collection of these is what [Settings](Settings.md) persists.

## Properties

| Property Name   | Type              | Description                                                                 |
|-----------------|-------------------|-----------------------------------------------------------------------------|
| `dataclassName` | Text              | Name of the target dataclass.                                               |
| `vectorName`    | Text              | Name of the `4D.Vector` field on that dataclass.                            |
| `modelAlias`    | Text              | Embedding model alias (e.g. `"text-embedding-3-small"`).                   |
| `phrase`        | [Phrase](Phrase.md) | Compiled template used to build the text that will be embedded.           |
| `autoInvalidate`| Boolean           | Controls automatic invalidation on entity save. Default: `True`.           |

## Class constructor

Create a definition.

| Argument Name     | Type | Description                                                                 |
|-------------------|------|-----------------------------------------------------------------------------|
| *dataclassName*   | Text | Name of the target dataclass.                                               |
| *vectorName*      | Text | Name of the target vector field.                                            |
| *modelAlias*      | Text | Embedding model alias.                                                      |
| *phraseTemplate*  | Text | Phrase template with `{field}` placeholders — compiled into a [Phrase](Phrase.md). |

```4d
var $def:=cs.EmbeddingStudio.Definition.new(\
	"Students"; \
	"student_vector_1"; \
	"text-embedding-3-small"; \
	"Student {firstName} {lastName}")
```

## Computed properties

### hasDefinition

**hasDefinition** : Boolean *(read-only)*

Returns `True` if at least a model or a phrase template has been set. A definition without either has no content to process.

```4d
If ($def.hasDefinition)
    // worth validating further
End if
```

## Functions

### validate()

**validate**( *settings* : Settings ) : Object

Validates the definition against the live datastore model and the known embedding models. All errors are collected before returning — the result always describes the full set of problems found.

| Argument        | Type                                             | Description                                                              |
|-----------------|--------------------------------------------------|--------------------------------------------------------------------------|
| *settings*      | [Settings](Settings.md) \| Null | Used to pass phrase validation options. Pass `Null` to skip phrase options. |
| Function result | Object                                           | `{success: Boolean, errors: Collection}` where each error is `{field: Text, message: Text}`. |

Checked in order:

| Check                         | `field` value     |
|-------------------------------|-------------------|
| `dataclassName` is not empty  | `"dataclassName"` |
| `vectorName` is not empty     | `"vectorName"`    |
| `modelAlias` is set and recognised | `"modelAlias"`         |
| Dataclass exists in `ds`      | `"dataclassName"` |
| Vector field exists           | `"vectorName"`    |
| Field type is `4D.Vector`     | `"vectorName"`    |
| Phrase template is not empty  | `"phrase"`        |
| Phrase keys resolve in the dataclass | `"phrase"`  |

The first two checks (identity) return immediately on failure; the remaining checks accumulate so all problems are reported in one pass.

```4d
var $result:=$def.validate(cs.EmbeddingStudio.Settings.new())

If (Not($result.success))
    var $err : Object
    For each ($err; $result.errors)
        TRACE  // $err.field, $err.message
    End for each
End if
```

### invalidateVectors()

**invalidateVectors**() : Object

Marks all already-computed entities for re-embedding, forcing a full rebuild on the next run. Only entities that already have a vector value are processed — entities with a `Null` vector are skipped.

Useful during development or after a model/phrase change to trigger a clean rebuild of all vectors.

The strategy depends on whether a companion `_dirty` field exists on the dataclass:

| Companion `_dirty` field | Action taken |
|--------------------------|--------------|
| Present | Sets `<vectorName>_dirty` to `True` — vector is left untouched |
| Absent | Nullifies the vector field |

| Argument        | Type   | Description                                                                 |
|-----------------|--------|-----------------------------------------------------------------------------|
| Function result | Object | `{updated: Integer, skipped: Integer, errors: Collection of Text}` |

- `updated` — number of entities successfully marked
- `skipped` — number of entities that could not be saved
- `errors` — one entry per save failure, formatted as `"DataclassName: statusText"`

```4d
var $result:=$def.invalidateVectors()

If ($result.skipped > 0)
    var $e : Text
    For each ($e; $result.errors)
       // $e
    End for each
End if
// → { updated: 42; skipped: 0; errors: [] }
```

### toObject()

**toObject**() : Object

Returns a plain object suitable for JSON persistence. The phrase is flattened to its template text.

| Argument        | Type   | Description                                                                 |
|-----------------|--------|-----------------------------------------------------------------------------|
| Function result | Object | `{version, dataclassName, vectorName, modelAlias, phrase, autoInvalidate}` where `phrase` is the template string. |

```4d
$def.toObject()
// → { version: 0; dataclassName: "Students"; vectorName: "student_vector_1";
//     modelAlias: "text-embedding-3-small"; phrase: "Student {firstName} {lastName}";
//     autoInvalidate: true }
```

## Automatic invalidation

`autoInvalidate` controls whether save-time automatic invalidation is enabled for this definition.

- `True` (default): when relevant attributes change on an entity save, vectors are automatically invalidated.
- `False`: save-time automatic invalidation is skipped for this definition.

This setting does not affect manual invalidation via `invalidateVectors()`.

## Dirty flag convention

The pipeline in [Process](Process.md) will recompute an entity whenever the target vector is `Null`, or when a sibling field `<vectorName>_dirty` exists on the dataclass and is `True`.

Declaring the dirty flag is optional — when absent, only the null-vector case triggers recomputation. When present, it is cleared automatically on successful save.

## See also

- [Settings](Settings.md)
- [Process](Process.md)
- [Phrase](Phrase.md)
