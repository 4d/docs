---
id: openaimoderation
title: OpenAIModeration
---

# OpenAIModeration

The `OpenAIModeration` class is designed to handle moderation results from the OpenAI API. It contains properties for storing the moderation ID, model used, and the results of the moderation.

https://platform.openai.com/docs/api-reference/moderations/object

## Propiedades

| Propiedad  | Tipo                                            | Descripción                                                  |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `id`       | Text                                            | El ID asociado a la solicitud de moderación. |
| `model`    | Text                                            | The moderation model used for processing.    |
| `results`  | Collection                                      | A collection of moderation results.          |
| `elemento` | [OpenAIModerationItem](OpenAIModerationItem.md) | El primer elemento de los resultados.        |
