---
id: array-longint
title: ARRAY LONGINT
slug: /commands/array-longint
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY LONGINT.Syntax-->**ARRAY LONGINT** ( *nombreArray* ; *tamaño* {; *tamaño2*} )<!-- END REF-->
<!--REF #_command_.ARRAY LONGINT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nombreArray | Array | &#8594;  | Nombre del array |
| tamaño | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tamaño2 | Integer | &#8594;  | Número de columnas en un array de dos dimensiones |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY LONGINT.Summary-->El comando ARRAY LONGINT crea y/o redimensiona un array de elementos de tipo [Entero largo](# "Entre -2 millardos y +2 millardos") de 4 bytes en memoria.<!-- END REF-->es el nombre del Array.
* El parámetro *tamaño* es el número de elementos en el array.
* El parámetro *tamañoi2* es opcional; si se especifica *tamaño2*, el comando crea un array de dos dimensiones. En este caso, *tamaño* especifica el número de filas y *tamaño2* el número de columnas en cada array. Cada fila en un array de dos dimensiones puede tratarse como un elemento y un array. Esto significa que mientras trabaja con la primera dimensión del arrray, puede utilizar otros comandos de array para insertar y borrar arrays completos en un array de dos dimensiones.

Cuando aplica ARRAY LONGINT a un array existente:

* Si agranda el tamaño del array, los elementos existentes no son modificados, y los elementos nuevos se inicializan en 0.
* Si reduce el tamaño del array, los últimos elementos son borrados del array y se pierden.

#### Ejemplo 1 

Este ejemplo crea un array proceso de 4 bytes de 100 elementos de tipo [Entero largo](# "Entre -2 millardos y +2 millardos"):

```4d
 ARRAY LONGINT(aiValores;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 4 bytes de 100 filas de 50 elementos de tipo [Entero largo](# "Entre -2 millardos y +2 millardos"):

```4d
 ARRAY LONGINT($aiValores;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array interproceso de 4 bytes de 50 elementos de tipo [Entero largo](# "Entre -2 millardos y +2 millardos") y asigna a cada elemento su número:

```4d
 ARRAY LONGINT(◊aiValores;50)
 For($vlElem;1;50)
    ◊aiValores{$vlElem}:=$vlElem
 End for
```

#### Ver también 

[ARRAY INTEGER](array-integer.md)  
[ARRAY REAL](array-real.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 221 |
| Hilo seguro | &check; |


