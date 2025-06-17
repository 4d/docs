---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades calculadas

| Propiedad | Tipo                                       | Descripción                                                        |
| --------- | ------------------------------------------ | ------------------------------------------------------------------ |
| `images`  | Colección de [OpenAIImage](OpenAIImage.md) | Devuelve una colección de objetos OpenAIImage.     |
| `imagen`  | [OpenAIImage](OpenAIImage.md)              | Returns the first OpenAIImage from the collection. |

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
