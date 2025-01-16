---
id: wp-delete-picture
title: WP DELETE PICTURE
slug: /WritePro/commands/wp-delete-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE PICTURE.Syntax-->**WP DELETE PICTURE** ( *objImage* )<!-- END REF-->
<!--REF #_command_.WP DELETE PICTURE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objImage | Object | &#8594;  | Objet image (en ligne ou ancrée) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE PICTURE.Summary-->La commande **WP DELETE PICTURE** supprime l'image définie par le paramètre *objImage*.<!-- END REF-->

S'il n'existe aucune image, la commande ne fait rien.

#### Exemple 

Vous souhaitez supprimer une image à l'aide de son ID :

```4d
 var $myPicture : Object
 
  // Lire l'image  
 $myPicture:=WP Get element by ID(myDoc;"Logo")
 
  // Supprimer l'image
 WP DELETE PICTURE($myPicture)
```

#### Voir aussi 

*Manipuler des images*  
[WP Add picture](../commands/wp-add-picture.md)  