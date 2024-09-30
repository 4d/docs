---
id: object-get-filter
title: OBJECT Get filter
slug: /commands/object-get-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get filter.Syntax-->**OBJECT Get filter** ( {* ;} *objet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.OBJECT Get filter.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | Objet de formulaire | &#x1F852; | Nom d'objet (si * spécifié) ou Variable ou champ (si * omis) |
| Résultat | Texte | &#x1F850; | Nom du filtre de saisie |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get filter.Summary-->La commande **OBJECT Get filter** retourne le nom du filtre de saisie éventuellement associé à l'objet ou au groupe d'objets désigné par *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

#### Voir aussi 

[OBJECT SET FILTER](object-set-filter.md)  