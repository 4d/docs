---
id: first-record
title: FIRST RECORD
slug: /commands/first-record
displayed_sidebar: docs
---

<!--REF #_command_.FIRST RECORD.Syntax-->**FIRST RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.FIRST RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle charger le premier enregistrement de la sélection courantes ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.FIRST RECORD.Summary-->**FIRST RECORD** charge en mémoire le premier enregistrement de la sélection courante de *laTable* et en fait l'enregistrement courant.<!-- END REF--> Toutes les commandes de recherche, de sélection et de tri font également du premier enregistement l'enregistrement courant. Si la sélection courante est vide ou si l'enregistrement courant est déjà le premier enregistrement de la sélection, **FIRST RECORD** ne fait rien.

Cette commande est principalement utilisée après un appel à [USE SET](use-set.md), pour débuter une boucle dans la sélection d'enregistrements à partir du premier enregistrement. Cependant, il est tout à fait envisageable de l'appeler depuis une sous-routine lorsque vous souhaitez vous assurer que l'enregistrement est bien le premier.

#### Exemple 

L'exemple suivant charge le premier enregistrement de la table \[Clients\] :

```4d
 FIRST RECORD([Clients])
```

#### Voir aussi 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  