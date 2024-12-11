---
id: qr-get-html-template
title: QR Get HTML template
slug: /commands/qr-get-html-template
displayed_sidebar: docs
---

<!--REF #_command_.QR Get HTML template.Syntax-->**QR Get HTML template** ( *area* ) : Text<!-- END REF-->
<!--REF #_command_.QR Get HTML template.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| Resultado | Text | &#8592; | Código HTML utilizado como plantilla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR Get HTML template.Summary-->El comando QR Get HTML template devuelve la plantilla HTML utilizada actualmente por el área del informe rápido referenciada por *area*.<!-- END REF--> El valor devuelto es de tipo texto e incluye la totalidad del código HTML utilizado como plantilla.

Si no se definió una plantilla específica, se devuelve la plantilla por defecto. Por favor tenga en cuenta que no se devolverá ningún valor si el formato de destino HTML no fue definido para el informe, manualmente o por programación.

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

[QR SET HTML TEMPLATE](qr-set-html-template.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 751 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


