---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

The `OpenAIChoice` class represents a choice made by the OpenAI API response, containing information about the choice, including its finished reason, index, message, and an optional partial message for streaming responses.

## Propriedades

| Propriedade     | Tipo                              | Descrição                                                                                                                                    |
| --------------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | The message associated with this choice.                                                                                     |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | Uma mensagem parcial usada para respostas de streaming. (stream: True.md) |
| `finish_reason` | Text                              | The reason the choice finished (e.g., "stop").                            |
| `index`         | Integer                           | The index of the choice in the response.                                                                                     |
