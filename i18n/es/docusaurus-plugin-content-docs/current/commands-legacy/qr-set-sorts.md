---
id: qr-set-sorts
title: QR SET SORTS
slug: /commands/qr-set-sorts
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SORTS.Syntax-->**QR SET SORTS** ( *area* ; *aColumnas* {; *aOrden*} )<!-- END REF-->
<!--REF #_command_.QR SET SORTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| aColumnas | Real array | &#8594;  | Columnas |
| aOrden | Real array | &#8594;  | Sentido de ordenación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR SET SORTS.Summary-->El comando QR SET SORTS permite definir el sentido de ordenación de cada columna del informe rápido cuya referencia se pasa en *area*.<!-- END REF-->

*aColumnas*: debe almacenar en este array el número de cada columna para la cual quiere definir un sentido de ordenación. 

*aOrden*: cada elemento de este array debe contener el sentido de ordenación para la columna correspondiente referenciada en el array *aColumnas*. 

* Si *aOrden{$i}* es igual a 1, el sentido de la ordenación es ascendente.
* Si *aOrden{$i}* es igual a - 1, el sentido de la ordenación es descendiente.

##### Informes tablas cruzadas 

En el caso de este tipo de informes, el array no puede tener más de dos elementos. Únicamente puede ordenar las columnas (1) y las filas (2). Los datos (situados en la intersección de las columnas y las líneas) no pueden ordenarse con este comando.

Este es el código para ordenar sólo las líneas en caso de un informe de tablas cruzadas:

```4d
 ARRAY REAL($aColumnas;1)
 $aColumnas{1}:=2
 ARRAY REAL($aOrdenes;1)
 $aOrden{1}:=-1 //Orden alfabético de las líneas
 QR SET SORTS(qr_area;$aColumnas;$aOrden)
```

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ver también 

[QR GET SORTS](qr-get-sorts.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 752 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


