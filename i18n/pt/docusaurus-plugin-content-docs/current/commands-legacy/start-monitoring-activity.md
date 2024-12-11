---
id: start-monitoring-activity
title: START MONITORING ACTIVITY
slug: /commands/start-monitoring-activity
displayed_sidebar: docs
---

<!--REF #_command_.START MONITORING ACTIVITY.Syntax-->**START MONITORING ACTIVITY** ( *duração* {; *fonte*} )<!-- END REF-->
<!--REF #_command_.START MONITORING ACTIVITY.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| duração | Real | &#8594;  | Duração de tempo (em segundos) antes do inicio do logging |
| fonte | Integer | &#8594;  | Origem da operação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.START MONITORING ACTIVITY.Summary-->**O comando START MONITORING ACTIVITY**grava operações que excedem uma *duração* especifica na memória.<!-- END REF--> Pode ser chamada e executada em 4D remote, 4D Server e aplicações standalone 4D (se *fonte* não for uma atividade de rede). Atividade registradas podem ser recuperadas usando o comando [Monitored activity](monitored-activity.md). Chame [STOP MONITORING ACTIVITY](stop-monitoring-activity.md) quando quiser parar a atividade de monitoração.

No parâmetro *duração*, passe um número definindo um período de tempo antes do loggin (em segundos, pode expresso como um decimal) para a execução das operações. Quando a execução de uma operação exceder a *duração,* a operação vai ser registrada na memória. 

O parâmetro opcional *fonte* define o tipo de atividade a monitorar. Valores possíveis: 

| Constante           | Valor | Comentário                                   |
| ------------------- | ----- | -------------------------------------------- |
| Activity all        | \-1   | Atividades de todos as fontes (valor normal) |
| Activity language   | 1     | Operações de execução de Linguagem           |
| Activity network    | 2     | Operações de petição de network              |
| Activity operations | 4     | Operações de dados 4D                        |

**Nota**: se os históricos de depuração tiverem sido parados no servidor 4D [GRAPH SETTINGS](graph-settings.md), **START MONITORING ACTIVITY** com Activity network reiniciará os históricos.

#### Exemplo 

Se quiser iniciar/parar o monitoramento e revisão de dados 4D e atividades de depuração que demoram mais que um milissegundo:

```4d
 var $activities : Collection
 
 START MONITORING ACTIVITY(0.001;Activity operations+Activity language)
 
 $coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")
 
  //retorna todas as operações maiores que 1 milissegundo da atividade de dados 4D e o histórico de depuração
 $activities:=Monitored activity
 
 $text:=JSON Stringify($activities.orderBy("startTime");*)
 TEXT TO DOCUMENT("result.txt";$text)
 
  //para o monitoramento de atividade de dados 4D e do histórico de depuração
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

#### Ver também 

[Monitored activity](monitored-activity.md)  
[STOP MONITORING ACTIVITY](stop-monitoring-activity.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1712 |
| Thread-seguro | &check; |
| Proibido no servidor ||


