---
id: WebFormClass
title: WebForm
---

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20 R2 | Adicionado |

</details>


The `WebForm` class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass).




### Comandos e funções

|                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormClass.componentName.Syntax -->](#componentname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.componentName.Summary -->|
| [<!-- INCLUDE #WebFormClass.setError().Syntax -->](#seterror)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setError().Summary -->|
| [<!-- INCLUDE #WebFormClass.setMessage().Syntax -->](#setmessage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setMessage().Summary -->|
| [<!-- INCLUDE #WebFormClass.setWarning().Syntax -->](#setwarning)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormClass.setWarning().Summary -->|
| [<!-- INCLUDE #_command_.Web Form.Syntax -->](#web-form)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Form.Summary -->|
| [<!-- INCLUDE #_command_.Web Event.Syntax -->](#web-event)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #_command_.Web Event.Summary -->|



### *.componentName*

<!-- REF #WebFormClass.componentName.Syntax -->***.componentName*** : [4D.WebFormItem](WebFormItemclass.md)<!-- END REF -->

#### Descrição

Os componentes dos webforms são <!-- REF #WebFormClass.componentName.Summary -->objetos que estão disponíveis diretamente como propriedades<!-- END REF --> desses webforms.

For more information, please refer to the [`.componentName` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#componentname).



### .setError()

<!-- REF #WebFormClass.setError().Syntax -->
**.setError**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setError().Params -->
| Parâmetro | Tipo   |    | Descrição                                        |
| --------- | ------ |:--:| ------------------------------------------------ |
| msg       | string | -> | Mensagem de erro a ser exibida no formulário Web |
<!-- END REF -->

#### Descrição

A função `.setError()` <!-- REF #WebFormClass.setError().Summary -->envia *msg* como uma mensagem de erro para o webform<!-- END REF -->.

For more information, please refer to the [`.setError()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#seterror).



### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->
**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->
| Parâmetro | Tipo   |    | Descrição                                            |
| --------- | ------ |:--:| ---------------------------------------------------- |
| msg       | string | -> | Mensagem informativa a ser exibida no formulário Web |
<!-- END REF -->

#### Descrição

A função `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->sends *msg* as an information message to the web form<!-- END REF -->.

For more information, please refer to the [`.setMessage()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setmessage).


### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->
**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->
| Parâmetro | Tipo   |    | Descrição                                         |
| --------- | ------ |:--:| ------------------------------------------------- |
| msg       | string | -> | Mensagem de aviso a ser exibida no formulário Web |
<!-- END REF -->

#### Descrição

A função `.setWarning()`  <!-- REF #WebFormClass.setWarning().Summary -->envia *msg* como uma mensagem de aviso para o webform<!-- END REF -->.

For more information, please refer to the [`.setWarning()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#setwarning).


## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form**: 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->
| Parâmetro  | Tipo       |    | Descrição                   |
| ---------- | ---------- |:--:| --------------------------- |
| Resultados | 4D.WebForm | <- | Novo objeto proxy `WebForm` |
<!-- END REF -->

#### Descrição

O comando `Web Form` <!-- REF #_command_.webForm.Summary --> returns a `4D.WebForm` proxy object that allows you to interact with the web form<!-- END REF -->.

For more information, please refer to the [`webForm` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webform).


## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event**: object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->
| Parâmetro  | Tipo   |    | Descrição |
| ---------- | ------ |:--:| --------- |
| Resultados | object | <- | object    |
<!-- END REF -->

#### Descrição

O comando `Web Event` <!-- REF #_command_.Web Event.Summary -->returns an object with information on a triggered event linked to a webform component<!-- END REF -->.

For more information, please refer to the [`webEvent` command description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormClass#webevent). 