---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle vous voulez aller au dernier enregistrement ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.LAST RECORD.Summary-->**LAST RECORD** désigne le dernier enregistrement de la sélection de *laTable* comme enregistrement courant et le charge en mémoire.<!-- END REF--> Si la sélection est vide ou si l'enregistrement courant est déjà le dernier de la sélection, **LAST RECORD** ne fait rien.

#### Exemple 

L'exemple suivant désigne le dernier enregistrement de la table \[Contacts\] comme enregistrement courant :

```4d
 LAST RECORD([Contacts])
```

#### Voir aussi 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 200 |
| Thread safe | &check; |
| Change l'enregistrement courant ||


