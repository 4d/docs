---
id: qr-set-totals-spacing
title: QR SET TOTALS SPACING
slug: /commands/qr-set-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TOTALS SPACING.Syntax-->**QR SET TOTALS SPACING** ( *area* ; *subtotal* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR SET TOTALS SPACING.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| subtotal | Integer | &#8594;  | Número del subtotal |
| valor | Integer | &#8594;  | 0=sin espacio, 32000=inserta un salto de página, >0=espacio añadido en la parte superior del nivel de ruptura, <0=aumento proporcional |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET TOTALS SPACING.Summary-->El comando QR SET TOTALS SPACING define un espacio debajo de la línea de subtotal.<!-- END REF--> Aplica únicamente al modo listado. 

*area* es la referencia del área del informe rápido.  
*subtotal* es el nivel del subtotal (o de ruptura) a modificar.

*valor* define el valor del espacio:

* Si *valor* es igual a 0, no se añade ningún espacio.
* Si *valor* es igual a 32000, se añade un salto de página.
* Si *valor* es un valor positivo, expresa el espacio a añadir en píxeles.
* Si *valor* es un valor negativo, expresa el espacio como un porcentaje de la línea de subtotal. Por ejemplo, el valor -100 definirá un espacio debajo de la línea del subtotal correspondiente al 100% de la altura de la línea.

**Nota:** si el espacio debajo de la línea de subtotal “empuja” a la línea a la siguiente página, no se insertará espacio sobre la línea en esa página. 

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *subtotal*, es incorrecto, se genera el error -9852.

#### Ver también 

[QR GET TOTALS SPACING](qr-get-totals-spacing.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 761 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


