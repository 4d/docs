---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.HIDE MENU BAR.Summary-->La commande **HIDE MENU BAR** rend invisible la barre de menus.<!-- END REF-->

Si la barre de menus était déjà cachée, la commande est sans effet.

## Exemple 

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

## Voir aussi 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[SHOW MENU BAR](../commands/show-menu-bar)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 432 |
| Thread safe | no |
| Interdite sur le serveur ||


