---
id: load-record
title: LOAD RECORD
slug: /commands/load-record
displayed_sidebar: docs
---

<!--REF #_command_.LOAD RECORD.Syntax-->**LOAD RECORD** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.LOAD RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle charger l'enregistrement courant ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.LOAD RECORD.Summary-->**LOAD RECORD** charge l'enregistrement courant de *laTable*.<!-- END REF--> S'il n'y a pas d'enregistrement courant, **LOAD RECORD** ne fait rien.

Il est alors utile d'appeler la fonction [Locked](locked.md) pour déterminer si l'enregistrement peut être modifié :

* Si la table est en mode Lecture seulement, la fonction retourne Vrai et vous ne pouvez pas modifier l'enregistrement.
* Si la table est en mode Lecture/écriture mais si l'enregistrement est déjà verrouillé, il sera en mode Lecture seulement et vous ne pouvez pas le modifier.
* Si la table est en mode Lecture/écriture et si l'enregistrement n'est pas verrouillé, vous pouvez le modifier dans le process courant. La fonction [Locked](locked.md) retournera Vrai pour tous les autres utilisateurs et process.

**Note :** Si la commande **LOAD RECORD** est exécutée après un [READ ONLY](read-only.md), l'enregistrement est automatiquement libéré et chargé, sans qu'il soit nécessaire d'appeler la commande [UNLOAD RECORD](unload-record.md).

Vous n'aurez normalement pas besoin d'appeler la commande **LOAD RECORD**, car toutes les commandes telles que [QUERY](query.md), [NEXT RECORD](next-record.md), [PREVIOUS RECORD](previous-record.md), etc., chargent automatiquement l'enregistrement courant.

En environnements multi-utilisateurs et multi-process, lorsque vous devez modifier un enregistrement existant, il vous faut accéder en Lecture/écriture à la table à laquelle appartient l'enregistrement. Lorsqu'un enregistrement verrouillé ne peut être chargé, **LOAD RECORD** vous permet de tenter à nouveau plus tard de charger l'enregistrement. En utilisant **LOAD RECORD** dans une boucle, vous pouvez attendre que l'enregistrement devienne accessible en Lecture/écriture.

**Astuce :** La commande **LOAD RECORD** peut être utilisée pour recharger l'enregistrement courant dans le contexte d'un formulaire entrée. Toutes les données modifiées sont alors remplacées par leurs valeurs précédentes. Dans ce cas, la commande **LOAD RECORD** effectue en quelque sorte une annulation globale de la saisie. 

#### Voir aussi 

[Locked](locked.md)  
[UNLOAD RECORD](unload-record.md)  
*Verrouillage d'enregistrements*  