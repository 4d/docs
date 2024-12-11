---
id: object-set-drag-and-drop-options
title: OBJECT SET DRAG AND DROP OPTIONS
slug: /commands/object-set-drag-and-drop-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Syntax-->**OBJECT SET DRAG AND DROP OPTIONS** ( {* ;} *objet* ; *glissable* ; *glissableAuto* ; *déposable* ; *déposableAuto* )<!-- END REF-->
<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| glissable | Boolean | &#8594;  | Glissable = Vrai, sinon Faux |
| glissableAuto | Boolean | &#8594;  | Glisser automatique = Vrai, sinon Faux |
| déposable | Boolean | &#8594;  | Déposable = Vrai, sinon Faux |
| déposableAuto | Boolean | &#8594;  | Déposer automatique = Vrai, sinon Faux |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET DRAG AND DROP OPTIONS.Summary-->La commande **OBJECT SET DRAG AND DROP OPTIONS** permet de définir ou de modifier dynamiquement les options de glisser-déposer pour l’objet ou les objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Passez dans chaque paramètre un booléen indiquant si l’option correspondante est active ou inactive : 

* *glissable* \= Vrai : objet glissable en mode programmé.
* *glissableAuto* \= Vrai (utilisable uniquement avec les champs et variables texte, combo box et list box) : objet glissable en mode automatique.
* *déposable* \= Vrai : objet acceptant le déposer en mode programmé.
* *déposableAuto* \= Vrai (utilisable uniquement avec les champs et variables image, texte, combo box et list box) : objet acceptant le déposer en mode automatique.

#### Exemple 

Définition d’une zone de texte en glisser-déposer auto : 

```4d
 OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)
```

#### Voir aussi 

[OBJECT GET DRAG AND DROP OPTIONS](object-get-drag-and-drop-options.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1183 |
| Thread safe | &check; |
| Interdite sur le serveur ||


