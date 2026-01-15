---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés

| Propriété | Type   | Description                                                          |
| --------- | ------ | -------------------------------------------------------------------- |
| `data`    | Object | Contient le flux de données envoyées par le serveur. |

## Propriétés calculées

| Propriété | Type                            | Description                                                                                                   |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Renvoie une donnée `choice`, avec un message `delta`.                                         |
| `choices` | Collection                      | Renvoie une collection de données [OpenAIChoice](OpenAIChoice.md), avec des messages `delta`. |

### Propriétés surchargées

| Propriété    | Type                            | Description                                                                                                      |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Retourne `True` si le flux de données a été décodé avec succès en tant qu'objet.                 |
| `terminated` | Boolean                         | Un booléen indiquant si la requête HTTP a été close, c'est-à-dire si `onTerminate` a été appelé. |
