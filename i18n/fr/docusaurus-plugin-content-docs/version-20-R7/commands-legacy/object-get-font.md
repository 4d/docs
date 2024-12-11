---
id: object-get-font
title: OBJECT Get font
slug: /commands/object-get-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font.Syntax-->**OBJECT Get font** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get font.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Text | &#8592; | Nom de la police |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get font.Summary-->La commande **OBJECT Get font** retourne le nom de la police de caractères utilisée par le ou les objet(s) de formulaire désigné(s) par *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

#### Voir aussi 

[OBJECT SET FONT](object-set-font.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1069 |
| Thread safe | &check; |
| Interdite sur le serveur ||


