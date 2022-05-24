---
id: dropdownListOverview
title: Lista desplegable
---

Las listas desplegables son objetos de formulario que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un objeto, array, una lista de selección o una acción estándar.

En macOS, las listas desplegables también se denominan a veces "menú emergente". Ambos nombres se refieren a los mismos objetos. Como muestra el siguiente ejemplo, el aspecto de estos objetos puede variar ligeramente según la plataforma:

![](assets/en/FormObjects/popupDropdown_appearance.png)


## Tipos de listas desplegables

You can create different types of drop-down lists with different features. To define a type, select the appropriate **Expression Type** and **Data Type** values in the Property list, or use their JSON equivalent.

| Tipo                           | Funcionalidades                                  | Tipo de expresión | Tipos de datos                  | Definición JSON                                                                                                                                               |
| ------------------------------ | ------------------------------------------------ | ----------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Objeto                         | Built upon a collection                          | Objeto            | Numeric, Text, Date o Time      | `dataSourceTypeHint: object` + `numberFormat: <format>` or `textFormat: <format>` or `dateFormat: <format>` or `timeFormat: <format>` |
| Array                          | Basado en un array                               | Array             | Numeric, Text, Date o Time      | `dataSourceTypeHint: arrayNumber` or `arrayText` or `arrayDate` or `arrayTime`                                                                                |
| Choice list saved as value     | Built upon a choice list (standard)              | Lista             | Valor del elemento seleccionado | `dataSourceTypeHint: text` + `saveAs: value`                                                                                                                  |
| Choice list saved as reference | Built upon a choice list. Item position is saved | Lista             | Selected item reference         | `dataSourceTypeHint: integer` + `saveAs: reference`                                                                                                           |
| Lista de selección jerárquica  | Can display hierarchical contents                | Lista             | List reference                  | `dataSourceTypeHint: integer`                                                                                                                                 |
| Acción estándar                | Automatically built by the action                | *any*             | *any except List reference*     | any definition + `action: <action>` (+ `focusable: false` for actions applying to other areas)                                                          |



## Gestión de listas desplegables

### Utilizar un objeto

> This feature is only available in 4D projects.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) can be used as the data source of a drop-down list. El objeto debe contener las siguientes propiedades:

| Propiedad      | Tipo                 | Descripción                                                                                                                                                                                                                                                         |
| -------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection           | Obligatorio - Colección de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:<li>strings</li><li>numbers</li><li>fechas</li><li>horas</li>If empty or not defined, the drop-down list is empty |
| `index`        | number               | Index of the currently selected item (value between 0 and `collection.length-1`). If you set -1, `currentValue` is displayed as a placeholder string                                                                                                                |
| `currentValue` | igual que Collection | Currently selected item (used as placeholder value if set by code)                                                                                                                                                                                                  |

If the object contains other properties, they are ignored.

To initialize the object associated to the drop-down list, you can:

* Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando "\<Static List>" en el tema [Fuente de datos](properties_DataSource.md) de la lista de propiedades. The default values are loaded into an object automatically.

* Execute code that creates the object and its properties. For example, if "myList" is the [variable](properties_Object.md#variable-or-expression) associated to the drop-down list, you can write in the [On Load](Events/onLoad.md) form event:

```4d
// Form.myDrop is the datasource of the form object

Form.myDrop:=New object
Form.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")
Form.myDrop.index:=-1  //currentValue is a placeholder
Form.myDrop.currentValue:="Select a fruit" 
```

The drop-down list is displayed with the placeholder string:

![](assets/en/FormObjects/fruits2.png)

After the user selects a value:

![](assets/en/FormObjects/fruits3.png)

```4d
Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]
Form.myDrop.currentValue //"oranges"
Form.myDrop.index //3
```



### Utilizar un array

Un [array](Concepts/arrays.md) es una lista de valores en memoria a la que se hace referencia por el nombre del array. Una lista desplegable puede mostrar un array como una lista de valores cuando se hace clic en ella.

Para inicializar el array asociado a la lista desplegable, puede:

* Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando "\<Static List>" en el tema [Fuente de datos](properties_DataSource.md) de la lista de propiedades. Los valores por defecto se cargan en un array automáticamente. Puede referirse al array utilizando el nombre de la variable asociada al objeto.

* Antes de mostrar el objeto, ejecute el código que asigna valores a los elementos del array. Por ejemplo:

```4d
  ARRAY TEXT(aCities;6) 
  aCities{1}:="Philadelphia" 
  aCities{2}:="Pittsburg" 
  aCities{3}:="Grand Blanc" 
  aCities{4}:="Bad Axe" 
  aCities{5}:="Frostbite Falls" 
  aCities{6}:="Green Bay" 
```

En este caso, el nombre de la [variable](properties_Object.md#variable-or-expression) asociada al objeto en el formulario debe ser `aCities`. Este código podría colocarse en el método formulario y ejecutarse cuando se ejecute el evento formulario `On Load`.

*  Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html). Por ejemplo:

```4d
   LIST TO ARRAY("Cities";aCities)
```

En este caso también, el nombre de la [variable](properties_Object.md#variable-or-expression) asociada al objeto en el formulario debe ser `aCities`. Este código puede ejecutarse en lugar de las sentencias de asignación mostradas anteriormente.

Si necesita guardar la elección del usuario en un campo, deberá utilizar una sentencia de asignación que se ejecute después de aceptar el registro. El código podría ser así:

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) `nuevo registro
          aCities:=3 `mostrar un valor por defecto
       Else `registro existente, mostrar valor almacenado
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) `el usuario modifica la selección
       City:=aCities{aCities} `el campo obtiene un nuevo valor
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

Debe seleccionar cada evento que pruebe en sus sentencia Case. Los arrays siempre contienen un número finito de elementos. La lista de elementos es dinámica y puede ser modificada por un método. Los elementos de un array pueden modificarse, ordenarse y añadirse.


### Utilizar una lista de selección

If you want to use a drop-down list to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the drop-down list's [data source](properties_Object.md#variable-or-expression). Esto facilita la gestión de los campos/variables listados.

For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is possible to create a list containing these values and associate it with a drop-down list that references the 4D "Color" field. 4D se encarga entonces de gestionar automáticamente la entrada y la visualización del valor actual en el formulario.
> Si utiliza una lista jerárquica, sólo se muestra el primer nivel y se puede seleccionar. If you want to display hierarchical contents, you need to use a [hierarchical choice list](#using-a-hierarchical-choice-list).

To associate a drop-down list with a field or variable, enter the name of the field or variable directly as the [Variable or Expression](properties_Object.md#variable-or-expression) field of the drop-down list in the Property List.
> It is not possible to use this feature with an object or an array drop-down list. If you enter a field name in the "Variable or Expression" area, then you must use a choice list.

When the form is executed, 4D automatically manages the drop-down list during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the drop-down list when the form is displayed:

![](assets/en/FormObjects/popupDropdown_choiceList.png)


#### Selected item value or Selected item reference

When you have associated a drop-down list with a choice list and with a field or a variable, you can set the [**Data Type**](properties_DataSource.md#data-type) property to **Selected item value** or **Selected item reference**. Esta opción permite optimizar el tamaño de los datos guardados.

### Using a hierarchical choice list

A hierarchical drop-down list has a sublist associated with each item in the list. Here is an example of a hierarchical drop-down list:

![](assets/en/FormObjects/popupDropdown_hierar.png)

> In forms, hierarchical drop-down lists are limited to two levels.

You can assign the hierarchical choice list to the drop-down list object using the [Choice List](properties_DataSource.md#choice-list) field of the Property List.

You manage hierarchical drop-down lists using the **Hierarchical Lists** commands of the 4D Language. All commands that support the `(*; "name")` syntax can be used with hierarchical  drop-down lists, e.g. [`List item parent`](https://doc.4d.com/4dv19/help/command/en/page633.html).


### Utilizar una acción estándar

You can build automatically a drop-down list using a [standard action](properties_Action.md#standard-action). This feature is supported in the following contexts:

- Use of the `gotoPage` standard action. In this case, 4D will automatically display the [page of the form](FormEditor/forms.md#form-pages) that corresponds to the number of the item that is selected. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). At runtime, by default the drop-down list displays the page numbers (1, 2...).

- Use of a standard action that displays a sublist of items, for example `backgroundColor`. This feature requires that:
    - a styled text area ([4D Write Pro area](writeProArea_overview.md) or [input](input_overview.md) with [multistyle](properties_Text.md#multi-style) property) is present in the form as the standard action target.
    - the [focusable](properties_Entry.md#focusable) property is not set to the drop-down list. At runtime the drop-down list will display an automatic list of values, e.g. background colors. You can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action.

> This feature cannot be used with a hierarchical drop-down list.

## Propiedades soportadas

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (expression type)](properties_DataSource.md#data-type-expression-type) - [Data Type (list)](properties_DataSource.md#data-type-list) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Save value](properties_Object.md#save-value) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  