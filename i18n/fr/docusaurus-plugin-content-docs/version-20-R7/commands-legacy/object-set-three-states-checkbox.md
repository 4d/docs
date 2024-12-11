---
id: object-set-three-states-checkbox
title: OBJECT SET THREE STATES CHECKBOX
slug: /commands/object-set-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Syntax-->**OBJECT SET THREE STATES CHECKBOX** ( {* ;} *objet* ; *troisEtats* )<!-- END REF-->
<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| troisEtats | Boolean | &#8594;  | Vrai = case à cocher à trois états, Faux = case à cocher standard |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET THREE STATES CHECKBOX.Summary-->La commande **OBJECT SET THREE STATES CHECKBOX** vous permet de modifier, pour le process courant, la propriété "Trois états" de la ou des case(s) à cocher désignée(s) par les paramètres *objet* et *\**.<!-- END REF--> 

L’option "Trois états" permet d’utiliser l’état supplémentaire "semi-coché" pour les cases à cocher. Pour plus d’informations, reportez-vous au paragraphe *Cases à cocher à trois états* dans le manuel *Mode Développement*. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

Cette commande s’applique uniquement aux case à cocher associées à des variables, et non aux champs booléens représentés sous forme de cases à cocher. 

Passez **Vrai** dans le paramètre *troisEtat* pour activer le mode "trois états", ou **Faux** pour le désactiver. 

#### Voir aussi 

[OBJECT Get three states checkbox](object-get-three-states-checkbox.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1249 |
| Thread safe | &check; |
| Interdite sur le serveur ||


