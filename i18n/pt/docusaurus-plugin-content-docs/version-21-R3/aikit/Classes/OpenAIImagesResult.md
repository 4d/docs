---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Inherits

- [OpenAIResult](OpenAIResult.md)

## Propriedades calculadas

| Propriedade  | Tipo                                     | Descrição                                                                                                            |
| ------------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `images`     | Coleção de [OpenAIImage](OpenAIImage.md) | Returns a collection of OpenAIImage objects.                                                         |
| `imagem`     | [OpenAIImage](OpenAIImage.md)            | Returns the first OpenAIImage from the collection.                                                   |
| `utilização` | Object                                   | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### utilização

The `usage` property returns an object containing token usage information for image generation (when supported by the provider).

| Campo                  | Tipo    | Descrição                                                                   |
| ---------------------- | ------- | --------------------------------------------------------------------------- |
| `total_tokens`         | Integer | Total tokens used.                                          |
| `input_tokens`         | Integer | Number of tokens in the input (prompt).  |
| `output_tokens`        | Integer | Number of tokens for the output (image). |
| `input_tokens_details` | Object  | Breakdown of input tokens (optional).    |

#### input_tokens_details

| Campo          | Tipo    | Descrição                                                                                 |
| -------------- | ------- | ----------------------------------------------------------------------------------------- |
| `text_tokens`  | Integer | Number of text tokens in the prompt.                                      |
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

## Funções

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text): Boolean

| Parâmetro | Tipo                       | Descrição                                                            |
| --------- | -------------------------- | -------------------------------------------------------------------- |
| *folder*  | 4D. Folder | The folder where images will be saved.               |
| *prefix*  | Text                       | The prefix for the saved image file names.           |
| Resultado | Parâmetros                 | Returns `True` if the images are successfully saved. |

Saves images to the specified disk folder.

## Veja também

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
