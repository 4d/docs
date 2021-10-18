---
id: imageformat
title: '$imageformat'
---

Define qué formato de imagen utilizar para recuperar imágenes (por ejemplo, `$imageformat=png`)

## Descripción

Define which format to use to display images. By default, the best format for the image will be chosen. You can, however, select one of the following formats:

| Tipo | Descripción                    |
| ---- | ------------------------------ |
| GIF  | Formato GIF                    |
| PNG  | Formato PNG                    |
| JPEG | Formato JPEG                   |
| TIFF | Formato TIFF                   |
| best | Best format based on the image |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be empty.

## Ejemplo

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`

