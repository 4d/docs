---
id: openaiimagesapi
title: OpenAIImagesAPI
---

# OpenAIImagesAPI

Le `OpenAIImagesAPI` fournit des fonctionnalités pour générer des images en utilisant l'API d'OpenAI.

https://platform.openai.com/docs/api-reference/images

## Fonctions

### generate()

**generate**(*prompt* : Text; *parameters* : OpenAIImageParameters) : OpenAIImagesResult

| Paramètres   | Type                                              | Description                                                      |
| ------------ | ------------------------------------------------- | ---------------------------------------------------------------- |
| *prompt*     | Text                                              | L'invite à utiliser pour la génération d'image.  |
| *paramètres* | [OpenAIImageParameters](OpenAIImageParameters.md) | Paramètres pour la génération d'images.          |
| Résultat     | [OpenAIImagesResult](OpenAIImagesResult.md)       | Le résultat contenant la ou les images générées. |

Crée une image à partir d'une invite.

https://platform.openai.com/docs/api-reference/images/create

## Exemple

```4d
var $result:=$client.images.generate("A futuristic city skyline at sunset"; {size: "1024x1024"})

var $image:=$result.image
If($image#Null)
  $image.saveToDisk(Folder(fk desktop folder).file("skylinecity.png"))
End if
```

Si plusieurs images ont été générées

```4d
var $image: cs.AIKit.OpenAIImage
For each($image; $result.images || [])
  // asBlob, asPicture, saveToDisk
End for each
```
