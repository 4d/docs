---
id: imageformat
title: '$imageformat'
---

Define qué formato de imagen utilizar para recuperar imágenes (por ejemplo, `$imageformat=png`)

## Descripción

Definir el formato a utilizar para mostrar las imágenes. You can use one of the following formats (extensions, mime types and OsType Mac are supported):

| Tipo                    | Descripción                              |
| ----------------------- | ---------------------------------------- |
| "best"                  | El mejor formato en función de la imagen |
| ".gif" or "image/gif"   | Formato GIF                              |
| ".png" or "image/png"   | Formato PNG                              |
| ".jpeg" or "image/jpeg" | Formato JPEG                             |
| ".tiff" or "image/tiff" | Formato TIFF                             |

Una vez que haya definido el formato, debe pasar el atributo de imagen a [`$expand`]($expand.md) para cargar la foto completamente.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be an empty object `{}`.

## Ejemplo

El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el número de versión real enviado por el servidor:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`

