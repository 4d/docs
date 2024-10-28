---
id: longint-array-from-selection
title: LONGINT ARRAY FROM SELECTION
slug: /commands/longint-array-from-selection
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Syntax-->**LONGINT ARRAY FROM SELECTION** ( *tabla* ; *arrReg* {; *seleccion*} )<!-- END REF-->
<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la selección actual |
| arrReg | Integer array | &#8592; | Array de números de registros |
| seleccion | Text | &#8594;  | Nombre de la selección temporal o de la selección actual si este parámetro es omitido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LONGINT ARRAY FROM SELECTION.Summary-->El comando LONGINT ARRAY FROM SELECTION llena el array *arrReg* con los números (absolutos) de los registros que están en *seleccion*.<!-- END REF-->

Si no pasa el parámetro *seleccion*, el comando utiliza la selección actual de la *tabla*. 

**Nota:** el elemento número 0 del array se inicializa en -1.

#### Ejemplo 

Quiere recuperar los números de los registros de la selección actual:

```4d
 ARRAY LONGINT($_arrRecNum;0) //obligatorio para el modo compilado
 LONGINT ARRAY FROM SELECTION([Clients];$_arrRecNum)
```

#### Ver también 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  