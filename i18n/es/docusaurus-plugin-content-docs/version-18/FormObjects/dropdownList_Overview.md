---
id: dropdownListOverview
title: Lista desplegable
---

## Generalidades

Las listas desplegables son objetos que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un array, una lista de selección o una acción estándar.

En macOS, las listas desplegables también se denominan a veces "menú emergente". Ambos nombres se refieren a los mismos objetos. Como muestra el siguiente ejemplo, el aspecto de estos objetos puede variar ligeramente según la plataforma:

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Utilizar un array

Un [array](Concepts/arrays.md) es una lista de valores en memoria a la que se hace referencia por el nombre del array. Una lista desplegable muestra un array como una lista de valores cuando se hace clic en ella.

Los objetos de lista desplegable se inicializan cargando una lista de valores en un array. Puede hacerlo de varias maneras:

* Enter a list of default values in the object properties by selecting `"\&#060;Static List&#062;"` in the [Data Source](properties_DataSource.md) theme of the Property List. Los valores por defecto se cargan en un array automáticamente. Puede referirse al array utilizando el nombre de la variable asociada al objeto.

* Antes de mostrar el objeto, ejecute el código que asigna valores a los elementos del array. Por ejemplo:

```4d
  ARRAY TEXT($aCities;6)
  $aCities{1}:="Philadelphia"
  $aCities{2}:="Pittsburg"
  $aCities{3}:="Grand Blanc"
  $aCities{4}:="Bad Axe"
  $aCities{5}:="Frostbite Falls"
  $aCities{6}:="Green Bay"
```

En este caso, el nombre de la variable asociada al objeto del formulario debe ser *$aCities*. Este código podría colocarse en el método formulario y ejecutarse cuando se ejecute el evento formulario `On Load`.

* Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando [LIST TO ARRAY](https://doc.4d.com/4Dv17R5/4D/17-R5/LIST-TO-ARRAY.301-4127385.en.html). Por ejemplo:

```4d
   LIST TO ARRAY("Cities";$aCities)
```

 En este caso también, el nombre de la variable asociada al objeto del formulario debe ser *$aCities*. Este código puede ejecutarse en lugar de las sentencias de asignación mostradas anteriormente.

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

Debe seleccionar cada [event] que pruebe en las estructuras "For" de su código. Los arrays siempre contienen un número finito de elementos. La lista de elementos es dinámica y puede ser modificada por un método. Los elementos de un array pueden modificarse, ordenarse y añadirse.

## Utilizar una lista de selección

Si desea utilizar una lista desplegable para gestionar los valores de un campo o variable lista, 4D le permite referenciar el campo o la variable directamente como fuente de datos del objeto. Esto facilita la gestión de los campos/variables listados.
> Si utiliza una lista jerárquica, sólo se muestra el primer nivel y se puede seleccionar.

Por ejemplo, en el caso de un campo "Color" que sólo puede contener los valores "White", "Blue", "Green" or "Red", ahora es posible crear una lista que contenga estos valores y asociarla a un objeto emergente menú que haga referencia al campo "Color". 4D se encarga entonces de gestionar automáticamente la entrada y la visualización del valor actual en el formulario.

Para asociar un menú emergente/lista desplegable o un combo box con un campo o una variable, basta con introducir el nombre del campo o la variable directamente en el campo [Variable o Expresión](properties_Object.md#variable-or-expression) del objeto en la lista de propiedades.

Cuando se ejecuta el formulario, 4D gestiona automáticamente el menú emergente o el combo box durante la entrada o visualización: cuando un usuario elige un valor, éste se guarda en el campo; este valor del campo se muestra en el menú emergente cuando se visualiza el formulario:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)
> No es posible combinar este principio con el uso de un array para inicializar el objeto. Si introduce un nombre de campo en el área Nombre de la variable, debe utilizar una lista de selección.

### Guardar como

Cuando haya asociado un menú emergente/lista desplegable con una lista de selección y con un campo, puede utilizar la propiedad [Guardar como valor/ Referencia](properties_DataSource.md#save-as). Esta opción permite optimizar el tamaño de los datos guardados.

## Utilizar una acción estándar

Puede asignar una acción estándar a un menú emergente/lista desplegable ([Acción](properties_Action.md#standard-action) tema de la Lista de Propiedades). Sólo las acciones que muestran una sublista de elementos (excepto la acción de Ir a la página) son soportadas por este tipo de objeto. Por ejemplo, si selecciona la acción estándar `backgroundColor`, en tiempo de ejecución el objeto mostrará una lista automática de colores de fondo. Puede reemplazar esta lista automática asignando además una lista de selección en la que cada elemento tenga asignada una acción estándar personalizada.

Para más información, consulte la sección [Acciones estándar](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html).

## Propiedades soportadas

[Formato Alfa](properties_Display.md#alpha-format) - [Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - \[Estilo del botón\](properties_TextAndPicture. md#button-style) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Formato de fecha](properties_Display.md#date-format) - \[Tipo de expresión\](properties_Object. md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de la fuente](properties_Text.md#font-color) - \[Tamaño de la fuente\](properties_Text. md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Consejo de ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Italic\](properties_Text. md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [No renderizado](properties_Display.md#not-rendered) - \[Nombre del objeto\](properties_Object. md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Acción estándar](properties_Action.md#standard-action) - [Guardar como](properties_DataSource.md#save-as) - \[Formato de tiempo\](properties_Display. md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - \[Variable o expresión\](properties_Object. md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)  
