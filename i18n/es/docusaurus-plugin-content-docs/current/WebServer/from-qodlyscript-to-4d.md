---
id: from-qodlyscript-to-4d
title: De QodlyScript al lenguaje 4D
---

4D developers use the [Qodly Studio documentation](https://developer.qodly.com/docs/studio/overview) to learn how to design their Qodly forms in Qodly Studio.

Code examples are provided in [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), but since QodlyScript inherits from the 4D Language, you won't be lost. Convertir código QodlyScript a lenguaje 4D es fácil, sólo requiere algunas adaptaciones.

## Nombres de variables

QodlyScript solo admite variables locales, por lo que las variables en los ejemplos de QodlyScript no llevan el prefijo `$`. En el código 4D, asegúrese de **prefijar los nombres de las variables con $** para que sean identificadas como variables locales por 4D.

## Símbolos y palabras clave

Algunos símbolos básicos, operadores y palabras clave difieren en QodlyScript y deben adaptarse al Lenguaje 4D. Estas se listan a continuación:

| QodlyScript | Lenguaje 4D                                                 | Comentario              |
| ----------- | ----------------------------------------------------------- | ----------------------- |
| ,           | ;                                                           | separador de argumentos |
| =           | :=                                          | operador de asignación  |
| ==          | =                                                           | operador de comparación |
| declare     | #Declare                                                    |                         |
| switch      | Case of                                                     |                         |
| constructor | Class constructor                                           |                         |
| extends     | Class extends                                               |                         |
| end         | End for, End For each, End if, End case, End use, End while |                         |
| forEach     | For each                                                    |                         |
| string      | Text                                                        | tipo de variable        |
| number      | Real                                                        | tipo de variable        |

Algunos otros elementos tienen una capitalización diferente (por ejemplo: `this` vs `This`), pero se pueden pegar directamente en código de 4D.

## Command and Constant names

Los nombres de comandos y constantes de QodlyScript se escriben en mayúsculas y sin espacios. In addition, QodlyScript constant names start with a `k` letter. You might need to adapt these QodlyScript items to the 4D Language.

- Normalmente, sólo tendrá que convertir los nombres. Por ejemplo, `newCollection` en QodlyScript es `New collection` en lenguaje 4D.
- However, some commands have been renamed for a better compliance, for example `atan` and `sqrt` are QodlyScript names for `Arctan` and `Square root` commands in 4D Language.

### Ejemplo

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

- Código 4D equivalente:

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
