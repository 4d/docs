---
id: wp-delete-footer
title: WP DELETE FOOTER
slug: /WritePro/commands/wp-delete-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE FOOTER.Syntax-->**WP DELETE FOOTER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE FOOTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Sección o subsección 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP DELETE FOOTER.Summary-->El comando **WP DELETE FOOTER** elimina el elemento del pie de página asociado a la sección o subsección definida por el parámetro *wpSection*.<!-- END REF--> 

Si no existe un elemento de pie de página para la sección o subsección, el comando no hace nada.

#### Ejemplo 

Desea eliminar el pie de página de las páginas de la izquierda de una sección:

```4d
 var $section;$subsection;$header : Object
  //Recupere la referencia en la primera sección
 $section:=WP Get section(wpDoc;1)
  //Recupere la referencia en la subsección izquierda de la primera sección
 $subsection:=WP Get subsection($section;wk left page)
 
  //Elimina el pie de página
 WP DELETE FOOTER($subsection)
```

#### Ver también 

[WP Get footer](wp-get-footer.md)  
[WP New footer](wp-new-footer.md)  