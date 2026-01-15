---
id: WebFormItemClass
title: WebFormItem
---

La clase `4D.WebFormItem` le permite manejar el comportamiento de sus componentes webform Qodly.

Los objetos `4D.WebFormItem` son propiedades del objeto [`4D.WebForm`](WebFormClass.md) devuelto por el comando [`Web Form`](../commands/web-form.md).

When you call the [`Web Form`](../commands/web-form.md) command, the returned `4D.WebForm` proxy object holds as many `4D.WebFormItems` as there are components with [**server-side references**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#server-side) in your webform.

Por ejemplo, `WebFormObject.myImage` hace referencia al componente de imagen con `myImage` como referencia del servidor.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 20 R2       | Añadidos       |

</details>

### Objeto WebFormItem

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addcssclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                               |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removecssclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                               |

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Parámetros | Tipo |     | Descripción                                   |
| ---------- | ---- | :-: | --------------------------------------------- |
| className  | Text |  -> | Nombre de la clase CSS a añadir al componente |

<!-- END REF -->

#### Descripción

La función `.addCSSClass` <!-- REF #WebFormItemClass.addCSSClass().Summary -->añade la clase especificada en *className* al componente<!-- END REF -->.

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

La función `.hide()` <!-- REF #WebFormItemClass.hide().Summary -->oculta el componente<!-- END REF -->.

#### Ejemplo

Para llamar a una función que oculta una imagen cuando el usuario hace clic en un botón:

1. Create an [exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) function inside a shared singleton class named `isHidden` that contains the following code:

```4d

shared singleton Class constructor()
exposed Function isHidden()
	var myComponent : 4D.WebFormItem
	
	myComponent:=Web Form.myImage
	myComponent.hide()  // Hide the component that has "myImage" as server reference 
```

2. In Qodly Studio: Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example "myImage".
3. Seleccione el componente Button y añádale un evento `onclick`.
4. Adjunta la función `isHidden` al evento.

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Parámetros | Tipo |     | Descripción                                      |
| ---------- | ---- | :-: | ------------------------------------------------ |
| className  | Text |  -> | Nombre de la clase CSS a eliminar del componente |

<!-- END REF -->

#### Descripción

La función `.removeCSSClass()` <!-- REF #WebFormItemClass.removeCSSClass().Summary -->elimina la clase especificada en *className* del componente<!-- END REF -->.

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Parámetros | Tipo |     | Descripción                  |
| ---------- | ---- | :-: | ---------------------------- |
|            |      |     | No requiere ningún parámetro |

<!-- END REF -->

#### Descripción

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.If the component was already visible, the function does nothing.

## Ver también

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebForm class](WebFormClass.md)



