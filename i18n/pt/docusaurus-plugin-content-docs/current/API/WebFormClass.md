---
id: WebFormClass
title: WebForm
---

A classe `WebForm` contém funções e propriedades que permitem manipular seus componentes de webforms Qodly. Essa classe está detalhada na [documentação de Qodly](https://developer.qodly.com/docs/language/WebFormClass).

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

Os componentes dos webforms são objetos <!-- REF #WebFormClass.componentName.Summary -->que estão disponíveis diretamente como propriedades<!-- END REF --> desses webforms.

Para mais informações, consulte a descrição [`.componentName` na documentação de Qodly](https://developer.qodly.com/docs/language/WebFormClass#componentname).

### .disableState()

<!-- REF #WebFormClass.disableState().Syntax -->**.disableState**( *state* : string)<!-- END REF -->

<!-- REF #WebFormClass.disableState().Params -->

| Parâmetro | Tipo   |     | Descrição                                         |
| --------- | ------ | :-: | ------------------------------------------------- |
| state     | string |  -> | Nome do estado a ser desativado no formulário Web |

<!-- END REF -->

#### Descrição

A função `.disableState()` <!-- REF #WebFormClass.disableState().Summary -->desabilita a renderização da *state* na forma atual da web<!-- END REF -->.

Essa função não faz nada se:

 - o *estado* não está habilitado no momento no formulário Web,
 - o *estado* não existe para o formulário Web.

Se você [enable](#enablestate) ou desativar vários estados na mesma função de usuário, todas as modificações são enviadas em simultâneo, para o cliente quando a função termina.

Para obter mais informações sobre estados de formulários da Web, consulte [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

### .enableState()

<!-- REF #WebFormClass.enableState().Syntax -->**.enableState**( *state* : string )<!-- END REF -->

<!-- REF #WebFormClass.enableState().Params -->

| Parâmetro | Tipo   |     | Descrição                                      |
| --------- | ------ | :-: | ---------------------------------------------- |
| state     | string |  -> | Nome do estado a ser ativado no formulário Web |

<!-- END REF -->

#### Descrição

A função `.enableState()` <!-- REF #WebFormClass.enableState().Summary -->ativa a renderização do *state* no formulário da Web atual<!-- END REF -->.

Essa função não faz nada se:

 - o *estado* já foi ativado no formulário Web,
 - o *estado* não existe para o formulário Web.

Se você ativar ou [desativar](#disablestate) vários estados dentro da mesma função de usuário, todas as modificações serão enviadas ao mesmo tempo, para o cliente quando a função terminar.

Para obter mais informações sobre estados de formulários da Web, consulte [developer.qodly.com](https://developer.qodly.com/docs/studio/pageLoaders/states).

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

| Parâmetro | Tipo   |     | Descrição                                        |
| --------- | ------ | :-: | ------------------------------------------------ |
| msg       | string |  -> | Mensagem de erro a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

A função `.setError()` <!-- REF #WebFormClass.setError().Summary -->envia *msg* como uma mensagem de erro para o formulário web<!-- END REF -->.

Para mais informações, consulte a descrição [`.setError()` na documentação Qodly](https://developer.qodly.com/docs/language/WebFormClass#seterror).

### .setMessage()

<!-- REF #WebFormClass.setMessage().Syntax -->**.setMessage**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setMessage().Params -->

| Parâmetro | Tipo   |     | Descrição                                            |
| --------- | ------ | :-: | ---------------------------------------------------- |
| msg       | string |  -> | Mensagem informativa a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

A função `.setMessage()` <!-- REF #WebFormClass.setMessage().Summary -->envia *msg* como uma mensagem de informação para o formulário da Web<!-- END REF -->.

Para mais informações, consulte a descrição [`.setMessage()` na documentação Qodly](https://developer.qodly.com/docs/language/WebFormClass#setmessage).

### .setWarning()

<!-- REF #WebFormClass.setWarning().Syntax -->**.setWarning**( *msg* : string)<!-- END REF -->

<!-- REF #WebFormClass.setWarning().Params -->

| Parâmetro | Tipo   |     | Descrição                                         |
| --------- | ------ | :-: | ------------------------------------------------- |
| msg       | string |  -> | Mensagem de aviso a ser exibida no formulário Web |

<!-- END REF -->

#### Descrição

A função `.setWarning()` <!-- REF #WebFormClass.setWarning().Summary -->envia *msg* como uma mensagem de aviso para o formulário web<!-- END REF -->.

Para mais informações, consulte a descrição [`.setWarning()` na documentação Qodly](https://developer.qodly.com/docs/language/WebFormClass#setwarning).

## Web Form

<!-- REF #_command_.Web Form.Syntax -->**Web Form** : 4D.WebForm<!-- END REF -->

<!-- REF #_command_.Web Form.Params -->

| Parâmetro  | Tipo                       |                             | Descrição                   |
| ---------- | -------------------------- | :-------------------------: | --------------------------- |
| Resultados | 4D.WebForm | <- | Novo objeto proxy `WebForm` |

<!-- END REF -->

#### Descrição

O comando `Web Form` <!-- REF #_command_.Web Form.Summary --> retorna um `4D. Objeto proxy ebForm` que permite a você interagir com o formulário web <!-- END REF -->.

Para obter mais informações, consulte a [descrição do comando `webForm` na documentação de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webform).

## Web Event

<!-- REF #_command_.Web Event.Syntax -->**Web Event** : Object<!-- END REF -->

<!-- REF #_command_.Web Event.Params -->

| Parâmetro  | Tipo   |                             | Descrição |
| ---------- | ------ | :-------------------------: | --------- |
| Resultados | object | <- | object    |

<!-- END REF -->

#### Descrição

O comando `Web Event` <!-- REF #_command_.Web Event.Summary -->retorna um objeto com informações sobre um evento acionado vinculado a um componente de formulário da Web<!-- END REF -->.

Para obter mais informações, consulte a [descrição do comando `webEvent` na documentação de Qodly](https://developer.qodly.com/docs/language/WebFormClass#webevent).
