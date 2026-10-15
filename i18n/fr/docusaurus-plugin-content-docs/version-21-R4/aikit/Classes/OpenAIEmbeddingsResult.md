---
id: openaiembeddingsresult
title: OpenAIEmbeddingsResult
---

# OpenAIEmbeddingsResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété    | Type                                  | Description                                                                                                                       |
| ------------ | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `model`      | Text                                  | Retourne le modèle utilisé pour calculer la représentation vectorielle                                                            |
| `vector`     | `4D.Vector`                           | Retourne le premier `4D.Vector` de la collection `vectors`.                                                       |
| `vectors`    | Collection                            | Retourne une collection de `4D.Vector`.                                                                           |
| `embedding`  | [OpenAIEmbedding](OpenAIEmbedding.md) | Retourne le premier [OpenAIEmbedding](OpenAIEmbedding.md) de la collection `embeddings`.                          |
| `embeddings` | Collection                            | Retourne une collection de [OpenAIEmbedding](OpenAIEmbedding.md).                                                 |
| `usage`      | Object                                | Renvoie les informations d'utilisation des tokens (hérité de [OpenAIResult](OpenAIResult.md)). |

### usage

La propriété `usage` retourne un objet contenant des informations d'utilisation des tokens pour les embeddings.

| Champ           | Type    | Description                                                                                                                        |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `prompt_tokens` | Integer | Nombre de tokens dans le(s) texte(s) d'entrée.                               |
| `total_tokens`  | Integer | Total des tokens utilisés (identique à prompt_tokens pour les embeddings). |

**Exemple de réponse :**

```json
{
  "prompt_tokens": 8,
  "total_tokens": 8
}
```

> **Note :** Les emneddings ne consomment que des tokens d'invite (il n'y a pas de réponse), donc `total_tokens` équivaut à `prompt_tokens`.

## Voir également

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
