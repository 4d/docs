---
id: data-types
title: データタイプの概要
---

4D においてデータは、主にデータベースフィールドと 4D ランゲージという2つの場所で、そのタイプに応じて扱われます。

この2つはおおよそ同じものですが、データベースレベルで提供されているいくつかのデータタイプはランゲージにおいては直接利用可能ではなく、自動的に適宜変換されます。 同様に、いくつかのデータタイプはランゲージでしか利用できません。 各場所で利用可能なデータタイプと、ランゲージでの宣言の仕方の一覧です:

| データタイプ                                                  | データベース                     | ランゲージ   | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ------------------------------------------------------- | -------------------------- | ------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alphanumeric](dt_string.md)                            | ◯                          | テキストに変換 | -                                                       | *                                                                |
| [Text](Concepts/dt_string.md)                           | ◯                          | ◯       | `Text`                                                  | `C_TEXT`, `ARRAY TEXT`                                           |
| [Date](Concepts/dt_date.md)                             | ◯                          | ◯       | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Time](Concepts/dt_time.md)                             | ◯                          | ◯       | `Time`                                                  | `C_TIME`, `ARRAY TIME`                                           |
| [Boolean](Concepts/dt_boolean.md)                       | ◯                          | ◯       | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)                        | ◯                          | 倍長整数に変換 | `Integer`                                               | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)                        | ◯                          | ◯       | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Longint 64 bits](Concepts/dt_number.md)                | ◯ (SQL) | 実数に変換   | -                                                       | *                                                                |
| [Real](Concepts/dt_number.md)                           | ◯                          | ◯       | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Undefined](Concepts/dt_null_undefined.md)              | -                          | ◯       | *                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)                   | *                          | ◯       | -                                                       | *                                                                |
| [Pointer](Concepts/dt_pointer.md)                       | -                          | ◯       | `Pointer`                                               | `C_POINTER`, `ARRAY POINTER`                                     |
| [Picture](Concepts/dt_picture.md)                       | ◯                          | ◯       | `Picture`                                               | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                             | ◯                          | ◯       | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                           |
| [Object](Concepts/dt_object.md)                         | ◯                          | ◯       | `Object`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collection](Concepts/dt_collection.md)                 | *                          | ◯       | `Collection`                                            | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2) | -                          | ◯       | `Variant`                                               | `C_VARIANT`                                                      |

(1) ORDA では、オブジェクト (エンティティ) を介してデータベースフィールドを扱うため、オブジェクトにおいて利用可能なデータタイプのみがサポートされます。 For more information, see the [Object](Concepts/dt_object.md) data type description.

(2) Variant is actually not a _data_ type but a _variable_ type that can contain a value of any other data type.

## デフォルト値

When [variables](variables.md) or [parameters](parameters.md) are typed by means of an [explicit declaration](variables.md#declaring-variables), they receive a default value, which they will keep during the session as long as they have not been assigned.

デフォルト値は変数の型に依存します:

| タイプ        | デフォルト値     |
| ---------- | ---------- |
| ブール        | false      |
| 日付         | 00-00-00   |
| Longint    | 0          |
| 時間         | 00:00:00   |
| Picture    | ピクチャーサイズ=0 |
| Real       | 0          |
| ポインター      | Nil=true   |
| Text       | ""         |
| Blob       | BLOB サイズ=0 |
| Object     | null       |
| Collection | null       |
| Variant    | undefined  |

### Null as default value

Variables of type Object, Collection, Pointer, and Picture have **null** as default value, but actually get an intermediary status when declared and not assigned. They _behave like_ **null** values, but with some differences, generating less errors when the code tries do access them.

## データタイプの変換

4D ランゲージには、データタイプ間の変換をおこなう演算子やコマンドがあります。 4D ランゲージはデータタイプをチェックします。 たとえば、"abc"+0.5+!12/25/96!-?00:30:45?のように記述することはできません。 これは、シンタックス (構文) エラーになります。

次の表は、基本のデータタイプ、変換できるデータタイプ、それを実行する際に使用するコマンドを示しています:

| データタイプ                     | 文字列に変換   | 数値に変換 | 日付に変換  | 時間に変換  | ブールに変換 |
| -------------------------- | -------- | ----- | ------ | ------ | ------ |
| 文字列 (1) |          | `Num` | `Date` | `Time` | `Bool` |
| 数値 (2)  | `String` |       |        |        | `Bool` |
| 日付                         | `String` |       |        |        | `Bool` |
| 時間                         | `String` |       |        |        | `Bool` |
| Boolean                    |          | `Num` |        |        |        |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) 時間は数値として扱うことができます。

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
