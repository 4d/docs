---
id: object-get-drag-and-drop-options
title: OBJECT GET DRAG AND DROP OPTIONS
slug: /commands/object-get-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Syntax-->**OBJECT GET DRAG AND DROP OPTIONS** ( {* ;} *objet* ; *glissable* ; *glissableAuto* ; *déposable* ; *déposableAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &rarr; | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &rarr; | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| glissable | Boolean | &larr; | Glissable = Vrai, sinon Faux |
| glissableAuto | Boolean | &larr; | Glisser automatique = Vrai, sinon Faux |
| déposable | Boolean | &larr; | Déposable = Vrai, sinon Faux |
| déposableAuto | Boolean | &larr; | Déposer automatique = Vrai, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET DRAG AND DROP OPTIONS.Summary-->La commande **OBJECT GET DRAG AND DROP OPTIONS** retourne les options de glisser-déposer pour l’objet ou les objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne les options de glisser-déposer courantes, qu’elles aient été définies en mode Développement ou pour le process à l’aide de la commande [OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md). 

Chaque paramètre retourne Vrai ou Faux suivant que l’option correspondante est active ou inactive :

* *glissable* \= Vrai : objet glissable en mode programmé.
* *glissableAuto* \= Vrai (utilisable uniquement avec les champs et variables texte, combo box et list box) : objet glissable en mode automatique.
* *déposable* \= Vrai : objet acceptant le déposer en mode programmé.
* *déposableAuto* \= Vrai (utilisable uniquement avec les champs et variables image, texte, combo box et list box) : objet acceptant le déposer en mode automatique.

#### Voir aussi 

[OBJECT SET DRAG AND DROP OPTIONS](object-set-drag-and-drop-options.md)  