---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Etat de la touche Majuscule |
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

<!--REF #_command_.Shift down.Summary-->**Shift down** retourne Vrai si la touche **Majuscule** est enfoncée.<!-- END REF-->

## Exemple 

La méthode objet du bouton *bUnBouton* effectue des actions différentes en fonction de la ou des touche(s) de modification enfoncée(s) au moment du clic :

```4d
  // Méthode objet bUnBouton
 Case of
  // Diverses autres combinaisons de touches peuvent être testées ici
  // ...
    :(Shift down&Windows Ctrl down)
  // Les touches Majuscule et Ctrl Windows (ou Commande Mac OS) sont enfoncées
       FAIRE ACTION1
  // ...
    :(Shift down)
  // Seule Majuscule est enfoncée
       FAIRE ACTION2
  // ...
    :(Windows Ctrl down)
  // Seule Ctrl Windows (ou Commande Mac OS) est enfoncée
       FAIRE ACTION3
  // ...
  // D'autres touches peuvent être testées individuellement ici
  // ...
 End case
```

## Voir aussi 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 543 |
| Thread safe | yes |


