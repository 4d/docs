---
id: start-transaction
title: START TRANSACTION
slug: /commands/start-transaction
displayed_sidebar: docs
---

<!--REF #_command_.START TRANSACTION.Syntax-->**START TRANSACTION**<!-- END REF-->
<!--REF #_command_.START TRANSACTION.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.START TRANSACTION.Summary-->**START TRANSACTION** débute une transaction dans le process courant.<!-- END REF--> Toutes les modifications effectuées sur les données (enregistrements) de la base à l'intérieur de la transaction seront stockées temporairement jusqu'à ce que la transaction soit validée ou annulée.

A compter de la version 11 de 4D, vous pouvez imbriquer plusieurs transactions (sous-transactions). Chaque transaction ou sous-transaction doit être finalement annulée ou validée. A noter que si la transaction principale est annulée, toutes les sous-transactions sont annulées, quels que soient leurs résultats.

#### Voir aussi 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[Transaction level](transaction-level.md)  
*Utiliser des transactions*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 239 |
| Thread safe | &check; |
| Interdite sur le serveur ||


