---
id: from-qodlyscript-to-4d
title: De QodlyScript al lenguaje 4D
---

Los desarrolladores 4D utilizan la [documentación de Qodly Studio](https://developer.qodly.com/docs/studio/overview) para aprender a diseñar sus formularioss Qodly en Qodly Studio.

Se ofrecen ejemplos de código en [QodlyScript](https://developer.qodly.com/docs/category/qodlyscript), pero como QodlyScript hereda del Lenguaje 4D, no se sentirá perdido. Convertir código QodlyScript a lenguaje 4D es fácil, sólo requiere algunas adaptaciones.

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

## Nombres de comandos y constantes

Los nombres de comandos y constantes de QodlyScript se escriben en mayúsculas y sin espacios. Además, los nombres de las constantes de QodlyScript comienzan con la letra `k`. Puede que necesite adaptar estos elementos de QodlyScript al lenguaje 4D.

- Normalmente, sólo tendrá que convertir los nombres. Por ejemplo, `newCollection` en QodlyScript es `New collection` en lenguaje 4D.
- Sin embargo, algunos comandos han sido renombrados para un mejor cumplimiento, por ejemplo `atan` y `sqrt` son nombres de QodlyScript para los comandos `Arctan` y `Square root` en Lenguaje 4D.

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
