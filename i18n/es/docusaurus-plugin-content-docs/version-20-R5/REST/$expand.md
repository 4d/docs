---
id: expand
title: $expand
---

Expands an image stored in an Image attribute (_e.g._, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
or<br/>
Expands an BLOB attribute to save it.

> **Compatibility**: For compatibility reasons, $expand can be used to expand a relational attribute (_e.g._, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`). It is however recommended to use [`$attributes`]($attributes.md) for this feature.

## Visualización de un atributo de imagen

Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Guardar un atributo BLOB en el disco

Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente pasando también "true" a $binary:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
