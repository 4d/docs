---
id: qr-find-column
title: QR Find column
slug: /commands/qr-find-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Find column.Syntax-->**QR Find column** ( *area* ; *expresion* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Find column.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| expresion | Text, Pointer | &#8594;  | Objeto de columna |
| Resultado | Integer | &#8592; | Número de columna |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR Find column.Summary-->El comando QR Find column devuelve el número de la primera columna cuyo contenido corresponde a la *expresion* pasada en parámetro.<!-- END REF-->

*expresion* puede ser una cadena o un puntero.

QR Find column devuelve –1 si no se encuentra nada.

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ejemplo 

El siguiente código permite recuperar el número de la columna que contiene el campo \[G.NQR Tests\]Trimestre y borra esa columna:

```4d
 $NumColumn:=QR Find column(MiArea;->[G.NQR Tests]Trimestre)
```

o:  
$NumColumn:=QR Find column (MiArea; "\[G.NQR Tests\]Trimestre")

```4d
 If($NumColumn#-1)
    QR DELETE COLUMN(MiArea;$NumColumn)
 End if
```
