---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *attribName* {; *attribName2* ; ... ; *attribNameN*} )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribName* }{; *attribName2* ; ... ; *attribNameN*} )<br/>**WP RESET ATTRIBUTES** ( *targetObj* ; *attribColl* )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribColl*})<!-- END REF-->

<!--REF #_command_.WP RESET ATTRIBUTES.Params-->

| Parámetros          | Tipo       |                             | Descripción                                         |
| ------------------- | ---------- | --------------------------- | --------------------------------------------------- |
| targetObj           | Object     | &#8594; | Range or element or 4D Write Pro document           |
| sectionOrSubsection | Object     | &#8594; | Section or subsection of a 4D Write Pro document    |
| attribName          | Text       | &#8594; | Nombre de atributo(s) a eliminar |
| attribColl          | Collection | &#8594; | Collection of attributes to remove                  |

<!-- END REF-->

## Descripción

El comando **WP RESET ATTRIBUTES** <!--REF #_command_.WP RESET ATTRIBUTES.Summary--> le permite restablecer el valor de uno o más atributos en el rango, elemento o documento pasado como parámetro.<!-- END REF--> Este comando puede eliminar cualquier tipo de atributo interno 4D Write Pro: carácter, párrafo, documento, tabla o imagen. You can pass the attribute name to be reset in *attribName* or you can pass a collection of attributes in *attribColl* to reset multiple attributes at once.

> In the case of a section or a subsection, the *sectionOrSubsection* object can be passed alone and all the attributes are reset at once.

In the *targetObj* parameter, you can pass either:

- un rango, o
- un elemento (encabezado / pie de página / cuerpo / tabla / párrafo / imagen anclada / sección / subsección / hoja de estilo), o
- a 4D Write Pro document

When an attribute value is removed using the **WP RESET ATTRIBUTES** command, the default value is applied to *targetObj* or *sectionOrSubsection*. Default values are listed in the *4D Write Pro Attributes* section.

:::note Notas

- When **WP RESET ATTRIBUTES** is applied to a section/sub-section object, attributes are then inherited from the parent section or document.
- When **WP RESET ATTRIBUTES** is applied to a style sheet object, the attributes are removed from the style sheet unless it is the default ("Normal") style sheet. In this case, the default value is applied to the attribute (the "Normal" style sheet defines all style sheet attributes).
- When *sectionOrSubsection* is not a section nor a subsection and if no attribute is provided, then an error is raised.

:::

If the attribute to be reset was not defined in the element passed as a parameter, the command does nothing.

## Ejemplo 1

You want to remove several attributes from the following selection:

![](../../assets/en/WritePro/commands/pict2643861.en.png)

Puede ejecutar:

```4d
 $range:=WP Get selection(*;"WParea")
 WP RESET ATTRIBUTES($range;wk padding)
 WP RESET ATTRIBUTES($range;wk background color)
 WP RESET ATTRIBUTES($range;wk text underline style)
 WP RESET ATTRIBUTES($range;wk margin)
 WP RESET ATTRIBUTES($range;wk border style)
```

The resulting document is:

![](../../assets/en/WritePro/commands/pict2643863.en.png)

## Ejemplo 2

You want to remove several attributes using a collection:

```4d
$myRange:=WP Get selection(*;"WParea")
$myCollection:=New collection(wk font size; wk background color; wk border style)
WP RESET ATTRIBUTES($myRange; $myCollection)
 
```

## Ejemplo 3

```4d
$section:=WP Get section($document; 3)
WP RESET ATTRIBUTES($section)  // All attributes of the section are removed
$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)
WP RESET ATTRIBUTES($subSection) // All attributes of the subSection are removed
```

## Ver también

*4D Write Pro Attributes*\
[WP GET ATTRIBUTES](wp-get-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)
