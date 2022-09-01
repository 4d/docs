---
id: expand
title: '$expand'
---


Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/> or<br/> Expands an BLOB attribute to save it.

> **Compatibilidad**: por razones de compatibilidad, $expand puede utilizarse para expandir un atributo relacional (*por ejemplo*, `Company(1)?$expand=staff` o `Employee/?$filter="firstName BEGIN a"&$expand=employer`). Sin embargo, se recomienda utilizar [`$attributes`]($attributes.md) para esta funcionalidad.

## Visualización de un atributo de imagen

Si desea visualizar un atributo de imagen en su totalidad, escriba lo siguiente:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Para más información sobre los formatos de imagen, consulte [`$imageformat`]($imageformat.md). Para más información sobre el parámetro de versión, consulte [`$version`]($version.md).

## Guardar un atributo BLOB en el disco

Si quiere guardar un BLOB almacenado en su clase de datos, puedes escribir lo siguiente pasando también "true" a $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
