---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

| Propriété | Type                                        | Description                                                        |
| --------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `images`  | Collection of [OpenAIImage](OpenAIImage.md) | Returns a collection of OpenAIImage objects.       |
| `image`   | [OpenAIImage](OpenAIImage.md)               | Returns the first OpenAIImage from the collection. |

## Fonctions

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Paramètres | Type                      | Description                                                          |
| ---------- | ------------------------- | -------------------------------------------------------------------- |
| *folder*   | 4D.Folder | The folder where images will be saved.               |
| *prefix*   | Text                      | The prefix for the saved image file names.           |
| Résultat   | Boolean                   | Returns `True` if the images are successfully saved. |

Saves images to the specified disk folder.

## Voir également

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
