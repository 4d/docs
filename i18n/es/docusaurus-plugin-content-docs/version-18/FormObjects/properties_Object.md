---
id: propertiesObject
title: Objetos
---

---

## Tipo

 `PARÁMETRO OBLIGATORIO`

Esta propiedad designa el tipo del [objeto formulario activo o inactivo](formObjects_overview.md).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                                                                                                                                                                                                                         |
| ------ | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type   | string         | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de selección](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md) - [List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Pie de List Box](listbox_overview.md#list-box-footers) - [Encabezado de List Box](listbox_overview.md#list-box-headers) - [Botón imagen](pictureButton_overview.md) - [Menú emergente imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md) - [Indicador de progreso](progressIndicator.md) - [Botón de radio](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Imagen estática](staticPicture.md) - [Stepper](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md)

---

## Nombre del objeto

Cada objeto de formulario activo está asociado a un nombre de objeto. Cada nombre de objeto debe ser único.
> Los nombres de objetos están limitados a un tamaño de 255 bytes.

Cuando utilice el lenguaje 4D, puede referirse a un objeto de formulario activo por su nombre de objeto (para más información sobre esto, consulte [Propiedades Objeto](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) en el manual de Referencia del Lenguaje 4D).

Para más información sobre las reglas de denominación de los objetos de formulario, consulte la sección [Identificadores](Concepts/identifiers.md).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                 |
| ------ | -------------- | ---------------------------------------------------------------- |
| name   | string         | Todo nombre permitido que no pertenezca a un objeto ya existente |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de selección](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Lista jerárquica](list_overview.md) - [List Box](listbox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns) - [Pie de List Box](listbox_overview.md#list-box-footers) - [Encabezado de List Box](listbox_overview.md#list-box-headers) - [Botón imagen](pictureButton_overview.md) - [Menú emergente imagen](picturePopupMenu_overview.md) - [Área de Plug-in](pluginArea_overview.md) - [Indicador de progreso](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Imagen estática](staticPicture.md) - [Stepper](stepper.md) - [Botón Radio](radio_overview.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área de texto](text.md) - [Área web](webArea_overview.md)

---

## Variable o expresión

> See also **[Expression](properties_DataSource#expression)** for Selection and collection type list box columns.

Esta propiedad especifica la fuente de los datos. Cada objeto de formulario activo está asociado a un nombre de objeto y a un nombre de variable. El nombre de la variable puede ser diferente del nombre del objeto. En el mismo formulario, puede utilizar la misma variable varias veces, mientras que cada [nombre de objeto](#object-name) debe ser único.
> El tamaño del nombre de la variable está limitado a 31 bytes. Consulte la sección [Identificadores](Concepts/identifiers.md) para obtener más información sobre las reglas de asignación de nombres.

Las variables de los objetos del formulario permiten controlar y supervisar los objetos. Por ejemplo, cuando se presiona un botón, su variable se pone en 1; el resto del tiempo, en 0. La expresión asociada a un indicador de progreso permite leer y modificar el parámetro actual.

Las variables o expresiones se pueden introducir o no y pueden recibir datos de tipo Texto, Entero, Numérico, Fecha, Hora, Imagen, Booleano u Objeto.

### Expresiones

Puede utilizar una expresión como fuente de datos para un objeto. Any valid 4D expression is allowed: simple expression, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. La expresión se evalúa cuando se ejecuta el formulario y se reevalúa para cada evento del formulario. Tenga en cuenta que las expresiones pueden ser [asignables o no asignables](Concepts/quick-tour.md#expressions).
> Si el valor introducido corresponde a la vez a un nombre de variable y a un nombre de método, 4D considera que está indicando el método.

### Variables dinámicas

Puede dejar en manos de 4D la creación de variables asociadas a sus objetos de formulario (botones, variables introducibles, casillas de selección, etc.) de forma dinámica y según sus necesidades. Para ello, basta con dejar en blanco la propiedad "Variable o expresión" (o el campo JSON de `dataSource`).

Cuando una variable no tiene nombre, al cargar el formulario, 4D crea una nueva variable para el objeto, con un nombre calculado que es único en el espacio de las variables de proceso del intérprete (lo que significa que este mecanismo puede utilizarse incluso en modo compilado). Esta variable temporal se destruirá cuando se cierre el formulario. Para que este principio funcione en modo compilado, es imprescindible que las variables dinámicas estén explícitamente declaradas. Hay dos maneras de hacer esto:

- Puede definir el tipo utilizando la propiedad [tipo de expresión](#expression-type).
- Puede utilizar un código de inicialización específico cuando se carga el formulario que utilice, por ejemplo, el comando `VARIABLE TO VARIABLE`:

```4d
 If(Form event=On Load)
    C_TEXT($init)
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

En el código 4D, se puede acceder a las variables dinámicas utilizando un puntero obtenido con el comando `OBJECT Get pointer`. Por ejemplo:

```4d
  // asigna la hora 12:00:00 a la variable para el objeto "tstart"
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

Este mecanismo tiene dos ventajas:

- Por un lado, permite desarrollar componentes de tipo "subformulario" que pueden utilizarse varias veces en el mismo formulario local. Tomemos como ejemplo el caso de un subformulario datepicker que se inserta dos veces en un formulario anfitrión para definir una fecha de inicio y una fecha de fin. Este subformulario utilizará objetos para elegir la fecha del mes y del año. Será necesario que estos objetos trabajen con variables diferentes para la fecha de inicio y la fecha final. Dejar que 4D cree su variable con un nombre único es una forma de resolver esta dificultad.
- Por otra parte, puede utilizarse para limitar el uso de la memoria. De hecho, los objetos formulario sólo funcionan con variables proceso o interproceso. Sin embargo, en el modo compilado, se crea una instancia de cada variable de proceso en todos los procesos, incluidos los procesos del servidor. Esta instancia ocupa memoria, incluso cuando el formulario no se utiliza durante la sesión. Por lo tanto, dejar que 4D cree variables dinámicamente al cargar los formularios puede ahorrar memoria.

### List box array

Para un list box array, la propiedad **Variable o Expresión** normalmente contiene el nombre de la variable array definida para el list box y para cada columna. Sin embargo, puede utilizar un array de cadenas (que contenga nombres de arrays) como *dataSource* valor de una columna list box para definir un [list box jerárquico](listbox_overview.md#hierarchical-list-boxes).

#### Gramática JSON

| Nombre     | Tipos de datos            | Valores posibles          |
| ---------- | ------------------------- | ------------------------- |
| dataSource | cadena o array de cadenas | <ul><li>4D variable, field name, or arbitrary complex language expression.</li><li>Empty string for [dynamic variables](#dynamic-variables).</li><li>String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column]</li></ul> |

#### Objetos soportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Tab control](tabControl.md) - [Subform](subform_overview.md#overview) - [Radio Button](radio_overview.md) - [Web Area](webArea_overview.md)

---

## Tipo de expresión

> This property is called **Data Type** in the Property List for Selection and collection type list box columns.

Especifique el tipo de datos para la expresión o variable asociada al objeto. Tenga en cuenta que el objetivo principal de este ajuste es configurar las opciones (como los formatos de visualización) disponibles para el tipo de datos. En realidad, no escribe la variable en sí. En vista de la compilación de una base de datos, debe utilizar los comandos del lenguaje 4D del tema `Compilador`.

Sin embargo, esta propiedad tiene una función tipográfica en los siguientes casos específicos:

- **[Variables dinámicas](#dynamic-variables)**: puede utilizar esta propiedad para declarar el tipo de variables dinámicas.
- **[Columnas List Box ](listbox_overview.md#list-box-columns)**: esta propiedad se utiliza para asociar un formato de visualización a los datos de la columna. Los formatos suministrados dependerán del tipo de variable (list box de tipo array) o del tipo dato/campo (list boxes de tipo selección y colección). Los formatos 4D estándar que pueden utilizarse son: Alfa, Numérico, Fecha, Hora, Imagen y Booleano. El tipo Texto no tiene formatos de visualización específicos. Todos los formatos personalizados existentes también están disponibles.
- **[Variables imagen](input_overview.md)**: puede utilizar este menú para declarar las variables antes de cargar el formulario en modo interpretado. Mecanismos nativos específicos rigen la visualización de variables de imagen en los formularios. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property. Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles          |
| ------------------ | -------------- | ------------------------- |
| dataSourceTypeHint | string         | <ul><li>**objetos estándar:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**list box columns:** "boolean", "number", "picture", "text", date" (*array/selection list box only*) "integer", "time", "object"</li></ul> |

#### Objetos soportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## Clase CSS

Una lista de palabras separadas por espacios que se utilizan como selectores de clase en los archivos css.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                          |
| ------ | -------------- | ------------------------------------------------------------------------- |
| class  | string         | Una cadena con los nombres de los CSS separados por caracteres de espacio |

#### Objetos soportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Collection o entity selection

To use collection elements or entities to define the row contents of the list box.

Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection.

The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command:

- if you used a collection of objects, you can call `This` in the datasource expression to access each property value, for example `This.\&#060;propertyPath&#062;`.
- if you used an entity selection, you can call `This` in the datasource expression to access each attribute value, for example  `This.\&#060;attributePath&#062;`.

> If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling `This.value` in the datasource expression. However in this case you will not be able to modify values or to access the current ite object (see below) Note: For information about entity selections, please refer to the [ORDA](https://doc.4d.com/4Dv17R6/4D/17-R6/ORDA.200-4354624.en.html) chapter.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles                                                   |
| ---------- | -------------- | ------------------------------------------------------------------ |
| dataSource | string         | Expresión que devuelve una colección o una selección de entidades. |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Fuente de datos

Especifique el tipo de list box.

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(por defecto): utiliza elementos de array como líneas del list box.
- **Selección actual**: utiliza expresiones, campos o métodos cuyos valores se evaluarán para cada registro de la selección actual de una tabla.
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

Name of the [plug-in external area](pluginArea_overview.md) associated to the object. Plug-in external area names are published in the manifest.json file of the plug-in.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                 |
| -------------- | -------------- | ---------------------------------------------------------------- |
| pluginAreaKind | string         | Nombre del área externa del plug-in (comienza con un carácter %) |

#### Objetos soportados

[Área de plug-in](pluginArea_overview.md)

---

## Radio Group

Permite utilizar los botones de radio en conjuntos coordinados: sólo se puede seleccionar un botón a la vez en el conjunto.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles       |
| ---------- | -------------- | ---------------------- |
| radioGroup | string         | Nombre del grupo radio |

#### Objetos soportados

[Botón radio](radio_overview.md)

---

## Título

Permite insertar una etiqueta en un objeto. Se puede especificar la fuente y el estilo de esta etiqueta.

You can force a carriage return in the label by using the \ character (backslash).

![](../assets/en/FormObjects/property_title.png)

Para insertar un \ en la etiqueta, ingrese "&#92;&#92;".

Por defecto, la etiqueta se coloca en el centro del objeto. When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) property.

Para la traducción de la base de datos, puede introducir una referencia XLIFF en el área del título de un botón (ver [Apéndice B: arquitectura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| text   | string         | todo texto       |

#### Objetos soportados

[Botón](button_overview.md) - [Casilla de selección](checkbox_overview.md) - [Encabezado List Box](listbox_overview.md#list-box-headers) - [Botón radio](radio_overview.md) - [ÁreaTexto](text.md)

---

## Cálculo de variables

This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.
> El cálculo de los pies de página también puede definirse con el comando 4D `LISTBOX SET FOOTER CALCULATION`.

Hay varios tipos de cálculos disponibles. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):

| Cálculo                 | Num | Text | Fecha | Hora | Bool | Imágenes | tipos de variables de pie de página |
| ----------------------- | --- | ---- | ----- | ---- | ---- | -------- | ----------------------------------- |
| Mínimo                  | X   |      | X     | X    | X    |          | Igual que el tipo de columna        |
| Máximo                  | X   |      | X     | X    | X    |          | Igual que el tipo de columna        |
| Suma                    | X   |      | X     |      | X    |          | Igual que el tipo de columna        |
| Conteo                  | X   | X    | X     | X    | X    | X        | Longint                             |
| Promedio                | X   |      |       | X    |      |          | Real                                |
| Desviación estándar(*)  | X   |      |       | X    |      |          | Real                                |
| Varianza(*)             | X   |      |       | X    |      |          | Real                                |
| Suma de cuadrados(*)    | X   |      |       | X    |      |          | Real                                |
| Personalizado ("None ") | X   | X    | X     | X    | X    | X        | Cualquiera                          |

(*) Sólo para list boxes de tipo array.

When an automatic calculation is set, it is applied to all the values found in the list box column. Note that the calculation does not take the shown/hidden state of list box rows into account. If you want to restrict a calculation to only visible rows, you must use a custom calculation.

When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.
> Los cálculos automáticos no son soportados con:
> 
> - footers of columns based on formulas,
> - footers of [Collection and Entity selection](listbox_overview.md#collection-or-entity-selection-list-boxes) list boxes. Es necesario utilizar cálculos personalizados.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                                                                                      |
| ------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string         | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objetos soportados

[Pie de list box](listbox_overview.md#list-box-footers)
