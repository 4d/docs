---
id: object-set-context-menu
title: OBJECT SET CONTEXT MENU
slug: /commands/object-set-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET CONTEXT MENU.Syntax-->**OBJECT SET CONTEXT MENU** ( {* ;} *objet* ; *menuContext* )<!-- END REF-->
<!--REF #_command_.OBJECT SET CONTEXT MENU.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| menuContext | Boolean | &#8594;  | Vrai = activer menu contextuel, Faux = désactiver menu contextuel |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET CONTEXT MENU.Summary-->La commande **OBJECT SET CONTEXT MENU** vous permet d’activer ou de désactiver, pour le process courant, l’association d’un menu contextuel par défaut à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

L’option "Menu contextuel" est disponible pour les zones de saisie de type texte, les zones Web et les images. Elle permet d’associer à ces objets un menu d’action standard en fonction du type d’objet (par exemple Copier/coller pour les objets texte). Pour plus d’informations, reportez-vous au manuel *Mode Développement*. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

Passez **Vrai** dans le paramètre *menuContext* pour activer le menu contextuel, et **Faux** pour le désactiver. 

#### Voir aussi 

[OBJECT Get context menu](object-get-context-menu.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1251 |
| Thread safe | &check; |
| Interdite sur le serveur ||


