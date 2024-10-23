---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.HIDE MENU BAR.Summary-->La commande **HIDE MENU BAR** rend invisible la barre de menus.<!-- END REF-->

Si la barre de menus était déjà cachée, la commande est sans effet.

#### Exemple 

La méthode suivante passe un enregistrement en plein écran (sous Mac OS) jusqu'à ce que l'utilisateur clique sur le bouton de la souris :

```4d
 HIDE TOOL BAR
 CACHER BARRE DE MENUS
 Open window(-1;-1;1+Screen width;1+Screen height;Modal dialog box)
 FORM SET INPUT([Tableaux];"Plein écran 800")
 DISPLAY RECORD([Tableaux])
 Repeat
    MOUSE POSITION($vlX;$vlY;$vlBouton)
 Until($vlBouton#0)
 CLOSE WINDOW
 SHOW MENU BAR
 SHOW TOOL BAR
```

**Note :** Sous Windows, la taille de la fenêtre sera limitée par celle de la fenêtre de l'application.

#### Voir aussi 

[HIDE TOOL BAR](hide-tool-bar.md)  
[SHOW MENU BAR](show-menu-bar.md)  
[SHOW TOOL BAR](show-tool-bar.md)  