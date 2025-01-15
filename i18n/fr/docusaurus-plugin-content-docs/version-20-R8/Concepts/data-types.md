---
id: data-types
title: Types de données
---

Dans 4D, les données sont gérées selon leur type à deux endroits : dans les champs de la base et dans le langage 4D.

Bien qu'ils soient généralement équivalents, certains types de données de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de données sont gérés uniquement par le langage. Le tableau suivant liste tous les types de données disponibles, leur prise en charge et leur déclaration :

| Types de données                                        | Pris en charge par la base(1) | Pris en charge par le langage | [Déclaration `var`](variables.md#using-the-var-keyword) | [Déclaration `ARRAY`](arrays.md) |
| ------------------------------------------------------- | ------------------------------------------------ | ----------------------------- | ------------------------------------------------------- | -------------------------------- |
| [Alphanumérique](dt_string.md)                          | Oui                                              | Converti en texte             | -                                                       | -                                |
| [Text](Concepts/dt_string.md)                           | Oui                                              | Oui                           | `Text`                                                  | `ARRAY TEXT`                     |
| [Date](Concepts/dt_date.md)                             | Oui                                              | Oui                           | `Date`                                                  | `ARRAY DATE`                     |
| [Time](Concepts/dt_time.md)                             | Oui                                              | Oui                           | `Time`                                                  | `ARRAY TIME`                     |
| [Boolean](Concepts/dt_boolean.md)                       | Oui                                              | Oui                           | `Boolean`                                               | `ARRAY BOOLEAN`                  |
| [Integer](Concepts/dt_number.md)                        | Oui                                              | Converti en entier long       | `Integer`                                               | `ARRAY INTEGER`                  |
| [Longint](Concepts/dt_number.md)                        | Oui                                              | Oui                           | `Integer`                                               | `ARRAY LONGINT`                  |
| [Longint 64 bits](Concepts/dt_number.md)                | Oui (SQL)                     | Converti en réel              | -                                                       | -                                |
| [Real](Concepts/dt_number.md)                           | Oui                                              | Oui                           | `Real`                                                  | `ARRAY REAL`                     |
| [Undefined](Concepts/dt_null_undefined.md)              | -                                                | Oui                           | -                                                       | -                                |
| [Null](Concepts/dt_null_undefined.md)                   | -                                                | Oui                           | -                                                       | -                                |
| [Pointer](Concepts/dt_pointer.md)                       | -                                                | Oui                           | `Pointer`                                               | `ARRAY POINTER`                  |
| [Picture](Concepts/dt_picture.md)                       | Oui                                              | Oui                           | `Picture`                                               | `ARRAY PICTURE`                  |
| [BLOB](Concepts/dt_blob.md)                             | Oui                                              | Oui                           | `Blob`, `4D.Blob`                                       | `ARRAY BLOB`                     |
| [Object](Concepts/dt_object.md)                         | Oui                                              | Oui                           | `Object`                                                | `ARRAY OBJECT`                   |
| [Collection](Concepts/dt_collection.md)                 | -                                                | Oui                           | `Collection`                                            |                                  |
| [Variant](Concepts/dt_variant.md)(2) | -                                                | Oui                           | `Variant`                                               |                                  |

(1) A noter que ORDA gère les champs de la base via des objets (entités). Par conséquent, seuls les types de données disponibles pour ces objets sont pris en charge. Pour plus d'informations, veuillez vous reporter à la description du type [Object](Concepts/dt_object.md).

(2) Variant n'est pas un type de *données* à proprement parler mais un type de *variable* qui peut contenir une valeur de n'importe quel autre type de données.

## Valeurs par défaut

Lorsque les [variables](variables.md) ou les [paramètres](parameters.md) sont typés au moyen d'une [déclaration explicite](variables.md#déclaration-des-variables), ils reçoivent une valeur par défaut, qu'ils conserveront au cours de la session tant qu'ils n'auront pas été assignés.

La valeur par défaut dépend du type de variable :

| Type       | La valeur par défaut                     |
| ---------- | ---------------------------------------- |
| Booleen    | False                                    |
| Date       | 00-00-00                                 |
| Integer    | 0                                        |
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

Les variables de type Object, Collection, Pointer et Picture ont **null** comme valeur par défaut, mais ont en fait un statut intermédiaire lorsqu'elles sont déclarées et non assignées. Elles *se comportent comme* des valeurs **null**, mais avec quelques différences, générant moins d'erreurs lorsque le code tente d'y accéder.

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

(1) Les chaînes formatées en JSON peuvent être converties en données scalaires, objets ou collections à l'aide de la commande `JSON Parse`.

(2) Les valeurs de type Heure peuvent être utilisées en tant que numériques.

**Note :** Ce tableau ne traite pas les conversions de données plus complexes obtenues à l'aide d'une combinaison d'opérateurs et d'autres commandes.
