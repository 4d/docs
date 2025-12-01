---
id: WebFormItemClass
title: WebFormItem
---

The `4D.WebFormItem` class allows you to handle the behavior of your Qodly webform components.

Les objets `4D.WebFormItem` sont des propriétés de l'objet [`4D.WebForm`](WebFormClass.md) renvoyé par la commande [`Web Form`](../commands/web-form.md).

When you call the [`Web Form`](../commands/web-form.md) command, the returned `4D.WebForm` proxy object holds as many `4D.WebFormItems` as there are components with [**server-side references**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#server-side) in your webform.

For example, `WebFormObject.myImage` refers to the image component with `myImage` as server reference.

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R2   | Ajout         |

</details>

### Objet WebFormItem

|                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addcssclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->          |
| [<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->                               |
| [<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removecssclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary --> |
| [<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->                               |

### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->

| Paramètres | Type   |     | Description                                 |
| ---------- | ------ | :-: | ------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à ajouter au composant |

<!-- END REF -->

#### Description

La fonction `.addCSSClass` <!-- REF #WebFormItemClass.addCSSClass().Summary -->ajoute la classe *className* au composant<!-- END REF -->.

### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `.hide()` <!-- REF #WebFormItemClass.hide().Summary -->masque le composant<!-- END REF -->.

#### Exemple

To call a function that hides an image when the user clicks a button:

1. Create an [exposed](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions) function inside a shared singleton class named `isHidden` that contains the following code:

```4d

shared singleton Class constructor()
exposed Function isHidden()
	var myComponent : 4D.WebFormItem
	
	myComponent:=Web Form.myImage
	myComponent.hide()  // Hide the component that has "myImage" as server reference 
```

2. In Qodly Studio: Select the image component on the canvas, and enter a server-side reference in the Properties Panel > Server Side, for example "myImage".
3. Select the Button component and add an `onclick` event to it.
4. Attach the `isHidden` function to the event.

### .removeCSSClass()

<!-- REF #WebFormItemClass.removeCSSClass().Syntax -->**.removeCSSClass**(*className*: string)<!-- END REF -->

<!-- REF #WebFormItemClass.removeCSSClass().Params -->

| Paramètres | Type   |     | Description                                   |
| ---------- | ------ | :-: | --------------------------------------------- |
| className  | string |  -> | Nom de la classe CSS à supprimer du composant |

<!-- END REF -->

#### Description

La fonction `.removeCSSClass()` <!-- REF #WebFormItemClass.removeCSSClass().Summary -->supprime la classe *className* du composant<!-- END REF -->.

### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->

<!-- REF #WebFormItemClass.show().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.If the component was already visible, the function does nothing.

## Voir également

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebForm class](WebFormClass.md)



