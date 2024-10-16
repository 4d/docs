---
id: wp-delete-header
title: WP DELETE HEADER
slug: /WritePro/commands/wp-delete-header
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE HEADER.Syntax-->**WP DELETE HEADER**  ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE HEADER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Sección o subsección 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP DELETE HEADER.Summary-->El comando **WP DELETE HEADER**  elimina el elemento del encabezado asociado a la sección o subsección definida por el parámetro *wpSection*.<!-- END REF--> 

Si no existe un elemento de encabezado para la sección o subsección, el comando no hace nada.

#### Ejemplo 

Desea eliminar el encabezado de las páginas correctas de una sección:

```4d
 var $section;$subsection;$header : Object
  //Recupera la referencia en la primera sección
 $section:=WP Get section(wpDoc;1)
  //Recupera la referencia en la subsección de la izquierda de la primera sección
 $subsection:=WP Get subsection($section;wk right page)
 
  //Elimina el encabezado
 WP DELETE HEADER($subsection)
```

#### Ver también 

[WP Get header](wp-get-header.md)  
[WP New header](wp-new-header.md)  