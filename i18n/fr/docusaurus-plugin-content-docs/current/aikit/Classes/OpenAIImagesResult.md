---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type                                        | Description                                                                                                          |
| --------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `images`  | Collection de [OpenAIImage](OpenAIImage.md) | Renvoie une collection d'objets OpenAIImage.                                                         |
| `image`   | [OpenAIImage](OpenAIImage.md)               | Renvoie la première image OpenAIImage de la collection.                                              |
| `usage`   | Object                                      | Returns token usage information (inherited from [OpenAIResult](OpenAIResult.md)). |

### usage

The `usage` property returns an object containing token usage information for image generation (when supported by the provider).

| Champ                  | Type    | Description                                                                 |
| ---------------------- | ------- | --------------------------------------------------------------------------- |
| `total_tokens`         | Integer | Total tokens used.                                          |
| `input_tokens`         | Integer | Number of tokens in the input (prompt).  |
| `output_tokens`        | Integer | Number of tokens for the output (image). |
| `input_tokens_details` | Object  | Breakdown of input tokens (optional).    |

#### input_tokens_details

| Champ          | Type    | Description                                                                               |
| -------------- | ------- | ----------------------------------------------------------------------------------------- |
| `text_tokens`  | Integer | Number of text tokens in the prompt.                                      |
| `image_tokens` | Integer | Number of image tokens (for image editing/variations). |

**Example response:**

```json
{
  "total_tokens": 100,
  "input_tokens": 50,
  "output_tokens": 50,
  "input_tokens_details": {
    "text_tokens": 10,
    "image_tokens": 40
  }
}
```

> **Note:** Image generation usage may not be available from all providers. The structure may vary depending on the specific image API endpoint used.

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
