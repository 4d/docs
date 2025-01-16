---
id: end-selection
title: End selection
slug: /commands/end-selection
displayed_sidebar: docs
---

<!--REF #_command_.End selection.Syntax-->**End selection** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.End selection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle tester si le pointeur d'enregistrement courant est au-delà du dernier enregistrement de la sélection courante ou Table par défaut si ce paramètre est omis |
| Résultat | Boolean | &#8592; | Oui (Vrai), Non (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.End selection.Summary-->La fonction **End selection** retourne Vrai lorsque le pointeur de l'enregistrement courant se trouve après le dernier enregistrement de la sélection courante de *laTable*.<!-- END REF-->est généralement utilisée pour tester si l'appel à la commande [NEXT RECORD](next-record.md) place ou non le pointeur d'enregistrement courant derrière le dernier enregistrement de la sélection. Si la sélection courante est vide, **End selection** retourne Vrai.

Pour replacer le pointeur d'enregistrement courant dans la sélection, utilisez les commandes [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md). [PREVIOUS RECORD](previous-record.md) ne replace pas le pointeur dans la sélection.

**End selection** retourne également Vrai lors de l'impression du dernier pied de page d'un état, déclenchée par la commande [PRINT SELECTION](print-selection.md) ou le menu **Imprimer**. Vous pouvez utiliser l'instruction suivante pour intercepter le dernier pied de page et insérer une mention particulière :

```4d
  // Méthode d'un formulaire sortie utilisé pour imprimer un état
 $vpFormTable:=Current form table
 Case of
  // ...
    :(Form event code=On Printing Footer)
  // Un pied
       If(End selection($vpFormTable->))
  // Le code pour le dernier pied de page doit être placé ici
       Else
  // Le code pour le pied de page doit être placé ici
       End if
 End case
```

#### Exemple 

La méthode formulaire de l'exemple suivant est utilisée lors de l'impression d'un état. Elle crée la variable VPied, à imprimer dans le pied de page de la dernière page :

```4d
  // Méthode formulaire [Finances];"Tableau"
 Case of
  // ...
    :(Form event code=On Printing Footer)
       If(End selection([Finances]))
          VPied:="©1997 SARL Dupont" // Définir le pied de page de la dernière page
       Else
          VPied:="" // Effacer le pied de page pour toutes les autres pages
       End if
 End case
```

#### Voir aussi 

[Before selection](before-selection.md)  
[Form event code](form-event-code.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PRINT SELECTION](print-selection.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 36 |
| Thread safe | &check; |


