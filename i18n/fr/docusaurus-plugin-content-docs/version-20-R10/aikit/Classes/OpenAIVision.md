---
id: openaivision
title: OpenAIVision
---

# OpenAIVision

Assistance pour les questions de vision.

## Fonctions

### create()

\**create*(*imageURL* : Text) : OpenAIVisionHelper

| Paramètres | Type                                        | Description                                                    |
| ---------- | ------------------------------------------- | -------------------------------------------------------------- |
| *imageURL* | Text                                        | L'URL de l'image à analyser.                   |
| Résultat   | [OpenAIVisionHelper](OpenAIVisionHelper.md) | Une instance d'aide pour l'analyse de l'image. |

#### Exemple d'utilisation

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")
var $result:=$helper.prompt("Could you describe it?")
```

### fromFile()

\**fromFile*(*imageFile* : 4D.File) : OpenAIVisionHelper

| Paramètres  | Type                                        | Description                                                    |
| ----------- | ------------------------------------------- | -------------------------------------------------------------- |
| *imageFile* | 4D.File                     | Le fichier image à analyser.                   |
| Résultat    | [OpenAIVisionHelper](OpenAIVisionHelper.md) | Une instance d'aide pour l'analyse de l'image. |

#### Exemple d'utilisation

```4d
var $helper:=$client.chat.vision.fromFile(Folder(fk resource foldres).file("image.png"))
var $result:=$helper.prompt("Could you describe it?")
```

### fromPicture()

\**fromPicture*(*image* : Picture) : OpenAIVisionHelper

| Paramètres | Type                                        | Description                                                    |
| ---------- | ------------------------------------------- | -------------------------------------------------------------- |
| *image*    | Picture                                     | L'image à analyser.                            |
| Résultat   | [OpenAIVisionHelper](OpenAIVisionHelper.md) | Une instance d'aide pour l'analyse de l'image. |

#### Exemple d'utilisation

```4d
var $helper:=$client.chat.vision.fromPicture($image)
var $result:=$helper.prompt("Could you describe it?")
```
