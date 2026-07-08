---
id: set-menu-item-parameter
title: SET MENU ITEM PARAMETER
slug: /commands/set-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PARAMETER.Syntax-->**SET MENU ITEM PARAMETER** ( *menu* : Integer, Text ; *ligneMenu* : Integer ; *param* : Text )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PARAMETER.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| param | Text | &#8594;  | Chaîne à associer en tant que paramètre |
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

<!--REF #_command_.SET MENU ITEM PARAMETER.Summary-->La commande **SET MENU ITEM PARAMETER** vous permet d’associer une chaîne de caractères personnalisée à la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF--> 

Ce paramètre sera principalement utilisé par la commande [Dynamic pop up menu](../commands/dynamic-pop-up-menu).

## Exemple 

Ce code permet de proposer un menu comportant le libellé des fenêtres ouvertes et de récupérer le numéro de la fenêtre choisie :

```4d
 WINDOW LIST($alFenetre)
 $tRefMenu:=Create menu
 For($i;1;Size of array($alFenetre))
    APPEND MENU ITEM($tRefMenu;Get window title($alFenetre{$i}))  //Libellé de la ligne du menu
    SET MENU ITEM PARAMETER($tRefMenu;-1;String($alFenetre{$i}))  //Valeur retournée par la ligne du menu
 End for
 $tRefFenetre:=Dynamic pop up menu($tRefMenu)
 RELEASE MENU($tRefMenu)
```

## Voir aussi 

[Dynamic pop up menu](../commands/dynamic-pop-up-menu)  
[Get menu item parameter](../commands/get-menu-item-parameter)  
[Get selected menu item parameter](../commands/get-selected-menu-item-parameter)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1004 |
| Thread safe | no |


