---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<br/>**WP DELETE SUBSECTION** ( *subSection* )<!-- END REF-->

<!--REF #_command_.WP DELETE SUBSECTION.Params-->

| Parámetros     | Tipo    |                             | Descripción                                                                          |
| -------------- | ------- | --------------------------- | ------------------------------------------------------------------------------------ |
| wpSection      | Object  | &#8594; | Sección 4D Write Pro                                                                 |
| subSectionType | Integer | &#8594; | Tipo de subsección (wk first page, wk left page, o wk right page) |
| subSection     | Object  | &#8594; | Subsección 4D Write Pro                                                              |

<!-- END REF-->

## Descripción

El comando **WP DELETE SUBSECTION** <!--REF #_command_.WP DELETE SUBSECTION.Summary-->elimina los elementos *subSectionType* de la sección *wpSection* 4D Write Pro, o directamente elimina la *subSection*<!-- END REF-->. Subsection elements include headers, footers, columns, anchored pictures, etc. Note that the body of the document is left untouched.

In *wpSection*, pass the section from which you want to remove the subsection elements. La sección puede obtenerse utilizando los comandos [WP Get sections](../commands-legacy/wp-get-sections.md) o [WP Get section](../commands-legacy/wp-get-section.md).

The *subSectionType* parameter specifes the subsection to delete. You can pass one of the following constants:

| Constante     | Tipo    | Valor |
| ------------- | ------- | ----- |
| wk first page | Integer | 1     |
| wk left page  | Integer | 2     |
| wk right page | Integer | 3     |

:::note

Deleting a left page or right page subsection will automatically delete the opposite subsection. For example, if you delete a right page subsection, the left page subsection is automatically deleted.

:::

If the *subSectionType* does not exist, the command does nothing (no error is generated).

:::note

When a subsection is deleted, the header and footer are removed, as well as anchored pictures and textboxes but the body remains untouched.

:::

## Ejemplo 1

You want to delete the first page subsection of the first section:

```4d
 var $section;$subsection : Object
  // obtener la primera sección
 $section:=WP Get section(wpDoc;1)
  // Eliminar la subsección
 WP DELETE SUBSECTION($section;wk first page)
```

## Ejemplo 2

You want to delete the right page subsection of section 3:

```4d

$subSection:=WP Get subsection(WP Get section($document;3);wk right page)
 WP DELETE SUBSECTION($subSection)
 
```

## Ver también

[WP Get subsection](../commands-legacy/wp-get-subsection.md)\
[WP New subsection](../commands-legacy/wp-new-subsection.md)