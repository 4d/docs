---
id: get-printable-area
title: GET PRINTABLE AREA
slug: /commands/get-printable-area
displayed_sidebar: docs
---

<!--REF #_command_.GET PRINTABLE AREA.Syntax-->**GET PRINTABLE AREA** ( *altura* {; *largo*} )<!-- END REF-->
<!--REF #_command_.GET PRINTABLE AREA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| altura | Integer | &#8592; | Altura del área de impresión |
| largo | Integer | &#8592; | Largo del área de impresión |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.GET PRINTABLE AREA.Summary-->El comando GET PRINTABLE AREA devuelve el tamaño en píxeles del área de impresión en los parámetros *altura* y *largo* el tamaño.<!-- END REF--> Este tamaño depende de los parámetros de impresión actuales, la orientación del papel, etc. 

El tamaño devuelto no varía de una página a otra (después de un salto de página, por ejemplo). 

Asociado al comando [Get printed height](get-printed-height.md "Get printed height"), este comando es útil para conocer el número de píxeles disponibles para la impresión o para centrar un objeto en la página. 

**Nota:** para mayor información sobre gestión de impresión y terminología en 4D, consulte la descripción del comando [GET PRINTABLE MARGIN](get-printable-margin.md "GET PRINTABLE MARGIN"). 

Para saber el tamaño total de la página, puede:

* añadir las márgenes ofrecidas por el comando [GET PRINTABLE MARGIN](get-printable-margin.md "GET PRINTABLE MARGIN") a los valores devueltos por este comando.
* o utilizar la siguiente sintaxis:

```4d
 SET PRINTABLE MARGIN(0;0;0;0) // Definir el margen del papel
 GET PRINTABLE AREA(hPapel;wPapel) //Tamaño del papel
```

#### Ver también 

[GET PRINTABLE MARGIN](get-printable-margin.md)  
[Print form](../commands/print-form.md)  