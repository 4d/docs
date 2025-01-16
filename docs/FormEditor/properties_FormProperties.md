---
id: propertiesForm
title: Form Properties
---

---

## Color Scheme

>Color scheme property is only applied on macOS.

This property defines the color scheme for the form. By default when the property is not set, the value for a color scheme is **inherited** (the form uses the scheme defined at the [application level](../commands-legacy/set-application-color-scheme.md)). This can be changed for the form to one of the following two options:

*	dark - light text on a dark background 
*	light - dark text on a light background

>A defined color scheme can not be overridden by a CSS.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|colorScheme |string |"dark", "light"|

---

## CSS

This property allows you to load specific CSS file(s) for the form. 

A CSS file defined at the form level will override default style sheet(s). For more information, please refer to [Style sheets](createStylesheet.md) page.


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|css |string or collection |CSS file path(s) provided as:<li>a string (a file for both platforms)</li><li>a collection of strings (a list of files for both platform)</li><li>a collection of {"path":string;"media":"mac" &#124; "win"} objects </li> |

---




## Form Class

Name of an existing [user class](../Concepts/classes.md#class-definition) to associate to the form . The user class can belong to the host project or to a [component](../Extensions/develop-components.md#sharing-of-classes), in which case the formal syntax is "[*componentNameSpace*](../settings/general.md#component-namespace-in-the-class-store).className".

Associating a class to the form provides the following benefits:

- When you work in the [Form editor](../FormEditor/formEditor.md), the associated class is used for accurate syntax checking of expressions such as `Form.myProperty` in all areas of the [Property list](../FormEditor/formEditor.md#property-list) that support [expressions](../Concepts/quick-tour.md#expressions) (e.g. **Variable or Expression**, **Font color expression**...). Errors are displayed in red and warnings are displayed in yellow in the left column of the Property list and you can hover it to get explanations: 

![](../assets/en/FormObjects/warning-proplist.png)

- The detection of errors in the code of form object expressions by the [compiler](../Project/compiler.md) is improved. 
 
- You can also to benefit from [autocompletion features](../code-editor/write-class-method.md#autocomplete-functions) in the code editor. 

- When the form is executed, 4D automatically instantiates a user class object for the form, which is returned by the [`Form`](../commands/form.md) object. Your code can directly access class functions defined in the user class through the `Form` command (e.g. `Form.message()`) without having to pass a *formData* object as parameter to the [`DIALOG`](../commands/dialog.md), [`Print form`](../commands/print-form.md), or [`FORM LOAD`](../commands/form-load.md) commands. 

:::note

See [this blog post](http://blog.4d.com/empower-your-development-process-with-your-forms) for an illustration of this feature.

:::

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|formClass |string |name of an existing user class ("*className*" or "*componentNameSpace*.*className*")|

---




## Form Name

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.


#### JSON Grammar

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Form Type  

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Each table in a database generally has at least two table forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):


- Output form - the *output form* or *list form* displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record.
![](../assets/en/FormObjects/formOutput.png)	

- Input form - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). 
![](../assets/en/FormObjects/formInput.png)
	

Supported types depend on the form category:


|Form Type|JSON grammar|Description|Supported with|
|---|---|---|---|
|Detail Form|detailScreen|A display form for data entry and modification|Project forms - Table forms|
|Detail Form for Printing|detailPrinter|A printed report with one page per record, such as an invoice|Project forms - Table forms|
|List Form|listScreen|A form for listing records on the screen|Table forms|
|List Form for Printing|listPrinter|A printed report that list records|Table forms|
|None|*no destination*|A form with no specific feature|Project forms - Table forms|


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|destination |string |"detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Inherited Form Name 

This property designates the [form to inherit](forms.md#inherited-forms) in the current form. 

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\<None>` in the Property List (or " " in JSON).


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|inheritedForm|string |Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form|

---


## Inherited Form Table

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to `\<None>` in the Property List (or " " in JSON) to inherited from a project form.




#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|inheritedFormTable|string or number |table name or table number|


---

## Pages

Each form has is made of at least two pages:

- a page 0 (background page)
- a page 1 (main page)

For more information, please refer to [Form pages](forms.md#form-pages).


#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|pages |collection |Collection of pages (each page is an object, page 0 is the first element|

---

## Published as Subform

For a component form to be selected as a [subform](FormObjects/subform_overview.md) in a host application, it must have been explicitly shared. When this property is selected, the form will be published in the host application. 

Only project forms can be specified as published subforms. 



#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|shared |boolean |true, false|


---

## Save Geometry  

When the option is used, if the window is opened using the `Open form window` command with the `*` parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

*	the current page,
*	the position, size and visibility of each form object (including the size and visibility of list box columns).

>This option does not take into account objects generated using the `OBJECT DUPLICATE` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects. 

When this option is selected, the [Save Value](FormObjects/properties_Object.md#save-value) option is available for certain objects. 

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|memorizeGeometry|boolean |true, false|

#### See also
[**Save Value**](FormObjects/properties_Object.md#save-value)


---

## Window Title  

The window title is used when the form is opened using the `Open form window` and `Open window` 4D commands in Application environment. The window title appears in the Title bar of the window.

You can use dynamic references to set the window titles for forms, *i.e.*:

*	A standard XLIFF reference stored in the Resources folder.
*	A table or field label: The syntax to apply is `<?[TableNum]FieldNum>` or `<?[TableName]FieldName>`.
*	A variable or a field: The syntax to apply is `\<VariableName>` or `<[TableName]FieldName>`. The current value of the field or variable will be displayed in the window title.

> The number of characters for a window title is limited to 31.

#### JSON Grammar

|Name|Data Type|Possible Values|
|---|---|---|
|windowTitle |string |The name of the window as plain text or as a reference|


