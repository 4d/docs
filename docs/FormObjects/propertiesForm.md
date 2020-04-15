---
id: propertiesForm
title: Forms
---

---


## Form Name

>Available only in the Property List

This property is the name of the form itself and is used to refer to the form during programming.

#### Objects Supported
[Forms](forms.md) 


---



## Form Size 
 
A form is always displayed in a window. 4D lets you set the size of both the form and the window. These properties are interdependent and your application interface results from their interaction. 
 
The following choices are available for **Size based on**:

*	**Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the **Hor. Margin** and **Vert. Margin** fields. <p>
You can then enter values (in pixels) to set additional margins to be added to the edges of the form. These values also determine the top and right-hand margins of forms used in the Label editor.<p>
	You can choose this option when you want to use active objects placed in an offscreen area (*i.e.*, outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.
	

*	**Set Size**: The size of the form will be based on what you enter (in pixels) in the **Width** and **Height** fields.

*	**object**: The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.
	

*	**Dynamic adjustment**: The Dynamic adjustment property is available in the “Form Size” theme of the Property List for forms converted from a 4D version prior to version 2004, when the **Automatic Size** property is selected. This property modifies the resizing mode of forms. <p>
In previous versions of 4D, when a form had the **Automatic Size** property, the form size was calculated only at the moment when the form was opened. If any modifications were subsequently made using commands such as `OBJECT MOVE`, the size of the form was not adjusted. Henceforth, the form size is dynamically adjusted in this case. This principle is activated for new forms. On the other hand, for compatibility reasons, the forms of converted databases do not have this property by default. If you want the size of converted forms to be dynamically adjusted, you can check the **Dynamic adjustment** option in the Property List.


> For output forms, only the **Hor. margin** or **Width** fields are available.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|formSizeAnchor| string|Name of a 4D object|
|rightMargin|integer|minimum: 0|
|bottomMargin|integer|minimum: 0|


#### Objects Supported
[Forms](forms.md) 

---


## Form Type  

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](#markers) can only be set in list (output) forms.

Each table in a database generally has at least two forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications). The form listing records is called the *output form* or *list form* and the form displaying individual records is called the *input form* or *detail form*. When viewing records using the list form, you can double-click a record to view it using the current detail form.


|Genre|Destination Type|
|---|---|
|Project forms|<li>Detail Form </li><li>Detail Form for Printing</li>|
|Table forms|<li>List Form</li><li>List Form for Printing</li>

This property determines the options that appear in the Property List for the form. 

It also allows you to restrict the number of forms displayed in the current Input and Output form selection lists (the List of tables window, see Browsing different tables and forms): only forms whose type corresponds to the list are displayed. 

When the form type is *None* in the Property List, it is displayed in both menus of the List of tables. 


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|destination |string |"detailScreen", "listScreen", "detailPrinter", "listPrinter" |

#### Objects Supported
[Forms](forms.md) 

---


## Inherited Forms 

4D forms can use and be used as “inherited forms,” meaning that all of the objects from *Form A* can be used in *Form B*. In this case, *Form B* “inherits” the objects from *Form A*. 

References to an inherited form are always active: if an element of an inherited form is modified (button styles, for example), all forms using this element will automatically be modified.
 
All forms (table and project forms) can be designated as an inherited form. However, the elements they contain must be compatible with use in different database tables.

When a form is executed, the objects are loaded and combined in the following order:

1.	Page zero of the inherited form
2.	Page 1 of the inherited form
3.	Page zero of the open form
4.	Current page of the open form.

This order determines the entry order of objects in the form.

>Only pages 0 and 1 of an inherited form can appear in other forms. 

The properties and method of a form are not considered when that form is used as an inherited form. On the other hand, the methods of objects that it contains are called.

To define an inherited form, the [Inherited Form Name](#inherited-form-name) and [Inherited Form Table](#inherited-form-table) properties must be defined in the form that will inherit something from another form.

A form can inherit from a project form, by setting the *Inherited Form Table* property to <None> in the Property List (or " " in JSON).

To stop inheriting a form, select the <None> option in the Property List (or " " in JSON) for the *Inherited Form Name* property.


>It is possible to define an inherited form in a form that will eventually be used as an inherited form for a third form. The combining of objects takes place in a recursive manner. 4D detects recursive loops (for example, if form [table1]form1 is defined as the inherited form of [table1]form1, in other words, itself) and interrupts the form chain.


### Inherited Form Name

This property designates the form to inherit.



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|inheritedForm|string |Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form|

#### Objects Supported
[Forms](forms.md) 

---


### Inherited Forms Table

This property specifies the database table to be used by the inherited form.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|inheritedFormTable|table |A table name or number|

#### Objects Supported
[Forms](forms.md) 

---


## Markers  

These properties let you specify the precise location of markers on the vertical ruler of a **table** form. Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. Any object that placed in these areas is displayed or printed at the appropriate location.

When a form is displayed or printed in Application mode, or using the integrated functions of the Design mode:

*	**Header area:** The Header area is displayed at the top of each screen and is printed at the top of each page of a report. The Header area is defined as the area above the Header control line. You make the Header area smaller or larger by dragging the Header control marker vertically. You can use the Header area for column names, for instructions, additional information, or even a graphic such as a company logo or a decorative pattern.<p>
You can also place and use active objects in the Header area of output forms displayed as subforms, in the records display window or using the `DISPLAY SELECTION` and `MODIFY SELECTION` commands.<p>
All active objects can be inserted. 

*	**Detail area:** The Detail area is displayed on the screen and printed once for each record in a report. The Detail area is defined as the area between the Header control line and the Detail control line. You make this area smaller or larger by dragging the Detail control marker vertically. Whatever you place in the Detail area is displayed or printed once for each record. Most often you place fields or variables in the Detail area so that the information in each record is displayed or printed, but you can place other elements in the Detail area as well.

*	**Break areas:** Break areas are displayed once at the end of the list of records and are printed once after the records have been printed in a report. In the report above, the Break area is defined as the area between the Detail control line and the Break control line. There can be other Break areas in your report. You make Break areas smaller or larger by dragging the Break control marker vertically. You can use a Break area to display information that is not part of the records (instructions, current date, current time, etc.), or to display a line or other graphic element that concludes the screen display. In a printed report, you can use a Break area for calculating and printing subtotals and other summary calculations.

*	**Footer area:** The Footer area is displayed on screen under the list of records. It is always printed at the bottom of every page of a report. The Footer area is defined as the area between the Break control line and the Footer control line. You make this area smaller or larger by dragging the Footer control marker vertically.<p>
You can use the Footer area to print graphics, page numbers, the current date, or any text you want at the bottom of each page of a report. For output forms designed for use on screen, the Footer area typically contains buttons that give the user options such as doing a search or sort, printing records, or putting away the current report. All active objects are accepted.

Whenever any form is used for output, either for screen display or printing, the output control lines take effect and the areas display or print at designated locations. The output control lines also take effect when a form is used as the List form in a subform area.

The output control lines have no effect when a form is used for input.

Methods that are associated with objects in these areas are executed when the areas are printed or displayed as long as the appropriate events have been activated. For example, a object method placed in the Header area is executed when the `On Header` event takes place. 

You can create additional control lines to set additional Break areas and Header areas for a report. These additional areas allow you to print subtotals and other calculations in a report and to display other information effectively. 



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|markerBody|integer	|minimum: 0|
|markerBreak|integer/integer array|minimum: 0|
|markerFooter|integer|minimum: 0|
|markerHeader|integer/integer array|integer minimum: 0; integer array minimum: 0|

#### Objects Supported
[Forms](forms.md) 


---

## Pages

This property is the collection of each page of the form. Each page is a object with an "objects" property containing the list of form  

- The first page is a background page (page zero) on which objects that appear on all display pages are placed. The background page can be used to place background graphics, buttons, a tab control, and other graphic objects that define the “look” of the page, such as rectangles and labels.
- A form contains one or more pages in which fields and other enterable objects appear. If objects don’t fit on a single page, additional pages can be created. When creating a multi-page form, you can also add buttons or a tab control to allow users to move from one page to another.


>When a multi-page table form is used as an output form (*e.g.*, when it is printed), only the first display page appears.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|pages|collection|Page objects|


#### Objects Supported
[Forms](forms.md) 


---



## Published as Subform

For a component form to be selected as a subform in a host database, it must have been explicitly designated as a "published form" in the properties dialog box of the form by selecting `Published as subform` in the host database option. Only project subforms can be specified as published subforms. 



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|shared |boolean |true, false|

#### Objects Supported
[Forms](forms.md) 

---


## Save Geometry  

When the option is used, if the window is opened using the `Open form window` command with the * parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

*	the current page,
*	the position, size and visibility of each form object (including the size and visibility of list box columns).

>This option does not take into account objects generated using the `OBJECT DUPLICATE` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects. 

When this option is used, the `Save Value` option is also available for certain objects. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| memorizeGeometry|boolean |true, false|

#### Objects Supported
[Forms](forms.md) 

---

## Window Title  

The window title is used when the form is opened using the `Open window` and `Open form window` functions in the Application environment. The default window title appears in the Title bar of the window. To set the window title, enter it in the Window Title entry area of the Property List.

You can use dynamic references to set the window titles for forms, *i.e.*:

*	A standard XLIFF reference (see `PICTURE TO BLOB`).
*	A table or field label: The syntax to apply is <?[TableNum]FieldNum> or <?[TableName]FieldName>. The reference is resolved when the `FORM SET INPUT` command is called (if the * parameter is passed and if it is followed by a call to Open window) and when the Open form window command is called.
*	A variable or a field: The syntax to apply is <VariableName> or <[TableName]FieldName>. The current value of the field or variable will be displayed in the window title.
Notes:

The number of characters for a window title is limited to 31.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowTitle |string |The name of the window|


#### Objects Supported
[Forms](forms.md) 









