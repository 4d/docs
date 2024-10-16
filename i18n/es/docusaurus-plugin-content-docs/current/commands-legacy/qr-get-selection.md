---
id: qr-get-selection
title: QR GET SELECTION
slug: /commands/qr-get-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SELECTION.Syntax-->**QR GET SELECTION** ( *area* ; *izquierda* ; *superior* {; *derecha* {; *inferior*}} )<!-- END REF-->
<!--REF #_command_.QR GET SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &rarr; | Referencia del área |
| izquierda | Integer | &larr; | Límite izquierdo |
| superior | Integer | &larr; | Límite superior |
| derecha | Integer | &larr; | Límite derecho |
| inferior | Integer | &larr; | Límite inferior |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR GET SELECTION.Summary-->El comando QR GET SELECTION devuelve las coordenadas de la selección actual de *area*.<!-- END REF-->

*izquierdo* devuelve el número de la columna que es el límite izquierdo de la selección. Si *izquierdo* es igual a 0, toda la línea es seleccionada. 

*superior* devuelve el número de la línea que es el límite superior de la selección. Si *superior* es igual a 0, toda la columna es seleccionada.

**Nota:** si *izquierdo* y *superior* son iguales a 0, toda el área es selecionada.

*derecho* es el número de la columna que es el límite derecho de la selección.

*inferior* es el número de la fila que es el límite superior de la selección.

**Nota:** si no hay selección, los parámetros *izquierdo*, *superior*, *derecho* e *inferior* toman el valor -1.

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

[QR SET SELECTION](qr-set-selection.md)  