---
id: openaiimage
title: OpenAIImage
---

# OpenAIImage

La classe `OpenAIImage` représente une image générée par l'API OpenAI. Elle fournit des propriétés permettant d'accéder à l'image générée dans différents formats et des méthodes permettant de convertir cette image en différents types.

https://platform.openai.com/docs/api-reference/images/object

## Propriétés

| Propriété        | Type    | Description                                                                                                 |
| ---------------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| `url`            | Text    | The URL of the generated image, if `response_format` is `url` (default). |
| `b64_json`       | Text    | The base64-encoded JSON of the generated image, if `response_format` is `b64_json`.         |
| `revised_prompt` | Variant | The prompt that was used to generate the image, if there was any revision to the prompt.    |

## Fonctions

### asBlob()

**asBlob**() : 4D.Blob

| Paramètres | Type                    | Description                                                                                                                                              |
| ---------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Résultat   | 4D.Blob | \\| Function result\| 4D.Blob \| Converts the generated image to a blob format based on its URL or base64-encoded JSON. |

#### Exemple d'utilisation

```4d
var $blob:=$image.asBlob()
```

### asPicture()

**asPicture**() : Picture

| Paramètres | Type    | Description                                                                                               |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------- |
| Résultat   | Picture | \\| Function result\| Picture \| Creates a picture object from the blob converted image. |

#### Exemple d'utilisation

```4d
var $picture:=$image.asPicture()
```

### saveToDisk()

**saveToDisk**(*file* : 4D.File) : Boolean

| Paramètres | Type                    | Description                                                        |
| ---------- | ----------------------- | ------------------------------------------------------------------ |
| *file*     | 4D.File | The file object where the image will be saved.     |
| Résultat   | Boolean                 | Returns `True` if the image is successfully saved. |

Saves the image to disk, attempting to download it first if it is a URL. Returns `False` if it could not retrieve the image data.

#### Exemple d'utilisation

```4d
var $success:=$image.saveToDisk(Folder(fk desktop folder).file("image.png"))
```
