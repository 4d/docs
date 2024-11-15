---
id: delete-string
title: Delete string
slug: /commands/delete-string
displayed_sidebar: docs
---

<!--REF #_command_.Delete string.Syntax-->**Delete string** ( *fuente* ; *posicion* ; *numCaracteres* ) : Text<!-- END REF-->
<!--REF #_command_.Delete string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Text | &#8594;  | Cadena de la cual borrar caracteres |
| posicion | Integer | &#8594;  | Primer caracter a borrar |
| numCaracteres | Integer | &#8594;  | Número de caracteres a borrar |
| Resultado | Text | &#8592; | Cadena resultante |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Delete string.Summary-->Delete string borra *numCaracteres* de *fuente*, a partir de *posicion*, y devuelve la cadena resultante.<!-- END REF--> 

Delete string devuelve la misma cadena que *fuente* cuando:

* *fuente* es una cadena vacía
* *posicion* es superior a la longitud de *fuente*
* *numCaracteres* es igual a cero (0)

Si *posicion* es inferior a uno, los caracteres son borrados a partir del inicio de la cadena.

Si *posicion* más *numCaracteres* es igual o mayor a la longitud de *fuente*, los caracteres se borran a partir de *posicion* hasta el final de *fuente*.

#### Ejemplo 

El siguiente ejemplo ilustra el uso de Delete string. Los resultados se asignan a la variable *vtResult*.

```4d
 vtResult:=Delete string("Lamborghini";6;6) // vtResult obtiene "Lambo"
 vtResult:=Delete string("Indentation";6;2) // vtResult obtiene "Indention"
 vtResult:=Delete string(var;3;32000) // vtResult es igual a los dos primeros caracteres de var
```

#### Ver también 

[Change string](change-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  