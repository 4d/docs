---
id: openaichoice
title: OpenAIChoice
---

# OpenAIChoice

La classe `OpenAIChoice` représente un choix fait par la réponse de l'API OpenAI, contenant des informations sur le choix, y compris sa raison finie, son index, son message, et un message partiel optionnel pour les réponses en streaming.

## Propriétés

| Propriété       | Type                              | Description                                                                                                |
| --------------- | --------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `message `      | [OpenAIMessage](OpenAIMessage.md) | Le message associé à ce choix.                                                             |
| `delta`         | [OpenAIMessage](OpenAIMessage)    | Un message partiel utilisé pour les réponses en continu (stream : True) |
| `finish_reason` | Text                              | La raison pour laquelle le choix s'est terminé (par exemple, "stop").   |
| `index`         | Integer                           | L'indice du choix dans la réponse.                                                         |
