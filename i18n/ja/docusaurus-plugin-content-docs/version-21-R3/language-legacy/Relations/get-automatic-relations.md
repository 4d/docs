---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *one* : Boolean ; *many* : Boolean )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| one | Boolean | &#8592; | すべてのn対1リレートの状態 |
| many | Boolean | &#8592; | すべての1対nリレートの状態 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->GET AUTOMATIC RELATIONS コマンドにより、データベースのすべてのマニュアルn対1リレートおよび1対nリレートに関する自動/マニュアルのステータスがカレントプロセスにおいて変更されたかどうかを知ることができます。<!-- END REF-->

* *one*: 前回の[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")コマンドの呼び出しにより、すべてのマニュアルn対1リレートが自動に設定された場合、この引数は[True](../commands/true)を返します - 例えばSET AUTOMATIC RELATIONS(True;False)。  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")コマンドが呼び出されなかった場合や、前回の実行によりマニュアルn対1リレートが変更されなかった場合には[False](../commands/false)を返します - 例えばSET AUTOMATIC RELATIONS(False;False)。
* *many*: 前回の[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")コマンドの呼び出しにより、すべてのマニュアル1対nリレートが自動に設定された場合、この引数は[True](../commands/true)を返します - 例えばSET AUTOMATIC RELATIONS(True;True)。  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")コマンドが呼び出されなかった場合や、前回の実行によりマニュアル1対nリレートが変更されなかった場合には[False](../commands/false)を返します - SET AUTOMATIC RELATIONS(True;False)。

## 例題 

[GET FIELD RELATION](get-field-relation.md "GET FIELD RELATION") コマンドの例題を参照

## 参照 

[GET FIELD RELATION](../commands/get-field-relation)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 899 |
| スレッドセーフである | yes |


