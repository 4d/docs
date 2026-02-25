---
id: qr-set-report-table
title: QR SET REPORT TABLE
slug: /commands/qr-set-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT TABLE.Syntax-->**QR SET REPORT TABLE** ( *area* : Integer ; *tabla* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET REPORT TABLE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área |
| tabla | Integer | &#8594; | Número de tabla |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|2003|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.QR SET REPORT TABLE.Summary-->El comando QR SET REPORT TABLE define la tabla actual para el área del informe referenciada por el parámetro *area* a la tabla número *tabla*.<!-- END REF-->

Es necesario que una tabla sea asignada al informe ya que el editor de informes utilizará la selección actual de esta tabla para mostrar los datos, efectuar los cálculos y propagar relaciones, si es necesario.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *tabla* es incorrecto, se genera el error -9852.

## Ver también 

[QR Get report table](../commands/qr-get-report-table)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 757 |
| Hilo seguro | no |
| Modifica variables | error |


