---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* : Object ; *subSectionType* : Integer )<br/>**WP DELETE SUBSECTION** ( *subSection* : Object )<!-- END REF-->

<!--REF #_command_.WP DELETE SUBSECTION.Params-->

| Parámetros     | Tipo    |                             | Descripción                                                                          |
| -------------- | ------- | --------------------------- | ------------------------------------------------------------------------------------ |
| wpSection      | Object  | &#8594; | Sección 4D Write Pro                                                                 |
| subSectionType | Integer | &#8594; | Tipo de subsección (wk first page, wk left page, o wk right page) |
| subSection     | Object  | &#8594; | Subsección 4D Write Pro                                                              |

<!-- END REF-->

## Descripción

El comando **WP DELETE SUBSECTION** <!--REF #_command_.WP DELETE SUBSECTION.Summary-->elimina los elementos *subSectionType* de la sección *wpSection* 4D Write Pro, o directamente elimina la *subSection*<!-- END REF-->. Los elementos de subsección incluyen encabezados, pies de página, columnas, imágenes ancladas, etc. Tenga en cuenta que el cuerpo del documento no se modifica.

En *wpSection*, pase la sección de la que desea eliminar los elementos de subsección. La sección puede obtenerse utilizando los comandos [WP Get sections](../commands-legacy/wp-get-sections.md) o [WP Get section](../commands-legacy/wp-get-section.md).

El parámetro *subSectionType* especifica la subsección a borrar. Puede pasar una de las siguientes constantes:

| Constante     | Tipo    | Valor |
| ------------- | ------- | ----- |
| wk first page | Integer | 1     |
| wk left page  | Integer | 2     |
| wk right page | Integer | 3     |

:::note

Al eliminar una subsección de la página izquierda o derecha, se eliminará automáticamente la subsección opuesta. Por ejemplo, si elimina una subsección de la página derecha, la subsección de la página izquierda se elimina automáticamente.

:::

Si *subSectionType* no existe, el comando no hace nada (no se genera ningún error).

:::note

Cuando se suprime una subsección, se eliminan el encabezado y el pie de página, así como las imágenes ancladas y los cuadros de texto, pero el cuerpo permanece intacto.

:::

## Ejemplo 1

Desea eliminar la subsección de la primera página de la primera sección:

```4d
 var $section;$subsection : Object
  // obtener la primera sección
 $section:=WP Get section(wpDoc;1)
  // Eliminar la subsección
 WP DELETE SUBSECTION($section;wk first page)
```

## Ejemplo 2

Desea eliminar la subsección de la página derecha de la sección 3:

```4d

$subSection:=WP Get subsection(WP Get section($document;3);wk right page)
 WP DELETE SUBSECTION($subSection)
 
```

## Ver también

[WP Get subsection](../commands-legacy/wp-get-subsection.md)\
[WP New subsection](../commands-legacy/wp-new-subsection.md)