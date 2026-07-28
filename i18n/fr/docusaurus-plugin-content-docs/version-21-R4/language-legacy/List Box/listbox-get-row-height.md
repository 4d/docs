---
id: listbox-get-row-height
title: LISTBOX Get row height
slug: /commands/listbox-get-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get row height.Syntax-->**LISTBOX Get row height** ( {* ;} *objet* ; *ligne* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get row height.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| ligne | Integer | &#8594;  | Ligne de la List box dont on veut récupérer la hauteur |
| Résultat | Integer | &#8592; | Hauteur de la ligne |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|16|Créé|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX Get row height.Summary-->La commande **LISTBOX Get row height** retourne la hauteur de la *ligne* spécifiée dans l'objet List box désigné en utilisant les paramètres *objet* et éventuellement *\**.<!-- END REF--> La hauteur des lignes peut être définie globalement via la Liste des propriétés ou la commande [LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height), ou individuellement à l'aide de la commande [LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous passez une référence à une variable à la place d'une chaîne. Pour plus d'informations sur les noms d'objet, reportez vous à la section *Objets de formulaires*.

Si la *ligne* spécifiée n'existe pas, la commande retourne 0 (zéro).

La hauteur de ligne retournée est exprimée:

* dans l'unité courante définie globalement pour la List box, soit dans la Liste des propriétés, soit par un appel antérieur à la commande [LISTBOX SET ROWS HEIGHT](../commands/listbox-set-rows-height) lorsque la hauteur des lignes est fixe,
* en pixels lorsque la hauteur des lignes est variable, i.e. définie en automatique (voir *Hauteur de ligne automatique*) ou gérée via un tableau.

## Voir aussi 

[LISTBOX Get auto row height](../commands/listbox-get-auto-row-height)  
[LISTBOX Get rows height](../commands/listbox-get-rows-height)  
[LISTBOX SET ROW HEIGHT](../commands/listbox-set-row-height)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1408 |
| Thread safe | no |


