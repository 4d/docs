---
id: formObjectsUsing
title: Using Form Objects
---



*	**Form editor:** Drag an object from the Form editor onto the form. Then use the Property List to specify the object's properties.
*	**Code:** Define the properties for a button object using JSON. Example:  
	```code4d
	{
	"type": "button", 
	"style": "bevel", 
	"text": "OK", 
	"action": "Cancel", 
	"left": 60, 
	"top": 160, 
	"width": 100, 
	"height": 20
	}
	```

## Adding Objects

You can add objects to forms in several ways:

*	By drawing the object directly in the form after selecting its type in the object bar (see [Using the object bar](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-editor.300-4163727.en.html#108211))
*	By dragging and dropping the object from the object bar
*	By drag-and-drop or copy-paste operations on an object selected from a custom library (see [Creating and using custom object libraries](https://doc.4d.com/4Dv17R5/4D/17-R5/Creating-and-using-custom-object-libraries.300-4163737.en.html)),
*	By dragging and dropping an object from another form,
*	By dragging and dropping an object from the Explorer (fields) or from other editors in the Design environment (lists, pictures, etc.)

Once the object is placed in the form, you can modify its characteristics using the Form editor.

## Selecting objects  

Before you can perform any operation on an object (such as changing a line width or font), you need to select the object that you want to modify.

To select an object using the toolbar:

1.	Click the Arrow tool in the toolbar. When you move the pointer into the form area, it becomes a standard arrow-shaped pointer.
2.	Click the object you want to select. Resizing handles identify the selected object. 

To select an object using the Property List:

1.	Choose the object’s name from the Object List drop-down list located at the top of the Property List. 

Using these two methods, you can select an object that is hidden by other objects or located outside the visible area of the current window.

To deselect an object, click outside the object’s boundary or Shift+click the object. 

>It is also possible to select objects by double-clicking them in the result window of an overall search in the database (see [Renaming](https://doc.4d.com/4Dv17R5/4D/17-R5/Renaming.300-4163741.en.html)).

If you have difficulty selecting an object that was created by the Form Wizard, switch to the background page by clicking on the back button or by choosing 0 in the pages menu and try again. You can also hold down **Alt** (Windows) or **Option** (Mac OS) and click on an object on page 0 in order to access it directly.

It is also possible to hide any element located on the background page by deselecting **Page 0** from the **Display** submenu of the **Form** menu (or the Form editor context menu).

## Selecting multiple objects 
 
You may want to perform the same operation on more than one form object — for example, to move the objects, align them, or change their appearance. 4D lets you select several objects at the same time. There are several ways to select multiple objects:

*	Choose **Select All** from the **Edit** menu to select all the objects.
*	Right-click on the object and choose the **Select Similar Objects** command in the context menu.
*	Hold down the **Shift** key and click the objects you want to select.
*	Start at a location outside the group of objects you want to select and drag a marquee (sometimes called a selection rectangle) around the objects. When you release the mouse button, if any part of an object lies within or touches the boundaries of the selection rectangle, that object is selected.
*	Hold down the **Alt** key (Windows) or the **Option** key (Mac OS) and draw a marquee. Any object that is completely enclosed by the marquee is selected.

The figure below shows a marquee being drawn to select two objects:

![](assets/en/FormObjects/object_selectMultiple.png)

To deselect an object that is part of a set of selected objects, hold down the **Shift** key and click the object. The other objects remain selected. To deselect all the selected objects, click outside the boundaries of all the objects.

## Duplicating objects  

You can duplicate any object in the form, including active objects. Copies of active objects retain all the properties of the original, including name, type, standard action, display format, and object method. 

You can duplicate an object directly using the Duplicate tool in the Tools palette or use the Duplicate Many dialog box to duplicate an object more than once. Also, using this dialog box, you can set the distance between two copies.

When duplicating a variable, you can use specific duplication features that allow you to include an automatic number in the copies’ names. For more information on this point, refer to [Duplicating on a matrix](https://doc.4d.com/4Dv17R5/4D/17-R5/Duplicating-on-a-matrix.300-4163734.en.html).

To duplicate one or more objects:

1.	Select the object or objects that you want to duplicate.
Choose Duplicate from the Edit menu.
2.	4D creates a copy of each selected object and places the copy in front and slightly to the side of the original.
3.	Move the copy (or copies) to the desired location. If you choose the Duplicate menu item again, 4D creates another copy of each object and moves it the exact same distance and direction from the first copy. If you need to distribute copies of the object along a line, you should use the following procedure. Duplicate the original object, move the copy to another location in the form, and then duplicate the copy. The second copy is automatically placed in the same relation to the first copy as the first copy was in relation to the original object. Subsequent copies are also placed in the same relation to their originals. The figure below shows how this relative placement of copies works:

![](assets/en/FormObjects/object_duplicate.png)

## Duplicate Many  

The "Duplicate Many" dialog box appears when you select one or more object(s) and choose the Duplicate Many... command from the Object menu.

![](assets/en/FormObjects/object_duplicateMany.png)

*	In the upper area, enter the number of columns and lines (rows) of objects you want to get.    
	
	For example, if you want three columns and two lines of objects, enter 3 in the Column(s) area and 2 in the Line(s) area. If you want three horizontal new copies of an object, enter 4 in the Column(s) area and leave the default value, 1, in the Line(s) area.
*	For lines and columns, define the offset that you wish to leave between each copy.
The value must be expressed in points. It will be applied to each copy, or copies, in relation to the original object.   
  
	For example, if you want to leave a vertical offset of 20 points between each object and the height of the source object is 50 points, enter 70 in the column’s “Offset” area.
*	If you wish to create a matrix of variables, select the **Number Variables** option and select the direction in which the variables are to be numbered, either by line(s) or by column(s).  
  
	This option is active only when the selected object is a variable. For more information on this option, refer to [Duplicating on a matrix](https://doc.4d.com/4Dv17R5/4D/17-R5/Duplicating-on-a-matrix.300-4163734.en.html).

## Moving objects  

You can move any graphic or active object in the form including fields and objects created with a template. When moving an object, you have the following options:

*	Move the object by dragging it,
*	Move the object one pixel at a time using the arrow keys,
*	Move the object by steps using the arrow keys (20-pixel steps by default),
*	Manually enter the coordinates of the object in the Property List (this point is described in "Setting initial size of objects" paragraph below).

As you begin dragging the selected object, its handles disappear. 4D displays markers that show the location of the object’s boundaries in the rulers so that you can place the object exactly where you want it. Be careful not to drag a handle. Dragging a handle resizes the object. You can press the **Shift** key to carry out the move with a constraint.

When the magnetic grid is on, objects are moved in stages indicating noticeable locations. For more information about this point, refer to [Using the magnetic grid](https://doc.4d.com/4Dv17R5/4D/17-R5/Inserting-and-organizing-form-objects.300-4163720.en.html#110376). 

To move an object one pixel at a time:

1.	Select the object or objects you want to move.
2.	Use the arrow keys on the keyboard to move the object.
Each time you press an arrow key, the object moves one pixel in the direction of the arrow.

To move an object by steps:

1.	Select the object or objects you want to move.
2.	Hold down the Shift key and use the arrow keys to move the object. By default, steps are 20 pixels at a time. You can change this value on the [Forms Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Forms-Page.300-4163703.en.html) of the Preferences.

## Grouping objects  

4D lets you group objects so that you can select, move, and modify the group as a single object. Objects that are grouped retain their position in relation to each other. You would typically group a field and its label, an invisible button and its icon, and so forth. Groups can be part of other groups.

When you resize a group, all the objects in the group are resized proportionally (except text areas, which are resized in steps according to their font sizes.

Groups of objects are necessary for the coordinated functioning of radio buttons (see [Radio Button](radio_overview.md)).

You can ungroup a group of objects to treat them as individual objects again.

An active object that has been grouped must be ungrouped before you can access its properties or method. However, it is possible to select an object belonging to a group without degrouping the set: to do this, **Ctrl+click** (Windows) or **Command+click** (Mac OS) on the object (the group must be selected beforehand). 

Grouping only affects objects in the Form editor. When the form is executed, all grouped objects (except for radio buttons) act as if they were ungrouped.

>It is not possible to group objects belonging to different views and only those objects belonging to the current view can be grouped (see [Using object views](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-views.300-4163726.en.html)).

To group objects:

1.	Select the objects that you want to group.
2.	Choose **Group** from the **Object** menu.  
  
  	OR  
  	
  	Click the **Group** button in the toolbar of the Form editor.
  	
  	4D marks the boundary of the newly grouped objects with handles. No handles mark the boundary of any of the individual objects within the group. Now, when you modify the grouped object, you change all the objects that make up the group.

To ungroup an object:

1.	Select the grouped object that you want to ungroup.
2.	Choose **Ungroup** from the **Object** menu.

	OR

	Click the **Ungroup** button (variant of the **Group** button) in the toolbar of the Form editor.
	
	If **Ungroup** is dimmed, this means that the selected object is already separated into its simplest form.
	
	4D marks the boundaries of the individual objects with handles.

## Aligning objects  

You can align objects with each other or using an invisible grid on the form.

*	When you align one object to another, you can align it to the top, bottom, side, or horizontal or vertical center of the other object. You can directly align a selection of objects using the alignment tools or apply more advanced alignment settings using the Alignment Assistant. The latter option allows you, for example, to set the object that will be used as the position reference and to preview the alignment in the form before applying it.
*	When you use the invisible grid, each object can be aligned manually with others based on “noticeable” positions which are depicted with dotted lines that appear when the object being moved approaches other objects.


### Using the instantaneous alignment tools  

The alignment tools in the toolbar (see [Form editor](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-editor.300-4163727.en.html#108211)) and in the **Align** submenu of the **Object** menu allow you to quickly align selected objects.

![](assets/en/FormObjects/object_Align.png)

When 4D aligns objects, it leaves one selected object in place and aligns the remaining objects to that one. This object is the “anchor.” It uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor. 

The figure below shows objects with no alignment, "aligned left", "aligned horizontally by centers", and "aligned right":

![](assets/en/FormObjects/object_alignExample.png)

### Using the alignment assistant  

The Alignment Assistant allows you to perform any type of alignment and/or distribution of objects.

![](assets/en/FormObjects/object_alignAssistant.png)

To display this dialog box, select the objects you want to align then choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.

1.	In the “Left/Right Alignment” and/or “Top/Bottom Alignment” areas, click the icon that corresponds to the alignment you want to perform.

	The example area displays the results of your selection.
2.	To perform an alignment that uses the standard anchor scheme, click **Preview** or **Apply**.

	In this case 4D uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. For instance, if you want to perform a right alignment on a set of objects, the rightmost object will be used as the anchor.

	OR:

	To align objects to a specific object, select the **Align on** option and select the object to which you want the other objects to be aligned from the object list. In this case, the position of the reference object will not be altered.

You can preview the results of the alignment by clicking the **Preview** button. The objects are then aligned in the Form editor but since the dialog box does not go away, you can still cancel or apply the alignment.

>This dialog box allows you to align and distribute objects in one operation. For more information on how to distribute objects, refer to [Distributing objects](https://doc.4d.com/4Dv17R5/4D/17-R5/Inserting-and-organizing-form-objects.300-4163720.en.html#110511).


### Using the magnetic grid  

The Form editor provides a virtual magnetic grid that can help you place and align objects in a form. Magnetic alignment of objects is based on their position in relation to each other. The magnetic grid can only be used when at least two objects are present in the form. 

This works as follows: When you move an object in the form, 4D indicates possible locations for this object based on noticeable alignments with other form objects. A noticeable alignment is established each time that:

*	Horizontally, the edges or centers of two objects coincide,
*	Vertically, the edges of two objects coincide.

When this happens, 4D places the object at the location and displays a red line indicating the noticeable alignment taken into account:
 
![](assets/en/FormObjects/object_alignMagneticGrid1.png)

Concerning the distribution of objects, 4D proposes a distance based on interface standards. Like with magnetic alignment, red lines indicate the noticeable differences once they are reached. 

![](assets/en/FormObjects/object_alignMagneticGrid2.png)

This operation applies to all types of form objects. The magnetic grid can be enabled or disabled at any time using the **Turn Magnetic Grid On** command in the **Form** menu or in the editor context menu. It is also possible to set the activation of this feature by default on the [Forms Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Forms-Page.300-4163703.en.html) of the application Preferences. You can manually activate or deactivate the magnetic grid when an object is selected by pressing the **Ctrl** (Windows) or **Control** (Mac OS) key .

>The magnetic grid also influences the manual resizing of objects.


## Distributing objects  

You can distribute objects so that they are set out with an equal amount of space between them. To do this, you can distribute objects using either the Distribute tools in the Tools palette or the Alignment Assistant. The latter allows you to align and distribute objects in one operation. 

>When the magnetic grid is on, a visual guide is also provided for distribution when an object is moved manually. For more information, refer to the previous section.

To distribute objects with equal spacing:
1.	Select three or more objects and click the desired Distribute tool.
2.	In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.
	![](assets/en/FormObjects/object_distribute1.png)
	
	OR

	Select a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor. 4D distributes the objects accordingly. Objects are distributed using the distance to their centers and the largest distance between two consecutive objects is used as a reference.

To distribute objects using the Align and Distribute dialog box:

1.	Select the objects you want to distribute.
2.	Choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor. 
The following dialog box appears:

![](assets/en/FormObjects/object_alignAssistant.png)

3.	In the Left/Right Alignment and/or Top/Bottom Alignment areas, click the standard distribution icon:

	![](assets/en/FormObjects/object_distribute2.png)
	
	The example area displays the results of your selection. 
4.	To perform a distribution that uses the standard scheme, click **Preview** or **Apply**. 

	In this case 4D will perform a standard distribution, so that the objects are set out with an equal amount of space between them. 

	OR

	To execute a specific distribution, select the **Distribute** option (for example if you want to distribute the objects based on the distance to their right side). This option acts like a switch. If the Distribute check box is selected, the icons located below it perform a different function:

	*	Horizontally, the icons correspond to the following distributions: evenly with respect to left sides, centers (hor.) and right sides of the selected objects.
	*	Vertically, the icons correspond to the following distributions: evenly with respect to top edges, centers (vert.) and bottom edges of the selected objects.

	You can preview the actual result of your settings by clicking on the **Preview** button: the operation is carried out in the Form editor but the dialog box stays in the foreground. You can then **Cancel** or **Apply** the modifications.

>This dialog box lets you combine object alignment and distribution. For more information about alignment, refer to [Aligning objects](#aligning-objects).

## Layering objects  

You will sometimes have to rearrange objects that are obstructing your view of other objects in the form. For example, you may have a graphic that you want to appear behind the fields in a form. 4D provides four menu items, **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** that let you “layer” objects on the form. These layers also determine the default entry order (see [Modifying data entry order](https://doc.4d.com/4Dv17R5/4D/17-R5/Modifying-data-entry-order.300-4163730.en.html)). The figure below shows objects in front of and behind other objects: 

![](assets/en/FormObjects/object_Layering1.png)

To move an object to another level, select it and choose:

*	One of the **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** commands of the **Object** menu,
*	One of the commands in the **Level>** submenu in the context menu of the editor,
*	One of the commands associated with the level management button of the toolbar:	  
	
	![](assets/en/FormObjects/object_Layering2.png)

>When several objects are superimposed, the **Ctrl+click** / **Command+click** shortcut can be used to select each object successively by going down a layer with each click.

When ordering different levels, 4D always goes from the background to the foreground. As a result, the previous level moves the selection of objects one level towards the background. The next level moves the selection one level towards the foreground of the form.

