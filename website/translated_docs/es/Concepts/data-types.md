---
id: data-types
title: Tipos de datos
---

En 4D, los datos se manejan según su tipo en dos lugares: los campos de la base y el lenguaje 4D.

Aunque suelen ser equivalentes, algunos tipos de datos disponibles en la base no están disponibles directamente en el lenguaje y se convierten automáticamente. Por el contrario, algunos tipos de datos sólo pueden manejarse a través del lenguaje. La siguiente tabla lista todos los tipos de datos disponibles y cómo se soportan/declaran:

| Tipos de datos                                | Soporte para la base (1) | Soporte para el lenguaje   | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| --------------------------------------------- | ------------------------ | -------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alfanumérico](dt_string.md)                  | Sí                       | Convertido en texto        | -                                                       | -                                                                |
| [Texto](Concepts/dt_string.md)                | Sí                       | Sí                         | Texto                                                   | `C_TEXT`, `ARRAY TEXT`                                           |
| [Fecha](Concepts/dt_date.md)                  | Sí                       | Sí                         | Fecha                                                   | `C_DATE`, `ARRAY DATE`                                           |
| [Hora](Concepts/dt_time.md)                   | Sí                       | Sí                         | Hora                                                    | `C_TIME`, `ARRAY TIME`                                           |
| [Booleano](Concepts/dt_boolean.md)            | Sí                       | Sí                         | Booleano                                                | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Entero](Concepts/dt_number.md)               | Sí                       | Convertido en entero largo | Entero                                                  | `ARRAY INTEGER`                                                  |
| [Entero largo](Concepts/dt_number.md)         | Sí                       | Sí                         | Entero                                                  | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Entero largo 64 bits](Concepts/dt_number.md) | Sí (SQL)                 | Convertido en real         | -                                                       | -                                                                |
| [Real](Concepts/dt_number.md)                 | Sí                       | Sí                         | Real                                                    | `C_REAL`, `ARRAY REAL`                                           |
| [Indefinido](Concepts/dt_null_undefined.md)   | -                        | Sí                         | -                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)         | -                        | Sí                         | -                                                       | -                                                                |
| [Puntero](Concepts/dt_pointer.md)             | -                        | Sí                         | Puntero                                                 | `C_POINTER`, `ARRAY POINTER`                                     |
| [Imagen](Concepts/dt_picture.md)              | Sí                       | Sí                         | Imagen                                                  | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                   | Sí                       | Sí                         | Blob                                                    | `C_BLOB`, `ARRAY BLOB`                                           |
| [Objeto](Concepts/dt_object.md)               | Sí                       | Sí                         | Objeto                                                  | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Colección](Concepts/dt_collection.md)        | -                        | Sí                         | Colección                                               | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2)          | -                        | Sí                         | Variant                                                 | `C_VARIANT`                                                      |

(1) Tenga en cuenta que ORDA maneja los campos de la base a través de objetos (entidades) y por lo tanto, sólo soporta los tipos de datos disponibles para estos objetos. Para más información, consulte la descripción del tipo de datos [Objeto](Concepts/dt_object.md).

(2) La variante no es en realidad un tipo de *datos* sino un tipo de *variable* que puede contener un valor de cualquier otro tipo de datos.

## Valores por defecto

Cuando las variables se introducen mediante una directiva del compilador, reciben un valor por defecto, que mantendrán durante la sesión mientras no hayan sido asignadas.

El valor por defecto depende del tipo y la categoría de la variable, su contexto de ejecución (interpretada o compilada), así como, para el modo compilado, las opciones de compilación definidas en la página Compilador de las Propiedades de la base:

- Las variables proceso e interproceso se ponen siempre "en cero" (lo que significa, según el caso, "0", una cadena vacía, un Blob vacío, un puntero Nil, una fecha en blanco (00-00-00), etc.)
- Se establecen las variables locales:
    - en modo interpretado: en cero
    - en modo compilado, dependiendo de la opción **Inicializar variables locales** de las Propiedades de la base:
        - "en cero": en cero (ver arriba),
        - "a un valor aleatorio": 0x72677267 para números y horas, siempre True para booleanos, igual que "en cero" para los demás,
        - "no": no hay inicialización, lo que significa que lo que está en la RAM se utiliza para las variables, como los valores utilizados antes para otras variables. **Nota:** 4D recomienda utilizar "en cero".

La siguiente tabla ilustra estos valores por defecto:

| Tipo         | Interproceso/Proceso (interpretado/compilado), Local (interpretado/compilado "en cero") | Local compilado "aleatorio" | Local compilado "no"        |
| ------------ | --------------------------------------------------------------------------------------- | --------------------------- | --------------------------- |
| Booleano     | False                                                                                   | True                        | True (varía)                |
| Fecha        | 00-00-00                                                                                | 00-00-00                    | 00-00-00                    |
| Entero largo | 0                                                                                       | 1919382119                  | 909540880 (varía)           |
| Hora         | 00:00:00                                                                                | 533161:41:59                | 249345:34:24 (varía)        |
| Imagen       | picture size=0                                                                          | picture size=0              | picture size=0              |
| Real         | 0                                                                                       | 1.250753659382e+243         | 1.972748538022e-217 (varía) |
| Puntero      | Nil=true                                                                                | Nil=true                    | Nil=true                    |
| Texto        | ""                                                                                      | ""                          | ""                          |
| Blob         | Tamaño Blob=0                                                                           | Tamaño Blob=0               | Tamaño Blob=0               |
| Objeto       | null                                                                                    | null                        | null                        |
| Colección    | null                                                                                    | null                        | null                        |
| Variant      | indefinido                                                                              | indefinido                  | indefinido                  |


## Convertir los tipos de datos

El lenguaje 4D contiene operadores y comandos para convertir entre tipos de datos, cuando dichas conversiones tienen sentido. El lenguaje 4D aplica la verificación de tipos de datos. Por ejemplo, no se puede escribir: "abc"+0.5+!12/25/96!-?00:30:45?. Esto generará errores de sintaxis.

La siguiente tabla lista los tipos de datos básicos, los tipos de datos a los que se pueden convertir y los comandos utilizados para hacerlo:

| Tipos a convertir | en Cadena | en Número | en Fecha | en Hora | en Booleano |
| ----------------- | --------- | --------- | -------- | ------- | ----------- |
| String (1)        |           | Num       | Fecha    | Hora    | Bool        |
| Número (2)        | Cadena    |           |          |         | Bool        |
| Fecha             | Cadena    |           |          |         | Bool        |
| Hora              | Cadena    |           |          |         | Bool        |
| Booleano          |           | Num       |          |         |             |

(1) Las cadenas formateadas en JSON pueden convertirse en datos escalares, objetos o colecciones, utilizando el comando `JSON Parse`.

(2) Los valores de tipo Hora pueden tratarse como números.

**Nota:** además de las conversiones de datos listadas en esta tabla, se pueden obtener conversiones de datos más sofisticadas combinando operadores y otros comandos.
