---
id: data-types
title: Tipos de datos
---

En 4D, los datos se manejan según su tipo en dos lugares: los campos de la base y el lenguaje 4D.

Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no están disponibles directamente en el lenguaje y se convierten automáticamente. Por el contrario, algunos tipos de datos sólo pueden manejarse a través del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y cómo se soportan/declaran:

| Tipos de datos                                | Soporte para la base (1) | Soporte para el lenguaje   | [declaración `var`](variables.md#using-the-var-keyword) | [declaración `C_` o `ARRAY`](variables.md#using-a-c_-directive) |
| --------------------------------------------- | ------------------------ | -------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| [Alfanumérico](dt_string.md)                  | Sí                       | Convertido en texto        | -                                                       | -                                                               |
| [Text](Concepts/dt_string.md)                 | Sí                       | Sí                         | `Text`                                                  | `C_TEXT`, `ARRAY TEXT`                                          |
| [Fecha](Concepts/dt_date.md)                  | Sí                       | Sí                         | `Fecha`                                                 | `C_DATE`, `ARRAY DATE`                                          |
| [Hora](Concepts/dt_time.md)                   | Sí                       | Sí                         | `Hora`                                                  | `C_TIME`, `ARRAY TIME`                                          |
| [Boolean](Concepts/dt_boolean.md)             | Sí                       | Sí                         | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                    |
| [Integer](Concepts/dt_number.md)              | Sí                       | Convertido en entero largo | `Integer`                                               | `ARRAY INTEGER`                                                 |
| [Longint](Concepts/dt_number.md)              | Sí                       | Sí                         | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                    |
| [Entero largo 64 bits](Concepts/dt_number.md) | Sí (SQL)                 | Convertido en real         | -                                                       | -                                                               |
| [Real](Concepts/dt_number.md)                 | Sí                       | Sí                         | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                          |
| [Indefinido](Concepts/dt_null_undefined.md)   | -                        | Sí                         | -                                                       | -                                                               |
| [Null](Concepts/dt_null_undefined.md)         | -                        | Sí                         | -                                                       | -                                                               |
| [Puntero](Concepts/dt_pointer.md)             | -                        | Sí                         | `Puntero`                                               | `C_POINTER`, `ARRAY POINTER`                                    |
| [Picture](Concepts/dt_picture.md)             | Sí                       | Sí                         | `Picture`                                               | `C_PICTURE`, `ARRAY PICTURE`                                    |
| [BLOB](Concepts/dt_blob.md)                   | Sí                       | Sí                         | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                          |
| [Object](Concepts/dt_object.md)               | Sí                       | Sí                         | `Object`                                                | `C_OBJECT`, `ARRAY OBJECT`                                      |
| [Collection](Concepts/dt_collection.md)       | -                        | Sí                         | `Collection`                                            | `C_COLLECTION`                                                  |
| [Variant](Concepts/dt_variant.md)(2)          | -                        | Sí                         | `Variant`                                               | `C_VARIANT`                                                     |

(1) Tenga en cuenta que ORDA maneja los campos de la base a través de objetos (entidades) y por lo tanto, sólo soporta los tipos de datos disponibles para estos objetos. Para más información, consulte la descripción del tipo de datos [Objeto](Concepts/dt_object.md).

(2) La variante no es en realidad un tipo de *datos* sino un tipo de *variable* que puede contener un valor de cualquier otro tipo de datos.

## Valores por defecto

Cuando las [variables](variables.md) o los [parámetros](parameters.md) se digitan mediante una [declaración explícita](variables.md#declaring-variables), reciben un valor por defecto, que conservarán durante la sesión mientras no hayan sido asignados.

El valor por defecto depende del tipo de variable:

| Tipo       | Valor por defecto |
| ---------- | ----------------- |
| Booleano   | False             |
| Fecha      | 00-00-00          |
| Integer    | 0                 |
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

Las variables de tipo Object, Collection, Pointer y Picture tienen **null** como valor por defecto, pero en realidad obtienen un estado intermedio cuando se declaran y no se asignan. *Se comportan como* los valores **null**, pero con algunas diferencias, generando menos errores cuando el código intenta acceder a ellos.



## Convertir los tipos de datos

El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificación de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generará errores de sintaxis.

La siguiente tabla lista los tipos de datos básicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:

| Tipos a convertir | en Cadena | en Número | en Fecha | en Hora | en Booleano |
| ----------------- | --------- | --------- | -------- | ------- | ----------- |
| String (1)        |           | `Num`     | `Fecha`  | `Hora`  | `Bool`      |
| Número (2)        | `String`  |           |          |         | `Bool`      |
| Fecha             | `String`  |           |          |         | `Bool`      |
| Hora              | `String`  |           |          |         | `Bool`      |
| Boolean           |           | `Num`     |          |         |             |

(1) Las cadenas formateadas en JSON pueden convertirse en datos escalares, objetos o colecciones, utilizando el comando `JSON Parse`.

(2) Los valores de tipo Hora pueden tratarse como números.

**Nota:** además de las conversiones de datos listadas en esta tabla, se pueden obtener conversiones de datos más sofisticadas combinando operadores y otros comandos.
