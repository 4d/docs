---
id: openaiimage
title: OpenAIImage
---

# OpenAIImage

La clase `OpenAIImage` representa una imagen generada por la API OpenAI. It provides properties for accessing the generated image in different formats and methods for converting this image to different types.

https://platform.openai.com/docs/api-reference/images/object

## Propiedades

| Propiedad        | Tipo    | Descripción                                                                                                      |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------- |
| `url`            | Text    | La URL de la imagen generada, si `response_format` es `url` (por defecto).    |
| `b64_json`       | Text    | El JSON codificado en base64 de la imagen generada, si `response_format` es `b64_json`.          |
| `revised_prompt` | Variant | La instrucción que se utilizó para generar la imagen, si hubo alguna revisión de la instrucción. |

## Funciones

### asBlob()

**asBlob**() : 4D.Blob

| Parámetros | Tipo                    | Descripción                                                                                                        |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Resultado  | 4D.Blob | Convierte la imagen generada a un formato blob basado en su URL o en un JSON codificado en base64. |

#### Ejemplo de Uso

```4d
var $blob:=$image.asBlob()
```

### asPicture()

**asPicture**() : Picture

| Parámetros | Tipo    | Descripción                                                                     |
| ---------- | ------- | ------------------------------------------------------------------------------- |
| Resultado  | Picture | Crea un objeto imagen a partir de la imagen convertida en blob. |

#### Ejemplo de Uso

```4d
var $picture:=$image.asPicture()
```

### saveToDisk()

**saveToDisk**(*file* : 4D.File) : Boolean

| Parámetros | Tipo                    | Descripción                                                                |
| ---------- | ----------------------- | -------------------------------------------------------------------------- |
| *file*     | 4D.File | El objeto File donde se guardará la imagen.                |
| Resultado  | Boolean                 | Devuelve `True` si la imagen se ha guardado correctamente. |

Saves the image to disk, attempting to download it first if it is a URL. Devuelve `False` si no ha podido recuperar los datos de la imagen.

#### Ejemplo de Uso

```4d
var $success:=$image.saveToDisk(Folder(fk desktop folder).file("image.png"))
```
