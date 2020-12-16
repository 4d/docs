---
id: expand
title: '$expand'
---


Développe une image stockée dans un attribut Image (par exemple, `Employee(1)/photo?$imageformat=best&$expand=photo`)<br> ou<br> Développe un attribut BLOB pour l'enregistrer.

> **Compatibilité** : pour des raisons de compatibilité, $expand peut être utilisé pour développer un attribut relationnel (par exemple, `Company(1)?$expand= staff` ou `EmployeeEmployee/?$filter="firstName BEGIN a"&$expand=employer`). Il est cependant recommandé d'utiliser [`$attributes`]($attributes.md) pour cette fonctionnalité.



## Affichage d'un attribut d'image

Si vous souhaitez afficher intégralement un attribut d'image, saisissez ce qui suit :

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

Pour plus d'informations sur les formats d'image, reportez-vous à [`$imageformat`]($imageformat.md). Pour plus d'informations sur le paramètre de version, reportez-vous à [`$version`]($version.md).

## Enregistrement d'un attribut BLOB sur le disque

Si vous souhaitez enregistrer un BLOB stocké dans votre classe de datastore, vous pouvez écrire ce qui suit en passant également "true" à $binary :

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`