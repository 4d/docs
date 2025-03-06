---
id: change-string
title: Change string
slug: /commands/change-string
displayed_sidebar: docs
---

<!--REF #_command_.Change string.Syntax-->**Change string** ( *fuente* ; *nuevo* ; *posicion* ) : Text<!-- END REF-->
<!--REF #_command_.Change string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Text | &#8594;  | Cadena original |
| nuevo | Text | &#8594;  | Nuevos caracteres |
| posicion | Integer | &#8594;  | Posición donde comenzar los cambios |
| Resultado | Text | &#8592; | Cadena resultante |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Change string.Summary-->Change string devuelve una cadena resultante de cambiar los caracteres, en la cadena *fuente*, a partir de *posicion* con los caracteres en *nuevo*.<!-- END REF--> 

Si *nuevo* es una cadena vacía (""), Change string devuelve *fuente* sin cambios. Change string siempre devuelve una cadena de la misma longitud que *fuente*. Si *posicion* es inferior o superior a la longitud de *fuente*, Change string devuelve *fuente*.

Change string se diferencia de [Insert string](insert-string.md "Insert string") en que reemplaza los caracteres en lugar de insertarlos. 

#### Ejemplo 

El siguiente ejemplo ilustra el uso de Change string. Los resultados se asignan a la variable *vtResult*.

```4d
 vtResult:=Change string("Acme";"CME";2) // vtResult es igual a "ACME"
 vtResult:=Change string("noviembre";"dic";1) // vtResult es igual a "diciembre"
```

#### Ver también 

[Delete string](delete-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 234 |
| Hilo seguro | &check; |


