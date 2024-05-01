---
id: EntitySelectionClass
title: EntitySelection
---

エンティティセレクションとは、同じ [データクラス](ORDA/dsMapping.md#データクラス) に所属する一つ以上の [エンティティ](ORDA/dsMapping.md#エンティティ) への参照を格納しているオブジェクトのことです。 エンティティセレクションは、データクラスから 0個、1個、あるいは X個のエンティティを格納することができます (X はデータクラスに格納されているエンティティの総数です)。

[`.all()`](DataClassClass.md#all)、[`.query()`](DataClassClass.md#query) などの [`DataClass` クラス](DataClassClass.md) の関数や、[`.and()`](#and)、[`orderBy()`](#orderby) など `EntitySelection` クラス自身の関数を用いて、既存のセレクションからエンティティセレクションを作成することができます 。 また、[`dataClass.newSelection()`](DataClassClass.md#newselection) 関数または [`Create entity selection`](#create-new-selection) コマンドを使用して、空のエンティティセレクションを作成することもできます。

### 概要

|                                                                                                                                                                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #EntitySelectionClass.index.Syntax -->](#91index93)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.index.Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.attributeName.Syntax -->](#attributename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.attributeName.Summary -->                                   |
| [<!-- INCLUDE #EntitySelectionClass.add().Syntax -->](#add)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.add().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.and().Syntax -->](#and)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.and().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.at().Syntax -->](#at)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.at().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.average().Syntax -->](#average)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.average().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.contains().Syntax -->](#contains)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.contains().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.copy().Syntax -->](#contains)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.copy().Summary -->                                                      |
| [<!-- INCLUDE #EntitySelectionClass.count().Syntax -->](#count)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.count().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.distinct().Syntax -->](#distinct)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.distinct().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.distinctPaths().Syntax -->](#distinctPaths)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.distinctPaths().Summary -->                               |
| [<!-- INCLUDE #EntitySelectionClass.drop().Syntax -->](#drop)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.drop().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.extract().Syntax -->](#extract)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.extract().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.first().Syntax -->](#first)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.first().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.getDataClass().Syntax -->](#getdataclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.getDataClass().Summary -->                                  |
| [<!-- INCLUDE #EntitySelectionClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntitySelectionClass.isAlterable().Syntax -->](#isalterable)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.isAlterable().Summary -->                                     |
| [<!-- INCLUDE #EntitySelectionClass.isOrdered().Syntax -->](#isordered)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.isOrdered().Summary -->                                           |
| [<!-- INCLUDE #EntitySelectionClass.last().Syntax -->](#last)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.last().Summary -->                                                          |
| [<!-- INCLUDE #EntitySelectionClass.length.Syntax -->](#length)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.length.Summary -->                                                        |
| [<!-- INCLUDE #EntitySelectionClass.max().Syntax -->](#max)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.max().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.min().Syntax -->](#min)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.min().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.minus().Syntax -->](#minus)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.minus().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.or().Syntax -->](#or)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.or().Summary -->                                                                |
| [<!-- INCLUDE #EntitySelectionClass.orderBy().Syntax -->](#orderby)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.orderBy().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.orderByFormula().Syntax -->](#orderbyformula)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.orderByFormula().Summary -->                            |
| [<!-- INCLUDE #EntitySelectionClass.query().Syntax -->](#query)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.query().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.queryPath.Syntax -->](#querypath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.queryPath.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.queryPlan.Syntax -->](#queryplan)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.queryPlan.Summary -->                                               |
| [<!-- INCLUDE #EntitySelectionClass.refresh().Syntax -->](#refresh)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.refresh().Summary -->                                                 |
| [<!-- INCLUDE #EntitySelectionClass.selected().Syntax -->](#selected)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.selected().Summary -->                                              |
| [<!-- INCLUDE #EntitySelectionClass.slice().Syntax -->](#slice)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.slice().Summary -->                                                       |
| [<!-- INCLUDE #EntitySelectionClass.sum().Syntax -->](#sum)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.sum().Summary -->                                                             |
| [<!-- INCLUDE #EntitySelectionClass.toCollection().Syntax -->](#tocollection)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #EntitySelectionClass.toCollection().Summary -->                                  |

## Create entity selection

<!-- REF #_command_.Create entity selection.Syntax -->**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #_command_.Create entity selection.Params -->

| 引数       | タイプ                                |     | 説明                                            |
| -------- | ---------------------------------- | :-: | --------------------------------------------- |
| dsTable  | Table                              |  -> | エンティティセレクションの元となるカレントセレクションが属する 4Dデータベースのテーブル |
| settings | Object                             |  -> | ビルドオプション: context             |
| 戻り値      | 4D.EntitySelection |  <- | 指定したテーブルに対応するデータクラスのエンティティセレクション              |

<!-- END REF -->

#### 説明

`Create entity selection` コマンドは、_dsTable_ で指定したテーブルに対応するデータクラスの [追加可能な](ORDA/entities.md#共有可能追加可能なエンティティセレクション) 新規エンティティセレクションを、同テーブルのカレントセレクションに基づいてビルドして返します。

ソートされたカレントセレクションの場合、[順列のある](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) エンティティセレクションが作成されます (カレントセレクションの並び順が受け継がれます)。 カレントセレクションがソートされていない場合、順列のないエンティティセレクションが作成されます。

[`ds`](API/DataStoreClass.md#ds) において _dsTable_ が公開されていない場合には、エラーが返されます。 リモートデータストアの場合は、このコマンドは使用できません。

任意の _settings_ には、以下のプロパティを持つオブジェクトを渡せます:

| プロパティ   | タイプ  | 説明                                                                            |
| ------- | ---- | ----------------------------------------------------------------------------- |
| context | Text | エンティティセレクションに適用されている [最適化コンテキスト](../ORDA/client-server-optimization.md) のラベル。 |

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

## USE ENTITY SELECTION

<!-- REF #_command_.USE ENTITY SELECTION.Syntax -->**USE ENTITY SELECTION** (*entitySelection*)<!-- END REF -->

<!-- REF #_command_.USE ENTITY SELECTION.Params -->

| 引数              | タイプ             |     | 説明           |
| --------------- | --------------- | :-: | ------------ |
| entitySelection | EntitySelection |  -> | エンティティセレクション |

<!-- END REF -->

#### 説明

`USE ENTITY SELECTION` コマンドは、_entitySelection_ 引数で指定したデータクラスに合致するテーブルのカレントセレクションを、エンティティセレクションの中身に応じて更新します。

[リモートデータストア](../ORDA/remoteDatastores.md) の場合は、このコマンドは使用できません。

:::info

このコマンドは、4Dのカレントセレクションが ORDAクエリの力を活用するためのものです。 パフォーマンス上の理由により、シングルユーザーの 4D と 4D Server では、このコマンドは _entitySelection_ をカレントセレクションと直結します。 そのため、このコマンドに受け渡した _entitySelection_ をその後に再利用したり変更したりすることは避けなければなりません。

:::

:::note

`USE ENTITY SELECTION` の呼び出し後、更新された (空でない) カレントセレクションの最初のレコードがカレントレコードとなりますが、それはメモリ内にはロードされません。 カレントレコードのフィールド値を使用するには、`USE ENTITY SELECTION` コマンドの後に `LOAD RECORD` コマンドを使用します。

:::

#### 例題

```4d
var $entitySel : cs.EmployeeSelection

$entitySel:=ds.Employee.query("lastName = :1";"M@") // $entitySel は Employee データクラスにリレートされています
REDUCE SELECTION([Employee];0)
USE ENTITY SELECTION($entitySel) // Employee テーブルのカレントセレクションが更新されます
```

<!-- REF EntitySelectionClass.index.Desc -->

## &#91_index_&#93

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF EntitySelectionClass.index.Syntax -->***[index]*** : 4D.Entity<!-- END REF -->

#### 説明

`EntitySelection[index]` 記法を使用すると、<!-- REF EntitySelectionClass.index.Summary -->標準のコレクションシンタックスを使用してエンティティセレクション内のエンティティにアクセスすることができます<!-- END REF -->。取得したいエンティティの位置を _index_ に渡します。

対応するエンティティはデータストアから再読み込みされる点に注意してください。

_index_ には、0 と `.length`-1 の範囲内で数値を指定することができます。

- _index_ が範囲外だった場合、エラーが返されます。
- _index_ がドロップされたエンティティに対応していた場合、Null値が返されます。

:::caution

`EntitySelection[index]` は代入不可の式です。これは、[`.lock()`](EntityClass.md#lock) や [`.save()`](EntityClass.md#save) などの関数において、編集可能なエンティティ参照として使用することはできない、ということを意味します。 エンティティを操作するには、戻り値を変数などの代入可能な式に割り当てる必要があります。 例:

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

## ._attributeName_

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF EntitySelectionClass.attributeName.Syntax -->***.attributeName*** : Collection<br/>***.attributeName*** : 4D.EntitySelection<!-- END REF -->

#### 説明

データクラス属性はすべてエンティティセレクションのプロパティとして利用可能で、<!-- REF EntitySelectionClass.attributeName.Summary -->エンティティセレクション内の属性値の "投影" を返します<!-- END REF -->。 戻り値は、属性の種類 ([kind](DataClassClass.md#attributename) が `storage` あるいは `relation`) によって、コレクションあるいは新しいエンティティセレクションのどちらかになります。

- _attributeName_ で指定した属性がストレージ型の場合:
  `.attributeName`は _attributeName_ と同じ型の値のコレクションを返します。
- _attributeName_ で指定した属性がリレートエンティティ型の場合:
  `.attributeName` は _attributeName_ と同じ型のリレート値の新規エンティティセレクションを返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。
- _attributeName_ で指定した属性がリレートエンティティズ型の場合:
  `.attributeName` は _attributeName_ と同じ型のリレート値の新規エンティティセレクションを返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。

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

| リリース  | 内容                            |
| ----- | ----------------------------- |
| 19 R7 | _entitySelection_ パラメーターをサポート |
| 18 R5 | 追加可能なエンティティセレクションのみをサポート      |
| 17    | 追加                            |

</details>

<!-- REF #EntitySelectionClass.add().Syntax -->**.add**( *entity* : 4D.Entity ) : 4D.EntitySelection<br/>**.add**( *entitySelection* : 4D.EntitySelection ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.add().Params -->

| 引数              | タイプ                                |     | 説明                                                  |
| --------------- | ---------------------------------- | :-: | --------------------------------------------------- |
| entity          | 4D.Entity          |  -> | エンティティセレクションに追加するエンティティ                             |
| entitySelection | 4D.EntitySelection |  -> | エンティティセレクションに追加するエンティティセレクション                       |
| 戻り値             | 4D.EntitySelection |  -> | 追加した _entity_ または _entitySelection_ を含むエンティティセレクション |

<!-- END REF -->

#### 説明

`.add()` 関数は、<!-- REF #EntitySelectionClass.add().Summary -->_entity_ または _entitySelection_ で渡したエンティティを対象のエンティティセレクションに追加し、編集されたエンティティセレクションを返します<!-- END REF -->。

> このコマンドは、元のエンティティセレクションを変更します。

:::info 警告

エンティティセレクションは _追加可能_ のものでなければなりません。つまり [`.newSelection()`](DataClassClass.md#newselection) あるいは `Create entity selection` などで作成されたものでなければならないということです。そうでない場合、`.add()` はエラーを返します。 共有可能なエンティティセレクションはエンティティの追加を受け付けないからです。 詳細については [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。

:::

**エンティティの追加**

- エンティティセレクションが順列ありの場合、_entity_ 引数のエンティティはセレクションの最後に追加されます。 同じエンティティへの参照がそのエンティティセレクションにすでに所属していた場合、エンティティは重複することになり、同エンティティの新しい参照が追加されます。
- エンティティセレクションが順列なしの場合、_entity_ 引数のエンティティはセレクションの不特定の場所へ追加され、順番付けはされません。

**エンティティセレクションの追加**

- 元のエンティティセレクションが順列ありの場合、_entitySelection_ 引数のエンティティセレクションはセレクションの最後に追加されます。 _entitySelection_ 内の同じエンティティへの参照が元のエンティティセレクションにすでに所属していた場合、エンティティは重複することになり、同エンティティの新しい参照が追加されます。
- エンティティセレクションが順列なしの場合、順列ありに変更されます。

> 詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

編集されたエンティティセレクションが関数から返されるため、関数の呼び出しをつなげることができます。

_entity_ 引数のエンティティとエンティティセレクションが同じデータクラスに属していない場合、エラーが発生します。 追加するエンティティが Null であった場合には、エラーは発生しません。

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

| 引数              | タイプ                                |     | 説明                                     |
| --------------- | ---------------------------------- | :-: | -------------------------------------- |
| entity          | 4D.Entity          |  -> | 交差するエンティティ                             |
| entitySelection | 4D.EntitySelection |  -> | 交差するエンティティセレクション                       |
| 戻り値             | 4D.EntitySelection |  <- | AND論理演算子による共通部分の結果を格納する新しいエンティティセレクション |

<!-- END REF -->

#### 説明

`.and()` 関数は、<!-- REF #EntitySelectionClass.and().Summary -->エンティティセレクションと _entity_ あるいは _entitySelection_ 引数をAND論理演算子を使用して結合します<!-- END REF -->。戻り値は、エンティティセレクションと引数の両方から参照されているエンティティのみを格納した、順列なしの新規エンティティセレクションです。

- _entity_ 引数を渡した場合、引数のエンティティをエンティティセレクションと結合させることになります。 エンティティがエンティティセレクションに属している場合、そのエンティティのみを格納する新しいエンティティセレクションが返されます。 そうでない場合、空のエンティティセレクションが返されます。
- _entitySelection_ 引数を渡した場合、二つのエンティティセレクションを結合させることになります。 両方のセレクションから参照されているエンティティのみを格納する新しいエンティティセレクションが返されます。 重複するエンティティがなかった場合、空のエンティティセレクションが返されます。

> [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。 返されるセレクションは常に順列なしのものになります。

元のエンティティセレクションあるいは _entitySelection_ 引数が空であった場合、あるいは_entity_ 引数が Null であった場合、空のエンティティセレクションが返されます。

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

| 引数    | タイプ                       |     | 説明                |
| ----- | ------------------------- | :-: | ----------------- |
| index | Integer                   |  -> | 取得するエンティティのインデックス |
| 戻り値   | 4D.Entity |  <- | そのインデックスにあるエンティティ |

<!-- END REF -->

#### 説明

`.at()` 関数は、<!-- REF #EntitySelectionClass.at().Summary -->_index_ の位置にあるエンティティを返します (_index_ は正負の整数)<!-- END REF -->。

_index_ に負の整数 (-1 から -n; n はエンティティセレクションの length) が渡された場合、エンティティセレクションの最後から逆向きに数えます。

_index_ がエンティティセレクションの範囲を超える場合、この関数は Null を返します。

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

| 引数            | タイプ  |     | 説明                                                                                                  |
| ------------- | ---- | :-: | --------------------------------------------------------------------------------------------------- |
| attributePath | Text |  -> | 計算に使用する属性パス                                                                                         |
| 戻り値           | Real |  <- | エンティティの属性値の算術平均 (相加平均) (エンティティセレクションがからの場合には undefined を返します) |

<!-- END REF -->

#### 説明

`.average()` 関数は、<!-- REF #EntitySelectionClass.average().Summary -->_attributePath_ に指定した、エンティティセレクション内の null でない値の算術平均 (相加平均) を返します<!-- END REF -->。

_attributePath_ 引数として、評価する属性パスを渡します。

計算の対象となるのは数値のみです。 ただし、エンティティセレクションの _attributePath_ 引数で指定したパスに異なる型の値が混在している場合、`.average()` はすべてのスカラー要素を対象として平均値を算出します。

> 日付値は数値 (秒数) に変換され、平均を計算するのに使用されます。

エンティティセレクションが空の場合、または _attributePath_ 引数に数値型の値が含まれていない場合には、`.average()` は **undefined** を返します。

以下の場合には、エラーが返されます:

- _attributePath_ はリレート属性である
- _attributePath_ がエンティティセレクションデータクラス内に存在しない属性を指定している場合。

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.contains().Syntax -->**.contains**( *entity* : 4D.Entity ) : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.contains().Params -->

| 引数     | タイプ                       |     | 説明                                                |
| ------ | ------------------------- | :-: | ------------------------------------------------- |
| entity | 4D.Entity |  -> | 評価するエンティティ                                        |
| 戻り値    | Boolean                   |  <- | エンティティがエンティティセレクションに属している場合には true、そうでない場合は false |

<!-- END REF -->

#### 説明

`.contains()` 関数は、<!-- REF #EntitySelectionClass.contains().Summary -->エンティティ参照がエンティティセレクションに属している場合には true を返します<!-- END REF -->。そうでない場合には false を返します。

_entity_ 引数として、エンティティセレクション内で検索するエンティティを渡します。 エンティティが Null の場合、関数は false を返します。

_entity_ 引数とエンティティセレクションが同じデータクラスのものでない場合、エラーが生成されます。

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

| 引数            | タイプ  |     | 説明                                            |
| ------------- | ---- | :-: | --------------------------------------------- |
| attributePath | Text |  -> | 計算に使用する属性パス                                   |
| 戻り値           | Real |  <- | エンティティセレクション内の _attributePath_ が null でない値の個数 |

<!-- END REF -->

#### 説明

`.count()` 関数は、<!-- REF #EntitySelectionClass.count().Summary -->
エンティティセレクション内で _attributePath_ に指定したパスの値が null でないエンティティの数を返します<!-- END REF -->。

> 対象となるのはスカラー値のみです。 オブジェクトあるいはコレクション型の値は Null値とみなされます。

以下の場合には、エラーが返されます:

- _attributePath_ はリレート属性である
- _attributePath_ がエンティティセレクションデータクラス内に存在しない場合。

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

| 引数     | タイプ                                |     | 説明                                                  |
| ------ | ---------------------------------- | :-: | --------------------------------------------------- |
| option | Integer                            |  -> | `ck shared`: 共有可能なエンティティセレクションを返します |
| 戻り値    | 4D.EntitySelection |  <- | エンティティセレクションのコピー                                    |

<!-- END REF -->

#### 説明

`.copy()` 関数は、<!-- REF #EntitySelectionClass.copy().Summary -->元のエンティティセレクションのコピーを返します<!-- END REF -->。

> この関数は、元のエンティティセレクションを変更しません。

_option_ パラメーターが省略された場合はデフォルトで、たとえコピー元が共有可能なエンティティセレクションであったとしても、関数はデフォルトで追加可能な (共有不可の) 新規エンティティセレクションを返します。 共有可能なエンティティセレクションを取得するには、_option_ に `ck shared` 定数を渡します。

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

| 引数            | タイプ        |     | 説明                                  |
| ------------- | ---------- | :-: | ----------------------------------- |
| attributePath | Text       |  -> | 重複しない値を取得する属性のパス                    |
| options       | Integer    |  -> | `dk diacritical`, `dk count values` |
| 戻り値           | Collection |  <- | 重複しない値のみを格納したコレクション                 |

<!-- END REF -->

#### 説明

`.distinct()` 関数は、<!-- REF #EntitySelectionClass.distinct().Summary -->_attributePath_ に指定した、エンティティセレクション内の重複しない (異なる) 値のみを格納したコレクションを返します<!-- END REF -->。

返されたコレクションは自動的に並べ替えられています。 **Null** 値は返されません。

_attributePath_ 引数として、固有の値を取得したいエンティティ属性を渡します。 スカラー値 (テキスト、数値、ブール、あるいは日付) のみが可能です。 _attributePath_ のパスが異なる型の値を格納しているオブジェクトプロパティであった場合、まず最初に型ごとにグループ分けされ、そのあとで並べ替えされます。 型は以下の順番で返されます:

1. ブール
2. 文字列
3. 数値
4. 日付

_attributePath_ がオブジェクト内のパスの場合、`[]` を使ってコレクションを指定できます (例題参照)。

_options_ 引数として、以下の定数を 1つ、または組み合わせで渡すことができます:

| 定数                | 値  | 説明                                                                                                                                                            |
| ----------------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk diacritical`  | 8  | 文字の大小とアクセントを区別して評価をおこないます。 省略された場合のデフォルトでは、アクセント等の発音区別符号を無視した評価が実行されます。                                                                                       |
| `dk count values` | 32 | 特定の値を持つエンティティの数 (重複がなければ 1、重複があればその数) を返します。 このオプションを渡すと、`.distinct()` は、`{"value":*value*; "count":*count*}` のプロパティを含むオブジェクトのコレクションを返します。 |

:::note

`dk count values` のオプションは、ブール、文字列、数値、日付型のストレージ属性でのみ利用可能です。

:::

以下の場合には、エラーが返されます:

- _attributePath_ はリレート属性である
- _attributePath_ がエンティティセレクションデータクラス内に存在しない場合。

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

| 引数  | タイプ        |     | 説明                   |
| --- | ---------- | :-: | -------------------- |
| 属性  | Text       |  -> | 取得したいパスを持つオブジェクト属性名  |
| 戻り値 | Collection |  <- | 重複しないパスを格納した新規コレクション |

<!-- END REF -->

#### 説明

`.distinctPaths()` 関数は、<!-- REF #EntitySelectionClass.distinctPaths().Summary -->対象のエンティティセレクションにおいて _attribute_ に指定した、インデックスされているオブジェクト属性の重複しない (異なる) パスを格納したコレクションを返します<!-- END REF -->。

_attribute_ が、インデックスされているオブジェクト属性でない場合、エラーが生成されます。

呼び出し後、返されるコレクションのサイズは、対象のエンティティセレクションにおいて _attribute_ で指定したオブジェクト属性が持つ重複しないのパスの数に等しい。 パスは、ネストされた属性やコレクション ("info.address.number" や "children[].birthdate" など) を含め、文字列として返されます。 _attribute_ が null 値のエンティティは考慮されません。

#### 例題

_fullData_ オブジェクト属性に格納されているすべてのパスを取得します:

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

_length_ は、ネストされたコレクションプロパティのパスとして自動的に追加されます。

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

| 引数   | タイプ                                |     | 説明                                                                         |
| ---- | ---------------------------------- | :-: | -------------------------------------------------------------------------- |
| mode | Integer                            |  -> | `dk stop dropping on first error`: 最初のドロップ不可エンティティで実行を止めます |
| 戻り値  | 4D.EntitySelection |  <- | 成功した場合には空のエンティティセレクション、そうでない場合にはドロップ不可エンティティを格納したエンティティセレクション              |

<!-- END REF -->

#### 説明

`.drop()` 関数は、<!-- REF #EntitySelectionClass.drop().Summary -->データストアのデータクラスに対応するテーブルから、エンティティセレクションに所属しているエンティティを削除します<!-- END REF -->。 エンティティセレクションはメモリ内に残ります。

> エンティティの削除は恒久的なものであり、取り消しはできません。 ロールバックで戻すことができるように、この関数はトランザクション内で呼び出すことが推奨されています。

`.drop()` の実行中にロックされたエンティティに遭遇した場合、そのエンティティは削除されません。 デフォルトでは、メソッドはエンティティセレクション内のすべてのエンティティを処理し、ドロップ不可なエンティティはエンティティセレクション内に返します。 最初のドロップ不可なエンティティに遭遇した時点でメソッドの実行を止めたい場合は、_mode_ パラメーターに `dk stop dropping on first error` 定数を渡します。

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

<!-- REF #EntitySelectionClass.extract().Syntax -->

**.extract**( _attributePath_ : Text { ; _option_ : Integer } ) : Collection<br/>**.extract**( _attributePath_ { ; _targetPath_ } { ; _...attributePathN_ : Text ; _targetPathN_ : Text } ) : Collection<!-- END REF -->

<!-- REF #EntitySelectionClass.extract().Params -->

| 引数            | タイプ        |     | 説明                                                                                           |
| ------------- | ---------- | :-: | -------------------------------------------------------------------------------------------- |
| attributePath | Text       |  -> | 新しいコレクションに抽出する値の属性パス                                                                         |
| targetPath    | Text       |  -> | 抽出先の属性パスあるいは属性名                                                                              |
| option        | Integer    |  -> | `ck keep null`: 返されるコレクションに null 属性を含めます (デフォルトでは無視されます)。 |
| 戻り値           | Collection |  <- | 抽出した値を格納したコレクション                                                                             |

<!-- END REF -->

#### 説明

`.extract()` 関数は、<!-- REF #EntitySelectionClass.extract().Summary -->_attributePath_ で指定した値をエンティティセレクションから抽出し、コレクションに格納して返します<!-- END REF -->。

_attributePath_ には、以下のものを指定することができます:

- スカラーデータクラス属性
- リレートエンティティ (単数)
- リレートエンティティズ (複数)

_attributePath_ 引数が無効な場合、空のコレクションが返されます。

このメソッドは 2種類のシンタックスを受け入れます。

**.extract( attributePath : Text { ; option : Integer } ) : Collection**

このシンタックスを使用すると、`.extract()` はエンティティセレクションの中の、_attributePath_ 引数で指定された値のコレクションを作成して返します。

デフォルトで、_attributePath_ で指定された値が _null_ または未定義のエンティティは、返されるコレクション内では無視されます。 _option_ パラメーターに `ck keep null` 定数を渡すと、これらの値は返されるコレクションに **null** 要素として格納されます。

- [.kind](DataClassClass.md#attributename) = "relatedEntity" であるデータクラス属性は、エンティティのコレクションとして取得されます (重複したものも保持されます)。
- [.kind](DataClassClass.md#attributename) = "relatedEntities" であるデータクラス属性は、エンティティセレクションのコレクションとして取得されます。

**.extract ( attributePath ; targetPath { ; ...attributePathN ; ... targetPathN}) : Collection**

このシンタックスを使用すると、`.extract()` は _attributePath_ 引数で指定されたプロパティを持つコレクションを作成して返します。 このコレクションのそれぞれの要素は、_targetPath_ 引数のプロパティと、対応する_attributePath_ 引数のプロパティを格納したオブジェクトです。 Null値はそのまま保持されます (このシンタックスでは _option_ に引数を渡しても無視されます)。

複数の _attributePath_ 引数が渡した場合、それぞれに対して _targetPath_ 引数を渡す必要があります。 有効な \[_attributePath_, _targetPath_] のペアのみが取得されます。

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

<!-- REF #EntitySelectionClass.first().Syntax -->**.first()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.first().Params -->

| 引数  | タイプ                       |     | 説明                                                           |
| --- | ------------------------- | :-: | ------------------------------------------------------------ |
| 戻り値 | 4D.Entity |  <- | エンティティセレクションの先頭エンティティへの参照 (見つからなければ null) |

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

<!-- REF #EntitySelectionClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntitySelectionClass.getDataClass().Params -->

| 引数  | タイプ                          |     | 説明                        |
| --- | ---------------------------- | :-: | ------------------------- |
| 戻り値 | 4D.DataClass |  <- | エンティティセレクションが所属しているデータクラス |

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

<!-- REF EntitySelectionClass.getRemoteContextAttributes().Desc -->

## .getRemoteContextAttributes()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Params -->

| 引数     | タイプ  |    | 説明                                                      |
| ------ | ---- | -- | ------------------------------------------------------- |
| result | Text | <- | エンティティセレクションにリンクされたコンテキスト属性 (カンマ区切り) |

<!-- END REF -->

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 説明

`.getRemoteContextAttributes()` 関数は、<!-- REF #EntitySelectionClass.getRemoteContextAttributes().Summary -->エンティティセレクションによって使われている最適化コンテキストの情報を返します<!-- END REF -->。

エンティティセレクションについて [最適化コンテキスト](../ORDA/remoteDatastores.md#クライアントサーバーの最適化) が存在しない場合、関数は空のテキストを返します。

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

[Entity.getRemoteContextAttributes()](./EntityClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntitySelectionClass.isAlterable().Desc -->

## .isAlterable()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R5 | 追加 |

</details>

<!-- REF #EntitySelectionClass.isAlterable().Syntax -->**.isAlterable()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isAlterable().Params -->

| 引数  | タイプ     |     | 説明                                         |
| --- | ------- | :-: | ------------------------------------------ |
| 戻り値 | Boolean |  <- | エンティティセレクションが追加可能であれば true、それ以外の場合には false |

<!-- END REF -->

#### 説明

`.isAlterable()` 関数は、<!-- REF #EntitySelectionClass.isAlterable().Summary -->エンティティセレクションが追加可能の場合には true を返します<!-- END REF -->。それ以外の場合には false を返します。

詳細については [共有可能/追加可能なエンティティセレクション](ORDA/entities.md#共有可能追加可能なエンティティセレクション) を参照ください。

#### 例題

`Form.products` をフォーム内の [リストボックス](FormObjects/listbox_overview.md) に表示し、ユーザーが新しい製品を追加できるようにします。 ユーザーが製品を追加したときにエラーが起きないよう、追加可能であることを確認します:

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

<!-- REF #EntitySelectionClass.isOrdered().Syntax -->**.isOrdered()** : Boolean<!-- END REF -->

<!-- REF #EntitySelectionClass.isOrdered().Params -->

| 引数  | タイプ     |     | 説明                                        |
| --- | ------- | :-: | ----------------------------------------- |
| 戻り値 | Boolean |  <- | 順列ありエンティティセレクションの場合には true、そうでない場合は false |

<!-- END REF -->

#### 説明

`.isOrdered()` 関数は、<!-- REF #EntitySelectionClass.isOrdered().Summary -->エンティティセレクションが順列ありであれば true を返します<!-- END REF -->。順列なしであれば false を返します。

> リモートデータストアに属しているエンティティセレクションの場合は常に true を返します。

詳細については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $isOrdered : Boolean
 $employees:=ds.Employee.newSelection(dk keep ordered)
 $employee:=ds.Employee.get(714) // プライマリーキー 714 を持つエンティティを取得します

  // 順列ありのエンティティセレクションの場合、同じエンティティを複数回追加することができます(重複してるものは保持されます)
 $employees.add($employee)
 $employees.add($employee)
 $employees.add($employee)

 $isOrdered:=$employees.isOrdered()
 If($isOrdered)
    ALERT("エンティティセレクションには順列があり、"+String($employees.length)+" 件の社員エンティティを含みます。")
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

<!-- REF #EntitySelectionClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntitySelectionClass.last().Params -->

| 引数  | タイプ                       |     | 説明                                                           |
| --- | ------------------------- | :-: | ------------------------------------------------------------ |
| 戻り値 | 4D.Entity |  <- | エンティティセレクションの最終エンティティへの参照 (見つからなければ null) |

<!-- END REF -->

#### 説明

`.last()` 関数は、<!-- REF #EntitySelectionClass.last().Summary -->エンティティセレクションの最終エンティティへの参照を返します<!-- END REF -->。

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

`.length` プロパティは、<!-- REF #EntitySelectionClass.length.Summary -->エンティティセレクション内のエンティティの数を返します<!-- END REF -->。 エンティティセレクションが空の場合、関数は 0 を返します。

エンティティセレクションは、常に `.length` プロパティを持っています。

> この関数は、元のエンティティセレクションを変更しません。

#### 例題

```4d
 var $vSize : Integer
 $vSize:=ds.Employee.query("gender = :1";"male").length
 ALERT(String(vSize)+" 人の男性社員が見つかりました。 ")
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

| 引数            | タイプ  |    | 説明          |
| ------------- | ---- | -- | ----------- |
| attributePath | Text | -> | 計算に使用する属性パス |
| 戻り値           | any  | <- | 属性の最大値      |

<!-- END REF -->

#### 説明

`.max()` 関数は、<!-- REF #EntitySelectionClass.max().Summary -->_attributePath_ に指定したエンティティセレクションの属性値のうち最高の (あるいは最大の) 値を返します<!-- END REF -->。 実際には、[`.orderBy()`](#orderby) 関数を使用してエンティティセレクションを昇順に並べ替えたときの最後のエンティティを返します。

_attributePath_ に、異なる型の値を格納しているオブジェクトプロパティを渡した場合、`.max()` メソッドは型のリスト順の中で最初のスカラー型の値の中の最大値を返します ([`.sort()`](CollectionClass.md#sort) の詳細を参照ください)。

エンティティセレクションが空の場合、または _attributePath_ 引数がオブジェクト属性内に見つからない場合には、`.max()` は **undefined** を返します。

以下の場合には、エラーが返されます:

- _attributePath_ はリレート属性である
- _attributePath_ がエンティティセレクションデータクラス内に存在しない属性を指定している場合。

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

| 引数            | タイプ  |     | 説明          |
| ------------- | ---- | :-: | ----------- |
| attributePath | Text |  -> | 計算に使用する属性パス |
| 戻り値           | any  |  <- | 属性の最小値      |

<!-- END REF -->

#### 説明

`.min()` 関数は、<!-- REF #EntitySelectionClass.min().Summary -->_attributePath_ に指定したエンティティセレクションの属性値のうち最低の (あるいは最小の) 値を返します<!-- END REF -->。  実際には、[`.orderBy()`](#orderby) 関数を使用してエンティティセレクションを昇順に並べ替えたときの最初のエンティティを返します (**null**値は除く)。

_attributePath_ に、異なる型の値を格納しているオブジェクトプロパティを渡した場合、`.min()` メソッドは型のリスト順の中で最初のスカラー型の値の中の最小値を返します([`.sort()`](CollectionClass.md#sort) の詳細を参照してください)。

エンティティセレクションが空の場合、または _attributePath_ 引数がオブジェクト属性内に見つからない場合には、`.min()` は **undefined** を返します。

以下の場合には、エラーが返されます:

- _attributePath_ はリレート属性である
- _attributePath_ がエンティティセレクションデータクラス内に存在しない属性を指定している場合。

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

| リリース  | 内容                      |
| ----- | ----------------------- |
| 19 R7 | _keepOrder_ パラメーターをサポート |
| 17    | 追加                      |

</details>

<!-- REF #EntitySelectionClass.minus().Syntax -->**.minus**( *entity* : 4D.Entity { ; *keepOrder* : Integer } ) : 4D.EntitySelection<br/>**.minus**( *entitySelection* : 4D.EntitySelection { ; *keepOrder* : Integer } ) : 4D.EntitySelection<!-- END REF -->

<!-- REF #EntitySelectionClass.minus().Params -->

| 引数              | タイプ                                |     | 説明                                                                             |
| --------------- | ---------------------------------- | :-: | ------------------------------------------------------------------------------ |
| entity          | 4D.Entity          |  -> | 除外するエンティティ                                                                     |
| entitySelection | 4D.EntitySelection |  -> | 除外するエンティティセレクション                                                               |
| keepOrder       | Integer                            |  -> | 結果のエンティティセレクションにおいて元の順列を維持するには `dk keep ordered` (整数) を渡します |
| 戻り値             | 4D.EntitySelection |  <- | 新しいエンティティセレクション、あるいは既存のエンティティセレクションへの新しい参照                                     |

<!-- END REF -->

#### 説明

`.minus()` 関数は、<!-- REF #EntitySelectionClass.minus().Summary -->元のエンティティセレクションから、_entity_ 引数のエンティティ、あるいは _entitySelection_ 引数のエンティティセレクションに含まれるエンティティを除外し、結果のエンティティセレクションを返します<!-- END REF -->。

- _entity_ を引数として渡した場合、メソッドは (_entity_ が元のエンティティセレクションに所属していた場合) _entity_ を除外した新しいエンティティセレクションを作成します。 _entity_ が元のエンティティセレクションに含まれていなかった場合には、同エンティティセレクションへの新しい参照が返されます。
- _entitySelection_ を引数として渡した場合、メソッドは _entitySelection_ に所属しているエンティティを、元のエンティティセレクションから除外した新しいエンティティセレクションを返します。 [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。

_keepOrder_ 引数を省略した場合のデフォルトでは、結果のエンティティセレクションは順列なしになります。 元のエンティティセレクションの順列を維持したい場合 (たとえば、ユーザーインタフェースでエンティティセレクションを再利用したい場合) には、_keepOrder_ に `dk keep ordered` 定数を渡します。 この場合、結果のエンティティセレクションは順列ありとなり、元のエンティティセレクションの順列が維持されます。

:::note

_keepOrder_ に `dk keep ordered` を渡した場合、元のエンティティセレクションにおいて重複しているエンティティが除外される _entitySelection_ に含まれる場合、その重複エンティティはすべて除外されます。

:::

元のエンティティセレクションが空であった場合、空のエンティティセレクションが返されます。

_entitySelection_ が空、あるいは _entity_ が Null であった場合、元のエンティティセレクションへの新しい参照が返されます。

元のエンティティセレクションおよび引数が同じデータクラスのものでない場合、エラーが返されます。

#### 例題 1

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity

 $employees:=ds.Employee.query("lastName = :1";"H@")
  // $employees エンティティセレクションは、主キー710 のエンティティと他のエンティティを格納しています
  //  例: "Colin Hetrick", "Grady Harness", "Sherlock Holmes" (主キー710)

 $employee:=ds.Employee.get(710) // "Sherlock Holmes" を返します

 $result:=$employees.minus($employee) // $result には "Colin Hetrick", "Grady Harness" 格納されます
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

| 引数              | タイプ                                |     | 説明                                        |
| --------------- | ---------------------------------- | :-: | ----------------------------------------- |
| entity          | 4D.Entity          |  -> | 交差するエンティティ                                |
| entitySelection | 4D.EntitySelection |  -> | 交差するエンティティセレクション                          |
| 戻り値             | 4D.EntitySelection |  <- | 新しいエンティティセレクション、あるいは元のエンティティセレクションへの新しい参照 |

<!-- END REF -->

#### 説明

`.or()` 関数は、<!-- REF #EntitySelectionClass.or().Summary -->OR論理演算子を使用して、_entity_ または _entitySelection_ のエンティティと対象エンティティセレクションを組み合わせます<!-- END REF -->。戻り値は、渡した引数とエンティティセレクションの全エンティティを格納する順列なしの新規エンティティセレクションです。

- _entity_ を渡した場合、引数のエンティティをエンティティセレクションと比較することになります。 エンティティがエンティティセレクションに所属している場合、エンティティセレクションへの新しい参照が返されます。 そうでない場合、元のエンティティセレクションと渡したエンティティを格納した新しいエンティティセレクションが返されます。
- _entitySelection_ を渡した場合、二つのエンティティセレクションを比較することになります。 元のエンティティセレクションと _entitySelection_ のどちらかに所属しているエンティティを格納した新しいエンティティセレクションが返されます (OR は排他的ではなく、また両方のセレクションで参照されているエンティティは、結果のセレクションに複数格納されることはありません)。

> [順列ありと順列なしのエンティティセレクション](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を比較することができます。 返されるセレクションは常に順列なしのものになります。

元のエンティティセレクションと _entitySelection_ の両方が空であった場合、空のエンティティセレクションが返されます。 元のエンティティセレクションが空であった場合、_entitySelection_ への参照、あるいは _entity_ のみを格納したエンティティセレクションが返されます。

_entitySelection_ が空、あるいは _entity_ が Null であった場合、元のエンティティセレクションへの新しい参照が返されます。

元のエンティティセレクションおよび引数が同じデータクラスのものでない場合、エラーが返されます。

#### 例題 1

```4d
 var $employees1; $employees2; $result : cs.EmployeeSelection
 $employees1:=ds.Employee.query("lastName = :1";"H@") // "Colin Hetrick","Grady Harness" を返します
 $employees2:=ds.Employee.query("firstName = :1";"C@") // "Colin Hetrick", "Cath Kidston" を返します
 $result:=$employees1.or($employees2) // $result には "Colin Hetrick", "Grady Harness","Cath Kidston" が格納されます
```

#### 例題 2

```4d
 var $employees; $result : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // "Colin Hetrick","Grady Harness", "Sherlock Holmes" を返します
 $employee:=ds.Employee.get(686) // 主キー686 のエンティティは $employees エンティティセレクションに属していません
  // 主キー686 は "Mary Smith" という従業員に合致します

 $result:=$employees.or($employee) //$result には "Colin Hetrick", "Grady Harness", "Sherlock Holmes", "Mary Smith" が格納されます
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

| 引数          | タイプ                                |     | 説明                            |
| ----------- | ---------------------------------- | :-: | ----------------------------- |
| pathString  | Text                               |  -> | エンティティセレクションの属性パスと並べ替えの指定     |
| pathObjects | Collection                         |  -> | 条件オブジェクトのコレクション               |
| 戻り値         | 4D.EntitySelection |  <- | 指定された順番に並べ替えられた新規エンティティセレクション |

<!-- END REF -->

#### 説明

`.orderBy()` 関数は、<!-- REF #EntitySelectionClass.orderBy().Summary -->エンティティセレクションの全エンティティが _pathString_ または _pathObjects_ が指定する順番に並べ替えられた、新規の順列ありのエンティティセレクションを返します<!-- END REF -->。

> - この関数は、元のエンティティセレクションを変更しません。
> - エンティティセレクションの順列については、[エンティティセレクションの順列あり/順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし) を参照ください。

引数を渡して、エンティティの並び替えを指定する必要があります。 並べ替えの指定方法は 2つあります:

- _pathString_ (テキスト): この場合、カンマ区切りされた、1 〜 x 個の属性パスと並べ替え順 (任意) で構成されるフォーミュラを渡します。 シンタックスは以下の通りです:

```4d
"attributePath1 {desc or asc}, attributePath2 {desc or asc},..."
```

属性を渡す順番が、エンティティの並べ替えの優先順位を決定します。 デフォルトでは、属性は昇順に並べ替えられます。 並び順を設定するには、プロパティパスの後に半角スペースで区切ったあとに、昇順を指定するには "asc"、降順を指定するには "desc" を渡します。

- _pathObjects_ (コレクション): コレクションの各要素は、以下の構造を持つオブジェクトを格納します:

```4d
{
    "propertyPath": string,
    "descending": boolean
}
```

デフォルトでは、属性は昇順に並べ替えられます ("descending" は false)。

pathObjects コレクションには必要な数だけオブジェクトを追加することができます。

> Null は他の値より小さいと評価されます。

_pathString_ または _pathObject_ に無効な属性パスを渡すと、この関数は空のエンティティセレクションを返します。

#### 例題

```4d
// フォーミュラでの並べ替え
 $sortedEntitySelection:=$entitySelection.orderBy("firstName asc, salary desc")
 $sortedEntitySelection:=$entitySelection.orderBy("firstName")

  // コレクションでの並べ替えと、昇順・降順の指定
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

| 引数            | タイプ                                |     | 説明                                                            |
| ------------- | ---------------------------------- | :-: | ------------------------------------------------------------- |
| formulaString | Text                               |  -> | フォーミュラ文字列                                                     |
| formulaObj    | Object                             |  -> | フォーミュラオブジェクト                                                  |
| sortOrder     | Integer                            |  -> | `dk ascending` (デフォルト) または `dk descending` |
| settings      | Object                             |  -> | フォーミュラに渡す引数                                                   |
| 戻り値           | 4D.EntitySelection |  <- | 順列ありの新規エンティティセレクション                                           |

<!-- END REF -->

#### 説明

`.orderByFormula()` 関数は、エンティティセレクションの全エンティティが _formulaString_ または _formulaObj_、および (任意の) _sortOrder_ や _settings_ 引数が指定する順番に並べられた、<!-- REF #EntitySelectionClass.orderByFormula().Summary -->順列ありの新規エンティティセレクションを返します<!-- END REF -->。

> この関数は、元のエンティティセレクションを変更しません。

_formulaString_ または _formulaObj_ 引数を渡すことができます:

- _formulaString_: "Year of(this.birthDate)" などの 4D式
- _formulaObj_: `Formula` または `Formula from string` コマンドを使用して作成された、有効なフォーミュラオブジェクト

_formulaString_ および _formulaObj_ はエンティティセレクションの各エンティティに対して実行され、その結果は返されるエンティティセレクション内でのエンティティの位置を決定するのに使用されます。 結果は並べ替え可能な型 (ブール、日付、数値、テキスト、時間、Null) である必要があります。

> Null値の結果は常に最小の値とみなされます。

_sortOrder_ 引数を省略した場合のデフォルトでは、返されるエンティティセレクションは昇順に並べられます。 オプションとして、_sortOrder_ に以下の値のいずれか一つを渡すことができます:

| 定数            | 値 | 説明                            |
| ------------- | - | ----------------------------- |
| dk ascending  | 0 | 昇順 (デフォルト) |
| dk descending | 1 | 降順                            |

_formulaString_ および _formulaObj_ 内では、処理されるエンティティとその属性は `This` コマンドを通して利用可能です (たとえば、`This.lastName` など)。

`settings` 引数の `args` プロパティ (オブジェクト) を使用することで、フォーミュラに引数を渡すことが可能です。このときフォーミュラは、`settings.args` オブジェクトを $1 に受け取ります。

#### 例題 1

テキストとして渡されたフォーミュラを使用して学生を並べ替えます:

```4d
 var $es1; $es2 : cs.StudentsSelection
 $es1:=ds.Students.query("nationality=:1";"French")
 $es2:=$es1.orderByFormula("length(this.lastname)") // デフォルトで昇順
 $es2:=$es1.orderByFormula("length(this.lastname)";dk descending)
```

同じ並び方を、フォーミュラオブジェクトを使用して指定します:

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(Length(This.lastname))
 $es2:=$es1.orderByFormula($formula) // デフォルトで昇順
 $es2:=$es1.orderByFormula($formula;dk descending)
```

#### 例題 2

引数付きのフォーミュラオブジェクトを渡します。`settings.args` オブジェクトは、_**computeAverage**_ メソッド内で $1 が受け取ります。

この例題では、**Students** データクラス内の "marks" オブジェクトフィールドに科目ごとの生徒の成績が格納されています。 フォーミュラオブジェクトを使用し、schoolA と schoolB で異なる係数を用いて生徒の平均の成績を計算します。

```4d
 var $es1; $es2 : cs.StudentsSelection
 var $formula; $schoolA; $schoolB : Object
 $es1:=ds.Students.query("nationality=:1";"French")
 $formula:=Formula(computeAverage($1))

 $schoolA:=New object() // settingsオブジェクト
 $schoolA.args:=New object("english";1;"math";1;"history";1) // 平均を計算するための係数

  // school A の条件に応じて学生を並べ替えます
 $es2:=$es1.entitySelection.orderByFormula($formula;$schoolA)

 $schoolB:=New object() // settingsオブジェクト
 $schoolB.args:=New object("english";1;"math";2;"history";3) // 平均を計算するための係数

  // school B の条件に応じて学生を並べ替えます
 $es2:=$es1.entitySelection.orderByFormula($formula;dk descending;$schoolB)
```

```4d
  //
  // computeAverage メソッド
  // -----------------------------
 #DECLARE ($coefList : Object) ->; $result : Integer
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

| 引数            | タイプ                                |     | 説明                                                                                                   |
| ------------- | ---------------------------------- | :-: | ---------------------------------------------------------------------------------------------------- |
| queryString   | Text                               |  -> | 検索条件 (文字列)                                                                        |
| formula       | Object                             |  -> | 検索条件 (フォーミュラオブジェクト)                                                               |
| value         | any                                |  -> | プレースホルダー用の値                                                                                          |
| querySettings | Object                             |  -> | クエリオプション: parameters, attributes, args, allowFormulas, context, queryPath, queryPlan |
| 戻り値           | 4D.EntitySelection |  <- | _queryString_ または _formula_ に渡した検索条件に合致する、エンティティセレクション内のエンティティから構成された新しいエンティティセレクション\*               |

<!-- END REF -->

#### 説明

`.query()` 関数は、<!-- REF #EntitySelectionClass.query().Summary -->エンティティセレクションの全エンティティから、_queryString_ または _formula_ と任意の _value_ 引数で指定した検索条件に合致するエンティティを検索します<!-- END REF -->。戻り値は、見つかったエンティティをすべて格納する `EntitySelection` 型の新しいオブジェクトです。 この関数には、レイジーローディングが適用されます。

> この関数は、元のエンティティセレクションを変更しません。

エンティティが見つからない場合、空のエンティティセレクションが返されます。

_queryString_ および _value_ や _querySettings_ パラメーターを使ってクエリをビルドする方法の詳細については、DataClass[`.query()`](DataClassClass.md#query) 関数を参照ください。

> _queryString_ 内で **order by** ステートメントを省略した場合のデフォルトでは、返されるエンティティセレクションは、[順列なし](ORDA/dsMapping.md#エンティティセレクションの順列あり順列なし)のものになります。 しかしながら、クライアント/サーバーモードにおいては、順列ありのエンティティセレクションのように振る舞う (エンティティはセレクションの終わりに追加されていく) 点に注意してください。

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

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntitySelectionClass.queryPath.Syntax -->**.queryPath** : Text<!-- END REF -->

#### 説明

`.queryPath` プロパティは、<!-- REF #EntitySelectionClass.queryPath.Summary -->実際に 4Dで実行されたクエリの詳細な情報<!-- END REF -->を格納します。 このプロパティは、[`.query()`](#query) 関数の _querySettings_ 引数に `"queryPath":true` プロパティが渡されていた場合に、クエリを通して生成された `EntitySelection` オブジェクトで利用可能です。

詳細については、DataClass[`.query()`](DataClassClass.html#query) の **querySettings** の説明を参照ください。

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

`.queryPlan` プロパティは、<!-- REF #EntitySelectionClass.queryPlan.Summary -->実行前のクエリの詳細な情報 (クエリプラン) を格納します<!-- END REF -->。 このプロパティは、[`.query()`](#query) 関数の _querySettings_ 引数に `"queryPlan":true` プロパティが渡されていた場合に、クエリを通して生成された `EntitySelection` オブジェクトで利用可能です。

詳細については、DataClass[`.query()`](DataClassClass.html#query) の **querySettings** の説明を参照ください。

<!-- END REF -->

<!-- REF EntitySelectionClass.refresh().Desc -->

## .refresh()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R3 | 追加 |

</details>

<!-- REF #EntitySelectionClass.refresh().Syntax -->**.refresh()**<!-- END REF -->

<!-- REF #EntitySelectionClass.refresh().Params -->

| 引数 | タイプ |     | 説明         |
| -- | --- | :-: | ---------- |
|    |     |     | 引数を必要としません |

<!-- END REF -->

#### 説明

> このメソッドはリモートデータストア (クライアント/サーバーモード、または`Open datastore` 接続) においてのみ動作します。

`.refresh()` 関数は、<!-- REF #EntitySelectionClass.refresh().Summary -->ローカルの ORDAキャッシュにあるエンティティセレクションデータを即座に "無効化" します<!-- END REF -->。そのため、次に 4Dがエンティティセレクションを必要としたときにはそれがデータベースからリロードされます。

デフォルトでは、ローカルの ORDA のキャッシュは 30秒後に無効化されます。 クライアント/サーバーアプリケーションのコンテキストにおいて ORDA とクラシック言語の両方を使用している場合、このメソッドを使用することでリモートアプリケーションが必ず最新のデータを使用するようにできます。

#### 例題 1

クラシックと ORDA言語の両方が、同じデータを同時に編集する場合を考えます:

```4d
 // 4Dリモート上で実行

 var $selection : cs.StudentsSelection
 var $student : cs.StudentsEntity

 $selection:=ds.Students.query("lastname=:1";"Collins")
  // 先頭エンティティを ORDA のキャッシュに読み込みます
 $student:=$selection.first()

  // 4Dのクラシック言語でデータを更新します。 ORDA キャッシュはこれを検知しません
 QUERY([Students];[Students]lastname="Collins")
 [Students]lastname:="Colin"
 SAVE RECORD([Students])

  // 最新情報を取得するため、ORDAキャッシュを無効化する必要があります
 $selection.refresh()
  // キャッシュが失効していなくても、先頭エンティティがディスクから再読み込みされます
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

| 引数               | タイプ                                |     | 説明                                                |
| ---------------- | ---------------------------------- | :-: | ------------------------------------------------- |
| selectedEntities | 4D.EntitySelection |  -> | 呼び出し対象のエンティティセレクションにおける、選別したエンティティの位置範囲           |
| 戻り値              | Object                             |  <- | 呼び出し対象のエンティティセレクション内での位置を取得したい、選別されたエンティティのセレクション |

<!-- END REF -->

#### 説明

`.selected()` 関数は、<!-- REF #EntitySelectionClass.selected().Summary -->呼び出し対象のエンティティセレクションにおける、_selectedEntities_ に含まれるエンティティの位置を表すオブジェクトを返します<!-- END REF -->。

> この関数は、元のエンティティセレクションを変更しません。

_entity_ を引数として渡した場合、メソッドは (_entity_ が元のエンティティセレクションに所属していた場合) _entity_ を除外した新しいエンティティセレクションを作成します。 _entity_ が元のエンティティセレクションに含まれていなかった場合には、同エンティティセレクションへの新しい参照が返されます。

#### 戻り値

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ                                                                              | タイプ        | 説明                                           |
| ---------------------------------------------------------------------------------- | ---------- | -------------------------------------------- |
| ranges                                                                             | Collection | レンジオブジェクトのコレクション                             |
| ranges[].start | Integer    | レンジ内の先頭エンティティのインデックス (位置) |
| ranges[].end   | Integer    | レンジ内の最終エンティティのインデックス (位置) |

`ranges` プロパティに 1件のエンティティしか含まれない場合、`start` = `end` です。 インデックスは 0 起点です。

_attributeName_ で指定した属性がストレージ型の場合: `.attributeName`は _attributeName_ と同じ型の値のコレクションを返します。

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

| 引数        | タイプ                                |     | 説明                                                         |
| --------- | ---------------------------------- | :-: | ---------------------------------------------------------- |
| startFrom | Integer                            |  -> | 処理を開始するインデックス)                                             |
| end       | Integer                            |  -> | 終了インデックス (含まれない)                        |
| 戻り値       | 4D.EntitySelection |  <- | 抜粋エンティティを格納した新しいエンティティセレクション (シャロウ・コピー) |

<!-- END REF -->

#### 説明

`.slice()` 関数は、_startFrom_ の位置 (含まれる) から _end_ の位置 (含まれない) または終わりまでの<!-- REF #EntitySelectionClass.slice().Summary -->エンティティセレクションの一部を、新規エンティティセレクションとして返します<!-- END REF -->。 この関数は、エンティティセレクションのシャロウ・コピーを返します (同じエンティティ参照を使用します)。

> この関数は、元のエンティティセレクションを変更しません。

戻り値のエンティティセレクションには、_startFrom_ 引数で指定したエンティティ (含まれる) から、_end_ 引数で指定したエンティティまで (含まれない) の全エンティティが格納されます。 _startFrom_ 引数のみを渡した場合には、_startFrom_ 引数で指定したエンティティから最後のエンティティまでが戻り値のエンティティセレクションに格納されます。

- _startFrom_ < 0 の場合、_startFrom:=startFrom+length_ として再計算されます (エンティティセレクションの終端からのオフセットであるとみなされます)。 再計算された値も負の値だった場合、_startFrom_ は 0 に設定されます。
- _startFrom >= length_ の場合、関数は空のエンティティセレクションを返します。
- _end_ < 0 の場合、それは _end:=end+length_ として再計算されます。
- 渡された値、あるいは再計算された値が _end_ < _startFrom_ の場合、関数はなにもしません。

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


$slice:=ds.Employee.all().slice(-1;-2) // インデックス 9 から 8番までを返そうとしますが、9 > 8 のため空のエンティティセレクションが返されます

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

| 引数            | タイプ  |     | 説明                |
| ------------- | ---- | :-: | ----------------- |
| attributePath | Text |  -> | 計算に使用する属性パス       |
| 戻り値           | Real |  <- | エンティティセレクションの値の合計 |

<!-- END REF -->

#### 説明

`.sum()` 関数は、<!-- REF #EntitySelectionClass.sum().Summary -->_attributePath_ に指定したエンティティセレクションの属性値の総和を返します<!-- END REF -->。

エンティティセレクションが空の場合、`.sum()` は 0 を返します。

総和は、数値型の値に対してのみ実行可能です。 _attributePath_ がオブジェクトプロパティだった場合、計算の対象になるのは数値型の値のみです (他の値の型は無視されます)。 この場合で、_attributePath_ がオブジェクト内に存在しないパス、あるいは数値を含んでいない属性へのパスであった場合には、`.sum()` は 0 を返します。

以下の場合には、エラーが返されます:

- _attributePath_ が数値型あるいはオブジェクト型の属性ではない
- _attributePath_ はリレート属性である
- _attributePath_ がエンティティセレクションデータクラス内に存在しない場合。

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

<!-- REF #EntitySelectionClass.toCollection().Syntax -->**.toCollection**( { *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer } } ) : *Collection*<br/>**.toCollection**( *filterString* : Text {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<br/>**.toCollection**( *filterCol* : Collection {; *options* : Integer { ; *begin* : Integer { ; *howMany* : Integer }}} ) : *Collection*<!-- END REF -->

<!-- REF #EntitySelectionClass.toCollection().Params -->

| 引数           | タイプ        |     | 説明                                                                                              |
| ------------ | ---------- | :-: | ----------------------------------------------------------------------------------------------- |
| filterString | Text       |  -> | 抽出するエンティティの属性パスの文字列                                                                             |
| filterCol    | Collection |  -> | 抽出するエンティティの属性パスのコレクション                                                                          |
| options      | Integer    |  -> | `dk with primary key`: プライマリーキーを追加<br/>`dk with stamp`: スタンプを追加 |
| begin        | Integer    |  -> | 開始インデックス                                                                                        |
| howMany      | Integer    |  -> | 抽出するエンティティ数                                                                                     |
| 戻り値          | Collection |  <- | エンティティセレクションの属性と値を格納したオブジェクトのコレクション                                                             |

<!-- END REF -->

#### 説明

`.toCollection()` 関数は、エンティティセレクションの各エンティティの属性名と値に対応する<!-- REF #EntitySelectionClass.toCollection().Summary -->プロパティと値のセットを持つオブジェクト要素を格納するコレクションを作成し、返します<!-- END REF -->。

filterString および filterCol 引数が省略されるか、空の文字列が渡されるか、あるいは "\*" が渡された場合、すべての属性が抽出されます。 "[kind](DataClassClass.md#attributename)" プロパティが "relatedEntity" の属性は単純な形式で抽出されます: \_\_KEY プロパティ (プライマリーキー) を持ったオブジェクト。 "relatedEntities" 型の "kind" プロパティの属性は抽出されません。

抽出するエンティティ属性を限定したい場合には、それを指定する引数を渡すことができます。 2つのシンタックスを使用できます:

- _filterString_: プロパティパスをカンマで区切った文字列: "propertyPath1, propertyPath2, ..."
- _filterCol_: プロパティパスを含む文字列のコレクション: \["propertyPath1","propertyPath2",...]

引数が、`relatedEntity` (リレートエンティティ) 型の属性を指定していた場合:

- propertyPath = "relatedEntity" -> 単純な形式で取得されます
- propertyPath = "relatedEntity.\*" -> 全プロパティが取得されます
- propertyPath = "relatedEntity.propertyName1, relatedEntity.propertyName2, ..." -> 指定されたプロパティのみが取得されます

引数が、`relatedEntities` (リレートエンティティズ) 型の属性を指定していた場合:

- propertyPath = "relatedEntities.\*" -> 全プロパティが取得されます
- propertyPath = "relatedEntities.propertyName1, relatedEntities.propertyName2, ..." -> 指定されたプロパティのみが取得されます

_options_ に `dk with primary key` または `dk with stamp` セレクターを渡すことで、エンティティのプライマリーキー/スタンプを、取得するオブジェクトに追加するかどうかを指定できます。

:::caution 警告

リレーションの 1側の属性に主キー以外の属性を使用した場合、その属性の値が "__KEY" プロパティに書き込まれます。 `.toCollection()` と `.fromCollection()` の関数を使用する場合はとくに、リレーションの 1側の属性に主キーを使用することが推奨されます。

:::

_begin_ 引数を渡すことで、抽出するエンティティの開始インデックスを指定することができます。 0 からエンティティセレクションの長さ - 1 の範囲で値を渡すことができます。

_howMany_ 引数を渡すと、_begin_ 引数で指定した位置から抽出するエンティティの件数を指定することができます。 ドロップされたエンティティは返されませんが、_howMany_ 引数のカウントでは考慮されます。 たとえば、ドロップされたエンティティが1つある場合に _howMany_= 3 であれば、2件のエンティティが抽出されます。

_howMany_ 引数がエンティティセレクションの length を超える場合、メソッドは (length - _begin_) の数だけオブジェクトを返します。

以下のいずれかの場合には空のコレクションが返されます:

- エンティティセレクションが空である
- _begin_ 引数がエンティティセレクションの length を超えている

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

`relatedEntity` (リレートエンティティ) 型の属性を単純な形式で抽出した例:

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

_filterCol_ を使用した例:

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

`relatedEntities` (リレートエンティティズ) の一部のプロパティを抽出する例:

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

`relatedEntities` (リレートエンティティズ) の全プロパティを抽出する例:

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
