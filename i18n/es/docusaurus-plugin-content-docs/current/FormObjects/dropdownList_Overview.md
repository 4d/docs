---
id: dropdownListOverview
title: Lista desplegable
---

Las listas desplegables son objetos de formulario que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un objeto, array, una lista de selección o una acción estándar.

En macOS, las listas desplegables también se denominan a veces "menú emergente". Ambos nombres se refieren a los mismos objetos. Como muestra el siguiente ejemplo, el aspecto de estos objetos puede variar ligeramente según la plataforma:

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Tipos de listas desplegables

Puede crear diferentes tipos de listas desplegables con distintas funcionalidades. Para definir un tipo, seleccione los valores apropiados **Tipo de expresión** y **Tipo de datos** en la lista Propiedades o utilice su equivalente JSON.

| Tipo                                        | Funcionalidades                                                                           | Tipo de expresión | Tipos de datos                       | Definición JSON                                                                                                                     |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| Object                                      | Creado sobre una colección                                                                | Object            | Numeric, Text, Date o Time           | `dataSourceTypeHint: object` + `numberFormat: <format>` or `textFormat: <format>` o `dateFormat: <format>` o `timeFormat: <format>` |
| Array                                       | Basado en un array                                                                        | Array             | Numeric, Text, Date o Time           | `dataSourceTypeHint: arrayNumber` o `arrayText` o `arrayDate` o `arrayTime`                                                         |
| Lista de selección guardada como valor      | Crear en una lista de selección (estándar)                             | Lista             | Valor del elemento seleccionado      | `dataSourceTypeHint: text` + `saveAs: value`                                                                                        |
| Lista de selección guardada como referencia | Creado sobre una lista de selección. La posición del elemento es guardada | Lista             | Referencia del elemento seleccionado | `dataSourceTypeHint: integer` + `saveAs: reference`                                                                                 |
| Lista de selección jerárquica               | Puede mostrar contenido jerárquico                                                        | Lista             | Referencia de la lista               | `dataSourceTypeHint: integer`                                                                                                       |
| Acción estándar                             | Creado automáticamente por la acción                                                      | _cualquiera_      | _todo excepto referencia de lista_   | toda definición + `action: <action>` (+ `focusable: false` para acciones que se aplican a otras áreas)           |

## Gestión de listas desplegables

### Utilizar un objeto

> Esta funcionalidad sólo está disponible en proyectos 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection.md) can be used as the data source of a drop-down list. El objeto debe contener las siguientes propiedades:

| Propiedad      | Tipo                 | Descripción                                                                                                                                                                                                                                                                             |
| -------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valores`      | Collection           | Obligatorio - Colección de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:<li>cadenas</li><li>números</li><li>fechas</li><li>horas</li>Si está vacío o no se define, la lista desplegable estará vacía |
| `index`        | number               | Índice del elemento seleccionado actualmente (valor comprendido entre 0 y `collection.length-1`). Si se establece -1, `currentValue` se muestra como una cadena de marcador de posición                                                              |
| `currentValue` | igual que Collection | Elemento seleccionado actualmente (se utiliza como valor de marcador de posición si se define por código)                                                                                                                                                            |

Si el objeto contiene otras propiedades, se ignoran.

Para inicializar el objeto asociado a la lista desplegable, puede:

- Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando `\<Lista Estática>` en el tema [Fuente de Datos](properties_DataSource.md) de la Lista de Propiedades. Los valores por defecto se cargan en un objeto automáticamente.

- Ejecutar código que crea el objeto y sus propiedades. Por ejemplo, si "myList" es la variable  asociada a la lista desplegable, puede escribir en el evento de formulario [On Load](Events/onLoad.md):

```4d
// Form.myDrop es la fuente de datos del objeto formulario
 
Form.myDrop:=New object
Form.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")
Form.myDrop.index:=-1  //currentValue es un marcador de posición
Form.myDrop.currentValue:="Select a fruit" 
```

La lista desplegable se muestra con la cadena del marcador de posición:

![](../assets/en/FormObjects/fruits2.png)

Después de que el usuario seleccione un valor:

![](../assets/en/FormObjects/fruits3.png)

```4d
Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]
Form.myDrop.currentValue //"oranges"
Form.myDrop.index //3
```

### Utilizar un array

Un [array](Concepts/arrays.md) es una lista de valores en memoria a la que se hace referencia por el nombre del array. Una lista desplegable puede mostrar un array como una lista de valores cuando se hace clic en ella.

Para inicializar el array asociado a la lista desplegable, puede:

- Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando `\<Lista Estática>` en el tema [Fuente de Datos](properties_DataSource.md) de la Lista de Propiedades. Los valores por defecto se cargan en un array automáticamente. Puede referirse al array utilizando el nombre de la variable asociada al objeto.

- Antes de mostrar el objeto, ejecute el código que asigna valores a los elementos del array. Por ejemplo:

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

- Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html). Por ejemplo:

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

Si desea utilizar una lista desplegable para gestionar los valores de un área de entrada (campo listado o variable), 4D le permite hacer referencia al campo o variable directamente como [fuente de datos](properties_Object.md#variable-or-expression) de la  Esto facilita la gestión de los campos/variables listados.

Por ejemplo, en el caso de un campo "Color" que sólo puede contener los valores "Blanco", "Azul", "Verde" o "Rojo", es posible crear una lista que contenga estos valores y asociarla a una lista desplegable que haga referencia al campo "Color" 4D. 4D se encarga entonces de gestionar automáticamente la entrada y la visualización del valor actual en el formulario.

> Si utiliza una lista jerárquica, sólo se muestra el primer nivel y se puede seleccionar. If you use a hierarchical list, only the first level is displayed and can be selected.

Para asociar una lista desplegable a un campo o variable, introduzca directamente el nombre del campo o variable como campo [Variable o Expresión](properties_Object.md#variable-or-expression) de la lista desplegable en la Lista de propiedades.

> No es posible utilizar esta funcionalidad con una lista desplegable de objetos o arrays. Si introduce un nombre de campo en el área "Variable o expresión", deberá utilizar una lista de selección.

Cuando se ejecuta el formulario, 4D gestiona automáticamente la lista desplegable durante la introducción o la visualización: cuando un usuario elige un valor, éste se guarda en el campo; este valor de campo se muestra en la lista desplegable cuando se visualiza el formulario:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)

#### Valor del elemento seleccionado o Referencia del elemento seleccionado

Cuando haya asociado una lista desplegable con una lista de opciones y con un campo o una variable, puede establecer la propiedad [**Tipo de datos**](properties_DataSource.md#data-type) en **Valor del elemento seleccionado** o **Referencia del elemento seleccionado**. Esta opción permite optimizar el tamaño de los datos guardados.

### Uso de una lista de selección jerárquica

Una lista desplegable jerárquica tiene una sublista asociada a cada elemento de la lista. Este es un ejemplo de lista desplegable jerárquica:

![](../assets/en/FormObjects/popupDropdown_hierar.png)

> En los formularios, las listas desplegables jerárquicas están limitadas a dos niveles.

Puede asignar la lista de selección jerárquica al objeto de lista desplegable utilizando el campo [Lista de selección](properties_DataSource.md#choice-list) de la Lista de propiedades.

Las listas jerárquicas desplegables se gestionan utilizando los comandos **Listas jerárquicas** del Lenguaje 4D. Todos los comandos que soportan la sintaxis `(*; "name")` pueden utilizarse con listas desplegables jerárquicas, por ejemplo, [`List item parent`](https://doc.4d.com/4dv19/help/command/en/page633.html).

### Utilizar una acción estándar

Puede crear automáticamente una lista desplegable utilizando una acción estándar. Esta funcionalidad es soportada en los siguientes contextos:

- Uso de la acción estándar `gotoPage`. En este caso, 4D mostrará automáticamente la [página del formulario](FormEditor/forms.md#form-pages) que corresponda al número del elemento seleccionado. Por ejemplo, si el usuario selecciona el tercer elemento, 4D mostrará la tercera página del formulario actual (si existe). En tiempo de ejecución, la lista desplegable muestra por defecto los números de página (1, 2...).

- Uso de una acción estándar que muestra una sublista de elementos, por ejemplo `backgroundColor`. Esta funcionalidad requiere que:
  - un área de texto con estilo ([área 4D Write Pro](writeProArea_overview.md) o [entrada](input_overview.md) con la propiedad [multiestilo](properties_Text.md#multi-style)) está presente en el formulario como objetivo de la acción estándar.
  - la propiedad [focusable](properties_Entry.md#focusable) no está definida en la lista desplegable.
    En tiempo de ejecución, la lista desplegable mostrará una lista automática de valores, por ejemplo, colores de fondo. Puede reemplazar esta lista automática asignando además una lista de selección en la que cada elemento tenga asignada una acción estándar personalizada.

> Esta funcionalidad no puede utilizarse con una lista desplegable jerárquica.

## Propiedades soportadas

[Formato Alfa](properties_Display.md#alpha-format) - [Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botón](properties_TextAndPicture.md#button-style) - [Lista de selección](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Tipo de datos (expression type)](properties_DataSource.md#data-type-expression-type) - [Tipo de datos (list)](properties_DataSource.md#data-type-list) - [Formato](properties_Display.md#date-format) - [Tipo de expresión](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Alto](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [No renderizado](properties_Display.md#not-rendered) - [Nombre de objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Acción estándar](properties_Action.md#standard-action) - [Guardar valor](properties_Object.md#save-value) - [Formato de tiempo](properties_Display.md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
