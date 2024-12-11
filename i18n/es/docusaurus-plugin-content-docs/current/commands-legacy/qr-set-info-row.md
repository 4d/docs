---
id: qr-set-info-row
title: QR SET INFO ROW
slug: /commands/qr-set-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR SET INFO ROW.Syntax-->**QR SET INFO ROW** ( *area* ; *linea* ; *oculta* )<!-- END REF-->
<!--REF #_command_.QR SET INFO ROW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| linea | Integer | &#8594;  | Línea |
| oculta | Integer | &#8594;  | 0 = visible, 1 = oculta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET INFO ROW.Summary-->El comando QR SET INFO ROW muestra/oculta la fila cuya referencia se pasa en *linea*.<!-- END REF-->

*linea* designa la línea a modificar:

* si *línea* es igual a -1, el título del informe se afecta,
* si *línea* es igual a -2, el detalle del informe se afecta,
* si *línea* es igual a -3, el total general del informe se afecta,
* si *línea* es un entero positivo, designa la línea del subtotal correspondiente.

Puede utilizar las constantes del tema  para designar el elemento de línea (*qr title*\= -1, *qr detail*\=-2, *qr grand total*\=-3).

*oculta e*specifica si la línea está visible u oculta:

* si *oculta* es igual a 1, la línea está oculta;
* si *oculta* es igual a 0, la línea es visible.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *linea* es incorrecto, se genera el error -9852.

#### Ejemplo 

La siguiente instrucción oculta el contenido de la línea detalle:

```4d
 QR SET INFO ROW(area;qr detail;1)
```

#### Ver también 

[QR GET INFO COLUMN](qr-get-info-column.md)  
[QR Get info row](qr-get-info-row.md)  
[QR SET INFO COLUMN](qr-set-info-column.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 763 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


