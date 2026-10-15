---
id: openaichatcompletionsresult
title: OpenAIChatCompletionsResult
---

# OpenAIChatCompletionsResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type         | Description                                                                                                                       |
| --------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| `choices` | Collection   | Renvoie une collection de [OpenAIChoice](OpenAIChoice.md) de la réponse OpenAI.                                   |
| `choice`  | OpenAIChoice | Renvoie le premier [OpenAIChoice](OpenAIChoice.md) de la collection `choices`.                                    |
| `usage`   | Object       | Renvoie les informations d'utilisation des tokens (hérité de [OpenAIResult](OpenAIResult.md)). |

### usage

La propriété `usage` renvoie un objet contenant des informations sur l'utilisation des tokens pour les suggestions de conversations.

| Champ                       | Type    | Description                                                                        |
| --------------------------- | ------- | ---------------------------------------------------------------------------------- |
| `prompt_tokens`             | Integer | Nombre de tokens dans l'invite.                                    |
| `completion_tokens`         | Integer | Nombre de tokens dans la réponse.                                  |
| `total_tokens`              | Integer | Total des tokens utilisés (invite + réponse).   |
| `prompt_tokens_details`     | Object  | Répartition des tokens d'invite (facultatif).   |
| `completion_tokens_details` | Object  | Répartition des tokens de réponse (facultatif). |

#### prompt_tokens_details

| Champ           | Type    | Description                                                                 |
| --------------- | ------- | --------------------------------------------------------------------------- |
| `cached_tokens` | Integer | Nombre de tokens servis depuis le cache.                    |
| `audio_tokens`  | Integer | Nombre de tokens audio (le cas échéant). |

#### completion_tokens_details

| Champ                        | Type    | Description                                                                                        |
| ---------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| `reasoning_tokens`           | Integer | Tokens utilisés pour le raisonnement (par exemple, modèles o1). |
| `audio_tokens`               | Integer | Nombre de tokens audio (le cas échéant).                        |
| `accepted_prediction_tokens` | Integer | Tokens de prédictions acceptées.                                                   |
| `rejected_prediction_tokens` | Integer | Tokens de prédictions rejetées.                                                    |

**Exemple de réponse :**

```json
{
  "prompt_tokens": 19,
  "completion_tokens": 10,
  "total_tokens": 29,
  "prompt_tokens_details": {
    "cached_tokens": 0,
    "audio_tokens": 0
  },
  "completion_tokens_details": {
    "reasoning_tokens": 0,
    "audio_tokens": 0,
    "accepted_prediction_tokens": 0,
    "rejected_prediction_tokens": 0
  }
}
```

> **Note :** Les objets `*_tokens_details` peuvent ne pas être présents dans toutes les réponses ou les réponses de tous les fournisseurs.

## Voir également

- [OpenAIChatCompletionsAPI](OpenAIChatCompletionsAPI.md)
