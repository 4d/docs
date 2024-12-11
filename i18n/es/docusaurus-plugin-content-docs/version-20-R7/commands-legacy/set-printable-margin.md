---
id: set-printable-margin
title: SET PRINTABLE MARGIN
slug: /commands/set-printable-margin
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINTABLE MARGIN.Syntax-->**SET PRINTABLE MARGIN** ( *izquierda* ; *superior* ; *derecha* ; *inferior* )<!-- END REF-->
<!--REF #_command_.SET PRINTABLE MARGIN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| izquierda | Integer | &#8594;  | Margen izquierda |
| superior | Integer | &#8594;  | Margen superior |
| derecha | Integer | &#8594;  | Margen derecha |
| inferior | Integer | &#8594;  | Margen inferior |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET PRINTABLE MARGIN.Summary-->El comando SET PRINTABLE MARGIN \[#descv\]permite asignar los valores de varias márgenes de impresión utilizando los comandos [Print form](print-form.md), [PRINT SELECTION](print-selection.md) y [PRINT RECORD](print-record.md).<!-- END REF--> 

Puede pasar uno de los siguientes valores en los parámetros *izquierda*, *superior*, *derecha* e *inferior*:

* 0 = utilizar las márgenes del papel
* \-1 = utilizar las márgenes de la impresora
* valor > 0 = margen en píxeles (recuerde que 1 píxel en 72 dpi representa aproximadamente 0.4 mm)

Los valores de los parámetros *derecha* e *inferior* son relativos a los bordes derecho e inferior del papel.

**Nota:** para mayor información sobre gestión de impresión y terminología en 4D, consulte la descripción del comando [GET PRINTABLE MARGIN](get-printable-margin.md). 

Por defecto, 4D basa sus impresiones en las márgenes de la impresora. Una vez se ejecuta el comando SET PRINTABLE MARGIN, los parámetros modificados se conservarán en el mismo proceso para toda la sesión. 

#### Ejemplo 1 

El siguiente ejemplo le permite obtener el tamaño de la margen muerta:

```4d
 SET PRINTABLE MARGIN(-1;-1;-1;-1) //Define la marge de la impresora
 GET PRINTABLE MARGIN($l;$t;$r;$b)
  //$l, $t, $r y $b corresponden a las márgenes muertas de la hoja
```

#### Ejemplo 2 

El siguiente ejemplo le permite obtener el tamaño del papel:

```4d
 SET PRINTABLE MARGIN(0;0;0;0) //Define la margen del papel
 GET PRINTABLE AREA($alto;$largo)
  //Para A4: $alto=842 ; $largo=595 píxeles
```

#### Ver también 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Get printed height](get-printed-height.md)  
[Print form](print-form.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 710 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


