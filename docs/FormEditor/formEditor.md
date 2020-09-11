---
id: formEditor
title: Form Editor
---


## Interface

The Form editor interface displays each form in its own window, which has both an object and tool bar. You can have several forms open at the same time. The rulers on the side and bottom help you position objects in the form. You can change measurement units so that it displays inches, centimeters, or pixels.

### Showing/hiding elements 

You can show or hide most interface elements in the Form editor. This feature allows you to show only the elements that you need to create or view in a form, or only the tools that you want to use. This option is always applied to the Form editor’s current window. For example, it is useful to show the output control lines when you are working on an output form.

To show or hide an element in the Form editor:

1.	Choose **Display** from the Form menu.
	OR
	Use the **Display** command in the context menu that appears in the Form editor’s window (right-click in the window without clicking on an object).
	A hierarchical submenu appears listing all the elements that you can show or hide:<p>![](assets/en/FormEditor/showHideElements.png)<p>A check mark placed next to the element indicates that it will be shown. To hide an element, select the element so that the check mark disappears.

2.	Select the element that you want to show or hide.<p>Here is a description of the commands in this menu:
	*	**Inherited form**: Shows or hides inherited form objects (if there is an inherited form) on the current page of the form. For more information, refer to Using inherited forms.
	*	**Page 0**: Shows or hides the objects from page 0 on the form’s current page. This option allows you to distinguish between the objects on the form’s current page and those on page 0. For more information about pages in forms, refer to the Creating a multi-page form section.
	*	**Paper**: Shows or hides the borders of the printing page, which are shown as gray lines. This option may have no apparent effect when the Limits (see below) option is selected. If the size of the form is smaller than the printing page, the page’s borders are shown outside of the form’s viewing area and therefore do not appear. Refer to Printing a form.
	*	**Rulers**: Shows or hides the rulers in the Form editor’s window.
Markers: Shows or hides the output control lines and associated markers that show the limits of the form’s different areas.
	*	**Marker Labels**: Shows or hides the marker labels, available only when the output control lines are displayed. For more information, refer to the Moving output control lines paragraph.
	*	**Limits**: Shows or hides the form’s limits. When this option is selected, the form is displayed in the Form editor as it appears in Application mode. This way you can adjust your form without having to switch to the Application mode in order to see the result.

	>The Size Based on, Hor margin and Vert margin settings of the form properties affect the form’s limits. When using these settings, the limits are based on the objects in the form. When you modify the size of an object that is located next to the form’s border, it is modified to reflect that change. For more information on form properties, refer to the Form properties section.





### Using the toolbar

The toolbar of the Form editor offers a set of tools to manipulate and modify the form. Each window has its own toolbar.

![](assets/en/FormEditor/toolbar.png)

The toolbar contains the following elements:

|Icon |Name|Description |
|---|---|---|
|![](assets/en/FormEditor/execute.png)| Execute the form| Used to test the execution of the form. When you click on this button, 4D opens a new window and displays the form in its context (list of records for a list form and current record page for a detail form). The form is executed in the main process.|
|![](assets/en/FormEditor/selection.png)| Selection tool|Allows selecting, moving and resizing form objects.<p>**Note**: When an object of the Text or Group Box type is selected, pressing the **Enter** key lets you switch to editing mode.|
|![](assets/en/FormEditor/zOrder.png)| Entry order| Switches to “Entry order” mode, where it is possible to view and change the current entry order of the form. Note that shields now allow viewing the current entry order, while still working in the form. |
|![](assets/en/FormEditor/moving.png)| Moving| Switches to “Move” mode, where it is possible to reach any part of the form quickly by using drag and drop in the window. The cursor takes the shape of a hand. This navigation mode is particularly useful when zooming in the form.|
|![](assets/en/FormEditor/zoom.png)| [Zoom](#zoom)| Allows modifying the form display percentage (100% by default). You can switch to “Zoom” mode by clicking on the magnifying glass or by clicking directly on the desired bar. This feature is detailed in previous section.|
|![](assets/en/FormEditor/alignment.png)| Alignment| This button is linked to a menu that allows aligning objects in the form. It is enabled (or not) depending on the objects selected.|
|![](assets/en/FormEditor/distribution.png)| Distribution| This button is linked to a menu that allows distributing objects in the form. It is enabled (or not) depending on the objects selected.|
|![](assets/en/FormEditor/level.png)| Level| This button is linked to a menu that allows changing the level of objects in the form. It is enabled (or not) depending on the objects selected. |
|![](assets/en/FormEditor/group.png)| Group/Ungroup| This button is linked to a menu that allows grouping and ungrouping selections of objects in the form. It is enabled (or not) depending on the objects selected. |
|![](assets/en/FormEditor/displyAndPage.png)| Display and page management| This area allows passing from one form page to another and adding pages. To navigate among form pages, click the arrow buttons, or click the central area and choose the page to display from the menu that appears. If you click the right arrow button while the last form page is displayed, 4D allows you to add a page. |
|![](assets/en/FormEditor/cssPreviewicon.png) |[CSS Preview](#css-preview)|This button is used to select the CSS Mode to use. |
|![](assets/en/FormEditor/views.png)| [Managing views](#views)|This button displays or hides the views palette. This new function is detailed in Using object views .|
|![](assets/en/FormEditor/shields2.png)| [Displaying shields](#shields)| Each click on this button causes the successive display of each type of form shield. The button is also linked to a menu that allows directly selecting the type of shield to display. |
|![](assets/en/FormEditor/library.png)| Preconfigured object library| This button displays the preconfigured object library that provides numerous objects with certain properties that have been predefined. |
|![](assets/en/FormEditor/listBoxBuilder1.png)|[List Box Builder](#list-box-builder)|This button creates new entity selection list boxes. |

### Using the object bar  

The object bar contains all the active and inactive objects that can be used in 4D forms. Some objects are grouped together by themes (buttons, radio buttons, menus, etc.). Each theme includes several alternatives that you can choose between. When the object bar has the focus, you can select the buttons using the keys of the keyboard. The following table describes the object groups available and their associated shortcut key.

|Button	|Group	|Key|
|---|---|---|
|![](assets/en/FormEditor/text.png)|	Text / Group Box|	T|
|![](assets/en/FormEditor/input.png)|	Field / Variable|	F|
|![](assets/en/FormEditor/listbox.png)|	Scrollable Area / Hierarchical List / List Box|	L|
|![](assets/en/FormEditor/combo.png)|	Combo Box / Pop-up/Drop-down List / Hierarchical Pop-up Menu / Picture Pop-up Menu|	P|
|![](assets/en/FormEditor/button.png)|	Button / 3D Button / Highlight Button / Invisible Button / Picture Button / Button Grid|	B|
|![](assets/en/FormEditor/radio.png)|	Radio Button / 3D Radio Button / Picture Radio Button|	R|
|![](assets/en/FormEditor/checkbox.png)|	Check Box / 3D Check Box|	C|
|![](assets/en/FormEditor/indicator.png)|	Progress Indicator / Dial / Ruler	I
|![](assets/en/FormEditor/rectangle.png)|	Rectangle / Line / Rounded Rectangle / Oval / Matrix	|S|
|![](assets/en/FormEditor/splitter.png)|	Splitter / Tab Control	D|
|![](assets/en/FormEditor/plugin.png)|	Plug-in Area / Subform / Web Area|	X|

To draw an object type, select the corresponding button and then trace the object in the form. After creating an object, you can modify its type using the Property List. Hold down the **Shift** key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

The current variant of the theme is the object that will be inserted in the form. When you click the right side of a button, you access the variant menu:

![](assets/en/FormEditor/objectBar.png)

When a button is selected, you can scroll through its variants using the **Shift+Selection** key shortcut. Help tips display the currently selected variant and the associated selection key of the object.

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. To cancel a continual selection, click on another object or tool.

### Using the Property List  

Both forms and form objects have properties that control access to the form, the appearance of the form, and the behavior of the form when it is used. Form properties include, for example, the form’s name, its menu bar, and its size. Object Properties include, for example, an object’s name, its dimensions, its background color, and its font. 

You can display and modify form and object properties using the Property List. It displays either form or objects properties depending on what you select in the editor window.

To display/hide the Property List, choose **Property List** from the **Form** menu or from the context menu of the Form editor. You can also display it by double-clicking in an empty area of the form. 

#### Navigation shortcuts  

You can navigate in the Property List using the following shortcuts:

*	**Arrow key**s ↑ ↓: Used to go from one cell to another.
*	**Arrow keys** ← →: Used to expand/collapse themes or menus.
*	**PgUp** and *PgDn*: Used to select the first or last visible cell of the Property List.
*	**Home** and **End**: Used to select the first or last cell of the Property List.
*	**Ctrl+click** (Windows) or **Command+click** (Mac OS) on an event: Used to select/deselect every event in the list, according to the initial state of the event on which you clicked.
*	**Ctrl+click** (Windows) or **Command+click** (Mac OS) on a theme label: Used to Collapse/Expand every theme in the list.

## CSS Preview

The Form Editor provides two options for viewing styled objects:

*	**Plain mode**<br>Only JSON form values defined in the Property List are applied and displayed in the Form Editor. 

*	**CSS mode**<br>[Style sheet attributes](stylesheets.html) are applied and displayed in the Form Editor. 

By default, forms (including inherited and subforms) are opened in the CSS Preview mode for your operating system.



### View Modes

|Toolbar Icon|CSS Mode |Description|
|---|---|---|
|![](assets/en/FormEditor/cssNo.png)|Plain|No CSS values or icons displayed|
|![](assets/en/FormEditor/cssMac.png)|CSS|CSS values for macOS platform are displayed. CSS icon displayed in Property List.|
|![](assets/en/FormEditor/cssWin.png)|CSS|CSS values for Windows platform are displayed. CSS icon displayed in Property List.|

>When using CSS mode, only JSON values are used for:
>*	Copy/Paste operations 
>*	Macros


### Style Sheets & the Property List

In CSS mode, if the value of an attribute has been defined in a style sheet, the attribute's name will appear with a [CSS icon](#css-icon) displayed next to it in the Property List. For example, the attribute values set in this style sheet:

```4d
.myButton {
font-family: comic sans;
font-size: 24;
stroke: #800080;
}
```

The values are shown with a CSS icon in the Property List:

![](assets/en/FormEditor/cssPpropList.png)

>Attribute values that have been modified in JSON form appear in **bold** text in the Property List. You can reset a JSON form attribute value to its default value with the **Ctrl + click** (Windows) or **Command + click** (macOs) shortcuts.

#### Property List CSS Icons

|Icon|Description|
|---|---|
|![](assets/en/FormEditor/cssIcon.png)|Indicates that an attribute value has been defined in a style sheet|
|![](assets/en/FormEditor/cssImportant.png)|Indicates that an attribute value has been defined in a style sheet with the `!important` declaration|
|![](assets/en/FormEditor/cssIconMixed.png)|Displayed when at least one item in a group or selection of multiple objects has an attribute value defined in a style sheet that is different from the other objects|

#### JSON vs Style Sheet Priority Order

See the [Style sheets](stylesheets.html#json-vs-style-sheet) section.



### Using CSS Preview

1. In the Form Editor toolbar, click on the CSS Preview icon:<p>![](assets/en/FormEditor/cssPreview.png)

2.	Select the mode from the list:<p> ![](assets/en/FormEditor/cssPreview_list.png)<p>Objects are automatically displayed with the styles defined in a style sheet (if any).


>Existing style sheet files are listed below the **CSS Preview** options. Selecting one will open the style sheet in your default text editor.


## List Box Builder

You can create new entity selection list boxes quickly with the **List box builder**. The new list box can be used immediately or it can be edited via the Form Editor.

The List box builder lets you create and fill entity selection list boxes in a few simple operations.



### Using the List Box Builder


1.	In the Form Editor toolbar, click on the List box builder icon:
	
	![](assets/en/FormEditor/listboxBuilderIcon.png)
	
	The List box builder is displayed:
	
	![](assets/en/FormEditor/listboxBuilder.png)	
	
2.	Select a table from the **Table** dropdown list:

	![](assets/en/FormEditor/listboxBuilderTable.png)
	
3.	Select the fields for the list box in the **Fields** area:

	![](assets/en/FormEditor/listboxBuilderFields.png)
	
	By default, all fields are selected. You can select or deselect fields individually or use **Ctrl+click** (Windows) or **Cmd+click** (macOS) to select or deselect them all at once.
	
	You can change the order of the fields by dragging them and dropping them.

4.	The expression to fill the list box's rows from the entity selection is prefilled:

	![](assets/en/FormEditor/listboxBuilderExpression.png)
	
	This expression can be changed if necessary.
	
5.	Clicking on the **Copy** button will copy the expression for loading all records into memory:

	![](assets/en/FormEditor/listboxBuilderCode.png)
	
6.	Click the the **Build widget** button to create the list box.

	![](assets/en/FormEditor/listboxBuilderBuild.png)
	
The final list box:

![](assets/en/FormEditor/listboxBuilderListbox.png)




## Shields

The 4D Form Editor uses shields to make viewing object properties easier. You can find them on the form toolbar:

![](assets/en/FormEditor/shields.png) 


This function works as follows: Each shield is associated with a property (for example, **Views**, which means the object “is in the current view”). When you activate a shield, 4D displays a small icon (shield) in the upper left of each object of the form where the property is applied.

![](assets/en/FormEditor/shield.png) 

### Using shields

To activate a shield, click the *Shield* icon from the toolbar until the desired shield is selected. You can also click on the right side of the button and select the type of shield to display directly in the associated menu: 


If you don't want to display shields, select **No Shields** in the selection menu. 

>You can set which shields to display by default on the Forms Page of the application Preferences.

### Shield descriptions

Here is a description of each type of shield:

|Icon|Name|Is displayed ...|
|---|---|---|
|![](assets/en/FormEditor/objectMethod.png)|Object Method|For objects with an associated object method |
|![](assets/en/FormEditor/standardAction.png)  |Standard Action|For objects with an associated standard action |
|![](assets/en/FormEditor/resizing.png) |Resizing|For objects with at least one resizing property, indicates the combination of current properties |
|![](assets/en/FormEditor/entryOrder.png)|Entry Order|For enterable objects, indicates the number of entry order |
|![](assets/en/FormEditor/viewNumber.png) |Current View|For all objects in the current view |
|![](assets/en/FormEditor/cssShield.png)|Style Sheet|For objects with attribute values defined in a style sheet|
|![](assets/en/FormEditor/filter.png) |Filter|For enterable objects with an associated entry filter |
|![](assets/en/FormEditor/helpTip.png) |Help Tip|For objects with an associated tip |
|![](assets/en/FormEditor/localized.png)|Localized|For objects whose label comes from a reference (label beginning with “:”). The reference can be of the resource (STR#) or XLIFF type |
|![](assets/en/FormEditor/noShields.png)|No Shields|No shields appear |

## Views

The 4D Form Editor enables you to build complex forms by distributing form objects among separate views that can then be hidden or shown as needed. 

For example, you can distribute objects according to type (fields, variables, static objects, etc.). Any type of form object, including subforms and plug-in areas, can be included in views.

There is no limit on the number of views per form. You can create as many different views as you need. Additionally, each view can be displayed, hidden, and/or locked. 




View management is handled via the View palette.

![](assets/en/FormEditor/viewEditor.png)


### Accessing the View palette

There are three ways to access the View palette: 

*	**Toolbar**: Click on the Views icon in the Form Editor toolbar. (This icon appears gray when at least one object belongs to a view other than the default view.)

	|Default view only|With additional views|
	|:---:|:---:|
	|![](assets/en/FormEditor/icon.png "No views in use")|![](assets/en/FormEditor/icon2.png "Views in use")|

* 	**Context menu** (form or object): Right-click anywhere in the Form Editor or an object, and select **Current View** 

	![](assets/en/FormEditor/contextMenu.png)
		
The current view is indicated with a check mark (*e.g.*, "Work Address" in the image above)
		

*	**Form menu**: Click on the **Form** menu and select **View List**

![](assets/en/FormEditor/formMenu.png)


### Before you begin
 
Here are a few important things to know before you start working with views:

*	**Context of use**: Views are a purely graphic tool which can only be used in the Form Editor; you cannot access views programmatically or in the Application environment.

*	**Views and pages**: Objects of the same view can belong to different form pages; only objects of the current page (and of page 0 if it is visible) can be displayed, regardless of the view configuration.

*	**Views and levels**: Views are independent of object levels; there is no display hierarchy among different views.

*	**Views and groups**: Only objects belonging to the current view can be grouped.

*	**Current and Default** views: The Default view is the first view of a form and cannot be deleted; the Current view is the view that is being edited and the name is displayed in bold text.



### Managing views

#### Creating views

Any object created in a form is placed in the first view ("View 1") of the form. The first view is **always** the default view, indicated by (Default) after the name. The view's name can be changed (see [Renaming views](#renaming-views)), however it remains the default view. 


![](assets/en/FormEditor/createView.png)

There are two ways to add additional views:

*	Click on the **Add a new view** button at the bottom of the View palette:

![](assets/en/FormEditor/addView.png)

*	Right-click on an existing view and select **Insert view**:

![](assets/en/FormEditor/addView2.png)

There is no limitation on the number of views.

#### Renaming views  

By default views are named as "View" + the view number, however you can change these names to improve readability and better suit your needs. 

To rename a view, you can use either: 

*	Double-click directly on the view name (the selected view in this case). The name then becomes editable:

	![](assets/en/FormEditor/rename.png)
	
*	Right-click on the view name. The name then becomes editable: 

	![](assets/en/FormEditor/rename2.png)

#### Reordering views

You can change the display order of views by dragging/dropping them within the View palette.

Note that the Default view does not change:

![](assets/en/FormEditor/reorderView.png)


#### Deleting views 

To rename a view, you can use either: 

*	Click on the **Delete the selected view** button at the bottom of the View palette:

	![](assets/en/FormEditor/deleteView.png)


*	Right-click on the view name, and select **Delete View**: 

	![](assets/en/FormEditor/deleteView2.png)
	

>If a view is deleted, any objects in it are automatically moved to the Default view.




### Using views  

Once views are created, you can use the View palette to:

*	Add object to views,
*	Move objects from one view to another,
*	Select all objects of the same view in a single click,
*	Display or hide objects for each view,
*	Lock the objects of a view.

#### Adding objects to views  

An object can only belong to a single view. 

To create an object in another view, simply select the view in the View palette (prior to creating the object) by clicking its name (an Edit icon is displayed for the [Current view](#before-you-begin) and the name appears in bold text):

![](assets/en/FormEditor/addObject.png)

#### Moving objects between views

It's also possible to move one or more objects from one view to another. In the form, select the object(s) whose view you wish to change. The view list indicates, using a symbol, the view to which the selection belongs:

![](assets/en/FormEditor/symbol.png)


>The selection can contain several objects belonging to different views. 

Simply select the destination view, right-click, and select **Move to**:

![](assets/en/FormEditor/moveObject.png)

OR

Select the destination view of the selection and click **Move to** button at the bottom of the View palette:

![](assets/en/FormEditor/moveObject3.png)

The selection is then placed in the new view:

![](assets/en/FormEditor/objNewView.png)

You can also move an object to another view via the object's context menu. Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](assets/en/FormEditor/moveObject2.png)

>The [Current view](#before-you-begin) is shown in bold text.



#### Select all objects of a view  

You can select all objects belong to the same view in the current page of the form. This function is useful for applying global changes to a set of objects.  

To do this, right-click on the view in which you wish to select all the objects, click on **Select All**:

![](assets/en/FormEditor/selectAll.png)

You can also use the button at the bottom of the View palette:


![](assets/en/FormEditor/selectAll2.png)


#### Show or hide objects of a view  

You can show or hide objects belonging to a view at any time in the form's current page. This way you can focus on certain objects when editing the form, for example. 

By default, all views are shown, as indicated by the *Show/Hide* icon: 

![](assets/en/FormEditor/showHide.png) 

To hide a view, click the *Show/Hide* icon. It is then dimmed and objects of the corresponding view are no longer shown in the form:

![](assets/en/FormEditor/hidden.png) 


>The [Current view](#before-you-begin) cannot be hidden. 

To show a view that is hidden, simply select it or click on the *Show/Hide* icon for that view.



#### Locking objects of a view  

You can lock the objects of a view. This prevents them from being selected, changed, or deleted from the form. Once locked, an object cannot be selected by a click, a rectangle, or the **Select Similar Objects** command of the context menu. This function is useful for preventing handling errors.

By default, all views are unlocked, as indicated by the *Lock/Unlock* icon next to each view:

![](assets/en/FormEditor/lockUnlock.png) 

To lock the objects of a view, click the *Lock/Unlock* icon. The padlock is shut, which means that the view is now locked:

![](assets/en/FormEditor/locked.png) 



>The [Current view](#before-you-begin) cannot be locked.

To unlock a view that is locked, simply select it or click on the *Lock/Unlock* icon for that view.

### Zoom  

You can zoom in the current form. Switch to “Zoom” mode by clicking on the magnifying glass icon or clicking directly on the desired percentage bar (50%, 100%, 200%, 400% and 800%):

![](assets/en/FormEditor/zoom.png)

*	When you click on the magnifying glass, the cursor changes into one. You can then click in the form to increase the display or hold down Shift and click to reduce the display percentage. 
*	When you click on a percentage bar, the display is immediately modified.

In Zoom mode, all Form editor functions remain available(*).

(*) For technical reasons, it is not possible to select list box elements (headers, columns, footers) when the Form editor is in Zoom mode.





