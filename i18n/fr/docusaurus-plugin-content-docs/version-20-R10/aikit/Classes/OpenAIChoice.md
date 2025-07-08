---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

La classe `OpenAIChoice` représente un choix fait par la réponse de l'API OpenAI, contenant des informations sur le choix, y compris sa raison finie, son index, son message, et un message partiel optionnel pour les réponses en streaming.

## Propriétés

| Propriété       | Type                              | Description                                                                                                                         |
| --------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | The message associated with this choice.                                                                            |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | A partial message used for streaming responses.(stream: True.md) |
| `finish_reason` | Text                              | The reason the choice finished (e.g., "stop").                   |
| `index`         | Integer                           | The index of the choice in the response.                                                                            |
