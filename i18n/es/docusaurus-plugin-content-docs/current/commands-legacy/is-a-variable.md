---
id: is-a-variable
title: Is a variable
slug: /commands/is-a-variable
displayed_sidebar: docs
---

<!--REF #_command_.Is a variable.Syntax-->**Is a variable** ( *puntero* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a variable.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| puntero | Pointer | &#8594;  | Puntero a probar |
| Resultado | Boolean | &#8592; | TRUE = Puntero apunta a una variable FALSE = Puntero no apunta a una variable |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is a variable.Summary-->El comando Is a variable devuelve True si el puntero pasado en *unPuntero* referencia a una variable definida.<!-- END REF--> Devuelve False en todos los otros casos (puntero hacia un campo o tabla, puntero Nil, etc.).

Si quiere conocer el nombre de la variable que está siendo apuntada o el número del campo, puede utilizar el comando [RESOLVE POINTER](resolve-pointer.md).

#### Ver también 

[Is nil pointer](is-nil-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 294 |
| Hilo seguro | &check; |


