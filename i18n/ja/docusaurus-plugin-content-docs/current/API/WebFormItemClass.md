---
id: WebFormItemClass
title: WebFormItem
---

`4D.WebFormItem` クラスを使用すると、Qodly webform コンポーネントの振る舞いを管理できるようになります。

`4D.WebFormItem` オブジェクトは、[`Web Form`](../commands/web-form.md) コマンドによって返される [`4D.WebForm`](WebFormClass.md) オブジェクトのプロパティです。

[`Web Form`](../commands/web-form.md) コマンドを呼び出すと、返された`4D.WebForm` プロキシオブジェクトには[**サーバー側参照**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#server-side) を持った、Webフォーム内のコンポーネントと同数の `4D.WebFormItems` が格納されます。

例えば、 `WebFormObject.myImage` は `myImage` をサーバー側参照として持っている画像コンポーネントを参照します。

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### WebFormItem オブジェクト

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addcssclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                               |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removecssclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                               |

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| 引数        | 型    |     | 説明                      |
| --------- | ---- | :-: | ----------------------- |
| className | Text |  -> | コンポーネントに追加する CSSクラスの名前。 |

<!-- END REF -->

#### 説明

`.addCSSClass` 関数は、<!-- REF #WebFormItemClass.addCSSClass().Summary -->*className* で指定されたクラスをコンポーネントに追加します<!-- END REF -->。

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.hide()` 関数は、<!-- REF #WebFormItemClass.hide().Summary -->コンポーネントを非表示にします<!-- END REF -->。

#### 例題

ユーザーがボタンをクリックした時に画像を非表示にする関数を呼び出すには以下のようにします:

1. `isHidden` という名前の共有シングルトンクラス内に、以下のコードをもった、[exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) 関数を作成します:

```4d

shared singleton Class constructor()
exposed Function isHidden()
	var myComponent : 4D.WebFormItem
	
	myComponent:=Web Form.myImage
	myComponent.hide()  // "myImage" をサーバー側参照として持つコンポーネントを非表示にします
```

2. Qodly Studioにて: キャンバス上で画像コンポーネントを選択し、プロパティパネル > Server Side 内に、例えば "myImage" というサーバー側参照を入力します。
3. ボタンコンポーネントを選択し、そこに `onclick` イベントを追加します。
4. そのイベントに `isHidden` 関数を追加します。

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| 引数        | 型    |     | 説明                       |
| --------- | ---- | :-: | ------------------------ |
| className | Text |  -> | コンポーネントから削除する CSSクラスの名前。 |

<!-- END REF -->

#### 説明

`.removeCSSClass()` 関数は、<!-- REF #WebFormItemClass.removeCSSClass().Summary -->*className* で指定されたクラスをコンポーネントから削除します<!-- END REF -->。

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.show()` 関数は、<!-- REF #WebFormItemClass.show().Summary -->コンポーネントを表示状態にします<!-- END REF -->。コンポーネントがすでに表示状態だった場合、この関数は何もしません。

## 参照

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebForm class](WebFormClass.md)



