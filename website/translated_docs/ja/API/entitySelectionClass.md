---
id: EntitySelectionClass
title: EntitySelection
---


エンティティセレクションとは、同じ [データクラス](ORDA/dsMapping.md#データクラス) に所属する一つ以上の [エンティティ](ORDA/dsMapping.md#エンティティ) への参照を格納しているオブジェクトのことです。 エンティティセレクションは、データクラスから 0個、1個、あるいは X個のエンティティを格納することができます (X はデータクラスに格納されているエンティティの総数です)。

Entity selections can be created from existing selections using various functions of the [`DataClass` class](DataClassClass.md) such as [`.all()`](DataClassClass.md#all) or [`.query()`](DataClassClass.md#query), or functions of the `EntityClass` class itself, such as [`.and()`](#and) or [`orderBy()`](#orderby). You can also create blank entity selections using the [`dataClass.newSelection()`](DataClassClass.md#newselection) function or the [`Create new selection`](#create-new-selection) command.

### 概要

|                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#91index93)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.index.Summary -->|
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE EntitySelectionClass.attributeName.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->|
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->|



## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->
**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #_command_.Create entity selection.Params -->
| 参照       | タイプ                |    | 説明                                            |
| -------- | ------------------ |:--:| --------------------------------------------- |
| dsTable  | テーブル               | -> | エンティティセレクションの元となるカレントセレクションが属する 4Dデータベースのテーブル |
| settings | オブジェクト             | -> | ビルドオプション: context                             |
| 戻り値      | 4D.EntitySelection | <- | 指定したテーブルに対応するデータクラスのエンティティセレクション              |
<!-- END REF -->


#### 説明

`Create entity selection` コマンドは、*dsTable* で指定したテーブルに対応するデータクラスの [追加可能な](ORDA/entities.md#共有可能追加可能なエンティティセレクション) 新規エンティティセレクションを、同テーブルのカレントセレクションに基づいてビルドして返します。

ソートされたカレントセレクションの場合、[順列のある](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) エンティティセレクションが作成されます (カレントセレクションの並び順が受け継がれます)。 カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。

If the *dsTable* is not exposed in [`ds`](API/DataStoreClass.md#ds), an error is returned. リモートデータストアの場合は、このコマンドは使用できません。

任意の *settings* には、以下のプロパティを持つオブジェクトを渡せます:

| プロパティ   | タイプ  | 説明                                                                      |
| ------- | ---- | ----------------------------------------------------------------------- |
| context | テキスト | エンティティセレクションに適用されている [最適化コンテキスト](ORDA/entities.md#クライアントサーバーの最適化) のラベル。 |


#### 例題

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee]) 
// $employees エンティティセレクションには、
// Employee データクラスの全エンティティへの参照が格納されています
```

#### 参照

[`dataClass.newSelection()`](DataClassClass.md#newselection)

<!-- REF EntitySelectionClass.index.Desc -->
## &#91;*index*&#93;

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->
***&#91;index&#93;*** : 4D.Entity<!-- END REF -->


#### 説明

`EntitySelection[index]` 記法を使用すると、 <!-- REF EntitySelectionClass.index.Summary -->標準のコレクションシンタックスを使用してエンティティセレクション内のエンティティにアクセスすることができます<!-- END REF -->。取得したいエンティティの位置を *index* に渡します。

対応するエンティティはデータストアから再読み込みされる点に注意してください。

*index* には、0 と `.length`-1 の範囲内で数値を指定することができます。

*   *index* が範囲外だった場合、エラーが返されます。
*   *index* がドロップされたエンティティに対応していた場合、Null値が返されます。
> **警告**: `EntitySelection[index]` は代入不可の式です。これは、[`.lock()`](EntityClass.md#lock) や [`.save()`](EntityClass.md#save) などの関数において、編集可能なエンティティ参照として使用することはできない、ということを意味します。 エンティティを操作するには、戻り値を変数などの代入可能な式に割り当てる必要があります。 例:

```4d
 $sel:=ds.Employee.all() // エンティティセレクションを作成
  // 無効なコード: 
$result:=$sel[0].lock() //動作しません
 $sel[0].lastName:="Smith" //動作しません
 $result:=$sel[0].save() //動作しません
  // 有効なコード:
 $entity:=$sel[0]  //OK
 $entity.lastName:="Smith" //OK
 $entity.save() //OK
```

#### 例題


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")
 $employee:=$employees[2]  // $employees エンティティセレクションの3番目のエンティティがデータベースからリロードされます。
```

<!-- END REF -->




<!-- REF EntitySelectionClass.attributeName.Desc -->
## .*attributeName*

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |
</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->
***.attributeName*** : Collection<br>***.attributeName*** : 4D.EntitySelection<!-- END REF -->


#### 説明

データクラス属性はすべてエンティティセレクションのプロパティとして利用可能で、 <!-- REF EntitySelectionClass.attributeName.Summary -->エンティティセレクション内の属性値の "投影" を返します<!-- END REF -->。 Projected values can be a collection or a new entity selection, depending on the [kind](DataClassAttributeClass.md#kind) (`storage` or `relation`) of the attribute.

*   *attributeName* で指定した属性がストレージ型の場合: `.attributeName`は *attributeName* と同じ型の値のコレクションを返します。
*   *attributeName* で指定した属性がリレートエンティティ型の場合: `.attributeName` は *attributeName* と同じ型のリレート値の新規エンティティセレクションを返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。
*   *attributeName* で指定した属性がリレートエンティティズ型の場合: `.attributeName` は *attributeName* と同じ型のリレート値の新規エンティティセレクションを返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。


エンティティセレクションのプロパティとしてリレーション属性が使用されると、返される結果は、たとえ返されるエンティティが一つだけだとしても、常に新しいエンティティセレクションとなります。 エンティティが何も返ってこない場合には、返されるのは空のエンティティセレクションです。

属性がエンティティセレクション内に存在しない場合、エラーが返されます。






#### 例題 1

ストレージ値の投影:


```4d
 var $firstNames : Collection
 $entitySelection:=ds.Employee.all()
 $firstNames:=$entitySelection.firstName // firstName は文字列型です
```

返されるのは文字列のコレクションとなります。例:

```4d
[
    "Joanna",
    "Alexandra",
    "Rick"
]
```

#### 例題 2

リレートエンティティの投影:

```4d
 var $es; $entitySelection : cs.EmployeeSelection
 $entitySelection:=ds.Employee.all()
 $es:=$entitySelection.employer // employer は Companyデータクラスにリレートされています
```

返されるオブジェクトは、重複してるもの (あれば) を取り除いた、Company のエンティティセレクションです。

#### 例題 3

リレートエンティティズの投影:

```4d
 var $es : cs.EmployeeSelection
 $es:=ds.Employee.all().directReports // directReports は Employee データクラスにリレートされています
```

返されるオブジェクトは、重複してるもの (あれば) を取り除いた、Employee のエンティティセレクションです。

<!-- END REF -->




<!-- REF EntitySelectionClass.add().Desc -->
## .add()

<details><summary>履歴</summary>
| バージョン  | 内容                       |
| ------ | ------------------------ |
| v18 R5 | 追加可能なエンティティセレクションのみをサポート |
| v17    | 追加                       |
</details>


<!-- REF #EntitySelectionClass.add().Syntax -->
**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->
| 参照     | タイプ                |    | 説明                      |
| ------ | ------------------ |:--:| ----------------------- |
| entity | 4D.Entity          | -> | エンティティセレクションに追加するエンティティ |
| 戻り値    | 4D.EntitySelection | -> | 追加エンティティを含むエンティティセレクション |
<!-- END REF -->


#### 説明

`.add()` 関数は、 <!-- REF #EntitySelectionClass.add().Summary -->*entity* に渡したエンティティをエンティティセレクションに追加し、編集されたエンティティセレクションを返します<!-- END REF -->。
> このコマンドは、元のエンティティセレクションを変更します。

**Warning:** The entity selection must be *alterable*, i.e. it has been created for example by [`.newSelection()`](DataClassClass.md#newselection) or `Create entity selection`, otherwise `.add()` will return an error. 共有可能なエンティティセレクションはエンティティの追加を受け付けないからです。 詳細については [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。


*   エンティティセレクションが順列ありの場合、*entity* 引数のエンティティはセレクションの最後に追加されます。 同じエンティティへの参照がそのエンティティセレクションにすでに所属していた場合、エンティティは重複することになり、同エンティティの新しい参照が追加されます。
*   エンティティセレクションが順列なしの場合、*entity* 引数のエンティティはセレクションの不特定の場所へ追加され、順番付けはされません。
> 詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

編集されたエンティティセレクションが関数から返されるため、関数の呼び出しをつなげることができます。

*entity* 引数のエンティティとエンティティセレクションが同じデータクラスに属していない場合、エラーが発生します。 追加するエンティティが Null であった場合には、エラーは発生しません。

#### 例題 1

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"S@") // 共有可能なエンティティセレクションです
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees:=$employees.copy() // 追加可能なエンティティセレクションを取得します
 $employees.add($employee) // $employee エンティティが $employees エンティティセレクションへと追加されます
```

#### 例題 2

関数の呼び出しをつないでいくことができます:

```4d
 var $sel : cs.ProductSelection
 var $p1;$p2;$p3 : cs.ProductEntity

 $p1:=ds.Product.get(10)
 $p2:=ds.Product.get(11)
 $p3:=ds.Product.get(12)
 $sel:=ds.Product.query("ID > 50")
 $sel:=$sel.copy()
 $sel:=$sel.add($p1).add($p2).add($p3)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.and().Desc -->
## .and()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |
</details>

<!-- REF #EntitySelectionClass.and().Syntax -->
**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->


<!-- REF #EntitySelectionClass.and().Params -->
| 参照              | タイプ                |    | 説明                                     |
| --------------- | ------------------ |:--:| -------------------------------------- |
| entity          | 4D.Entity          | -> | 交差するエンティティ                             |
| entitySelection | 4D.EntitySelection | -> | 交差するエンティティセレクション                       |
| 戻り値             | 4D.EntitySelection | <- | AND論理演算子による共通部分の結果を格納する新しいエンティティセレクション |
<!-- END REF -->


#### 説明

`.and()` 関数は、 <!-- REF #EntitySelectionClass.and().Summary -->エンティティセレクションと *entity* あるいは *entitySelection* 引数をAND論理演算子を使用して結合します<!-- END REF -->。戻り値は、エンティティセレクションと引数の両方から参照されているエンティティのみを格納した、順列なしの新規エンティティセレクションです。

*   *entity* 引数を渡した場合、引数のエンティティをエンティティセレクションと結合させることになります。 エンティティがエンティティセレクションに属している場合、そのエンティティのみを格納する新しいエンティティセレクションが返されます。 そうでない場合、空のエンティティセレクションが返されます。
*   *entitySelection* 引数を渡した場合、二つのエンティティセレクションを結合させることになります。 両方のセレクションから参照されているエンティティのみを格納する新しいエンティティセレクションが返されます。 重複するエンティティがなかった場合、空のエンティティセレクションが返されます。
> [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。 返されるセレクションは常に順列なしのものになります。

元のエンティティセレクションあるいは *entitySelection* 引数が空であった場合、あるいは*entity* 引数が Null であった場合、空のエンティティセレクションが返されます。

元のエンティティセレクションおよび引数が同じデータクラスのものでない場合、エラーが返されます。


#### 例題 1


```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@")   
  // $employees エンティティセレクションには、主キー710のエンティティと
  // その他のエンティティが含まれます
  // 例: "Colin Hetrick" / "Grady Harness" / "Sherlock Holmes" (主キー710)
 $employee:=ds.Employee.get(710) // "Sherlock Holmes" を返します

 $result:=$employees.and($employee) // $result は主キー710 ("Sherlock Holmes") の
  // エンティティのみを格納するエンティティセレクション。
```


#### 例題 2

"Jones" という名前で、New York に住んでいる従業員のセレクションを取得します:

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2)
```

<!-- END REF -->


<!-- REF EntitySelectionClass.average().Desc -->
## .average()

<details><summary>履歴</summary>
| バージョン  | 内容                                  |
| ------ | ----------------------------------- |
| v18 R6 | エンティティセレクションが空の場合には undefined を返します |
| v17    | 追加                                  |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->
**.average**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->
| 参照            | タイプ  |    | 説明                                                            |
| ------------- | ---- |:--:| ------------------------------------------------------------- |
| attributePath | テキスト | -> | 計算に使用する属性パス                                                   |
| 戻り値           | 実数   | <- | エンティティの属性値の算術平均 (相加平均) (エンティティセレクションがからの場合には undefined を返します) |
<!-- END REF -->

#### 説明

`.average()` 関数は、 <!-- REF #EntitySelectionClass.average().Summary -->*attributePath* に指定した、エンティティセレクション内の null でない値の算術平均 (相加平均) を返します<!-- END REF -->。

*attributePath* 引数として、評価する属性パスを渡します。

計算の対象となるのは数値のみです。 ただし、エンティティセレクションの *attributePath* 引数で指定したパスに異なる型の値が混在している場合、`.average()` はすべてのスカラー要素を対象として平均値を算出します。
> 日付値は数値 (秒数) に変換され、平均を計算するのに使用されます。

エンティティセレクションが空の場合、または *attributePath* 引数に数値型の値が含まれていない場合には、`.average()` は **undefined** を返します。

以下の場合には、エラーが返されます:

*   *attributePath* はリレート属性である
*   *attributePath* がエンティティセレクションデータクラス内に存在しない属性を指定している場合。


#### 例題

給与が平均より高い従業員の一覧を取得します:

```4d
 var $averageSalary : Real
 var $moreThanAv : cs.EmployeeSelection
 $averageSalary:=ds.Employee.all().average("salary")
 $moreThanAv:=ds.Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->



<!-- REF EntitySelectionClass.contains().Desc -->
## .contains()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->
**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->
| 参照     | タイプ       |    | 説明                                                |
| ------ | --------- |:--:| ------------------------------------------------- |
| entity | 4D.Entity | -> | 評価するエンティティ                                        |
| 戻り値    | ブール       | <- | エンティティがエンティティセレクションに属している場合には true、そうでない場合は false |
<!-- END REF -->

#### 説明

`.contains()` 関数は、 <!-- REF #EntitySelectionClass.contains().Summary -->エンティティ参照がエンティティセレクションに属している場合には true を返します<!-- END REF -->。そうでない場合には false を返します。

*entity* 引数として、エンティティセレクション内で検索するエンティティを渡します。 エンティティが Null の場合、関数は false を返します。

*entity* 引数とエンティティセレクションが同じデータクラスのものでない場合、エラーが生成されます。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName=:1";"H@")
 $employee:=ds.Employee.get(610)

 If($employees.contains($employee))
    ALERT("主キー610のエンティティのラストネームは H で始まります。")
 Else
    ALERT("主キー610のエンティティのラストネームは H で始まりません。")
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.count().Desc -->
## .count()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->
**.count**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->
| 参照            | タイプ  |    | 説明                                            |
| ------------- | ---- |:--:| --------------------------------------------- |
| attributePath | テキスト | -> | 計算に使用する属性パス                                   |
| 戻り値           | 実数   | <- | エンティティセレクション内の *attributePath* が null でない値の個数 |
<!-- END REF -->

#### 説明

`.count()` 関数は、 <!-- REF #EntitySelectionClass.count().Summary -->エンティティセレクション内で *attributePath* に指定したパスの値が null でないエンティティの数を返します<!-- END REF -->。
> 対象となるのはスカラー値のみです。 オブジェクトあるいはコレクション型の値は Null値とみなされます。

以下の場合には、エラーが返されます:

*   *attributePath* はリレート属性である
*   *attributePath* がエンティティセレクションデータクラス内に存在しない場合。

#### 例題

ある会社の全従業員のうち、役職のない者を除いた人数を確認します:

```4d
 var $sel : cs.EmployeeSelection
 var $count : Real

 $sel:=ds.Employee.query("employer = :1";"Acme, Inc")
 $count:=$sel.count("jobtitle")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.copy().Desc -->
## .copy()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->
**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->
| 参照    | タイプ                |    | 説明                                  |
| ----- | ------------------ |:--:| ----------------------------------- |
| オプション | 整数                 | -> | `ck shared`: 共有可能なエンティティセレクションを返します |
| 戻り値   | 4D.EntitySelection | <- | エンティティセレクションのコピー                    |
<!-- END REF -->

#### 説明

`.copy()` 関数は、 <!-- REF #EntitySelectionClass.copy().Summary -->元のエンティティセレクションのコピーを返します<!-- END REF -->。

> この関数は、元のエンティティセレクションを変更しません。

*option* パラメーターが省略された場合はデフォルトで、たとえコピー元が共有可能なエンティティセレクションであったとしても、関数はデフォルトで追加可能な (共有不可の) 新規エンティティセレクションを返します。 共有可能なエンティティセレクションを取得するには、*option* に `ck shared` 定数を渡します。

> 詳細については [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。

#### 例題

フォームロード時に、商品データを格納するための新規の空エンティティセレクションを作成します:

```4d
 Case of
    :(Form event code=On Load)
       Form.products:=ds.Products.newSelection()
 End case

```

このエンティティセレクションに商品を登録したのちに、複数のプロセスでこの商品データを共有するには、 Form.products を共有可能なエンティティセレクションとしてコピーします:

```4d
 ...
  // Form.products エンティティセレクションに商品データを登録します
 Form.products.add(Form.selectedProduct)

 Use(Storage)
    If(Storage.products=Null)
       Storage.products:=New shared object()
    End if

    Use(Storage.products)
       Storage.products:=Form.products.copy(ck shared)
    End use
 End use
```

<!-- END REF -->


<!-- REF EntitySelectionClass.distinct().Desc -->
## .distinct()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->
**.distinct**( *attributePath* : Text { ; *option* : Integer } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->
| 参照            | タイプ    |    | 説明                                                       |
| ------------- | ------ |:--:| -------------------------------------------------------- |
| attributePath | テキスト   | -> | 重複しない値を取得する属性のパス                                         |
| オプション         | 整数     | -> | `dk diacritical`: アクセント等の発音区別符号を無視しない評価 (たとえば "A" # "a") |
| 戻り値           | コレクション | <- | 重複しない値のみを格納したコレクション                                      |
<!-- END REF -->

#### 説明

`.distinct()` 関数は、 <!-- REF #EntitySelectionClass.distinct().Summary -->*attributePath* に指定した、エンティティセレクション内の重複しない (異なる) 値のみを格納したコレクションを返します<!-- END REF -->。

返されたコレクションは自動的に並べ替えられています。 **Null** 値は返されません。

*attributePath* 引数として、固有の値を取得したいエンティティ属性を渡します。 スカラー値 (テキスト、数値、ブール、あるいは日付) のみが可能です。 *attributePath* のパスが異なる型の値を格納しているオブジェクト属性であった場合、まず最初に型ごとにグループ分けされ、そのあとで並べ替えされます。 型は以下の順番で返されます:

1.  ブール
2.  文字列
3.  数値
4.  日付

You can use the `[]` notation to designate a collection when *attributePath* is a path within an object (see examples).

デフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。 If you want the evaluation to be case sensitive or to differentiate accented characters, pass the `dk diacritical` constant in the *option* parameter.

以下の場合には、エラーが返されます:

*   *attributePath* はリレート属性である
*   *attributePath* がエンティティセレクションデータクラス内に存在しない場合。

#### 例題

You want to get a collection containing a single element per country name:

```4d
 var $countries : Collection
 $countries:=ds.Employee.all().distinct("address.country")
```

`nicknames` is a collection and `extra` is an object attribute:

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.drop().Desc -->
## .drop()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->
**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->
| 参照   | タイプ                |    | 説明                                                            |
| ---- | ------------------ |:--:| ------------------------------------------------------------- |
| mode | 整数                 | -> | `dk stop dropping on first error`: 最初のドロップ不可エンティティで実行を止めます    |
| 戻り値  | 4D.EntitySelection | <- | 成功した場合には空のエンティティセレクション、そうでない場合にはドロップ不可エンティティを格納したエンティティセレクション |
<!-- END REF -->

#### 説明

`.drop()` 関数は、 <!-- REF #EntitySelectionClass.drop().Summary -->データストアのデータクラスに対応するテーブルから、エンティティセレクションに所属しているエンティティを削除します<!-- END REF -->。 エンティティセレクションはメモリ内に残ります。
> Removing entities is permanent and cannot be undone. It is recommended to call this action in a transaction in order to have a rollback option.

If a locked entity is encountered during the execution of `.drop()`, it is not removed. By default, the method processes all entities of the entity selection and returns non-droppable entities in the entity selection. If you want the method to stop execution at the first encountered non-droppable entity, pass the `dk stop dropping on first error` constant in the *mode* parameter.

#### 例題

Example without the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped is an entity selection containing all the not dropped entities
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```

Example with the `dk stop dropping on first error` option:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped is an entity selection containing the first not dropped entity
 If($notDropped.length=0) //The delete action is successful, all the entities have been deleted
    ALERT("You have dropped "+String($employees.length)+" employees") //The dropped entity selection remains in memory
 Else
    ALERT("Problem during drop, try later")
 End if
```


<!-- END REF -->



<!-- REF EntitySelectionClass.extract().Desc -->
## .extract()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>


<!-- REF #EntitySelectionClass.extract().Syntax -->**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->


<!-- REF #EntitySelectionClass.extract().Params -->
| 参照            | タイプ    |    | 説明                                                        |
| ------------- | ------ |:--:| --------------------------------------------------------- |
| attributePath | テキスト   | -> | 新しいコレクションに抽出する値の属性パス                                      |
| targetPath    | テキスト   | -> | 抽出先の属性パスあるいは属性名                                           |
| オプション         | 整数     | -> | `ck keep null`: 返されるコレクションに null 属性を含めます (デフォルトでは無視されます)。 |
| 戻り値           | コレクション | <- | 抽出した値を格納したコレクション                                          |
<!-- END REF -->

#### 説明

`.extract()` 関数は、 <!-- REF #EntitySelectionClass.extract().Summary -->*attributePath* で指定した値をエンティティセレクションから抽出し、コレクションに格納して返します<!-- END REF -->。

*attributePath* can refer to:

*   a scalar dataclass attribute,
*   related entity,
*   related entities.

If *attributePath* is invalid, an empty collection is returned.

This function accepts two syntaxes.

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* values of the entity selection.

By default, entities for which *attributePath* is *null* or undefined are ignored in the resulting collection. You can pass the `ck keep null` constant in the *option* parameter to include these values as **null** elements in the returned collection.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as a collection of entities (duplications are kept).
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as a collection of entity selections.


**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

With this syntax, `.extract()` populates the returned collection with the *attributePath* properties. Each element of the returned collection is an object with *targetPath* properties filled with the corresponding *attributePath* properties. Null値はそのまま保持されます (このシンタックスでは *option* に引数を渡しても無視されます)。

If several *attributePath* are given, a *targetPath* must be given for each. Only valid pairs \[*attributePath*, *targetPath*] are extracted.

*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntity" are extracted as an entity.
*   Dataclass attributes with [.kind](DataClassAttributeClass.md#kind) = "relatedEntities" are extracted as an entity selection.

> Entities of a collection of entities accessed by \[ ] are not reloaded from the database.


#### 例題

以下のテーブルとリレーションを前提とします:

![](assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  //$firstnames is a collection of Strings


 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  //$addresses is a collection of entities related to dataclass Address
  //Null values for address are extracted
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  //$mailing is a collection of objects with properties "who" and "to"
  //"who" property content is String type 
  //"to" property content is entity type (Address dataclass)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  //$mailing is a collection of objects with properties "who" and "city"
  //"who" property content is String type 
  //"city" property content is String type 
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  //$teachers is a collection of objects with properties "where" and "who"
  //"where" property content is String
  //"who" property content is an entity selection (Teachers dataclass)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers is a collection of entity selections
 $teachers:=ds.Address.all().extract("teachers")
```

<!-- END REF -->



<!-- REF EntitySelectionClass.first().Desc -->
## .first()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->
**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->
| 参照  | タイプ       |    | 説明                                        |
| --- | --------- |:--:| ----------------------------------------- |
| 戻り値 | 4D.Entity | <- | エンティティセレクションの先頭エンティティへの参照 (見つからなければ null) |
<!-- END REF -->

#### 説明

`.first()` 関数は、 <!-- REF #EntitySelectionClass.first().Summary -->エンティティセレクションの先頭エンティティへの参照を返します<!-- END REF -->。

The result of this function is similar to:

```4d
 $entity:=$entitySel[0]
```

There is, however, a difference between both statements when the selection is empty:


```4d
 var $entitySel : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") //no matching entity
  //entity selection is then empty
 $entity:=$entitySel.first() //returns Null
 $entity:=$entitySel[0]  //generates an error
```

#### 例題


```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary > :1";100000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.first()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.getDataClass().Desc -->
## .getDataClass()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->
**.getDataClass()** : 4D.DataClass<!-- END REF -->


<!-- REF #EntitySelectionClass.getDataClass().Params -->
| 参照  | タイプ          |    | 説明                        |
| --- | ------------ |:--:| ------------------------- |
| 戻り値 | 4D.DataClass | <- | エンティティセレクションが所属しているデータクラス |
<!-- END REF -->

#### 説明

`.getDataClass()` 関数は、 <!-- REF #EntitySelectionClass.getDataClass().Summary -->エンティティセレクションのデータクラスを返します<!-- END REF -->。

This function is mainly useful in the context of generic code.

#### 例題

The following generic code duplicates all entities of the entity selection:

```4d
  //duplicate_entities method
  //duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null //reset the primary key
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->


<!-- REF EntitySelectionClass.isAlterable().Desc -->
## .isAlterable()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->
**.isAlterable()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->
| 参照  | タイプ |    | 説明                                         |
| --- | --- |:--:| ------------------------------------------ |
| 戻り値 | ブール | <- | エンティティセレクションが追加可能であれば true、それ以外の場合には false |
<!-- END REF -->

#### 説明

`.isAlterable()` 関数は、 <!-- REF #EntitySelectionClass.isAlterable().Summary -->エンティティセレクションが追加可能の場合には true を返します<!-- END REF -->。それ以外の場合には false を返します。

詳細については [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。

#### 例題

You are about to display `Form.products` in a [list box](FormObjects/listbox_overview.md) to allow the user to add new products. You want to make sure it is alterable so that the user can add new products without error:

```4d
If (Not(Form.products.isAlterable()))
    Form.products:=Form.products.copy()
End if
...
Form.products.add(Form.product)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.isOrdered().Desc -->
## .isOrdered()

<details><summary>履歴</summary>

| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->
**.isOrdered()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->
| 参照  | タイプ |    | 説明                                        |
| --- | --- |:--:| ----------------------------------------- |
| 戻り値 | ブール | <- | 順列ありエンティティセレクションの場合には true、そうでない場合は false |
<!-- END REF -->

#### 説明

`.isOrdered()` 関数は、 <!-- REF #EntitySelectionClass.isOrdered().Summary -->エンティティセレクションが順列ありであれば true を返します<!-- END REF -->。順列なしであれば false を返します。
> This function always returns True when the entity selection comes from a remote datastore.

詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。


#### 例題


```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // Gets the entity with primary key 714

  //In an ordered entity selection, we can add the same entity several times (duplications are kept)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)

 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("The entity selection is ordered and contains "+String($employees.length)+" employees")
 End if
```



<!-- END REF -->


<!-- REF EntitySelectionClass.last().Desc -->
## .last()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->
**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->
| 参照  | タイプ       |    | 説明                                        |
| --- | --------- |:--:| ----------------------------------------- |
| 戻り値 | 4D.Entity | <- | エンティティセレクションの最終エンティティへの参照 (見つからなければ null) |
<!-- END REF -->

#### 説明

`.last()` 関数は、 <!-- REF #EntitySelectionClass.last().Summary -->エンティティセレクションの最終エンティティへの参照を返します<!-- END REF -->。

The result of this function is similar to:

```4d
 $entity:=$entitySel[length-1]
```

エンティティセレクションが空の場合、関数は null を返します。


#### 例題


```4d
 var $entitySelection : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySelection:=ds.Emp.query("salary < :1";50000)
 If($entitySelection.length#0)
    $entity:=$entitySelection.last()
 End if
```

<!-- END REF -->



<!-- REF EntitySelectionClass.length.Desc -->
## .length

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->
**.length** : Integer<!-- END REF -->


#### 説明

`.length` プロパティは、 <!-- REF #EntitySelectionClass.length.Summary -->エンティティセレクション内のエンティティの数を返します<!-- END REF -->。 エンティティセレクションが空の場合、関数は 0 を返します。

エンティティセレクションは、常に `.length` プロパティを持っています。


#### 例題

```4d
 var $vSize : Integer
 $vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" male employees found.")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.max().Desc -->
## .max()

<details><summary>履歴</summary>
| バージョン  | 内容                                  |
| ------ | ----------------------------------- |
| v17    | 追加                                  |
| v18 R6 | エンティティセレクションが空の場合には undefined を返します |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->
**.max**( *attributePath* : Text ) : any<!-- END REF -->


<!-- REF #EntitySelectionClass.max().Params -->
| 参照            | タイプ  |    | 説明          |
| ------------- | ---- |:--:| ----------- |
| attributePath | テキスト | -> | 計算に使用する属性パス |
| 戻り値           | any  | <- | 属性の最大値      |
<!-- END REF -->

#### 説明

`.max()` 関数は、 <!-- REF #EntitySelectionClass.max().Summary -->*attributePath* に指定したエンティティセレクションの属性値のうち最高の (あるいは最大の) 値を返します<!-- END REF -->。 It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in *attributePath* a path to an object attribute containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.


以下の場合には、エラーが返されます:

*   *attributePath* はリレート属性である
*   *attributePath* がエンティティセレクションデータクラス内に存在しない属性を指定している場合。



#### 例題

We want to find the highest salary among all the female employees:

```4d
 var $sel : cs.EmpSelection
 var $maxSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $maxSalary:=$sel.max("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.min().Desc -->
## .min()

<details><summary>履歴</summary>
| バージョン  | 内容                                  |
| ------ | ----------------------------------- |
| v17    | 追加                                  |
| v18 R6 | エンティティセレクションが空の場合には undefined を返します |


</details>

<!-- REF #EntitySelectionClass.min().Syntax -->
**.min**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->
| 参照            | タイプ  |    | 説明          |
| ------------- | ---- |:--:| ----------- |
| attributePath | テキスト | -> | 計算に使用する属性パス |
| 戻り値           | any  | <- | 属性の最小値      |
<!-- END REF -->

#### 説明

`.min()` 関数は、 <!-- REF #EntitySelectionClass.min().Summary --> *attributePath* に指定したエンティティセレクションの属性値のうち最低の (あるいは最小の) 値を返します<!-- END REF -->。  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in *attributePath* a path to an object attribute containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

以下の場合には、エラーが返されます:

*   *attributePath* はリレート属性である
*   *attributePath* がエンティティセレクションデータクラス内に存在しない属性を指定している場合。


#### 例題

In this example, we want to find the lowest salary among all the female employees:

```4d
 var $sel : cs.EmpSelection
 var $minSalary : Real
 $sel:=ds.Employee.query("gender = :1";"female")
 $minSalary:=$sel.min("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.minus().Desc -->
## .minus()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->
**.minus**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.minus**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->
| 参照              | タイプ                |    | 説明                                         |
| --------------- | ------------------ |:--:| ------------------------------------------ |
| entity          | 4D.Entity          | -> | 除外するエンティティ                                 |
| entitySelection | 4D.EntitySelection | -> | 除外するエンティティセレクション                           |
| 戻り値             | 4D.EntitySelection | <- | 新しいエンティティセレクション、あるいは既存のエンティティセレクションへの新しい参照 |
<!-- END REF -->

#### 説明

`.minus()` 関数は、 <!-- REF #EntitySelectionClass.minus().Summary -->対象のエンティティセレクションから、*entity* 引数のエンティティ、あるいは*entitySelection* 引数のエンティティセレクションに含まれるエンティティを除外し、結果のエンティティセレクションを返します<!-- END REF -->。

*   If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
*   If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*.
> [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。 返されるセレクションは常に順列なしのものになります。

If the original entity selection or both the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

元のエンティティセレクションおよび引数が同じデータクラスのものでない場合、エラーが返されます。


#### 例題 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@") 
  // The $employees entity selection contains the entity with primary key 710 and other entities
  // for ex. "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (primary key 710)

 $employee:=ds.Employee.get(710) // Returns "Sherlock Holmes"

 $result:=$employees.minus($employee) //$result contains "Colin Hetrick", "Grady Harness"
```


#### 例題 2

We want to have a selection of female employees named "Jones" who live in New York :

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```

<!-- END REF -->


<!-- REF EntitySelectionClass.or().Desc -->
## .or()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->
**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->
| 参照              | タイプ                |    | 説明                                        |
| --------------- | ------------------ |:--:| ----------------------------------------- |
| entity          | 4D.Entity          | -> | 交差するエンティティ                                |
| entitySelection | 4D.EntitySelection | -> | 交差するエンティティセレクション                          |
| 戻り値             | 4D.EntitySelection | <- | 新しいエンティティセレクション、あるいは元のエンティティセレクションへの新しい参照 |
<!-- END REF -->

#### 説明

`.or()` 関数は、 <!-- REF #EntitySelectionClass.or().Summary -->OR論理演算子を使用して、*entity* または *entitySelection* のエンティティと対象エンティティセレクションを組み合わせます<!-- END REF -->。戻り値は、渡した引数とエンティティセレクションの全エンティティを格納する順列なしの新規エンティティセレクションです。

*   If you pass *entity* as parameter, you compare this entity with the entity selection. If the entity belongs to the entity selection, a new reference to the entity selection is returned. Otherwise, a new entity selection containing the original entity selection and the entity is returned.
*   If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or *entitySelection* is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).
> [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。 返されるセレクションは常に順列なしのものになります。

If the original entity selection and the *entitySelection* parameter are empty, an empty entity selection is returned. If the original entity selection is empty, a reference to *entitySelection* or an entity selection containing only *entity* is returned.

If *entitySelection* is empty or if *entity* is Null, a new reference to the original entity selection is returned.

元のエンティティセレクションおよび引数が同じデータクラスのものでない場合、エラーが返されます。


#### 例題 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") //Returns "Colin Hetrick","Grady Harness"
 $employees2:=ds.Employee.query("firstName = :1";"C@") //Returns "Colin Hetrick", "Cath Kidston"
 $result:=$employees1.or($employees2) //$result contains "Colin Hetrick", "Grady Harness","Cath Kidston"
```

#### 例題 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // Returns "Colin Hetrick","Grady Harness", "Sherlock Holmes"
 $employee:=ds.Employee.get(686) //the entity with primary key 686 does not belong to the $employees entity selection
  //It matches the employee "Mary Smith"

 $result:=$employees.or($employee) //$result contains "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith"
```

<!-- END REF -->


<!-- REF EntitySelectionClass.orderBy().Desc -->
## .orderBy()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->
**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->
| 参照          | タイプ                |    | 説明                            |
| ----------- | ------------------ |:--:| ----------------------------- |
| pathString  | テキスト               | -> | エンティティセレクションの属性パスと並べ替えの指定     |
| pathObjects | コレクション             | -> | 条件オブジェクトのコレクション               |
| 戻り値         | 4D.EntitySelection | <- | 指定された順番に並べ替えられた新規エンティティセレクション |
<!-- END REF -->

#### 説明

`.orderBy()` 関数は、 <!-- REF #EntitySelectionClass.orderBy().Summary -->エンティティセレクションの全エンティティが *pathString* または *pathObjects* が指定する順番に並べ替えられた、新規の順列ありのエンティティセレクションを返します<!-- END REF -->。
> * この関数は、エンティティセレクションを変更しません。
*   詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

You must use a criteria parameter to define how the entities must be sorted. Two different parameters are supported:

*   *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. The syntax is:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

The order in which the attributes are passed determines the sorting priority of the entities. By default, attributes are sorted in ascending order. 並び順を設定するには、プロパティパスの後に半角スペースで区切ったあとに、昇順を指定するには "asc"、降順を指定するには "desc" を渡します。

*   *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

By default, attributes are sorted in ascending order ("descending" is false).

You can add as many objects in the criteria collection as necessary.
> Null values are evaluated as less than other values.

#### 例題


```4d
// order by formula
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // order by collection with or without sort orders
 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"firstName";"descending";False))
 $orderColl.push(New object("propertyPath";"salary";"descending";True))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)

 $orderColl:=New collection
 $orderColl.push(New object("propertyPath";"manager.lastName"))
 $orderColl.push(New object("propertyPath";"salary"))
 $sortedEntitySelection:=$entitySelection.orderBy($orderColl)
```


<!-- END REF -->


<!-- REF EntitySelectionClass.orderByFormula().Desc -->
## .orderByFormula( )

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R6 | 追加 |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->
**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->
| 参照            | タイプ                |    | 説明                                         |
| ------------- | ------------------ |:--:| ------------------------------------------ |
| formulaString | テキスト               | -> | フォーミュラ文字列                                  |
| formulaObj    | オブジェクト             | -> | フォーミュラオブジェクト                               |
| sortOrder     | 整数                 | -> | `dk ascending` (デフォルト) または `dk descending` |
| settings      | オブジェクト             | -> | フォーミュラに渡す引数                                |
| 戻り値           | 4D.EntitySelection | <- | 順列ありの新規エンティティセレクション                        |
<!-- END REF -->

#### 説明

`.orderByFormula()` 関数は、 エンティティセレクションの全エンティティが *formulaString* または *formulaObj*、および (任意の) *sortOrder* や *settings* 引数が指定する順番に並べられた、 <!-- REF #EntitySelectionClass.orderByFormula().Summary -->順列ありの新規エンティティセレクションを返します<!-- END REF --> 。
> この関数は、元のエンティティセレクションを変更しません。

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. The result must be of a sortable type (boolean, date, number, text, time, null).
> A null result is always the smallest value.

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

| 定数            | 結果 | 説明         |
| ------------- | -- | ---------- |
| dk ascending  | 0  | 昇順 (デフォルト) |
| dk descending | 1  | 降順         |

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### 例題 1

Sorting students using a formula provided as text:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

Same sort order but using a formula object:

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // ascending by default
 $es2:=$es1.orderByFormula($formula;dk descending)
```


#### 例題 2

A formula is given as a formula object with parameters; `settings.args` object is received as $1 in the ***computeAverage*** method.

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. A single formula object is used to compute a student's average grade with different coefficients for schoolA and schoolB.

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() //settings object
 $schoolA.args:=New object("english";1;"math";1;"history";1) // Coefficients to compute an average

  //Order students according to school A criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() //settings object
 $schoolB.args:=New object("english";1;"math";2;"history";3) // Coefficients to compute an average

  //Order students according to school B criteria
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // computeAverage method
  // -----------------------------
 #DECLARE ($coefList : Object) -> $result : Integer
 var $subject : Text
 var $average; $sum : Integer

 $average:=0
 $sum:=0

 For each($subject;$coefList)
    $sum:=$sum+$coefList[$subject]
 End for each

 For each($subject;This.marks)
    $average:=$average+(This.marks[$subject]*$coefList[$subject])
 End for each

 $result:=$average/$sum
```

<!-- END REF -->



<!-- REF EntitySelectionClass.query().Desc -->
## .query()

<details><summary>履歴</summary>
| バージョン  | 内容                  |
| ------ | ------------------- |
| v17 R6 | Formula パラメーターをサポート |
| v17 R5 | 値のプレースホルダーをサポート     |
| v17    | 追加                  |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->
**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->
| 参照            | タイプ                |    | 説明                                                                                                              |
| ------------- | ------------------ |:--:| --------------------------------------------------------------------------------------------------------------- |
| queryString   | テキスト               | -> | 検索条件 (文字列)                                                                                                      |
| formula       | オブジェクト             | -> | 検索条件 (フォーミュラオブジェクト)                                                                                             |
| value         | any                | -> | プレースホルダー用の値                                                                                                     |
| querySettings | オブジェクト             | -> | クエリオプション: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                            |
| 戻り値           | 4D.EntitySelection | <- | *queryString* または *formula* に渡した検索条件に合致する、エンティティセレクション内のエンティティから構成された新しいエンティティセレクション|<!-- END REF -->

|

#### 説明

`.query()` 関数は、 <!-- REF #EntitySelectionClass.query().Summary -->エンティティセレクションの全エンティティから、*queryString* または *formula* と任意の *value* 引数で指定した検索条件に合致するエンティティを検索します<!-- END REF -->。戻り値は、見つかったエンティティをすべて格納する `EntitySelection` 型の新しいオブジェクトです。 この関数には、レイジーローディングが適用されます。
> この関数は、元のエンティティセレクションを変更しません。

エンティティが見つからない場合、空のエンティティセレクションが返されます。

For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.
> By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). Note however that, in Client/Server mode, it behaves like an ordered entity selection (entities are added at the end of the selection).

#### 例題 1


```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```


#### 例題 2

追加のクエリ例については、[`DataClass.query()`](DataClassClass.md#query) を参照してください。

#### 参照

データクラスの [`.query()`](DataClassClass.md#query)

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPath.Desc -->
## .queryPath

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->
**.queryPath** : Text<!-- END REF -->


#### 説明

`.queryPath` プロパティは、 <!-- REF #EntitySelectionClass.queryPath.Summary -->実際に 4Dで実行されたクエリの詳細な情報<!-- END REF -->を格納します。 This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page. 

<!-- END REF -->



<!-- REF EntitySelectionClass.queryPlan.Desc -->
## .queryPlan

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->
**.queryPlan** : Text<!-- END REF -->


#### 説明

`.queryPlan` プロパティは、 <!-- REF #EntitySelectionClass.queryPlan.Summary --> 実行前のクエリの詳細な情報 (クエリプラン) を格納します<!-- END REF -->。 This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page. 

<!-- END REF -->


<!-- REF EntitySelectionClass.refresh().Desc -->
## .refresh()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R3 | 追加 |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->
**.refresh()**<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->

#### 説明
> このメソッドはリモートデータストア (クライアント/サーバーモード、または`Open datastore` 接続) においてのみ動作します。

`.refresh()` 関数は、 <!-- REF #EntitySelectionClass.refresh().Summary -->ローカルの ORDAキャッシュにあるエンティティセレクションデータを即座に "無効化" します<!-- END REF --> 。そのため、次に 4Dがエンティティセレクションを必要としたときにはそれがデータベースからリロードされます。

By default, the local ORDA cache is invalidated after 30 seconds. In the context of client / server applications using both ORDA and the classic language, this method allows you to make sure a remote application will always work with the latest data.

#### 例題 1

In this example, classic and ORDA code modify the same data simultaneously:

```4d
 //On a 4D remote

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  //The first entity is loaded in the ORDA cache
 $student:=$selection.first()

  //Update with classic 4D, ORDA cache is not aware of if
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  //to get the latest version, the ORDA cache must be invalidated
 $selection.refresh()
  // Even if cache is not expired, the first entity is reloaded from disk
 $student:=$selection.first()

  //$student.lastname contains "Colin"
```


#### 例題 2

A list box displays the Form.students entity selection and several clients work on it.

```4d
// Form method:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // On client #1, the user loads, updates, and saves the first entity
  // On client #2, the user loads, updates, and saves the same entity
  //
  //
  // On client #1:
 Form.students.refresh() // Invalidates the ORDA cache for the Form.students entity selection
  // The list box content is refreshed from the database with update made by client #2
```


<!-- END REF -->



<!-- REF EntitySelectionClass.slice().Desc -->
## .slice()

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->
**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->
| 参照        | タイプ                |    | 説明                                      |
| --------- | ------------------ |:--:| --------------------------------------- |
| startFrom | 整数                 | -> | 処理を開始するインデックス)                          |
| end       | 整数                 | -> | 終了インデックス (含まれない)                        |
| 戻り値       | 4D.EntitySelection | <- | 抜粋エンティティを格納した新しいエンティティセレクション (シャロウ・コピー) |
<!-- END REF -->

#### 説明

`.slice()` 関数は、*startFrom* の位置 (含まれる) から *end* の位置 (含まれない) または終わりまでの <!-- REF #EntitySelectionClass.slice().Summary -->エンティティセレクションの一部を、新規エンティティセレクションとして返します<!-- END REF -->。 This method returns a shallow copy of the entity selection (it uses the same entity references).
> この関数は、元のエンティティセレクションを変更しません。

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

*   If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). 再計算された値も負の値だった場合、*startFrom* は 0 に設定されます。
*   If *startFrom >= length*, the function returns an empty entity selection.
*   If *end* < 0, it is recalculated as *end:=end+length*.
*   渡された値、あるいは再計算された値が *end* < *startFrom* の場合、関数はなにもしません。

If the entity selection contains entities that were dropped in the meantime, they are also returned.

#### 例題 1

You want to get a selection of the first 9 entities of the entity selection:

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```


#### 例題 2

Assuming we have ds.Employee.all().length = 10

```4d
var $slice : cs.EmployeeSelection
$slice:=ds.Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```

<!-- END REF -->


<!-- REF EntitySelectionClass.sum().Desc -->
## .sum( )

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |


</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->
**.sum**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.sum().Params -->
| 参照            | タイプ  |    | 説明                |
| ------------- | ---- |:--:| ----------------- |
| attributePath | テキスト | -> | 計算に使用する属性パス       |
| 戻り値           | 実数   | <- | エンティティセレクションの値の合計 |
<!-- END REF -->

#### 説明


`.sum()` 関数は、 <!-- REF #EntitySelectionClass.sum().Summary -->*attributePath* に指定したエンティティセレクションの属性値の総和を返します<!-- END REF -->。

エンティティセレクションが空の場合、`.sum()` は 0 を返します。

The sum can only be done on values of number type. If the *attributePath* type is object, only numerical values are taken into account for the calculation (other value types are ignored). In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

以下の場合には、エラーが返されます:

*   *attributePath* is not a numerical or an object attribute,
*   *attributePath* はリレート属性である
*   *attributePath* がエンティティセレクションデータクラス内に存在しない場合。



#### 例題

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```

<!-- END REF -->


<!-- REF EntitySelectionClass.toCollection().Desc -->
## .toCollection( )

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->
**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->
| 参照           | タイプ    |    | 説明                                                                   |
| ------------ | ------ |:--:| -------------------------------------------------------------------- |
| filterString | テキスト   | -> | 抽出するエンティティの属性パスの文字列                                                  |
| filterCol    | コレクション | -> | 抽出するエンティティの属性パスのコレクション                                               |
| options      | 整数     | -> | `dk with primary key`: プライマリーキーを追加<br>`dk with stamp`: スタンプを追加 |
| begin        | 整数     | -> | 開始インデックス                                                             |
| howMany      | 整数     | -> | 抽出するエンティティ数                                                          |
| 戻り値          | コレクション | <- | エンティティセレクションの属性と値を格納したオブジェクトのコレクション                                  |
<!-- END REF -->

#### 説明

`.toCollection()` 関数は、エンティティセレクションの各エンティティの属性名と値に対応する <!-- REF #EntitySelectionClass.toCollection().Summary -->プロパティと値のセットを持つオブジェクト要素を格納するコレクションを作成し、返します <!-- END REF -->。

If no filter parameter is passed or the first parameter contains an empty string or "*", all the attributes are extracted. Attributes with [kind](DataClassAttributeClass.md#kind) property as "relatedEntity" are extracted with the simple form: an object with property \_\_KEY (primary key). Attributes with kind property as "relatedEntities" are not extracted.

Or, you can designate the entity attributes to extract using a filter parameter. You can use one of these two filters:

*   *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
*   *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]


If a filter is specified for an attribute of the `relatedEntity` kind:

*   propertyPath = "relatedEntity" -> it is extracted with simple form
*   propertyPath = "relatedEntity.*" -> 全プロパティが取得されます
*   propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> 指定されたプロパティのみが取得されます


If a filter is specified for an attribute of the `relatedEntities` kind:

*   propertyPath = "relatedEntities.*" -> 全プロパティが取得されます
*   propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> 指定されたプロパティのみが取得されます



In the *options* parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

The *begin* parameter allows you to indicate the starting index of the entities to extract. You can pass any value between 0 and entity selection length-1.

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany*= 3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

An empty collection is returned if:

*   the entity selection is empty, or
*   *begin* is greater than the length of the entity selection.


#### 例題 1

このセクションの例題では、以下のストラクチャーを使います:

![](assets/en/API/dataclassAttribute4.png)


Example without filter or options parameter:

```4d
 var $employeesCollection : Collection
 var $employees : cs.EmployeeSelection

 $employeesCollection:=New collection
 $employees:=ds.Employee.all()
 $employeesCollection:=$employees.toCollection()
```

戻り値:

```4d
[
    {
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    },
    {
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }
]
```

#### 例題 2

Example with options:

```4d
var $employeesCollection : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection("";dk with primary key+dk with stamp)
```

戻り値:

```4d
[
    {
        "__KEY": 416,
        "__STAMP": 1,
        "ID": 416,
        "firstName": "Gregg",
        "lastName": "Wahl",
        "salary": 79100,
        "birthDate": "1963-02-01T00:00:00.000Z",
        "woman": false,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    },
    {
        "__KEY": 417,
        "__STAMP": 1,
        "ID": 417,
        "firstName": "Irma",
        "lastName": "Durham",
        "salary": 47000,
        "birthDate": "1992-06-16T00:00:00.000Z",
        "woman": true,
        "managerID": 412,
        "employerID": 20,
        "photo": "[object Picture]",
        "extra": null,
        "employer": {
            "__KEY": 20
        },
        "manager": {
            "__KEY": 412
        }
    }]
```

#### 例題 3

Example with slicing and filtering on properties:

```4d
var $employeesCollection; $filter : Collection
var $employees : cs.EmployeeSelection

$employeesCollection:=New collection
$filter:=New collection
$filter.push("firstName")
$filter.push("lastName")

$employees:=ds.Employee.all()
$employeesCollection:=$employees.toCollection($filter;0;0;2)
```

戻り値:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl"
    },
    {
        "firstName": "Irma",
        "lastName": "Durham"
    }
]

```


#### 例題 4

Example with `relatedEntity` type with simple form:


```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName,lastName,employer")
```

戻り値:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "__KEY": 20
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "__KEY": 20
        }
    }
   ]
```

#### 例題 5

Example with *filterCol* parameter:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection("firstName";"lastName")
$employeesCollection:=$employees.toCollection($coll)
```

戻り値:

```4d
[
    {
        "firstName": "Joanna",
        "lastName": "Cabrera"
    },
    {
        "firstName": "Alexandra",
        "lastName": "Coleman"
    }
]
```

#### 例題 6

Example with extraction of all properties of a relatedEntity:

```4d
var $employeesCollection; $coll : Collection
$employeesCollection:=New collection
$coll:=New collection
$coll.push("firstName")
$coll.push("lastName")
$coll.push("employer.*")
$employeesCollection:=$employees.toCollection($coll)
```

戻り値:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "ID": 20,
            "name": "India Astral Secretary",
            "creationDate": "1984-08-25T00:00:00.000Z",
            "revenues": 12000000,
            "extra": null
        }
    }
  ]
```

#### 例題 7

Example with extraction of some properties of a relatedEntity:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, employer.name")
```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",

        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Irma",
        "lastName": "Durham",
        "employer": {
            "name": "India Astral Secretary"
        }
    },
    {
        "firstName": "Lorena",
        "lastName": "Boothe",
        "employer": {
            "name": "India Astral Secretary"
        }
    }]
```

#### 例題 8

Example with extraction of some properties of `relatedEntities`:

```4d
 var $employeesCollection : Collection
 $employeesCollection:=New collection
 $employeesCollection:=$employees.toCollection("firstName, lastName, directReports.firstName")
```

戻り値:

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "firstName": "Gary"
            },
            {
                "firstName": "Sadie"
            },
            {
                "firstName": "Christie"
            }
        ]
    },
    {
        "firstName": "Gary",

        "lastName": "Reichert",
        "directReports": [
            {
                "firstName": "Rex"
            },
            {
                "firstName": "Jenny"
            },
            {
                "firstName": "Lowell"
            }
        ]
    }]
```

#### 例題 9

Example with extraction of all properties of `relatedEntities`:

```4d
var $employeesCollection : Collection
$employeesCollection:=New collection
$employeesCollection:=$employees.toCollection("firstName, lastName, directReports.*")

```

```4d
[
    {
        "firstName": "Gregg",
        "lastName": "Wahl",
        "directReports": []
    },    
    {
        "firstName": "Mike",
        "lastName": "Phan",
        "directReports": [
            {
                "ID": 425,
                "firstName": "Gary",
                "lastName": "Reichert",
                "salary": 65800,
                "birthDate": "1957-12-23T00:00:00.000Z",
                "woman": false,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            },
            {
                "ID": 426,
                "firstName": "Sadie",
                "lastName": "Gallant",
                "salary": 35200,
                "birthDate": "2022-01-03T00:00:00.000Z",
                "woman": true,
                "managerID": 424,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 424
                }
            }
                   ]
    },
    {
        "firstName": "Gary",
        "lastName": "Reichert",
        "directReports": [
            {
                "ID": 428,
                "firstName": "Rex",
                "lastName": "Chance",
                "salary": 71600,
                "birthDate": "1968-08-09T00:00:00.000Z",
                "woman": false,

                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            },
            {
                "ID": 429,
                "firstName": "Jenny",
                "lastName": "Parks",
                "salary": 51300,
                "birthDate": "1984-05-25T00:00:00.000Z",
                "woman": true,
                "managerID": 425,
                "employerID": 21,
                "photo": "[object Picture]",
                "extra": null,
                "employer": {
                    "__KEY": 21
                },
                "manager": {
                    "__KEY": 425
                }
            }
           ]
 }
]
```


<!-- END REF -->




<style> h2 { background: #d9ebff;}</style>
