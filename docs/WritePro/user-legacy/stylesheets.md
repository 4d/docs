---
id: stylesheets
title: Style sheets
displayed_sidebar: docs
slug: /WritePro/user/stylesheets
---


A style sheet is an object of defined set of attribute settings used to control the appearance of your 4D Write Pro documents. These settings can be applied to paragraphs and characters, such as the font to display, as well as the font's size, color, and weight. Once a style sheet is defined, it is saved as an object in the 4D Write Pro document so it can easily be reused. Style sheets let you give your documents a distinctive and unique appearance, while saving you time and effort. 


## Default style

All 4D Write Pro documents have a default paragraph style sheet, "Normal". New style sheets (created with the [WP New style sheet](../commands-legacy/wp-new-style-sheet) command) automatically inherit from the Normal style. Attributes modified by a style sheet effect only the paragraphs they are applied to, the rest of the document retains the default Normal settings. If a style sheet is removed, the modified attributes will revert to the Normal style.

The Normal style defines a default value for every style sheet attribute in a 4D Write Pro document and can be retrieved with the [WP Get style sheet](../commands-legacy/wp-get-style-sheet) command. The Normal style sheet can be modified (but not renamed) with the [WP SET ATTRIBUTES](../commands/wp-set-attributes) command. While style sheets created with the [WP New style sheet](../commands-legacy/wp-new-style-sheet) command can be deleted with the [WP DELETE STYLE SHEET](../commands-legacy/wp-delete-style-sheet) command, the Normal style sheet can not be deleted.

## Paragraph and character style sheet attributes

Style sheets allow you to define the attributes of entire paragraphs or specific characters:

- **Paragraph** - The vast majority of the attributes which can be modified apply only to paragraphs. Paragraph style sheets include character style settings, as well as formatting attributes that can only be applied at the paragraph level (e.g. margins, borders, tabs, etc.). 
- **Character** - Character style sheets use only the attributes appropriate for distinquishing text (one or more characters) from the paragraph style (e.g., headers, titles, underlined text, etc.).

Note that paragraph styles apply to whole paragraphs. To apply a style only to a specific part of a paragraph, you must use a character style sheet.

## Style sheet precedence

Multiple paragraph and character style sheets can be combined within the same 4D Write Pro document. It's important to note style sheet precedence is determined by the order they are applied. 

- If you apply a paragraph style sheet and then apply a character style sheet, the character style sheet will take precedence over the paragraph style sheet. For example, you could apply a paragraph style sheet to the body of your document, then you could create a "bold" character style sheet and apply it to specific words. The paragraph style sheet will still apply to the rest of the text, however the character style sheet will be prioritized for the designated words. 
- If you apply a character style sheet and then apply a paragraph style sheet, the paragraph style sheet will be applied to all of the text and any character styles from the character style sheet will be removed.


## Applying style sheets

Style sheets are applied with the [WP SET ATTRIBUTES](../commands/wp-set-attributes) command using the `wk style sheet` or `wk new line style sheet` constants (or using object notation). 

## Retrieving style sheets

The [WP Get style sheets](../commands-legacy/wp-get-style-sheets) command lets you retrieve all style sheets in a document according to their specific type. The [WP Get style sheet](../commands-legacy/wp-get-style-sheet) command lets you retrieve a single style sheet by its name.

## Importing and exporting style sheets

Because style sheets are stored as objects, they can easily be imported into other 4D Write Pro documents or maintained when exported in multiple formats. 

- **Import** - You can get all of the style sheet objects from a designated 4D Write Pro document and use them in a new document with the [WP IMPORT STYLE SHEETS](../commands-legacy/wp-import-style-sheets) command. 
- **Export** - The [WP EXPORT DOCUMENT](../commands/wp-export-document) or [WP EXPORT VARIABLE](../commands/wp-export-variable.md) commands export your documents with their style sheets. 


## Style sheet attributes

The following paragraph and character style sheet attributes can be modified with the [WP SET ATTRIBUTES](../commands/wp-set-attributes) and [WP RESET ATTRIBUTES](../commands/wp-reset-attributes) commands, or retrieved with the [WP GET ATTRIBUTES](../commands/wp-get-attributes) command.

:::note

Some attributes are linked together. Therefore when adding only one of these attributes, the other linked attributes will also be created with the default values. For linked attributes, the default value can be different than the value defined in the Normal style sheet. For example, if you define only a red left border, the other borders will be black (default value) even if the borders in the Normal style sheet were previously defined as purple.

:::


| Attribute                        | Paragraph | Character | Linked With |
|----------------------------------|-----------|-----------|-------------|
| `wk avoid widows and orphans`    | X         |           |             |
| `wk background clip`             | X         |           |             |
| `wk background color`            | X         | X         |             |
| `wk background height`           | X         |           | `wk background width` |
| `wk background image`            | X         |           |             |
| `wk background image url`        | X         |           |             |
| `wk background origin`           | X         |           |             |
| `wk background position horizontal` | X      |           | `wk background position vertical` |
| `wk background position vertical`   | X      |           | `wk background position horizontal` |
| `wk background repeat`           | X         |           |             |
| `wk background width`            | X         |           | `wk background height` |
| `wk border color`                | X         |           | `wk border color bottom`, `wk border color left`, `wk border color right`, `wk border color top` |
| `wk border color bottom`         | X         |           | `wk border color`, `wk border color left`, `wk border color right`, `wk border color top` |
| `wk border color left`           | X         |           | `wk border color`, `wk border color bottom`, `wk border color right`, `wk border color top` |
| `wk border color right`          | X         |           | `wk border color`, `wk border color bottom`, `wk border color left`, `wk border color top` |
| `wk border color top`            | X         |           | `wk border color`, `wk border color bottom`, `wk border color left`, `wk border color right` |
| `wk border radius`               | X         |           |             |
| `wk border style`                | X         |           | `wk border style bottom`, `wk border style left`, `wk border style right`, `wk border style top` |
| `wk border style bottom`         | X         |           | `wk border style`, `wk border style left`, `wk border style right`, `wk border style top` |
| `wk border style left`           | X         |           | `wk border style`, `wk border style bottom`, `wk border style right`, `wk border style top` |
| `wk border style right`          | X         |           | `wk border style`, `wk border style bottom`, `wk border style left`, `wk border style top` |
| `wk border style top`            | X         |           | `wk border style`, `wk border style bottom`, `wk border style left` |
| `wk border width`                | X         |           | `wk border width bottom`, `wk border width left`, `wk border width right`, `wk border width top` |
| `wk border width bottom`         | X         |           | `wk border width`, `wk border width left`, `wk border width right`, `wk border width top` |
| `wk border width left`           | X         |           | `wk border width`, `wk border width bottom`, `wk border width right`, `wk border width top` |
| `wk border width right`          | X         |           | `wk border width`, `wk border width bottom`, `wk border width left`, `wk border width top` |
| `wk border width top`            | X         |           | `wk border width`, `wk border width bottom`, `wk border width left`, `wk border width right` |
| `wk direction`                   | X         |           |             |
| `wk font`                        | X         | X         | `wk font bold`, `wk font italic`, `wk font size` |
| `wk font bold`                   | X         | X         | `wk font`, `wk font family`, `wk font italic`, `wk font size` |
| `wk font family`                 | X         | X         | `wk font`, `wk font bold`, `wk font italic`, `wk font size` |
| `wk font italic`                 | X         | X         | `wk font`, `wk font bold`, `wk font family`, `wk font size` |
| `wk font size`                   | X         | X         | `wk font`, `wk font bold`, `wk font family`, `wk font italic` |
| `wk line height`                 | X         |           |             |
| `wk list font`                   | X         |           |             |
| `wk list string format LTR`      | X         |           |             |
| `wk list string format RTL`      | X         |           |             |
| `wk list style image`            | X         |           |             |
| `wk list style image height`     | X         |           |             |
| `wk list style image url`        | X         |           |             |
| `wk list style type`             | X         |           |             |
| `wk margin`                      | X         |           | `wk margin bottom`, `wk margin left`, `wk margin right`, `wk margin top` |
| `wk margin bottom`               | X         |           | `wk margin`, `wk margin left`, `wk margin right`, `wk margin top` |
| `wk margin left`                 | X         |           | `wk margin`, `wk margin bottom`, `wk margin right`, `wk margin top` |
| `wk margin right`                | X         |           | `wk margin`, `wk margin bottom`, `wk margin left`, `wk margin top` |
| `wk margin top`                  | X         |           | `wk margin`, `wk margin bottom`, `wk margin left`, `wk margin right` |
| `wk min height`                  | X         |           |             |
| `wk min width`                   | X         |           |             |
| `wk name`                        | X         | X         |             |
| `wk new line style sheet`        | X         |           |             |
| `wk owner`                       | X         | X         |             |
| `wk padding`                     | X         |           | `wk padding bottom`, `wk padding left`, `wk padding right`, `wk padding top` |
| `wk padding bottom`              | X         |           | `wk padding`, `wk padding left`, `wk padding right`, `wk padding top` |
| `wk padding box`                 | X         |           |             |
| `wk padding left`                | X         |           | `wk padding`, `wk padding bottom`, `wk padding right`, `wk padding top` |
| `wk padding right`               | X         |           | `wk padding`, `wk padding bottom`, `wk padding left`, `wk padding top` |
| `wk padding top`                 | X         |           | `wk padding`, `wk padding bottom`, `wk padding left`, `wk padding right` |
| `_o_wk page break inside`        | X         |           |             |
| `wk tab default`                 | X         |           | `wk tabs`, `wk tab stop offsets`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tabs`                        | X         |           | `wk tab default`, `wk tab stop offsets`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tab stop offsets`            | X         |           | `wk tabs`, `wk tab default`, `wk tab stop types`, `wk tab stop leadings` |
| `wk tab stop types`              | X         |           | `wk tabs`, `wk tab default`, `wk tab stop offsets`, `wk tab stop leadings` |
| `wk tab stop leadings`           | X         |           | `wk tabs`, `wk tab default`, `wk tab stop offsets`, `wk tab stop types` |
| `wk text align`                  | X         |           |             |
| `wk text color`                  | X         | X         |             |
| `wk text indent`                 | X         |           |             |
| `wk text linethrough color`      | X         | X         |             |
| `wk text linethrough style`      | X         | X         | `wk text underline style` |
| `wk text shadow color`           | X         | X         | `wk text shadow offset` |
| `wk text shadow offset`          | X         | X         | `wk text shadow color` |
| `wk text transform`              | X         | X         |             |
| `wk text underline color`        | X         | X         |             |
| `wk text underline style`        | X         | X         | `wk text linethrough style` |
| `wk type`                        | X (read only) | X (read only) |             |
| `wk vertical align`              | X         | X         |             |
| `wk width`                       | X         |           |             |


