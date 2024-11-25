---
id: data-types
title: Data types overview
---

In 4D, data are handled according to their type in two places: database fields and the 4D language.

Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

|Data Types	|Database support(1)	|Language support|[`var` declaration](variables.md#using-the-var-keyword) |[`ARRAY` declaration](arrays.md)|
|---|----|---|---|---|
|[Alphanumeric](dt_string.md)	|Yes	|Converted to text|-|-
|[Text](Concepts/dt_string.md)	|Yes	|Yes|`Text`|`ARRAY TEXT`
|[Date](Concepts/dt_date.md)	|Yes	|Yes|`Date`|`ARRAY DATE`
|[Time](Concepts/dt_time.md)	|Yes	|Yes|`Time`|`ARRAY TIME`
|[Boolean](Concepts/dt_boolean.md)	|Yes	|Yes|`Boolean`|`ARRAY BOOLEAN`
|[Integer](Concepts/dt_number.md)	|Yes	|Converted to longint|`Integer`|`ARRAY INTEGER`
|[Longint](Concepts/dt_number.md)	|Yes	|Yes|`Integer`|`ARRAY LONGINT`
|[Longint 64 bits](Concepts/dt_number.md)	|Yes (SQL)	|Converted to real|-|-
|[Real](Concepts/dt_number.md)	|Yes	|Yes|`Real`|`ARRAY REAL`
|[Undefined](Concepts/dt_null_undefined.md)	|-	|Yes|-|-
|[Null](Concepts/dt_null_undefined.md)	|-	|Yes|-|-
|[Pointer](Concepts/dt_pointer.md)	|-	|Yes|`Pointer`|`ARRAY POINTER`
|[Picture](Concepts/dt_picture.md)	|Yes	|Yes|`Picture`|`ARRAY PICTURE`
|[BLOB](Concepts/dt_blob.md)	|Yes	|Yes|`Blob`, `4D.Blob`|`ARRAY BLOB`
|[Object](Concepts/dt_object.md)	|Yes	|Yes|`Object`|`ARRAY OBJECT`
|[Collection](Concepts/dt_collection.md)	|-	|Yes|`Collection`|  
|[Variant](Concepts/dt_variant.md)(2)	|-	|Yes|`Variant`||

(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the [Object](Concepts/dt_object.md) data type description. 

(2) Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type. 

## Default values

When [variables](variables.md) or [parameters](parameters.md) are typed by means of an [explicit declaration](variables.md#declaring-variables), they receive a default value, which they will keep during the session as long as they have not been assigned. 

The default value depends on the variable type:

|Type|Default value|  
|---|---|
|Booleen	|False	|
|Date	|00-00-00	|
|Integer|0	|
|Time|00:00:00	|
|Picture|picture size=0	|
|Real|0	|
|Pointer|Nil=true|
|Text|""|
|Blob|Blob size=0|
|Object|null|
|Collection|null|
|Variant|undefined|


### Null as default value

Variables of type Object, Collection, Pointer, and Picture have **null** as default value, but actually get an intermediary status when declared and not assigned. They *behave like* **null** values, but with some differences, generating less errors when the code tries do access them.   



## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

|Data Type to Convert|to String|to Number|to Date|to Time|to Boolean |
|---|---|---|---|---|---|
|String (1)||`Num`|`Date`|`Time`|`Bool`|
|Number (2)|`String`||||`Bool`|
|Date|`String`||||`Bool`|
|Time|`String`||||`Bool`|
|Boolean||`Num`||||

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
