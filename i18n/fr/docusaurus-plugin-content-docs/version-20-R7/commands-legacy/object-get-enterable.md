---
id: object-get-enterable
title: OBJECT Get enterable
slug: /commands/object-get-enterable
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enterable.Syntax-->**OBJECT Get enterable** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enterable.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai = objet(s) saisissable(s), Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get enterable.Summary-->La commande **OBJECT Get enterable** retourne Vrai si l'objet ou le groupe d'objets désigné par *objet* dispose de l’attribut **saisissable** et Faux sinon.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

#### Voir aussi 

[OBJECT SET ENTERABLE](object-set-enterable.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1067 |
| Thread safe | &cross; |


