---
id: locked
title: Locked
slug: /commands/locked
displayed_sidebar: docs
---

<!--REF #_command_.Locked.Syntax-->**Locked** {( *laTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Locked.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement dont vous voulez tester le verrouillage ou Table par défaut si ce paramètre est omis |
| Résultat | Boolean | &#8592; | L'enregistrement est verrouillé (Vrai) ou L'enregistrement n'est pas verrouillé (Faux) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Locked.Summary-->**Locked** teste si l'enregistrement courant de *laTable* est verrouillé.<!-- END REF--> Cette fonction vous permet de savoir si un enregistrement est verrouillé ou non, et donc de réagir de manière appropriée, par exemple en laissant à l'utilisateur le choix d'attendre que l'enregistrement soit libéré ou d'annuler l'opération.

Si **Locked** retourne Vrai, l'enregistrement ne peut être sauvegardé car il est verrouillé par un autre utilisateur, un autre process ou est empilé dans le process courant. La commande [LOCKED BY](locked-by.md) indique l'utilisateur ou le numéro du process à l'origine du verrouillage. Dans ce cas, vous devez appeler la commande [LOAD RECORD](load-record.md) pour tenter à nouveau de charger l'enregistrement, jusqu'à ce que **Locked** retourne Faux. 

Si **Locked** retourne Faux, l'enregistrement n'est pas verrouillé, ce qui signifie qu'il est verrouillé pour tous les autres utilisateurs. Seul l'utilisateur ayant chargé l'enregistrement ou le process courant peut modifier et sauvegarder l'enregistrement. Une table doit être en mode lecture/écriture si vous voulez modifier les enregistrements qu'elle contient.

Lorsque vous tentez de charger un enregistrement qui a été supprimé, **Locked** continue de retourner Vrai. Pour éviter d'attendre un enregistrement qui n'existe plus, appelez la commande [LOCKED BY](locked-by.md). Cette commande retourne -1 dans le paramètre *process* si l'enregistrement a été supprimé. 

**Note :** **Locked** retourne Faux lorsqu'il n'y a pas d'enregistrement courant dans *table*, c'est-à-dire lorsque [Record number](record-number.md) retourne -1.

Au cours d'une transaction, [LOAD RECORD](load-record.md) et **Locked** sont souvent appelées pour tester la disponibilité des enregistrements. Si un enregistrement est verrouillé, il suffit d'annuler la transaction.

#### Voir aussi 

[Locked records info](locked-records-info.md)  
[LOAD RECORD](load-record.md)  
[LOCKED BY](locked-by.md)  
*Verrouillage d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 147 |
| Thread safe | &check; |


