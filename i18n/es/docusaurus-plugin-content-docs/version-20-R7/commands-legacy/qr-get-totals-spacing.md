---
id: qr-get-totals-spacing
title: QR GET TOTALS SPACING
slug: /commands/qr-get-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR GET TOTALS SPACING.Syntax-->**QR GET TOTALS SPACING** ( *area* ; *subtotal* ; *valor* )<!-- END REF-->
<!--REF #_command_.QR GET TOTALS SPACING.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| subtotal | Integer | &#8594;  | Número subtotal |
| valor | Integer | &#8592; | 0=sin espacio, 32000=inserta un salto de página, >0=espacio añadido en la parte superior del nivel de ruptura, <0=aumento proporcional |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR GET TOTALS SPACING.Summary-->El comando QR GET TOTALS SPACING permite recuperar el valor del espacio añadido debajo de una línea de subtotal.<!-- END REF--> Aplica únicamente en modo listado.

*area* es la referencia del área del informe rápido.

*subtotal* es el nivel del subtotal (o nivel de ruptura) que se afectará. *subtotal* es un valor entre 1 y el número de líneas del subtotal/ruptura.

*valor* define el valor del espacio:

* Si *valor* es igual a 0, no se añade ningún espacio.
* Si *valor* es igual a 32000, se inserta un salto de página.
* Si *valor* es un valor positivo, expresa el espacio a añadir en píxeles.
* Si *valor* es un valor negativo, expresa el espacio como un porcentaje de la línea de subtotal. Por ejemplo, el valor -100 indica un espacio debajo de la línea de subtotal correspondiente al 100% de la altura actual de la línea.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *subtotal* es incorrecto, se genera el error -9852.

#### Ver también 

[QR SET TOTALS SPACING](qr-set-totals-spacing.md)  