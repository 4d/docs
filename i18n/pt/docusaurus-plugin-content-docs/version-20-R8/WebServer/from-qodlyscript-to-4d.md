---
id: from-qodlyscript-to-4d
title: De QodlyScript à linguagem 4D
---

4D developers use the [Qodly Studio documentation](https://developer.qodly.com/docs/studio/overview) to learn how to design their Qodly forms in Qodly Studio.

Code examples are provided in [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), but since QodlyScript inherits from the 4D Language, you won't be lost. Converting QodlyScript code to 4D language is easy, it only requires some adaptations.

## Nomes de variáveis

QodlyScript only support local variables, so variables in QodlyScript examples are not prefixed with `$`. No código 4D, certifique-se de **prefixar os nomes das variáveis com `$`** para elas serem identificadas como variáveis locais pelo 4D.

## Símbolos e palavras-chave

Some basic symbols, operators, and keywords differ in QodlyScript and must be adapted to the 4D Language. Eles estão listados abaixo:

| QodlyScript | Línguagem 4D                                                | Comentário              |
| ----------- | ----------------------------------------------------------- | ----------------------- |
| ,           | ;                                                           | separador de argumentos |
| =           | :=                                          | operador de atribuição  |
| ==          | =                                                           | operador de comparação  |
| declare     | #Declare                                                    |                         |
| switch      | Case of                                                     |                         |
| constructor | Class constructor                                           |                         |
| extends     | Class extends                                               |                         |
| end         | End for, End For each, End if, End case, End use, End while |                         |
| forEach     | For each                                                    |                         |
| string      | Text                                                        | var type                |
| number      | Real                                                        | var type                |

Some other items have a different case (ex: `this` vs `This`) but can be pasted directly in 4D code.

## Nomes de comandos e constantes

QodlyScript command and constant names are written in camel case without spaces. Além disso, os nomes das constantes QodlyScript começam com a letra `k`. You might need to adapt these QodlyScript items to the 4D Language.

- Normalmente, você só precisará converter os nomes. Por exemplo, `newCollection` em QodlyScript é `New collection` em Linguagem 4D.
- However, some commands have been renamed for a better compliance, for example `atan` and `sqrt` are QodlyScript names for `Arctan` and `Square root` commands in 4D Language.

### Exemplo

- Código QodlyScript:

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

- Código 4D equivalente no linguajem:

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
