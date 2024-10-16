---
id: scan-index
title: SCAN INDEX
slug: /commands/scan-index
displayed_sidebar: docs
---

<!--REF #_command_.SCAN INDEX.Syntax-->**SCAN INDEX** ( *unCampo* ; *Numero* {; > o <} )<!-- END REF-->
<!--REF #_command_.SCAN INDEX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo indexado con el cual escanear los registros |
| Numero | Integer | &#8594;  | Número de registros a devolver |
| > o < | Operador | &#8594;  | > a partir del inicio del índice < a partir del final del índice |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SCAN INDEX.Summary-->SCAN INDEX devuelve una selección de *numero* de registros de la *tabla*.<!-- END REF--> Si pasa <, SCAN INDEX devuelve el *número* de registros a partir del final del índice (valores superiores). Si pasa >, SCAN INDEX devuelve *numero* de registros a partir del inicio del índice (valores inferiores). Este comando es muy eficiente porque utiliza el índice para realizar la operación. 

**Nota:** la selección que se obtiene no está ordenada.

SCAN INDEX funciona únicamente con campos indexados. Este comando modifica la selección actual de la tabla para el proceso actual, pero no hay registro actual. 

Si especifica un número de registros superior al número de registros presentes en la tabla, SCAN INDEX devolverá todos los registros.

##### 

**Nota:** este comando no soporta campos de tipo Objeto.

#### Ejemplo 

El siguiente ejemplo envía cartas a los 50 peores clientes y 50 a los mejores clientes: 

```4d
 SCAN INDEX([Clientes]TotalVencido;50;<) // Obtener la lista de los 50 peores clientes
 ORDER BY([Clientes]CodigoPostal;>) // Ordenar por código postal
 FORM SET OUTPUT([Clientes];"Advertencia")
 PRINT SELECTION([Clientes]) // Imprimir las cartas
 SCAN INDEX([Clientes]TotalVencido;50;>) // Obtener la lista de los 50 mejores clientes
 ORDER BY([Clientes]CodigoPostal;>) // Ordenar por código postal
 FORM SET OUTPUT([Clientes];"Carta de agradecimiento")
 PRINT SELECTION([Clientes]) // Imprimir las cartas
```

#### Ver también 

[ORDER BY](order-by.md)  
[QUERY](query.md)  
[REDUCE SELECTION](reduce-selection.md)  