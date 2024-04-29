---
id: propertiesDataSource
title: Fuente de datos
---

## Inserción automática

Cuando se selecciona esta opción, si un usuario introduce un valor que no se encuentra en la lista asociada al objeto, este valor se añade automáticamente a la lista almacenada en memoria.

When the **automatic insertion** option is not set (default), the value entered is stored in the form object but not in the list in memory.

Esta propiedad es soportada por:

- [Combo box](comboBox_overview.md) and [list box column](listbox_overview.md#list-box-columns) form objects associated to a choice list.
- [Combo box](comboBox_overview.md) form objects whose associated list is filled by their array or object datasource.

For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the **automatic insertion** property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

> Si la lista de selección se creó a partir de una lista definida en el modo Diseño, la lista original no se modifica.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| automaticInsertion | boolean        | true, false      |

#### Objetos soportados

[Combo Box](comboBox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Lista de selección

Asocia una lista de selección a un objeto. Puede ser un nombre de lista de elección (una referencia de lista) o una colección de valores por defecto.

You can also associate choice lists to objects using the [OBJECT SET LIST BY NAME](https://doc.4d.com/4dv19/help/command/en/page237.html) or [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4dv19/help/command/en/page1266.html) commands.

#### Gramática JSON

| Nombre     | Tipos de datos   | Valores posibles                                                                 |
| ---------- | ---------------- | -------------------------------------------------------------------------------- |
| choiceList | list, collection | Una lista de valores posibles                                                    |
| lista      | list, collection | Una lista de valores posibles (listas jerárquicas únicamente) |

#### Objetos soportados

[Drop-down List](dropdownList_Overview.md) -
[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Lista de selección (lista estática)

Lista de valores estáticos a utilizar como etiquetas para el objeto de control de pestañas.

#### Gramática JSON

| Nombre | Tipos de datos   | Valores posibles                                        |
| ------ | ---------------- | ------------------------------------------------------- |
| labels | list, collection | Una lista de valores para llenar el control de pestañas |

#### Objetos soportados

[Tab Control](tabControl.md)

---

## Elemento actual

`List box colección o entity selection`

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

`List box colección o entity selection`

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

## Tipo de datos (tipo de expresión)

Define el tipo de datos para la expresión mostrada. Esta propiedad se utiliza con:

- [List box columns](listbox_overview.md#list-box-columns) of the selection and collection types.
- [Drop-down lists](dropdownList_Overview.md) associated to objects or arrays.

See also [**Expression Type**](properties_Object.md#expression-type) section.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles                                                                                                                                                                                                                       |
| ------------------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string         | <li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li><li>**drop-down lists:** "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"</li> |

#### Objetos soportados

[Drop-down Lists](dropdownList_Overview.md) associated to objects or arrays - [List Box column](listbox_overview.md#list-box-columns)

---

## Tipo de datos (lista)

Defines the type of data to save in the field or variable associated to the [drop-down list](dropdownList_Overview.md). Esta propiedad se utiliza con:

- Drop-down lists [associated to a choice list](dropdownList_Overview.md#using-a-choice-list).
- Drop-down lists [associated to a hierarchical choice list](dropdownList_Overview.md#using-a-hierarchical-choice-list).

Hay tres opciones disponibles:

- **List reference**: declares that the drop-down list is hierarchical. It means that the drop-down list can display up to two hierarchical levels and its contents can be managed by the 4D language commands of the **Hierarchical Lists** theme.
- **Selected item value** (default): the drop-down list is not hierarchical and the value of the item chosen in the list by the user is saved directly. Por ejemplo, si el usuario elige el valor "Azul", este valor se guarda en el campo.
- **Selected item reference**: the drop-down list is not hierarchical and the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the _itemRef_ parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor. Esta opción permite optimizar el uso de la memoria: almacenar valores numéricos en los campos ocupa menos espacio que almacenar cadenas. También facilita la traducción de aplicaciones: basta con crear varias listas en distintos idiomas pero con las mismas referencias de elementos y, a continuación, cargar la lista en función del idioma de la aplicación.

Using the **Selected item reference** option requires compliance with the following principles:

- Para poder almacenar la referencia, el campo o fuente de datos variable debe ser de tipo Número (independientemente del tipo de valor que aparezca en la lista). The [expression](properties_Object.md#expression-type) property is automatically set.
- Las referencias válidas y únicas deben estar asociadas a los elementos de la lista.
- La lista desplegable debe estar asociada a un campo o a una variable.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles     |
| ------ | -------------- | -------------------- |
| saveAs | string         | "value", "reference" |

> Setting only `"dataSourceTypeHint" : "integer"` with a `"type": "dropdown"` form object will declare a hierarchical drop-down list.

#### Objetos soportados

[Drop-down Lists](dropdownList_Overview.md) associated to lists

---

## Valores por defecto (lista de)

Lista de valores que se utilizarán como valores por defecto para la columna del list box (sólo de tipo array). These values are automatically available in the [array variable](properties_Object.md#variable-or-expression) associated with this column when the form is executed. Utilizando el lenguaje, se puede gestionar el objeto haciendo referencia a este array.

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-list-of-values)" property that allows to define a field value in new records.

Debe introducir una lista de valores. En el editor de formularios, un diálogo específico permite introducir valores separados por retornos de carro:

![](../assets/en/FormObjects/defaultValues.png)

> You can also define a [choice list](properties_DataSource.md#choice-list) with the list box column. Sin embargo, se utilizará una lista de selección como lista de valores seleccionables para cada línea de columna, mientras que la lista por defecto rellena todas las líneas de columna.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                                   |
| ------ | -------------- | ------------------------------------------------------------------------------------------------------------------ |
| values | collection     | Una colección de valores por defecto (cadenas), por ejemplo: "a", "b", "c", "d" |

#### Objetos soportados

[List Box Column (array type only)](listbox_overview.md#list-box-columns)

---

## Expression

This description is specific to [selection](listbox_overview.md#selection-list-boxes)
and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. See also **[Variable or Expression](properties_Object.md#variable-or-expression)** section.

Una expresión 4D que se asociará a una columna. Puede introducir:

- A **simple variable** (in this case, it must be explicitly declared for compilation). Se puede utilizar cualquier tipo de variable excepto BLOBs y arrays. The value of the variable will be generally calculated in the `On Display Detail` event.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes)
  only), for example: `[Employees]LastName`. Se pueden utilizar los siguientes tipos de campos:
  - String
  - Numeric
  - Fecha
  - Hora
  - Picture
  - Boolean\
    You can use fields from the Master Table or from other tables.

- A **4D expression** (simple expression, formula or 4D method). La expresión debe devolver un valor. The value will be evaluated in the `On Display Detail` and `On Data Change` events. El resultado de la expresión se mostrará automáticamente cuando cambie al modo Aplicación. La expresión se evaluará para cada registro de la selección (actual o temporal) de la tabla maestra (para list boxes de tipo selección), cada elemento de la colección (para list boxes de tipo colección) o cada entidad de la selección (para list boxes selección de entidades). Si está vacía, la columna no mostrará ningún resultado.
  Se soportan los siguientes tipos de expresiones:
  - String
  - Numeric
  - Fecha
  - Picture
  - Boolean

For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.\
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use `This.\<propertyPath>` where `\<propertyPath>` is the path of a property in the collection or an entity attribute path to access the current value of each element/entity.
Si utiliza una colección de valores escalares, 4D creará un objeto para cada elemento de la colección con una única propiedad (llamada "valor"), llenada con el valor del elemento. In this case, you will use `This.value` as expression.

If a [non-assignable expression](Concepts/quick-tour.md#expressions) is used (e.g. `[Person]FirstName+" "+[Person]LastName`), the column is never enterable even if the [Enterable](properties_Entry.md#enterable) property is enabled.

If a field, a variable, or an assignable expression (_e.g. Person.lastName_) is used, the column can be enterable or not depending on the [Enterable](properties_Entry.md#enterable) property.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                                      |
| ---------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| dataSource | string         | Una variable 4D, un nombre de campo o una expresión del lenguaje compleja arbitraria. |

#### Objetos soportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## Tabla principal

`Current selection list boxes`

Especifica la tabla cuya selección actual se utilizará. Esta tabla y su selección actual constituirán la referencia de los campos asociados a las columnas del list box (referencias de campo o expresiones que contienen campos). Aunque algunas columnas contengan campos de otras tablas, el número de líneas mostradas será definido por la tabla maestra.

Se pueden utilizar todas las tablas de la base de datos, independientemente de si el formulario está relacionado con una tabla (formulario tabla) o no (formulario proyecto).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| tabla  | number         | Número de tabla  |

#### Objetos soportados

[List Box](listbox_overview.md#overview)

---

## Guardar como

Esta propiedad está disponible en las siguientes condiciones:

- a [choice list](#choice-list) is associated with the object
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

Esta propiedad especifica, en el contexto de un campo o variable asociado a una lista de valores, el tipo de contenido a guardar:

- **Save as Value** (default option): the value of the item chosen in the list by the user is saved directly. Por ejemplo, si el usuario elige el valor "Azul", este valor se guarda en el campo.
- **Save as Reference**: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the _itemRef_ parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor.

Esta opción permite optimizar el uso de la memoria: almacenar valores numéricos en los campos ocupa menos espacio que almacenar cadenas. También facilita la traducción de aplicaciones: basta con crear varias listas en distintos idiomas pero con las mismas referencias de elementos y, a continuación, cargar la lista en función del idioma de la aplicación.

El uso de esta propiedad requiere el cumplimiento de los siguientes principios:

- Para poder almacenar la referencia, el campo o fuente de datos variable debe ser de tipo Número (independientemente del tipo de valor que aparezca en la lista). The [expression](properties_Object.md#expression-type) property is automatically set.
- Las referencias válidas y únicas deben estar asociadas a los elementos de la lista.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles     |
| ------ | -------------- | -------------------- |
| saveAs | string         | "value", "reference" |

#### Objetos soportados

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Elementos seleccionados

`List box colección o entity selection`

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

Especifica la selección con nombre que se utilizará. Debe introducir el nombre de una selección nombrada válida. Puede ser una selección nombrada proceso o interproceso. El contenido del list box se basará en esta selección. La selección elegida debe existir y ser válida en el momento en que se muestre el list box; de lo contrario, el list box se mostrará en blanco.

> Las selecciones con nombre son listas ordenadas de registros. Se utilizan para mantener en memoria el orden y el registro actual de una selección. For more information, refer to **Named Selections** section in the _4D Language Reference manual_.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles       |
| -------------- | -------------- | ---------------------- |
| namedSelection | string         | Nombre de la selección |

#### Objetos soportados

[List Box](listbox_overview.md#overview)
