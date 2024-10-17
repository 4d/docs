---
id: suspend-transaction
title: SUSPEND TRANSACTION
slug: /commands/suspend-transaction
displayed_sidebar: docs
---

<!--REF #_command_.SUSPEND TRANSACTION.Syntax-->**SUSPEND TRANSACTION**<!-- END REF-->
<!--REF #_command_.SUSPEND TRANSACTION.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SUSPEND TRANSACTION.Summary-->La commande **SUSPEND TRANSACTION** suspend les mécanismes de la transaction courante dans le process courant.<!-- END REF--> Vous pouvez alors manipuler des données dans d'autres parties de la base, sans qu'elles soient contrôlées par la transaction, tout en préservant le contexte courant de la transaction. Tout enregistrement qui a été mis à jour ou ajouté durant la transaction est verrouillé jusqu'à ce que la transaction soit réactivée à l'aide de la commande [RESUME TRANSACTION](resume-transaction.md).

Pour plus d'informations, veuillez vous référer à la section *Suspendre des transactions*. 

#### Voir aussi 

[Active transaction](active-transaction.md)  
[RESUME TRANSACTION](resume-transaction.md)  
*Suspendre des transactions*  