---
id: tabControl
title: Tab Controls
---

A tab control creates an object that lets the user choose among a set of virtual screens that are enclosed by the tab control object. Each screen is accessed by clicking its tab. 

The following multi-page form uses a tab control object:

![](assets/en/FormObjects/tabControl1.png)

To navigate from screen to screen, the user simply clicks the desired tab. 

The screens can represent pages in a multi-page form or an object that changes when the user clicks a tab. If the tab control is used as a page navigation tool, then the [FORM GOTO PAGE](https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html) command or the `Goto Page` standard action would be used when a user clicks a tab. 

Another use of the tab control is to control the data that is displayed in a subform or grouped scrollable areas. For example, a Rolodex could be implemented using a tab control. The tabs would display the letters of the alphabet and the tab control’s action would be to load the data corresponding to the letter that the user clicked.

Each tab can display labels or labels and a small icon. If you include icons, they appear to the left of each label. Here is an example of a tab control that uses icons:

![](assets/en/FormObjects/tabControl2.png)

When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list.

If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can’t fit all the icons, it places scroll arrows to the right of the last visible tab. The scroll arrows allow the user to scroll the icons to the left or right.

Under Mac OS, in addition to the standard position (top), the tab controls can also be aligned to the left, to the right, or below (see the "Modifying Direction (Mac OS Only)" section below).


### JSON Example:    

```code4d
	"myTab": {
                "type": "tab",				//define the type of object
                "left": 60,					//left position on the form  
                "top": 160,					//top position on the form 
                "width": 100,				//width of the object
                "height": 20,				//height of the object
                "labelsPlacement": "bottom"	//define the direction
                }
``` 


### Supported Properties
[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

### Adding labels to a tab control  

There are several ways to supply the labels for a tab control:

*	You can create a list using the Lists editor and assign the list to the tab control as a choice list, as shown below:

	If you like, you can associate a small icon with each list item using the Lists editor. For more information about this, refer to [Adding a small icon to an item](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-list-properties.300-4163454.en.html#3372534).
*	You can create a *Text* array that contains the names of each page of the form. This code must be executed before the form is presented to the user. For example, you could place the code in the object method of the tab control and execute it when the `On Load` event occurs.  
```code4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```

>You can also store the names of the pages in a hierarchical list and use the Load list command to load the values into the array.


### Managing tabs programmatically  

#### FORM GOTO PAGE command

You can use the [FORM GOTO PAGE](https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html) command in the tab control’s method:

```code4d
FORM GOTO PAGE(arrPages)
```

The command is executed when the `On Clicked` event occurs. You should then clear the array when the `On Unload` event occurs.

Here is an example object method:

```code4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

#### Goto Page action
  
You can assign the `Goto Page` action to a tab control. When that action is selected, 4D will automatically display the page of the form that corresponds to the number of the tab that is selected. 

For example, if the user selects the 3rd tab, 4D will display the third page of the current form (if it exists). 
If you want to manage the effect of the selection of a button yourself, select `No action`.

For more information about standard actions, refer to [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html).

