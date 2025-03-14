---
id: EntitySelectionClass
title: EntitySelection
---

エンティティセレクションとは、同じ [データクラス](ORDA/dsMapping.md#データクラス) に所属する一つ以上の[エンティティ](ORDA/dsMapping.md#エンティティ) への参照を格納しているオブジェクトのことです。 エンティティセレクションは、データクラスから 0個、1個、あるいは X個のエンティティを格納することができます (X はデータクラスに格納されているエンティティの総数です)。

エンティティセレクションは、[`.all()`](DataClassClass.md#all)、[`.query()`](DataClassClass.md#query) などの [`DataClass` クラス](DataClassClass.md) の関数や、[`.and()`](#and)、[`orderBy()`](#orderby) など `EntitySelection` クラス自身の関数を用いて、既存のセレクションから作成することができます。 また、[`dataClass.newSelection()`](DataClassClass.md#newselection) 関数または [`Create entity selection`](../commands/create-entity-selection.md) コマンドを使用して、空のエンティティセレクションを作成することもできます。

### 概要

|                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntitySelectionClass.index.Syntax -->](#index)<br/><!-- INCLUDE EntitySelectionClass.index.Summary -->                                                             |
| [<!-- INCLUDE EntitySelectionClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE EntitySelectionClass.attributeName.Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)<br/><!-- INCLUDE #EntitySelectionClass.add().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)<br/><!-- INCLUDE #EntitySelectionClass.and().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.at().Syntax -->](#at)<br/><!-- INCLUDE #EntitySelectionClass.at().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)<br/><!-- INCLUDE #EntitySelectionClass.average().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.clean().Syntax -->](#clean)<br/><!-- INCLUDE #EntitySelectionClass.clean().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)<br/><!-- INCLUDE #EntitySelectionClass.contains().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.copy().Syntax -->](#contains)<br/><!-- INCLUDE #EntitySelectionClass.copy().Summary -->                                                      |
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)<br/><!-- INCLUDE #EntitySelectionClass.count().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)<br/><!-- INCLUDE #EntitySelectionClass.distinct().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.distinctPaths().Syntax -->](#distinctpaths)<br/><!-- INCLUDE #EntitySelectionClass.distinctPaths().Summary -->                               |
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)<br/><!-- INCLUDE #EntitySelectionClass.drop().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)<br/><!-- INCLUDE #EntitySelectionClass.extract().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)<br/><!-- INCLUDE #EntitySelectionClass.first().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)<br/><!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)<br/><!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)<br/><!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)<br/><!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->                                           |
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)<br/><!-- INCLUDE #EntitySelectionClass.last().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)<br/><!-- INCLUDE #EntitySelectionClass.length.Summary -->                                                        |
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)<br/><!-- INCLUDE #EntitySelectionClass.max().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)<br/><!-- INCLUDE #EntitySelectionClass.min().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)<br/><!-- INCLUDE #EntitySelectionClass.minus().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)<br/><!-- INCLUDE #EntitySelectionClass.or().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)<br/><!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)<br/><!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)<br/><!-- INCLUDE #EntitySelectionClass.query().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)<br/><!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)<br/><!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)<br/><!-- INCLUDE #EntitySelectionClass.refresh().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)<br/><!-- INCLUDE #EntitySelectionClass.selected().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)<br/><!-- INCLUDE #EntitySelectionClass.slice().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)<br/><!-- INCLUDE #EntitySelectionClass.sum().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)<br/><!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->                                  |

#### 参照

[`USE ENTITY SELECTION`](../commands/use-entity-selection.md)

<!-- REF EntitySelectionClass.index.Desc -->

## &#91;*index*&#93;

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->***&#91;index&#93;*** : 4D.Entity<!-- END REF -->

#### 説明

`EntitySelection[index]` 記法を使用すると、<!-- REF EntitySelectionClass.index.Summary -->標準のコレクションシンタックスを使用してエンティティセレクション内のエンティティにアクセスすることができます<!-- END REF -->。取得したいエンティティの位置を *index* に渡します。

対応するエンティティはデータストアから再読み込みされる点に注意してください。

*index* には、0 と `.length`-1 の範囲内で数値を指定することができます。

- *index* が範囲外だった場合、エラーが返されます。
- *index* がドロップされたエンティティに対応していた場合、Null値が返されます。

:::caution

`EntitySelection[index]` は代入不可の式です。これは、 [`.lock()`](EntityClass.md#lock) や [`.save()`](EntityClass.md#save) などの関数において、編集可能なエンティティ参照として使用することはできない、ということを意味します。 エンティティを操作するには、戻り値を変数などの代入可能な式に割り当てる必要があります。 例:

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

:::

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->***.attributeName*** : Collection<br/>***.attributeName*** : 4D.EntitySelection<!-- END REF -->

#### 説明

データクラス属性はすべてエンティティセレクションのプロパティとして利用可能で、<!-- REF EntitySelectionClass.attributeName.Summary -->エンティティセレクション内の属性値の "投影" を返します<!-- END REF -->。  戻り値は、属性の種類 ([kind](DataClassClass.md#attributename) が `storage` あるいは `relation`) によって、コレクションあるいは新しいエンティティセレクションのどちらかになります。

- *attributeName* で指定した属性がストレージ型の場合:
 `.attributeName`は *attributeName* と同じ型の値のコレクションを返します。
- *attributeName* で指定した属性がリレートエンティティ型の場合:
 `.attributeName` は *attributeName* と同じ型のリレート値の新規エンティティセレクションを返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。
- *attributeName* で指定した属性がリレートエンティティズ型の場合:
 `.attributeName` は *attributeName* と同じ型のリレート値の新規エンティティセレクション を返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。

エンティティセレクションのプロパティとしてリレーション属性が使用されると、返される結果は、たとえ返されるエンティティが一つだけだとしても、常に新しいエンティティセレクションとなります。 エンティティが何も返ってこない場合には、返されるのは空のエンティティセレクション です。

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

| リリース  | 内容                            |
| ----- | ----------------------------- |
| 19 R7 | *entitySelection* パラメーターをサポート |
| 18 R5 | 追加可能なエンティティセレクションのみをサポート      |
| 17    | 追加                            |

</details>

<!-- REF #EntitySelectionClass.add().Syntax -->**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.add**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->

| 引数              | 型                                  |                             | 説明                                                  |
| --------------- | ---------------------------------- | :-------------------------: | --------------------------------------------------- |
| entity          | 4D.Entity          |              ->             | エンティティセレクションに追加するエンティティ                             |
| entitySelection | 4D.EntitySelection |              ->             | エンティティセレクションに追加するエンティティセレクション                       |
| 戻り値             | 4D.EntitySelection | <- | 追加した *entity* または *entitySelection* を含むエンティティセレクション |

<!-- END REF -->

#### 説明

`.add()` 関数は、<!-- REF #EntitySelectionClass.add().Summary -->*entity* または *entitySelection* で渡したエンティティを対象のエンティティセレクションに追加し、編集されたエンティティセレクションを返します<!-- END REF -->。

> このコマンドは、元のエンティティセレクションを変更します。

:::info 警告

エンティティセレクションは *追加可能* のものでなければなりません。つまり [`.newSelection()`](DataClassClass.md#newselection) あるいは `Create entity selection` などで作成されたものでなければならないということです。そうでない場合、 `.add()` はエラーを返します。 共有可能なエンティティセレクションはエンティティの追加を受け付けないからです。 詳細については [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。

:::

**エンティティの追加**

- エンティティセレクションが順列ありの場合、*entity* 引数のエンティティはセレクションの最後に追加されます。 同じエンティティへの参照がそのエンティティセレクションにすでに所属していた場合、エンティティは重複することになり、同エンティティの新しい参照が追加されます。
- エンティティセレクションが順列なしの場合、*entity* 引数のエンティティはセレクションの不特定の場所へ追加され、順番付けはされません。

**エンティティセレクションの追加**

- 元のエンティティセレクションが順列ありの場合、*entitySelection* 引数のエンティティセレクションはセレクションの最後に追加されます。 *entitySelection* 内の同じエンティティへの参照が元のエンティティセレクション にすでに所属していた場合、エンティティは重複することになり、同エンティティの新しい参照が追加されます。
- エンティティセレクションが順列なしの場合、順列ありに変更されます。

> 詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

編集されたエンティティセレクションが関数から返されるため、関数の呼び出しをつなげることができます。

*entity* 引数のエンティティとエンティティセレクション が同じデータクラスに属していない場合、エラーが発生します。 追加するエンティティが Null であった場合には、エラーは発生しません。

#### 例題 1

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.newSelection()
 $employee:=ds.Employee.new()
 $employee.lastName:="Smith"
 $employee.save()
 $employees.add($employee) //The $employee entity is added to the $employees entity selection
```

#### 例題 2

関数の呼び出しをつないでいくことができます:

```4d
 var $sel : cs.ProductSelection
 var $p1;$p2;$p3 : cs.ProductEntity

 $p1:=ds.Product.get(10)
 $p2:=ds.Product.get(11)
 $p3:=ds.Product.get(12)
 $sel:=ds.Product.newSelection()
 $sel:=$sel.add($p1).add($p2).add($p3)
```

#### 例題 3

ユーザーインターフェースにおいて、2つのリストがあるとします。 ユーザーは 1つ目のリストのアイテムを複数選択し、それらを 2つ目のリストに追加します。

```4d
$sellist2:=$sellist2.add($sellist1)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.and().Desc -->

## .and()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.and().Syntax -->**.and**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.and**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.and().Params -->

| 引数              | 型                                  |                             | 説明                                     |
| --------------- | ---------------------------------- | :-------------------------: | -------------------------------------- |
| entity          | 4D.Entity          |              ->             | 交差するエンティティ                             |
| entitySelection | 4D.EntitySelection |              ->             | 交差するエンティティセレクション                       |
| 戻り値             | 4D.EntitySelection | <- | AND論理演算子による共通部分の結果を格納する新しいエンティティセレクション |

<!-- END REF -->

#### 説明

`.and()` 関数は、<!-- REF #EntitySelectionClass.and().Summary -->エンティティセレクションと *entity* あるいは *entitySelection* 引数をAND論理演算子を使用して結合します<!-- END REF -->。 戻り値は、エンティティセレクションと引数の両方から参照されているエンティティのみを格納した、順列なしの新規エンティティセレクションです。

- *entity* 引数を渡した場合、引数のエンティティをエンティティセレクションと結合させることになります。 エンティティがエンティティセレクションに属している場合、そのエンティティのみを格納する新しいエンティティセレクションが返されます。 そうでない場合、空のエンティティセレクションが返されます。
- *entitySelection* 引数を渡した場合、二つのエンティティセレクション を結合させることになります。 両方のセレクションから参照されているエンティティのみを格納する新しいエンティティセレクションが返されます。 重複するエンティティがなかった場合、空のエンティティセレクションが返されます。

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

<!-- REF EntitySelectionClass.at().Desc -->

## .at()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #EntitySelectionClass.at().Syntax -->**.at**( *index* : Integer ) : 4D.Entity <!-- END REF -->

<!-- REF #EntitySelectionClass.at().Params -->

| 引数    | 型                         |                             | 説明                |
| ----- | ------------------------- | :-------------------------: | ----------------- |
| index | Integer                   |              ->             | 取得するエンティティのインデックス |
| 戻り値   | 4D.Entity | <- | そのインデックスにあるエンティティ |

<!-- END REF -->

#### 説明

`.at()` 関数は、<!-- REF #EntitySelectionClass.at().Summary -->*index* の位置にあるエンティティを返します (*index* は正負の整数)<!-- END REF -->。

*index* に負の整数 (-1 から -n; n はエンティティセレクションの length) が渡された場合、エンティティセレクションの最後から逆向きに数えます。

*index* がエンティティセレクションの範囲を超える場合、この関数は Null を返します。

#### 例題

```4d
var $employees : cs.EmployeeSelection
var $emp1; $emp2 : cs.EmployeeEntity
$employees:=ds.Employee.query("lastName = :1";"H@")
$emp1:=$employees.at(2)  // $employees エンティティセレクションの 3番目のエンティティ 
$emp2:=$employees.at(-3) // $employees エンティティセレクションの
    // 終わりから 3番目のエンティティ
```

<!-- END REF -->

<!-- REF EntitySelectionClass.average().Desc -->

## .average()

<details><summary>履歴</summary>

| リリース  | 内容                                  |
| ----- | ----------------------------------- |
| 18 R6 | エンティティセレクションが空の場合には undefined を返します |
| 17    | 追加                                  |

</details>

<!-- REF #EntitySelectionClass.average().Syntax -->**.average**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.average().Params -->

| 引数            | 型    |                             | 説明                                                                                                  |
| ------------- | ---- | :-------------------------: | --------------------------------------------------------------------------------------------------- |
| attributePath | Text |              ->             | 計算に使用する属性パス                                                                                         |
| 戻り値           | Real | <- | エンティティの属性値の算術平均 (相加平均) (エンティティセレクションがからの場合には undefined を返します) |

<!-- END REF -->

#### 説明

`.average()` 関数は、<!-- REF #EntitySelectionClass.average().Summary -->*attributePath* に指定した、エンティティセレクション内の null でない値の算術平均 (相加平均) を返します<!-- END REF -->。

*attributePath* 引数として、評価する属性パスを渡します。

計算の対象となるのは数値のみです。 ただし、エンティティセレクションの *attributePath* 引数で指定したパスに異なる型の値が混在している場合、 `.average()` はすべてのスカラー要素を対象として平均値を算出します。

> 日付値は数値 (秒数) に変換され、平均を計算するのに使用されます。

エンティティセレクションが空の場合、または *attributePath* 引数に数値型の値が含まれていない場合には、`.average()` は **undefined** を返します。

以下の場合には、エラーが返されます:

- *attributePath* はリレート属性である
- *attributePath* がエンティティセレクションデータクラス内に存在しない属性を指定している場合。

#### 例題

給与が平均より高い従業員の一覧を取得します:

```4d
 var $averageSalary : Real
 var $moreThanAv : cs.EmployeeSelection
 $averageSalary:=ds.Employee.all().average("salary")
 $moreThanAv:=ds.Employee.query("salary > :1";$averageSalary)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.clean().Desc -->

## .clean()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R6 | 追加 |

</details>

<!-- REF #EntitySelectionClass.clean().Syntax -->**.clean**() : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.clean().Params -->

| 引数  | 型                                  |                             | 説明                             |
| --- | ---------------------------------- | :-------------------------: | ------------------------------ |
| 戻り値 | 4D.EntitySelection | <- | 削除されたエンティティを含まない新規エンティティセレクション |

<!-- END REF -->

#### 説明

`.clean()` 関数は、<!-- REF #EntitySelectionClass.clean().Summary -->元のエンティティセレクションに基づいた、削除済エンティティを含まない新しいエンティティセレクションを返します<!-- END REF -->。

デフォルトでは、あるエンティティが削除 ([drop](EntitySelectionClass.md#drop)) された場合、既存のエンティティセレクション内のこのエンティティへの参照は *undefined* になりますが、エンティティセレクションオブジェクト から参照そのものは削除されません。 削除されたエンティティは、[`.length`](#length) プロパティの数にまだ含まれており、リストなどのインターフェースオブジェクトにエンティティセレクションがバインドされている場合、空白の行として表示されます。 この場合、エンティティセレクションに対して `.clean()` 関数を呼び出すことで、*undefined* なエンティティ参照が含まれない、最新のエンティティセレクションを新規に取得することができます。

結果のエンティティセレクションは、元のエンティティセレクションと種別になります ([順序あり/順序なし](../ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし)、[変更可能/共有可能](../ORDA/entities.md#共有可能追加可能なエンティティセレクション) の種別が保持されます)。

#### 例題

```4d
var $sel; $sel2 : cs.SpecialitySelection
var $status : Object

$sel:=ds.Speciality.query("ID <= 4")
$status:=ds.Speciality.get(2).drop() // データクラスからエンティティを削除する
// $sel.length = 4

$sel2:=$sel.clean()
// $sel2.length = 3
```

![](../assets/en/API/clean.png)

#### 参照

[`.refresh()`](#refresh)

<!-- END REF -->

<!-- REF EntitySelectionClass.contains().Desc -->

## .contains()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->

| 引数     | 型                         |                             | 説明                                                |
| ------ | ------------------------- | :-------------------------: | ------------------------------------------------- |
| entity | 4D.Entity |              ->             | 評価するエンティティ                                        |
| 戻り値    | Boolean                   | <- | エンティティがエンティティセレクションに属している場合には true、そうでない場合は false |

<!-- END REF -->

#### 説明

`.contains()` 関数は、<!-- REF #EntitySelectionClass.contains().Summary -->エンティティ参照がエンティティセレクションに属している場合には true を返します<!-- END REF -->。そうでない場合には false を返します。

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.count().Syntax -->**.count**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.count().Params -->

| 引数            | 型    |                             | 説明                                            |
| ------------- | ---- | :-------------------------: | --------------------------------------------- |
| attributePath | Text |              ->             | 計算に使用する属性パス                                   |
| 戻り値           | Real | <- | エンティティセレクション内の *attributePath* が null でない値の個数 |

<!-- END REF -->

#### 説明

`.count()` 関数は、<!-- REF #EntitySelectionClass.count().Summary -->
エンティティセレクション内で *attributePath* に指定したパスの値が null でないエンティティの数を返します<!-- END REF -->。

> 対象となるのはスカラー値のみです。 オブジェクトあるいはコレクション型の値は Null値とみなされます。

以下の場合には、エラーが返されます:

- *attributePath* はリレート属性である
- *attributePath* がエンティティセレクションデータクラス内に存在しない場合。

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

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.copy().Syntax -->**.copy**( { *option* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.copy().Params -->

| 引数     | 型                                  |                             | 説明                                                  |
| ------ | ---------------------------------- | :-------------------------: | --------------------------------------------------- |
| option | Integer                            |              ->             | `ck shared`: 共有可能なエンティティセレクションを返します |
| 戻り値    | 4D.EntitySelection | <- | エンティティセレクションのコピー                                    |

<!-- END REF -->

#### 説明

`.copy()` 関数は、<!-- REF #EntitySelectionClass.copy().Summary -->元のエンティティセレクションのコピーを返します<!-- END REF -->。

> この関数は、元のエンティティセレクションを変更しません。

*option* パラメーターが省略された場合はデフォルトで、たとえコピー元が共有可能なエンティティセレクション であったとしても、関数はデフォルトで追加可能な (共有不可の) 新規エンティティセレクションを返します。  共有可能なエンティティセレクションを取得するには、*option* に `ck shared` 定数を渡します。

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

| リリース | 内容                      |
| ---- | ----------------------- |
| 20   | `dk count values` をサポート |
| 17   | 追加                      |

</details>

<!-- REF #EntitySelectionClass.distinct().Syntax -->**.distinct**( *attributePath* : Text { ; *options* : Integer } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinct().Params -->

| 引数            | 型          |                             | 説明                                  |
| ------------- | ---------- | :-------------------------: | ----------------------------------- |
| attributePath | Text       |              ->             | 重複しない値を取得する属性のパス                    |
| options       | Integer    |              ->             | `dk diacritical`, `dk count values` |
| 戻り値           | Collection | <- | 重複しない値のみを格納したコレクション                 |

<!-- END REF -->

#### 説明

`.distinct()` 関数は、<!-- REF #EntitySelectionClass.distinct().Summary -->*attributePath* に指定した、エンティティセレクション内の重複しない (異なる) 値のみを格納したコレクションを返します<!-- END REF -->。

返されたコレクションは自動的に並べ替えられています。 **Null** 値 は返されません。

*attributePath* 引数として、固有の値を取得したいエンティティ属性を渡します。 スカラー値 (テキスト、数値、ブール、あるいは日付) のみが可能です。 *attributePath* のパスが異なる型の値を格納しているオブジェクトプロパティ であった場合、まず最初に型ごとにグループ分けされ、そのあとで並べ替えされます。 型は以下の順番で返されます:

1. ブール
2. 文字列
3. 数値
4. 日付

*attributePath* がオブジェクト内のパスの場合、`[]` を使ってコレクションを指定できます (例題参照)。

*options* 引数として、以下の定数を 1つ、または組み合わせで渡すことができます:

| 定数                | 値  | 説明                                                                                                                                                             |
| ----------------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk diacritical`  | 8  | 文字の大小とアクセントを区別して評価をおこないます。 省略された場合のデフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。                                                                                        |
| `dk count values` | 32 | 特定の値を持つエンティティの数 (重複がなければ 1、重複があればその数) を返します。 このオプションを渡すと、 `.distinct()` は、`{"value":*value*; "count":*count*}` のプロパティを含むオブジェクトのコレクションを返します。 |

:::note

`dk count values` のオプションは、ブール、文字列、数値、日付型のストレージ属性でのみ利用可能です。

:::

以下の場合には、エラーが返されます:

- *attributePath* はリレート属性である
- *attributePath* がエンティティセレクションデータクラス内に存在しない場合。

#### 例題

国名ごとに重複しない要素を格納するコレクションを取得します:

```4d
var $countries : Collection
$countries:=ds.Employee.all().distinct("address.country")
//$countries[0]={"Argentina"}
//$countries[1]={"Australia"}
//$countries[2]={"Belgium"}
///...
```

`extra` がオブジェクト属性で、`nicknames` がコレクションの場合:

```4d
$values:=ds.Employee.all().distinct("extra.nicknames[].first")
```

社内における職種の名称とそれぞれの社員数を把握するには:

```4d
var $jobs : Collection
$jobs:=ds.Employee.all().distinct("jobName";dk count values)  
//$jobs[0]={"value":"Developer";"count":17}
//$jobs[1]={"value":"Office manager";"count":5}
//$jobs[2]={"value":"Accountant";"count":2}
//...
```

<!-- END REF -->

<!-- REF EntitySelectionClass.distinctPaths().Desc -->

## .distinctPaths()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 20   | 追加 |

</details>

<!-- REF #EntitySelectionClass.distinctPaths().Syntax -->**.distinctPaths**( *attribute* : Text ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.distinctPaths().Params -->

| 引数  | 型          |                             | 説明                   |
| --- | ---------- | :-------------------------: | -------------------- |
| 属性  | Text       |              ->             | 取得したいパスを持つオブジェクト属性名  |
| 戻り値 | Collection | <- | 重複しないパスを格納した新規コレクション |

<!-- END REF -->

#### 説明

`.distinctPaths()` 関数は、<!-- REF #EntitySelectionClass.distinctPaths().Summary -->対象のエンティティセレクションにおいて *attribute* に指定した、インデックスされているオブジェクト属性の重複しない (異なる) パスを格納したコレクションを返します<!-- END REF -->。

*attribute* が、インデックスされているオブジェクト属性でない場合、エラーが生成されます。

呼び出し後、返されるコレクションのサイズは、対象のエンティティセレクションにおいて *attribute* で指定したオブジェクト属性が持つ重複しないのパスの数に等しくなります。 パスは、ネストされた属性やコレクション ("info.address.number" や "children[].birthdate" など) を含め、文字列として返されます。 *attribute* が null 値のエンティティは考慮されません。

#### 例題

*fullData* オブジェクト属性に格納されているすべてのパスを取得します:

```4d
var $paths : Collection
$paths:=ds.Employee.all().distinctPaths("fullData")
//$paths[0]="age"
//$paths[1]="Children"
//$paths[2]="Children[].age"
//$paths[3]="Children[].name"
//$paths[4]="Children.length"
///...
```

:::note

*length* は、ネストされたコレクションプロパティのパスとして自動的に追加されます。

:::

<!-- END REF -->

<!-- REF EntitySelectionClass.drop().Desc -->

## .drop()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.drop().Syntax -->**.drop**( { *mode* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.drop().Params -->

| 引数   | 型                                  |                             | 説明                                                                         |
| ---- | ---------------------------------- | :-------------------------: | -------------------------------------------------------------------------- |
| mode | Integer                            |              ->             | `dk stop dropping on first error`: 最初のドロップ不可エンティティで実行を止めます |
| 戻り値  | 4D.EntitySelection | <- | 成功した場合には空のエンティティセレクション、そうでない場合にはドロップ不可エンティティを格納したエンティティセレクション              |

<!-- END REF -->

#### 説明

`.drop()` 関数は、 <!-- REF #EntitySelectionClass.drop().Summary -->データストアのデータクラスに対応するテーブルから、エンティティセレクションに所属しているエンティティを削除します<!-- END REF -->。 エンティティセレクションはメモリ内に残ります。

> エンティティの削除は恒久的なものであり、取り消しはできません。 ロールバックで戻すことができるように、この関数はトランザクション内で呼び出すことが推奨されています。

`.drop()` の実行中にロックされたエンティティに遭遇した場合、そのエンティティは削除されません。 デフォルトでは、メソッドはエンティティセレクション内のすべてのエンティティを処理し、ドロップ不可なエンティティはエンティティセレクション内に返します。 最初のドロップ不可なエンティティに遭遇した時点でメソッドの実行を止めたい場合は、*mode* パラメーターに `dk stop dropping on first error` 定数を渡します。

#### 例題

`dk stop dropping on first error` オプションを使用しない例:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop() // $notDropped は削除されなかったエンティティをすべて格納したエンティティセレクションです
 If($notDropped.length=0) // 削除アクションが成功し、すべてのエンティティが削除された場合
    ALERT(String($employees.length)+" 件の社員データを削除しました。") // 削除されたエンティティはメモリの中には残っています
 Else
    ALERT("削除中に問題が発生しました。時間をおいて再度お試しください。")
 End if
```

`dk stop dropping on first error` オプションを使用する例:

```4d
 var $employees; $notDropped : cs.EmployeeSelection
 $employees:=ds.Employee.query("firstName=:1";"S@")
 $notDropped:=$employees.drop(dk stop dropping on first error) //$notDropped は削除できなかった最初のエンティティを格納したエンティティセレクションです
 If($notDropped.length=0) // 削除アクションが成功し、すべてのエンティティが削除された場合
    ALERT(String($employees.length)+" 件の社員データを削除しました。") // 削除されたエンティティはメモリの中には残っています
 Else
    ALERT("削除中に問題が発生しました。時間をおいて再度お試しください。")
 End if
```

<!-- END REF -->

<!-- REF EntitySelectionClass.extract().Desc -->

## .extract()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #EntitySelectionClass.extract().Syntax -->**.extract**( *attributePath* : Text { ; *option* : Integer } ) : Collection<br/>**.extract**( *attributePath* { ; *targetPath* } { ; *...attributePathN* : Text ; *targetPathN* : Text } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.extract().Params -->

| 引数            | 型          |                             | 説明                                                                                           |
| ------------- | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------- |
| attributePath | Text       |              ->             | 新しいコレクションに抽出する値の属性パス                                                                         |
| targetPath    | Text       |              ->             | 抽出先の属性パスあるいは属性名                                                                              |
| option        | Integer    |              ->             | `ck keep null`: 返されるコレクションに null 属性を含めます (デフォルトでは無視されます)。 |
| 戻り値           | Collection | <- | 抽出した値を格納したコレクション                                                                             |

<!-- END REF -->

#### 説明

`.extract()` 関数は、<!-- REF #EntitySelectionClass.extract().Summary -->*attributePath* で指定した値をエンティティセレクションから抽出し、コレクションに格納して返します<!-- END REF -->。

*attributePath* には、以下のものを指定することができます:

- スカラーデータクラス属性
- リレートエンティティ (単数)
- リレートエンティティズ (複数)

*attributePath* 引数が無効な場合、空のコレクションが返されます。

このメソッドは 2種類のシンタックスを受け入れます。

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

このシンタックスを使用すると、`.extract()` はエンティティセレクションの中の、*attributePath* 引数で指定された値のコレクションを作成して返します。

デフォルトで、*attributePath* で指定された値が *null* または未定義のエンティティは、返されるコレクション内では無視されます。 *option* パラメーターに `ck keep null` 定数を渡すと、これらの値は返されるコレクションに **null** 要素として格納されます。

- [.kind](DataClassClass.md#attributename) = "relatedEntity" であるデータクラス属性は、エンティティのコレクションとして取得されます (重複したものも保持されます)。
- [.kind](DataClassClass.md#attributename) = "relatedEntities" であるデータクラス属性は、エンティティセレクションのコレクションとして取得されます。

**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

このシンタックスを使用すると、`.extract()` は *attributePath* 引数で指定されたプロパティを持つコレクションを作成して返します。 このコレクションのそれぞれの要素は、*targetPath* 引数のプロパティと、対応する*attributePath* 引数のプロパティを格納したオブジェクトです。 Null値はそのまま保持されます (このシンタックスでは *option* に引数を渡しても無視されます)。

複数の *attributePath* 引数が渡した場合、それぞれに対して *targetPath* 引数を渡す必要があります。 有効な \[*attributePath*, *targetPath*] のペアのみが取得されます。

- [.kind](DataClassClass.md#attributename) = "relatedEntity" であるデータクラス属性は、エンティティとして取得されます。
- [.kind](DataClassClass.md#attributename) = "relatedEntities" であるデータクラス属性は、エンティティセレクションとして取得されます。

> エンティティのコレクションにおいて、\[ ] 記法を使用してアクセスしたエンティティは、データベースからは再読み込みされません。

#### 例題

以下のテーブルとリレーションを前提とします:

![](../assets/en/API/entityselection.PNG)

```4d
 var $firstnames; $addresses; $mailing; $teachers : Collection
  //
  //
  // $firstnames は文字列のコレクション


 $firstnames:=ds.Teachers.all().extract("firstname")
  //
  // $addresses は addressリレートエンティティのコレクション
  // Null値も取得・保持されます
 $addresses:=ds.Teachers.all().extract("address";ck keep null)
  //
  //
  // $mailing は "who" および "to" のプロパティを持つオブジェクトのコレクション
  // "who" プロパティの中身は文字列型
  // "to" プロパティの中身はエンティティ型 (Address データクラス)
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address";"to")
  //
  //
  // $mailing は "who" および "city" のプロパティを持つオブジェクトのコレクション
  // "who" プロパティの中身は文字列型
  // "city" プロパティの中身は文字列型
 $mailing:=ds.Teachers.all().extract("lastname";"who";"address.city";"city")
  //
  // $teachers は"where" および "who" のプロパティを持つオブジェクトのコレクション
  // "where" プロパティの中身は文字列型
  // "who" プロパティの中身はエンティティセレクション (Teachers データクラス)
 $teachers:=ds.Address.all().extract("city";"where";"teachers";"who")
  //
  //$teachers はエンティティセレクションのコレクション
 $teachers:=ds.Address.all().extract("teachers")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.first().Desc -->

## .first()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.first().Syntax -->**.first**() : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->

| 引数  | 型                         |                             | 説明                                                           |
| --- | ------------------------- | :-------------------------: | ------------------------------------------------------------ |
| 戻り値 | 4D.Entity | <- | エンティティセレクションの先頭エンティティへの参照 (見つからなければ null) |

<!-- END REF -->

#### 説明

`.first()` 関数は、<!-- REF #EntitySelectionClass.first().Summary -->エンティティセレクションの先頭エンティティへの参照を返します<!-- END REF -->。

この関数の結果は以下のコードに似ています:

```4d
 $entity:=$entitySel[0]
```

ただし、この 2つの宣言には、セレクションが空であった場合に違いがあります:

```4d
 var $entitySel : cs.EmpSelection
 var $entity : cs.EmpEntity
 $entitySel:=ds.Emp.query("lastName = :1";"Nonexistentname") // 合致するエンティティはありません
  // エンティティセレクションは空になります
 $entity:=$entitySel.first() // Null を返します
 $entity:=$entitySel[0]  // エラーを生成します
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

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->**.getDataClass**() : 4D.DataClass<!-- END REF -->

<!-- REF #EntitySelectionClass.getDataClass().Params -->

| 引数  | 型                            |                             | 説明                        |
| --- | ---------------------------- | :-------------------------: | ------------------------- |
| 戻り値 | 4D.DataClass | <- | エンティティセレクションが所属しているデータクラス |

<!-- END REF -->

#### 説明

`.getDataClass()` 関数は、<!-- REF #EntitySelectionClass.getDataClass().Summary -->エンティティセレクションのデータクラスを返します<!-- END REF -->。

このメソッドはおもに汎用的なコードのコンテキストで有用です。

#### 例題

以下の汎用的なコードは、エンティティセレクションの全エンティティを複製します:

```4d
  // duplicate_entities メソッド
  // duplicate_entities($entity_selection)

 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null // プライマリーキーをリセットします
    $status:=$duplicate.save()
 End for each
```

<!-- END REF -->

## .getRemoteContextAttributes()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes**() : Text<!-- END REF -->

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Params -->

| 引数  | 型    |                             | 説明                                                                      |
| --- | ---- | --------------------------- | ----------------------------------------------------------------------- |
| 戻り値 | Text | <- | Context attributes linked to the entity selection, separated by a comma |

<!-- END REF -->

> **Advanced mode:** This function is intended for developers who need to customize ORDA default features for specific configurations. ほとんどの場合、使用する必要はないでしょう。

#### 説明

The `.getRemoteContextAttributes()` function <!-- REF #EntitySelectionClass.getRemoteContextAttributes().Summary -->returns information about the optimization context used by the entity selection<!-- END REF -->.

If there is no [optimization context](../ORDA/client-server-optimization.md) for the entity selection, the function returns an empty Text.

#### 例題

```4d
var $ds : 4D.DataStoreImplementation
var $persons : cs.PersonsSelection
var $p : cs.PersonsEntity

var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$persons:=$ds.Persons.all()
$text:=""
For each ($p; $persons)
    $text:=$p.firstname+" lives in "+$p.address.city+" / "
End for each

$info:=$persons.getRemoteContextAttributes()
//$info = "firstname,address,address.city"
```

#### 参照

[Entity.getRemoteContextAttributes()](./EntityClass.md#getremotecontextattributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntitySelectionClass.isAlterable().Desc -->

## .isAlterable()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->**.isAlterable**() : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->

| 引数  | 型       |                             | 説明                                                         |
| --- | ------- | :-------------------------: | ---------------------------------------------------------- |
| 戻り値 | Boolean | <- | True if the entity selection is alterable, False otherwise |

<!-- END REF -->

#### 説明

The `.isAlterable()` function <!-- REF #EntitySelectionClass.isAlterable().Summary -->returns True if the entity selection is alterable<!-- END REF -->, and False if the entity selection is not alterable.

For more information, please refer to [Shareable or alterable entity selections](ORDA/entities.md#shareable-or-alterable-entity-selections).

#### 例題

You are about to display `Form.products` in a [list box](FormObjects/listbox_overview.md) to allow the user to add new products. ユーザーが製品を追加したときにエラーが起きないよう、追加可能であることを確認します:

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->**.isOrdered**() : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->

| 引数  | 型       |                             | 説明                                                       |
| --- | ------- | :-------------------------: | -------------------------------------------------------- |
| 戻り値 | Boolean | <- | True if the entity selection is ordered, False otherwise |

<!-- END REF -->

#### 説明

The `.isOrdered()` function <!-- REF #EntitySelectionClass.isOrdered().Summary -->returns True if the entity selection is ordered<!-- END REF -->, and False if it is unordered.

> リモートデータストアに属しているエンティティセレクションの場合は常に true を返します。

For more information, please refer to [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection).

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.last().Syntax -->**.last**() : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->

| 引数  | 型                         |                             | 説明                                                                                                       |
| --- | ------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------------- |
| 戻り値 | 4D.Entity | <- | Reference to the last entity of the entity selection (Null if empty entity selection) |

<!-- END REF -->

#### 説明

The `.last()` function <!-- REF #EntitySelectionClass.last().Summary -->returns a reference to the entity in last position of the entity selection<!-- END REF -->.

この関数の結果は以下のコードに似ています:

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.length.Syntax -->**.length** : Integer<!-- END REF -->

#### 説明

The `.length` property <!-- REF #EntitySelectionClass.length.Summary -->returns the number of entities in the entity selection<!-- END REF -->. エンティティセレクションが空の場合、関数は 0 を返します。

Entity selections always have a `.length` property.

> To know the total number of entities in a dataclass, it is recommended to use the [`getCount()`](DataClassClass.md#getcount) function which is more optimized than the `ds.myClass.all().length` expression.

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

| リリース  | 内容                                  |
| ----- | ----------------------------------- |
| 17    | 追加                                  |
| 18 R6 | エンティティセレクションが空の場合には undefined を返します |

</details>

<!-- REF #EntitySelectionClass.max().Syntax -->**.max**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.max().Params -->

| 引数            | 型    |                             | 説明                         |
| ------------- | ---- | --------------------------- | -------------------------- |
| attributePath | Text | ->                          | 計算に使用する属性パス                |
| 戻り値           | any  | <- | Highest value of attribute |

<!-- END REF -->

#### 説明

The `.max()` function <!-- REF #EntitySelectionClass.max().Summary -->returns the highest (or maximum) value among all the values of *attributePath* in the entity selection<!-- END REF -->. It actually returns the value of the last entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function.

If you pass in *attributePath* a path to an object property containing different types of values, the `.max()` function will return the maximum value within the first scalar type in the default 4D type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.max()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

以下の場合には、エラーが返されます:

- *attributePath* はリレート属性である
- *attributePath* がエンティティセレクションデータクラス内に存在しない属性を指定している場合。

#### 例題

女性従業員の中で最も高い給与額を探します:

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

| リリース  | 内容                                  |
| ----- | ----------------------------------- |
| 17    | 追加                                  |
| 18 R6 | エンティティセレクションが空の場合には undefined を返します |

</details>

<!-- REF #EntitySelectionClass.min().Syntax -->**.min**( *attributePath* : Text ) : any<!-- END REF -->

<!-- REF #EntitySelectionClass.min().Params -->

| 引数            | 型    |                             | 説明                        |
| ------------- | ---- | :-------------------------: | ------------------------- |
| attributePath | Text |              ->             | 計算に使用する属性パス               |
| 戻り値           | any  | <- | Lowest value of attribute |

<!-- END REF -->

#### 説明

The `.min()` function <!-- REF #EntitySelectionClass.min().Summary --> returns the lowest (or minimum) value among all the values of attributePath in the entity selection<!-- END REF -->.  It actually returns the first entity of the entity selection as it would be sorted in ascending order using the [`.orderBy()`](#orderby) function (excluding **null** values).

If you pass in *attributePath* a path to an object property containing different types of values, the `.min()` function will return the minimum value within the first scalar value type in the type list order (see [`.sort()`](CollectionClass.md#sort) description).

`.min()` returns **undefined** if the entity selection is empty or *attributePath* is not found in the object attribute.

以下の場合には、エラーが返されます:

- *attributePath* はリレート属性である
- *attributePath* がエンティティセレクションデータクラス内に存在しない属性を指定している場合。

#### 例題

女性従業員の中で最も低い給与額を探します:

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

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 19 R7 | Support of *keepOrder* parameter |
| 17    | 追加                               |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->**.minus**( *entity* : 4D.Entity { ; *keepOrder* : Integer } ) : 4D.EntitySelection<br/>**.minus**( *entitySelection* : 4D.EntitySelection { ; *keepOrder* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->

| 引数              | 型                                  |                             | 説明                                                                                                         |
| --------------- | ---------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------- |
| entity          | 4D.Entity          |              ->             | 除外するエンティティ                                                                                                 |
| entitySelection | 4D.EntitySelection |              ->             | 除外するエンティティセレクション                                                                                           |
| keepOrder       | Integer                            |              ->             | `dk keep ordered` (integer) to keep the initial order in the resulting entity selection |
| 戻り値             | 4D.EntitySelection | <- | New entity selection or a new reference on the existing entity selection                                   |

<!-- END REF -->

#### 説明

The `.minus()` function <!-- REF #EntitySelectionClass.minus().Summary -->excludes from the entity selection to which it is applied the *entity* or the entities of *entitySelection* and returns the resulting entity selection<!-- END REF -->.

- If you pass *entity* as parameter, the function creates a new entity selection without *entity* (if *entity* belongs to the entity selection). If *entity* was not included in the original entity selection, a new reference to the entity selection is returned.
- If you pass *entitySelection* as parameter, the function returns an entity selection containing the entities belonging to the original entity selection without the entities belonging to *entitySelection*. [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。

By default, if you omit the *keepOrder* parameter, the resulting entity selection is unordered. If you want to keep the order of the original entity selection (for example if you want to reuse the entity selection in a user interface), pass the `dk keep ordered` constant in *keepOrder*. この場合、結果のエンティティセレクションは順列ありとなり、元のエンティティセレクションの順列が維持されます。

:::note

If you pass `dk keep ordered` in *keepOrder* and the removed *entitySelection* contains entities duplicated in the original entity selection, all occurences of the duplicates are removed.

:::

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

"Jones" という名前で、New York に住んでいる女性従業員のセレクションを取得します:

```4d
 var $sel1; $sel2; $sel3 : cs.EmployeeSelection
 $sel1:=ds.Employee.query("name =:1";"Jones")
 $sel2:=ds.Employee.query("city=:1";"New York")
 $sel3:=$sel1.and($sel2).minus(ds.Employee.query("gender='male'"))
```

#### 例題 3

あるユーザーインターフェースにおいて、特定の順番で項目を表示するリストがあります。 ユーザーがリストの項目を選択して削除した場合、更新後のリストにおいても順番を維持する必要があります:

```4d
$listsel:=$listsel.minus($selectedItems; dk keep ordered)
```

<!-- END REF -->

<!-- REF EntitySelectionClass.or().Desc -->

## .or()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.or().Syntax -->**.or**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.or**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.or().Params -->

| 引数              | 型                                  |                             | 説明                                                                     |
| --------------- | ---------------------------------- | :-------------------------: | ---------------------------------------------------------------------- |
| entity          | 4D.Entity          |              ->             | 交差するエンティティ                                                             |
| entitySelection | 4D.EntitySelection |              ->             | 交差するエンティティセレクション                                                       |
| 戻り値             | 4D.EntitySelection | <- | New entity selection or new reference to the original entity selection |

<!-- END REF -->

#### 説明

The `.or()` function <!-- REF #EntitySelectionClass.or().Summary -->combines the entity selection with the *entity* or *entitySelection* parameter using the logical (not exclusive) OR operator<!-- END REF -->; it returns a new, unordered entity selection that contains all the entities from the entity selection and the parameter.

- If you pass *entity* as parameter, you compare this entity with the entity selection. エンティティがエンティティセレクションに所属している場合、エンティティセレクションへの新しい参照が返されます。 そうでない場合、元のエンティティセレクションと渡したエンティティを格納した新しいエンティティセレクションが返されます。
- If you pass *entitySelection* as parameter, you compare entity selections. A new entity selection containing the entities belonging to the original entity selection or *entitySelection* is returned (or is not exclusive, entities referenced in both selections are not duplicated in the resulting selection).

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.orderBy().Syntax -->**.orderBy**( *pathString* : Text ) : 4D.EntitySelection<br/>**.orderBy**( *pathObjects* : Collection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderBy().Params -->

| 引数          | 型                                  |                             | 説明                                          |
| ----------- | ---------------------------------- | :-------------------------: | ------------------------------------------- |
| pathString  | Text                               |              ->             | エンティティセレクションの属性パスと並べ替えの指定                   |
| pathObjects | Collection                         |              ->             | 条件オブジェクトのコレクション                             |
| 戻り値         | 4D.EntitySelection | <- | New entity selection in the specified order |

<!-- END REF -->

#### 説明

The `.orderBy()` function <!-- REF #EntitySelectionClass.orderBy().Summary -->returns a new ordered entity selection containing all entities of the entity selection in the order specified by *pathString* or *pathObjects* criteria<!-- END REF -->.

> - この関数は、元のエンティティセレクションを変更しません。
> - For more information on ordered entity selections, please refer to the [Ordered or unordered entity selection](ORDA/dsMapping.md#ordered-or-unordered-entity-selection) section.

引数を渡して、エンティティの並び替えを指定する必要があります。 並べ替えの指定方法は 2つあります:

- *pathString* (Text) : This parameter contains a formula made of 1 to x attribute paths and (optionally) sort orders, separated by commas. シンタックスは以下の通りです:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

属性を渡す順番が、エンティティの並べ替えの優先順位を決定します。 デフォルトでは、属性は昇順に並べ替えられます。 並び順を設定するには、プロパティパスの後に半角スペースで区切ったあとに、昇順を指定するには "asc"、降順を指定するには "desc" を渡します。

- *pathObjects* (collection): each element of the collection contains an object structured in the following way:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

デフォルトでは、属性は昇順に並べ替えられます ("descending" は false)。

pathObjects コレクションには必要な数だけオブジェクトを追加することができます。

> Null は他の値より小さいと評価されます。

If you pass an invalid attribute path in *pathString* or *pathObject*, the function returns an empty entity selection.

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

## .orderByFormula()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R6 | 追加 |

</details>

<!-- REF #EntitySelectionClass.orderByFormula().Syntax -->**.orderByFormula**( *formulaString* : Text { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<br/>**.orderByFormula**( *formulaObj* : Object { ; *sortOrder* : Integer } { ; *settings* : Object} ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.orderByFormula().Params -->

| 引数            | 型                                  |                             | 説明                                                             |
| ------------- | ---------------------------------- | :-------------------------: | -------------------------------------------------------------- |
| formulaString | Text                               |              ->             | フォーミュラ文字列                                                      |
| formulaObj    | Object                             |              ->             | フォーミュラオブジェクト                                                   |
| sortOrder     | Integer                            |              ->             | `dk ascending` (default) or `dk descending` |
| settings      | Object                             |              ->             | フォーミュラに渡す引数                                                    |
| 戻り値           | 4D.EntitySelection | <- | New ordered entity selection                                   |

<!-- END REF -->

#### 説明

The `.orderByFormula()` function <!-- REF #EntitySelectionClass.orderByFormula().Summary -->returns a new, ordered entity selection<!-- END REF --> containing all entities of the entity selection in the order defined through the *formulaString* or *formulaObj* and, optionally, *sortOrder* and *settings* parameters.

> この関数は、元のエンティティセレクションを変更しません。

You can use either a *formulaString* or a *formulaObj* parameter:

- *formulaString*: you pass a 4D expression such as "Year of(this.birthDate)".
- *formulaObj*: pass a valid formula object created using the `Formula` or `Formula from string` command.

The *formulaString* or *formulaObj* is executed for each entity of the entity selection and its result is used to define the position of the entity in the returned entity selection. 結果は並べ替え可能な型 (ブール、日付、数値、テキスト、時間、Null) である必要があります。

> Null値の結果は常に最小の値とみなされます。

By default if you omit the *sortOrder* parameter, the resulting entity selection is sorted in ascending order. Optionnally, you can pass one of the following values in the *sortOrder* parameter:

| 定数            | 値 | 説明                            |
| ------------- | - | ----------------------------- |
| dk ascending  | 0 | 昇順 (デフォルト) |
| dk descending | 1 | 降順                            |

Within the *formulaString* or *formulaObj*, the processed entity and thus its attributes are available through the `This` command (for example, `This.lastName`).

You can pass parameter(s) to the formula using the `args` property (object) of the `settings` parameter: the formula receives the `settings.args` object in $1.

#### 例題 1

テキストとして渡されたフォーミュラを使用して学生を並べ替えます:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") //ascending by default
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

同じ並び方を、フォーミュラオブジェクトを使用して指定します:

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

In this example, the "marks" object field in the **Students** dataClass contains students' grades for each subject. フォーミュラオブジェクトを使用し、schoolA と schoolB で異なる係数を用いて生徒の平均の成績を計算します。

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

| リリース  | 内容                  |
| ----- | ------------------- |
| 17 R6 | Formula パラメーターをサポート |
| 17 R5 | 値のプレースホルダーをサポート     |
| 17    | 追加                  |

</details>

<!-- REF #EntitySelectionClass.query().Syntax -->**.query**( *queryString* : Text { ; *...value* : any } { ; *querySettings* : Object } ) : 4D.EntitySelection <br/>**.query**( *formula* : Object { ; *querySettings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.query().Params -->

| 引数            | 型                                  |                             | 説明                                                                                                                                 |
| ------------- | ---------------------------------- | :-------------------------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| queryString   | Text                               |              ->             | 検索条件 (文字列)                                                                                                      |
| formula       | Object                             |              ->             | 検索条件 (フォーミュラオブジェクト)                                                                                             |
| value         | any                                |              ->             | プレースホルダー用の値                                                                                                                        |
| querySettings | Object                             |              ->             | クエリオプション: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan                               |
| 戻り値           | 4D.EntitySelection | <- | New entity selection made up of entities from entity selection meeting the search criteria specified in *queryString* or *formula* |

<!-- END REF -->

#### 説明

The `.query()` function <!-- REF #EntitySelectionClass.query().Summary -->searches for entities that meet the search criteria specified in *queryString* or *formula* and (optionally) *value*(s) among all the entities in the entity selection<!-- END REF -->, and returns a new object of type `EntitySelection` containing all the entities that are found. この関数には、レイジーローディングが適用されます。

> この関数は、元のエンティティセレクションを変更しません。

If no matching entities are found, an empty `EntitySelection` is returned.

For detailed information on how to build a query using *queryString*, *value*, and *querySettings* parameters, please refer to the DataClass [`.query()`](DataClassClass.md#query) function description.

> By default if you omit the **order by** statement in the *queryString*, the returned entity selection is [not ordered](ORDA/dsMapping.md#ordered-or-unordered-entity-selection). しかしながら、クライアント/サーバーモードにおいては、順列ありのエンティティセレクションのように振る舞う (エンティティはセレクションの終わりに追加されていく) 点に注意してください。

#### 例題 1

```4d
 var $entitySelectionTemp : cs.EmployeeSelection
 $entitySelectionTemp:=ds.Employee.query("lastName = :1";"M@")
 Form.emps:=$entitySelectionTemp.query("manager.lastName = :1";"S@")
```

#### 例題 2

More examples of queries can be found in the DataClass [`.query()`](DataClassClass.md#query) page.

#### 参照

[`.query()`](DataClassClass.md#query) for dataclass

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPath.Desc -->

## .queryPath

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->**.queryPath** : Text<!-- END REF -->

#### 説明

The `.queryPath` property <!-- REF #EntitySelectionClass.queryPath.Summary -->contains a detailed description of the query as it was actually performed by 4D<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPath":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.md#query) page.

<!-- END REF -->

<!-- REF EntitySelectionClass.queryPlan.Desc -->

## .queryPlan

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.queryPlan.Syntax -->**.queryPlan** : Text<!-- END REF -->

#### 説明

The `.queryPlan` property <!-- REF #EntitySelectionClass.queryPlan.Summary --> contains a detailed description of the query just before it is executed (i.e., the planned query)<!-- END REF -->. This property is available for `EntitySelection` objects generated through queries if the `"queryPlan":true` property was passed in the *querySettings* parameter of the [`.query()`](#query) function.

For more information, refer to the **querySettings parameter** paragraph in the Dataclass[`.query()`](DataClassClass.html#query) page.

<!-- END REF -->

<!-- REF EntitySelectionClass.refresh().Desc -->

## .refresh()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->**.refresh**()<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

> This function only works with a remote datastore (client / server or `Open datastore` connection).

The `.refresh()` function <!-- REF #EntitySelectionClass.refresh().Summary -->immediately "invalidates" the entity selection data in the [local ORDA cache](../ORDA/client-server-optimization.md#orda-cache)<!-- END REF --> so that the next time 4D requires the entity selection, it will be reloaded from the database.

デフォルトでは、ローカルの ORDA のキャッシュは 30秒後に無効化されます。 クライアント/サーバーアプリケーションのコンテキストにおいて ORDA とクラシック言語の両方を使用している場合、このメソッドを使用することでリモートアプリケーションが必ず最新のデータを使用するようにできます。

#### 例題 1

クラシックと ORDA言語の両方が、同じデータを同時に編集する場合を考えます:

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

リストボックスに Form.students エンティティセレクションを表示し、複数のクライアントがそれを操作する場合を考えます。

```4d
// フォームメソッド:
 Case of
    :(Form event code=On Load)
       Form.students:=ds.Students.all()
 End case
  //
  //
  // クライアント#1で、ユーザーが先頭エンティティをロードし、更新して保存します
  // クライアント#2でも、ユーザーが同じエンティティをロードし、更新して保存します
  //
  //
  // クライアント#1において:
 Form.students.refresh() // Form.students エンティティセレクションの ORDAキャッシュを無効化します
  // リストボックスの中身はデータベースの内容で更新され、クライアント#2 がおこなった変更も反映します
```

#### 参照

[`.clean()`](#clean)<br/>
[dataClass.clearRemoteCache()](DataClassClass.md#clearremotecache)

<!-- END REF -->

<!-- REF EntitySelectionClass.selected().Desc -->

## .selected()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R3 | 追加 |

</details>

<!-- REF #EntitySelectionClass.selected().Syntax -->**.selected**( *selectedEntities* : 4D.EntitySelection ) : Object<!-- END REF -->

<!-- REF #EntitySelectionClass.selected().Params -->

| 引数               | 型                                  |                             | 説明                                                                   |
| ---------------- | ---------------------------------- | :-------------------------: | -------------------------------------------------------------------- |
| selectedEntities | 4D.EntitySelection |              ->             | 呼び出し対象のエンティティセレクションにおける、選別したエンティティの位置範囲                              |
| 戻り値              | Object                             | <- | Range(s) of selected entities in entity selection |

<!-- END REF -->

#### 説明

The `.selected()` function <!-- REF #EntitySelectionClass.selected().Summary -->returns an object describing the position(s) of *selectedEntities* in the original entity selection<!-- END REF -->.

> この関数は、元のエンティティセレクションを変更しません。

Pass in the *selectedEntities* parameter an entity selection containing entities for which you want to know the position in the original entity selection. *selectedEntities* must be an entity selection belonging to the same dataclass as the original entity selection, otherwise an error 1587 - "The entity selection comes from an incompatible dataclass" is raised.

#### 戻り値

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ                                                                              | 型          | 説明                                           |
| ---------------------------------------------------------------------------------- | ---------- | -------------------------------------------- |
| ranges                                                                             | Collection | レンジオブジェクトのコレクション                             |
| ranges[].start | Integer    | レンジ内の先頭エンティティのインデックス (位置) |
| ranges[].end   | Integer    | レンジ内の最終エンティティのインデックス (位置) |

If a `ranges` property contains a single entity, `start` = `end`. インデックスは 0 起点です。

The function returns an empty collection in the `ranges` property if the original entity selection or the *selectedEntities* entity selection is empty.

#### 例題

```4d
var $invoices; $cashSel; $creditSel : cs.Invoices
var $result1; $result2 : Object

$invoices:=ds.Invoices.all()

$cashSelection:=ds.Invoices.query("payment = :1"; "Cash")
$creditSel:=ds.Invoices.query("payment IN :1"; New collection("Cash"; "Credit Card"))

$result1:=$invoices.selected($cashSelection)
$result2:=$invoices.selected($creditSel)

//$result1 = {ranges:[{start:0;end:0},{start:3;end:3},{start:6;end:6}]}
//$result2 = {ranges:[{start:0;end:1},{start:3;end:4},{start:6;end:7}]}

```

<!-- END REF -->

<!-- REF EntitySelectionClass.slice().Desc -->

## .slice()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.slice().Syntax -->**.slice**( *startFrom* : Integer { ; *end* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.slice().Params -->

| 引数        | 型                                  |                             | 説明                                                                                |
| --------- | ---------------------------------- | :-------------------------: | --------------------------------------------------------------------------------- |
| startFrom | Integer                            |              ->             | 処理を開始するインデックス)                                                                    |
| end       | Integer                            |              ->             | 終了インデックス (含まれない)                                               |
| 戻り値       | 4D.EntitySelection | <- | New entity selection containing sliced entities (shallow copy) |

<!-- END REF -->

#### 説明

The `.slice()` function <!-- REF #EntitySelectionClass.slice().Summary -->returns a portion of an entity selection into a new entity selection<!-- END REF -->, selected from the *startFrom* index to the *end* index (*end* is not included) or to the last entity of the entity selection. この関数は、エンティティセレクションのシャロウ・コピーを返します (同じエンティティ参照を使用します)。

> この関数は、元のエンティティセレクションを変更しません。

The returned entity selection contains the entities specified by *startFrom* and all subsequent entities up to, but not including, the entity specified by *end*. If only the *startFrom* parameter is specified, the returned entity selection contains all entities from *startFrom* to the last entity of the original entity selection.

- If *startFrom* < 0, it is recalculated as *startFrom:=startFrom+length* (it is considered as the offset from the end of the entity selection). 再計算された値も負の値だった場合、*startFrom* は 0 に設定されます。
- If *startFrom >= length*, the function returns an empty entity selection.
- If *end* < 0, it is recalculated as *end:=end+length*.
- 渡された値、あるいは再計算された値が *end* < *startFrom* の場合、関数はなにもしません。

エンティティセレクションにドロップされたエンティティが含まれる場合、それらも返されます。

#### 例題 1

エンティティセレクションの、最初の 9件のエンティティのセレクションを取得します:

```4d
var $sel; $sliced : cs.EmployeeSelection
$sel:=ds.Employee.query("salary > :1";50000)
$sliced:=$sel.slice(0;9) //
```

#### 例題 2

ds.Employee.all().length = 10 である場合:

```4d
var $slice : cs.EmployeeSelection


$slice:=ds.Employee.all().slice(-1;-2) //tries to return entities from index 9 to 8, but since 9 > 8, returns an empty entity selection

```

<!-- END REF -->

<!-- REF EntitySelectionClass.sum().Desc -->

## .sum()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.sum().Syntax -->**.sum**( *attributePath* : Text ) : Real<!-- END REF -->

<!-- REF #EntitySelectionClass.sum().Params -->

| 引数            | 型    |                             | 説明                             |
| ------------- | ---- | :-------------------------: | ------------------------------ |
| attributePath | Text |              ->             | 計算に使用する属性パス                    |
| 戻り値           | Real | <- | Sum of entity selection values |

<!-- END REF -->

#### 説明

The `.sum()` function <!-- REF #EntitySelectionClass.sum().Summary -->returns the sum for all *attributePath* values in the entity selection<!-- END REF -->.

`.sum()` returns 0 if the entity selection is empty.

総和は、数値型の値に対してのみ実行可能です。 If the *attributePath* is an object property, only numerical values are taken into account for the calculation (other value types are ignored). In this case, if *attributePath* leads to a property that does not exist in the object or does not contain any numeric values, `.sum()` returns 0.

以下の場合には、エラーが返されます:

- *attributePath* is not a numerical or an object attribute,
- *attributePath* はリレート属性である
- *attributePath* がエンティティセレクションデータクラス内に存在しない場合。

#### 例題

```4d
var $sel : cs.EmployeeSelection
var $sum : Real

$sel:=ds.Employee.query("salary < :1";20000)
$sum:=$sel.sum("salary")
```

<!-- END REF -->

<!-- REF EntitySelectionClass.toCollection().Desc -->

## .toCollection()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.toCollection().Syntax -->**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : Collection<br/>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : Collection<br/>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->

| 引数           | 型          |                             | 説明                                                                                                              |
| ------------ | ---------- | :-------------------------: | --------------------------------------------------------------------------------------------------------------- |
| filterString | Text       |              ->             | 抽出するエンティティの属性パスの文字列                                                                                             |
| filterCol    | Collection |              ->             | 抽出するエンティティの属性パスのコレクション                                                                                          |
| options      | Integer    |              ->             | `dk with primary key`: adds the primary key<br/>`dk with stamp`: adds the stamp |
| begin        | Integer    |              ->             | 開始インデックス                                                                                                        |
| howMany      | Integer    |              ->             | 抽出するエンティティ数                                                                                                     |
| 戻り値          | Collection | <- | Collection of objects containing attributes and values of entity selection                                      |

<!-- END REF -->

#### 説明

The `.toCollection()` function <!-- REF #EntitySelectionClass.toCollection().Summary -->creates and returns a collection where each element is an object containing a set of properties and values <!-- END REF -->corresponding to the attribute names and values for the entity selection.

filterString および filterCol 引数が省略されるか、空の文字列が渡されるか、あるいは "\*" が渡された場合、すべての属性が抽出されます。 Attributes with [kind](DataClassClass.md#attributename) property as "relatedEntity" are extracted with the simple form: an object with property \_\_KEY (primary key). "relatedEntities" 型の "kind" プロパティの属性は抽出されません。

抽出するエンティティ属性を限定したい場合には、それを指定する引数を渡すことができます。 2つのシンタックスを使用できます:

- *filterString* --a string with property paths separated with commas: "propertyPath1, propertyPath2, ...".
- *filterCol* --a collection of strings containing property paths: \["propertyPath1","propertyPath2",...]

If a filter is specified for an attribute of the `relatedEntity` kind:

- propertyPath = "relatedEntity" -> it is extracted with simple form
- propertyPath = "relatedEntity.\*" -> all the properties are extracted
- propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> only those properties are extracted

If a filter is specified for an attribute of the `relatedEntities` kind:

- propertyPath = "relatedEntities.\*" -> all the properties are extracted
- propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> only those properties are extracted

In the *options* parameter, you can pass the `dk with primary key` and/or `dk with stamp` selector(s) to add the entity's primary keys and/or stamps in extracted objects.

:::caution Warning

リレーションの 1側の属性に主キー以外の属性を使用した場合、その属性の値が "__KEY" プロパティに書き込まれます。 Keep in mind that it is recommended to use the primary key as One attribute in your relations, especially when you use `.toCollection()` and `.fromCollection()` functions.

:::

The *begin* parameter allows you to indicate the starting index of the entities to extract. 0 からエンティティセレクションの長さ - 1 の範囲で値を渡すことができます。

The *howMany* parameter lets you specify the number of entities to extract, starting with the one specified in *begin*. Dropped entities are not returned but are taken into account according to *howMany*. For example, if *howMany*= 3 and there is 1 dropped entity, only 2 entities are extracted.

If *howMany* > length of the entity selection, the method returns (length - *begin*) objects.

以下のいずれかの場合には空のコレクションが返されます:

- エンティティセレクションが空である
- *begin* is greater than the length of the entity selection.

#### 例題 1

このセクションの例題では、以下のストラクチャーを使います:

![](../assets/en/API/dataclassAttribute4.png)

filterString や filterCol、および options 引数を渡さない例:

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

options を使用した例:

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

抽出件数と、filterCol で抽出プロパティを指定した例:

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

リレートエンティティの全プロパティを抽出する例:

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

リレートエンティティの一部のプロパティを抽出する例:

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
