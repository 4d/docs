---
id: start-monitoring-activity
title: START MONITORING ACTIVITY
slug: /commands/start-monitoring-activity
displayed_sidebar: docs
---

<!--REF #_command_.START MONITORING ACTIVITY.Syntax-->**START MONITORING ACTIVITY** ( *duree* {; *source*} )<!-- END REF-->
<!--REF #_command_.START MONITORING ACTIVITY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| duree | Real | &#8594;  | Durée (en secondes) avant l'ouverture d'une session |
| source | Integer | &#8594;  | Origine d'une opération |

<!-- END REF-->

#### Description 

<!--REF #_command_.START MONITORING ACTIVITY.Summary-->La commande **START MONITORING ACTIVITY** enregistre les opérations qui dépassent une certaine *durée* dans la mémoire.<!-- END REF--> Elle peut être appelée et exécutée sur un 4D distant, 4D Server et sur des applications 4D autonomes (si *source* n'est pas issu d'une activité de réseau). Les activités enregistrées peuvent être récupérées à l'aide de la commande [Monitored activity](monitored-activity.md). Appelez [STOP MONITORING ACTIVITY](stop-monitoring-activity.md) lorsque vous souhaitez stopper le suivi.

Dans le paramètre *durée*, passez un nombre définissant la durée d'exécution (en secondes, peut être exprimée sous forme décimale) d'une opération avant l'ouverture d'une session. Une fois que l'exécution d'une opération dépasse cette durée, l'opération est enregistrée dans la mémoire. 

Le paramètre optionnel *source* définit le type d'activité à suivre. Valeurs possibles : 

| Constante           | Valeur | Comment                                             |
| ------------------- | ------ | --------------------------------------------------- |
| Activity all        | \-1    | Activités de toutes les sources (valeur par défaut) |
| Activity language   | 1      | Opérations d'exécution du langage                   |
| Activity network    | 2      | Opérations de requêtes réseau.                      |
| Activity operations | 4      | Opération de données 4D.                            |

**Note** : Si le journal de débogage a été stoppé sur la [GRAPH SETTINGS](graph-settings.md) de 4D Server, la commande **START MONITORING ACTIVITY** relancera le journal avec Activity network.

#### Exemple 

Vous souhaitez lancer/arrêter le suivi et revoir les activités de données 4D et de débogage ayant duré plus d'une milliseconde :

```4d
 var $activities : Collection
 
 START MONITORING ACTIVITY(0.001;Activity operations+Activity language)
 
 $coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")
 
  //retourne toutes les opérations de plus d'1 milliseconde issues des activités de données 4D et du journal de débogage
 $activities:=Monitored activity
 
 $text:=JSON Stringify($activities.orderBy("startTime");*)
 TEXT TO DOCUMENT("result.txt";$text)
 
  //met fin au suivi de l'activité de données 4D et du journal de débogage
 STOP MONITORING ACTIVITY()
```

**result.txt :**

\[  
 {  
 "activityKind": 4,  
 "activityDuration": 0.005,  
 "activityData": {  
 "message": "Exporting selection of entities in Persons as a collection: 400 of 401 entities",  
 "maxValue": 401,  
 "currentValue": 400,  
 "interruptible": true,  
 "remote": false,  
 "uuid": "4ED341FCF8BF40649C9A827EF794A688",  
 "taskId": -5,  
 "startTime": "2020-02-28 13:20:00:010",  
 "duration": 5,  
 "title": "Entities To Collection"   
 }  
 },  
 {  
 "activityKind": 1,  
 "activityDuration": 0.005,  
 "activityData": {  
 "sequenceNumber": 2514,  
 "elapsedTime": 5,  
 "processID": 7,  
 "uniqueProcessID": 14,  
 "stackLevel": 0,  
 "duration": 5056,  
 "kind": "Member",  
 "parameters": "firstname, lastname, address.\*",  
 "functionName": "toCollection"   
 }  
 }  
\]

#### Voir aussi 

[Monitored activity](monitored-activity.md)  
[STOP MONITORING ACTIVITY](stop-monitoring-activity.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1712 |
| Thread safe | &check; |
| Interdite sur le serveur ||


