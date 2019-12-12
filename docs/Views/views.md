---
id: views
title: Views
---


The 4D forms editor enables you to build complex forms by distributing form objects among separate views that can then be hidden or shown as needed. 

For example, you can distribute objects according to type (fields, variables, static objects, etc.). Any type of form object, including subforms and plug-in areas, can be included in views.

There is no limit on the number of views per form. You can create as many different views as you need. Additionally, each view can be displayed, hidden, and/or locked. 

View management is handled via the View Editor.

![](assets/en/Views/viewEditor.png)


## Accessing the View Editor

There are three ways to access the View Editor: 

*	**Toolbar**: Click on the Views icon in the Form Editor toolbar. (This icon appears gray when at least one object belongs to a view other than the default view.)

	|Without views|With views|
	|:---:|:---:|
	|![](assets/en/Views/icon.png "No views in use")|![](assets/en/Views/icon2.png "Views in use")|

* 	**Context menu**: Right-click anywhere in the Form Editor and select **Views > View List**

![](assets/en/Views/contextMenu.png)

*	**Form menu**: Click on the Form menu and select View List

![](assets/en/Views/formMenu.png)


## Before you begin
 
Here are a few important things to know before you start working with views:

*	**Context of use**: Views are a purely graphic tool which can only be used in the Form Editor; you cannot access views programmatically or in the Application environment.

*	**Views and pages**: Objects of the same view can belong to different form pages; only objects of the current page (and of page 0 if it is visible) can be displayed, regardless of the view configuration.

*	**Views and levels**: Views are independent of object levels; there is no display hierarchy among different views.

*	**Views and groups**: Only objects belonging to the current view can be grouped.



## Adding objects to views  

An object can only belong to a single view. Any object created in a form is placed in the current view. By default, the first view ("View 1") is selected; consequently, all objects are placed in the first view of the form. 

To create an object in another view, simply select the view in the View Editor (prior to creating the object) by clicking its name (an Edit icon is displayed for the view being edited):

![](assets/en/Views/addObject.png)

## Moving objects between views

It's also possible to move one or more objects from one view to another. In the form, select the object(s) whose view you wish to change. The view list indicates, using a symbol, the view to which the selection belongs:

![](assets/en/Views/symbol.png)


>The selection can contain several objects belonging to different views. 

Then, simply select the destination view of the selection and click **Move to**:

![](assets/en/Views/moveObject.png)

The selection is then placed in the new view:

![](assets/en/Views/objNewView.png)

You can also move an object to another view via the object's context menu. Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](assets/en/Views/moveObject2.png)



## Renaming views  

By default views are named as "View" + the view number, however you can change these names to improve readability and better suit your needs. 

>The first view is **always** the default view, indicated by (Default) after the name. The view's name can be changed (as shown below), however it remains the default view. 

To rename a view, you can use either **Ctrl+click** (Windows) or **Command+click** (Mac OS) on the view name, or double-click the view name (the selected view in this case). The name then becomes editable:


![](assets/en/Views/rename.png)





## Using views  

Once each object is in a view, you can use the View Editor to:

*	Select all objects of the same view in a single click,
*	Display or hide objects for each view,
*	Lock the objects of a view.



### Select all objects of a view  

You can select all objects belong to the same view in the current page of the form. This function is useful for applying global changes to a set of objects.  

To do this, right-click on the view in which you wish to select all the objects, click on **Select All**:

![](assets/en/Views/selectAll.png)



### Show or hide objects of a view  

You can show or hide objects belonging to a view at any time in the form's current page. This way you can focus on certain objects when editing the form, for example. 

By default, all views are shown, as indicated by the *Show/Hide* icon: 

![](assets/en/Views/showHide.png) 

To hide a view, click the *Show/Hide* icon. It is then dimmed and objects of the corresponding view are no longer shown in the form:

![](assets/en/Views/hidden.png) 


>The current view (the view selected in the view list) cannot be hidden. 

To show a view that is hidden, simply select it or click on the *Show/Hide* icon for that view.



### Locking objects of a view  

You can lock the objects of a view. This prevents them from being selected, changed, or deleted from the form. Once locked, an object cannot be selected by a click, a rectangle, or the **Select Similar Objects** command of the context menu. This function is useful for preventing handling errors.

By default, all views are unlocked, as indicated by the *Lock/Unlock* icon next to each view:

![](assets/en/Views/lockUnlock.png) 

To lock the objects of a view, click the *Lock/Unlock* icon. The padlock is shut, which means that the view is now locked:

![](assets/en/Views/locked.png) 



>The current view (the view selected in the view list) cannot be locked.

To unlock a view that is locked, simply select it or click on the *Lock/Unlock* icon for that view.


