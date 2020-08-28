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

[通常ボタン](button_overview.md#通常) - [フラットボタン](button_overview.md#フラット)




---
## フォーカスの四角を隠す

ランタイムにおいて、タブキーやシングルクリックによってフォーカスを得たフィールドや入力可能なエリアは、選択状態を示す四角で縁取りされます。 このプロパティを使用して、フォーカスの四角を非表示にできます。 特定のインターフェースにおいては、フォーカスの四角を非表示にすることが便利かもしれません。

#### JSON 文法

| 名             | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| hideFocusRing | boolean | true, false |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [サブフォーム](subform_overview.md)



---
## セレクションハイライトを非表示
`Selection type list boxes`

This property is used to disable the selection highlight in list boxes.

When this option is enabled, the selection highlight is no longer visible for selections made in list boxes. Selections themselves are still valid and work in exactly the same way as previously; however, they are no longer represented graphically onscreen, and you will need to [define their appearance programmatically](listbox_overview.md#customizing-appearance-of-selected-rows).

By default, this option is not enabled.


#### JSON 文法

| 名                   | データタイプ  | とりうる値       |
| ------------------- | ------- | ----------- |
| hideSystemHighlight | boolean | true, false |

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
| scrollbarHorizontal | text   | "visible", "hidden", "automatic" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### 参照
[Vertical scroll bar](#vertical-scroll-bar)

---
## 解像度

Sets the screen resolution for the 4D Write Pro area contents. By default, it is set to 72 dpi (macOS), which is the standard resolution for 4D forms on all platforms. Setting this property to 96 dpi will set a windows/web rendering on both macOS and Windows platforms. Setting this property to **automatic** means that document rendering will differ between macOS and Windows platforms.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 dpi|number|0=automatic, 72, 96 |

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)



---
## 背景を表示

Displays/hides both background images and background color.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showBackground|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)

---
## フッター表示

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
## ヘッダーを表示

Displays/hides the headers when [Page view mode](#view-mode) is set to "Page".


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHeaders|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)



---
## 非表示文字を表示

Displays/hides invisible characters


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHiddenChars|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


---
## 水平ルーラーを表示

Displays/hides the horizontal ruler when the document view is in [Page mode](#view-mode).


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHorizontalRuler|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)





---
## HTML WYSYWIG 表示

Enables/disables the HTML WYSIWYG view, in which any 4D Write Pro advanced attributes which are not compliant with all browsers are removed.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHTMLWysiwyg|boolean|true, false (default)|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)

---
## ページフレームを表示

Displays/hides the page frame when [Page view mode](#view-mode) is set to "Page".


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showPageFrames|boolean|true, false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)



---
## 参照を表示

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
## 垂直ルーラーを表示

Displays/hides the vertical ruler when the document view is in [Page mode](#view-mode).


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showVerticalRuler|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


---
## タブコントロールの位置

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
## ユーザーインターフェース

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
| scrollbarVertical | text   | "visible", "hidden", "automatic" |

#### 対象オブジェクト

[Hierarchical List](list_overview.md#overview) - [Subform](subform_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Input](input_overview.md) - [4D Write Pro area](writeProArea_overview.md)

#### 参照

[Horizontal scroll bar](#horizontal-scroll-bar)

---
## ビューモード

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
## 拡大

Sets the zoom percentage for displaying 4D Write Pro area contents.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 zoom|number|minimum = 0 |

#### 対象オブジェクト

[4D Write Pro area](writeProArea_overview.md)


