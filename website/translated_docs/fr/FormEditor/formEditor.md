---
id: formEditor
title: Éditeur de formulaire
---


## Interface

The Form editor interface displays each JSON form in its own window, which has both an object and tool bar. You can have several forms open at the same time. The rulers on the side and bottom help you position objects in the form. You can change measurement units so that it displays inches, centimeters, or pixels.

### Showing/hiding Form elements

You can show or hide most interface elements in the Form editor. This feature allows you to show only the elements that you need to create or view in a form, or only the tools that you want to use. This option is always applied to the Form editor’s current window. For example, it is useful to show the output control lines when you are working on an output form.

To show or hide an element in the Form editor:

1.  Choose **Display** from the Form menu. OR Use the **Display** command in the context menu that appears in the Form editor’s window (right-click in the window without clicking on an object). A hierarchical submenu appears listing all the elements that you can show or hide:<p>![](assets/en/FormEditor/showHideElements.png)<p>A check mark placed next to the element indicates that it will be shown. To hide an element, select the element so that the check mark disappears.

2.  Select the element that you want to show or hide.<p>Here is a description of the commands in this menu:
    *   **Inherited form**: Shows or hides inherited form objects (if there is an inherited form) on the current page of the form. For more information, refer to Using inherited forms.
    *   **Page 0**: Shows or hides the objects from page 0 on the form’s current page. This option allows you to distinguish between the objects on the form’s current page and those on page 0. For more information about pages in forms, refer to the Creating a multi-page form section.
    *   **Paper**: Shows or hides the borders of the printing page, which are shown as gray lines. This option may have no apparent effect when the Limits (see below) option is selected. If the size of the form is smaller than the printing page, the page’s borders are shown outside of the form’s viewing area and therefore do not appear. Refer to Printing a form.
    *   **Rulers**: Shows or hides the rulers in the Form editor’s window. Markers: Shows or hides the output control lines and associated markers that show the limits of the form’s different areas.
    *   **Marker Labels**: Shows or hides the marker labels, available only when the output control lines are displayed. For more information, refer to the Moving output control lines paragraph.
    *   **Limits**: Shows or hides the form’s limits. When this option is selected, the form is displayed in the Form editor as it appears in Application mode. This way you can adjust your form without having to switch to the Application mode in order to see the result.
> The **Size Based on**, **Hor margin** and **Vert margin** settings of the form properties affect the form’s limits. When using these settings, the limits are based on the objects in the form. When you modify the size of an object that is located next to the form’s border, it is modified to reflect that change. For more information on form properties, refer to the [Form properties](jsonReference.html) section.


### Using the toolbar

The toolbar of the Form editor offers a set of tools to manipulate and modify the form. Each window has its own toolbar.

![](assets/en/FormEditor/toolbar.png)

The toolbar contains the following elements:

| Icône                                         | Nom                                                  | Description                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/execute.png)         | Execute the form                                     | Used to test the execution of the form. When you click on this button, 4D opens a new window and displays the form in its context (list of records for a list form and current record page for a detail form). The form is executed in the main process.                                                                     |
| ![](assets/en/FormEditor/selection.png)       | [Selection tool](#selecting-objects)                 | Allows selecting, moving and resizing form objects.<p>**Note**: When an object of the Text or Group Box type is selected, pressing the **Enter** key lets you switch to editing mode.                                                                                                                 |
| ![](assets/en/FormEditor/zOrder.png)          | [Entry order](#data-entry-order)                     | Switches to “Entry order” mode, where it is possible to view and change the current entry order of the form. Note that shields allow viewing the current entry order, while still working in the form.                                                                                                                       |
| ![](assets/en/FormEditor/moving.png)          | [Moving](#moving-objects)                            | Switches to “Move” mode, where it is possible to reach any part of the form quickly by using drag and drop in the window. The cursor takes the shape of a hand. This navigation mode is particularly useful when zooming in the form.                                                                                        |
| ![](assets/en/FormEditor/zoom.png)            | [Zoom](#zoom)                                        | Allows modifying the form display percentage (100% by default). You can switch to “Zoom” mode by clicking on the magnifying glass or by clicking directly on the desired bar. This feature is detailed in previous section.                                                                                                  |
| ![](assets/en/FormEditor/alignment.png)       | [Alignment](#aligning-objects)                       | This button is linked to a menu that allows aligning objects in the form. It is enabled (or not) depending on the objects selected.<p>Available only with CSS Preview None                                                                                                                            |
| ![](assets/en/FormEditor/distribution.png)    | [Distribution](#distributing-objects)                | This button is linked to a menu that allows distributing objects in the form. It is enabled (or not) depending on the objects selected.<p>Available only with CSS Preview None                                                                                                                        |
| ![](assets/en/FormEditor/level.png)           | [Level](#layering-objects)                           | This button is linked to a menu that allows changing the level of objects in the form. It is enabled (or not) depending on the objects selected.                                                                                                                                                                             |
| ![](assets/en/FormEditor/group.png)           | [Group/Ungroup](#grouping-objects)                   | This button is linked to a menu that allows grouping and ungrouping selections of objects in the form. It is enabled (or not) depending on the objects selected.                                                                                                                                                             |
| ![](assets/en/FormEditor/displyAndPage.png)   | [Display and page management](forms.html#form-pages) | This area allows passing from one form page to another and adding pages. To navigate among form pages, click the arrow buttons, or click the central area and choose the page to display from the menu that appears. If you click the right arrow button while the last form page is displayed, 4D allows you to add a page. |
| ![](assets/en/FormEditor/cssPreviewicon.png)  | [CSS Preview](#css-preview)                          | This button is used to select the CSS Mode to use.                                                                                                                                                                                                                                                                           |
| ![](assets/en/FormEditor/views.png)           | [Gestion des vues](#views)                           | This button displays or hides the views palette. This function is detailed in Using object views .                                                                                                                                                                                                                           |
| ![](assets/en/FormEditor/shields2.png)        | [Displaying shields](#shields)                       | Each click on this button causes the successive display of each type of form shield. The button is also linked to a menu that allows directly selecting the type of shield to display.                                                                                                                                       |
| ![](assets/en/FormEditor/library.png)         | [Preconfigured object library](objectLibrary.html)   | This button displays the preconfigured object library that provides numerous objects with certain properties that have been predefined.                                                                                                                                                                                      |
| ![](assets/en/FormEditor/listBoxBuilder1.png) | [Création de list box](#list-box-builder)            | This button creates new entity selection list boxes.                                                                                                                                                                                                                                                                         |

### Using the object bar

The object bar contains all the active and inactive objects that can be used in 4D forms. Some objects are grouped together by themes. Each theme includes several alternatives that you can choose between. When the object bar has the focus, you can select the buttons using the keys of the keyboard. The following table describes the object groups available and their associated shortcut key.

| Bouton                                  | Group                                                                                                                                                                                                                                                                    | Key |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |:---:|
| ![](assets/en/FormEditor/text.png)      | [Text](../FormObjects/text.md) / [Group Box](../FormObjects/groupBox.md)                                                                                                                                                                                                 |  T  |
| ![](assets/en/FormEditor/input.png)     | [Input](../FormObjects/input_overview.md)                                                                                                                                                                                                                                |  F  |
| ![](assets/en/FormEditor/listbox.png)   | [Hierarchical List](../FormObjects/list_overview.md) / [List Box](../FormObjects/listbox_overview.md)                                                                                                                                                                    |  L  |
| ![](assets/en/FormEditor/combo.png)     | [Combo Box](../FormObjects/comboBox_overview.md) / [Drop-down List](../FormObjects/dropdownList_overview.md) / [Picture Pop-up Menu](../FormObjects/picturePopupMenu_overview.md)                                                                                        |  P  |
| ![](assets/en/FormEditor/button.png)    | [Button](../FormObjects/button_overview.md) / [Picture Button](../FormObjects/pictureButton_overview.md) / [Button Grid](../FormObjects/buttonGrid_overview.md)                                                                                                          |  B  |
| ![](assets/en/FormEditor/radio.png)     | [Bouton radio](../FormObjects/radio_overview.md)                                                                                                                                                                                                                         |  R  |
| ![](assets/en/FormEditor/checkbox.png)  | [Case à cocher](../FormObjects/checkbox_overview.md)                                                                                                                                                                                                                     |  C  |
| ![](assets/en/FormEditor/indicator.png) | [Progress Indicator](../FormObjects/progressIndicator.md) / [Ruler](../FormObjects/ruler.md) / [Stepper](../FormObjects/stepper.md) / [Spinner](../FormObjects/spinner.md)                                                                                               |  I  |
| ![](assets/en/FormEditor/rectangle.png) | [Rectangle](../FormObjects/shapesOverview.html#rectangle) / [Line](../FormObjects/shapesOverview.html#line) / [Oval](../FormObjects/shapesOverview.html#oval)                                                                                                            |  S  |
| ![](assets/en/FormEditor/splitter.png)  | [Splitter](../en/FormObjects/splitters.md) / [Tab Control](../FormObjects/tabControl.md)                                                                                                                                                                                 |  D  |
| ![](assets/en/FormEditor/plugin.png)    | [Plug-in Area](../FormObjects/pluginArea_overview.md) / [Subform](../FormObjects/subform_overview.md) / [Web Area](../FormObjects/webArea_overview.md) / [4D Write Pro](../FormObjects/writeProArea_overview.md) / [4D View Pro](../FormObjects/viewProArea_overview.md) |  X  |

To draw an object type, select the corresponding button and then trace the object in the form. After creating an object, you can modify its type using the Property List. Hold down the **Shift** key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

The current variant of the theme is the object that will be inserted in the form. When you click the right side of a button, you access the variant menu:

![](assets/en/FormEditor/objectBar.png)

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. To cancel a continual selection, click on another object or tool.

### Using the Property List

Both forms and form objects have properties that control access to the form, the appearance of the form, and the behavior of the form when it is used. Form properties include, for example, the form’s name, its menu bar, and its size. Object Properties include, for example, an object’s name, its dimensions, its background color, and its font.

You can display and modify form and object properties using the Property List. It displays either form or objects properties depending on what you select in the editor window.

To display/hide the Property List, choose **Property List** from the **Form** menu or from the context menu of the Form editor. You can also display it by double-clicking in an empty area of the form.

#### Navigation shortcuts

You can navigate in the Property List using the following shortcuts:

*   **Arrow key**s ↑ ↓: Used to go from one cell to another.
*   **Arrow keys** ← →: Used to expand/collapse themes or enter edit mode.
*   **PgUp** and **PgDn**: Used to scroll the Property List contents.
*   **Home** and **End**: Used to scroll the Property List so that the first or last cell is displayed.
*   **Ctrl+click** (Windows) or **Command+click** (Mac OS) on an event: Used to select/deselect every event in the list, according to the initial state of the event on which you clicked.
*   **Ctrl+click** (Windows) or **Command+click** (Mac OS) on a theme label: Used to Collapse/Expand every theme in the list.



## Manipulating Form Objects

### Adding objects

You can add objects to forms in several ways:

*   By drawing the object directly in the form after selecting its type in the object bar (see [Using the object bar](#using-the-object-bar))
*   By dragging and dropping the object from the object bar
*   By drag-and-drop or copy-paste operations on an object selected from the preconfigured [object library](objectLibrary.md),
*   By dragging and dropping an object from another form,
*   By dragging and dropping an object from the Explorer (fields) or from other editors in the Design environment (lists, pictures, etc.)

Once the object is placed in the form, you can modify its characteristics using the Form editor.

You can work with two types of objects in your forms:

*   **Static objects** (lines, frames, background pictures, etc.): These objects are generally used for setting the appearance of the form and its labels as well as for the graphic interface. They are available in the object bar of the Form editor. You can also set their graphic attributes (size, color, font, etc.) and their resizing properties using the Property List. A la différence des objets actifs, les objets statiques ne sont pas associés à des variables. A noter qu'il est possible d'insérer des éléments dynamiques dans les objets statiques.

*   **Active objects**: These objects perform tasks or functions in the interface and can take many forms: fields, buttons, scrollable lists, etc. Each active object is associated with either a field or a variable.

### Selecting objects

Before you can perform any operation on an object (such as changing a line width or font), you need to select the object that you want to modify.

To select an object using the toolbar:

1.  Click the Arrow tool  in the toolbar.<p>![](assets/en/FormEditor/selection.png)<p> When you move the pointer into the form area, it becomes a standard arrow-shaped pointer.
2.  Click the object you want to select. Resizing handles identify the selected object.<p>![](assets/en/FormEditor/selectResize.png)

To select an object using the Property List:

1.  Choose the object’s name from the Object List drop-down list located at the top of the Property List.<p>Using these two methods, you can select an object that is hidden by other objects or located outside the visible area of the current window. To deselect an object, click outside the object’s boundary or **Shift+click** the object.
> It is also possible to select objects by double-clicking them in the result window of ""Find in design" operation.

### Selecting multiple objects

You may want to perform the same operation on more than one form object — for example, to move the objects, align them, or change their appearance. 4D lets you select several objects at the same time. There are several ways to select multiple objects:

*   Choose **Select All** from the Edit menu to select all the objects.
*   Right-click on the object and choose the **Select Similar Objects** command in the context menu.
*   Hold down the **Shift** key and click the objects you want to select.
*   Start at a location outside the group of objects you want to select and drag a marquee (sometimes called a selection rectangle) around the objects. When you release the mouse button, if any part of an object lies within or touches the boundaries of the selection rectangle, that object is selected.
*   Hold down the **Alt** key (Windows) or the **Option** key (macOS) and draw a marquee. Any object that is completely enclosed by the marquee is selected.

The figure below shows a marquee being drawn to select two objects:

![](assets/en/FormEditor/selectMultiple.png)

To deselect an object that is part of a set of selected objects, hold down the **Shift** key and click the object. The other objects remain selected. To deselect all the selected objects, click outside the boundaries of all the objects.


### Duplicating objects

You can duplicate any object in the form, including active objects. Copies of active objects retain all the properties of the original, including name, type, standard action, display format, and object method.

You can duplicate an object directly using the Duplicate tool in the Tools palette or use the Duplicate Many dialog box to duplicate an object more than once. Also, using this dialog box, you can set the distance between two copies.

To duplicate one or more objects:

1. Select the object or objects that you want to duplicate.
2. Choose **Duplicate** from the **Edit** menu. 4D creates a copy of each selected object and places the copy in front and slightly to the side of the original.
3.  Move the copy (or copies) to the desired location. If you choose the Duplicate menu item again, 4D creates another copy of each object and moves it the exact same distance and direction from the first copy. If you need to distribute copies of the object along a line, you should use the following procedure. Duplicate the original object, move the copy to another location in the form, and then duplicate the copy. The second copy is automatically placed in the same relation to the first copy as the first copy was in relation to the original object. Subsequent copies are also placed in the same relation to their originals. The figure below shows how this relative placement of copies works:

![](assets/en/FormEditor/duplicateObjects.png)


#### Duplicate Many

The "Duplicate Many" dialog box appears when you select one or more object(s) and choose the **Duplicate Many...** command from the **Object** menu.

![](assets/en/FormEditor/duplcateMany.png)

*   In the upper area, enter the number of columns and lines (rows) of objects you want to get.<p>For example, if you want three columns and two lines of objects, enter 3 in the Column(s) area and 2 in the Line(s) area. If you want three horizontal new copies of an object, enter 4 in the Column(s) area and leave the default value, 1, in the Line(s) area.

*   For lines and columns, define the offset that you wish to leave between each copy.<p>The value must be expressed in points. It will be applied to each copy, or copies, in relation to the original object.<p>For example, if you want to leave a vertical offset of 20 points between each object and the height of the source object is 50 points, enter 70 in the column’s “Offset” area.

*   If you wish to create a matrix of variables, select the **Number Variables** option and select the direction in which the variables are to be numbered, either by line(s) or by column(s). This option is active only when the selected object is a variable. For more information on this option, refer to **Duplicating on a matrix** in the *Design Reference*.

### Moving objects

You can move any graphic or active object in the form including fields and objects created with a template. When moving an object, you have the following options:

*   Move the object by dragging it,
*   Move the object one pixel at a time using the arrow keys,
*   Move the object by steps using the arrow keys (20-pixel steps by default),

As you begin dragging the selected object, its handles disappear. 4D displays markers that show the location of the object’s boundaries in the rulers so that you can place the object exactly where you want it. Be careful not to drag a handle. Dragging a handle resizes the object. You can press the **Shift** key to carry out the move with a constraint.

When the [Magnetic Grid](#using-the-magnetic-grid) is on, objects are moved in stages indicating noticeable locations.

To move an object one pixel at a time:

*   Select the object or objects and use the arrow keys on the keyboard to move the object. Each time you press an arrow key, the object moves one pixel in the direction of the arrow.

To move an object by steps:

*   Select the object or objects you want to move  and hold down the **Shift** key and use the arrow keys to move the object by steps. By default, steps are 20 pixels at a time. You can change this value on the Forms Page of the Preferences.


### Grouping objects

4D lets you group objects so that you can select, move, and modify the group as a single object. Objects that are grouped retain their position in relation to each other. You would typically group a field and its label, an invisible button and its icon, and so forth.

When you resize a group, all the objects in the group are resized proportionally (except text areas, which are resized in steps according to their font sizes.

You can ungroup a group of objects to treat them as individual objects again.

An active object that has been grouped must be ungrouped before you can access its properties or method. However, it is possible to select an object belonging to a group without degrouping the set: to do this, **Ctrl+click** (Windows) or **Command+click** (macOS) on the object (the group must be selected beforehand).

Grouping only affects objects in the Form editor. When the form is executed, all grouped objects act as if they were ungrouped.
> It is not possible to group objects belonging to different views and only those objects belonging to the current view can be grouped (see [Views](#views) ).

To group objects:

1.  Select the objects that you want to group.
2.  Choose **Group** from the Object menu.<p>OU<p> Click the Group button  in the toolbar of the Form editor:<p>![](assets/en/FormEditor/group.png)<p> 4D marks the boundary of the newly grouped objects with handles. No handles mark the boundary of any of the individual objects within the group. Now, when you modify the grouped object, you change all the objects that make up the group.

To ungroup an object:

1.  Select the grouped object that you want to ungroup.
2.  Choose **Ungroup** from the **Object** menu.<p>OU<p>Click the **Ungroup** button (variant of the **Group** button) in the toolbar of the Form editor.<p>If **Ungroup** is dimmed, this means that the selected object is already separated into its simplest form.<p>4D marks the boundaries of the individual objects with handles.


### Aligning objects

You can align objects with each other or using an invisible grid on the form.

*   When you align one object to another, you can align it to the top, bottom, side, or horizontal or vertical center of the other object. You can directly align a selection of objects using the alignment tools or apply more advanced alignment settings using the Alignment Assistant. The latter option allows you, for example, to set the object that will be used as the position reference and to preview the alignment in the form before applying it.
*   When you use the invisible grid, each object can be aligned manually with others based on “noticeable” positions which are depicted with dotted lines that appear when the object being moved approaches other objects.

#### Using the instantaneous alignment tools

The alignment tools in the toolbar and in the Align submenu of the Object menu allow you to quickly align selected objects.

![](assets/en/FormEditor/alignmentMenu.png)

When 4D aligns objects, it leaves one selected object in place and aligns the remaining objects to that one. This object is the “anchor.” It uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor. The figure below shows objects with no alignment, "aligned left", "aligned horizontally by centers", and "aligned right":

![](assets/en/FormEditor/alignmentTools.png)

#### Using the alignment assistant

The Alignment Assistant allows you to perform any type of alignment and/or distribution of objects.

![](assets/en/FormEditor/alignmentAssistant.png)


To display this dialog box, select the objects you want to align then choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.

*   In the “Left/Right Alignment” and/or “Top/Bottom Alignment” areas, click the icon that corresponds to the alignment you want to perform.<p>The example area displays the results of your selection.

*   To perform an alignment that uses the standard anchor scheme, click **Preview** or **Apply**.<p>In this case 4D uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor.<p>OR:<p>To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list. In this case, the position of the reference object will not be altered.

You can preview the results of the alignment by clicking the **Preview** button. The objects are then aligned in the Form editor but since the dialog box does not go away, you can still cancel or apply the alignment.
> This dialog box allows you to align and distribute objects in one operation. For more information on how to distribute objects, refer to [Distributing objects](#distributing-objects).

#### Using the Magnetic Grid

The Form editor provides a virtual magnetic grid that can help you place and align objects in a form. Magnetic alignment of objects is based on their position in relation to each other. The magnetic grid can only be used when at least two objects are present in the form.

This works as follows: When you move an object in the form, 4D indicates possible locations for this object based on noticeable alignments with other form objects. A noticeable alignment is established each time that:

*   Horizontally, the edges or centers of two objects coincide,
*   Vertically, the edges of two objects coincide.

When this happens, 4D places the object at the location and displays a red line indicating the noticeable alignment taken into account:

![](assets/en/FormEditor/magneticGrid1.png)

Concerning the distribution of objects, 4D proposes a distance based on interface standards. Like with magnetic alignment, red lines indicate the noticeable differences once they are reached.

![](assets/en/FormEditor/magneticGrid2.png)

This operation applies to all types of form objects. The Magnetic Grid can be enabled or disabled at any time using the **Magnetic Grid** command in the **Form** menu or in the editor context menu. It is also possible to set the activation of this feature by default on the **Preferences** > **Forms** page (**Activate auto alignment by default** option). You can manually activate or deactivate the magnetic grid when an object is selected by pressing the **Ctrl** (Windows) or **Control** (macOS) key .
> The Magnetic Grid also influences the manual resizing of objects.

### Distributing objects

You can distribute objects so that they are set out with an equal amount of space between them. To do this, you can distribute objects using either the Distribute tools in the Tools palette or the Alignment Assistant. The latter allows you to align and distribute objects in one operation.
> When the [Magnetic Grid](#using-the-magnetic-grid) is on, a visual guide is also provided for distribution when an object is moved manually.

To distribute objects with equal spacing:

1.  Select three or more objects and click the desired Distribute tool.

2.  In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.<p>![](assets/en/FormEditor/distributionTool.png)<p>OU<p>Select a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor.<p>4D distributes the objects accordingly. Objects are distributed using the distance to their centers and the largest distance between two consecutive objects is used as a reference.

To distribute objects using the Align and Distribute dialog box:

1.  Select the objects you want to distribute.

2.  Choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.<p>The following dialog box appears:![](assets/en/FormEditor/alignmentAssistant.png)

3.  In the Left/Right Alignment and/or Top/Bottom Alignment areas, click the standard distribution icon: ![](assets/en/FormEditor/horizontalDistribution.png)<p>(Standard horizontal distribution icon)<p>The example area displays the results of your selection.

4.  To perform a distribution that uses the standard scheme, click **Preview** or *Apply*.<p>In this case 4D will perform a standard distribution, so that the objects are set out with an equal amount of space between them.<p>OR:<p>To execute a specific distribution, select the **Distribute** option (for example if you want to distribute the objects based on the distance to their right side). This option acts like a switch. If the Distribute check box is selected, the icons located below it perform a different function:

    *   Horizontally, the icons correspond to the following distributions: evenly with respect to left sides, centers (hor.) and right sides of the selected objects.
    *   Vertically, the icons correspond to the following distributions: evenly with respect to top edges, centers (vert.) and bottom edges of the selected objects.

    You can preview the actual result of your settings by clicking on the **Preview** button: the operation is carried out in the Form editor but the dialog box stays in the foreground. You can then **Cancel** or **Apply** the modifications.
> This dialog box lets you combine object alignment and distribution. For more information about alignment, refer to [Aligning objects](#aligning-objects).


### Layering objects

You will sometimes have to rearrange objects that are obstructing your view of other objects in the form. For example, you may have a graphic that you want to appear behind the fields in a form. 4D provides four menu items, **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** that let you “layer” objects on the form. These layers also determine the default entry order (see Modifying data entry order). The figure below shows objects in front of and behind other objects:

![](assets/en/FormEditor/layering.png)

To move an object to another level, select it and choose:

*   One of the **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** commands of the Object menu,
*   One of the commands in the **Level>** submenu in the context menu of the editor,
*   One of the commands associated with the level management button of the toolbar.

![](assets/en/FormEditor/level2.png)
> When several objects are superimposed, the **Ctrl+click** / **Command+click** shortcut can be used to select each object successively by going down a layer with each click.

When ordering different levels, 4D always goes from the background to the foreground. As a result, the previous level moves the selection of objects one level towards the background. The next level moves the selection one level towards the foreground of the form.

### Data entry order

The data entry order is the order in which fields, subforms, and other active objects are selected as you hit the **Tab** or the **Carriage return** key in an input form. It is possible to move through the form in the opposite direction (reverse data entry order) by pressing the **Shift+Tab** or **Shift+Carriage** return keys.

> You can change the entry order at runtime using the `FORM SET ENTRY ORDER` and `FORM GET ENTRY ORDER` commands.

Every object that supports the focusable property is included in the data entry order by default.

Setting the entry order for a JSON form is done with the [`entryOrder`](properties_JSONref.md) property.

If you don’t specify a custom entry order, by default 4D uses the layering of the objects to determine the entry order in the direction “background towards foreground.” The standard entry order thus corresponds to the order in which the objects were created in the form.

In some forms, a custom data entry order is needed. Below, for example, additional fields related to the address have been added after the creation of the form. The resulting standard entry order thus becomes illogical and forces the user to enter the information in an awkward manner:

![](assets/en/FormEditor/entryOrder1.png)

In cases such as this, a custom data entry order allows you to enter the information in a more logical order:

![](assets/en/FormEditor/entryOrder2.png)

#### Viewing and changing the data entry order

You can view the current entry order either using the “Entry order” shields, or by using the “Entry order” mode. However, you can only modify the entry order using the “Entry order” mode.

This paragraph describes viewing and modifying the entry order using the “Entry order” mode. For more information about viewing the entry order using shields, refer to [Using shields](#using-shields).

To view or change the entry order:

1.  Choose **Entry Order** from the **Form** menu or click on the Entry Order button in the toolbar of the window:<p>![](assets/en/FormEditor/zOrder.png)<p>The pointer turns into an entry order pointer and 4D draws a line in the form showing the order in which it selects objects during data entry.<p>Viewing and changing the data entry order are the only actions you can perform until you click any tool in the Tools palette.

2.  To change the data entry order, position the pointer on an object in the form and, while holding down the mouse button, drag the pointer to the object you want next in the data entry order.<p>![](assets/en/FormEditor/entryOrder3.png)<p>4D will adjust the entry order accordingly.

3.  Repeat step 2 as many times as necessary to set the data entry order you want.

4.  When you are satisfied with the data entry order, click any unselected tool in the toolbar or choose **Entry Order** from the **Form** menu.<p>4D returns to normal operation of the Form editor.

> Only the entry order of the current page of the form is displayed. If the form contains enterable objects on page 0 or coming from an inherited form, the default entry order is as follows: Objects from page 0 of the inherited form > Objects from page 1 of the inherited form > Objects from page 0 of the open form > Objects from the current page of the open form.


#### Using a data entry group

While you are changing the data entry order, you can select a group of objects in a form so that the standard data entry order applies to the objects within the group. This allows you to easily set the data entry order on forms in which fields are separated into groups or columns.

To create a data entry group:

1.  Choose **Entry Order** from the *Form* menu or click the  button in the toolbar.
2.  Draw a marquee around the objects you want to group for data entry.

When you release the mouse button, the objects enclosed or touched by the rectangle follow the standard data entry order. The data entry order for the remaining objects adjusts as necessary.

#### Excluding an object from the entry order

By default, all objects that support the focusable property are included in the entry order. To exclude an object from the entry order:

1. Select the Entry order mode, then

2.  **shift-click** on the object

3.  **right-click** on the object and select **Remove from entry order** option from the context menu



## CSS Preview

The Form editor allows you to view your forms with or without applied CSS values.

When [style sheets](createStylesheet.md) have been defined, forms (including inherited forms and subforms) are opened in the CSS Preview mode for your operating system by default.


### Selecting CSS Preview Mode

The Form editor toolbar provides a CSS button for viewing styled objects:

![](assets/en/FormEditor/cssToolbar.png)

Select one of the following preview modes from the menu:

| Toolbar Icon                         | CSS Preview Mode | Description                                                                                                   |
| ------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/cssNo.png)  | Aucun            | No CSS values are applied in the form and no CSS values or icons displayed in the Property List.              |
| ![](assets/en/FormEditor/cssWin.png) | Sous Windows     | CSS values for Windows platform are applied in the form. CSS values and icons displayed in the Property List. |
| ![](assets/en/FormEditor/cssMac.png) | macOS            | CSS values for macOS platform are applied in the form. CSS values and icons displayed in the Property List.   |
> If a font size too large for an object is defined in a style sheet or JSON, the object will automatically be rendered to accommodate the font, however the size of the object will not be changed.

The CSS preview mode reflects the priority order applied to style sheets vs JSON attributes as defined in the [JSON vs Style Sheet](stylesheets.html#json-vs-style-sheet) section.

Once a CSS preview mode is selected, objects are automatically displayed with the styles defined in a style sheet (if any).
> When copying or duplicating objects, only the CSS references (if any) and the JSON values are copied.


### CSS support in the Property List

In CSS Preview mode, if the value of an attribute has been defined in a style sheet, the attribute's name will appear with a CSS icon displayed next to it in the Property List. For example, the attribute values defined in this style sheet:

```4d
.myButton {
font-family: comic sans;
font-size: 14;
stroke: #800080;
}
```

are displayed with a CSS icon in the Property List:

![](assets/en/FormEditor/cssPpropList.png)

An attribute value defined in a style sheet can be overridden in the JSON form description (except if the CSS includes the `!important` declaration, see below). In this case, the Property List displays the JSON form value in **bold**. You can reset the value to its style sheet definition with the **Ctrl + click** (Windows) or **Command + click** (macOs) shortcuts.
> If an attribute has been defined with the `!important` declaration for a group, an object within a group, or any object within a selection of multiple objects, that attribute value is locked and cannot be changed in the Property List.

#### Property List CSS Icons

| Icône                                      | Description                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](assets/en/FormEditor/cssIcon.png)      | Indicates that an attribute value has been defined in a style sheet                                                                                                |
| ![](assets/en/FormEditor/cssImportant.png) | Indicates that an attribute value has been defined in a style sheet with the `!important` declaration                                                              |
| ![](assets/en/FormEditor/cssIconMixed.png) | Displayed when an attribute value defined in a style sheet for at least one item in a group or a selection of multiple objects is different from the other objects |



## Création de list box

Vous pouvez créer rapidement de nouvelles list box de type sélection d'entités avec le **générateur de list box**. La nouvelle list box peut être utilisée immédiatement ou elle peut être modifiée via l'éditeur de formulaires.

Le générateur de list box vous permet de créer et de remplir des list box de type sélection d'entités en quelques opérations simples.



### Utilisation du générateur de list box


1.  Dans la barre d'outils de l'éditeur de formulaire, cliquez sur l'icône du générateur de zone de liste :

    ![](assets/en/FormEditor/listboxBuilderIcon.png)

    Le générateur de list box s'affiche :

    ![](assets/en/FormEditor/listboxBuilder.png)

2.  Sélectionnez une table dans la liste déroulante **Table** :

    ![](assets/en/FormEditor/listboxBuilderTable.png)

3.  Sélectionnez les champs de la list box dans la zone **Champs** :

    ![](assets/en/FormEditor/listboxBuilderFields.png)

    Par défaut, tous les champs sont sélectionnés. Vous pouvez sélectionner ou désélectionner les champs individuellement ou utiliser **Ctrl+clic** (Windows) ou **Cmd+clic** (macOS) pour les sélectionner ou les désélectionner tous à la fois.

    Vous pouvez modifier l'ordre des champs via un glisser-déposer.

4.  L'expression qui permet de remplir les lignes de la list box à partir de la sélection d'entité est préremplie :

    ![](assets/en/FormEditor/listboxBuilderExpression.png)

    Cette expression peut être modifiée si nécessaire.

5.  En cliquant sur le bouton **Copier**, l'expression sera copiée pour charger tous les enregistrements en mémoire :

    ![](assets/en/FormEditor/listboxBuilderCode.png)

6.  Cliquez sur le bouton **Créer un widget** pour créer la list box.

    ![](assets/en/FormEditor/listboxBuilderBuild.png)

La list box finale :

![](assets/en/FormEditor/listboxBuilderListbox.png)









## Badges

L’éditeur de formulaires 4D permet d’utiliser des badges afin de faciliter la visualisation des propriétés des objets. Ils se trouvent dans la barre d'outils du formulaire :

![](assets/en/FormEditor/shields.png)




Le principe de cette fonction est le suivant : chaque badge est associé à une propriété (par exemple **Vues**, signifiant que l'objet “est dans la vue courante”). Lorsque vous activez un badge, 4D affiche une petite icône (un badge) en haut à gauche de chaque objet du formulaire auquel s’applique la propriété.

![](assets/en/FormEditor/shield.png)

### Utilisation des badges

Pour activer un badge, cliquez sur l'icône *badge* jusqu’à ce que le badge souhaité soit sélectionné. Vous pouvez également cliquer sur la partie droite du bouton et sélectionner directement le type de badge à afficher dans le menu associé :


Pour ne pas afficher de badges, choisissez la ligne **Pas de badges** dans le menu de sélection.
> Vous pouvez définir les badges à afficher par défaut dans la Préférences de l’application.

### Description du badge

Voici la description de chaque type de badge :

| Icône                                        | Nom                                  | Est affiché...                                                                                                                                |
| -------------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/objectMethod.png)   | Méthode objet                        | Pour les objets auxquels une méthode objet est associée                                                                                       |
| ![](assets/en/FormEditor/standardAction.png) | Action standard                      | Pour les objets auxquels une action standard est associée                                                                                     |
| ![](assets/en/FormEditor/resizing.png)       | Redimensionnement                    | Pour les objets disposant d’au moins une propriété de redimensionnement, indique la combinaison de propriétés courante                        |
| ![](assets/en/FormEditor/entryOrder.png)     | Ordre de saisie                      | Pour les objets saisissables, indique le numéro d’ordre de saisie                                                                             |
| ![](assets/en/FormEditor/viewNumber.png)     | Vue courante                         | Pour tous les objets de la vue courante                                                                                                       |
| ![](assets/en/FormEditor/cssShield.png)      | [Feuille de style](stylesheets.html) | For objects with one or more attribute values overridden by a style sheet.                                                                    |
| ![](assets/en/FormEditor/filter.png)         | Filtre                               | Pour les objets saisissables auxquels un filtre de saisie est associé                                                                         |
| ![](assets/en/FormEditor/helpTip.png)        | Infobulle                            | Pour les objets auxquels une infobulle (message d’aide) est associée                                                                          |
| ![](assets/en/FormEditor/localized.png)      | Localisé                             | Pour les objets dont le libellé provient d’une référence (libellé débutant par “:”). La référence peut être de type ressource (STR#) ou XLIFF |
| ![](assets/en/FormEditor/noShields.png)      | Pas de badge                         | Aucun badge n’apparaît                                                                                                                        |

## Vues

L'éditeur de formulaires 4D vous permet de créer des formulaires complexes en distribuant des objets de formulaire entre des vues séparées qui peuvent ensuite être masquées ou affichées selon les besoins.

Par exemple, vous pouvez répartir les objets par type (champs, variables, objets statiques, etc.). Tout type d'objet formulaire, y compris les sous-formulaires et les zones de plug-in, peut être inclus dans les vues.

Il n'y a pas de limite au nombre de vues par formulaire. Vous pouvez créer autant de vues différentes que nécessaire. De plus, chaque vue peut être affichée, masquée et/ou verrouillée.


Les vues sont gérées via à la palette de vues.

![](assets/en/FormEditor/viewEditor.png)


### Accéder à la palette de vues

Il existe trois façons d'accéder à la palette de vues :

*   **Barre d'outils** : cliquez sur l'icône de Vues dans la barre d'outils de l'éditeur de formulaires. (Cette icône apparaît en gris lorsqu'au moins un objet appartient à une vue autre que la vue par défaut.)

    |              Vue par défaut uniquement               |           Avec des vues supplémentaires            |
    |:----------------------------------------------------:|:--------------------------------------------------:|
    | ![](assets/en/FormEditor/icon.png "No views in use") | ![](assets/en/FormEditor/icon2.png "Views in use") |

*   **Menu contextuel** (formulaire ou objet) : faites un clic droit n'importe où dans l'éditeur de formulaires ou sur un objet, puis sélectionnez **Vue courante**

    ![](assets/en/FormEditor/contextMenu.png)

La vue courante est indiquée par une coche (par exemple, "Adresse professionnelle" dans l'image ci-dessus)


*   **Menu Formulaire** : cliquez sur le menu **Formulaire** et sélectionnez **Afficher la liste**

![](assets/en/FormEditor/formMenu.png)


### Avant de commencer

Voici quelques éléments importants à connaitre avant de commencer à travailler avec les vues :

*   **Contexte d’utilisation** : les vues sont un outil purement graphique, utilisable uniquement dans l’éditeur de formulaires ; il n’est pas possible d’accéder aux vues par programmation ou en mode Application.

*   **Vues et pages** : Les objets d’une même vue peuvent appartenir à des pages différentes d’un formulaire ; seuls les objets de la page courante (et de la page 0 si elle est visible) peuvent être affichés, quelle que soit la configuration des vues.

*   **Vues et plans** : Les vues sont indépendantes des plans des objets, il n’y a pas de hiérarchie d’affichage entre les différentes vues.

*   **Vues et groupes** : Seuls les objets appartenant à la vue courante peuvent être groupés.

*   **Vues courantes et par défaut** : la vue par défaut est la première vue d'un formulaire et ne peut pas être supprimée; la vue courante est la vue en cours de modification et le nom est affiché en gras.



### Gestion des vues

#### Créer des vues

Tout objet créé dans un formulaire est placé dans la première vue ("Vue 1") du formulaire. La première vue 1 est **toujours** la vue par défaut, indiquée par (par défaut) après le nom. Le nom de la vue peut être modifié (voir [Renommer les vues](#renaming-views)), mais il demeure la vue par défaut.


![](assets/en/FormEditor/createView.png)

Il existe deux façons d'ajouter des vues supplémentaires :

*   Cliquez sur le bouton **Ajouter une nouvelle vue** en bas de la palette Vue :

![](assets/en/FormEditor/addView.png)

*   Faites un clic droit sur une vue existante et sélectionnez **Insérer une vue** :

![](assets/en/FormEditor/addView2.png)

Il n'y a pas de limitation du nombre de vues.

#### Renommer des vues

Par défaut, les vues sont nommées "Vue" + le numéro de vue, mais vous pouvez modifier ces noms pour améliorer la lisibilité et mieux répondre à vos besoins.

Pour renommer une vue, vous pouvez soit :

*   Double-cliquer directement sur le nom de la vue (dans ce cas, la vue est sélectionnée). Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename.png)

*   Faire un clic droit sur le nom de la vue. Le nom devient alors éditable :

    ![](assets/en/FormEditor/rename2.png)

#### Réordonner les vues

Vous pouvez modifier l'ordre d'affichage des vues en les faisant glisser/déposer dans la palette des vues.

A noter que la vue par défaut ne change pas :

![](assets/en/FormEditor/reorderView.png)


#### Supprimer des vues

Pour renommer une vue, vous pouvez soit :

*   Cliquer sur le bouton **Supprimer la vue sélectionnée** en bas de la palette des vues :

    ![](assets/en/FormEditor/deleteView.png)


*   Faire un clic droit sur le nom de la vue et sélectionner **Supprimer la vue** :

    ![](assets/en/FormEditor/deleteView2.png)
> Si une vue est supprimée, tous les objets qu'elle contient sont automatiquement déplacés vers la vue par défaut.




### Utilisation des vues

Une fois que les vues sont créées, vous pouvez utiliser la palette des vues pour :

*   Ajouter un objet aux vues,
*   Déplacer des objets d'une vue à une autre,
*   Sélectionner tous les objets d'une même vue en un seul clic,
*   Afficher ou masquer des objets pour chaque vue,
*   Verrouiller les objets d'une vue.

#### Ajouter des objets aux vues

Un objet ne peut appartenir qu’à une seule vue.

Pour créer un objet dans une autre vue, sélectionnez simplement la vue dans la palette des vues (avant de créer l'objet) en cliquant sur son nom (une icône Modifier est affichée pour la [Vue courante](#before-you-begin) et le nom apparaît en gras) :

![](assets/en/FormEditor/addObject.png)

#### Déplacer des objets entre les vues

Il est également possible de déplacer un ou plusieurs objets d'une vue à une autre. Dans le formulaire, sélectionnez le ou les objets dont vous souhaitez modifier la vue. La liste des vues indique, à l'aide d'un symbole, la vue à laquelle appartient la sélection :

![](assets/en/FormEditor/symbol.png)
> La sélection peut contenir plusieurs objets appartenant à différentes vues.

Sélectionnez simplement la vue de destination, faites un clic droit puis sélectionnez **Déplacer vers** :

![](assets/en/FormEditor/moveObject.png)

OU

Sélectionnez la vue de destination de la sélection et cliquez sur le bouton **Déplacer vers** en bas de la palette des vues :

![](assets/en/FormEditor/moveObject3.png)

La sélection est ensuite placée dans la nouvelle vue :

![](assets/en/FormEditor/objNewView.png)

Vous pouvez également déplacer un objet vers une autre vue via le menu contextuel de l'objet. Faites un clic droit sur l'objet, sélectionnez **Déplacer vers la vue** puis sélectionnez une vue dans la liste de vues disponibles :

![](assets/en/FormEditor/moveObject2.png)
> La [vue courante](#before-you-begin) est affichée en texte gras.



#### Sélectionner tous les objets d’une vue

Vous pouvez sélectionner dans la page courante du formulaire tous les objets appartenant à une même vue. Cette fonction est utile pour appliquer des modifications globales à un ensemble d’objets.

Pour cela, faites un clic droit sur la vue dans laquelle vous souhaitez sélectionner tous les objets et cliquez sur le bouton **Tout sélect. dans vue**:

![](assets/en/FormEditor/selectAll.png)

Vous pouvez également utiliser le bouton situé en dessous de la palette des vues :


![](assets/en/FormEditor/selectAll2.png)


#### Afficher ou masquer les objets d’une vue

Vous pouvez à tout moment afficher ou masquer les objets d’une vue dans la page courante du formulaire. Cette fonction permet par exemple de se concentrer sur certains objets lors de la modification du formulaire.

Par défaut, toutes les vues sont affichées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/showHide.png)

Pour masquer une vue, cliquez sur cette icône. Elle est alors grisée et les objets de la vue correspondante ne sont plus affichés dans le formulaire :

![](assets/en/FormEditor/hidden.png)
> Il n’est pas possible de masquer la [vue courante](#before-you-begin).

Pour afficher une vue masquée, il suffit de la sélectionner ou de cliquer de nouveau sur l’icône de visualisation.



#### Verrouiller les objets d’une vue

Vous pouvez verrouiller les objets d’une vue. Cela empêche leur sélection, leur modification ou leur suppression dans le formulaire. Une fois verrouillé, un objet ne peut pas être sélectionné par un clic, un rectangle de sélection ou la commande **Sélectionner objets de même type** du menu contextuel. Cette fonction est utile pour éviter les erreurs de manipulation.

Par défaut, toutes les vues sont déverrouillées, comme l’indique l’icône en regard de chaque vue dans la palette des vues:

![](assets/en/FormEditor/lockUnlock.png)

Pour verrouiller les objets d’une vue, cliquez sur cette icône. Le cadenas est alors refermé, ce qui indique que la vue est verrouillée :

![](assets/en/FormEditor/locked.png)
> Il n’est pas possible de verrouiller la [vue courante](#before-you-begin).

Pour déverrouiller une vue, il suffit de la sélectionner ou de cliquer à nouveau sur l’icône de verrouillage.

## Zoom

You can zoom in the current form. Switch to “Zoom” mode by clicking on the magnifying glass icon or clicking directly on the desired percentage bar (50%, 100%, 200%, 400% and 800%):

![](assets/en/FormEditor/zoom.png)

*   When you click on the magnifying glass, the cursor changes into one. You can then click in the form to increase the display or hold down Shift and click to reduce the display percentage.
*   When you click on a percentage bar, the display is immediately modified.

In Zoom mode, all Form editor functions remain available(*).

(*) For technical reasons, it is not possible to select list box elements (headers, columns, footers) when the Form editor is in Zoom mode.





