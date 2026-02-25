---
id: listbox-set-static-columns
title: LISTBOX SET STATIC COLUMNS
slug: /commands/listbox-set-static-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Syntax-->**LISTBOX SET STATIC COLUMNS** ( {* ;} *objet* ; *nbColonnes* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| nbColonnes | Integer | &#8594;  | Nombre de colonnes à rendre statiques |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|13|Créé|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX SET STATIC COLUMNS.Summary-->La commande **LISTBOX SET STATIC COLUMNS** permet de rendre statiques les *nbColonnes* premières colonnes gauches de la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Les colonnes statiques (ou colonnes fixes) ne peuvent pas être déplacées dans la list box.

**Note :** Les colonnes statiques et les colonnes verrouillées sont deux fonctionnalités indépendantes. Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

## Voir aussi 

[LISTBOX Get static columns](../commands/listbox-get-static-columns)  
[LISTBOX SET LOCKED COLUMNS](../commands/listbox-set-locked-columns)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1153 |
| Thread safe | no |


