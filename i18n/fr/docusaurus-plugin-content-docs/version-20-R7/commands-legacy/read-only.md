---
id: read-only
title: READ ONLY
slug: /commands/read-only
displayed_sidebar: docs
---

<!--REF #_command_.READ ONLY.Syntax-->**READ ONLY** {( laTable | * )}<!-- END REF-->
<!--REF #_command_.READ ONLY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable &#124; * | Table, Opérateur | &#8594;  | Table à définir en mode lecture seulement ou * pour toutes les tables ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.READ ONLY.Summary-->**READ ONLY** place *laTable* en mode lecture seulement pour le process dans lequel la commande a été appelée.<!-- END REF--> Tous les enregistrements chargés par la suite sont verrouillés, aucune modification ne peut leur être apportée. Si vous passez le paramètre optionnel *\**, toutes les tables sont placées en mode lecture seulement. 

Vous pouvez utiliser **READ ONLY** lorsqu'il n'est pas utile de modifier les enregistrements. 

**Note :** Cette commande n'est pas rétroactive. Les privilèges de lecture/écriture pour un enregistrement sont définis par ceux de la table au moment où l'enregistrement est chargé. Pour qu'un enregistrement soit chargé en mode lecture seulement alors que la table est en mode lecture/écriture, vous devez placer la table en mode lecture seulement avant que l'enregistrement soit chargé. 

#### Voir aussi 

[Read only state](read-only-state.md)  
[READ WRITE](read-write.md)  
*Verrouillage d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 145 |
| Thread safe | &check; |


