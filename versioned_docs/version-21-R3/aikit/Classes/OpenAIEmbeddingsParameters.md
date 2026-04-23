---
id: openaiembeddingsparameters
title: OpenAIEmbeddingsParameters
---

# OpenAIEmbeddingsParameters

The `OpenAIEmbeddingsParameters` class is designed to configure and manage the parameters used for creating embeddings through the OpenAI API.

## Inherits

- [OpenAIParameters](OpenAIParameters.md)

## Properties

| Property Name      | Type    | Description                                                                                      |
|--------------------|---------|--------------------------------------------------------------------------------------------------|
| `encoding_format`  | Text    | The format to return the embeddings in. Can be either `float` or `base64`. (default: `float`)    |
| `dimensions`       | Integer | The number of dimensions the resulting output embeddings should have. Only supported in text-embedding-3 and later models. |

## See also

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
