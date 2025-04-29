---
id: openaiapiresource
title: OpenAIAPIResource
---

# OpenAIAPIResource

Base class to all api resource.

## プロパティ

| プロパティ     | 型                   | 説明                                     |
| --------- | ------------------- | -------------------------------------- |
| `_client` | [OpenAI](OpenAI.md) | Private back link to the OpenAI client |

The client allow to make HTTP Request.

## Inherited Classes

- [OpenAIModelsAPI](OpenAIModelsAPI.md)
- [OpenAIChatAPI](OpenAIChatAPI.md)
- [OpenAIImagesAPI](OpenAIImagesAPI.md)
- [OpenAIModerationsAPI](OpenAIModerationsAPI.md)
