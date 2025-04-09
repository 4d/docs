---
id: openaivision
title: OpenAIVision
---

# OpenAIVision

## Functions

### `create($imageURL: Text) : OpenAIVisionHelper`

This function creates a new instance of the [`OpenAIVisionHelper`](OpenAIVisionHelper.md) using the provided image URL.

| Parameter   | Type  | Description                   |
|-------------|-------|-------------------------------|
| `$imageURL` | Text  | The URL of the image to analyze. |

```4d
var $helper:=$client.chat.vision.create("http://example.com/image.jpg")
var $result:=$helper.prompt("Could you describe it?")
```

### `fromFile($imageFile: 4D.File) : OpenAIVisionHelper`
	
This function creates a new instance of the [`OpenAIVisionHelper`](OpenAIVisionHelper.md) using the provided image file.

| Parameter    | Type    | Description                  |
|--------------|---------|------------------------------|
| `$imageFile` | 4D.File | The image file to analyze.    |

```4d
var $helper:=$client.chat.vision.fromFile(Folder(fk resource foldres).file("image.png"))
var $result:=$helper.prompt("Could you describe it?")
```
	
### `fromPicture($image: Picture) : OpenAIVisionHelper`

This function creates a new instance of the [`OpenAIVisionHelper`](OpenAIVisionHelper.md) using the provided image.

| Parameter    | Type    | Description                  |
|--------------|---------|------------------------------|
| `$image`     | Picture | The image file to analyze.   |
