---
id: set-menu-item-icon
title: SET MENU ITEM ICON
slug: /commands/set-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM ICON.Syntax-->**SET MENU ITEM ICON** ( *menu* ; *ligneMenu* ; *refIcône* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM ICON.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| refIcône | Text, Integer | &#8594;  | Nom ou numéro de l’image à associer à la ligne de menu |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM ICON.Summary-->La commande **SET MENU ITEM ICON** permet de modifier l’icône associée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF-->

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu. Si vous passez un identifiant unique, la commande s’appliquera à toutes les instances du menu dans tous les process. Dans ce cas, le paramètre *process* est ignoré s’il est passé. Si vous passez un numéro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu.

Passez dans le paramètre *refIcône* l'image devant être utilisée comme icône. Vous pouvez utiliser une référence de fichier image ou (base de données binaires uniquement) une image issue de la bibliothèque.

* Référence de fichier image. Deux syntaxes sont prises en charge :  
   * **path:<filesystem>** *(recommandé),* par exemple "path:/RESOURCES/icon.png". Pour plus d'informations, reportez-vous au pragraphe *Chemins des filesystem*.  
   * **file:<relativePathname>** *(obsolète),* par exemple "file:icon.png". L'image doit se trouver dans le dossier **Resources** de la base.
* Image de la bibliothèque (bases de données binaires uniquement) : vous pouvez passer soit le nom soit le numéro de l' image. Il est généralement préférable d’utiliser le numéro plutôt que le nom, car les numéros d’images sont des identifiants uniques, ce qui n’est pas le cas des noms.

**Note :** Il est recomandé d'utiliser des chemins vers des fichiers image, étant donné que la bibliothèque d'images est obsolète et n'est plus supportée dans les projets 4D. De plus, la syntaxe *file:<relativePathname>* est obsolète, il est donc recommandé d'utiliser le chemin *path:<filesystem>.*

#### Exemple 

Utilisation d'une image se trouvant dans le dossier Resources de la base :

```4d
 SET MENU ITEM ICON($RefMenu;2;"Path:/RESOURCES/french.lproj/spot.png")
```

#### Voir aussi 

[GET MENU ITEM ICON](get-menu-item-icon.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 984 |
| Thread safe | &cross; |


