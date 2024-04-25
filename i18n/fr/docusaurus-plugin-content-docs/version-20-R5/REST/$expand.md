---
id: expand
title: $expand
---

Expands an image stored in an Image attribute (_e.g._, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
or<br/>
Expands an BLOB attribute to save it.

> **Compatibility**: For compatibility reasons, $expand can be used to expand a relational attribute (_e.g._, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`). It is however recommended to use [`$attributes`]($attributes.md) for this feature.

## Affichage d'un attribut d'image

Si vous souhaitez afficher intégralement un attribut d'image, saisissez ce qui suit :

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Enregistrement d'un attribut BLOB sur le disque

Si vous souhaitez enregistrer un BLOB stocké dans votre dataclass, vous pouvez écrire ce qui suit en passant également "true" à $binary :

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
