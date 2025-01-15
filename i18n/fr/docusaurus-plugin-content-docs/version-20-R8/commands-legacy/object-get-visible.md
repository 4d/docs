---
id: object-get-visible
title: OBJECT Get visible
slug: /commands/object-get-visible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get visible.Syntax-->**OBJECT Get visible** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get visible.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai = objet(s) visible(s), Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get visible.Summary-->La commande **OBJECT Get visible** retourne Vrai si l'objet ou le groupe d'objets désigné(s) par *objet* dispose de l’attribut visible et Faux sinon.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

#### Voir aussi 

[OBJECT SET VISIBLE](object-set-visible.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1075 |
| Thread safe | &cross; |


