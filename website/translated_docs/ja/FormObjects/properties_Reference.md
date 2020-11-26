---
id: propertiesReference
title: JSON プロパティリスト
---

この一覧は、すべてのオブジェクトプロパティを JSON名順に並べてまとめたものです。 プロパティ名をクリックすると、詳細説明に移動します。
> "フォームオブジェクトプロパティ" の章では、プロパティリストにおけるテーマと名称で各プロパティを紹介しています。


[a](#a) - [b](#b) - [c](#c) - [d](#d) - [e](#e) - [f](#f) - [g](#g) - [h](#h) - [i](#i) - [j](#j) - [k](#k) - [l](#l) - [m](#m) - [n](#n) - [p](#p) - [r](#r) - [s](#s) - [t](#t) - [u](#u) - [v](#v) - [w](#w) - [z](#z)


<table spaces-before="0" line-breaks-before="3">
  <tr>
    <th>
      プロパティ
    </th>
    
    <th>
      説明
    </th>
    
    <th>
      とりうる値
    </th>
  </tr>
  
  <tr>
    <td>
      <a name="a">**a**</a>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Action.md#標準アクション">action</a>
    </td>
    
    <td>
      実行される一般的な動作
    </td>
    
    <td>
      有効な標準アクション名
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Text.md#ピッカーの使用を許可">allowFontColorPicker</a>
    </td>
    
    <td>
      オブジェクト属性を変更するためのフォントあるいはカラーピッカーの表示を許可します。
    </td>
    
    <td>
      true, false (デフォルト)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_BackgroundAndBorder.md#交互に使用する背景色">alternateFill</a>
    </td>
    
    <td>
      奇数番の行/列に使用するための異なる背景色を設定することができます。
    </td>
    
    <td>
      任意の css値; "transparent"; "automatic"
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_DataSource.md#自動挿入">automaticInsertion</a>
    </td>
    
    <td>
      オブジェクトに割り当てられた選択リストに無い値をユーザーが入力した場合に、その値をリストに自動的に追加します。
    </td>
    
    <td>
      true, false<a name="b"></a>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">b</strong>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Display.md#テキスト-True時テキスト-False時">booleanFormat</a>
    </td>
    
    <td>
      二つの値しか取れないことを指定します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_CoordinatesAndSizing.md#角の半径">borderRadius</a>
    </td>
    
    <td>
      角の丸い四角形の角の半径
    </td>
    
    <td>
      最小値: 0
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_BackgroundAndBorder.md#境界線スタイル">borderStyle</a>
    </td>
    
    <td>
      リストボックスの境界線のスタイルを設定します。
    </td>
    
    <td>
      "system", "none", "solid", "dotted", "raised", "sunken", "double"
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_CoordinatesAndSizing.md#下">bottom</a>
    </td>
    
    <td>
      フォーム上のオブジェクトの下の座標
    </td>
    
    <td>
      最小値: 0<a name="c"></a>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">c</strong>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_DataSource.md#選択リスト">choiceList</a>
    </td>
    
    <td>
      オブジェクトに割り当てられた選択肢のリスト
    </td>
    
    <td>
      選択肢のリスト
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Object.md#CSSクラス">class</a>
    </td>
    
    <td>
      css ファイルにてクラスセレクターとして使用される、(複数の場合は半角スペース区切りの) クラス名のリスト。
    </td>
    
    <td>
      クラス名のリスト
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Crop.md#列">columnCount</a>
    </td>
    
    <td>
      列数
    </td>
    
    <td>
      最小値: 1
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_ListBox.md#列">columns</a>
    </td>
    
    <td>
      リストボックス列のコレクション
    </td>
    
    <td>
      定義された列プロパティを格納した列オブジェクトのコレクション
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Entry.md#コンテキストメニュー">contextMenu</a>
    </td>
    
    <td>
      選択されたエリア内でユーザーに標準のコンテキストメニューを提供します。
    </td>
    
    <td>
      "automatic", "none"
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Action.md#オブジェクトメソッド実行">continuousExecution</a>
    </td>
    
    <td>
      ユーザーによるコントロールのトラッキング中に、オブジェクトメソッドを実行するかどうかを指定します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Display.md#表示タイプ">controlType</a>
    </td>
    
    <td>
      リストボックスのセル内で値がどのように表示されるかを指定します。
    </td>
    
    <td>
      "input", "checkbox" (ブール/数値型カラムのみ), "automatic", "popup" (ブール型カラムのみ)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_DataSource.md#カレントの項目">currentItemSource</a>
    </td>
    
    <td>
      リストボックス内で最後に選択された項目
    </td>
    
    <td>
      オブジェクト型の式
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_DataSource.md#カレントの項目の位置">currentItemPositionSource</a>
    </td>
    
    <td>
      リストボックス内で最後に選択された項目の位置
    </td>
    
    <td>
      数値型の式
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_TextAndPicture.md#背景パス名">customBackgroundPicture</a>
    </td>
    
    <td>
      ボタンの背景に描画されるピクチャーを設定します。
    </td>
    
    <td>
      POSIX シンタックスの相対パス。 style プロパティの "custom" オプションと併用する必要があります。
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_TextAndPicture.md#横方向マージン">customBorderX</a>
    </td>
    
    <td>
      オブジェクト内部の水平方向のマージンのサイズを設定します (ピクセル単位)。 style プロパティの "custom" オプションと併用する必要があります。
    </td>
    
    <td>
      最小値: 0
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_TextAndPicture.md#縦方向マージン">customBorderY</a>
    </td>
    
    <td>
      オブジェクト内部の垂直方向のマージンのサイズを設定します (ピクセル単位)。 style プロパティの "custom" オプションと併用する必要があります。
    </td>
    
    <td>
      最小値: 0
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_TextAndPicture.md#アイコンオフセット">customOffset</a>
    </td>
    
    <td>
      カスタムのオフセット値をピクセル単位で設定します。 style プロパティの "custom" オプションと併用する必要があります。
    </td>
    
    <td>
      最小値: 0
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Plugins.md#詳細設定">customProperties</a>
    </td>
    
    <td>
      高度なプロパティ (あれば)
    </td>
    
    <td>
      JSON 文字列、または base64 エンコードの文字列<a name="d"></a>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">d</strong>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Object.md#変数あるいは式">dataSource</a> (オブジェクト)<br> <a href="properties_Subform.md#ソース">dataSource</a> (サブフォーム)<br> <a href="properties_Object.md#配列リストボックス">dataSource</a> (配列リストボックス) <br> <a href="properties_Object.md#コレクションまたはエンティティセレクション">dataSource</a> (コレクションまたはエンティティセレクションリストボックス)<br> <a href="properties_DataSource.md#式">dataSource</a> (リストボックス列) <br> <a href="properties_Hierarchy.md#階層リストボックス">dataSource</a> (階層リストボックス)
    </td>
    
    <td>
      データのソースを指定します。
    </td>
    
    <td>
      4D変数、フィールド名、あるいは任意のランゲージ式
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Object.md#式の型-式タイプ">dataSourceTypeHint</a> (オブジェクト) <br> <a href="properties_Object.md#式の型-式タイプ">dataSourceTypeHint</a> (リストボックス列)
    </td>
    
    <td>
      変数の型を示します。
    </td>
    
    <td>
      "integer", "number", "boolean", "picture", "text", date", "time", "arrayText", "collection", "object", "undefined"
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Display.md#日付フォーマット">dateFormat</a>
    </td>
    
    <td>
      表示/印刷時に日付をどのように表すかを管理します。 4D にビルトインされているフォーマットから選択されなければなりません。
    </td>
    
    <td>
      "systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long", "blankIfNull" (他の値と組み合わせることができます)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Appearance.md#デフォルトボタン">defaultButton</a>
    </td>
    
    <td>
      ボタンの見た目を変更することで、ユーザーに対してこのボタンが推奨される選択であることを示します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_RangeOfValues.md#デフォルト値">defaultValue</a>
    </td>
    
    <td>
      入力オブジェクトにデフォルトで表示する値やスタンプを指定します。
    </td>
    
    <td>
      文字列、または "#D", "#H", "#N"
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Subform.md#削除を許可">deletableInList</a>
    </td>
    
    <td>
      リストサブフォーム内でユーザーがサブレコードを削除できるかどうかを指定します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_ListBox.md#詳細フォーム名">detailForm</a> (リストボックス)<br><a href="properties_Subform.md#詳細フォーム">detailForm</a> (サブフォーム)
    </td>
    
    <td>
      詳細フォームをリストサブフォームに関連づけます。
    </td>
    
    <td>
      テーブルまたはプロジェクトフォームの名前 (文字列), フォームを定義する .json ファイルへの POSIX パス (文字列), またはフォームを定義するオブジェクト
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Display.md#レンダリングしない">display</a>
    </td>
    
    <td>
      フォーム上にオブジェクトを描画するかどうかを指定します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Subform.md#空行をダブルクリック">doubleClickInEmptyAreaAction</a>
    </td>
    
    <td>
      リストサブフォームの空行がダブルクリックされた際に実行されるアクションを指定します。
    </td>
    
    <td>
      "addSubrecord", 何もしない場合は ""
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_ListBox.md#行をダブルクリック">doubleClickInRowAction</a> (リストボックス)<br><a href="properties_Subform.md#行をダブルクリック">doubleClickInRowAction</a> (サブフォーム)
    </td>
    
    <td>
      レコードをダブルクリックしたときに実行するアクション
    </td>
    
    <td>
      "editSubrecord", "displaySubrecord"
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Appearance.md#解像度">dpi</a>
    </td>
    
    <td>
      4D Write Pro エリアの画面解像度
    </td>
    
    <td>
      0 = 自動, 72, 96
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Action.md#ドラッグ有効">dragging</a>
    </td>
    
    <td>
      ドラッグ機能を有効化します。
    </td>
    
    <td>
      "none", "custom", "automatic" (リストとリストボックスを除く)
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Action.md#ドラッグ有効">dropping</a>
    </td>
    
    <td>
      ドロップ機能を有効化します。
    </td>
    
    <td>
      "none", "custom", "automatic" (リストとリストボックスを除く)<a name="e"></a>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong x-id="1">e</strong>
    </td>
    
    <td>
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Entry.md#入力可">enterable</a>
    </td>
    
    <td>
      ユーザーがオブジェクトに値を入力できるかどうかを指定します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="properties_Subform.md#リスト更新可">enterableInList</a>
    </td>
    
    <td>
      リストサブフォームにおいて、ユーザーがレコードデータを直接編集できるかどうかを指定します。
    </td>
    
    <td>
      true, false
    </td>
  </tr>
</table>

[entryFiler](properties_Entry.md#entry-filter)|オブジェクトあるいはカラムのセルに入力フィルターを割り当てます。 This property is not accessible if the Enterable property is not enabled.|Text to narrow entries | |[events](https://doc.4d.com/4Dv18/4D/18/Form-Events.302-4504424.en.html)|List of all events selected for the object or form|Collection of event names, e.g. ["onClick","onDataChange"...].| |[excludedList](properties_RangeOfValues.md#excluded-list)|Allows setting a list whose values cannot be entered in the column.|A list of values to be excluded.<a name="f"></a>| |**f**||| |[fill](properties_BackgroundAndBorder.md#background-color-fill-color)|Defines the background color of an object. |Any CSS value, "transparent", "automatic"| |[focusable](properties_Entry.md#focusable)|Indicates whether the object can have the focus (and can thus be activated by the keyboard for instance)|true, false| |[fontFamily](properties_Text.md#font)|Specifies the name of font family used in the object. |CSS font family name  |  
|[fontSize](properties_Text.md#font-size)|Sets the font size in points when no font theme is selected|minimum: 0| |[fontStyle](properties_Text.md#italic)|Sets the selected text to slant slightly to the right. |"normal", "italic"| |[fontTheme](properties_Text.md#font-theme)|Sets the automatic style |"normal", "main", "additional"| |[fontWeight](properties_Text.md#bold)|Sets the selected text to appear darker and heavier. | "normal", "bold"| |[footerHeight](properties_Footers.md#height)|Used to set the row height |pattern (\\d+)(p&#124;em)?$ (positive decimal + px/em )| |[frameDelay](properties_Animation.md#switch-every-x-ticks)|Enables cycling through the contents of the picture button at the specified speed (in ticks).|minimum: 0<a name="g"></a>| |**g**||| |[graduationStep](properties_Scale.md#graduation-step)| Scale display measurement.|minimum: 0<a name="h"></a>| |**h**||| |[header](properties_Headers.md#headers)|Defines the header of a list box column|Object with properties "text", "name", "icon", "dataSource", "fontWeight", "fontStyle", "tooltip" | |[headerHeight](properties_Headers.md#height)|Used to set the row height |pattern ^(\\d+)(px&#124;em)?$ (positive decimal + px/em )| |[height](properties_CoordinatesAndSizing.md#height)|Designates an object's vertical size|minimum: 0| |[hideExtraBlankRows](properties_BackgroundAndBorder.md#hide-extra-blank-rows)|Deactivates the visibility of extra, empty rows. |true, false| |[hideFocusRing](properties_Appearance.md#hide-focus-rectangle)|Hides the selection rectangle when the object has the focus.|true, false| |[hideSystemHighlight](properties_Appearance.md#hide-selection-highlight)|Used to specify hiding highlighted records in the list box.|true, false| |[highlightSet](properties_ListBox.md#highlight-set)| string| Name of the set.| |[horizontalLineStroke](properties_Gridlines.md#horizontal-line-color)|Defines the color of the horizontal lines in a list box (gray by default).|Any CSS value, "'transparent", "automatic"<a name="i"></a>| |**i**||| |[icon](properties_TextAndPicture.md#picture-pathname)|The pathname of the picture used for buttons, check boxes, radio buttons, list box headers.|Relative or filesystem path in POSIX syntax.| |[iconFrames](properties_TextAndPicture.md#number-of-states)|Sets the exact number of states present in the picture. |minimum: 1| |[iconPlacement](properties_TextAndPicture.md#icon-location)|Designates the placement of an icon in relation to the form object.|"none", "left", "right"<a name="k"></a>| |**k**||| |[keyboardDialect](properties_Entry.md#keyboardDialect)|To associate a specific keyboard layout to an input.|A keyboard code string, e.g. "ar-ma"<a name="l"></a>| |**l**||| |[labels](properties_DataSource.md#choice-list-static-list)|A list of values to be used as tab control labels|ex: "a", "b, "c", ...|  
|[labelsPlacement](properties_Scale.md#label-location) (objects)<br>[labelsPlacement](properties_Appearance.md#tab-control-direction) (splitter / tab control)| Specifies the location of an object's displayed text.|"none", "top", "bottom", "left", "right"| |[layoutMode](properties_Appearance.md#view-mode) |Mode for displaying the 4D Write Pro document in the form area.|"page", "draft", "embedded"| |[left](properties_CoordinatesAndSizing.md#left)|Positions an object on the left.|minimum: 0| |list, see [choiceList](properties_DataSource.md#choice-list)|A list of choices associated with a hierarchical list|A list of choices| |[listboxType](properties_Object.md#data-source)|The list box data source.|"array", "currentSelection", "namedSelection", "collection"| |[listForm](properties_Subform.md#list-form)|List form to use in the subform.|Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form| |[lockedColumnCount](properties_ListBox.md#number-of-locked-columns) |Number of columns that must stay permanently displayed in the left part of a list box. |minimum: 0| |[loopBackToFirstFrame](properties_Animation.md#loop-back-to-first-frame)|Pictures are displayed in a continuous loop.|true, false<a name="m"></a>| |**m**||| |[max](properties_Scale.md#maximum)|The maximum allowed value. 時間型のステッパーの場合、値は秒を表します。日付型のステッパーでは、最小および最大プロパティは無視されます。 |minimum: 0 (for numeric data types)| |[maxWidth](properties_CoordinatesAndSizing.md#maximum-width)|Designates the largest size allowed for list box columns. |minimum: 0| |[metaSource](properties_Text.md#meta-info-expression)| A meta object containing style and selection settings.|An object expression| |[method](properties_Action.md#method)|A project method name. |The name of an existing project method| |[methodsAccessibility](properties_WebArea.md#access-4d-methods)|Which 4D methods can be called from a Web area|"none" (default), "all"| |[min](properties_Scale.md#minimum)|The minimum allowed value. For numeric steppers, these properties represent seconds when the object is associated with a time type value and are ignored when it is associated with a date type value.|minimum: 0 (for numeric data types)| |[minWidth](properties_CoordinatesAndSizing.md#minimum-width)|Designates the smallest size allowed for list box columns. |minimum: 0| |[movableRows](properties_Action.md#movable-rows)|Authorizes the movement of rows during execution. |true, false| |[multiline](properties_Entry.md#multiline)|Handles multiline contents. |"yes", "no", "automatic"<a name="n"></a>| |**n**||| |[name](properties_Object.md#object-name)|The name of the form object. (Optional for the form)|Any name which does not belong to an already existing object| |[numberFormat](properties_Display.md#number-format) |Controls the way the alphanumeric fields and variables appear when displayed or printed.|Numbers (including a decimal point or minus sign if necessary)<a name="p"></a>| |**p**||| |[picture](properties_Picture.md#pathname)|The pathname of the picture for picture buttons, picture pop-up menus, or static pictures|Relative or filesystem path in POSIX syntax.| |[pictureFormat](properties_Display.md#picture-format) (input, list box column or footer)<br>[pictureFormat](properties_Picture.md#display) (static picture)|Controls how pictures appear when displayed or printed.|"truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft" (excluding static pictures), "proportionalCenter"(excluding static pictures)| |[placeholder](properties_Entry.md#placeholder) |Grays out text when the data source value is empty.|Text to be grayed out.| |[pluginAreaKind](properties_Object.md#plug-in-kind)|Describes the type of plug-in. |The type of plug-in. | |[popupPlacement](properties_TextAndPicture.md#with-pop-up-menu) |Allows displaying a symbol that appears as a triangle in the button, which indicates that there is a pop-up menu attached. |"None", Linked", "Separated" | |[printFrame](properties_Print.md#print-frame)|Print mode for objects whose size can vary from one record to another depending on their contents |"fixed", "variable", (subform only) "fixedMultiple"| |[progressSource](properties_WebArea.md#progression)| A value between 0 and 100, representing the page load completion percentage in the Web area. Automatically updated by 4D, cannot be modified manually.|minimum: 0<a name="r"></a>| |**r**||| |[radioGroup](properties_Object.md#radio-group)|Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.|    Radio group name| |[requiredList](properties_RangeOfValues.md#required-list)|Allows setting a list where only certain values can be inserted. |A list of mandatory values.| |[resizable](properties_ResizingOptions.md#resizable)|Designates if the size of an object can be modified by the user.|"true", "false"| |[resizingMode](properties_ResizingOptions.md#column-auto-resizing)|Specifies if a list box column should be automatically resized | "rightToLeft", "legacy"| |[right](properties_CoordinatesAndSizing.md#right)|Positions an object on the right.|minimum: 0| |[rowControlSource](properties_ListBox.md#row-control-array) |A 4D array defining the list box rows. |Array| |[rowCount](properties_Crop.md#rows)|Sets the number of rows.|minimum: 1| |[rowFillSource](properties_BackgroundAndBorder.md#row-background-color-array) (array list box)<br>[rowFillSource](properties_BackgroundAndBorder.md#background-color-expression) (selection or collection list box)|The name of an array or expression to apply a custom background color to each row of a list box. |The name of an array or expression.| |[rowHeight](properties_CoordinatesAndSizing.md#row-height)|Sets the height of list box rows. |CSS value unit "em" or "px" (default)| |[rowHeightAuto](properties_CoordinatesAndSizing.md#automatic-row-height)|boolean |"true", "false"| |[rowHeightAutoMax](properties_CoordinatesAndSizing.md#maximum-width)|Designates the largest height allowed for list box rows. |CSS value unit "em" or "px" (default). minimum: 0| |[rowHeightAutoMin](properties_CoordinatesAndSizing.md#minimum-width)|Designates the smallest height allowed for list box rows. |CSS value unit "em" or "px" (default). minimum: 0| |[rowHeightSource](properties_CoordinatesAndSizing.md#row-height-array)|An array defining different heights for the rows in a list box. |Name of a 4D array variable.| |[rowStrokeSource](properties_Text.md#row-font-color-array) (array list box)<br>[rowStrokeSource](properties_Text.md#font-color-expression) (selection or collection/entity selection list box)|An array or expression for managing row colors.|Name of array or expression.| |[rowStyleSource](properties_Text.md#row-style-array) (array list box) <br> [rowStyleSource](properties_Text.md#style-expression) (selection or collection/entity selection list box)|An array or expression for managing row styles.|Name of array or expression.<a name="s"></a>| |**s**||| |[scrollbarHorizontal](properties_Appearance.md#horizontal-scroll-bar) | A tool allowing the user to move the viewing area to the left or right.|"visible", "hidden", "automatic"| |[scrollbarVertical](properties_Appearance.md#vertical-scroll-bar) | A tool allowing the user to move the viewing area up or down.|"visible", "hidden", "automatic"| |[selectedItemsSource](properties_DataSource.md#selected-items)|Collection of the selected items in a list box.|Collection expression   | |[selectionMode](properties_Action.md#multi-selectable) (hierarchical list)<br> [selectionMode](properties_ListBox.md#selection-mode) (list box)<br> [selectionMode](properties_Subform.md#selection-mode) (subform)|Allows the selection of multiple records/rows.|"multiple", "single", "none" |[shortcutAccel](properties_Entry.md#shortcut)|Specifies the system to use, Windows or Mac.|true, false| |[shortcutAlt](properties_Entry.md#shortcut)|Designates the Alt key|true, false| |[shortcutCommand](properties_Entry.md#shortcut)|Designates the Command key (macOS)|true, false| |[shortcutControl](properties_Entry.md#shortcut)|Designates the Control key (Windows)|true, false| |[shortcutKey](properties_Entry.md#shortcut)|The letter or name of a special meaning key.|"[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"| |[shortcutShift](properties_Entry.md#shortcut)  |Designates the Shift key   |true, false| |[showFooters](properties_Footers.md#display-footers)|Displays or hides column footers. |true, false| |[showGraduations](properties_Scale.md#display-graduation)|Displays/Hides the graduations next to the labels. |true, false| |[showHeaders](properties_Headers.md#display-headers)|Displays or hides column headers. |true, false| |[showHiddenChars](properties_Appearance.md#show-hidden-characters)|Displays/hides invisible characters.|true, false| |[showHorizontalRuler](properties_Appearance.md#show-horizontal-ruler)|Displays/hides the horizontal ruler when the document view is in Page view mode|true, false| |[showHTMLWysiwyg](properties_Appearance.md#show-html-wysiwyg)|Enables/disables the HTML WYSIWYG view|true, false| |[showPageFrames](properties_Appearance.md#show-page-frame)|Displays/hides the page frame when the document view is in Page view mode|true, false| |[showReferences](properties_Appearance.md#show-references)|Displays all 4D expressions inserted in the 4D Write Pro document as *references*|true, false| |[showSelection](properties_Entry.md#selection-always-visible)|Keeps the selection visible within the object after it has lost the focus |true, false|  
|[showVerticalRuler](properties_Appearance.md#show-vertical-ruler)|Displays/hides the vertical ruler when the document view is in Page view mode|true, false| |[singleClickEdit](properties_Entry.md#single-click-edit)|Enables direct passage to edit mode.|true, false| |[sizingX](properties_ResizingOptions.md#horizontal-sizing)|Specifies if the horizontal size of an object should be moved or resized when a user resizes the form.|"grow", "move", "fixed"| |[sizingY](properties_ResizingOptions.md#horizontal-sizing)|Specifies if the vertical size of an object should be moved or resized when a user resizes the form.|"grow", "move", "fixed"| |[sortable](properties_Action.md#sortable)| Allows sorting column data by clicking the header.|true, false| |[spellcheck](properties_Entry.md#auto-spellcheck)|Activates the spell-check for the object |true, false|  
|[splitterMode](properties_ResizingOptions.md#pusher)|When a splitter object has this property, other objects to its right (vertical splitter) or below it (horizontal splitter) are pushed at the same time as the splitter, with no stop.|"grow", "move", "fixed"| |[startPoint](shapes_overview.md#startpoint-property)|Starting point for drawing a line object (only available in JSON Grammar).|"bottomLeft", topLeft"| |[staticColumnCount](properties_ListBox.md#number-of-static-columns) | Number of columns that cannot be moved during execution.|minimum: 0| |[step](properties_Scale.md#step)| Minimum interval accepted between values during use. For numeric steppers, this property represents seconds when the object is associated with a time type value and days when it is associated with a date type value.|minimum: 1| |[storeDefaultStyle](properties_Text.md#store-with-default-style-tags)|Store the style tags with the text, even if no modification has been made|true, false| |[stroke](properties_Text.md#font-color) (text)<br> [stroke](properties_BackgroundAndBorder.md#line-color) (lines)<br>[stroke](properties_BackgroundAndBorder.md#transparent) (list box)|Specifies the color of the font or line used in the object. |Any CSS value, "transparent", "automatic"| |[strokeDashArray](properties_BackgroundAndBorder.md#dotted-line-type)|Describes dotted line type as a sequence of black and white points|Number array or string| |[strokeWidth](properties_BackgroundAndBorder.md#line-width) |Designates the thickness of a line.|An integer or 0 for smallest width on a printed form| |[style](properties_TextAndPicture.md#multi-style)|Allows setting the general appearance of the button. See Button Style for more information.|"regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom"| |[styledText](properties_Text.md#style)|Enables the possibility of using specific styles in the selected area.|true, false| |[switchBackWhenReleased](properties_Animation.md#switch-back-when-released)|Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released.|true, false| |[switchContinuously](properties_Animation.md#switch-continuously-on-clicks)|Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation).|true, false| |[switchWhenRollover](properties_Animation.md#switch-when-roll-over)|Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.|true, false<a name="t"></a>| |**t**||| |[table](properties_Subform.md#source)|Table that the list subform belongs to (if any).|4D table name, or ""| |[text](properties_Object.md#title)|The title of the form object|Any text| |[textAlign](properties_Text.md#horizontal-alignment)|Horizontal location of text within the area that contains it. |"automatic", "right", "center", "justify", "left"| |[textAngle](properties_Text.md#orientation)|Modifies the orientation (rotation) of the text area. |0, 90, 180, 270| |[textDecoration](properties_Text.md#underline)|Sets the selected text to have a line running beneath it.|"normal", "underline"| |[textFormat](properties_Display.md#alpha-format)|Controls the way the alphanumeric fields and variables appear when displayed or printed.|"### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", custom formats| |[textPlacement](properties_TextAndPicture.md#title-picture-position)|Relative location of the button title in relation to the associated icon.|"left", "top", "right", "bottom", "center"| |[threeState](properties_Display.md#three-states)|Allows a check box object to accept a third state.|true, false| |[timeFormat](properties_Display.md#time-format)|Controls the way times appear when displayed or printed. 4D にビルトインされているフォーマットから選択されなければなりません。 |"systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS", "blankIfNull" (can be combined with the other possible values)| |[truncateMode](properties_Display.md#truncate-with-ellipsis) | Controls the display of values when list box columns are too narrow to show their full contents.|"withEllipsis", "none" | |[type](properties_Object.md#type)|Mandatory. Designates the data type of the form object.|"text", "rectangle", "groupBox", "tab", "line", "button", "checkbox", "radio", "dropdown", "combo", "webArea", "write", "subform", "plugin", "splitter", "buttonGrid", "progress", "ruler", "spinner", "stepper", "list", "pictureButton", "picturePopup", "listbox", "input", "view"| |[tooltip](properties_Help.md)| Provide users with additional information about a field.|Additional information to help a user| |[top](properties_CoordinatesAndSizing.md#top)|Positions an object at the top (centered).|minimum: 0<a name="u"></a>| |**u**||| |[urlSource](properties_WebArea.md#url)|Designates the the URL loaded or being loading by the associated Web area. |A URL.| |[useLastFrameAsDisabled](properties_Animation.md#use-last-frame-as-disabled)|Enables setting the last thumbnail as the one to display when the button is disabled.|true, false| |[userInterface](properties_Appearance.md#user-interface)|4D View Pro area interface.|"none" (default), "ribbon", "toolbar"<a name="v"></a>| |**v**||| |[values](properties_DataSource.md#default-list-values)|List of default values for an array listbox column|ex: "A","B","42"...| |[variableCalculation](properties_Object.md#variable-calculation)|Allows mathematical calculations to be performed.|"none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare"| |[verticalAlign](properties_Text.md#vertical-alignment)|Vertical location of text within the area that contains it. |"automatic", "top", "middle", "bottom"| |[verticalLineStroke](properties_Gridlines.md#vertical-line-color)|Defines the color of the vertical lines in a list box (gray by default).|Any CSS value, "'transparent", "automatic"| |[visibility](properties_Display.md#visibility)|Allows hiding the object in the Application environment.|"visible", "hidden", "selectedRows", "unselectedRows"<a name="w"></a>| |**w**||| |[webEngine](properties_WebArea.md#use-embedded-web-rendering-engine)| Used to choose between two rendering engines for the Web area, depending on the specifics of the application.|"embedded", "system"| |[width](properties_CoordinatesAndSizing.md#width)|Designates an object's horizontal size|minimum: 0| |[withFormulaBar](properties_Appearance.md#show-formula-bar)|Manages the display of a formula bar with the Toolbar interface in the 4D View Pro area.|true, false| |[wordwrap](properties_Display.md#wordwrap) |Manages the display of contents when it exceeds the width of the object. | "automatic" (excluding list box), "normal", "none"<a name="z"></a>| |**z**||| |[zoom](properties_Appearance.md#zoom)|Zoom percentage for displaying 4D Write Pro area|number (minimum=0)|
