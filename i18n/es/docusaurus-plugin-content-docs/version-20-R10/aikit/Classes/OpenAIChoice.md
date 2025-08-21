---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

La clase `OpenAIChoice` representa una elección hecha por la respuesta de la API OpenAI, conteniendo información sobre la elección, incluyendo su razón terminada, índice, mensaje, y un mensaje parcial opcional para respuestas en streaming.

## Propiedades

| Propiedad       | Tipo                              | Descripción                                                                                                                                        |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | El mensaje asociado a esta elección.                                                                                               |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | Un mensaje parcial utilizado para las respuestas de streaming.(stream: True.md) |
| `finish_reason` | Text                              | La razón por la que terminó la elección (por ejemplo, "stop").                                                  |
| `index`         | Integer                           | El índice de la elección en la respuesta.                                                                                          |
