---
id: call-subform-container
title: CALL SUBFORM CONTAINER
slug: /commands/call-subform-container
displayed_sidebar: docs
---

<!--REF #_command_.CALL SUBFORM CONTAINER.Syntax-->**CALL SUBFORM CONTAINER** ( *event* )<!-- END REF-->
<!--REF #_command_.CALL SUBFORM CONTAINER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| event | Integer | &#8594;  | 送信するイベント |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CALL SUBFORM CONTAINER.Summary-->**CALL SUBFORM CONTAINER** コマンドを使用してサブフォームインスタンスからそれを含むサブフォームコンテナにイベントを送信できます。<!-- END REF-->そしてサブフォームコンテナは親フォームのコンテキストでイベントを処理できます。

このコマンドはサブフォームのフォームメソッドまたはサブフォーム上のオブジェクトのオブジェクトメソッドに置かれなければなりません。サブフォームコンテナのオブジェクトメソッドだけがイベントを受信します。 

*event*には4Dの定義済みフォームイベント ("*Form Events*"テーマの定数を使用できます) 、あるいはカスタムイベントに対応する値をを渡すことができます。前者の場合、イベントはサブフォームに対して有効にされていなければなりません。カスタムイベントの場合、既存あるいは将来の4Dのイベント番号との重複を避けるため、*event*に負数を渡すことを推奨します。

**CALL SUBFORM CONTAINER** *コマンドの実行例:*

![](../assets/en/commands/pict166755.en.png)

#### 参照 

[Form event code](form-event-code.md)  
[GOTO OBJECT](goto-object.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1086 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


