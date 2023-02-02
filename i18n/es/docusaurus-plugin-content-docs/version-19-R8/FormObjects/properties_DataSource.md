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

- Listas desplegables [asociadas a una lista de opciones](dropdownList_Overview.md#using-a-choice-list).
- Listas desplegables [asociadas a una lista de selección jerárquica](dropdownList_Overview.md#using-a-hierarchical-choice-list).

Hay tres opciones disponibles:

- **Referencia de lista**: declara que la lista desplegable es jerárquica. Significa que la lista desplegable puede mostrar hasta dos niveles jerárquicos y su contenido puede gestionarse mediante los comandos del lenguaje 4D del tema **Listas jerárquicas**.
- **Valor del elemento seleccionado** (por defecto): la lista desplegable no es jerárquica y el valor del elemento elegido en la lista por el usuario se guarda directamente. Por ejemplo, si el usuario elige el valor "Azul", este valor se guarda en el campo.
- **Referencia del elemento seleccionado**: la lista desplegable no es jerárquica y la referencia del elemento de la lista de selección se guarda en el objeto. Esta referencia es el valor numérico asociado a cada elemento, ya sea a través del parámetro *itemRef* de los comandos [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) o [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html), o en el editor de listas. Esta opción permite optimizar el uso de la memoria: almacenar valores numéricos en los campos ocupa menos espacio que almacenar cadenas. También facilita la traducción de aplicaciones: basta con crear varias listas en distintos idiomas pero con las mismas referencias de elementos y, a continuación, cargar la lista en función del idioma de la aplicación.

La utilización de la opción **Referencia del elemento seleccionado** requiere el cumplimiento de los siguientes principios:

- Para poder almacenar la referencia, el campo o fuente de datos variable debe ser de tipo Número (independientemente del tipo de valor que aparezca en la lista). La propiedad [expresión ](properties_Object.md#expression-type) se define automáticamente.
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
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `This.\&#060;propertyPath&#062;` where `\&#060;propertyPath&#062;` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity. If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. En este caso, utilizará `This.value` como expresión.

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

- **Guardar como valor** (opción por defecto): el valor del elemento elegido en la lista por el usuario se guarda directamente. Por ejemplo, si el usuario elige el valor "Azul", este valor se guarda en el campo.
- **Guardar como referencia**: la referencia del elemento de la lista de opciones se guarda en el objeto. Esta referencia es el valor numérico asociado a cada elemento, ya sea a través del parámetro *itemRef* de los comandos [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) o [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html), o en el editor de listas.

Esta opción permite optimizar el uso de la memoria: almacenar valores numéricos en los campos ocupa menos espacio que almacenar cadenas. También facilita la traducción de aplicaciones: basta con crear varias listas en distintos idiomas pero con las mismas referencias de elementos y, a continuación, cargar la lista en función del idioma de la aplicación.

El uso de esta propiedad requiere el cumplimiento de los siguientes principios:

- Para poder almacenar la referencia, el campo o fuente de datos variable debe ser de tipo Número (independientemente del tipo de valor que aparezca en la lista). La propiedad [expresión ](properties_Object.md#expression-type) se define automáticamente.
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

> Las selecciones con nombre son listas ordenadas de registros. Se utilizan para mantener en memoria el orden y el registro actual de una selección. For more information, refer to **Named Selections** section in the *4D Language Reference manual*.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles       |
| -------------- | -------------- | ---------------------- |
| namedSelection | string         | Nombre de la selección |

#### Objetos soportados

[List Box](listbox_overview.md#overview)
