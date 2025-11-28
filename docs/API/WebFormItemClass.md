---
id: WebFormItemClass
title: WebFormItem
---


The `4D.WebFormItem` class allows you to handle the behavior of your Qodly webform components. 

`4D.WebFormItem` objects are properties of the [`4D.WebForm`](WebFormClass.md) object returned by the [`Web Form`](../commands/web-form.md) command. 

When you call the [`Web Form`](../commands/web-form.md) command, the returned `4D.WebForm` proxy object holds as many `4D.WebFormItems` as there are components with [**server-side references**](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview#server-side) in your webform.

For example, `WebFormObject.myImage` refers to the image component with `myImage` as server reference.
 
<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R2|Added|

</details>


### WebFormItem object

||
|---|
|[<!-- INCLUDE #WebFormItemClass.addCSSClass().Syntax -->](#addcssclass)<br/><!-- INCLUDE #WebFormItemClass.addCSSClass().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.hide().Syntax -->](#hide)<br/><!-- INCLUDE #WebFormItemClass.hide().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.removeCSSClass().Syntax -->](#removecssclass)<br/><!-- INCLUDE #WebFormItemClass.removeCSSClass().Summary -->|
|[<!-- INCLUDE #WebFormItemClass.show().Syntax -->](#show)<br/><!-- INCLUDE #WebFormItemClass.show().Summary -->|



### .addCSSClass()

<!-- REF #WebFormItemClass.addCSSClass().Syntax -->**.addCSSClass**(*className* : string)<!-- END REF -->

<!-- REF #WebFormItemClass.addCSSClass().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|string|->|Name of the CSS class to add to the component|
<!-- END REF -->

#### Description

The `.addCSSClass` function <!-- REF #WebFormItemClass.addCSSClass().Summary -->adds the class specified in *className* to the component<!-- END REF -->.



### .hide()

<!-- REF #WebFormItemClass.hide().Syntax -->**.hide**()<!-- END REF -->

<!-- REF #WebFormItemClass.hide().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.hide()` function <!-- REF #WebFormItemClass.hide().Summary -->hides the component<!-- END REF -->.

#### Example

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
|Parameter|Type||Description|
|---------|--- |:---:|------|
|className|string|->|Name of the CSS class to remove from the component|
<!-- END REF -->

#### Description

The `.removeCSSClass()` function <!-- REF #WebFormItemClass.removeCSSClass().Summary -->removes the class specified in *className* from the component<!-- END REF -->.



### .show()

<!-- REF #WebFormItemClass.show().Syntax -->**.show**()<!-- END REF -->


<!-- REF #WebFormItemClass.show().Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
||||Does not require any parameters|
<!-- END REF -->


#### Description

The `.show()` function <!-- REF #WebFormItemClass.show().Summary -->makes the component visible<!-- END REF -->.If the component was already visible, the function does nothing.


## See also 

[Web Form](../commands/web-form.md)</br>
[Web Event](../commands/web-event.md)</br>
[WebForm class](WebFormClass.md)



