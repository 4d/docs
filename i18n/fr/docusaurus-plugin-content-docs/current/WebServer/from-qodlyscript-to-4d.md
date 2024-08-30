---
id: from-qodlyscript-to-4d
title: From QodlyScript to 4D Language
---

4D developers use the [Qodly Studio documentation](https://developer.qodly.com/docs/studio/overview) to learn how to design their Qodly forms in Qodly Studio.

Les exemples de code sont fournis en [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), mais étant donné que QodlyScript hérite du langage 4D, vous ne serez pas perdu. Converting QodlyScript code to 4D language is easy, it only requires some adaptations.

## Variable names

QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with `$`. In the 4D code, make sure to **prefix variable names with `$`** so that they are identifed as local variables by 4D.

## Symbols and keywords

Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. They are listed below:

| QodlyScript | 4D Language                                                 | Commentaire             |
| ----------- | ----------------------------------------------------------- | ----------------------- |
| ,           | ;                                                           | argument separator      |
| =           | :=                                          | opérateur d'assignation |
| ==          | =                                                           | comparison operator     |
| declare     | #Declare                                                    |                         |
| switch      | Case of                                                     |                         |
| constructor | Class constructor                                           |                         |
| extends     | Class extends                                               |                         |
| end         | End for, End For each, End if, End case, End use, End while |                         |
| forEach     | For each                                                    |                         |
| string      | Text                                                        | var type                |
| number      | Real                                                        | var type                |

Some other items have a different case (ex: `this` vs `This`) but can be pasted directly in 4D code.

## Command and Constant names

QodlyScript command and constant names are written in camel case without spaces. In addition, QodlyScript constant names start with a `k` letter. You might need to adapt these QodlyScript items to the 4D Language.

- Usually, you will only have to simply convert names. For example, `newCollection` in QodlyScript is `New collection` in 4D Language.
- However, some commands have been renamed for a better compliance, for example `atan` and `sqrt` are QodlyScript names for `Arctan` and `Square root` commands in 4D Language.

### Exemple

- QodlyScript code:

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

- 4D Language equivalent code:

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
