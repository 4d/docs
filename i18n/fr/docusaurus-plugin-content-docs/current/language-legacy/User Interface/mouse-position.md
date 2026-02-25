---
id: mouse-position
title: MOUSE POSITION
slug: /commands/mouse-position
displayed_sidebar: docs
---

<!--REF #_command_.MOUSE POSITION.Syntax-->**MOUSE POSITION** ( *sourisX* ; *sourisY* ; *boutonSouris* {; *} )<!-- END REF-->
<!--REF #_command_.MOUSE POSITION.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sourisX | Real | &#8592; | Coordonnée horizontale de la souris |
| sourisY | Real | &#8592; | Coordonnée verticale de la souris |
| boutonSouris | Integer | &#8592; | Etat du bouton de la souris : 0 = Bouton relâché 1 = Bouton enfoncé 2 = Bouton droit enfoncé 3 = Les deux boutons enfoncés |
| * | Opérateur | &#8594;  | Si spécifié, utiliser le système de coordonnées globales Si omis, utiliser le système de coordonnées locales |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.MOUSE POSITION.Summary-->La commande **MOUSE POSITION** retourne l'état courant de la souris.<!-- END REF-->

Les coordonnées horizontale et verticale sont retournées dans les paramètres *sourisX* et *sourisY*. Si vous passez le paramètre *\**, ces coordonnées sont exprimées par rapport à l'écran principal (sous Windows en mode SDI et sous macOS) ou par rapport à la fenêtre de l'application (sous Windows en mode MDI). Si vous ne passez pas le paramètre *\**, vous exprimez ces coordonnées par rapport à la fenêtre du formulaire courant (s'il y en a un) du process courant.

Le paramètre *boutonSouris* retourne l'état du ou des bouton(s) de la souris, comme décrit ci-dessus dans le tableau des paramètres.

**Note :** Les valeurs 2 et 3 peuvent être retournées sous macOS à compter de la version 10.2.5 uniquement.

## Exemple 

Reportez-vous à l'exemple de la commande [Pop up menu](../commands/pop-up-menu).

## Voir aussi 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[ON EVENT CALL](../commands/on-event-call)  
[Shift down](../commands/shift-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 468 |
| Thread safe | no |


