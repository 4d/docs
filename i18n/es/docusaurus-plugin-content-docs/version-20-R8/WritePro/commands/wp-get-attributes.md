---
id: wp-get-attributes
title: WP Get attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP Get attributes.Syntax-->**WP Get attributes** ( *targetObj* ; *attribName* ; *attribValue* {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<br/>**WP Get attributes** ( *targetObj* ; *attribColl* ) : Object<!-- END REF-->

<!--REF #_command_.WP Get attributes.Params-->

| Parámetros  | Tipo                                           |   | Descripción                               |
| ----------- | ---------------------------------------------- | - | ----------------------------------------- |
| targetObj   | Object                                         | → | Range or element or 4D Write Pro document |
| attribName  | Text                                           | → | Name of attribute to get                  |
| attribValue | Text, Number, Array, Collection, Picture, Date | ← | Current value of attribute for the target |
| attribColl  | Collection                                     | → | Collection of attribute names to get      |
| Resultado   | Object                                         | ← | Attribute names and values                |

<!-- END REF-->

#### Descripción

The **WP Get attributes** command<!--REF #_command_.WP Get attributes.Summary--> returns the value of any attribute in a 4D Write Pro range, header, body, footer, table, or document.<!-- END REF--> This command gives you access to any kind of 4D Write Pro internal attributes: character, paragraph, document, table, or image.

In *targetObj*, you can pass:

- un rango, o
- un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen anclada / sección / subsección / hoja de estilo), o
- a 4D Write Pro document

In *attribName*, pass the name of the attribute you want to retrieve.

You can also pass a collection of attribute names in *attribColl*, in which case the command will return an object containing the attribute names passed in *attribColl* along with their corresponding values.

For a comprehensive list of attributes to pass, as well as their scope and values, please refer to the *4D Write Pro Attributes* section.

If there are different values for the same attribute in the element passed as a parameter, the command returns:

- for numerical values, wk mixed
- for an array, an empty array (tab stops, color if *attribValue* is defined as array), with an exception for wk text shadow offset for which the array value will always contain 2 entries which may be set separately to wk mixed if either horizontal offset or vertical offset (or both) are mixed.
- for string values, an empty string
- for picture values, an empty picture.

**Note**: If *targetObj* contains a paragraph and a character style sheets, the paragraph style sheet name is returned.

#### Ejemplo 1

You want to get the background color of the selected area:

```4d
 $range:=WP Selection range(*;"WParea")
 WP Get attributes($range;wk background color;$bcol)
```

#### Ejemplo 2

You want to get the font size, background color and border style of the selected area using a collection:

```4d
 $range:=WP Selection range(*;"WParea")
 $collection:=New collection(wk font size; wk background color; wk border style)
 $attributes:=WP Get attributes($range; $collection)
 
```

#### Ver también

[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)
