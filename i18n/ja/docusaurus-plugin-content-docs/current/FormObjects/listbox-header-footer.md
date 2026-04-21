---
id: listbox-header-footer
title: リストボックスのヘッダーとフッター
---

:::note

- リストボックスのヘッダープロパティにアクセスするためには、リストボックスのプロパティリストで [ヘッダーを表示](properties_Headers.md#ヘッダーを表示) オプションが選択されていなければなりません。
- リストボックスのフッタープロパティにアクセスするためには、リストボックスのプロパティリストで [フッターを表示](properties_Footers.md#フッターを表示) オプションが選択されていなければなりません。

:::

## ヘッダー

ヘッダーが表示されていれば、フォームエディターでリストボックスオブジェクトが選択されているときに、リストボックスヘッダーをクリックするとヘッダーを選択できます:

![](../assets/en/FormObjects/listbox_header.png)

リストボックスの各列ヘッダー毎に標準のテキストプロパティを設定できます。 設定すると、これらのプロパティの方がリストボックスや列に対する設定よりも優先されます。

さらに、ヘッダー特有のプロパティを設定することができます。 さらに、ヘッダー特有のプロパティを設定することができます。 [カスタマイズされた並び替え](./listbox_overview.md#ソートの管理) などの用途に、ヘッダーの列タイトルの隣、あるいはタイトルの代わりにアイコンを表示することができます。

![](../assets/en/FormObjects/lbHeaderIcon.png)

ランタイムにおいてヘッダーで発生したイベントは、その列のオブジェクトメソッド が受け取ります。

ヘッダーに [`OBJECT SET VISIBLE`](../commands/object-set-visible) コマンドを使用すると、このコマンドに渡した引数に関わらず、そのリストボックスのすべてのヘッダーが対象になります。 ヘッダーに [`OBJECT SET VISIBLE`](../commands/object-set-visible) コマンドを使用すると、このコマンドに渡した引数に関わらず、そのリストボックスのすべてのヘッダーが対象になります。 たとえば、`OBJECT SET VISIBLE(*;"header3";False)` という命令の場合、指定したヘッダーだけではなく、*header3* が属するリストボックスの全ヘッダーを非表示にします。

### ヘッダー特有のプロパティ

[オブジェクト名](properties_Object.md#オブジェクト名) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[タイトル](properties_Object.md#タイトル) -
[CSSクラス](properties_Object.md#cssクラス) -
[パス名](properties_TextAndPicture.md#ピクチャーパス名) -
[アイコンの場所](properties_TextAndPicture.md#アイコンの場所) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[横方向パディング](properties_CoordinatesAndSizing.md#横方向パディング) -
[縦方向パディング](properties_CoordinatesAndSizing.md#縦方向パディング) -
[フォント](properties_Text.md#フォント) -
[太字](properties_Text.md#太字) -
[イタリック](properties_Text.md#イタリック) -
[下線](properties_Text.md#下線) -
[フォントカラー](properties_Text.md#フォントカラー) -
[横揃え](properties_Text.md#横揃え) -
[縦揃え](properties_Text.md#縦揃え) -
[ヘルプTips](properties_Help.md#ヘルプtips)

## フッター

リストボックスは、追加の情報を表示するための入力を受け付けない "フッター" を持つことができます。 表形式で表示されるデータについて、合計や平均などの計算値を表示するためにフッターは通常使用されます。

フッターが表示されていれば、フォームエディターでリストボックスオブジェクトが選択されているときにフッターをクリックすることで選択できます:

![](../assets/en/FormObjects/listbox_footers.png)

リストボックスの各列フッター毎に標準のテキストプロパティを設定できます。設定すると、こちらのプロパティの方がリストボックスや列に対する設定よりも優先されます。 さらに、フッター特有のプロパティを設定することができます。 [カスタムまたは自動計算](properties_Object.md#変数の計算) をフッターに挿入することができます。

ランタイムにおいてフッターで発生したイベントは、その列のオブジェクトメソッド が受け取ります。

フッターに [`OBJECT SET VISIBLE`](../commands/object-set-visible) コマンドを使用すると、このコマンドに渡した引数に関わらず、そのリストボックスのすべてのフッターが対象になります。 フッターに [`OBJECT SET VISIBLE`](../commands/object-set-visible) コマンドを使用すると、このコマンドに渡した引数に関わらず、そのリストボックスのすべてのフッターが対象になります。 たとえば、`OBJECT SET VISIBLE(*;"footer3";False)` という命令の場合、指定したフッターだけではなく、*footer3* が属するリストボックスの全フッターを非表示にします。

### フッター特有のプロパティ

[オブジェクト名](properties_Object.md#オブジェクト名) -
[変数あるいは式](properties_Object.md#変数あるいは式) -
[式の型](properties_Object.md#式の型式タイプ) -
[変数の計算](properties_Object.md#変数の計算) -
[CSSクラス](properties_Object.md#cssクラス) -
[幅](properties_CoordinatesAndSizing.md#幅) -
[横方向パディング](properties_CoordinatesAndSizing.md#横方向パディング) -
[縦方向パディング](properties_CoordinatesAndSizing.md#縦方向パディング) -
[文字フォーマット](properties_Display.md#文字フォーマット) -
[数値フォーマット](properties_Display.md#数値フォーマット) -
[日付フォーマット](properties_Display.md#日付フォーマット) -
[時間フォーマット](properties_Display.md#時間フォーマット) -
[ピクチャーフォーマット](properties_Display.md#ピクチャーフォーマット) -
[ワードラップ](properties_Display.md#ワードラップ) -
[エリプシスを使用して省略](properties_Display.md#エリプシスを使用して省略) -
[背景色](properties_BackgroundAndBorder.md#背景色塗りカラー) -
[フォント](properties_Text.md#フォント) -
[太字](properties_Text.md#太字) -
[イタリック](properties_Text.md#イタリック) -
[下線](properties_Text.md#下線) -
[フォントカラー](properties_Text.md#フォントカラー) -
[横揃え](properties_Text.md#横揃え) -
[縦揃え](properties_Text.md#縦揃え) -
[ヘルプTips](properties_Help.md#ヘルプtips)



