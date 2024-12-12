---
id: is-table-number-valid
title: Is table number valid
slug: /commands/is-table-number-valid
displayed_sidebar: docs
---

<!--REF #_command_.Is table number valid.Syntax-->**Is table number valid** ( *numTabla* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is table number valid.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla | Integer | &#8594;  | Número de tabla |
| Resultado | Boolean | &#8592; | True = la tabla existe en la base, False = la tabla no existe en la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is table number valid.Summary-->El comando Is table number valid devuelve True si la tabla cuyo número se pasa en el parámetro *numTabla* existe en la base, de lo contrario False.<!-- END REF--> Recuerde que el comando devuelve False si la tabla está en la Papelera del Explorador. 

Este comando permite detectar las eventuales eliminaciones de tablas, que crean rupturas en la secuencia de números de las tablas.

#### Ver también 

[Last table number](last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  