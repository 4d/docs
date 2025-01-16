---
id: expand
title: $expand
---

Extrait une image stockée dans un attribut Image (_par exemple_, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br/>
ou<br/>
Extrait un attribut BLOB pour le sauvegarder.

> **Compatibilité** : pour des raisons de compatibilité, $expand peut être utilisé pour extraire un attribut relationnel (par exemple, `Company(1)?$expand= staff` ou `EmployeeEmployee/?$filter="firstName BEGIN a"&$expand=employer`). Il est cependant recommandé d'utiliser [`$attributes`]($attributes.md) pour cette fonctionnalité.

## Affichage d'un attribut image

Si vous souhaitez afficher intégralement un attribut image, saisissez :

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Pour plus d'informations sur les formats d'image, veuillez vous référer à [`$imageformat`]($imageformat.md). Pour plus d'informations sur le paramètre version, reportez-vous à [`$version`]($version.md).

## Enregistrement d'un attribut BLOB sur le disque

Si vous souhaitez enregistrer un BLOB stocké dans votre dataclass, vous pouvez écrire ce qui suit en passant également "true" à $binary :

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
