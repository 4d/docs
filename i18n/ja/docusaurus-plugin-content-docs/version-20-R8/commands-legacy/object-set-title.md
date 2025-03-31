---
id: object-set-title
title: OBJECT SET TITLE
slug: /commands/object-set-title
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TITLE.Syntax-->**OBJECT SET TITLE** ( {* ;} *object* ; *title* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TITLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| title | Text | &#8594;  | オブジェクトの新しいタイトル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET TITLE.Summary-->**OBJECT SET TITLE**コマンドは、*object* 引数で指定されたボタンのタイトルを*title*で渡した値に変更します。<!-- END REF-->  

  
オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。オブジェクト名に関する詳細は*オブジェクトプロパティ*を参照してください。

**OBJECT SET TITLE**はタイトルを表示するオブジェクトに適用できます:

* ボタンと3Dボタン
* チェックボックスと3Dチェックボックス
* ラジオボタンと3Dラジオボタン
* リストボックスヘッダー
* スタティックテキストエリア
* グループボックス

通常このコマンドは一度に1つのオブジェクトに適用します。オブジェクトタイトルエリアにはテキストを表示するだけの十分な大きさが必要です。エリアが小さすぎると、テキストは途中までしか表示されません。*title*にキャリッジリタ－ンは使用しないでください。

複数行に渡るタイトルを設定したい場合、 "\\"文字(コードエディターでは"\\\\" )を改行として使用して下さい。これは3Dボタン、3Dチェックすボックス、3Dラジオボタンにとリストボックスヘッダーに対して許可されています。

**注:** "\\" をタイトルに使用したい際には "\\\\\\" を渡して下さい。

#### 例題 1 

以下の例は、[MODIFY SELECTION](modify-selection.md)を使用して表示された出力フォームのフッタエリアにある検索ボタンのオブジェクトメソッドです。このメソッドはテーブルを検索し、その検索結果に応じて*bDelete*ボタンを使用可または不可にして、そのボタンタイトルを変更します:

```4d
 QUERY([People];[People]Name=vName)
 Case of
    :(Records in selection([People])=0) // peopleが見つからなかった
       OBJECT SET TITLE(bDelete;" Delete")
       OBJECT SET ENABLED(bDelete;False)
    :(Records in selection([People])=1) // 一人見つかった
       OBJECT SET TITLE(bDelete;"Delete Person")
       OBJECT SET ENABLED(bDelete;True)
    :(Records in selection([People])>1) // 複数人見つかった
       OBJECT SET TITLE(bDelete;"Delete People")
       OBJECT SET ENABLED(bDelete;True)
 End case
```

  
#### 例題 2 

タイトルを2行に渡って挿入したい場合:

```4d
 OBJECT SET TITLE(*;"header1";"Ascending sort \\\ \\Descending sort")
 OBJECT SET TITLE(*;"button1";"Click here \\to print")
```

![](../assets/en/commands/pict1242273.en.png)

#### 参照 

[OBJECT Get title](object-get-title.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 194 |
| スレッドセーフである | &cross; |


