---
id: openaiimage
title: OpenAIImage
---

# OpenAIImage

A classe 'OpenAIImage' representa uma imagem gerada pela API OpenAI. It provides properties for accessing the generated image in different formats and methods for converting this image to different types.

https://platform.openai.com/docs/api-reference/images/object

## Propriedades

| Propriedade      | Tipo         | Descrição                                                                                                |
| ---------------- | ------------ | -------------------------------------------------------------------------------------------------------- |
| `url`            | Text         | A URL da imagem gerada, se `response_format` for `url` (padrão).      |
| `b64_json`       | Text         | The base64-encoded JSON of the generated image, if `response_format` is `b64_json`.      |
| `revised_prompt` | Diferente de | The prompt that was used to generate the image, if there was any revision to the prompt. |

## Funções

### asBlob()

**asBlob**() : 4D.Blob

\| Function result| 4D.Blob | Converts the generated image to a blob format based on its URL or base64-encoded JSON. |

#### Example Usage

```4d
var $blob:=$image.asBlob()
```

### asPicture()

**asPicture**() : Picture

\| Function result| Picture | Creates a picture object from the blob converted image. |

#### Example Usage

```4d
var $picture:=$image.asPicture()
```

### saveToDisk()

**saveToDisk**(*file* : 4D.File) : Boolean

| Parâmetro | Tipo                     | Descrição                                                          |
| --------- | ------------------------ | ------------------------------------------------------------------ |
| *file*    | 4D. File | The file object where the image will be saved.     |
| Resultado | Parâmetros               | Returns `True` if the image is successfully saved. |

Saves the image to disk, attempting to download it first if it is a URL. Returns `False` if it could not retrieve the image data.

#### Example Usage

```4d
var $success:=$image.saveToDisk(Folder(fk desktop folder).file("image.png"))
```
