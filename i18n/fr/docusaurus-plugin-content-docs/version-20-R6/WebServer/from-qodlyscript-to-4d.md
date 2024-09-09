---
id: from-qodlyscript-to-4d
title: De QodlyScript au langage 4D
---

Les développeurs 4D utilisent la [documentation de Qodly Studio](https://developer.qodly.com/docs/studio/overview) pour savoir comment concevoir leurs pages Qodly dans Qodly Studio.

Les exemples de code sont fournis en [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), mais étant donné que QodlyScript hérite du langage 4D, vous ne serez pas perdu. Convertir du code QodlyScript en langage 4D est facile, cela ne nécessite que quelques adaptations.

## Noms des variables

QodlyScript ne prend en charge que des variables locales, donc les variables dans les exemples QodlyScript ne sont pas préfixées par `$`. Dans le code 4D, assurez-vous de **préfixer les noms des variables avec `$`** afin qu'elles soient identifiées comme des variables locales par 4D.

## Symboles et mots-clés

Certains symboles, opérateurs et mots-clés de base diffèrent dans QodlyScript et doivent être adaptés au langage 4D. Ils sont listés ci-dessous:

| QodlyScript | Langage 4D                                                  | Commentaire              |
| ----------- | ----------------------------------------------------------- | ------------------------ |
| ,           | ;                                                           | séparateur d'argument    |
| =           | :=                                          | opérateur d'assignation  |
| ==          | =                                                           | opérateur de comparaison |
| declare     | #Declare                                                    |                          |
| switch      | Case of                                                     |                          |
| constructor | Class constructor                                           |                          |
| extends     | Class extends                                               |                          |
| end         | End for, End For each, End if, End case, End use, End while |                          |
| forEach     | For each                                                    |                          |
| string      | Text                                                        | type de var              |
| number      | Real                                                        | type de var              |

Certains autres éléments ont une casse différente (par exemple : `this` vs `This`) mais peuvent être collés directement dans le code 4D.

## Noms de commandes et de constantes

Les noms des commandes et des constantes QodlyScript sont écrits en camel case sans espaces. De plus, les noms de constantes de QodlyScript commencent par la lettre `k`. Vous devrez peut-être adapter ces éléments QodlyScript au langage 4D.

- Généralement, vous devrez simplement convertir les noms. Par exemple, `newCollection` dans QodlyScript est `New collection` dans le langage 4D.
- Cependant, certaines commandes ont été renommées pour une meilleure conformité, par exemple `atan` et `sqrt` sont les noms en QodlyScript des commandes `Arctan` et `Square root` en langage 4D.

### Exemple

- Code QodlyScript :

```qs
 declare(entitySelection : 4D.EntitySelection)  
 var dataClass : 4D.DataClass
 var entity, duplicate : 4D.Entity
 var status : object
 dataClass=entitySelection.getDataClass()
 forEach(entity,entitySelection)
    duplicate=dataClass.new()
    duplicate.fromObject(entity.toObject())
    duplicate[dataClass.getInfo().primaryKey]=null
    status=duplicate.save()
 end
```

- Code équivalent en langage 4D :

```4d
 #DECLARE ( $entitySelection : 4D.EntitySelection )  
 var $dataClass : 4D.DataClass
 var $entity; $duplicate : 4D.Entity
 var $status : Object
 $dataClass:=$entitySelection.getDataClass()
 For each($entity;$entitySelection)
    $duplicate:=$dataClass.new()
    $duplicate.fromObject($entity.toObject())
    $duplicate[$dataClass.getInfo().primaryKey]:=Null
    $status:=$duplicate.save()
 End for each

```
