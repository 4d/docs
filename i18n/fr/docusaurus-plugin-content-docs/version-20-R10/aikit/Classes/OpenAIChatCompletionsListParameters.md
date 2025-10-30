---
id: openaichatcompletionslistparameters
title: OpenAIChatCompletionsListParameters
---

# OpenAIChatCompletionsListParameters

Cette classe est utilisée pour définir les paramètres de récupération d'une liste de réponses conversationnelles à partir de l'API OpenAI. Elle permet de personnaliser la pagination, le tri et le filtrage des messages de la conversation.

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Propriété  | Type    | Valeur par défaut | Description                                                                                                                                                              |
| ---------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `after`    | Text    | ""                | Identifiant du dernier message de la requête de pagination précédente.                                                                                   |
| `limit`    | Integer | 0                 | Nombre de messages à récupérer.                                                                                                                          |
| `order`    | Text    | "asc"             | Ordre de tri des messages par horodatage. Utilisez `asc` pour l'ordre croissant et `desc` pour l'ordre décroissant.                      |
| `metadata` | Text    | -                 | Une liste de clés de métadonnées pour filtrer les réponses conversationnelles. Exemple : `metadata[key1]=valeur1&metadata[key2]=valeur2` |
| `model`    | Text    | ""                | Le modèle utilisé pour générer les réponses conversationnelles.                                                                                          |

## Voir également

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
