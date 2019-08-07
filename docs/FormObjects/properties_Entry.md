---
id: propertiesEntry
title:Entry 
---

## Context Menu

Allows the user access to a standard context menu in the area when the form is executed.

The contents of the menu are set by the rendering engine of the platform.

>It is possible to control access to the context menu via the [WA SET PREFERENCE](https://doc.4d.com/4Dv17R6/4D/17-R6/WA-SET-PREFERENCE.301-4310780.en.html) command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|contextMenu|string	|"automatic", "none"|

#### Objects Supported








## Enterable

The Enterable attribute indicates whether users can enter values into the object. 

A field from a related table may not be enterable if you deselected the Enterable Related Fields check box in the Form Wizard. You can make the related field enterable by selecting the Enterable check box.

All active objects are enterable by default. If you want to make a field or an object non-enterable for that form, you can deselect the Enterable check box for the object. A non-enterable object only displays data. You control the data by methods that use the field or variable name. You can still use the `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` and `On Losing Focus` form events with non-enterable objects. This makes it easier to manage custom context menus and lets you design interfaces where you can drag-and-drop and select non-enterable variables.

>* The contents of the Property List are contextual. When the Enterable attribute for a field or an object is deselected in the Property List, properties that are related to entry control (Mandatory, Tabable, Entry filter and so on) disappear from the list.
* You can also set the Display only property for a field in the Structure editor (see [UNREGISTER CLIENT](https://doc.4d.com/4Dv17R5/4D/17-R5/UNREGISTER-CLIENT.301-4128079.en.html). In this case, the Enterable option does not appear in the Property List for this field (see below).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|enterable|boolean |"true", "false"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom)- [Radio Button](radio_overview.md#overview) - [Check Box](checkbox_overview.md#overview) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Progress Bar](indicators_overview.md#progress-bar) - [Hierarchical List](list_overview.md#overview)





## Entry Filter

An entry filter controls exactly what the user can type during data entry. Unlike the data entry controls discussed earlier in this section, entry filters operate on a character-by-character basis. For example, if a part number always consists of two letters followed by three digits, you can use an entry filter to restrict the user to that pattern. You can even control the particular letters and numbers.

An entry filter operates only during data entry. It has no effect on data display after the user deselects the object. In general, you use entry filters and [Display formats](https://doc.4d.com/4Dv17R5/4D/17-R5/Display-formats.300-4163627.en.html) together. The filter constrains data entry and the format ensures proper display of the value after data entry.

During data entry, an entry filter evaluates each character as it is typed. If the user attempts to type an invalid character (a number instead of a letter, for example), 4D simply does not accept it. The null character remains unchanged until the user types a valid character. 

Entry filters can also be used to display required formatting characters so that the user need not enter them. For example, an American telephone number consists of a three-digit area code, followed by a seven-digit number that is broken up into two groups of three and four digits, respectively. A display format can be used to enclose the area code in parentheses and display a dash after the third digit of the telephone number. When such a format is used, the user does not need to enter the parentheses or the dashes.

### Choosing an entry filter  
You create the entry filter by choosing a built-in filter from the Entry Filter drop-down list or by typing an entry filter code into the Entry Filter Display area. The Entry Filter drop-down list contains filters for date, time, and alpha objects. 

Most of the time, you can use one of the built-in filters of 4D for what you need; however, you can also create custom filters (see Formats and Filters editor). The names of any custom filters you create are added to the top of the Entry Filter drop-down list and begin with a vertical bar (|). 

![](assets/en/FormObjects/property_entryFilter.png)

You can modify an entry filter after you choose it from the drop-down list. For example, if you want to use a filter that allows upper and lowercase letters, but also need to allow the wildcard character (@), you could choose the filter:

    &"a-z;0-9; ;,;.;-"
    
and change it to:

    &"a-z;0-9; ;,;.;-;@"

Entry filter codes usually start with an ampersand (&). This character tells 4D to use what follows as an entry filter. If the code starts with a tilde (~), it means the same thing as “&” except that any letter is automatically made uppercase.
The & is usually followed with an “A,” an “a,” or a “9,” meaning allow only uppercase letters (A), allow lowercase and uppercase letters (a), or allow only numbers (9). For example, &9 allows only numbers and &A allows only capital letters. The number sign (#) tells how many digits or characters are allowed by the code. If the code uses no number signs, the filter allows as many digits or characters as you want. For example, &9 allows as many digits as entered. The filter &9## allows only two digits.

The exclamation point (!) is sometimes used to change which character will appear on screen to indicate the number of characters the user can enter. Without an !, 4D displays an underscore (_) for each digit or character the user can enter. For example, !?&9## displays question marks in both of the places the user will type and it allows only numbers and only two digits point. For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv17R5/4D/17-R5/Filter-and-format-codes.300-4163717.en.html).

### Description of default entry filters  

Here is a table that explains each of the entry filter choices in the Entry Filter drop-down list:

|Entry Filter|Description|
|---|---|
|~A|	Allow any letters, but convert to uppercase.|
|&9|	Allow only numbers.|
|&A|	Allow only capital letters.|
|&a|	Allow only letters (uppercase and lowercase).|
|&@|	Allow only alphanumeric characters. No special characters.|
|~a##|	State name abbreviation (e.g., CA). Allow any two letters, but convert to uppercase.|
|!0&9##/##/##|	Standard date entry format. Display zeros in entry spaces. Allow any numbers.|
|!0&9 Day: ## Month: ## Year: ##|	Custom date entry format. Display zeros in entry spaces. Allow any numbers. Two entries after each word.|
|!0&9##:##|	Time entry format. Limited to hours and minutes. Display zeros in entry spaces. Allow any four numbers, separated by a colon.|
|!0&9## Hrs ## Mins ## Secs|	Time entry format. Display zeros in entry spaces. Allow any two numbers before each word.|
|!0&9Hrs: ## Mins: ## Secs: ##	|Time entry format. Display zeros in entry spaces. Allow any two numbers after each word.|
|!0&9##-##-##-##|	Local telephone number format. Display zeros in entry spaces. Allow any number. Three entries, hyphen, four entries.|
|!_&9(###)!0###-####|	Long distance telephone number. Display underscores in first three entry spaces, zeros in remainder.|
|!0&9###-###-###|	Long distance telephone number. Display zeros in entry spaces. Allow any number. Three entries, hyphen, three entries, hyphen, four entries.|
|!0&9###-##-###|	Social Security number. Display zeros in entry spaces. Allow any numbers.|
|~"A-Z;0-9; ;,;.;-"|	Uppercase letters and punctuation. Allow only capital letters, numbers, spaces, commas, periods, and hyphens.|
|&"a-z;0-9; ;,;.;-"|	Upper and lowercase letters and punctuation. Allow lowercase letters, numbers, spaces, commas, periods, and hyphens.|
|&"0-9;.;-"|	Numbers. Allow only numbers, decimal points, and hyphens (minus sign).|

### Using entry filters and display formats together  

You often use a matching display format when you use an entry filter. An entry filter operates only during data entry. It has no effect on how the data is displayed after you tab out of the field. For example, if you use the Social Security number entry filter (&9###-##-####), you should also choose the matching Social Security number display format (###-##-####). Without the display format, only the numbers, not the hyphens, are displayed in the field. 

Here are some suggested entry filters and matching display formats for common types of fields:

|Field Type	|Entry Filter|	Display Format|
|---|---|---|
|State|	~a##|	(none needed)|
|Zip Code (standard)|	&9#####	|(none needed)|
|Zip Code (extended)|	&9#####-####|	#####-####|
|Phone number|	&9###-####	|###-####|
||&9(###) ###-####	|(###) ###-####|
||&9 ###-###-####	|###-###-####|
|Date|	!0&9##/##/##|	(Any Date Format)|
||!0&9 Day: ## Month: ## Year: ##||
|Time|	!0&9##:##	|(Any Time Format)|
||!0&9## Hrs ## Mins ## Secs||
||!0&9Hrs: ## Mins: ## Secs: ##||

You can use display formats on input forms, output forms, and Quick reports. For information about using display formats in Quick reports, refer to [OBJECT GET SUBFORM](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-GET-SUBFORM.301-4128211.en.html).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|entryFilter	|string	|text to narrow entries |


#### Objects Supported

[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview)








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
|---|---|---|
|focusable|boolean |"true", "false"|


#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Radio Button](radio_overview.md#overview) - [Check Box](checkbox_overview.md#overview) - [Pop-up Menu / Drop-down List](popupMenuDropdownList_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Subform](subform_overview.md#overview) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview)






## Placeholder

4D can display placeholder text in the fields of your forms. 

Placeholder text appears as watermark text in a field, supplying a help tip, indication or example for the data to be entered. This text disappears as soon as the user enters a character in the area:

![](assets/en/FormObjects/property_placeholder.png)

The placeholder text is displayed again if the contents of the field is erased. 

A placeholder can be displayed for the following types of data:

<li>string (text or alpha)
<li>date and time when the Blank if null property is checked.

You can use an XLIFF reference in the ":xliff:resname" form as a placeholder, for example: 

```code4d
:xliff:PH_Lastname
```

You only pass the reference in the "Placeholder" field; it is not possible to combine a reference with static text. 

>You can also set and get the placeholder text by programming using the [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) and [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html) commands.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|placeholder	|string	|Text to be displayed (grayed out) when the value for [Data Source](properties_DataSource.md) is empty.|

#### Objects Supported

[Combo Box](comboBox_overview.md)






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
|---|---|---|
|shortcutAccel	|boolean	|"true", "false"|
|shortcutAlt	|boolean	|"true", "false"|
|shortcutCommand	|boolean	|"true", "false"|
|shortcutControl	|boolean	|"true", "false"|
|shortcutKey	|string	|"[F1]" -> "[F15]", "[Return]",  "[Enter]",  "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]",  "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]"|
|shortcutShift	|boolean	|"true", "false"|

#### Objects Supported

[Regular Button](button_overview.md#regular) - [Flat Button](button_overview.md#regular) - [Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Help Button](button_overview.md#help) - [Circle Button](button_overview.md#circle) - [Custom Button](button_overview.md#custom) - [Picture](pictureButton_overview.md) - 
[Radio Button](radio_overview.md#overivew) - [Check Box](checkbox_overview.md#overview) - [Disclosure Button](checkbox_overview.md#disclosure)







## Single-Click Edit

Enables direct passage to edit mode.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|singleClickEdit|boolean	|"true", "false"|

#### Objects Supported

[List Box](listbox_overview.md#overview)






