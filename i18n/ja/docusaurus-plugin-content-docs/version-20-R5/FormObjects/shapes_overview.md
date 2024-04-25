---
id: shapesOverview
title: 図形
---

図形は、4D フォームに設置することのできる [スタティックオブジェクト](formObjects_overview.md#アクティブオブジェクトとスタティックオブジェクト) です。

次の基本の図形が提供されています:

- 四角
- 線
- 楕円

## 四角

フォーム上に四角を配置することで、視覚的な効果が得られます。 四角で描画できるのは長方形に限られます。

四角のグラフィック属性 (線カラー、線幅、点線タイプ等) やリサイズオプションはプロパティリストにて指定できます。 角の [丸み](properties_CoordinatesAndSizing.md#角の半径) を指定することもできます。

![](../assets/en/FormObjects/shapes_rectangle2.png)

#### JSON 例:

```4d
	"myRectangle": {
		"type": "rectangle",	//define the type of object
		"left": 60,				//left position on the form  
		"top": 160,				//top position on the form 
		"width": 100,			//width of the object
		"height": 20,			//height of the object
		"borderRadius": 20		//define the roundness of the corners
                }
```

#### プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 線

フォーム上に線を配置することで、視覚的な効果が得られます。 線は水平、垂直のほか、あらゆる角度で描画することができます。

線のグラフィック属性 (線カラー、線幅、点線タイプ等) やリサイズオプションはプロパティリストにて指定できます。

### startPoint プロパティ

`startPoint` JSON プロパティは、線の始点を定義します (JSON例参照)。

> フォームエディター上では線の始点があきらかなため、プロパティリストにおいて `startPoint` プロパティは非表示です。

#### JSON 例:

```
	"myLine": {
		"type": "line",	               
		"left": 20,
		"top": 40,
		"width": 100,
		"height": 80,
		"startPoint": "topLeft", //first direction
		"strokeDashArray": "6 2" //dashed
		}
```

Result:
![](../assets/en/FormObjects/shape_line1.png)

```
	"myLine": {
		"type": "line",	               
		"left": 20,
		"top": 40,
		"width": 100,
		"height": 80,
		"startPoint": "bottomLeft", //2nd direction
		"strokeDashArray": "6 2" //dashed
		}
```

Result:
![](../assets/en/FormObjects/shape_line2.png)

#### プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [startPoint](#startpoint-property) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 楕円

フォーム上に楕円を配置することで、視覚的な効果が得られます。 楕円を使って円を描くことができます ([幅](properties_CoordinatesAndSizing.md#幅) と [高さ](properties_CoordinatesAndSizing.md#高さ) を同じ値に設定します)。

![](../assets/en/FormObjects/shape_oval.png)

#### JSON 例:

```4d
	"myOval": {
		"type": "oval",		//define the type of object
		"left": 60,			//left position on the form  
		"top": 160,			//top position on the form 
		"width": 100,		//width of the object
		"height": 20,		//height of the object
		"fill": "blue"		//define the background color
                }
```

#### プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
