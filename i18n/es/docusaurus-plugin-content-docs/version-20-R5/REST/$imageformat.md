---
id: imageformat
title: $imageformat
---

Defines which image format to use for retrieving images (_e.g._, `$imageformat=png`)

## Descripción

Definir el formato a utilizar para mostrar las imágenes. Puede utilizar uno de los siguientes formatos (se soportan extensiones, tipos mime y OsType Mac):

| Tipo                                   | Descripción                              |
| -------------------------------------- | ---------------------------------------- |
| "best"                                 | El mejor formato en función de la imagen |
| ".gif" o "image/gif"   | Formato GIF                              |
| ".png" o "image/png"   | Formato PNG                              |
| ".jpeg" o "image/jpeg" | Formato JPEG                             |
| ".tiff" o "image/tiff" | Formato TIFF                             |

Once you have defined the format, you must pass the image attribute to [`$expand`]($expand.md) to load the photo completely.

Si no hay ninguna imagen para cargar o el formato no permite cargar la imagen, la respuesta será un objeto vacío `{}`.

## Ejemplo

El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el número de versión real enviado por el servidor:

`GET  /rest/Employee(1)/photo?$imageformat=.jpeg&$version=3&$expand=photo`
