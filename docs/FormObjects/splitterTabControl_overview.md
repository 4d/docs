---
id: splitterTabControlOverview
title: Splitters and Tab Controls
---

## Splitters

A splitter divides a form into two areas, allowing the user to enlarge and reduce the areas by moving the splitter one way or the other. A splitter can be either horizontal or vertical. The splitter takes into account each object’s resizing properties, which means that you can completely customize your database’s interface. A splitter may or may not be a “pusher.”

The splitter is generally used in output forms so that columns can be resized.

Some of the splitter’s general characteristics:

*	You can place as many splitters as you want in any type of form and use a mixture of horizontal and vertical splitters in the same form.
*	A splitter can cross (overlap) an object. This object will be resized when the splitter is moved.
*	Splitter stops are calculated so that the objects moved remain entirely visible in the form or do not pass under/next to another splitter. When the Pusher property is associated with a splitter, its movement to the right or downward does not encounter any stops.
*	If you resize a form using a splitter, the new dimensions of the form are saved only while the form is being displayed. Once a form is closed, the initial dimensions are restored.

Once it is inserted, the splitter appears as a line. You can modify its border style to obtain a thinner line or change its color. 

#### JSON Example:    

```code4d
	"mySplitter": {
                "type": "splitter",			//define the type of object
                "left": 60,					//left position on the form  
                "top": 160,					//top position on the form 
                "width": 100,				//width of the object
                "height": 20,				//height of the object
                "splitterMode": "move"		//define the action
                }
``` 


#### Supported Properties
[Border Line Style](properties_BackgroundAndBorder.md) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 

### Interaction with the properties of neighboring objects  

In a form, splitters interact with the objects that are around it according to these objects’ resizing options:

|Resizing options for the object(s)	|Object(s) above the horizontal splitter or to the left of the vertical splitter (1)	|Object(s) below the horizontal splitter or to the right of the vertical splitter| |
|---|---|---|---|
| | |non-“Pusher” splitter	|“Pusher” splitter|
|None	|Remain as is	|Are moved with the splitter (position relative to the splitter is not modified) until the next stop. The stop when moving to the bottom or right is either the window’s border, or another splitter.	|Are moved with the splitter (position relative to the splitter is not modified) indefinitely. No stop is applied (see the next paragraph)|
|Resize	|Keep original position(s), but are resized according to the splitter’s new position	| | |
|Move	|Are moved with the splitter	| |  |

*(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position.*

>An object completely contained in the rectangle that defines the splitter is moved at the same time as the splitter.

### Managing splitters programmatically  

You can associate an object method with a splitter and it will be called with the `On Clicked` event throughout the entire movement.

A variable of the *Longint* type is associated with each splitter. This variable can be used in your object and/or form methods. Its value indicates the splitter’s current position, in pixels, in relation to its initial position.

*	If the value is negative: the splitter was moved toward the top or toward the left,
*	If the value is positive: the splitter was moved toward the bottom or toward the right,
*	If the value is 0: the splitter was moved to its original position. 

You can also move the splitter programmatically: you just have to set the value of the associated variable. For example, if a vertical splitter is associated with a variable named split1, and if you execute the following statement: split1:=-10, the splitter will be moved 10 pixels to the left — as if the user did it manually. The move is actually performed at the end of the execution of the form or object method containing the statement. 





## Tab Controls

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


#### JSON Example:    

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


#### Supported Properties
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

