---
id: qr-insert-column
title: QR INSERT COLUMN
slug: /commands/qr-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.QR INSERT COLUMN.Syntax-->**QR INSERT COLUMN** ( *area* ; *numColumna* ; *objeto* )<!-- END REF-->
<!--REF #_command_.QR INSERT COLUMN.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | Referencia del área |
| numColumna | Integer | &#8594;  | Número de columna |
| objeto | Field, Variable, Pointer | &#8594;  | Objeto a insertar en la columna |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.QR INSERT COLUMN.Summary-->El comando QR INSERT COLUMN inserta o crea una columna en una posición específica.<!-- END REF--> Las columnas situadas a la derecha de la columna añadida serán desplazadas en consecuencia.

*posicion* es el número de la columna, establecida de izquierda a derecha. 

El título por defecto de la columna será el valor pasado en *objeto*.

Si pasa un número de *area* inválido, se genera el error -9850.

**Nota:** este comando no puede ser utilizado con un informe tabla cruzada.

#### Ejemplo 

La siguiente instrucción inserta (o crea) una primera columna en el área MiArea, inserta “Campo1” como título de la columna (comportamiento por defecto) y llena el contenido del cuerpo con los valores del Campo1.

```4d
 QR INSERT COLUMN(MiArea;1;->[Tabla 1]Campo1)
```

#### Ver también 

[QR DELETE COLUMN](qr-delete-column.md)  