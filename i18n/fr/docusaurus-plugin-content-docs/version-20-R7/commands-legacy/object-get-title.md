---
id: object-get-title
title: OBJECT Get title
slug: /commands/object-get-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get title.Syntax-->**OBJECT Get title** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get title.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Text | &#8592; | Libellé de l'objet |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get title.Summary-->La commande **OBJECT Get title** retourne le titre (libellé) du ou des objet(s) de formulaire désigné(s) par *objet*.<!-- END REF--> 

**OBJECT Get title** peut être utilisée avec tous les types d'objets simples contenant un libellé : 

* boutons,
* cases à cocher,
* boutons radio,
* textes statiques,
* zones de groupe.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

#### Voir aussi 

[OBJECT SET TITLE](object-set-title.md)  