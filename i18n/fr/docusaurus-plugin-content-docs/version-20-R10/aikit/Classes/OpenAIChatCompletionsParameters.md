---
id: openaichatcompletionsparameters
title: OpenAIChatCompletionParameters
---

# OpenAIChatCompletionParameters

La classe `OpenAIChatCompletionParameters` permet de gérer les paramètres requis pour les générations de réponses conversationnelles en utilisant l'API OpenAI.

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Propriété               | Type    | Valeur par défaut | Description                                                                                                                                                                                                                                       |
| ----------------------- | ------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                 | Text    | `"gpt-4o-mini"`   | ID du modèle à utiliser.                                                                                                                                                                                                          |
| `stream`                | Boolean | `False`           | Indique si la progression partielle doit être retransmise en continu. Si cette option est activée, les tokens seront envoyés sous forme de données uniquement. Une formule de rappel est requise. |
| `max_completion_tokens` | Integer | `0`               | Le nombre maximum de tokens qui peuvent être générés dans la réponse.                                                                                                                                                             |
| `n`                     | Integer | `1`               | Nombre de réponses à générer pour chaque invite (prompt).                                                                                                                                                      |
| `temperature`           | Real    | `-1`              | Température d'échantillonnage à utiliser, entre 0 et 2. Les valeurs élevées rendent la sortie plus aléatoire, tandis que des valeurs faibles la rendent plus ciblée et déterministe.                              |
| `store`                 | Boolean | `False`           | Stocker ou non le résultat de cette requête de génération de réponse conversationnelle.                                                                                                                                           |

## Voir également

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
