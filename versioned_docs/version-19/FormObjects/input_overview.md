---
id: inputOverview
title: Input
---


Inputs allow you to add enterable or non-enterable expressions such as database [fields](Concepts/identifiers.md#fields) and [variables](Concepts/variables.md) to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:

![](../assets/en/FormObjects/input.png)

Inputs can contain [assignable or non-assignable expressions](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

In addition, inputs can be [enterable or non-enterable](properties_Entry.md#enterable). An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user.

You can manage the data with object or form [methods](Concepts/methods.md).

### JSON Example

```4d
 "myText": {
  "type": "input", //define the type of object
  "spellcheck": true, //enable spelling verification
  "left": 60,   //left position on the form  
  "top": 160,   //top position on the form 
  "width": 100,  //width of the object
  "height": 20  //height of the object
  }
```

## Supported Properties

[Allow font/color picker](properties_Text.md#allow-fontcolor-picker) - [Alpha Format](properties_Display.md#alpha-format) - [Auto Spellcheck](properties_Entry.md#auto-spellcheck) - [Bold](properties_Text.md#bold) - [Test when False/Text when True](properties_Display.md#text-when-falsetext-when-true) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Date Format](properties_Display.md#date-format) - [Default value](properties_RangeOfValues.md#default-value) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression type](properties_Object.md#expression-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multiline](properties_Entry.md#multiline) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Picture Format](properties_Display.md#picture-format) - [Placeholder](properties_Entry.md#placeholder) - [Print Frame](properties_Print.md#print-frame) - [Required List](properties_RangeOfValues.md#required-list) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection always visible](properties_Entry.md#selection-always-visible) - [Store with default style tags](properties_Text.md#store-with-default-style-tags) - [Text when False/Text when True](properties_Display.md#text-when-falsetext-when-true) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

---

## Input alternatives

You can also represent field and variable expressions in your forms using alternative objects, more particularly:

* You can display and enter data from database fields directly in columns of [selection type List boxes](listbox_overview.md).
* You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](dropdownList_Overview.md) and [Combo Boxes](comboBox_overview.md) objects.
* You can represent a boolean expression as a [check box](checkbox_overview.md) or as a [radio button](radio_overview.md) object.
