---
id: qr-get-sorts
title: QR GET SORTS
slug: /commands/qr-get-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SORTS.Syntax-->**QR GET SORTS** ( *area* ; *aColumnas* ; *aOrden* )<!-- END REF-->
<!--REF #_command_.QR GET SORTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| aColumnas | Real array | &#8592; | Columnas ordenadas |
| aOrden | Real array | &#8592; | Sentido de ordenación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR GET SORTS.Summary-->El comando QR GET SORTS llenas dos arrays:

* *aColumnas*  
Este array incluye todas las columnas que tienen un sentido de ordenación.<!-- END REF-->
* *aOrden*  
Cada elemento de este array contiene el sentido de ordenación de la columna correspondiente.  
\- Si *aOrden{$i}* es igual a 1, el sentido de la ordenación es ascendente.  
\- Si *aOrden{$i}* es igual -1, el sentido de la ordenación es descendente.

##### Informes tablas cruzadas 

En el caso de este tipo de informes, los arrays resultantes no pueden tener más de dos elementos ya que la ordenación sólo puede realizarse en las columnas (1) y las filas (2). (Valores para *aColumnas).*

Si pasa un número de area inválido, se genera el error -9850.

#### Ver también 

[QR SET SORTS](qr-set-sorts.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 753 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


