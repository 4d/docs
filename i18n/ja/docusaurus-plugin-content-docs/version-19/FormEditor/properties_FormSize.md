---
id: formSize
title: フォームサイズ
---

 
4Dでは、フォームと [ウィンドウ](properties_WindowSize.md) の両方のサイズを設定することができます。 これらのプロパティは相互に依存しており、アプリケーションのインターフェースはこれらの相互作用によってもたらされます。

サイズオプションは、**サイズを決めるもの** オプションの値に依存します。

---

## サイズを決めるもの

* **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields. 自動サイズのウィンドウを用いて、オフスクリーンエリア (ウィンドウの矩形境界線の外側のエリア) に配置したアクティブオブジェクトを使用したい場合にこのオプションを選択することができます。 このオプションを選択すると、これらのオブジェクトによりウィンドウサイズが変更されなくなります。

* **サイズを設定**: フォームサイズは [**幅**](#幅) および [**高さ**](#高さ) フィールドに入力された値 (ピクセル単位) により決まります 。

* `\&#060;object name&#062;`: The size of the form will be based on the position of the selected form object. たとえば、表示されるエリアの右下部分に置かれているオブジェクトを選択した場合は、左上端が起点であり、右下端が選択したオブジェクトの右下端となる矩形にマージン値を加算したものがフォームサイズになります。

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](width) fields are available.

#### JSON 文法

| 名称             | データタイプ | とりうる値                        |
| -------------- | ------ | ---------------------------- |
| formSizeAnchor | string | フォームサイズを定義するために使用するオブジェクトの名前 |

---

## 高さ

[フォームサイズ](#サイズを決めるもの) が **サイズを設定** の場合のフォームの高さ (ピクセル単位) です。

#### JSON 文法

| 名称     | データタイプ | とりうる値 |
| ------ | ------ | ----- |
| height | number | 整数値   |

---

## 水平 マージン

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\&#060;object name&#062;`

この値は、ラベルエディターで使用されるフォームの右マージンも決定します。

#### JSON 文法

| 名称          | データタイプ | とりうる値 |
| ----------- | ------ | ----- |
| rightMargin | number | 整数値   |

---

## 垂直 マージン

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\&#060;object name&#062;`.

この値は、ラベルエディターで使用されるフォームの上マージンも決定します。

#### JSON 文法

| 名称           | データタイプ | とりうる値 |
| ------------ | ------ | ----- |
| bottomMargin | number | 整数値   |

---

## 幅

[フォームサイズ](#サイズを決めるもの) が **サイズを設定** の場合のフォームの幅 (ピクセル単位) です。

#### JSON 文法

| 名称    | データタイプ | とりうる値 |
| ----- | ------ | ----- |
| width | number | 整数値   |
