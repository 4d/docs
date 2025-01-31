---
id: wp-delete-text-box
title: WP DELETE TEXT BOX
slug: /WritePro/commands/wp-delete-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE TEXT BOX.Syntax-->**WP DELETE TEXT BOX** ( *textBox* )<!-- END REF-->
<!--REF #_command_.WP DELETE TEXT BOX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| textBox | Object | &#8594;  | Zone de texte |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP DELETE TEXT BOX.Summary-->La commande **WP DELETE TEXT BOX** supprime la zone de texte définie par le paramètre *textBox* .<!-- END REF-->

Si *textBox* n'existe pas, la commande ne fait rien. 

#### Exemple 

Vous souhaitez supprimer une zone de texte en utilisant son ID :

```4d
 var $myTextBox : Object
 
  // Obtenir la zone de texte
 $myTextBox:=WP Lireélément par ID(myDoc;"AddressBox")
 
  // Supprimer la zone de texte
 WP DELETE TEXT BOX($myTextBox)
```

#### Voir aussi 

[WP New text box](wp-new-text-box.md)  