---
id: WebFormItemClass
title: WebFormItem
---

Los objetos `4D.WebFormItem` son propiedades del objeto [`4D.WebForm`](WebFormItemClass.md) devuelto por el comando [`Web Form`](WebFormClass.md#web-form).

La clase `WebFormItem` se detalla en la [documentación Qodly](https://developer.qodly.com/docs/language/WebFormItemClass).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R2       | Añadidos       |

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

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.hide()` <!-- REF #WebFormItemClass.hide().Summary -->oculta el componente<!-- END REF -->.

Para más información, consulte la [descripción de `.hide()` en la documentación Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#hide).

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.show()` <!-- REF #WebFormItemClass.show().Summary -->hace visible el componente<!-- END REF -->.

Para más información, consulte la [descripción de `.show()` en la documentación Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#show).

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Parámetros | Tipo   |     | Descripción                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| className  | string |  -> | Nombre de la clase CSS a añadir al componente |

<!-- END REF -->

#### Descripción

La función `.addCSSClass` <!-- REF #WebFormItemClass.addCSSClass().Summary -->añade la clase especificada en *className* al componente<!-- END REF -->.

Para más información, consulte la [descripción de `.addCSSClass` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass).

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Parámetros | Tipo   |     | Descripción                                      |
| ---------- | ------ | :-: | ------------------------------------------------ |
| className  | string |  -> | Nombre de la clase CSS a eliminar del componente |

<!-- END REF -->

#### Descripción

La función `.removeCSSClass()` <!-- REF #WebFormItemClass.removeCSSClass().Summary -->elimina la clase especificada en *className* del componente<!-- END REF -->.

Para más información, consulte la [descripción de `.removeCSSClass()` en la documentación de Qodly](https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass).
