---
id: openaichatcompletionsmessagesparameters
title: OpenAIChatCompletionsMessagesParameters
---

# OpenAIChatCompletionsMessagesParameters

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Propriété | Type    | Valeur par défaut | Description                                                                                                                                                                           |
| --------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`   | Text    | ""                | Identifiant du dernier message de la requête de pagination précédente.                                                                                                |
| `limit`   | Integer | 0                 | Nombre de messages à récupérer.                                                                                                                                       |
| `order`   | Text    | "asc"             | Ordre de tri des messages par horodatage. Utilisez `asc` pour l'ordre croissant et `desc` pour l'ordre décroissant. `asc` par défaut. |

## Voir également

- [OpenAIChatCompletionsMessagesAPI](OpenAIChatCompletionsMessagesAPI.md)
