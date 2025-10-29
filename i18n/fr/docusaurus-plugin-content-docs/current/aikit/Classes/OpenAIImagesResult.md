---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type                                        | Description                                                             |
| --------- | ------------------------------------------- | ----------------------------------------------------------------------- |
| `images`  | Collection de [OpenAIImage](OpenAIImage.md) | Renvoie une collection d'objets OpenAIImage.            |
| `image`   | [OpenAIImage](OpenAIImage.md)               | Renvoie la première image OpenAIImage de la collection. |

## Fonctions

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Paramètres | Type                      | Description                                                                     |
| ---------- | ------------------------- | ------------------------------------------------------------------------------- |
| *folder*   | 4D.Folder | Dossier dans lequel les images seront enregistrées.             |
| *prefix*   | Text                      | Préfixe des noms des fichiers d'images enregistrés.             |
| Résultat   | Boolean                   | Retourne `True` si les images ont été sauvegardées avec succès. |

Enregistre les images sur disque dans le dossier spécifié.

## Voir également

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
