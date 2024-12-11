---
id: start-monitoring-activity
title: START MONITORING ACTIVITY
slug: /commands/start-monitoring-activity
displayed_sidebar: docs
---

<!--REF #_command_.START MONITORING ACTIVITY.Syntax-->**START MONITORING ACTIVITY** ( *duration* {; *source*} )<!-- END REF-->
<!--REF #_command_.START MONITORING ACTIVITY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| duration | Real | &#8594;  | ログが開始される時間の長さ(秒単位) |
| source | Integer | &#8594;  | オペレーションのソース |

<!-- END REF-->

#### 説明 

<!--REF #_command_.START MONITORING ACTIVITY.Summary-->**START MONITORING ACTIVITY** コマンドは*duration* 引数で指定した時間を超えるオペレーションをメモリ内に記録します。<!-- END REF-->4D リモート、4D Server、スタンドアロン版4D から呼び出しまたは実行が可能です(ただしスタンドアロン版は*source* 引数のソースがネットワークアクティビティでない場合)。記録されたアクティビティは[Monitored activity](monitored-activity.md) コマンドを使用することで取得可能です。アクティビティの記録を停止したい場合には[STOP MONITORING ACTIVITY](stop-monitoring-activity.md) を呼び出してください。

*duration* 引数には、オペレーションの実行に対してログが始まるまでの時間を定義する数値を渡します(秒単位、小数での表現も可能)。オペレーションの実行が*duration* 引数の時間を超えると、オペレーションはメモリに記録されます。

任意の*source* 引数を使用すると、モニターするアクティビティの種類を定義することができます。取り得る値は以下の通りです:

| 定数                  | 値   | コメント                     |
| ------------------- | --- | ------------------------ |
| Activity all        | \-1 | 全てのソースからのアクティビティ(デフォルト値) |
| Activity language   | 1   | ランゲージ実行オペレーション           |
| Activity network    | 2   | ネットワークリクエストオペレーション       |
| Activity operations | 4   | 4D データオペレーション            |

**注**: デバッグログが4D Server の[GRAPH SETTINGS](graph-settings.md)にて停止された場合、**START MONITORING ACTIVITY** とActivity network 定数を使用するとログが再開されます。

#### 例題 

1ミリ秒を超える4D データとデバッグアクティビティのモニタリングを開始/終了したいような場合を考えます:

```4d
 var $activities : Collection
 
 START MONITORING ACTIVITY(0.001;Activity operations+Activity language)
 
 $coll:=ds.Persons.all().toCollection("firstname, lastname, address.*")
 
  // 4D データアクティビティとデバッグログから1ミリ秒を超える全てのオペレーションを返す
 $activities:=Monitored activity
 
 $text:=JSON Stringify($activities.orderBy("startTime");*)
 TEXT TO DOCUMENT("result.txt";$text)
 
  // 4D データアクティビティとデバッグログのモニタリングを終了する
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

#### 参照 

[Monitored activity](monitored-activity.md)  
[STOP MONITORING ACTIVITY](stop-monitoring-activity.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1712 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


