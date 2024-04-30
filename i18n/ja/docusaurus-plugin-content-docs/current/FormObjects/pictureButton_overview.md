---
id: pictureButtonOverview
title: ピクチャーボタン
---

ピクチャーボタンは [標準のボタン](button_overview.md) と似ていますが、 3つの状態 (有効、無効、クリック) を持てる標準ボタンとは異なり、ピクチャーボタンでは、その名前が表わすようにそれぞれの状態を別々のピクチャーにより表わします。

ピクチャーボタンは、次の 2つの方法で使用します:

- フォーム上のコマンドボタンとして。 この場合、ピクチャーボタンには通常 4種類の状態があります (有効、無効、クリック、ロールオーバー)。\
  たとえば、1行 4列からなるサムネールテーブルの場合、各サムネールはデフォルト、クリック、ロールオーバー、無効という状態に対応しています。

  | プロパティ         | JSON 名                 | 値    |
  | ------------- | ---------------------- | ---- |
  | 行             | rowCount               | 1    |
  | 列             | columnCount            | 4    |
  | マウスアップで戻る     | switchBackWhenReleased | true |
  | ロールオーバー効果     | switchWhenRollover     | true |
  | 無効時に最終フレームを使用 | useLastFrameAsDisabled | true |

- 複数の選択項目の中からユーザーに選ばせるためのピクチャーボタンとして。 この場合、ピクチャーボタンをポップアップピクチャーメニューの代わりに使用することができます。 [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) ではすべての選択肢が (ポップアップメニューの項目として) 同時に表示されます。他方ピクチャーボタンは、選択候補を連続的に表示します (ボタンをクリックする度に変わります)。\
  次に示すのは、ピクチャーボタンの例です。 たとえば、カスタムアプリケーションのユーザーに、アプリケーションのインタフェース言語を選ばせたいものとします。 そこで下図のように、選択候補をピクチャーボタンとしてカスタムプロパティダイアログボックスに組み込みます:

![](../assets/en/FormObjects/button_pictureButton.png)

オブジェクトをクリックするとピクチャーが変わります。

## ピクチャーボタンの使用

次の方法でピクチャーボタンを導入します。

1. まず初めに 1つの画像を用意し、一連のピクチャーを横、縦、または縦横の格子状に並べてその中に納めておきます。

   ![](../assets/en/FormObjects/pictureButton_grid.png)

ピクチャーは、縦、横、または縦横格子状に整理することができます (上図を参照)。 ピクチャーを格子状に並べた場合、各ピクチャーには上の行から順に左から右へと、0から始まる番号が振られます。 たとえば、4行と 3列で構成される格子において、2行目の 2番目の画像の番号は 4 になります (上の例では英国旗)。

2. プロジェクトの Resouces フォルダーに画像があるのを確認し、そのファイルパスを [パス名](properties_Picture.md#パス名) プロパティに入力します。

3. 画像の [行と列](properties_Crop.md) プロパティを設定します。

4. 画像の切り替え条件を [アニメーション](properties_Animation.md) テーマのプロパティから選択します。

## アニメーション

ピクチャーボタンは、標準的な配置や見た目の設定以外にも、表示モードと動作モードを指定する専用プロパティを設定することができます。 これらのオプションは組み合わせて使用することができます。

- By default (when no [animation option](properties_Animation.md) is selected), a picture button displays the next picture in the series when the user clicks; it displays the previous picture in the series when the user holds down the **Shift** key and clicks. 系列中の最後のピクチャーに到達すると、もう一度クリックしてもピクチャーは変わりません。 つまりこの設定では、系列中の最初のピクチャーへ一巡して戻ることはありません。

次のモードを選択することができます:

- [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame)
- [Switch back when Released](properties_Animation.md#switch-back-when-released)
- [Switch when Roll Over](properties_Animation.md#switch-when-roll-over)
- [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks)
- [Use Last Frame as Disabled](properties_Animation.md#use-last-frame-as-disabled)
- [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled)

> ピクチャーボタンに [関連付けた変数](properties_Object.md#変数あるいは式) は、ピクチャーのサムネールテーブルで現在表示されているピクチャーのインデックス番号を返します。  このテーブル内のピクチャー番号は 0 から始まります。

## プロパティ一覧

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loopBackToFirstFrame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Switch back when released](properties_Animation.md#switchBackWhenReleased) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switchWhenRollOver) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
