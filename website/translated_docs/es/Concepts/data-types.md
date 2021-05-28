---
id: data-types
title: Tipos de datos
---

En 4D, los datos se manejan según su tipo en dos lugares: los campos de la base y el lenguaje 4D.

Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no están disponibles directamente en el lenguaje y se convierten automáticamente. Por el contrario, algunos tipos de datos sólo pueden manejarse a través del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y cómo se soportan/declaran:

| Tipos de datos                                | Soporte para la base (1) | Soporte para el lenguaje   | Declaración de variables     |
| --------------------------------------------- | ------------------------ | -------------------------- | ---------------------------- |
| [Alfanumérico](dt_string.md)                  | Sí                       | Convertido en texto        | -                            |
| [Texto](Concepts/dt_string.md)                | Sí                       | Sí                         | `C_TEXT`, `ARRAY TEXT`       |
| [Fecha](Concepts/dt_date.md)                  | Sí                       | Sí                         | `C_DATE`, `ARRAY DATE`       |
| [Hora](Concepts/dt_time.md)                   | Sí                       | Sí                         | `C_TIME`, `ARRAY TIME`       |
| [Booleano](Concepts/dt_boolean.md)            | Sí                       | Sí                         | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Entero](Concepts/dt_number.md)               | Sí                       | Convertido en entero largo | `ARRAY INTEGER`              |
| [Entero largo](Concepts/dt_number.md)         | Sí                       | Sí                         | `C_LONGINT`, `ARRAY LONGINT` |
| [Entero largo 64 bits](Concepts/dt_number.md) | Sí (SQL)                 | Convertido en real         | -                            |
| [Real](Concepts/dt_number.md)                 | Sí                       | Sí                         | `C_REAL`, `ARRAY REAL`       |
| [Indefinido](Concepts/dt_null_undefined.md)   | -                        | Sí                         | -                            |
| [Null](Concepts/dt_null_undefined.md)         | -                        | Sí                         | -                            |
| [Puntero](Concepts/dt_pointer.md)             | -                        | Sí                         | `C_POINTER`, `ARRAY POINTER` |
| [Imagen](Concepts/dt_picture.md)              | Sí                       | Sí                         | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                   | Sí                       | Sí                         | `C_BLOB`, `ARRAY BLOB`       |
| [Objeto](Concepts/dt_object.md)               | Sí                       | Sí                         | `C_OBJECT`, `ARRAY OBJECT`   |
| [Colección](Concepts/dt_collection.md)        | -                        | Sí                         | `C_COLLECTION`               |
| [Variant](Concepts/dt_variant.md)(2)          | -                        | Sí                         | `C_VARIANT`                  |

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

| Type         | Interprocess/Process (interpreted/compiled), Local (interpreted/compiled "to zero") | Local compiled "random" | Local compiled "no"          |
| ------------ | ----------------------------------------------------------------------------------- | ----------------------- | ---------------------------- |
| Booleen      | False                                                                               | True                    | True (varies)                |
| Fecha        | 00-00-00                                                                            | 00-00-00                | 00-00-00                     |
| Entero largo | 0                                                                                   | 1919382119              | 909540880 (varies)           |
| Hora         | 00:00:00                                                                            | 533161:41:59            | 249345:34:24 (varies)        |
| Imagen       | picture size=0                                                                      | picture size=0          | picture size=0               |
| Real         | 0                                                                                   | 1.250753659382e+243     | 1.972748538022e-217 (varies) |
| Puntero      | Nil=true                                                                            | Nil=true                | Nil=true                     |
| Texto        | ""                                                                                  | ""                      | ""                           |
| Blob         | Blob size=0                                                                         | Blob size=0             | Blob size=0                  |
| Objeto       | null                                                                                | null                    | null                         |
| Colección    | null                                                                                | null                    | null                         |
| Variant      | undefined                                                                           | undefined               | undefined                    |


## Converting data types

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Data Type to Convert | to String | to Number | to Date | to Time | to Boolean |
| -------------------- | --------- | --------- | ------- | ------- | ---------- |
| String (1)           |           | Num       | Fecha   | Hora    | Bool       |
| Número (2)           | Cadena    |           |         |         | Bool       |
| Fecha                | Cadena    |           |         |         | Bool       |
| Hora                 | Cadena    |           |         |         | Bool       |
| Booleano             |           | Num       |         |         |            |

(1) Las cadenas formateadas en JSON pueden convertirse en datos escalares, objetos o colecciones, utilizando el comando `JSON Parse`.

(2) Los valores de tipo Hora pueden tratarse como números.

**Nota:** además de las conversiones de datos listadas en esta tabla, se pueden obtener conversiones de datos más sofisticadas combinando operadores y otros comandos.
