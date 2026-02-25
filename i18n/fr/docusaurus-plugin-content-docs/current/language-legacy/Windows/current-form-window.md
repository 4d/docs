---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  : Integer<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de référence de la fenêtre du formulaire courant |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Current form window.Summary-->La commande **Current form window** retourne la référence de la fenêtre du formulaire courant.<!-- END REF--> S’il n’y a pas de fenêtre définie pour le formulaire courant, la commande retourne 0.

La fenêtre du formulaire courant peut avoir été générée automatiquement par une commande telle que [ADD RECORD](../commands/add-record), à la suite d’une action utilisateur ou via les commandes [Open window](../commands/open-window) ou [Open form window](../commands/open-form-window). 

## Voir aussi 

[Open form window](../commands/open-form-window)  
[Open window](../commands/open-window)  
[RESIZE FORM WINDOW](../commands/resize-form-window)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 827 |
| Thread safe | no |


