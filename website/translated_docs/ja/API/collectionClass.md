---
id: collectionClass
title: Collection
---


Collectionクラスは [コレクション](Concepts/dt_collection.md) 型の変数を扱います。

コレクションは次のように初期化します:

|                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.New collection.Syntax -->](#new-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New collection.Summary -->|
| [<!-- INCLUDE #_command_.New shared collection.Syntax -->](#new-shared-collection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.New shared collection.Summary -->|


### 例題

```4d
 var $colVar : Collection // コレクション型の 4D変数の宣言
 $colVar:=New collection // コレクションの初期化と 4D変数への代入
```


### 概要


|                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #collection.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.average().Summary -->|
| [<!-- INCLUDE #collection.clear().Syntax -->](#clear)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.clear().Summary --> |
| [<!-- INCLUDE #collection.combine().Syntax -->](#combine)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.combine().Summary --> |
| [<!-- INCLUDE #collection.concat().Syntax -->](#concat)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.concat().Summary -->|
| [<!-- INCLUDE #collection.copy().Syntax -->](#copy)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.copy().Summary -->|
| [<!-- INCLUDE #collection.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.count().Summary -->|
| [<!-- INCLUDE #collection.countValues().Syntax -->](#countvalues)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.countValues().Summary -->|
| [<!-- INCLUDE #collection.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.distinct().Summary -->|
| [<!-- INCLUDE #collection.equal().Syntax -->](#equal)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.equal().Summary -->|
| [<!-- INCLUDE #collection.every().Syntax -->](#every)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.every().Summary -->|
| [<!-- INCLUDE #collection.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.extract().Summary -->|
| [<!-- INCLUDE #collection.fill().Syntax -->](#fill)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.fill().Summary -->|
| [<!-- INCLUDE #collection.filter().Syntax -->](#filter)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.filter().Summary -->|
| [<!-- INCLUDE #collection.find().Syntax -->](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.find().Summary -->|
| [<!-- INCLUDE #collection.findIndex().Syntax -->](#find)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.findIndex().Summary -->|
| [<!-- INCLUDE #collection.indexOf().Syntax -->](#indexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indexOf().Summary -->|
| [<!-- INCLUDE #collection.indices().Syntax -->](#indices)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.indices().Summary -->|
| [<!-- INCLUDE #collection.insert().Syntax -->](#insert)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.insert().Summary -->|
| [<!-- INCLUDE #collection.join().Syntax -->](#join)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.join().Summary -->|
| [<!-- INCLUDE #collection.lastIndexOf().Syntax -->](#lastindexof)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.lastIndexOf().Summary -->|
| [<!-- INCLUDE #collection.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.length.Summary -->|
| [<!-- INCLUDE #collection.map().Syntax -->](#map)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.map().Summary -->|
| [<!-- INCLUDE #collection.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.max().Summary -->|
| [<!-- INCLUDE #collection.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.min().Summary -->|
| [<!-- INCLUDE #collection.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderBy().Summary -->|
| [<!-- INCLUDE #collection.orderByMethod().Syntax -->](#orderbymethod)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.orderByMethod().Summary -->|
| [<!-- INCLUDE #collection.pop().Syntax -->](#pop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.pop().Summary -->|
| [<!-- INCLUDE #collection.push().Syntax -->](#push)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.push().Summary -->|
| [<!-- INCLUDE #collection.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.query().Summary -->|
| [<!-- INCLUDE #collection.reduce().Syntax -->](#reduce)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reduce().Summary -->|
| [<!-- INCLUDE #collection.remove().Syntax -->](#remove)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.remove().Summary -->|
| [<!-- INCLUDE #collection.resize().Syntax -->](#resize)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.resize().Summary -->|
| [<!-- INCLUDE #collection.reverse().Syntax -->](#reverse)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.reverse().Summary -->|
| [<!-- INCLUDE #collection.shift().Syntax -->](#shift)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.shift().Summary -->|
| [<!-- INCLUDE #collection.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.slice().Summary -->|
| [<!-- INCLUDE #collection.some().Syntax -->](#some)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.some().Summary -->|
| [<!-- INCLUDE #collection.sort().Syntax -->](#sort)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sort().Summary -->|
| [<!-- INCLUDE #collection.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.sum().Summary -->|
| [<!-- INCLUDE #collection.unshift().Syntax -->](#unshift)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #collection.unshift().Summary -->|



## New collection

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R4 | 追加 |
</details>

<!-- REF #_command_.New collection.Syntax -->
**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New collection.Params -->
| 参照    | タイプ                                         |    | 説明        |
| ----- | ------------------------------------------- |:--:| --------- |
| value | 数値、テキスト、日付、時間、ブール、オブジェクト、コレクション、ピクチャー、ポインター | -> | コレクションの値  |
| 戻り値   | コレクション                                      | <- | 新しいコレクション |
<!-- END REF -->


#### 説明

`New collection` コマンドは、 <!-- REF #_command_.New collection.Summary --> 空の、あるいは値の入った新規コレクションを作成し、その参照を返します<!-- END REF --> 。

引数を渡さなかった場合、`New collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。
> `var : Collection` や `C_COLLECTION` ステートメントはコレクション型の変数を宣言しますが、コレクション自体は作成しないという点に注意してください。

任意で、一つ以上の *value* 引数を渡すことで、あらかじめ値の入った新しいコレクションを作成することができます。

または、あとから代入によって要素を一つずつ追加・編集していくことができます。 たとえば:

```4d
 myCol[10]:="My new element"
```

コレクションの最終要素を超える要素番号 (インデックス) を指定した場合、コレクションは自動的にリサイズされ、合い間の要素にはすべて null 値が割り当てられらます。

サポートされている型 (数値、テキスト、日付、ピクチャー、ポインター、オブジェクト、コレクション等) であれば、個数に制限なく値を渡すことができます。 配列とは異なり、コレクションでは異なる型のデータを混ぜることができます。

ただし以下の変換問題については注意する必要があります:

*   渡されたポインターは、そのまま保存されます。ポインターは `JSON Stringify` コマンドを使用することで評価されます。
*   日付は、"dates inside objects" データベース設定に応じて、"yyyy-mm-dd" という日付、または "YYYY-MM-DDTHH:mm:ss.SSSZ" というフォーマットの文字列で保存されます。 コレクションに保存する前に 4D日付をテキストに変換した場合、プログラムはデフォルトでローカルのタイムゾーンを使用します。 このふるまいは `SET DATABASE PARAMETER` コマンドで `Dates inside objects` セレクターを使用することで変更可能です。
*   時間を渡した場合、それはミリ秒の数 (実数) として保存されます。

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




## New shared collection

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #_command_.New shared collection.Syntax -->
**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!-- REF #_command_.New shared collection.Params -->
| 参照    | タイプ                                 |    | 説明          |
| ----- | ----------------------------------- |:--:| ----------- |
| value | 数値、テキスト、日付、時間、ブール、共有オブジェクト、共有コレクション | -> | 共有コレクションの値  |
| 戻り値   | コレクション                              | <- | 新規の共有コレクション |
<!-- END REF -->


#### 説明

`New shared collection` コマンドは、 <!-- REF #_command_.New shared collection.Summary --> 空の、あるいは値が入った新規コレクションを作成し、その参照を返します<!-- END REF --> 。

このコレクションに要素を追加する場合には [`Use...End use`](Concepts/shared.md#useend-use) 構造でくくる必要があり、そうしない場合にはエラーが返されます。 ただし、属性の読み取りは [`Use...End use`](Concepts/shared.md#useend-use) 構造の外側でも可能です。
> 共有コレクションについての詳細は、[共有オブジェクトと共有コレクション](Concepts/shared.md) のページを参照してください。

引数を渡さない場合、`New shared collection` は空のコレクションを作成し、その参照を返します。

返された参照は、コレクション型の 4D変数に代入する必要があります。
> `var : Collection` や `C_COLLECTION` ステートメントはコレクション型の変数を宣言しますが、コレクション自体は作成しないという点に注意してください。

任意で、一つ以上の *value* 引数を渡すことで、あらかじめ値の入った新しい共有コレクションを作成することができます。 または、あとからオブジェクト記法による代入で要素を一つずつ追加・編集していくことができます (例題参照)。

共有コレクションの最終要素を超える要素番号 (インデックス) を指定した場合、共有コレクションは自動的にリサイズされ、合い間の要素にはすべて null 値が割り当てられらます。

以下のサポートされる型であれば、いくつでも値を渡すことができます:

*   数値 (実数、倍長整数...)。 数値は常に実数として保存されます。
*   テキスト
*   ブール
*   日付
*   時間 (ミリ秒の数 (実数) として保存されます)。
*   null
*   共有オブジェクト(*)
*   共有コレクション(*)
> 標準のコレクション (非共有コレクション) とは異なり、共有コレクションはピクチャーやポインター、共有でないオブジェクトおよびコレクションはサポートしていません。

*(*) 共有オブジェクトおよびコレクションが共有コレクションに追加された場合、それらは同じロック識別子を共有します*。 この点についてのより詳細は、**4Dランゲージリファレンス** の [ロック識別子](https://doc.4d.com/4Dv18/4D/18.4/Shared-objects-and-shared-collections.300-5233766.ja.html#3648963) の章を参照してください。

#### 例題

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
``` 



<!-- REF collection.average().Desc -->
## .average()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.average().Syntax -->
**.average**( {*propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.average().Params -->
| 参照           | タイプ           |    | 説明                    |
| ------------ | ------------- |:--:| --------------------- |
| propertyPath | テキスト          | -> | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | 実数, Undefined | <- | コレクションの値の算術平均         |
<!-- END REF -->



#### 説明

`.average()` 関数は、 <!-- REF #collection.average().Summary -->コレクションインスタンス内で定義されている値の算術平均を返します<!-- END REF -->。



計算の対象となるのは数値のみです (他の型の要素は無視されます)。

コレクションがオブジェクトを格納している場合には、計算するオブジェクトプロパティのパスを *propertyPath* に渡します。

`.average()` は以下の場合には `undefined` を返します:

*   コレクションが空の場合
*   コレクションに数値が含まれていない場合
*   *propertyPath* 引数で指定したパスがコレクション内で見つからない場合


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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.clear().Syntax -->
**.clear()** : Collection<!-- END REF -->

<!-- REF #collection.clear().Params -->
| 参照  | タイプ    |    | 説明                |
| --- | ------ |:--:| ----------------- |
| 戻り値 | コレクション | <- | 全要素が削除された元のコレクション |
<!-- END REF -->


#### 説明

`.clear()` 関数は、 <!-- REF #collection.clear().Summary -->コレクションインスタンス内の全要素を削除し、空のコレクションを返します<!-- END REF -->。
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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.combine().Syntax -->
**.combine**( *col2* : Collection {; *index* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.combine().Params -->
| 参照    | タイプ    |    | 説明                            |
| ----- | ------ |:--:| ----------------------------- |
| col2  | コレクション | -> | 追加するコレクション                    |
| index | 整数     | -> | 追加要素を挿入する位置 (デフォルトは length+1) |
| 戻り値   | コレクション | <- | 追加要素を格納した元のコレクション             |
<!-- END REF -->


#### 説明

`.combine()` 関数は、 <!-- REF #collection.combine().Summary -->コレクションインスタンスの最後、あるいは *index* で指定した位置に *col2* の要素を挿入し、変更された元のコレクションを返します<!-- END REF -->。 `.insert()` 関数とは異なり、`.combine()` は *col2* の各要素を元のコレクション追加します (*col2* 自体を単一のコレクション要素としては挿入しません)。
> このコマンドは、元のコレクションを変更します。

デフォルトでは、*col2* の要素は元のコレクションの最後に追加されます。 *index* に引数を渡すことで、*col2* の要素を挿入する位置を指定することができます。
> **警告**: コレクション要素は 0 起点である点に注意してください。

*   指定した *index* がコレクションの length より大きい場合、実際の開始インデックスはコレクションの length に設定されます。
*   *index* < 0 の場合、*index:=index+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
*   計算結果も負の値である場合、*index* は 0 に設定されます。


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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.concat().Syntax -->
**.concat**( *value* : any { *;...valueN* } ) : Collection<!-- END REF -->

<!-- REF #collection.concat().Params -->
| 参照    | タイプ                                   |    | 説明                                                    |
| ----- | ------------------------------------- |:--:| ----------------------------------------------------- |
| value | 数値、テキスト、日付、時間、ブール、オブジェクト、コレクション、ピクチャー | -> | 連結する値。 *value* がコレクションの場合、コレクションの全要素が元のコレクションに追加されます。 |
| 戻り値   | コレクション                                | <- | 元のコレクションに値が追加された新規コレクション                              |
<!-- END REF -->


#### 説明

`.concat()` 関数は、 <!-- REF #collection.concat().Summary -->*value* に指定した要素を元のコレクションの最後に追加した、新しいコレクションを返します<!-- END REF -->。
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
| バージョン  | 内容                                           |
| ------ | -------------------------------------------- |
| v18 R3 | *ck shared* オプションの追加。 *groupWith* パラメーターの追加。 |
| v16 R6 | 追加                                           |
</details>

<!-- REF #collection.copy().Syntax -->
**.copy**() : Collection<br>**.copy**( *option* : Integer ) : Collection<br>**.copy**( *option* : Integer ; *groupWithCol* : Collection ) : Collection<br>**.copy**( *option* : Integer ; *groupWithObj* : Object ) : Collection<!-- END REF -->


<!-- REF #collection.copy().Params -->
| 参照           | タイプ    |    | 説明                                                                       |
| ------------ | ------ |:--:| ------------------------------------------------------------------------ |
| option       | 整数     | -> | `ck resolve pointers`: コピー前にポインターを解決する<br>`ck shared`: 共有コレクションを返す |
| groupWithCol | コレクション | -> | 結果のコレクションとグループする共有コレクション                                                 |
| groupWithObj | オブジェクト | -> | 結果のコレクションとグループする共有オブジェクト                                                 |
| 戻り値          | コレクション | <- | 元のコレクションのディープ・コピー                                                        |
<!-- END REF -->


#### 説明

`.copy()` 関数は、 <!-- REF #collection.copy().Summary --> コレクションインスタンスのディープ・コピーを返します<!-- END REF -->。***ディープ・コピー*** とは、元のコレクション内のオブジェクトやコレクションは複製されることを意味し、返されたコレクションと元のコレクションは参照を共有しないということを意味します。
> このコマンドは、元のコレクションを変更しません。

任意の *option* パラメーターには、以下のどちらか (あるいは両方) の定数を渡すことができます:

| オプション                 | 説明                                                                                                                                                                            |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ck resolve pointers` | オリジナルのコレクションがポインター型の値を格納している場合、デフォルトではコピー先のオブジェクトもポインターを格納します。 しかしながら、`ck resolve pointers` 定数を渡すことで、コピー時にポインターを解決することができます。 この場合、コレクション内の各ポインターはコピー時に解決され、解決済みの値が使用されます。     |
| `ck shared`           | 共有コレクションに対して適用された場合でも、`copy()` はデフォルトで通常の (非共有の) コレクションを返します。 共有コレクションを作成するには、`ck shared` 定数を渡します。 この場合には、`groupWith` パラメーターに引数を渡して他の共有オブジェクトまたは共有コレクションに関連づけることもできます (以下参照)。 |

*groupWithCol* または *groupWithObj* 引数を渡すと、結果のコレクションを関連づけるコレクションまたはオブジェクトを指定できます。


#### 例題 1

通常の (非共有の) コレクション *$lastnames * を、共有オブジェクト *$sharedObject* 内にコピーします。 このためには、まず共有コレクション (*$sharedLastnames*) を作成する必要があります。

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

どちらも共有コレクションである *$sharedColl1* と*$sharedColl2* を結合します。 これらは異なる共有グループに所属しているため、直接結合した場合にはエラーが生成されます。 そこで、 *$sharedColl1* のコピーを作成し、*$sharedColl2* をそのコピーの共有グループ先に指定します。

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
 ALERT($col3[0].alpha+" "+$col3[1].what) // "Hello You!" を表示します
``` 


<!-- END REF -->





<!-- REF collection.count().Desc -->
## .count()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.count().Syntax -->
**.count**( { *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.count().Params -->
| 参照           | タイプ  |    | 説明                    |
| ------------ | ---- |:--:| --------------------- |
| propertyPath | テキスト | -> | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | 実数   | <- | コレクション内の要素の数          |
<!-- END REF -->


#### 説明

`.count()` 関数は、 <!-- REF #collection.count().Summary -->コレクション内の、null ではない要素の個数を返します<!-- END REF -->。

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
 $count1:=$col.count() // $count1=7
 $count2:=$col.count("name") // $count2=3

``` 

<!-- END REF -->





<!-- REF collection.countValues().Desc -->
## .countValues()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.countValues().Syntax -->
**.countValues**( *value* : any {; *propertyPath* : Text } ) : Real<!-- END REF -->


<!-- REF #collection.countValues().Params -->
| 参照           | タイプ                          |    | 説明                    |
| ------------ | ---------------------------- |:--:| --------------------- |
| value        | 数値、テキスト、日付、ブール、オブジェクト、コレクション | -> | 数える値                  |
| propertyPath | テキスト                         | -> | 計算に使用するオブジェクトプロパティのパス |
| 戻り値          | 実数                           | <- | 値の出現回数                |
<!-- END REF -->


#### 説明

`.countValues()` 関数は、 <!-- REF #collection.countValues().Summary -->`value` 引数に指定した値がコレクション内において見つかった回数を返します<!-- END REF -->。

*value* には、以下のいずれかを渡すことができます:

*   スカラー値 (テキスト、数値、ブール、日付)
*   オブジェクトあるいはコレクションの参照


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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.distinct().Syntax -->
**.distinct**( {*option* : Integer} ) : Collection<br>**.distinct**( *propertyPath* : Text {; *option* : Integer } ) : Collection<!-- END REF -->


<!-- REF #collection.distinct().Params -->
| 参照           | タイプ    |    | 説明                                                       |
| ------------ | ------ |:--:| -------------------------------------------------------- |
| option       | 整数     | -> | `ck diacritical`: アクセント等の発音区別符号を無視しない評価 (たとえば "A" # "a") |
| propertyPath | テキスト   | -> | 重複しない値を取得する属性のパス                                         |
| 戻り値          | コレクション | <- | 重複しない値のみを格納した新規コレクション                                    |
<!-- END REF -->


#### 説明

`.distinct()` 関数は、 <!-- REF #collection.distinct().Summary -->元のコレクションから重複しない (異なる) 値のみを格納した新しいコレクションを返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更しません。

返されたコレクションは自動的に並べ替えられています。 **Null** 値は返されません。

デフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。 評価の際に文字の大小を区別したり、アクセント記号を区別したい場合には、*option* に `ck diacritical` 定数を渡します。

コレクションがオブジェクトを格納している場合には、重複しない値を取得するオブジェクトプロパティのパスを *propertyPath* に渡します。



#### 例題

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push("a";"b";"c";"A";"B";"c";"b";"b")
 $c.push(New object("size";1))
 $c.push(New object("size";3))
 $c.push(New object("size";1))
 $c2:=$c.distinct() //$c2=["a","b","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct(ck diacritical) //$c2=["a","A","b","B","c",{"size":1},{"size":3},{"size":1}]
 $c2:=$c.distinct("size") //$c2=[1,3]
``` 

<!-- END REF -->





<!-- REF collection.equal().Desc -->
## .equal()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.equal().Syntax -->
**.equal**( *collection2* : Collection {; *option* : Integer } ) : Boolean<!-- END REF -->

<!-- REF #collection.equal().Params -->
| 参照          | タイプ    |    | 説明                                                       |
| ----------- | ------ |:--:| -------------------------------------------------------- |
| collection2 | コレクション | -> | 比較するコレクション                                               |
| option      | 整数     | -> | `ck diacritical`: アクセント等の発音区別符号を無視しない評価 (たとえば "A" # "a") |
| 戻り値         | ブール    | <- | コレクションが同一の場合には true、それ以外は false                          |
<!-- END REF -->


#### 説明

`.equal()` 関数は、 <!-- REF #collection.equal().Summary -->コレクションを *collection2* とディープ比較し、同一の場合には **true** を返します <!-- END REF -->。

デフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。 評価の際に文字の大小を区別したり、アクセント記号を区別したい場合には、option に `ck diacritical` 定数を渡します。
> **Null**値の要素は undefined要素と同じとはみなされません。

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.every().Syntax -->
**.every**( *methodName* : Text { ;*...param* : any } ) : Boolean<br>**.every**( *startFrom* : Integer ; *methodName* : Text { ;*...param* : any } ) : Boolean<!-- END REF -->

<!-- REF #collection.every().Params -->
| 参照         | タイプ  |    | 説明                    |
| ---------- | ---- |:--:| --------------------- |
| startFrom  | 整数   | -> | テストを開始するインデックス        |
| methodName | テキスト | -> | テストに呼び出すメソッド名         |
| param      | 混合   | -> | methodName に渡す引数      |
| 戻り値        | ブール  | <- | すべての要素がテストをパスすれば true |
<!-- END REF -->


#### 説明

`.every()` 関数は、 <!-- REF #collection.every().Summary -->コレクション内の全要素が、*methodName* に指定したメソッドで実装されたテストにパスした場合には **true** を返します<!-- END REF -->。


*methodName* には、コレクション要素の評価に使用するメソッド名を渡します。*param* には、必要に応じて引数を渡します (任意)。 *methodName* で指定したメソッドはどんなテストでも実行でき、引数はあってもなくても構いません。 このメソッドは $1 にオブジェクトを受け取り、テストをパスした要素の *$1.result* を true に設定しなければなりません。

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   *$1.value*: 評価する要素の値
*   *$2*: param
*   *$N...*: paramN...

*methodName* で指定したメソッドでは、以下の引数を設定します:

*   *$1.result* (ブール): 要素の値の評価がすべて成功した場合には **true** 、それ以外は **false**
*   *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

`.every()` 関数は、*$1.result* に **false** を返すコレクション要素を発見すると、*methodName* メソッドの呼び出しをやめて **false** を返します。

デフォルトでは、`.every()` はコレクション全体をテストします。 任意で、*startFrom* にテストを開始する要素のインデックスを渡すこともできます。

*   *startFrom* がコレクションの length 以上だった場合、**false** が返されます。これはコレクションがテストされていないことを意味します。
*   *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます(*startFrom:=startFrom+length*)。
*   *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。


#### 例題 1

```4d
var $c : Collection  
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("NumberGreaterThan0") // true を返します
$c.push(-1)
$b:=$c.every("NumberGreaterThan0") // false を返します
```

***NumberGreaterThan0*** メソッドの中身は以下のとおりです:

```4d
$1.result:=$1.value>0
```

#### 例題 2

コレクション要素がすべて実数型であるかをテストします:

```4d
var $c : Collection
var $b : Boolean
$c:=New collection
$c.push(5;3;1;4;6;2)
$b:=$c.every("TypeLookUp";Is real) //$b=true
$c:=$c.push(New object("name";"Cleveland";"zc";35049))
$c:=$c.push(New object("name";"Blountsville";"zc";35031))
$b:=$c.every("TypeLookUp";Is real) //$b=false
```

***TypeLookUp*** メソッドの中身は以下のとおりです:

```4d
#DECLARE ($toEval : Object ; $param : Integer) //$1; $2
If(Value type($toEval.value)=$param)
    $toEval.result:=True
End if
``` 

<!-- END REF -->




<!-- REF collection.extract().Desc -->
## .extract()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.extract().Syntax -->
**.extract**( *propertyPath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *propertyPath* : Text ;  *targetPath* : Text  { ;...*propertyPathN* : Text ;... *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #collection.extract().Params -->
| 参照           | タイプ    |    | 説明                                                                                              |
| ------------ | ------ |:--:| ----------------------------------------------------------------------------------------------- |
| propertyPath | テキスト   | -> | 新しいコレクションに抽出する値のオブジェクトプロパティパス                                                                   |
| targetpath   | テキスト   | -> | 抽出先のプロパティパスあるいはプロパティ名                                                                           |
| option       | 整数     | -> | `ck keep null`: 返されるコレクションに null プロパティを含めます (デフォルトでは無視されます)。 *targetPath* を渡した場合には、この引数は無視されます。 |
| 戻り値          | コレクション | <- | 抽出した値を格納した新しいコレクション                                                                             |
<!-- END REF -->


#### 説明

`.extract()` 関数は、 <!-- REF #collection.extract().Summary -->元のオブジェクトのコレクションから、*propertyPath* 引数が指定するプロパティ値を抽出し、新しいコレクションに格納して返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更しません。

戻り値のコレクションの中身は、*targetPath* 引数によります:

*   *targetPath* が省略された場合、`.extract()` は元のコレクションの *propertyPath* と同じパスを使って、新しいコレクションに値を格納します。

    デフォルトでは、*propertyPath* のパスの要素が null あるいは undefined であった場合には、その要素は無視され、返されるコレクションに格納されません。 *option* パラメーターに `ck keep null` 定数を渡すと、これらの要素は返されるコレクションに null 要素として格納されます。


*   一つ以上の *targetPath* 引数が渡された場合、`.extract()` は元のコレクションの *propertyPath* から値を抽出し、対応する *targetPath* に値を保存したオブジェクトを新しいコレクションの各要素として格納します。 Null値はそのまま保持されます (このシンタックスでは *option* に引数を渡しても無視されます)。


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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.fill().Syntax -->
**.fill**( *value* : any ) : Collection<br>**.fill**( *value* : any ;  *startFrom*  : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->



<!-- REF #collection.fill().Params -->
| 参照        | タイプ                          |    | 説明               |
| --------- | ---------------------------- |:--:| ---------------- |
| value     | 数値、テキスト、日付、ブール、オブジェクト、コレクション | -> | 代入する値            |
| startFrom | 整数                           | -> | 開始インデックス (含まれる)  |
| end       | 整数                           | -> | 終了インデックス (含まれない) |
| 戻り値       | collection                   | <- | 値が代入された元のコレクション  |
<!-- END REF -->


#### 説明

`.fill()` 関数は、 <!-- REF #collection.fill().Summary -->コレクションを *value* 引数の値で満たし、同コレクションを返します。オプションとして、*startFrom* および *end* インデックスを渡して代入開始位置および終了位置を指定することもできます<!-- END REF -->。
> このコマンドは、元のコレクションを変更します。

*   *startFrom* 引数が渡されなかった場合、*value* 引数の値はコレクションの全要素に代入されます (つまり、*startFrom*=0)。
*   *startFrom* 引数が渡され、かつ *end* 引数が省略された場合には、*value* 引数の値はコレクションの最後の要素まで設定されます (つまり、*end*=length)。
*   *startFrom* と *end* 引数が両方渡された場合には、*startFrom* から *end* までの要素に *value* が代入されます。

引数に矛盾がある場合、次のように解釈されます:

*   *startFrom* < 0 の場合、*startFrom:=startFrom+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。 再計算された値も負の値だった場合、*startFrom* は 0 に設定されます。
*   *end* < 0 の場合、それは *end:=end+length* として再計算されます。
*   渡された値、あるいは再計算された値が *end* < *startFrom* の場合、関数はなにもしません。


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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.filter().Syntax -->
**.filter**( *methodName* : Text { ; *...param* : any } ) : Collection<!-- END REF -->


<!-- REF #collection.filter().Params -->
| 参照         | タイプ    |    | 説明                                 |
| ---------- | ------ |:--:| ---------------------------------- |
| methodName | テキスト   | -> | コレクションをフィルターするために呼び出すメソッド名         |
| param      | 混合     | -> | *methodName* に渡す引数                 |
| 戻り値        | コレクション | <- | フィルターされた要素を格納した新しいコレクション(シャロウ・コピー) |
<!-- END REF -->


#### 説明

`.filter()` 関数は、 <!-- REF #collection.filter().Summary -->元のコレクション要素のうち、*methodName* パラメーターに指定したメソッドの結果が **true** になる要素をすべて格納した新しいコレクションを返します<!-- END REF -->。 この関数は ***シャロウ・コピー*** を返します。つまり、元のコレクションにオブジェクト要素やコレクション要素が含まれていた場合、それらの参照は戻り値のコレクションで共有されます。 また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。
> このコマンドは、元のコレクションを変更しません。

*methodName* には、コレクション要素の評価に使用するメソッド名を渡します。*param* には、必要に応じて引数を渡します (任意)。 *methodName* で指定したメソッドはどんなテストでも実行でき、引数はあってもなくても構いません。 このメソッドは $1 にオブジェクトを受け取り、メソッドの条件を満たして新規コレクションに代入されるべき要素の *$1.result* を **true** に設定しなければなりません。

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   *$1.value*: フィルターする要素の値
*   *$2*: *param*
*   *$N...*: param2...paramN

*methodName* で指定したメソッドでは、以下の引数を設定します:

*   *$1.result* (ブール): 要素の値がフィルターの条件に合致し、新コレクションに代入すべき場合に **true**
*   *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。


#### 例題 1

コレクションから、長さが 6未満であるテキスト要素を取得します:

```4d
 var $col;$colNew : Collection
 $col:=New collection("hello";"world";"red horse";66;"tim";"san jose";"miami")
 $colNew:=$col.filter("LengthLessThan";6)
  //$colNew=["hello","world","tim","miami"]
```

***LengthLessThan*** メソッドのコードは以下のとおりです:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### 例題 2

値の型に応じて要素をフィルターします:

```4d
 var $c;$c2;$c3 : Collection
 $c:=New collection(5;3;1;4;6;2)
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c2:=$c.filter("TypeLookUp";Is real) // $c2=[5,3,1,4,6,2]
 $c3:=$c.filter("TypeLookUp";Is object)
  // $c3=[{name:Cleveland,zc:35049},{name:Blountsville,zc:35031}]
```

***TypeLookUp*** メソッドのコードは以下のとおりです:

```4d
 C_OBJECT($1)
 C_LONGINT($2)
 If(OB Get type($1;"value")=$2)

    $1.result:=True
 End if
``` 

<!-- END REF -->





<!-- REF collection.find().Desc -->
## .find()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.find().Syntax -->
**.find**( *methodName* : Text { ; *...param* : any } ) : any<br>**.find**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : any<!-- END REF -->


<!-- REF #collection.find().Params -->
| 参照         | タイプ  |    | 説明                               |
| ---------- | ---- |:--:| -------------------------------- |
| startFrom  | 整数   | -> | 検索を開始するインデックス                    |
| methodName | テキスト | -> | 検索用に呼び出すメソッド名                    |
| param      | any  | -> | *methodName* に渡す引数               |
| 戻り値        | any  | <- | 最初に見つかった値。見つからなかった場合には Undefined |
<!-- END REF -->


#### 説明

`.find()` 関数は、 <!-- REF #collection.find().Summary -->*methodName* 引数のメソッドを各コレクション要素に適用して、**true** を返す最初の要素を返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更しません。

*methodName* には、コレクション要素の評価に使用するメソッド名を渡します。*param* には、必要に応じて引数を渡します (任意)。 *methodName* で指定したメソッドはどんなテストでも実行でき、引数はあってもなくても構いません。 このメソッドは $1 にオブジェクトを受け取り、条件を満たす最初の要素の *$1.result* を **true** に設定しなければなりません。

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   *$1.value*: 評価する要素の値
*   in *$2: param*
*   *$N...*: param2...paramN

*methodName* で指定したメソッドでは、以下の引数を設定します:

*   *$1.result* (ブール): 要素の値が検索条件に合致する場合に **true**
*   *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

デフォルトでは、`.find()` はコレクション全体をテストします。 任意で、*startFrom* に検索を開始する要素のインデックスを渡すこともできます。

*   *startFrom* がコレクションの length 以上だった場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
*   *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます(*startFrom:=startFrom+length*)。 **注:** *startFrom* が負の値であっても、コレクションは左から右へと検索されます。
*   *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。


#### 例題 1

長さが 5未満の最初のテキスト要素を取得します:

```4d
 var $col : Collection
 $col:=New collection("hello";"world";4;"red horse";"tim";"san jose")
 $value:=$col.find("LengthLessThan";5) //$value="tim"
```

***LengthLessThan*** メソッドのコードは以下のとおりです:

```4d
 var $1 : Object
 var $2 : Integer
 If(Value type($1.value)=Is text)
    $1.result:=(Length($1.value))<$2
 End if
```

#### 例題 2

コレクション内を都市名で検索します:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"zc";35049))
 $c.push(New object("name";"Blountsville";"zc";35031))
 $c.push(New object("name";"Adger";"zc";35006))
 $c.push(New object("name";"Clanton";"zc";35046))
 $c.push(New object("name";"Clanton";"zc";35045))
 $c2:=$c.find("FindCity";"Clanton") //$c2={name:Clanton,zc:35046}
```

***FindCity*** メソッドのコードは以下のとおりです:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2 // name は、コレクションのオブジェクト要素内のプロパティ名です
``` 

<!-- END REF -->





<!-- REF collection.findIndex().Desc -->
## .findIndex()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>


<!-- REF #collection.findIndex().Syntax -->
**.findIndex**( *methodName* : Text { ; *...param* : any } ) : Integer<br>**.findIndex**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Integer<!-- END REF -->



<!-- REF #collection.findIndex().Params -->
| 参照         | タイプ  |    | 説明                               |
| ---------- | ---- |:--:| -------------------------------- |
| startFrom  | 整数   | -> | 検索を開始するインデックス                    |
| methodName | テキスト | -> | 検索用に呼び出すメソッド名                    |
| param      | any  | -> | *methodName* に渡す引数               |
| 戻り値        | 整数   | <- | 最初に見つかった値のインデックス。見つからなかった場合には -1 |
<!-- END REF -->


#### 説明

`.findIndex()` 関数は、 <!-- REF #collection.findIndex().Summary -->*methodName* 引数のメソッドを各コレクション要素に適用して、**true** を返す最初の要素のインデックスを返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更しません。

*methodName* には、コレクション要素の評価に使用するメソッド名を渡します。*param* には、必要に応じて引数を渡します (任意)。 *methodName* で指定したメソッドはどんなテストでも実行でき、引数はあってもなくても構いません。 このメソッドは $1 にオブジェクトを受け取り、条件を満たす最初の要素の *$1.result* を **true** に設定しなければなりません。

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   *$1.value*: 評価する要素の値
*   in *$2: param*
*   *$N...*: param2...paramN

*methodName* で指定したメソッドでは、以下の引数を設定します:

*   *$1.result* (ブール): 要素の値が検索条件に合致する場合に **true**
*   *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

デフォルトでは、`.findIndex()` はコレクション全体をテストします。 任意で、*startFrom* に検索を開始する要素のインデックスを渡すこともできます。

*   *startFrom* がコレクションの length 以上だった場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
*   *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます(*startFrom:=startFrom+length*)。 **注:** *startFrom* が負の値であっても、コレクションは左から右へと検索されます。
*   *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

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
 $val2:=$c.findIndex("FindCity";"Clanton") // $val2=3
 $val3:=$c.findIndex($val2+1;"FindCity";"Clanton") //$val3=4
```

***FindCity*** メソッドのコードは以下のとおりです:

```4d
 var $1 : Object
 var $2 : Text
 $1.result:=$1.value.name=$2
``` 


<!-- END REF -->





<!-- REF collection.indexOf().Desc -->
## .indexOf()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.indexOf().Syntax -->
**.indexOf**(  *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.indexOf().Params -->
| 参照        | タイプ |    | 説明                                        |
| --------- | --- |:--:| ----------------------------------------- |
| toSearch  | 式   | -> | コレクション内を検索する式                             |
| startFrom | 整数  | -> | 検索を開始するインデックス                             |
| 戻り値       | 整数  | <- | 最初に見つかった toSearch のインデックス。見つからなかった場合には -1 |
<!-- END REF -->


#### 説明

`.indexOf()` 関数は、 <!-- REF #collection.indexOf().Summary -->*toSearch* 引数の式をコレクション要素の中から検索し、最初に見つかった要素のインデックス (見つからなかった場合には -1) を返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更しません。

*toSearch* パラメーターには、コレクション内で検索する式を渡します。 以下のものを渡すことができます:

*   スカラー値 (テキスト、数値、ブール、日付)
*   null 値
*   オブジェクトあるいはコレクションの参照

*toSearch* 引数は検出すべき要素と完全に一致している必要があります (等号演算子と同じルールが適用されます)。

オプションとして、*startFrom* 引数を渡すことで、検索を開始するコレクション要素のインデックスを指定することができます。

*   *startFrom* がコレクションの length 以上だった場合、-1 が返されます。これはコレクションが検索されていないことを意味します。
*   *startFrom* < 0 の場合には、コレクションの終わりからのオフセットであるとみなされます(*startFrom:=startFrom+length*)。 **注:** *startFrom* が負の値であっても、コレクションは左から右へと検索されます。
*   *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.indices().Syntax -->
**.indices**(  *queryString* : Text { ; *...value* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.indices().Params -->
| 参照          | タイプ    |    | 説明                               |
| ----------- | ------ |:--:| -------------------------------- |
| queryString | テキスト   | -> | 検索条件                             |
| value       | any    | -> | プレースホルダー使用時: 比較する値               |
| 戻り値         | コレクション | <- | queryString に合致するコレクション要素のインデックス |
<!-- END REF -->


#### 説明

`.indices()` 関数は [`.query()`](#query) 関数と同様に機能しますが、 <!-- REF #collection.indices().Summary -->*queryString* 引数の検索条件に合致する、元のコレクション要素のインデックスを返します<!-- END REF -->(コレクション要素自体は返しません)。 インデックスは、昇順に返されます。
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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.insert().Syntax -->
**.insert**( *index* : Integer ; *element* : any ) : Collection <!-- END REF -->

<!-- REF #collection.insert().Params -->
| 参照      | タイプ    |    | 説明               |
| ------- | ------ |:--:| ---------------- |
| index   | 整数     | -> | 要素の挿入位置          |
| element | any    | -> | コレクションに挿入する要素    |
| 戻り値     | コレクション | <- | 要素の挿入された元のコレクション |
<!-- END REF -->


#### 説明

`.insert()` 関数は、 <!-- REF #collection.insert().Summary --> *index* で指定したコレクションインスタンスの位置に *element* 要素を挿入し、変更された元のコレクションを返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更します。

*index* パラメーターには、コレクション内で要素を挿入する位置を渡します。
> **警告**: コレクション要素は 0 起点である点に注意してください。

*   指定した *index* がコレクションの length より大きい場合、実際の開始インデックスはコレクションの length に設定されます。
*   *index* < 0 の場合、*index:=index+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
*   計算結果も負の値である場合、index は 0 に設定されます。

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.join().Syntax -->
**.join**( *delimiter* : Text { ; *option* : Integer } ) : Text <!-- END REF -->

<!-- REF #collection.join().Params -->
| 参照        | タイプ  |    | 説明                                               |
| --------- | ---- |:--:| ------------------------------------------------ |
| delimiter | テキスト | -> | 要素間に用いる区切り文字                                     |
| option    | 整数   | -> | `ck ignore null or empty`: 戻り値に null と空の文字列を含めない |
| 戻り値       | テキスト | <- | 区切り文字を使ってコレクションの全要素をつなげた文字列                      |
<!-- END REF -->


#### 説明

`.join()` 関数は、 <!-- REF #collection.join().Summary -->*delimiter* に渡した文字列を区切り文字として、コレクションの全要素を一つの文字列につなげます<!-- END REF -->。戻り値はつなげられた文字列です。
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




<!-- REF collection.lastIndexOf().Desc -->
## .lastIndexOf()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.lastIndexOf().Syntax -->
**.lastIndexOf**( *toSearch* : expression { ; *startFrom* : Integer } ) : Integer <!-- END REF -->

<!-- REF #collection.lastIndexOf().Params -->
| 参照        | タイプ |    | 説明                                        |
| --------- | --- |:--:| ----------------------------------------- |
| toSearch  | 式   | -> | コレクション内を検索する要素                            |
| startFrom | 整数  | -> | 検索を開始するインデックス                             |
| 戻り値       | 整数  | <- | 最後に見つかった toSearch のインデックス。見つからなかった場合には -1 |
<!-- END REF -->


#### 説明

`.lastIndexOf()` 関数は、 <!-- REF #collection.lastIndexOf().Summary -->*toSearch* 引数の式をコレクション要素の中から検索し、最後に見つかった要素のインデックス (見つからなかった場合には -1) を返します<!-- END REF -->。
> このコマンドは、元のコレクションを変更しません。

*toSearch* パラメーターには、コレクション内で検索する式を渡します。 以下のものを渡すことができます:

*   スカラー値 (テキスト、数値、ブール、日付)
*   null 値
*   オブジェクトあるいはコレクションの参照

*toSearch* 引数は検出すべき要素と完全に一致している必要があります (等号演算子と同じルールが適用されます)。

オプションとして、*startFrom* 引数を渡すことで、逆順検索を開始するコレクション要素のインデックスを指定することができます。

*   *startFrom* が、コレクションの length から 1を引いた数字 (coll.length-1) 以上の場合、コレクション全体が検索されます (デフォルト)。
*   *startFrom* < 0 の場合、*startFrom:=startFrom+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。 計算結果も負の値である場合、-1 が返されます。これはコレクションが検索されていないことを意味します。 **注:** *startFrom* が負の値であっても、コレクションは右から左へと検索されます。
*   *startFrom* = 0 の場合、-1 が返されます。これはコレクションが検索されていないことを意味します。

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R5 | 追加 |
</details>

<!-- REF #collection.length.Syntax -->
**.length** : Integer<!-- END REF -->



#### 説明

`.length` プロパティは、 <!-- REF #collection.length.Summary -->コレクション内の要素数を返します<!-- END REF -->。

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.map().Syntax -->
**.map**( *methodName* : Text { ; *...param* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.map().Params -->
| 参照         | タイプ    |    | 説明                       |
| ---------- | ------ |:--:| ------------------------ |
| methodName | テキスト   | -> | コレクション要素を変換するのに使用するメソッド名 |
| param      | any    | -> | methodName に渡す引数         |
| 戻り値        | コレクション | <- | 変換された値を格納する新しいコレクション     |
<!-- END REF -->


#### 説明

`.map()` 関数は、 <!-- REF #collection.map().Summary -->元のコレクションの各要素に対して *methodName* メソッドを呼び出した結果に基づいた、新しいコレクションを作成します<!-- END REF -->。 オプションで、*param* パラメーターに、*methodName* に渡す引数を指定することができます。 `.map()` は常に、元のコレクションと同じサイズのコレクションを返します。
> このコマンドは、元のコレクションを変更しません。

*methodName* には、コレクション要素の評価に使用するメソッド名を渡します。*param* には、必要に応じて引数を渡します (任意)。 *methodName* で指定したメソッドはどんな処理でも実行でき、引数はあってもなくても構いません。

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   *$1.value* (どんな型でも可): マップする要素の値
*   in *$2* (どんな型でも可): *param*
*   in *$N...* (どんな型でも可): *paramN...*

*methodName* で指定したメソッドでは、以下の引数を設定します:


*   *$1.result* (どんな型でも可): 結果のコレクションに追加する、変換された値
*   *$1.stop* (ブール): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

#### 例題


```4d
 var $c; $c2 : Collection
 $c:=New collection(1;4;9;10;20)
 $c2:=$c.map("Percentage";$c.sum())
  //$c2=[2.27,9.09,20.45,22.73,45.45]
```

***Percentage*** メソッドのコードは以下のとおりです:

```4d
 var $1 : Object
 var $2 : Real
 $1.result:=Round(($1.value/$2)*100;2)
``` 


<!-- END REF -->





<!-- REF collection.max().Desc -->
## .max()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.max().Syntax -->
**.max**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.max().Params -->
| 参照           | タイプ                          |    | 説明                 |
| ------------ | ---------------------------- |:--:| ------------------ |
| propertyPath | テキスト                         | -> | 評価するオブジェクトプロパティのパス |
| 戻り値          | ブール、テキスト、数値、オブジェクト、コレクション、日付 | <- | コレクション内の最大値        |
<!-- END REF -->


#### 説明

`.max()` 関数は、 <!-- REF #collection.max().Summary -->コレクション内の最大値を持つ要素を返します<!-- END REF --> ([`.sort()`](#sort) 関数を使用して昇順に並べ替えたときのコレクションの最後の要素が最大値の要素です)。
> このコマンドは、元のコレクションを変更しません。

コレクションが異なる型の値を格納している場合、`.max()` 関数は型のリスト順の、最後の型の最大値を返します ([`.sort()`](#sort) 参照)。

コレクションがオブジェクトを格納している場合には、最大値を取得するオブジェクトプロパティのパスを *propertyPath* に渡します。

If the collection is empty, `.max()` returns *Undefined*.

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.min().Syntax -->
**.min**( { *propertyPath* : Text } ) : any <!-- END REF -->

<!-- REF #collection.min().Params -->
| 参照           | タイプ                          |    | 説明                              |
| ------------ | ---------------------------- |:--:| ------------------------------- |
| propertyPath | テキスト                         | -> | 評価するオブジェクトプロパティのパス              |
| 戻り値          | ブール、テキスト、数値、オブジェクト、コレクション、日付 | <- | Minimum value in the collection |
<!-- END REF -->


#### 説明

The `.min()` function <!-- REF #collection.min().Summary -->returns the element with the smallest value in the collection<!-- END REF --> (the first element of the collection as it would be sorted in ascending order using the [`.sort()`](#sort) function).
> このコマンドは、元のコレクションを変更しません。

If the collection contains different types of values, the `.min()` function will return the minimum value within the first element type in the type list order (see [`.sort()`](#sort) description).

If the collection contains objects, pass the *propertyPath* parameter to indicate the object property whose minimum value you want to get.

If the collection is empty, `.min()` returns *Undefined*.

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




<!-- REF collection.orderBy().Desc -->
## .orderBy()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.orderBy().Syntax -->
**.orderBy**( ) : Collection<br>**.orderBy**( *pathStrings* : Text ) : Collection<br>**.orderBy**( *pathObjects* : Collection ) : Collection<br>**.orderBy**( *ascOrDesc* : Integer ) : Collection <!-- END REF -->


<!-- REF #collection.orderBy().Params -->
| 参照          | タイプ    |    | 説明                                                |
| ----------- | ------ |:--:| ------------------------------------------------- |
| pathStrings | テキスト   | -> | Property path(s) on which to order the collection |
| pathObjects | コレクション | -> | Collection of criteria objects                    |
| ascOrDesc   | 整数     | -> | `ck ascending` or `ck descending` (scalar values) |
| 戻り値         | コレクション | <- | Ordered copy of the collection (shallow copy)     |
<!-- END REF -->


#### 説明

The `.orderBy()` function <!-- REF #collection.orderBy().Summary -->returns a new collection containing all elements of the collection in the specified order<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。
> このコマンドは、元のコレクションを変更しません。

If you pass no parameter, the function orders scalar values in the collection in ascending order (other element types such as objects or collections are returned unordered). You can modify this automatic order by passing the `ck ascending` or `ck descending` constants in the *ascOrDesc* parameter (see below).

You can also pass a criteria parameter to define how the collection elements must be sorted. Three syntaxes are supported for this parameter:

*   *pathStrings* : Text (formula). **Syntax**: `propertyPath1 {desc or asc}, propertyPath2 {desc or asc},...` (default order: asc). *pathStrings* contains a formula made of 1 to x property paths and (optionally) sort orders, separated by commas. The order in which the properties are passed determines the sorting priority of the collection elements. By default, properties are sorted in ascending order. You can set the sort order of a property in the criteria string, separated from the property path by a single space: pass "asc" to sort in ascending order or "desc" in descending order.

*   *pathObjects* : Collection. You can add as many objects in the *pathObjects* collection as necessary. By default, properties are sorted in ascending order ("descending" is false). Each element of the collection contains an object structured in the following way:

```4d
    {"*propertyPath*": string,
    "*descending*": boolean}  
```

*   *ascOrDesc* : Integer. You pass one of the following constants from the **Objects and collections** theme:

    | 定数            | タイプ  | 結果 | 説明                                                |
    | ------------- | ---- | -- | ------------------------------------------------- |
    | ck ascending  | 倍長整数 | 0  | Elements are ordered in ascending order (default) |
    | ck descending | 倍長整数 | 1  | Elements are ordered in descending order          |

    This syntax orders scalar values in the collection only (other element types such as objects or collections are returned unordered).

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  null
2.  booleans
3.  strings
4.  numbers
5.  objects
6.  collections
7.  dates

#### 例題 1

Ordering a collection of numbers in ascending and descending order:

```4d
 var $c; $c2; $3 : Collection 
 $c:=New collection
 For($vCounter;1;10)
    $c.push(Random)
 End for
 $c2:=$c.orderBy(ck ascending)
 $c3:=$c.orderBy(ck descending)
```


#### 例題 2

Ordering a collection of objects based on a text formula with property names:

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

Ordering a collection of objects with a property path:

```4d
 var $c; $c2 : Collection
 $c:=New collection
 $c.push(New object("name";"Cleveland";"phones";New object("p1";"01";"p2";"02")))
 $c.push(New object("name";"Blountsville";"phones";New object("p1";"00";"p2";"03")))

 $c2:=$c.orderBy("phones.p1 asc")
```


#### 例題 3

Ordering a collection of objects using a collection of criteria objects:

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

Ordering with a property path:

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.orderByMethod().Syntax -->
**.orderByMethod**( *methodName* : Text { ; ...*extraParam* : expression } ) : Collection <!-- END REF -->


<!-- REF #collection.orderByMethod().Params -->
| 参照         | タイプ    |    | 説明                                               |
| ---------- | ------ |:--:| ------------------------------------------------ |
| methodName | テキスト   | -> | Name of method used to specify the sorting order |
| extraParam | 式      | -> | methodName に渡す引数                                 |
| 戻り値        | コレクション | <- | Sorted copy of the collection (shallow copy)     |
<!-- END REF -->


#### 説明

The `.orderByMethod()` function <!-- REF #collection.orderByMethod().Summary -->returns a new collection containing all elements of the collection in the order defined through the *methodName* method<!-- END REF -->.

This function returns a *shallow copy*, which means that objects or collections in both collections share the same reference. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。
> このコマンドは、元のコレクションを変更しません。

In *methodName*, pass a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (object), where:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters
*   *methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

#### 例題 1

You want to sort a collection of strings in numerical order rather than alphabetical order:

```4d
 var $c; $c2; $c3 : Collection
 $c:=New collection
 $c.push("33";"4";"1111";"222")
 $c2:=$c.orderBy() //$c2=["1111","222","33","4"], alphabetical order
 $c3:=$c.orderByMethod("NumAscending") // $c3=["4","33","222","1111"]
```

 Here is the code for ***NumAscending***:


```4d
 $1.result:=Num($1.value)<Num($1.value2)
```



#### 例題 2

You want to sort a collection of strings on their length:

```4d
 var $fruits; $c2 : Collection
 $fruits:=New collection("Orange";"Apple";"Grape";"pear";"Banana";"fig";"Blackberry";"Passion fruit")
 $c2:=$fruits.orderByMethod("WordLength")
  //$c2=[Passion fruit,Blackberry,Orange,Banana,Apple,Grape,pear,fig]
```

Here is the code for ***WordLength***:

```4d
 $1.result:=Length(String($1.value))>Length(String($1.value2))
```

#### 例題 3

You want to sort a collection by character code or language:

```4d
var $strings1; $strings2 : Collection
$strings1:=New collection("Alpha";"Charlie";"alpha";"bravo";"Bravo";"charlie")

//using the character code:
$strings2:=$strings1.orderByMethod("sortCollection";sk character codes)
// result : ["Alpha","Bravo","Charlie","alpha","bravo","charlie"]

//using the language:
$strings2:=$string1s.orderByMethod("sortCollection";sk strict)
// result : ["alpha","Alpha","bravo","Bravo","charlie","Charlie"]
```

The ***sortCollection*** method:

```4d
var$1Object
var$2Integer // sort option

$1.result:=(Compare strings($1.value;$1.value2;$2)<0)
``` 

<!-- END REF -->





<!-- REF collection.pop().Desc -->
## .pop()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>


<!-- REF #collection.pop().Syntax -->
**.pop()** : any <!-- END REF -->

<!-- REF #collection.pop().Params -->
| 参照  | タイプ |    | 説明                         |
| --- | --- |:--:| -------------------------- |
| 戻り値 | any | <- | Last element of collection |
<!-- END REF -->


#### 説明

The `.pop()` function <!-- REF #collection.pop().Summary -->removes the last element from the collection and returns it as the function result<!-- END REF -->.
> このコマンドは、元のコレクションを変更します。

When applied to an empty collection, `.pop()` returns ***undefined***.

#### 例題

`.pop()`, used in conjunction with [`.push()`](#push), can be used to implement a first-in, last-out stack feature:

```4d
 var $stack : Collection
 $stack:=New collection //$stack=[]
 $stack.push(1;2) //$stack=[1,2]
 $stack.pop() //$stack=[1]  Returns 2
 $stack.push(New collection(4;5)) //$stack=[[1,[4,5]]
 $stack.pop() //$stack=[1]  Returns [4,5]
 $stack.pop() //$stack=[]  Returns 1
```


<!-- END REF -->





<!-- REF collection.push().Desc -->
## .push()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.push().Syntax -->
**.push**( *element* : any { ;...*elementN* } ) : Collection <!-- END REF -->

<!-- REF #collection.push().Params -->
| 参照      | タイプ    |    | 説明                                            |
| ------- | ------ |:--:| --------------------------------------------- |
| element | 混合     | -> | Element(s) to add to the collection           |
| 戻り値     | コレクション | <- | Original collection containing added elements |
<!-- END REF -->


#### 説明

The `.push()` function <!-- REF #collection.push().Summary -->appends one or more *element*(s) to the end of the collection instance and returns the edited collection<!-- END REF -->.
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

You want to sort the resutling collection:

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
| バージョン  | 内容                       |
| ------ | ------------------------ |
| v17 R5 | Support of querySettings |
| v16 R6 | 追加                       |
</details>

<!-- REF #collection.query().Syntax -->
**.query**( *queryString* : Text ; *...value* : any ) : Collection<br>**.query**( *queryString* : Text ; *querySettings* : Object ) : Collection <!-- END REF -->


<!-- REF #collection.query().Params -->
| 参照            | タイプ    |    | 説明                                                |
| ------------- | ------ |:--:| ------------------------------------------------- |
| queryString   | テキスト   | -> | 検索条件                                              |
| value         | 混合     | -> | プレースホルダー使用時: 比較する値                                |
| querySettings | オブジェクト | -> | Query options: parameters, attributes             |
| 戻り値           | コレクション | <- | Element(s) matching queryString in the collection |
<!-- END REF -->


#### 説明

The `.query()` function <!-- REF #collection.query().Summary -->returns all elements of a collection of objects that match the search conditions <!-- END REF -->defined by *queryString* and (optionally) *value* or *querySettings*. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。
> このコマンドは、元のコレクションを変更しません。

*queryString* 引数には、以下のシンタックスを使用します:

```4d
propertyPath 比較演算子 値 {logicalOperator propertyPath 比較演算子 値}
```

For detailed information on how to build a query using , value and *querySettings* parameters, please refer to the **dataClass** `.query()` function description.



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

This example returns persons whose name contains "in":

```4d
 $col:=$c.query("name = :1";"@in@")
  //$col=[{name:Winch...},{name:Sterling...}]
```

This example returns persons whose name does not begin with a string from a variable (entered by the user, for example):

```4d
 $col:=$c.query("name # :1";$aString+"@")
  //if $astring="W"
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}]
```

This example returns persons whose age is not known (property set to null or undefined):

```4d
 $col:=$c.query("age=null") //placeholders not allowed with "null"
  //$col=[{name:Wesson...},{name:Sterling...},{name:Mark...}]
```

This example returns persons hired more than 90 days ago:

```4d
 $col:=$c.query("dateHired < :1";(Current date-90))
  //$col=[{name:Smith...},{name:Sterling...},{name:Mark...}] if today is 01/10/2018
```


#### 例題 3

More examples of queries can be found in the `dataClass.query()` page. 

<!-- END REF -->





<!-- REF collection.reduce().Desc -->
## .reduce()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.reduce().Syntax -->
**.reduce**( *methodName* : Text ) : any <br>**.reduce**( *methodName* : Text ; *initValue* : any { ; *...param* : expression } ) : any <!-- END REF -->


<!-- REF #collection.reduce().Params -->
| 参照         | タイプ                                             |    | 説明                                                                   |
| ---------- | ----------------------------------------------- |:--:| -------------------------------------------------------------------- |
| methodName | テキスト                                            | -> | Name of the function to call to process collection elements          |
| initValue  | Text, Number, Object, Collection, Date, Boolean | -> | Value to use as the first argument to the first call of *methodName* |
| param      | 式                                               | -> | *methodName* に渡す引数                                                   |
| 戻り値        | Text, Number, Object, Collection, Date, Boolean | <- | Result of the accumulator value                                      |
<!-- END REF -->


#### 説明


The `.reduce()` function <!-- REF #collection.reduce().Summary -->applies the *methodName* callback method against an accumulator and each element in the collection (from left to right) to reduce it to a single value<!-- END REF -->.
> このコマンドは、元のコレクションを変更しません。

In *methodName*, pass the name of the method to use to evaluate collection elements, along with its parameter(s) in param (optional). *methodName* takes each collection element and performs any desired operation to accumulate the result into *$1.accumulator*, which is returned in *$1.value*.

You can pass the value to initialize the accumulator in *initValue*. If omitted, *$1.accumulator* starts with *Undefined*.

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   in *$1.value*: element value to be processed
*   in *$2: param*
*   in *$N...*: *paramN...*

*methodName* で指定したメソッドでは、以下の引数を設定します:

*   *$1.accumulator*: value to be modified by the function and which is initialized by *initValue*.
*   *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。


#### 例題 1


```4d
 C_COLLECTION($c)
 $c:=New collection(5;3;5;1;3;4;4;6;2;2)
 $r:=$c.reduce("Multiply";1) //returns 86400
```

With the following ***Multiply*** method:

```4d
 If(Value type($1.value)=Is real)
    $1.accumulator:=$1.accumulator*$1.value
 End if
```

#### 例題

This example allows reducing several collection elements to a single one:

```4d
 var $c;$r : Collection
 $c:=New collection
 $c.push(New collection(0;1))
 $c.push(New collection(2;3))
 $c.push(New collection(4;5))
 $c.push(New collection(6;7))
 $r:=$c.reduce("Flatten") //$r=[0,1,2,3,4,5,6,7]
```

With the following ***Flatten*** method:

```4d
 If($1.accumulator=Null)
    $1.accumulator:=New collection
 End if
 $1.accumulator.combine($1.value)
```

<!-- END REF -->




<!-- REF collection.remove().Desc -->
## .remove()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.remove().Syntax -->
**.remove**( *index* : Integer { ; *howMany* : Integer } ) : Collection <!-- END REF -->


<!-- REF #collection.remove().Params -->
| 参照      | タイプ    |    | 説明                                                    |
| ------- | ------ |:--:| ----------------------------------------------------- |
| index   | 整数     | -> | Element at which to start removal                     |
| howMany | 整数     | -> | Number of elements to remove, or 1 element if omitted |
| 戻り値     | コレクション | <- | Original collection without removed element(s)        |
<!-- END REF -->


#### 説明

The `.remove()` function <!-- REF #collection.remove().Summary -->removes one or more element(s) from the specified *index* position in the collection and returns the edited collection<!-- END REF -->.
> このコマンドは、元のコレクションを変更します。

In *index*, pass the position where you want the element to be removed from the collection.
> **警告**: コレクション要素は 0 起点である点に注意してください。 If *index* is greater than the length of the collection, actual starting index will be set to the length of the collection.

*   *index* < 0 の場合、*index:=index+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
*   If the calculated value < 0, *index* is set to 0.
*   If the calculated value > the length of the collection, *index* is set to the length.

In *howMany*, pass the number of elements to remove from *index*. If *howMany* is not specified, then one element is removed.


If you try to remove an element from an empty collection, the method does nothing (no error is generated).


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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>



<!-- REF #collection.resize().Syntax -->
**.resize**( *size* : Integer { ; *defaultValue* : any } ) : Collection <!-- END REF -->

<!-- REF #collection.resize().Params -->
| 参照           | タイプ                                             |    | 説明                                 |
| ------------ | ----------------------------------------------- |:--:| ---------------------------------- |
| size         | 整数                                              | -> | New size of the collection         |
| defaultValue | Number, Text, Object, Collection, Date, Boolean | -> | Default value to fill new elements |
| 戻り値          | コレクション                                          | <- | Resized original collection        |
<!-- END REF -->


#### 説明

The `.resize()` function <!-- REF #collection.resize().Summary -->sets the collection length to the specified new size and returns the resized collection<!-- END REF -->.
> このコマンドは、元のコレクションを変更します。

*   If *size* < collection length, exceeding elements are removed from the collection.
*   If *size* > collection length, the collection length is increased to size.

By default, new elements are filled will **null** values. You can specify the value to fill in added elements using the *defaultValue* parameter.

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.reverse().Syntax -->
**.reverse( )** : Collection <!-- END REF -->

<!-- REF #collection.reverse().Params -->
| 参照  | タイプ    |    | 説明                              |
| --- | ------ |:--:| ------------------------------- |
| 戻り値 | コレクション | <- | Inverted copy of the collection |
<!-- END REF -->


#### 説明

The `.reverse()` function <!-- REF #collection.reverse().Summary -->returns a deep copy of the collection with all its elements in reverse order<!-- END REF -->. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。
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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.shift().Syntax -->
**.shift()** : any<!-- END REF -->

<!-- REF #collection.shift().Params -->
| 参照  | タイプ |    | 説明                          |
| --- | --- |:--:| --------------------------- |
| 戻り値 | any | <- | First element of collection |
<!-- END REF -->


#### 説明

The `.shift()` function <!-- REF #collection.shift().Summary -->removes the first element of the collection and returns it as the function result<!-- END REF -->.
> このコマンドは、元のコレクションを変更します。

If the collection is empty, this method does nothing.

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.slice().Syntax -->
**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : Collection<!-- END REF -->

<!-- REF #collection.slice().Params -->
| 参照        | タイプ    |    | 説明                                                       |
| --------- | ------ |:--:| -------------------------------------------------------- |
| startFrom | 整数     | -> | Index to start the search at (included)                  |
| end       | 整数     | -> | 終了インデックス (含まれない)                                         |
| 戻り値       | コレクション | <- | New collection containing sliced elements (shallow copy) |
<!-- END REF -->


#### 説明

The `.slice()` function <!-- REF #collection.slice().Summary -->returns a portion of a collection into a new collection<!-- END REF -->, selected from *startFrom* index to *end* index (end not included). This function returns a *shallow copy* of the collection. また、元のコレクションが共有コレクションであった場合、返されるコレクションもまた共有コレクションになります。
> このコマンドは、元のコレクションを変更しません。

The returned collection contains the element specified by *startFrom* and all subsequent elements up to, but not including, the element specified by *end*. If only the *startFrom* parameter is specified, the returned collection contains all elements from *startFrom* to the last element of the original collection.

*   *startFrom* < 0 の場合、*startFrom:=startFrom+length* として再計算されます (コレクションの終端からのオフセットであるとみなされます)。
*   If the calculated value < 0, *startFrom* is set to 0.
*   *end* < 0 の場合、それは *end:=end+length* として再計算されます。
*   If *end < startFrom* (passed or calculated values), the method does nothing.

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.some().Syntax -->
**.some**( *methodName* : Text { ; *...param* : any } ) : Boolean<br>**.some**( *startFrom* : Integer ; *methodName* : Text { ; *...param* : any } ) : Boolean<!-- END REF -->


<!-- REF #collection.some().Params -->
| 参照         | タイプ  |    | 説明                                                        |
| ---------- | ---- |:--:| --------------------------------------------------------- |
| startFrom  | 整数   | -> | テストを開始するインデックス                                            |
| methodName | テキスト | -> | テストに呼び出すメソッド名                                             |
| param      | 混合   | -> | *methodName* に渡す引数                                        |
| 戻り値        | ブール  | <- | True if at least one element successfully passed the test |
<!-- END REF -->


#### 説明

The `.some()` function <!-- REF #collection.some().Summary -->returns true if at least one element in the collection successfully passed a test<!-- END REF --> implemented in the provided *methodName* method.


*methodName* には、コレクション要素の評価に使用するメソッド名を渡します。*param* には、必要に応じて引数を渡します (任意)。 *methodName* で指定したメソッドはどんなテストでも実行でき、引数はあってもなくても構いません。 This method receives an `Object` as first parameter ($1) and must set *$1.result* to **True** for every element fulfilling the test.

*methodName* で指定したメソッドは以下の引数を受け取ります:

*   *$1.value*: 評価する要素の値
*   *$2*: param
*   *$N...*: param2...paramN

*methodName* で指定したメソッドでは、以下の引数を設定します:

*   *$1.result* (boolean): **true** if the element value evaluation is successful, **false** otherwise.
*   *$1.stop* (ブール、任意): メソッドコールバックを止める場合には **true**。 返された値は最後に計算されたものです。

In any case, at the point where `.some()` function encounters the first collection element returning true in *$1.result*, it stops calling *methodName* and returns **true**.

By default, `.some()` tests the whole collection. Optionally, you can pass the index of an element from which to start the test in *startFrom*.

*   If *startFrom* >= the collection's length, **False** is returned, which means the collection is not tested.
*   If *startFrom* < 0, it is considered as the offset from the end of the collection.
*   *startFrom* = 0 の場合、コレクション全体がテストされます (デフォルト)。


#### 例題


```4d
 var $c : Collection
 var $b : Boolean
 $c:=New collection
 $c.push(-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") // returns false
 $c.push(1)
 $b:=$c.some("NumberGreaterThan0") // returns true

 $c:=New collection
 $c.push(1;-5;-3;-1;-4;-6;-2)
 $b:=$c.some("NumberGreaterThan0") //$b=true
 $b:=$c.some(1;"NumberGreaterThan0") //$b=false
```

With the following *NumberGreaterThan0* method:

```4d
 $1.result:=$1.value>0
```


<!-- END REF -->





<!-- REF collection.sort().Desc -->
## .sort()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.sort().Syntax -->
**.sort**( *methodName* : Text { ; *...extraParam* : any } ) : Collection <!-- END REF -->


<!-- REF #collection.sort().Params -->
| 参照         | タイプ    |    | 説明                                               |
| ---------- | ------ |:--:| ------------------------------------------------ |
| methodName | テキスト   | -> | Name of method used to specify the sorting order |
| extraParam | any    | -> | methodName に渡す引数                                 |
| 戻り値        | コレクション | <- | Original collection sorted                       |
<!-- END REF -->


#### 説明

The `.sort()` function <!-- REF #collection.sort().Summary -->sorts the elements of the original collection<!-- END REF --> and also returns the sorted collection.
> このコマンドは、元のコレクションを変更します。

If `.sort()` is called with no parameters, only scalar values (number, text, date, booleans) are sorted. Elements are sorted by default in ascending order, according to their type.

If you want to sort the collection elements in some other order or sort any type of element, you must supply in *methodName* a comparison method that compares two values and returns **true** in *$1.result* if the first value is lower than the second value. You can provide additional parameters to *methodName* if necessary.

*   *methodName* will receive the following parameters:
    *   $1 (object), where:
        *   *$1.value* (any type): first element value to be compared
        *   *$1.value2* (any type): second element value to be compared
    *   $2...$N (any type): extra parameters

*methodName* sets the following parameter:
    *   *$1.result* (boolean): **true** if *$1.value < $1.value2*, **false** otherwise

If the collection contains elements of different types, they are first grouped by type and sorted afterwards. Types are returned in the following order:

1.  null
2.  booleans
3.  strings
4.  numbers
5.  objects
6.  collections
7.  dates

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
 $col2:=$col.sort() //numerical sort: [4,33,66,222,1111]
 $col3:=$col.sort("numberOrder") //alphabetical sort: [1111,222,33,4,66]
```

```4d
  //numberOrder project method
 var $1 : Object
 $1.result:=String($1.value)<String($1.value2)
``` 
 
<!-- END REF -->




<!-- REF collection.sum().Desc -->
## .sum()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.sum().Syntax -->
**.sum**( { *propertyPath* : Text } ) : Real<!-- END REF -->

<!-- REF #collection.sum().Params -->
| 参照           | タイプ  |    | 説明                       |
| ------------ | ---- |:--:| ------------------------ |
| propertyPath | テキスト | -> | 計算に使用するオブジェクトプロパティのパス    |
| 戻り値          | 実数   | <- | Sum of collection values |
<!-- END REF -->


#### 説明

The `.sum()` function <!-- REF #collection.sum().Summary -->returns the sum for all values in the collection instance<!-- END REF -->.

計算の対象となるのは数値のみです (他の型の要素は無視されます)。

コレクションがオブジェクトを格納している場合には、計算するオブジェクトプロパティのパスを *propertyPath* に渡します。

`.sum()` returns 0 if:

*   コレクションが空の場合
*   コレクションに数値が含まれていない場合
*   *propertyPath* 引数で指定したパスがコレクション内で見つからない場合

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
| バージョン  | 内容 |
| ------ | -- |
| v16 R6 | 追加 |
</details>

<!-- REF #collection.unshift().Syntax -->
**.unshift**( *value* : any { ;...*valueN* : any } ) : Collection<!-- END REF -->

<!-- REF #collection.unshift().Params -->
| 参照    | タイプ                                    |    | 説明                                                    |
| ----- | -------------------------------------- |:--:| ----------------------------------------------------- |
| value | Text, Number, Object, Collection, Date | -> | Value(s) to insert at the beginning of the collection |
| 戻り値   | 実数                                     | <- | Collection containing added element(s)                |
<!-- END REF -->


#### 説明

The `.unshift()` function <!-- REF #collection.unshift().Summary -->inserts the given *value*(s) at the beginning of the collection <!-- END REF -->and returns the modified collection.
> このコマンドは、元のコレクションを変更します。

If several values are passed, they are inserted all at once, which means that they appear in the resulting collection in the same order as in the argument list.


#### 例題


```4d
 var $c : Collection
 $c:=New collection(1;2)
 $c.unshift(4) // $c=[4,1,2]
 $c.unshift(5) //$c=[5,4,1,2]
 $c.unshift(6;7) // $c=[6,7,5,4,1,2]
```

<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
