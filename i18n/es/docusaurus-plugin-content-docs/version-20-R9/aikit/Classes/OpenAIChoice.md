---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

The `OpenAIChoice` class represents a choice made by the OpenAI API response, containing information about the choice, including its finished reason, index, message, and an optional partial message for streaming responses.

## Propiedades

| Propiedad       | Tipo                              | Descripción                                                                                                                                        |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | El mensaje asociado a esta elección.                                                                                               |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | Un mensaje parcial utilizado para las respuestas de streaming.(stream: True.md) |
| `finish_reason` | Text                              | La razón por la que terminó la elección (por ejemplo, "stop").                                                  |
| `index`         | Integer                           | El índice de la elección en la respuesta.                                                                                          |
