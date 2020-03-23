---
id: propertiesObject
title: Objects
---

* * *

## Typ

`MANDATORY SETTING`

This property designates the type of the [active or inactive form object](formObjects_overview.md).

#### JSON Grammar

| Name | Datentyp | Possible Values                                                                                                                                                                                                                                                                                          |
| ---- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string   | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |


#### Objects Supported

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

* * *

## Object Name

Each active form object is associated with an object name. Each object name must be unique.

> Object names are limited to a size of 255 bytes.

When using 4D’s language, you can refer to an active form object by its object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects, refer to [Identifiers](Concepts/identifiers.md) section.

#### JSON Grammar

| Name | Datentyp | Possible Values                                                      |
| ---- | -------- | -------------------------------------------------------------------- |
| name | string   | Any allowed name which does not belong to an already existing object |


#### Objects Supported

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

* * *

## Variable or Expression

> See also **[Expression](properties_DataSource#expression)** for Selection and collection type list box columns.

This property specifies the source of the data. Each active form object is associated with an object name and a variable name. The variable name can be different from the object’s name. In the same form, you can use the same variable several times while each [object name](#object-name) must be unique.

> Variable name size is limited to 31 bytes. See [Identifiers](Concepts/identifiers.md) section for more information about naming rules.

The form object variables allow you to control and monitor the objects. For example, when a button is clicked, its variable is set to 1; at all other times, it is 0. The expression associated with a progress indicator lets you read and change the current setting.

Variables or expressions can be enterable or non-enterable and can receive data of the Text, Integer, Numeric, Date, Time, Picture, Boolean, or Object type.

### Ausdrücke

You can use an expression as data source for an object. Any valid 4D expression is allowed: simple expression, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. The expression is evaluated when the form is executed and reevaluated for each form event. Note that expressions can be [assignable or non-assignable](Concepts/quick-tour.md#expressions).

> If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.

### Dynamic variables

You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `dataSource` JSON field) blank.

When a variable is not named, when the form is loaded, 4D creates a new variable for the object, with a calculated name that is unique in the space of the process variables of the interpreter (which means that this mechanism can be used even in compiled mode). This temporary variable will be destroyed when the form is closed. In order for this principle to work in compiled mode, it is imperative that dynamic variables are explicitly typed. There are two ways to do this:

- You can set the type using the [Expression type](#expression-type) property. 
- You can use a specific initialization code when the form is loaded that uses, for example, the `VARIABLE TO VARIABLE` command:

```4d
 If(Form event=On Load)
    C_TEXT($init)
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

In the 4D code, dynamic variables can be accessed using a pointer obtained with the `OBJECT Get pointer` command. Beispiel:

```4d
  // assign the time 12:00:00 to the variable for the "tstart" object
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

There are two advantages with this mechanism:

- On the one hand, it allows the development of "subform" type components that can be used several times in the same host form. Let us take as an example the case of a datepicker subform that is inserted twice in a host form to set a start date and an end date. This subform will use objects for choosing the date of the month and the year. It will be necessary for these objects to work with different variables for the start date and the end date. Letting 4D create their variable with a unique name is a way of resolving this difficulty.
- On the other hand, it can be used to limit memory usage. In fact, form objects only work with process or inter-process variables. However, in compiled mode, an instance of each process variable is created in all the processes, including the server processes. This instance takes up memory, even when the form is not used during the session. Therefore, letting 4D create variables dynamically when loading the forms can save memory.

### Hierarchical List Box

Using a string array (collection of arrays names) as *dataSource* value for a list box column defines a [hierarchical list box](listbox_overview.md#hierarchical-list-boxes).

#### JSON Grammar

- 4D variable, field name, or arbitrary complex language expression. 
    - Empty string for [dynamic variables](#dynamic-variables). 
        - String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column]</td> </tr> </tbody> </table> 
            #### Objects Supported
            
            [4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Tab control](tabControl.md) - [Subform](subform_overview.md#overview) - [Radio Button](radio_overview.md) - [Web Area](webArea_overview.md)
            
            * * *
            
            ## Expression Type
            
            > This property is called **Data Type** in the Property List for Selection and collection type list box columns.
            
            Specify the data type for the expression or variable associated to the object. Note that main purpose of this setting is to configure options (such as display formats) available for the data type. It does not actually type the variable itself. In view of database compilation, you must use the 4D language commands of the `Compiler` theme.
            
            However, this property has a typing function in the following specific cases:
            
            - **[Dynamic variables](#dynamic-variables)**: you can use this property to declare the type of dynamic variables.
            - **[List Box Columns](listbox_overview.md#list-box-columns)**: this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. The Text type does not have specific display formats. Any existing custom formats are also available.
            - **[Picture variables](input_overview.md)**: you can use this menu to declare the variables before loading the form in interpreted mode. Specific native mechanisms govern the display of picture variables in forms. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property. Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).
            #### JSON Grammar
            
            - **standard objects:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"
                - **list box columns:** "boolean", "number", "picture", "text", date" (*array/selection list box only*) "integer", "time", "object"</td> </tr> </tbody> </table> 
                    #### Objects Supported
                    
                    [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)
                    
                    * * *
                    
                    ## CSS Class
                    
                    A list of space-separated words used as class selectors in css files.
                    
                    #### JSON Grammar
                    
                    | Name  | Datentyp | Possible Values                                           |
                    | ----- | -------- | --------------------------------------------------------- |
                    | class | string   | One string with CSS name(s) separated by space characters |

                    
                    #### Objects Supported
                    
                    [4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)
                    
                    * * *
                    
                    ## Collection or entity selection
                    
                    To use collection elements or entities to define the row contents of the list box.
                    
                    Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection.
                    
                    The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command:
                    
                    * if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example **This.\<propertyPath>**.
                    * if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example **This.\<attributePath>**. 
                    
                    > If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling **This.value** in the datasource expression. However in this case you will not be able to modify values or to access the current ite object (see below) Note: For information about entity selections, please refer to the [ORDA](https://doc.4d.com/4Dv17R6/4D/17-R6/ORDA.200-4354624.en.html) chapter.
                    
                    #### JSON Grammar
                    
                    | Name       | Datentyp | Possible Values                                              |
                    | ---------- | -------- | ------------------------------------------------------------ |
                    | dataSource | string   | Expression that returns a collection or an entity selection. |

                    
                    #### Objects Supported
                    
                    [List Box](listbox_overview.md)
                    
                    * * *
                    
                    ## Data Source
                    
                    Specify the type of list box.
                    
                    ![](assets/en/FormObjects/listbox_dataSource.png)
                    
                    - **Arrays**(default): use array elements as the rows of the list box. 
                    - **Current Selection**: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.
                    - **Named Selection**: use expressions, fields or methods whose values will be evaluated for each record of a named selection.
                    - **Collection or Entity Selection**: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the [Collection or Entity Selection](properties_Object.md#collection-or-entity-selection) property. 
                    #### JSON Grammar
                    
                    | Name        | Datentyp | Possible Values                                             |
                    | ----------- | -------- | ----------------------------------------------------------- |
                    | listboxType | string   | "array", "currentSelection", "namedSelection", "collection" |

                    
                    #### Objects Supported
                    
                    [List Box](listbox_overview.md)
                    
                    * * *
                    
                    ## Plug-in Kind
                    
                    Name of the [plug-in external area](pluginArea_overview.md) associated to the object. Plug-in external area names are published in the manifest.json file of the plug-in.
                    
                    #### JSON Grammar
                    
                    | Name           | Datentyp | Possible Values                                               |
                    | -------------- | -------- | ------------------------------------------------------------- |
                    | pluginAreaKind | string   | Name of the plug-in external area (starts with a % character) |

                    
                    #### Objects Supported
                    
                    [Plug-in Area](pluginArea_overview.md)
                    
                    * * *
                    
                    ## Radio Group
                    
                    Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.
                    
                    #### JSON Grammar
                    
                    | Name       | Datentyp | Possible Values  |
                    | ---------- | -------- | ---------------- |
                    | radioGroup | string   | Radio group name |

                    
                    #### Objects Supported
                    
                    [Radio Button](radio_overview.md)
                    
                    * * *
                    
                    ## Title
                    
                    Allows inserting a label on an object. The font and the style of this label can be specified.
                    
                    You can force a carriage return in the label by using the \ character (backslash).
                    
                    ![](assets/en/FormObjects/property_title.png)
                    
                    To insert a \ in the label, enter "&#92;&#92;".
                    
                    By default, the label is placed in the center of the object. When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) property.
                    
                    For database translation purposes, you can enter an XLIFF reference in the title area of a button (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).
                    
                    #### JSON Grammar
                    
                    | Name | Datentyp | Possible Values |
                    | ---- | -------- | --------------- |
                    | Text | string   | any text        |

                    
                    #### Objects Supported
                    
                    [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)
                    
                    * * *
                    
                    ## Variable Calculation
                    
                    This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.
                    
                    > The calculation for footers can also be set using the `LISTBOX SET FOOTER CALCULATION` 4D command.
                    
                    There are several types of calculations available. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):
                    
                    | Calculation           | Num | Text | Datum | Zeit | Bool | Pict | footer var type     |
                    | --------------------- | --- | ---- | ----- | ---- | ---- | ---- | ------------------- |
                    | Minimum               | X   |      | X     | X    | X    |      | Same as column type |
                    | Maximum               | X   |      | X     | X    | X    |      | Same as column type |
                    | Sum                   | X   |      | X     |      | X    |      | Same as column type |
                    | Count                 | X   | X    | X     | X    | X    | X    | Lange Ganzzahl      |
                    | Average               | X   |      |       | X    |      |      | Zahl                |
                    | Standard deviation(*) | X   |      |       | X    |      |      | Zahl                |
                    | Variance(*)           | X   |      |       | X    |      |      | Zahl                |
                    | Sum squares(*)        | X   |      |       | X    |      |      | Zahl                |
                    | Custom ("none")       | X   | X    | X     | X    | X    | X    | Any                 |

                    
                    (*) Only for array type list boxes.
                    
                    When an automatic calculation is set, it is applied to all the values found in the list box column. Note that the calculation does not take the shown/hidden state of list box rows into account. If you want to restrict a calculation to only visible rows, you must use a custom calculation.
                    
                    When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.
                    
                    > Automatic calculations are not supported with: * footers of columns based on formulas, * footers of [Collection and Entity selection](listbox_overview.md#collection-or-entity-selection-list-boxes) list boxes. You need to use custom calculations.
                    
                    #### JSON Grammar
                    
                    | Name                | Datentyp | Possible Values                                                                                       |
                    | ------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
                    | variableCalculation | string   | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

                    
                    #### Objects Supported
                    
                    [List Box Footer](listbox_overview.md#list-box-footers)