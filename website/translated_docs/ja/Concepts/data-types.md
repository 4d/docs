---
id: data-types
title: Data types overview
---

In 4D, data are handled according to their type in two places: database fields and the 4D language.

Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

| データタイプ                                | Database support(1) | Language support     | Variable declaration         |
| ------------------------------------- | ------------------- | -------------------- | ---------------------------- |
| [文字列](dt_string.md)                   | ○                   | Converted to text    | -                            |
| [テキスト](Concepts/dt_string.md)         | ○                   | ○                    | `C_TEXT`, `ARRAY TEXT`       |
| [日付](Concepts/dt_date.md)             | ○                   | ○                    | `C_DATE`, `ARRAY DATE`       |
| [時間](Concepts/dt_time.md)             | ○                   | ○                    | `C_TIME`, `ARRAY TIME`       |
| [ブール](Concepts/dt_boolean.md)         | ○                   | ○                    | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [整数](Concepts/dt_number.md)           | ○                   | Converted to longint | `ARRAY INTEGER`              |
| [倍長整数](Concepts/dt_number.md)         | ○                   | ○                    | `C_LONGINT`, `ARRAY LONGINT` |
| [64ビット整数](Concepts/dt_number.md)      | Yes (SQL)           | Converted to real    | -                            |
| [実数](Concepts/dt_number.md)           | ○                   | ○                    | `C_REAL`, `ARRAY REAL`       |
| [未定義](Concepts/dt_null_undefined.md)  | -                   | ○                    | -                            |
| [Null](Concepts/dt_null_undefined.md) | -                   | ○                    | -                            |
| [ポインター](Concepts/dt_pointer.md)       | -                   | ○                    | `C_POINTER`, `ARRAY POINTER` |
| [ピクチャー](Concepts/dt_picture.md)       | ○                   | ○                    | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)           | ○                   | ○                    | `C_BLOB`, `ARRAY BLOB`       |
| [オブジェクト](Concepts/dt_object.md)       | ○                   | ○                    | `C_OBJECT`, `ARRAY OBJECT`   |
| [コレクション](Concepts/dt_collection.md)   | -                   | ○                    | `C_COLLECTION`               |
| バリアント                                 | -                   | ○                    | `C_VARIANT`                  |

(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the [Object](Concepts/dt_object.md) data type description.

(2) Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type.

## Default values

When variables are typed by means of a compiler directive, they receive a default value, which they will keep during the session as long as they have not been assigned.

The default value depends on the variable type and category, its execution context (interpreted or compiled), as well as, for compiled mode, the compilation options defined on the Compiler page of the Database settings:

- Process and interprocess variables are always set "to zero" (which means, depending on the case, "0", an empty string, an empty Blob, a Nil pointer, a blank date (00-00-00), etc.)
- Local variables are set: 
    - in interpreted mode: to zero
    - in compiled mode, depending on the **Initialize local variables** option of the Database settings: 
        - "to zero": to zero (see above),
        - "to a random value": 0x72677267 for numbers and times, always True for Booleans, the same as "to zero" for the others,
        - "no": no initialization, meaning whatever is in RAM is used for the variables, like values used before for other variables. **Note:** 4D recommends to use "to zero".

The following table illustrates these default values:

| タイプ     | Interprocess/Process (interpreted/compiled), Local (interpreted/compiled "to zero") | Local compiled "random" | Local compiled "no"          |
| ------- | ----------------------------------------------------------------------------------- | ----------------------- | ---------------------------- |
| Booleen | False                                                                               | True                    | True (varies)                |
| 日付      | 00-00-00                                                                            | 00-00-00                | 00-00-00                     |
| 倍長整数    | 0                                                                                   | 1919382119              | 909540880 (varies)           |
| 時間      | 00:00:00                                                                            | 533161:41:59            | 249345:34:24 (varies)        |
| ピクチャー   | picture size=0                                                                      | picture size=0          | picture size=0               |
| 実数      | 0                                                                                   | 1.250753659382e+243     | 1.972748538022e-217 (varies) |
| ポインター   | Nil=true                                                                            | Nil=true                | Nil=true                     |
| テキスト    | ""                                                                                  | ""                      | ""                           |
| Blob    | Blob size=0                                                                         | Blob size=0             | Blob size=0                  |
| オブジェクト  | null                                                                                | null                    | null                         |
| コレクション  | null                                                                                | null                    | null                         |
| Variant | undefined                                                                           | undefined               | undefined                    |

## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Data Type to Convert | to String | to Number | to Date | to Time | to Boolean |
| -------------------- | --------- | --------- | ------- | ------- | ---------- |
| String (1)           |           | Num       | 日付      | 時間      | Bool       |
| Number (2)           | 文字        |           |         |         | Bool       |
| 日付                   | 文字        |           |         |         | Bool       |
| 時間                   | 文字        |           |         |         | Bool       |
| ブール                  |           | Num       |         |         |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.