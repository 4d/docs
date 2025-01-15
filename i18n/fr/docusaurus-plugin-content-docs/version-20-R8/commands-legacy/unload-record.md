---
id: unload-record
title: UNLOAD RECORD
slug: /commands/unload-record
displayed_sidebar: docs
---

<!--REF #_command_.UNLOAD RECORD.Syntax-->**UNLOAD RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.UNLOAD RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table pour laquelle l'enregistrement est à libérer ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.UNLOAD RECORD.Summary-->**UNLOAD RECORD** place l'enregistrement courant de *laTable* dans l'état non verrouillé.<!-- END REF-->

Si l'enregistrement n'est pas verrouillé par un utilisateur (mais est verrouillé pour les utilisateurs), **UNLOAD RECORD** libère l'enregistrement pour tous les utilisateurs.

Même si **UNLOAD RECORD** libère l'enregistrement de la mémoire, celui-ci reste l'enregistrement courant. Lorsqu'un enregistrement devient l'enregistrement courant, le précédent est automatiquement libéré et n'est donc plus verrouillé pour les autres utilisateurs. Vous devez appeler cette commande lorsque vous avez fini de modifier un enregistrement, que vous voulez qu'il reste l'enregistrement courant et qu'il soit accessible aux autres utilisateurs.

Si les enregistrements contiennent une quantité importante de données, de champs Image ou de documents externes (tels que des documents 4D Write Pro), il est préférable de ne pas stocker l'enregistrement courant en mémoire sauf si vous avez besoin de le modifier. Dans ce cas, il faut utiliser la commande **UNLOAD RECORD**. De cette manière, vous pouvez conserver l'enregistrement courant sans qu'il soit en mémoire. Vous libérez ainsi la mémoire occupée par l'enregistrement, mais vous n'avez pas accès aux valeurs stockées dans les champs. Si vous avez besoin d'exploiter ces valeurs, il faut utiliser la commande [LOAD RECORD](load-record.md).

**Note :** Lorsqu'elle est utilisée dans une transaction, la commande **UNLOAD RECORD** libère l'enregistrement courant pour le process qui gère la transaction uniquement. Pour les autres process, l'enregistrement reste verrouillé tant que la transaction n'est pas validée (ou annulée).

#### Voir aussi 

[LOAD RECORD](load-record.md)  
*Verrouillage d'enregistrements*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 212 |
| Thread safe | &check; |


