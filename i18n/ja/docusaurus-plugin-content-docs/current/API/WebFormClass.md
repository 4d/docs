---
id: WebFormClass
title: WebForm
---

The `WebForm` class contains functions and properties allowing to handle your Qodly web page components. `4D.WebForm` objects are instantiated with the [`webForm`](../commands/web-form.md) command.

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

The components of web pages are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these web pages.

The returned objects are of the [`4D.WebFormItem`](WebFormItemClass.md) class. These objects have functions that you can use to manage your components dynamically.

#### 例題

```4d
shared singleton Class constructor()
	
	var myForm : 4D.WebForm
	var component : 4D.WebFormItem
	
	myForm:=webForm  //returns the web page as an object, each property is a component
	component:=myForm.myImage  //returns the myImage component of the web page

```

:::info

While `myForm` may not display typical object properties when examined in the debugger, it behaves as if it were the actual `webForm` object. You can interact with the underlying `webForm` object's properties and functions through `myForm`. For example, you can dynamically manipulate page components or transmit messages to web pages using specialized functions like `myForm.setMessage()`.

:::

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| 引数    | 型      |     | 説明                                         |
| ----- | ------ | :-: | ------------------------------------------ |
| state | string |  -> | Name of state to disable from the web page |

<!-- END REF -->

#### 説明

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the *state* in the current web page<!-- END REF -->.

この関数は、以下の場合には何もしません:

- the *state* is currently not enabled in the web page,
- the *state* does not exist for the web page.

同じユーザー関数内で複数の state を [有効化](#enablestate) または無効化した場合、すべての変更は関数の終了時に一括してクライアントに送信されます。

For more information on web pages states, please refer to the [States section in the Qodly documentation](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| 引数    | 型      |     | 説明                                       |
| ----- | ------ | :-: | ---------------------------------------- |
| state | string |  -> | Name of state to enable on the web pages |

<!-- END REF -->

#### 説明

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the *state* in the current web page<!-- END REF -->.

この関数は、以下の場合には何もしません:

- the *state* has already been enabled on the web page,
- the *state* does not exist for the web page.

同じユーザー関数内で複数の state を有効化または [無効化](#disablestate)した場合、すべての変更は関数の終了時に一括してクライアントに送信されます。

For more information on web page states, please refer to the [States section in the Qodly documentation](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview).

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

| 引数  | 型      |     | 説明                                       |
| --- | ------ | :-: | ---------------------------------------- |
| msg | string |  -> | Error message to display in the web page |

<!-- END REF -->

#### 説明

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the web page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "error".

#### 例題

```4d
shared singleton Class constructor()
exposed function myError()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setError("My error message")

```

If the [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a red *toast* at the bottom of the Page and disappears automatically after 5 seconds:

![](../assets/en/API/webformClass-pic1.png)

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| 引数  | 型      |     | 説明                                             |
| --- | ------ | :-: | ---------------------------------------------- |
| msg | string |  -> | Information message to display in the web page |

<!-- END REF -->

#### 説明

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "message".

#### 例題

```4d
shared singleton Class constructor()
exposed function myMessage()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setMessage("My information message")

```

If the [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a green *toast* at the bottom of the Page and disappears automatically after 5 seconds:

![](../assets/en/API/webformClass-pic2.png)

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| 引数  | 型      |     | 説明                                         |
| --- | ------ | :-: | ------------------------------------------ |
| msg | string |  -> | Warning message to display in the web page |

<!-- END REF -->

#### 説明

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the web page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "warning".

#### 例題

```4d
shared singleton Class constructor()
exposed function myWarning()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setWarning("My warning message")

```

If the [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a yellow *toast* at the bottom of the web page and disappears automatically after 5 seconds:

![](../assets/en/API/webformClass-pic3.png)

## 参照

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)