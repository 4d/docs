---
id: WebFormClass
title: WebForm
---

The `WebForm` class contains functions and properties allowing to handle your Qodly web page components. `4D.WebForm` objects are instantiated with the [`webForm`](../commands/web-form.md) command.

<details><summary>História</summary>

| Release | Mudanças                                                                       |
| ------- | ------------------------------------------------------------------------------ |
| 20 R6   | Adição de enableState() e disableState() |
| 20 R2   | Adicionado                                                                     |

</details>

### Comandos e funções

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

#### Descrição

The components of web pages are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these web pages.

The returned objects are of the [`4D.WebFormItem`](WebFormItemClass.md) class. These objects have functions that you can use to manage your components dynamically.

#### Exemplo

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

| Parâmetro | Tipo   |     | Descrição                                  |
| --------- | ------ | :-: | ------------------------------------------ |
| state     | string |  -> | Name of state to disable from the web page |

<!-- END REF -->

#### Descrição

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the *state* in the current web page<!-- END REF -->.

Essa função não faz nada se:

- the *state* is currently not enabled in the web page,
- the *state* does not exist for the web page.

Se você [enable](#enablestate) ou desativar vários estados na mesma função de usuário, todas as modificações são enviadas em simultâneo, para o cliente quando a função termina.

For more information on web pages states, please refer to the [States section in the Qodly documentation](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Parâmetro | Tipo   |     | Descrição                                |
| --------- | ------ | :-: | ---------------------------------------- |
| state     | string |  -> | Name of state to enable on the web pages |

<!-- END REF -->

#### Descrição

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the *state* in the current web page<!-- END REF -->.

Essa função não faz nada se:

- the *state* has already been enabled on the web page,
- the *state* does not exist for the web page.

Se você ativar ou [desativar](#disablestate) vários estados dentro da mesma função de usuário, todas as modificações serão enviadas ao mesmo tempo, para o cliente quando a função terminar.

For more information on web page states, please refer to the [States section in the Qodly documentation](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/states/stateOverview).

#### Exemplo

Você ativa um estado específico chamado "wrongCredentials" em caso de erro em sua página de conexão:

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| Parâmetro | Tipo   |     | Descrição                                |
| --------- | ------ | :-: | ---------------------------------------- |
| msg       | string |  -> | Error message to display in the web page |

<!-- END REF -->

#### Descrição

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the web page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "error".

#### Exemplo

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

| Parâmetro | Tipo   |     | Descrição                                      |
| --------- | ------ | :-: | ---------------------------------------------- |
| msg       | string |  -> | Information message to display in the web page |

<!-- END REF -->

#### Descrição

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "message".

#### Exemplo

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

| Parâmetro | Tipo   |     | Descrição                                  |
| --------- | ------ | :-: | ------------------------------------------ |
| msg       | string |  -> | Warning message to display in the web page |

<!-- END REF -->

#### Descrição

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the web page<!-- END REF -->.

The function returns a response with a `200 OK` status and a `__WEBFORM` object in the body with a `__NOTIFICATION.message` property set to *msg* and a `__NOTIFICATION.type` set to "warning".

#### Exemplo

```4d
shared singleton Class constructor()
exposed function myWarning()

var myForm : 4D.WebForm
myForm:=web Form

myForm.setWarning("My warning message")

```

If the [**Provide feedback**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#providing-feedback) feature is enabled for the event, the *message* is automatically displayed as a yellow *toast* at the bottom of the web page and disappears automatically after 5 seconds:

![](../assets/en/API/webformClass-pic3.png)

## Veja também

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebFormItem class](../API/WebFormItemClass.md)