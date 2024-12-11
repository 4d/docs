---
id: start-monitoring-activity
title: START MONITORING ACTIVITY
slug: /commands/start-monitoring-activity
displayed_sidebar: docs
---

<!--REF #_command_.START MONITORING ACTIVITY.Syntax-->**START MONITORING ACTIVITY** ( *duracion* {; *fuente*} )<!-- END REF-->
<!--REF #_command_.START MONITORING ACTIVITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| duracion | Real | &#8594;  | Período de tiempo (en segundos) antes de que comience el registro |
| fuente | Integer | &#8594;  | Origen de una operación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.START MONITORING ACTIVITY.Summary-->El comando **START MONITORING ACTIVITY** registra las operaciones que excedan una *duracion* especificada en la memoria.<!-- END REF--> Se puede invocar y ejecutar en un 4D remoto, 4D Server y en aplicaciones 4D autonomas (si *fuente* no proviene de una actividad de red). Las actividades registradas se puede recuperar utilizando el comando [Monitored activity](monitored-activity.md). Llame a [STOP MONITORING ACTIVITY](stop-monitoring-activity.md) cuando desee detener la actividad de seguimiento.

En el parámetro *duracion*, pase un número que defina un período de tiempo antes de que comience el inicio de sesión (en segundos, puede expresarse como un decimal) para la ejecución de una operación. Una vez que la ejecución de una operación excede la *duracion*, la operación se grabará en la memoria.

El parámetro opcional *fuente* define el tipo de actividad a monitorear. Valores posibles:

| Constante           | Valor | Comentario                                            |
| ------------------- | ----- | ----------------------------------------------------- |
| Activity all        | \-1   | Actividad de todas las fuentes (valor predeterminado) |
| Activity language   | 1     | Operaciones de ejecución del lenguaje                 |
| Activity network    | 2     | Operaciones de peticiones de red                      |
| Activity operations | 4     | Operaciones de datos 4D                               |

**Nota**: si los historiales de depuración se han detenido en el servidor 4D [GRAPH SETTINGS](graph-settings.md), **START MONITORING ACTIVITY** con Activity network reiniciará los historiales.

#### Ejemplo 

Desea iniciar/detener la supervisión y revisión de los datos 4D y las actividades de depuración que duran más de un milisegundo:

```4d
 var $activities : Collection
 
 START MONITORING ACTIVITY(0.001;Activity operations+Activity language)
 
 $coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")
 
  //devuelve todas las operaciones de más de 1 milisegundo de la actividad de datos 4D y el historial de depuración
 $activities:=Monitored activity
 
 $text:=JSON Stringify($activities.orderBy("startTime");*)
 TEXT TO DOCUMENT("result.txt";$text)
 
  //fin de la supervisión de la actividad de datos 4D y del historial de depuración
 STOP MONITORING ACTIVITY()
```

**result.txt:**

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

#### Ver también 

[Monitored activity](monitored-activity.md)  
[STOP MONITORING ACTIVITY](stop-monitoring-activity.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1712 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


