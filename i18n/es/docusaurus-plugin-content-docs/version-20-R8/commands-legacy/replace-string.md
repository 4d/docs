---
id: replace-string
title: Replace string
slug: /commands/replace-string
displayed_sidebar: docs
---

<!--REF #_command_.Replace string.Syntax-->**Replace string** ( *fuente* ; *obsoleta* ; *nueva* {; *reemplazos*}{; *} ) : Text<!-- END REF-->
<!--REF #_command_.Replace string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Text | &#8594;  | Cadena original |
| obsoleta | Text | &#8594;  | Caracteres a reemplazar |
| nueva | Text | &#8594;  | Cadena de reemplazo (si la cadena está vacía, se borran todas las ocurrencias) |
| reemplazos | Integer | &#8594;  | Número de reemplazos a efectuar Si se omite, se reemplazan todas las ocurrencias |
| * | Operador | &#8594;  | Si se pasa: evaluación basada en los códigos de los caracteres |
| Resultado | Text | &#8592; | Cadena resultante |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Replace string.Summary-->Replace string devuelve una cadena de caracteres resultante de reemplazar *obsoleto* por *nuevo* en *fuente*.<!-- END REF-->

Si *nuevo* es una cadena vacía (""), Replace string borra cada ocurrencia de *obsoleto* en *fuente*.

Si se especifica *reemplazos*, Replace string sólo reemplazará el número de ocurrencias especificado de *obsoleto*, a partir del primer carácter de *fuente*. Si no se especifica *reemplazos*, se reemplazan todas las ocurrencias de *obsoleto*.

Si *reemplazos* es una cadena vacía, Replace string devuelve *fuente* intacto.

Por defecto, el comando no tiene en cuenta si los caracteres están en mayúsculas o minúsculas o si están o no acentuados (a=A, a=à, etc.). Si pasa un asterisco *\** como último parámetro, indica que la evaluación de los caracteres debe ser diacrítica, en otras palabras, debe tener en cuenta las mayúsculas, minúsculas y caracteres acentuados (a#A, a#à...).   
  
Por defecto, el comando hace comparaciones globales teniendo en cuenta particularidades lingüísticas y de las letras que pueden escribirse con uno o más caracteres (por ejemplo æ = ae). Por otra parte, no es diacrítico (a=A, a=à, etc.) y no tiene en cuenta los caracteres "ignorables" tales como los caracteres cuyo código es < 9 (especificación Unicode).   
  
Para modificar este funcionamiento, pase como último parámetro *\**. En este caso, las comparaciones estarán basadas en códigos de caracteres. Debe pasar el parámetro *\**:

* Si quiere reemplazar los caracteres especiales, utilizados por ejemplo como delimitadores (Char(1)...),
* Si el reemplazo de caracteres debe tener en cuenta las mayúsculas, minúsculas y los caracteres acentuados (a#A, a#à, etc.).  
Note que en este modo, la evaluación no maneja variaciones de escritura de las palabras.

**Nota:** en 4D v15 R3 y superior, se hizo una optimización significativa al algoritmo utilizado por este comando cuando se reemplaza una cadena por otra de diferente longitud, independientemente de la sintaxis utilizada. Esto da como resultado una aceleración considerable del procesamiento en este contexto.

#### Ejemplo 1 

El siguiente ejemplo ilustra el uso de Replace string. Los resultados, descritos en los comentarios, son asignados a la variable *vtResult*.

```4d
 vtResult:=Replace string("Ventanilla";"illa";"d") // vtResult es igual a "Ventana"
 vtResult:=Replace string("Ventanilla";"ill";"") // vtResultes igual a "Ventana"
 vtResult:=Replace string(vtOtraVar;Char(Tab);",";*) // Reemplazar todas las tabulaciones en vtOtraVar por comas
```

#### Ejemplo 2 

El siguiente ejemplo elimina los retornos de carro y las tabulaciones del texto en la variable *vtResult*:

```4d
 vtResult:=Replace string(Replace string(vtResult;Char(Carriage return);"";*);Char(Tab);"")
```

#### Ejemplo 3 

El siguiente ejemplo ilustra el uso del parámetro \* en el caso de una evaluación diacrítica:

```4d
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel") //vtResult es igual a "Crème caramel"
 vtResult:=Replace string("Crème brûlée";"Brulee";"caramel";*) //vtResult es igual a "Crème brûlée"
```

#### Ver también 

[Change string](change-string.md)  
[Delete string](delete-string.md)  
[Insert string](insert-string.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 233 |
| Hilo seguro | &check; |


