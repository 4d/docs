---
id: count-tasks
title: Count tasks
slug: /commands/count-tasks
displayed_sidebar: docs
---

<!--REF #_command_.Count tasks.Syntax-->**Count tasks**  : Integer<!-- END REF-->
<!--REF #_command_.Count tasks.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre total de process ouverts (y compris les process du moteur de 4D) |

<!-- END REF-->

#### Description 

<!--REF #_command_.Count tasks.Summary-->**Count tasks** retourne le numéro de process vivant le plus élevé sur un poste 4D distant, 4D Server (procédures stockées) ou dans une version monoposte de 4D.<!-- END REF--> Les process sont numérotés dans l'ordre de leur création. Lorsqu'aucun process n'a encore été détruit au cours de la session, la commande retourne le nombre de process ouverts. 

Ce nombre inclut tous les process, qu'ils soient créés par vos soins ou par 4D. Le Process principal, le Gestionnaire de cache, le Process développement, le Gestionnaire d'index ou le Process du serveur Web par exemple sont des process créés automatiquement par 4D.

#### Exemple 

Référez-vous à l'exemple de [Process state](process-state.md) et [Semaphore](semaphore.md).

#### Voir aussi 

[Count user processes](count-user-processes.md)  
[Count users](count-users.md)  
[Process info](../commands/process-info.md)  
[Process state](process-state.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 335 |
| Thread safe | &check; |
| Interdite sur le serveur ||


