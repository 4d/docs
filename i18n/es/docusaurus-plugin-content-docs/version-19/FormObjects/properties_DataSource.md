---
id: propertiesDataSource
title: Fuente de datos
---


## Inserción automática

Cuando se selecciona esta opción, si un usuario introduce un valor que no se encuentra en la lista asociada al objeto, este valor se añade automáticamente a la lista almacenada en memoria.

Cuando la opción **inserción automática** no está definida (por defecto), el valor introducido se almacena en el objeto formulario pero no en la lista en memoria.

Esta propiedad es soportada por:

- objetos formulario [Combo box](comboBox_overview.md) y [columna list box](listbox_overview.md#list-box-columns) asociadoa a una lista de selección.
- objetos de formulario [Combo box](comboBox_overview.md) cuya lista asociada se llena mediante su array o fuente de datos de objetos.

Por ejemplo, dada una lista de selección que contiene "Francia, Alemania, Italia" que está asociada a un combo box "Países": si la propiedad **inserción automática** está activada y un usuario introduce "España", entonces el valor "España" se añade automáticamente a la lista en memoria:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

> Si la lista de selección se creó a partir de una lista definida en el modo Diseño, la lista original no se modifica.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| automaticInsertion | boolean        | true, false      |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Lista de selección

Asocia una lista de selección a un objeto. Puede ser un nombre de lista de elección (una referencia de lista) o una colección de valores por defecto.

También se pueden asociar listas de selección a objetos utilizando los comandos [OBJECT SET LIST BY NAME](https://doc.4d.com/4dv19/help/command/en/page237.html) o [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4dv19/help/command/en/page1266.html).

#### Gramática JSON

| Nombre     | Tipos de datos   | Valores posibles                                              |
| ---------- | ---------------- | ------------------------------------------------------------- |
| choiceList | list, collection | Una lista de valores posibles                                 |
| lista      | list, collection | Una lista de valores posibles (listas jerárquicas únicamente) |

#### Objetos soportados

[Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Lista de selección (lista estática)

Lista de valores estáticos a utilizar como etiquetas para el objeto de control de pestañas.

#### Gramática JSON

| Nombre | Tipos de datos   | Valores posibles                                        |
| ------ | ---------------- | ------------------------------------------------------- |
| labels | list, collection | Una lista de valores para llenar el control de pestañas |

#### Objetos soportados

[Pestañas](tabControl.md)

---

## Elemento actual

`List boxes colección o entity selection`

Especifica una variable o expresión a la que se asignará el elemento/entidad de la colección seleccionado por el usuario. Debe utilizar una variable objeto o una expresión asignable que acepte objetos. Si el usuario no selecciona nada o si ha utilizado una colección de valores escalares, se asigna el valor Null.
> Esta propiedad es de "sólo lectura", se actualiza automáticamente según las acciones del usuario en el list box. No se puede editar su valor para modificar el estado de selección del list box.

#### Gramática JSON

| Nombre            | Tipos de datos | Valores posibles     |
| ----------------- | -------------- | -------------------- |
| currentItemSource | string         | Expresión del objeto |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Posición elemento actual

`List boxes colección o entity selection`

Indica una variable o expresión a la que se le asignará un entero largo que indica la posición del elemento/entidad de colección seleccionado por el usuario.

- si no se selecciona ningún elemento/entidad, la variable o expresión recibe cero,
- si se selecciona un solo elemento/entidad, la variable o expresión recibe su ubicación,
- si se seleccionan varios elementos/entidades, la variable o expresión recibe la posición del elemento/entidad que se seleccionó de última.
> Esta propiedad es de "sólo lectura", se actualiza automáticamente según las acciones del usuario en el list box. No se puede editar su valor para modificar el estado de selección del list box.

#### Gramática JSON

| Nombre                    | Tipos de datos | Valores posibles   |
| ------------------------- | -------------- | ------------------ |
| currentItemPositionSource | string         | Expresión numérica |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Data Type (expression type)

Define el tipo de datos para la expresión mostrada. Esta propiedad se utiliza con:

- [List box columns](listbox_overview.md#list-box-columns) of the selection and collection types.
- [Listas desplegables](dropdownList_Overview.md) asociadas a objetos o arrays.

Ver también la sección [**Tipo de expresión**](properties_Object.md#expression-type).

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles                                   |
| ------------------ | -------------- | -------------------------------------------------- |
| dataSourceTypeHint | string         | <li>**columnas list box:** "boolean", "number", "picture", "text", date", "time". *Sólo para Array/selección list box*: "integer", "object"</li><li>**listas desplegables:** "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"</li> |

#### Objetos soportados

[Listas desplegables](dropdownList_Overview.md) asociadas a objetos o arrays - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Tipo de datos (lista)

Define el tipo de datos a guardar en el campo o variable asociado a la [lista desplegable](dropdownList_Overview.md). Esta propiedad se utiliza con:

- Drop-down lists [associated to a choice list](dropdownList_Overview.md#using-a-choice-list).
- Drop-down lists [associated to a hierarchical choice list](dropdownList_Overview.md#using-a-hierarchical-choice-list).

Hay tres opciones disponibles:

- **List reference**: declares that the drop-down list is hierarchical. It means that the drop-down list can display up to two hierarchical levels and its contents can be managed by the 4D language commands of the **Hierarchical Lists** theme.
- **Selected item value** (default): the drop-down list is not hierarchical and the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Selected item reference**: the drop-down list is not hierarchical and the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the *itemRef* parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor. This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

Using the **Selected item reference** option requires compliance with the following principles:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). The [expression](properties_Object.md#expression-type) property is automatically set.
- Las referencias válidas y únicas deben estar asociadas a los elementos de la lista.
- La lista desplegable debe estar asociada a un campo o a una variable.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles     |
| ------ | -------------- | -------------------- |
| saveAs | string         | "value", "reference" |

> Setting only `"dataSourceTypeHint" : "integer"` with a `"type": "dropdown"` form object will declare a hierarchical drop-down list.

#### Objetos soportados

[Listas desplegables](dropdownList_Overview.md) asociadas a listas

---

## Valores por defecto (lista de)

Lista de valores que se utilizarán como valores por defecto para la columna del list box (sólo de tipo array). Estos valores están disponibles automáticamente en la [variable array](properties_Object.md#variable-or-expression) asociada a esta columna cuando se ejecuta el formulario. Utilizando el lenguaje, se puede gestionar el objeto haciendo referencia a este array.

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-list-of-values)" property that allows to define a field value in new records.

Debe introducir una lista de valores. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:

![](../assets/en/FormObjects/defaultValues.png)

> También puede definir una [lista de selección](properties_DataSource.md#choice-list) con la columna list box. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                |
| ------ | -------------- | ------------------------------------------------------------------------------- |
| values | collection     | Una colección de valores por defecto (cadenas), por ejemplo: "a", "b", "c", "d" |

#### Objetos soportados

[Columna List Box (sólo tipo array)](listbox_overview.md#list-box-columns)

---

## Expression

This description is specific to [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. Ver también la sección **[Variable o Expresión](properties_Object.md#variable-or-expression)**.

Una expresión 4D que se asociará a una columna. Puede introducir:

- Una **variable simple** (en este caso, debe ser declarada explícitamente para la compilación). Se puede utilizar cualquier tipo de variable excepto BLOBs y arrays. El valor de la variable se calculará generalmente en el evento `On Display Detail`.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes) only), for example: `[Employees]LastName`. Se pueden utilizar los siguientes tipos de campos:
  - String
  - Numeric
  - Fecha
  - Hora
  - Picture
  - Boolean  
    Puede utilizar campos de la tabla maestra o de otras tablas.

- A **4D expression** (simple expression, formula or 4D method). La expresión debe devolver un valor. The value will be evaluated in the `On Display Detail` and `On Data Change` events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). Si está vacía, la columna no mostrará ningún resultado. Se soportan los siguientes tipos de expresiones:
  - String
  - Numeric
  - Fecha
  - Picture
  - Boolean

 For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.  
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `This.\&#060;propertyPath&#062;` where `\&#060;propertyPath&#062;` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity. If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use `This.value` as expression.

 If a [non-assignable expression](Concepts/quick-tour.md#expressions) is used (e.g. `[Person]FirstName+" "+[Person]LastName`), the column is never enterable even if the [Enterable](properties_Entry.md#enterable) property is enabled.

If a field, a variable, or an assignable expression (*e.g. Person.lastName*) is used, the column can be enterable or not depending on the [Enterable](properties_Entry.md#enterable) property.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                      |
| ---------- | -------------- | ------------------------------------------------------------------------------------- |
| dataSource | string         | Una variable 4D, un nombre de campo o una expresión del lenguaje compleja arbitraria. |

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

---

## Tabla principal

`Current selection list boxes`

Especifica la tabla cuya selección actual se utilizará. This table and its current selection will form the reference for the fields associated with the columns of the list box (field references or expressions containing fields). Even if some columns contain fields from other tables, the number of rows displayed will be defined by the master table.

All database tables can be used, regardless of whether the form is related to a table (table form) or not (project form).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| tabla  | number         | Número de tabla  |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Guardar como

Esta propiedad está disponible en las siguientes condiciones:

- una [lista de selección](#choice-list) está asociada al objeto
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:

- **Save as Value** (default option): the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Save as Reference**: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the *itemRef* parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor.

This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

El uso de esta propiedad requiere el cumplimiento de los siguientes principios:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). The [expression](properties_Object.md#expression-type) property is automatically set.
- Las referencias válidas y únicas deben estar asociadas a los elementos de la lista.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles     |
| ------ | -------------- | -------------------- |
| saveAs | string         | "value", "reference" |

#### Objetos soportados

[Área de entrada](input_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Elementos seleccionados

`List boxes colección o entity selection`

Especifica una variable o expresión a la que se asignarán los elementos o entidades seleccionados por el usuario.

- para un list box colección, debe utilizar una variable colección o una expresión asignable que acepte colecciones,
- para un list box selección de entidades, se crea un objeto de selección de entidades. Debe utilizar una variable objeto o una expresión asignable que acepte objetos.
> Esta propiedad es de "sólo lectura", se actualiza automáticamente según las acciones del usuario en el list box. No se puede editar su valor para modificar el estado de selección del list box.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles          |
| ------------------- | -------------- | ------------------------- |
| selectedItemsSource | string         | Expresión de la colección |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Selección de nombres

`List boxes de tipo selección nombrada`

Especifica la selección con nombre que se utilizará. Debe introducir el nombre de una selección nombrada válida. Puede ser una selección nombrada proceso o interproceso. El contenido del list box se basará en esta selección. The named selection chosen must exist and be valid at the time the list box is displayed, otherwise the list box will be displayed blank.

> Las selecciones con nombre son listas ordenadas de registros. They are used to keep the order and current record of a selection in memory. For more information, refer to **Named Selections** section in the *4D Language Reference manual*.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles       |
| -------------- | -------------- | ---------------------- |
| namedSelection | string         | Nombre de la selección |

#### Objetos soportados

[List Box](listbox_overview.md#overview)
