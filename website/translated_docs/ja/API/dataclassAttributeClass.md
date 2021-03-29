---
id: dataclassAttributeClass
title: DataClassAttribute
---

データクラス属性は、それぞれのクラスのプロパティとして利用可能です。 たとえば:

```4d
 nameAttribute:=ds.Company.name // クラス属性への参照
 revenuesAttribute:=ds.Company["revenues"] // 別の書き方
```

このコードは、*nameAttribute* および *revenuesAttribute* 変数に、`Company` クラスの name および revenues 属性の参照をそれぞれ代入します。 このシンタックスは属性内に保管されている値を返すのではありません。その代わりに、属性自身への参照を返します。 値を管理するには、[**エンティティ**](entityClass.md) を使用する必要があります。

`DataClassAttribute` オブジェクトが持つプロパティを読み取ることによって、データクラス属性に関する情報が取得できます。

> データクラス属性オブジェクトを編集することは可能ですが、元となるデータベースストラクチャーは変更されません。

### 概要

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE dataclassAttributeClass.autoFilled.Syntax -->](#autoFilled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE dataclassAttributeClass.fieldNumber.Syntax -->](#fieldNumber)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.fieldType.Syntax -->](#fieldType)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.indexed.Syntax -->](#indexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.inverseName.Syntax -->](#inverseName)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.keyWordIndexed.Syntax -->](#keyWordIndexed)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.keyWordIndexed.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.kind.Syntax -->](#kind)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.mandatory.Syntax -->](#mandatory)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.name.Syntax -->](#name)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.name.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.relatedDataClass.Syntax -->](#relatedDataClass)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.type.Summary --> |
| [<!-- INCLUDE dataclassAttributeClass.unique.Syntax -->](#unique)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE dataclassAttributeClass.unique.Summary --> |



<!-- REF dataclassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.autoFilled.Syntax -->
**.autoFilled** : Boolean<!-- END REF -->


#### 説明

`.autoFilled` プロパティは、 <!-- REF dataclassAttributeClass.autoFilled.Summary -->属性値が 4Dによって自動生成される場合に true<!-- END REF -->です。 このプロパティは以下の 4Dフィールドプロパティに対応しています:

*   数値型フィールドの "自動インクリメント"
*   UUID (文字型)フィールドの "自動UUID"

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.autoFilled` が返されない場合でも **Bool** (dataClassAttribute.autoFilled) と書くことで、有効な値 (false) を受け取ることができます。 


<!-- END REF -->




<!-- REF dataclassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.fieldNumber.Syntax -->
**.fieldNumber** : Integer<!-- END REF -->


#### 説明

`.fieldNumber` プロパティは、 <!-- REF dataclassAttributeClass.fieldNumber.Summary -->属性の内部的な 4Dフィールド番号<!-- END REF -->を格納します。

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.fieldNumber` が返されない場合でも **Num** (dataClassAttribute.fieldNumber) と書くことで、有効な値 (0) を受け取ることができます。 


<!-- END REF -->




<!-- REF dataclassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.fieldType.Syntax -->
**.fieldType** : Integer<!-- END REF -->


#### 説明

`.fieldType` プロパティは、 <!-- REF dataclassAttributeClass.fieldType.Summary -->属性の 4Dデータベースタイプ<!-- END REF -->を格納します。 これは属性の種類 (kind) によります ([`.kind`](#kind) 参照)。

**とりうる値:**

| dataClassAttribute.kind | fieldType          | 説明                                                                            |
| ----------------------- | ------------------ | ----------------------------------------------------------------------------- |
| storage                 | 対応する 4Dフィールド型      | [`Type`](https://doc.4d.com/4Dv18R6/4D/18-R6/Type.301-5198890.ja.html) コマンド参照 |
| relatedEntity           | 38 (Is object)     |                                                                               |
| relatedEntities         | 42 (Is collection) |                                                                               |

<!-- END REF -->



<!-- REF dataclassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.indexed.Syntax -->
**.indexed** : Boolean<!-- END REF -->


#### 説明

`.indexed` プロパティは、 <!-- REF dataclassAttributeClass.indexed.Summary -->属性に対して B-tree もしくは クラスターB-Tree インデックスが設定されている場合に true<!-- END REF -->です。

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.indexed` が返されない場合でも **Bool** (dataClassAttribute.indexed) と書くことで、有効な値 (false) を受け取ることができます。 

<!-- END REF -->




<!-- REF dataclassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.inverseName.Syntax -->
**.inverseName** : Text<!-- END REF -->


#### 説明

`.inverseName` プロパティは、 <!-- REF dataclassAttributeClass.inverseName.Summary -->リレーション先の属性名<!-- END REF -->を格納します。

`.kind` が "storage" の場合には、このプロパティは返されません。 .kind は "relatedEntity" または "relatedEntities" でなくてはなりません。
> 汎用的なプログラミングのために、`.inverseName` が返されない場合でも **String** (dataClassAttribute.inverseName) と書くことで、有効な値 ("") を受け取ることができます。  

<!-- END REF -->




<!-- REF dataclassAttributeClass.keyWordIndexed.Desc -->
## .keyWordIndexed

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.keyWordIndexed.Syntax -->
**.keyWordIndexed** : Boolean<!-- END REF -->


#### 説明

`.keyWordIndexed` プロパティは、 <!-- REF dataclassAttributeClass.keyWordIndexed.Summary -->属性にキーワードインデックスが存在すれば **true**<!-- END REF -->です。

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.keyWordIndexed` が返されない場合でも **Bool** (dataClassAttribute.keyWordIndexed) と書くことで、有効な値 (false) を受け取ることができます。 

<!-- END REF -->



<!-- REF dataclassAttributeClass.kind.Desc -->
## .kind

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.kind.Syntax -->
**.kind** : Text<!-- END REF -->


#### 説明

`.kind` プロパティは、 <!-- REF dataclassAttributeClass.kind.Summary -->属性の種類<!-- END REF -->を格納します。 以下のいずれかの値が返されます:

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


<!-- END REF -->




<!-- REF dataclassAttributeClass.mandatory.Desc -->
## .mandatory

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.mandatory.Syntax -->
**.mandatory** : Boolean<!-- END REF -->


#### 説明

`.mandatory` プロパティは、 <!-- REF dataclassAttributeClass.mandatory.Summary -->属性において Null値の入力が拒否されている場合に true<!-- END REF -->です。

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.mandatory` が返されない場合でも **Bool** (dataClassAttribute.mandatory) と書くことで、有効な値 (false) を受け取ることができます。
> **警告**: このプロパティは、4Dデータベースレベルの "Null値の入力を拒否" フィールドプロパティと対応しています。 フィールドのデータ入力制御オプションである既存の "必須入力" プロパティとは無関係です。 

<!-- END REF -->




<!-- REF dataclassAttributeClass.name.Desc -->
## .name

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.name.Syntax -->
**.name** : Text<!-- END REF -->


#### 説明

`.name` プロパティは、 <!-- REF dataclassAttributeClass.name.Summary -->`dataClassAttribute` オブジェクトの名称<!-- END REF -->を文字列として返します。

#### 例題

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->



<!-- REF dataclassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>


<!-- REF dataclassAttributeClass.relatedDataClass.Syntax -->
**.relatedDataClass** : Text<!-- END REF -->


#### 説明
> このプロパティは、[`.kind`](#kind) プロパティ値が "relatedEntity" または "relatedEntities" である属性においてのみ利用可能です。

`.relatedDataClass` プロパティ、 <!-- REF dataclassAttributeClass.relatedDataClass.Summary -->属性にリレートされているデータクラスの名称<!-- END REF -->を返します。

#### 例題

以下のテーブルとリレーションを前提とします:


![](assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->



<!-- REF dataclassAttributeClass.type.Desc -->
## .type

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.type.Syntax -->
**.type** : Text<!-- END REF -->


#### 説明

`.type` プロパティは、 <!-- REF dataclassAttributeClass.type.Summary -->属性の概念的な値タイプ<!-- END REF -->が格納されており、汎用的なプログラミングに有用です。

この概念的な値タイプは属性の種類 ([`.kind`](#kind)) によります。

**とりうる値:**

| dataClassAttribute.kind | type                                                  | 説明                                                                       |
| ----------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| storage                 | "number", "date", "object", "bool", "image", "string" | 数値型の場合 "number" が返されます (期間を含む)。 UUID、文字およびテキスト型フィールドの場合 "string" が返されます。 |
| relatedEntity           | リレートされたデータクラス名                                        | 例: "Companies"                                                           |
| relatedEntities         | リレートされたデータクラス名 + "Selection"                          | 例: "EmployeeSelection"                                                   |

<!-- END REF -->




<!-- REF dataclassAttributeClass.unique.Desc -->
## .unique

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |
</details>


<!-- REF dataclassAttributeClass.unique.Syntax -->
**.unique** : Boolean<!-- END REF -->


#### 説明

`.unique` プロパティは、 <!-- REF dataclassAttributeClass.unique.Summary -->属性値が重複不可の場合に true<!-- END REF -->です。 このプロパティは、4Dフィールドプロパティの "重複不可" に対応しています.

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.unique` が返されない場合でも **Bool** (dataClassAttribute.unique) と書くことで、有効な値 (false) を受け取ることができます。 

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
