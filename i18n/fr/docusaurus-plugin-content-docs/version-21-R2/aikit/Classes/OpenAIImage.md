---
id: openaiimage
title: OpenAIImage
---

# OpenAIImage

La classe `OpenAIImage` représente une image générée par l'API OpenAI. Elle fournit des propriétés permettant d'accéder à l'image générée dans différents formats et des méthodes permettant de convertir cette image en différents types.

https://platform.openai.com/docs/api-reference/images/object

## Propriétés

| Propriété        | Type    | Description                                                                                               |
| ---------------- | ------- | --------------------------------------------------------------------------------------------------------- |
| `url`            | Text    | L'URL de l'image générée, si `response_format` est `url` (par défaut). |
| `b64_json`       | Text    | Le JSON encodé en base64 de l'image générée, si `response_format` est `b64_json`.         |
| `revised_prompt` | Variant | L'invite utilisée pour générer l'image, s'il y a eu une révision de l'invite.             |

## Fonctions

### asBlob()

**asBlob**() : 4D.Blob

| Paramètres | Type                    | Description                                                                                                  |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| Résultat   | 4D.Blob | Convertit l'image générée au format blob sur la base de son URL ou du JSON encodé en base64. |

#### Exemple d'utilisation

```4d
var $blob:=$image.asBlob()
```

### asPicture()

**asPicture**() : Picture

| Paramètres | Type    | Description                                                                |
| ---------- | ------- | -------------------------------------------------------------------------- |
| Résultat   | Picture | Crée un objet image à partir de l'image convertie en blob. |

#### Exemple d'utilisation

```4d
var $picture:=$image.asPicture()
```

### saveToDisk()

**saveToDisk**(*file* : 4D.File) : Boolean

| Paramètres | Type                    | Description                                                               |
| ---------- | ----------------------- | ------------------------------------------------------------------------- |
| *file*     | 4D.File | L'objet File dans lequel l'image sera enregistrée.        |
| Résultat   | Boolean                 | Retourne `True` si l'image a été sauvegardée avec succès. |

Enregistre l'image sur le disque, en essayant d'abord de la télécharger s'il s'agit d'une URL. Renvoie `False` s'il n'a pas été possible de récupérer les données de l'image.

#### Exemple d'utilisation

```4d
var $success:=$image.saveToDisk(Folder(fk desktop folder).file("image.png"))
```
