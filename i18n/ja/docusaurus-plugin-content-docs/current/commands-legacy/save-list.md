---
id: save-list
title: SAVE LIST
slug: /commands/save-list
displayed_sidebar: docs
---

<!--REF #_command_.SAVE LIST.Syntax-->**SAVE LIST** ( *list* ; *listName* )<!-- END REF-->
<!--REF #_command_.SAVE LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | リスト参照番号 |
| listName | Text | &#8594;  | デザインモードのリストエディタに 登録されるリスト名 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SAVE LIST.Summary-->SAVE LIST コマンドは、デザインモードのリストエディタに、*list* 引数に渡した参照番号を持つリストを*listName* 引数に渡した名前で保存します。<!-- END REF-->

既にその名前のリストが存在する場合は、その内容が置き換えられます。

**注:** このコマンドは**読出しのみ**でロードされたストラクチャー内(例えば.4dz プロジェクトあるいはコンポーネントなど)では使用することができません。

#### 参照 

[Load list](load-list.md)  