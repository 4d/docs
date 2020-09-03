---
id: propertiesFooters
title: フッター
---

---
## フッターを表示

このプロパティは、[リストボックス列フッター](listbox_overview.md#リストボックスフッター) の表示/非表示を指定します。 列ごとに 1つのフッターを表示できます。それぞれのフッターは個別に設定できます。

#### JSON 文法

| 名           | データタイプ  | とりうる値       |
| ----------- | ------- | ----------- |
| showFooters | boolean | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)




---
## 高さ

このプロパティは、リストボックスフッターの高さを **行** または **ピクセル** 単位で指定します。 同じリストボックス内で異なる単位を使用することもできます:

*   *ピクセル* - 指定された値は当該行に対し直接適用され、列が使用しているフォントサイズ等は考慮されません。 フォントが行の高さに対して大きい場合、テキストは切り取られます。 ピクチャーはフォーマットに基づき、切り取られるかリサイズされます。

*   *Line* - the height is calculated while taking into account the font size of the row concerned.
    *   If more than one size is set, 4D uses the biggest one. For example, if a row contains "Verdana 18", "Geneva 12" and "Arial 9", 4D uses "Verdana 18" to determine the row height (for instance, 25 pixels). This height is then multiplied by the number of rows defined.
    *   This calculation does not take into account the size of pictures nor any styles applied to the fonts.
    *   In macOS, the row height may be incorrect if the user enters characters that are not available in the selected font. When this occurs, a substitute font is used, which may cause variations in size.
> This property can also be set dynamically using the [LISTBOX SET FOOTERS HEIGHT](https://doc.4d.com/4Dv17R6/4D/17-R6/List-box-footer-specific-properties.300-4354808.en.html) command.


Conversion of units: When you switch from one unit to the other, 4D converts them automatically and displays the result in the Property List. For example, if the font used is "Lucida grande 24", a height of "1 line" is converted to "30 pixels" and a height of "60 pixels" is converted to "2 lines".

Note that converting back and forth may lead to an end result that is different from the starting value due to the automatic calculations made by 4D. This is illustrated in the following sequences:

*(font Arial 18)*: 52 pixels -> 2 lines -> 40 pixels *(font Arial 12)*: 3 pixels -> 0.4 line rounded up to 1 line -> 19 pixels


#### JSON 例:

```
    "List Box": {
        "type": "listbox",
        "showFooters": true,
        "footerHeight": "44px",  
        ...
        }
```


#### JSON 文法

| 名            | データタイプ | とりうる値                         |
| ------------ | ------ | ----------------------------- |
| footerHeight | string | positive decimal+px &#124; em |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)


#### 参照

[Headers](properties_Headers.md) - [List box footers](listbox_overview.md#list-box-footers)