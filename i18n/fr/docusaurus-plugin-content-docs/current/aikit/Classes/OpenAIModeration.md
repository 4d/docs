---
id: openaimoderation
title: OpenAIModeration
---

# OpenAIModeration

The `OpenAIModeration` class is designed to handle moderation results from the OpenAI API. It contains properties for storing the moderation ID, model used, and the results of the moderation.

https://platform.openai.com/docs/api-reference/moderations/object

## Propriétés

| Propriété | Type                                            | Description                                                    |
| --------- | ----------------------------------------------- | -------------------------------------------------------------- |
| `id`      | Text                                            | The ID associated with the moderation request. |
| `model`   | Text                                            | The moderation model used for processing.      |
| `results` | Collection                                      | A collection of moderation results.            |
| `élément` | [OpenAIModerationItem](OpenAIModerationItem.md) | The first item from the results.               |
