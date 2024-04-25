---
id: propertiesObject
title: Objetos
---

---

## Tipo

`PARÁMETRO OBLIGATORIO`

This property designates the type of the [active or inactive form object](formObjects_overview.md).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                                                                                                                                                                                                                         |
| ------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type   | string         | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### Objetos soportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Nombre del objeto

Cada objeto de formulario activo está asociado a un nombre de objeto. Cada nombre de objeto debe ser único.

> Los nombres de objetos están limitados a un tamaño de 255 bytes.

When using 4D’s language, you can refer to an active form object by its object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects, refer to [Identifiers](Concepts/identifiers.md) section.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                 |
| ------ | -------------- | ---------------------------------------------------------------- |
| name   | string         | Todo nombre permitido que no pertenezca a un objeto ya existente |

#### Objetos soportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Guardar valor

This property is available when the [Save Geometry](FormEditor/properties_FormProperties.md#save-geometry) option is checked for the form.

Esta funcionalidad sólo es soportada con los objetos que contribuyen a la geometría general del formulario. Por ejemplo, esta opción está disponible para las casillas de verificación porque su valor puede utilizarse para ocultar o mostrar áreas adicionales en la ventana.

Esta es la lista de objetos cuyo valor se puede guardar:

| Object                                     | Valor guardado                                                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [Check Box](checkbox_overview.md)          | Valor de la variable asociada (0, 1, 2)                                                  |
| [Drop-down List](dropdownList_Overview.md) | Número de línea seleccionada                                                                                |
| [Radio Button](radio_overview.md)          | Valor de la variable asociada (1, 0, True o False para los botones de acuerdo a su tipo) |
| [Tab control](tabControl.md)               | Número de pestaña seleccionada                                                                              |

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles |
| ------------- | -------------- | ---------------- |
| memorizeValue | boolean        | true, false      |

#### Objetos soportados

[Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Radio Button](radio_overview.md) - [Tab control](tabControl.md)

---

## Variable o expresión

> See also **[Expression](properties_DataSource.md#expression)** for Selection and collection type list box columns.

Esta propiedad especifica la fuente de los datos. Cada objeto de formulario activo está asociado a un nombre de objeto y a un nombre de variable. El nombre de la variable puede ser diferente del nombre del objeto. In the same form, you can use the same variable several times while each [object name](#object-name) must be unique.

> El tamaño del nombre de la variable está limitado a 31 bytes. See [Identifiers](Concepts/identifiers.md) section for more information about naming rules.

Las variables de los objetos del formulario permiten controlar y supervisar los objetos. Por ejemplo, cuando se presiona un botón, su variable se pone en 1; el resto del tiempo, en 0. La expresión asociada a un indicador de progreso permite leer y modificar el parámetro actual.

Las variables o expresiones se pueden introducir o no y pueden recibir datos de tipo Texto, Entero, Numérico, Fecha, Hora, Imagen, Booleano u Objeto.

#### Gramática JSON

| Nombre     | Tipos de datos            | Valores posibles                                                                                                                                                                                                                                          |
| ---------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | cadena o array de cadenas | <li>4D variable, field name, or any expression.</li><li>Empty string for [dynamic variables](#dynamic-variables).</li><li>String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column]</li> |

### Expresiones

You can use an [expression](Concepts/quick-tour.md#expressions) as data source for an object. Any valid 4D expression is allowed: simple expression, object property, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. La expresión se evalúa cuando se ejecuta el formulario y se reevalúa para cada evento del formulario. Note that expressions can be [assignable or non-assignable](Concepts/quick-tour.md#expressions).

> Si el valor introducido corresponde a la vez a un nombre de variable y a un nombre de método, 4D considera que está indicando el método.

### Variables dinámicas

You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `dataSource` JSON field) blank.

Cuando una variable no tiene nombre, al cargar el formulario, 4D crea una nueva variable para el objeto, con un nombre calculado que es único en el espacio de las variables de proceso del intérprete (lo que significa que este mecanismo puede utilizarse incluso en modo compilado). Esta variable temporal se destruirá cuando se cierre el formulario.
Para que este principio funcione en modo compilado, es imprescindible que las variables dinámicas estén explícitamente declaradas. Hay dos maneras de hacer esto:

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

In the 4D code, dynamic variables can be accessed using a pointer obtained with the `OBJECT Get pointer` command. Por ejemplo:

```4d
  // assign the time 12:00:00 to the variable for the "tstart" object
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

Este mecanismo tiene dos ventajas:

- Por un lado, permite desarrollar componentes de tipo "subformulario" que pueden utilizarse varias veces en el mismo formulario local. Tomemos como ejemplo el caso de un subformulario datepicker que se inserta dos veces en un formulario anfitrión para definir una fecha de inicio y una fecha de fin. Este subformulario utilizará objetos para elegir la fecha del mes y del año. Será necesario que estos objetos trabajen con variables diferentes para la fecha de inicio y la fecha final. Dejar que 4D cree su variable con un nombre único es una forma de resolver esta dificultad.
- Por otra parte, puede utilizarse para limitar el uso de la memoria. De hecho, los objetos formulario sólo funcionan con variables proceso o interproceso. Sin embargo, en el modo compilado, se crea una instancia de cada variable de proceso en todos los procesos, incluidos los procesos del servidor. Esta instancia ocupa memoria, incluso cuando el formulario no se utiliza durante la sesión. Por lo tanto, dejar que 4D cree variables dinámicamente al cargar los formularios puede ahorrar memoria.

### List box array

For an array list box, the **Variable or Expression** property usually holds the name of the array variable defined for the list box, and for each column. However, you can use a string array (containing arrays names) as _dataSource_ value for a list box column to define a [hierarchical list box](listbox_overview.md#hierarchical-list-boxes).

#### Objetos soportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Subform](subform_overview.md#overview) - [Tab control](tabControl.md) - [Web Area](webArea_overview.md)

---

## Tipo de expresión

> This property is called [**Data Type**](properties_DataSource.md#data-type-expression-type) in the Property List for [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns and for [Drop-down Lists](dropdownList_Overview.md) associated to an [object](FormObjects/dropdownList_Overview.md#using-an-object) or an [array](FormObjects/dropdownList_Overview.md#using-an-array).

Especifique el tipo de datos para la expresión o variable asociada al objeto. Tenga en cuenta que el objetivo principal de este ajuste es configurar las opciones (como los formatos de visualización) disponibles para el tipo de datos. En realidad, no escribe la variable en sí. In view of project compilation, you must [declare the variable](Concepts/variables.md#declaring-variables).

Sin embargo, esta propiedad tiene una función tipográfica en los siguientes casos específicos:

- **[Dynamic variables](#dynamic-variables)**: you can use this property to declare the type of dynamic variables.
- **[List Box Columns](listbox_overview.md#list-box-columns)**: this property is used to associate a display format with the column data. Los formatos suministrados dependerán del tipo de variable (list box de tipo array) o del tipo dato/campo (list boxes de tipo selección y colección). Los formatos 4D estándar que pueden utilizarse son: Alfa, Numérico, Fecha, Hora, Imagen y Booleano. El tipo Texto no tiene formatos de visualización específicos. Todos los formatos personalizados existentes también están disponibles.
- **[Picture variables](input_overview.md)**: you can use this menu to declare the variables before loading the form in interpreted mode. Mecanismos nativos específicos rigen la visualización de variables de imagen en los formularios. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property.
  De lo contrario, la variable imagen no se mostrará correctamente (sólo en modo interpretado).

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles                                                                                                                                                                                                                                                                                                                     |
| ------------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dataSourceTypeHint | string         | <li>**standard objects:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li> |

#### Objetos soportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## Clase CSS

A list of space-separated words used as class selectors in [css files](FormEditor/createStylesheet.md#style-sheet-files).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                          |
| ------ | -------------- | ------------------------------------------------------------------------- |
| class  | string         | Una cadena con los nombres de los CSS separados por caracteres de espacio |

#### Objetos soportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Collection o entity selection

Para utilizar elementos de colección o entidades para definir el contenido de las líneas del list box.

Introduzca una expresión que devuelva una colección o una selección de entidades. Normalmente, introducirá el nombre de una variable, un elemento de una colección o una propiedad que contenga una colección o una selección de entidades.

La colección o la selección de entidades debe estar disponible para el formulario cuando se carga. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [`This`](../Concepts/classes.md#this) keyword:

- if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example `This.<propertyPath>`.
- if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example `This.<attributePath>`.

> If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling **This.value** in the datasource expression. Sin embargo, en este caso no podrá modificar valores ni acceder al objeto actual (ver más adelante).

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                                   |
| ---------- | -------------- | ---------------------------------------------------------------------------------- |
| dataSource | string         | Expresión que devuelve una colección o una selección de entidades. |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Fuente de datos

Especifique el tipo de list box.

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(default): use array elements as the rows of the list box.
- **Current Selection**: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.
- **Named Selection**: use expressions, fields or methods whose values will be evaluated for each record of a named selection.
- **Collection or Entity Selection**: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the [Collection or Entity Selection](properties_Object.md#collection-or-entity-selection) property.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                            |
| ----------- | -------------- | ----------------------------------------------------------- |
| listboxType | string         | "array", "currentSelection", "namedSelection", "collection" |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Tipo de plug-in

Name of the [plug-in external area](pluginArea_overview.md) associated to the object. Los nombres de las áreas externas del plug-in.se publican en el archivo manifest.json del plug-in.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                                    |
| -------------- | -------------- | ----------------------------------------------------------------------------------- |
| pluginAreaKind | string         | Nombre del área externa del plug-in (comienza con un carácter %) |

#### Objetos soportados

[Plug-in Area](pluginArea_overview.md)

---

## Grupo radio

Permite utilizar los botones de radio en conjuntos coordinados: sólo se puede seleccionar un botón a la vez en el conjunto.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles       |
| ---------- | -------------- | ---------------------- |
| radioGroup | string         | Nombre del grupo radio |

#### Objetos soportados

[Radio Button](radio_overview.md)

---

## Título

Permite insertar una etiqueta en un objeto. Se puede especificar la fuente y el estilo de esta etiqueta.

Puede forzar un retorno de carro en la etiqueta utilizando el caracter \ (barra invertida).

![](../assets/en/FormObjects/property_title.png)

Para insertar un \ en la etiqueta, ingrese "\\".

Por defecto, la etiqueta se coloca en el centro del objeto. When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) property.

For application translation purposes, you can enter an XLIFF reference in the title area of a button (see [Appendix B: XLIFF architecture](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| text   | string         | todo texto       |

#### Objetos soportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Cálculo de variables

This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.

> The calculation for footers can also be set using the [`LISTBOX SET FOOTER CALCULATION`](https://doc.4d.com/4dv19/help/command/en/page1140.html) 4D command.

Hay varios tipos de cálculos disponibles. La tabla siguiente muestra los cálculos que se pueden utilizar según el tipo de datos que se encuentran en cada columna e indica el tipo afectado automáticamente por 4D a la variable de pie de página (si no está escrita por el código):

| Cálculo                                    | Num | Text | Fecha | Hora | Bool | Imágenes | tipos de variables de pie de página |
| ------------------------------------------ | --- | ---- | ----- | ---- | ---- | -------- | ----------------------------------- |
| Mínimo                                     | X   | X    | X     | X    | X    |          | Igual que el tipo de columna        |
| Máximo                                     | X   | X    | X     | X    | X    |          | Igual que el tipo de columna        |
| Suma                                       | X   |      |       | X    | X    |          | Igual que el tipo de columna        |
| Conteo                                     | X   | X    | X     | X    | X    | X        | Longint                             |
| Promedio                                   | X   |      |       | X    |      |          | Real                                |
| Desviación estándar(\*) | X   |      |       | X    |      |          | Real                                |
| Varianza(\*)            | X   |      |       | X    |      |          | Real                                |
| Suma de cuadrados(\*)   | X   |      |       | X    |      |          | Real                                |
| Personalizado ("None ") | X   | X    | X     | X    | X    | X        | Cualquiera                          |

(\*) Sólo para list boxes de tipo array.

> Only declared or dynamic [variables](Concepts/variables.md) can be used to display footer calculations. Other kinds of [expressions](Concepts/quick-tour.md#expressions) such as `Form.value` are not supported.

Los cálculos automáticos ignoran el estado mostrado/oculto de las líneas list box. Si desea restringir un cálculo sólo a las líneas visibles, debe utilizar un cálculo personalizado.

_Null_ values are not taken into account for any calculations.

Si la columna contiene distintos tipos de valores (columna basada en colecciones, por ejemplo):

- Promedio y Suma sólo tienen en cuenta elementos numéricos (se ignoran otros tipos de elementos).
- Minimum and Maximum return a result according to the usual type list order as defined in the [collection.sort()](API/CollectionClass.md#sort) function.

El uso de cálculos automáticos en pies de columnas basados en expresiones tiene las siguientes limitaciones:

- it is **supported** with all list box types when the expression is "simple" (such as `[table]field` or `this.attribute`),
- it is **supported but not recommended** for performance reasons with collection/entity selection list boxes when the expression is "complex" (other than `this.attribute`) and the list box contains a large number of rows,
- it is **not supported** with current selection/named selection list boxes when the expression is "complex". Es necesario utilizar cálculos personalizados.

When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                                                                                      |
| ------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string         | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objetos soportados

[List Box Footer](listbox_overview.md#list-box-footers)
