---
id: imageformat
title: '$imageformat'
---

Define o formato de imagem a utilizar para a recuperação de imagens (*por exemplo*, `$imageformat=png`)

## Descrição

Define which format to use to display images. You can use one of the following formats (extensions, mime types and OsType Mac are supported):

| Tipo                    | Descrição                      |
| ----------------------- | ------------------------------ |
| "best"                  | Best format based on the image |
| ".gif" ou "image/gif"   | Formato GIF                    |
| ".png" ou "image/png"   | Formato PNG                    |
| ".jpeg" or "image/jpeg" | Formato JPEG                   |
| ".tiff" ou "image/tiff" | Formato TIFF                   |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object `{}`.

## Exemplo

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`

