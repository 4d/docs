---
id: splitters
title: スプリッター
---

スプリッターはフォームを2つのエリアに分割します。ユーザーはいずれかの方向へスプリッターを移動してエリアを拡げたり縮めたりすることができます。 水平方向または垂直方向のスプリッターを作成できます。 スプリッターでは各オブジェクトのサイズ調整プロパティが考慮されます。つまり作成するアプリケーションのインタフェースをすべてカスタマイズすることができます。 また、スプリッターは “プッシャー” (押し込みタイプ) にすることも可能です。

たとえば、スプリッターは列のサイズを変更できるよう、リストフォームで使用されます:

![](../assets/en/FormObjects/split1.png)

スプリッターの一般的な特徴をいくつか次に説明します:

- あらゆるタイプのフォーム上にスプリッターを必要なだけ設置可能であり、一つのフォーム上で水平と垂直のスプリッターを一緒に使用することができます。
- スプリッターはオブジェクトを横切ることができます (オーバーラップ)。 スプリッターを動かすと、このオブジェクトのサイズが変更されます。
- フォーム上で移動されたオブジェクトが完全に表示されたままになるように、また別のスプリッターを超えないように、スプリッターの停止位置が計算されます。 [以降のオブジェクトを移動する](properties_ResizingOptions.md#以降のオブジェクトを移動する) (プッシャー) プロパティをスプリッターに割り当てると、スプリッターを右方向または下方向へ動かしても停止することはありません。
- スプリッターを使用するフォームのサイズを変更すると、フォームが表示されている間だけ、フォームの新しいサイズが保存されます。 フォームを閉じると、最初の大きさに戻ります。

スプリッターは挿入されると線として表示されます。 You can modify its [border style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) to obtain a thinner line or [change its color](properties_BackgroundAndBorder.md#line-color).

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

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## 隣接するオブジェクトのプロパティとの相互作用

フォーム上では、スプリッター周辺にある各オブジェクトのリサイズオプションに基づいて、スプリッターとこれらのオブジェクトとが作用しあいます:

| オブジェクトのリサイズオプション | 水平スプリッターの上、または垂直スプリッターの左にあるオブジェクト(1) | 水平スプリッターの下、または垂直スプリッターの右にあるオブジェクト (非 "プッシャー" の場合)                                  | 水平スプリッターの下、または垂直スプリッターの右にあるオブジェクト ("プッシャー" の場合)                             |
| ---------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| なし               | そのまま変わらない                                               | 次に停止するまでスプリッターとともに移動 (スプリッターとの相対的な位置は変更されない)。 下または右への移動時の停止位置はウインドウの境界または別のスプリッター。 | 無制限にスプリッターとともに移動 (スプリッターとの相対的な位置は変更されない)。 停止しない (次節を参照)。 |
| 拡大               | 元の位置のままだが、スプリッターの新しい位置に基づいてサイズが調整される                    |                                                                                                       |                                                                                                |
| 移動               | スプリッターとともに移動する                                          |                                                                                                       |                                                                                                |

_(1) この位置にあるオブジェクトを超えて、右側 (水平)、または下側 (垂直) へスプリッターをドラッグすることはできません。_

> スプリッターが定義される矩形内にすべて納まるオブジェクトは、スプリッターと一緒に移動します。

## プログラムによるスプリッターの管理

オブジェクトメソッドをスプリッターに指定することができます。スプリッターを移動する間 `On Clicked` イベントでこのメソッドが呼び出されます。

各スプリッターには _倍長整数_ 型の [変数](properties_Object.md#変数あるいは式) が割り当てられます。 この変数はオブジェクトメソッドやフォームメソッドで使用することができます。 この変数の値により、スプリッターの最初の位置に対する現在位置がピクセル単位で示されます。

- この値が負数の場合: スプリッターは上または左方向へ移動されました。
- この値が正数の場合: スプリッターは下または右方向へ移動されました。
- この値が 0 の場合: スプリッターは元の位置に移動されました。

プログラムによってスプリッターを移動させることも可能です。これをおこなうには、関連付けた変数の値を設定します。 たとえば、垂直スプリッターに `split1` という名前の変数が関連付けられている場合、`split1:=-10` という命令を実行すると、ユーザーが手動で動かす場合と同じように、スプリッターは 10ピクセル左方向へ移動します。 移動が実際におこなわれるのは、この命令文が記述されているフォームメソッドまたはオブジェクトメソッドを実行しおわったときです。
