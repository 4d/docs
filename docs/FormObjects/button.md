---
id: button
title: Button
---

**Overview**

A button is an active object that can be added to a form and assigned an action. The action assigned to a button can originate from a predefined standard action or from an object method.

The Form editor lets you add a wide variety of buttons to your forms. When you add buttons to a form, you can associate a standard action with each button. Buttons with standard action let the user accept, cancel, or delete records, move between records, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc. 

You normally add buttons when you create the form using the Form Wizard. You can modify these buttons’ actions in the Property List. For example, you can remove a standard action from a button and write an object method that specifies the button’s action.

You can also add buttons and assign button actions with the Form editor. For example, if you need more than one subform on the form, you can add the necessary additional subforms and automatic buttons in the Form editor. You simply add each button to the form and associate a standard action with each one. 



<p>
<hr>
<hr>
<p>

**How to use a button**


Buttons with standard actions are dimmed when appropriate during form execution. For example, if the first record of a table were displayed, a button with the firstRecord standard action would appear dimmed. 
You create a button by choosing the desired button type from the Type drop-down list. You then select or write the standard button action you want from the Standard action list (for more information, refer to section Standard actions) 

If you want the button to perform an action not available as a standard action, left the Standard action field empty and write an object method that specifies the button’s action (see Editing methods).

Normally, you would activate the On Clicked event in the Events theme and the method would run only when the button is clicked. You can associate a method with any button.

All variables associated with buttons are set to 0 when the form is executed for the first time in Design or Application mode. When the user clicks a button, its variable is set to 1.

<p>
<hr>
<hr>
<p>

**Button Styles**

Button styles control the general appearance of a button, as well as the availability of certain options. 4D provides the following types of buttons:

* [Regular Button](regularButton.md)

* [Toolbar Button](toolbarButton.md)

* [Bevel](bevelButton.md)

* [Rounded Bevel](roundedBevelButton.md)

* [OS X Gradient](osxGradientButton.md)

* [OS X Textured](osxTexturedButton.md)

* [Office XP](officeXPButton.md)

* [Help](helpButton.md)

* [Circle](circleButton.md)

* [Custom](customButton.md)

<hr>
<hr>

**Properties**


button attribs

|Property|Data Type|Description|Possible values
|---|:---:|---|---|
|Background pathname| |Allows setting a picture that will be drawn in the background of the button. As with icons, you can indicate whether the picture comes from a variable, picture library, resource file or disk file. 
|columnCount|integer
|Horizontal Margin||Allows setting the size (in pixels) of the internal margins of the button. These margins delimit the area that the button icon and title must not surpass.
|Icon Offset| |Allows setting a custom offset value in pixels, which when the button is clicked, will shift the title of the button to the right and toward the bottom for the number of pixels entered enabling the application of a customized 3D effect when the button is clicked.|
|Number of States|
|Picture pathname|
|popupPlacement|text|Allows displaying a symbol that appears as a triangle in the button, which indicates that there is a pop-up menu attached.|"none", "linked", "separated"
|radioGroup|
|rowCount|integer
|style|text|Defines the button style|
|textPlacement|text|Allows modifying the relative location of the title in relation to the associated object. No effect if the object contains only a title (no associated picture) or a picture (no title).|"left", "right", "top", "bottom", "center"
|title|text
|Title/Picture Position| |Allows modifying the relative location of the button title in relation to an associated icon. Has no effect when the button contains only a title (no associated picture) or a picture (no title).
|Type|
|Vertical Margin| |Allows setting the size (in pixels) of the internal margins of the button. These margins delimit the area that the button icon and title must not surpass.
|With pop-up menu| |Allows displaying a symbol that appears as a triangle in the button to indicate the presence of an attached pop-up menu. <p><br> **Note:** the “With Pop-up Menu” property only manages the graphic aspect of the button. The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using form events and the **Dynamic pop up menu** and **Pop up menu** commands <p>These options also influence the handling of form events by the button |"None",<p><br>"Linked" <br>a simple click on the button only displays the pop-up menu <p>"Separated" <br>clicking on the left part of the button directly executes the current action of the button