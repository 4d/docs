---
id: read-write
title: READ WRITE
slug: /commands/read-write
displayed_sidebar: docs
---

<!--REF #_command_.READ WRITE.Syntax-->**READ WRITE** {( laTable | * )}<!-- END REF-->
<!--REF #_command_.READ WRITE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable &#124; * | Table, Opérateur | &#8594;  | Table à définir en mode lecture/écriture ou * pour toutes les tables ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.READ WRITE.Summary-->**READ WRITE** place *laTable* en mode lecture/écriture pour le process dans lequel la commande a été appelée.<!-- END REF--> Si vous passez le paramètre optionnel *\**, toutes les tables sont placées en mode lecture/écriture.

Après un appel à **READ WRITE**, lorsqu'un enregistrement est chargé, il n'est pas verrouillé — sauf si un autre utilisateur l'a déjà chargé. Cette commande ne modifie pas le statut des enregistrements déjà chargés, seuls les enregistrements chargés par la suite sont affectés.

Par défaut, toutes les tables sont en mode lecture/écriture.

Utilisez **READ WRITE** lorsque vous devez modifier un enregistrement et sauvegarder les modifications. Vous pouvez également appeler cette commande lorsque vous voulez qu'un enregistrement soit verrouillé pour les autres utilisateurs, même si vous ne souhaitez pas effectuer de modifications. Placer une table en mode lecture/écriture vous permet d'empêcher les autres utilisateurs d'effectuer des modifications sur cette table. Cependant, ils peuvent continuer à créer des nouveaux enregistrements.

**Note :** Cette commande n'est pas rétroactive. Les privilèges de lecture/écriture pour un enregistrement sont définis par ceux de la table au moment où l'enregistrement est chargé. Pour qu'un enregistrement soit chargé en mode lecture/écriture alors que la table est en mode lecture seulement, vous devez placer la table en mode lecture/écriture avant que l'enregistrement soit chargé.

#### Voir aussi 

[READ ONLY](read-only.md)  
[Read only state](read-only-state.md)  
*Verrouillage d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 146 |
| Thread safe | &check; |


