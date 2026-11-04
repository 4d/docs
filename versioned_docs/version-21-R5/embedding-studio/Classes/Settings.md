---
id: settings
title: Settings
---

# Settings

The `Settings` class is the persisted configuration for the embedding pipeline. It loads and saves a JSON file (default: `Settings/embeddings.json`, overridable with the `EMBEDDINGS_SETTINGS_PATH` environment variable) containing a list of [Definition](Definition.md) entries, a batch size, and phrase-validation options.

## Properties

| Property Name | Type                                                     | Description                                                                 |
|---------------|----------------------------------------------------------|-----------------------------------------------------------------------------|
| `definitions` | Collection of [Definition](Definition.md) | The configured definitions.                                                 |
| `batchSize`   | Integer                                                  | Chunk size used by [Process.processEntitySelection](Process.md#processentityselection). Default: `50`. |
| `phrase`      | Object                                                   | Phrase-validation options (see below).                                      |
| `embedder`    | Object                                                   | Optional embedder configuration (see below).                                |
| `file`        | 4D.File *(read-only)*                                     | The backing file the settings are loaded from and saved to.                 |

### phrase options

Passed verbatim to [Phrase.validate()](Phrase.md#validate) whenever the pipeline validates a definition.

| Field              | Type    | Default | Description                                             |
|--------------------|---------|---------|---------------------------------------------------------|
| `allowRelations`   | Boolean | `False` | Allow dot-notation through N:1 / 1:1 relations.         |
| `allowCalculated`  | Boolean | `False` | Allow calculated attributes in phrases.                 |
| `allowAlias`       | Boolean | `False` | Allow alias attributes in phrases.                      |
| `allowObject`      | Boolean | `False` | Allow object attributes in phrases.                     |

> **Invalidation caveat.** Dirty-flag tracking only covers direct scalar fields on the entity. Fields that are only reachable through one of these options — a related entity's attribute, a calculated value, an alias, or a sub-property of an object — will **not** automatically mark the entity as dirty when they change. If such fields are part of a phrase and their source data changes, the vector will not be recomputed unless you call `invalidateVectors()` explicitly or use `force: true` when processing.

### embedder options

Controls how [Process](Process.md) builds its embedder. When absent, a default `Embedder` is created with its own defaults.

| Field          | Type    | Default | Description                                                                 |
|----------------|---------|---------|-----------------------------------------------------------------------------|
| `className`    | Text    | —       | Name of a project class to instantiate instead of the built-in `Embedder`. The class must expose `embed` and `embedBatch` functions. If instantiation fails or the interface is missing, a diagnostic error is logged and the default `Embedder` is used as fallback. |
| `maxRetries`   | Integer | `3`     | Number of retry attempts on rate-limit errors (forwarded to `Embedder`).   |
| `backoffMs`    | Integer | `500`   | Base back-off delay in ms, doubled each retry (forwarded to `Embedder`).   |

Any additional keys are forwarded as-is to the constructor of the target class (built-in or custom).

## File format

```json
{
  "batchSize": 50,
  "phrase": {
    "allowRelations": false,
    "allowCalculated": false,
    "allowAlias": false,
    "allowObject": false
  },
  "embedder": {
    "maxRetries": 5,
    "backoffMs": 200
  },
  "definitions": [
    {
      "dataclassName": "Students",
      "vectorName": "student_vector_1",
      "modelAlias": "text-embedding-3-small",
      "phrase": "Student {firstName} {lastName}",
      "autoInvalidate": true
    }
  ]
}
```

Each definition may include `autoInvalidate` (`true` by default) to control save-time automatic invalidation.

The same file also carries the `scheduler` key (see [Scheduler](Scheduler.md#configuration)) and any other top-level key you add: `Settings` reads and rewrites only the keys listed above and leaves the rest untouched.

With a custom embedder class:

```json
{
  "embedder": {
    "className": "MyCustomEmbedder"
  },
  "definitions": [...]
}
```

## Class constructor

Create a settings instance. The configuration file is loaded immediately.

| Argument Name | Type    | Description                                                                  |
|---------------|---------|------------------------------------------------------------------------------|
| *file*        | 4D.File | Optional. A file to use instead of the default location. The override applies process-wide for subsequent settings access. **Not supported in 4D Remote mode** — pass it only when running locally or on the server. |

When *file* is omitted, the default location is used: `Settings/embeddings.json`, or the path given by the `EMBEDDINGS_SETTINGS_PATH` environment variable.

```4d
// Default location
var $settings:=cs.EmbeddingStudio.Settings.new()

// Custom file (server / mono only)
var $settings:=cs.EmbeddingStudio.Settings.new(File("/some/path/custom.json"))
```

## Functions

### load()

**load**()

Reload the backing file into memory, overwriting in-memory state. A missing file resets to defaults without raising.

A file that **exists but cannot be parsed** also leaves the instance on defaults, but it is remembered: an error is logged and [`save()`](#save) then refuses to write, so a malformed file is never silently replaced by defaults.

### save()

**save**() : Boolean

Serialize the current in-memory state to the backing file. Only the keys this class owns (`batchSize`, `phrase`, `embedder`, `definitions`) are written — every other top-level key present in the file (the `scheduler` configuration, model aliases…) is preserved as-is. A key whose value is back to its default is *removed* from the file rather than written.

Definitions are merged with what the file holds at that instant, using the snapshot taken at load time as the common ancestor: two editors open at the same time no longer drop each other's definitions.

| Result | Type    | Description                                                                                     |
|--------|---------|-------------------------------------------------------------------------------------------------|
| result | Boolean | `True` when written. `False` — nothing written — when the file could not be read at load time.  |

```4d
$settings.definitions.push(cs.EmbeddingStudio.Definition.new("Students"; "student_vector_1"; "text-embedding-3-small"; "{firstName}"))
$settings.batchSize:=100
$settings.save()
```

### find()

**find**(*dataclassName* : Text ; *vectorName* : Text) : [Definition](Definition.md)

Look up the saved definition for the given dataclass/vector pair.

| Argument        | Type                                          | Description                                         |
|-----------------|-----------------------------------------------|-----------------------------------------------------|
| *dataclassName* | Text                                          | Name of the dataclass.                              |
| *vectorName*    | Text                                          | Name of the vector field on that dataclass.         |
| Function result | [Definition](Definition.md) | The matching definition, or `Null` if none matches. |

```4d
var $def:=$settings.find("Students"; "student_vector_1")
```

### findAll()

**findAll**(*dataclassName* : Text) : Collection of [Definition](Definition.md)

Return every saved definition configured for the given dataclass.

| Argument        | Type                                          | Description                                                |
|-----------------|-----------------------------------------------|------------------------------------------------------------|
| *dataclassName* | Text                                          | Name of the dataclass.                                     |
| Function result | Collection of [Definition](Definition.md) | All matching definitions (empty collection if none match). |

```4d
var $defs:=$settings.findAll("Students")
// → every Students definition; used by Process.process(ds.Students)
```

### invalidateVectors()

**invalidateVectors**() : Object

Calls [`invalidateVectors()`](Definition.md#invalidatevectors) on every definition in `definitions` and merges the results into a single status object.

| Argument        | Type   | Description                                                                 |
|-----------------|--------|-----------------------------------------------------------------------------|
| Function result | Object | `{updated: Integer, skipped: Integer, errors: Collection of Text}` — accumulated across all definitions. |

```4d
var $result:=cs.EmbeddingStudio.Settings.new().invalidateVectors()
// → { updated: 120; skipped: 0; errors: [] }
```

## See also

- [Definition](Definition.md)
- [Process](Process.md)
- [Phrase](Phrase.md)
