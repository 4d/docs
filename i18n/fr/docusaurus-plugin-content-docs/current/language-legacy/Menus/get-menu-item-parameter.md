---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* : Integer, Text ; *ligneMenu* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| Résultat | Text | &#8592; | Paramètre personnalisé de la ligne de menu |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 4|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get menu item parameter.Summary-->La commande **Get menu item parameter** retourne la chaîne de caractères personnalisée associée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF--> Cette chaîne doit avoir été préalablement définie à l’aide de la commande [SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter).

## Voir aussi 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1003 |
| Thread safe | no |


