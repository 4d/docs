---
id: data-types
title: Tipos de datos
---

En 4D, los datos se manejan según su tipo en dos lugares: los campos de la base y el lenguaje 4D.

Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no están disponibles directamente en el lenguaje y se convierten automáticamente. Por el contrario, algunos tipos de datos sólo pueden manejarse a través del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y cómo se soportan/declaran:

| Tipos de datos                                          | Soporte para la base (1) | Soporte para el lenguaje   | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ------------------------------------------------------- | ------------------------------------------- | -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alphanumeric](dt_string.md)                            | Sí                                          | Convertido en texto        | -                                                       | *                                                                |
| [Text](Concepts/dt_string.md)                           | Sí                                          | Sí                         | `Text`                                                  | `C_TEXT`, `ARRAY TEXT`                                           |
| [Date](Concepts/dt_date.md)                             | Sí                                          | Sí                         | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Time](Concepts/dt_time.md)                             | Sí                                          | Sí                         | `Time`                                                  | `C_TIME`, `ARRAY TIME`                                           |
| [Boolean](Concepts/dt_boolean.md)                       | Sí                                          | Sí                         | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)                        | Sí                                          | Convertido en entero largo | `Integer`                                               | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)                        | Sí                                          | Sí                         | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Longint 64 bits](Concepts/dt_number.md)                | Sí (SQL)                 | Convertido en real         | -                                                       | *                                                                |
| [Real](Concepts/dt_number.md)                           | Sí                                          | Sí                         | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Undefined](Concepts/dt_null_undefined.md)              | -                                           | Sí                         | *                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)                   | *                                           | Sí                         | -                                                       | *                                                                |
| [Pointer](Concepts/dt_pointer.md)                       | -                                           | Sí                         | `Pointer`                                               | `C_POINTER`, `ARRAY POINTER`                                     |
| [Picture](Concepts/dt_picture.md)                       | Sí                                          | Sí                         | `Picture`                                               | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                             | Sí                                          | Sí                         | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                           |
| [Object](Concepts/dt_object.md)                         | Sí                                          | Sí                         | `Object`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collection](Concepts/dt_collection.md)                 | *                                           | Sí                         | `Collection`                                            | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2) | -                                           | Sí                         | `Variant`                                               | `C_VARIANT`                                                      |

(1) Tenga en cuenta que ORDA maneja los campos de la base a través de objetos (entidades) y por lo tanto, sólo soporta los tipos de datos disponibles para estos objetos. For more information, see the [Object](Concepts/dt_object.md) data type description.

(2) Variant is actually not a _data_ type but a _variable_ type that can contain a value of any other data type.

## Valores por defecto

When [variables](variables.md) or [parameters](parameters.md) are typed by means of an [explicit declaration](variables.md#declaring-variables), they receive a default value, which they will keep during the session as long as they have not been assigned.

El valor por defecto depende del tipo de variable:

| Tipo       | Valor por defecto |
| ---------- | ----------------- |
| Booleano   | False             |
| Fecha      | 00-00-00          |
| Longint    | 0                 |
| Hora       | 00:00:00          |
| Picture    | picture size=0    |
| Real       | 0                 |
| Puntero    | Nil=true          |
| Text       | ""                |
| Blob       | Tamaño Blob=0     |
| Object     | null              |
| Collection | null              |
| Variant    | indefinido        |

### Null como valor por defecto

Variables of type Object, Collection, Pointer, and Picture have **null** as default value, but actually get an intermediary status when declared and not assigned. They _behave like_ **null** values, but with some differences, generating less errors when the code tries do access them.

## Convertir los tipos de datos

El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificación de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generará errores de sintaxis.

La siguiente tabla lista los tipos de datos básicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:

| Tipos a convertir             | en Cadena | en Número | en Fecha | en Hora | en Booleano |
| ----------------------------- | --------- | --------- | -------- | ------- | ----------- |
| String (1) |           | `Num`     | `Date`   | `Time`  | `Bool`      |
| Número (2) | `String`  |           |          |         | `Bool`      |
| Fecha                         | `String`  |           |          |         | `Bool`      |
| Hora                          | `String`  |           |          |         | `Bool`      |
| Boolean                       |           | `Num`     |          |         |             |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Los valores de tipo Hora pueden tratarse como números.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
