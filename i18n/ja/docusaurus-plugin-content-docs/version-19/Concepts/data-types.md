---
id: data-types
title: データタイプの概要
---

4D においてデータは、主にデータベースフィールドと 4D ランゲージという2つの場所で、そのタイプに応じて扱われます。

この2つはおおよそ同じものですが、データベースレベルで提供されているいくつかのデータタイプはランゲージにおいては直接利用可能ではなく、自動的に適宜変換されます。 同様に、いくつかのデータタイプはランゲージでしか利用できません。 各場所で利用可能なデータタイプと、ランゲージでの宣言の仕方の一覧です:

| データタイプ                                | データベース  | ランゲージ   | [`var` 宣言](variables.md#using-the-var-keyword) | [`C_` または `ARRAY` 宣言](variables.md#using-a-c_-directive) |
| ------------------------------------- | ------- | ------- | ---------------------------------------------- | -------------------------------------------------------- |
| [文字列](dt_string.md)                   | ◯       | テキストに変換 | -                                              | -                                                        |
| [テキスト](Concepts/dt_string.md)         | ◯       | ◯       | テキスト                                           | `C_TEXT`, `ARRAY TEXT`                                   |
| [日付](Concepts/dt_date.md)             | ◯       | ◯       | 日付                                             | `C_DATE`, `ARRAY DATE`                                   |
| [時間](Concepts/dt_time.md)             | ◯       | ◯       | 時間                                             | `C_TIME`, `ARRAY TIME`                                   |
| [ブール](Concepts/dt_boolean.md)         | ◯       | ◯       | ブール                                            | `C_BOOLEAN`, `ARRAY BOOLEAN`                             |
| [整数](Concepts/dt_number.md)           | ◯       | 倍長整数に変換 | 整数                                             | `ARRAY INTEGER`                                          |
| [Longint](Concepts/dt_number.md)      | ◯       | ◯       | 整数                                             | `C_LONGINT`, `ARRAY LONGINT`                             |
| [64ビット整数](Concepts/dt_number.md)      | ◯ (SQL) | 実数に変換   | -                                              | -                                                        |
| [実数](Concepts/dt_number.md)           | ◯       | ◯       | 実数                                             | `C_REAL`, `ARRAY REAL`                                   |
| [未定義](Concepts/dt_null_undefined.md)  | -       | ◯       | -                                              | -                                                        |
| [Null](Concepts/dt_null_undefined.md) | -       | ◯       | -                                              | -                                                        |
| [Pointer](Concepts/dt_pointer.md)     | -       | ◯       | Pointer                                        | `C_POINTER`, `ARRAY POINTER`                             |
| [Picture](Concepts/dt_picture.md)     | ◯       | ◯       | Picture                                        | `C_PICTURE`, `ARRAY PICTURE`                             |
| [BLOB](Concepts/dt_blob.md)           | ◯       | ◯       | Blob                                           | `C_BLOB`, `ARRAY BLOB`                                   |
| [Object](Concepts/dt_object.md)       | ◯       | ◯       | Object                                         | `C_OBJECT`, `ARRAY OBJECT`                               |
| [コレクション](Concepts/dt_collection.md)   | -       | ◯       | コレクション                                         | `C_COLLECTION`                                           |
| [バリアント](Concepts/dt_variant.md)(2)    | -       | ◯       | Variant                                        | `C_VARIANT`                                              |

(1) ORDA では、オブジェクト (エンティティ) を介してデータベースフィールドを扱うため、オブジェクトにおいて利用可能なデータタイプのみがサポートされます。 詳細については [オブジェクト](Concepts/dt_object.md) のデータタイプの説明を参照ください。

(2) バリアントは実際のところ *データ* タイプではなく、あらゆるデータタイプの値を格納することのできる *変数* タイプです。

## デフォルト値

コンパイラー指示子によって変数の型が決まるとき、変数はデフォルトの値を受け取り、割り当てがされない限りセッションの間はその値を保ち続けます。

デフォルト値は変数の型に依存します:

| タイプ     | デフォルト値     |
| ------- | ---------- |
| ブール     | False      |
| 日付      | 00-00-00   |
| Longint | 0          |
| 時間      | 00:00:00   |
| Picture | ピクチャーサイズ=0 |
| 実数      | 0          |
| Pointer | Nil=true   |
| テキスト    | ""         |
| Blob    | Blob サイズ=0 |
| Object  | null       |
| コレクション  | null       |
| Variant | undefined  |


## データタイプの変換

4D ランゲージには、データタイプ間の変換をおこなう演算子やコマンドがあります。 4D ランゲージはデータタイプをチェックします。 たとえば、"abc"+0.5+!12/25/96!-?00:30:45?のように記述することはできません。 これは、シンタックス (構文) エラーになります。

次の表は、基本のデータタイプ、変換できるデータタイプ、それを実行する際に使用するコマンドを示しています:

| データタイプ  | 文字列に変換 | 数値に変換 | 日付に変換 | 時間に変換 | ブールに変換 |
| ------- | ------ | ----- | ----- | ----- | ------ |
| 文字列 (1) |        | 数値    | 日付    | 時間    | ブール    |
| 数値 (2)  | String |       |       |       | ブール    |
| 日付      | String |       |       |       | ブール    |
| 時間      | String |       |       |       | ブール    |
| ブール     |        | 数値    |       |       |        |

(1) JSON形式の文字列は `JSON Parse` コマンドを使ってスカラーデータ、オブジェクト、あるいはコレクションに変換することができます。

(2) 時間は数値として扱うことができます。

**注:** この表に示すデータ変換の他に、演算子と他のコマンドを組み合せることで、より洗練されたデータ変換を実行することができます。
