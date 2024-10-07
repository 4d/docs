---
id: is-nil-pointer
title: Is nil pointer
slug: /commands/is-nil-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Is nil pointer.Syntax-->**Is nil pointer** ( *puntero* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Is nil pointer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| puntero | Puntero | &#x1F852; | Puntero a probar |
| Resultado | Booleano | &#x1F850; | TRUE = Puntero Nil (->[]) FALSE = Puntero válido hacia un objeto existente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is nil pointer.Summary-->El comando **Is nil pointer** devuelve True si el puntero que pasa en *unPuntero* es Nil (*\->\[\]*).<!-- END REF--> Devuelve False en todos los otros casos (puntero hacia un campo, tabla o variable).

Si quiere conocer el nombre de la variable apuntada o el número del campo, puede utilizar el comando [RESOLVE POINTER](resolve-pointer.md).

#### Ejemplo 

```4d
 var $ptr : Pointer
 ...
 If(Is nil pointer($ptr))
 End if
  // is equivalent to
 If($ptr=Null)
 End if
```

#### Ver también 

[Is a variable](is-a-variable.md)  
[RESOLVE POINTER](resolve-pointer.md)  