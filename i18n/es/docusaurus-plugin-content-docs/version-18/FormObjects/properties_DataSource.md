---
id: propertiesDataSource
title: Fuente de datos
---


## Inserción automática

Cuando se selecciona esta opción, si un usuario introduce un valor que no se encuentra en la lista de selección asociada al objeto, este valor se añade automáticamente a la lista almacenada en memoria. Se pueden asociar listas de selección a los objetos utilizando:

- la propiedad JSON [Choice List](properties_DataSource.md#choice-list)
- los comandos [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-NAME.301-4128227.en.html) o [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-LIST-BY-REFERENCE.301-4128237.en.html).
- la lista de propiedades del editor de formularios.

Por ejemplo, dada una lista de selección que contiene "Francia, Alemania, Italia" que está asociada a un combo box "Países": si la propiedad **inserción automática** está activada y un usuario introduce "España", entonces el valor "España" se añade automáticamente a la lista en memoria:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

Naturalmente, el valor introducido no debe pertenecer a la lista de [valores excluidos](properties_RangeOfValues.md#excluded-list) asociada al objeto, si se ha definido una.
> Si la lista se creó a partir de una lista definida en el modo Diseño, la lista original no se modifica.

Cuando la opción **inserción automática** no está seleccionada (por defecto), el valor introducido se almacena en el objeto pero no en la lista en memoria.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| automaticInsertion | boolean        | true, false      |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Lista de selección

Asocia una lista de selección a un objeto. Puede ser un nombre de lista de elección (una referencia de lista) o una colección de valores por defecto.

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

## Tipos de datos

Consulte la sección [Tipo de expresión](properties_Object.md#expression-type).

#### Objetos soportados

[Columna de list box](listbox_overview.md#list-box-columns)

---

## Valores por defecto (lista de)

List of values that will be used as default values for the list box column (array type only). These values are automatically available in the [array variable](properties_Object.md#variable-or-expression) associated with this column when the form is executed. Using the language, you can manage the object by referring to this array.

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-list-of-values)" property that allows to define a field value in new records.

Debe introducir una lista de valores. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:

![](../assets/en/FormObjects/defaultValues.png)

> You can also define a [choice list](properties_DataSource.md#choice-list) with the list box column. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                |
| ------ | -------------- | ------------------------------------------------------------------------------- |
| values | collection     | Una colección de valores por defecto (cadenas), por ejemplo: "a", "b", "c", "d" |

#### Objetos soportados

[Columna List Box (sólo tipo array)](listbox_overview.md#list-box-columns)

---

## Expression

This description is specific to [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. See also **[Variable or Expression](properties_Object.md#variable-or-expression)** section.

Una expresión 4D que se asociará a una columna. Puede introducir:

- A **simple variable** (in this case, it must be explicitly declared for compilation). You can use any type of variable except BLOBs and arrays. The value of the variable will be generally calculated in the `On Display Detail` event.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes) only), for example: `[Employees]LastName`. Se pueden utilizar los siguientes tipos de campos:
  - String
  - Numeric
  - Fecha
  - Hora
  - Picture
  - Boolean  
    Puede utilizar campos de la tabla maestra o de otras tablas.

- A **4D expression** (simple expression, formula or 4D method). La expresión debe devolver un valor. The value will be evaluated in the `On Display Detail` and `On Data Change` events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results. The following expression types are supported:
  - String
  - Numeric
  - Fecha
  - Picture
  - Boolean

 For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.  
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `**This.\&#060;propertyPath&#062;**` where `**\&#060;propertyPath&#062;**` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity. If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use **This.value** as expression.

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

This property is available in the following conditions:

- una [lista de selección](#choice-list) está asociada al objeto
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:

- **Save as Value** (default option): the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Save as Reference**: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the *itemRef* parameter of the `APPEND TO LIST` or `SET LIST ITEM` commands, or in the lists editor.

This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

El uso de esta propiedad requiere el cumplimiento de los siguientes principios:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list).
- Las referencias válidas y únicas deben estar asociadas a los elementos de la lista.
- If you use this property for a [drop-down list](dropdownList_Overview.md), it must be associated with a field.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles     |
| ------ | -------------- | -------------------- |
| saveAs | string         | "value", "reference" |

#### Objetos soportados

[Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Elementos seleccionados

`List boxes colección o entity selection`

Specifies a variable or expression that will be assigned the elements or entities selected by the user.

- for a collection list box, you must use a collection variable or an assignable expression that accepts collections,
- for an entity selection list box, an entity selection object is built. Debe utilizar una variable objeto o una expresión asignable que acepte objetos.
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
