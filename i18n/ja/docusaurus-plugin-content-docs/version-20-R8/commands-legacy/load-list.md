---
id: load-list
title: Load list
slug: /commands/load-list
displayed_sidebar: docs
---

<!--REF #_command_.Load list.Syntax-->**Load list** ( *listName* ) : Integer<!-- END REF-->
<!--REF #_command_.Load list.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| listName | Text | &#8594;  | デザインモードのリストエディタで 作成されたリスト名 |
| 戻り値 | Integer | &#8592; | 新しく作成されたリストのリスト参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Load list.Summary-->Load list は、*listName*で指定した名前のリストのコピーを作成し、そのリスト参照番号を返します。<!-- END REF--> 

データベース中で、指定されたリストを検索するには[LIST OF CHOICE LISTS](list-of-choice-lists.md "LIST OF CHOICE LISTS") コマンドを使用します。   
*listName*と同じ名前のリストが存在するかを調べるには[Is a list](is-a-list.md "Is a list")コマンドを使用します。

作成されるリストはデザインモードで定義されたリストのコピーであることに留意してください。したがって、新規リストに変更を加えても、デザインモードで定義されたリストには影響しません。またデザインモードで定義されたリストに変更を加えても、すでにコピー済みのリストに影響しません。

新たに作成したリストを変更し、その変更を恒久的に保存したい場合は、[SAVE LIST](save-list.md "SAVE LIST")コマンドを呼び出します。

新たに作成したリストを使い終わったら、[CLEAR LIST](clear-list.md "CLEAR LIST")コマンドを呼び出してそれを廃棄するのを忘れないでください。廃棄しないと、作業セッションが終了するまで、またはそれを作成したプロセスが終了するかアボートされるまで、そのリストはメモリに留まります。

**Tip:** プロパティリストの選択リストプロパティを使用して、リストをフォームオブジェクト (階層リスト、タブコントロール、階層ポップアップメニュー) に関連付ける場合、オブジェクトメソッドからLoad listや[CLEAR LIST](clear-list.md "CLEAR LIST")を呼び出す必要はありません。4Dはリストを自動的にロードして消去します。

#### 例題 

国際市場に対応するデータベースを作成し、そのデータベースの使用中に異なる言語に切り替える必要があるとします。フォームで*hlList*という名前の、標準オプションのリストを示す階層リストを提供します。デザインモードでは、英語版の"Std Options US"、フランス語版の"Std Options FR"、日本語版の"Std Options JP"等、さまざまなリストを準備しました。これに加えて、*<>gsCurrentLanguage*という名前のインタープロセス変数を持ち、これに、英語版には"US"、フランス語版には"FR"、日本語版には"JP"というように2文字の言語コードを格納します。現在選択されている言語を使用してリストをロードするために、以下のように記述します:

```4d
  // hlList Hierarchical List Object Method
 Case of
    :(Form event code=On Load)
       var hlList : Integer
       hlList:=Load list("Std Options"+<>gsCurrentLanguage)
    :(Form event code=On Unload)
       CLEAR LIST(hlList;*)
 End case
```

#### 参照 

[CLEAR LIST](clear-list.md)  
[Is a list](is-a-list.md)  
[SAVE LIST](save-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 383 |
| スレッドセーフである | &cross; |


