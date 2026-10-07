---
id: openaiembeddingsparameters
title: OpenAIEmbeddingsParameters
---

# OpenAIEmbeddingsParameters

La classe `OpenAIEmbeddingsParameters` permet de configurer et gérer les paramètres utilisés pour créer des représentations vectorielles via l'API OpenAI.

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Nom de propriété  | Type    | Description                                                                                                                                                                                             |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encoding_format` | Text    | Le format dans lequel les représentations vectorielles doivent être renvoyées. Peut être `float` ou `base64`. (par défaut : `float`) |
| `dimensions`      | Integer | Le nombre de dimensions que les représentations vectorielles résultantes doivent avoir. Uniquement pris en charge dans les modèles text-embedding-3 et ultérieurs.      |

## Voir également

- [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)
