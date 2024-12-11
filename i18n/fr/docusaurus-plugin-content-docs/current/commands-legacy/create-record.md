---
id: create-record
title: CREATE RECORD
slug: /commands/create-record
displayed_sidebar: docs
---

<!--REF #_command_.CREATE RECORD.Syntax-->**CREATE RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.CREATE RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dans laquelle créer un enregistrement ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE RECORD.Summary-->**CREATE RECORD** crée un nouvel enregistrement vide pour *laTable*, mais ne l'affiche pas à l'écran.<!-- END REF--> Vous devez utiliser la commande [ADD RECORD](add-record.md) pour créer un nouvel enregistrement et l'afficher dans un formulaire entrée. 

Utilisez **CREATE RECORD** plutôt que [ADD RECORD](add-record.md) lorsque les valeurs de l'enregistrement sont entrées par programmation. Le nouvel enregistrement devient l'enregistrement courant mais la sélection courante n'est pas modifiée.

L'enregistrement est créé uniquement en mémoire et doit être sauvegardé à l'aide de [SAVE RECORD](save-record.md). Si vous changez d'enregistrement courant (par exemple à la suite d'une recherche) avant la sauvegarde, l'enregistrement créé est perdu.

**Note :** Cette commande ne nécessite pas que *laTable* soit en mode lecture/écriture. Elle peut être utilisée même lorsque la table est en mode lecture seulement (cf. section *Verrouillage d'enregistrements*). 

#### Exemple 

L'exemple suivant archive les enregistrements datant de plus de 30 jours. Cette opération est réalisée par la création d'enregistrements dans une table d'archive. Une fois l'opération terminée, les enregistrements archivés sont supprimés de la table *\[Comptes\]* :

```4d
  // Recherche des enregistrements datant de plus de 30 jours
 QUERY([Comptes];[Comptes]Saisie <(Date du jour 30))
 For($vlRecord;1;Records in selection([Comptes])) // Boucle une fois par enregistrement
    CREATE RECORD([Archives]) // Création d'un nouvel enregistrement d'archive
    [Archive]Numéro:=[Comptes]Number // Copie des champs dans l'archive
    [Archive]Saisie :=[Comptes]Saisie
    [Archive]Montant:=[Comptes]Montant
    SAVE RECORD([Archive]) // Sauvegarde de l'enregistrement d'archive
    NEXT RECORD([Comptes]) // Passage à l'enregistrement de compte suivant
 End for
 DELETE SELECTION([Comptes]) // Suppression des enregistrements
```

#### Voir aussi 

[ADD RECORD](add-record.md)  
[MODIFY RECORD](modify-record.md)  
[SAVE RECORD](save-record.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 68 |
| Thread safe | &check; |
| Change l'enregistrement courant ||
| Interdite sur le serveur ||


