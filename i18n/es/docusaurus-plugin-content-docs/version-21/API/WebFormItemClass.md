---
id: WebFormItemClass
title: WebFormItem
---

La clase `4D.WebFormItem` le permite manejar el comportamiento de sus componentes webform Qodly.

Los objetos `4D.WebFormItem` son propiedades del objeto [`4D.WebForm`](WebFormClass.md) devuelto por el comando [`Web Form`](../commands/web-form.md).

Cuando llama al comando [`Web Form`](../commands/web-form.md), el objeto proxy `4D.WebForm` devuelto contiene tantos `4D.WebFormItems` ya que hay componentes con [**referencias servidor**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#server-side) en su formulario.

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

| Parámetros | Tipo   |     | Descripción                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| className  | string |  -> | Nombre de la clase CSS a añadir al componente |

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

1. Crear una función [exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) al interior de una clase singleton compartida llamada `isHidden` que contiene el siguiente código:

```4d

shared singleton Class constructor()
exposed Function isHidden()
	var myComponent : 4D.WebFormItem
	
	myComponent:=Web Form.myImage
	myComponent.hide()  // Oculta el componente que tiene "myImage" como referencia servidor. 
```

2. En Qodly Studio: seleccione el componente imagen en la página e introduzca una referencia del lado del servidor en el panel Propiedades > Server Side, por ejemplo "myImage".
3. Seleccione el componente Button y añádale un evento `onclick`.
4. Adjunta la función `isHidden` al evento.

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Parámetros | Tipo   |     | Descripción                                      |
| ---------- | ------ | :-: | ------------------------------------------------ |
| className  | string |  -> | Nombre de la clase CSS a eliminar del componente |

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

La función `.show()` <!-- REF #WebFormItemClass.show().Summary -->hace visible el componente<!-- END REF -->. Si el componente ya era visible, la función no hace nada.

## Ver también

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebForm class](WebFormClass.md)



