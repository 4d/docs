---
id: forms
title: Forms
---

## Overview

Forms provide the interface through which information is entered, modified, and printed. Users interact with the data in a database using forms and print reports using forms. In custom applications, forms can be used to create custom dialog boxes and palettes.

In 4D projects, forms are handled as meta-objects having their own properties and containing specific form objects. Forms can also contain other forms through the following features:

- [subform objects](subform_overview.md)
- [inherited forms](propertiesForm.md#inherited-forms)

Each table in a database generally has at least two forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications). The form listing records is called the *output form* or *list form* and the form displaying individual records is called the *input form* or *detail form*. When viewing records using the list form, you can double-click a record to view it using the current detail form.

## Form Contents   

A form can display fields from more than one table. You can place fields from a related *One* table on a form and allow users to enter values directly into the related *One* table. Forms can also include [subforms](subformOverview.html) to display a list of records from a related *Many* table.  

For example, an invoicing application would use a subform on the invoicing input form that lets the user enter line items for the invoice. Although the line items appear on the invoicing screen, the line item records are actually stored in a related *Many* table. 

A form used for data entry can have more than one subform. 

A particular form can use some or all of the fields in a table. For example, an application may have two input forms, one for use by a clerk and another for use by supervisors — neither of which contains all of the fields. Another group of fields could be used for the screen display and yet a fourth group for a printed report.

Forms can be modified at any time, regardless of whether data has been entered into the database. Changes to a form do not affect the data stored on disk in any way.

Each form has:

*	one or more display pages in which fields and other enterable objects appear. If fields don’t fit on a single page, additional pages can be created. When creating a multi-page form, you can also add buttons or a tab control to allow users to move from one page to another.

*	a background page (page zero) on which objects that appear on all display pages are placed. The background page can be used to place background graphics, buttons, a tab control, and other graphic objects that define the “look” of the page, such as rectangles and labels.

>When a multi-page table form is used as an output form (*e.g.*, when it is printed), only the first display page appears.



## Form Types 
 
There are two categories of forms: 

*	**Table forms** - Attached to specific tables and thus benefit from automatic functions useful for developing applications based on databases. 

*	**Project forms** - Independent forms that are not attached to any table. They are intended more particularly for creating interface dialog boxes as well as components. Project forms can be used to create interfaces that easily comply with OS standards. 

Table forms and project forms are grouped separately on the Forms Page of the Explorer.

![](assets/en/FormObjects/formTypes.png)

### Table Forms   

Every form is attached to a table. Each table must usually have at least one form so that information can be entered into fields and displayed on screen. 

Typically, a table has separate input and output forms. 

![](assets/en/FormObjects/formTables.png)

*	**Input form** - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). 

*	**Output form** - displays a list of records, with a single line per record. The results of queries are shown in an output form and  users can double-click a line to display the input form for that record.

The following illustrations show a typical input and output form:

*	**Input**
	![](assets/en/FormObjects/formInput.png)

*	**Output**
	![](assets/en/FormObjects/formOutput.png)	

When you try to display the records of a table before creating a form for this table, 4D asks you if you want to it to create default input and output forms for you.






Click **Yes** (or **Yes for All**) to create default forms. You can always return to the Design environment and modify them or replace them with more sophisticated forms. Without making any modifications, you can start using these forms to enter and display data in your database. You can also click **No** if you do not want to associate a form with the table. Data entry and/or display can then be carried out using project forms. Your database can use up to 32,000 forms per table, that perform specific functions.

>With the **Automatic Form Creation** option in the Preferences, you can, for example, set 4D to automatically create default forms and therefore not display the **Create Default Form** dialog box. 



### Project Forms   

Project forms differ from table forms in several ways. Project forms:

*	can only be of the detail (page) type. The mechanisms for output (list) forms are not compatible with project forms.

*	do not appear in the List of tables and cannot be designated as the current input or output form. They cannot be used in the **Label editor** nor in the 4D import/export editor (see [Exporting and importing data](https://doc.4d.com/4Dv18/4D/18/Exporting-and-importing-data.200-4575423.en.html)).

*	can only be displayed using the `DIALOG` command or as inherited forms (see [Using inherited forms](https://doc.4d.com/4Dv18/4D/18/Using-inherited-forms.300-4575728.en.html)).

*	can contain the same types of objects as table forms, including fields.

	When fields are used, the project form stores the number of the table and the field. When a form is copied from one database to another or within a component, the references are also copied. The table and field used are those of the target database. In the case of incompatibility (non-existent table, incorrect field type, etc.), the form will not work correctly.

	Since project forms are mainly intended to be used in the context of the `DIALOG` command, the buttons with standard actions for record management (Next record, Delete record, etc.) are not provided by default in the editor. You must manage the display of records and any data modification therein using language commands.

	On the other hand, when project forms are used as inherited forms by table forms, the use of automatic record management mechanisms is possible.

*	can have a form method, like table forms, which can be accessed from the [Methods Page](https://doc.4d.com/4Dv18/4D/18/Methods-Page.300-4575684.en.html) of the Explorer.

### Transforming a table form into a project form (and vice versa)  

It is possible to change a table form into a project form (or to carry out the opposite transformation) at any time.

Be careful, when transforming table forms into project forms, any automatic functioning concerning data management present in the table form will no longer work once the form has been transformed. Similarly, a “list form” or “list form for printing” type form will be transformed into a project form of the “page” type. 

Changing the type of a form can be done by drag and drop or copy/paste on the **Forms Page** of the Explorer. This can be done in the same database or between two different databases. 

To transform a project form into a table form and vice versa:

1.	On the **Forms** page of the Explorer, click on the form that you want to transform and drop it on the destination item.

	When transforming a project form into a table form, you must drop the form onto the name of the table to which it will be attached.

	By default, the form is moved when the drag and drop operation is carried out inside the same database. To copy the form, hold down the **Alt** (Windows) or **Option** (macOS) key during the drag and drop. When the drag and drop is between two different databases, the form can only be copied. You can also use the standard **Copy/ Paste** commands in the context menu of the Explorer.



## Creating Forms 
 
4D lets you create standard forms quickly. It also provides powerful tools that let you create forms that implement sophisticated interfaces. Your forms can provide exactly what your database needs. 

There are three ways to create and modify 4D forms, the Form Editor, the Explorer, and [dynamically](https://doc.4d.com/4Dv18/4D/18/Dynamic-Forms.300-4575729.en.html).

### Form Editor

The Form editor is an object-oriented drawing environment that lets you customize forms by manipulating objects on the form directly. Using only point and click operations, you can create a basic form with fields, buttons, variables, and so on.

For example, you can reposition objects, add objects, create multi-page forms with tab controls, enforce business rules by specifying data entry constraints, specify form access privileges, associate a custom menu bar with a form, and write form and object methods that run automatically when the form is used. 

To create a blank form:

1.	Select **File > New > Form** or use the **Ctrl+Shift+L** keyboard shortcut:

	![](assets/en/FormObjects/formNew.png)
	
	The following dialog box appears:

	![](assets/en/FormObjects/formProj.png)
	
2.	Click **OK**. The blank form is then opened in a new window of the Form editor.






### Explorer

You can create a blank form directly from the **Explorer**. The form is created without any fields, buttons or variables and is opened in the Form editor. It can then be put together entirely using the Form editor. Creating blank forms is useful when you want to generate dialog boxes containing only variables or plug-in areas.

To create a blank form:

1.	Display the **Forms Page** of the Explorer.

	![](assets/en/FormObjects/formEditor.png)

2.	Select the item corresponding to the category of form you want to create a:
	*	**Project form**: select either the “Project Forms” label (as shown in the image above) or an existing project form,
	*	**Table form**: select the name of a table.
3.	Click on the add button of the Explorer. 

	![](assets/en/FormObjects/fromAdd.png)

	The following dialog box appears:

	![](assets/en/FormObjects/formProj.png)
	



4.	Enter the Form Name in the corresponding entry area.
You will use this name, more particularly, to refer to the form during programming.

5.	Select the Form type from the dropdown list. The options are:
	
	*	**Project forms** - Detail form or Detail form for printing
	*	**Table forms** - Detail form, Detail form for printing, List form, List form for printing

6.	(Optional) Select a storage folder for the form.
If you select a folder name from the drop-down list, the form will be placed in this folder. Folders can be used to organize the objects of your applications and are managed on the Home Page of the Explorer. By default, the form is created at the Top Level, *i.e.*, not in any storage folder.

7.	Click **OK**. The blank form is then opened in a new window of the Form editor.



### Dynamically

Dynamic Forms are forms whose structures are defined in either a .json file or a 4D object. For more information, see [Dynamic Forms](https://doc.4d.com/4Dv18/4D/18/Dynamic-Forms.300-4575729.en.html).




## Creating a multi-page form  

You can create multiple pages for an input form. If you have more fields or variables than will fit on one screen, you may want to create additional pages to display them. Multiple pages allow you to do the following:

*	Place the most important information on the first page and less important information on other pages.
*	Organize each topic on its own page.
*	Reduce or eliminate scrolling during data entry.
*	Provide space around the form elements for an attractive screen design.

Multiple pages are a convenience used for input forms only. They are not for printed output. When a multi-page form is printed, only the first page is printed.

There are no restrictions on the number of pages a form can have. The same field can appear any number of times in a form and on as many pages as you want. However, the more pages you have in a form, the longer it will take to display it.

A multi-page form has both a background page and several display pages. In the Form editor, objects that are placed on the background page may be visible on all display pages, but can be selected and edited only on the background page. In multi-page forms, you should put your button palette on the background page.

You also need to include one or more objects on the background page that provide page navigation tools for the user. For information on adding page navigation tools, see the [Adding page navigation controls](#adding-page-navigation-controls) section.


### Adding a display page to a form  

Every form has at least one display page and a background page. The current page number appears in the toolbar of the form window. This area also includes a pop-up menu that allows you to select the displayed page.

![](assets/en/FormObjects/formDisplayedPage.png)

To add a display page:

1.	Choose **Add Page** from the **Form** menu. 4D creates a new page.
	
	OR
	
	Move to the last page of the form, then click the **Next Page** icon ( **>** ) in the toolbar. 4D displays a dialog box asking if you want to add a page. 
2.	Click **OK** to create the new page. 

	A new, blank display page appears in the Form editor window. The page number area of the window displays the number of the page you are viewing. You can now add fields and other form elements to the new page.

To insert a display page before the current page:

1.	Choose **Insert Page** from the **Form** menu. 4D inserts a new page before the current page and displays it on screen.

### Moving from page to page  

When you want to display the background page or move to another display page, you can either use the page navigation tools in the Tools palette or the page pop-up menu in the Form editor window. 

##### To display the background page (page 0)

1.	Move to the first page of the form and click the **Previous Page** icon ( **<** ) in the toolbar.

	OR

	Use the Page pop-up menu to move to page 0.

	OR

	Select 0 from the **Goto Page>** submenu in the **Form** menu.

	OR

	Press **Alt+click** (Windows) or **Option+click** (Mac OS) on an object belonging to page 0, or specifically outside any object belonging to the current page (the Alt+click or Option+click shortcuts on an object of the current page creates or opens the object method).

	4D displays the background page. The page number of the background page is zero (0). Objects located on the background page are displayed on each page. You can place any object type on the background page.

>There should be no confusion between using the **Page 0** menu item from the **Display** submenu and actually making the background page the currently displayed page. Selecting the **Page 0** menu item from the **Display** submenu only displays or hides the items of the background page in the current page. For more information, refer to [Showing/Hiding Elements in the Form Editor](https://doc.4d.com/4Dv18/4D/18/Form-editor.300-4575716.en.html#108107).

#### To use the page navigation tools

1.	To move to the next page, click the **Next Page** icon ( **>** ) in the toolbar.
	
	4D displays the page immediately following or prior to the current page.

If you click the **Previous Page** icon while viewing the first page of the form, the background page appears. 

If you click the **Previous Page** icon while viewing the background page, nothing happens. If you click the **Next Page** icon while viewing the last page of the form, 4D asks if you want to create another page for the form.

##### To display any page

1.	Click on the page number area and hold down the mouse button to display the associated pop-up menu.

	OR

	Display the **Goto Page>** submenu of the **Form** menu.

2.	Choose the desired page number.

### Deleting a page  

You can delete unwanted display pages from a multi-page form. Any fields or other objects on the deleted pages will be deleted as well. The remaining pages are renumbered. You cannot delete the first page or the background page in a form that consists only of these two pages. 

#### To delete a page from the form

1.	Use either the page navigation tools or the page pop-up menu to display the page you want to delete.

2.	Choose **Delete Page** from the **Form** menu.

	A dialog box appears verifying that you want to delete the page from the form.

3.	Click **OK**.
The page and any objects on the page are removed from the form.


### Adding page navigation controls  

When you create a multi-page form, you need to provide a way for users to move from one page to another. 4D provides three ways that you can use to add navigation tools:

*	**Tab control**: The tab control object gives users random access to individual pages. You place the tab control on the background page of the form and use its properties to provide page navigation controls.

*	**Automatic buttons**: You can add automatic page navigation buttons to the form —First Page, Last Page, Previous Page, and Next Page. These buttons should be placed on the background pages.

*	**Object methods**: In addition, the language includes the `FORM GOTO PAGE` command. You can use this command as part of an object method to create custom navigation controls using any suitable object type. For example, you can choose to use a picture button or pop-up menu to provide page navigation controls.

#### Adding page navigation buttons

You can include page navigation buttons when you generate the form using the Buttons page of the Form Wizard. After the form is generated, open it in the Form editor and add the necessary pages. If you need to add the page navigation buttons after the form is created, you can do so using the button creation tool in the object bar. For more information, see [Buttons](buttonOverview.html).

#### Using a tab control

The tab control provides a visual indication of the current page and the remaining pages. For information on creating and activating a tab control, see [Tab Controls](tabControl.html).


## Designating input and output forms  

>Only table forms can be designated as input or output forms. 

Each table has one current input form and one current output form. The input form is used for entering and modifying records, and the output form is used to list records. Usually, you use a Detail form for input and a List form for output.

You can change which form to use for input and output at any time. This change can be made in the **List of tables window** as well as using the `FORM SET INPUT` and `FORM SET OUTPUT` commands. In this case, the changes only apply to the current work session. 

You can also specify default input and output forms in the Design environment. In this case, the changes will be saved with the database.

To change the input and output forms for a table:

1.	Display the **Forms Page** of the Explorer.
2.	Expand the table for which you want to modify the default input or output form.
	The letter I is displayed next to the name of the current Input form and the letter O is displayed next to the current Output form.
3.	Right-click on the name of the form to be designated and choose the Input Form or Output Form command in the context menu.

	OR
	
	Choose the **Input Form** or **Output Form** command in the options menu of the Explorer.

You can also designate the same form as the Input and Output form. In this case the character B (for Both) will be displayed next to it.








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



## Renaming a form  
 
You can rename the form in the Property List or using the **Forms Page** of the Explorer.

You use the names of forms when you are establishing default input and output forms for a table and in commands that accept a form name as a parameter, such as `FORM SET INPUT` and `FORM SET OUTPUT`.

You cannot use the same name for more than one project form, or for more than one form per table. This will confuse 4D when you try to refer to a form by name. You can, however, use the same form name with different tables. For example, you can name all your input forms “Input” and all your output forms “Output.”

>If you rename a form that is referred to elsewhere in the database (such as in methods), be sure to update the references to this form. To do this, you can use the search and replace function in the Design environment (see [Renaming](https://doc.4d.com/4Dv18/4D/18/Renaming.300-4575730.en.html)).

### via the Explorer

1.	Display the **Forms Page** of the Explorer.
	A hierarchical list of tables and forms appears.
2.	Hold down the **Alt** key (Windows) or the *Option* key (macOS) and click on the form name.
	
	OR
	
	Click twice on the name of the form you want to change.
	
	The form name becomes editable.
3.	Enter the new name.
4.	Press **Tab** or click anywhere outside the entry area to save the new name.

### via the Property List window 

1.	Display the form properties in the Property List.
2.	Enter a name in the **Form Name** area.






## Deleting a form  

You can delete any project form or any table form that is not designated as a current input or output form (or both). The deletion button is disabled when you select the current input or output form.

To delete a form:

1.	Display the **Forms Page** of the Explorer.
2.	Expand the “Project Forms” theme or the table that contains the form you want to delete.
3.	Select the form you want to delete and click the deletion button ( **-** ) of the Explorer.

	OR
	
	Use the **Delete Form** command in the context menu of the Explorer (right-click on the form name).
	
	4D asks you to confirm the deletion.
4.	Click  **OK**.
	
	4D deletes the form. The form is moved to the Trash and can be recovered at any time so long as the Trash has not been emptied (see [Trash Page](https://doc.4d.com/4Dv18/4D/18/Trash-Page.300-4575681.en.html)). 

>It is also possible to delete a form from the **Home Page** of the Explorer (using the same procedure).


## Printing a form  

Each form has a maximum area of about 1,245 square feet. You scroll to bring hidden portions of the form into view. For viewing on screen, your form design can use this entire area. You can scroll to view any element you place in the form.

For printing, form elements must fit within a single page width, but may be several pages in length. The actual size of a page depends on your printing device, the paper it is using, and the specifications you enter in the Page Setup dialog box. 4D displays page border lines in the Form editor. These lines indicate the page limits. The page border lines respond to any page setup changes. 

The page setup specifications are stored with the form when it is closed. The form’s limits can be displayed or hidden using the **Paper** command in the **Display** submenu of the Form editor (see [Showing/hiding elements in the Form editor](https://doc.4d.com/4Dv18/4D/18/Form-editor.300-4575716.en.html#108107)). 

The figure below shows the page border lines:

![](assets/en/FormObjects/formPaper.png)



## Saving forms  
 
It is a good idea to save any changes you make to a form, especially when using 4D Server with multiple users. You can save a form by closing or saving it. You can close a form by clicking its close box or by choosing **Close Form: Name** from the **File**. To save a form without closing it, choose **Save Form: Name** from the **File** menu.

Once a form has been saved, you can continue to work on it. If you make a mistake or do not like the changes you have made, you can revert to the last saved version of the form. This makes the form appear exactly as it did the last time that it was saved. To do this, choose **Revert...** from the **File** menu.

>**4D Server**: When a form is saved in the Design environment, users are able to see your changes the next time they open the form.

## Supported Properties
[Action](propertiesForm.md#action) - [Associated Menu Bar](propertiesMenu.md#associated-menu-bar) - [Fixed Height](propertiesWindowSize.md#fixed-height) - [Fixed Width](propertiesWindowSize.md#fixed-width) - [Form Name](propertiesForm.md#form-name) - [Form Size](propertiesForm.md#form-size) - [Form Type](propertiesForm.md#form-type) - [Inherited Form Name](propertiesForm.md#inherited-form-name) - [Inherited Form Table](propertiesForm.md#inherited-form-table) - [Markers](propertiesForm.md#markers) - [Maximum Height](propertiesWindowSize.md#maximum-height) - [Maximum Width](propertiesWindowSize.md#maximum-width) - [Minimum Height](propertiesWindowSize.md#minimum-height) - [Minimum Width](propertiesWindowSize.md#minimum-width) - [Pages](propertiesForm.md#pages) - [Print Settings](propertiesPrint.md#print-settings) - [Published as Subform](propertiesForm.md#published-as-subform) - [Save Geometry](propertiesForm.md#save-geometry) - [Window Title](propertiesForm.md#window-title)
