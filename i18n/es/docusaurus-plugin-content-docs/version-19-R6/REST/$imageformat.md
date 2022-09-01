---
id: imageformat
title: '$imageformat'
---

Define qué formato de imagen utilizar para recuperar imágenes (por ejemplo, `$imageformat=png`)

## Descripción

Definir el formato a utilizar para mostrar las imágenes. Por defecto, se elegirá el mejor formato para la imagen. No obstante, puede seleccionar uno de los siguientes formatos:

| Type | Descripción                              |
| ---- | ---------------------------------------- |
| GIF  | Formato GIF                              |
| PNG  | Formato PNG                              |
| JPEG | Formato JPEG                             |
| TIFF | Formato TIFF                             |
| best | El mejor formato en función de la imagen |

Una vez que haya definido el formato, debe pasar el atributo de imagen a [`$expand`]($expand.md) para cargar la foto completamente.

Si no hay ninguna imagen para cargar o el formato no permite cargar la imagen, la respuesta estará vacía.

## Ejemplo

El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el número de versión real enviado por el servidor:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`

