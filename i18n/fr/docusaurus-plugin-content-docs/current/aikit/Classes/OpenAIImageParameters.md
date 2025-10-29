---
id: openaiimageparameters
title: OpenAIImageParameters
---

# OpenAIImageParameters

La classe `OpenAIImageParameters` permet de configurer et gérer les paramètres utilisés pour la génération d'images avec l'API OpenAI.

## Hérite de

- [OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Nom de propriété  | Type    | Valeur par défaut | Description                                                                                                                                  |
| ----------------- | ------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`           | Text    | "dall-e-2"        | Spécifie le modèle à utiliser pour la génération d'images.                                                                   |
| `n`               | Integer | 1                 | Le nombre d'images à générer (doit être compris entre 1 et 10 ; seul `n=1` est supporté pour `dall-e-3`). |
| `size`            | Text    | "1024x1024"       | La taille des images générées. Doit être conforme aux spécifications du modèle.                              |
| `style`           | Text    | ""                | Le style des images générées (doit être soit `vivid` soit `natural`).                                     |
| `response_format` | Text    | "url"             | Le format des images retournées. Doit être `url` ou `b64_json`.                                              |

## Voir également

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
