---
id: push-record
title: PUSH RECORD
slug: /commands/push-record
displayed_sidebar: docs
---

<!--REF #_command_.PUSH RECORD.Syntax-->**PUSH RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.PUSH RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle empiler l'enregistrement courant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.PUSH RECORD.Summary-->**PUSH RECORD** "empile" une copie de l'enregistrement courant de *laTable* dans la pile d'enregistrements de la table.<!-- END REF--> **PUSH RECORD** peut être exécuté avant qu'un enregistrement soit sauvegardé.

Si vous empilez un enregistrement non verrouillé, il sera verrouillé pour tous les autres process et utilisateurs jusqu'à ce que vous le "dépiliez" (c'est-à-dire que vous le déchargiez de la pile).

**Note de compatibilité :** A compter de la version 11 de 4D, cette commande ne prend plus en charge les sous-tables. 

#### Exemple 

L'exemple suivant empile l'enregistrement d'un client :

```4d
 PUSH RECORD([Client]) // Placer l'enregistrement du client dans la pile
```

#### Voir aussi 

[POP RECORD](pop-record.md)  
*Utiliser la pile d'enregistrements*  