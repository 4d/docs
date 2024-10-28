---
id: distinct-attribute-values
title: DISTINCT ATTRIBUTE VALUES
slug: /commands/distinct-attribute-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Syntax-->**DISTINCT ATTRIBUTE VALUES** ( *objectField* ; *path* ; *valuesArray* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectField | Field | &#8594;  | 重複しない属性値の一覧を取得したいオブジェクトフィールド |
| path | Text | &#8594;  | 重複しない値を取得したい属性へのパス |
| valuesArray | Text array, Integer array, Boolean array, Date array, Time array | &#8592; | 属性パス内の重複しない値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Summary-->**テーマ:** 配列

**DISTINCT ATTRIBUTE VALUES** コマンドは、フィールドが所属するテーブルのカレントセレクションの*objectField*引数で指定したフィールド内の、*path*引数で指定した属性から取得した重複しない(固有の)値を含む配列*valuesArray*を作成します。<!-- END REF-->*objectField*引数で指定するフィールドはオブジェクト型でなければならないという点に注意して下さい。コマンドはインデックスつきのフィールドにもインデックスなしのフィールドにも使用できます。

*path* 引数には、有効な属性へのパスを渡します。ネストされた属性へのパスを定義するには標準のドット表記を使用して下さい。例えば、"company.address.number"のようにです。オブジェクト属性名は大文字と小文字を区別するという点に注意して下さい。

*valuesArray*引数に渡す配列は、*path*引 数で指定した属性と同じ型でなければならないという点に注意して下さい。値はスカラー値である、以下の配列型のみがサポートされます: テキスト、数字、ブール、日付、時間(ポインター、オブジェクト、Blob、画像はサポートされません)。 全てのフィールドの属性の値が同じ型であるということを確認して下さい。そうでない場合にはエラーが返されます。例えば、属性において、一つのレコードに"Monday"、別のレコードに10125が入っていた場合、エラーが返されます。

呼び出し後に、配列のサイズはセレクション内で見つかった固有の値の数と同じになります。コマンドはカレントセレクションまたはカレントレコードを変更しません。

##### .length 仮想プロパティの使用 

このコマンドでは"length"仮想プロパティが使用できます。配列型の全ての属性に対して自動的に使用可能で、配列のサイズ、つまり格納される要素の数を提供します。このプロパティはクエリで使用される事を想定して設計されています(**QUERY BY ATTRIBUTE**[QUERY BY ATTRIBUTE](query-by-attribute.md)を参照して下さい)。また**DISTINCT ATTRIBUTE VALUES**コマンドに対して使用する事で、属性の異なる配列サイズを取得することもできます。

#### 例題 

データベースに、\[Customer\]full\_Data というオブジェクトフィールドがあり、レコードが15ある場合を考えます:

![](../assets/en/commands/pict2994114.en.png)

以下のコードを実行した場合:

```4d
 ARRAY LONGINT(aLAges;0)
 ARRAY LONGINT(aLAgesChild;0)
 ARRAY LONGINT(aLChildNum;0)
 ALL RECORDS([Customer])
  //"age"属性の重複しない値を取得
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)
  //"Children"配列の"age"属性の重複しない値を取得
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children[].age";aLAgesChild)
  //length仮想プロパティを使用して子供の重複しない値を取得
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children.length";aLChildNum)
```

*aLAges* 配列には以下の要素が格納されます:

| **要素** | **値** |
| ------ | ----- |
| 1      | 33    |
| 2      | 35    |
| 3      | 36    |
| 4      | 40    |
| 5      | 42    |
| 6      | 44    |
| 7      | 52    |
| 8      | 54    |
| 9      | 60    |

*aLAgesChild* 配列には以下の要素が格納されます:

| **要素** | **値** |
| ------ | ----- |
| 1      | 2     |
| 2      | 3     |
| 3      | 4     |
| 4      | 5     |
| 5      | 6     |
| 6      | 10    |
| 7      | 12    |
| 8      | 14    |
| 9      | 15    |
| 10     | 16    |

*aLChildNum* 配列には以下の要素が格納されます:

| **要素** | **値** |
| ------ | ----- |
| 1      | 1     |
| 2      | 2     |
| 3      | 3     |

#### 参照 

  
[DISTINCT ATTRIBUTE PATHS](distinct-attribute-paths.md)  