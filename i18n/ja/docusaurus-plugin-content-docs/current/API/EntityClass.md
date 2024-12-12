---
id: EntityClass
title: Entity
---

レコードとテーブルの関係と同様に、[エンティティ](ORDA/dsMapping.md#エンティティ) は [データクラス](ORDA/dsMapping.md#データクラス) のインスタンスです。 エンティティはデータクラスと同じ属性を持つほか、データ値や、特有のプロパティおよび関数を持ちます。

### 概要

|                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE EntityClass.attributeName.Syntax -->](#attributename)<br/><!-- INCLUDE EntityClass.attributeName.Summary -->                                              |
| [<!-- INCLUDE #EntityClass.clone().Syntax -->](#clone)<br/><!-- INCLUDE #EntityClass.clone().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.diff().Syntax -->](#diff)<br/><!-- INCLUDE #EntityClass.diff().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.drop().Syntax -->](#drop)<br/><!-- INCLUDE #EntityClass.drop().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.first().Syntax -->](#first)<br/><!-- INCLUDE #EntityClass.first().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.fromObject().Syntax -->](#fromobject)<br/><!-- INCLUDE #EntityClass.fromObject().Summary -->                                                 |
| [<!-- INCLUDE #EntityClass.getDataClass().Syntax -->](#getdataclass)<br/><!-- INCLUDE #EntityClass.getDataClass().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getKey().Syntax -->](#getkey)<br/><!-- INCLUDE #EntityClass.getKey().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.getRemoteContextAttributes().Syntax -->](#getremotecontextattributes)<br/><!-- INCLUDE #EntityClass.getRemoteContextAttributes().Summary --> |
| [<!-- INCLUDE #EntityClass.getSelection().Syntax -->](#getselection)<br/><!-- INCLUDE #EntityClass.getSelection().Summary -->                                           |
| [<!-- INCLUDE #EntityClass.getStamp().Syntax -->](#getstamp)<br/><!-- INCLUDE #EntityClass.getStamp().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.indexOf().Syntax -->](#indexof)<br/><!-- INCLUDE #EntityClass.indexOf().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.isNew().Syntax -->](#isnew)<br/><!-- INCLUDE #EntityClass.isNew().Summary -->                                                                |
| [<!-- INCLUDE #EntityClass.last().Syntax -->](#last)<br/><!-- INCLUDE #EntityClass.last().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.lock().Syntax -->](#lock)<br/><!-- INCLUDE #EntityClass.lock().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.next().Syntax -->](#next)<br/><!-- INCLUDE #EntityClass.next().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.previous().Syntax -->](#previous)<br/><!-- INCLUDE #EntityClass.previous().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.reload().Syntax -->](#reload)<br/><!-- INCLUDE #EntityClass.reload().Summary -->                                                             |
| [<!-- INCLUDE #EntityClass.save().Syntax -->](#save)<br/><!-- INCLUDE #EntityClass.save().Summary -->                                                                   |
| [<!-- INCLUDE #EntityClass.toObject().Syntax -->](#toobject)<br/><!-- INCLUDE #EntityClass.toObject().Summary -->                                                       |
| [<!-- INCLUDE #EntityClass.touched().Syntax -->](#touched)<br/><!-- INCLUDE #EntityClass.touched().Summary -->                                                          |
| [<!-- INCLUDE #EntityClass.touchedAttributes().Syntax -->](#touchedattributes)<br/><!-- INCLUDE #EntityClass.touchedAttributes().Summary -->                            |
| [<!-- INCLUDE #EntityClass.unlock().Syntax -->](#unlock)<br/><!-- INCLUDE #EntityClass.unlock().Summary -->                                                             |

<!-- REF EntityClass.attributeName.Desc -->

## .*attributeName*

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF EntityClass.attributeName.Syntax -->***.attributeName*** : any<!-- END REF -->

#### 説明

データクラス属性はすべてエンティティのプロパティとして利用可能です。各エンティティのプロパティは、当該<!-- REF EntityClass.attributeName.Summary -->エンティティの属性値を格納します<!-- END REF -->。

> データクラス属性は \[ ] を使用したシンタックスを使用することでもアクセス可能です。

この属性値タイプは属性の種類 (.kind; リレーションまたはストレージ) によります。

- *attributeName* で指定した属性がストレージ型の場合:
  `.attributeName` は *attributeName* と同じ型の値を返します。
- *attributeName* で指定した属性がリレートエンティティ型の場合:
  `.attributeName` はリレートエンティティを返します。 リレートエンティティの値は、ドット記法でプロパティを繋げることでアクセス可能です。例: "myEntity.employer.employees[0].lastname"
- *attributeName* で指定した属性がリレートエンティティズ型の場合:
  `.attributeName` はリレートエンティティの新しいエンティティセレクションを返します。 重複しているエンティティは取り除かれます (返されるのは順列なしのエンティティセレクションです)。

#### 例題

```4d
 var $myEntity : cs.EmployeeEntity
 $myEntity:=ds.Employee.new() // エンティティを新規作成します
 $myEntity.name:="Dupont" // 'Dupont' を 'name' 属性に代入します
 $myEntity.firstname:="John" // 'John' を 'firstname' 属性に代入します
 $myEntity.save() // エンティティを保存します
```

<!-- END REF -->

<!-- REF EntityClass.clone().Desc -->

## .clone()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.clone().Syntax -->**.clone()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.clone().Params -->

| 引数  | 型                         |                             | 説明                  |
| --- | ------------------------- | :-------------------------: | ------------------- |
| 戻り値 | 4D.Entity | <- | 同レコードを参照する新しいエンティティ |

<!-- END REF -->

#### 説明

The `.clone()` function <!-- REF #EntityClass.clone().Summary -->creates in memory a new entity referencing the same record as the original entity<!-- END REF -->.

This function allows you to update entities separately. Note however that, for performance reasons, the new entity shares the same reference of object attributes as the cloned entity.

> Keep in mind that any modifications done to entities will be saved in the referenced record only when the [`.save()`](#save) function is executed.

この関数は、すでにデータベースに保存されているエンティティに対してのみ使用可能です。 新規に作成されたエンティティ([`.isNew()`](#isnew) が **true** を返すもの) に対して呼び出すことはできません。

#### 例題

```4d
 var $emp; $empCloned : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $empCloned:=$emp.clone()

 $emp.lastName:="Smith" // $emp に対する変更は $empCloned には適用されません

```

<!-- END REF -->

<!-- REF EntityClass.diff().Desc -->

## .diff()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.diff().Syntax -->**.diff**( *entityToCompare* : 4D.Entity { ; *attributesToCompare* : Collection } ) : Collection<!-- END REF -->

<!-- REF #EntityClass.diff().Params -->

| 引数                  | 型                         |                             | 説明                  |
| ------------------- | ------------------------- | :-------------------------: | ------------------- |
| entityToCompare     | 4D.Entity |              ->             | 対象エンティティと比較するエンティティ |
| attributesToCompare | Collection                |              ->             | 比較する属性の名称           |
| 戻り値                 | Collection                | <- | エンティティ間の差異          |

<!-- END REF -->

#### 説明

`.diff()` 関数は、<!-- REF #EntityClass.diff().Summary -->二つのエンティティの中身を比較し、その差異を返します<!-- END REF -->。

*entityToCompare* には、オリジナルのエンティティと比較をするエンティティを渡します。

*attributesToCompare* 引数で、比較する属性を指定することができます。 これを渡した場合、指定された属性に対してのみ比較がおこなわれます。 省略時には、エンティティ間の差異がすべて返されます。

エンティティの差異は、以下のプロパティを持つオブジェクトのコレクションとして返されます:

| プロパティ名        | 型             | 説明                     |
| ------------- | ------------- | ---------------------- |
| attributeName | Text          | 属性名                    |
| value         | any - 属性の型による | オリジナルエンティティの属性値        |
| otherValue    | any - 属性の型による | *entityToCompare* の属性値 |

コレクションに含まれるのは異なる値を持っていた属性のみです。 差異が見つからない場合、`diff()` は空のコレクションを返します。

この関数は、種類 ([kind](DataClassClass.md#attributename)) が **storage** あるいは **relatedEntity** であるプロパティに適用されます。 リレート先のエンティティそのものが変更された場合 (外部キーの変更)、リレーションの名称とそのプライマリーキー名が *attributeName* プロパティに返されます (リレーション名についての *value* および *otherValue* は空になります)。

比較するどちらかのエンティティが **Null** である場合、エラーが生成されます。

#### 例題 1

```4d
 var $diff1; $diff2 : Collection
 employee:=ds.Employee.query("ID=1001").first()
 $clone:=employee.clone()
 employee.firstName:="MARIE"
 employee.lastName:="SOPHIE"
 employee.salary:=500
 $diff1:=$clone.diff(employee) // すべての差異が返されます
 $diff2:=$clone.diff(employee;New collection("firstName";"lastName"))
  // firstName と lastName についての差異のみが返されます
```

$diff1:

```4d
[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    },
    {
        "attributeName": "salary",
        "value": 66600,
        "otherValue": 500
    }
]
$diff2:

[
    {
        "attributeName": "firstName",
        "value": "Natasha",
        "otherValue": "MARIE"
    },
    {
        "attributeName": "lastName",
        "value": "Locke",
        "otherValue": "SOPHIE"
    }
]
```

#### 例題 2

```4d
 var vCompareResult1; vCompareResult2; vCompareResult3; $attributesToInspect : Collection
 vCompareResult1:=New collection
 vCompareResult2:=New collection
 vCompareResult3:=New collection
 $attributesToInspect:=New collection

 $e1:=ds.Employee.get(636)
 $e2:=ds.Employee.get(636)

 $e1.firstName:=$e1.firstName+" update"
 $e1.lastName:=$e1.lastName+" update"

 $c:=ds.Company.get(117)
 $e1.employer:=$c
 $e2.salary:=100

 $attributesToInspect.push("firstName")
 $attributesToInspect.push("lastName")

 vCompareResult1:=$e1.diff($e2)
 vCompareResult2:=$e1.diff($e2;$attributesToInspect)
 vCompareResult3:=$e1.diff($e2;$e1.touchedAttributes())
```

vCompareResult1 (すべての差異が返されています):

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "salary",
        "value": 33500,
        "otherValue": 100
    },
    {
        "attributeName": "employerID", // プライマリーキー名
        "value": 117,
        "otherValue": 118
    },
  {
        "attributeName": "employer", // リレーション名
        "value": "[object Entity]",// Company のエンティティ 117
        "otherValue": "[object Entity]"// Company のエンティティ 118
    }
]
```

vCompareResult2 ($attributesToInspect についての差異のみ返されます)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    }
]
```

vCompareResult3 ($e1 において更新された (touch された) 属性のみが返されます)

```4d
[
    {
        "attributeName": "firstName",
        "value": "Karla update",
        "otherValue": "Karla"
    },
    {
        "attributeName": "lastName",
        "value": "Marrero update",
        "otherValue": "Marrero"
    },
    {
        "attributeName": "employerID", // プライマリーキー名
        "value": 117,
        "otherValue": 118
    },
     {
        "attributeName": "employer", // リレーション名
        "value": "[object Entity]",// Company のエンティティ 117
        "otherValue": "[object Entity]"// Company のエンティティ 118

    }
]
```

<!-- END REF -->

<!-- REF EntityClass.drop().Desc -->

## .drop()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.drop().Syntax -->**.drop**( {*mode* : Integer} ) : Object<!-- END REF -->

<!-- REF #EntityClass.drop().Params -->

| 引数   | 型       |                             | 説明                                                                           |
| ---- | ------- | :-------------------------: | ---------------------------------------------------------------------------- |
| mode | Integer |              ->             | `dk force drop if stamp changed`: スタンプが変更されていた場合でも強制的にドロップする |
| 戻り値  | Object  | <- | ドロップの結果                                                                      |

<!-- END REF -->

#### 説明

`.drop()` 関数は、データクラスに対応するテーブルにおいて、<!-- REF #EntityClass.drop().Summary -->データストアのエンティティに格納されているデータを削除します<!-- END REF -->。 エンティティそのものはメモリ内に残るという点に注意してください。

マルチユーザー、あるいはマルチプロセスアプリケーションにおいて、`.drop()` 関数は ["オプティミスティック・ロック"](ORDA/entities.md#entity-locking) 機構のもとで実行されます。これはレコードが保存されるたびに内部的なロックスタンプが自動的に増分していくという機構です。

*mode* 引数を渡さなかった場合のデフォルトでは、同エンティティが他のプロセスまたはユーザーによって変更されていた場合 (つまり、スタンプが変更されていた場合) にエラーを返します (以下参照)。

*mode* に `dk force drop if stamp changed` オプションを渡すと、スタンプが変更されていてもエンティティはドロップされます (プライマリーキーは変わらない場合)。

**戻り値**

`.drop( )` によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ                             |                                     | 型                   | 説明                                                                                                          |
| --------------------------------- | ----------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| success                           |                                     | boolean             | ドロップが成功した場合には true、それ以外は false                                                                              |
|                                   |                                     |                     | ***エラーの場合にのみ利用可能:***                                                                        |
| status(\*)     |                                     | number              | エラーコード、以下参照                                                                                                 |
| statusText(\*) |                                     | text                | エラーの詳細、以下参照                                                                                                 |
|                                   |                                     |                     | ***ペシミスティック・ロックエラーの場合にのみ利用可能:***                                                            |
| lockKindText                      |                                     | text                | "Locked by record"                                                                                          |
| lockInfo                          |                                     | object              | ロック元についての情報                                                                                                 |
|                                   | task_id        | number              | プロセスID                                                                                                      |
|                                   | user_name      | text                | マシン上でのセッションユーザー名                                                                                            |
|                                   | user4d_alias   | text                | `SET USER ALIAS` で設定されていればユーザーエイリアス。それ以外は 4Dディレクトリのユーザー名                                                    |
|                                   | host_name      | text                | マシン名                                                                                                        |
|                                   | task_name      | text                | プロセス名                                                                                                       |
|                                   | client_version | text                |                                                                                                             |
|                                   |                                     |                     | ***深刻なエラーの場合にのみ利用可能*** (深刻なエラーとは、プライマリーキーを重複させようとした、ディスクがいっぱいであった、などです): |
| errors                            |                                     | Object の Collection |                                                                                                             |
|                                   | message                             | text                | エラーメッセージ                                                                                                    |
|                                   | component signature                 | text                | 内部コンポーネント署名 (例 "dmbg" はデータベースコンポーネントを表します)                                               |
|                                   | errCode                             | number              | エラーコード                                                                                                      |

(\*) エラー時には *Result* オブジェクトの *status* あるいは *statusText* プロパティに以下のいずれかの値が返されます:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 このエラーは以下のような場合に起きえます:<br/><li>エンティティがドロップされている (スタンプが変更されていて、メモリ空間は解放されている)</li><li>エンティティがドロップされていて、他のプライマリーキー値を持つエンティティで置き換えられている (スタンプは変更されていて、新しいエンティティがメモリ空間を使用している)。 entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 `entity.lock()` を使用するとき、このエラーは `dk reload drop if stamp changed` オプションを使用した場合に返されることがあります。</li>**割り当てられた statusText**: "Entity does not exist anymore" (エンティティはもう存在しません) |
| `dk status locked`                        | 3 | エンティティはペシミスティック・ロックでロックされています。<br/>**割り当てられた statusText**: "Already locked" (既にロックされています)                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `dk status serious error`                 | 4 | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。<br/>**割り当てられた statusText**: "Other error" (その他のエラー)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `dk status stamp has changed`             | 2 | エンティティの内部的なスタンプ値がデータ内に保存されているエンティティのものと合致しません (オプティミスティック・ロック)。<br/><li>`entity.save()` の場合: `dk auto merge` オプションが使用されていない場合に限りエラー</li><li>`entity.drop()` の場合: `dk force drop if stamp changed` オプションが使用されていない場合に限りエラー</li><li>`entity.lock()` の場合: `dk reload if stamp changed` オプションが使用されていない場合に限りエラー</li><li>**割り当てられた statusText**: "Stamp has changed"</li>                                                                                                                                          |
| `dk status wrong permission`              | 1 | 現在の権限では、エンティティを削除することはできません。 **割り当てられた statusText**: "Permission Error" (権限エラー)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### 例題 1

`dk force drop if stamp changed` オプションを使用しない例:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop()
 Case of
    :($status.success)
       ALERT($employee.firstName+" "+$employee.lastName+" をドロップしました。 ") // ドロップされたエンティティはメモリ内に残ります
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### 例題 2

`dk force drop if stamp changed` オプションを使用する例:

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $status:=$employee.drop(dk force drop if stamp changed)
 Case of
    :($status.success)
       ALERT($employee.firstName+" "+$employee.lastName+" をドロップしました。 ") // ドロップされたエンティティはメモリ内に残ります
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.first().Desc -->

## .first()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.first().Syntax -->**.first()**: 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.first().Params -->

| 引数  | 型                         |                             | 説明                                                           |
| --- | ------------------------- | :-------------------------: | ------------------------------------------------------------ |
| 戻り値 | 4D.Entity | <- | エンティティセレクションの先頭エンティティへの参照 (見つからなければ null) |

<!-- END REF -->

#### 説明

`.first()` 関数は、<!-- REF #EntityClass.first().Summary -->対象エンティティが所属するエンティティセレクションの先頭エンティティへの参照を返します<!-- END REF -->。

対象エンティティが所属する既存エンティティセレクションが存在しない場合 (つまり [entity.getSelection( )](#getselection) が Null を返す場合)、関数は Null値を返します。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $firstEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // このエンティティセレクションは 3件のエンティティを持ちます
 $employee:=$employees[2]
 $firstEmployee:=$employee.first() // $firstEmployee は、$employees エンティティセレクションの先頭エンティティです
```

<!-- END REF -->

<!-- REF EntityClass.fromObject().Desc -->

## .fromObject()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.fromObject().Syntax -->**.fromObject**( *filler* : Object )<!-- END REF -->

<!-- REF #EntityClass.fromObject().Params -->

| 引数     | 型      |     | 説明                    |
| ------ | ------ | :-: | --------------------- |
| filler | Object |  -> | エンティティの属性値を設定するオブジェクト |

<!-- END REF -->

#### 説明

`.fromObject()` 関数は、<!-- REF #EntityClass.fromObject().Summary -->
*filler* に指定した内容でエンティティの属性値を設定します<!-- END REF -->。

> このコマンドは、元のエンティティを変更します。

オブジェクトとエンティティ間のマッピングは属性名でおこなわれます:

- オブジェクトのプロパティがデータクラスに存在しない場合、それは無視されます。
- データタイプは同じである必要があります。 オブジェクトとデータクラス間で型が合致しない場合、4D は可能であればデータを変換しようとし ([`データタイプの変換`](Concepts/data-types.md#データタイプの変換)) 参照)、それ以外の場合にはその属性は更新されません。
- プライマリーキーはそのまま、あるいは "__KEY" プロパティを (プライマリーキー値とともに) 使って指定することができます。 その値のエンティティがデータクラス内に存在しない場合には、[.save()](#save) が呼び出されたときに指定値を使ってエンティティが作成されます。 プライマリーキーを指定していない場合、エンティティは作成され、データベースのルールに基づいてプライマリーキー値が割り当てられます。 自動インクリメント機能はプライマリーキーが null の場合にのみ計算されます。

*filler* 引数のオブジェクトは、以下の条件のいずれかを満たしている場合にはリレートエンティティを扱うことができます:

- *filler* が外部キーを格納している
- *filler* が、リレートエンティティ名と同じ名称のプロパティを格納しており、その値であるオブジェクトは "\_\_KEY" という名称の単一のプロパティを格納している
- リレートエンティティが存在しない場合、無視されます。

#### 例題

以下のような $o オブジェクトがある場合:

```4d
{
    "firstName": "Mary",
    "lastName": "Smith",
    "salary": 36500,
    "birthDate": "1958-10-27T00:00:00.000Z",
    "woman": true,
    "managerID": 411,// リレートエンティティを主キー属性値で指定します
    "employerID": 20 // リレートエンティティを主キー属性値で指定します
}
```

以下のコードを実行すると、manager および employerというリレートエンティティを持つエンティティを作成します。

```4d
 var $o : Object
 var $entity : cs.EmpEntity
 $entity:=ds.Emp.new()
 $entity.fromObject($o)
 $entity.save()
```

また、オブジェクトとして提供されたリレートエンティティを使用することもできます:

```4d

{
    "firstName": "Marie",
    "lastName": "Lechat",
    "salary": 68400,
    "birthDate": "1971-09-03T00:00:00.000Z",
    "woman": false,
    "employer": {// リレートエンティティをオブジェクトで指定します
        "__KEY": "21"
    },
    "manager": {//  リレートエンティティをオブジェクトで指定します
        "__KEY": "411"
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.getDataClass().Desc -->

## .getDataClass()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R5 | 追加 |

</details>

<!-- REF #EntityClass.getDataClass().Syntax -->**.getDataClass()** : 4D.DataClass<!-- END REF -->

<!-- REF #EntityClass.getDataClass().Params -->

| 引数  | 型                            |                             | 説明                             |
| --- | ---------------------------- | :-------------------------: | ------------------------------ |
| 戻り値 | 4D.DataClass | <- | エンティティが所属している DataClass オブジェクト |

<!-- END REF -->

#### 説明

`.getDataClass()` 関数は、<!-- REF #EntityClass.getDataClass().Summary -->エンティティのデータクラスを返します<!-- END REF -->。 この関数は汎用的なコードを書くのに有用です。

#### 例題

以下の汎用的なコードは、あらゆるエンティティを複製します:

```4d
  // duplicate_entity メソッド 
  // duplicate_entity($entity) 

 #DECLARE($entity : 4D.Entity)  
 var $entityNew : 4D.Entity
 var $status : Object

 $entityNew:=$entity.getDataClass().new() // 親データクラスに新しいエンティティを作成します
 $entityNew.fromObject($entity.toObject()) // 全属性を取得します
 $entityNew[$entity.getDataClass().getInfo().primaryKey]:=Null // プライマリーキーをリセットします
 $status:=$entityNew.save() // 複製したエンティティを保存します
```

<!-- END REF -->

<!-- REF EntityClass.getKey().Desc -->

## .getKey()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.getKey().Syntax -->**.getKey**( { *mode* : Integer } ) : Text<br/>**.getKey**( { *mode* : Integer } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.getKey().Params -->

| 引数   | 型       |                             | 説明                                                                       |
| ---- | ------- | :-------------------------: | ------------------------------------------------------------------------ |
| mode | Integer |              ->             | `dk key as string`: プライマリーキーの型にかかわらず、プライマリーキーを文字列として返します |
| 戻り値  | Text    | <- | エンティティのテキスト型プライマリーキーの値                                                   |
| 戻り値  | Integer | <- | エンティティの数値型プライマリーキーの値                                                     |

<!-- END REF -->

#### 説明

`.getKey()` 関数は、<!-- REF #EntityClass.getKey().Summary -->エンティティのプライマリーキー値を返します<!-- END REF -->。

プライマリーキーは数値 (倍長整数) あるいは文字列です。 *mode* 引数として `dk key as string` オプションを渡すことで、実際のプライマリーキーの型に関係なく、返されるプライマリーキー値の型を文字列に "強制" することができます。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees[0]
 ALERT("プライマリーキー: "+$employee.getKey(dk key as string))
```

<!-- END REF -->

<!-- REF EntityClass.getRemoteContextAttributes().Desc -->

## .getRemoteContextAttributes()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 19R5 | 追加 |

</details>

<!-- REF #EntityClass.getRemoteContextAttributes().Syntax -->**.getRemoteContextAttributes()** : Text<!-- END REF -->

<!-- REF #EntityClass.getRemoteContextAttributes().Params -->

| 引数  | 型    |                             | 説明                                                |
| --- | ---- | --------------------------- | ------------------------------------------------- |
| 戻り値 | Text | <- | エンティティにリンクされたコンテキスト属性 (カンマ区切り) |

<!-- END REF -->

> **上級者向け:** この機能は、特定の構成のため、ORDAのデフォルト機能をカスタマイズする必要がある開発者向けです。 ほとんどの場合、使用する必要はないでしょう。

#### 説明

`.getRemoteContextAttributes()` 関数は、 <!-- REF #EntityClass.getRemoteContextAttributes().Summary -->エンティティによって使われている最適化コンテキストの情報を返します <!-- END REF -->。

エンティティについて [最適化コンテキスト](../ORDA/remoteDatastores.md#クライアントサーバーの最適化) が存在しない場合、関数は空のテキストを返します。

#### 例題

```4d
var $ds : 4D.DataStoreImplementation
var $address : cs.AddressEntity
var $p : cs.PersonsEntity
var $contextA : Object
var $info : Text
var $text : Text

$ds:=Open datastore(New object("hostname"; "www.myserver.com"); "myDS")

$contextA:=New object("context"; "contextA")

$address:=$ds.Address.get(1; $contextA)
$text:=""
For each ($p; $address.persons)
    $text:=$p.firstname+" "+$p.lastname
End for each 

$info:=$address.getRemoteContextAttributes()

//$info = "persons,persons.lastname,persons.firstname"
```

#### 参照

[EntitySelection.getRemoteContextAttributes()](./EntitySelectionClass.md#getRemoteContextAttributes)<br/>[.clearAllRemoteContexts()](./DataStoreClass.md#clearallremotecontexts)<br/>[.getRemoteContextInfo()](./DataStoreClass.md#getremotecontextinfo)<br/>[.getAllRemoteContexts()](./DataStoreClass.md#getallremotecontexts)<br/>[.setRemoteContextInfo()](./DataStoreClass.md#setremotecontextinfo)

<!-- REF EntityClass.getSelection().Desc -->

## .getSelection()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.getSelection().Syntax -->**.getSelection()**: 4D.EntitySelection<!-- END REF -->

<!-- REF #EntityClass.getSelection().Params -->

| 引数  | 型                                  |                             | 説明                                                         |
| --- | ---------------------------------- | :-------------------------: | ---------------------------------------------------------- |
| 戻り値 | 4D.EntitySelection | <- | エンティティが所属するエンティティセレクション (見つからなければ null) |

<!-- END REF -->

#### 説明

`.getSelection()` 関数は、<!-- REF #EntityClass.getSelection().Summary -->エンティティが所属するエンティティセレクションを返します<!-- END REF -->。

対象エンティティがエンティティセレクションに所属していない場合、関数は Null値を返します。

#### 例題

```4d
 var $emp : cs.EmployeeEntity
 var $employees; $employees2 : cs.EmployeeSelection
 $emp:=ds.Employee.get(672) // エンティティセレクションに属していないエンティティです
 $employees:=$emp.getSelection() // $employees は Null です

 $employees2:=ds.Employee.query("lastName=:1";"Smith") // このエンティティセレクションは 6件のエンティティを格納しています
 $emp:=$employees2[0]  // エンティティセレクションに所属しているエンティティです

 ALERT("エンティティセレクションには "+String($emp.getSelection().length)+" 件のエンティティが含まれています")
```

<!-- END REF -->

<!-- REF EntityClass.getStamp().Desc -->

## .getStamp()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.getStamp().Syntax -->**.getStamp()** : Integer<!-- END REF -->

<!-- REF #EntityClass.getStamp().Params -->

| 引数  | 型       |                             | 説明                                                      |
| --- | ------- | :-------------------------: | ------------------------------------------------------- |
| 戻り値 | Integer | <- | エンティティのスタンプ (エンティティが作成されたばかりの場合には 0) |

<!-- END REF -->

#### 説明

`.getStamp()` 関数は、<!-- REF #EntityClass.getStamp().Summary --> エンティティのスタンプの値を返します<!-- END REF -->。

内部スタンプは、エンティティが保存されるたびに 4D によって自動的にインクリメントされます。 これは同じエンティティに対する複数のユーザーの同時アクセス・編集を管理します。この機構の詳細については、[**エンティティロッキング**](ORDA/entities.md#エンティティロッキング) を参照ください。

> (一度も保存されていない) 新規エンティティに対しては、このメソッドは 0 を返します。 しかしながら、エンティティがまだ作成されたばかりかどうかを調べるには、[isNew()](#isnew) の使用が推奨されます。

#### 例題

```4d
 var $entity : cs.EmployeeEntity
 var $stamp : Integer

 $entity:=ds.Employee.new()
 $entity.lastname:="Smith"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=1

 $entity.lastname:="Wesson"
 $entity.save()
 $stamp:=$entity.getStamp() //$stamp=2
```

<!-- END REF -->

<!-- REF EntityClass.indexOf().Desc -->

## .indexOf()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.indexOf().Syntax -->**.indexOf**( { *entitySelection* : 4D.EntitySelection } ) : Integer<!-- END REF -->

<!-- REF #EntityClass.indexOf().Params -->

| 引数              | 型                                  |                             | 説明                            |
| --------------- | ---------------------------------- | :-------------------------: | ----------------------------- |
| entitySelection | 4D.EntitySelection |              ->             | エンティティの位置を取得する対象のエンティティセレクション |
| 戻り値             | Integer                            | <- | エンティティセレクション内でのエンティティの位置      |

<!-- END REF -->

#### 説明

`.indexOf()` 関数は、<!-- REF #EntityClass.indexOf().Summary -->エンティティセレクション内におけるエンティティの位置を返します<!-- END REF -->。

*entitySelection* 引数が渡されなかった場合はデフォルトで、所属エンティティセレクション内でのエンティティの位置が返されます。 *entitySelection* 引数を渡した場合は、指定されたエンティティセレクション内でのエンティティの位置を返します。

戻り値は、0 と、エンティティセレクションの length より 1 を引いた値の範囲内の数値です。

- エンティティがエンティティセレクションを持たない場合、あるいは *entitySelection* 引数で指定したエンティティセレクションに含まれていない場合には、-1 が返されます。
- *entitySelection* 引数で指定したエンティティセレククションが Null である、あるいはエンティティと同じデータクラスのものでない場合には、エラーが生成されます。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // このエンティティセレクションには 3件のエンティティが格納されています
 $employee:=$employees[1] // このエンティティはエンティティセレクションに所属しています
 ALERT("The index of the entity in its own entity selection is "+String($employee.indexOf())) // 1

 $employee:=ds.Employee.get(725) // エンティティセレクションに所属していないエンティティです
 ALERT("The index of the entity is "+String($employee.indexOf())) // -1
```

<!-- END REF -->

<!-- REF EntityClass.isNew().Desc -->

## .isNew()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.isNew().Syntax -->**.isNew()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.isNew().Params -->

| 引数  | 型       |                             | 説明                                         |
| --- | ------- | :-------------------------: | ------------------------------------------ |
| 戻り値 | Boolean | <- | エンティティが作成されたばかりで未保存の場合は true。 それ以外は false。 |

<!-- END REF -->

#### 説明

`.isNew()` 関数は、<!-- REF #EntityClass.isNew().Summary -->対象エンティティが作成されたばかりで、まだデータストアに保存されていない場合に true を返します<!-- END REF -->。 そうでない場合には、false を返します。

#### 例題

```4d
 var $emp : cs.EmployeeEntity

 $emp:=ds.Employee.new()

 If($emp.isNew())
    ALERT("新規エンティティです。 ")
 End if
```

<!-- END REF -->

<!-- REF EntityClass.last().Desc -->

## .last()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.last().Syntax -->**.last()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.last().Params -->

| 引数  | 型                         |                             | 説明                                                           |
| --- | ------------------------- | :-------------------------: | ------------------------------------------------------------ |
| 戻り値 | 4D.Entity | <- | エンティティセレクションの最終エンティティへの参照 (見つからなければ null) |

<!-- END REF -->

#### 説明

`.last()` 関数は、<!-- REF #EntityClass.last().Summary -->対象エンティティが所属するエンティティセレクションの最終エンティティへの参照を返します<!-- END REF -->。

対象エンティティが所属する既存エンティティセレクションが存在しない場合 (つまり [entity.getSelection( )](#getselection) が Null を返す場合)、関数は Null値を返します。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $lastEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // このエンティティセレクションは 3件のエンティティを持ちます
 $employee:=$employees[0]
 $lastEmployee:=$employee.last() // $lastEmployee は、$employees エンティティセレクションの最終エンティティです
```

<!-- END REF -->

<!-- REF EntityClass.lock().Desc -->

## .lock()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.lock().Syntax -->**.lock**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.lock().Params -->

| 引数   | 型       |                             | 説明                                                                       |
| ---- | ------- | :-------------------------: | ------------------------------------------------------------------------ |
| mode | Integer |              ->             | `dk reload if stamp changed`: スタンプが変更されてる場合はロック前にリロードします |
| 戻り値  | Object  | <- | ロックの結果                                                                   |

<!-- END REF -->

#### 説明

`.lock()` 関数は、<!-- REF #EntityClass.lock().Summary -->対象エンティティが参照するレコードにペシミスティック・ロックをかけます<!-- END REF -->。 [ロック](ORDA/entities.md#エンティティロッキング)はレコードと、カレントプロセス内の当該エンティティの参照すべてに対してかけられます。

他のプロセスからはこのレコードがロックされて見えます (この関数を使って同エンティティをロックしようとした場合、`result.success` プロパティには false が返されます)。 ロックをおこなったセッション内で実行される関数のみが、当該エンティティの属性を編集・保存できます。 他のセッションは同エンティティを読み取り専用にロードできますが、値の入力・保存はできません。

`.lock()` でロックされたレコードは、以下の場合にロック解除されます:

- 同プロセス内で合致するエンティティに対して [`.unlock()`](#unlock) 関数が呼び出された場合
- メモリ内のどのエンティティからも参照されなくなった場合、自動的にロックが解除されます。 たとえば、エンティティのローカル参照に対してのみロックがかかっていた場合、関数の実行が終了すればロックは解除されます。 メモリ内にエンティティへの参照がある限り、レコードはロックされたままです。

> エンティティは [RESTセッションによってロックされる](../REST/$lock.md) 場合もあります。

*mode* 引数を渡さなかった場合のデフォルトでは、同エンティティが他のプロセスまたはユーザーによって変更されていた場合 (つまり、スタンプが変更されていた場合) にエラーを返します (以下参照)。

*mode* に `dk reload if stamp changed` オプションを渡すと、スタンプが変更されていてもエラーは返されず、エンティティは再読み込みされます (エンティティが引き続き存在し、プライマリーキーも変わらない場合)。

**戻り値**

`.lock()` によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ                             |                                     | 型                   | 説明                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------- | ----------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| success                           |                                     | boolean             | ロックに成功した場合 (あるいはエンティティがすでにカレントプロセスでロックされていた場合) には true、それ以外は false                                                                                                                                                                                                                                                                              |
|                                   |                                     |                     | ***`dk reload if stamp changed` オプションが使用されていた場合にのみ利用可能:***                                                                                                                                                                                                                                                                                         |
| **wasReloaded**                   |                                     | boolean             | エンティティがリロードされ、かつリロードに成功した場合には true、それ以外は false                                                                                                                                                                                                                                                                                                                     |
|                                   |                                     |                     | ***エラーの場合にのみ利用可能:***                                                                                                                                                                                                                                                                                                                               |
| status(\*)     |                                     | number              | エラーコード、以下参照                                                                                                                                                                                                                                                                                                                                                        |
| statusText(\*) |                                     | text                | エラーの詳細、以下参照                                                                                                                                                                                                                                                                                                                                                        |
|                                   |                                     |                     | ***ペシミスティック・ロックエラーの場合にのみ利用可能:***                                                                                                                                                                                                                                                                                                                   |
| lockKindText                      |                                     | text                | "Locked by record" 4Dプロセスによるロック、"Locked by session" RESTセッションによるロック                                                                                                                                                                                                                                                                                                |
| lockInfo                          |                                     | object              | ロック元についての情報。 返されるプロパティはロック元 (4Dプロセスまたは RESTセッション) によって異なります。                                                                                                                                                                                                                                                                                    |
|                                   |                                     |                     | ***4Dプロセスによるロックの場合:***                                                                                                                                                                                                                                                                                                                             |
|                                   | task_id        | number              | プロセスID                                                                                                                                                                                                                                                                                                                                                             |
|                                   | user_name      | text                | マシン上でのセッションユーザー名                                                                                                                                                                                                                                                                                                                                                   |
|                                   | user4d_alias   | text                | 4D ユーザーの名前またはエイリアス                                                                                                                                                                                                                                                                                                                                                 |
|                                   | user4d_id      | number              | 4DデータベースディレクトリでのユーザーID                                                                                                                                                                                                                                                                                                                                             |
|                                   | host_name      | text                | マシン名                                                                                                                                                                                                                                                                                                                                                               |
|                                   | task_name      | text                | プロセス名                                                                                                                                                                                                                                                                                                                                                              |
|                                   | client_version | text                | クライアントのバージョン                                                                                                                                                                                                                                                                                                                                                       |
|                                   |                                     |                     | ***RESTセッションによるロックの場合:***                                                                                                                                                                                                                                                                                                                          |
|                                   | host                                | text                | エンティティをロックした URL (例: "www.myserver.com")                                                                                                                                                                                                                                                        |
|                                   | IPAddr                              | text                | ロック元の IPアドレス (例: "127.0.0.1")                                                                                                                                                                                                                                                   |
|                                   | userAgent                           | text                | ロック元の userAgent (例: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |
|                                   |                                     |                     | ***深刻なエラーの場合にのみ利用可能*** (深刻なエラーとは、プライマリーキーを重複させようとした、ディスクがいっぱいであった、などです):                                                                                                                                                                                                                                                        |
| errors                            |                                     | Object の Collection |                                                                                                                                                                                                                                                                                                                                                                    |
|                                   | message                             | text                | エラーメッセージ                                                                                                                                                                                                                                                                                                                                                           |
|                                   | component signature                 | text                | 内部コンポーネント署名 (例 "dmbg" はデータベースコンポーネントを表します)                                                                                                                                                                                                                                                                                                      |
|                                   | errCode                             | number              | エラーコード                                                                                                                                                                                                                                                                                                                                                             |

(\*) エラー時には *Result* オブジェクトの *status* あるいは *statusText* プロパティに以下のいずれかの値が返されます:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 このエラーは以下のような場合に起きえます:<li>エンティティがドロップされている (スタンプが変更されていて、メモリ空間は解放されている)</li></li>エンティティがドロップされていて、他のプライマリーキー値を持つエンティティで置き換えられている (スタンプは変更されていて、新しいエンティティがメモリ空間を使用している)。 entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 `entity.lock()` を使用するとき、このエラーは `dk reload drop if stamp changed` オプションを使用した場合に返されることがあります。</li><br/>**割り当てられた statusText**: "Entity does not exist anymore" (エンティティはもう存在しません) |
| `dk status locked`                        | 3 | エンティティはペシミスティック・ロックでロックされています。<br/>**割り当てられた statusText**: "既にロックされています"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `dk status serious error`                 | 4 | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。<br/>**割り当てられた statusText**: "その他のエラー"                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `dk status stamp has changed`             | 2 | エンティティの内部的なスタンプ値がデータ内に保存されているエンティティのものと合致しません (オプティミスティック・ロック)。<li>`entity.save()` の場合: `dk auto merge` オプションが使用されていない場合に限りエラー</li><li>`entity.drop()` の場合: `dk force drop if stamp changed` オプションが使用されていない場合に限りエラー</li><li>`entity.lock()` の場合: `dk reload if stamp changed` オプションが使用されていない場合に限りエラー</li><br/>**割り当てられた statusText**: "Stamp has changed"                                                                                                                                                    |

#### 例題 1

エラーのある例題:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(716)
 $status:=$employee.lock()
 Case of
    :($status.success)
       ALERT($employee.firstName+" "+$employee.lastName+"をロックしました")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### 例題 2

`dk reload if stamp changed` オプションを使用する例:

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object
 $employee:=ds.Employee.get(717)
 $status:=$employee.lock(dk reload if stamp changed)
 Case of
    :($status.success)
       ALERT($employee.firstName+" "+$employee.lastName+" をロックしました")
    :($status.status=dk status entity does not exist anymore)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.next().Desc -->

## .next()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.next().Syntax -->**.next()** : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.next().Params -->

| 引数  | 型                         |                             | 説明                                                            |
| --- | ------------------------- | :-------------------------: | ------------------------------------------------------------- |
| 戻り値 | 4D.Entity | <- | エンティティセレクション内の次のエンティティへの参照 (見つからなければ null) |

<!-- END REF -->

#### 説明

`.next()` 関数は、<!-- REF #EntityClass.next().Summary -->エンティティが所属するエンティティセレクションの次のエンティティへの参照を返します<!-- END REF -->。

対象エンティティが所属する既存エンティティセレクションが存在しない場合 (つまり [entity.getSelection()](#getselection) が Null を返す場合)、関数は Null値を返します。

エンティティセレクション内に有効な次のエンティティが存在しない場合 (セレクションの最終エンティティの場合)、関数は Null を返します。 次のエンティティがドロップされていた場合、関数はその次の有効なエンティティを返します (セレクションの最後に辿り着くと Null を返します)。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $nextEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // このエンティティセレクションは 3件のエンティティを持ちます
 $employee:=$employees[0]
 $nextEmployee:=$employee.next() // $nextEmployee は、$employees エンティティセレクションの 2番目のエンティティです

```

<!-- END REF -->

<!-- REF EntityClass.previous().Desc -->

## .previous()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.previous().Syntax -->**.previous()**  : 4D.Entity<!-- END REF -->

<!-- REF #EntityClass.previous().Params -->

| 引数  | 型                         |                             | 説明                                                            |
| --- | ------------------------- | :-------------------------: | ------------------------------------------------------------- |
| 戻り値 | 4D.Entity | <- | エンティティセレクション内の前のエンティティへの参照 (見つからなければ null) |

<!-- END REF -->

#### 説明

`.previous()` 関数は、<!-- REF #EntityClass.previous().Summary -->エンティティが所属するエンティティセレクションの前のエンティティへの参照を返します<!-- END REF -->。

対象エンティティが所属する既存エンティティセレクションが存在しない場合 (つまり [entity.getSelection()](#getselection) が Null を返す場合)、関数は Null値を返します。

エンティティセレクション内に有効な前のエンティティが存在しない場合 (セレクションの先頭エンティティの場合)、関数は Null を返します。 前のエンティティがドロップされていた場合、関数はその前の有効なエンティティを返します (セレクションの先頭に辿り着くと Null を返します)。

#### 例題

```4d
 var $employees : cs.EmployeeSelection
 var $employee; $previousEmployee : cs.EmployeeEntity
 $employees:=ds.Employee.query("lastName = :1";"H@") // このエンティティセレクションは 3件のエンティティを持ちます
 $employee:=$employees[1]
 $previousEmployee:=$employee.previous() // $previousEmployee は、$employees エンティティセレクションの先頭エンティティです
```

<!-- END REF -->

<!-- REF EntityClass.reload().Desc -->

## .reload()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.reload().Syntax -->**.reload()** : Object<!-- END REF -->

<!-- REF #EntityClass.reload().Params -->

| 引数  | 型      |                             | 説明          |
| --- | ------ | :-------------------------: | ----------- |
| 戻り値 | Object | <- | ステータスオブジェクト |

<!-- END REF -->

#### 説明

`.reload()` 関数は、データストアのデータクラスに対応するテーブルに保存されている情報に応じて、<!-- REF #EntityClass.reload().Summary -->エンティティの中身をメモリ内にリロードします<!-- END REF -->。 エンティティが同じプライマリーキーで存在している場合にのみリロードは実行されます。

**戻り値**

`.reload( )` によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ                             | 型       | 説明                                                                        |
| --------------------------------- | ------- | ------------------------------------------------------------------------- |
| success                           | boolean | リロードが成功した場合には true、それ以外は false。<br />***エラーの場合にのみ利用可能***: |
| status(\*)     | number  | エラーコード、以下参照                                                               |
| statusText(\*) | text    | エラーの詳細、以下参照                                                               |

(\*) エラー時には *Result* オブジェクトの *status* あるいは *statusText* プロパティに以下のいずれかの値が返されます:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 このエラーは以下のような場合に起きえます:<br/><li>エンティティがドロップされている (スタンプが変更されていて、メモリ空間は解放されている)</li><li>エンティティがドロップされていて、他のプライマリーキー値を持つエンティティで置き換えられている (スタンプは変更されていて、新しいエンティティがメモリ空間を使用している)。 entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 `entity.lock()` を使用するとき、このエラーは `dk reload drop if stamp changed` オプションを使用した場合に返されることがあります。</li><br/>**割り当てられた statusText**: "Entity does not exist anymore" (エンティティはもう存在しません) |
| `dk status serious error`                 | 4 | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。<br/>***割り当てられた statusText***: "その他のエラー"                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### 例題

```4d
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 var $result : Object

 $employees:=ds.Employee.query("lastName=:1";"Hollis")
 $employee:=$employees[0]
 $employee.firstName:="Mary"
 $result:=$employee.reload()
 Case of
    :($result.success)
       ALERT("エンティティはリロードされました")
    :($result.status=dk status entity does not exist anymore)
       ALERT("エンティティはドロップされています")
 End case
```

<!-- END REF -->

<!-- REF EntityClass.save().Desc -->

## .save()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.save().Syntax -->**.save**( { *mode* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.save().Params -->

| 引数   | 型       |                             | 説明                                               |
| ---- | ------- | :-------------------------: | ------------------------------------------------ |
| mode | Integer |              ->             | `dk auto merge`: 自動マージモードを有効化します |
| 戻り値  | Object  | <- | 保存の結果                                            |

<!-- END REF -->

#### 説明

`.save()` 関数は、データクラスに対応するテーブル内に、<!-- REF #EntityClass.save().Summary -->エンティティの変更内容を保存します<!-- END REF -->。 エンティティを作成したあと、あるいはエンティティに対して保存したい変更をおこなったあとにはこの関数を呼び出す必要があります。

保存処理は、少なくとも一つのエンティティ属性が "touched" である (更新されている) 場合にのみ実行されます ([`.touched()`](#touched) および [`.touchedAttributes()`](#touchedattributes) 関数参照)。 そうでない場合、関数は何もしません (トリガーは呼び出されません)。

マルチユーザー、あるいはマルチプロセスアプリケーションにおいて、`.save()` 関数は ["オプティミスティック・ロック"](ORDA/entities.md#entity-locking) 機構のもとで実行されます。これはレコードが保存されるたびに内部的なロックスタンプが自動的に増分していくという機構です。

*mode* 引数を渡さなかった場合のデフォルトでは、いずれの属性に関わらず同エンティティが他のプロセスまたはユーザーによって変更されていた場合にエラーを返します (以下参照)。

*mode* に `dk auto merge` オプションを渡すと自動マージモードが有効化され、別のプロセス/ユーザーが同エンティティに対して同時に変更をおこなっていても、異なる属性に対する変更であればエラーは生成されません。 エンティティに保存されるデータは、別々の変更処理の組み合わせ ("マージ (併合)") になります (同じ属性に対して変更がおこなわれた場合には、自動マージモードであっても保存は失敗し、エラーが返されます)。

> ピクチャー・オブジェクト・テキスト型属性で、レコードの外にデータを保存している場合には、自動マージモードは利用できません。 これらの属性に同時の変更があった場合には `dk status stamp has changed` エラーになります。

**戻り値**

`.save()` によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ        |                                     | 型                   | 説明                                                                                                          |
| ------------ | ----------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| success      |                                     | boolean             | 保存に成功した場合には true、それ以外は false                                                                                |
|              |                                     |                     | ***`dk auto merge` オプションが使用されていた場合にのみ利用可能***:                                               |
| autoMerged   |                                     | boolean             | 自動マージが実行された場合には true、それ以外は false                                                                            |
|              |                                     |                     | ***エラーの場合にのみ利用可能***:                                                                        |
| status       |                                     | number              | エラーコード、[以下参照](#status-と-statustext)                                                                         |
| statusText   |                                     | text                | エラーの詳細、[以下参照](#status-と-statustext)                                                                         |
|              |                                     |                     | ***ペシミスティック・ロックエラーの場合にのみ利用可能***:                                                            |
| lockKindText |                                     | text                | "Locked by record"                                                                                          |
| lockInfo     |                                     | object              | ロック元についての情報                                                                                                 |
|              | task_id        | number              | プロセスID                                                                                                      |
|              | user_name      | text                | マシン上でのセッションユーザー名                                                                                            |
|              | user4d_alias   | text                | `SET USER ALIAS` で設定されていればユーザーエイリアス。それ以外は 4Dディレクトリのユーザー名                                                    |
|              | host_name      | text                | マシン名                                                                                                        |
|              | task_name      | text                | プロセス名                                                                                                       |
|              | client_version | text                |                                                                                                             |
|              |                                     |                     | ***深刻なエラーの場合にのみ利用可能*** (深刻なエラーとは、プライマリーキーを重複させようとした、ディスクがいっぱいであった、などです): |
| errors       |                                     | Object の Collection |                                                                                                             |
|              | message                             | text                | エラーメッセージ                                                                                                    |
|              | componentSignature                  | text                | 内部コンポーネント署名 (例 "dmbg" はデータベースコンポーネントを表します)                                               |
|              | errCode                             | number              | エラーコード                                                                                                      |

##### status と statusText

エラー時には Result オブジェクトの `status` あるいは `statusText` プロパティに以下のいずれかの値が返されます:

| 定数                                        | 値 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------- | - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dk status automerge failed`              | 6 | (`dk auto merge` オプションが使用されたときのみ) エンティティを保存するときに自動マージオプションが失敗しました。<br />&#xA;**割り当てられた statusText**: "自動マージ失敗"                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `dk status entity does not exist anymore` | 5 | エンティティはもうデータ内に存在していません。 このエラーは以下のような場合に起きえます:<br/><li>エンティティがドロップされている (スタンプが変更されていて、メモリ空間は解放されている)</li><li>エンティティがドロップされていて、他のプライマリーキー値を持つエンティティで置き換えられている (スタンプは変更されていて、新しいエンティティがメモリ空間を使用している)。 entity.drop( ) を使用するとき、このエラーは dk force drop if stamp changed オプションを使用した場合に返されることがあります。 `entity.lock()` を使用するとき、このエラーは `dk reload drop if stamp changed` オプションを使用した場合に返されることがあります。</li><br/>**割り当てられた statusText**: "Entity does not exist anymore" (エンティティはもう存在しません) |
| `dk status locked`                        | 3 | エンティティはペシミスティック・ロックでロックされています。<br/>**割り当てられた statusText**: "既にロックされています"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `dk status serious error`                 | 4 | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。<br/>**割り当てられた statusText**: "その他のエラー"                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `dk status stamp has changed`             | 2 | エンティティの内部的なスタンプ値がデータ内に保存されているエンティティのものと合致しません (オプティミスティック・ロック)。<br/><li>`entity.save()` の場合: `dk auto merge` オプションが使用されていない場合に限りエラー</li><li>`entity.drop()` の場合: `dk force drop if stamp changed` オプションが使用されていない場合に限りエラー</li><li>`entity.lock()` の場合: `dk reload if stamp changed` オプションが使用されていない場合に限りエラー</li><br/>**割り当てられた statusText**: "Stamp has changed"                                                                                                                                                   |
| `dk status wrong permission`              | 1 | 現在の権限では、エンティティを保存することはできません。 **割り当てられた statusText**: "Permission Error" (権限エラー)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### 例題 1

新しいエンティティを作成します:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 $employee:=ds.Employee.new()
 $employee.firstName:="Mary"
 $employee.lastName:="Smith"
 $status:=$employee.save()
 If($status.success)
    ALERT("Employee が作成されました")
 End if
```

#### 例題 2

`dk auto merge` オプションを使わずにエンティティを更新します:

```4d
 var $status : Object
 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection
 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save()
 Case of
    :($status.success)
       ALERT("Employee が更新されました")
    :($status.status=dk status stamp has changed)
       ALERT($status.statusText)
 End case
```

#### 例題 3

`dk auto merge` オプションを使ってエンティティを更新します:

```4d
 var $status : Object

 var $employee : cs.EmployeeEntity
 var $employees : cs.EmployeeSelection

 $employees:=ds.Employee.query("lastName=:1";"Smith")
 $employee:=$employees.first()
 $employee.lastName:="Mac Arthur"
 $status:=$employee.save(dk auto merge)
 Case of
    :($status.success)
       ALERT("Employee を更新しました")
    :($status.status=dk status automerge failed)
       ALERT($status.statusText)
 End case
```

<!-- END REF -->

<!-- REF EntityClass.toObject().Desc -->

## .toObject()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.toObject().Syntax -->**.toObject**() : Object<br/>**.toObject**( *filterString* : Text { ; *options* : Integer}  ) : Object<br/>**.toObject**( *filterCol* : Collection { ; *options* : Integer } ) : Object<!-- END REF -->

<!-- REF #EntityClass.toObject().Params -->

| 引数           | 型          |                             | 説明                                                                                                                                                                               |
| ------------ | ---------- | :-------------------------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| filterString | Text       |              ->             | 取得する属性 (カンマ区切り)                                                                                                                                               |
| filterCol    | Collection |              ->             | 取得する属性のコレクション                                                                                                                                                                    |
| options      | Integer    |              ->             | `dk with primary key`: \_\_KEY プロパティを追加;<br/>`dk with stamp`: \_STAMP プロパティを追加 |
| 戻り値          | Object     | <- | エンティティを元にビルドされたオブジェクト                                                                                                                                                            |

<!-- END REF -->

#### 説明

`.toObject()` 関数は、<!-- REF #EntityClass.toObject().Summary -->エンティティからビルトされたオブジェクトを返します<!-- END REF -->。 オブジェクト内部のプロパティ名はエンティティの属性名と合致します。

*filterString* 引数が空の文字列、あるいは "\*" の場合、以下のいずれかが返されます:

- すべてのストレージエンティティ属性
- リレートエンティティ型の属性 ([kind](DataClassClass.md#attributename) が `relatedEntity`) : リレートエンティティと同じ名前 (N対1リレーション名) のプロパティ。 属性は単純な形式で取得されます。
- リレートエンティティズ型の属性 ([kind](DataClassClass.md#attributename) が `relatedEntities`): 属性は返されません。

最初の引数として、取得するエンティティ属性を渡します。 以下のものを渡すことができます:

- *filterString*: プロパティパスをカンマで区切った文字列: "propertyPath1, propertyPath2, ..." または
- *filterCol*: 文字列のコレクション: \["propertyPath1","propertyPath2";...]

filter 引数がリレートエンティティ型の属性を指定する場合 ([kind](DataClassClass.md#attributename) が relatedEntity):

- propertyPath = "relatedEntity" -> 単純な形式で取得されます: \_\_KEY プロパティ(プライマリーキー) を持つオブジェクト
- propertyPath = "relatedEntity.\*" -> 全プロパティが取得されます
- propertyPath = "relatedEntity.propertyName1; relatedEntity.propertyName2; ..." -> 指定されたプロパティのみが取得されます

filter 引数がリレートエンティティ型の属性を指定する場合 ([kind](DataClassClass.md#attributename) が relatedEntities):

- propertyPath = "relatedEntities.\*" -> 全プロパティが取得されます
- propertyPath = "relatedEntities.propertyName1; relatedEntities.propertyName2; ..." -> 指定されたプロパティのみが取得されます

*options* に `dk with primary key` または `dk with stamp` セレクターを渡すことで、エンティティのプライマリーキー/スタンプを、取得するオブジェクトに追加するかどうかを指定できます。

:::caution 警告

リレーションの 1側の属性に主キー以外の属性を使用した場合、その属性の値が "__KEY" プロパティに書き込まれます。 `.toObject()` と `.fromObject()` の関数を使用する場合はとくに、リレーションの 1側の属性に主キーを使用することが推奨されます。

:::

#### 例題 1

このセクションの例題では、以下のストラクチャーを使います:

![](../assets/en/API/dataclassAttribute4.png)

filter 引数を渡さない場合:

```4d
employeeObject:=employeeSelected.toObject()
```

戻り値:

```4d
{
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
    "birthDate": "1963-02-01T00:00:00.000Z",
    "woman": false,
    "managerID": 412,
    "employerID": 20,
    "photo": "[object Picture]",
    "extra": null,
    "employer": { // 単純な形式で取得されたリレートエンティティ
        "__KEY": 20
    },
    "manager": {
        "__KEY": 412
    }
}
```

#### 例題 2

プライマリーキーとスタンプを取得します:

```4d
employeeObject:=employeeSelected.toObject("";dk with primary key+dk with stamp)
```

戻り値:

```4d
{
    "__KEY": 413,
   "__STAMP": 1,
    "ID": 413,
    "firstName": "Greg",
    "lastName": "Wahl",
    "salary": 0,
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
}
```

#### 例題 3

リレートエンティティズのプロパティをすべて展開します:

```4d
employeeObject:=employeeSelected.toObject("directReports.*")
```

```4d
{
    "directReports": [
        {
            "ID": 418,
            "firstName": "Lorena",
            "lastName": "Boothe",
            "salary": 44800,
            "birthDate": "1970-10-02T00:00:00.000Z",
            "woman": true,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 419,
            "firstName": "Drew",
            "lastName": "Caudill",
            "salary": 41000,
            "birthDate": "2030-01-12T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        },
        {
            "ID": 420,
            "firstName": "Nathan",
            "lastName": "Gomes",
            "salary": 46300,
            "birthDate": "2010-05-29T00:00:00.000Z",
            "woman": false,
            "managerID": 413,
            "employerID": 20,
            "photo": "[object Picture]",
            "extra": null,
            "employer": {
                "__KEY": 20
            },
            "manager": {
                "__KEY": 413
            }
        }
    ]
}
```

#### 例題 4

リレートエンティティズの一部のプロパティを取得します:

```4d
 employeeObject:=employeeSelected.toObject("firstName, directReports.lastName")
```

戻り値:

```4d
{
    "firstName": "Greg",
    "directReports": [
        {
            "lastName": "Boothe"
        },
        {
            "lastName": "Caudill"
        },
        {
            "lastName": "Gomes"
        }
    ]
}
```

#### 例題 5

リレートエンティティを単純な形式で取得します:

```4d
 $coll:=New collection("firstName";"employer")
 employeeObject:=employeeSelected.toObject($coll)
```

戻り値:

```4d
{
    "firstName": "Greg",
    "employer": {
        "__KEY": 20
    }
}
```

#### 例題 6

リレートエンティティの全プロパティを取得します:

```4d
 employeeObject:=employeeSelected.toObject("employer.*")
```

戻り値:

```4d
{
    "employer": {
        "ID": 20,
        "name": "India Astral Secretary",
        "creationDate": "1984-08-25T00:00:00.000Z",
        "revenues": 12000000,
        "extra": null
    }
}
```

#### 例題 7

リレートエンティティの一部のプロパティを取得します:

```4d
 $col:=New collection
 $col.push("employer.name")
 $col.push("employer.revenues")
 employeeObject:=employeeSelected.toObject($col)
```

戻り値:

```4d
{
    "employer": {
        "name": "India Astral Secretary",
        "revenues": 12000000
    }
}
```

<!-- END REF -->

<!-- REF EntityClass.touched().Desc -->

## .touched( )

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.touched().Syntax -->**.touched()** : Boolean<!-- END REF -->

<!-- REF #EntityClass.touched().Params -->

| 引数  | 型       |                             | 説明                                                   |
| --- | ------- | :-------------------------: | ---------------------------------------------------- |
| 戻り値 | Boolean | <- | 少なくとも一つのエンティティ属性が編集されていて未保存の場合に true、それ以外の場合には false |

<!-- END REF -->

#### 説明

`.touched()` 関数は、<!-- REF #EntityClass.touched().Summary -->
エンティティがメモリに読み込まれてから、あるいは保存されてから、エンティティ属性が変更されたかどうかをテストします<!-- END REF -->。

属性が更新あるいは計算されていた場合、関数は true を返し、それ以外は false を返します。 この関数を使用することで、エンティティを保存する必要があるかどうかを確認することができます。

この関数は、([`.new( )`](DataClassClass.md#new) で作成された) 新規エンティティに対しては常に false を返します。 ただし、エンティティの属性を計算する関数を使用した場合には、`.touched()` 関数は true を返します。 たとえば、プライマリーキーを計算するために [`.getKey()`](#getkey) を呼び出した場合、`.touched()` メソッドは true を返します。

#### 例題

エンティティを保存する必要があるかどうかをチェックします:

```4d
 var $emp : cs.EmployeeEntity
 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName // 同じ値で更新されても、属性は変更されたと判定されます

 If($emp.touched()) // 一つ以上の属性が変更されていた場合
    $emp.save()
 End if // そうでない場合はエンティティを保存する必要はありません
```

<!-- END REF -->

<!-- REF EntityClass.touchedAttributes().Desc -->

## .touchedAttributes( )

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.touchedAttributes().Syntax -->**.touchedAttributes()** : Collection<!-- END REF -->

<!-- REF #EntityClass.touchedAttributes().Params -->

| 引数  | 型          |                             | 説明                      |
| --- | ---------- | :-------------------------: | ----------------------- |
| 戻り値 | Collection | <- | 変更された属性の名前、あるいは空のコレクション |

<!-- END REF -->

#### 説明

`.touchedAttributes()` 関数は、<!-- REF #EntityClass.touchedAttributes().Summary -->メモリに読み込み後に変更されたエンティティの属性名を返します<!-- END REF -->。

この関数は、種類 ([kind](DataClassClass.md#attributename)) が `storage` あるいは `relatedEntity` である属性に適用されます。

リレート先のエンティティそのものが更新されていた場合 (外部キーの変更)、リレートエンティティの名称とそのプライマリーキー名が返されます。

エンティティ属性がいずれも更新されていなかった場合、関数は空のコレクションを返します。

#### 例題 1

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity

 $touchedAttributes:=New collection
 $emp:=ds.Employee.get(725)
 $emp.firstName:=$emp.firstName // 同じで値で更新されていても、属性は変更されたと判定されます
 $emp.lastName:="Martin"
 $touchedAttributes:=$emp.touchedAttributes()
  //$touchedAttributes: ["firstName","lastName"]
```

#### 例題 2

```4d
 var $touchedAttributes : Collection
 var $emp : cs.EmployeeEntity
 var $company : cs.CompanyEntity

 $touchedAttributes:=New collection

 $emp:=ds.Employee.get(672)
 $emp.firstName:=$emp.firstName
 $emp.lastName:="Martin"

 $company:=ds.Company.get(121)
 $emp.employer:=$company

 $touchedAttributes:=$emp.touchedAttributes()

  // $touchedAttributes コレクション: ["firstName","lastName","employer","employerID"]
```

この場合において:

- firstName および lastName はストレージ (`storage`) 型です
- employer はリレートエンティティ (`relatedEntity`) 型です
- employerID は、employer リレートエンティティの外部キーです

<!-- END REF -->

<!-- REF EntityClass.unlock().Desc -->

## .unlock()

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 17   | 追加 |

</details>

<!-- REF #EntityClass.unlock().Syntax -->**.unlock()** : Object<!-- END REF -->

<!-- REF #EntityClass.unlock().Params -->

| 引数  | 型      |                             | 説明          |
| --- | ------ | :-------------------------: | ----------- |
| 戻り値 | Object | <- | ステータスオブジェクト |

<!-- END REF -->

#### 説明

`.unlock()` 関数は、データストアおよび、データクラスに対応するテーブル内の、<!-- REF #EntityClass.unlock().Summary -->対象エンティティが参照するレコードのペシミスティック・ロックを解除します<!-- END REF -->。

> 詳細については [エンティティロッキング](ORDA/entities.md#エンティティロッキング) を参照ください。

ロックしているプロセス内のどのエンティティからもレコードが参照されなくなった場合、自動的にレコードロックが解除されます (たとえば、エンティティのローカル参照に対してのみロックがかかっていた場合、プロセスが終了すればエンティティおよびレコードのロックは解除されます)。

> レコードがロックされている場合、ロックしているプロセスから、ロックされたエンティティ参照に対してロックを解除する必要があります: 例:

```4d
 $e1:=ds.Emp.all()[0]
 $e2:=ds.Emp.all()[0]
 $res:=$e1.lock() //$res.success=true
 $res:=$e2.unlock() //$res.success=false
 $res:=$e1.unlock() //$res.success=true
```

**戻り値**

`.unlock()` によって返されるオブジェクトには以下のプロパティが格納されます:

| プロパティ   | 型       | 説明                                                                                                                                     |
| ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| success | Boolean | ロック解除が成功した場合には true、それ以外は false ドロップされたエンティティや、ロックされてないレコード、あるいは他のプロセスや他のエンティティによってロックされたレコードに対してロック解除を実行した場合、success には false が返されます。 |

#### 例題

```4d
 var $employee : cs.EmployeeEntity
 var $status : Object

 $employee:=ds.Employee.get(725)
 $status:=$employee.lock()
 ... // 処理
 $status:=$employee.unlock()
 If($status.success)
    ALERT("エンティティのロックは解除されました。 ")
 End if
```

<!-- END REF -->
