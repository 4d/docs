---
id: trigger-properties
title: TRIGGER PROPERTIES
slug: /commands/trigger-properties
displayed_sidebar: docs
---

<!--REF #_command_.TRIGGER PROPERTIES.Syntax-->**TRIGGER PROPERTIES** ( *triggerLevel* ; *dbEvent* ; *tableNum* ; *recordNum* )<!-- END REF-->
<!--REF #_command_.TRIGGER PROPERTIES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| triggerLevel | Integer | &#8594;  | トリガ実行サイクルレベル |
| dbEvent | Integer | &#8592; | データベースイベント |
| tableNum | Integer | &#8592; | 影響を受けるテーブル番号 |
| recordNum | Integer | &#8592; | 影響を受けるレコード番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.TRIGGER PROPERTIES.Summary-->**TRIGGER PROPERTIES**コマンドは、*triggerLevel*に渡すトリガーの実行レベルに関する情報を返します。<!-- END REF-->トリガー実行レベルのカスケードに基づいて異なる動作を実行するには、**TRIGGER PROPERTIES**と[Trigger level](trigger-level.md)を組み合わせて使用します。詳細については*トリガ*にあるトリガーのカスケードを参照してください。

存在しないトリガー実行レベルを渡すと、コマンドはすべての引数に0を返します。

トリガー実行レベルのデータベースイベントの種類が、引数 *dbEvent* に返されます。*Trigger Events*テーマに以下のような定義済み定数があります。

| 定数                              | 型    | 値 |
| ------------------------------- | ---- | - |
| On Deleting Record Event        | 倍長整数 | 3 |
| On Saving Existing Record Event | 倍長整数 | 2 |
| On Saving New Record Event      | 倍長整数 | 1 |
  
  
トリガー実行レベルのデータベースイベントに関係するレコードのテーブル番号とレコード番号が、引数 *tableNum* と *recordNum* に返されます。

#### 参照 

[Trigger event](trigger-event.md)  
[Trigger level](trigger-level.md)  
*トリガ*  
*レコード番号について*  