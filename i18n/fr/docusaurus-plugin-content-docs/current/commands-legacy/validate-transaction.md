---
id: validate-transaction
title: VALIDATE TRANSACTION
slug: /commands/validate-transaction
displayed_sidebar: docs
---

<!--REF #_command_.VALIDATE TRANSACTION.Syntax-->**VALIDATE TRANSACTION**<!-- END REF-->
<!--REF #_command_.VALIDATE TRANSACTION.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.VALIDATE TRANSACTION.Summary-->**VALIDATE TRANSACTION** accepte la transaction ouverte par la commande [START TRANSACTION](start-transaction.md) de niveau correspondant dans le process courant.<!-- END REF-->sauvegarde toutes les modifications effectuées sur les données de la base pendant la transaction.

A compter de la version 11 de 4D, vous pouvez imbriquer plusieurs transactions (sous-transactions). Si la transaction principale est annulée, toutes les sous-transactions sont annulées, même si elles ont été validées individuellement à l'aide de cette commande.

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la transaction a été correctement validée, sinon elle prend la valeur 0\. 

A noter que lorsque OK vaut 0, la transaction est automatiquement annulée en interne (équivaut à un [CANCEL TRANSACTION](cancel-transaction.md)). Par conséquent, notamment dans le contexte de transactions imbriquées, il ne faut pas appeler explicitement [CANCEL TRANSACTION](cancel-transaction.md) si OK=0 car l'annulation sera alors appliquée à la transaction du niveau supérieur. 

#### Voir aussi 

[CANCEL TRANSACTION](cancel-transaction.md)  
[In transaction](in-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Utiliser des transactions*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 240 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


