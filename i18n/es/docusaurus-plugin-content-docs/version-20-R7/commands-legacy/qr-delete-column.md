---
id: qr-delete-column
title: QR DELETE COLUMN
slug: /commands/qr-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE COLUMN.Syntax-->**QR DELETE COLUMN** ( *area* ; *numColumna* )<!-- END REF-->
<!--REF #_command_.QR DELETE COLUMN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| numColumna | Integer | &#8594;  | Número de columna |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR DELETE COLUMN.Summary-->El comando QR DELETE COLUMN borra del *area* la columna cuyo número se pasó en *numColumna*.<!-- END REF--> Este comando no aplica a los informes de tablas cruzadas.

Si pasa un número de *area* inválido, se genera el error -9850.  
Si el parámetro *numcolumn*a es incorrecto, se genera el error -9852.

#### Ejemplo 

El siguiente ejemplo se asegura de que el informe sea listado y borra la tercera columna: 

```4d
 If(QR Get report kind(MyArea)=qr list report)
    QR DELETE COLUMN(MiArea;3)
 End if
```

#### Ver también 

[QR INSERT COLUMN](qr-insert-column.md)  