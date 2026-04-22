---
id: openaiapiresource
title: OpenAIAPIResource
---

# OpenAIAPIResource

Classe de base pour toutes les ressources api.

## Propriétés

| Propriété | Type                | Description                                |
| --------- | ------------------- | ------------------------------------------ |
| `_client` | [OpenAI](OpenAI.md) | Lien de retour privé vers le client OpenAI |

Le client est autorisé à effectuer des requêtes HTTP.

## Classes héritées

- [OpenAIModelsAPI](OpenAIModelsAPI.md)
- [OpenAIChatAPI](OpenAIChatAPI.md)
- [OpenAIImagesAPI](OpenAIImagesAPI.md)
- [OpenAIModerationsAPI](OpenAIModerationsAPI.md)
