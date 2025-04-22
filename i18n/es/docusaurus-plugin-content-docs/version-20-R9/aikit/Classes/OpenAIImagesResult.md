---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

| Propiedad | Tipo                                        | Descripción                                                        |
| --------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `images`  | Collection of [OpenAIImage](OpenAIImage.md) | Returns a collection of OpenAIImage objects.       |
| `imagen`  | [OpenAIImage](OpenAIImage.md)               | Returns the first OpenAIImage from the collection. |

## Funciones

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Parámetros | Tipo                      | Descripción                                                          |
| ---------- | ------------------------- | -------------------------------------------------------------------- |
| *folder*   | 4D.Folder | The folder where images will be saved.               |
| *prefix*   | Text                      | The prefix for the saved image file names.           |
| Resultado  | Boolean                   | Returns `True` if the images are successfully saved. |

Saves images to the specified disk folder.

## Ver también

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
