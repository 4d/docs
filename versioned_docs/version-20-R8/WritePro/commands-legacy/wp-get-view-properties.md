---
id: wp-get-view-properties
title: WP Get view properties
slug: /WritePro/commands/wp-get-view-properties
displayed_sidebar: docs
---

<!--REF #_command_.WP Get view properties.Syntax-->**WP Get view properties** ( * ; *wpArea* ) : Object<!-- END REF-->
<!--REF #_command_.WP Get view properties.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable (document) |
| wpArea | Text, Object | &#8594;  | Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted) |
| Function result | Object | &#8592; | Current view properties |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get view properties.Summary-->The **WP Get view properties** command returns the current view properties for the 4D Write Pro area designated by *wpArea*.<!-- END REF--> 

If you pass the optional *\** parameter, you indicate that *wpArea* is a form object name (string). If you do not pass this parameter, you indicate that *wpArea* is a 4D Write Pro document (object variable or field). This command can only be used if the *wpArea* is associated with a form object (*i.e.* it is displayed in the form), on any form page. If the 4D Write Pro document is displayed in several form objects, it is necessary to use the *\** parameter to define which view to address.

The view properties of the 4D Write Pro area can be defined: 

* at the form level in the Property List,
* dynamically during the session using the [WP SET VIEW PROPERTIES](wp-set-view-properties.md) command.

**Returned object**

The returned object contains all view properties of the 4D Write Pro area, along with their current value:

| Constant                     | Value                  | Comment                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk display formula as symbol | displayFormulaAsSymbol | Displays formula references as a ![](../../assets/en/WritePro/commands/pict6013182.en.png) symbol. Works only if formulas are displayed as references (see wk visible references). Possible values: True/False                                                                                                                                                                                    |
| wk formula highlight         | formulaHighlight       | Formula highlight view mode. Possible values: wk references (default): Formulas displayed as references are highlighted wk values: Formulas displayed as values are highlighted wk always: Formulas are always highlighted, whatever their display mode wk never: Formulas are never highlighted, whatever their display mode Highlighted formula color can be set by wk formula highlight color. |
| wk formula highlight color   | formulaHighlightColor  | Color of highlighted formulas (see wk formula highlight). Possible values: a CSS color string ("#010101" or "#FFFFFF" or "red"). a 4D color longint value                                                                                                                                                                                                                                         |
| wk page view mode            | pageMode               | Mode for displaying the 4D Write Pro document in the form area onscreen. Possible values (string): "draft": draft mode with basic document properties "page": most complete view mode, which includes page outlines, orientation, margins, breaks, headers and footers, etc. "embedded": view mode suitable for embedded areas                                                                    |
| wk resolution                | dpi                    | Screen resolution for the contents of the 4D Write Pro area. Possible values: wk auto (0) Number greater than 1                                                                                                                                                                                                                                                                                   |
| wk spell enable              | spellEnabled           | Enables the auto spellcheck. Possible values: True/False                                                                                                                                                                                                                                                                                                                                          |
| wk visible background        | visibleBackground      | Displays both background images and background color (visible effect in Page or Embedded view mode only). Possible values: True/False                                                                                                                                                                                                                                                             |
| wk visible empty images      | visibleEmptyImages     | Displays or exports a default black rectangle for images that cannot be loaded or computed (empty images or images in an unsupported format). Possible values: True/False. Default value: True If value is False, missing image elements will not be displayed at all even if they have borders, width, height, or background; this may impact the page layout for inline images.                 |
| wk visible footers           | visibleFooters         | Displays or exports the footers (for display, visible effect in Page view mode only). Possible values: True/False                                                                                                                                                                                                                                                                                 |
| wk visible headers           | visibleHeaders         | Displays or exports the headers (for display, visible effect in Page view mode only). Possible values: True/False                                                                                                                                                                                                                                                                                 |
| wk visible hidden characters | visibleHiddenChars     | Displays invisible characters. Possible values: True/False                                                                                                                                                                                                                                                                                                                                        |
| wk visible horizontal ruler  | visibleHorizontalRuler | Displays the horizontal ruler. Possible values: True/False                                                                                                                                                                                                                                                                                                                                        |
| wk visible HTML WYSIWYG      | htmlWYSIWIGEnabled     | Enables the HTML WYSIWYG view by removing proprietary 4D Write Pro HTML/CSS tags. Possible values: True/False                                                                                                                                                                                                                                                                                     |
| wk visible page frames       | visiblePageFrames      | Displays the page frames (visible effect in Page view mode only). Possible values: True/False                                                                                                                                                                                                                                                                                                     |
| wk visible references        | visibleReferences      | Displays or exports all 4D expressions inserted in the document as references. Possible values: True/False                                                                                                                                                                                                                                                                                        |
| wk visible vertical ruler    | visibleVerticalRuler   | Displays the vertical ruler (visible effect in Page view mode only). Possible values: True/False                                                                                                                                                                                                                                                                                                  |
| wk zoom                      | zoom                   | Zoom percentage for displaying the contents of the 4D Write Pro area. Possible values: Number greater than 1                                                                                                                                                                                                                                                                                      |

#### Example 

In the 4D Write Pro area, you want to display the rulers only in page mode:

```4d
 var $viewProps : Object
 $viewProps:=WP Get view properties(*;"4DWPArea")
 If($viewProps.pageMode="page")
    $viewProps.visibleHorizontalRuler:=True
    $viewProps.visibleVerticalRuler:=True
 Else
    $viewProps.visibleHorizontalRuler:=False
 End if
 WP SET VIEW PROPERTIES(*;"4DWPArea";$viewProps)
```

#### See also 

[WP SET VIEW PROPERTIES](wp-set-view-properties.md)  