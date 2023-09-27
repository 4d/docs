---
id: WebFormItemClass
title: WebFormItem
---

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v20 R2 | 追加 |

</details>


`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormItemClass.md) object returned by the [`Web Form`](WebFormItemClass.md#web-form) command.

The `WebFormItem` class is detailed in the [Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass.md).


### WebFormItem object

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
| 引数 | タイプ |  | 説明                              |
| -- | --- |::| ------------------------------- |
|    |     |  | Does not require any parameters |
<!-- END REF -->


#### 説明

The `.hide()` function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->。


For more information, please refer to the [`.hide()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass.md#hide).


### .show()

<!-- REF #WebFormItemClass.show().Syntax -->
**.show**()<!-- END REF -->


<!-- REF #WebFormItemClass.show().Params -->
| 引数 | タイプ |  | 説明                              |
| -- | --- |::| ------------------------------- |
|    |     |  | Does not require any parameters |
<!-- END REF -->


#### 説明

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->。

For more information, please refer to the [`.show()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass.md#show).


### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->
**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->
| 引数        | タイプ    |    | 説明                                            |
| --------- | ------ |:--:| --------------------------------------------- |
| className | string | -> | Name of the CSS class to add to the component |
<!-- END REF -->

#### 説明

The `.addCSSClass` function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->。

For more information, please refer to the [`.addCSSClass` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass.md#addcssclass).


### .removeCSSClass()


<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->
**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->
| 引数        | タイプ    |    | 説明                                                 |
| --------- | ------ |:--:| -------------------------------------------------- |
| className | string | -> | Name of the CSS class to remove from the component |
<!-- END REF -->

#### 説明

The `.removeCSSClass()` function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in *className* from the component<!-- END REF -->。

For more information, please refer to the [`.removeCSSClass()` description in the Qodly documentation](https://developer.qodly.com/docs/language/WebFormItemClass.md#removecssclass). 



