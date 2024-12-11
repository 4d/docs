---
id: qr-set-borders
title: QR SET BORDERS
slug: /commands/qr-set-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR SET BORDERS.Syntax-->**QR SET BORDERS** ( *area* ; *columna* ; *linea* ; *borde* ; *grueso* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR SET BORDERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| columna | Integer | &#8594;  | Número de columna |
| linea | Integer | &#8594;  | Número de línea |
| borde | Integer | &#8594;  | Valor del borde compuesto |
| grueso | Integer | &#8594;  | Ancho de la línea |
| color | Integer | &#8594;  | Color del borde |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET BORDERS.Summary-->El comando QR SET BORDERS permite definir el estilo del borde de una celda dada.<!-- END REF--> 

*area* es la referencia del área del informe rápido.

*columna* es el número de la columna de la celda.

*linea* es el número de línea de la celda.  
• si *linea* es igual a -1, el título del informe se afecta  
• si *linea* es igual a -2, el detalle del informe se afecta  
• si *linea* es igual a -3, el total general del informe se afecta  
• si *linea* es un entero positivo, designa la línea del subtotal correspondiente.

Puede utilizar las constantes del tema  para designar el elemento de la línea (*qr title*\= -1, *qr detail*\=-2, *qr grand total*\=-3).

*borde* es un valor compuesto que indica el o los bordes de la celda a modificar:

* 1 indica el borde de izquierdo
* 2 indica el borde superior
* 4 indica el borde derecho
* 8 indica el borde inferior
* 16 indica el borde interior vertical
* 32 indica el borde interior horizontal.

Puede utilizar las constantes del tema  para designar el elemento del borde.

Por ejemplo, si pasa 5 en *borde* los bordes izquierdo y derecho se afectarán. 

*ancho* es al ancho de la línea:

* 0 indica que no hay línea
* 1 indica un ancho de línea de 1/4 punto
* 2 indica un ancho de línea de 1/2 punto
* 3 indica un ancho de línea de 1 punto
* 4 indica un ancho de línea de 2 puntos

*color* es el color de la línea:

* Si *color* es un valor positivo, indica un color específico.
* Si *color* es igual a 0, el color es negro.
* Si *color* es igual a -1, el color no cambia.

**Nota:** el color por defecto es el negro.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *columna* es incorrecto, se genera el error -9852.  
Si el parámetro *linea* es incorrecto, se genera el error -9853.  
Si el parámetro *borde* es incorrecto, se genera el error -9854.  
Si el parámetro *ancho* es incorrecto, se genera el error -9855.

#### Ver también 

[QR GET BORDERS](qr-get-borders.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 797 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


