---
id: splitters
title: スプリッター
---

## 概要

スプリッターはフォームを2つのエリアに分割します。ユーザーはいずれかの方向へスプリッターを移動してエリアを拡げたり縮めたりすることができます。 水平方向または垂直方向のスプリッターを作成できます。 スプリッターでは各オブジェクトのサイズ調整プロパティが考慮されます。つまり作成するデータベースのインタフェースをすべてカスタマイズすることができます。 また、スプリッターは “プッシャー” (押し込みタイプ) にすることも可能です。

たとえば、スプリッターは列のサイズを変更できるよう、リストフォームで使用されます:

![](assets/en/FormObjects/split1.png)

スプリッターの一般的な特徴をいくつか次に説明します:

* あらゆるタイプのフォーム上にスプリッターを必要なだけ設置可能であり、一つのフォーム上で水平と垂直のスプリッターを一緒に使用することができます。
* スプリッターはオブジェクトを横切ることができます (オーバーラップ)。 スプリッターを動かすと、このオブジェクトのサイズが変更されます。
* フォーム上で移動されたオブジェクトが完全に表示されたままになるように、また別のスプリッターを超えないように、スプリッターの停止位置が計算されます。 [以降のオブジェクトを移動する](properties_ResizingOptions.md#以降のオブジェクトを移動する) (プッシャー) プロパティをスプリッターに割り当てると、スプリッターを右方向または下方向へ動かしても停止することはありません。
* スプリッターを使用するフォームのサイズを変更すると、フォームが表示されている間だけ、フォームの新しいサイズが保存されます。 フォームを閉じると、最初の大きさに戻ります。

スプリッターは挿入されると線として表示されます。 その [線のスタイル](properties_BackgroundAndBorder.md#境界線スタイル) を変更してさらに細い線に設定したり、線の種類によっては [線の色](properties_BackgroundAndBorder.md#線カラー) を設定したりすることができます。

#### JSON 例:

```4d
"mySplitter": {
    "type": "splitter",
    "left": 60,  
    "top": 160,   
    "width": 100,  
    "height": 20,  
    "splitterMode": "move"  // プッシャー
    }
```

### プロパティ一覧

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [CSSクラス](properties_Object.md#CSSクラス) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [以降のオブジェクトを移動する](properties_ResizingOptions.md#以降のオブジェクトを移動する) - [表示状態](properties_Display.md#表示状態) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [線カラー](properties_BackgroundAndBorder.md#線カラー) - [ヘルプTips](properties_Help.md#ヘルプTips)

## 隣接するオブジェクトのプロパティとの相互作用

フォーム上では、スプリッター周辺にある各オブジェクトのリサイズオプションに基づいて、スプリッターとこれらのオブジェクトとが作用しあいます:

| オブジェクトのリサイズオプション | 水平スプリッターの上、または垂直スプリッターの左にあるオブジェクト(1)                                                | Object(s) below an horizontal *non-Pusher* splitter or to the right of a vertical *non-Pusher* splitter                                                                                              | Object(s) below an horizontal *Pusher* splitter or to the right of a vertical *Pusher* splitter                                           |
| ---------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| None             | Remain as is                                                                        | Are moved with the splitter (position relative to the splitter is not modified) until the next stop. The stop when moving to the bottom or right is either the window’s border, or another splitter. | Are moved with the splitter (position relative to the splitter is not modified) indefinitely. No stop is applied (see the next paragraph) |
| サイズ変更            | Keep original position(s), but are resized according to the splitter’s new position |                                                                                                                                                                                                      |                                                                                                                                           |
| Move             | Are moved with the splitter                                                         |                                                                                                                                                                                                      |                                                                                                                                           |


*(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position.*

> An object completely contained in the rectangle that defines the splitter is moved at the same time as the splitter.

## Managing splitters programmatically

You can associate an object method with a splitter and it will be called with the `On Clicked` event throughout the entire movement.

A [variable](properties_Object.md#variable-or-expression) of the *Longint* type is associated with each splitter. This variable can be used in your object and/or form methods. Its value indicates the splitter’s current position, in pixels, in relation to its initial position.

* If the value is negative: the splitter was moved toward the top or toward the left,
* If the value is positive: the splitter was moved toward the bottom or toward the right,
* If the value is 0: the splitter was moved to its original position. 

You can also move the splitter programmatically: you just have to set the value of the associated variable. For example, if a vertical splitter is associated with a variable named `split1`, and if you execute the following statement: `split1:=-10`, the splitter will be moved 10 pixels to the left — as if the user did it manually. The move is actually performed at the end of the execution of the form or object method containing the statement.