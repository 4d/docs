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
`セレクション型リストボックス`

リストボックスのセレクションハイライトを非表示にします。

このオプションが有効化されていると、リストボックスにおける行選択を可視化するセレクションハイライトが非表示になります。 ハイライトが非表示になっていても選択行は引き続き機能的に有効です。しかしながら、画面上では選択状態が明示されなくなるため、[プログラムによって選択行を可視化](listbox_overview.md#選択行の見た目のカスタマイズ) する必要があります。

デフォルトでは、このオプションは有効化されていません。


#### JSON 文法

| 名                   | データタイプ  | とりうる値       |
| ------------------- | ------- | ----------- |
| hideSystemHighlight | boolean | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)




---
## 横スクロールバー

表示エリアを左右に移動できるようにするインターフェースツールです。

使用可能な値:

| プロパティリスト | JSON 値      | 説明                                                                      |
| -------- | ----------- | ----------------------------------------------------------------------- |
| ◯        | "visible"   | スクロールバーは必要のない場合でも常に表示されます。つまり、オブジェクトのコンテンツのサイズがフレームのサイズより小さい場合でも表示されます。 |
| ×        | "hidden"    | スクロールバーは表示されません。                                                        |
| 自動       | "automatic" | スクロールバーは必要なときに表示されます。つまり、オブジェクトのコンテンツのサイズがフレームのサイズより大きい場合には表示されます。      |


> ピクチャー型のオブジェクトは、表示フォーマットが "トランケート (中央合わせなし)" に設定されているときに、スクロールバーを持つことができます。


#### JSON 文法

| 名                   | データタイプ | とりうる値                            |
| ------------------- | ------ | -------------------------------- |
| scrollbarHorizontal | text   | "visible", "hidden", "automatic" |

#### 対象オブジェクト

[階層リスト](list_overview.md) - [サブフォーム](subform_overview.md) - [リストボックス](listbox_overview.md) - [入力](input_overview.md) - [4D Write Pro エリア](writeProArea_overview.md)

#### 参照
[縦スクロールバー](#vertical-scroll-bar)

---
## 解像度

4D Write Pro エリアの画面解像度を設定します。 デフォルト値は 72dpi (macOS) で、これはすべてのプラットフォームにおける 4Dフォームの標準解像度です。 96dpi に指定すると、Windows/Web レンダリングを macOS および Windows の両プラットフォームに設定します。 この項目を **自動** に設定すると、macOS と Windows 間でドキュメントのレンダリングが異なることになります。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 dpi|number|0=automatic, 72, 96 |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)



---
## 背景を表示

ページの背景画像および背景色を表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showBackground|boolean|true (デフォルト), false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)

---
## フッター表示

[ビューモード](#ビューモード) が "ページ" に設定されている場合に、ページのフッターを表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showFooters|boolean|true (デフォルト), false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)


---
## フォーミュラバーを表示

有効化すると、4D View Pro エリアにおいてツールバーのすぐ下にフォーミュラバーが表示されます。 選択されていない場合、フォーミュラバーは非表示となります。

> このプロパティは [ツールバー](#ユーザーインターフェース) インターフェースの場合に利用可能です。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 withFormulaBar|boolean|true (デフォルト), false|

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md)

---
## ヘッダーを表示

[ビューモード](#ビューモード) が "ページ" に設定されている場合に、ページのヘッダーを表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHeaders|boolean|true (デフォルト), false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)



---
## 非表示文字を表示

非表示の文字を表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHiddenChars|boolean|true (デフォルト), false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)


---
## 水平ルーラーを表示

ドキュメントビューが [ページモード](#ビューモード) の場合に、水平ルーラーを表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHorizontalRuler|boolean|true (デフォルト), false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)





---
## HTML WYSYWIG 表示

HTML WYSIWYG ビューを有効/無効にします。このビューでは、すべてのブラウザーに対応していない 4D Write Pro の属性が取り除かれます。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showHTMLWysiwyg|boolean|true, false (デフォルト)|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)

---
## ページフレームを表示

[ビューモード](#ビューモード) が "ページ" に設定されている場合に、ページのフレームを表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showPageFrames|boolean|true, false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)



---
## 参照を表示

ドキュメントに *参照* として挿入された 4D式をすべて表示します。 このオプションが無効になっていると、4D Write Pro は挿入された 4D式をカレント値で評価して、その*値* を表示します。 4Dフィールドまたは式を挿入すると、4D Write Pro はデフォルトでそのカレント値を表示します。 もとのフィールドや式を確認したいときには、このオプションを有効にします。 すると、これらの参照は灰色の背景色とともにドキュメント内に表示されます。

たとえば、フォーマットを指定したカレント日付を挿入していると、デフォルトでは次の表示になります:

![](assets/en/FormObjects/writePro1.png)

参照を表示オプションを有効にすると、代わりにもとの参照が表示されます:

![](assets/en/FormObjects/writeProExpr.png)

> 4D 式を挿入するには、`ST INSERT EXPRESSION` コマンドを使います。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showReferences|boolean|true, false (デフォルト)|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)

---
## 垂直ルーラーを表示

ドキュメントビューが [ページモード](#ビューモード) の場合に、垂直ルーラーを表示/非表示にします。


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 showVerticalRuler|boolean|true (default), false|

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)


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

[4D View Pro エリア](viewProArea_overview.md)


#### 参照

[4D View Pro reference guide](https://doc.4d.com/4Dv18/4D/18/4D-View-Pro-Reference.100-4522233.en.html)

---
## 縦スクロールバー

An interface tool allowing the user to move the viewing area up and down.

使用可能な値:

| プロパティリスト | JSON 値      | 説明                                                                                                                                              |
| -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ◯        | "visible"   | スクロールバーは必要のない場合でも常に表示されます。つまり、オブジェクトのコンテンツのサイズがフレームのサイズより小さい場合でも表示されます。                                                                         |
| ×        | "hidden"    | スクロールバーは表示されません。                                                                                                                                |
| 自動       | "automatic" | The scrollbar appears automatically whenever necessary (in other words, when the size of the object contents is greater than that of the frame) |

> ピクチャー型のオブジェクトは、表示フォーマットが "トランケート (中央合わせなし)" に設定されているときに、スクロールバーを持つことができます。


> If a text input object does not have a scroll bar, the user can scroll the information using the arrow keys.


#### JSON 文法

| 名                 | データタイプ | とりうる値                            |
| ----------------- | ------ | -------------------------------- |
| scrollbarVertical | text   | "visible", "hidden", "automatic" |

#### 対象オブジェクト

[階層リスト](list_overview.md) - [サブフォーム](subform_overview.md) - [リストボックス](listbox_overview.md) - [入力](input_overview.md) - [4D Write Pro エリア](writeProArea_overview.md)

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

[4D Write Pro エリア](writeProArea_overview.md)

---
## 拡大

Sets the zoom percentage for displaying 4D Write Pro area contents.


#### JSON 文法

| 名 | データタイプ | とりうる値 |
| - | ------ | ----- |
|   |        |       |
 zoom|number|minimum = 0 |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md)
