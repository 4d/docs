---
id: WebFormClass
title: WebForm
---

The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>História</summary>

| Release | Mudanças                                                                     |
| ------- | ---------------------------------------------------------------------------- |
| 20 R6   | Added enableState() and disableState() |
| 20 R2   | Adicionado                                                                   |

</details>

### Comandos e funções

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)<br/><!-- INCLUDE #WebFormClass.componentName.Summary -->  |
| [<!-- INCLUDE #WebFormClass.disableState().Syntax -->](#disablestate)<br/><!-- INCLUDE #WebFormClass.disableState().Summary --> |
| [<!-- INCLUDE #WebFormClass.enableState().Syntax -->](#enablestate)<br/><!-- INCLUDE #WebFormClass.enableState().Summary -->    |
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)<br/><!-- INCLUDE #WebFormClass.setError().Summary -->             |
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)<br/><!-- INCLUDE #WebFormClass.setMessage().Summary -->       |
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)<br/><!-- INCLUDE #WebFormClass.setWarning().Summary -->       |
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)<br/><!-- INCLUDE #_command_.Web Form.Summary -->                       |
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)<br/><!-- INCLUDE #_command_.Web Event.Summary -->                    |

### _.componentName_

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Descrição

The components of webforms are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

For more information, please refer to the [`.componentName` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#componentname).

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->

**.disableState**( _state_ : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| Parâmetro | Tipo   |     | Descrição                                  |
| --------- | ------ | :-: | ------------------------------------------ |
| state     | string |  -> | Name of state to disable from the web form |

<!-- END REF -->

#### Descrição

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the _state_ in the current web form<!-- END REF -->.

This function does nothing if:

- the _state_ is currently not enabled in the web form,
- the _state_ does not exist for the web form.

If you [enable](#enablestate) or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/design-webforms/states).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->

**.enableState**( _state_ : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Parâmetro | Tipo   |     | Descrição                               |
| --------- | ------ | :-: | --------------------------------------- |
| state     | string |  -> | Name of state to enable on the web form |

<!-- END REF -->

#### Descrição

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the _state_ in the current web form<!-- END REF -->.

This function does nothing if:

- the _state_ has already been enabled on the web form,
- the _state_ does not exist for the web form.

If you enable or [disable](#disablestate) several states within the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/design-webforms/states).

#### Exemplo

You enable a specific state named "wrongCredentials" in case of error in your login page:

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->

**.setError**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| Parâmetro | Tipo   |     | Descrição                                        |
| --------- | ------ | :-: | ------------------------------------------------ |
| msg       | string |  -> | Mensagem de erro a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends _msg_ as an error message to the web form<!-- END REF -->.

For more information, please refer to the [`.setError()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->

**.setMessage**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Parâmetro | Tipo   |     | Descrição                                            |
| --------- | ------ | :-: | ---------------------------------------------------- |
| msg       | string |  -> | Mensagem informativa a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends _msg_ as an information message to the web form<!-- END REF -->.

For more information, please refer to the [`.setMessage()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setmessage).

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->

**.setWarning**( _msg_ : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Parâmetro | Tipo   |     | Descrição                                         |
| --------- | ------ | :-: | ------------------------------------------------- |
| msg       | string |  -> | Mensagem de aviso a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends _msg_ as a warning message to the web form<!-- END REF -->.

For more information, please refer to the [`.setWarning()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Parâmetro  | Tipo                       |     | Descrição                  |
| ---------- | -------------------------- | :-: | -------------------------- |
| Resultados | 4D.WebForm |  <- | New `WebForm` proxy object |

<!-- END REF -->

#### Descrição

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object that allows you to interact with the web form<!-- END REF -->.

For more information, please refer to the [`webForm` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webform).

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Parâmetro  | Tipo   |     | Descrição |
| ---------- | ------ | :-: | --------- |
| Resultados | object |  <- | object    |

<!-- END REF -->

#### Descrição

The `Web Event` command <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

For more information, please refer to the [`webEvent` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webevent).
