---
id: delete-record
title: DELETE RECORD
slug: /commands/delete-record
displayed_sidebar: docs
---

<!--REF #_command_.DELETE RECORD.Syntax-->**DELETE RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.DELETE RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle supprimer l'enregistrement courant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE RECORD.Summary-->**DELETE RECORD** supprime de *laTable* l'enregistrement courant du process en cours.<!-- END REF--> S'il n'y a pas d'enregistrement courant pour *laTable* dans le process, **DELETE RECORD** ne fait rien. Dans un formulaire, vous pouvez créer un bouton 'Supprimer enregistrement' et lui assigner l'action automatique correspondante, plutôt que d'utiliser cette commande.

**Notes :**

* Si l'enregistrement courant est déchargé de la mémoire avant l'appel à **DELETE RECORD** (par exemple suite à un [UNLOAD RECORD](unload-record.md)), la sélection courante de *laTable* est vide à l'issue de la suppression.
* La commande **DELETE RECORD** ne fait rien si la table est en mode [READ ONLY](read-only.md), indépendamment de l'état verrouillé ou non de l'enregistrement à supprimer.

La suppression d'enregistrements est une opération définitive et ne peut être annulée (sauf lorsqu'elle est exécutée durant une transaction, consultez *Utiliser des transactions*).

Lorsqu'un enregistrement est supprimé, son numéro interne est réutilisé lors de la création de nouveaux enregistrements. Par conséquent, n'utilisez pas ces numéros comme identifiants de vos enregistrements si votre base permet la suppression d'enregistrements.

#### Exemple 

L'exemple suivant permet de supprimer l'enregistrement d'un employé. La méthode demande à l'utilisateur le numéro de l'employé à supprimer, recherche l'enregistrement correspondant puis le supprime :

```4d
 vCherch:=Request("Numéro de l'employé à supprimer :") //On récupère un numéro d'identification
 If(OK=1)
    QUERY([Employés];[Employés]Numéro=vCherch) //Trouver l'employé
    DELETE RECORD([Employés]) //Suppression de l'enregistrement
 End if
```

#### Voir aussi 

[Locked](locked.md)  
*Présentation des triggers*  