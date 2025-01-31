---
id: kill-worker
title: KILL WORKER
slug: /commands/kill-worker
displayed_sidebar: docs
---

<!--REF #_command_.KILL WORKER.Syntax-->**KILL WORKER** {( *process* )}<!-- END REF-->
<!--REF #_command_.KILL WORKER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Text, Integer | &#8594;  | Nom ou numéro du process worker à tuer (process courant si omis) |

<!-- END REF-->

#### Description 

<!--REF #_command_.KILL WORKER.Summary-->La commande **KILL WORKER** envoie un message au process worker dont vous avez passé le nom ou le numéro dans *process*, lui demandant d'ignorer tous les messages en attente (s'il y a) et de terminer son exécution à l'issue de la tâche en cours.<!-- END REF-->

Cette commande ne peut être utilisée qu'avec des process workers. Pour plus d'informations, reportez-vous à la section *A propos des workers*. 

Dans le paramètre *process*, vous pouvez passer soit le nom soit le numéro du process worker que vous voulez tuer. Si aucun process worker avec le nom ou le numéro spécifié existe, **KILL WORKER** ne fait rien.  
Lorsque le paramètre *process* est omis, **KILL WORKER** s'applique au process worker courant et équivaut donc à **KILL WORKER*(Numero du process courant)*.

Lorsque la commande est appliquée à un worker qui n’a pas été créé explicitement par la commande [CALL WORKER](call-worker.md) (par exemple, le process worker principal de l'application), elle vide uniquement sa boîte aux lettres.

Si la commande [CALL WORKER](call-worker.md) est appelée pour envoyer un message à un worker qui vient juste d'être tué par **KILL WORKER**, un nouveau process est démarré. Pour être sûr qu'il y a un seul process lancé à la fois pour un worker, le nouveau process attendra que que le précédent soit effectivement terminé. A noter cependant que si la commande [CALL WORKER](call-worker.md) est appelée depuis un worker pour qu'il s'envoie lui-même un message alors qu'il vient juste d'être tué par **KILL WORKER**, la commande ne fait rien. 

#### Exemple 

Le code suivant (exécuté depuis un formulaire, par exemple) déclenche l’arrêt d'un process worker :

```4d
 CALL WORKER(vNomWorker;"leWorker";"fin")
```

Dans la méthode du process worker (*leWorker*), vous ajoutez du code pour gérer cette situation :

```4d
  //méthode leWorker
 var $1 : Text //paramètre
 
 Case of
    :($1="appel") //on appelle le worker
       ... //faire quelque chose
    :($1="fin") //on demande au worker de terminer son exécution
       KILL WORKER
 End case
```

#### Voir aussi 

*A propos des workers*  
[CALL WORKER](call-worker.md)  
[Current process name](current-process-name.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1390 |
| Thread safe | &check; |


