---
id: object-get-three-states-checkbox
title: OBJECT Get three states checkbox
slug: /commands/object-get-three-states-checkbox
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get three states checkbox.Syntax-->**OBJECT Get three states checkbox** ( {* ;} *objet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.OBJECT Get three states checkbox.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#x1F852; | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | Objet de formulaire | &#x1F852; | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Booléen | &#x1F850; | Vrai = case à cocher à trois états, Faux = case à cocher standard |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get three states checkbox.Summary-->La commande **OBJECT Get three states checkbox** retourne l’état courant de la propriété "Trois états" de la ou des case(s) à cocher désignée(s) par les paramètres *objet* et *\**.<!-- END REF--> 

La propriété "Trois états" peut avoir été définie soit via la Liste des propriétés, soit via la commande [OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md) si elle a été appelée dans le process courant.

#### Voir aussi 

[OBJECT SET THREE STATES CHECKBOX](object-set-three-states-checkbox.md)  