---
id: propertiesAppearance
title: アピアランス
---

---
## デフォルトボタン

フォーム上のボタンのいずれにも [フォーカス可](properties_Entry.md#focusable) プロパティが設定されていない場合、デフォルトボタンプロパティが有効化されたボタンがランタイムにおいて最初のフォーカスを得ます。

デフォルトボタンは、フォームページごとに一つのみ設定できます。

macOS上では、デフォルトボタンプロパティによってボタンの見た目が変更され、推奨されている選択肢であることをユーザーに対して示します。 デフォルトボタンとフォーカスされているボタンは同一である必要はありません。 macOSにおけるデフォルトボタンは特徴的な青い外観を持ちます:

![](assets/en/FormObjects/property_defaultButtonmacOS.en.png)

> このデフォルトボタンとしての外観を得るには、ボタンの高さが 22以下に設定されている必要があります。

Windows上では "推奨選択肢" の概念はサポートされていないため、ランタイムにおいて異なる外観を持つのはフォーカスされているボタンのみですが、 4D フォームエディター上ではデフォルトボタンは青い枠線で表されます:

![](assets/en/FormObjects/property_defaultButtonWindows.en.png)


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 defaultButton|boolean|true, false |

#### 対象オブジェクト

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular)




---
## フォーカスの四角を隠す

During execution, a field or any enterable area is outlined by a selection rectangle when it has the focus (via the Tab key or a single click). You can hide this rectangle by enabling this property. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### JSON 文法

| 名             | データタイプ | とりうる値       |
| ------------- | ------ | ----------- |
| hideFocusRing | ブール    | true, false |

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Subform](subform_overview.md)



---
## セレクションハイライトを非表示
`Selection type list boxes`

This property is used to disable the selection highlight in list boxes.

When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

By default, this option is not enabled.


#### JSON 文法

| 名                   | データタイプ | とりうる値       |
| ------------------- | ------ | ----------- |
| hideSystemHighlight | ブール    | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)




---
## 横スクロールバー

An interface tool allowing the user to move the viewing area to the left or right.

Available values:

| Property List | JSON value  | 説明                                                                                                                                                       |
| ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ◯             | "visible"   | The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame). |
| ×             | "hidden"    | The scrollbar is never visible                                                                                                                           |
| Automatic     | "automatic" | The scrollbar appears automatically whenever necessary and the user can enter text larger than the object width                                          |


> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”


#### JSON 文法

| 名                   | データタイプ | とりうる値                            |
| ------------------- | ------ | -------------------------------- |
| scrollbarHorizontal | テキスト   | "visible", "hidden", "automatic" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### 参照
[Vertical scroll bar](#vertical-scroll-bar)

---
## Resolution

Sets the screen resolution for the 4D Write Pro area contents. By default, it is set to 72 dpi (macOS), which is the standard resolution for 4D forms on all platforms. Setting this property to 96 dpi will set a windows/web rendering on both macOS and Windows platforms. Setting this property to **automatic** means that document rendering will differ between macOS and Windows platforms.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 dpi|number|0=automatic, 72, 96 |

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)



---
## Show background

Displays/hides both background images and background color.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showBackground|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)

---
## Show footers

Displays/hides the footers when [Page view mode](#view-mode) is set to "Page".


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showFooters|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


---
## Show Formula Bar

When enabled, the formula bar is visible below the Toolbar interface in the 4D View Pro area. If not selected, the formula bar is hidden.

> This property is available only for the [Toolbar](#user-interface) interface.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 withFormulaBar|boolean|true (default), false|

#### 対象オブジェクト

[4D View Pro area](viewProArea_overview.md)

---
## Show headers

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHeaders|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)



---
## Show hidden characters

Displays/hides invisible characters


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHiddenChars|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


---
## Show horizontal ruler

Displays/hides the horizontal ruler when the document view is in [Page mode](#view-mode).


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHorizontalRuler|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)





---
## Show HTML WYSYWIG

Enables/disables the HTML WYSIWYG view, in which any 4D Write Pro advanced attributes which are not compliant with all browsers are removed.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHTMLWysiwyg|boolean|true, false (default)|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)

---
## Show page frame

Displays/hides the page frame when [Page view mode](#view-mode) is set to "Page".


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showPageFrames|boolean|true, false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)



---
## Show references

Displays all 4D expressions inserted in the 4D Write Pro document as *references*. When this option is disabled, 4D expressions are displayed as *values*. By default when you insert a 4D field or expression, 4D Write Pro computes and displays its current value. Select this property if you wish to know which field or expression is displayed. The field or expression references then appear in your document, with a gray background.

For example, you have inserted the current date along with a format, the date is displayed:

![](assets/en/FormObjects/writePro1.png)

With the Show references property on, the reference is displayed:

![](assets/en/FormObjects/writeProExpr.png)

> 4D expressions can be inserted using the `ST INSERT EXPRESSION` command.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showReferences|boolean|true, false (default)|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)

---
## Show vertical ruler

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showVerticalRuler|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


---
## Tab Control Direction

You can set the direction of tab controls in your forms. This property is available on all the platforms but can only be displayed in macOS. You can choose to place the tab controls on top (standard) or on the bottom.

When tab controls with a custom direction are displayed under Windows, they automatically return to the standard direction (top).

#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 labelsPlacement|boolean|"top", "bottom" |

#### 対象オブジェクト

[Tab Control](tabControl.md)


---
## User Interface

You can add an interface to 4D View Pro areas to allow end users to perform basic modifications and data manipulations. 4D View Pro offers two optional interfaces to choose from, **Ribbon** and **Toolbar**.

#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 userInterface|text|"none" (default), "ribbon", "toolbar" |

#### 対象オブジェクト

[4D View Pro area](viewProArea_overview.md)


#### 参照

[4D View Pro reference guide](https://doc.4d.com/4Dv18/4D/18/4D-View-Pro-Reference.100-4522233.en.html)

---
## 縦スクロールバー

An interface tool allowing the user to move the viewing area up and down.

Available values:

| Property List | JSON value  | 説明                                                                                                                                                       |
| ------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ◯             | "visible"   | The scrollbar is always visible, even when it is not necessary (in other words, when the size of the object contents is smaller than that of the frame). |
| ×             | "hidden"    | The scrollbar is never visible                                                                                                                           |
| Automatic     | "automatic" | The scrollbar appears automatically whenever necessary (in other words, when the size of the object contents is greater than that of the frame)          |

> Picture objects can have scrollbars when the display format of the picture is set to “Truncated (non-centered).”


> If a text input object does not have a scroll bar, the user can scroll the information using the arrow keys.


#### JSON 文法

| 名                 | データタイプ | とりうる値                            |
| ----------------- | ------ | -------------------------------- |
| scrollbarVertical | テキスト   | "visible", "hidden", "automatic" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### 参照

[Horizontal scroll bar](#horizontal-scroll-bar)

---
## View mode

Sets the mode for displaying the 4D Write Pro document in the form area. Three values are available:

- **Page**: the most complete view mode, which includes page outlines, orientation, margins, page breaks, headers and footers, etc.
- **Draft**: draft mode with basic document properties
- **Embedded**: view mode suitable for embedded areas; it does not display margins, footers, headers, page frames, etc. This mode can also be used to produce a web-like view output (if you also select the [96 dpi resolution](#resolution) and the [Show HTML WYSIWYG](#show-html-wysiwyg) properties).

> The View mode property is only used for onscreen rendering. Regarding printing settings, specific rendering rules are automatically used.



#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 layoutMode|text|"page", "draft", "embedded"|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)

---
## Zoom

Sets the zoom percentage for displaying 4D Write Pro area contents.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 zoom|number|minimum = 0 |

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


