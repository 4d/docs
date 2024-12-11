---
id: qr-blob-to-report
title: QR BLOB TO REPORT
slug: /commands/qr-blob-to-report
displayed_sidebar: docs
---

<!--REF #_command_.QR BLOB TO REPORT.Syntax-->**QR BLOB TO REPORT** ( *area* ; *BLOB* )<!-- END REF-->
<!--REF #_command_.QR BLOB TO REPORT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| Blob | Blob | &#8594;  | BLOB que contiene el informe |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR BLOB TO REPORT.Summary-->El comando QR BLOB TO REPORT coloca el informe contenido en el *blob* en el área de informe rápido pasada en *area*.<!-- END REF--> 

Si pasa un número de *area* incorrecto, se genera el error -9850.  
Si el parámetro *blob* es incorrecto, se genera el error -9852.

#### Ejemplo 1 

El siguiente código muestra en el área MiArea, un archivo de informe llamado “report.4qr” ubicado junto a la estructura de la base. El archivo de informe pudo haber sido creado con una versión anterior:

```4d
 var $doc : Blob
 var MiArea : Integer
 DOCUMENT TO BLOB("report.4qr";$doc)
 QR BLOB TO REPORT(MiArea;$doc)
```

#### Ejemplo 2 

La siguiente instrucción recupera el informe rápido almacenado en Campo4 y lo muestra en MiArea:

```4d
 QR BLOB TO REPORT(MiArea;[Tabla 1]Campo4)
```

#### Ver también 

[QR REPORT TO BLOB](qr-report-to-blob.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 771 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


