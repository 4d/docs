---
id: print-record
title: PRINT RECORD
slug: /commands/print-record
displayed_sidebar: docs
---

<!--REF #_command_.PRINT RECORD.Syntax-->**PRINT RECORD** ( {*aTable*}{;}{* | >} )<!-- END REF-->
<!--REF #_command_.PRINT RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | カレントレコードを印刷するテーブル または 省略した場合はデフォルトテーブル |
| * &#124; > | 演算子 | &#8594;  | *: 印刷ダイアログを省略, または >:  印刷設定の再初期化をしない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.PRINT RECORD.Summary-->**PRINT RECORD** は *aTable*のカレントレコードを、カレントセレクションを変更せずに印刷します。<!-- END REF-->カレント出力フォームが印刷に用いられます。*aTable*にカレントレコードが存在しない場合、**PRINT RECORD**は何も行いません。

**PRINT RECORD** コマンドを使ってサブフォームを印刷することができます。これは [Print form](../commands/print-form.md) では実行できません。

**Note:** 変更されたレコードが未保存の場合、ディスク上の変更前のフィールド値ではなく、変更後の値が印刷されます。

デフォルトで **PRINT RECORD** は印刷の前にプリントジョブダイアログボックスを表示します。 印刷ダイアログをユーザーがキャンセルした場合、**PRINT RECORD** はキャンセルされ、印刷は行われません。  
このダイアログの表示を省略するには、オプション引数 *\** または *\>* を使います:

* *\** 引数は、現在の印刷設定 (デフォルトの設定、もしくは *\_o\_PAGE SETUP* や [SET PRINT OPTION](set-print-option.md) コマンドで定義した設定) に従い、印刷処理を行います。
* *\>* 引数は上記に加え、現在の印刷設定を再初期化することなく印刷を行います。この設定は、以前に設定した内容を継続し、(例えばループ中で) 連続した **PRINT RECORD** コマンドを使用する時に役立ちます。

**4D Server:** このコマンドは、ストアドプロシージャー内において4D Server上で実行することができます。この状況では、次の制約があります:

* サーバーマシン上ではダイアログボックスを一切表示しないでください (特定の必要性がある場合を除く)。そのためにはこのコマンドを *\** または *\>* 引数付きで呼び出さなければなりません。
* プリンター関連の問題が発生しても (用紙切れ、プリンター接続切断等) 、エラーメッセージは生成されません。

**警告:** **PRINT RECORD** と一緒に [PAGE BREAK](page-break.md) コマンドを使用してはいけません。[PAGE BREAK](page-break.md) コマンドは [Print form](../commands/print-form.md) で使用されるように設計されています。

#### 例題 1 

以下の例では、\[Invoices\] テーブルのカレントレコードを印刷します。このコードは入力フォームの**印刷**ボタンのオブジェクトメソッド内に記述されています。ユーザがそのボタンをクリックすると、レコードは指定した出力フォームで印刷されます。 

```4d
 FORM SET OUTPUT([Invoices];"Print One From Data Entry") // 印刷用に作成された出力フォームを選択
 PRINT RECORD([Invoices];*) // 請求書をそのまま印刷 (印刷設定ダイアログを表示せずに)
 FORM SET OUTPUT([Invoices];"Standard Output") // 出力フォームを元に戻す
```

#### 例題 2 

以下の例では、同じカレントレコードを二種類の異なるフォームを使用して印刷しています。このコードは、入力フォームの**印刷**ボタンのオブジェクトメソッド内に記述されています。印刷設定をを行った後、二種類のフォームでその設定を使用することが出来ます。 

```4d
 PRINT SETTINGS //ユーザが印刷設定を行う
 If(OK=1)
    FORM SET OUTPUT([Employees];"Detailed") //1番目の印刷フォーム
    PRINT RECORD([Employees];>) //ユーザが指定した設定を使用して印刷
    FORM SET OUTPUT([Employees];"Simple") //2番目の印刷フォーム
    PRINT RECORD([Employees];>) //ユーザが指定した設定を使用して印刷
    FORM SET OUTPUT([Employees];"Output") //出力フォームを元に戻す
 End if
```

#### 参照 

[Print form](../commands/print-form.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 71 |
| スレッドセーフである | &cross; |


