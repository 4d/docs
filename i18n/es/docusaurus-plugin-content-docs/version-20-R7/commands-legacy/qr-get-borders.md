---
id: qr-get-borders
title: QR GET BORDERS
slug: /commands/qr-get-borders
displayed_sidebar: docs
---

<!--REF #_command_.QR GET BORDERS.Syntax-->**QR GET BORDERS** ( *area* ; *columna* ; *linea* ; *borde* ; *grueso* {; *color*} )<!-- END REF-->
<!--REF #_command_.QR GET BORDERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| columna | Integer | &#8594;  | Número de columna |
| linea | Integer | &#8594;  | Número de línea |
| borde | Integer | &#8594;  | Valor del borde |
| grueso | Integer | &#8592; | Grueso de línea |
| color | Integer | &#8592; | Color del borde |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR GET BORDERS.Summary-->El comando QR GET BORDERS permite recuperar el estilo del borde de una celda determinada.<!-- END REF--> 

*area* es la referencia del área del informe rápido.  
*columna* es el número de columna de la celda.  
*linea* designa el número de fila de la celda.

* pase un valor entero positivo para designar el nivel (ruptura) subtotal correspondiente que está afectado.
* pase una de las siguientes constantes del tema *QR Filas para propiedades*:  

| Constante      | Tipo         | Valor | Comentario                  |  
| -------------- | ------------ | ----- | --------------------------- |  
| qr detail      | Entero largo | \-2   | Área de detalle del informe |  
| qr grand total | Entero largo | \-3   | Área total general          |  
| qr title       | Entero largo | \-1   | Título del informe          |

*borde* es el valor que indica qué borde de celda se afecta. Pase una de las constantes del tema *QR Bordes*:  

| Constante                   | Tipo         | Valor | Comentario                |
| --------------------------- | ------------ | ----- | ------------------------- |
| qr bottom border            | Entero largo | 8     | Borde inferior            |
| qr inside horizontal border | Entero largo | 32    | Borde interior horizontal |
| qr inside vertical border   | Entero largo | 16    | Borde interior vertical   |
| qr left border              | Entero largo | 1     | Borde izquierdo           |
| qr right border             | Entero largo | 4     | Borde derecho             |
| qr top border               | Entero largo | 2     | Borde superior            |

**Nota:** a diferencia del comando [QR SET BORDERS](qr-set-borders.md), QR GET BORDERS no acepta un valor acumulativo. Debe probar todos los parámetros por separado para tener una visión general del borde de celda.

*grueso* es el grueso de la línea:

* 0 indica no linea
* 1 indica un grueso de 1/4 de punto
* 2 indica un grueso de 1/2 de punto
* 3 indica un grueso de 1 punto
* 4 indica un grueso de 2 puntos

*color* is the color of the line; it returns the value of the color applied to the line segment.

*color* es el color de la línea; devuelve el valor del color aplicado a la línea. 

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *columna* es incorrecto, se genera el error -9852.  
Si el parámetro *linea* es incorrecto, se genera el error -9853.  
Si el parámetro *borde* es incorrecto, se genera el error -9854.  
Si el parámetro *area* es incorrecto, se genera el error -9850.

#### Ver también 

[QR SET BORDERS](qr-set-borders.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 798 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


