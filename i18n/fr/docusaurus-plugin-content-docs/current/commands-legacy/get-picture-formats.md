---
id: get-picture-formats
title: GET PICTURE FORMATS
slug: /commands/get-picture-formats
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FORMATS.Syntax-->**GET PICTURE FORMATS** ( *image* ; *tabCodecs* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FORMATS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | champ ou variable Image à analyser |
| tabCodecs | Text array | &#8592; | Liste des codecs de l'image |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET PICTURE FORMATS.Summary-->La commande **GET PICTURE FORMATS** remplit le tableau *tabCodecs* de tous les identifiants des codecs (formats image) de l'image contenue dans le paramètre *image*.<!-- END REF--> Une image 4D (champ ou variable) peut contenir la même image encodée dans différents formats, comme PNG, BMP, GIF, etc.

Dans le paramètre *image*, vous passez un champ image ou une variable image qui inclut les formats que vous souhaitez récupérer dans le tableau *tabCodecs*. 

Les identifiants des codecs sont établis par 4D exactement de la même façon qu'avec la commande [PICTURE CODEC LIST](picture-codec-list.md). Ils peuvent prendre les formes suivantes :

* une extension (par exemple, “.gif”)
* un type Mime (par exemple, “image/jpeg”)
* un code QuickTime sur 4 caractères

**Notes:** 

* Les codecs suivants, gérés par 4D, sont toujours retournés en tant qu'extensions : JPEG, PNG, TIFF, GIF, BMP, SVG, PDF, EMF.
* Les codes QuickTime sur 4 caractères peuvent être retournés dans les bases de données où l'option de compatibilité QuickTime a été mise en place (en utilisant la commande [SET DATABASE PARAMETER](set-database-parameter.md)). Toutefois, notez que QuickTime n'est plus pris en charge par 4D et que nous en déconseillons l'utilisation.

Pour plus d'information sur les identifiants des Codecs des images, référez-vous à la section *Introduction aux images*.

#### Exemple 

Vous souhaitez connaître les formats de l'image stockée dans un champ Image de l'enregistrement courant :

```4d
 ARRAY TEXT($aTPictureFormats;0)
  //lire tous les formats de l'image
 GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)
```

#### Voir aussi 

  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1406 |
| Thread safe | &check; |
| Interdite sur le serveur ||


