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

- デフォルト ([アニメーションオプション](properties_Animation.md) 未選択) の場合、ユーザーがクリックすると、系列中の次のピクチャーを表示します。**Shift** キーを押しながらクリックすると、系列中の前のピクチャーを表示します。 系列中の最後のピクチャーに到達すると、もう一度クリックしてもピクチャーは変わりません。 つまりこの設定では、系列中の最初のピクチャーへ一巡して戻ることはありません。

次のモードを選択することができます:

- [先頭フレームに戻る](properties_Animation.md#先頭フレームに戻る)
- [マウスアップで戻る](properties_Animation.md#マウスアップで戻る)
- [ロールオーバー効果](properties_Animation.md#ロールオーバー効果)
- [マウス押下中は自動更新](properties_Animation.md#マウス押下中は自動更新)
- [無効時に最終フレームを使用](properties_Animation.md#無効時に最終フレームを使用)
- [無効時に最終フレームを使用](properties_Animation.md#無効時に最終フレームを使用)

> ピクチャーボタンに [関連付けた変数](properties_Object.md#変数あるいは式) は、ピクチャーのサムネールテーブルで現在表示されているピクチャーのインデックス番号を返します。  このテーブル内のピクチャー番号は 0 から始まります。

## プロパティ一覧

[タイプ](properties_Object.md#タイプ) -
[オブジェクト名](properties_Object.md#オブジェクト名) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[タイトル](properties_Object.md#タイトル) -
[CSSクラス](properties_Object.md#cssクラス) -
[パス名](properties_Picture.md#パス名) -
[行](properties_Crop.md#行) -
[列](properties_Crop.md#列) -
[マウス押下中は自動更新](properties_Animation.md#マウス押下中は自動更新) -
[先頭フレームに戻る](properties_Animation.md#先頭フレームに戻る) -
[ロールオーバー効果](properties_Animation.md#ロールオーバー効果) -
[マウスアップで戻る](properties_Animation.md#マウスアップで戻る) -
[無効時に最終フレームを使用](properties_Animation.md#無効時に最終フレームを使用) -
[アニメーション間隔 (tick)](properties_Animation.md#アニメーション間隔-tick) -
[ボタンスタイル](properties_TextAndPicture.md#ボタンスタイル) -
[左](properties_CoordinatesAndSizing.md#左) -
[上](properties_CoordinatesAndSizing.md#上) -
[右](properties_CoordinatesAndSizing.md#右) -
[下](properties_CoordinatesAndSizing.md#下) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[高さ](properties_CoordinatesAndSizing.md#高さ) -
[横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) -
[縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) -
[フォーカス可](properties_Entry.md#フォーカス可) -
[ショートカット](properties_Entry.md#ショートカット) -
[表示状態](properties_Display.md#表示状態) -
[境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) -
[フォント](properties_Text.md#フォント) -
[太字](properties_Text.md#太字) -
[イタリック](properties_Text.md#イタリック) -
[フォントカラー](properties_Text.md#フォントカラー) -
[ヘルプTips](properties_Help.md#ヘルプtips) -
[標準アクション](properties_Action.md#標準アクション)
