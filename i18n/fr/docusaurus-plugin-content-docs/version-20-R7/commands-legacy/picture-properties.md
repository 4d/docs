---
id: picture-properties
title: PICTURE PROPERTIES
slug: /commands/picture-properties
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE PROPERTIES.Syntax-->**PICTURE PROPERTIES** ( *image* ; *largeur* ; *hauteur* {; *hOffset* {; *vOffset* {; *mode*}}} )<!-- END REF-->
<!--REF #_command_.PICTURE PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture | &#8594;  | Image sur laquelle obtenir les informations |
| largeur | Real | &#8592; | Largeur de l'image exprimée en pixels |
| hauteur | Real | &#8592; | Hauteur de l'image exprimée en pixels |
| hOffset | Integer | &#8592; | Offset horizontal lorsque l'image est affichée en arrière-plan |
| vOffset | Integer | &#8592; | Offset vertical lorsque l'image est affichée en arrière-plan |
| mode | Integer | &#8592; | Mode de transfert lorsque l'image est affichée en arrière-plan |

<!-- END REF-->

#### Description 

<!--REF #_command_.PICTURE PROPERTIES.Summary-->La commande **PICTURE PROPERTIES** retourne des informations sur l'image que vous avez passée dans le paramètre *image*.<!-- END REF-->

Les paramètres *largeur* et *hauteur* reçoivent la largeur et hauteur réelles de l'image.

Les paramètres *hOffset*, *vOffset* et *mode* reçoivent la position et le mode de transfert de l'image lorsqu'elle est affichée en arrière-plan dans un formulaire (“Image sur fond”).

#### Voir aussi 

[Picture size](picture-size.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 457 |
| Thread safe | &check; |
| Interdite sur le serveur ||


