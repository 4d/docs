---
id: enable-menu-item
title: ENABLE MENU ITEM
slug: /commands/enable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.ENABLE MENU ITEM.Syntax-->**ENABLE MENU ITEM** ( *menu* ; *ligneMenu* {; *process*} )<!-- END REF-->
<!--REF #_command_.ENABLE MENU ITEM.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Numéro de menu ou Référence de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée |
| process | Integer | &#8594;  | Numéro de référence du process |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.ENABLE MENU ITEM.Summary-->**ENABLE MENU ITEM** active la commande de menu dont vous avez passé le numéro ou la référence de menu et le numéro de ligne dans *menu* et *ligneMenu*.<!-- END REF--> Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au *menu*.

Si le paramètre *ligneMenu* désigne un sous-menu hiérarchique, toutes les lignes de ce menu et de ses éventuels sous-menus sont activées. Cette commande fonctionne également avec une barre de menus créée avec la commande [Create menu](../commands/create-menu) et installée avec la commande [SET MENU BAR](../commands/set-menu-bar).

Si vous omettez le paramètre *process*, **ENABLE MENU ITEM** s'applique à la barre de menus du process courant. Sinon, **ENABLE MENU ITEM** s'applique à la barre de menus du process dont vous avez passé le numéro dans *process*. 

**Note :** Si vous passez un paramètre [RefMenu](# "Référence unique de menu (16 caractères alphanumériques)") dans *menu*, le paramètre *process* est inutile et sera ignoré.

**Astuce :** Pour activer/inactiver toutes les lignes de menus en une fois, passez 0 (zéro) dans *ligneMenu*.

## Voir aussi 

[DISABLE MENU ITEM](../commands/disable-menu-item)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 149 |
| Thread safe | no |
| Interdite sur le serveur ||


