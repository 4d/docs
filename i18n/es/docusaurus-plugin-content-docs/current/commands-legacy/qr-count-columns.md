---
id: qr-count-columns
title: QR Count columns
slug: /commands/qr-count-columns
displayed_sidebar: docs
---

<!--REF #_command_.QR Count columns.Syntax-->**QR Count columns** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Count columns.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| Resultado | Integer | &#8592; | Número de columnas en el área |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QR Count columns.Summary-->El comando QR Count columns devuelve el número de columnas presentes en el *area* del informe rápido.<!-- END REF-->

Si pasa un número de *area* inválido, se genera el error -9850.

#### Ejemplo 

El siguiente código permite añadir una columna adicional a la derecha de la última columna del área:

```4d
 $ColNb:=QR Count columns(MiArea)
 QR INSERT COLUMN(MiArea;$ColNb+1;->[Tabla 1]Campo2)
```

#### Ver también 

[QR DELETE COLUMN](qr-delete-column.md)  
[QR INSERT COLUMN](qr-insert-column.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 764 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


