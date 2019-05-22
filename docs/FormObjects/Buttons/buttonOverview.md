---
id: buttonOverview
title: Buttons
---
## Overview

A button is an active object that can be added to a form and assigned an action to perform when a user clicks on it. The action assigned to a button can originate from predefined [standard actions](#standard-actions) or from custom [object methods](#object-methods).

<p>

### Styles

Button styles control the general appearance of a button, as well as the availability of certain properties. A great number of variations can be obtained by combining the various properties. 4D buttons are available in the following predefined styles: 

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

See the page for the specific button style you want to use for more information about its available properties.


## How to use a button
<p>

You can modify a buttons’ actions in the Property List or via code. For example, you can remove a standard action from a button and write an object method that specifies the button’s action.

You can also add buttons and assign button actions with the Form editor. For example, if you need more than one subform on the form, you can add the necessary additional subforms and automatic buttons in the Form editor. You simply add each button to the form and associate a standard action with each one. 

Many button objects are structurally identical; the only difference is the processing of their associated variables. See the page for the specific button style you want to use for more information.
<p> 

All variables associated with buttons are set to 0 when the form is executed for the first time in Design or Application mode. When the user clicks a button, its variable is set to 1.

### Standard actions {#standard-actions} 

When you add buttons to a form, you can associate it with a predefined function, known as a standard action, to perform routine tasks (e.g., let the user accept, cancel, or delete records, move between records, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc.). For more in-depth information about standard actions, see the [Standard Actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) page.

Standard actions can be associated to a button in two ways:

* From the Property List - select (or write) the name of the standard action 
* Via code - see the [Dynamic Forms](https://doc.4d.com/4Dv17R5/4D/17-R5/Dynamic-Forms.300-4163740.en.html#3692292) page. 



Buttons with standard actions are dimmed when appropriate during form execution. For example, if the first record of a table were displayed, a button with the *firstRecord* standard action would appear dimmed. 

You create a button by choosing the desired button type from the Type drop-down list. You then select or write the standard button action you want from the Standard action list (for more information, refer to section Standard actions) 

If you want the button to perform an action not available as a standard action, left the Standard action field empty and write an object method that specifies the button’s action (see Editing methods).

Normally, you would activate the On Clicked event in the Events theme and the method would run only when the button is clicked. You can associate a method with any button.


### Object methods {#object-methods}

If you want the button to perform an action not available as a standard action, leave the Standard action field empty and write an object method that specifies the button’s action (see [Editing methods](https://doc.4d.com/4Dv17R5/4D/17-R5/Editing-methods.200-4163421.en.html)).

Normally, you would activate the On Clicked event in the Events theme and the method would run only when the button is clicked. You can associate a method with any button.









