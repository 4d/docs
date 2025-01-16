---
id: distinct-attribute-paths
title: DISTINCT ATTRIBUTE PATHS
slug: /commands/distinct-attribute-paths
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Syntax-->**DISTINCT ATTRIBUTE PATHS** ( *objectField* ; *pathArray* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectField | Field | &#8594;  | インデックスされたオブジェクトフィールド |
| pathArray | Text array | &#8592; | 重複しないパスのリストを取得させる配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Summary-->**DISTINCT ATTRIBUTE PATHS** コマンドは、*objectField* に受け渡したインデックスがついているオブジェクトフィールドが所属するテーブルのカレントセレクションについて、同オブジェクトフィールドから検出される、重複しないパスのリストを返します。<!-- END REF-->に受け渡すオブジェクトフィールドはインデックスされている必要があり、そうでない場合にはエラーが返されます。

*pathArray* は実行後、セレクション内から検出された重複しないパスの数と同じ要素数を持ちます。ネストされた属性へのパスは標準のドット表記で取得されます (例: "company.address.number")。オブジェクトの属性名は文字の大小を区別することに留意が必要です。このコマンドはカレントセレクションやカレントレコードを変更しません。

*pathArray* に返される重複しないパスのリストはアルファベット順にソートされています。

**注:** 

* *objectField* の値が未定義のレコードは無視されます。
* トランザクション中に作成された属性パスもこのコマンドによって検出されます。トランザクションがキャンセルされた場合でも、オブジェクトフィールドのインデックスには作成されたパスが残ることに留意が必要です。

#### 例題 

データベースにはインデックスされた \[Customer\]full\_Data というオブジェクトフィールドがあり、15件のレコードが持つとします:

![](../assets/en/commands/pict2994114.en.png)

次のコードを実行した場合:

```4d
 ARRAY TEXT(aTPaths;0)
 ALL RECORDS([Customer])
 DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)
```

*aTPaths* 配列の要素は次のとおりです:

| Element | Value               |
| ------- | ------------------- |
| 1       | "age"               |
| 2       | "Children"          |
| 3       | "Children\[\]"      |
| 4       | "Children\[\].age"  |
| 5       | "Children\[\].Name" |
| 6       | "Children.length"   |
| 7       | "client"            |
| 8       | "FirstName"         |
| 9       | "LastName"          |
| 10      | "Sex"               |
| 11      | "telephone"         |
| 12      | "telephone\[\]"     |
| 13      | "telephone.length"  |

**注:** "length"は全ての配列型属性に対して自動的に利用可能な*仮想的なプロパティ*です。このプロパテ氏は配列をのサイズ、つまり要素の数を提供し、これを使用してクエリすることができます。より詳細な情報については、*.length 仮想プロパティの使用* の章を参照して下さい。

#### 参照 

  
[DISTINCT ATTRIBUTE VALUES](distinct-attribute-values.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1395 |
| スレッドセーフである | &check; |


