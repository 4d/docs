---
id: WebFormItemClass
title: WebFormItem
---

`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormItemClass.md) object returned by the [`Web Form`](WebFormClass.md#web-form) command.

A classe `WebFormItem` é detalhada na [documentação Qodly](https://developer.qodly.com/docs/language/WebFormItemClass).

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R2   | Adicionado |

</details>

### Objeto WebFormItem

|                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                            |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                            |

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.hide()` function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

For more information, please refer to the [`.hide()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#hide).

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.

For more information, please refer to the [`.show()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#show).

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Parâmetro | Tipo   |     | Descrição                                         |
| --------- | ------ | :-: | ------------------------------------------------- |
| className | string |  -> | Nome da classe CSS a ser adicionada ao componente |

<!-- END REF -->

#### Descrição

The `.addCSSClass` function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->.

For more information, please refer to the [`.addCSSClass` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass).

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Parâmetro | Tipo   |     | Descrição                                       |
| --------- | ------ | :-: | ----------------------------------------------- |
| className | string |  -> | Nome da classe CSS a ser removida do componente |

<!-- END REF -->

#### Descrição

The `.removeCSSClass()` function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in *className* from the component<!-- END REF -->.

For more information, please refer to the [`.removeCSSClass()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass).
