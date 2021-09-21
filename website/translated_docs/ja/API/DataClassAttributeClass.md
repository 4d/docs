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

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.autoFilled** : Boolean](#autofilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性値が 4Dによって自動生成される場合に true|
| [**.fieldNumber** : Integer](#fieldnumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性の内部的な 4Dフィールド番号 |
| [**.fieldType** : Integer](#fieldtype)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性の 4Dデータベースタイプ |
| [**.indexed** : Boolean](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性に対して B-tree もしくは クラスターB-Tree インデックスが設定されている場合に true |
| [**.inverseName** : Text](#inversename)<p>&nbsp;&nbsp;&nbsp;&nbsp;リレーション先の属性名 |
| [**.keyWordIndexed** : Boolean](#keywordindexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性にキーワードインデックスが存在すれば **true** |
| [**.kind** : Text](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性の種類 |
| [**.mandatory** : Boolean](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性において Null値の入力が拒否されている場合に true |
| [**.name** : Text](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;`dataClassAttribute` オブジェクトの名称 |
| [**.relatedDataClass** : Text](#relateddataclass)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性にリレートされているデータクラスの名称 |
| [**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性の概念的な値タイプ |
| [**.unique** : Boolean](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;属性値が重複不可の場合に true |



## .autoFilled

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.autoFilled** : Boolean

#### 説明

`.autoFilled` プロパティは、 属性値が 4Dによって自動生成される場合に trueです。 このプロパティは以下の 4Dフィールドプロパティに対応しています:

*   数値型フィールドの "自動インクリメント"
*   UUID (文字型)フィールドの "自動UUID"

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.autoFilled` が返されない場合でも **Bool** (dataClassAttribute.autoFilled) と書くことで、有効な値 (false) を受け取ることができます。






## .fieldNumber

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.fieldNumber** : Integer

#### 説明

`.fieldNumber` プロパティは、 属性の内部的な 4Dフィールド番号を格納します。

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.fieldNumber` が返されない場合でも **Num** (dataClassAttribute.fieldNumber) と書くことで、有効な値 (0) を受け取ることができます。






## .fieldType

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.fieldType** : Integer

#### 説明

`.fieldType` プロパティは、 属性の 4Dデータベースタイプを格納します。 これは属性の種類 (kind) によります ([`.kind`](#kind) 参照)。

**とりうる値:**

| dataClassAttribute.kind | fieldType          | 説明                                                                            |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------- |
| storage                 | 対応する 4Dフィールド型      | [`Value type`](https://doc.4d.com/4dv19/help/command/en/page1509.html) コマンド参照 |
| relatedEntity           | 38 (Is object)     |                                                                               |
| relatedEntities         | 42 (Is collection) |                                                                               |


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

`.indexed` プロパティは、 属性に対して B-tree もしくは クラスターB-Tree インデックスが設定されている場合に trueです。

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

`.inverseName` プロパティは、 リレーション先の属性名を格納します。

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

`.keyWordIndexed` プロパティは、 属性にキーワードインデックスが存在すれば **true**です。

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.keyWordIndexed` が返されない場合でも **Bool** (dataClassAttribute.keyWordIndexed) と書くことで、有効な値 (false) を受け取ることができます。




## .kind

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.kind** : Text

#### 説明

`.kind` プロパティは、 属性の種類を格納します。 以下のいずれかの値が返されます:

*   "storage": ストレージ (あるいはスカラー) 属性。つまり、属性は値を保存しており、他の属性への参照ではありません。
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

`.mandatory` プロパティは、 属性において Null値の入力が拒否されている場合に trueです。

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

`.name` プロパティは、 `dataClassAttribute` オブジェクトの名称を文字列として返します。

#### 例題

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```




## .relatedDataClass

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>


**.relatedDataClass** : Text

#### 説明
> このプロパティは、[`.kind`](#kind) プロパティ値が "relatedEntity" または "relatedEntities" である属性においてのみ利用可能です。

`.relatedDataClass` プロパティ、 属性にリレートされているデータクラスの名称を返します。

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
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


**.type** : Text

#### 説明

`.type` プロパティは、 属性の概念的な値タイプが格納されており、汎用的なプログラミングに有用です。

この概念的な値タイプは属性の種類 ([`.kind`](#kind)) によります。

**とりうる値:**

| dataClassAttribute.kind | type                                                              | 説明                                                                                                                                                                    |
| ----------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", または "string" | 数値型の場合 "number" が返されます (期間を含む)。 UUID、文字およびテキスト型フィールドの場合 "string" が返されます。 "blob" 属性は [BLOB オブジェクト](Concepts/dt_blob.md#blob-の種類) で、[Blob クラス](BlobClass.md) によって扱われます。 |
| relatedEntity           | リレートされたデータクラス名                                                    | 例: "Companies"                                                                                                                                                        |
| relatedEntities         | リレートされたデータクラス名 + "Selection"                                      | 例: "EmployeeSelection"                                                                                                                                                |


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

`.unique` プロパティは、 属性値が重複不可の場合に trueです。 このプロパティは、4Dフィールドプロパティの "重複不可" に対応しています.

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.unique` が返されない場合でも **Bool** (dataClassAttribute.unique) と書くことで、有効な値 (false) を受け取ることができます。


<style> h2 { background: #d9ebff;}</style>
