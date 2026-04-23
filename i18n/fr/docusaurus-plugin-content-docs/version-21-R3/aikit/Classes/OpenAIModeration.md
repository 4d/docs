---
id: openaimoderation
title: OpenAIModeration
---

# OpenAIModeration

La classe `OpenAIModeration` permet de gérer les résultats de modération de l'API OpenAI. Elle contient des propriétés permettant de stocker l'identifiant de modération, le modèle utilisé et les résultats de la modération.

https://platform.openai.com/docs/api-reference/moderations/object

## Propriétés

| Propriété | Type                                            | Description                                                         |
| --------- | ----------------------------------------------- | ------------------------------------------------------------------- |
| `id`      | Text                                            | L'identifiant associé à la requête de modération.   |
| `model`   | Text                                            | Le modèle de modération utilisé pour le traitement. |
| `results` | Collection                                      | Une collection de résultats de la modération.       |
| `item`    | [OpenAIModerationItem](OpenAIModerationItem.md) | Le premier élément des résultats.                   |
