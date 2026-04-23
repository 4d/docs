---
id: qr-get-destination
title: QR GET DESTINATION
slug: /commands/qr-get-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR GET DESTINATION.Syntax-->**QR GET DESTINATION** ( *area* : Integer ; *tipo* : Integer {; *especificos* : Text, Variable} )<!-- END REF-->
<!--REF #_command_.QR GET DESTINATION.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área |
| tipo | Integer | &#8592; | Tipo de informe |
| especificos | Text, Variable | &#8592; | Específicos asociados al tipo de salida |
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

<!--REF #_command_.QR GET DESTINATION.Summary-->El comando QR GET DESTINATION recupera el *tipo* de salida del informe para el área cuya referencia se pasó en *area*.<!-- END REF--> 

Puede comparar el valor del parámetro *tipo* con las constantes del tema .

La siguiente tabla describe los valores que se pueden recuperar en los parámetros *tipo* y *especificos*:

| **Destino**   | **Tipo (valor)**     | **Específicos**                |
| ------------- | -------------------- | ------------------------------ |
| Impresora     | qr printer (1)       | N.A.                           |
| Archivo texto | qr text file (2)     | Ruta de acceso al archivo      |
| 4D View       | qr 4D View area (3)  | N.A.                           |
| 4D Chart      | qr 4D Chart area (4) | N.A.                           |
| Archivo HTML  | qr HTML file (5)     | Ruta de acceso al archivo HTML |

Si pasa un número de *area* incorrecto, se genera el error -9850.

## Ver también 

[QR SET DESTINATION](../commands/qr-set-destination)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 756 |
| Hilo seguro | no |
| Modifica variables | error |


