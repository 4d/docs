---
id: object-get-filter
title: OBJECT Get filter
slug: /commands/object-get-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get filter.Syntax-->**OBJECT Get filter** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get filter.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * spécifié) ou Variable ou champ (si * omis) |
| Résultat | Text | &#8592; | Nom du filtre de saisie |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get filter.Summary-->La commande **OBJECT Get filter** retourne le nom du filtre de saisie éventuellement associé à l'objet ou au groupe d'objets désigné par *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel \*, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

#### Voir aussi 

[OBJECT SET FILTER](object-set-filter.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1073 |
| Thread safe | &check; |
| Interdite sur le serveur ||


