---
id: wp-new-header
title: WP New header
slug: /WritePro/commands/wp-new-header
displayed_sidebar: docs
---

<!--REF #_command_.WP New header.Syntax-->**WP New header** ( *wpSection* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP New header.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Sección o subsección 4D Write Pro |
| Resultado | Object | &#8592; | Encabezado 4D Write Pro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP New header.Summary-->El comando **WP New header** crea y devuelve el encabezado asociado a la sección o subsección definida por el parámetro *wpSection*.<!-- END REF-->

Si ya se ha definido un elemento de encabezado para la sección o subsección, se devuelve un objeto *indefinido* y se genera un error.

#### Ejemplo 

Desea crear un encabezado para las páginas correctas de una sección:

```4d
 var $section;$subsection;$header : Object
  //Recupera la primera sección
 $section:=WP Get section(wpDoc;1)
  //Recupera la subsección de la primera sección
 $subsection:=WP Get subsection($section;wk right page)
 
  //Si la subsección existe, configura el encabezado
 If($subsection#Null)
    $header:=WP New header($subsection)
 End if
```

#### Ver también 

[WP DELETE HEADER ](wp-delete-header.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  