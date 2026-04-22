---
id: openaiapiresource
title: OpenAIAPIResource
---

# OpenAIAPIResource

Clase de base para todos los recursos api.

## Propiedades

| Propiedad | Tipo                | Descripción                                |
| --------- | ------------------- | ------------------------------------------ |
| `_client` | [OpenAI](OpenAI.md) | Enlace de vuelta privado al cliente OpenAI |

El cliente permite realizar peticiones HTTP.

## Clases heredadas

- [OpenAIModelsAPI](OpenAIModelsAPI.md)
- [OpenAIChatAPI](OpenAIChatAPI.md)
- [OpenAIImagesAPI](OpenAIImagesAPI.md)
- [OpenAIModerationsAPI](OpenAIModerationsAPI.md)
