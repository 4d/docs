---
id: qr-set-selection
title: QR SET SELECTION
slug: /commands/qr-set-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SELECTION.Syntax-->**QR SET SELECTION** ( *area* ; *izquierda* ; *superior* {; *derecha* {; *inferior*}} )<!-- END REF-->
<!--REF #_command_.QR SET SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| izquierda | Integer | &#8594;  | Límite izquierdo |
| superior | Integer | &#8594;  | Límite superior |
| derecha | Integer | &#8594;  | Límite derecho |
| inferior | Integer | &#8594;  | Límite inferior |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET SELECTION.Summary-->El comando QR SET SELECTION permite seleccionar una celda, una fila, una columna o toda un *area* como lo haría con un ratón.<!-- END REF--> Este comando también le permite deseleccionar la selección actual.

*izquierdo* es el número del límite izquierdo. Si *izquierdo* es igual a 0, toda la línea es seleccionada.  
*superior* es el número del límite superior. Si *superior* es igual a 0, toda la columna es seleccionada.  
*derecho* es el número del límite derecho.  
*inferior e*s el número del límite inferior.

**Notas:**  
• Si *izquierdo* y *superior* son iguales a 0, toda el área es seleccionada.  
• Para deseleccionar todo, pase -1 en *izquierdo*, *derecho*, *superior* e *inferior*.

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

[QR GET SELECTION](qr-get-selection.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 794 |
| Hilo seguro | &cross; |
| Modifica variables | error |


