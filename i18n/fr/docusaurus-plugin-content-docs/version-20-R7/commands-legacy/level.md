---
id: level
title: Level
slug: /commands/level
displayed_sidebar: docs
---

<!--REF #_command_.Level.Syntax-->**Level**  : Integer<!-- END REF-->
<!--REF #_command_.Level.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Niveau de rupture ou d'en-tête courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.Level.Summary-->La fonction **Level** sert à déterminer le niveau de rupture ou d'en-tête courant.<!-- END REF--> Elle retourne le numéro du niveau de rupture pendant les événements On Header et On Printing Break.

Le niveau 0 est le dernier niveau à être imprimé et convient à l'impression d'un total général. **Level** retourne 1 lorsque 4D imprime une rupture sur le premier champ trié, 2 lorsque 4D imprime une rupture sur le deuxième champ trié, et ainsi de suite.

#### Exemple 

Cet exemple est une maquette de méthode formulaire. Il traite chaque événement possible lorsqu'un état est imprimé dans un formulaire sortie. **Level** est appelé lorsqu'un en-tête ou une rupture est imprimé(e) :

```4d
  // Méthode formulaire pour un formulaire sortie utilisé pour un état
 $vpFormTable:=Current form table
 Case of
  // ...
    :(FORM Event=On Header)
  // La zone en-tête va être imprimée
       Case of
          :(Before selection($vpFormTable->))
  // Le code pour la première rupture d'en-tête doit être placé ici
          :(Level=1)
  // Le code pour la rupture d'en-tête niveau 1 doit être placé ici
          :(Level=2)
  // Le code pour la rupture d'en-tête niveau 2 doit être placé ici
  // ...
       End case
    :(FORM Event=On Printing Detail)
  // Un enregistrement va être imprimé
  // Le code pour chaque enregistrement doit être placé ici
    :(FORM Event=On Printing Break)
  // Une rupture va être imprimée
       Case of
          :(Level=0)
  // Le code pour la rupture 0 doit être placé ici
          :(Level=1)
  // Le code pour la rupture 1 doit être placé ici
  // ...
       End case
    :(FORM Event=On Printing Footer)
       If(End selection($vpFormTable->))
  // Le code pour le dernier pied de page doit être placé ici
       Else
  // Le code pour le pied de page doit être placé ici
       End if
 End case
```

#### Voir aussi 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Form event code](../commands/form-event-code.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 101 |
| Thread safe | &cross; |


