---
id: checkboxOverview
title: チェックボックス
---

## 概要

チェックボックスはボタンの一種で、バイナリ (true-false) データの入力や表示をおこないます。 基本的に、チェックボックスの状態は選択または未選択のいずれかになりますが、3つめの状態を定義することもできます (後述参照)。

![](assets/en/FormObjects/checkbox.png)

チェックボックスはメソッドにより制御されます。 他のボタンと同じように、フォームが初めて開かれると、チェックボックスの変数は 0 に初期化されます。 チェックボックスが選択されると、チェックボックスに割り当てられたメソッドが実行されます。

チェックボックスは小さな四角形の右側にテキストを表示します。 このテキストはチェックボックスの [タイトル](properties_Object.md#title) プロパティで設定します。 タイトルには、XLIFF参照を入れることもできます ([付録 B: XLIFFアーキテクチャー](https://doc.4d.com/4Dv18/4D/18/Appendix-B-XLIFF-architecture.300-4575737.ja.html) 参照)。

## チェックボックスの使用

チェックボックスには整数型またはブール型の [変数または式](properties_Object.md#変数あるいは式) を設定することができます。

- **整数:** チェックボックスが選択されると、変数の値は 1 になります。 チェックボックスが選択されていない場合の値は 0 です。 チェックボックスが 3番目の状態 (後述参照) のとき、変数値は 2 になります。
- **boolean:** if the box is checked, the variable has the value `True`. When not checked, it has the value `False`. 

Any or all check boxes in a form can be checked or unchecked. A group of check boxes allows the user to select multiple options.

### Three-States check box

Check box objects with style [Regular](checkbox_overview.md#regular) and [Flat](checkbox_overview.md#flat) accept a third state. This third state is an intermediate status, which is generally used for display purposes. For example, it allows indicating that a property is present in a selection of objects, but not in each object of the selection.

![](assets/en/FormObjects/checkbox_3states.png)

To enable this third state, you must select the [Three-States](properties_Display.md#three-states) property.

This property is only available for regular and flat check boxes associated with numeric [variables or expressions](properties_Object.md#variable-or-expression) — check boxes for Boolean expressions cannot use the [Three-States](properties_Display.md#three-states) property (a Boolean expression cannot be in an intermediary state).

The variable associated with the check box returns the value 2 when the check box is in the third state.

> In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state.

## Using a standard action

You can assign a [standard action](properties_Action.md#standard-action) to a check box to handle attributes of text areas. For example, if you assign the `fontBold` standard action, at runtime the check box will manage the "bold" attribute of the selected text in the current area.

Only actions that can represent a true/false status ("checkable" actions) are supported by this object:

| Supported actions                   | Usage condition (if any) |
| ----------------------------------- | ------------------------ |
| avoidPageBreakInsideEnabled         | 4D Write Pro areas only  |
| fontItalic                          |                          |
| fontBold                            |                          |
| fontLinethrough                     |                          |
| fontSubscript                       | 4D Write Pro areas only  |
| fontSuperscript                     | 4D Write Pro areas only  |
| fontUnderline                       |                          |
| font/showDialog                     | Mac only                 |
| htmlWYSIWIGEnabled                  | 4D Write Pro areas only  |
| section/differentFirstPage          | 4D Write Pro areas only  |
| section/differentLeftRightPages     | 4D Write Pro areas only  |
| spell/autoCorrectionEnabled         |                          |
| spell/autoDashSubstitutionsEnabled  | Mac only                 |
| spell/autoLanguageEnabled           | Mac only                 |
| spell/autoQuoteSubstitutionsEnabled | Mac only                 |
| spell/autoSubstitutionsEnabled      |                          |
| spell/enabled                       |                          |
| spell/grammarEnabled                | Mac only                 |
| spell/showDialog                    | Mac only                 |
| spell/visibleSubstitutions          |                          |
| visibleBackground                   | 4D Write Pro areas only  |
| visibleFooters                      | 4D Write Pro areas only  |
| visibleHeaders                      | 4D Write Pro areas only  |
| visibleHiddenChars                  | 4D Write Pro areas only  |
| visibleHorizontalRuler              | 4D Write Pro areas only  |
| visiblePageFrames                   | 4D Write Pro areas only  |
| visibleReferences                   |                          |
| widowAndOrphanControlEnabled        | 4D Write Pro areas only  |


For detailed information on these actions, please refer to the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section.

## Check box button styles

Check box styles control a check box's general appearance as well as its available properties. It is possible to apply different predefined styles to check boxes. これらのプロパティや動作を組み合わせることで、多数のバリエーションが得られます。

With the exception of the [available properties](#supported-properties), many check box objects are *structurally* identical. 違いは、関連づけられた変数の処理にあります。

4D provides check boxes in the following predefined styles:

### 通常

The Regular check box style is a standard system check box (*i.e.*, a rectangle with a descriptive title):

![](assets/en/FormObjects/checkbox_regular.png)

#### JSON 例:

        "myCheckBox": {
            "type": "checkbox", 
            "style":"regular",
            "text": "Cancel",   
            "action": "Cancel",     
            "left": 60,         
            "top": 160,     
            "width": 100,           
            "height": 20        
            "dataSourceTypeHint":"boolean"
            }
    

### フラット

The Flat check box style is a minimalist appearance. The Flat style's graphic nature is particularly useful for forms that will be printed.

![](assets/en/FormObjects/checkbox_flat.png)

#### JSON 例:

        "myCheckBox": {
                "type": "checkbox", 
                "style":"flat",
                "text": "Cancel",   
                "action": "cancel", 
                "left": 60,     
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
    

### Toolbar button

The Toolbar button check box style is primarily intended for integration in a toolbar.

The Toolbar style has a transparent background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example with states unchecked / checked / highlighted:

![](assets/en/FormObjects/checkbox_toolbar.png)

#### JSON 例:

        "myCheckBox": {
                    "type": "checkbox",
                    "style":"toolbar",  
                    "text": "Checkbox",
                    "icon": "/RESOURCES/File.png", 
                    "iconFrames": 4 
                    "left": 60, 
                    "top": 160, 
                    "width": 100,                   
                    "height": 20                    
                    }
    

### ベベル

The Bevel check box style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive title) style with the [Toolbar](#toolbar) style's behavior.

The Bevel style has a light gray background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example with states unchecked / checked / highlighted:

![](assets/en/FormObjects/checkbox_bevel.png)

#### JSON 例:

        "myCheckBox": {
                    "type": "checkbox", 
                    "style":"bevel",
                    "text": "Checkbox",  
                    "icon": "/RESOURCES/File.png", 
                    "iconFrames": 4 
                    "left": 60, 
                    "top": 160, 
                    "width": 100,               
                    "height": 20                
                    }
    

### 角の丸いベベル

The Rounded Bevel check box style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, the corners of the button may be rounded. As with the Bevel style, the Rounded Bevel style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

The Rounded Bevel style has a light gray background with a title. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

Example on macOS:

![](assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> on Windows, the Rounded Bevel style is identical to the [Bevel](#bevel) style.

#### JSON 例:

```4d
    "myCheckBox": {
                "type": "checkbox", 
                "style":"roundedBevel",  
                "text": "Checkbox", 
                "icon": "/RESOURCES/File.png", 
                "iconFrames": 4 
                "left": 60, 
                "top": 160, 
                "width": 100,           
                "height": 20            
                }
```

### OS Xグラデーション

The OS X Gradient check box style is nearly identical to the [Bevel](#bevel) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel style, the OS X Gradient style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

The OS X Gradient style has a light gray background with a title and is displayed as a two-tone system button on macOS. It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states).

![](assets/en/FormObjects/checkbox_osxgradient_mac.png)

> On Windows, this style is identical to the [Bevel](#bevel) style.

#### JSON 例:

        "myCheckBox": {
                "type": "checkbox", 
                "style":"gradientBevel", 
                "text": "Checkbox", 
                "icon": "/RESOURCES/File.png",
                "iconFrames": 4
                "left": 60,     
                "top": 160,     
                "width": 100,               
                "height": 20                
               }
    

### OS Xテクスチャー

The OS X Textured checkbox style is similar to the [Bevel](#bevel) style except, depending on the OS, it may have a different appearance. As with the Bevel style, the OS X Textured style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

- *Windows* - a standard system button with a light blue background with a title in the center.
    
    ![](assets/en/FormObjects/checkbox_osxtextured.png)

- *macOS* - 灰色のグラデーションを表示する標準のシステムボタンです。 高さは定義済みで、変更できません。
    
    ![](assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### JSON 例:

        "myCheckBox": {
                "type": "checkbox", 
                "style":"texturedBevel", 
                "text": "Checkbox", 
                "left": 60, 
                "top": 160, 
                "width": 100,                   
                "height": 20                    
                }
    

### Office XP

The Office XP check box style combines the appearance of the [Regular](#regular) style with the [Toolbar](#toolbar) style's behavior.

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - マウスオーバー時にのみ背景が表示されます。 Example with states unchecked / checked / highlighted:
    
    ![](assets/en/FormObjects/checkbox_officexp.png)

- *macOS* - 背景は常に表示されます。 Example with states unchecked / checked:
    
    ![](assets/en/FormObjects/checkbox_officexp_mac.png)

#### JSON 例:

        "myCheckBox": {
                    "type": "checkbox", 
                    "style":"office",
                    "text": "Checkbox",  
                    "action": "fontBold",
                    "icon": "/RESOURCES/File.png", 
                    "iconFrames": 4     
                   "left": 60,  
                    "top": 160,     
                    "width": 100,           
                    "height": 20            
                    }
    

### Collapse / Expand

This check box style can be used to add a standard collapse/expand icon. These buttons are used natively in hierarchical lists.

- *Windows* - the button looks like a [+] or a [-]
    
    ![](assets/en/FormObjects/checkbox_collapse.png)

- *macOS* - it looks like a triangle pointing right or down.
    
    ![](assets/en/FormObjects/checkbox_collapse_mac.png)

#### JSON 例:

        "myCheckBox": {
                    "type": "checkbox", 
                    "style":"disclosure",
                    "method": "m_collapse",
                    "left": 60, 
                    "top": 160, 
                    "width": 100,           
                    "height": 20            
                    }
    

### Disclosure Button

In macOS and Windows, a check box with the "Disclosure" style appears as a standard disclosure button, usually used to show/hide additional information. When used as a radio button, the button symbol points downwards with value 0 and upwards with value 1.

- *Windows*
    
    ![](assets/en/FormObjects/checkbox_disclosure.png)

- *macOS*
    
    ![](assets/en/FormObjects/checkbox_disclosure_mac.png)

#### JSON 例:

        "myCheckBox": {
                    "type": "checkbox",     
                    "style":"roundedDisclosure",    
                    "method": "m_disclose",
                    "left": 60,     
                    "top": 160, 
                    "width": 100,           
                    "height": 20            
                    }
    

### カスタム

The Custom check box style accepts a personalized background picture and allows managing specific properties:

- [背景バス名](properties_TextAndPicture.md#backgroundPathname)
- [アイコンオフセット](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) and [Vertical Margin](properties_TextAndPicture.md#verticalMargin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

#### JSON 例:

        "myCheckbox": {
            "type": "checkbox",
            "style":"custom",
            "text": "OK", 
            "icon": "/RESOURCES/smiley.jpg", 
            "iconFrame": 4, 
            "customBackgroundPicture": "/RESOURCES/paper.jpg", 
            "iconOffset": 5, //custom icon offset when clicked
            "left": 60, 
            "top": 160, 
            "width": 100,       
            "height": 20,
            "customBorderX": 20,
            "customBorderY": 5
            }
    

## プロパティ一覧

All check boxes share the same set of basic properties:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

[ボタンスタイル](#ボタンスタイル) に応じて、次の追加プロパティが使用できます:

- [背景バス名](properties_TextAndPicture.md#背景パス名) - [横方向マージン](properties_TextAndPicture.md#横方向マージン) - [アイコンオフセット](properties_TextAndPicture.md#アイコンオフセット) - [縦方向マージン](properties_TextAndPicture.md#縦方向マージン) (カスタムスタイル)
- [Three-States](properties_Display.md#three-states) (Flat, Regular)
- [Number of States](properties_TextAndPicture.md#number-of-states) - [Picture pathname](properties_TextAndPicture.md#picture-pathname) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) (Toolbar button, Bevel, Rounded Bevel, OS X Gradient, OS X Textured, Office XP, Custom)