---
id: current-form-table
title: Current form table
slug: /commands/current-form-table
displayed_sidebar: docs
---

<!--REF #_command_.Current form table.Syntax-->**Current form table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current form table.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Pointer | &#8592; | 現在表示されているフォームが属すテーブルへのポインタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current form table.Summary-->Current form tableコマンドは、カレントプロセスで表示または印刷されているフォームが属するテーブルのポインタを返します。<!-- END REF-->

以下の場合では、関数はNilを返します。

* カレントプロセスに表示または印刷されているフォームがない。
* カレントフォームがプロジェクトフォームである。

カレントプロセスで複数のウィンドウが開いている(最後に開かれたウィンドウがカレントアクティブウィンドウになる) 場合、このコマンドはアクティブウィンドウにフォームが表示されているテーブルへのポインタを返します。

現在表示されているフォームがサブフォームエリア用の詳細フォームである場合、ユーザがデータ入力中であり、ダブルクリック可能なサブフォームエリアのレコードまたはサブレコードをダブルクリックしたことを意味します。この場合には、コマンドは以下を返します:

* サブフォームがテーブルを表示している場合、サブフォームエリアに表示されたそのテーブルへのポインタ
* サブフォームエリアがサブテーブルを表示している場合には、重要な意味を持たないポインタ

#### 例題 

アプリケーション全体を通して、レコードを表示する際には、以下の表示方法に従います。フォーム内に変数*vsCurrentRecord* がある場合、ユーザーが新しいレコードを処理していれば、"New Record" と表示します。ユーザが5200レコードから成るセレクションの56番目のレコードを処理していれば、56/5200と表示します。

そのためには、オブジェクトメソッドを使用して変数*vsCurrentRecord*を作成します。その後、このオブジェクトメソッドをコピーして、すべてのフォームに貼り付けます。

```4d
  // vsCurrentRecord 入力不可変数のオブジェクトメソッド
 Case of
    :(Form event code=On Load)
       C_STRING(31;vsCurrentRecord)
       var $vpParentTable : Pointer
       var $vlRecordNum : Integer
       $vpParentTable:=Current form table
       $vlRecordNum:=Record number($vpParentTable->)
       Case of
          :($vlRecordNum=-3)
             vsCurrentRecord:="New Record"
          :($vlRecordNum=-1)
             vsCurrentRecord:="No Record"
          :($vlRecordNum>=0)
             vsCurrentRecord:=String(Selected record number($vpParentTable->))+" of "+
             String(Records in selection($vpParentTable->))
       End case
 End case
```

#### 参照 

[DIALOG](../commands/dialog.md)  
[FORM SET INPUT](form-set-input.md)  
[FORM SET OUTPUT](form-set-output.md)  
[PRINT SELECTION](print-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 627 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


