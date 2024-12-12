---
id: array-time
title: ARRAY TIME
slug: /commands/array-time
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TIME.Syntax-->**ARRAY TIME** ( *nomArray* ; *tam* {; *tam2*} )<!-- END REF-->
<!--REF #_command_.ARRAY TIME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArray | Array | &#8594;  | Nombre de array |
| tam | Integer | &#8594;  | Número de elementos en el array o Número de filas si se especifica tamaño2 |
| tam2 | Integer | &#8594;  | Número de columnas en un array de dos dimensiones |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ARRAY TIME.Summary-->El comando **ARRAY TIME** crea o redimensiona una array de tipo tiempo en memoria.<!-- END REF-->

**Recordatorio:** en 4D, las horas pueden ser procesados ​​como valores numéricos . En las versiones de 4D anteriores a v14, había que combinar un array entero largo con un formato de visualización para gestionar una array de horas.  
  
El parámetro *nomArray* es el nombre del array.  
  
El parámetro *tam* es el número de elementos del array.  
  
El parámetro *tam2* es opcional. Si lo pasa, este comando crea un array de dos dimensiones. En este caso, *tam* especifica el número de filas y *tam2* el número de columnas de cada array. Cada fila en un array de dos dimensiones se puede procesar tanto como un elemento y como un array. Esto significa que cuando se trabaja con la primera dimensión de un array de dos dimensiones, puede insertar y retirar arrays enteros utilizando otros comandos de este tema .  
  
Cuando aplica el comando **ARRAY TIME** a un array existente :

* Si amplía su tamaño, los elementos existentes no cambian y los nuevos elementos se inicializan en el valor de hora nulo (00:00:00 ) .
* Si reduce su tamaño, se eliminan y pierden los elementos de abajo del array.

Cuando aplica [SELECTION TO ARRAY](selection-to-array.md) o [SELECTION RANGE TO ARRAY](selection-range-to-array.md) a un campo de tipo Hora, tenga en cuenta que sólo crean un array de tipo Hora si el array no se ha definido como otro tipo, tal como Entero largo, por ejemplo.

#### Ejemplo 1 

Este ejemplo crea un array proceso que contiene 100 elementos de tipo Hora:

```4d
 ARRAY TIME(arrTimes;100)
```

#### Ejemplo 2 

Este ejemplo crea un array local de 100 filas, conteniendo cada una 50 elementos de tipo Hora:

```4d
 ARRAY TIME($arrTimes;100;50)
```

#### Ejemplo 3 

Como los arrays de horas aceptan valores numéricos, el siguiente código es válido:

```4d
 ARRAY TIME($arrTimeValues;10)
 $CurTime:=Current time+1
 APPEND TO ARRAY($arrTimeValues;$CurTime)
 $Found:=Find in array($arrTimeValues;$CurTime)
```

#### Ver también 

*Creación de arrays*  
[Time](time.md)  