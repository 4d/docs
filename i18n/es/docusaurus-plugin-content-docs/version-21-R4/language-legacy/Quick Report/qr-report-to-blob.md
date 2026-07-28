---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *area* : Integer ; *BLOB* : Blob )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referencia del área |
| Blob | Blob | &#8592; | Blob a recibir el informe rápido |
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

<!--REF #_command_.QR REPORT TO BLOB.Summary-->El comando QR REPORT TO BLOB coloca el informe cuya referencia se pasó en *area* en un BLOB (variable o campo).<!-- END REF-->

Si pasa un número de *area* incorrecto, se genera el error -9850.

## Ejemplo 

La siguiente instrucción asigna el informe rápido almacenado en el área MiArea a un campo BLOB.

```4d
 QR REPORT TO BLOB(MiArea;[Tabla 1]Campo4)
```

## Ver también 

[QR BLOB TO REPORT](../commands/qr-blob-to-report)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 770 |
| Hilo seguro | no |
| Modifica variables | error |


