---
id: studioembedder
title: StudioEmbedder
---

# StudioEmbedder

The `StudioEmbedder` class renders and embeds on demand, resolved against the Studio settings: a saved definition gives the phrase and the model, so the vector you compute matches the ones stored by [Process](Process.md). Nothing is persisted. Typical uses: building the vector of a search query, finding entities similar to a given one, or previewing the text sent for an entity.

For the full batch pipeline that persists vectors on entities, see [Process](Process.md).

## Properties

| Property Name | Type                                                    | Description                                              |
|---------------|---------------------------------------------------------|----------------------------------------------------------|
| `settings`    | [Settings](Settings.md)               | The settings (vectors, batch size, phrase validation options). |
| `embedder`    | [Embedder](Embedder.md)               | The API-calling engine. Stateless and swappable.         |
| `options`     | Object                                                  | Runtime options object. |

## Class constructor

| Argument Name | Type                                      | Description                                                         |
|---------------|-------------------------------------------|---------------------------------------------------------------------|
| *settings*    | [Settings](Settings.md) | Optional. If omitted, settings are loaded from the default `Settings/embeddings.json`. |
| *options*     | Object                                    | Optional runtime options. Supports `embedder` for injection. |

```4d
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new()
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new($settings)
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new($settings; {embedder: $mockEmbedder})
```

## Functions

### render()

**render**(*entity* : 4D.Entity ; *definitionOrPhrase* : Variant) : Text

Return the text that [`embed()`](#embed) sends for an entity (the phrase rendered against it). No API call, no persistence.

| Argument              | Type                                                                        | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| *entity*              | 4D.Entity                                                                   | The entity to render against.                                               |
| *definitionOrPhrase*  | `Null`, [Phrase](Phrase.md), [Definition](Definition.md), Text, or plain object stub | `Null` → auto-resolve via settings (requires a unique match). Text → compiled as a throwaway `cs.EmbeddingStudio.Phrase`. Object stub → see [stub resolution](#stub-resolution). |
| Function result       | Text                                                                        | The rendered text.                                                          |

```4d
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new()
var $text: Text
$text:=$studioEmbedder.render($student; $def)                        // use def's phrase
$text:=$studioEmbedder.render($student; cs.EmbeddingStudio.Phrase.new("Hi {firstName}"))
$text:=$studioEmbedder.render($student; "Student: {lastName}")       // raw template
$text:=$studioEmbedder.render($student)                              // auto-resolve
$text:=$studioEmbedder.render($student; {vectorName: "student_vector_1"})  // stub → saved definition's phrase
$text:=$studioEmbedder.render($student; {phrase: "Hi {firstName}"})        // ad-hoc stub → inline template
```

### embed()

**embed**(*input* : Variant ; *context* : Variant ; *model* : Text) : [cs.EmbeddingStudio.EmbedderResult](EmbedderResult.md)

Compute a vector for an arbitrary input, without persisting anywhere.

| Argument        | Type                                                                                     | Description                                                                 |
|-----------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| *input*         | Text or 4D.Entity                                                                        | Text → embedded directly. Entity → phrase rendered then embedded.          |
| *context*       | Text, [Phrase](Phrase.md), [Definition](Definition.md), Text template, plain object stub, or `Null` | Provides phrase and/or model depending on *input*. Object stub → see [stub resolution](#stub-resolution). |
| *model*         | Text                                                                                     | Optional explicit model name. Used when *context* does not carry one.      |
| Function result | [EmbedderResult](EmbedderResult.md)                                                      | The embedding result (use `.vector` to get the 4D.Vector).                 |

Throws if no model can be determined.

```4d
var $studioEmbedder:=cs.EmbeddingStudio.StudioEmbedder.new()
var $vector: 4D.Vector

// Text + model
$vector:=$studioEmbedder.embed("some text"; "text-embedding-3-small").vector

// Text + definition (picks up def.modelAlias)
$vector:=$studioEmbedder.embed("some text"; $def).vector

// Entity + definition (uses def.phrase + def.modelAlias)
$vector:=$studioEmbedder.embed($student; $def).vector

// Entity + phrase + explicit model
$vector:=$studioEmbedder.embed($student; $phrase; "text-embedding-3-small").vector

// Entity + ad-hoc template + model
$vector:=$studioEmbedder.embed($student; "Profile: {firstName} {lastName}"; "text-embedding-3-small").vector

// Entity alone (auto-resolve, only when exactly one def matches the dataclass)
$vector:=$studioEmbedder.embed($student).vector

// Entity + stub (deduces phrase + model from the matching saved definition)
$vector:=$studioEmbedder.embed($student; {vectorName: "student_vector_1"}).vector

// Entity + ad-hoc stub (phrase compiled inline, model taken from the stub)
$vector:=$studioEmbedder.embed($student; {phrase: "Hi {firstName}"; modelAlias: "text-embedding-3-small"}).vector

// Text + stub that only supplies the model
$vector:=$studioEmbedder.embed("some text"; {modelAlias: "text-embedding-3-small"}).vector
```

## Stub resolution

Both `render()` and `embed()` accept a plain object in place of a `Phrase`/`Definition`. A stub is resolved the same way [`Process`](Process.md#definition-resolution-entity-context) resolves its `definition` argument, so the behavior matches. Two flavors are supported:

| Stub                                                       | Resolves to                                                                                          |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| `{vectorName: "..."}` (optionally `{dataclassName: "..."}`) | The matching **saved definition** for the entity's dataclass — deducing its phrase (and, for `embed`, its model). Resolves to nothing when there is no unique match. |
| `{phrase: "tpl {field}"}` or `{template: "tpl {field}"}`   | An **ad-hoc** `Phrase` compiled inline; nothing is looked up. Pair with `{modelAlias: "..."}` to give `embed()` a model. |

For `embed()`, the model is deduced in this order: an explicit `{modelAlias}` on the stub → the model of a stub-matched saved definition → the *model* argument → the entity's unique definition. An explicit `{modelAlias}` always wins.

Unlike [`Process.process()`](Process.md#process-resolution), a stub is **not** turned into a brand-new `Definition` from its fields — `StudioEmbedder` persists nothing, so use `{phrase}`/`{template}` for one-off templates.

## See also

- [Process](Process.md)
- [Settings](Settings.md)
- [Definition](Definition.md)
- [Embedder](Embedder.md)
- [EmbedderResult](EmbedderResult.md)
- [Phrase](Phrase.md)
