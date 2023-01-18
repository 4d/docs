---
id: radiobuttonOverview
title: ラジオボタン
---

ラジオボタンは、ボタングループの中から1つを選択することができるオブジェクトです。

ラジオボタンは通常、小さな目玉状の円とテキストを表示します。 しかし、ラジオボタンに [それ以外の外観](#ボタンスタイル) を設定することもできます。

![](../assets/en/FormObjects/radio1.png)

ラジオボタンを選択するには二つの方法があります:
- ラジオボタンをクリックする
- ラジオボタンにフォーカスがあるときに **スペース** キーを押す



## ラジオボタンの設定

ラジオボタンは組織的な集合の中で使用されます。その集合のなかから一度にひとつのボタンしか選択できません。 一連のラジオボタンが連携した状態で動作するためには、それらには同じ [ラジオグループ](properties_Object.md#ラジオグループ) プロパティが設定されていなくてはなりません。

ラジオボタンの結果はメソッドを用いて管理します。 あらゆるボタンと同様に、フォームが初めて開かれる時ラジオボタンは 0 に初期化されています。 ラジオボタンが選択されると、ラジオボタンに割り当てられたメソッドが実行されます。 次の例では、ビデオ収集データベースでラジオボタンを使用し、レコーディングの速さ (SP、LP、EP) を入力します:

![](../assets/en/FormObjects/radio2.png)

グループのなかから 1つのラジオボタンを選択すると、そのボタンには 1 が代入され、グループ内の他のすべてのボタンには 0 が代入されます。 一度に1つのラジオボタンしか選択できません。
> ラジオボタンには [ブール型の式](properties_Object.md#変数あるいは式) を設定することができます。 この場合、グループ内で選択されたラジオボタンの変数には true が代入され、残りのラジオボタンの変数には false が代入されます。

ラジオボタンオブジェクトに格納された値は (ブールフィールドの場合を除き) 自動保存されません。変数に格納されたラジオボタンの値はメソッドで管理しなければなりません。




## ボタンスタイル

ラジオ [ボタンスタイル](properties_TextAndPicture.md#ボタンスタイル)は、ラジオボタンの外観を制御すると同時に、提供されるプロパティをも決定します。 ラジオボタンには、あらかじめ定義されたスタイルを割り当てることができます。 しかし、ラジオボタンが適切に動作するには、同じグループに所属するラジオボタンはすべて同じボタンスタイルに設定されている必要があります。

次の既定スタイルが提供されています:


### 通常

通常スタイルのラジオボタンは、標準的なシステムボタンで (小さな目玉状の円とテキストを表示したもの)、ユーザークリックに応じてコードを実行します。

![](../assets/en/FormObjects/radio_regular.png)

通常スタイルのラジオボタンにマウスオーバーすると、"目玉" の色が変化します。


### フラット

フラットスタイルのラジオボタンは、標準的なシステムボタンで (小さな目玉状の円とテキストを表示したもの)、ユーザークリックに応じてコードを実行します。

![](../assets/en/FormObjects/radio_flat.png)

フラットスタイルでは、装飾が最小限に抑えられています。 フラットボタンのグラフィック的な装飾は最小限であるため、印刷されるフォームでの使用に適しています。


### ツールバー

ツールバースタイルのラジオボタンは、主としてツールバーで使用するためのものです。

ツールバーボタンは、透明の背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - ボタンがハイライト表示されます。

![](../assets/en/FormObjects/radio_toolbar.png)

 - *macOS* - ボタンはハイライト表示されません。



### ベベル

ベベルスタイルは [ツールバー](#ツールバー) スタイルと似た動作をしますが、薄いグレーの背景にグレーの枠が描画されます。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - ボタンがハイライト表示されます。

  ![](../assets/en/FormObjects/radio_bevel.png)

 - *macOS* - ボタンはハイライト表示されません。


### 角の丸いベベル

角の丸いベベルスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては角が丸く表示されます。

 - Windows 上では、このスタイルは [ベベル](#ベベル) スタイルと同じです。

 - *macOS* - 角が丸くなっています。 ![](../assets/en/FormObjects/roundedBevel.png)


### OS Xグラデーション

OS Xグラデーションスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては異なる点があります。

 - Windows 上では、このスタイルは [ベベル](#ベベル) スタイルと同じです。

 - *macOS* - 2トーンのシステムボタンです。



### OS Xテクスチャー

OS Xテクスチャースタイルは [ツールバー](#ツールバー) スタイルとほぼ同一ですが、OSによってはマウスオーバー時の変化がないほか、外観の異なる点があります。

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

 - *Windows* - ツールバースタイルのようなボタンに中央配置のラベルが付き、背景は常に表示されます。

 - *macOS* - 灰色のグラデーションを表示する標準のシステムボタンです。 高さは定義済みで、変更できません。

  ![](../assets/en/FormObjects/OSXTextured.png)



### Office XP

Office XPスタイルは通常ボタン (標準のシステムボタン) ような外観に、[ツールバーボタン](#ツールバーボタン) スタイルの動作を組み合わせたものです。

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - マウスオーバー時にのみ背景が表示されます。

  ![](../assets/en/FormObjects/radio_xp.png)

 - *macOS* - 背景は常に表示されます。



### 折りたたみ/展開

このスタイルは標準の折りたたみ/展開アイコンを表示するのに使用します。 これらは階層リストで使用されます。 Windows では [+] または [-] のように表示されます。macOS では、右や下を指す三角として表示されます。

![](../assets/en/FormObjects/checkbox_collapse.png)



### 開示ボタン

開示ボタンスタイルが適用されると、詳細情報の表示/非表示にするのに使われる標準的な開示ボタンとして描画されます。 値が 0 のときにはボタンの矢印が下向き、値が 1 のときは上向きになります。

![](../assets/en/FormObjects/checkbox_disclosure.png)


### カスタム

カスタムスタイルのラジオボタンは、背景ピクチャーを使用できるほか、さまざまな追加パラメーターを管理することができます ([アイコンオフセット](properties_TextAndPicture.md#アイコンオフセット) や [マージン](properties_TextAndPicture.md#横方向マージン))。


## プロパティ一覧

すべてのラジオボタンは次の基本プロパティを共有します:

[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [式の型](properties_Object.md#式の型) - [タイトル](properties_Object.md#タイトル) - [ラジオグループ](properties_Object.md#ラジオグループ) - [値を記憶](properties_Object.md#値を記憶) - [CSSクラス](properties_Object.md#cssクラス) - [ボタンスタイル](properties_TextAndPicture.md#ボタンスタイル) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [フォーカス可](properties_Entry.md#フォーカス可) - [ショートカット](properties_Entry.md#ショートカット) - [表示状態](properties_Display.md#表示状態) - [フォント](properties_Text.md#フォント) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [ヘルプTips](properties_Help.md#ヘルプtips) - [メソッド](properties_Action.md#メソッド)

[ボタンスタイル](#ボタンスタイル) に応じて、次の追加プロパティが使用できます:

- [背景パス名](properties_TextAndPicture.md#背景パス名) - [アイコンオフセット](properties_TextAndPicture.md#アイコンオフセット) - [横方向マージン](properties_TextAndPicture.md#横方向マージン) - [縦方向マージン](properties_TextAndPicture.md#縦方向マージン) (カスタムスタイル)
- [ピクチャーパス名](properties_TextAndPicture.md#ピクチャーパス名) - [状態の数](properties_TextAndPicture.md#状態の数) - [タイトル/ピクチャー位置](properties_TextAndPicture.md#タイトル/ピクチャー位置) (ツールバーボタン、ベベル、角の丸いベベル、OS X グラデーション、OS X テクスチャー、Office XP、カスタム)