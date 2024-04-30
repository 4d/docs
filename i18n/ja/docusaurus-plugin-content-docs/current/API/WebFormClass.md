---
id: WebFormClass
title: WebForm
---

`WebForm` クラスには、Qodly の Webフォームコンポーネント (Webフォームの構成要素) を処理するための関数とプロパティが含まれています。 このクラスについては、[Qodly ドキュメンテーション](https://developer.qodly.com/docs/language/WebFormClass) (英語) で詳しく説明されています。

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R2 | 追加 |

</details>

### コマンドと関数

|                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary --> |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->            |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->      |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->      |
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->                      |
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->                   |

### _.componentName_

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### 説明

Webフォームのコンポーネント (構成要素) とは、これらの Webフォームの<!-- REF #WebFormClass.componentName.Summary -->プロパティとして直接利用可能なオブジェクトです<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.componentName` の説明](https://developer.qodly.com/docs/language/WebFormClass#componentname) を参照ください。

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->

**.setError**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| 引数  | タイプ    |     | 説明                   |
| --- | ------ | :-: | -------------------- |
| msg | string |  -> | Webフォームに表示するエラーメッセージ |

<!-- END REF -->

#### 説明

`.setError()` 関数は、<!-- REF #WebFormClass.setError().Summary -->_msg_ をエラーメッセージとして Webフォームに送信します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.setError()` の説明](https://developer.qodly.com/docs/language/WebFormClass#seterror) を参照ください。

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->

**.setMessage**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| 引数  | タイプ    |     | 説明                  |
| --- | ------ | :-: | ------------------- |
| msg | string |  -> | Webフォームに表示する情報メッセージ |

<!-- END REF -->

#### 説明

`.setMessage()` 関数は、<!-- REF #WebFormClass.setMessage().Summary -->_msg_ を情報メッセージとして Webフォームに送信します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.setMessage()` の説明](https://developer.qodly.com/docs/language/WebFormClass#setmessage) を参照ください。

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->

**.setWarning**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| 引数  | タイプ    |     | 説明                  |
| --- | ------ | :-: | ------------------- |
| msg | string |  -> | Webフォームに表示する警告メッセージ |

<!-- END REF -->

#### 説明

`.setWarning()` 関数は、<!-- REF #WebFormClass.setWarning().Summary -->_msg_ を警告メッセージとして Webフォームに送信します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `.setWarning()` の説明](https://developer.qodly.com/docs/language/WebFormClass#setwarning) を参照ください。

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| 引数  | タイプ                        |     | 説明                       |
| --- | -------------------------- | :-: | ------------------------ |
| 戻り値 | 4D.WebForm |  <- | 新しい `WebForm` プロキシオブジェクト |

<!-- END REF -->

#### 説明

`Web Form` コマンドは、<!-- REF #_command_.Web Form.Summary -->Webフォームとの対話を可能にする `4D.WebForm` プロキシオブジェクトを返します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `webForm` コマンドの説明](https://developer.qodly.com/docs/language/WebFormClass#webform) を参照ください。

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| 引数  | タイプ    |     | 説明     |
| --- | ------ | :-: | ------ |
| 戻り値 | object |  <- | object |

<!-- END REF -->

#### 説明

`Web Event` コマンドは、<!-- REF #_command_.Web Event.Summary -->Webフォームコンポーネントにリンクして発生したイベントの情報を持つオブジェクトを返します<!-- END REF -->。

詳細については、[Qodly ドキュメンテーションの `webEvent` コマンドの説明](https://developer.qodly.com/docs/language/WebFormClass#webevent) を参照ください。
