---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

| Propriedade | Tipo                                        | Descrição                                                          |
| ----------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `images`    | Collection of [OpenAIImage](OpenAIImage.md) | Returns a collection of OpenAIImage objects.       |
| `imagem`    | [OpenAIImage](OpenAIImage.md)               | Returns the first OpenAIImage from the collection. |

## Funções

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Parâmetro | Tipo                       | Descrição                                                            |
| --------- | -------------------------- | -------------------------------------------------------------------- |
| *folder*  | 4D. Folder | The folder where images will be saved.               |
| *prefix*  | Text                       | The prefix for the saved image file names.           |
| Resultado | Parâmetros                 | Returns `True` if the images are successfully saved. |

Saves images to the specified disk folder.

## Veja também

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
