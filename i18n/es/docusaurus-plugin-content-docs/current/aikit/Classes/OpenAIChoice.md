---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

The `OpenAIChoice` class represents a choice made by the OpenAI API response, containing information about the choice, including its finished reason, index, message, and an optional partial message for streaming responses.

## Propiedades

| Propiedad       | Tipo                              | Descripción                                                                                                                         |
| --------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | The message associated with this choice.                                                                            |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | A partial message used for streaming responses.(stream: True.md) |
| `finish_reason` | Text                              | La razón por la que terminó la elección (por ejemplo, "stop").                                   |
| `index`         | Integer                           | The index of the choice in the response.                                                                            |
