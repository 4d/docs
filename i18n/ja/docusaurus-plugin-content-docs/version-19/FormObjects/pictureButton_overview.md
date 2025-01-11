---
id: pictureButtonOverview
title: ピクチャーボタン
---

ピクチャーボタンは [標準のボタン](button_overview.md) と似ていますが、 3つの状態 (有効、無効、クリック) を持てる標準ボタンとは異なり、ピクチャーボタンでは、その名前が表わすようにそれぞれの状態を別々のピクチャーにより表わします。

ピクチャーボタンは、次の 2つの方法で使用します:

* フォーム上のコマンドボタンとして。 この場合、ピクチャーボタンには通常 4種類の状態があります (有効、無効、クリック、ロールオーバー)。      
  たとえば、1行 4列からなるサムネールテーブルの場合、各サムネールはデフォルト、クリック、ロールオーバー、無効という状態に対応しています。

  | プロパティ         | JSON 名                 | 値    |
  | ------------- | ---------------------- | ---- |
  | 行             | rowCount               | 1    |
  | 列             | columnCount            | 4    |
  | マウスアップで戻る     | switchBackWhenReleased | true |
  | ロールオーバー効果     | switchWhenRollover     | true |
  | 無効時に最終フレームを使用 | useLastFrameAsDisabled | true |

* 複数の選択項目の中からユーザーに選ばせるためのピクチャーボタンとして。 この場合、ピクチャーボタンをポップアップピクチャーメニューの代わりに使用することができます。 [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) ではすべての選択肢が (ポップアップメニューの項目として) 同時に表示されます。他方ピクチャーボタンは、選択候補を連続的に表示します (ボタンをクリックする度に変わります)。   
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

- デフォルト ([アニメーションオプション](properties_Animation.md) 未選択) の場合、ユーザーがクリックすると、系列中の次のピクチャーを表示します。**Shift** キーを押しながらクリックすると、系列中の前のピクチャーを表示します。 系列中の最後のピクチャーに到達すると、もう一度クリックしてもピクチャーは変わりません。 つまりこの設定では、系列中の最初のピクチャーへ一巡して戻ることはありません。

次のモードを選択することができます:
- [先頭フレームに戻る](properties_Animation.md#先頭フレームに戻る)
- [マウスアップで戻る](properties_Animation.md#マウスアップで戻る)
- [ロールオーバー効果](properties_Animation.md#ロールオーバー効果)
- [マウス押下中は自動更新](properties_Animation.md#マウス押下中は自動更新)
- [無効時に最終フレームを使用](properties_Animation.md#無効時に最終フレームを使用)
- [アニメーション間隔 (tick)](./properties_Animation.md#switch-every-x-ticks)
> ピクチャーボタンに [関連付けた変数](properties_Object.md#変数あるいは式) は、ピクチャーのサムネールテーブルで現在表示されているピクチャーのインデックス番号を返します。  このテーブル内のピクチャー番号は 0 から始まります。

## プロパティ一覧

[Type](properties_Object.md#type) - [Object Name](properties_Object.md#object-name) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Title](properties_Object.md#title) - [Class](properties_Object.md#css-class) - [Pathname](properties_Picture.md#pathname) - [Rows](properties_Crop.md#rows) - [Columns](properties_Crop.md#columns) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Loop back to first frame](properties_Animation.md#loop-back-to-first-frame) - [Switch when roll over](properties_Animation.md#switch-when-roll-over) - [Switch back when released](properties_Animation.md#switch-back-when-released) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Button Style](properties_TextAndPicture.md#button-style) - [Left](properties_CoordinatesAndSizing.md#left) - [Top](properties_CoordinatesAndSizing.md#top) - [Right](properties_CoordinatesAndSizing.md#right) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Width](properties_CoordinatesAndSizing.md#width) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Focusable](properties_Entry.md#focusable) - [Shortcut](properties_Entry.md#shortcut) - [Visibility](properties_Display.md#visibility) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Font](properties_Text.md#font) - [Bold](properties_Text.md#bold) - [Italic](properties_Text.md#italic) - [Font Color](properties_Text.md#font-color) - [Help Tip](properties_Help.md#help-tip) - [Standard action](properties_Action.md#standard-action) 
