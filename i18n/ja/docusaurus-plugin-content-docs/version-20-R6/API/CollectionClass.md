---
id: CollectionClass
title: Collection
---

Collectionクラスは [コレクション](Concepts/dt_collection.md) 型の変数を扱います。

コレクションは次のように初期化します:

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<br/><!-- INCLUDE #_command_.New collection.Summary -->                      |
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<br/><!-- INCLUDE #_command_.New shared collection.Summary --> |

### 例題

```4d
 var $colVar : Collection // コレクション型の 4D変数の宣言
 $colVar:=New collection // コレクションの初期化と 4D変数への代入
```

### 概要

|                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.at().Syntax -->](#at)<br/><!-- INCLUDE #collection.at().Summary -->                                  |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<br/><!-- INCLUDE #collection.average().Summary -->                   |
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<br/><!-- INCLUDE #collection.clear().Summary -->                         |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<br/><!-- INCLUDE #collection.combine().Summary -->                   |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<br/><!-- INCLUDE #collection.concat().Summary -->                      |
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<br/><!-- INCLUDE #collection.copy().Summary -->                            |
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<br/><!-- INCLUDE #collection.count().Summary -->                         |
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<br/><!-- INCLUDE #collection.countValues().Summary -->       |
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<br/><!-- INCLUDE #collection.distinct().Summary -->                |
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<br/><!-- INCLUDE #collection.equal().Summary -->                         |
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<br/><!-- INCLUDE #collection.every().Summary -->                         |
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<br/><!-- INCLUDE #collection.extract().Summary -->                   |
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<br/><!-- INCLUDE #collection.fill().Summary -->                            |
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<br/><!-- INCLUDE #collection.filter().Summary -->                      |
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<br/><!-- INCLUDE #collection.find().Summary -->                            |
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<br/><!-- INCLUDE #collection.findIndex().Summary -->                  |
| [<!-- INCLUDE #collection.first().Syntax -->](#first)<br/><!-- INCLUDE #collection.first().Summary -->                         |
| [<!-- INCLUDE #collection.flat().Syntax -->](#flat)<br/><!-- INCLUDE #collection.flat().Summary -->                            |
| [<!-- INCLUDE #collection.flatMap().Syntax -->](#flatMap)<br/><!-- INCLUDE #collection.flatMap().Summary -->                   |
| [<!-- INCLUDE #collection.includes().Syntax -->](#includes)<br/><!-- INCLUDE #collection.includes().Summary -->                |
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #collection.indexOf().Summary -->                   |
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<br/><!-- INCLUDE #collection.indices().Summary -->                   |
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<br/><!-- INCLUDE #collection.insert().Summary -->                      |
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<br/><!-- INCLUDE #collection.join().Summary -->                            |
| [<!-- INCLUDE #collection.last().Syntax -->](#last)<br/><!-- INCLUDE #collection.last().Summary -->                            |
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<br/><!-- INCLUDE #collection.lastIndexOf().Summary -->       |
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<br/><!-- INCLUDE #collection.length.Summary -->                          |
| [<!-- INCLUDE #collection.map().Syntax -->](#map)<br/><!-- INCLUDE #collection.map().Summary -->                               |
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<br/><!-- INCLUDE #collection.max().Summary -->                               |
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<br/><!-- INCLUDE #collection.min().Summary -->                               |
| [<!-- INCLUDE #collection.multiSort().Syntax -->](#multisort)<br/><!-- INCLUDE #collection.multiSort().Summary -->             |
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<br/><!-- INCLUDE #collection.orderBy().Summary -->                   |
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<br/><!-- INCLUDE #collection.orderByMethod().Summary --> |
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<br/><!-- INCLUDE #collection.pop().Summary -->                               |
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<br/><!-- INCLUDE #collection.push().Summary -->                            |
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<br/><!-- INCLUDE #collection.query().Summary -->                         |
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<br/><!-- INCLUDE #collection.reduce().Summary -->                      |
| [<!-- INCLUDE #collection.reduceRight().Syntax -->](#reduceRight)<br/><!-- INCLUDE #collection.reduceRight().Summary -->       |
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<br/><!-- INCLUDE #collection.remove().Summary -->                      |
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<br/><!-- INCLUDE #collection.resize().Summary -->                      |
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<br/><!-- INCLUDE #collection.reverse().Summary -->                   |
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<br/><!-- INCLUDE #collection.shift().Summary -->                         |
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<br/><!-- INCLUDE #collection.slice().Summary -->                         |
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<br/><!-- INCLUDE #collection.some().Summary -->                            |
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<br/><!-- INCLUDE #collection.sort().Summary -->                            |
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<br/><!-- INCLUDE #collection.sum().Summary -->                               |
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<br/><!-- INCLUDE #collection.unshift().Summary -->                   |

## `New collection`

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->

| 引数    | 型                                                                       |                             | 説明        |
| ----- | ----------------------------------------------------------------------- | :-------------------------: | --------- |
| value | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer |              ->             | コレクションの値  |
| 戻り値   | Collection                                                              | <- | 新規のコレクション |

<!-- END REF -->

#### 説明

`New collection` コマンドは、<!-- REF #_command_.New collection.Summary -->空の、あるいは値の入った新規コレクションを作成し、その参照を返します<!-- END REF -->。

引数を渡さなかった場合、`New collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。

> `var : Collection` や `C_COLLECTION` ステートメントはコレクション型の変数を宣言しますが、コレクション自体は作成しないという点に注意してください。

任意で、一つ以上の *value* 引数を渡すことで、あらかじめ値の入った新しいコレクションを作成することができます。

または、あとから代入によって要素を一つずつ追加・編集していくことができます。 例:

```4d
 myCol[10]:="My new element"
```

コレクションの最終要素を超える要素番号 (インデックス) を指定した場合、コレクションは自動的にリサイズされ、合い間の要素にはすべて **null** 値が割り当てられらます。

サポートされている型 (数値、テキスト、日付、ピクチャー、ポインター、オブジェクト、コレクション等) であれば、個数に制限なく値を渡すことができます。 配列とは異なり、コレクションでは異なる型のデータを混ぜることができます。

ただし以下の変換問題については注意する必要があります:

- 渡されたポインターは、そのまま保存されます。ポインターは `JSON Stringify` コマンドを使用することで評価されます。
- 日付は、"dates inside objects" データベース設定に応じて、"yyyy-mm-dd" という日付、または "YYYY-MM-DDTHH:mm:ss.SSSZ" というフォーマットの文字列で保存されます。 コレクションに保存する前に 4D日付をテキストに変換した場合、プログラムはデフォルトでローカルのタイムゾーンを使用します。 このふるまいは `SET DATABASE PARAMETER` コマンドで `Dates inside objects` セレクターを使用することで変更可能です。
- 時間を渡した場合、それはミリ秒の数 (実数) として保存されます。

#### 例題 1

新しい空のコレクションを作成し、それを 4Dコレクション変数に代入します:

```4d
 var $myCol : Collection
 $myCol:=New collection
  // $myCol=[]
```

#### 例題 2

あらかじめ値の入ったコレクションを作成します:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  // $filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### 例題 3

新しいコレクションを作成し、そこに新しい要素を追加します:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  // $coll=["a","b","c"]
 $coll[9]:="z" // 値 "z" を10番目の要素として追加します
 $vcolSize:=$coll.length // 10
  // $coll=["a","b","c",null,null,null,null,null,null,"z"]
```

## `New shared collection`

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->

| 引数    | 型                                                     |                             | 説明          |
| ----- | ----------------------------------------------------- | :-------------------------: | ----------- |
| value | Number, Text, Date, Time, Boolean, Object, Collection |              ->             | 共有コレクションの値  |
| 戻り値   | Collection                                            | <- | 新規の共有コレクション |

<!-- END REF -->

#### 説明

`New shared collection` コマンドは、<!-- REF #_command_.New shared collection.Summary -->空の、あるいは値が入った新規コレクションを作成し、その参照を返します<!-- END REF -->。

このコレクションに要素を追加する場合には [Use...End use](Concepts/shared.md#useend-use) 構造でくくる必要があり、そうしない場合にはエラーが返されます。ただし、[`push()`](#push) や [`map()`](#map) などの関数を使用して要素を追加する場合は、自動で内部的に *Use...End use* が使用されるため、必要ありません。 ただし、属性の読み取りは [`Use...End use`](Concepts/shared.md#useend-use) 構造の外側でも可能です。

:::info

共有コレクションについての詳細は、[共有オブジェクトと共有コレクション](Concepts/shared.md) のページを参照してください。

:::

引数を渡さない場合、`New shared collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。

> `var : Collection` や `C_COLLECTION` ステートメントはコレクション型の変数を宣言しますが、コレクション自体は作成しないという点に注意してください。

任意で、一つ以上の *value* 引数を渡すことで、あらかじめ値の入った新しい共有コレクションを作成することができます。 または、あとからオブジェクト記法による代入で要素を一つずつ追加・編集していくことができます (例題参照)。

共有コレクションの最終要素を超える要素番号 (インデックス) を指定した場合、共有コレクションは自動的にリサイズされ、合い間の要素にはすべて **null** 値が割り当てられらます。

以下のサポートされる型であれば、いくつでも値を渡すことができます:

- 数値 (実数、倍長整数...)。 数値は常に実数として保存されます。
- テキスト
- ブール
- 日付
- 時間 (ミリ秒の数 (実数) として保存されます)。
- null
- 共有オブジェクト
- 共有コレクション

:::note

標準のコレクション (非共有コレクション) とは異なり、共有コレクションはピクチャーやポインター、共有でないオブジェクトおよびコレクションはサポートしていません。

:::

#### 例題

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

<!-- REF collection.at().Desc -->

## .at()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.at().Syntax -->**.at**( *index* : Integer ) : any <!-- END REF -->

<!-- REF #collection.at().Params -->

| 引数    | 型       |                             | 説明            |
| ----- | ------- | :-------------------------: | ------------- |
| index | Integer |              ->             | 取得する要素のインデックス |
| 戻り値   | any     | <- | そのインデックスにある要素 |

<!-- END REF -->

#### 説明

`.at()` 関数は、<!-- REF #collection.at().Summary -->*index* の位置にある要素を返します (*index* は正負の整数)<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

負の整数が渡された場合、コレクションの最後の要素から逆向きに数えます。

*index* がコレクションの範囲を超える場合、この関数は Undefined を返します。

#### 例題

```4d
var $col : Collection 
$col:=New collection(10; 20; 30; 40; 50)
$element:=$col.at(0) // 10
$element:=$col.at(1) // 20
$element:=$col.at(-1) // 50
$element:=$col.at(-2) // 40
$element:=$col.at(10) // undefined
```

<!-- END REF -->

<!-- REF collection.average().Desc -->

## .average()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.average().Syntax -->**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.average().Params -->

| 引数           | 型               |                             | 説明                    |
| ------------ | --------------- | :-------------------------: | --------------------- |
| propertyPath | Text            |              ->             | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | Real, Undefined | <- | コレクションの値の算術平均         |

<!-- END REF -->

#### 説明

`.average()` 関数は、<!-- REF #collection.average().Summary -->コレクションインスタンス内で定義されている値の算術平均を返します<!-- END REF -->。

計算の対象となるのは数値のみです (他の型の要素は無視されます)。

コレクションがオブジェクトを格納している場合には、計算するオブジェクトプロパティのパスを *propertyPath* に渡します。

`.average()` は以下の場合には `undefined` を返します:

- コレクションが空の場合
- コレクションに数値が含まれていない場合
- *propertyPath* 引数で指定したパスがコレクション内で見つからない場合

#### 例題 1

```4d
 var $col : Collection
 $col:=New collection(10;20;"Monday";True;6)
 $vAvg:=$col.average() //12
```

#### 例題 2

```4d
 var $col : Collection
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $vAvg:=$col.average("salary") //23500
```

<!-- END REF -->

<!-- REF collection.clear().Desc -->

## .clear()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.clear().Syntax -->**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->

| 引数  | 型          |                             | 説明                |
| --- | ---------- | :-------------------------: | ----------------- |
| 戻り値 | Collection | <- | 全要素が削除された元のコレクション |

<!-- END REF -->

#### 説明

`.clear()` 関数は、<!-- REF #collection.clear().Summary -->コレクションインスタンス内の全要素を削除し、空のコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

#### 例題

```4d
var $col : Collection
$col:=New collection(1;2;5)
$col.clear()
$vSize:=$col.length //$vSize=0
```

<!-- END REF -->

<!-- REF collection.combine().Desc -->

## .combine()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.combine().Syntax -->**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.combine().Params -->

| 引数    | 型          |                             | 説明                                               |
| ----- | ---------- | :-------------------------: | ------------------------------------------------ |
| col2  | Collection |              ->             | 追加するコレクション                                       |
| index | Integer    |              ->             | 追加要素を挿入する位置 (デフォルトは length+1) |
| 戻り値   | Collection | <- | 追加要素を格納した元のコレクション                                |

<!-- END REF -->

#### 説明

`.combine()` 関数は、<!-- REF #collection.combine().Summary -->コレクションインスタンスの最後、あるいは *index* で指定した位置に *col2* の要素を挿入し、変更された元のコレクションを返します<!-- END REF -->。 `.insert()` 関数とは異なり、`.combine()` は *col2* の各要素を元のコレクション追加します (*col2* 自体が単一のコレクション要素としては挿入されるわけではありません)。

> このコマンドは、元のコレクションを変更します。

デフォルトでは、*col2* の要素は元のコレクションの最後に追加されます。 *index* に引数を渡すことで、*col2* の要素を挿入する位置を指定することができます。

> **警告**: コレクション要素は 0 起点である点に注意してください。

- 指定した *index* がコレクションの length より大きい場合、実際の開始インデックスはコレクションの length に設定されます。
- *index* < 0 の場合、*index:=index+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
- 計算結果も負の値である場合、*index* は 0 に設定されます。

#### 例題

```4d
var $c; $fruits : Collection
$c:=New collection(1;2;3;4;5;6)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$c.combine($fruits;3) //[1,2,3,"Orange","Banana","Apple","Grape",4,5,6]
```

<!-- END REF -->

<!-- REF collection.concat().Desc -->

## .concat()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.concat().Syntax -->**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->

| 引数    | 型                                                              |                             | 説明                                                    |
| ----- | -------------------------------------------------------------- | :-------------------------: | ----------------------------------------------------- |
| value | Number, Text, Object, Collection, Date, Time, Boolean, Picture |              ->             | 連結する値。 *value* がコレクションの場合、コレクションの全要素が元のコレクションに追加されます。 |
| 戻り値   | Collection                                                     | <- | 元のコレクションに値が追加された新規コレクション                              |

<!-- END REF -->

#### 説明

`.concat()` 関数は、<!-- REF #collection.concat().Summary -->*value* に指定した要素を元のコレクションの最後に追加した、新しいコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

*value* がコレクションの場合、その全要素が新しい要素として元のコレクションの最後に追加されます。 *value* がコレクションでない場合、それ自体が新しい要素として追加されます。

#### 例題

```4d
var $c : Collection
$c:=New collection(1;2;3;4;5)
$fruits:=New collection("Orange";"Banana";"Apple";"Grape")
$fruits.push(New object("Intruder";"Tomato"))
$c2:=$c.concat($fruits) //[1,2,3,4,5,"Orange","Banana","Apple","Grape",{"Intruder":"Tomato"}]
$c2:=$c.concat(6;7;8) //[1,2,3,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.copy().Desc -->

## .copy()

<details><summary>履歴</summary>

| リリース   | 内容                                           |
| ------ | -------------------------------------------- |
| 18 R3  | *ck shared* オプションの追加。 *groupWith* パラメーターを追加。 |
| v16 R6 | 追加                                           |

</details>

<!-- REF #collection.copy().Syntax -->**.copy**() : Collection<br/>**.copy**( *option* : Integer ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br/>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->

<!-- REF #collection.copy().Params -->

| 引数           | 型          |                             | 説明                                                                                                  |
| ------------ | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------- |
| option       | Integer    |              ->             | `ck resolve pointers`: コピー前にポインターを解決する<br/>`ck shared`: 共有コレクションを返す |
| groupWithCol | Collection |              ->             | 結果のコレクションとグループする共有コレクション                                                                            |
| groupWithObj | Object     |              ->             | 結果のコレクションとグループする共有オブジェクト                                                                            |
| 戻り値          | Collection | <- | 元のコレクションのディープ・コピー                                                                                   |

<!-- END REF -->

#### 説明

`.copy()` 関数は、<!-- REF #collection.copy().Summary --> コレクションインスタンスのディープ・コピーを返します<!-- END REF -->。***ディープ・コピー*** とは、元のコレクション内のオブジェクトやコレクションは複製されることを意味し、返されたコレクションと元のコレクションは参照を共有しないということを意味します。

> このコマンドは、元のコレクションを変更しません。

任意の *option* パラメーターには、以下のどちらか (あるいは両方) の定数を渡すことができます:

| option                | 説明                                                                                                                                                                                                                  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | オリジナルのコレクションがポインター型の値を格納している場合、デフォルトではコピー先のオブジェクトもポインターを格納します。 しかしながら、`ck resolve pointers` 定数を渡すことで、コピー時にポインターを解決することができます。 この場合、コレクション内の各ポインターはコピー時に解決され、解決済みの値が使用されます。                                           |
| `ck shared`           | 共有コレクションに対して適用された場合でも、`copy()` はデフォルトで通常の (非共有の) コレクションを返します。 共有コレクションを作成するには、`ck shared` 定数を渡します。 この場合には、*groupWith* パラメーターに引数を渡して他の共有オブジェクトまたは共有コレクションに関連づけることもできます (以下参照)。 |

*groupWithCol* または *groupWithObj* 引数を渡すと、結果のコレクションを関連づけるコレクションまたはオブジェクトを指定できます。

:::note

データストア、データクラス、およびエンティティオブジェクトはコピーできません。 これらを対象に `.copy()` を呼び出すと、`Null` 値が返されます。

:::

#### 例題 1

通常の (非共有の) コレクション *$lastnames \* を、共有オブジェクト *$sharedObject* 内にコピーします。 このためには、まず共有コレクション (*$sharedLastnames\*) を作成する必要があります。

```4d
var $sharedObject : Object
var $lastnames;$sharedLastnames : Collection
var $text : Text

$sharedObject:=New shared object

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) // $lastnames は通常のコレクションです

$sharedLastnames:=$lastnames.copy(ck shared) // $sharedLastnames は共有コレクションです

// $sharedLastnames は $sharedObject の中に入れられます
Use($sharedObject)
    $sharedObject.lastnames:=$sharedLastnames
End use
```

#### 例題 2

どちらも共有コレクションである *$sharedColl1* と\*$sharedColl2\* を結合します。 これらは異なる共有グループに所属しているため、直接結合した場合にはエラーが生成されます。 そこで、 *$sharedColl1* のコピーを作成し、*$sharedColl2* をそのコピーの共有グループ先に指定します。

```4d
var $sharedColl1;$sharedColl2;$copyColl : Collection

$sharedColl1:=New shared collection(New shared object("lastname";"Smith"))
$sharedColl2:=New shared collection(New shared object("lastname";"Brown"))

// $copyColl を $sharedColl2  と同じ共有グループに所属させます
 $copyColl:=$sharedColl1.copy(ck shared;$sharedColl2)
 Use($sharedColl2)
    $sharedColl2.combine($copyColl)
 End use
```

#### 例題 3

通常のコレクション (*$lastnames*) があり、それをアプリケーションの **Storage** に入れます。 これには、先に共有コレクション (*$sharedLastnames*) を作成しておく必要があります。

```4d
var $lastnames;$sharedLastnames : Collection
var $text : Text

$text:=Document to text(Get 4D folder(Current resources folder)+"lastnames.txt")
$lastnames:=JSON Parse($text) // $lastnames は通常の (非共有) コレクションです

$sharedLastnames:=$lastnames.copy(ck shared) // 共有コピー

Use(Storage)
    Storage.lastnames:=$sharedLastnames
End use
```

#### 例題 4

`ck resolve pointers` オプションを使用した場合のふるまいです:

```4d
 var $col : Collection
 var $p : Pointer
 $p:=->$what

 $col:=New collection
 $col.push(New object("alpha";"Hello";"num";1))
 $col.push(New object("beta";"You";"what";$p))

 $col2:=$col.copy()
 $col2[1].beta:="World!"
 ALERT($col[0].alpha+" "+$col2[1].beta) // "Hello world!" を表示します

 $what:="You!"
 $col3:=$col2.copy(ck resolve pointers)
 ALERT($col3[0].alpha+" "+$col3[1].what) // "Hello world!" を表示します
```

<!-- END REF -->

<!-- REF collection.count().Desc -->

## .count()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.count().Syntax -->**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.count().Params -->

| 引数           | 型    |                             | 説明                    |
| ------------ | ---- | :-------------------------: | --------------------- |
| propertyPath | Text |              ->             | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | Real | <- | コレクション内の要素の数          |

<!-- END REF -->

#### 説明

`.count()` 関数は、<!-- REF #collection.count().Summary -->コレクション内の、null ではない要素の個数を返します<!-- END REF -->。

コレクションがオブジェクトを含んでいる場合、*propertyPath* 引数を渡すことができます。 この場合、*propertyPath* で指定したパスを含む要素のみがカウントされます。

#### 例題

```4d
 var $col : Collection
 var $count1;$count2 : Real
 $col:=New collection(20;30;Null;40)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500))
 $col.push(New object("lastName";"Henry";"salary";12000))
 $count1:=$col.count() //$count1=7
 $count2:=$col.count("name") //$count2=3

```

<!-- END REF -->

<!-- REF collection.countValues().Desc -->

## .countValues()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.countValues().Syntax -->**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.countValues().Params -->

| 引数           | 型                                               |                             | 説明                    |
| ------------ | ----------------------------------------------- | :-------------------------: | --------------------- |
| value        | Text, Number, Boolean, Date, Object, Collection |              ->             | 数える値                  |
| propertyPath | Text                                            |              ->             | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | Real                                            | <- | 値の出現回数                |

<!-- END REF -->

#### 説明

`.countValues()` 関数は、<!-- REF #collection.countValues().Summary -->
*value* 引数に指定した値がコレクション内において見つかった回数を返します<!-- END REF -->。

*value* には、以下のいずれかを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- オブジェクトあるいはコレクションの参照

要素が検出されるためには、*value* 引数の型が要素の型と合致している必要があります。このファンクションは等号演算子を使用します。

任意の *propertyPath* 引数を渡すと、オブジェクトのコレクションにおける値の個数を数えることができます。 *propertyPath* には値を検索するプロパティパスを渡します。

> このコマンドは、元のコレクションを変更しません。

#### 例題 1

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection(1;2;5;5;5;3;6;4)
 $vCount:=$col.countValues(5) // $vCount=3
```

#### 例題 2

```4d
 var $col : Collection
 var $vCount : Integer
 $col:=New collection
 $col.push(New object("name";"Smith";"age";5))
 $col.push(New object("name";"Wesson";"age";2))
 $col.push(New object("name";"Jones";"age";3))
 $col.push(New object("name";"Henry";"age";4))
 $col.push(New object("name";"Gross";"age";5))
 $vCount:=$col.countValues(5;"age") //$vCount=2
```

#### 例題 3

```4d
 var $numbers; $letters : Collection
 var $vCount : Integer

 $letters:=New collection("a";"b";"c")
 $numbers:=New collection(1;2;$letters;3;4;5)

 $vCount:=$numbers.countValues($letters) //$vCount=1
```

<!-- END REF -->

<!-- REF collection.distinct().Desc -->

## .distinct()

<details><summary>履歴</summary>

| リリース   | 内容                      |
| ------ | ----------------------- |
| 20     | `ck count values` をサポート |
| v16 R6 | 追加                      |

</details>

<!-- REF #collection.distinct().Syntax -->**.distinct**( {*options* : Integer} ) : Collection<br/>**.distinct**( *propertyPath* : Text {; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.distinct().Params -->

| 引数           | 型          |                             | 説明                                  |
| ------------ | ---------- | :-------------------------: | ----------------------------------- |
| propertyPath | Text       |              ->             | 重複しない値を取得する属性のパス                    |
| options      | Integer    |              ->             | `ck diacritical`, `ck count values` |
| 戻り値          | Collection | <- | 重複しない値のみを格納した新規コレクション               |

<!-- END REF -->

#### 説明

`.distinct()` 関数は、<!-- REF #collection.distinct().Summary -->
元のコレクションから重複しない (異なる) 値のみを格納した新しいコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

返されたコレクションは自動的に並べ替えられています。 **Null** 値は返されません。

コレクションがオブジェクトを格納している場合には、重複しない値を取得するオブジェクトプロパティのパスを *propertyPath* に渡します。

*options* 引数として、以下の定数を 1つ、または組み合わせで渡すことができます:

| 定数                | 値  | 説明                                                                                                                                                       |
| ----------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck diacritical`  | 8  | 文字の大小とアクセントを区別して評価をおこないます。 省略された場合のデフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。                                                                                  |
| `ck count values` | 32 | 特定の値を持つ要素の数 (重複がなければ 1、重複があればその数) を返します。 このオプションを渡すと、`.distinct()` は、`{"value":*value*;"count":*count*}` のプロパティを含むオブジェクトのコレクションを返します。 |

#### 例題

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
 $c3:=$c.distinct("size";ck count values) //$c3=[{value:1,count:2},{value:3,count:1}]

```

<!-- END REF -->

<!-- REF collection.equal().Desc -->

## .equal()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.equal().Syntax -->**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->

| 引数          | 型          |                             | 説明                                                                                          |
| ----------- | ---------- | :-------------------------: | ------------------------------------------------------------------------------------------- |
| collection2 | Collection |              ->             | 比較するコレクション                                                                                  |
| option      | Integer    |              ->             | `ck diacritical`: アクセント等の発音区別符号を無視しない評価 (たとえば "A" # "a") |
| 戻り値         | Boolean    | <- | コレクションが同一の場合には true、それ以外は false                                                             |

<!-- END REF -->

#### 説明

`.equal()` 関数は、<!-- REF #collection.equal().Summary -->コレクションの内容と *collection2* を再帰的に比較し (ディープ比較)、同一であれば **true** を返します<!-- END REF -->。

:::note 注記

- `.equal()` 関数は、コレクション内の文字列、ブール値、数値、および null型要素の等価性をチェックするだけです。 ネイティブオブジェクトの等価性はチェックされません。
- **null**値の要素は undefined要素と同じとはみなされません。

:::

デフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。 評価の際に文字の大小を区別したり、アクセント記号を区別したい場合には、option に `ck diacritical` 定数を渡します。

:::tip

コレクションが大きく深い場合には、コレクションの再帰的な比較は時間がかかる場合があります。 2つのコレクション参照を比較するだけの場合は、[コレクション参照の `=`比較演算子](../Concepts/dt_collection.md#コレクション演算子) の使用を検討してください。

:::

#### 例題

```4d
 var $c; $c2 : Collection
 var $b : Boolean

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3;4)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("1";"a";"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"orange");2;3)
 $b:=$c.equal($c2) // false

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2) // true

 $c:=New collection(New object("a";1;"b";"orange");2;3)
 $c2:=New collection(New object("a";1;"b";"ORange");2;3)
 $b:=$c.equal($c2;ck diacritical) //false
```

<!-- END REF -->

<!-- REF collection.every().Desc -->

## .every()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.every().Syntax -->**.every**( { *startFrom* : Integer ; } *formula* : 4D.Function { ;*...param* : any } ) : Boolean<br/>**.every**( { *startFrom* : Integer ; } *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->

| 引数         | 型                           |                             | 説明                               |
| ---------- | --------------------------- | :-------------------------: | -------------------------------- |
| startFrom  | Integer                     |              ->             | テストを開始するインデックス                   |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                     |
| methodName | Text                        |              ->             | メソッド名                            |
| param      | any                         |              ->             | *formula* または *methodName* に渡す引数 |
| 戻り値        | Boolean                     | <- | すべての要素がテストをパスすれば true            |

<!-- END REF -->

#### 説明

`.every()` 関数は、 <!-- REF #collection.every().Summary -->コレクション内の全要素が、*formula* オブジェクトまたは *methodName* に指定したメソッドで実装されたテストにパスした場合には **true** を返します<!-- END REF -->。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、*param* (任意) に指定した引数が渡されます。 引数の有無にかかわらず、コールバックは任意のテストを実行でき、テストを満たす要素に対しては **true** を返さなくてはなりません。 コールバックは最初のパラメーター ($1) に `Object` を受け取ります。

コールバックは以下の引数を受け取ります:

- *$1.value*: 評価する要素の値
- *$2*: param
- *$N...*: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (メソッドを使用する場合は必須) *$1.result* (ブール): 要素の値の評価が成功した場合には **true** 、それ以外は **false**
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

`.every()` 関数は、**false** として評価されたコレクション要素を発見すると、コールバックの呼び出しをやめて **false** を返します。

デフォルトでは、`.every()` はコレクション全体をテストします。 任意で、*startFrom* にテストを開始する要素のインデックスを渡すこともできます。

- *startFrom* がコレクションの length 以上だった場合、**false** が返されます。これはコレクションがテストされていないことを意味します。
- *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます(*startFrom:=startFrom+length*)。
- *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

#### 例題 1

```4d
var $c : Collection  
var $b : Boolean
var $f : 4D.Function

$f:=Formula($1.value>0)
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f) // true を返します
$c.push(-1)
$b:=$c.every($f) // false を返します
```

#### 例題 2

コレクション要素がすべて実数型であるかをテストします:

```4d
var $c : Collection
var $b : Boolean
var $f : 4D.Function

$f:=Formula(Value type($1.value)=$2
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every($f;Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every($f;Is real) //$b=false
```

<!-- END REF -->

<!-- REF collection.extract().Desc -->

## .extract()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.extract().Syntax -->**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathOrTargetPathN* : Text } ) : Collection<!-- END REF -->

<!-- REF #collection.extract().Params -->

| 引数           | 型          |                             | 説明                                                                                                                                 |
| ------------ | ---------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| propertyPath | Text       |              ->             | 新しいコレクションに抽出する値のオブジェクトプロパティパス                                                                                                      |
| targetpath   | Text       |              ->             | 抽出先のプロパティパスあるいはプロパティ名                                                                                                              |
| option       | Integer    |              ->             | `ck keep null`: 返されるコレクションに null プロパティを含めます (デフォルトでは無視されます)。 *targetPath* を渡した場合には、この引数は無視されます。 |
| 戻り値          | Collection | <- | 抽出した値を格納した新しいコレクション                                                                                                                |

<!-- END REF -->

#### 説明

`.extract()` 関数は、<!-- REF #collection.extract().Summary -->元のオブジェクトのコレクションから、*propertyPath* 引数が指定するプロパティ値を抽出し、新しいコレクションに格納して返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

戻り値のコレクションの中身は、*targetPath* 引数によります:

- *targetPath* が省略された場合、`.extract()` は元のコレクションの *propertyPath* と同じパスを使って、新しいコレクションに値を格納します。

  デフォルトでは、*propertyPath* のパスの要素が null あるいは undefined であった場合には、その要素は無視され、返されるコレクションに格納されません。 *option* パラメーターに `ck keep null` 定数を渡すと、これらの要素は返されるコレクションに null 要素として格納されます。

- 一つ以上の *propertyPath* 引数に相当する、一つ以上の *targetPath* 引数が渡された場合、`.extract()` は元のコレクションの *propertyPath* から値を抽出し、合致する *targetPath* に値を保存したオブジェクトを新しいコレクションの各要素として格納します。 Null値はそのまま保持されます (このシンタックスでは *option* に引数を渡しても無視されます)。

#### 例題 1

```4d
var $c : Collection
$c:=New collection
$c.push(New object("name";"Cleveland"))
$c.push(New object("zip";5321))
$c.push(New object("name";"Blountsville"))
$c.push(42)
$c2:=$c.extract("name") // $c2=[Cleveland,Blountsville]
$c2:=$c.extract("name";ck keep null) //$c2=[Cleveland,null,Blountsville,null]
```

#### 例題 2

```4d
var $c : Collection
$c:=New collection
$c.push(New object("zc";35060))
$c.push(New object("name";Null;"zc";35049))
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$c2:=$c.extract("name";"City") //$c2=[{City:null},{City:Cleveland},{City:Blountsville},{City:Adger},{City:Clanton},{City:Clanton}]
$c2:=$c.extract("name";"City";"zc";"Zip") //$c2=[{Zip:35060},{City:null,Zip:35049},{City:Cleveland,Zip:35049},{City:Blountsville,Zip:35031},{City:Adger,Zip:35006},{City:Clanton,Zip:35046},{City:Clanton,Zip:35045}]
```

<!-- END REF -->

<!-- REF collection.fill().Desc -->

## .fill()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.fill().Syntax -->**.fill**( *value* : any ) : Collection<br/>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.fill().Params -->

| 引数        | 型                                               |                             | 説明                                  |
| --------- | ----------------------------------------------- | :-------------------------: | ----------------------------------- |
| value     | number, Text, Collection, Object, Date, Boolean |              ->             | 代入する値                               |
| startFrom | Integer                                         |              ->             | 開始インデックス (含まれる)  |
| end       | Integer                                         |              ->             | 終了インデックス (含まれない) |
| 戻り値       | collection                                      | <- | 値が代入された元のコレクション                     |

<!-- END REF -->

#### 説明

`.fill()` 関数は、<!-- REF #collection.fill().Summary -->コレクションを *value* 引数の値で満たし、同コレクションを返します。オプションとして、*startFrom* および *end* インデックスを渡して代入開始位置および終了位置を指定することもできます<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

- *startFrom* 引数が渡されなかった場合、*value* 引数の値はコレクションの全要素に代入されます (つまり、*startFrom*=0)。
- *startFrom* 引数が渡され、かつ *end* 引数が省略された場合には、*value* 引数の値はコレクションの最後の要素まで設定されます (つまり、*end*=length)。
- *startFrom* と *end* 引数が両方渡された場合には、*startFrom* から *end* までの要素に *value* が代入されます。

引数に矛盾がある場合、次のように解釈されます:

- *startFrom* < 0 の場合、*startFrom:=startFrom+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。 再計算された値も負の値だった場合、*startFrom* は 0 に設定されます。
- *end* < 0 の場合、それは *end:=end+length* として再計算されます。
- 渡された値、あるいは再計算された値が *end* < *startFrom* の場合、関数はなにもしません。

#### 例題

```4d
 var $c : Collection
 $c:=New collection(1;2;3;"Lemon";Null;"";4;5)
 $c.fill("2") // $c:=[2,2,2,2,2,2,2,2]
 $c.fill("Hello";5) // $c=[2,2,2,2,2,Hello,Hello,Hello]
 $c.fill(0;1;5) // $c=[2,0,0,0,0,Hello,Hello,Hello]
 $c.fill("world";1;-5) //-5+8=3 -> $c=[2,"world","world",0,0,Hello,Hello,Hello]
```

<!-- END REF -->

<!-- REF collection.filter().Desc -->

## .filter()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.filter().Syntax -->**.filter**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.filter().Params -->

| 引数         | 型                           |                             | 説明                                                    |
| ---------- | --------------------------- | :-------------------------: | ----------------------------------------------------- |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                                          |
| methodName | Text                        |              ->             | メソッド名                                                 |
| param      | any                         |              ->             | *formula* または *methodName* に渡す引数                      |
| 戻り値        | Collection                  | <- | フィルターされた要素を格納した新しいコレクション(シャロウ・コピー) |

<!-- END REF -->

#### 説明

`.filter()` 関数は、<!-- REF #collection.filter().Summary -->元のコレクション要素のうち、*formula* または *methodName*　の結果が **true** になる要素をすべて格納した新しいコレクションを返します<!-- END REF -->。 この関数は ***シャロウ・コピー*** を返します。つまり、元のコレクションにオブジェクト要素やコレクション要素が含まれていた場合、それらの参照は戻り値のコレクションで共有されます。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素をフィルターするために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、オブジェクトが 1番目の引数 (*$1*) として渡され、任意の *param* 引数がその後に続きます。 引数の有無にかかわらず、コールバックは任意のテストを実行でき、条件を満たす要素に対しては **true** を返すことで、新規コレクションにプッシュします。

コールバックは以下の引数を受け取ります:

- *$1.value*: 評価する要素の値
- *$2*: param
- *$N...*: paramN...

また、コールバックは以下のパラメーターを設定できます:

- *$1.result* (ブール): 要素の値がフィルター条件に合致する場合には **true** 、それ以外は **false**。
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

:::note

*methodName* に指定したメソッドをコールバックとして使用し、このメソッドが値を返さない場合、`.filter()` は *$1.result* を調べます。この場合には、条件を満たす各要素に対して、*$1.result* を **true** に設定する必要があります。

:::

#### 例題 1

コレクションから、長さが 6未満であるテキスト要素を取得します:

```4d
var $col;$colNew : Collection
$col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
$colNew:=$col.filter(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 6)
  //$colNew=["hello","world","tim","miami"]
```

#### 例題 2

値の型に応じて要素をフィルターします:

```4d
 var $c;$c2;$c3 : Collection
 var $f : 4D.Function

 $f:=Formula(OB Get type($1;"value")=$2)
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter($f;Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter($f;Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

<!-- END REF -->

<!-- REF collection.find().Desc -->

## .find()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.find().Syntax -->**.find**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : any<br/>**.find**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->

<!-- REF #collection.find().Params -->

| 引数         | 型                           |                             | 説明                               |
| ---------- | --------------------------- | :-------------------------: | -------------------------------- |
| startFrom  | Integer                     |              ->             | 検索を開始するインデックス                    |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                     |
| methodName | Text                        |              ->             | メソッド名                            |
| param      | any                         |              ->             | *formula* または *methodName* に渡す引数 |
| 戻り値        | any                         | <- | 最初に見つかった値。見つからなかった場合には Undefined |

<!-- END REF -->

#### 説明

`.find()` 関数は、<!-- REF #collection.find().Summary -->*formula* 引数のフォーミュラまたは *methodName* 引数のメソッドを各コレクション要素に適用して、**true** を返す最初の要素を返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、*param* (任意) に指定した引数が渡されます。 引数の有無にかかわらず、コールバックは任意のテストを実行でき、条件を満たす最初の要素に対して **true** を返さなくてはなりません。 コールバックは最初のパラメーター ($1) に `Object` を受け取ります。

コールバックは以下の引数を受け取ります:

- *$1.value*: 評価する要素の値
- *$2*: param
- *$N...*: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (メソッドを使用する場合は必須) *$1.result* (ブール): 要素の値が検索条件に合致する場合には **true** 、それ以外は **false**。
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

デフォルトでは、`.find()` はコレクション全体をテストします。 任意で、*startFrom* に検索を開始する要素のインデックスを渡すこともできます。

- *startFrom* がコレクションの length 以上だった場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
- *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます (*startFrom:=startFrom+length*)。
  **注:** *startFrom* が負の値であっても、コレクションは左から右へと検索されます。
- *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

#### 例題 1

長さが 5未満の最初のテキスト要素を取得します:

```4d
var $col : Collection
$col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
$value:=$col.find(Formula((Value type($1.value)=Is text) && (Length($1.value)<$2)); 5) //$value="tim"
```

#### 例題 2

コレクション内を都市名で検索します:

```4d
var $c : Collection
var $c2 : Object
$c:=New collection
$c.push(New object("name"; "Cleveland"; "zc"; 35049))
$c.push(New object("name"; "Blountsville"; "zc"; 35031))
$c.push(New object("name"; "Adger"; "zc"; 35006))
$c.push(New object("name"; "Clanton"; "zc"; 35046))
$c.push(New object("name"; "Clanton"; "zc"; 35045))

$c2:=$c.find(Formula($1.value.name=$2); "Clanton")  //$c2={name:Clanton,zc:35046}

```

<!-- END REF -->

<!-- REF collection.findIndex().Desc -->

## .findIndex()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.findIndex().Syntax -->**.findIndex**( { *startFrom* : Integer ; }  *formula* : 4D.Function { ; *...param* : any } ) : Integer<br/>**.findIndex**( { *startFrom* : Integer ; }  *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->

<!-- REF #collection.findIndex().Params -->

| 引数         | 型                           |                             | 説明                               |
| ---------- | --------------------------- | :-------------------------: | -------------------------------- |
| startFrom  | Integer                     |              ->             | 検索を開始するインデックス                    |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                     |
| methodName | Text                        |              ->             | メソッド名                            |
| param      | any                         |              ->             | *formula* または *methodName* に渡す引数 |
| 戻り値        | Integer                     | <- | 最初に見つかった値のインデックス。見つからなかった場合には -1 |

<!-- END REF -->

#### 説明

`.findIndex()` 関数は、<!-- REF #collection.findIndex().Summary -->*formula* 引数のフォーミュラまたは *methodName* 引数のメソッドを各コレクション要素に適用して、**true** を返す最初の要素のインデックスを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、*param* (任意) に指定した引数が渡されます。 引数の有無にかかわらず、コールバックは任意のテストを実行でき、条件を満たす最初の要素に対して **true** を返さなくてはなりません。 コールバックは最初のパラメーター ($1) に `Object` を受け取ります。

コールバックは以下の引数を受け取ります:

- *$1.value*: 評価する要素の値
- *$2*: param
- *$N...*: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (メソッドを使用する場合は必須) *$1.result* (ブール): 要素の値が検索条件に合致する場合には **true** 、それ以外は **false**。
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

デフォルトでは、`.findIndex()` はコレクション全体をテストします。 任意で、*startFrom* に検索を開始する要素のインデックスを渡すこともできます。

- *startFrom* がコレクションの length 以上だった場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
- *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます (*startFrom:=startFrom+length*)。
  **注:** *startFrom* が負の値であっても、コレクションは左から右へと検索されます。
- *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

#### 例題

コレクション内で最初に合致する都市名の位置を探します:

```4d
var $c : Collection
var $val2;$val3 : Integer
$c:=New collection
$c.push(New object("name";"Cleveland";"zc";35049))
$c.push(New object("name";"Blountsville";"zc";35031))
$c.push(New object("name";"Adger";"zc";35006))
$c.push(New object("name";"Clanton";"zc";35046))
$c.push(New object("name";"Clanton";"zc";35045))
$val2:=$c.findIndex(Formula($1.value.name=$2);"Clanton") // $val2=3
$val3:=$c.findIndex($val2+1;Formula($1.value.name=$2);"Clanton") //$val3=4
```

<!-- END REF -->

<!-- REF collection.first().Desc -->

## .first()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.first().Syntax -->**.first**() : any <!-- END REF -->

<!-- REF #collection.first().Params -->

| 引数  | 型   |                             | 説明          |
| --- | --- | :-------------------------: | ----------- |
| 戻り値 | any | <- | コレクションの先頭要素 |

<!-- END REF -->

#### 説明

`.first()` 関数は、<!-- REF #collection.first().Summary -->コレクションの先頭要素を返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

コレクションが空の場合、この関数は undefined を返します。

#### 例題

```4d
var $col; $emptyCol : Collection
var $first : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$first:=$col.first() // 10

$emptyCol:=New collection() // 空のコレクション
// $first:=$emptyCol[0] // このコードはエラーを返します
$first:=$emptyCol.first() // このコードは undefined を返します
```

<!-- END REF -->

<!-- REF collection.flat().Desc -->

## .flat()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.flat().Syntax -->**.flat**( { *depth* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.flat().Params -->

| 引数    | 型          |                             | 説明                                      |
| ----- | ---------- | :-------------------------: | --------------------------------------- |
| depth | Integer    |              ->             | ネストされたコレクションの階層をどの範囲まで平坦化するか。 デフォルト = 1 |
| 戻り値   | Collection | <- | 平坦化されたコレクション                            |

<!-- END REF -->

#### 説明

`.flat()` 関数は、<!-- REF #collection.flat().Summary -->*depth* に指定した階層の深さまで、すべてのサブコレクション要素を再帰的に連結した新しいコレクションを作成します<!-- END REF -->。

*depth* が省略された場合のデフォルトでは、コレクション階層の一つ目のレベルのネストのみが解除されます。

> このコマンドは、元のコレクションを変更しません。

#### 例題

```4d
$col:=New collection(1; 2; New collection(3; 4))
$col.flat()
// [1, 2, 3, 4]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat() // $col.flat(1) と同じ
// [1, 2, 3, 4, [5, 6]]

$col:=New collection(1; 2; New collection(3; 4; New collection(5; 6)))
$col.flat(2)
// [1, 2, 3, 4, 5, 6]

$col:=New collection(1; 2; New collection(3; 4; 5; 6; New collection(7; 8; New collection(9; 10))))
$col.flat(MAXLONG)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

<!-- END REF -->

<!-- REF collection.flatMap().Desc -->

## .flatMap()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.flatMap().Syntax -->**.flatMap**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.flatMap**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.flatMap().Params -->

| 引数         | 型                           |                             | 説明                                 |
| ---------- | --------------------------- | :-------------------------: | ---------------------------------- |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                       |
| methodName | Text                        |              ->             | メソッド名                              |
| param      | any                         |              ->             | *formula* または *methodName* に渡す引数   |
| 戻り値        | Collection                  | <- | 変換された値を格納し、1レベルのネストが解除された新しいコレクション |

<!-- END REF -->

#### 説明

`.flatMap()` 関数は、<!-- REF #collection.flatMap().Summary -->元のコレクションの各要素に対して *formula* または *methodName* を呼び出した結果に基づき、1レベルのネストが解除された新しいコレクションを作成します<!-- END REF -->。 オプションで、*param* パラメーターに、*formula* または *methodName* に渡す引数を指定することができます。

この機能は、[`map()`](#map) の呼び出し後に、depth = 1 で [`flat()`](#flat) を呼び出すのと同じです。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、*param* (任意) に指定した引数が渡されます。 引数の有無にかかわらず、コールバックは任意の処理を実行でき、結果のコレクションに追加する変換後の新しい値を返さなくてはなりません。 コールバックは最初のパラメーター ($1) に `Object` を受け取ります。

コールバックは以下の引数を受け取ります:

- *$1.value*: 評価する要素の値
- *$2*: param
- *$N...*: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (メソッドを使用した場合は必須) *$1.result* (任意の型): 結果のコレクションに追加する、変換された値
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

#### 例題 1

```4d
var $col ; $result : Collection
$col:=New collection(1; 2; 3; 4)

$result:=$col.map(Formula(New collection($1.value*2))
 // [[2],[4],[6],[8]]

$result:=$col.flatMap(Formula(New collection($1.value*2))
// [2,4,6,8]
```

#### 例題 2

```
var $col; $result : Collection
$col:=New collection("Hello how"; ""; "are you ?")

$result:=$col.map(Formula(Split string($1.value; " ")))
// [["Hello", "how"], [], ["are", "you", "?"]]

$result:=$col.flatMap(Formula(Split string($1.value; " ")))
// ["Hello", "how", "are", "you", "?"]
```

#### 例題 3

コレクションに含まれる各値の合計に対する割合を計算します:

```4d
var $c; $c2 : Collection
var $f : 4D.Function
$c:=New collection(1; 4; 9; 10; 20)
$f:=Formula(New collection($1.value;Round(($1.value/$2)*100; 2)))
$c2:=$c.flatMap($f; $c.sum())
  //$c2=[1, 2.27, 4, 9.09,9, 20.45,10, 22.73, 20, 45.45]
```

<!-- END REF -->

<!-- REF collection.includes().Desc -->

## .includes()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.includes().Syntax -->**.includes**( *toSearch* : expression { ; *startFrom* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.includes().Params -->

| 引数        | 型       |                             | 説明                             |
| --------- | ------- | :-------------------------: | ------------------------------ |
| toSearch  | 式       |              ->             | コレクション内を検索する式                  |
| startFrom | Integer |              ->             | 検索を開始するインデックス                  |
| 戻り値       | Boolean | <- | *toSearch* がコレクションにある場合は true。 |

<!-- END REF -->

#### 説明

`.includes()` 関数は、<!-- REF #collection.includes().Summary -->*toSearch* に指定した式がコレクション内で見つかれば **true** を、そうでなければ **false** を返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

*toSearch* パラメーターには、コレクション内で検索する式を渡します。 以下のものを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- null 値
- オブジェクトあるいはコレクションの参照

*toSearch* 引数は検出すべき要素と完全に一致している必要があります (等号演算子と同じルールが適用されます)。

オプションとして、*startFrom* 引数を渡すことで、検索を開始するコレクション要素のインデックスを指定することができます。

- *startFrom* がコレクションの length 以上だった場合、false が返されます。これはコレクションが検索されていないことを意味します。
- *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます (*startFrom:=startFrom+length*)。 なお、*startFrom* が負の値であっても、コレクションは左から右へと検索されます。
- *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

#### 例題

```4d
 var $col : Collection
 var $in : Boolean
 var $obj : Object
 $obj:=New object("value"; 10)
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5;$obj)
 $in:=$col.includes(3) //True
 $in:=$col.includes(5;6) //True
 $in:=$col.includes("al@") //True
 $in:=$col.includes("Hello") //False
 $in:=$col.includes($obj)  //True
 $in:=$col.includes(New object("value"; 10)) //False
```

<!-- END REF -->

<!-- REF collection.indexOf().Desc -->

## .indexOf()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.indexOf().Syntax -->**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->

| 引数        | 型       |                             | 説明                                        |
| --------- | ------- | :-------------------------: | ----------------------------------------- |
| toSearch  | 式       |              ->             | コレクション内を検索する式                             |
| startFrom | Integer |              ->             | 検索を開始するインデックス                             |
| 戻り値       | Integer | <- | 最初に見つかった toSearch のインデックス。見つからなかった場合には -1 |

<!-- END REF -->

#### 説明

`.indexOf()` 関数は、<!-- REF #collection.indexOf().Summary --> *toSearch* 引数の式をコレクション要素の中から検索し、最初に見つかった要素のインデックス (見つからなかった場合には -1) を返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

*toSearch* パラメーターには、コレクション内で検索する式を渡します。 以下のものを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- null 値
- オブジェクトあるいはコレクションの参照

*toSearch* 引数は検出すべき要素と完全に一致している必要があります (等号演算子と同じルールが適用されます)。

オプションとして、*startFrom* 引数を渡すことで、検索を開始するコレクション要素のインデックスを指定することができます。

- *startFrom* がコレクションの length 以上だった場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
- *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます (*startFrom:=startFrom+length*)。
  **注:** *startFrom* が負の値であっても、コレクションは左から右へと検索されます。
- *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

#### 例題

```4d
 var $col : Collection
 var $i : Integer
 $col:=New collection(1;2;"Henry";5;3;"Albert";6;4;"Alan";5)
 $i:=$col.indexOf(3) //$i=4
 $i:=$col.indexOf(5;5) //$i=9
 $i:=$col.indexOf("al@") //$i=5
 $i:=$col.indexOf("Hello") //$i=-1
```

<!-- END REF -->

<!-- REF collection.indices().Desc -->

## .indices()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.indices().Syntax -->**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.indices().Params -->

| 引数          | 型          |                             | 説明                                 |
| ----------- | ---------- | :-------------------------: | ---------------------------------- |
| queryString | Text       |              ->             | 検索条件                               |
| value       | any        |              ->             | プレースホルダー使用時: 比較する値 |
| 戻り値         | Collection | <- | queryString に合致するコレクション要素のインデックス   |

<!-- END REF -->

#### 説明

`.indices()` 関数は [`.query()`](#query) 関数と同様に機能しますが、<!-- REF #collection.indices().Summary -->*queryString* 引数の検索条件に合致する、元のコレクション要素のインデックスを返します<!-- END REF -->(コレクション要素自体は返しません)。 インデックスは、昇順に返されます。

> このコマンドは、元のコレクションを変更しません。

*queryString* 引数には、以下のシンタックスを使用します:

```4d
propertyPath 比較演算子 値 {logicalOperator propertyPath 比較演算子 値}
```

*queryString* および *value* パラメーターの詳細については、[`dataClass.query()`](dataclassClass.md#query) 関数を参照ください。

#### 例題

```4d
 var $c; $icol : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))

 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $icol:=$c.indices("name = :1";"Cleveland") // $icol=[0]
 $icol:=$c.indices("zc > 35040") // $icol=[0,3,4]
```

<!-- END REF -->

<!-- REF collection.insert().Desc -->

## .insert()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.insert().Syntax -->**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->

| 引数      | 型          |                             | 説明               |
| ------- | ---------- | :-------------------------: | ---------------- |
| index   | Integer    |              ->             | 要素の挿入位置          |
| element | any        |              ->             | コレクションに挿入する要素    |
| 戻り値     | Collection | <- | 要素の挿入された元のコレクション |

<!-- END REF -->

#### 説明

`.insert()` 関数は、<!-- REF #collection.insert().Summary -->*index* で指定したコレクションインスタンスの位置に *element* 要素を挿入し、変更された元のコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

*index* パラメーターには、コレクション内で要素を挿入する位置を渡します。

> **警告**: コレクション要素は 0 起点である点に注意してください。

- 指定した *index* がコレクションの length より大きい場合、実際の開始インデックスはコレクションの length に設定されます。
- *index* <0 の場合、*index:=index+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
- 計算結果も負の値である場合、index は 0 に設定されます。

コレクションが受け入れるものであれば、どんな型の要素も (たとえば他のコレクションでも) 挿入可能です。

#### 例題

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d") //$col=["a","b","c","d"]
 $col.insert(2;"X") //$col=["a","b","X","c","d"]
 $col.insert(-2;"Y") //$col=["a","b","X","Y","c","d"]
 $col.insert(-10;"Hi") //$col=["Hi","a","b","X","Y","c","d"]
```

<!-- END REF -->

<!-- REF collection.join().Desc -->

## .join()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.join().Syntax -->**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->

| 引数        | 型       |                             | 説明                                                               |
| --------- | ------- | :-------------------------: | ---------------------------------------------------------------- |
| delimiter | Text    |              ->             | 要素間に用いる区切り文字                                                     |
| option    | Integer |              ->             | `ck ignore null or empty`: 戻り値に null と空の文字列を含めない |
| 戻り値       | Text    | <- | 区切り文字を使ってコレクションの全要素をつなげた文字列                                      |

<!-- END REF -->

#### 説明

`.join()` 関数は、<!-- REF #collection.join().Summary -->*delimiter* に渡した文字列を区切り文字として、コレクションの全要素を一つの文字列につなげます<!-- END REF -->。戻り値はつなげられた文字列です。

> このコマンドは、元のコレクションを変更しません。

デフォルトで、コレクションの null あるいは空の要素も戻り値の文字列に含めます。 これらを戻り値の文字列に含めたくない場合は、*option* パラメーターに `ck ignore null or empty` 定数を渡します。

#### 例題

```4d
 var $c : Collection
 var $t1;$t2 : Text
 $c:=New collection(1;2;3;"Paris";Null;"";4;5)
 $t1:=$c.join("|") //1|2|3|Paris|null||4|5
 $t2:=$c.join("|";ck ignore null or empty) //1|2|3|Paris|4|5
```

<!-- END REF -->

<!-- REF collection.last().Desc -->

## .last()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.last().Syntax -->**.last**() : any <!-- END REF -->

<!-- REF #collection.last().Params -->

| 引数  | 型   |                             | 説明           |
| --- | --- | :-------------------------: | ------------ |
| 戻り値 | any | <- | コレクションの最後の要素 |

<!-- END REF -->

#### 説明

`.last()` 関数は、<!-- REF #collection.last().Summary -->コレクションの最後の要素を返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

コレクションが空の場合、この関数は undefined を返します。

#### 例題

```4d
var $col; $emptyCol : Collection
var $last : Variant
$col:=New collection(10; 20; 30; "hello"; 50)
$last:=$col.last() // 50

$emptyCol:=New collection() // 空のコレクション
// $last:=$emptyCol[$emptyCol.length-1] // このコードはエラーを返します
$last:=$emptyCol.last() // このコードは undefined を返します

```

<!-- END REF -->

<!-- REF collection.lastIndexOf().Desc -->

## .lastIndexOf()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.lastIndexOf().Syntax -->**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->

| 引数        | 型       |                             | 説明                                        |
| --------- | ------- | :-------------------------: | ----------------------------------------- |
| toSearch  | 式       |              ->             | コレクション内を検索する要素                            |
| startFrom | Integer |              ->             | 検索を開始するインデックス                             |
| 戻り値       | Integer | <- | 最後に見つかった toSearch のインデックス。見つからなかった場合には -1 |

<!-- END REF -->

#### 説明

`.lastIndexOf()` 関数は、<!-- REF #collection.lastIndexOf().Summary --> toSearch 引数の式をコレクション要素の中から検索し、最後に見つかった要素のインデックス (見つからなかった場合には -1) を返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

*toSearch* パラメーターには、コレクション内で検索する式を渡します。 以下のものを渡すことができます:

- スカラー値 (テキスト、数値、ブール、日付)
- null 値
- オブジェクトあるいはコレクションの参照

*toSearch* 引数は検出すべき要素と完全に一致している必要があります (等号演算子と同じルールが適用されます)。

オプションとして、*startFrom* 引数を渡すことで、逆順検索を開始するコレクション要素のインデックスを指定することができます。

- *startFrom* が、コレクションの length から 1を引いた数字 (coll.length-1) 以上の場合、コレクション全体が検索されます (デフォルト)。
- *startFrom* < 0 の場合、*startFrom:=startFrom+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。 計算結果も負の値である場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
  **注:** *startFrom* が負の値であっても、コレクションは右から左へと検索されます。
- *startFrom* = 0 の場合、-1 が返されます。これはコレクションが検索されていないことを意味します。

#### 例題

```4d
 var $col : Collection
 var $pos1;$pos2;$pos3;$pos4;$pos5 : Integer
 $col:=Split string("a,b,c,d,e,f,g,h,i,j,e,k,e";",") //$col.length=13
 $pos1:=$col.lastIndexOf("e") // 戻り値: 12
 $pos2:=$col.lastIndexOf("e";6) // 戻り値: 4
 $pos3:=$col.lastIndexOf("e";15) // 戻り値: 12
 $pos4:=$col.lastIndexOf("e";-2) // 戻り値: 10
 $pos5:=$col.lastIndexOf("x") // 戻り値: -1
```

<!-- END REF -->

<!-- REF collection.length.Desc -->

## .length

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R5 | 追加 |

</details>

<!-- REF #collection.length.Syntax -->**.length** : Integer<!-- END REF -->

#### 説明

`.length` プロパティは、<!-- REF #collection.length.Summary -->コレクション内の要素数を返します<!-- END REF -->。

`.length` プロパティは、コレクション作成時に初期化されます。 要素を追加・削除すると、必要に応じて length は更新されます。 このプロパティは **読み取り専用** です (これを使用してコレクションのサイズを設定することはできません)。

#### 例題

```4d
 var $col : Collection // $col.length が 0 に初期化されます
 $col:=New collection("one";"two";"three") // $col.length が 3 に更新されます
 $col[4]:="five" // $col.length が 5 に更新されます
 $vSize:=$col.remove(0;3).length // $vSize=2
```

<!-- END REF -->

<!-- REF collection.map().Desc -->

## .map()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.map().Syntax -->**.map**( *formula* : 4D.Function { ; *...param* : any } ) : Collection<br/>**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.map().Params -->

| 引数         | 型                           |                             | 説明                               |
| ---------- | --------------------------- | :-------------------------: | -------------------------------- |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                     |
| methodName | Text                        |              ->             | メソッド名                            |
| param      | any                         |              ->             | *formula* または *methodName* に渡す引数 |
| 戻り値        | Collection                  | <- | 変換された値を格納する新しいコレクション             |

<!-- END REF -->

#### 説明

`.map()` 関数は、 <!-- REF #collection.map().Summary -->元のコレクションの各要素に対して *formula* または *methodName* を呼び出した結果に基づいた、新しいコレクションを作成します<!-- END REF -->。 オプションで、*param* パラメーターに、*formula* または *methodName* に渡す引数を指定することができます。 `.map()` は常に、元のコレクションと同じサイズのコレクションを返します (*$1.stop* が使用された場合を除く (後述参照))。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、*param* (任意) に指定した引数が渡されます。 引数の有無にかかわらず、コールバックは任意の処理を実行でき、結果のコレクションに追加する変換後の新しい値を返さなくてはなりません。 コールバックは最初のパラメーター ($1) に `Object` を受け取ります。

コールバックは以下の引数を受け取ります:

- *$1.value*: 評価する要素の値
- *$2*: param
- *$N...*: paramN...

また、コールバックは以下のパラメーターを設定できます:

- (メソッドを使用した場合は必須) *$1.result* (任意の型): 結果のコレクションに追加する、変換された値
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

#### 例題

```4d
var $c; $c2 : Collection
$c:=New collection(1; 4; 9; 10; 20)
$c2:=$c.map(Formula(Round(($1.value/$2)*100; 2)); $c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

<!-- END REF -->

<!-- REF collection.max().Desc -->

## .max()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.max().Syntax -->**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->

| 引数           | 型                                               |                             | 説明                 |
| ------------ | ----------------------------------------------- | :-------------------------: | ------------------ |
| propertyPath | Text                                            |              ->             | 評価するオブジェクトプロパティのパス |
| 戻り値          | Boolean, Text, Number, Collection, Object, Date | <- | コレクション内の最大値        |

<!-- END REF -->

#### 説明

`.max()` 関数は、<!-- REF #collection.max().Summary -->コレクション内の最大値を持つ要素を返します<!-- END REF --> ([`.sort()`](#sort) 関数を使用して昇順に並べ替えたときのコレクションの最後の要素が最大値の要素です)。

> このコマンドは、元のコレクションを変更しません。

コレクションが異なる型の値を格納している場合、`.max()` 関数は型のリスト順の、最後の型の最大値を返します ([`.sort()`](#sort) 参照)。

コレクションがオブジェクトを格納している場合には、最大値を取得するオブジェクトプロパティのパスを *propertyPath* に渡します。

コレクションが空の場合、 `.max()` は *Undefined* を返します。

#### 例題

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $max:=$col.max() //{name:Alabama,salary:10500}
 $maxSal:=$col.max("salary") //50000
 $maxName:=$col.max("name") //"Wesson"
```

<!-- END REF -->

<!-- REF collection.min().Desc -->

## .min()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.min().Syntax -->**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->

| 引数           | 型                                               |                             | 説明                 |
| ------------ | ----------------------------------------------- | :-------------------------: | ------------------ |
| propertyPath | Text                                            |              ->             | 評価するオブジェクトプロパティのパス |
| 戻り値          | Boolean, Text, Number, Collection, Object, Date | <- | コレクション内の最小値        |

<!-- END REF -->

#### 説明

`.min()` 関数は、<!-- REF #collection.min().Summary -->コレクション内の最小値を持つ要素を返します<!-- END REF --> ([`.sort()`](#sort) 関数を使用して昇順に並べ替えたときのコレクションの先頭の要素が最小値の要素です)。

> このコマンドは、元のコレクションを変更しません。

コレクションが異なる型の値を格納している場合、`.min()` 関数は型のリスト順の、最初の型の最小値を返します ([`.sort()`](#sort) 参照)。

コレクションがオブジェクトを格納している場合には、最小値を取得するオブジェクトプロパティのパスを *propertyPath* に渡します。

コレクションが空の場合、 `.min()` は *Undefined* を返します。

#### 例題

```4d
 var $col : Collection
 $col:=New collection(200;150;55)
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Alabama";"salary";10500))
 $min:=$col.min() //55
 $minSal:=$col.min("salary") //10000
 $minName:=$col.min("name") //"Alabama"
```

<!-- END REF -->

<!-- REF collection.multiSort().Desc -->

## .multiSort()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R3 | 追加 |

</details>

<!-- REF #collection.multiSort().Syntax -->**.multiSort**() : Collection<br/>**.multiSort**( *colsToSort* : Collection ) : Collection<br/>**.multiSort**( *formula* : 4D.Function ; *colsToSort* : Collection ) : Collection<!-- END REF -->

<!-- REF #collection.multiSort().Params -->

| 引数         | 型                           |                             | 説明                                                                                                                                          |
| ---------- | --------------------------- | :-------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                                                                                                                                |
| colsToSort | Collection                  |              ->             | コレクションのコレクション、または {`collection`:*colToSort*;`order`:`ck ascending` / `ck descending`} プロパティを持つオブジェクトのコレクション |
| 戻り値        | Collection                  | <- | 並べ替えられた元のコレクション                                                                                                                             |

<!-- END REF -->

#### 説明

`.multiSort()` 関数は、<!-- REF #collection.multiSort().Summary -->複数のコレクションに対して複数レベルの同期ソートを実行します<!-- END REF -->。

> この関数は、元のコレクションを変更します。また、*colsToSort* パラメーターに使用されたコレクションも変更されます。

`.multiSort()` が引数なしで呼び出された場合、この関数は [`.sort()`](#sort) 関数と同じ効果を持ちます: コレクション要素は、スカラー値のみがデータ型に応じてデフォルトで昇順に並べ替えられます。 コレクションが異なる型の要素を格納している場合、それらはまず型ごとにグループ分けされ、そのあとで並べ替えられます。 型は以下の順番で返されます:

1. null
2. ブール
3. 文字列
4. 数値
5. オブジェクト
6. コレクション
7. 日付

**単一レベルの同期ソート**

複数のコレクションを同期的にソートするには、*colsToSort* にソートするコレクションのコレクションを渡します。 渡せるコレクションの数に制限はありません。 呼び出し元のコレクションは昇順にソートされ、すべての *colsToSort* コレクションが同期ソートされます。

:::note

*colsToSort* に渡すコレクションの要素数はすべて同じでなければなりません。そうでない場合はエラーが返されます。

:::

昇順以外の方法でコレクションをソートしたい場合には、ソート順を定義する *formula* ([Formula オブジェクト](FunctionClass.md#formula)) を指定する必要があります。 戻り値は、二つの要素の相対的な順番を示すブール値です。*$1.value* が *$1.value2* より小さい場合に **true** を、*$1.value* が *$1.value2* より大きい場合に **false** を返します。 必要に応じて、 追加の引数をフォーミュラに渡せます。

フォーミュラは以下の引数を受け取ります:

- $1 (オブジェクト):
  - *$1.value* (任意の型): 比較する一つ目の要素の値
  - *$1.value2* (任意の型): 比較する二つ目の要素の値
- $2...$N (任意の型): 追加の引数

**複数レベルの同期ソート**

複数レベルの同期ソートを定義するには、サブレベルとして使用するコレクションについては、{`collection`:*colToSort*;`order`:`ck ascending` または `ck descending`} プロパティを含むオブジェクトを *colToSort* に格納して渡す必要があります。

ソートレベルは、*colsToSort* に渡されるコレクションの順序によって決定されます。 `collection`/`order` オブジェクトの構文内の位置が、そのソートレベルを決定します。

:::note

`.multiSort()` 関数は、[安定性](https://ja.wikipedia.org/wiki/ソート#安定ソート) のあるソートアルゴリズムを使用します。

:::

#### 例題 1

異なる値の型を持つコレクションの単純な同期ソート:

```4d
var $col;$col2;$col3 : Collection
$col:=["A"; "C"; "B"]
$col2:=[1; 2; 3]
$col3:=[["Jim"; "Philip"; "Maria"]; ["blue"; "green"]; ["11"; 22; "33"]]

$col.multiSort([$col2; $col3])
//$col=["A","B","C"]
//$col2=[1,3,2]
//$col3[0]=["Jim","Philip","Maria"]
//$col3[1]=["11",22,"33"]
//$col3[2]=["blue","green"]

```

#### 例題 2

city (都市)、country (国)、continent (大陸) の 3つのコレクションを同期ソートします。 continent のコレクションを昇順にソートし、country のコレクションを同期ソートさせ、その次のレベルで city のコレクションを昇順にソートします:

```4d
var $city : Collection
var $country : Collection
var $continent : Collection

$city:=["Eching"; "Rabat"; "Paris"; "Lyon"; "San Diego"]
$country:=["Germany"; "Morocco"; "France"; "France"; "US"]
$continent:=["Europe"; "Africa"; "Europe"; "Europe"; "America"]

$continent.multiSort([$country; {collection: $city; order: ck ascending}])

//$continent=["Africa", "America","Europe","Europe","Europe"]
//$country=["Morocco", "US","Germany","France","France"]
//$city=["Rabat","San Diego","Eching","Lyon","Paris"]

```

#### 例題 3

オブジェクトのコレクションを同期させることもできます。

```4d
var $name : Collection
var $address : Collection
$name:=[]
$name.push({firstname: "John"; lastname: "Smith"})
$name.push({firstname: "Alain"; lastname: "Martin"})
$name.push({firstname: "Jane"; lastname: "Doe"})
$name.push({firstname: "John"; lastname: "Doe"})
$address:=[]
$address.push({city: "Paris"; country: "France"})
$address.push({city: "Lyon"; country: "France"})
$address.push({city: "Eching"; country: "Germany"})
$address.push({city: "Berlin"; country: "Germany"})

$name.multiSort(Formula($1.value.firstname<$1.value2.firstname); [$address])
//"Alain Martin","Jane Doe","John Smith","John Doe"
//"Lyon France","Eching Germany","Paris France","Berlin Germany"

```

<!-- END REF -->

<!-- REF collection.orderBy().Desc -->

## .orderBy()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.orderBy().Syntax -->**.orderBy**( ) : Collection<br/>**.orderBy**( *pathStrings* : Text ) : Collection<br/>**.orderBy**( *pathObjects* : Collection ) : Collection<br/>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->

<!-- REF #collection.orderBy().Params -->

| 引数          | 型          |                             | 説明                                                            |
| ----------- | ---------- | :-------------------------: | ------------------------------------------------------------- |
| pathStrings | Text       |              ->             | コレクションの並べ替え基準とするプロパティパス                                       |
| pathObjects | Collection |              ->             | 条件オブジェクトのコレクション                                               |
| ascOrDesc   | Integer    |              ->             | `ck ascending` または `ck descending` (スカラー値) |
| 戻り値         | Collection | <- | 並べ替えられたコレクションのコピー (シャロウ・コピー)               |

<!-- END REF -->

#### 説明

`.orderBy()` 関数は、<!-- REF #collection.orderBy().Summary -->コレクションの要素を指定順に並べ替えた新しいコレクションを返します<!-- END REF -->。

この関数は *シャロウ・コピー* を返します。つまり、元のコレクションにオブジェクト要素やコレクション要素が含まれていた場合、それらの参照は戻り値のコレクションで共有されます。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

引数を渡さなかった場合、メソッドはコレクション内のスカラー値を昇順に並べ替えます (オブジェクトやコレクションなどの他の型は内部的な順序で返されます)。 この自動並べ替え順は、*ascOrDesc* パラメーターに `ck ascending` あるいは `ck descending` 定数を渡すことで変更できます (以下参照)。

また、引数を渡すことで、コレクション要素をどのように並べ替えるかを指定することもできます。 次の 3つのシンタックスがサポートされています:

- *pathStrings* : Text (フォーミュラ)。 **シンタックス**: `propertyPath1 {desc または asc}, propertyPath2 {desc または asc},...` (デフォルトの並び順: asc)。 *pathStrings* はカンマで区切られた、1〜n のプロパティパスと並び順 (任意) で構成されたフォーミュラを格納します。 プロパティを渡す順番が、コレクション要素の並べ替えの優先順位を決定します。 デフォルトでは、プロパティは昇順に並べ替えられます。 並び順を設定するには、プロパティパスの後に半角スペースで区切ったあとに、昇順を指定するには "asc"、降順を指定するには "desc" を渡します。

- *pathObjects* : Collection。 *pathObjects* コレクションには必要な数だけオブジェクトを追加することができます。 デフォルトでは、プロパティは昇順に並べ替えられます ("descending" は false)。 コレクションの各要素は、以下の構造を持つオブジェクトを格納します:

```4d
{
    "propertyPath": string,


    "descending": boolean

}
```

- *ascOrDesc* : Integer。 **Objects and collections** テーマから、以下の定数のいずれか一つを渡します:

  | 定数            | 型       | 値 | 説明                                      |
  | ------------- | ------- | - | --------------------------------------- |
  | ck ascending  | Integer | 0 | 要素は昇順に並べられます (デフォルト) |
  | ck descending | Integer | 1 | 要素は降順に並べられます                            |

  このシンタックスは、コレクション内のスカラー値のみを並べ替えます (オブジェクトやコレクションなどの他の型は並べ替えされないまま返されます)。

コレクションが異なる型の要素を格納している場合、それらはまず型ごとにグループ分けされ、そのあとで並べ替えられます。 型は以下の順番で返されます:

1. null
2. ブール
3. 文字列
4. 数値
5. オブジェクト
6. コレクション
7. 日付

#### 例題 1

数値のコレクションを昇順および降順に並べ替えます:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```

#### 例題 2

オブジェクトのコレクションを、テキストフォーミュラに指定したプロパティ名に基づいて並べ替えます:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $c2:=$c.orderBy("value desc")
 $c2:=$c.orderBy("value desc, id")
 $c2:=$c.orderBy("value desc, id asc")
```

オブジェクトのコレクションをプロパティパスで並べ替えます:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```

#### 例題 3

オブジェクトのコレクションを、<em x-id="3">pathObjects</em> コレクションを使用して並べ替えます:

```4d
 var $crit; $c; $c2 : COllection
 $crit:=New collection
 $c:=New collection
 For($vCounter;1;10)
    $c.push(New object("id";$vCounter;"value";Random))
 End for
 $crit.push(New object("propertyPath";"value";"descending";True))
 $crit.push(New object("propertyPath";"id";"descending";False))
 $c2:=$c.orderBy($crit)
```

プロパティパスで並べ替えます:

```4d

 var $crit; $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))
 $crit:=New collection(New object("propertyPath";"phones.p2";"descending";True))
 $c2:=$c.orderBy($crit)
```

<!-- END REF -->

<!-- REF collection.orderByMethod().Desc -->

## .orderByMethod()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.orderByMethod().Syntax -->**.orderByMethod**( *formula* : 4D.Function { ; ...*extraParam* : expression } ) : Collection<br/>**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection<!-- END REF -->

<!-- REF #collection.orderByMethod().Params -->

| 引数         | 型                           |                             | 説明                                              |
| ---------- | --------------------------- | :-------------------------: | ----------------------------------------------- |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト                                    |
| methodName | Text                        |              ->             | メソッド名                                           |
| extraParam | any                         |              ->             | 渡す引数                                            |
| 戻り値        | Collection                  | <- | 並べ替えられたコレクションのコピー (シャロウ・コピー) |

<!-- END REF -->

#### 説明

`.orderByMethod()` 関数は、 <!-- REF #collection.orderByMethod().Summary -->*formula* または *methodName* によって定義された順番でコレクション要素を並べ替えた新しいコレクションを返します<!-- END REF -->。

この関数は *シャロウ・コピー* を返します。つまり、元のコレクションにオブジェクト要素やコレクション要素が含まれていた場合、それらの参照は戻り値のコレクションで共有されます。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。

- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、二つの値を比較して、最初の値が二つ目の値より低い場合に **true** を返すコードの名称を渡します。 必要に応じて、 *extraParam* に指定した引数をコールバックに渡せます。

コールバックは以下の引数を受け取ります:

- $1 (オブジェクト):
  - *$1.value* (任意の型): 比較する一つ目の要素の値
  - *$1.value2* (任意の型): 比較する二つ目の要素の値
  - $2...$N (任意の型): 追加の引数

メソッドを使用する場合、以下の引数を設定する必要があります:

- *$1.result* (ブール): *$1.value < $1.value2* の場合は **true**、それ以外は **false**。

#### 例題 1

文字列のコレクションをアルファベット順ではなく、数値順に並べ替えます:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], アルファベット順
 $c3:=$c.orderByMethod(Formula(Num($1.value)<Num($1.value2))) // $c3=["4","33","222","1111"]
```

#### 例題 2

文字列のコレクションを、文字列の長さを基準に並べ替えます:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod(Formula(Length(String($1.value))>Length(String($1.value2))))
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

#### 例題 3

文字コード順またはアルファベット順にコレクション要素を並べ替えます:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

// 文字コード順:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk character codes)
// 結果 : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

// アルファベット順:
$strings2:=$strings1.orderByMethod(Function(sortCollection);sk strict)
// 結果 : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

***sortCollection*** メソッドのコードは以下のとおりです:

```4d
var $1 : Object
var $2: Integer // 並べ替えオプション
$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
```

<!-- END REF -->

<!-- REF collection.pop().Desc -->

## .pop()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.pop().Syntax -->**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->

| 引数  | 型   |                             | 説明           |
| --- | --- | :-------------------------: | ------------ |
| 戻り値 | any | <- | コレクションの最後の要素 |

<!-- END REF -->

#### 説明

`.pop()` 関数は、<!-- REF #collection.pop().Summary -->コレクションから最後の要素を取り除き、それを戻り値として返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

空のコレクションに適用した場合、 `.pop()` は ***Undefined*** を返します。

#### 例題

`.pop()` を [`.push()`](#push) と組み合わせて使用すると、スタック (後入れ先出し構造) を実装することができます:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1] 、戻り値は 2 です
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1] 、戻り値は [4,5] です
 $stack.pop() //$stack=[] 、戻り値は 1 です
```

<!-- END REF -->

<!-- REF collection.push().Desc -->

## .push()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.push().Syntax -->**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->

| 引数      | 型          |                             | 説明               |
| ------- | ---------- | :-------------------------: | ---------------- |
| element | any        |              ->             | コレクションに追加する要素    |
| 戻り値     | Collection | <- | 要素の追加された元のコレクション |

<!-- END REF -->

#### 説明

`.push()` 関数は、<!-- REF #collection.push().Summary -->一つ以上の *element* 引数をコレクションインスタンスの最後に追加し、変更された元のコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

#### 例題 1

```4d
 var $col : Collection
 $col:=New collection(1;2) //$col=[1,2]
 $col.push(3) //$col=[1,2,3]
 $col.push(6;New object("firstname";"John";"lastname";"Smith"))
  //$col=[1,2,3,6,{firstname:John,lastname:Smith}
```

#### 例題 2

戻り値のコレクションを並び替えます:

```4d
 var $col; $sortedCol : Collection
 $col:=New collection(5;3;9) //$col=[5,3,9]
 $sortedCol:=$col.push(7;50).sort()
  //$col=[5,3,9,7,50]
  //$sortedCol=[3,5,7,9,50]
```

<!-- END REF -->

<!-- REF collection.query().Desc -->

## .query()

<details><summary>履歴</summary>

| リリース   | 内容                               |
| ------ | -------------------------------- |
| 20 R6  | オブジェクト参照またはコレクション参照を使用したクエリのサポート |
| 17 R5  | querySettings をサポート              |
| v16 R6 | 追加                               |

</details>

<!-- REF #collection.query().Syntax -->**.query**( *queryString* : Text ) : Collection<br/>**.query**( *queryString* : Text ; *...value* : any ) : Collection<br/>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->

<!-- REF #collection.query().Params -->

| 引数            | 型          |                             | 説明                                                 |
| ------------- | ---------- | :-------------------------: | -------------------------------------------------- |
| queryString   | Text       |              ->             | 検索条件                                               |
| value         | any        |              ->             | プレースホルダー使用時: 比較する値                 |
| querySettings | Object     |              ->             | クエリオプション: parameters, attributes 他 |
| 戻り値           | Collection | <- | queryString に合致するコレクション要素                          |

<!-- END REF -->

#### 説明

`.query()` 関数は、*queryString* および、任意の *value* や *querySettings* パラメーターによって定義された<!-- REF #collection.query().Summary -->検索条件に合致するオブジェクトコレクションの要素をすべて返します<!-- END REF -->。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

クエリの実行対象であるコレクションが検索値 *value* を含まない場合、空のコレクションが返されます。

> このコマンドは、元のコレクションを変更しません。

#### queryString 引数

*queryString* 引数には、以下のシンタックスを使用します:

```4d
propertyPath 比較演算子 値 {logicalOperator propertyPath 比較演算子 値}
```

詳細は以下の通りです:

- **propertyPath**: クエリの実行対象となるプロパティのパス。 この引数は、単純な名前 ("country" など) のほか、あらゆる有効な属性パス ("country.name" など) の形をとることができます。 属性パスが `Collection` 型である場合、すべてのオカレンスを管理するには `[]` 記法を使用してください (例: `children[].age` など)。

- **比較演算子**: *propertyPath* 引数と *value* 引数の比較に使用する記号 以下の記号がサポートされます:

| 比較            | 記号                          | 説明                                                                                                                         |
| ------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 等しい           | =, ==                       | 一致するデータを取得します。ワイルドカード (@) をサポートし、文字の大小/アクセントの有無は区別しません。                                    |
|               | ===, IS                     | 一致するデータを取得します。ワイルドカード (@) は標準の文字として認識され、文字の大小/アクセント記号の有無は区別しません。                           |
| 等しくない         | #, !=                       | ワイルドカード (@) をサポートします。 "宣言に Not 条件を適用" と同じです ([後述参照](#コレクションにおける-等しくない)) |
|               | !==, IS NOT                 | ワイルドカード (@) は標準の文字として認識されます                                                                |
| 宣言に Not 条件を適用 | NOT                         | 複数の演算子が含まれる宣言の前に NOT を使用する場合にはカッコをつける必要があります。 "等しくない" と同じです ([後述参照](#コレクションにおける-等しくない))                 |
| 小さい           | <  |                                                                                                                            |
| 大きい           | >                           |                                                                                                                            |
| 以下            | <= |                                                                                                                            |
| 以上            | > =                         |                                                                                                                            |
| 含まれる          | IN                          | コレクション、あるいは複数の値のうち、どれか一つの値と等しいデータを取得します。ワイルドカード (@) をサポートします。                              |

- **値** (value): コレクションの各要素のプロパティのカレント値に対して比較する値。 要素のデータ型に合致する任意の定数値の式または[**プレースホルダー**](#プレースホルダーを仕様する)であることができます。
  定数値を使用する場合、以下の原則に従う必要があります:
  - **テキスト** テキスト型の定数値の場合は単一引用符つき、あるいはなしでも渡すことができます(後述の **引用符を使用する** 参照)。 文字列中の文字列を検索する ("含まれる" クエリ) には、ワイルドカード記号 (@) を使用して検索文字列を指定します (例: "@Smith@")。 また以下のキーワードはテキスト定数においては使用できません: true, false。
  - **ブール** 型の定数値: **true** または **false** (文字の大小を区別します)
  - **数値** 型の定数値: 浮動小数点は '.' (ピリオド) で区切られます。
  - **日付** 型の定数値: "YYYY-MM-DD" フォーマット。
  - **null** 定数値: "null" キーワードを使用した場合、**null** と **undefined** プロパティの両方が検索されます。
  - IN 記号を使用したクエリの場合、*値* はコレクションか、attributePath の型に合致する、\[ ] でくくられたカンマ区切りの値である必要があります (文字列においては、`"` の記号は `\` でエスケープする必要があります)。

- **論理演算子**: 複数の条件をクエリ内で結合させるのに使用します(任意)。 以下の論理演算子のいずれか一つを使用できます (名前あるいは記号のどちらかを渡します):

| 結合  | 記号                                                                     |
| --- | ---------------------------------------------------------------------- |
| AND | &, &&, and |
| OR  | \|,\|\|, or                                                            |

#### 引用符を使用する

クエリ内で引用符を使用する場合、クエリ内においては単一引用符 ' ' を使用し、クエリ全体をくくるには二重引用符 " " を使用します。クオートを混同するとエラーが返されます。 例:

```4d
"employee.name = 'smith' AND employee.firstname = 'john'"
```

> 単一引用符 (') は、クエリ文字列を分解してしまうため、検索値としてはサポートされていません。 たとえば、"comp.name = 'John's pizza' " はエラーを生成します。 単一引用符を含む値を検索するには、プレースホルダーを使用します (後述参照)。

#### カッコを使用する

クエリ内でカッコを使用すると、計算に優先順位をつけることができます。 たとえば、以下のようにクエリを整理することができます:

```4d
"(employee.age >= 30 OR employee.age <= 65) AND (employee.salary <= 10000 OR employee.status = 'Manager')"
```

#### プレースホルダーを使用する

4D では、*queryString* 引数内の *propertyPath* および *値 (value)* にプレースホルダーを使用することができます。 プレースホルダーとは、クエリ文字列に挿入するパラメーターで、クエリ文字列が評価される際に他の値で置き換えられるものです。 プレースホルダーの値はクエリ開始時に一度だけ評価されます。 各要素に対して毎回評価されるわけではありません。

プレースホルダーには二つの種類があります。**インデックスプレースホルダー** および **命名プレースホルダー** です。

- **インデックスプレースホルダー**: *queryString* に `:paramIndex` (例 :1, :2...)  という形式でパラメーターが挿入され、それに対応する値は後に続く *value* 引数が提供します。 最大で 128個の *value* 引数を渡すことができます。

例:

```4d
$c:=$myCol.query(":1=:2";"city";"Chicago")
```

- **命名プレースホルダー**: パラメーターは `:paramName` (例: myparam など) という形で挿入され、その値は *querySettings* 引数の "attributes" または "parameters" オブジェクトで提供されます。

例:

```4d
$o.attributes:={att:"city"}
$o.parameters:={name:"Chicago")
$c:=$myCol.query(":att=:name";$o)
```

*queryString* には、すべての種類の引数を混ぜて渡すことができます。 *queryString* 引数は、*propertyPath* と *値* に以下のものを含めることができます:

- 定数値 (プレースホルダーを使用しない)
- インデックスプレースホルダーや命名プレースホルダー

以下の理由から、クエリでのプレースホルダーの使用が **推奨されます**:

1. 悪意あるコードの挿入を防ぎます: ユーザーによって値が代入された変数をクエリ文字列として直接使用した場合、余計なクエリ引数を入力することでユーザーがクエリ条件を変更する可能性があります。 たとえば、以下のようなクエリ文字列を考えます:

```4d
 $vquery:="status = 'public' & name = "+myname // ユーザーが自分の名前を入力します
 $result:=$col.query($vquery)
```

非公開のデータがフィルタリングされているため、このクエリは一見安全なように見えます。 しかしながら、もしユーザーが *myname* に *smith OR status='private'* のような入力をした場合、クエリ文字列は解釈時に変更され、非公開データも返してしまう可能性があります。

プレースホルダーを使用した場合、セキュリティ条件を上書きすることは不可能です:

```4d
 $result:=$col.query("status='public' & name=:1";myname)
```

この場合、ユーザーが *myname* エリアに *smith OR status='private'* と入力した場合でも、それはクエリ文字列とはみなされず、値として渡されるだけです。 "smith OR status='private' " という名前の人物を検索したところで、結果は失敗に終わるだけです。

2. フォーマットや文字の問題を心配する必要がありません。これは、*propertyPath* や *値* がたとえば "."、"[' ...などの英数字でない文字を格納している可能性がある場合にとくに有用です。

3. クエリに変数や式を使用することができます。 例:

```4d
$result:=$col.query("address.city = :1 & name =:2";$city;$myVar+"@")
$result2:=$col.query("company.name = :1";"John's Pizzas")
```

> *値 (value)* 引数内での [**コレクション参照** または **オブジェクト参照**](#オブジェクト参照やコレクション参照で検索する) の使用は、このシンタックスではサポートされていません。 [*querySettings* 引数](#querysettings-引数)を使用する必要があります。

#### null値を検索する

null値を検索する場合、プレースホルダーシンタックスは使用できません。 なぜならクエリエンジンは null を予期せぬ比較値としてみなすからです。 たとえば、以下のクエリを実行した場合:

```4d
$vSingles:=$colPersons.query("spouse = :1";Null) // 機能しません
```

この場合 4D は null値を、引数の評価 (別のクエリから渡された属性など) に起因するエラーと解釈するため、期待した結果は得られません。 このようなクエリをおこなうには、直接的なシンタックスを使用する必要があります:

```4d
$vSingles:=$colPersons.query("spouse = null") // 正しいシンタックス
```

#### オブジェクト参照やコレクション参照で検索する

*値 (value)* 引数にオブジェクト参照またはコレクション参照を渡して、コレクションをクエリすることができます。 クエリは、そのオブジェクトまたはコレクションの **インスタンス** と同じ参照先を持つオブジェクト要素を検索対象のコレクションにおいて探します。

次の比較演算子がサポートされています:

| 比較    | 記号    |
| ----- | ----- |
| 等しい   | =, == |
| 等しくない | #, != |

オブジェクトまたはコレクション参照を使用してクエリをビルドするには、*querySettings* 引数のシンタックスを使用する必要があります。 オブジェクト参照と比較する例:

```4d
var $o1:={a: 1}
var $o2:={a: 1} // 同じオブジェクト、ただし別の参照
var $o3:=$o1 // 同じオブジェクト、かつ同じ参照

var $col; $colResult : Collection

$col:=[{o: $o1}; {o: $o2}; {o: $o3}]
$colResult:=$col.query("o = :v"; {parameters: {v: $o3}})
	// $colResult.length=2
	// $colResult[0].o=$o1 は true
	// $colResult[1].o=$o1 は true

```

コレクション参照と比較する例:

```4d

$c1:=[1; 2; 3]
$c2:=[1; 2; 3] // 同じコレクション、ただし別の参照
$c3:=$c1 // 同じコレクション、かつ同じ参照

$col:=[{c: $c1}; {c: $c2}; {c: $c3}]
$col2:=$col.query("c = :v"; {parameters: {v: $c3}})
	// $col2.length=2
	// $col2[0].c=$c1 は true
	// $col2[1].c=$c1 は true

```

#### querySettings 引数

*querySettings* 引数には、クエリのプレースホルダーをオブジェクトとして格納するオブジェクトを渡すことができます。 以下のプロパティがサポートされています:

| プロパティ      | 型      | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| parameters | Object | *queryString* に **値の命名プレースホルダー** を使用した場合に渡すオブジェクト。 値は、プロパティ/値のペアで表現されます。プロパティは、*queryString* に値の代わりに挿入されたプレースホルダー名 (":placeholder"など) で、値は、実際に比較される値です。 インデックスプレースホルダー (value引数として値を直接渡す方法) と命名プレースホルダーは、同じクエリ内で同時に使用することができます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| attributes | Object | *queryString* に **属性パスの命名プレースホルダー** を使用した場合に渡すオブジェクト。 属性パスは、プロパティ/値のペアで表現されます。プロパティは、*queryString* に属性パスの代わりに挿入されたプレースホルダー名 (":placeholder"など) で、値は、属性パスを表す文字列または文字列のコレクションです。 値には、コレクションのオブジェクト要素のプロパティへの属性パスを指定することができます。<table><tr><th>タイプ</th><th>説明</th></tr><tr><td>String</td><td>ドット記法を使用して表現された attributePath (例: "name" または "user.address.zipCode")</td></tr><tr><td>String の Collection</td><td>コレクションの各要素が attributePath の階層を表します (例: ["name"] または ["user","address","zipCode"])。 コレクションを使用することで、ドット記法に準じていない名前の属性に対してもクエリすることができます (例: ["4Dv17.1","en/fr"])。</td></tr></table>インデックスプレースホルダー (*value* 引数として値を直接渡す方法) と命名プレースホルダーは、同じクエリ内で同時に使用することができます。 |

> [**コレクション参照**または**オブジェクト参照**](#オブジェクト参照やコレクション参照で検索する) を使用してコレクションをクエリする場合には、この引数を使用する必要があります。

#### 例題 1

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.query("name = :1";"Cleveland") //$c2=[{name:Cleveland,zc:35049}]
 $c3:=$c.query("zc > 35040") //$c3=[{name:Cleveland,zc:35049},{name:Clanton,zc:35046},{name:Clanton,zc:35045}]
```

#### 例題 2

```4d
 var $c : Collection
 $c:=New collection
 $c.push(New object("name";"Smith";"dateHired";!22-05-2002!;"age";45))
 $c.push(New object("name";"Wesson";"dateHired";!30-11-2017!))
 $c.push(New object("name";"Winch";"dateHired";!16-05-2018!;"age";36))

 $c.push(New object("name";"Sterling";"dateHired";!10-5-1999!;"age";Null))
 $c.push(New object("name";"Mark";"dateHired";!01-01-2002!))
```

上記のオブジェクトに対し、以下のクエリは名前に "in" が含まれている人物を返します:

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

以下のクエリは、変数に格納した文字列 (ユーザーが入力した文字列など) から名前が始まらない人物を返します:

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

以下のクエリは、年齢が不明な (プロパティが null あるいは undefined に設定されている) 人物を返します:

```4d
 $col:=$c.query("age=null") // "null" ではプレースホルダーは使えません
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

以下のクエリは、採用から90日を超えている人物を返します:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  // 今日が 01/10/2018 であれば $col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

#### 例題 3

日付のクエリ:

```4d

$entitySelection:=ds.Employee.query("birthDate > :1";"1970-01-01")
$entitySelection:=ds.Employee.query("birthDate <= :1";Current date-10950)
```

:::info

追加のクエリ例については、[`dataClass.query()`](dataclassClass.md#query) を参照してください。

:::

<!-- END REF -->

<!-- REF collection.reduce().Desc -->

## .reduce()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.reduce().Syntax -->**.reduce**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduce**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduce().Params -->

| 引数         | 型                                               |                             | 説明                                                |
| ---------- | ----------------------------------------------- | :-------------------------: | ------------------------------------------------- |
| formula    | 4D.Function                     |              ->             | フォーミュラオブジェクト                                      |
| methodName | Text                                            |              ->             | メソッド名                                             |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | *formula* または *methodName* の最初の呼び出しに最初の引数として使用する値 |
| param      | 式                                               |              ->             | 渡す引数                                              |
| 戻り値        | Text, Number, Object, Collection, Date, Boolean | <- | アキュムレーター値の結果                                      |

<!-- END REF -->

#### 説明

`.reduce()` 関数は、<!-- REF #collection.reduce().Summary -->*formula* または *methodName* コールバックをアキュムレーターおよびコレクションの各要素に (左から右へ) 適用して、単一の値にまとめます<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックはコレクションの各要素を受け取り、任意の処理を実行して、結果を *$1.accumulator* に蓄積します。この値は最終的に *$1.value* に返されます。

*initValue* に引数を渡すことで、アキュムレーターを初期化することができます。 省略された場合は、*$1.accumulator* は *Undefined* から開始されます。

コールバックは以下の引数を受け取ります:

- *$1.value*: 処理する要素の値
- in *$2: param*
- in *$N...*: *paramN...*

コールバックは以下のパラメーターを設定します:

- *$1.accumulator*: メソッドで変更する値。*initValue* によって初期化します。
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

#### 例題 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduce(Formula($1.accumulator*=$1.value); 1)  // 戻り値は 86400 です
```

#### 例題 2

複数のコレクション要素を単一の値にまとめます:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce(Formula(Flatten)) //$r=[0,1,2,3,4,5,6,7]
```

***Flatten*** メソッドのコードは以下のとおりです:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.reduceRight().Desc -->

## .reduceRight()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #collection.reduceRight().Syntax -->**.reduceRight**( *formula* : 4D.Function { ; *initValue* : any { ; *...param* : expression }} ) : any<br/>**.reduceRight**( *methodName* : Text { ; *initValue* : any { ; *...param* : expression }} ) : any <!-- END REF -->

<!-- REF #collection.reduceRight().Params -->

| 引数         | 型                                               |                             | 説明                                                |
| ---------- | ----------------------------------------------- | :-------------------------: | ------------------------------------------------- |
| formula    | 4D.Function                     |              ->             | フォーミュラオブジェクト                                      |
| methodName | Text                                            |              ->             | メソッド名                                             |
| initValue  | Text, Number, Object, Collection, Date, Boolean |              ->             | *formula* または *methodName* の最初の呼び出しに最初の引数として使用する値 |
| param      | 式                                               |              ->             | 渡す引数                                              |
| 戻り値        | Text, Number, Object, Collection, Date, Boolean | <- | アキュムレーター値の結果                                      |

<!-- END REF -->

#### 説明

`.reduceRight()` 関数は、<!-- REF #collection.reduceRight().Summary -->*formula* または *methodName* コールバックをアキュムレーターおよびコレクションの各要素に (右から左へ) 適用して、単一の値にまとめます<!-- END REF -->。

> このコマンドは、元のコレクションを変更しません。

次のいずれかを使用して、コレクション要素を評価するために実行されるコールバックを指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックはコレクションの各要素を受け取り、任意の処理を実行して、結果を *$1.accumulator* に蓄積します。この値は最終的に *$1.value* に返されます。

*initValue* に引数を渡すことで、アキュムレーターを初期化することができます。 省略された場合は、*$1.accumulator* は *Undefined* から開始されます。

コールバックは以下の引数を受け取ります:

- *$1.value*: 処理する要素の値
- in *$2: param*
- in *$N...*: *paramN...*

コールバックは以下のパラメーターを設定します:

- *$1.accumulator*: メソッドで変更する値。*initValue* によって初期化します。
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

#### 例題 1

```4d
var $c : Collection
$c:=New collection(5;3;5;1;3;4;4;6;2;2)
$r:=$c.reduceRight(Formula($1.accumulator*=$1.value); 1)  // 戻り値は 86400 です

```

#### 例題 2

複数のコレクション要素を単一の値にまとめます:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduceRight(Formula(Flatten)) //$r=[6,7,4,5,2,3,0,1]
```

***Flatten*** メソッドのコードは以下のとおりです:

```4d
	//Flatten プロジェクトメソッド
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->

<!-- REF collection.remove().Desc -->

## .remove()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.remove().Syntax -->**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->

<!-- REF #collection.remove().Params -->

| 引数      | 型          |                             | 説明                   |
| ------- | ---------- | :-------------------------: | -------------------- |
| index   | Integer    |              ->             | 削除を開始する要素の位置         |
| howMany | Integer    |              ->             | 削除する要素の数、省略時は 1要素を削除 |
| 戻り値     | Collection | <- | 要素が削除された元のコレクション     |

<!-- END REF -->

#### 説明

`.remove()` 関数は、<!-- REF #collection.remove().Summary -->*index* で指定した位置から一つまた複数のコレクション要素を削除し、変更されたコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

*index* パラメーターには、削除するコレクション要素の位置を渡します。

> **警告**: コレクション要素は 0 起点である点に注意してください。 指定した *index* がコレクションの length より大きい場合、実際の開始インデックスはコレクションの length に設定されます。

- *index* < 0 の場合、*index:=index+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
- 計算結果も負の値である場合、*index* は 0 に設定されます。
- 計算結果がコレクションの length より大きい場合には、*index* は length に設定されます。

*howMany* には、*index* の位置から削除する要素の数を渡します。 *howMany* が省略された場合、1つの要素のみが削除されます。

空のコレクションから要素を削除しようとした場合、関数は何もしません (エラーは生成されません)。

#### 例題

```4d
 var $col : Collection
 $col:=New collection("a";"b";"c";"d";"e";"f";"g";"h")
 $col.remove(3) // $col=["a","b","c","e","f","g","h"]
 $col.remove(3;2) // $col=["a","b","c","g","h"]
 $col.remove(-8;1) // $col=["b","c","g","h"]
 $col.remove(-3;1) // $col=["b","g","h"]
```

<!-- END REF -->

<!-- REF collection.resize().Desc -->

## .resize()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.resize().Syntax -->**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->

| 引数           | 型                                               |                             | 説明              |
| ------------ | ----------------------------------------------- | :-------------------------: | --------------- |
| size         | Integer                                         |              ->             | コレクションの新しいサイズ   |
| defaultValue | Number, Text, Object, Collection, Date, Boolean |              ->             | 新規要素のデフォルト値     |
| 戻り値          | Collection                                      | <- | リサイズされた元のコレクション |

<!-- END REF -->

#### 説明

`.resize()` 関数は、<!-- REF #collection.resize().Summary -->コレクションの length を引数で指定されたサイズに設定し、変更された元のコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

- *size* < length の場合、余分な要素はコレクションから削除されます。
- *size* > length の場合、不足分の要素がコレクションに追加されます。

デフォルトで、新規要素には **null** 値が格納されます。 *defaultValue* に引数を渡すことで、新規要素の値を指定することができます。

#### 例題

```4d
 var $c : Collection
 $c:=New collection
 $c.resize(10) // $c=[null,null,null,null,null,null,null,null,null,null]

 $c:=New collection
 $c.resize(10;0) // $c=[0,0,0,0,0,0,0,0,0,0]

 $c:=New collection(1;2;3;4;5)
 $c.resize(10;New object("name";"X")) //$c=[1,2,3,4,5,{name:X},{name:X},{name:X},{name:X},{name:X}]

 $c:=New collection(1;2;3;4;5)
 $c.resize(2) //$c=[1,2]

```

<!-- END REF -->

<!-- REF collection.reverse().Desc -->

## .reverse()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.reverse().Syntax -->**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->

| 引数  | 型          |                             | 説明                  |
| --- | ---------- | :-------------------------: | ------------------- |
| 戻り値 | Collection | <- | 逆順に要素を格納した新しいコレクション |

<!-- END REF -->

#### 説明

`.reverse()` 関数は、<!-- REF #collection.reverse().Summary -->全要素が逆順になった、コレクションのディープ・コピーを返します<!-- END REF -->。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

#### 例題

```4d
 var $c; $c2 : Collection
 $c:=New collection(1;3;5;2;4;6)
 $c2:=$c.reverse() //$c2=[6,4,2,5,3,1]
```

<!-- END REF -->

<!-- REF collection.shift().Desc -->

## .shift()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.shift().Syntax -->**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->

| 引数  | 型   |                             | 説明          |
| --- | --- | :-------------------------: | ----------- |
| 戻り値 | any | <- | コレクションの先頭要素 |

<!-- END REF -->

#### 説明

`.shift()` 関数は、<!-- REF #collection.shift().Summary -->コレクションの先頭要素を取り除き、それを戻り値として返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

コレクションが空の場合、 関数はなにもしません。

#### 例題

```4d
 var $c : Collection
 var $val : Variant
 $c:=New collection(1;2;4;5;6;7;8)
 $val:=$c.shift()
  // $val=1
  // $c=[2,4,5,6,7,8]
```

<!-- END REF -->

<!-- REF collection.slice().Desc -->

## .slice()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->

| 引数        | 型          |                             | 説明                                              |
| --------- | ---------- | :-------------------------: | ----------------------------------------------- |
| startFrom | Integer    |              ->             | 開始インデックス (含まれる)              |
| end       | Integer    |              ->             | 終了インデックス (含まれない)             |
| 戻り値       | Collection | <- | 抜粋要素を格納した新しいコレクション(シャロウ・コピー) |

<!-- END REF -->

#### 説明

`.slice()` 関数は、*startFrom* の位置 (含まれる) から *end* の位置 (含まれない) までの<!-- REF #collection.slice().Summary -->
コレクションの一部を、新しいコレクションの中に返します<!-- END REF -->。 この関数は *シャロウ・コピー* を返します。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。

> このコマンドは、元のコレクションを変更しません。

戻り値のコレクションには、*startFrom* 引数で指定した要素 (含まれる) から、*end* 引数で指定した要素まで (含まれない) の全要素が格納されます。 *startFrom* 引数のみを渡した場合には、*startFrom* 引数で指定した要素から最後の要素までが戻り値のコレクションに格納されます。

- *startFrom* < 0 の場合、*startFrom:=startFrom+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
- 再計算された値も負の値だった場合、*startFrom* は 0 に設定されます。
- *end* < 0 の場合、それは *end:=end+length* として再計算されます。
- 渡された値、あるいは再計算された値が *end* < *startFrom* の場合、関数はなにもしません。

#### 例題

```4d
 var $c; $nc : Collection
 $c:=New collection(1;2;3;4;5)
 $nc:=$c.slice(0;3) //$nc=[1,2,3]
 $nc:=$c.slice(3) //$nc=[4,5]
 $nc:=$c.slice(1;-1) //$nc=[2,3,4]
 $nc:=$c.slice(-3;-2) //$nc=[3]
```

<!-- END REF -->

<!-- REF collection.some().Desc -->

## .some()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.some().Syntax -->**.some**( { *startFrom* : Integer ; } *formula* : 4D.Function { ; *...param* : any } ) : Boolean<br/>**.some**( { *startFrom* : Integer ; } *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.some().Params -->

| 引数 | 型 |     | 説明 |
| -- | - | :-: | -- |

\| startFrom | Integer | -> | テストを開始するインデックス |
\| formula | 4D.Function | -> | フォーミュラオブジェクト |
\| methodName | Text | -> | メソッド名 |
\| param | any | -> | 渡す引数 |
\| 戻り値 | Boolean | <- | 少なくとも一つの要素がテストをパスすれば true |

<!-- END REF -->

#### 説明

.some() 関数は、<!-- REF #collection.some().Summary -->
少なくとも一つのコレクション要素が、*formula* または *methodName* のコードで実装されたテストにパスした場合に **true** を返します<!-- END REF -->。

次のいずれかを使用して、コレクション要素を評価するために実行されるコード (コールバック) を指定します:

- *formula* (推奨シンタックス)、関数やプロジェクトメソッドを含むあらゆる実行可能な式を格納できる [Formula オブジェクト](FunctionClass.md)。
- または *methodName*、プロジェクトメソッドの名前 (テキスト)。

コールバックには、*param* (任意) に指定した引数が渡されます。 引数の有無にかかわらず、コールバックは任意のテストを実行でき、テストを満たす要素に対しては **true** を返さなくてはなりません。 コールバックは最初のパラメーター ($1) に `Object` を受け取ります。

コールバックは以下の引数を受け取ります:

- *$1.value*: 処理する要素の値
- in *$2: param*
- in *$N...*: *paramN...*

また、コールバックは以下のパラメーターを設定できます:

- (メソッドを使用する場合は必須) *$1.result* (ブール): 要素の値の評価が成功した場合には **true** 、それ以外は **false**
- *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

`.some()` 関数は、true を返す最初のコレクション要素を発見すると、コールバックの呼び出しをやめて **true** を返します。

デフォルトでは、`.some()` はコレクション全体をテストします。 オプションとして、*startFrom* 引数を渡すことで、テストを開始するコレクション要素のインデックスを指定することができます。

- *startFrom* がコレクションの length 以上だった場合、**false** が返されます。これはコレクションがテストされていないことを意味します。

- *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます。

- *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

#### 例題

コレクション要素のうち、0以上の値が少なくとも 1つあるかどうかを確認します。

```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) // $b=false
 $c.push(1)
 $b:=$c.some(Formula($1.value>0)) // $b=true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some(Formula($1.value>0)) //$b=true
 $b:=$c.some(1;Formula($1.value>0)) //$b=false
```

<!-- END REF -->

<!-- REF collection.sort().Desc -->

## .sort()

<details><summary>履歴</summary>

| リリース   | 内容          |
| ------ | ----------- |
| 19 R6  | フォーミュラをサポート |
| v16 R6 | 追加          |

</details>

<!-- REF #collection.sort().Syntax -->**.sort**() : Collection<br/>**.sort**( *formula* : 4D.Function { ; *...extraParam* : any } ) : Collection<br/>**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.sort().Params -->

| 引数         | 型                           |                             | 説明               |
| ---------- | --------------------------- | :-------------------------: | ---------------- |
| formula    | 4D.Function |              ->             | フォーミュラオブジェクト     |
| methodName | Text                        |              ->             | メソッド名            |
| extraParam | any                         |              ->             | methodName に渡す引数 |
| 戻り値        | Collection                  | <- | 並べ替えられた元のコレクション  |

<!-- END REF -->

#### 説明

`.sort()` 関数は、 <!-- REF #collection.sort().Summary -->コレクションの要素を並べ替え、並べ替えられた元のコレクションを返します<!-- END REF --> 。

> このコマンドは、元のコレクションを変更します。

引数もなしに呼び出された場合、`.sort()` はスカラー値 (数値、テキスト、日付、ブール) のみを並べ替えます。 デフォルトでは、要素はそれぞれの型に応じて昇順で並べ替えられます。 コレクションが異なる型の要素を格納している場合、それらはまず型ごとにグループ分けされ、そのあとで並べ替えられます。 型は以下の順番で返されます:

1. null
2. ブール
3. 文字列
4. 数値
5. オブジェクト
6. コレクション
7. 日付

カスタマイズされた順番や、型に関係なくコレクション要素を並べ替えたい場合には、並べ替え順を定義するコールバックを *formula* ([Formula オブジェクト](FunctionClass.md)) または *methodName* (テキスト) に渡します。 戻り値は、二つの要素の相対的な順番を示すブール値です。*$1.value* が *$1.value2* より小さい場合に **true** を、*$1.value* が *$1.value2* より大きい場合に **false** を返します。 必要に応じて、 追加の引数をコールバックに渡せます。

コールバックは以下の引数を受け取ります:

- $1 (オブジェクト):
  - *$1.value* (任意の型): 比較する一つ目の要素の値
  - *$1.value2* (任意の型): 比較する二つ目の要素の値
- $2...$N (任意の型): 追加の引数

メソッドを使用する場合、以下の引数を設定する必要があります:

- *$1.result* (ブール): *$1.value < $1.value2* の場合は **true**、それ以外は **false**。

#### 例題 1

```4d
 var $col; $col2 : Collection
 $col:=New collection("Tom";5;"Mary";3;"Henry";1;"Jane";4;"Artie";6;"Chip";2)
 $col2:=$col.sort() // $col2=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
  // $col=["Artie","Chip","Henry","Jane","Mary","Tom",1,2,3,4,5,6]
```

#### 例題 2

```4d
 var $col; $col2 : Collection
 $col:=New collection(10;20)
 $col2:=$col.push(5;3;1;4;6;2).sort() //$col2=[1,2,3,4,5,6,10,20]
```

#### 例題 3

```4d
var $col; $col2; $col3 : Collection
$col:=New collection(33;4;66;1111;222)
$col2:=$col.sort() // 数値順: [4,33,66,222,1111]
$col3:=$col.sort(Formula(String($1.value)<String($1.value2))) // アルファベット順: [1111,222,33,4,66]
```

<!-- END REF -->

<!-- REF collection.sum().Desc -->

## .sum()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.sum().Syntax -->**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->

| 引数           | 型    |                             | 説明                    |
| ------------ | ---- | :-------------------------: | --------------------- |
| propertyPath | Text |              ->             | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | Real | <- | コレクション要素の値の合計         |

<!-- END REF -->

#### 説明

`.sum()` 関数は、<!-- REF #collection.sum().Summary -->コレクションインスタンスの全要素の値を合計して返します<!-- END REF -->。

計算の対象となるのは数値のみです (他の型の要素は無視されます)。

コレクションがオブジェクトを格納している場合には、計算するオブジェクトプロパティのパスを *propertyPath* に渡します。

`.sum()` は以下の場合には 0 を返します:

- コレクションが空の場合
- コレクションに数値が含まれていない場合
- *propertyPath* 引数で指定したパスがコレクション内で見つからない場合

#### 例題 1

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection(10;20;"Monday";True;2)
 $vSum:=$col.sum() //32
```

#### 例題 2

```4d
 var $col : Collection
 var $vSum : Real
 $col:=New collection
 $col.push(New object("name";"Smith";"salary";10000))
 $col.push(New object("name";"Wesson";"salary";50000))
 $col.push(New object("name";"Gross";"salary";10500,5))
 $vSum:=$col.sum("salary") //$vSum=70500,5
```

<!-- END REF -->

<!-- REF collection.unshift().Desc -->

## .unshift()

<details><summary>履歴</summary>

| リリース   | 内容 |
| ------ | -- |
| v16 R6 | 追加 |

</details>

<!-- REF #collection.unshift().Syntax -->**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->

| 引数    | 型                                      |                             | 説明               |
| ----- | -------------------------------------- | :-------------------------: | ---------------- |
| value | Text, Number, Object, Collection, Date |              ->             | コレクションの先頭に挿入する値  |
| 戻り値   | Real                                   | <- | 要素の追加された元のコレクション |
|       |                                        |                             |                  |

<!-- END REF -->

#### 説明

`.unshift()` 関数は、<!-- REF #collection.unshift().Summary -->一つ以上の *value* 引数をコレクションインスタンスの先頭に挿入し、変更された元のコレクションを返します<!-- END REF -->。

> このコマンドは、元のコレクションを変更します。

複数の値が渡された場合、それらは一度に挿入されます。つまり、引数の順番と同じ順番で変更後のコレクションに格納されます。

#### 例題

```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->
