---
id: append-to-array
title: APPEND TO ARRAY
slug: /commands/append-to-array
displayed_sidebar: docs
---

<!--REF #_command_.APPEND TO ARRAY.Syntax-->**APPEND TO ARRAY** ( *array* ; *valor* )<!-- END REF-->
<!--REF #_command_.APPEND TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array al cual añadir un elemento |
| valor | Expression | &#8594;  | Valor a añadir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.APPEND TO ARRAY.Summary-->El comando APPEND TO ARRAY añade un nuevo elemento al final del *array* y asigna *valor* al elemento.<!-- END REF--> En modo interpretado, si a*rray* no existe, el comando lo crea con respecto al tipo de *valor*. 

Este comando funciona con todo tipo de arrays: cadena, numérico, booleano, fecha, puntero e imagen. 

El tipo de *valor* debe corresponder al tipo de array, de lo contrario se genera el error de sintaxis 54 “Los tipos de argumentos son incompatibles”. Los siguientes valores, sin embargo, se aceptan:   
• un *array* de tipo cadena (Texto o Alfa) acepta todo *valor* de tipo Texto o Alfa.   
• un *array de* de tipo numérico (Entero, Entero largo o Real) acepta todo *valor* de tipo Entero, Entero largo, Numérico u Hora. 

#### Ejemplo 

El siguiente código:

```4d
 INSERT IN ARRAY($miarray;Size of array($miarray)+1)
 $miarray{Size of array($miarray)}:=$mivalor
```

... puede reemplazarse por:

```4d
 APPEND TO ARRAY($miarray;$mivalor)
```

#### Ver también 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 911 |
| Hilo seguro | &check; |


