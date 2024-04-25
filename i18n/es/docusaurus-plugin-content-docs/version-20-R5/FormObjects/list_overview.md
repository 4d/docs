---
id: listOverview
title: Lista jerárquica
---

Las listas jerárquicas son objetos formulario que pueden utilizarse para mostrar datos en forma de listas con uno o más niveles que pueden desplegarse o contraerse.

![](../assets/en/FormObjects/Hlist1.png)

Cuando corresponda, el icono desplegar/contraer se mostrará automáticamente a la izquierda del elemento. Las listas jerárquicas soportan un número ilimitado de subniveles.

## Fuente de datos de lista jerárquica

El contenido de un objeto formulario lista jerárquica se puede inicializar de una de las siguientes maneras:

- Associate an existing [choice list](properties_DataSource.md#choice-list) to the object. La lista de elección debe haber sido definida en el editor de listas en modo Diseño.
- Directly assign a hierarchical list  reference to the [variable or expression](properties_Object.md#variable-or-expression) associated with the form object.

In both cases, you manage a hierarchical list at runtime through its _ListRef_ reference, using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the 4D language.

## RefList y nombre de objeto

A hierarchical list is both a **language object** existing in memory and a **form object**.

The **language object** is referenced by an unique internal ID of the Longint type, designated by _ListRef_ in the 4D Language Reference. This ID is returned by the commands that can be used to create lists: `New list`, `Copy list`, `Load list`, `BLOB to list`. Sólo hay una instancia del objeto lenguaje en la memoria y cualquier modificación realizada en este objeto se traslada inmediatamente a todos los lugares donde se utiliza.

The **form object** is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. Al igual que con otros objetos formulario, se especifica el objeto en el lenguaje utilizando la sintaxis (\*; "NomLista", etc.).

Conecte el "objeto lenguaje " lista jerárquica con el "objeto de formulario" lista jerárquica por medio de la variable que contiene el valor RefLista. For example, if you have associated the mylist [variable](properties_Object.md#variable-or-expression) to the form object, you can write:

```4d
mylist:=New list
```

Cada representación de la lista tiene sus propias características específicas y comparte características comunes con todas las demás representaciones. Las siguientes características son específicas de cada representación de la lista:

- La selección,
- El estado desplegado/colapsado de sus elementos,
- La posición del cursor de desplazamiento.

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.
Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example `Count list items` (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

You must use the `ListRef` ID with language commands when you want to specify the hierarchical list found in memory. En cambio, si desea especificar la representación al nivel del formulario de un objeto Lista jerárquica, debe utilizar el nombre del objeto (tipo cadena) en el comando, mediante la sintaxis estándar (\*; "NomLista", etc.).

> En el caso de los comandos que definen propiedades, la sintaxis basada en el nombre del objeto no significa que sólo el objeto formulario especificado será modificado por el comando, sino que la acción del comando se basará en el estado de este objeto. Las características comunes de las listas jerárquicas se modifican siempre en todas sus representaciones.
> Por ejemplo, si pasa la instrucción:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... you are indicating that you want to modify the font of the hierarchical list item associated with the _mylist1_ form object. The command will take the current item of the _mylist1_ object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### Soporte de @

As with other object property management commands, it is possible to use the “@” character in the `ListName` parameter. Por regla general, esta sintaxis se utiliza para designar un conjunto de objetos del formulario. Sin embargo, en el contexto de los comandos de listas jerárquicas, esto no se aplica en todos los casos. Esta sintaxis tendrá dos efectos diferentes según el tipo de comando:

- Para los comandos que fijan propiedades, esta sintaxis designa todos los objetos cuyo nombre corresponde (comportamiento estándar). Por ejemplo, el parámetro "LH@" designa todos los objetos del tipo lista jerárquica cuyo nombre empieza por "LH."
  - `DELETE FROM LIST`
  - `INSERT IN LIST`
  - `SELECT LIST ITEMS BY POSITION`
  - `SET LIST ITEM`
  - `SET LIST ITEM FONT`
  - `SET LIST ITEM ICON`
  - `SET LIST ITEM PARAMETER`
  - `SET LIST ITEM PROPERTIES`

- Para los comandos que recuperan propiedades, esta sintaxis designa el primer objeto cuyo nombre corresponde:
  - `Count list items`
  - `Find in list`
  - `GET LIST ITEM`
  - `Get list item font`
  - `GET LIST ITEM ICON`
  - `GET LIST ITEM PARAMETER`
  - `GET LIST ITEM PROPERTIES`
  - `List item parent`
  - `List item position`
  - `Selected list items`

## Comandos genéricos utilizables con listas jerárquicas

Es posible modificar la apariencia de una lista jerárquica en un formulario utilizando varios comandos 4D genéricos. Puede pasar a estos comandos el nombre del objeto de la lista jerárquica (utilizando el parámetro \*), o su nombre de variable (que contiene el valor ListRef):

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> Reminder: Except `OBJECT SET SCROLL POSITION`, these commands modify all the representations of the same list, even if you only specify a list via its object name.

## Prioridad de los comandos de propiedad

Certain properties of hierarchical lists (for example, the **Enterable** attribute or the color) can be set in different ways: in the form properties, via a command of the “Object Properties” theme or via a command of the “Hierarchical Lists” theme. Cuando se utilizan los tres medios para definir las propiedades de la lista, se aplica el siguiente orden de prioridad:

1. Comandos del tema "Lista jerárquica"
2. Comandos genéricos de propiedad de objeto
3. Propiedad formulario

Este principio se aplica independientemente del orden de llamada de los comandos. Si una propiedad de un elemento se modifica individualmente a través de un comando de lista jerárquica, el comando de propiedad de objeto equivalente no tendrá ningún efecto sobre este elemento, incluso si se llama posteriormente. For example, if the color of an item is modified via the `SET LIST ITEM PROPERTIES` command, the `OBJECT SET COLOR` command will have no effect on this item.

## Gestión de los elementos por posición o por referencia

Normalmente se puede trabajar de dos maneras con el contenido de las listas jerárquicas: por posición o por referencia.

- Cuando se trabaja por posición, 4D se basa en la posición con respecto a los elementos de la lista que aparecen en pantalla para identificarlos. El resultado será diferente según se expandan o colapsen determinados elementos jerárquicos. Tenga en cuenta que en el caso de las representaciones múltiples, cada objeto formulario tiene su propia configuración de elementos expandidos/colapsados.
- When you work by reference, 4D bases itself on the _itemRef_ ID number of the list items. Así, cada elemento puede especificarse individualmente, independientemente de su posición o de su visualización en la lista jerárquica.

### Utilizar los números de referencia de los artículos (itemRef)

Each item of a hierarchical list has a reference number (_itemRef_) of the Longint type. Este valor sólo está destinado a su propio uso: 4D simplemente lo mantiene.

> Atención: puede utilizar cualquier tipo de valor entero largo como número de referencia, excepto 0. De hecho, para la mayoría de los comandos de este tema, se utiliza el valor 0 para especificar el último elemento añadido a la lista.

He aquí algunos consejos para utilizar los números de referencia:

1. No es necesario identificar cada elemento con un número único (nivel principiante).

   - Primer ejemplo: se construye por programación un sistema de pestañas, por ejemplo, una libreta de direcciones. Como el sistema devuelve el número de la pestaña seleccionada, probablemente no necesitará más información que ésta. In this case, do not worry about item reference numbers: pass any value (except 0) in the _itemRef_ parameter. Tenga en cuenta que para un sistema de libreta de direcciones, puede predefinir una lista A, B, ..., Z en el modo Diseño. También se puede crear por programación para eliminar las letras para las que no hay registros.
   - Segundo ejemplo: al trabajar con una base, se construye progresivamente una lista de palabras clave. You can save this list at the end of each session by using the `SAVE LIST` or `LIST TO BLOB` commands and reload it at the beginning of each new session using the `Load list` or `BLOB to list` commands. Puede mostrar esta lista en una paleta flotante; cuando cada usuario hace clic en una palabra clave de la lista, el elemento elegido se inserta en el área introducible que está seleccionada en el proceso en primer plano. The important thing is that you only process the item selected, because the `Selected list items` command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the `GET LIST ITEM` command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the _itemRef_ parameter.

2. You need to partially identify the list items (intermediary level).\
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. En este ejemplo, utilizamos los números de referencia de los artículos para almacenar los números de registro. Sin embargo, debemos ser capaces de establecer una distinción entre los elementos que corresponden a los registros [Department] y los que corresponden a los registros [Employees].

3. You need to identify all the list items individually (advanced level).\
   You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. Una forma sencilla de ponerlo en práctica es mantener un contador personal. Suppose that you create a _hlList_ list using the `APPEND TO LIST` command. At this stage, you initialize a counter _vhlCounter_ to 1. Each time you call `APPEND TO LIST` or `INSERT IN LIST`, you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. El truco consiste en no disminuir nunca el contador cuando se eliminan elementos: el contador sólo puede aumentar. De este modo, se garantiza la unicidad de los números de referencia de los elementos. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)

> Si se utilizan operadores Bitwise, también se pueden utilizar los números de referencia de los elementos para almacenar información que se puede poner en un Entero largo, es decir, 2 enteros, valores de 4 bytes o de nuevo 32 booleanos.

### ¿Cuándo necesita números de referencia únicos?

En la mayoría de los casos, cuando se utilizan listas jerárquicas con fines de interfaz de usuario y cuando sólo se trata del elemento seleccionado (por un clic o arrastrado), no será necesario utilizar los números de referencia de los elementos en absoluto. Using `Selected list items` and `GET LIST ITEM` you have all you need to deal with the currently selected item. In addition, commands such as `INSERT IN LIST` and `DELETE FROM LIST` allow you to manipulate the list “relatively” with respect to the selected item.

Básicamente, es necesario tratar con los números de referencia de los elementos cuando se quiere acceder directamente a cualquier elemento de la lista de forma programada y no necesariamente al actualmente seleccionado en la lista.

## Elemento modificable

You can control whether hierarchical list items can be modified by the user by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item.

- Whatever the hierarchical list data source, you can control the whole object with the [Enterable](properties_Entry.md#enterable) property.

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. For more information, see [Setting list properties](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

## Propiedades soportadas

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
