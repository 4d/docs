---
id: hide-tool-bar
title: HIDE TOOL BAR
slug: /commands/hide-tool-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE TOOL BAR.Syntax-->**HIDE TOOL BAR**<!-- END REF-->
<!--REF #_command_.HIDE TOOL BAR.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|14 R5|Modifié|
|14|Modifié|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.HIDE TOOL BAR.Summary-->La commande **HIDE TOOL BAR** permet de gérer l'affichage des barres d'outils personnalisées créées par la commande [Open form window](../commands/open-form-window) pour le process courant.<!-- END REF-->

Si une fenêtre barre d'outils a été créée par la commande [Open form window](../commands/open-form-window) avec l'option Toolbar form window, la commande masque la fenêtre. Si la fenêtre barre d'outils était déjà masquée ou si aucune fenêtre de ce type n'a été créée, la commande ne fait rien

## Exemple 

Sous macOS, vous avez défini une barre d'outils personnalisée ainsi qu'une fenêtre standard ayant l'option Has full screen mode Mac. Lorsque la fenêtre standard est passée en plein écran par un utilisateur alors que la barre d'outils est affichée, vous ne voulez pas que la barre d'outils empiète sur la fenêtre plein écran. 

Pour cela, dans l'événement On Resize du formulaire de la fenêtre standard, il suffit de détecter le passage en mode plein écran et d'appeler **HIDE TOOL BAR** dans ce cas :

```4d
 Case of
    :(FORM Event.code=On Resize)
       GET WINDOW RECT($left;$top;$right;$bottom)
       If(Screen height=($bottom-$top))
          HIDE TOOL BAR
       Else
          SHOW TOOL BAR
       End if
 End case
```

## Voir aussi 

[SHOW TOOL BAR](../commands/show-tool-bar)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 434 |
| Thread safe | no |


