---
id: propertiesForm
title: Propriétés des formulaires
---

---

## Pages

Each form has is made of at least two pages:

- a page 0 (background page)
- a page 1 (main page)

For more information, please refer to [Form pages](forms.md#form-pages).


#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                        |
| ----- | --------------- | ------------------------------------------------------------------------ |
| pages | collection      | Collection of pages (each page is an object, page 0 is the first element |

---


## Form Name

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.


#### Grammaire JSON

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Form Type

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Each table in a database generally has at least two table forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):

- Output form - the *output form* or *list form* displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record. ![](assets/en/FormObjects/formOutput.png)

- Input form - used for data entry. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). ![](assets/en/FormObjects/formInput.png)


Supported types depend on the form category:


| Form Type                | JSON grammar     | Description                                                   | Supported with              |
| ------------------------ | ---------------- | ------------------------------------------------------------- | --------------------------- |
| Detail Form              | detailScreen     | A display form for data entry and modification                | Project forms - Table forms |
| Detail Form for Printing | detailPrinter    | A printed report with one page per record, such as an invoice | Project forms - Table forms |
| List Form                | listScreen       | A form for listing records on the screen                      | Table forms                 |
| List Form for Printing   | listPrinter      | A printed report that list records                            | Table forms                 |
| None                     | *no destination* | A form with no specific feature                               | Project forms - Table forms |


#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                            |
| ----------- | --------------- | ------------------------------------------------------------ |
| destination | string          | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Inherited Form Name

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select **\<None>** in the Property List (or " " in JSON).


#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles                                                                                                  |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| inheritedForm | string          | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---


## Inherited Form Table

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to **\<None>** in the Property List (or " " in JSON) to inherited from a project form.


#### Grammaire JSON

| Nom                | Type de données  | Valeurs possibles          |
| ------------------ | ---------------- | -------------------------- |
| inheritedFormTable | string or number | table name or table number |


---

## Published as Subform

For a component form to be selected as a [subform](FormObjects/subform_overview.md) in a host database, it must have been explicitly shared. When this property is selected, the form will be published in the host database.

Only project forms can be specified as published subforms.



#### Grammaire JSON

| Nom    | Type de données | Valeurs possibles |
| ------ | --------------- | ----------------- |
| shared | boolean         | true, false       |


---

## Save Geometry

When the option is used, if the window is opened using the `Open form window` command with the `*` parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

*   the current page,
*   the position, size and visibility of each form object (including the size and visibility of list box columns).
> > This option does not take into account objects generated using the `OBJECT DUPLICATE` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects.

When this option is selected, the [Save Value](FormObjects/properties_Object.md#save-value) option is available for certain objects.

#### Grammaire JSON

| Nom              | Type de données | Valeurs possibles |
| ---------------- | --------------- | ----------------- |
| memorizeGeometry | boolean         | true, false       |

#### Voir également
[**Save Value**](FormObjects/properties_Object.md#save-value)


---

## Window Title

The window title is used when the form is opened using the `Open form window` and `Open window` 4D commands in Application environment. The window title appears in the Title bar of the window.

You can use dynamic references to set the window titles for forms, *i.e.*:

*   A standard XLIFF reference stored in the Resources folder.
*   A table or field label: The syntax to apply is <?[TableNum]FieldNum> or
*   A variable or a field: The syntax to apply is \<VariableName> or <[TableName]FieldName>. The current value of the field or variable will be displayed in the window title.

> The number of characters for a window title is limited to 31.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                      |
| ----------- | --------------- | ------------------------------------------------------ |
| windowTitle | string          | The name of the window as plain text or as a reference |


