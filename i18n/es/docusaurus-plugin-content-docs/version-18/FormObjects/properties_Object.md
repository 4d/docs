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

> Ver también **[Expression](properties_DataSource#expression)** para las columnas de list box de tipo selección y colección.

Esta propiedad especifica la fuente de los datos. Cada objeto de formulario activo está asociado a un nombre de objeto y a un nombre de variable. El nombre de la variable puede ser diferente del nombre del objeto. En el mismo formulario, puede utilizar la misma variable varias veces, mientras que cada [nombre de objeto](#object-name) debe ser único.
> El tamaño del nombre de la variable está limitado a 31 bytes. Consulte la sección [Identificadores](Concepts/identifiers.md) para obtener más información sobre las reglas de asignación de nombres.

Las variables de los objetos del formulario permiten controlar y supervisar los objetos. Por ejemplo, cuando se presiona un botón, su variable se pone en 1; el resto del tiempo, en 0. La expresión asociada a un indicador de progreso permite leer y modificar el parámetro actual.

Las variables o expresiones se pueden introducir o no y pueden recibir datos de tipo Texto, Entero, Numérico, Fecha, Hora, Imagen, Booleano u Objeto.

### Expresiones

Puede utilizar una expresión como fuente de datos para un objeto. Se permite toda expresión 4D válida: expresión simple, fórmula, función 4D, nombre de método proyecto o campo que utilice la sintaxis estándar `[Table]Field`. La expresión se evalúa cuando se ejecuta el formulario y se reevalúa para cada evento del formulario. Tenga en cuenta que las expresiones pueden ser [asignables o no asignables](Concepts/quick-tour.md#expressions).
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

### List box array {#array-list-box}

Para un list box array, la propiedad **Variable o Expresión** normalmente contiene el nombre de la variable array definida para el list box y para cada columna. Sin embargo, puede utilizar un array de cadenas (que contenga nombres de arrays) como *dataSource* valor de una columna list box para definir un [list box jerárquico](listbox_overview.md#hierarchical-list-boxes).

#### Gramática JSON

| Nombre     | Tipos de datos            | Valores posibles          |
| ---------- | ------------------------- | ------------------------- |
| dataSource | cadena o array de cadenas | <ul><li>Variable 4D, nombre de campo o expresión arbitraria en lenguaje complejo.</li><li>Cadena vacía para [variables dinámicas](#variables-dinámicas).</li><li>Array de cadenas (colección de nombres de array) para una columna [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes)]</li></ul> |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Lista jerárquica](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Columna de list Box](listbox_overview.md#list-box-columns) - [Encabezado de List Box](listbox_overview.md#list-box-headers) - [Pie de List Box](listbox_overview.md#list-box-footers) - [Menu Pop-up imagen](picturePopupMenu_overview.md) - [Área plug-in](pluginArea_overview.md#overview) - [Indicador de progreso](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Control de pestañas](tabControl.md) - [Subformulario](subform_overview.md#overview) - [Botón radio](radio_overview.md) - [Área web](webArea_overview.md)

---

## Tipo de expresión

> Esta propiedad se denomina **Tipo de datos** en la Lista de propiedades de las columnas del list box de tipo Selección y colección.

Especifique el tipo de datos para la expresión o variable asociada al objeto. Tenga en cuenta que el objetivo principal de este ajuste es configurar las opciones (como los formatos de visualización) disponibles para el tipo de datos. En realidad, no escribe la variable en sí. En vista de la compilación de una base de datos, debe utilizar los comandos del lenguaje 4D del tema `Compilador`.

Sin embargo, esta propiedad tiene una función tipográfica en los siguientes casos específicos:

- **[Variables dinámicas](#dynamic-variables)**: puede utilizar esta propiedad para declarar el tipo de variables dinámicas.
- **[Columnas List Box ](listbox_overview.md#list-box-columns)**: esta propiedad se utiliza para asociar un formato de visualización a los datos de la columna. Los formatos suministrados dependerán del tipo de variable (list box de tipo array) o del tipo dato/campo (list boxes de tipo selección y colección). Los formatos 4D estándar que pueden utilizarse son: Alfa, Numérico, Fecha, Hora, Imagen y Booleano. El tipo Texto no tiene formatos de visualización específicos. Todos los formatos personalizados existentes también están disponibles.
- **[Variables imagen](input_overview.md)**: puede utilizar este menú para declarar las variables antes de cargar el formulario en modo interpretado. Mecanismos nativos específicos rigen la visualización de variables de imagen en los formularios. Estos mecanismos exigen una mayor precisión a la hora de configurar las variables: a partir de ahora, deberán haber sido declaradas antes de cargar el formulario -es decir, incluso antes del evento de formulario `On Load` - a diferencia de otros tipos de variables. Para ello, es necesario que la instrucción `C_PICTURE(varName)` se haya ejecutado antes de cargar el formulario (normalmente, en el método que llama al comando `DIALOG`), o que la variable se haya digitado a nivel de formulario utilizando la propiedad tipo de expresión. De lo contrario, la variable imagen no se mostrará correctamente (sólo en modo interpretado).

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles          |
| ------------------ | -------------- | ------------------------- |
| dataSourceTypeHint | string         | <ul><li>**objetos estándar:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**Columnas list box:** "boolean", "number", "picture", "text", date" (*sólo list box array/selección*) "integer", "time", "object"</li></ul> |

#### Objetos soportados

[Casilla de verificación](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Entrada](input_overview.md) - [Columna de List Box](listbox_overview.md#list-box-columns) - [Pie de List Box](listbox_overview.md#list-box-footers) - [Área de plug-in](pluginArea_overview.md#overview) - [Indicador de progreso](progressIndicator.md) - [Botón de radio](radio_overview.md) - [Regla](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md)

---

## Clase CSS

Una lista de palabras separadas por espacios que se utilizan como selectores de clase en los archivos css.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                          |
| ------ | -------------- | ------------------------------------------------------------------------- |
| class  | string         | Una cadena con los nombres de los CSS separados por caracteres de espacio |

#### Objetos soportados

[Área 4D View Pro](viewProArea_overview) - [Área 4D Write Pro](writeProArea_overview) - [Botón](button_overview.md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de selección](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Lista desplegable](dropdownList_Overview.md) - [Caja de grupo](groupBox.md) - [Lista jerárquica](list_overview.md#overview) - List Box [List Box](listbox_overview.md#overview) - [Botón de imagen](pictureButton_overview.md) - [Menú emergente imagen](picturePopupMenu_overview.md) - [Área Plug-in](pluginArea_overview.md#overview) - [Botón de radio](radio_overview.md) - [Imagen estática](staticPicture.md) - [Subformulario](subform_overview.md#overview) - [Área de texto](text.md) - [Área web](webArea_overview.md#overview)

---

## Collection o entity selection

Para utilizar elementos de colección o entidades para definir el contenido de las líneas del list box.

Introduzca una expresión que devuelva una colección o una selección de entidades. Normalmente, introducirá el nombre de una variable, un elemento de una colección o una propiedad que contenga una colección o una selección de entidades.

La colección o la selección de entidades debe estar disponible para el formulario cuando se carga. Cada elemento de la colección o cada entidad de la selección de entidades se asociará a una línea del list box y estará disponible como objeto a través del comando [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html):

- si ha utilizado una colección de objetos, puede llamar a `This` en la expresión datasource para acceder a cada valor de propiedad, por ejemplo `This.\&#060;propertyPath&#062;`.
- si ha utilizado una selección de entidades, puede llamar a `This` en la expresión de la fuente de datos para acceder al valor de cada atributo, por ejemplo `This.\&#060;attributePath&#062;`.

> Si ha utilizado una colección de valores escalares (y no objetos), 4D le permite mostrar cada valor llamando a `This.value` en la expresión datasource. However in this case you will not be able to modify values or to access the current ite object (see below) Note: For information about entity selections, please refer to the [ORDA](https://doc.4d.com/4Dv17R6/4D/17-R6/ORDA.200-4354624.en.html) chapter.

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
- **Selección temporal**: utiliza expresiones, campos o métodos cuyos valores se evaluarán para cada registro de una selección temporal.
- **Colección o Selección de entidades**: utilice elementos de colección o entidades para definir el contenido de las líneas del list box. Tenga en cuenta que con este tipo de list box, debe definir la propiedad [Colección o Selección de entidades](properties_Object.md#collection-or-entity-selection).

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles                                            |
| ----------- | -------------- | ----------------------------------------------------------- |
| listboxType | string         | "array", "currentSelection", "namedSelection", "collection" |

#### Objetos soportados

[List Box](listbox_overview.md)

---

## Tipo de plug-in

Nombre del [área externa del plug-in](pluginArea_overview.md) asociada al objeto. Los nombres de las áreas externas del plug-in.se publican en el archivo manifest.json del plug-in.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                 |
| -------------- | -------------- | ---------------------------------------------------------------- |
| pluginAreaKind | string         | Nombre del área externa del plug-in (comienza con un carácter %) |

#### Objetos soportados

[Área de plug-in](pluginArea_overview.md)

---

## Grupo radio

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

Puede forzar un retorno de carro en la etiqueta utilizando el caracter \ (barra invertida).

![](../assets/en/FormObjects/property_title.png)

Para insertar un \ en la etiqueta, ingrese "&#92;&#92;".

Por defecto, la etiqueta se coloca en el centro del objeto. Cuando el objeto también contiene un icono, puede modificar la ubicación relativa de estos dos elementos utilizando la propiedad [Posición Título/imagen](properties_TextAndPicture.md#titlepicture-position).

Para la traducción de la base de datos, puede introducir una referencia XLIFF en el área del título de un botón (ver [Apéndice B: arquitectura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles |
| ------ | -------------- | ---------------- |
| text   | string         | todo texto       |

#### Objetos soportados

[Botón](button_overview.md) - [Casilla de selección](checkbox_overview.md) - [Encabezado List Box](listbox_overview.md#list-box-headers) - [Botón radio](radio_overview.md) - [ÁreaTexto](text.md)

---

## Cálculo de variables

Esta propiedad define el tipo de cálculo que se realizará en un área [pie de columna](listbox_overview.md#list-box-footers).
> El cálculo de los pies de página también puede definirse con el comando 4D `LISTBOX SET FOOTER CALCULATION`.

Hay varios tipos de cálculos disponibles. La tabla siguiente muestra los cálculos que se pueden utilizar según el tipo de datos que se encuentran en cada columna e indica el tipo afectado automáticamente por 4D a la variable de pie de página (si no está escrita por el código):

| Cálculo                 | Num | Text | Fecha | Hora | Bool | Imágenes | tipos de variables de pie de página |
| ----------------------- | --- | ---- | ----- | ---- | ---- | -------- | ----------------------------------- |
| Mínimo                  | X   |      | X     | X    | X    |          | Igual que el tipo de columna        |
| Máximo                  | X   |      | X     | X    | X    |          | Igual que el tipo de columna        |
| Suma                    | X   |      | X     |      | X    |          | Igual que el tipo de columna        |
| Conteo                  | X   | X    | X     | X    | X    | X        | Integer                             |
| Promedio                | X   |      |       | X    |      |          | Real                                |
| Desviación estándar(*)  | X   |      |       | X    |      |          | Real                                |
| Varianza(*)             | X   |      |       | X    |      |          | Real                                |
| Suma de cuadrados(*)    | X   |      |       | X    |      |          | Real                                |
| Personalizado ("None ") | X   | X    | X     | X    | X    | X        | Cualquiera                          |

(*) Sólo para list boxes de tipo array.

Cuando se establece un cálculo automático, éste se aplica a todos los valores que se encuentran en la columna del list box. Tenga en cuenta que el cálculo no tiene en cuenta el estado mostrado/oculto de las líneas del list box. Si desea restringir un cálculo sólo a las líneas visibles, debe utilizar un cálculo personalizado.

Cuando está configurado **Personalizado** ("none" en JSON), 4D no realiza cálculos automáticos y debe asignar el valor de la variable en esta área por programación.
> Los cálculos automáticos no son soportados con:
> 
> - pies de columnas basados en fórmulas,
> - [pies de página de los list boxes](listbox_overview.md#collection-or-entity-selection-list-boxes) de colecciones y de selección de entidades. Es necesario utilizar cálculos personalizados.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles                                                                                      |
| ------------------- | -------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string         | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objetos soportados

[Pie de list box](listbox_overview.md#list-box-footers)
