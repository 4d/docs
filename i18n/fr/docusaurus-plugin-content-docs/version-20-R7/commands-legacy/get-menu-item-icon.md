---
id: get-menu-item-icon
title: GET MENU ITEM ICON
slug: /commands/get-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM ICON.Syntax-->**GET MENU ITEM ICON** ( *menu* ; *ligneMenu* ; *refIcône* {; *process*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM ICON.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| refIcône | Text, Integer | &#8592; | Nom ou numéro de l’image associée à la ligne de menu |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MENU ITEM ICON.Summary-->La commande **GET MENU ITEM ICON** retourne dans la variable *refIcône* la référence de l’icône éventuellement associée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF--> Cette référence est le chemin d'accès ou le numéro de l’image.

Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu.

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu. Si vous passez un identifiant unique, le paramètre *process* est inutile et sera ignoré s’il est passé. Si vous passez un numéro de menu, la commande prendra en compte le menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

* Si l'icône a été définie à l'aide d'un fichier image, la commande retourne dans *refIcône* le chemin d'accès via la syntaxe **path:<chemin filesystem>**.
* Si l'icône a été définie à l'aide d'une image issue de la bibliothèque (base de données binaires uniquement), la commande retourne soit le numéro soit le nom de l'image, en fonction du type de variable passé dans ce paramètre. La syntaxe suivante est utilisée pour un nom : **pictlib:<nom>.**  
Si vous n’attribuez pas de type spécifique à la variable *refIcône*, par défaut le nom de l’image est retourné (type texte).

Si aucune icône n’est associée à la ligne, la commande retourne une valeur vide.

#### Voir aussi 

[SET MENU ITEM ICON](set-menu-item-icon.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 983 |
| Thread safe | &check; |
| Interdite sur le serveur ||


