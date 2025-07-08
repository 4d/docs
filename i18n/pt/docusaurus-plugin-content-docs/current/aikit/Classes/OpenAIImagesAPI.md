---
id: openaiimagesapi
title: OpenAIImagesAPI
---

# OpenAIImagesAPI

The `OpenAIImagesAPI` provides functionalities to generate images using OpenAI's API.

https://platform.openai.com/docs/api-reference/images

## Funções

### generate()

**generate**(*prompt* : Text; *parameters* : OpenAIImageParameters) : OpenAIImagesResult

| Parâmetro    | Tipo                                              | Descrição                                                                        |
| ------------ | ------------------------------------------------- | -------------------------------------------------------------------------------- |
| *prompt*     | Text                                              | The prompt to use for image generation.                          |
| *parâmetros* | [OpenAIImageParameters](OpenAIImageParameters.md) | Parâmetros para a geração de imagens.                            |
| Resultado    | [OpenAIImagesResult](OpenAIImagesResult.md)       | The result containing the generated image(s). |

Creates an image given a prompt.

https://platform.openai.com/docs/api-reference/images/create

## Exemplo

```4d
var $result:=$client.images.generate("A futuristic city skyline at sunset"; {size: "1024x1024"})

var $image:=$result.image
If($image#Null)
  $image.saveToDisk(Folder(fk desktop folder).file("skylinecity.png"))
End if
```

If more than one image generated

```4d
var $image: cs.AIKit.OpenAIImage
For each($image; $result.images || [])
  // asBlob, asPicture, saveToDisk
End for each
```
