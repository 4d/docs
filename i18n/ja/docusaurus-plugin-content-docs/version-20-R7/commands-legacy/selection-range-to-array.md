---
id: selection-range-to-array
title: SELECTION RANGE TO ARRAY
slug: /commands/selection-range-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION RANGE TO ARRAY.Syntax-->**SELECTION RANGE TO ARRAY** ( *start* ; *end* {; field | table ; *array*} {; field | table2 ; *array2* ; ... ; field | tableN ; *arrayN*} )<!-- END REF-->
<!--REF #_command_.SELECTION RANGE TO ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| start | Integer | &#8594;  | データ取得を開始するレコード位置番号 |
| end | Integer | &#8594;  | データ取得を終了するレコード位置番号 |
| field &#124; table | フィールド, テーブル | &#8594;  | データを取得するフィールドまたは レコード番号を取得するテーブル |
| array | Array | &#8592; | フィールド値またはレコード番号を受け取る配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SELECTION RANGE TO ARRAY.Summary-->**SELECTION RANGE TO ARRAY**コマンドは1つまたは複数の配列を作成し、その配列にカレントセレクションのフィールド値またはレコード番号を代入します。<!-- END REF--> 

カレントセレクション全体を対象とする[SELECTION TO ARRAY](selection-to-array.md)と異なり、**SELECTION RANGE TO ARRAY**コマンドは、セレクション中、引数*start*と*end*によって指定されたレコード位置番号の範囲が適用範囲となります。

このコマンドは、*start*と*end*が、*1 <= start <= end <= Records in selection (\[...\])*の式の条件を満たしていることを期待します。

*1 <= start = end < Records in selection (\[...\])*を渡すと、*start = end*で選択されたレコードのフィールドをロード、あるいはレコード番号を取得します。

間違ったレコード位置番号を渡すと、このコマンドは以下を実行します:

* *end > Records in selection (\[...\])*の場合、*start*で指定されたレコードから最後のレコードまでの値を返します。
* *start > end*の場合、*start*で指定されたレコードのみの値を返します。
* 両方の引数がセレクションのサイズと一致しない場合、空の配列を返します。

[SELECTION TO ARRAY](selection-to-array.md)コマンド同様、**SELECTION RANGE TO ARRAY**コマンドも最初に指定したテーブルのセレクションを用います。

また[SELECTION TO ARRAY](selection-to-array.md)コマンド同様、**SELECTION RANGE TO ARRAY**コマンドは以下の動作を行います:

* 1つまたは複数のフィールドから値をロードします。
* シンタックス...;\[テーブル\];配列;...を使用して、レコード番号をロードします。
* テー ブル間にn対1の自動リレートが設定されている場合や、[SET AUTOMATIC RELATIONS](set-automatic-relations.md)を事前に呼び出してn対1のマニュアルリレートを自動に変更した場合は、リレートフィールドの値をロードします。いずれの場合も、複 数レベルのn対1リレートを経てテーブルから値がロードされます。
各配列は、そのフィールドタイプに応じてタイプ定義されます。

**SELECTION RANGE TO ARRAY** を時間型のフィールドに対して適用した場合、配列が他の型として定義されたことがない場合のみ時間型配列が作成されるという点に注意して下さい。例えば、以下のコンテキストでは、 *myArray* 配列はその後も倍長整数型配列のままです:  

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

レコード番号をロードする場合、配列のタイプは倍長整数となります。

**注:** *start* と *end* 引数のみを指定して**SELECTION RANGE TO ARRAY**コマンドを呼び出すことができます。 この特別なシンタックスを使用して、\* を指定した一連の[SELECTION TO ARRAY](selection-to-array.md)コマンドスタックを、限定してセレクションに対し実行することができます (例題4参照)。 

**4D Server:** **SELECTION RANGE TO ARRAY**コマンドは4D Server用に最適化されています。各配列はサーバ上で作成され、配列全体がクライアントマシンに送信されます。

**警告：** **SELECTION RANGE TO ARRAY**コマンドは、*start*と*end*で 指定した範囲やロードするデータサイズによって非常に大きな配列を作成する場合があります。配列はメモリ上に存在します。そのためコマンドの実行後、結果 をテストするのは良いことです。これを行うには、作成された配列のサイズをテストするか、[ON ERR CALL](on-err-call.md)を使用してコマンドの呼び出しをカバーします。

コマンドが正常に実行されると、結果配列のサイズは*(end-start)+1*になります。ただし*end*引数がセレクションのレコード数より大きい場合、結果の配列は*(Records in selection(\[...\])-start)+1*個の要素を含みます。

#### 例題 1 

以下の例は、*\[Invoices\]*テーブルのカレントセレクションの先頭から50レコードを選択します。そして、*\[Invoices\]Invoice ID*フィールドおよびリレートフィールドの*\[Customers\]Customer ID*から値をロードします:

```4d
 SELECTION RANGE TO ARRAY(1;50;[Invoices]Invoice ID;alInvoID;[Customers]Customer ID;alCustID)
```

#### 例題 2 

以下の例は、*\[Invoices\]*テーブルのカレントセレクションの最終50レコードを選択します。そして、*\[Invoices\]*レコードおよび*\[Customers\]*リレートレコードのレコード番号をロードします:

```4d
 lSelSize:=Records in selection([Invoices])
 SELECTION RANGE TO ARRAY(lSelSize-49;lSelSize;[Invoices];alInvRecN;[Customers];alCustRecN)
```

#### 例題 3 

以下の例は、配列に一度に全体をダウンロードできないかもしれない、大きなセレクションのレコードを、1000づつシーケンシャルに処理します:

```4d
 lMaxPage:=1000
 lSelSize:=Records in selection([Phone Directory])
 For($lPage ;1;1+((lSelSize-1)\lMaxPage))
  // 値やレコード番号をロード
    SELECTION RANGE TO ARRAY(1+(lMaxPage*($lPage-1));lMaxPage*$lPage;...;...;...;...;...;...)
  // 配列に対し処理を行う
 End for
```

#### 例題 4 

\[Invoices\]テーブルのカレントセレクション中1\~50番目のレコードのみを配列に取得します: 

```4d
  // 取得するフィールドと配列のペアを指定
 SELECTION TO ARRAY([Invoices]InvoiceRef;arrLInvRef;*)
 SELECTION TO ARRAY([Invoices]Date;arrDInvDate;*)
 SELECTION TO ARRAY([Clients]ClientRef;arrLClientRef;*)
  // データの取得を実行
 SELECTION RANGE TO ARRAY(1;50)
```

#### 参照 

[ON ERR CALL](on-err-call.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 368 |
| スレッドセーフである | &check; |


