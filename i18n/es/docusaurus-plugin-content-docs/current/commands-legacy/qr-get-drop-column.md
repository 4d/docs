---
id: qr-get-drop-column
title: QR Get drop column
slug: /commands/qr-get-drop-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Get drop column.Syntax-->**QR Get drop column** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get drop column.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| Resultado | Integer | &#8592; | Espacio de soltar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR Get drop column.Summary-->El comando QR Get drop column devuelve un valor dependiendo de dónde se efectúe una acción soltar:

* si el valor es negativo, indica un número de columna (por ejemplo, -3 indica que una acción soltar se realizó en la columna número 3)
* si el valor es positivo, indica que la acción de soltar se realizó en un separador situado delante de la columna (por ejemplo, 3 indica que un soltar se efectúo en la columna 2).<!-- END REF--> Recuerde que la acción de soltar no se tiene que lleva a cabo antes de una columna existente.

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

[QR DELETE COLUMN](qr-delete-column.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 747 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


