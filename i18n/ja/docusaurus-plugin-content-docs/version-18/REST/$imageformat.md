---
id: imageformat
title: "$imageformat"
---

Defines which image format to use for retrieving images (*e.g.*, `$imageformat=png`)

## Description

Define which format to use to display images. By default, the best format for the image will be chosen. You can, however, select one of the following formats:

| Type | Description                    |
| ---- | ------------------------------ |
| GIF  | GIF format                     |
| PNG  | PNG format                     |
| JPEG | JPEG format                    |
| TIFF | TIFF format                    |
| best | Best format based on the image |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be empty.

## Example

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`

