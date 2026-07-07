---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( {* ;} *objet* ; *alignement* )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d’objet (si * est passé) ou Champ ou variable (si * est omis) |
| alignement | Integer | &#8594;  | Code d’alignement |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|20|Modifié|
|15 R4|Modifié|
|13|Renommé|
|12|Renommé|
|6.8.1|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->La commande **OBJECT SET HORIZONTAL ALIGNMENT** vous permet de fixer le type d’alignement horizontal appliqué à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* désigne le nom d’un objet (une chaîne). Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objet* désigne un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne de caractères mais la référence du champ ou de la variable (champs ou variables de formulaire uniquement).

Passez dans le paramètre *alignement* une des constantes du thème *Objets de formulaire (Propriétés)* :

| Constante     | Type        | Valeur | Comment                                                                 |
| ------------- | ----------- | ------ | ----------------------------------------------------------------------- |
| Align center  | Entier long | 3      | <br/>                                                           |
| Align default | Entier long | 1      |                                                                         |
| Align left    | Entier long | 2      |                                                                         |
| Align right   | Entier long | 4      |                                                                         |
| wk justify    | Entier long | 5      | Alignement justifié. Disponible uniquement pour les zones 4D Write Pro. |

**Note :** La constante wk justify est disponible dans le thème "*4D Write Pro*".

Les objets de formulaire auxquels vous pouvez appliquer cette commande sont les suivants :

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
* En-tête de list box
* Pieds de list box
* Zones *4D Write Pro*

## Voir aussi 

[OBJECT Get horizontal alignment](../commands/object-get-horizontal-alignment)  
[OBJECT Get vertical alignment](../commands/object-get-vertical-alignment)  
[OBJECT SET VERTICAL ALIGNMENT](../commands/object-set-vertical-alignment)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 706 |
| Thread safe | no |


