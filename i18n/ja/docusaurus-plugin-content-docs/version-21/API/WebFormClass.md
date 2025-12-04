---
id: WebFormClass
title: WebForm
---

`WebForm` クラスには、Qodly の Web ページコンポーネントを処理するための関数とプロパティが含まれています。 `4D.WebForm` オブジェクトは [`webForm`](../commands/web-form.md) コマンドによってインスタンス化されます。

<details><summary>履歴</summary>

| リリース  | 内容                                                                       |
| ----- | ------------------------------------------------------------------------ |
| 20 R6 | enableState() と disableState() を追加 |
| 20 R2 | 追加                                                                       |

</details>

### コマンドと関数

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE WebFormClass.componentName.Syntax -->](#componentname)<br/><!-- INCLUDE #WebFormClass.componentName.Summary -->   |
| [<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)<br/><!-- INCLUDE #WebFormClass.disableState().Summary --> |
| [<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)<br/><!-- INCLUDE #WebFormClass.enableState().Summary -->    |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)<br/><!-- INCLUDE #WebFormClass.setError().Summary -->             |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)<br/><!-- INCLUDE #WebFormClass.setMessage().Summary -->       |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)<br/><!-- INCLUDE #WebFormClass.setWarning().Summary -->       |

### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### 説明

Web ページのコンポーネント (構成要素) とは、これらの Web ページの<!-- REF #WebFormClass.componentName.Summary -->プロパティとして直接利用可能なオブジェクトです<!-- END REF -->。

返されるオブジェクトは、[`4D.WebFormItem`](WebFormItemClass.md) クラスのものです。 これらのオブジェクトは、コンポーネントを動的に管理するために使用できる関数を持っています。

#### 例題

```4d
shared singleton Class constructor()
	
	var myForm : 4D.WebForm
	var component : 4D.WebFormItem
	
	myForm:=webForm  // Web ページをオブジェクト返し、各プロパティがコンポーネントを表す
	component:=myForm.myImage  // Web ページの myImage コンポーネントを返す

```

:::info

`myForm` はデバッガの中で調べる場合には一般的なオブジェクトのプロパティを表示しないかもしれませんが、実際の`webForm` オブジェクトであるかのように振る舞います。 `myForm` を通して、下地となる`webForm` オブジェクトのプロパティと関数を操作することができます。 例えば、ページのコンテンツを動的に操作したり、あるいは `myForm.setMessage()` のような特殊な関数を使用してWebページにメッセージを送信したりすることができます。

:::

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| 引数    | 型      |     | 説明                      |
| ----- | ------ | :-: | ----------------------- |
| state | string |  -> | Web ページ上で無効化するstate の名前 |

<!-- END REF -->

#### 説明

`.disableState()` 関数は、<!-- REF #WebFormClass.disableState().Summary -->カレントのWeb ページ内の *state* の状態のレンダリングを無効化します<!-- END REF -->。

この関数は、以下の場合には何もしません:

- *state* 引数のステートが現在Web ページ内で有効化されていない
- Web ページに対して *state* 引数のステートが存在しない。

同じユーザー関数内で複数の state を [有効化](#enablestate) または無効化した場合、すべての変更は関数の終了時に一括してクライアントに送信されます。

Web ページのステートについての詳細な情報については、[Qodly ドキュメンテーションのStates の章](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview) を参照してください。

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| 引数    | 型      |     | 説明                       |
| ----- | ------ | :-: | ------------------------ |
| state | string |  -> | Web ページ上で有効化する state の名前 |

<!-- END REF -->

#### 説明

`.enableState()` 関数は、<!-- REF #WebFormClass.enableState().Summary -->カレントのWeb ページ内の *state* の状態のレンダリングを有効化します<!-- END REF -->。

この関数は、以下の場合には何もしません:

- *state* 引数のステートが現在Web ページ内で有効化されている
- Web ページに対して *state* 引数のステートが存在しない。

同じユーザー関数内で複数の state を有効化または [無効化](#disablestate)した場合、すべての変更は関数の終了時に一括してクライアントに送信されます。

Web ページのステートについての詳細な情報については、[Qodly ドキュメンテーションのStates の章](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview) を参照してください。

#### 例題

ログインページでエラーが発生した場合に、"wrongCredentials" という専用の state を有効にします。

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| 引数  | 型      |     | 説明                   |
| --- | ------ | :-: | -------------------- |
| msg | string |  -> | Web ページに表示するエラーメッセージ |

<!-- END REF -->

#### 説明

`.setError()` 関数は、<!-- REF #WebFormClass.setError().Summary -->*msg* 引数のメッセージを、エラーメッセージとしてWeb ページに送信します<!-- END REF -->。

この関数は、`__NOTIFICATION.message` プロパティが *msg* に、そして `__NOTIFICATION.type` が "error" に設定されている `__WEBFORM` オブジェクトと、 `200 OK` ステータスが本文に含まれているレスポンスを返します。

#### 例題

```4d
shared singleton Class constructor()
exposed function myError()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setError("My error message")

```

イベントに対して [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) 機能が有効化されていた場合、 *message* 引数のメッセージは自動的に赤い *toast* としてページ下部に表示され、5秒後に自動的に消滅します:

![](../assets/en/API/webformClass-pic1.png)

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| 引数  | 型      |     | 説明                  |
| --- | ------ | :-: | ------------------- |
| msg | string |  -> | Web ページに表示する情報メッセージ |

<!-- END REF -->

#### 説明

`.setMessage()` 関数は、<!-- REF #WebFormClass.setMessage().Summary -->*msg* を情報メッセージとしてWeb ページに送信します<!-- END REF -->。

この関数は、`__NOTIFICATION.message` プロパティが *msg* に、そして `__NOTIFICATION.type` が "message" に設定されている `__WEBFORM` オブジェクトと、 `200 OK` ステータスが本文に含まれているレスポンスを返します。

#### 例題

```4d
shared singleton Class constructor()
exposed function myMessage()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setMessage("My information message")

```

イベントに対して [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) 機能が有効化されていた場合、 *message* 引数のメッセージは自動的に緑の *toast* としてページ下部に表示され、5秒後に自動的に消滅します:

![](../assets/en/API/webformClass-pic2.png)

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| 引数  | 型      |     | 説明                  |
| --- | ------ | :-: | ------------------- |
| msg | string |  -> | Web ページに表示する警告メッセージ |

<!-- END REF -->

#### 説明

`.setWarning()` 関数は、<!-- REF #WebFormClass.setWarning().Summary -->*msg* 引数のメッセージを警告メッセージとしてWeb ページに送信します<!-- END REF -->。

この関数は、`__NOTIFICATION.message` プロパティが *msg* に、そして `__NOTIFICATION.type` が "warning" に設定されている `__WEBFORM` オブジェクトと、 `200 OK` ステータスが本文に含まれているレスポンスを返します。

#### 例題

```4d
shared singleton Class constructor()
exposed function myWarning()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setWarning("My warning message")

```

イベントに対して [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) 機能が有効化されていた場合、 *message* 引数のメッセージは自動的に黄色の *toast* としてページ下部に表示され、5秒後に自動的に消滅します:

![](../assets/en/API/webformClass-pic3.png)

## 参照

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)