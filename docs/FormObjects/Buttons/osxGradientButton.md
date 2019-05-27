---
id: osx gradient button
title: OS X Gradient
---

### Description


The OS X Gradient button style is nearly identical to the [Bevel Button](bevelButton.md) style except, depending on the OS, it may have a two-toned appearance. As with the Bevel button style, the OS X Gradient button style combines the appearance of the [Regular Button](regularButton.md) style (*i.e.*, a rectangle with a descriptive label) with the [Toolbar Button](toolbarButton.md) style's pop-up menu property option. 

By default, the OS X Gradient button style has a light gray background with a label in the center:

![alt-text](assets/en/regularButton.en.png)

The appearance of the OS X Gradient button style can be different when the cursor hovers over it depending on the OS:

 - *Windows* - the button is identical to the Bevel button style.<br> 
![alt-text](assets/en/toolbarButtonHover_Windows.en.png) <br>
When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button. <br>
![alt-text](assets/en/toolbarButtonHover_Windows_popup.en.png)


 - *macOS* - the button is displayed as a two-tone system button. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.<p>**ADD PICTURE**
  <br> 
 
 

#### Selecting the style

The OS X Gradient button's style property can be set via:

* **Property List:** Select *OS X Gradient* from the **Button Style** drop-down list in the **Text and Picture** section.  <br>![alt-text](assets/en/osGradientButton_propertyList.en.png)


* **Code:** Define the property using JSON: <br>Example: ```{"style":"gradientBevel"} ```<br>
See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for more information.

<p>
 
<hr>
<hr>
 **Properties**
 
A button's appearance, location, and behavior can be altered by modifying its properties. The OS X Gradient button style supports the following properties:  

[Bold](boldProperty.md)<br>
[Bottom](bottomProperty.md)<br>
[Button Style](buttonStyleProperty.md)<br>
[Focusable](focusableProperty.md)<br>
[Font](fontProperty.md)<br>
[Font Color](fontColorProperty.md)<br>
[Height](heightProperty.md)<br>
[Horizontal Sizing](horizontalSizingProperty.md)<br>
[Italic](italicProperty.md)<br>
[Left](leftProperty.md)<br>
[Not rendered](notRenderedProperty.md) <br> 
[Number of States](numberOfStatesProperty.md)<br>
[Object Name](objectNameProperty.md)<br>
[Picture Pathname](picturePathnameProperty.md)<br>
[Right](rightProperty.md)<br>
[Shortcut](shortcutProperty.md)<br>
[Title](titleProperty)<br>
[Title/Picture Position](titlePicturePositionProperty.md)<br>
[Top](topProperty.md)<br>
[Type](typeProperty.md)<br>
[Underline](underlineProperty.md)<br>
[Variable or Expression](variableOrExpressionProperty.md)<br>
[Vertical Sizing](verticalSizingProperty.md)<br>
[Visibility](visibilityProperty.md)<br>
[Width](widthProperty.md)<br>
[With pop-up menu](withPopupMenuProperty.md)