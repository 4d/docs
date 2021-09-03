---
id: listOverview
title: Lista jerárquica
---


Hierarchical lists are form objects that can be used to display data as lists with one or more levels that can be expanded or collapsed.

![](assets/en/FormObjects/Hlist1.png)

Where appropriate, the expand/collapse icon is automatically displayed to the left of the item. Hierarchical lists support an unlimited number of sublevels.


## Fuente de datos de lista jerárquica

The contents of a hierarchical list form object can be initialized in one of the following ways:

- Associate an existing [choice list](properties_DataSource.md#choice-list) to the object. The choice list must have been defined in the List editor in Design mode.
- Directly assign a hierarchical list  reference to the [variable or expression](properties_Object.md#variable-or-expression) associated with the form object.

In both cases, you manage a hierarchical list at runtime through its *ListRef* reference, using the [Hierarchical list](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) commands in the 4D language.


## RefList y nombre de objeto

A hierarchical list is both a **language object** existing in memory and a **form object**.

The **language object** is referenced by an unique internal ID of the Longint type, designated by *ListRef* in the 4D Language Reference. This ID is returned by the commands that can be used to create lists: `New list`, `Copy list`, `Load list`, `BLOB to list`. There is only one instance of the language object in memory and any modification carried out on this object is immediately carried over to all the places where it is used.

The **form object** is not necessarily unique: there may be several representations of the same hierarchical list in the same form or in different ones. As with other form objects, you specify the object in the language using the syntax (*;"ListName", etc.).

You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. For example, if you have associated the mylist [variable](properties_Object.md#variable-or-expression) to the form object, you can write:

```4d
mylist:=New list
```

Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:

- The selection,
- The expanded/collapsed state of its items,
- The position of the scrolling cursor.

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately. Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example `Count list items` (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

You must use the `ListRef` ID with language commands when you want to specify the hierarchical list found in memory. On the other hand, if you want to specify the representation of a hierarchical list object at the form level, you must use the object name (string type) in the command, via the standard syntax (*;"ListName", etc.).

> In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations. For example, if you execute:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```
> ... you are indicating that you want to modify the font of the hierarchical list item associated with the *mylist1* form object. The command will take the current item of the *mylist1* object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### Support of @

As with other object property management commands, it is possible to use the “@” character in the `ListName` parameter. As a rule, this syntax is used to designate a set of objects in the form. However, in the context of hierarchical list commands, this does not apply in every case. This syntax will have two different effects depending on the type of command:

- For commands that set properties, this syntax designates all the objects whose name corresponds (standard behavior). For example, the parameter "LH@" designates all objects of the hierarchical list type whose name begins with “LH.”
    - `DELETE FROM LIST`
    - `INSERT IN LIST`
    - `SELECT LIST ITEMS BY POSITION`
    - `SET LIST ITEM`
    - `SET LIST ITEM FONT`
    - `SET LIST ITEM ICON`
    - `SET LIST ITEM PARAMETER`
    - `SET LIST ITEM PROPERTIES`

- For commands retrieving properties, this syntax designates the first object whose name corresponds:
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

Es posible modificar la apariencia de una lista jerárquica en un formulario utilizando varios comandos 4D genéricos. Puede pasar a estos comandos el nombre del objeto de la lista jerárquica (utilizando el parámetro *), o su nombre de variable (que contiene el valor ListRef):

- `OBJECT SET FONT`
- `OBJECT SET FONT STYLE`
- `OBJECT SET FONT SIZE`
- `OBJECT SET COLOR`
- `OBJECT SET FILTER`
- `OBJECT SET ENTERABLE`
- `OBJECT SET SCROLLBAR`
- `OBJECT SET SCROLL POSITION`
- `OBJECT SET RGB COLORS`

> Recordatorio: excepto `OBJECT SET SCROLL POSITION`, estos comandos modifican todas las representaciones de una misma lista, aunque sólo se especifique una lista a través de su nombre de objeto.

## Prioridad de los comandos de propiedad

Ciertas propiedades de las listas jerárquicas (por ejemplo, el atributo **editable** o el color) pueden definirse de diferentes maneras: en las propiedades del formulario, mediante un comando del tema "Propiedades de los objetos" o mediante un comando del tema "Lista jerárquica". Cuando se utilizan los tres medios para definir las propiedades de la lista, se aplica el siguiente orden de prioridad:

1. Comandos del tema "Lista jerárquica"
2. Comandos genéricos de propiedad de objeto
3. Propiedad formulario

Este principio se aplica independientemente del orden de llamada de los comandos. Si una propiedad de un elemento se modifica individualmente a través de un comando de lista jerárquica, el comando de propiedad de objeto equivalente no tendrá ningún efecto sobre este elemento, incluso si se llama posteriormente. Por ejemplo, si el color de un elemento se modifica a través del comando `SET LIST ITEM PROPERTIES`, el comando `OBJECT SET COLOR` no tendrá ningún efecto sobre este elemento.


## Gestión de los elementos por posición o por referencia

Normalmente se puede trabajar de dos maneras con el contenido de las listas jerárquicas: por posición o por referencia.

- Cuando se trabaja por posición, 4D se basa en la posición con respecto a los elementos de la lista que aparecen en pantalla para identificarlos. El resultado será diferente según se expandan o colapsen determinados elementos jerárquicos. Tenga en cuenta que en el caso de las representaciones múltiples, cada objeto formulario tiene su propia configuración de elementos expandidos/colapsados.
- Cuando se trabaja por referencia, 4D se basa en el número de identificación *itemRef* de los elementos de la lista. Así, cada elemento puede especificarse individualmente, independientemente de su posición o de su visualización en la lista jerárquica.


### Utilizar los números de referencia de los artículos (itemRef)

Cada elemento de una lista jerárquica tiene un número de referencia (*itemRef*) del tipo Entero largo. Este valor sólo está destinado a su propio uso: 4D simplemente lo mantiene.

> Atención: puede utilizar cualquier tipo de valor entero largo como número de referencia, excepto 0. De hecho, para la mayoría de los comandos de este tema, se utiliza el valor 0 para especificar el último elemento añadido a la lista.

He aquí algunos consejos para utilizar los números de referencia:

1. No es necesario identificar cada elemento con un número único (nivel principiante).

    - Primer ejemplo: se construye por programación un sistema de pestañas, por ejemplo, una libreta de direcciones. Como el sistema devuelve el número de la pestaña seleccionada, probablemente no necesitará más información que ésta. En este caso, no se preocupe por los números de referencia de los elementos: pase un valor cualquiera (excepto 0) en el parámetro *itemRef*. Tenga en cuenta que para un sistema de libreta de direcciones, puede predefinir una lista A, B, ..., Z en el modo Diseño. También se puede crear por programación para eliminar las letras para las que no hay registros.
    - Segundo ejemplo: al trabajar con una base, se construye progresivamente una lista de palabras clave. Puede guardar esta lista al final de cada sesión utilizando los comandos `SAVE LIST` o `LIST TO BLOB` y volver a cargarla al comienzo de cada nueva sesión utilizando el `Load list` o `BLOB to list`. Puede mostrar esta lista en una paleta flotante; cuando cada usuario hace clic en una palabra clave de la lista, el elemento elegido se inserta en el área introducible que está seleccionada en el proceso en primer plano. Lo importante es que sólo procese el elemento seleccionado, porque el comando `Select list items` devuelve la posición del elemento que debe procesar. Cuando se utiliza este valor de posición, se obtiene el título del elemento mediante el comando `GET LIST ITEM`. También en este caso, no es necesario identificar cada elemento individualmente; puede pasar cualquier valor (excepto 0) en el parámetro *itemRef*.

2. Es necesario identificar parcialmente los elementos de la lista (nivel intermedio).  
   El número de referencia del elemento se utiliza para almacenar la información necesaria cuando se debe trabajar con el elemento; este punto se detalla en el ejemplo del comando `APPEND TO LIST`. En este ejemplo, utilizamos los números de referencia de los artículos para almacenar los números de registro. Sin embargo, debemos ser capaces de establecer una distinción entre los elementos que corresponden a los registros [Department] y los que corresponden a los registros [Employees].

3. Identifique todos los elementos de la lista individualmente (nivel avanzado).  
   Programe una gestión elaborada de listas jerárquicas en la que es absolutamente necesario poder identificar cada elemento individualmente en cada nivel de la lista. Una forma sencilla de ponerlo en práctica es mantener un contador personal. Suponga que crea una lista *hlList* utilizando el comando `APPEND TO LIST`. At this stage, you initialize a counter *vhlCounter* to 1. Each time you call `APPEND TO LIST` or `INSERT IN LIST`, you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. The trick consists in never decrementing the counter when you delete items — the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)

> If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans.

### When do you need unique reference numbers?

In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Using `Selected list items` and `GET LIST ITEM` you have all you need to deal with the currently selected item. In addition, commands such as `INSERT IN LIST` and `DELETE FROM LIST` allow you to manipulate the list “relatively” with respect to the selected item.

Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list.


## Elemento modificable

You can control whether hierarchical list items can be modified by the user by using the **Alt+click**(Windows) / **Option+click** (macOS) shortcut, or by carrying out a long click on the text of the item.

- Whatever the hierarchical list data source, you can control the whole object with the [Enterable](properties_Entry.md#enterable) property.

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. For more information, see [Setting list properties](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).


## Propiedades soportadas

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) 