---
id: print-selection
title: PRINT SELECTION
slug: /commands/print-selection
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SELECTION.Syntax-->**PRINT SELECTION** ( {*aTable*}{;}{* | >} )<!-- END REF-->
<!--REF #_command_.PRINT SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションを印刷するテーブル, または 省略した場合、デフォルトテーブル |
| * &#124; > | 演算子 | &#8594;  | *: 印刷ダイアログを省略, または >:  印刷設定の再初期化をしない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PRINT SELECTION.Summary-->**PRINT SELECTION** は、*aTable*のカレントセレクションを印刷します。<!-- END REF-->レコードは、カレントプロセスのテーブルのカレント出力フォームを使用して印刷されます。**PRINT SELECTION**は、デザインモードの**プリント...**メニューと同じ動作を実行します。セレクションが空の場合、**PRINT SELECTION** は何も行いません。

デフォルトで、**PRINT SELECTION** は印刷の前にプリントジョブダイアログボックスを表示します。ユーザが印刷ダイアログボックスをキャンセルをした場合、コマンドはキャンセルされ、印刷を行いません。  
オプション引数の *\** または *\>* を使用して、ダイアログボックスの表示を取り消すことができます:

* *\** 引数は、現在の印刷設定 (デフォルトの設定、もしくは *\_o\_PAGE SETUP* や [SET PRINT OPTION](set-print-option.md) コマンドで定義した設定) に従い、印刷処理を行います。
* *\>* 引数は上記に加え、現在の印刷設定を再初期化することなく印刷を行います。この設定は、以前に設定した内容を継続し、(例えばループ中で) 連続した **PRINT SELECTION** コマンドを使用する時に役立ちます。この引数の使用例は[PRINT RECORD](print-record.md) コマンドの説明を参照してください。

印刷中には、デザインモードのプロパティリストウィンドウで有効にされたフォームおよびオブジェクトのイベントと、実際に発生しているイベントに応じて、出力フォームのフォームメソッドとオブジェクトメソッドが実行されます:

* On Headerイベントはヘッダを印刷する直前に生成されます。
* On Printing Detailイベントはレコードを印刷する直前に生成されます。
* On Printing Breakイベントはブレークエリアを印刷する直前に生成されます。
* On Printing Footerイベントははフッタを印刷する直前に生成されます。

**PRINT SELECTION** が最初のヘッダーを印刷しているかどうかは、On Headerイベントで [Before selection](before-selection.md) を判定することによって調べることができます。またOn Printing Footerイベントで [End selection](end-selection.md) を判定することによって、最後のフッターかどうかをチェックすることができます。これら関数の詳細は、それぞれのコマンドや [Form event code](../commands/form-event-code.md)"、[Level](level.md) の説明を参照してください。

**PRINT SELECTION** を使用し、小計やブレーク付きでセレクションを印刷するには、まずそのセレクションをソートしなければなりません。次に、レポートの各ブレークエリアに、小計を変数に代入するオブジェクトメソッドを持つ変数を配置します。変数に値を代入する、[Sum](sum.md) や [Average](average.md) のような統計関数と算術関数を使用することもできます。詳細は[Subtotal](subtotal.md)、[BREAK LEVEL](break-level.md)、[ACCUMULATE](accumulate.md) コマンドの説明を参照してください。

**警告:** **PRINT SELECTION** のコンテキストで [PAGE BREAK](page-break.md) コマンドを使用してはいけません。[PAGE BREAK](page-break.md) は [Print form](print-form.md) のコンテキストで使用します。

**PRINT SELECTION** の呼び出し後、プリントが正常に終了するとシステム変数OKに1がセットされます。プリントが中断された場合には、システム変数OKには0がセットされます（例えばユーザが印刷ダイアログボックスでキャンセルをクリックした場合）。

**4D Server:** このコマンドは、ストアドプロシージャーで4D Server上で実行することができます。この状況では、次の制約があります:

* サーバーマシン上ではダイアログボックスを一切表示しないでください (特定の必要性がある場合を除く)。そのためにはこのコマンドを *\** または *\>* 引数付きで呼び出さなければなりません。
* プリンター関連の問題が発生しても (用紙切れ、プリンター接続切断等) 、エラーメッセージは生成されません。

#### 例題 

以下の例は、最初に\[People\]テーブルのすべてのレコードを選択します。次に[DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")コマンドを使用してすべてのレコードを表示し、ユーザがプリントするレコードを選択します。最後に[USE SET](use-set.md "USE SET")コマンドにより、選択されたレコードをPRINT SELECTIONで印刷します:

```4d
 ALL RECORDS([People]) // 全レコード選択
 DISPLAY SELECTION([People];*) // レコード表示
 USE SET("UserSet") // ユーザが指定したレコードのみを使用
 PRINT SELECTION([People]) // 印刷実行
```

#### 参照 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level](level.md)  
[Subtotal](subtotal.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 60 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


