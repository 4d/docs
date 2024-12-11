---
id: array-text
title: ARRAY TEXT
slug: /commands/array-text
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TEXT.Syntax-->**ARRAY TEXT** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array bidimensional |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY TEXT.Summary-->El comando ARRAY TEXT crea y/o redimensiona un array de elementos de tipo [Texto](# "A character string that may contain from 0 to 2 GB of text") en memoria.<!-- END REF-->es el nombre del array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamaño2* es opcional; si se especifica *tamaño2*, el comando crea un array bidimensional. En este caso, *tamaño* especifica el número de filas y *tamaño2* especifica el número de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional.

Cuando aplica ARRAY TEXT a un array existente:

* Si agranda el tamaño del array, los elementos existentes no se modifican, y los nuevos elementos son inicializados en "" (cadena vacía).
* Si reduce el tamaño del array, se pierden los últimos elementos borrados del array.

#### Ejemplo 1 

Este ejemplo crea un array de proceso de 100 elementos de tipo [Texto](# "A character string that may contain from 0 to 2 GB of text"):

```4d
 ARRAY TEXT(atValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas de 50 elementos de tipo [Texto](# "A character string that may contain from 0 to 2 GB of text"):

```4d
 ARRAY TEXT($atValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de 50 elementos de tipo texto y asigna a cada elemento el valor “Elemento #” seguido por su número de elemento:

```4d
 ARRAY TEXT(◊atValues;50)
 For($vlElem;1;50)
    ◊atValores{$vlElem}:="Elemento #"+String($vlElem)
 End for
```



#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 222 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


