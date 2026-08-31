---
id: openaiimagesresult
title: OpenAIImagesResult
---

# OpenAIImagesResult

## Hérite de

- [OpenAIResult](OpenAIResult.md)

## Propriétés calculées

| Propriété | Type                                        | Description                                                                                                                       |
| --------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `images`  | Collection de [OpenAIImage](OpenAIImage.md) | Renvoie une collection d'objets OpenAIImage.                                                                      |
| `image`   | [OpenAIImage](OpenAIImage.md)               | Renvoie la première image OpenAIImage de la collection.                                                           |
| `usage`   | Object                                      | Renvoie les informations d'utilisation des tokens (hérité de [OpenAIResult](OpenAIResult.md)). |

### usage

La propriété `usage` retourne un objet contenant des informations sur l'utilisation de tokens pour la génération d'images (lorsque pris en charge par le fournisseur).

| Champ                  | Type    | Description                                                                      |
| ---------------------- | ------- | -------------------------------------------------------------------------------- |
| `total_tokens`         | Integer | Total des tokens utilisés.                                       |
| `input_tokens`         | Integer | Nombre de tokens dans l'entrée (prompt).      |
| `output_tokens`        | Integer | Nombre de tokens pour la sortie (image).      |
| `input_tokens_details` | Object  | Répartition des tokens d'entrée (facultatif). |

#### input_tokens_details

| Champ          | Type    | Description                                                                                             |
| -------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `text_tokens`  | Integer | Nombre de tokens de texte dans l'invite.                                                |
| `image_tokens` | Integer | Nombre de tokens d'image (pour l'édition et les variations d'image). |

**Exemple de réponse :**

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

> **Note:** L'usage de génération d'images peut ne pas être disponible auprès de tous les fournisseurs. La structure peut varier selon le point de terminaison de l'API image utilisé.

## Fonctions

### saveImagesToDisk()

**saveImagesToDisk**(*folder* : 4D.Folder; *prefix* : Text) : Boolean

| Paramètres              | Type                      | Description                                                                     |
| ----------------------- | ------------------------- | ------------------------------------------------------------------------------- |
| *folder*                | 4D.Folder | Dossier dans lequel les images seront enregistrées.             |
| *prefix*                | Text                      | Préfixe des noms des fichiers d'images enregistrés.             |
| Résultat de la fonction | Boolean                   | Retourne `True` si les images ont été sauvegardées avec succès. |

Enregistre les images sur disque dans le dossier spécifié.

## Voir également

- [OpenAIImagesAPI](OpenAIImagesAPI.md)
