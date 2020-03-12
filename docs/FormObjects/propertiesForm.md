---
id: propertiesForm
title: Forms
---

---

## Action  

Methods can be attached to a 4D form object to specify it’s action. 

4D automatically calls these methods when an event involves the forms to which they are attached.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|method|string|The name of an existing project method|


---

## Associated Menu Bar 

Menus provide menu commands that the user chooses to perform database tasks: modifying records, searching for records, printing reports, and so on. 

A menu bar is a group of menus that can be displayed on a screen together. Each menu on a menu bar can have numerous menu commands in it, including some that call cascading submenus (known as hierarchical submenus). When the user chooses a menu or submenu command, it calls a project method or a standard action that performs an operation.

You can have many separate menu bars for each database. For example, you can use one menu bar that contains menus for standard database operations and another that becomes active only for reporting. One menu bar may contain a menu with menu commands for entering records. The menu bar appearing with the input form may contain the same menu, but the menu commands are disabled because the user doesn’t need them during data entry.

To assign a menu bar to a form, select a menu bar from the “Associated Menu Bar” List in the Property List. The **[...]** button lets you access the menu bar editor directly. In the Application environment, a menu bar that is assigned to a form is added to the right of the current menu bar.

If the menu bar of the form is identical to the current menu bar, it is not added. The form menu bar will operate for both input and output forms.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|menuBar|string|Name of a menu bar|



---

## Events  

This area sets the events that can lead to the execution of the form method. When the form is used, only the events that you select will actually occur. If you do not select any events, the form method will never be called.

Your database will run faster if you deselect superfluous events.
For more information about form events, refer to the `Form event code` command.

To select or deselect all events, hold down **Ctrl** (Windows) or **Command** (macOS) and click an event.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|events|string array or number array|onActivate, onAfterEdit, onAfterKeystroke, onAfterSort, onAlternateClick, onBeforeDataEntry, onBeforeKeystroke, onBeginDragOver, onBeginURLLoading, onBoundVariableChange, onClick, onCloseBox, onCloseDetail, onCollapse, onColumnMove, onColumnResize, onDataChange, onDeactivate, onDeleteAction, onDisplayDetail, onDoubleClick, onDragOver, onDrop, onEndURLLoading, onExpand, onFooterClick, onGettingFocus, onHeader, onHeaderClick, onLoad, onLoadRecord, onLongClick, onLosingFocus, onMenuSelect, onMouseEnter, onMouseLeave, onMouseMove, onMouseUp, onOpenDetail, onOpenExternalLink, onOutsideCall, onPagechange, onPluginArea, onPrintingBreak, onPrintingDetail, onPrintingFooter, onResize, onRowMove, onScroll, onSelectionChange, onTimer, onUnload, onURLFiltering, onURLLoadingError, onURLResourceLoading, onValidate, onVPReady, onWindowOpeningDenied|


---


## Form Name










#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|| ||

---



## Form Size 
 
A form is always displayed in a window. 4D lets you set the size of both the form and the window. These properties are interdependent and your application interface results from their interaction. 
 
You set the form size properties using the “Form Size” theme of the Property List. The following choices are available:

*	**Size based on automatic size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values entered in the **Hor. margin** and **Vert. margin** fields (in pixels).
*	**Size based on et size**: The size of the form will be based on what you enter (in pixels) in the **Width** and **Height** fields (when you select the Set size option, the Hor. margin and Vert. margin fields change to Width and Height).
*	**Size based on object**: The size of the form will be based on the position of the selected form object. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.<p>
You can choose this option when you want to use active objects placed in an offscreen area (*i.e.*, outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.
*	When you select the **Automatic Size** option or a size based on an object, you have the **Hor. margin** and **Vert. margin** fields. You can then enter values (in pixels) to set additional margins to be added to the edges of the form. These values also determine the top and right-hand margins of forms used in the Label editor.
	>For output forms, only the **Hor. margin** or **Width** fields are available.
*	**Dynamic adjustment**: The Dynamic adjustment property is available in the “Form Size” theme for forms converted from a 4D version prior to version 2004, when the Automatic Size property is selected. This property modifies the resizing mode of forms. In previous versions of 4D, when a form had the **Automatic Size** property, the form size was calculated only at the moment when the form was opened. If any modifications were made subsequently using commands such as `OBJECT MOVE`, the size of the form was not adjusted. Henceforth, the form size is dynamically adjusted in this case. This principle is activated for new forms. On the other hand, for compatibility reasons, the forms of converted databases do not have this property by default. If you want the size of converted forms to be dynamically adjusted, you can check the **Dynamic adjustment** option.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|formSizeAnchor| string|Name of a 4D object|
|bottomMargin|integer|minimum: 0|
|rightMargin|integer|minimum: 0|

---


## Form Type  

You can change the form type, *i.e.* its destination, depending on the form's architecture:

|Genre|Destination Type|
|---|---|
|Project forms|<li>Detail Form </li><li>Detail Form for Printing</li>|
|Table forms|<li>List Form</li><li>List Form for Printing</li>

This property determines the options that appear in the Property List for the form. 

It also allows you to restrict the number of forms displayed in the current Input and Output form selection lists (the List of tables window, see Browsing different tables and forms): only forms whose type corresponds to the list are displayed. 

The Form Type property is found at the top of the Property List. When the form type is None, it is displayed in both menus of the List of tables. 

>You can also set the form type using the Form Properties window specific to the Explorer (see Form Properties (Explorer)).

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|destination |string |"detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---


## Inherited Form Table




#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|| ||


---


## Inherited Form Name


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|| ||

---


## Markers  

This area lets you specify the precise location of markers on the vertical ruler of the form. Markers are mainly used in output forms. They control the information that is listed and set header, breaks, detail and footer areas of the form. For more information about the use of control markers, see *Using output control lines* in the *4D Design Reference*.

>The label width triangle on the horizontal ruler controls the width of a label when you create a form for printing mailing labels using the `PRINT LABEL` command.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|markerBody|integer	|minimum: 0|
|markerBreak|integer/integer array|minimum: 0|
|markerFooter|integer|minimum: 0|
|markerHeader|integer/integer array|integer minimum: 0; integer array minimum: 0|


---

## Print  

Print properties define the page setup for the paper when a form is sent to the printer. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|paper|||
||||
||||
||||
||||
||||
|orientation|||
|size|||
|source|||
|margins|||



---

## Published as Subform





#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| | ||


---


## Save Geometry  

When the option is used, if the window is opened using the `Open form window` command with the * parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

*	the current page,
*	the position, size and visibility of each form object (including the size and visibility of list box columns).

>This option does not take into account objects generated using the `OBJECT DUPLICAT`E command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects. 

When this option is used, the `Save Value` option is also available for certain objects. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
| memorizeGeometry|boolean |true, false|



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












