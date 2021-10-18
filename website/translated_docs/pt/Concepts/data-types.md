---
id: data-types
title: Data types overview
---

In 4D, data are handled according to their type in two places: database fields and the 4D language.

Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

| Data Types                                 | Database support(1) | Language support     | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ------------------------------------------ | ------------------- | -------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alphanumeric](dt_string.md)               | Sim                 | Converted to text    | -                                                       | -                                                                |
| [Texto](Concepts/dt_string.md)             | Sim                 | Sim                  | `Texto`                                                 | `C_TEXT`, `ARRAY TEXTO`                                          |
| [Date](Concepts/dt_date.md)                | Sim                 | Sim                  | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Hora](Concepts/dt_time.md)                | Sim                 | Sim                  | `Hora`                                                  | `C_TIME`, `ARRAY TIME`                                           |
| [Booleano](Concepts/dt_boolean.md)         | Sim                 | Sim                  | `Booleano`                                              | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)           | Sim                 | Converted to longint | `Integer`                                               | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)           | Sim                 | Sim                  | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Longint 64 bits](Concepts/dt_number.md)   | Yes (SQL)           | Converted to real    | -                                                       | -                                                                |
| [Real](Concepts/dt_number.md)              | Sim                 | Sim                  | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Undefined](Concepts/dt_null_undefined.md) | -                   | Sim                  | -                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)      | -                   | Sim                  | -                                                       | -                                                                |
| [Ponteiro](Concepts/dt_pointer.md)         | -                   | Sim                  | `Ponteiro`                                              | `C_POINTER`, `ARRAY POINTER`                                     |
| [Imagem](Concepts/dt_picture.md)           | Sim                 | Sim                  | `Imagem`                                                | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                | Sim                 | Sim                  | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                           |
| [Objeto](Concepts/dt_object.md)            | Sim                 | Sim                  | `Objeto`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collection](Concepts/dt_collection.md)    | -                   | Sim                  | `Collection`                                            | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2)       | -                   | Sim                  | `Variant`                                               | `C_VARIANT`                                                      |

(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the [Object](Concepts/dt_object.md) data type description.

(2) Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type.

## Default values

When variables are typed by means of a compiler directive, they receive a default value, which they will keep during the session as long as they have not been assigned.

The default value depends on the variable type:

| Type       | Default value  |
| ---------- | -------------- |
| Booleen    | False          |
| Date       | 00-00-00       |
| Longint    | 0              |
| Hora       | 00:00:00       |
| Imagem     | picture size=0 |
| Real       | 0              |
| Ponteiro   | Nil=true       |
| Texto      | ""             |
| Blob       | Blob size=0    |
| Objeto     | null           |
| Collection | null           |
| Variant    | undefined      |


## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Data Type to Convert | to String | to Number | to Date | to Time | to Boolean |
| -------------------- | --------- | --------- | ------- | ------- | ---------- |
| String (1)           |           | `Num`     | `Date`  | `Hora`  | `Bool`     |
| Number (2)           | `String`  |           |         |         | `Bool`     |
| Date                 | `String`  |           |         |         | `Bool`     |
| Hora                 | `String`  |           |         |         | `Bool`     |
| Booleano             |           | `Num`     |         |         |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
