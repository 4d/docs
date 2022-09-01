---
id: data-types
title: Types de données
---

Dans 4D, les données sont gérées selon leur type à deux endroits : dans les champs de la base et dans le langage 4D.

Bien qu'ils soient généralement équivalents, certains types de données de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de données sont gérés uniquement par le langage. Le tableau suivant liste tous les types de données disponibles, leur prise en charge et leur déclaration :

| Types de données                             | Pris en charge par la base(1) | Pris en charge par le langage | [déclaration `var`](variables.md#using-the-var-keyword) | [déclaration `C_` ou `ARRAY`](variables.md#using-a-c_-directive) |
| -------------------------------------------- | ----------------------------- | ----------------------------- | ------------------------------------------------------- | ---------------------------------------------------------------- |
| [Alphanumérique](dt_string.md)               | Oui                           | Converti en texte             | -                                                       | -                                                                |
| [Text](Concepts/dt_string.md)                | Oui                           | Oui                           | `Text`                                                  | `C_TEXT`, `ARRAY TEXT`                                           |
| [Date](Concepts/dt_date.md)                  | Oui                           | Oui                           | `Date`                                                  | `C_DATE`, `ARRAY DATE`                                           |
| [Heure](Concepts/dt_time.md)                 | Oui                           | Oui                           | `Heure`                                                 | `C_TIME`, `ARRAY TIME`                                           |
| [Boolean](Concepts/dt_boolean.md)            | Oui                           | Oui                           | `Boolean`                                               | `C_BOOLEAN`, `ARRAY BOOLEAN`                                     |
| [Integer](Concepts/dt_number.md)             | Oui                           | Converti en entier long       | `Integer`                                               | `ARRAY INTEGER`                                                  |
| [Longint](Concepts/dt_number.md)             | Oui                           | Oui                           | `Integer`                                               | `C_LONGINT`, `ARRAY LONGINT`                                     |
| [Entier long 64 bits](Concepts/dt_number.md) | Oui (SQL)                     | Converti en réel              | -                                                       | -                                                                |
| [Real](Concepts/dt_number.md)                | Oui                           | Oui                           | `Real`                                                  | `C_REAL`, `ARRAY REAL`                                           |
| [Indéfini](Concepts/dt_null_undefined.md)    | -                             | Oui                           | -                                                       | -                                                                |
| [Null](Concepts/dt_null_undefined.md)        | -                             | Oui                           | -                                                       | -                                                                |
| [Pointeurs](Concepts/dt_pointer.md)          | -                             | Oui                           | `Pointeurs`                                             | `C_POINTER`, `ARRAY POINTER`                                     |
| [Images](Concepts/dt_picture.md)             | Oui                           | Oui                           | `Images`                                                | `C_PICTURE`, `ARRAY PICTURE`                                     |
| [BLOB](Concepts/dt_blob.md)                  | Oui                           | Oui                           | `Blob`, `4D.Blob`                                       | `C_BLOB`, `ARRAY BLOB`                                           |
| [Object](Concepts/dt_object.md)              | Oui                           | Oui                           | `Object`                                                | `C_OBJECT`, `ARRAY OBJECT`                                       |
| [Collections](Concepts/dt_collection.md)     | -                             | Oui                           | `Collections`                                           | `C_COLLECTION`                                                   |
| [Variant](Concepts/dt_variant.md)(2)         | -                             | Oui                           | `Variant`                                               | `C_VARIANT`                                                      |

(1) A noter que ORDA gère les champs de la base via des objets (entités). Par conséquent, seuls les types de données disponibles pour ces objets sont pris en charge. Pour plus d'informations, veuillez vous reporter à la description du type [Objet](Concepts/dt_object.md).

(2) Le variant n'est pas un type de *données* un type de *variable* qui peut contenir une valeur de n'importe quel autre type.

## Valeurs par défaut

Au moment de leur typage via une directive de compilation, les variables reçoivent une valeur par défaut, qu'elles conserveront au cours de la session tant qu'elles n'auront pas été affectées.

La valeur par défaut dépend du type de variable :

| Type        | La valeur par défaut |
| ----------- | -------------------- |
| Booléen     | False                |
| Date        | 00-00-00             |
| Longint     | 0                    |
| Heure       | 00:00:00             |
| Images      | picture size=0       |
| Real        | 0                    |
| Pointeurs   | Nil=true             |
| Text        | ""                   |
| Blob        | Blob size=0          |
| Object      | Null                 |
| Collections | Null                 |
| Variant     | undefined            |


## Convertir les types de données

Le langage de 4D comporte des fonctions et des opérateurs vous permettant de convertir des types de données en d’autres types, dans la mesure où de telles conversions ont un sens. 4D assure la vérification des types de données. Ainsi, vous ne pouvez pas écrire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette opération génère une erreur de syntaxe.

Le tableau ci-dessous liste les types de données pouvant être convertis, le type dans lequel ils peuvent être convertis, ainsi que les fonctions 4D à utiliser :

| Types à convertir | en Chaîne | en Numérique | en Date | en Heure | en Booléen |
| ----------------- | --------- | ------------ | ------- | -------- | ---------- |
| Chaîne (1)        |           | `Num`        | `Date`  | `Heure`  | `Bool`     |
| Numérique (2)     | `String`  |              |         |          | `Bool`     |
| Date              | `String`  |              |         |          | `Bool`     |
| Heure             | `String`  |              |         |          | `Bool`     |
| Boolean           |           | `Num`        |         |          |            |

(1) Les chaînes formatées en JSON peuvent être converties en données scalaires, objets ou collections à l'aide de la commande `JSON Parse`.

(2) Les valeurs de type Heure peuvent être utilisées en tant que numériques.

**Note :** Ce tableau ne traite pas les conversions de données plus complexes obtenues à l'aide d'une combinaison d'opérateurs et d'autres commandes.
