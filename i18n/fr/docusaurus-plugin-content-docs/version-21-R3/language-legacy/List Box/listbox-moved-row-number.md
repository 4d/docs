---
id: listbox-moved-row-number
title: LISTBOX MOVED ROW NUMBER
slug: /commands/listbox-moved-row-number
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Syntax-->**LISTBOX MOVED ROW NUMBER** ( {* ;} *objet* ; *ancPosition* ; *nouvPosition* )<!-- END REF-->
<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| ancPosition | Integer | &#8592; | Précédente position de la ligne déplacée |
| nouvPosition | Integer | &#8592; | Nouvelle position de la ligne déplacée |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|12|Renommé|
|11 SQL Release 2|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.LISTBOX MOVED ROW NUMBER.Summary-->La commande **LISTBOX MOVED ROW NUMBER** retourne dans les paramètres *ancPosition* et *nouvPosition* des numéros indiquant respectivement la précédente position et la nouvelle position de la ligne déplacée dans la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

**Note :** Le déplacement de lignes n'est possible que dans les list box de type tableau.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*. 

Cette commande doit être utilisée en combinaison avec l’événement formulaire On Row Moved (cf. commande [Form event code](../commands/form-event-code)). 

**Note :** Cette commande ne tient pas compte de l'éventuel statut masqué/affiché des lignes de la list box. 

## Voir aussi 

[Form event code](../commands/form-event-code)  
[LISTBOX MOVED COLUMN NUMBER](../commands/listbox-moved-column-number)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 837 |
| Thread safe | no |


