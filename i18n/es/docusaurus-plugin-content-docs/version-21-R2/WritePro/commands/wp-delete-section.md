---
id: wp-delete-section
title: WP DELETE SECTION
slug: /WritePro/commands/wp-delete-section
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SECTION.Syntax-->**WP DELETE SECTION** ( *section* : Object )<br/> **WP DELETE SECTION** ( *wpDoc* : Object ; *indexNumber* : Integer {; *count* : Integer} )<!-- END REF-->

<!--REF #_command_.WP DELETE SECTION.Params-->

| Parámetros  | Tipo    |                             | Descripción                     |
| ----------- | ------- | --------------------------- | ------------------------------- |
| sección     | Object  | &#8594; | Sección 4D Write Pro            |
| wpDoc       | Object  | &#8594; | Documento 4D Write Pro          |
| indexNumber | Integer | &#8594; | Índice de la sección a eliminar |
| count       | Integer | &#8594; | Número de secciones a eliminar  |

<!-- END REF-->

## Descripción

El comando **WP DELETE SECTION** <!--REF #_command_.WP DELETE SECTION.Summary-->elimina el objeto *section* pasado, o elimina una o más secciones comenzando por *indexNumber* y dependiendo del *count* pasado<!-- END REF-->. Cuando se elimina una sección, también se elimina todo lo asociado a ella, incluido el encabezado, el pie de página, parte del cuerpo, las imágenes ancladas, los cuadros de texto y el salto de sección final (ya sea un salto de sección o un salto de sección continuo).

Se produce un error si el comando **WP DELETE SECTION** solicita eliminar todas las secciones o si el documento sólo contiene una sección.

**WP DELETE SECTION** vuelve a indexar el atributo anchorSection de cuadros de texto e imágenes para ajustar sus anclajes a sus secciones tras las modificaciones. Por ejemplo, si un documento tiene cuatro secciones y se suprime la segunda, las secciones 3 y 4 pasarán a ser las secciones 2 y 3, y los cuadros de texto y las imágenes que antes estaban anclados a las secciones 3 y 4 ahora lo estarán a las secciones 2 y 3.

:::note

Si una imagen o un cuadro de texto está anclado a una página (por ejemplo, la página 20) y esta página ya no existe después de eliminar una sección, la imagen (o el cuadro de texto) permanecerá en el documento y volverá a aparecer en la página 20 si esta página vuelve a existir más adelante.

:::

## Ejemplos

Para eliminar la primera sección del documento:

```4d

wpDoc:=WP Import document("test.wp")
// eliminar sólo la sección 1 (sin error a menos que sólo haya una sección en el documento)
WP DELETE SECTION(wpDoc ; 1) 

```

Eliminar la sección 5 del documento:

```4d

wpDoc:=WP Import document("test.wp")
// eliminar sólo la sección 5
WP DELETE SECTION(wpDoc ; 5)

```

Eliminar las secciones 5, 6 y 7 del documento:

```4d
 
wpDoc:=WP Import document("test.wp")
WP DELETE SECTION(wpDoc ; 5 ; 3 )

```

Para eliminar todas las secciones a partir de la 5:

```4d
 
wpDoc:=WP Import document("test.wp")
// eliminar todas las secciones a partir de la sección 5 (sin error a menos que la sección 5 no exista)
WP DELETE SECTION(wpDoc ; 5 ; MAXLONG )

```

Para recuperar y eliminar la sección 5:

```4d
 
wpDoc:=WP Import document("test.wp")
// obtener sección 5
$section:=WP Get section(wpDoc, 5)
// eliminar $section
WP DELETE SECTION($section)

```

## Ver también

[WP Get section](../commands-legacy/wp-get-section.md)\
[WP RESET ATTRIBUTES](wp-reset-attributes.md)
