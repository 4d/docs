---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Boolean | &#8592; | Etat de la touche Majuscule |

<!-- END REF-->

#### Description 

<!--REF #_command_.Shift down.Summary-->**Shift down** retourne Vrai si la touche **Majuscule** est enfoncée.<!-- END REF-->

#### Exemple 

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

#### Voir aussi 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 543 |
| Thread safe | &check; |


