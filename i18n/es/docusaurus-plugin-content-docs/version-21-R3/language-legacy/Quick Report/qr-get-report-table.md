---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *area* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área |
| Resultado | Integer | &#8592; | Número de tabla |
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

<!--REF #_command_.QR Get report table.Summary-->El comando QR Get report table devuelve el número de la tabla actual del informe designado por el parámetro *area*.<!-- END REF-->

Si pasa un número de *area* inválido, se genera el error -9850.

## Ver también 

[QR SET REPORT TABLE](../commands/qr-set-report-table)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 758 |
| Hilo seguro | no |
| Modifica variables | error |


