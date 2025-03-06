---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *area* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| Blob | Blob | &#8592; | Blob a recibir el informe rápido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR REPORT TO BLOB.Summary-->El comando QR REPORT TO BLOB coloca el informe cuya referencia se pasó en *area* en un BLOB (variable o campo).<!-- END REF-->

Si pasa un número de *area* incorrecto, se genera el error -9850.

#### Ejemplo 

La siguiente instrucción asigna el informe rápido almacenado en el área MiArea a un campo BLOB.

```4d
 QR REPORT TO BLOB(MiArea;[Tabla 1]Campo4)
```

#### Ver también 

[QR BLOB TO REPORT](qr-blob-to-report.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 770 |
| Hilo seguro | &cross; |
| Modifica variables | error |


