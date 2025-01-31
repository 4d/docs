---
id: object-get-font-size
title: OBJECT Get font size
slug: /commands/object-get-font-size
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font size.Syntax-->**OBJECT Get font size** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font size.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Integer | &#8592; | Taille de la police en points |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get font size.Summary-->La commande **OBJECT Get font size** retourne la taille (en points) de la police de caractères utilisée par le ou les objet(s) de formulaire désigné(s) par *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

#### Voir aussi 

[OBJECT SET FONT SIZE](object-set-font-size.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1070 |
| Thread safe | &cross; |


