---
id: openaimoderation
title: OpenAIModeration
---

# OpenAIModeration

La classe `OpenAIModeration` est conçue pour gérer les résultats de modération de l'API OpenAI. Elle contient des propriétés permettant de stocker l'identifiant de modération, le modèle utilisé et les résultats de la modération.

https://platform.openai.com/docs/api-reference/moderations/object

## Propriétés

| Propriété | Type                                            | Description                                                    |
| --------- | ----------------------------------------------- | -------------------------------------------------------------- |
| `id`      | Text                                            | The ID associated with the moderation request. |
| `model`   | Text                                            | The moderation model used for processing.      |
| `results` | Collection                                      | A collection of moderation results.            |
| `élément` | [OpenAIModerationItem](OpenAIModerationItem.md) | The first item from the results.               |
