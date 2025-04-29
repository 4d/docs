---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

| プロパティ    | 型                                           | 説明                                                                 |
| -------- | ------------------------------------------- | ------------------------------------------------------------------ |
| `images` | Collection of [OpenAIImage](OpenAIImage.md) | Returns a collection of OpenAIImage objects.       |
| `ピクチャー`  | [OpenAIImage](OpenAIImage.md)               | Returns the first OpenAIImage from the collection. |

## 関数

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| 引数       | 型                         | 説明                                                                   |
| -------- | ------------------------- | -------------------------------------------------------------------- |
| *folder* | 4D.Folder | The folder where images will be saved.               |
| *prefix* | Text                      | The prefix for the saved image file names.           |
| 戻り値      | Boolean                   | Returns `True` if the images are successfully saved. |

Saves images to the specified disk folder.

## 参照

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
