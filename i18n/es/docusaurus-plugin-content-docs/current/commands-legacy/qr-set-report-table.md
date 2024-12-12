---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* ; *tabla* )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| tabla | Integer | &#8594;  | Número de tabla |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR SET REPORT TABLE.Summary-->El comando QR SET REPORT TABLE define la tabla actual para el área del informe referenciada por el parámetro *area* a la tabla número *tabla*.<!-- END REF-->

Es necesario que una tabla sea asignada al informe ya que el editor de informes utilizará la selección actual de esta tabla para mostrar los datos, efectuar los cálculos y propagar relaciones, si es necesario.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *tabla* es incorrecto, se genera el error -9852.

#### Ver también 

[QR Get report table](qr-get-report-table.md)  