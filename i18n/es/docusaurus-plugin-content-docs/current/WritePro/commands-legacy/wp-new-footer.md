---
id: wp-new-footer
title: WP New footer
slug: /WritePro/commands/wp-new-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP New footer.Syntax-->**WP New footer** ( *wpSection* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New footer.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Sección o subsección 4D Write Pro |
| Resultado | Object | &#8592; | Pie 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP New footer.Summary-->El comando **WP New footer** crea y devuelve el pie de página asociado a la sección o subsección definida por el parámetro *wpSection*.<!-- END REF-->

Si un elemento de pie de página ya está definido para la sección o subsección, se devuelve un objeto indefinido y se genera un error.

#### Ejemplo 

Desea crear un pie de página para las páginas de la izquierda de una sección:

```4d
 var $section;$subsection;$footer : Object
  //Recupera la primera sección
 $section:=WP Get section(wpDoc;1)
  //Recupera la referencia en la subsección izquierda de la primera sección
 $subsection:=WP Get subsection($section;wk left page)
 
  //Si la subsección existe, configure el pie de página
 If($subsection#Null)
    $footer:=WP New footer($subsection)
 End if
```

#### Ver también 

[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  