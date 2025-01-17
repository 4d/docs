---
id: insert-string
title: Insert string
slug: /commands/insert-string
displayed_sidebar: docs
---

<!--REF #_command_.Insert string.Syntax-->**Insert string** ( *fuente* ; *ainsertar* ; *posicion* ) : Text<!-- END REF-->
<!--REF #_command_.Insert string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Text | &#8594;  | Cadena en la cual insertar otra cadena |
| ainsertar | Text | &#8594;  | Cadena a insertar |
| posicion | Integer | &#8594;  | Posición de la inserción |
| Resultado | Text | &#8592; | Cadena resultante |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Insert string.Summary-->Insert string inserta la cadena de caracteres alfanuméricos *ainsertar* en la cadena *fuente* a partir de *posicion* y devuelve la cadena de caracteres resultante.<!-- END REF--> La cadena *ainsertar* se coloca antes del carácter designado por *posicion*. 

Si *ainsertar* es una cadena vacía (""), Insert string devuelve *fuente* sin cambios.

Si *posicion* es mayor a la longitud de *fuente*, *ainsertar* se añade al final de *fuente*. Si *posicion* es inferior a uno (1), *ainsertar* se inserta antes de *fuente*.

Insert string es diferente de [Change string](change-string.md "Change string") en que esta función inserta caracteres en lugar de reemplazarlos.

#### Ejemplo 

El siguiente ejemplo ilustra el uso de Insert string. Los resultados se asignan a la variable *vtResult*.

```4d
 vtResult:=Insert string("El verde";"árbol ";4) // vtResult obtiene "El árbol verde"
 vtResult:=Insert string("Tala";"b";3) // vtResult es igual a "Tabla"
 vtResult:=Insert string("Indenficación";"ti";6) // vtResult es igual a "Indentación"
```

#### Ver también 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Replace string](replace-string.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 231 |
| Hilo seguro | &check; |


