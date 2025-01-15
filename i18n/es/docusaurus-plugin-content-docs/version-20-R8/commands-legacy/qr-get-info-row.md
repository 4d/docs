---
id: qr-get-info-row
title: QR Get info row
slug: /commands/qr-get-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR Get info row.Syntax-->**QR Get info row** ( *area* ; *linea* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get info row.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área creada |
| linea | Integer | &#8594;  | Línea |
| Resultado | Integer | &#8592; | 0 = visible, 1 = oculta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR Get info row.Summary-->El comando QR Get info row indica si *linea* se muestra o se oculta en *area*.<!-- END REF-->

*linea* designa la línea a verificar:

* si *linea* es igual a -1, verifica el título del informe
* si *linea* es igual a -2, verifica el área de detalle del informe
* si *linea* es igual a -3, verifica el área del total general
* si *linea* es un entero positivo, designa la línea de subtotal correspondiente.

Puede utilizar las constantes del tema para designar el elemento de la línea (*qr title*\= -1, *qr detail*\=-2, *qr grand total*\=-3)

El resultado de la función especifica si la línea está visible u oculta. Si es igual a 1, la línea está oculta; si es igual a 0, la línea es visible.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *linea* es incorrecto, se genera el error -9852.

#### Ver también 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  
[QR SET INFO ROW](qr-set-info-row.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 769 |
| Hilo seguro | &cross; |
| Modifica variables | error |


