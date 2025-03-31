---
id: data-types
title: Types de données
---

Dans 4D, les données sont gérées selon leur type à deux endroits : dans les champs de la base et dans le langage 4D.

Bien qu'ils soient généralement équivalents, certains types de données de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de données sont gérés uniquement par le langage. Le tableau suivant liste tous les types de données disponibles, leur prise en charge et leur déclaration :

| Types de données                           | Pris en charge par la base(1) | Pris en charge par le langage | Déclaration de la variable   |
| ------------------------------------------ | ----------------------------- | ----------------------------- | ---------------------------- |
| [Alphanumérique](dt_string.md)             | Oui                           | Converti en texte             | -                            |
| [Text](Concepts/dt_string.md)              | Oui                           | Oui                           | `C_TEXT`, `ARRAY TEXT`       |
| [Date](Concepts/dt_date.md)                | Oui                           | Oui                           | `C_DATE`, `ARRAY DATE`       |
| [Time](Concepts/dt_time.md)                | Oui                           | Oui                           | `C_TIME`, `ARRAY TIME`       |
| [Boolean](Concepts/dt_boolean.md)          | Oui                           | Oui                           | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Integer](Concepts/dt_number.md)           | Oui                           | Converti en entier long       | `ARRAY INTEGER`              |
| [Longint](Concepts/dt_number.md)           | Oui                           | Oui                           | `C_LONGINT`, `ARRAY LONGINT` |
| [Longint 64 bits](Concepts/dt_number.md)   | Oui (SQL)                     | Converti en réel              | -                            |
| [Real](Concepts/dt_number.md)              | Oui                           | Oui                           | `C_REAL`, `ARRAY REAL`       |
| [Undefined](Concepts/dt_null_undefined.md) | -                             | Oui                           | -                            |
| [Null](Concepts/dt_null_undefined.md)      | -                             | Oui                           | -                            |
| [Pointer](Concepts/dt_pointer.md)          | -                             | Oui                           | `C_POINTER`, `ARRAY POINTER` |
| [Picture](Concepts/dt_picture.md)          | Oui                           | Oui                           | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                | Oui                           | Oui                           | `C_BLOB`, `ARRAY BLOB`       |
| [Object](Concepts/dt_object.md)            | Oui                           | Oui                           | `C_OBJECT`, `ARRAY OBJECT`   |
| [Collection](Concepts/dt_collection.md)    | -                             | Oui                           | `C_COLLECTION`               |
| [Variant](Concepts/dt_variant.md)(2)       | -                             | Oui                           | `C_VARIANT`                  |

(1) A noter que ORDA gère les champs de la base via des objets (entités). Par conséquent, seuls les types de données disponibles pour ces objets sont pris en charge. Pour plus d'informations, veuillez vous reporter à la description du type [Objet](Concepts/dt_object.md).

(2) Le variant n'est pas un type de *données* un type de *variable* qui peut contenir une valeur de n'importe quel autre type.

## Valeurs par défaut

Au moment de leur typage via une directive de compilation, les variables reçoivent une valeur par défaut, qu'elles conserveront au cours de la session tant qu'elles n'auront pas été affectées.

La valeur par défaut dépend du type et de la catégorie de la variable, du contexte d'exécution (interprété ou compilé), ainsi que, pour le mode compilé, des options de compilation définies dans la Page Compilateur des Propriétés de la base :

- Les variables process et interprocess sont toujours positionnées "à zéro" (qui signifie selon les cas 0, chaîne vide, blob vide, pointeur nil, date 00-00-00…)
- Les variables locales sont positionnées :
    - en mode interprété : à zéro
    - en mode compilé, dépendant de l'option **Initialiser les variables locales** des Propriétés de la base :
        - à zéro lorsque "à zéro" est sélectionné,
        - à une valeur arbitraire fixe lorsque "à une valeur aberrante" est sélectionné (0x72677267 pour les numériques et les heures, toujours vrai pour les booléens), équivalent de "à zéro" pour les autres,
        - à "non" : pas d'initialisation, c'est-à-dire que tout ce qui est dans la RAM est utilisé pour les variables; c'est le cas des valeurs déjà utilisées pour les autres variables. **Note :** Il est recommandé d'utiliser "à zéro".

Le tableau suivant illustre ces valeurs par défaut :

| Type       | Interprocess/Process (interprété/compilé), Local (interprété/compilé "à zéro") | Local compilé "aberrant" | Local compilé "non"         |
| ---------- | ------------------------------------------------------------------------------ | ------------------------ | --------------------------- |
| Booleen    | False                                                                          | True                     | True (varie)                |
| Date       | 00-00-00                                                                       | 00-00-00                 | 00-00-00                    |
| Integer    | 0                                                                              | 1919382119               | 909540880 (varie)           |
| Time       | 00:00:00                                                                       | 533161:41:59             | 249345:34:24 (varie)        |
| Picture    | picture size=0                                                                 | picture size=0           | picture size=0              |
| Real       | 0                                                                              | 1.250753659382e+243      | 1.972748538022e-217 (varie) |
| Pointer    | Nil=true                                                                       | Nil=true                 | Nil=true                    |
| Text       | ""                                                                             | ""                       | ""                          |
| Blob       | Blob size=0                                                                    | Blob size=0              | Blob size=0                 |
| Object     | Null                                                                           | Null                     | Null                        |
| Collection | Null                                                                           | Null                     | Null                        |
| Variant    | undefined                                                                      | undefined                | undefined                   |


## Convertir les types de données

Le langage de 4D comporte des fonctions et des opérateurs vous permettant de convertir des types de données en d’autres types, dans la mesure où de telles conversions ont un sens. 4D assure la vérification des types de données. Ainsi, vous ne pouvez pas écrire : "abc"+0.5+!25/12/96!-?00:30:45?, car cette opération génère une erreur de syntaxe.

Le tableau ci-dessous liste les types de données pouvant être convertis, le type dans lequel ils peuvent être convertis, ainsi que les fonctions 4D à utiliser :

| Types à convertir | en Chaîne | en Numérique | en Date | en Heure | en Booléen |
| ----------------- | --------- | ------------ | ------- | -------- | ---------- |
| Chaîne (1)        |           | Num          | Date    | Time     | Bool       |
| Numérique (2)     | Text      |              |         |          | Bool       |
| Date              | Text      |              |         |          | Bool       |
| Time              | Text      |              |         |          | Bool       |
| Boolean           |           | Num          |         |          |            |

(1) Les chaînes formatées en JSON peuvent être converties en données scalaires, objets ou collections à l'aide de la commande `JSON Parse`.

(2) Les valeurs de type Heure peuvent être utilisées en tant que numériques.

**Note :** Ce tableau ne traite pas les conversions de données plus complexes obtenues à l'aide d'une combinaison d'opérateurs et d'autres commandes.
