---
id: current-form-window
title: Current form window
slug: /commands/current-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Current form window.Syntax-->**Current form window**  : Integer<!-- END REF-->
<!--REF #_command_.Current form window.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Numéro de référence de la fenêtre du formulaire courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current form window.Summary-->La commande **Current form window** retourne la référence de la fenêtre du formulaire courant.<!-- END REF--> S’il n’y a pas de fenêtre définie pour le formulaire courant, la commande retourne 0.

La fenêtre du formulaire courant peut avoir été générée automatiquement par une commande telle que [ADD RECORD](add-record.md), à la suite d’une action utilisateur ou via les commandes [Open window](open-window.md) ou [Open form window](open-form-window.md). 

#### Voir aussi 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  
[RESIZE FORM WINDOW](resize-form-window.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 827 |
| Thread safe | &cross; |


