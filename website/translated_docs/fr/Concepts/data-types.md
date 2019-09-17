---
id: data-types
title: Types de données
---

Dans 4D, les données sont gérées selon leur type à deux endroits : dans les champs de la base et dans le langage 4D.

Bien qu'ils soient généralement équivalents, certains types de données de la base ne sont pas disponibles dans le langage et sont automatiquement convertis. A l'inverse, certains types de données sont gérés uniquement par le langage. Le tableau suivant liste tous les types de données disponibles, leur prise en charge et leur déclaration :

| Types de données                             | Database support(1) | Pris en charge par le langage | Déclaration de la variable   |
| -------------------------------------------- | ------------------- | ----------------------------- | ---------------------------- |
| [Alphanumérique](dt_string.md)               | Oui                 | Converti en texte             | -                            |
| [Texte](Concepts/dt_string.md)               | Oui                 | Oui                           | `C_TEXT`, `ARRAY TEXT`       |
| [Date](Concepts/dt_date.md)                  | Oui                 | Oui                           | `C_DATE`, `ARRAY DATE`       |
| [Heure](Concepts/dt_time.md)                 | Oui                 | Oui                           | `C_TIME`, `ARRAY TIME`       |
| [Booléen](Concepts/dt_boolean.md)            | Oui                 | Oui                           | `C_BOOLEAN`, `ARRAY BOOLEAN` |
| [Entier long](Concepts/dt_number.md)         | Oui                 | Converti en entier long       | `ARRAY INTEGER`              |
| [Entier long](Concepts/dt_number.md)         | Oui                 | Oui                           | `C_LONGINT`, `ARRAY LONGINT` |
| [Entier long 64 bits](Concepts/dt_number.md) | Oui (SQL)           | Converti en réel              | -                            |
| [Réel](Concepts/dt_number.md)                | Oui                 | Oui                           | `C_REAL`, `ARRAY REAL`       |
| [Indéfini](Concepts/dt_null_undefined.md)    | -                   | Oui                           | -                            |
| [Null](Concepts/dt_null_undefined.md)        | -                   | Oui                           | -                            |
| [Pointeur](Concepts/dt_pointer.md)           | -                   | Oui                           | `C_POINTER`, `ARRAY POINTER` |
| [Image](Concepts/dt_picture.md)              | Oui                 | Oui                           | `C_PICTURE`, `ARRAY PICTURE` |
| [BLOB](Concepts/dt_blob.md)                  | Oui                 | Oui                           | `C_BLOB`, `ARRAY BLOB`       |
| [Objet](Concepts/dt_object.md)               | Oui                 | Oui                           | `C_OBJECT`, `ARRAY OBJECT`   |
| [Collection](Concepts/dt_collection.md)      | -                   | Oui                           | `C_COLLECTION`               |
| [Variant](Concepts/dt_variant.md)(2)         | -                   | Oui                           | `C_VARIANT`                  |

(1) Note that ORDA handles database fields through objects (entities) and thus, only supports data types available to these objects. For more information, see the [Object](Concepts/dt_object.md) data type description.

(2) Variant is actually not a *data* type but a *variable* type that can contain a value of any other data type.

## Valeurs par défaut

When variables are typed by means of a compiler directive, they receive a default value, which they will keep during the session as long as they have not been assigned.

The default value depends on the variable type and category, its execution context (interpreted or compiled), as well as, for compiled mode, the compilation options defined on the Compiler page of the Database settings:

- Les variables process et interprocess sont toujours positionnées "à zéro" (qui signifie selon les cas 0, chaîne vide, blob vide, pointeur nil, date 00-00-00…)
- Les variables locales sont positionnées : 
    - en mode interprété : à zéro
    - en mode compilé, dépendant de l'option **Initialiser les variables locales** des Propriétés de la base : 
        - à zéro lorsque "à zéro" est sélectionné,
        - à une valeur arbitraire fixe lorsque "à une valeur aberrante" est sélectionné (0x72677267 pour les numériques et les heures, toujours vrai pour les booléens), équivalent de "à zéro" pour les autres,
        - à "non" : pas d'initialisation, c'est-à-dire que tout ce qui est dans la RAM est utilisé pour les variables; c'est le cas des valeurs déjà utilisées pour les autres variables. **Note :** Il est recommandé d'utiliser "à zéro".

The following table illustrates these default values:

| Type        | Interprocess/Process (interprété/compilé), Local (interprété/compilé "à zéro") | Local compilé "aberrant" | Local compilé "non"         |
| ----------- | ------------------------------------------------------------------------------ | ------------------------ | --------------------------- |
| Booléen     | Faux                                                                           | Vrai                     | True (varie)                |
| Date        | 00-00-00                                                                       | 00-00-00                 | 00-00-00                    |
| Entier long | 0                                                                              | 1919382119               | 909540880 (varie)           |
| Heure       | 00:00:00                                                                       | 533161:41:59             | 249345:34:24 (varie)        |
| Image       | picture size=0                                                                 | picture size=0           | picture size=0              |
| Réel        | 0                                                                              | 1.250753659382e+243      | 1.972748538022e-217 (varie) |
| Pointeur    | Nil=true                                                                       | Nil=true                 | Nil=true                    |
| Texte       | ""                                                                             | ""                       | ""                          |
| Blob        | Blob size=0                                                                    | Blob size=0              | Blob size=0                 |
| Objet       | null                                                                           | null                     | null                        |
| Collection  | null                                                                           | null                     | null                        |
| Variant     | undefined                                                                      | undefined                | undefined                   |

## Convertir les types de données

The 4D language contains operators and commands to convert between data types, where such conversions are meaningful. The 4D language enforces data type checking. For example, you cannot write: "abc"+0.5+!12/25/96!-?00:30:45?. This will generate syntax errors.

The following table lists the basic data types, the data types to which they can be converted, and the commands used to do so:

| Types à convertir | en Chaîne | en Numérique | en Date | en Heure | en Booléen |
| ----------------- | --------- | ------------ | ------- | -------- | ---------- |
| Chaîne (1)        |           | Num          | Date    | Heure    | Bool       |
| Numérique (2)     | Chaine    |              |         |          | Bool       |
| Date              | Chaine    |              |         |          | Bool       |
| Heure             | Chaine    |              |         |          | Bool       |
| Booléen           |           | Num          |         |          |            |

(1) Strings formatted in JSON can be converted into scalar data, objects, or collections, using the `JSON Parse` command.

(2) Time values can be treated as numbers.

**Note:** In addition to the data conversions listed in this table, more sophisticated data conversions can be obtained by combining operators and other commands.