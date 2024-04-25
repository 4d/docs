---
id: WebFormItemClass
title: WebFormItem
---

`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormItemClass.md) object returned by the [`Web Form`](WebFormClass.md#web-form) command.

The `WebFormItem` class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass).

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>

### Objet WebFormItem

|                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.hide().Summary -->                            |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removeclass)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #WebFormItemClass.show().Summary -->                            |

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->

**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.hide()` function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

For more information, please refer to the [`.hide()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#hide).

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->

**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.

For more information, please refer to the [`.show()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#show).

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->

**.addCSSClass**(_className_ : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Paramètres | Type   |     | Description                                 |
| ---------- | ------ | :-: | ------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à ajouter au composant |

<!-- END REF -->

#### Description

The `.addCSSClass` function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in _className_ to the component<!-- END REF -->.

For more information, please refer to the [`.addCSSClass` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass).

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->

**.removeCSSClass**(_className_: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Paramètres | Type   |     | Description                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à supprimer du composant |

<!-- END REF -->

#### Description

The `.removeCSSClass()` function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in _className_ from the component<!-- END REF -->.

For more information, please refer to the [`.removeCSSClass()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass).
