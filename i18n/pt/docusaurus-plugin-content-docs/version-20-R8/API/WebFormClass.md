---
id: WebFormClass
title: WebForm
---

The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass).

<details><summary>História</summary>

| Release | Mudanças                                                                       |
| ------- | ------------------------------------------------------------------------------ |
| 20 R6   | Adição de enableState() e disableState() |
| 20 R2   | Adicionado                                                                     |

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

### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemClass.md)<!-- END REF -->

#### Descrição

The components of webforms are <!-- REF #WebFormClass.componentName.Summary -->objects that are available directly as properties<!-- END REF --> of these webforms.

For more information, please refer to the [`.componentName` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#componentname).

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| Parâmetro | Tipo   |     | Descrição                                         |
| --------- | ------ | :-: | ------------------------------------------------- |
| state     | string |  -> | Nome do estado a ser desativado no formulário Web |

<!-- END REF -->

#### Descrição

The `.disableState()` function <!-- REF #WebFormClass.disableState().Summary -->disables the rendering of the *state* in the current web form<!-- END REF -->.

Essa função não faz nada se:

- the *state* is currently not enabled in the web form,
- o *estado* não existe para o formulário Web.

If you [enable](#enablestate) or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Parâmetro | Tipo   |     | Descrição                                      |
| --------- | ------ | :-: | ---------------------------------------------- |
| state     | string |  -> | Nome do estado a ser ativado no formulário Web |

<!-- END REF -->

#### Descrição

The `.enableState()` function <!-- REF #WebFormClass.enableState().Summary -->enables the rendering of the *state* in the current web form<!-- END REF -->.

Essa função não faz nada se:

- the *state* has already been enabled on the web form,
- o *estado* não existe para o formulário Web.

If you enable or [disable](#disablestate) several states within the same user function, all modifications are sent at the same time to the client once the function ends.

For more information on web form states, please refer to [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

#### Exemplo

You enable a specific state named "wrongCredentials" in case of error in your login page:

```4d
Function authenticationError()
	If (Session.info.type#"remote")
		Web Form.enableState("wrongCredentials")
	End if
```

### .setError()

<!-- REF #WebFormClass.setError().Syntax -->**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->

| Parâmetro | Tipo   |     | Descrição                                        |
| --------- | ------ | :-: | ------------------------------------------------ |
| msg       | string |  -> | Mensagem de erro a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

The `.setError()` function <!-- REF #WebFormClass.setError().Summary -->sends *msg* as an error message to the web form<!-- END REF -->.

For more information, please refer to the [`.setError()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Parâmetro | Tipo   |     | Descrição                                            |
| --------- | ------ | :-: | ---------------------------------------------------- |
| msg       | string |  -> | Mensagem informativa a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

The `.setMessage()` function <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web form<!-- END REF -->.

For more information, please refer to the [`.setMessage()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setmessage).

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Parâmetro | Tipo   |     | Descrição                                         |
| --------- | ------ | :-: | ------------------------------------------------- |
| msg       | string |  -> | Mensagem de aviso a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

The `.setWarning()` function  <!-- REF #WebFormClass.setWarning().Summary -->sends *msg* as a warning message to the web form<!-- END REF -->.

For more information, please refer to the [`.setWarning()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Parâmetro  | Tipo                       |                             | Descrição                   |
| ---------- | -------------------------- | :-------------------------: | --------------------------- |
| Resultados | 4D.WebForm | <- | Novo objeto proxy `WebForm` |

<!-- END REF -->

#### Descrição

The `Web Form` command <!-- REF #_command_.Web Form.Summary --> returns a `4D.WebForm` proxy object that allows you to interact with the web form<!-- END REF -->.

For more information, please refer to the [`webForm` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webform).

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : Object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Parâmetro  | Tipo   |                             | Descrição |
| ---------- | ------ | :-------------------------: | --------- |
| Resultados | object | <- | object    |

<!-- END REF -->

#### Descrição

The `Web Event` command <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

For more information, please refer to the [`webEvent` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webevent).
