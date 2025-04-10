---
id: openaiimagesapi
title: OpenAIImagesAPI
---

# OpenAIImagesAPI

The `OpenAIImagesAPI` provides functionalities to generate images using OpenAI's API.

https://platform.openai.com/docs/api-reference/images

## Functions

### generate()

**generate**(*prompt* : Text; *parameters* : OpenAIImageParameters) : OpenAIImagesResult

| Parameter        | Type                                           | Description                                          |
|------------------|------------------------------------------------|------------------------------------------------------|
| *prompt*         | Text                                         | The prompt to use for image generation.              |
| *parameters*     | [OpenAIImageParameters](OpenAIImageParameters.md) | Parameters for image generation.                     |
| Function result| [OpenAIImagesResult](OpenAIImagesResult.md)       | The result containing the generated image(s).        |

Creates an image given a prompt.

https://platform.openai.com/docs/api-reference/images/create

## Example

```4d
var $result:=$client.image.generate("A futuristic city skyline at sunset"; {size: "1024x1024"})

var $image:=$result.image
If($image#Null)
  $image.saveToDisk(Folder(fk desktop folder).file("skylinecity.png"))
End if
```

If more than one image generated

```4d
var $image: cs.AIKit.OpenAIImage
For each($image; $resule.images || [])
  // asBlob, asPicture, saveToDisk
End for each
```