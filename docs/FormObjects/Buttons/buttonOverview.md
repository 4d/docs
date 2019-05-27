---
id: buttonOverview
title: Buttons
---
## Overview

A button is an active object that can be added to a form and assigned an action to perform (*e.g.*, a database task or interface function) when a user clicks on it. Buttons can fulfill a variety of roles, depending on their style and the action assigned to it. For example, buttons could lead a user through a questionnaire or form to fill, or to make choices. Depending on its settings, a button may be designed to be clicked only once and execute a command, while others may require the user to click more than once to receive the desired result. Other buttons are designed to toggle behavior on and off. These kinds of buttons graphically indicate the state of the option.

The actions assigned to the buttons can originate from predefined [standard actions](#standard-actions) or from custom [object methods](#object-methods). Examples of typical actions include letting the user accept, cancel, or delete records, move between records, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc. 

Buttons are not *one-size-fits-all* kinds of objects. Several varieties are available to fulfill a wide range of uses, from toolbar integration, to offering help tips, to simply responding to a question. Not only are there multiple styles of buttons, their appearance also varies and they can be tailored to better suit your needs by modifying the shape, color, font, label, etc. or adding pictures or icons.

<p>

### Styles

Button styles control the button's general appearance as well as the availability of its properties. A great number of variations can be obtained by combining these properties / behaviors. 

Many button objects are structurally identical; the only difference is the processing of their associated variables. See the page for the specific button style you want to use for more information about its available properties. 4D provides buttons in the following predefined styles: 

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


## Using buttons
<p>
Using buttons is fairly straightforward. You simply add one to a form and assign an action to it.

Adding a button to a form can be done via:

*  **Form editor:** Drag a button object from the Form editor onto the form. Then select *Button* from the **Type** drop-down list and the style of button (regular, toolbar, bevel, etc.) from the **Button Style** drop-down list.
*  **Code:** Define the properties for a button object using JSON: <br>Example:
```{"type": "button", "text": "OK",	"action": "Cancel",	"left": 60,	"top": 160,	"width": 100, 	"height": 20} ```<br>
 See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for more information.
 
In addition to adding buttons to your forms, you can also modify their properties (*e.g.*, size, position, label, etc.). The properties available depend on the button's style. See the page for the specific button style you want to use for more information about its available properties.
 
Once you've added a button to your form, you can associate it to a standard action or an object method to perform a task when a user clicks on it. You can associate a method with any button style. Typically, you would activate the ___On Clicked___ event in the Events theme and the standard action or method would run only when the button is clicked. 


### Standard actions {#standard-actions} 

Predefined functions, known as standard actions, are available to perform routine tasks (*e.g.*, letting the user accept, cancel, or delete records, move between records, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc.). For more in-depth information about standard actions, see the [Standard Actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) page.

Standard actions can be associated to a button in two ways:

* **Property List:** Enter the name of the standard action you want to use or select it from the drop-down list in the **Standard action** section.  
* **Code:** Define the action using JSON: <br>Example: ```{"events": "onDoubleClick"} ```<br>
 See the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page for more information.


Buttons with standard actions are dimmed when appropriate during form execution. For example, if the first record of a table were displayed, a button with the *firstRecord* standard action would appear dimmed. 

If you want the button to perform an action not available as a standard action, left the Standard action field empty and write an object method that specifies the button’s action (see Editing methods).

### Object methods {#object-methods}

If you want the button to perform an action not available as a standard action, leave the **Standard action* field empty and write an object method that specifies the button’s action (see [Using object methods](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html)).












