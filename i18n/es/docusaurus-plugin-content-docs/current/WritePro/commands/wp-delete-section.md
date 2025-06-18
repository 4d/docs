---
id: wp-delete-section
title: WP DELETE SECTION
slug: /WritePro/commands/wp-delete-section
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SECTION.Syntax-->**WP DELETE SECTION** ( *section* )<br/> **WP DELETE SECTION** ( *wpDoc* ; *indexNumber* {; *count*} )<!-- END REF-->

<!--REF #_command_.WP DELETE SECTION.Params-->

| Parámetros  | Tipo    |                             | Descripción                     |
| ----------- | ------- | --------------------------- | ------------------------------- |
| sección     | Object  | &#8594; | Sección 4D Write Pro            |
| wpDoc       | Object  | &#8594; | Documento 4D Write Pro          |
| indexNumber | Integer | &#8594; | Índice de la sección a eliminar |
| count       | Integer | &#8594; | Número de secciones a eliminar  |

<!-- END REF-->

## Descripción

El comando **WP DELETE SECTION** <!--REF #_command_.WP DELETE SECTION.Summary-->elimina el objeto *section* pasado, o elimina una o más secciones comenzando por *indexNumber* y dependiendo del *count* pasado<!-- END REF-->. When a section is removed, everything associated with it, including the header, footer, part of the body, anchored pictures, text boxes, and the ending section break (whether a section break or continuous section break), is also removed.

An error is raised if the **WP DELETE SECTION** command requests to delete all sections or if the document contains only one section.

**WP DELETE SECTION** re-indexes the anchorSection attribute of text boxes and pictures to adjust their anchors to their sections after changes. For example, if a document has four sections and the second section is deleted, sections 3 and 4 will become sections 2 and 3 and text boxes and pictures that were previously anchored to sections 3 and 4 will now be anchored to sections 2 and 3.

:::note

If an image or textbox is anchored to a page (e.g., page 20) and this page no longer exists after a section has been deleted, the image (or textbox) will remain in the document and will reappear on page 20 if this page ever exists again later.

:::

## Ejemplos

Para eliminar la primera sección del documento:

```4d

wpDoc:=WP Import document("test.wp")
// remove section 1 only (without error unless there is only one section in the document)
WP DELETE SECTION(wpDoc ; 1) 

```

Eliminar la sección 5 del documento:

```4d

wpDoc:=WP Import document("test.wp")
// remove section 5 only
WP DELETE SECTION(wpDoc ; 5)

```

To remove section 5, 6 and 7 of the document:

```4d
 
wpDoc:=WP Import document("test.wp")
WP DELETE SECTION(wpDoc ; 5 ; 3 )

```

Para eliminar todas las secciones a partir de la 5:

```4d
 
wpDoc:=WP Import document("test.wp")
// remove all sections starting at section 5 (without error unless section 5 does not exist)
WP DELETE SECTION(wpDoc ; 5 ; MAXLONG )

```

Para recuperar y eliminar la sección 5:

```4d
 
wpDoc:=WP Import document("test.wp")
// get section 5
$section:=WP Get section(wpDoc, 5)
// remove $section
WP DELETE SECTION($section)

```

## Ver también

[WP Get section](../commands-legacy/wp-get-section.md)\
[WP RESET ATTRIBUTES](wp-reset-attributes.md)
