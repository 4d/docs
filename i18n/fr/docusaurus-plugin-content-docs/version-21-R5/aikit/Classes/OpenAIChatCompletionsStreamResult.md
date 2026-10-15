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

| Propriété    | Type    | Description                                                                                                                                                                                                       |
| ------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `success`    | Boolean | Retourne `True` si le flux de données a été décodé avec succès en tant qu'objet.                                                                                                                  |
| `terminated` | Boolean | Un booléen indiquant si la requête HTTP a été close, c'est-à-dire si `onTerminate` a été appelé.                                                                                                  |
| `usage`      | Object  | Retourne les informations d'utilisation des tokens depuis les données du flux (uniquement disponibles dans le bloc final lorsque `stream_options.include_usage` est à `True`). |

### usage

La propriété `usage` retourne un objet contenant des informations d'utilisation de tokens, disponible uniquement dans le bloc final de streaming lorsque activé via `stream_options. nclude_usage: True` dans les paramètres de la requête.

La structure est la même que [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage) :

| Champ                       | Type    | Description                                                                        |
| --------------------------- | ------- | ---------------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Nombre de tokens dans l'invite.                                    |
| `completion_tokens`         | Integer | Nombre de tokens dans la réponse.                                  |
| `total_tokens`              | Integer | Total des tokens utilisés (invite + réponse).   |
| `prompt_tokens_details`     | Object  | Répartition des tokens d'invite (facultatif).   |
| `completion_tokens_details` | Object  | Répartition des tokens de réponse (facultatif). |

> **Note :** Pour recevoir des informations d'utilisation dans les réponses de streaming, vous devez définir `stream_options: {include_usage: True}` dans vos paramètres de votre requête. Voir [OpenAIChatCompletionsParameters](OpenAIChatCompletionsParameters.md) pour plus de détails.
