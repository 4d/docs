---
id: propertiesObject
title: Objets
---

---

## Type

`PARAMETRAGE OBLIGATOIRE`

Cette propriété désigne le type [objet de formulaire actif ou inactif](formObjects_overview.md).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                                                                                                                                                                                                                                                                                        |
| ---- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string          | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Nom d'objet

Each active form object is associated with an object name. Each object name must be unique.

> Object names are limited to a size of 255 bytes.

When using 4D’s language, you can refer to an active form object by its object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects, refer to [Identifiers](Concepts/identifiers.md) section.

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles                                                    |
| ---- | --------------- | -------------------------------------------------------------------- |
| name | string          | Any allowed name which does not belong to an already existing object |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Save value

This property is available when the [Save Geometry](FormEditor/properties_FormProperties.md#save-geometry) option is checked for the form.

This feature is only supported for objects that contribute to the overall geometry of the form. For example, this option is available for check boxes because their value can be used to hide or display additional areas in the window.

Here is the list of objects whose value can be saved:

| Object                                     | Saved value                                                                                               |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [Check Box](checkbox_overview.md)          | Value of associated variable (0, 1, 2)                                                 |
| [Drop-down List](dropdownList_Overview.md) | Number of selected row                                                                                    |
| [Radio Button](radio_overview.md)          | Value of associated variable (1, 0, True or False for buttons according to their type) |
| [Tab control](tabControl.md)               | Number of selected tab                                                                                    |

#### Grammaire JSON

| Nom           | Type de données | Valeurs possibles |
| ------------- | --------------- | ----------------- |
| memorizeValue | boolean         | true, false       |

#### Objets pris en charge

[Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Radio Button](radio_overview.md) - [Tab control](tabControl.md)

---

## Variable ou expression

> Voir également **[Expression](properties_DataSource.md#expression)** pour les colonnes de list box de type sélection et collection.

This property specifies the source of the data. Each active form object is associated with an object name and a variable name. The variable name can be different from the object’s name. In the same form, you can use the same variable several times while each [object name](#object-name) must be unique.

> Variable name size is limited to 31 bytes. See [Identifiers](Concepts/identifiers.md) section for more information about naming rules.

The form object variables allow you to control and monitor the objects. For example, when a button is clicked, its variable is set to 1; at all other times, it is 0. The expression associated with a progress indicator lets you read and change the current setting.

Variables or expressions can be enterable or non-enterable and can receive data of the Text, Integer, Numeric, Date, Time, Picture, Boolean, or Object type.

#### Grammaire JSON

| Nom        | Type de données         | Valeurs possibles                                                                                                                                                                                                                                         |
| ---------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | string, or string array | <li>4D variable, field name, or any expression.</li><li>Empty string for [dynamic variables](#dynamic-variables).</li><li>String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column]</li> |

### Expressions

Vous pouvez utiliser une [expression](Concepts/quick-tour.md#expressions) comme source de données pour un objet. Toute expression 4D valide est autorisée : expression simple, propriété d'objet, formule, fonction 4D, nom de méthode projet ou champ utilisant la syntaxe standard `[Table]Field`. The expression is evaluated when the form is executed and reevaluated for each form event. Note that expressions can be [assignable or non-assignable](Concepts/quick-tour.md#expressions).

> If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.

### Dynamic variables

You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `dataSource` JSON field) blank.

When a variable is not named, when the form is loaded, 4D creates a new variable for the object, with a calculated name that is unique in the space of the process variables of the interpreter (which means that this mechanism can be used even in compiled mode). This temporary variable will be destroyed when the form is closed.
In order for this principle to work in compiled mode, it is imperative that dynamic variables are explicitly typed. Il existe deux façons de procéder :

- You can set the type using the [Expression type](#expression-type) property.
- You can use a specific initialization code when the form is loaded that uses, for example, the `VARIABLE TO VARIABLE` command:

```4d
 If(Form event code=On Load)
    var $init : Text
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

In the 4D code, dynamic variables can be accessed using a pointer obtained with the `OBJECT Get pointer` command. Par exemple :

```4d
  // assign the time 12:00:00 to the variable for the "tstart" object
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

There are two advantages with this mechanism:

- On the one hand, it allows the development of "subform" type components that can be used several times in the same host form. Let us take as an example the case of a datepicker subform that is inserted twice in a host form to set a start date and an end date. This subform will use objects for choosing the date of the month and the year. It will be necessary for these objects to work with different variables for the start date and the end date. Letting 4D create their variable with a unique name is a way of resolving this difficulty.
- On the other hand, it can be used to limit memory usage. In fact, form objects only work with process or inter-process variables. However, in compiled mode, an instance of each process variable is created in all the processes, including the server processes. This instance takes up memory, even when the form is not used during the session. Therefore, letting 4D create variables dynamically when loading the forms can save memory.

### Array List Box

For an array list box, the **Variable or Expression** property usually holds the name of the array variable defined for the list box, and for each column. However, you can use a string array (containing arrays names) as *dataSource* value for a list box column to define a [hierarchical list box](listbox_overview.md#hierarchical-list-boxes).

#### Objets pris en charge

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md#overview) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md)

---

## Expression Type

> This property is called [**Data Type**](properties_DataSource.md#data-type-expression-type) in the Property List for [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns and for [Drop-down Lists](dropdownList_Overview.md) associated to an [object](FormObjects/dropdownList_Overview.md#using-an-object) or an [array](FormObjects/dropdownList_Overview.md#using-an-array).

Specify the data type for the expression or variable associated to the object. Note that main purpose of this setting is to configure options (such as display formats) available for the data type. It does not actually type the variable itself. En vue d'une compilation de projet, vous devez [déclarer la variable](Concepts/variables.md#declaring-variables).

However, this property has a typing function in the following specific cases:

- **[Dynamic variables](#dynamic-variables)**: you can use this property to declare the type of dynamic variables.
- **[List Box Columns](listbox_overview.md#list-box-columns)**: this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. The Text type does not have specific display formats. Any existing custom formats are also available.
- **[Picture variables](input_overview.md)**: you can use this menu to declare the variables before loading the form in interpreted mode. Specific native mechanisms govern the display of picture variables in forms. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property.
  Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).

#### Grammaire JSON

| Nom                | Type de données | Valeurs possibles                                                                                                                                                                                                                                                                                                                    |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dataSourceTypeHint | string          | <li>**standard objects:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li> |

#### Objets pris en charge

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## CSS Class

A list of space-separated words used as class selectors in [css files](FormEditor/createStylesheet.md#style-sheet-files).

#### Grammaire JSON

| Nom   | Type de données | Valeurs possibles                                                            |
| ----- | --------------- | ---------------------------------------------------------------------------- |
| class | string          | One string with CSS name(s) separated by space characters |

#### Objets pris en charge

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Collection ou entity selection

To use collection elements or entities to define the row contents of the list box.

Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection.

The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [`This`](../Concepts/classes.md#this) keyword:

- if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example `This.<propertyPath>`.
- if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example `This.<attributePath>`.

> Si vous avez utilisé une collection de valeurs scalaires (et non des objets), 4D vous permet d'afficher chaque valeur en appelant **This.value** dans l'expression datasource. However in this case you will not be able to modify values or to access the current object (see below).

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles                                                            |
| ---------- | --------------- | ---------------------------------------------------------------------------- |
| dataSource | string          | Expression that returns a collection or an entity selection. |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Source de données

Specify the type of list box.

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(default): use array elements as the rows of the list box.
- **Current Selection**: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.
- **Named Selection**: use expressions, fields or methods whose values will be evaluated for each record of a named selection.
- **Collection or Entity Selection**: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the [Collection or Entity Selection](properties_Object.md#collection-or-entity-selection) property.

#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                           |
| ----------- | --------------- | ----------------------------------------------------------- |
| listboxType | string          | "array", "currentSelection", "namedSelection", "collection" |

#### Objets pris en charge

[List Box](listbox_overview.md)

---

## Plug-in Kind

Name of the [plug-in external area](pluginArea_overview.md) associated to the object. Plug-in external area names are published in the manifest.json file of the plug-in.

#### Grammaire JSON

| Nom            | Type de données | Valeurs possibles                                                                |
| -------------- | --------------- | -------------------------------------------------------------------------------- |
| pluginAreaKind | string          | Name of the plug-in external area (starts with a % character) |

#### Objets pris en charge

[Plug-in Area](pluginArea_overview.md)

---

## Radio Group

Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.

#### Grammaire JSON

| Nom        | Type de données | Valeurs possibles |
| ---------- | --------------- | ----------------- |
| radioGroup | string          | Radio group name  |

#### Objets pris en charge

[Radio Button](radio_overview.md)

---

## Titre

Allows inserting a label on an object. The font and the style of this label can be specified.

You can force a carriage return in the label by using the \ character (backslash).

![](../assets/en/FormObjects/property_title.png)

To insert a \ in the label, enter "\\".

By default, the label is placed in the center of the object. When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#titlepicture-position) property.

For application translation purposes, you can enter an XLIFF reference in the title area of a button (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### Grammaire JSON

| Nom  | Type de données | Valeurs possibles |
| ---- | --------------- | ----------------- |
| text | string          | any text          |

#### Objets pris en charge

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Variable Calculation

This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.

> The calculation for footers can also be set using the [`LISTBOX SET FOOTER CALCULATION`](https://doc.4d.com/4dv19/help/command/en/page1140.html) 4D command.

There are several types of calculations available. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):

| Calculation                               | Num | Text | Date | Time | Bool | Pict | footer var type     |
| ----------------------------------------- | --- | ---- | ---- | ---- | ---- | ---- | ------------------- |
| Minimum                                   | X   | X    | X    | X    | X    |      | Same as column type |
| Maximum                                   | X   | X    | X    | X    | X    |      | Same as column type |
| Sum                                       | X   |      |      | X    | X    |      | Same as column type |
| Count                                     | X   | X    | X    | X    | X    | X    | Integer             |
| Average                                   | X   |      |      | X    |      |      | Real                |
| Standard deviation(\*) | X   |      |      | X    |      |      | Real                |
| Variance(\*)           | X   |      |      | X    |      |      | Real                |
| Sum squares(\*)        | X   |      |      | X    |      |      | Real                |
| Custom ("none")        | X   | X    | X    | X    | X    | X    | Any                 |

(\*) Only for array type list boxes.

> Seules les [variables](Concepts/variables.md) déclarées ou dynamiques peuvent être utilisées pour afficher les calculs des pieds de listbox. Les autres types d'[expressions](Concepts/quick-tour.md#expressions) telles que `Form.sortValue` ne sont pas pris en charge.

Automatic calculations ignore the shown/hidden state of list box rows. If you want to restrict a calculation to only visible rows, you must use a custom calculation.

*Null* values are not taken into account for any calculations.

If the column contains different types of values (collection-based column for example):

- Average and Sum only take numerical elements into account (other element types are ignored).
- Minimum and Maximum return a result according to the usual type list order as defined in the [collection.sort()](API/CollectionClass.md#sort) function.

Using automatic calculations in footers of columns based upon expressions has the following limitations:

- it is **supported** with all list box types when the expression is "simple" (such as `[table]field` or `this.attribute`),
- it is **supported but not recommended** for performance reasons with collection/entity selection list boxes when the expression is "complex" (other than `this.attribute`) and the list box contains a large number of rows,
- it is **not supported** with current selection/named selection list boxes when the expression is "complex". You need to use custom calculations.

When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.

#### Grammaire JSON

| Nom                 | Type de données | Valeurs possibles                                                                                     |
| ------------------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string          | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objets pris en charge

[List Box Footer](listbox_overview.md#list-box-footers)
