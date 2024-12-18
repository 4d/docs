---
id: distinct-values
title: DISTINCT VALUES
slug: /commands/distinct-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT VALUES.Syntax-->**DISTINCT VALUES** ( *aField* ; *array* {; *countArray*} )<!-- END REF-->
<!--REF #_command_.DISTINCT VALUES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | データとして使用する、インデックス可能なフィールド |
| array | Array | &#8592; | フィールドデータを受け取る配列 |
| countArray | Integer array, Real array | &#8592; | それぞれの値の数を受け取る配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DISTINCT VALUES.Summary-->**DISTINCT VALUES**コマンドは、*aField*が属するテーブルのカレントセレクションの*aField*フィールドからの重複しない(ユニークな)値で構成される*array*配列を作成します。<!-- END REF-->また任意の引数*countArray*にそれぞれの値のオカレンス数を返す事もできます。

**DISTINCT VALUES**コマンドには、**インデックスが可能な** (インデックスをサポートするタイプの) フィールドを渡すことができます。実際にインデックスされている必要はありません。  
しかし、インデックス付けされていないフィールドでこのコマンドを実行すると遅くなります。また、この場合、コマンドはカレントレコードを失うことに注意してください。

**DISTINCT VALUES**はカレントセレクションのレコードをブラウズし、重複しない値を保持します。

**注:** トランザクション中に**DISTINCT VALUES**コマンドが呼び出された場合、トランザクション中に作成されたレコードも処理の対象となります。

**DISTINCT VALUES** で使用される配列は、第一引数渡すフィールドと型が一致している必要があります。一致していない場合、配列の型は修正されます。このルールには一つの例外 があります: フィールドがピクチャ型である(かつキーワードインデックスと関連付けられている)場合、対応する配列はテキスト型でなければなりません。

コマンドの呼び出し後、配列のサイズはセレクション中の重複しない値の数と同じです。コマンドはカレントセレクションまたはカレントレコードを変更することはありません。 **DISTINCT VALUES** コマンドはフィールドのインデックスを使用するので、*array*中の要素は昇順でソートされて返されます。これが目的の並べ替え順であれば、**DISTINCT VALUES**を使用した後に[SORT ARRAY](sort-array.md)コマンドを呼び出す必要はありません。

**注**: **DISTINCT VALUES**を キーワードインデックスが適用されたテキストまたはピクチャーフィールドに対して実行すると、コマンドはインデックスのキーワードで構成される配列を作成します。他のタイ プのデータと異なり、返される値はインデックスの存在により異なります。テキストフィールドの場合、フィールドに標準のインデックスが定義されていても、 常にキーワードインデックスが採用されます。テキストやピクチャーフィールドにキーワードインデックスが割り当てられていない場合、空の配列が返されます。  

このコマンドは任意の引数として*countArray*配列を受け取ります。この配列を渡した場合、*aField*引数で指定したフィールド内にあるそれぞれの重複しない値の、カレントセレクション内で検知されたオカレンス数が返されます。*countArray*配列のサイズは、*array*配列内の要素の数と自動的に同じにされます。例えば、"A"、"B"そして"A"というフィールド値である三つのレコードを含むセレクションに対しては、*array*配列には{A;B}が返され、*countArray*配列には{2;1}が含まれます。*countArray*配列には倍長整数配列または実数配列を渡す事ができます。

**注:** *countArray*引数は、テキストフィールドまたはキーワードインデックスと関連づけられているピクチャーフィールドに関してはサポートされません。

**警告**: **DISTINCT VALUES**コマンドは、セレクション及びそこ に含まれる重複しない値の数によって非常に大きな配列を作成する場合があります。配列はメモリ上に存在します。そのためコマンドの実行後、結果をテストす るのは良いことです。これを行うには、作成された配列のサイズをテストするか、[ON ERR CALL](on-err-call.md)プロジェクトメソッドを使用してコマンドの呼び出しをカバーします。

**4D Server:** このコマンドは4D Server用に最適化されています。サーバ側で配列の作成と値の計算が行われ、その後全体がクライアントに送られます。

##### 

**注:** このコマンドはオブジェクト型フィールドをサポートしません。

#### 例題 1 

以下の例は、カレントセレクションから都市のリストを作成します。そして、会社の店舗がある都市の数を求めます: 

```4d
 ALL RECORDS([Retail Outlets]) // レコードのセレクションを作成
 DISTINCT VALUES([Retail Outlets]City;asCities)
 ALERT("会社は"+String(Size of array(asCities))+"都市に店舗を持ちます。")
```

#### 例題 2 

"Pictures"フィールドに割り当てられたキーワードインデックスの完全なリストを取得します: 

```4d
 ALL RECORDS([PICTURES])
 ARRAY TEXT(<>_MyKeywords;10)
 DISTINCT VALUES([PICTURES]Photos;<>_MyKeywords)
```

#### 例題 3 

統計を計算するために、フィールド内の固有の値を降順で並べ替えしたい場合を考えます:

```4d
 ARRAY TEXT($_issue_type;0)
 ARRAY LONGINT($_issue_type_instance;0)
 DISTINCT VALUES([Issue]iType;$_issue_type;$_issue_type_instances)
 SORT ARRAY($_issue_type_instances;$_issue_type;<)
```

#### 参照 

  
[GET TEXT KEYWORDS](get-text-keywords.md)  
[ON ERR CALL](on-err-call.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 339 |
| スレッドセーフである | &check; |


