---
id: bool
title: Bool
slug: /commands/bool
displayed_sidebar: docs
---

<!--REF #_command_.Bool.Syntax-->**Bool** ( *expresion* ) : Boolean<!-- END REF-->
<!--REF #_command_.Bool.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| expresion | Expression | &#8594;  | Expresión para la cual devolver la forma booleana |
| Resultado | Boolean | &#8592; | Forma booleana de la expresión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Bool.Summary-->El comando **Bool** devuelve la forma booleana de la expresión que se pasó en *expresion*.<!-- END REF-->

El comando puede devolver los siguientes valores, dependiendo del tipo de resultado de la *expresion*:

| **Tipo de la expresión** | **Retorno del comando Bool**         |
| ------------------------ | ------------------------------------ |
| Indefinido               | False                                |
| Nulo                     | False                                |
| Booleano                 | False si falso, de lo contrario True |
| Número                   | False si 0, otro True                |
| Otros tipos              | False                                |

Este comando es útil cuando se espera que el resultado de una expresión sea un booleano, cualquiera que sea el resultado real de su evaluación (por ejemplo, si se evalúa como **nulo** o **indefinido**).

#### Ejemplo 

Selecciona un valor dependiendo del contenido de un atributo de campo de objeto, anticipando el caso en el que falta el atributo:

```4d
 var $married : Text
 $married:=Choose(Bool([Person]data.married);"Married";"Single")
  //"Single" si el atributo "married" no se encuentra en el campo
 ALERT("This person is "+$married)
```

#### Ver también 

[Date](date.md)  
[Num](num.md)  
[String](string.md)  
[Time](time.md)  