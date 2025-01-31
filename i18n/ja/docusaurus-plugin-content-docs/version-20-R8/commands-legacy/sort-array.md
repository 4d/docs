---
id: sort-array
title: SORT ARRAY
slug: /commands/sort-array
displayed_sidebar: docs
---

<!--REF #_command_.SORT ARRAY.Syntax-->**SORT ARRAY** ( *array* {; *array2* ; ... ; *arrayN*}{; > または <} )<!-- END REF-->
<!--REF #_command_.SORT ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | ソートする配列 |
| > または < | 演算子 | &#8594;  | ">" : 昇順ソート, または "<" : 降順ソート, または 省略した場合降順ソート |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SORT ARRAY.Summary-->**SORT ARRAY**コマンドは、1つまたは複数の配列を昇順や降順にソートします。<!-- END REF-->

* Pointer 配列や Picture 配列のソートは行えません。二次元配列の要素(例えば *a2DArray{$vlThisElem}*)をソートすることはできますが、二次元配列そのもの(*a2DArray*)をソートすることはできません。
* Object 型の配列をソートすることはできます。Null 要素はグループ化され、配列の要素は内部的な順番によってソートされます。

最後の引数は、ソートの昇順または降順を指定します。引数に大なり記号（>）を指定すると昇順にソートします。引数に小なり記号(<)を指定すると降順にソートします。省略した場合は昇順にソートします。

複数の配列を指定した場合、すべての配列が最初の配列の順番でソートされます。各配列ごとに個々にソートするわけではありません。その代り、同期した配列をソートしたい場合には [MULTI SORT ARRAY](multi-sort-array.md) コマンドを使用することができます。

#### 例題 1 

以下の例は2つの配列を作成し、companyでソートします:

```4d
 ALL RECORDS([People])
 SELECTION TO ARRAY([People]Name;asNames;[People]Company;asCompanies)
 SORT ARRAY(asCompanies;asNames;>)
```

しかし、SORT ARRAY コマンドはマルチレベルソートを行わないため、会社ごとの従業員名の順序はばらばらのままです。各会社毎に従業員名をソートするには、次のようにします:

```4d
 ALL RECORDS([People])
 ORDER BY([People];[People]Company;>;[People]Name;>)
 SELECTION TO ARRAY([People]Name;asNames;[People]Company;asCompanies)
```

#### 例題 2 

次の例では、*\[People\]*テーブルから名前をフローティングウィンドウに表示します。ウィンドウ上のボタンをクリックすると、名前のリストをAからZへ、またはZからAへソートします。同じ名前の人が複数存在するため、インデックス付きで重複不可である*\[People\]ID number*フィールドを使用できます。名前のリストをクリックすると、クリックした名前を持つレコードを取得します。同期がとられ、表示されない*alIDs*配列を利用することにより、必ずクリックした名前に対応するレコードにアクセスできます:

```4d
  // asNames配列オブジェクトメソッド
 Case of
    :(Form event code=On Load)
       ALL RECORDS([People])
       SELECTION TO ARRAY([People]Name;asNames;[People]ID number;alIDs)
       SORT ARRAY(asNames;alIDs;>)
    :(Form event code=On Unload)
       CLEAR VARIABLE(asNames)
       CLEAR VARIABLE(alIDs)
    :(Form event code=On Clicked)
       If(asNames#0)
  // 正しいレコードを取得するためにalIDsを使用する
          QUERY([People];[People]ID Number=alIDs{asNames})
  // レコードの処理を行う
       End if
 End case
 
  // bA2Z ボタンオブジェクトメソッド
  // 配列を昇順でソートし、かつ同期を保つ
 SORT ARRAY(asNames;alIDs;>)
 
  // bZ2A ボタンオブジェクトメソッド
  // 配列を降順でソートし、かつ同期を保つ
 SORT ARRAY(asNames;alIDs;<)
```

#### 参照 

[Find in sorted array](find-in-sorted-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 229 |
| スレッドセーフである | &check; |


