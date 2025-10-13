---
id: openaivision
title: OpenAIVision
---

# OpenAIVision

Asistente para Vision.

## Funciones

### create()

**create**(*imageURL* : Text) : OpenAIVisionHelper

| Parámetros | Tipo                                        | Descripción                                                |
| ---------- | ------------------------------------------- | ---------------------------------------------------------- |
| *imageURL* | Text                                        | La URL de la imagen a analizar.            |
| Resultado  | [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Ejemplo de Uso

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")
var $result:=$helper.prompt("Could you describe it?")
```

### fromFile()

**fromFile**(*imageFile* : 4D.File): OpenAIVisionHelper

| Parámetros  | Tipo                                        | Descripción                                                |
| ----------- | ------------------------------------------- | ---------------------------------------------------------- |
| *imageFile* | 4D.File                     | El archivo de imagen que se va a analizar. |
| Resultado   | [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Ejemplo de Uso

```4d
var $helper:=$client.chat.vision.fromFile(Folder(fk resources folder).file("image.png"))
var $result:=$helper.prompt("Could you describe it?")
```

### fromPicture()

**fromPicture**(*image* : Picture) : OpenAIVisionHelper

| Parámetros | Tipo                                        | Descripción                                                |
| ---------- | ------------------------------------------- | ---------------------------------------------------------- |
| *imagen*   | Picture                                     | La imagen a analizar.                      |
| Resultado  | [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Ejemplo de Uso

```4d
var $helper:=$client.chat.vision.fromPicture($image)
var $result:=$helper.prompt("Could you describe it?")
```
