---
id: create-entity-selection
title: Create entity selection
slug: /commands/create-entity-selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->**Create entity selection** ( *dsTable* {; *settings*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Create entity selection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dsTable | Table | &srarr; | エンティティセレクションの元となるカレントセレクションが属する4Dデータベースのテーブル |
| settings | Object | &srarr; | ビルドオプション: context |
| 戻り値 | EntitySelection | &larr; | 指定したテーブルに対応するデータクラスのエンティティセレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Create entity selection.Summary-->**このドキュメントは移動しました**

このコマンドのドキュメンテーションは移動しました。<!-- END REF-->最新のドキュメンテーションについては、*developer.4d.com* を参照して下さい。

**Create entity selection** コマンドは、*dsTable* 引数で指定したテーブルに対応するデータクラスの新規の追加可能なエンティティセレクションを、同テーブルのカレントセレクションに基づいてビルドして返します。

#### 参照 

[USE ENTITY SELECTION](use-entity-selection.md)  