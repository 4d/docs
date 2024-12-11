---
id: array-boolean
title: ARRAY BOOLEAN
slug: /commands/array-boolean
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BOOLEAN.Syntax-->**ARRAY BOOLEAN** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BOOLEAN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array bidimensional |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY BOOLEAN.Summary-->El comando ARRAY BOOLEAN crea y/o redimensiona un array de elementos *Booleanos* en memoria.<!-- END REF-->es el nombre del array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamaño2* es opcional; si se especifica *tamaño2*, el comando crea un array bidimensional.

En este caso, *tamaño* especifica el número de filas y *tamaño2* especifica el número de columnas en cada array. Cada fila en un array bidimensional puede tratarse como un elemento y como un array. Esto significa que mientras trabaja con la primera dimensión del array, puede utilizar otros comandos de array para insertar y borrar arrays enteros en un array bidimensional.

Cuando aplica ARRAY BOOLEAN a un array existente:

* Si agranda el tamaño del array, los elementos existente no son modificados, y los nuevos elementos se inicializan en False.
* Si reduce el tamaño del array, se pierden los últimos elementos borrados del array.

**Tip:** en algunos contextos, una alternativa a utilizar arrays booleanos es utilizar un array entero donde cada elemento signifique “verdadero” si es diferente de cero y signifique “falso” si es igual a cero.

#### Ejemplo 1 

Este ejemplo crea un array de proceso de 100 elementos de tipo [Booleano](# "Can be either TRUE or FALSE"):

```4d
 ARRAY BOOLEAN(abValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas de 50 elementos de tipo [Booleano](# "Can be either TRUE or FALSE"):

```4d
 ARRAY BOOLEAN($abValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de 50 elementos de tipo [Booleano](# "Can be either TRUE or FALSE") y a cada elemento asigna el valor Verdadero par:

```4d
 ARRAY BOOLEAN(◊abValues;50)
 For($vlElem;1;50)
    ◊abValores{$vlElem}:=(($vlElem%2)=0)
 End for
```

#### Ver también 

[ARRAY INTEGER](array-integer.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 223 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


