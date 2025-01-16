---
id: object-get-horizontal-alignment
title: OBJECT Get horizontal alignment
slug: /commands/object-get-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get horizontal alignment.Syntax-->**OBJECT Get horizontal alignment** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get horizontal alignment.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d’objet (si * est passé) ou Champ ou variable (si * est omis) |
| Résultat | Integer | &#8592; | Code d’alignement |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get horizontal alignment.Summary-->La commande **OBJECT Get horizontal alignment** retourne un code indiquant le type d’alignement horizontal appliqué à l’objet désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* désigne le nom d’un objet (une chaîne). Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objet* désigne un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne de caractères mais la référence du champ ou de la variable (champs ou variables de formulaire uniquement).

**Note :** Si vous appliquez la commande à un ensemble d’objets, seule la valeur d’alignement du dernier objet est retournée.

Le code retourné correspond à l’une des constantes suivantes, placées dans le thème *Objets de formulaire (Propriétés)* :

| Constante     | Type        | Valeur | Comment                                                                 |
| ------------- | ----------- | ------ | ----------------------------------------------------------------------- |
| Align center  | Entier long | 3      | <br/>                                                           |
| Align default | Entier long | 1      |                                                                         |
| Align left    | Entier long | 2      |                                                                         |
| Align right   | Entier long | 4      |                                                                         |
| wk justify    | Entier long | 5      | Alignement justifié. Disponible uniquement pour les zones 4D Write Pro. |

Les objets de formulaire auxquels un alignement peut être appliqué sont les suivants :

* Zones de défilement
* Combo box
* Boutons
* Boutons radio
* Cases à cocher
* Textes statiques
* Zones de groupes
* Pop up menus/Listes déroulantes
* Champs
* Variables
* List box
* Colonnes de list box
* En-têtes de list box
* Pieds de list box
* Zones *4D Write Pro*

#### Voir aussi 

[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 707 |
| Thread safe | &cross; |


