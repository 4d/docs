---
id: redraw
title: REDRAW
slug: /commands/redraw
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW.Syntax-->**REDRAW** ( *object* )<!-- END REF-->
<!--REF #_command_.REDRAW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | any | &#8594;  | サブフォームを再描画するテーブル、またはエリアを再描画するフィールド、またはエリアを再描画する変数、または更新されるべきリストボックス |

<!-- END REF-->

## 説明 

<!--REF #_command_.REDRAW.Summary-->メソッドを使用して、サブフォームで中に表示されるフィールドの値を変更する場合、フォームを確実に更新するために REDRAW コマンドを使用しなければなりません。<!-- END REF-->

セレクション表示モードのリストボックスのコンテキストでは、REDRAWがリストボックスタイプのオブジェクトに適用されると、オブジェクトに表示されているデータが再描画されます。このステートメントは特にセレクションのレコードに対し、データの更新が行われた場合に呼び出されなければなりません。

  

## 参照 

[SET TIMER](set-timer.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 174 |
| スレッドセーフである | &cross; |


