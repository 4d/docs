---
id: Styled_Text_theme
title: Texto multiestilo
sidebar_label: Texto multiestilo
slug: /commands/theme/Styled-Text
---

|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.ST COMPUTE EXPRESSIONS.Syntax -->](../../commands/st-compute-expressions)<br/> |
| [<!-- INCLUDE #_command_.ST FREEZE EXPRESSIONS.Syntax -->](../../commands/st-freeze-expressions)<br/>   |
| [<!-- INCLUDE #_command_.ST GET ATTRIBUTES.Syntax -->](../../commands/st-get-attributes)<br/>           |
| [<!-- INCLUDE #_command_.ST Get content type.Syntax -->](../../commands/st-get-content-type)<br/>       |
| [<!-- INCLUDE #_command_.ST Get expression.Syntax -->](../../commands/st-get-expression)<br/>           |
| [<!-- INCLUDE #_command_.ST GET OPTIONS.Syntax -->](../../commands/st-get-options)<br/>                 |
| [<!-- INCLUDE #_command_.ST Get plain text.Syntax -->](../../commands/st-get-plain-text)<br/>           |
| [<!-- INCLUDE #_command_.ST Get text.Syntax -->](../../commands/st-get-text)<br/>                       |
| [<!-- INCLUDE #_command_.ST GET URL.Syntax -->](../../commands/st-get-url)<br/>                         |
| [<!-- INCLUDE #_command_.ST INSERT EXPRESSION.Syntax -->](../../commands/st-insert-expression)<br/>     |
| [<!-- INCLUDE #_command_.ST INSERT URL.Syntax -->](../../commands/st-insert-url)<br/>                   |
| [<!-- INCLUDE #_command_.ST SET ATTRIBUTES.Syntax -->](../../commands/st-set-attributes)<br/>           |
| [<!-- INCLUDE #_command_.ST SET OPTIONS.Syntax -->](../../commands/st-set-options)<br/>                 |
| [<!-- INCLUDE #_command_.ST SET PLAIN TEXT.Syntax -->](../../commands/st-set-plain-text)<br/>           |
| [<!-- INCLUDE #_command_.ST SET TEXT.Syntax -->](../../commands/st-set-text)<br/>                       |

## Trabajando con comandos de manejo de texto

### Interfaz de usuario

Los comandos que pueden utilizarse para manipular objetos de texto por programación no tienen en cuenta ninguna etiqueta de estilo integrada en el texto. Sólo actúan sobre el texto visualizado. Esto afecta a los siguientes comandos:

- [User Interface](./User_Interface.md) theme commands
- [`HIGHLIGHT TEXT`](../../commands/highlight-text)
- [`GET HIGHLIGHT`](../../commands/get-highlight)

When you use these commands with commands that manipulate character strings, it is necessary to filter the formatting characters using the [`ST Get plain text`](../../commands/st-get-plain-text) command:

```4d
 HIGHLIGHT TEXT([Products]Notes;1;Length(ST Get plain text([Products]Notes))+1)
```

### Objetos (formularios)

The commands that can be used to modify the style of objects (for example, [`OBJECT SET FONT`](../../commands/object-set-font)) apply to the whole object and not to the selection.

If the object does not have the focus when the command is executed, the modification is applied simultaneously to the object (the text area) and to its associated variable. If the object does have the focus, the modification is carried out on the object but not on the associated variable. The modification is only applied to the variable when the object loses the focus. Keep this principle in mind when programming text areas.

:::note

If the [**Store with default style tags**](../../FormObjects/properties_Text.md#store-with-default-style-tags) option is checked for the object, the use of these commands will cause a modification of the tags saved with each object.

:::

Note also that only default properties are affected by these commands (as well as any properties saved by means of default tags). Custom style tags remain as they are. For example, given a multi-style area where default tags were saved:

![](../../assets/en/FormObjects/multistyle-ex1.png)

El texto sin formato del área es el siguiente:

```html
<span style="text-align:left;font-family:'Segoe UI';font-size:9pt;color:#009900">This is the word <span style="color:#D81E05">red</span></span>
```

Si ejecuta el siguiente código:

```4d
OBJECT SET COLOR(*;"myArea";-(Blue+(256*Yellow)))
```

The red color remains:

![](../../assets/en/FormObjects/multistyle-ex2.png)

and code is:

```html
<span style="text-align:left;font-family:'Segoe UI';font-size:9pt;color:#0000FF">This is the word <span style="color:#D81E05">red</span></span>
```

The following commands are concerned:

- [`OBJECT SET RGB COLORS`](../../commands/object-set-rgb-colors)
- [`OBJECT SET FONT`](../../commands/object-set-font)
- [`OBJECT SET FONT STYLE`](../../commands/object-set-font-style)
- [`OBJECT SET FONT SIZE`](../../commands/object-set-font-size)

In the context of multi-style areas, such commands should be used to set default styles only. To manage styles during database execution, we recommend using the commands of the "Styled Text" theme.

### Get edited text

When it is used with a rich text area, the [`Get edited text`](../../commands/get-edited-text) command returns the text of the current area including any style tags.

To retrieve the "plain" text (text without tags) being edited, you must use the [`ST Get plain text`](../../commands/st-get-plain-text) command:

```4d
ST Get plain text(Get edited text)
```

### Query and order by commands

Queries and sorts carried out among multi-style objects take into account any style tags saved in the object. If a style modification has been made within a word, searching for the word will not be successful.

To be able to carry out valid searches and sorts, you must use the [`ST Get plain text`](../../commands/st-get-plain-text) command. Por ejemplo:

```4d
QUERY BY FORMULA([MyTable];ST Get plain text([MyTable]MyFieldStyle)="very well")
```

## Automatic normalization of line endings

In order to ensure multi-platform compatibility of texts handled in the database, 4D automatically normalizes line endings so that they occupy a single character: `\r` (carriage return). This normalization is carried out at the level of form objects (variables or fields) hosting plain or multi-style text. Line endings that are not native, or that use a mix of several characters (for example `\r\n`), are considered as a single `\r`.

Note that in compliance with the XML standard (multi-style text format), the multi-style text commands also normalize line endings for text variables that are not associated with objects.

This principle makes it easier to use multi-style text commands or commands such as [`HIGHLIGHT TEXT`](../../commands/highlight-text) in a multi-platform context. However, you must take this into account in your processing when you work with texts from heterogeneous sources.