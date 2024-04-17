---
id: imageformat
title: $imageformat 
---

Defines which image format to use for retrieving images (*e.g.*, `$imageformat=png`)

## Description

Define which format to use to display images. You can use one of the following formats (extensions, mime types and OsType Mac are supported):

|Type|	Description|
|---|---|
|"best"|Best format based on the image|
|".gif" or "image/gif"|GIF format|
|".png" or "image/png"|PNG format|
|".jpeg" or "image/jpeg"|JPEG format|
|".tiff" or "image/tiff"|TIFF format|

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object `{}`.

## Example

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`

