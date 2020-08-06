---
id: formEditor
title: フォームエディター
---

## List Box Builder

You can create new entity selection list boxes quickly with the **List box builder**. The new list box can be used immediately or it can be edited via the Form Editor.

The List box builder lets you create and fill entity selection list boxes in a few simple operations.



### Using the List Box Builder


1.  In the Form Editor toolbar, click on the List box builder icon:

    ![](assets/en/FormEditor/listboxBuilderIcon.png)

    The List box builder is displayed:

    ![](assets/en/FormEditor/listboxBuilder.png)

2.  Select a table from the **Table** dropdown list:

    ![](assets/en/FormEditor/listboxBuilderTable.png)

3.  Select the fields for the list box in the **Fields** area:

    ![](assets/en/FormEditor/listboxBuilderFields.png)

    By default, all fields are selected. You can select or deselect fields individually or use **Ctrl+click** (Windows) or **Cmd+click** (macOS) to select or deselect them all at once.

    You can change the order of the fields by dragging them and dropping them.

4.  The expression to fill the list box's rows from the entity selection is prefilled:

    ![](assets/en/FormEditor/listboxBuilderExpression.png)

    This expression can be changed if necessary.

5.  Clicking on the **Copy** button will copy the expression for loading all records into memory:

    ![](assets/en/FormEditor/listboxBuilderCode.png)

6.  Click the the **Build widget** button to create the list box.

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
> You can set which shields to display by default on the Forms Page of the application Preferences.

### Shield descriptions

Here is a description of each type of shield:

| Icon                                         | 名               | Is displayed ...                                                                                                                     |
| -------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![](assets/en/FormEditor/objectMethod.png)   | Object Method   | For objects with an associated object method                                                                                         |
| ![](assets/en/FormEditor/standardAction.png) | Standard Action | For objects with an associated standard action                                                                                       |
| ![](assets/en/FormEditor/resizing.png)       | サイズ変更           | For objects with at least one resizing property, indicates the combination of current properties                                     |
| ![](assets/en/FormEditor/entryOrder.png)     | Entry Order     | For enterable objects, indicates the number of entry order                                                                           |
| ![](assets/en/FormEditor/viewNumber.png)     | Current View    | For all objects in the current view                                                                                                  |
| ![](assets/en/FormEditor/filter.png)         | Filter          | For enterable objects with an associated entry filter                                                                                |
| ![](assets/en/FormEditor/helpTip.png)        | Help Tip        | For objects with an associated tip                                                                                                   |
| ![](assets/en/FormEditor/localized.png)      | Localized       | For objects whose label comes from a reference (label beginning with “:”). The reference can be of the resource (STR#) or XLIFF type |
| ![](assets/en/FormEditor/noShields.png)      | No Shields      | No shields appear                                                                                                                    |

## Views

The 4D Form Editor enables you to build complex forms by distributing form objects among separate views that can then be hidden or shown as needed.

For example, you can distribute objects according to type (fields, variables, static objects, etc.). Any type of form object, including subforms and plug-in areas, can be included in views.

There is no limit on the number of views per form. You can create as many different views as you need. Additionally, each view can be displayed, hidden, and/or locked.




View management is handled via the View palette.

![](assets/en/FormEditor/viewEditor.png)


### Accessing the View palette

There are three ways to access the View palette:

*   **Toolbar**: Click on the Views icon in the Form Editor toolbar. (This icon appears gray when at least one object belongs to a view other than the default view.)

    |                  Default view only                   |               With additional views                |
    |:----------------------------------------------------:|:--------------------------------------------------:|
    | ![](assets/en/FormEditor/icon.png "No views in use") | ![](assets/en/FormEditor/icon2.png "Views in use") |

*   **Context menu** (form or object): Right-click anywhere in the Form Editor or an object, and select **Current View**

    ![](assets/en/FormEditor/contextMenu.png)

The current view is indicated with a check mark (*e.g.*, "Work Address" in the image above)


*   **Form menu**: Click on the **Form** menu and select **View List**

![](assets/en/FormEditor/formMenu.png)


### Before you begin

Here are a few important things to know before you start working with views:

*   **Context of use**: Views are a purely graphic tool which can only be used in the Form Editor; you cannot access views programmatically or in the Application environment.

*   **Views and pages**: Objects of the same view can belong to different form pages; only objects of the current page (and of page 0 if it is visible) can be displayed, regardless of the view configuration.

*   **Views and levels**: Views are independent of object levels; there is no display hierarchy among different views.

*   **Views and groups**: Only objects belonging to the current view can be grouped.

*   **Current and Default** views: The Default view is the first view of a form and cannot be deleted; the Current view is the view that is being edited and the name is displayed in bold text.



### Managing views

#### Creating views

Any object created in a form is placed in the first view ("View 1") of the form. The first view is **always** the default view, indicated by (Default) after the name. The view's name can be changed (see [Renaming views](#renaming-views)), however it remains the default view.


![](assets/en/FormEditor/createView.png)

There are two ways to add additional views:

*   Click on the **Add a new view** button at the bottom of the View palette:

![](assets/en/FormEditor/addView.png)

*   Right-click on an existing view and select **Insert view**:

![](assets/en/FormEditor/addView2.png)

There is no limitation on the number of views.

#### Renaming views

By default views are named as "View" + the view number, however you can change these names to improve readability and better suit your needs.

To rename a view, you can use either:

*   Double-click directly on the view name (the selected view in this case). The name then becomes editable:

    ![](assets/en/FormEditor/rename.png)

*   Right-click on the view name. The name then becomes editable:

    ![](assets/en/FormEditor/rename2.png)

#### Reordering views

You can change the display order of views by dragging/dropping them within the View palette.

Note that the Default view does not change:

![](assets/en/FormEditor/reorderView.png)


#### Deleting views

To rename a view, you can use either:

*   Click on the **Delete the selected view** button at the bottom of the View palette:

    ![](assets/en/FormEditor/deleteView.png)


*   Right-click on the view name, and select **Delete View**:

    ![](assets/en/FormEditor/deleteView2.png)
> If a view is deleted, any objects in it are automatically moved to the Default view.




### Using views

Once views are created, you can use the View palette to:

*   Add object to views,
*   Move objects from one view to another,
*   Select all objects of the same view in a single click,
*   Display or hide objects for each view,
*   Lock the objects of a view.

#### Adding objects to views

An object can only belong to a single view.

To create an object in another view, simply select the view in the View palette (prior to creating the object) by clicking its name (an Edit icon is displayed for the [Current view](#before-you-begin) and the name appears in bold text):

![](assets/en/FormEditor/addObject.png)

#### Moving objects between views

It's also possible to move one or more objects from one view to another. In the form, select the object(s) whose view you wish to change. The view list indicates, using a symbol, the view to which the selection belongs:

![](assets/en/FormEditor/symbol.png)
> The selection can contain several objects belonging to different views.

Simply select the destination view, right-click, and select **Move to**:

![](assets/en/FormEditor/moveObject.png)

OR

Select the destination view of the selection and click **Move to** button at the bottom of the View palette:

![](assets/en/FormEditor/moveObject3.png)

The selection is then placed in the new view:

![](assets/en/FormEditor/objNewView.png)

You can also move an object to another view via the object's context menu. Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](assets/en/FormEditor/moveObject2.png)
> The [Current view](#before-you-begin) is shown in bold text.



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
> The [Current view](#before-you-begin) cannot be hidden.

To show a view that is hidden, simply select it or click on the *Show/Hide* icon for that view.



#### Locking objects of a view

You can lock the objects of a view. This prevents them from being selected, changed, or deleted from the form. Once locked, an object cannot be selected by a click, a rectangle, or the **Select Similar Objects** command of the context menu. This function is useful for preventing handling errors.

By default, all views are unlocked, as indicated by the *Lock/Unlock* icon next to each view:

![](assets/en/FormEditor/lockUnlock.png)

To lock the objects of a view, click the *Lock/Unlock* icon. The padlock is shut, which means that the view is now locked:

![](assets/en/FormEditor/locked.png)
> The [Current view](#before-you-begin) cannot be locked.

To unlock a view that is locked, simply select it or click on the *Lock/Unlock* icon for that view.




