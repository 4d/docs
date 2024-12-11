---
id: convert-picture
title: CONVERT PICTURE
slug: /commands/convert-picture
displayed_sidebar: docs
---

<!--REF #_command_.CONVERT PICTURE.Syntax-->**CONVERT PICTURE** ( *image* ; *codec* {; *compression*} )<!-- END REF-->
<!--REF #_command_.CONVERT PICTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image à convertir |
| &#8592; | Image convertie |
| codec | Text | &#8594;  | Identifiant de codec d'image |
| compression | Real | &#8594;  | Qualité de compression |

<!-- END REF-->

#### Description 

<!--REF #_command_.CONVERT PICTURE.Summary-->La commande **CONVERT PICTURE** convertit *image* dans un nouveau type.<!-- END REF-->

Le paramètre *codec* indique le type d’image à générer. Un codec peut être une extension (par exemple “.gif”) ou un type Mime (par exemple “image/jpg”). Vous pouvez obtenir la liste des codecs disponibles via la commande [PICTURE CODEC LIST](picture-codec-list.md).

Si le champ ou la variable *image* est de type composé (si par exemple elle est issue d’un copier-coller), seules les informations correspondant au type *codec* sont conservées dans l’image résultante.

**Note :** Si le type de *codec* demandé est égal au type d'origine de l'*image*, aucune conversion n'est effectuée et l'image est retournée telle quelle (sauf si le paramètre *compression* est utilisé, cf. ci-dessous). 

Le paramètre optionnel *compression*, s'il est passé, permet de définir la qualité de compression à appliquer à l’image résultante lorsqu’un codec compatible est utilisé. Passez dans *compression* une valeur entre 0 et 1 définissant la qualité de compression, 0 étant la qualité la plus médiocre (compression élevée) et 1 la meilleure qualité (compression faible). Ce paramètre est pris en compte uniquement lorsque le codec supporte la compression (par exemple JPEG ou HDPhoto) et est pris en charge par les APIs WIC et ImageIO. Pour plus d’informations sur les APIs de gestion d’image dans 4D, reportez-vous à la section *Introduction aux images*. Par défaut, si vous omettez le paramètre *compression*, la meilleure qualité est appliquée (compression = 1). 

**Note :** Si vous souhaitez appeler **CONVERT PICTURE** avec un type d'image qui n'est pas pris en charge dans les versions 64 bits de 4D (tel que PICT), assurez-vous d'effectuer la conversion sur une version 32 bits de 4D (où le type d'image original est pris en charge). Pour plus d'informations, reportez-vous à la page *Passer de 32 bits à 64 bits*. 

#### Exemple 1 

Conversion de l’image vpPhoto au format jpeg : 

```4d
 CONVERT PICTURE(vpPhoto;".jpg")
```

#### Exemple 2 

Conversion d’une image avec une qualité de 60 % :

```4d
 CONVERT PICTURE(vPicture;".JPG";0,6)
```

#### Voir aussi 

[PICTURE CODEC LIST](picture-codec-list.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1002 |
| Thread safe | &check; |
| Interdite sur le serveur ||


