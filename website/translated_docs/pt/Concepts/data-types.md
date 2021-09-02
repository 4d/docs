---
id: data-types
title: Data types overview
---

In 4D, data are handled according to their type in two places: database fields and the 4D language.

Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

| Data Types                                 | Database support(1) | Language support     | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ------------------------------------------ | ------------------- | -------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alphanumeric](dt_string.md)               | Yes                 | Converted to text    | -                                                       | -                                                                |
| [Text](Concepts/dt_string.md)              | Yes                 | Yes                  | `Text`                                                  | `C_TEXT`, `ARRAY TEXTO`                                          |
| [Date](Concepts/dt_date.md)                | Yes                 | Yes                  | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Time](Concepts/dt_time.md)                | Yes                 | Yes                  | `Time`                                                  | `C_TIME`, `ARRAY TIME`                                           |
| [Boolean](Concepts/dt_boolean.md)          | Yes                 | Yes                  | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)           | Yes                 | Converted to longint | `Integer`                                               | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)           | Yes                 | Yes                  | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Longint 64 bits](Concepts/dt_number.md)   | Yes (SQL)           | Converted to real    | -                                                       | -                                                                |
| [Real](Concepts/dt_number.md)              | Yes                 | Yes                  | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Undefined](Concepts/dt_null_undefined.md) | -                   | Yes                  | -                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)      | -                   | Yes                  | -                                                       | -                                                                |
| [Pointer](Concepts/dt_pointer.md)          | -                   | Yes                  | `Pointer`                                               | `C_POINTER`, `ARRAY POINTER`                                     |
| [Picture](Concepts/dt_picture.md)          | Yes                 | Yes                  | `Picture`                                               | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                | Yes                 | Yes                  | `Blob`                                                  | `C_BLOB`, `ARRAY BLOB`                                           |
| [Object](Concepts/dt_object.md)            | Yes                 | Yes                  | `Object`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collection](Concepts/dt_collection.md)    | -                   | Yes                  | `Collection`                                            | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2)       | -                   | Yes                  | `Variant`                                               | `C_VARIANT`                                                      |

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

| Type       | Interprocess/Process (interpreted/compiled), Local (interpreted/compiled "to zero") | Local compiled "random" | Local compiled "no"          |
| ---------- | ----------------------------------------------------------------------------------- | ----------------------- | ---------------------------- |
| Booleen    | False                                                                               | True                    | True (varies)                |
| Date       | 00-00-00                                                                            | 00-00-00                | 00-00-00                     |
| Longint    | 0                                                                                   | 1919382119              | 909540880 (varies)           |
| Time       | 00:00:00                                                                            | 533161:41:59            | 249345:34:24 (varies)        |
| Picture    | picture size=0                                                                      | picture size=0          | picture size=0               |
| Real       | 0                                                                                   | 1.250753659382e+243     | 1.972748538022e-217 (varies) |
| Pointer    | Nil=true                                                                            | Nil=true                | Nil=true                     |
| Text       | ""                                                                                  | ""                      | ""                           |
| Blob       | Blob size=0                                                                         | Blob size=0             | Blob size=0                  |
| Object     | null                                                                                | null                    | null                         |
| Collection | null                                                                                | null                    | null                         |
| Variant    | undefined                                                                           | undefined               | undefined                    |


## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Data Type to Convert | to String | to Number | to Date | to Time | to Boolean |
| -------------------- | --------- | --------- | ------- | ------- | ---------- |
| String (1)           |           | `Num`     | `Date`  | `Time`  | `Bool`     |
| Number (2)           | `String`  |           |         |         | `Bool`     |
| Date                 | `String`  |           |         |         | `Bool`     |
| Time                 | `String`  |           |         |         | `Bool`     |
| Boolean              |           | `Num`     |         |         |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
