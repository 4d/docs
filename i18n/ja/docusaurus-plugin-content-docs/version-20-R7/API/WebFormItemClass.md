---
id: WebFormItemClass
title: WebFormItem
---

`4D.WebFormItem` オブジェクトは、[`Web Form`](WebFormClass.md#web-form) コマンドによって返される [`4D.WebForm`](WebFormItemClass.md) オブジェクトのプロパティです。

`WebFormItem` クラスについては、[Qodly ドキュメンテーション](https://developer.qodly.com/docs/language/WebFormItemClass) (英語) で詳しく説明しています。

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### WebFormItem オブジェクト

|                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                            |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                            |

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.hide()` 関数は、<!-- REF #WebFormItemClass.hide().Summary -->コンポーネントを非表示にします<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.hide()` の説明](https://developer.qodly.com/docs/language/WebFormItemClass#hide) を参照ください。

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.show()` 関数は、<!-- REF #WebFormItemClass.show().Summary -->コンポーネントを表示状態にします<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.show()` の説明](https://developer.qodly.com/docs/language/WebFormItemClass#show) を参照ください。

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| 引数        | 型      |     | 説明                      |
| --------- | ------ | :-: | ----------------------- |
| className | string |  -> | コンポーネントに追加する CSSクラスの名前。 |

<!-- END REF -->

#### 説明

`.addCSSClass` 関数は、<!-- REF #WebFormItemClass.addCSSClass().Summary -->*className* で指定されたクラスをコンポーネントに追加します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.addCSSClass()` の説明](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass) を参照ください。

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| 引数        | 型      |     | 説明                       |
| --------- | ------ | :-: | ------------------------ |
| className | string |  -> | コンポーネントから削除する CSSクラスの名前。 |

<!-- END REF -->

#### 説明

`.removeCSSClass()` 関数は、<!-- REF #WebFormItemClass.removeCSSClass().Summary -->*className* で指定されたクラスをコンポーネントから削除します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.removeCSSClass()` の説明](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass) を参照ください。
