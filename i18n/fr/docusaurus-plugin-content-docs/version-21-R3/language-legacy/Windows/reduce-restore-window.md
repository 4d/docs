---
id: reduce-restore-window
title: REDUCE RESTORE WINDOW
slug: /commands/reduce-restore-window
displayed_sidebar: docs
---

<!--REF #_command_.REDUCE RESTORE WINDOW.Syntax-->**REDUCE RESTORE WINDOW** ( *window* )<!-- END REF-->
<!--REF #_command_.REDUCE RESTORE WINDOW.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Numéro de référence de la fenêtre |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|20 R5|Créé|

</details>
</div>

## Description 

<!--REF #_command_.REDUCE RESTORE WINDOW.Summary-->La commande **REDUCE RESTORE WINDOW** réduit/agrandit la fenêtre dont le numéro de référence a été transmis dans la fenêtre vers/depuis la barre des tâches sous Windows ou le dock sous macOS.<!-- END REF--> 

La commande permet de basculer l'état de la fenêtre :

* Si la fenêtre était affichée, la commande réduit la fenêtre à la barre des tâches ou au dock.
* Si la fenêtre a été réduite, la commande rétablit la fenêtre à son état précédent.

**Note :** Sur macOS, la commande est asynchrone.

## Voir aussi 

[Is window reduced](../commands/is-window-reduced)  
[MAXIMIZE WINDOW](../commands/maximize-window)  
[MINIMIZE WINDOW](../commands/minimize-window)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1829 |
| Thread safe | no |


