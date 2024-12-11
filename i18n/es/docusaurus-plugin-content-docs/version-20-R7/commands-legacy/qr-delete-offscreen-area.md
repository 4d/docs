---
id: qr-delete-offscreen-area
title: QR DELETE OFFSCREEN AREA
slug: /commands/qr-delete-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Syntax-->**QR DELETE OFFSCREEN AREA** ( *area* )<!-- END REF-->
<!--REF #_command_.QR DELETE OFFSCREEN AREA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área a borrar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR DELETE OFFSCREEN AREA.Summary-->El comando QR DELETE OFFSCREEN AREA borra de la memoria el área fuera de pantalla del informe rápido cuya referencia se pasa en el parámetro *area*.<!-- END REF--> 

Si pasa un número de *area* incorrecto, se genera el error -9850.

#### Ver también 

[QR New offscreen area](qr-new-offscreen-area.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 754 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


