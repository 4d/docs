---
id: data-types
title: Types de données
---

In 4D, data are handled according to their type in two places: database fields and the 4D language.

Although they are usually equivalent, some data types available at the database level are not directly available in the language and are automatically converted. Conversely, some data types can only be handled through the language. The following table lists all available data types and how they are supported/declared:

| Types de données                           | Database support(*) | Language support     | Variable declaration         |
| ------------------------------------------ | ------------------- | -------------------- | ---------------------------- |
| [Alphanumeric](dt_string.md)               | Yes                 | Converted to text    | -                            |
| [Text](Concepts/dt_string.md)              | Yes                 | Yes                  | `C_TEXT`, `ARRAY TEXT`       |
| [Date](Concepts/dt_date.md)                | Yes                 | Yes                  | `C_DATE`, `ARRAY DATE`       |
| [Time](Concepts/dt_time.md)                | Yes                 | Yes                  | `C_TIME`, `ARRAY TIME`       |
| [Boolean](Concepts/dt_boolean.md)          | Yes                 | Yes                  | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Entier long](Concepts/dt_number.md)       | Yes                 | Converted to longint | `ARRAY INTEGER`              |
| [Longint](Concepts/dt_number.md)           | Yes                 | Yes                  | `C_LONGINT`, `ARRAY LONGINT` |
| [Longint 64 bits](Concepts/dt_number.md)   | Yes (SQL)           | Converted to real    | -                            |
| [Real](Concepts/dt_number.md)              | Yes                 | Yes                  | `C_REAL`, `ARRAY REAL`       |
| [Undefined](Concepts/dt_null_undefined.md) | -                   | Yes                  | -                            |
| [Null](Concepts/dt_null_undefined.md)      | -                   | Yes                  | -                            |
| [Pointer](Concepts/dt_pointer.md)          | -                   | Yes                  | `C_POINTER`, `ARRAY POINTER` |
| [Picture](Concepts/dt_picture.md)          | Yes                 | Yes                  | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                | Yes                 | Yes                  | `C_BLOB`, `ARRAY BLOB`       |
| [Object](Concepts/dt_object.md)            | Yes                 | Yes                  | `C_OBJECT`, `ARRAY OBJECT`   |
| [Collection](Concepts/dt_collection.md)    | -                   | Yes                  | `C_COLLECTION`               |

(*)Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the Object data type description.

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

## Convertir les types de données

Le langage de 4D comporte des fonctions et des opérateurs vous permettant de convertir des types de données en d’autres types, dans la mesure où de telles conversions ont un sens. 4D assure la vérification des types de données. Ainsi, vous ne pouvez pas écrire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette opération génère une erreur de syntaxe. 

Le tableau ci-dessous liste les types de données pouvant être convertis, le type dans lequel ils peuvent être convertis, ainsi que les fonctions 4D à utiliser :

| Types à convertir | en Chaîne | en Numérique | en Date | en Heure | en Booléen |
| ----------------- | --------- | ------------ | ------- | -------- | ---------- |
| Chaîne (1)        |           | Num          | Date    | Heure    | Bool       |
| Numérique (2)     | Chaine    |              |         |          | Bool       |
| Date              | Chaine    |              |         |          | Bool       |
| Heure             | Chaine    |              |         |          | Bool       |
| Booléen           |           | Num          |         |          |            |

(1) Les chaînes formatées en JSON peuvent être converties en données scalaires, objets ou collections à l'aide de la commande `JSON Parse`. (2) Les valeurs de type Heure peuvent être utilisées en tant que numériques.

**Note :** Ce tableau ne traite pas les conversions de données plus complexes obtenues à l'aide d'une combinaison d'opérateurs et d'autres commandes.