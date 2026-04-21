---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *window* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | Numéro de référence de la fenêtre |
| Résultat | Boolean | &#8592; | Vrai si la fenêtre est réduite dans la barre des tâches ou dans le dock, sinon Faux |
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

<!--REF #_command_.Is window reduced.Summary-->La commande **Is window reduced** retourne **Vrai** si la fenêtre dont le numéro de référence est passé dans *window* est actuellement réduite dans la barre des tâches (Windows) ou dans le dock (macOS), et **Faux** dans le cas contraire.<!-- END REF-->

## Voir aussi 

[Is window maximized](../commands/is-window-maximized)  
[REDUCE RESTORE WINDOW](../commands/reduce-restore-window)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1831 |
| Thread safe | no |


