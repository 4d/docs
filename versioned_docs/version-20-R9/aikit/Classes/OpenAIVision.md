---
id: openaivision
title: OpenAIVision
---

# OpenAIVision

Helper for vision stuff.

## Functions

### create()

**create*(*imageURL* : Text) : OpenAIVisionHelper

| Parameter        | Type  | Description                   |
|------------------|-------|-------------------------------|
| *imageURL*       | Text  | The URL of the image to analyze. |
| Function result| [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Example Usage

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")
var $result:=$helper.prompt("Could you describe it?")
```

### fromFile()

**fromFile*(*imageFile* : 4D.File) : OpenAIVisionHelper

| Parameter        | Type      | Description                  |
|------------------|-----------|------------------------------|
| *imageFile*      | 4D.File   | The image file to analyze.   |
| Function result| [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Example Usage

```4d
var $helper:=$client.chat.vision.fromFile(Folder(fk resource foldres).file("image.png"))
var $result:=$helper.prompt("Could you describe it?")
```

### fromPicture()

**fromPicture*(*image* : Picture) : OpenAIVisionHelper

| Parameter        | Type      | Description                  |
|------------------|-----------|------------------------------|
| *image*          | Picture   | The image to analyze.        |
| Function result| [OpenAIVisionHelper](OpenAIVisionHelper.md) | A helper instance for analyzing the image. |

#### Example Usage

```4d
var $helper:=$client.chat.vision.fromPicture($image)
var $result:=$helper.prompt("Could you describe it?")
```
