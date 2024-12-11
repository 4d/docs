---
id: array-object
title: ARRAY OBJECT
slug: /commands/array-object
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY OBJECT.Syntax-->**ARRAY OBJECT** ( *nomArray* ; *tam* {; *tam2*} )<!-- END REF-->
<!--REF #_command_.ARRAY OBJECT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nombre del array |
| tam | Integer | &#8594;  | Número de elementos del array o número de arrays si se especifica tam2 |
| tam2 | Integer | &#8594;  | Número de elementos del array 2D |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY OBJECT.Summary-->El comando **ARRAY OBJECT** crea y/o redimensiona un array de elementos de tipo Objeto de lenguaje en memoria.<!-- END REF-->

El parámetro *nomArray* es el nombre del array. Puede utilizar cualquier nombre conforme a las convenciones de 4D.  
  
El parámetro de *tam* es el número de elementos del array.  
  
El parámetro *tam2* es opcional. Si lo pasa, este comando crea un array de dos dimensiones. En este caso, *tam* especifica el número de filas y *tam2* el número de columnas de cada array. Cada fila en un array de dos dimensiones se puede procesar tanto como un elemento y como un array. Esto significa que cuando se trabaja con la primera dimensión de un array de dos dimensiones, se puede insertar y retirar arrays enteros utilizando otros comandos del tema "Arrays".  
  
Cuando se aplica el comando **ARRAY OBJECT** a un array existente:

* Si amplía su tamaño, los elementos existentes no se cambian y los nuevos elementos no están definidos. Puede probar si un elemento se define utilizando el comando [OB Is defined](ob-is-defined.md).
* Si reduce su tamaño, se eliminan y pierden los elementos al "fondo" del array.

#### Ejemplo 1 

Creación de un array de proceso de 100 elementos de tipo objeto:

```4d
 ARRAY OBJECT(arrObjects;100)
```

#### Ejemplo 2 

Creación de un array local de 100 filas, conteniendo cada uno 50 elementos de tipo de objeto:

```4d
 ARRAY OBJECT($arrObjects;100;50)
```

#### Ejemplo 3 

Creación y llenado de un array local de objetos:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4)
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James";"age";3)
 APPEND TO ARRAY($arrayChildren;$ref_james)
  // $arrayChildren{1} -> {"name":"Richard","age":7}
  // $arrayChildren{2} -> {"name":"Susan","age":4}
  // $arrayChildren{3} -> {"name":"James","age":3}
```

#### Ver también 

[C\_OBJECT](c-object.md)  
*Creación de arrays*  
*Objetos (Lenguaje)*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1221 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


