---
id: propertiesEntry
title:Entry Properties
---

## Focusable

This property can be set in the “Entry” theme of the Property List for active objects (whether enterable or not) as well as for non-enterable fields.

When the **Focusable** property is selected for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the *Hide focus rectangle* option has also been selected.

* ![](assets/en/FormObjects/property_focusable1.png)<br>Check box shows focus when selected
<p>
<p>

* ![](assets/en/FormObjects/property_focusable2.png)<br>Check box is selected but cannot show focus|


When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.

#### Hide focus rectangle  
During execution, a field or any enterable object is outlined by a selection rectangle when it has the focus (via the **Tab** key or a single click). You can hide this rectangle by checking the **Hide focus rectangle** option. Hiding the focus rectangle may be useful in the case of specific interfaces.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|:---:|---|
|focusable|boolean | TRUE / FALSE|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom)|

<hr>


## Shortcut

This property allows setting special meaning keys (keyboard shortcuts) for buttons and checkboxes. They allow the user to activate the button or select the check box using the keyboard instead of having to use the mouse. These can include the:<br> <ul><li>key to be used,</li> <li>operating system (Windos or macOS),</li> <li>keys per operating system</li></ul>

You configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](assets/en/FormObjects/property_shortcut.png)

Type the keyboard shortcut. For example, if you want to use **Ctrl+H**, hold down the **Ctrl** key and press **H**. The letter H will then appear in the Associated Key area and the check box below the **Ctrl** key will be checked. You are not required to use modifier keys. You can use any key alone as the shortcut, although this is not recommended in most cases. If you like, you can manually modify the selection of modifier keys by selecting or deselecting any of the modifier key check boxes.

To start over again, click **Clear**. When you have finished, click **OK**.

The Property List displays the keyboard shortcut that was assigned to the object. If you want to change the shortcut later, simply open the Shortcuts dialog box and type the key combination you want to use.

>You can also assign a shortcut to a custom menu command. If there is a conflict between two shortcuts, the active object has priority. For more information about associating shortcuts with menus, refer to [Setting menu properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html).


#### JSON Grammar

|Name|Data Type|Possible Values|
|:---|:---:|:---|
|shortcutAccel	|boolean	|<li>"true" <li>"false"|
|shortcutAlt	|boolean	|<li>"true" <li>"false"|
|shortcutCommand	|boolean	|<li>"true" <li>"false"|
|shortcutControl	|boolean	|<li>"true" <li>"false"|
|shortcutKey	|string	|<li>"[F1]" -> "[F15]"<li>"[Return]"<li> "[Enter]"<li> "[Backspace]" <li>"[Tab]"<li> "[Esc]"<li> "[Del]"<li> "[Home]"<li> "[End]"<li> "[Help]"<li> "[Page up]"<li> "[Page down]" <li>"[left arrow]"<li> "[right arrow]"<li> "[up arrow]"<li> "[down arrow]"|


#### Objects Supported

|Category|Link|
|---|---|
|Button|[Regular](button_overview.md#regular) - [Flat](button_overview.md#regular) - [Toolbar](button_overview.md#toolbar) - [Bevel](button_overview.md#bevel) - [Rounded Bevel](button_overview.md#Rounded-bevel) - [OS X Gradient](button_overview.md#os-x-gradient) - [OS X Textured](button_overview.md#os-x-textured) - [Office XP](button_overview.md#office-XP) - [Help](button_overview.md#help) - [Circle](button_overview.md#circle) - [Custom](button_overview.md#custom) - [Picture](pictureButton_overview.md)|



