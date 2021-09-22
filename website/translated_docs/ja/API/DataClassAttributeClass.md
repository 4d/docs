---
id: DataClassAttributeClass
title: DataClassAttribute
---

データクラス属性は、それぞれのクラスのプロパティとして利用可能です。 たとえば:

```4d
 nameAttribute:=ds.Company.name // クラス属性への参照
 revenuesAttribute:=ds.Company["revenues"] // 別の書き方
```

このコードは、*nameAttribute* および *revenuesAttribute* 変数に、`Company` クラスの name および revenues 属性の参照をそれぞれ代入します。 このシンタックスは属性内に保管されている値を返すのではありません。その代わりに、属性自身への参照を返します。 値を管理するには、[**エンティティ**](EntityClass.md) を使用する必要があります。

`DataClassAttribute` オブジェクトが持つプロパティを読み取ることによって、データクラス属性に関する情報が取得できます。

> データクラス属性オブジェクトを編集することは可能ですが、元となるデータベースストラクチャーは変更されません。

### 概要

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.autoFilled** : Boolean](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value is automatically filled by 4D          |
| [**.exposed** : Boolean](#exposed)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the attribute is exposed in REST                                          |
| [**.fieldNumber** : Integer](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the internal 4D field number of the attribute                    |
| [**.fieldType** : Integer](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the 4D database type of the attribute                                |
| [**.indexed** : Boolean](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a B-tree or a Cluster B-tree index on the attribute |
| [**.inverseName** : Text](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the attribute which is at the other side of the relation |
| [**.keyWordIndexed** : Boolean](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains **True** if there is a keyword index on the attribute      |
| [**.kind** : Text](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the category of the attribute                                                      |
| [**.mandatory** : Boolean](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if Null value input is rejected for the attribute               |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the `dataClassAttribute` object as string                              |
| [**.readOnly** : Boolean](#readonly)<p>&nbsp;&nbsp;&nbsp;&nbsp;true if the attribute is read-only                                              |
| [**.relatedDataClass** : Text](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the name of the dataclass related to the attribute         |
| [**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the conceptual value type of the attribute                                        |
| [**.unique** : Boolean](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains True if the attribute value must be unique                                 |



## .autoFilled

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.autoFilled** : Boolean

#### 説明

The `.autoFilled` property contains True if the attribute value is automatically filled by 4D. このプロパティは以下の 4Dフィールドプロパティに対応しています:

*   数値型フィールドの "自動インクリメント"
*   UUID (文字型)フィールドの "自動UUID"

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.autoFilled` が返されない場合でも **Bool** (dataClassAttribute.autoFilled) と書くことで、有効な値 (false) を受け取ることができます。



## .exposed

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R3 | 追加 |
</details>


**.exposed** : Boolean

#### 説明

The `.exposed` property is true if the attribute is exposed in REST.





## .fieldNumber

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.fieldNumber** : Integer

#### 説明

The `.fieldNumber` property contains the internal 4D field number of the attribute.

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.fieldNumber` が返されない場合でも **Num** (dataClassAttribute.fieldNumber) と書くことで、有効な値 (0) を受け取ることができます。






## .fieldType

<details><summary>履歴</summary>
| バージョン  | 内容                             |
| ------ | ------------------------------ |
| v19 R3 | Support of computed attributes |
</details>


**.fieldType** : Integer

#### 説明

The `.fieldType` property contains the 4D database type of the attribute. これは属性の種類 (kind) によります ([`.kind`](#kind) 参照)。

**とりうる値:**

| dataClassAttribute.kind | fieldType                                                                                                          |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------ |
| storage                 | Corresponding 4D field type, see [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)            |
| relatedEntity           | 38 (`Is object`)                                                                                                   |
| relatedEntities         | 42 (`Is collection`)                                                                                               |
| calculated              | <li>scalar: corresponding 4D field type, see [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html)</li><li>entity: 38 (`Is object`)</li><li>entity selection: 42 (`Is collection)` |



#### 参照

[`.type`](#type)

## .indexed

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.indexed** : Boolean

#### 説明

The `.indexed` property contains **True** if there is a B-tree or a Cluster B-tree index on the attribute.

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.indexed` が返されない場合でも **Bool** (dataClassAttribute.indexed) と書くことで、有効な値 (false) を受け取ることができます。





## .inverseName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.inverseName** : Text

#### 説明

The `.inverseName` property returns the name of the attribute which is at the other side of the relation.

`.kind` が "storage" の場合には、このプロパティは返されません。 .kind は "relatedEntity" または "relatedEntities" でなくてはなりません。
> 汎用的なプログラミングのために、`.inverseName` が返されない場合でも **String** (dataClassAttribute.inverseName) と書くことで、有効な値 ("") を受け取ることができます。





## .keyWordIndexed

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.keyWordIndexed** : Boolean

#### 説明

The `.keyWordIndexed` property contains **True** if there is a keyword index on the attribute.

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.keyWordIndexed` が返されない場合でも **Bool** (dataClassAttribute.keyWordIndexed) と書くことで、有効な値 (false) を受け取ることができます。




## .kind

<details><summary>履歴</summary>
| バージョン  | 内容                 |
| ------ | ------------------ |
| v19 R3 | Added "calculated" |
</details>


**.kind** : Text

#### 説明

The `.kind` property returns the category of the attribute. 以下のいずれかの値が返されます:

*   "storage": ストレージ (あるいはスカラー) 属性。つまり、属性は値を保存しており、他の属性への参照ではありません。
*   "calculated": computed attribute, i.e. defined through a [`get` function](ORDA/ordaClasses.md#function-get-attributename).
*   "relatedEntity": N対1 リレーション属性 (エンティティへの参照)
*   "relatedEntities": 1対N リレーション属性 (エンティティセレクションへの参照)


#### 例題

以下のテーブルとリレーションを前提とします:

![](/assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds.Employee.lastname.kind //$attKind="storage"
 $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"
```






## .mandatory

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.mandatory** : Boolean

#### 説明

The `.mandatory` property contains True if Null value input is rejected for the attribute.

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.mandatory` が返されない場合でも **Bool** (dataClassAttribute.mandatory) と書くことで、有効な値 (false) を受け取ることができます。
> **警告**: このプロパティは、4Dデータベースレベルの "Null値の入力を拒否" フィールドプロパティと対応しています。 フィールドのデータ入力制御オプションである既存の "必須入力" プロパティとは無関係です。





## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.name** : Text

#### 説明

The `.name` property returns the name of the `dataClassAttribute` object as string.

#### 例題

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```




## .readOnly

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R3 | 追加 |


</details>


**.readOnly** : Boolean

#### 説明

The `.readOnly` property is true if the attribute is read-only.

For example, computed attributes without [`set` function](ORDA/ordaClasses.md#function-set-attributename) are read-only.




## .relatedDataClass

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |


</details>


**.relatedDataClass** : Text

#### 説明
> このプロパティは、[`.kind`](#kind) プロパティ値が "relatedEntity" または "relatedEntities" である属性においてのみ利用可能です。

The `.relatedDataClass` property returns the name of the dataclass related to the attribute.

#### 例題

以下のテーブルとリレーションを前提とします:


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```




## .type

<details><summary>履歴</summary>
| バージョン  | 内容                             |
| ------ | ------------------------------ |
| v19 R3 | Support of computed attributes |
</details>


**.type** : Text

#### 説明

The `.type` property contains the conceptual value type of the attribute, useful for generic programming.

この概念的な値タイプは属性の種類 ([`.kind`](#kind)) によります。

**とりうる値:**

| dataClassAttribute.kind | type                                                                                                                         | 説明                                                                                                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", または "string"                                                            | 数値型の場合 "number" が返されます (期間を含む)。 UUID、文字およびテキスト型フィールドの場合 "string" が返されます。 "blob" 属性は [BLOB オブジェクト](Concepts/dt_blob.md#blob-の種類) で、[Blob クラス](BlobClass.md) によって扱われます。 |
| relatedEntity           | リレートされたデータクラス名                                                                                                               | 例: "Companies"                                                                                                                                                        |
| relatedEntities         | リレートされたデータクラス名 + "Selection"                                                                                                 | 例: "EmployeeSelection"                                                                                                                                                |
| calculated              | <li>storage: type ("blob", "number", etc.)</li><li>entity: dataClass name</li><li>entity selection: dataClass name + "Selection" |                                                                                                                                                                       |


#### 参照

[`.fieldType`](#fieldtype)


## .unique

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.unique** : Boolean

#### 説明

The `.unique` property contains True if the attribute value must be unique. このプロパティは、4Dフィールドプロパティの "重複不可" に対応しています.

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.unique` が返されない場合でも **Bool** (dataClassAttribute.unique) と書くことで、有効な値 (false) を受け取ることができます。


<style> h2 { background: #d9ebff;}</style>
