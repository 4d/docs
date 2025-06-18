---
id: openaivision
title: OpenAIVision
---

# OpenAIVision

Helper for vision stuff.

## Funções

### create()

\**create*(*imageURL* : Text) : OpenAIVisionHelper

| Parâmetro  | Tipo                                        | Descrição                                                  |
| ---------- | ------------------------------------------- | ---------------------------------------------------------- |
| *imageURL* | Text                                        | The URL of the image to analyze.           |
| Resultado  | [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Exemplo de uso

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")
var $result:=$helper.prompt("Could you describe it?")
```

### fromFile()

\**fromFile*(*imageFile* : 4D.File) : OpenAIVisionHelper

| Parâmetro   | Tipo                                        | Descrição                                                  |
| ----------- | ------------------------------------------- | ---------------------------------------------------------- |
| *imageFile* | 4D. File                    | O arquivo imagem a ser analisado.          |
| Resultado   | [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Exemplo de uso

```4d
var $helper:=$client.chat.vision.fromFile(Folder(fk resource foldres).file("image.png"))
var $result:=$helper.prompt("Could you describe it?")
```

### fromPicture()

\**fromPicture*(*image* : Picture) : OpenAIVisionHelper

| Parâmetro | Tipo                                        | Descrição                                                  |
| --------- | ------------------------------------------- | ---------------------------------------------------------- |
| *imagem*  | Imagem                                      | A imagem a analisar.                       |
| Resultado | [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Exemplo de uso

```4d
var $helper:=$client.chat.vision.fromPicture($image)
var $result:=$helper.prompt("Could you describe it?")
```
