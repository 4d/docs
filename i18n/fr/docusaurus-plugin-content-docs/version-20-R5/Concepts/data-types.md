---
id: data-types
title: Types de données
---

Dans 4D, les données sont gérées selon leur type à deux endroits : dans les champs de la base et dans le langage 4D.

Bien qu'ils soient généralement équivalents, certains types de données de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de données sont gérés uniquement par le langage. Le tableau suivant liste tous les types de données disponibles, leur prise en charge et leur déclaration :

| Types de données                                        | Pris en charge par la base(1) | Pris en charge par le langage | [`var` declaration](variables.md#using-the-var-keyword) | [`C_` or `ARRAY` declaration](variables.md#using-a-c_-directive) |
| ------------------------------------------------------- | ------------------------------------------------ | ----------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alphanumeric](dt_string.md)                            | Oui                                              | Converti en texte             | -                                                       | *                                                                |
| [Text](Concepts/dt_string.md)                           | Oui                                              | Oui                           | `Text`                                                  | `C_TEXT`, `ARRAY TEXT`                                           |
| [Date](Concepts/dt_date.md)                             | Oui                                              | Oui                           | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Time](Concepts/dt_time.md)                             | Oui                                              | Oui                           | `Time`                                                  | `C_TIME`, `ARRAY TIME`                                           |
| [Boolean](Concepts/dt_boolean.md)                       | Oui                                              | Oui                           | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)                        | Oui                                              | Converti en entier long       | `Entier`                                                | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)                        | Oui                                              | Oui                           | `Entier`                                                | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Longint 64 bits](Concepts/dt_number.md)                | Oui (SQL)                     | Converti en réel              | -                                                       | *                                                                |
| [Real](Concepts/dt_number.md)                           | Oui                                              | Oui                           | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Undefined](Concepts/dt_null_undefined.md)              | -                                                | Oui                           | *                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)                   | *                                                | Oui                           | -                                                       | *                                                                |
| [Pointer](Concepts/dt_pointer.md)                       | -                                                | Oui                           | `Pointer`                                               | `C_POINTER`, `ARRAY POINTER`                                     |
| [Picture](Concepts/dt_picture.md)                       | Oui                                              | Oui                           | `Picture`                                               | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                             | Oui                                              | Oui                           | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                           |
| [Object](Concepts/dt_object.md)                         | Oui                                              | Oui                           | `Object`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collection](Concepts/dt_collection.md)                 | *                                                | Oui                           | `Collection`                                            | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2) | -                                                | Oui                           | `Variant`                                               | `C_VARIANT`                                                      |

(1) A noter que ORDA gère les champs de la base via des objets (entités). Par conséquent, seuls les types de données disponibles pour ces objets sont pris en charge. For more information, see the [Object](Concepts/dt_object.md) data type description.

(2) Variant is actually not a _data_ type but a _variable_ type that can contain a value of any other data type.

## Valeurs par défaut

When [variables](variables.md) or [parameters](parameters.md) are typed by means of an [explicit declaration](variables.md#declaring-variables), they receive a default value, which they will keep during the session as long as they have not been assigned.

La valeur par défaut dépend du type de variable :

| Type       | La valeur par défaut                     |
| ---------- | ---------------------------------------- |
| Booléen    | False                                    |
| Date       | 00-00-00                                 |
| Longint    | 0                                        |
| Time       | 00:00:00 |
| Picture    | picture size=0                           |
| Real       | 0                                        |
| Pointer    | Nil=true                                 |
| Text       | ""                                       |
| Blob       | Blob size=0                              |
| Object     | Null                                     |
| Collection | Null                                     |
| Variant    | undefined                                |

### Null comme valeur par défaut

Variables of type Object, Collection, Pointer, and Picture have **null** as default value, but actually get an intermediary status when declared and not assigned. They _behave like_ **null** values, but with some differences, generating less errors when the code tries do access them.

## Convertir les types de données

Le langage de 4D comporte des fonctions et des opérateurs vous permettant de convertir des types de données en d’autres types, dans la mesure où de telles conversions ont un sens. 4D assure la vérification des types de données. Ainsi, vous ne pouvez pas écrire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette opération génère une erreur de syntaxe.

Le tableau ci-dessous liste les types de données pouvant être convertis, le type dans lequel ils peuvent être convertis, ainsi que les fonctions 4D à utiliser :

| Types à convertir                | en Chaîne | en Numérique | en Date | en Heure | en Booléen |
| -------------------------------- | --------- | ------------ | ------- | -------- | ---------- |
| Chaîne (1)    |           | `Num`        | `Date`  | `Time`   | `Bool`     |
| Numérique (2) | `Chaîne`  |              |         |          | `Bool`     |
| Date                             | `Chaîne`  |              |         |          | `Bool`     |
| Time                             | `Chaîne`  |              |         |          | `Bool`     |
| Boolean                          |           | `Num`        |         |          |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Les valeurs de type Heure peuvent être utilisées en tant que numériques.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.
