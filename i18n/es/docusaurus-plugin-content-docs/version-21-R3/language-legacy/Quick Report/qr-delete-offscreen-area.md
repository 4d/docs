---
id: qr-delete-offscreen-area
title: QR DELETE OFFSCREEN AREA
slug: /commands/qr-delete-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Syntax-->**QR DELETE OFFSCREEN AREA** ( *area* : Integer )<!-- END REF-->
<!--REF #_command_.QR DELETE OFFSCREEN AREA.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área a borrar |
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

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Summary-->El comando QR DELETE OFFSCREEN AREA borra de la memoria el área fuera de pantalla del informe rápido cuya referencia se pasa en el parámetro *area*.<!-- END REF--> 

Si pasa un número de *area* incorrecto, se genera el error -9850.

## Ver también 

[QR New offscreen area](../commands/qr-new-offscreen-area)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 754 |
| Hilo seguro | no |
| Modifica variables | error |


