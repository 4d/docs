---
id: get-mouse
title: GET MOUSE
slug: /commands/get-mouse
displayed_sidebar: docs
---

<!--REF #_command_.GET MOUSE.Syntax-->**GET MOUSE** ( *sourisX* ; *sourisY* ; *boutonSouris* {; *} )<!-- END REF-->
<!--REF #_command_.GET MOUSE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sourisX | Real | &#x1F858; | Coordonnée horizontale de la souris |
| sourisY | Real | &#x1F858; | Coordonnée verticale de la souris |
| boutonSouris | Integer | &#x1F858; | Etat du bouton de la souris : 0 = Bouton relâché 1 = Bouton enfoncé 2 = Bouton droit enfoncé 3 = Les deux boutons enfoncés |
| * | Opérateur | &#x1F852; | Si spécifié, utiliser le système de coordonnées globales Si omis, utiliser le système de coordonnées locales |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MOUSE.Summary-->La commande **GET MOUSE** retourne l'état courant de la souris.<!-- END REF-->

Les coordonnées horizontale et verticale sont retournées dans les paramètres *sourisX* et *sourisY*. Si vous passez le paramètre *\**, ces coordonnées sont exprimées par rapport à l'écran principal (sous Windows en mode SDI et sous macOS) ou par rapport à la fenêtre de l'application (sous Windows en mode MDI). Si vous ne passez pas le paramètre *\**, vous exprimez ces coordonnées par rapport à la fenêtre du formulaire courant (s'il y en a un) du process courant.

Le paramètre *boutonSouris* retourne l'état du ou des bouton(s) de la souris, comme décrit ci-dessus dans le tableau des paramètres.

**Note :** Les valeurs 2 et 3 peuvent être retournées sous Mac OS X à compter de la version 10.2.5 uniquement.

#### Exemple 

Reportez-vous à l'exemple de la commande [Pop up menu](pop-up-menu.md).

#### Voir aussi 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[ON EVENT CALL](on-event-call.md)  
[Shift down](shift-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  