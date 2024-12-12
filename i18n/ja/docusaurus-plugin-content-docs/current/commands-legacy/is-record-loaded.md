---
id: is-record-loaded
title: Is record loaded
slug: /commands/is-record-loaded
displayed_sidebar: docs
---

<!--REF #_command_.Is record loaded.Syntax-->**Is record loaded** {( *aTable* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is record loaded.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードを検査するテーブル または 省略時、デフォルトテーブル |
| 戻り値 | Boolean | &#8592; | True: レコードはロードされている そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is record loaded.Summary-->**Is record loaded** コマンドは、*aTable*のカレントレコードがカレントプロセス内にロードされていれば[True](true.md "True")を返します。<!-- END REF-->

**4D Server**: 原理的には、テーブル同士が自動リレーションでリンクされている場合、リレート先テーブルのカレントレコードは自動でロードされます (*リレーションについて* 参照)。しかし 4D Server は最適化のため、リレートレコードのフィールドの読み込みや編集などの必要なときにだけ、これらのレコードをロードします。そのため、ローカルモードでは **Is record loaded** コマンドが True を返すような場合でも、リモートモードでは同コマンドは False を返します。

#### 例題 

“次レコード”または“前レコード”の自動アクションを使用するかわりに、これら2つのボタン用にオブジェクトメソッドを書いて、これらの動作を向上させることができます。"次へ"ボタンは、カレントレコードがセレクションの最後のレコードであればセレクションの最初のレコードを表示し、"前へ"ボタンは、セレクションの最初のレコードであればセレクションの最後のレコードを表示します。

```4d
  // “前へ” ボタンのオブジェクトメソッド (自動アクションなし)
 If(Form event code=On Clicked) //v17 以前ではForm event を使用すること
    PREVIOUS RECORD([Group])
    If(Not(Is record loaded([Group])))
       GOTO SELECTED RECORD([Group];Records in selection([Group]))
  //セレクションの最後のレコードに移動
    End if
 End if
 
  // “次へ” ボタンのオブジェクトメソッド (自動アクションなし)
 If(Form event code=On Clicked) //v17 以前ではForm event を使用すること
    NEXT RECORD([Group])
    If(Not(Is record loaded([Group])))
       GOTO SELECTED RECORD([Groups];1)
  //セレクションの最初のレコードに移動
    End if
 End if
```
