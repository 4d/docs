---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Computed properties

| Property | Type | Description |
|----------|------|-------------|
| `images` | Collection of [OpenAIImage](OpenAIImage.md) | Returns a collection of OpenAIImage objects. |
| `image`  | [OpenAIImage](OpenAIImage.md) | Returns the first OpenAIImage from the collection. |
| `usage`  | Object | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### usage

The `usage` property returns an object containing token usage information for image generation (when supported by the provider).

| Field | Type | Description |
|-------|------|-------------|
| `total_tokens` | Integer | Total tokens used. |
| `input_tokens` | Integer | Number of tokens in the input (prompt). |
| `output_tokens` | Integer | Number of tokens for the output (image). |
| `input_tokens_details` | Object | Breakdown of input tokens (optional). |

#### input_tokens_details

| Field | Type | Description |
|-------|------|-------------|
| `text_tokens` | Integer | Number of text tokens in the prompt. |
| `image_tokens` | Integer | Number of image tokens (for image editing/variations). |

**Example response:**

```json
{
  "total_tokens": 100,
  "input_tokens": 50,
  "output_tokens": 50,
  "input_tokens_details": {
    "text_tokens": 10,
    "image_tokens": 40
  }
}
```

> **Note:** Image generation usage may not be available from all providers. The structure may vary depending on the specific image API endpoint used.

## Functions

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Parameter        | Type        | Description                                  |
|------------------|-------------|----------------------------------------------|
| *folder*         | 4D.Folder | The folder where images will be saved.       |
| *prefix*         | Text     | The prefix for the saved image file names.   |
| Function result| Boolean  | Returns `True` if the images are successfully saved. |

Saves images to the specified disk folder.

## See also

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
