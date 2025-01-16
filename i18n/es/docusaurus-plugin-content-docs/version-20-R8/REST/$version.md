---
id: version
title: $version
---

Número de versión de la imagen

## Descripción

`$version` es el número de versión de la imagen devuelto por el servidor. El número de versión, que es enviado por el servidor, funciona en torno a la memoria caché del navegador para que usted esté seguro de recuperar la imagen correcta.

El valor del parámetro de versión de la imagen es modificado por el servidor.

## Ejemplo

El siguiente ejemplo define el formato de la imagen a JPEG independientemente del tipo real de la foto y pasa el número de versión real enviado por el servidor:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`
