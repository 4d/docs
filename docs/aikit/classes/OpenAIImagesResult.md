---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

### images

Returns a collection of [OpenAIImage](OpenAIImage.md).

### image

Returns the first [OpenAIImage](OpenAIImage.md) from the collection.

## Functions

### saveImagesToDisk

Saves images to the specified disk folder.

| Arguments    | Type                          | Description                                  |
|--------------|-------------------------------|----------------------------------------------|
| $folder      | 4D.Folder                     | The folder where images will be saved.      |
| $prefix      | Text                          | The prefix for the saved image file names.  |

| Return Type | Description |
|-------------|-------------|
| Boolean     | Returns `True` if the images are successfully saved. |


## See also

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
