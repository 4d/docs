---
id: redraw
title: REDRAW
slug: /commands/redraw
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW.Syntax-->**REDRAW** ( *objeto* )<!-- END REF-->
<!--REF #_command_.REDRAW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | any | &#8594;  | Tabla para la cual rediseñar el subformulario o Campo para el cual rediseñar el área o Variable para la cual rediseñar el área o Tabla del formulario a rediseñar en un navegador Web |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REDRAW.Summary-->Cuando utiliza un método para modificar el contenido de un campo o subcampo mostrado en un subformulario, debe ejecutar REDRAW para asegurar que el formulario esté correctamente actualizado.<!-- END REF--> .

En el contexto de los list boxes en modo selección, la instrucción REDRAW aplicada a un objeto de tipo list box provoca la actualización de los datos mostrados en el objeto. Esta instrucción debe llamarse típicamente después de una modificación de los datos en los registros de la selección.

#### Ver también 

[SET TIMER](set-timer.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 174 |
| Hilo seguro | &cross; |


