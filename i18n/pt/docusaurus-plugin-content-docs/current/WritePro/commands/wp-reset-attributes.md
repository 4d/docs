---
id: wp-reset-attributes
title: WP RESET ATTRIBUTES
displayed_sidebar: docs
---

<!--REF #_command_.WP RESET ATTRIBUTES.Syntax-->**WP RESET ATTRIBUTES** ( *targetObj* ; *attribName* {; *attribName2* ; ... ; *attribNameN*} )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribName* }{; *attribName2* ; ... ; *attribNameN*} )<br/>**WP RESET ATTRIBUTES** ( *targetObj* ; *attribColl* )<br/> **WP RESET ATTRIBUTES** ( *sectionOrSubsection* {; *attribColl*})<!-- END REF-->

<!--REF #_command_.WP RESET ATTRIBUTES.Params-->

| Parâmetro           | Tipo       |   | Descrição                                         |
| ------------------- | ---------- | - | ------------------------------------------------- |
| targetObj           | Object     | → | Range or element or 4D Write Pro document         |
| sectionOrSubsection | Object     | → | Section or subsection of a 4D Write Pro document  |
| attribName          | Text       | → | Name of attribute(s) to remove |
| attribColl          | Collection | → | Collection of attributes to remove                |

<!-- END REF-->

#### Descrição

The **WP RESET ATTRIBUTES** command <!--REF #_command_.WP RESET ATTRIBUTES.Summary--> allows you to reset the value of one or more attributes in the range, element, or document passed as parameter.<!-- END REF--> This command can remove any kind of 4D Write Pro internal attribute: character, paragraph, document, table, or image. You can pass the attribute name to be reset in *attribName* or you can pass a collection of attributes in *attribColl* to reset multiple attributes at once.

> In the case of a section or a subsection, the *sectionOrSubsection* object can be passed alone and all the attributes are reset at once.

In the *targetObj* parameter, you can pass either:

- a range, or
- an element (header / footer / body / table / paragraph / anchored or inline picture / section / subsection / style sheet), or
- a 4D Write Pro document

When an attribute value is removed using the **WP RESET ATTRIBUTES** command, the default value is applied to *targetObj* or *sectionOrSubsection*. Default values are listed in the *4D Write Pro Attributes* section.

:::note Notas

- When **WP RESET ATTRIBUTES** is applied to a section/sub-section object, attributes are then inherited from the parent section or document.
- When **WP RESET ATTRIBUTES** is applied to a style sheet object, the attributes are removed from the style sheet unless it is the default ("Normal") style sheet. In this case, the default value is applied to the attribute (the "Normal" style sheet defines all style sheet attributes).
- When *sectionOrSubsection* is not a section nor a subsection and if no attribute is provided, then an error is raised.

:::

If the attribute to be reset was not defined in the element passed as a parameter, the command does nothing.

#### Exemplo 1

You want to remove several attributes from the following selection:

![](../../assets/en/WritePro/commands/pict2643861.en.png)

You can execute:

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

#### Exemplo 2

You want to remove several attributes using a collection:

```4d
$myRange:=WP Get selection(*;"WParea")
$myCollection:=New collection(wk font size; wk background color; wk border style)
WP RESET ATTRIBUTES($myRange; $myCollection)
 
```

#### Exemplo 3

```4d
$section:=WP Get section($document; 3)
WP RESET ATTRIBUTES($section)  // All attributes of the section are removed
$subSection:=WP Get subsection(WP Get section($document; 3); wk left page)
WP RESET ATTRIBUTES($subSection) // All attributes of the subSection are removed
```

#### Veja também

*4D Write Pro Attributes*\
[WP GET ATTRIBUTES](wp-get-attributes.md)\
[WP SET ATTRIBUTES](wp-set-attributes.md)
