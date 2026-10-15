---
id: create-index
title: CREATE INDEX
slug: /commands/create-index
displayed_sidebar: docs
---

<!--REF #_command_.CREATE INDEX.Syntax-->**CREATE INDEX** ( *aTable* : Table ; *fieldsArray* : Pointer array ; *indexType* : Integer ; *indexName* : Text {; *} )<!-- END REF-->
<!--REF #_command_.CREATE INDEX.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | インデックスを作成するためのテーブル |
| fieldsArray | Pointer array | &#8594; | インデックスされるフィールドへのポインタ |
| indexType | Integer | &#8594; | 作成されるインデックスのタイプ: -1 = キーワード、 0 = デフォルト、 1 = 標準 B-Tree、 3 = クラスタ B-Tree、 4 = コサイン、 5 = 内積、 6 = ユークリッド |
| indexName | Text | &#8594; | 作成するインデックスの名前 |
| * | 演算子 | &#8594; | 渡されると = 非同期インデックス |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R5|コサイン、ドット、ユークリッドのベクターインデックスに対応|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.CREATE INDEX.Summary-->**CREATE INDEX**コマンドは、1つ以上のフィールドに標準インデックス（複合インデックス）を作成するか、単一フィールドにキーワードインデックスを作成します。<!-- END REF-->

*fieldsArray*ポインタ配列で指定された1つ以上のフィールドを使用して、*theTable*テーブルのインデックスを作成します。簡単なインデックスを作成する場合、この配列は1行だけ格納します。複合インデックスを作成する場合、この配列は2つ以上の行を格納します (キーワードインデックスの場合は例外) 。複合インデックスでは、インデックスを作成する配列内でのフィールドの順番が重要となります。

*indexType*引数を使用して、作成されるインデックスのタイプを指定します。*Index Type*テーマにある以下の定数のいずれか1つを渡します。

| 定数                   | 型    | 値   | コメント                                                                                      |
| -------------------- | ---- | --- | ----------------------------------------------------------------------------------------- |
| Cluster BTree index  | 倍長整数 | 3   | クラスタを使用するB-Treeタイプのインデックス。このインデックスタイプは、インデックスが少数のキーを持つ場合、つまり同じ値がデータ内で頻繁に生じる場合に最も適しています。   |
| Default index type   | 倍長整数 | 0   | 4Dはフィールドに応じて最適なインデックスのタイプを設定します (キーワードインデックスを除く) 。                                        |
| Keywords index       | 倍長整数 | \-1 | フィールドの内容を単語に分割してインデックス化します。このタイプのインデックスはテキスト、文字、ピクチャー型で使用できます。警告: キーワードを複合タイプにすることはできません。 |
| Standard BTree index | 倍長整数 | 1   | 標準 B-Treeタイプのインデックス。この多目的用のインデックスタイプは4Dの以前のバージョンで使用されています。                                |
| Vector cosine index | 倍長整数 | 4 | [コサイン類似度](../../API/VectorClass.md#cosinesimilarity)を使用するAIクエリに最適化されたインデックス |
| Vector dot index | 倍長整数 | 5 | [内積類似度](../../API/VectorClass.md#dotsimilarity)を使用するAIクエリに最適化されたインデックス |
| Vector euclidean index | 倍長整数 | 6 | [ユークリッド距離](../../API/VectorClass.md#euclideandistance)を使用するAIクエリに最適化されたインデックス |

:::note

テキスト型フィールドに設定されたBツリーインデックスは、フィールドの先頭から最大1024文字を格納します。そのため、この場合、1024文字を超える文字列の検索は失敗します。

:::

作成するインデックスの名前を*indexName*引数に渡すことができます。インデックスの命名は、複数の異なるタイプのインデックスを同じフィールドに割り当て、それを個々に[DELETE INDEX](../commands/delete-index)コマンドで削除する場合に必要となります。*indexName*インデックスが既に存在する場合、コマンドは何もしません。

任意の*\** 引数が渡されると、非同期モードでインデックスを実行します。このモードでは、コマンドからの呼び出し後、インデックスが完了しているか、完了していないかに関わらず元のメソッドがその実行を継続します。

ロックされたレコードがある場合、**CREATE INDEX**コマンドはこれらのレコードをインデックスしません。コマンドはレコードのロックが解除されるのを待ちます。

コマンドを実行している間に問題が発生する場合 (非インデックスフィールド、1つ以上のフィールドでキーワードインデックスを作成する試み等) エラーが発生します。このエラーは、エラー処理メソッドで検知できます。

## 配布に関する注意 

このコマンドはデータベースストラクチャーを変更するため、読み出し専用のパッケージアプリ(*Program Files* フォルダー内にまたは.4dz ファイル内にインストールされている.4dc ファイル)のコンテキストにおいては使用することができません。

## 例題 1 

\[Customers\]テーブルの"Last Name" フィールドと"Telephone" フィールドに標準インデックスをそれぞれ作成。

```4d
 ARRAY POINTER(fieldPtrArr;1)
 fieldPtrArr{1}:=->[Customers]LastName
 CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CustLNameIdx")
 fieldPtrArr{1}:=->[Customers]Telephone
 CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CustTelIdx")
```

## 例題 2 

\[Customers\]テーブルの"Observations"フィールドにキーワードインデックスを作成。

```4d
 ARRAY POINTER(fieldPtrArr;1)
 fieldPtrArr{1}:=->[Customers]Observations
 CREATE INDEX([Customers];fieldPtrArr;Keywords Index;"CustObsIdx")
```

## 例題 3 

\[Customers\]テーブルの"City"フィールドと"Zipcode"フィールドに複合インデックスを作成。

```4d
 ARRAY POINTER(fieldPtrArr;2)
 fieldPtrArr{1}:=->[Customers]City
 fieldPtrArr{2}:=->[Customers]Zipcode
 CREATE INDEX([Customers];fieldPtrArr;Standard BTree Index;"CityZip")
```

## 例題 4

"Customers"テーブルの"embedding"フィールドにベクターインデックスを作成します:

```4d

ARRAY POINTER(fieldPtrArr; 1)
fieldPtrArr{1}:=->[Customers]embedding
CREATE INDEX([Customers]; fieldPtrArr; Vector cosine index; "cosine")


```

## 参照 

[DELETE INDEX](../commands/delete-index)  
[RESUME INDEXES](../commands/resume-indexes)  
[SET INDEX](../commands/set-index)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 966 |
| スレッドセーフである | yes |
