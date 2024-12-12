---
id: object-get-context-menu
title: OBJECT Get context menu
slug: /commands/object-get-context-menu
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get context menu.Syntax-->**OBJECT Get context menu** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get context menu.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai = menu contextuel activé, <br/>Faux = menu contextuel désactivé |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get context menu.Summary-->La commande **OBJECT Get context menu** retourne le statut courant de l’option "Menu contextuel" de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

L’option "Menu contextuel" d’un objet peut avoir été définie en mode Développement via la Liste des propriétés, ou à l’aide de la commande [OBJECT SET CONTEXT MENU](object-set-context-menu.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

La commande retourne **Vrai** si le menu contextuel est activé pour l’objet et **Faux** dans le cas contraire. 

#### Voir aussi 

[OBJECT SET CONTEXT MENU](object-set-context-menu.md)  