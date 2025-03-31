---
id: selection-to-array
title: SELECTION TO ARRAY
slug: /commands/selection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.SELECTION TO ARRAY.Syntax-->**SELECTION TO ARRAY** {( field | table ; *array* {; *aField* ; *array* {; *aField2* ; *array2* ; ... ; *aFieldN* ; *arrayN*}}{; *})}<!-- END REF-->
<!--REF #_command_.SELECTION TO ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| field &#124; table | フィールド, テーブル | &#8594;  | データを取得するフィールドまたは レコード番号を取得するテーブル |
| array | Array | &#8592; | フィールド値またはレコード番号を受け取る配列 |
| aField | Field | &#8594;  | 配列に値を取得するフィールド |
| array | Array | &#8592; | フィールドデータを受け取る配列 |
| * | 演算子 | &#8594;  | 実行をスタックする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SELECTION TO ARRAY.Summary-->**SELECTION TO ARRAY**コマンドは、1つ以上の配列を作成し、カレントセレクションのフィールドデータやレコード番号を配列にコピーします。<!-- END REF-->

**SELECTION TO ARRAY**コマンドは第一引数 (テーブル参照またはフィールド参照) で指定されたテーブルのセレクションに適用されます。**SELECTION TO ARRAY**は以下のことを行います:

* 1つまたは複数のフィールドから値をロードします。
* *\[table\];array* シンタックスを使用してテーブルからレコード番号をロードします。
* テー ブル間にn対1の自動リレートが設定されている場合や、[SET AUTOMATIC RELATIONS](set-automatic-relations.md)を事前に呼び出してn対1のマニュアルリレートを自動に変更した場合は、リレートフィールドの値をロードします。いずれの場合も、複 数レベルのn対1リレートを経てテーブルから値がロードされます。

各配列は、そのフィールドタイプに応じてタイプ定義されます。

**SELECTION TO ARRAY** を時間型のフィールドに対して適用した場合、配列が他の型として定義されたことがない場合のみ時間型配列が作成されるという点に注意して下さい。例えば、以下のコンテキストでは、 *myArray* 配列に対して適用した場合、配列はその後も倍長整数型配列のままです:

```4d
 ARRAY LONGINT(myArray;0)
 SELECTION TO ARRAY([myTable]myTimeField;myArray)
```

レコード番号をロードする場合、配列のタイプは倍長整数となります。

*\** 引数を渡すと、4Dはその行の実行を遅延し、メモリに格納します。*\** で終わる行を使用して複数の行をスタックできます。スタックされた行は *\** なしの**SELECTION TO ARRAY**一回の呼び出しですべて実行されます。この目的のため、このコマンドを引数なしで呼び出すことができます。  
これにより、[QUERY](query.md)コマンドのように、複雑な文を複数の行に分割して記述することができ、可読性が向上します。また途中の行の挿入も容易です ([ARRAY TO SELECTION](array-to-selection.md) コマンドの例題2参照)。 

**4D Server:** **SELECTION TO ARRAY**コマンドは4D Server用に最適化されています。各配列はサーバ上で作成され、配列全体がクライアントマシンに送信されます。

**警告：** **SELECTION TO ARRAY**コマンドは、カレントセレクションの大きさやロードするデータサイズによっ て非常に大きな配列を作成する場合があります。配列はメモリ上に存在します。そのためコマンドの実行後、結果をテストするのは良いことです。これを行うに は、作成された配列のサイズをテストするか、[ON ERR CALL](on-err-call.md)を使用してコマンドの呼び出しをカバーします。

**注:** **SELECTION TO ARRAY**コマンドを呼び出した後、カレントセレクションとカレントレコードは同じままですが、カレントレコードはロードされていません。もしカレントレコードのフィールド値を使いたい場合は**SELECTION TO ARRAY**コマンドの後に[LOAD RECORD](load-record.md)コマンドを使用してください。

#### 例題 1 

以下の例は、*\[People\]*テーブルと*\[Company\]*テーブルは自動リレーションを持ちます。2つの配列*asLastName*と*asCompanyAddr*は、*\[People\]* テーブルのセレクションの数にリサイズされ、両テーブルからのデータを受け取ります:

```4d
 SELECTION TO ARRAY([People]Last Name;asLastName;[Company]Address;asCompanyAddr)
```

#### 例題 2 

 以下の例は、*\[Clients\]*レコード番号を配列 *alRecordNumbers* に、*\[Clients\]Names* フィールドの値を配列 *asNames* 代入します:

```4d
 SELECTION TO ARRAY([Clients];alRecordNumbers;[Clients]Names;asNames)
```

この例は、以下の様に書くこともできます:

```4d
 SELECTION TO ARRAY([Clients];alRecordNumbers;*)
 SELECTION TO ARRAY([Clients]Names;asNames;*)
 SELECTION TO ARRAY
```

#### 参照 

[ARRAY TO SELECTION](array-to-selection.md)  
[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 260 |
| スレッドセーフである | &check; |


