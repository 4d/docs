---
id: openaimoderation
title: OpenAIModeration
---

# OpenAIModeration

La clase `OpenAIModeration` está diseñada para manejar los resultados de moderación de la API OpenAI. Contiene propiedades para almacenar el ID de moderación, el modelo utilizado y los resultados de la moderación.

https://platform.openai.com/docs/api-reference/moderations/object

## Propiedades

| Propiedad  | Tipo                                            | Descripción                                                              |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------------------ |
| `id`       | Text                                            | El ID asociado a la solicitud de moderación.             |
| `model`    | Text                                            | El modelo de moderación utilizado para el procesamiento. |
| `results`  | Collection                                      | Una colección de resultados de moderación.               |
| `elemento` | [OpenAIModerationItem](OpenAIModerationItem.md) | El primer elemento de los resultados.                    |
