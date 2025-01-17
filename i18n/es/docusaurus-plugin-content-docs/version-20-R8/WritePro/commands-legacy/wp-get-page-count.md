---
id: wp-get-page-count
title: WP Get page count
slug: /WritePro/commands/wp-get-page-count
displayed_sidebar: docs
---

<!--REF #_command_.WP Get page count.Syntax-->**WP Get page count** ( *targetObj* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get page count.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | Documento 4D Write Pro |
| Resultado | Integer | &#8592; | Número de páginas en el documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get page count.Summary-->El comando **WP Get page count** devuelve el número total de páginas definido en el *objRango* pasado en parámetro.<!-- END REF-->

En *objRango*, puede pasar:

* una sección / subsección, o
* un documento 4D Write Pro

El comando devuelve el número de páginas de *objRango*. Si pasa una subsección, se devuelve el número de páginas de la sección padre.

La misma configuración de visualización que para el comando [WP PRINT](wp-print.md) se usa con **WP Get page count**:

* encabezados: visible
* pies de página: visible
* expresiones: computadas y mostradas
* modo de página: página o borrador

Si *objRango* se muestra en un área de formulario 4D Write Pro, asegúrese de que la configuración de visualización del área coincida con la configuración de visualización del comando para obtener información coherente. Tenga en cuenta también que si estas configuraciones son diferentes en el área, 4D Write Pro tendrán que "clonar" el documento para calcular el diseño en cada llamada del comando, lo que puede llevar mucho tiempo. Por motivos de rendimiento, en este caso, se recomienda construir el documento fuera de línea y copiarlo en el área de objetos de formulario solo cuando se complete la compilación.

#### Ejemplo 

Usted quiere saber el número total de páginas de documentos 4D Write Pro almacenados en el campo "Manual" dentro de la selección actual de elementos. Puede escribir:

```4d
 var $pageCount : Integer
 var $totalCount : Integer
 FIRST RECORD([Items])
 While(Not(End selection([Items]))
    $pageCount:=WP Get page count([Items]Manual)
    $totalCount:=$totalCount+$pageCount
    NEXT RECORD([Items])
 End while
 ALERT("Número total de páginas del manual: "+String($totalCount))
```
