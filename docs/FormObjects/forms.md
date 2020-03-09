---
id: forms
title: Forms
---

## Overview

Form objects provide the interface through which information is entered, modified, and printed. A user interacts with the data in a database using forms and prints reports using forms. In custom applications, you can use forms to create custom dialog boxes and palettes.

Each table in your database generally has at least two forms. One form is for listing records on-screen and the other form displays one record at a time and is used for data entry and modification. The form that lists records is called the output form or list form and the form that displays one record at a time is called the input form or detail form. When you are viewing records using the list form, you can double-click a record to view it using the current detail form.

## Form Contents   

In custom applications you can use the language to control which forms to use. For example, you may want to switch sets of forms depending on the type of screen used. You can also use the language to use different sets of forms for Web browsers and 4D Client users. When you write a custom application, you can create forms for use as custom dialog boxes or floating palettes. In custom applications, you can also use multiple processes to allow users to work with several forms simultaneously.

A form can display fields from more than one table. You can place fields from a related One table on a form and allow users to enter values directly into the related One table. You can also include a subform that displays a list of records from a related Many table. A subform displays a list of records from another table or a subtable in the master table. With a subform, the user can view, enter, and modify records in another table. This is sometimes known as a master-detail relationship. For example, an invoicing application would use a subform on the invoicing input form that lets the user enter line items for the invoice. Although the line items appear on the invoicing screen, the line item records are actually stored in a related Many table.

A form used for data entry can have more than one subform. For example, a contacts manager database can use one subform for telephone numbers, another subform for ToDo’s, and another for prior contacts with the person. Each subform displays records from a different related Many table.

A particular form can use some of the fields in a table or all of the fields. You might have two input forms, for example — one for use by a clerk and another for use by supervisors — neither of which contains all the fields. You might use another group of fields for the screen display and yet a fourth group for a printed report.
Forms can be modified at any time, regardless of whether you have entered data into the database. Changes to a form do not affect the data stored on disk in any way.

Each form has one or more display pages in which fields and other enterable objects appear. If your fields don’t fit on one page, you can create additional pages. When you create a multi-page form, you also add buttons or a tab control to allow users to move from one page to another.

Each form also has a background page (a page zero) on which you place objects that appear on all display pages. Use the background page to place background graphics, buttons, a tab control, and other graphic objects that define the “look” of the page, such as rectangles and labels.

>When a multipage table form is used as an output form (*e.g.*, when it is printed), only the first display page appears.



## Form Types 
 
4D lets you create two categories of forms: table forms and project forms. Basically, table forms are attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. Project forms are independent forms that are not attached to any table. They are intended more particularly for creating interface dialog boxes as well as components.

Project forms can be used to create interfaces that comply with OS standards more easily. In particular, calling (via the `DIALOG` command) project forms that display the selections of records in subforms is now recommended by 4D for the display of records in list form. With a little additional programming, this combination is an improvement on the `MODIFY SELECTION` and `DISPLAY SELECTION` commands.

Table forms and project forms are grouped separately on the Forms Page of the Explorer.

### Characteristics of table forms  

Every form is attached to a table. Each table must usually have at least one form so that information can be entered into fields and displayed on screen. Typically, a table has separate input and output forms. The input form is the one used for data entry. It displays one record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (i.e., First Record, Last Record, Previous Record, Next Record). The output form displays a list of records, with one line per record. The results of queries are shown in the output form and the user can double-click a line in an output form to display the input form for that record.

The following illustrations show a typical input and output form:





When you try to display the records of a table before creating a form for this table, 4D asks you if you want to it to create default input and output forms for you.





Note: With the Automatic Form Creation option in the Preferences, you can, for example, set 4D to automatically create default forms and therefore not display the Create Default Form dialog box. For more information, refer to the General Page.

Click Yes (or Yes for All) to create default forms. You can always return to the Design environment and modify them or replace them with more sophisticated forms. Without making any modifications, you can start using these forms to enter and display data in your database. You can also click No if you do not want to associate a form with the table. Data entry and/or display can then be carried out using project forms. Your database can use up to 32,000 forms per table, that perform specific functions.

### Characteristics of project forms  

Project forms differ from table forms in the following manner:

*	Project forms can only be of the detail (page) type. The mechanisms for output (list) forms are not compatible with project forms.
*	Project forms do not appear in the List of tables and cannot be designated as the current input or output form. They cannot be used in the Label editor nor in the 4D import/export editor (see Exporting and importing data).
*	Project forms can only be displayed using the DIALOG command or as inherited forms (see Using inherited forms).
*	Project forms can contain the same types of objects as table forms, including fields.
When fields are used, the project form stores the number of the table and the field. When a form is copied from one database to another or within a component, the references are also copied. The table and field used are those of the target database. In the case of incompatibility (non-existent table, incorrect field type, etc.), the form will not work correctly.
Since project forms are mainly intended to be used in the context of the DIALOG command, the buttons with standard actions for record management (Next record, Delete record, etc.) are not provided by default in the editor nor in the New Form Wizard. You must manage the display of records and any data modification therein using language commands.
On the other hand, when project forms are used as inherited forms by the table forms, the use of automatic record management mechanisms is possible.
*	Project forms can have a form method, like table forms, which can be accessed from the Methods Page of the Explorer.

### Transforming a table form into a project form (and vice versa)  

It is possible to change a table form into a project form (or to carry out the opposite transformation) at any time.
Be careful, when transforming table forms into project forms, any automatic functioning concerning data management that is present in the table form will no longer work once the form has been transformed. Similarly, a “list form” or “list form for printing” type form will be transformed into a project form of the “page” type. 

Changing the type of a form can be done by drag and drop or copy/paste on the Forms Page of the Explorer. This can be done in the same database or between two different databases. 

To transform a project form into a table form and vice versa:

1.	On the Forms page of the Explorer, click on the form that you want to transform and drop it on the destination item.
When transforming a project form into a table form, you must drop the form onto the name of the table to which it will be attached.
By default, the form is moved when the drag and drop operation is carried out inside the same database. If you want to copy the form, hold down the Alt (Windows) or Option (Mac OS) key during the drag and drop. When the drag and drop is between two different databases, the form can only be copied. You can also use the standard Copy/ Paste commands in the context menu of the Explorer.



## Creating Forms 
 
4D lets you create standard forms quickly. It also provides powerful tools that let you create forms that implement sophisticated interfaces. Your forms can provide exactly what your database needs. With only point and click operations, you can create a basic form with fields, buttons, variables, and so on.

There are three ways to create and modify 4D forms, the Form Editor, the Explorer, and [dynamically](https://doc.4d.com/4Dv18/4D/18/Dynamic-Forms.300-4575729.en.html).

### Form Editor

The Form editor is an object-oriented drawing environment that lets you customize forms by manipulating objects on the form directly.

For example, you can reposition objects, add objects, create multipage forms with tab controls, enforce business rules by specifying data entry constraints, specify form access privileges, associate a custom menu bar with a form, and write form and object methods that run automatically when the form is used. 

To create a blank form:

1.	Select **File > New > Form** or use the **Ctrl+Shift+L** keyboard shortcut:

	![](assets/en/FormObjects/formNew.png)
	
	The following dialog box appears:

	![](assets/en/FormObjects/formProj.png)
	
2.	Click **OK**. The blank form is then opened in a new window of the Form editor.

### Explorer

You can create a blank form directly from the Explorer. The form is created without any fields, buttons or variables and is opened in the Form editor. It can then be put together entirely using the Form editor. Creating blank forms is useful when you want to generate dialog boxes containing only variables or plug-in areas.

To create a blank form:

1.	Display the Forms Page of the Explorer.

	![](assets/en/FormObjects/formEditor.png)

2.	Select the item corresponding to the category of form you want to create:
	*	For a project form: select either the “Project Forms” label (as shown in the image above) or an existing project form,
	*	For a table form: select the name of a table.
3.	Click on the add button of the Explorer. 

	![](assets/en/FormObjects/fromAdd.png)

	The following dialog box appears:

	![](assets/en/FormObjects/formProj.png)


4.	Enter the form name in the corresponding entry area.
You will use this name, more particularly, to refer to the form during programming.

5.	(Optional) Select a storage folder for the form.
If you select a folder name from the drop-down list, the form will be placed in this folder. Folders can be used to organize the objects of your applications and are managed on the Home Page of the Explorer. By default, the form is created at the Top Level, *i.e.*, not in any storage folder.

6.	Click **OK**. The blank form is then opened in a new window of the Form editor.



### Dynamically

See [Dynamic Forms](https://doc.4d.com/4Dv18/4D/18/Dynamic-Forms.300-4575729.en.html)
















## Editing a form

You can open a form in the Form editor as follows:

1.	Choose **Open > Form...** from the *File* menu.<p>
	OR<p>
	In the Structure editor, hold down **Ctrl+Shift** and double-click 			the table title whose forms you want to open.<p>
	OR<p>
	In the Structure editor, right-click on the table name, then select **Show Forms...** in the context menu.<p>
4D displays the **Forms Page** of the Explorer. You can expand the "Project Forms" or any of the table names to display the forms associated with them. If you have double-clicked a table’s name or used the context menu of the Structure editor, that table is already selected.
2.	If necessary, expand the table name that contains the form you want to modify.<p>
Right-click on the name of the form to be modified, then select **Edit Form...** in the context menu.<p>
OR<p>
Select the form then choose **Edit Form...** in the options menu of the Explorer.<p>
OR<p>
Double-click the name of the form or in the preview area.<p>
4D displays the form in a Form editor window.<p>
	>These actions are also available on the **Home Page** of the Explorer.
	>4D Server: Object locking occurs when two or more users attempt to modify the same form simultaneously. If a user is modifying a form in the Design environment, the form is locked. Other users cannot modify that same form until the first user frees the form by closing it.


### Locking information  

A closed lock icon is displayed if objects in the form or the form file are locked. Locking can occur in both project and client/server modes when:

The file for that form is 'Read-only' (Projects only). Clicking on the lock icon will display an alert to unlock it, if possible. If unlocking is successful, the lock icon disappears.
Two or more users attempt to modify the same form at the same time. The form cannot be used until the first user frees it by closing the window (Client/server only).
In both cases, the form can be opened in 'Read-only', but cannot be used until the lock is removed.


## Renaming a form  
 
You can rename the form in the Property List or using the Forms Page of the Explorer.

You use the names of forms when you are establishing default input and output forms for a table and in commands that accept a form name as a parameter, such as `FORM SET INPUT` and `FORM SET OUTPUT`.

You cannot use the same name for more than one project form, or for more than one form per table. This will confuse 4D when you try to refer to a form by name. You can, however, use the same form name with different tables. For example, you can name all your input forms “Input” and all your output forms “Output.”

>If you rename a form that is referred to elsewhere in the database (such as in methods), be sure to update the references to this form. To do this, you can use the search and replace function in the Design environment (see [Renaming](https://doc.4d.com/4Dv18/4D/18/Renaming.300-4575730.en.html)).

### via the Explorer

1.	Display the **Forms Page** of the Explorer.
	A hierarchical list of tables and forms appears.
2.	Hold down the Alt key (Windows) or the Option key (Mac OS) and click on the form name.
	OR
	Click twice on the name of the form you want to change.
	The form name becomes editable.
3.	Enter the new name.
4.	Press Tab or click anywhere outside the entry area to save the new name.

### via the Property List window 

1.	Display the form properties in the Property List.
2.	Enter a name in the Form Name area.



## Designating input and output forms  


Each table has one current input form and one current output form. The input form is used for entering and modifying records, and the output form is used to list records. Usually, you use a Detail form for input and a List form for output.

You can change which form to use for input and output at any time. This change can be made in the **List of tables window** as well as using the `FORM SET INPUT` and `FORM SET OUTPUT` commands. In this case, the changes only apply to the current work session. 

You can also specify default input and output forms in the Design environment. In this case, the changes will be saved with the database.

To change the input and output forms for a table:

1.	Display the Forms Page of the Explorer.
2.	Expand the table for which you want to modify the default input or output form.
	The letter I is displayed next to the name of the current Input form and the letter O is displayed next to the current Output form.
3.	Right-click on the name of the form to be designated and choose the Input Form or Output Form command in the context menu:

	OR
	
	Choose the Input Form or Output Form command in the options menu of the Explorer.

>Only table forms can be designated as input or output forms. 

You can also designate the same form as the Input and Output form. In this case the character B (for Both) will be displayed next to it.


## Deleting a form  

You can delete any project form or any table form that is not designated as a current input or output form (or both). The deletion button is disabled when you select the current input or output form.

To delete a form:

1.	Display the Forms Page of the Explorer.
2.	Expand the “Project Forms” theme or the table that contains the form you want to delete.
3.	Select the form you want to delete and click the deletion button  of the Explorer.

	OR
	
	Use the **Delete Form** command in the context menu of the Explorer (right-click on the form name).
	
	4D asks you to confirm the deletion.
4.	Click on **OK**.
	4D deletes the form. The form is moved to the Trash and can be recovered at any time so long as the Trash has not been emptied (see [Trash Page](https://doc.4d.com/4Dv18/4D/18/Trash-Page.300-4575681.en.html)). 

>It is also possible to delete a form from the **Home Page** of the Explorer (using the same procedure).


## Printing a form  

Each form has a maximum area of about 1245 square feet. You scroll to bring hidden portions of the form into view. For viewing on screen, your form design can use this entire area. You can scroll to view any element you place in the form.

For printing, form elements must fit within a single page width, but may be several pages in length. The actual size of a page depends on your printing device, the paper it is using, and the specifications you enter in the Page Setup dialog box. 4D displays page border lines in the Form editor. These lines indicate the page limits. The page border lines respond to any page setup changes. The page setup specifications are stored with the form when it is closed. The form’s limits can be displayed or hidden using the Paper command in the Display submenu of the Form editor (see Showing/hiding elements in the Form editor). 

The figure below shows the page border lines:





## Saving forms  
 
It is a good idea to save any changes you make to a form, especially when using 4D Server with multiple users. You can save a form by closing or saving it. You can close a form by clicking its close box or by choosing **Close Form: Name** from the **File**. To save a form without closing it, choose **Save Form: Name** from the **File** menu.

Once a form has been saved, you can continue to work on it. If you make a mistake or do not like the changes you have made, you can revert to the last saved version of the form. This makes the form appear exactly as it did the last time that it was saved. To do this, choose **Revert...** from the **File** menu.

>**4D Server**: When a form is saved in the Design environment, users are able to see your changes the next time they open the form.


