---
id: array-blob
title: ARRAY BLOB
slug: /commands/array-blob
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY BLOB.Syntax-->**ARRAY BLOB** ( *nomArray* ; *tam* {; *tam2*} )<!-- END REF-->
<!--REF #_command_.ARRAY BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nombre del array |
| tam | Integer | &#8594;  | Número de elementos del array o número de arrays si se especifica tam2 |
| tam2 | Integer | &#8594;  | Número de los elementos de los array 2D |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY BLOB.Summary-->El comando **ARRAY BLOB** crea y/o cambia el tamaño de un array de elementos de tipo Blob en memoria .<!-- END REF-->  
  
El parámetro *nomArray* es el nombre de la array.  
  
El parámetro *tam* es el número de elementos del array.  
  
El parámetro *tam2* es opcional. Si lo pasa, este comando crea un array de dos dimensiones. En este caso, *tam* especifica el número de filas y *tam2* el número de columnas de cada array. Cada fila en un array de dos dimensiones se puede procesar tanto como un elemento y como un array. Esto significa que cuando se trabaja con la primera dimensión de un array de dos dimensiones, puede insertar y retirar arrays enteros utilizando otros comandos en este tema.  
  
Cuando se aplica el comando **ARRAY BLOB** a un array existente:

* Si amplía su tamaño, los elementos existentes no se cambian y los nuevos elementos se inicializan en un BLOB vacío ([BLOB size](blob-size.md)\= 0).
* Si reduce su tamaño, se eliminan y pierden los elementos de abajo del array.

#### Ejemplo 1 

Este ejemplo crea un array proceso que contiene 100 elementos de tipo BLOB:

```4d
 ARRAY BLOB(arrBlob;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas, que contienen cada una 50 elementos de tipo BLOB:

```4d
 ARRAY BLOB($arrBlob;100;50)
```

#### Ejemplo 3 

Este ejemplo crea un array local de 100 filas, conteniendo cada una 50 elementos de tipo BLOB. La variable $*vByteValue* recibe el décimo byte del BLOB ubicado en la séptima columna y la quinta fila del array BLOB:

```4d
 C_INTEGER($vByteValue)
 ARRAY BLOB($arrValues;100;50)
 ...
 $vByteValue:=$arrValues{5}{7}{9}
```

#### Ver también 

*Creación de arrays*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1222 |
| Hilo seguro | &check; |


