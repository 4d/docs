---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Posición del marcador |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get printed height.Summary-->El comando Get printed height devuelve la altura global (en píxeles) de la sección impresa por el comando [Print form](print-form.md "Print form").<!-- END REF-->

El valor devuelto estará entre 0 (el borde superior de la página) y la altura total devuelta por el comando [GET PRINTABLE AREA](get-printable-area.md "GET PRINTABLE AREA") (el tamaño máximo del área de impresión). 

Si imprime una nueva sección utilizando el comando [Print form](print-form.md "Print form"), la altura de la nueva sección se añade a este valor. Si el área de impresión disponible es insuficiente para contener esta sección, se genera una nueva página y el valor devuelto es 0.

Los márgenes de impresión derecha e izquierda no influyen en el valor devuelto, a diferencia de las márgenes inferior y superior (las cuales pueden definirse utilizando el comando [SET PRINTABLE MARGIN](set-printable-margin.md "SET PRINTABLE MARGIN")).

**Nota:** para mayor información sobre gestión de impresión y terminología en 4D, consulte la descripción del comando [GET PRINTABLE MARGIN](get-printable-margin.md "GET PRINTABLE MARGIN"). 

#### Ver también 

[GET PRINTABLE AREA](get-printable-area.md)  
[Print form](print-form.md)  
[SET PRINTABLE MARGIN](set-printable-margin.md)  