---
id: DataClassAttributeClass
title: DataClassAttribute
---

データクラス属性は、それぞれのクラスのプロパティとして利用可能です。 例:

```4d
 nameAttribute:=ds.Company.name // クラス属性への参照
 revenuesAttribute:=ds.Company["revenues"] // 別の書き方
```

このコードは、*nameAttribute* および *revenuesAttribute* 変数に、`Company` クラスの name および revenues 属性の参照をそれぞれ代入します。 このシンタックスは属性内に保管されている値を返すのではありません。その代わりに、属性自身への参照を返します。 値を管理するには、[**エンティティ**](EntityClass.md) を使用する必要があります。

`DataClassAttribute` オブジェクトが持つプロパティを読み取ることによって、データクラス属性に関する情報が取得できます。

> データクラス属性オブジェクトを編集することは可能ですが、元となるデータベースストラクチャーは変更されません。

### 概要

|                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE DataClassAttributeClass.autoFilled.Syntax -->](#autofilled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.autoFilled.Summary -->|
| [<!-- INCLUDE DataClassAttributeClass.exposed.Syntax -->](#exposed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.exposed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldNumber.Syntax -->](#fieldnumber)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldNumber.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.fieldType.Syntax -->](#fieldtype)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.fieldType.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.indexed.Syntax -->](#indexed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.indexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.inverseName.Syntax -->](#inversename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.inverseName.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Syntax -->](#keywordindexed)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.keywordIndexed.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.kind.Syntax -->](#kind)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.kind.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.mandatory.Syntax -->](#mandatory)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.mandatory.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.name.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.path.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.readOnly.Syntax -->](#readonly)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.readOnly.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Syntax -->](#relateddataclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.relatedDataClass.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.type.Summary --> |
| [<!-- INCLUDE DataClassAttributeClass.unique.Syntax -->](#unique)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE DataClassAttributeClass.unique.Summary --> |

<!-- REF DataClassAttributeClass.autoFilled.Desc -->
## .autoFilled

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.autoFilled.Syntax -->**.autoFilled** : Boolean<!-- END REF -->

#### 説明

`.autoFilled` プロパティは、 <!-- REF DataClassAttributeClass.autoFilled.Summary -->属性値が 4D によって自動生成される場合に true です<!-- END REF -->。 このプロパティは以下の 4Dフィールドプロパティに対応しています:

* 数値型フィールドの "自動インクリメント"
* UUID (文字型)フィールドの "自動UUID"

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.autoFilled` が返されない場合でも **Bool** (dataClassAttribute.autoFilled) と書くことで、有効な値 (false) を受け取ることができます。

<!-- END REF -->

<!-- REF DataClassAttributeClass.exposed.Desc -->
## .exposed

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R3 | 追加 |

</details>

<!-- REF DataClassAttributeClass.exposed.Syntax -->**.exposed** : Boolean<!-- END REF -->

#### 説明

`.exposed` プロパティは、 <!-- REF DataClassAttributeClass.exposed.Summary -->属性が REST で公開されている場合に trueです<!-- END REF -->。

#### 参照

[DataClass.getInfo()](DataClassClass.md#getinfo)

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldNumber.Desc -->
## .fieldNumber

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.fieldNumber.Syntax -->**.fieldNumber** : Integer<!-- END REF -->

#### 説明

`.fieldNumber` プロパティは、 <!-- REF DataClassAttributeClass.fieldNumber.Summary -->属性の内部的な 4Dフィールド番号を格納します<!-- END REF -->。

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.fieldNumber` が返されない場合でも **Num** (dataClassAttribute.fieldNumber) と書くことで、有効な値 (0) を受け取ることができます。

<!-- END REF -->

<!-- REF DataClassAttributeClass.fieldType.Desc -->
## .fieldType

<details><summary>履歴</summary>

| バージョン  | 内容           |
| ------ | ------------ |
| v19 R4 | エイリアス属性をサポート |
| v19 R3 | 計算属性をサポート    |

</details>

<!-- REF DataClassAttributeClass.fieldType.Syntax -->**.fieldType** : Integer<!-- END REF -->

#### 説明

`.fieldType` プロパティは、 <!-- REF DataClassAttributeClass.fieldType.Summary -->属性の 4Dデータベースタイプを格納します<!-- END REF -->。 これは属性の種類 (kind) によります ([`.kind`](#kind) 参照)。

**とりうる値:**

| dataClassAttribute.kind | fieldType                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------- |
| storage                 | 4Dフィールドタイプに対応、[`Value type`](https://doc.4d.com/4dv19/help/command/ja/page1509.html) コマンド参照 |
| relatedEntity           | 38 (`Is object`)                                                                            |
| relatedEntities         | 42 (`Is collection`)                                                                        |
| calculated              | <li>スカラー: 4Dフィールドタイプに対応、[`Value type`](https://doc.4d.com/4dv19/help/command/ja/page1509.html) コマンド参照</li><li>エンティティ: 38 (`Is object`)</li><li>エンティティセレクション: 42 (`Is collection`)</li>                 |
| alias                   | <li>スカラー: 4Dフィールドタイプに対応、[`Value type`](https://doc.4d.com/4dv19/help/command/ja/page1509.html) コマンド参照</li><li>エンティティ: 38 (`Is object`)</li><li>エンティティセレクション: 42 (`Is collection`)</li>                 |

<!-- END REF -->

#### 参照

[.type](#type)

<!-- REF DataClassAttributeClass.indexed.Desc -->
## .indexed

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.indexed.Syntax -->**.indexed** : Boolean<!-- END REF -->

#### 説明

`.indexed` プロパティは、 <!-- REF DataClassAttributeClass.indexed.Summary -->属性に対して B-tree もしくは クラスターB-Tree インデックスが設定されている場合に **true** です<!-- END REF -->。

`.kind` が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.indexed` が返されない場合でも **Bool** (dataClassAttribute.indexed) と書くことで、有効な値 (false) を受け取ることができます。

<!-- END REF -->

<!-- REF DataClassAttributeClass.inverseName.Desc -->
## .inverseName

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.inverseName.Syntax -->**.inverseName** : Text<!-- END REF -->

#### 説明

`.inverseName` プロパティは、 <!-- REF DataClassAttributeClass.inverseName.Summary -->リレーション先の属性名を格納します<!-- END REF -->。

`.kind` が "storage" の場合には、このプロパティは返されません。 .kind は "relatedEntity" または "relatedEntities" でなくてはなりません。
> 汎用的なプログラミングのために、`.inverseName` が返されない場合でも **String** (dataClassAttribute.inverseName) と書くことで、有効な値 ("") を受け取ることができます。  

<!-- END REF -->

<!-- REF DataClassAttributeClass.keywordIndexed.Desc -->
## .keywordIndexed

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.keywordIndexed.Syntax -->**.keywordIndexed** : Boolean<!-- END REF -->

#### 説明

`.keywordIndexed` プロパティは、 <!-- REF DataClassAttributeClass.keywordIndexed.Summary -->属性にキーワードインデックスが存在すれば **true** です<!-- END REF -->。

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.keywordIndexed` が返されない場合でも **Bool** (dataClassAttribute.keywordIndexed) と書くことで、有効な値 (false) を受け取ることができます。

<!-- END REF -->

<!-- REF DataClassAttributeClass.kind.Desc -->
## .kind

<details><summary>履歴</summary>

| バージョン  | 内容               |
| ------ | ---------------- |
| v19 R4 | "alias" を追加      |
| v19 R3 | "calculated" を追加 |

</details>

<!-- REF DataClassAttributeClass.kind.Syntax -->**.kind** : Text<!-- END REF -->

#### 説明

`.kind` プロパティは、 <!-- REF DataClassAttributeClass.kind.Summary -->属性の種類を格納します<!-- END REF -->。 以下のいずれかの値が返されます:

* "storage": ストレージ (あるいはスカラー) 属性。つまり、属性は値を保存しており、他の属性への参照ではありません。
* "calculated": 計算属性。[`get` 関数](ORDA/ordaClasses.md#function-get-attributename) によって定義されます。
* "alias": [他の属性](ORDA/ordaClasses.md#エイリアス属性-1) を指し示す属性。
* "relatedEntity": N対1 リレーション属性 (エンティティへの参照)
* "relatedEntities": 1対N リレーション属性 (エンティティセレクションへの参照)

#### 例題

以下のテーブルとリレーションを前提とします:

![](../assets/en/API/dataclassAttribute3.png)

```4d
 var $attKind : Text
 $attKind:=ds.Employee.lastname.kind //$attKind="storage"
 $attKind:=ds.Employee.manager.kind //$attKind="relatedEntity"
 $attKind:=ds.Employee.directReports.kind //$attKind="relatedEntities"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.mandatory.Desc -->
## .mandatory

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.mandatory.Syntax -->**.mandatory** : Boolean<!-- END REF -->

#### 説明

`.mandatory` プロパティは、 <!-- REF DataClassAttributeClass.mandatory.Summary -->属性において Null値の入力が拒否されている場合に true です<!-- END REF -->。

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.mandatory` が返されない場合でも **Bool** (dataClassAttribute.mandatory) と書くことで、有効な値 (false) を受け取ることができます。
> **警告**: このプロパティは、4Dデータベースレベルの "Null値の入力を拒否" フィールドプロパティと対応しています。 フィールドのデータ入力制御オプションである既存の "必須入力" プロパティとは無関係です。

<!-- END REF -->

<!-- REF DataClassAttributeClass.name.Desc -->
## .name

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### 説明

`.name` プロパティは、 <!-- REF DataClassAttributeClass.name.Summary -->`dataClassAttribute` オブジェクトの名称を文字列として返します<!-- END REF -->。

#### 例題

```4d
 var $attName : Text
 $attName:=ds.Employee.lastname.name //$attName="lastname"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.path.Desc -->
## .path

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |

</details>

<!-- REF DataClassAttributeClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### 説明

`.path` プロパティは、 <!-- REF DataClassAttributeClass.path.Summary -->リレーション属性を指し示すエイリアス属性のパスを返します<!-- END REF -->。

#### 例題

```4d
 var $path : Text
 $path:=ds.Teacher.students.path // $path="courses.student"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.readOnly.Desc -->
## .readOnly

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R3 | 追加 |

</details>

<!-- REF DataClassAttributeClass.readOnly.Syntax -->**.readOnly** : Boolean<!-- END REF -->

#### 説明

`.readOnly` プロパティは、 <!-- REF DataClassAttributeClass.readOnly.Summary -->読み取り専用属性の場合に trueです<!-- END REF -->。

たとえば、[`set` 関数](ORDA/ordaClasses.md#function-set-attributename) を持たない計算属性は読み取り専用です。

<!-- END REF -->

<!-- REF DataClassAttributeClass.relatedDataClass.Desc -->
## .relatedDataClass

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.relatedDataClass.Syntax -->**.relatedDataClass** : Text<!-- END REF -->

#### 説明
> このプロパティは、[`.kind`](#kind) プロパティ値が "relatedEntity" または "relatedEntities" である属性においてのみ利用可能です。

`.relatedDataClass` プロパティは、 <!-- REF DataClassAttributeClass.relatedDataClass.Summary -->属性にリレートされているデータクラスの名称を返します<!-- END REF -->。

#### 例題

以下のテーブルとリレーションを前提とします:

![](../assets/en/API/dataclassAttribute4.png)

```4d
 var $relClass1; $relClassN : Text
 $relClass1:=ds.Employee.employer.relatedDataClass //$relClass1="Company"
 $relClassN:=ds.Employee.directReports.relatedDataClass //$relClassN="Employee"
```

<!-- END REF -->

<!-- REF DataClassAttributeClass.type.Desc -->
## .type

<details><summary>履歴</summary>

| バージョン  | 内容        |
| ------ | --------- |
| v19 R3 | 計算属性をサポート |

</details>

<!-- REF DataClassAttributeClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### 説明

`.type` プロパティは、 <!-- REF DataClassAttributeClass.type.Summary -->属性の概念的な値タイプが格納されています<!-- END REF -->。これは、汎用的なプログラミングに有用です

この概念的な値タイプは属性の種類 ([`.kind`](#kind)) によります。

**とりうる値:**

| dataClassAttribute.kind | type                                                                           | 説明                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| storage                 | "blob", "bool", "date", "image", "number", "object", または "string"              | 数値型の場合 "number" が返されます (時間を含む)。 UUID、文字およびテキスト型フィールドの場合 "string" が返されます。 "blob" 属性は [BLOB オブジェクト](Concepts/dt_blob.md#blob-の種類) で、[Blob クラス](BlobClass.md) によって扱われます。 |
| relatedEntity           | リレートされたデータクラス名                                                                 | 例: "Companies"                                                                                                                                                        |
| relatedEntities         | リレートされたデータクラス名 + "Selection"                                                   | 例: "EmployeeSelection"                                                                                                                                                |
| calculated              | <li>ストレージ: データ型 ("blob", "number", など)</li><li>エンティティ: データクラス名</li><li>エンティティセレクション: データクラス名 + "Selection"</li> |                                                                                                                                                                       |

<!-- END REF -->

#### 参照

[`.fieldType`](#fieldtype)

<!-- REF DataClassAttributeClass.unique.Desc -->
## .unique

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R5 | 追加 |

</details>

<!-- REF DataClassAttributeClass.unique.Syntax -->**.unique** : Boolean<!-- END REF -->

#### 説明

`.unique` プロパティは、 <!-- REF DataClassAttributeClass.unique.Summary -->属性値が重複不可の場合に true です<!-- END REF -->。 このプロパティは、4Dフィールドプロパティの "重複不可" に対応しています.

[`.kind`](#kind) が "relatedEntity" または "relatedEntities" の場合には、このプロパティは返されません。
> 汎用的なプログラミングのために、`.unique` が返されない場合でも **Bool** (dataClassAttribute.unique) と書くことで、有効な値 (false) を受け取ることができます。

<!-- END REF -->
