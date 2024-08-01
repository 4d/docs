---
id: expand
title: $expand
---

Expande una imagen almacenada en un atributo Image (_e.g._, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
o<br/>
Expande un atributo BLOB para guardarlo.

> **Compatibilidad**: por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (_por ejemplo_, `Company(1)?$expand=staff` o `Employee/?$filter="firstName BEGIN a"&$expand=employer`). No obstante, se recomienda utilizar [`$attributes`]($attributes.md) para esta función.

## Visualización de un atributo de imagen

Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Para más información sobre los formatos de imagen, consulte [`$imageformat`]($imageformat.md). Para más información sobre el parámetro version, consulte [`$version`]($version.md).

## Guardar un atributo BLOB en el disco

Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente pasando también "true" a $binary:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
