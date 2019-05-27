---
id: defaultButtonProperty
title: Default Button
---

The default button property modifies a button's appearance in order to indicate the recommended choice to the user. The difference in appearance depends on the OS. 

* **Windows:** The default button has a blue outline:<br>
![alt-text](assets/en/defaultButtonWindows.en.png "Windows default button")

* **macOS:** The default buttons are blue:<br>
![alt-text](assets/en/defaultButtonmacOS.en.png "macOS default button")

**Note:** There can only be one Default button per form page.

#### Setting the property

The default button property can be set via:

* **Property List:** Check the Default Button checkbox in the **Appearance** section.  
* **Code:** Define the property using JSON: <br>Example: ```{"defaultButton":"true"} ```<br>
 See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for more information.

<p>
<hr>
<hr>

**Objects Supported**

[Regular Button](regularButton.md) <br>
[Toolbar Button](toolbarButton.md)<br>
[Bevel Button](bevelButton.md)<br>
[Rounded Bevel Button](roundedBevelButton.md)<br> 
[OS X Gradient Button](osxGradientButton.md)<br> 
[OS X Textured Button](osxTexturedButton.md)<br> 
[Office XP Button](officeXPButton.md)<br> 
[Circle Button](circleButton.md)<br> 
[Custom Button](customButton.md)<br> 

<p>
<hr>
<hr>

**JSON Grammar**

|Name|Data Type|Possible Values|
|:---|:---:|:---:|
|text|string |any text |


