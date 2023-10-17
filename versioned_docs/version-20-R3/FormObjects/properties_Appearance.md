---
id: propertiesAppearance
title: Appearance 
---

## Default Button

The default button property designates the button that gets the initial focus at runtime when no button of the form has the [Focusable](properties_Entry.md#focusable) property.

There can only be one default button per form page.

In addition, on macOS, the default button property modifies the button's appearance in order to indicate a "recommended choice" to the user and is automatically bound to the **Enter** key, even if it does not have the focus. The default button can be different from the focused button. Default buttons have a specific blue appearance on macOS:

![](../assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> Button must have a standard height to get the default button appearance.

On Windows, the concept of "recommended choice" is not supported: only the focused button has a different appearance at runtime and the **Enter** key is bound to the focused button. However, in the 4D form editor, the default button is represented with a blue outline:

![](../assets/en/FormObjects/property_defaultButtonWindows.en.png)

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
defaultButton|boolean|true, false |

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)

---

## Hide focus rectangle  

During execution, a field or any enterable area is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by enabling this property. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideFocusRing|boolean|true, false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)

---

## Hide selection highlight

`Selection type list boxes`

This property is used to disable the selection highlight in list boxes.

When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

By default, this option is not enabled.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|hideSystemHighlight|boolean|true, false|

#### Objects Supported

[List Box](listbox_overview.md)

---

## Horizontal Scroll Bar  

An interface tool allowing the user to move the viewing area to the left or right.

Available values:

|Property List|JSON value|Description|
|---|----|---|
|Yes|"visible"|The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame).|
|No|"hidden"|The scrollbar is never visible|
|Automatic|"automatic"|The scrollbar appears automatically whenever necessary and the user can enter text larger than the object width|

> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|scrollbarHorizontal|text|"visible", "hidden", "automatic"|

#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### See also

[Vertical scroll bar](#vertical-scroll-bar)

---

## Resolution

Sets the screen resolution for the 4D Write Pro area contents. By default, it is set to 72 dpi (macOS), which is the standard resolution for 4D forms on all platforms. Setting this property to 96 dpi will set a windows/web rendering on both macOS and Windows platforms. Setting this property to **automatic** means that document rendering will differ between macOS and Windows platforms.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
dpi|number|0=automatic, 72, 96 |

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show background

Displays/hides both background images and background color.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showBackground|boolean|true (default), false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show footers

Displays/hides the footers when [Page view mode](#view-mode) is set to "Page".

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showFooters|boolean|true (default), false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show Formula Bar

When enabled, the formula bar is visible below the Toolbar interface in the 4D View Pro area. If not selected, the formula bar is hidden.

> This property is available only for the [Toolbar](#user-interface) interface.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
withFormulaBar|boolean|true (default), false|

#### Objects Supported

[4D View Pro area](viewProArea_overview.md)

---

## Show headers

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showHeaders|boolean|true (default), false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show hidden characters

Displays/hides invisible characters

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showHiddenChars|boolean|true (default), false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show horizontal ruler

Displays/hides the horizontal ruler when the document view is in [Page mode](#view-mode).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showHorizontalRuler|boolean|true (default), false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show HTML WYSYWIG

Enables/disables the HTML WYSIWYG view, in which any 4D Write Pro advanced attributes which are not compliant with all browsers are removed.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showHTMLWysiwyg|boolean|true, false (default)|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show page frame

Displays/hides the page frame when [Page view mode](#view-mode) is set to "Page".

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showPageFrames|boolean|true, false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show references

Displays all 4D expressions inserted in the 4D Write Pro document as *references*. When this option is disabled, 4D expressions are displayed as *values*. By default when you insert a 4D field or expression, 4D Write Pro computes and displays its current value. Select this property if you wish to know which field or expression is displayed. The field or expression references then appear in your document, with a gray background.

For example, you have inserted the current date along with a format, the date is displayed:

![](../assets/en/FormObjects/writePro1.png)

With the Show references property on, the reference is displayed:

![](../assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showReferences|boolean|true, false (default)|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Show vertical ruler

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
showVerticalRuler|boolean|true (default), false|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Tab Control Direction

You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS. You can choose to place the tab controls on top (standard) or on the bottom.

When tab controls with a custom direction are displayed under Windows, they automatically return to the standard direction (top).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
labelsPlacement|boolean|"top", "bottom" |

#### Objects Supported

[Tab Control](tabControl.md)

---

## User Interface

You can add an interface to 4D View Pro areas to allow end users to perform basic modifications and data manipulations. 4D View Pro offers two optional interfaces to choose from, **Ribbon** and **Toolbar**.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
userInterface|text|"none" (default), "ribbon", "toolbar" |

#### Objects Supported

[4D View Pro area](viewProArea_overview.md)

#### See also

[4D View Pro reference guide](../ViewPro/getting-started.md)

---

## Vertical Scroll Bar  

An interface tool allowing the user to move the viewing area up and down.

Available values:

|Property List|JSON value|Description|
|---|----|---|
|Yes|"visible"|The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame).|
|No|"hidden"|The scrollbar is never visible|
|Automatic|"automatic"|The scrollbar appears automatically whenever necessary (in other words, when the size of the object contents is greater than that of the frame)|

> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”

> If a text input object does not have a scroll bar, the user can scroll the information using the arrow keys.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|scrollbarVertical|text|"visible", "hidden", "automatic"|

#### Objects Supported

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### See also

[Horizontal scroll bar](#horizontal-scroll-bar)

---

## View mode

Sets the mode for displaying the 4D Write Pro document in the form area. Three values are available:

- **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.
- **Draft**: draft mode with basic document properties
- **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the [96 dpi resolution](#resolution) and the [Show HTML WYSIWYG](#show-html-wysiwyg) properties).

> The View mode property is only used for onscreen rendering. Regarding printing settings, specific rendering rules are automatically used.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
layoutMode|text|"page", "draft", "embedded"|

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)

---

## Zoom

Sets the zoom percentage for displaying 4D Write Pro area contents.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
zoom|number|minimum = 0 |

#### Objects Supported

[4D Write Pro area](writeProArea_overview.md)
