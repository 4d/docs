---
id: array-date
title: ARRAY DATE
slug: /commands/array-date
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY DATE.Syntax-->**ARRAY DATE** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY DATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array bidimensional |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY DATE.Summary-->El comando ARRAY DATE crea y/o redimensiona un array de elementos de tipo Fecha en memoria.<!-- END REF-->

* El parámetro *nombreArray* es el nombre del array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamaño2* es opcional; si se especifica *tamaño2*, el comando crea un array bidimensional. En este caso, *tamaño* especifica el número de filas y *tamaño2* especifica el número de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional.

Cuando aplica ARRAY DATE a un array existente:

* Si agranda el tamaño del array, los elementos existente no son modificados, y los nuevos elementos se inicializan en (!00/00/00!).
* Si reduce el tamaño del array, se pierden los últimos elementos borrados del array.

#### Ejemplo 1 

Este ejemplo crea un array de proceso de 100 elementos de tipo Fecha:

```4d
 ARRAY DATE(adValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas de 50 elementos de tipo Fecha:

```4d
 ARRAY DATE($adValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de 50 elementos de tipo Fecha y asigna a cada elemento la fecha actual más un número de días igual al número de elemento:

```4d
 ARRAY DATE(◊adValores;50)
 For($vlElem;1;50)
    ◊adValores{$vlElem}:=Current date+$vlElem
 End for
```
