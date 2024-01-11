---
id: WebFormItemClass
title: WebFormItem
---

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v20 R2 | Adicionado |

</details>


`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormItemClass.md) object returned by the [`Web Form`](WebFormClass.md#web-form) command.

The `WebFormItem` class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass).


### Objeto WebFormItem

|                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->|
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.hide().Summary -->|
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary -->|
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #WebFormItemClass.show().Summary -->|


### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->
**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->
| Parâmetro | Tipo |  | Descrição                  |
| --------- | ---- |::| -------------------------- |
|           |      |  | Não exige nenhum parâmetro |
<!-- END REF -->


#### Descrição

A função `.hide()` <!-- REF #WebFormItemClass.hide().Summary -->oculta o componente<!-- END REF -->.


For more information, please refer to the [`.hide()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#hide).


### .show()

<!-- REF #WebFormItemClass.show().Syntax -->
**.show**()<!-- END REF -->


<!-- REF #WebFormItemClass.show().Params -->
| Parâmetro | Tipo |  | Descrição                  |
| --------- | ---- |::| -------------------------- |
|           |      |  | Não exige nenhum parâmetro |
<!-- END REF -->


#### Descrição

A função `.show()` <!-- REF #WebFormItemClass.show().Summary -->torna o componente visível<!-- END REF -->.

For more information, please refer to the [`.show()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#show).


### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->
**.addCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->
| Parâmetro | Tipo   |    | Descrição                                         |
| --------- | ------ |:--:| ------------------------------------------------- |
| className | string | -> | Nome da classe CSS a ser adicionada ao componente |
<!-- END REF -->

#### Descrição

A função `.addCSSClass` <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->.

For more information, please refer to the [`.addCSSClass` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass).


### .removeCSSClass()


<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->
**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->
| Parâmetro | Tipo   |    | Descrição                                       |
| --------- | ------ |:--:| ----------------------------------------------- |
| className | string | -> | Nome da classe CSS a ser removida do componente |
<!-- END REF -->

#### Descrição

A função `.removeCSSClass()` <!-- REF #WebFormItemClass.removeCSSClass().Summary -->remove a classe especificada em *className* do componente<!-- END REF -->.

For more information, please refer to the [`.removeCSSClass()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass). 



