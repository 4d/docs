---
id: get-selected-menu-item-parameter
title: Get selected menu item parameter
slug: /commands/get-selected-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get selected menu item parameter.Syntax-->**Get selected menu item parameter**  : Text<!-- END REF-->
<!--REF #_command_.Get selected menu item parameter.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
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

<!--REF #_command_.Get selected menu item parameter.Summary-->La commande **Get selected menu item parameter** retourne la chaîne de caractères personnalisée associée à la ligne de menu sélectionnée.<!-- END REF--> Ce paramètre doit avoir été préalablement défini à l’aide de la commande [SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter).  
Si aucune ligne de menu n’a été sélectionnée, la commande retourne une chaîne vide "".

## Voir aussi 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get menu item parameter](../commands/get-menu-item-parameter)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1005 |
| Thread safe | no |


