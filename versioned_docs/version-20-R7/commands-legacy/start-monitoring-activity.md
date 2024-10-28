---
id: start-monitoring-activity
title: START MONITORING ACTIVITY
slug: /commands/start-monitoring-activity
displayed_sidebar: docs
---

<!--REF #_command_.START MONITORING ACTIVITY.Syntax-->**START MONITORING ACTIVITY** ( *duration* {; *source*} )<!-- END REF-->
<!--REF #_command_.START MONITORING ACTIVITY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| duration | Real | &#8594;  | Length of time (in seconds) before logging begins |
| source | Integer | &#8594;  | Origin of an operation |

<!-- END REF-->

#### Description 

<!--REF #_command_.START MONITORING ACTIVITY.Summary-->The **START MONITORING ACTIVITY** command records operations exceeding a specified *duration* in memory.<!-- END REF--> It can be called and executed on 4D remote, 4D Server, and 4D standalone applications (if *source* isn't from network activity). Recorded activity can be retrieved using the [Monitored activity](monitored-activity.md) command. Call [STOP MONITORING ACTIVITY](stop-monitoring-activity.md) when you want to stop tracking activity.

In the *duration* parameter, pass a number defining a length of time before loggin begins (in seconds, can be expressed as a decimal) for an operation's execution. Once an operation's execution exceeds the *duration*, the operation will be recorded in memory. 

The optional *source* parameter defines the kind of activity to monitor. Possible values: 

| Constant            | Value | Comment                                   |
| ------------------- | ----- | ----------------------------------------- |
| Activity all        | \-1   | Activity from all sources (default value) |
| Activity language   | 1     | Language execution operations             |
| Activity network    | 2     | Network request operations                |
| Activity operations | 4     | 4D data operations                        |

**Note**: If the debug logs have been stopped on the 4D Server [GRAPH SETTINGS](graph-settings.md), **START MONITORING ACTIVITY** with Activity network will restart the logs.

#### Example 

You want to start/stop monitoring and review 4D data and debug activities lasting longer than a millisecond:

```4d
 var $activities : Collection
 
 START MONITORING ACTIVITY(0.001;Activity operations+Activity language)
 
 $coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")
 
  //return all operations over 1 millisecond from the 4D data activity and the debug log
 $activities:=Monitored activity
 
 $text:=JSON Stringify($activities.orderBy("startTime");*)
 TEXT TO DOCUMENT("result.txt";$text)
 
  //end monitoring for 4D data activity and from the debug log
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

#### See also 

[Monitored activity](monitored-activity.md)  
[STOP MONITORING ACTIVITY](stop-monitoring-activity.md)  