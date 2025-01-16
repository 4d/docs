---
id: pop-record
title: POP RECORD
slug: /commands/pop-record
displayed_sidebar: docs
---

<!--REF #_command_.POP RECORD.Syntax-->**POP RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.POP RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle dépiler l'enregistrement courant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.POP RECORD.Summary-->**POP RECORD** charge le premier enregistrement de la pile d'enregistrements de *laTable*, et en fait l'enregistrement courant.<!-- END REF-->

Si vous empilez un enregistrement puis créez une nouvelle sélection courante ne contenant plus l'enregistrement empilé, et enfin dépilez l'enregistrement, vous obtenez la situation dans laquelle l'enregistrement courant ne se trouve pas dans la sélection courante. Si vous souhaitez faire de l'enregistrement empilé la sélection courante, utilisez la commande [ONE RECORD SELECT](one-record-select.md).   
Si vous utilisez une routine qui déplace le pointeur d'enregistrement courant avant de sauvegarder l'enregistrement, vous perdrez la copie empilée en mémoire.

#### Exemple 

L'exemple suivant récupère l'enregistrement d'un client dans la pile :

```4d
 POP RECORD([Clients]) // Dépiler l'enregistrement
```

#### Voir aussi 

[PUSH RECORD](push-record.md)  
*Utiliser la pile d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 177 |
| Thread safe | &check; |
| Change l'enregistrement courant ||


