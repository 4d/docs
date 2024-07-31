---
id: listOverview
title: Lista hierárquica
---

As listas hierárquicas são objetos de formulário que podem ser utilizados para apresentar dados como listas com um ou mais níveis que podem ser expandidos ou recolhidos.

![](../assets/en/FormObjects/Hlist1.png)

Quando apropriado, o ícone de expansão/colapso é automaticamente apresentado à esquerda do item. As listas hierárquicas suportam um número ilimitado de subníveis.

## Fonte de dados de lista hierárquica

O conteúdo de um objeto formulário lista hierárquica pode ser inicializado de uma das seguintes formas:

- Asociar una [lista de opciones](properties_DataSource.md#choice-list) existente al objeto. A lista de opções deve ter sido definida no editor de listas no modo Desenho.
- Asigne directamente una referencia de lista jerárquica a la [variable o expresión](properties_Object.md#variable-or-expression) asociada al objeto formulario.

En ambos casos, se gestiona una lista jerárquica en tiempo de ejecución a través de su referencia *ListRef*, utilizando los comandos [lista jerárquica](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) del lenguaje 4D.

## RefList e nome de objeto

Una lista jerárquica es a la vez un **objeto de lenguaje** existente en memoria y un **objeto de formulario**.

El **objeto de lenguaje** está referenciado por un ID interno único de tipo Entero largo, designado por *ListRef* en el manual de Lenguaje 4D. Este ID es devuelto por los comandos que se pueden usar para crear listas: `New list`, `Copy list`, `Load list`, `BLOB to list`. Existe apenas uma instância do objeto língua na memória e qualquer modificação efetuada neste objeto é imediatamente transferida para todos os locais onde é utilizado.

El **objeto de formulario** no es necesariamente único: puede haber varias representaciones de la misma lista jerárquica en el mismo formulario o en otros diferentes. Tal como acontece com outros objetos de formulário, especifica-se o objeto na linguagem utilizando a sintaxe (\*; "ListName", etc.).

You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. Conecte el "objeto lenguaje " lista jerárquica con el "objeto de formulario" lista jerárquica por medio de la variable que contiene el valor RefLista.

```4d
$mylist:=New list
```

Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:

- A selecção,
- O estado expandido/recolhido dos seus itens,
- A posição do cursor de rolagem.

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately.
Consequently, when you use commands based on the expanded/collapsed configuration or the current item, for example `Count list items` (when the final `*` parameter is not passed), it is important to be able to specify the representation to be used without any ambiguity.

Debe utilizar el identificador `RefLista` con los comandos del lenguaje cuando quiera especificar la lista jerárquica que se encuentra en la memoria. On the other hand, if you want to specify the representation of a hierarchical list object at the form level, you must use the object name (string type) in the command, via the standard syntax (\*;"ListName", etc.).

> In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations.
> Por exemplo, se executa:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```

> ... you are indicating that you want to modify the font of the hierarchical list item associated with the *mylist1* form object. El comando tendrá en cuenta el elemento actual del objeto *mylist1* para definir el elemento a modificar, pero esta modificación se trasladará a todas las representaciones de la lista en todos los procesos.

### Suporte da @

Al igual que con otros comandos de gestión de propiedades de objetos, es posible utilizar el carácter "@" en el parámetro `NomLista`. Regra geral, esta sintaxe é utilizada para designar um conjunto de objetos no formulário. However, in the context of hierarchical list commands, this does not apply in every case. Essa sintaxe tem dois efeitos diferentes, dependendo do comando:

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

## Comandos genéricos utilizáveis com listas hierárquicas

It is possible to modify the appearance of a hierarchical list form objects using several generic 4D commands. You can pass to these commands either the object name of the hierarchical list (using the \* parameter), or its variable name (containing the ListRef value):

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

## Prioridade dos comandos de propriedade

Ciertas propiedades de las listas jerárquicas (por ejemplo, el atributo **editable** o el color) pueden definirse de diferentes maneras: en las propiedades del formulario, mediante un comando del tema "Propiedades de los objetos" o mediante un comando del When all three of these means are used to set list properties, the following order of priority is applied:

1. Comandos do tema "Listas hierárquicas"
2. Comandos genéricos de propriedades de objectos
3. Propriedade formulário

This principle is applied regardless of the order in which the commands are called. If an item property is modified individually via a hierarchical list command, the equivalent object property command will have no effect on this item even if it is called subsequently. Por ejemplo, si el color de un elemento se modifica a través del comando `SET LIST ITEM PROPERTIES`, el comando `OBJECT SET COLOR` no tendrá ningún efecto sobre este elemento.

## Gerenciamento dos itens por posição ou referência

You can usually work in two ways with the contents of hierarchical lists: by position or by reference.

- When you work by position, 4D bases itself on the position in relation to the items of the list displayed on screen in order to identify them. The result will differ according to whether or not certain hierarchical items are expanded or collapsed. Note that in the case of multiple representations, each form object has its own configuration of expanded/collapsed items.
- Cuando se trabaja por referencia, 4D se basa en el número de identificación *itemRef* de los elementos de la lista. Each item can thus be specified individually, regardless of its position or its display in the hierarchical list.

### Utilização de números de referência dos items (itemRef)

Cada elemento de una lista jerárquica tiene un número de referencia (*itemRef*) del tipo Entero largo. Este valor é apenas destinado ao seu próprio uso: 4D simplesmente o mantém.

> Warning: You can use any type of Longint value as a reference number, except for 0. In fact, for most of the commands in this theme, the value 0 is used to specify the last item added to the list.

Seguem-se algumas sugestões para a utilização de números de referência:

1. You do not need to identify each item with a unique number (beginner level).

   - First example: you build a system of tabs by programming, for example, an address book. Since the system returns the number of the tab selected, you will probably not need more information than this. En este caso, no se preocupe por los números de referencia de los elementos: pase un valor cualquiera (excepto 0) en el parámetro *itemRef*. Note that for an address book system, you can predefine a list A, B, ..., Z in Design mode. You can also create it by programming in order to eliminate any letters for which there are no records.
   - Second example: while working with a database, you progressively build a list of keywords. Puede guardar esta lista al final de cada sesión utilizando los comandos `SAVE LIST` o `LIST TO BLOB` y volver a cargarla al comienzo de cada nueva sesión utilizando el `Load list` o `BLOB to list`. You can display this list in a floating palette; when each user clicks on a keyword in the list, the item chosen is inserted into the enterable area that is selected in the foreground process. Lo importante es que sólo procese el elemento seleccionado, porque el comando `Select list items` devuelve la posición del elemento que debe procesar. Cuando se utiliza este valor de posición, se obtiene el título del elemento mediante el comando `GET LIST ITEM`. También en este caso, no es necesario identificar cada elemento individualmente; puede pasar cualquier valor (excepto 0) en el parámetro *itemRef*.

2. You need to partially identify the list items (intermediary level).\
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. In this example, we use the item reference numbers to store record numbers. However, we must be able to establish a distinction between items that correspond to the [Department] records and those that correspond to the [Employees] records.

3. You need to identify all the list items individually (advanced level).\
   You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. Uma forma simples de o fazer é manter um contador pessoal. Suponga que crea una lista *hlList* utilizando el comando `APPEND TO LIST`. En esta etapa, se inicializa un contador *vhlCounter* en 1. Cada vez que se llama a `APPEND TO LIST` o `INSERT IN LIST`, se incrementa este contador `(vhlCounter:=vhlCounter+1)`, y se pasa el número del contador como número de referencia del elemento. The trick consists in never decrementing the counter when you delete items — the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)

> If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans.

### Quando é que são necessários números de referência únicos?

In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Con `Selected list items` y `GET LIST ITEM`, tiene todo lo que necesita para tratar con el elemento seleccionado actualmente. Además, comandos como `INSERT IN LIST` y `DELETE FROM LIST` permiten manipular la lista "relativamente" con respecto al elemento seleccionado.

Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list.

## Elemento modificável

Puede controlar si los elementos de la lista jerárquica pueden ser modificados por el usuario utilizando el atajo de teclado **Alt+clic**(Windows) / **Opción+clic** (macOS), o realizando una pulsación larga sobre el texto del elemento.

- Sea cual sea la fuente de datos de la lista jerárquica, puede controlar todo el objeto con la propiedad [Editable](properties_Entry.md#enterable).

- Además, si llena la lista jerárquica utilizando una lista creada en el editor de listas, puede controlar si un elemento de una lista jerárquica es modificable mediante la opción **Elemento modificable** del editor de listas. Para más información, consulte [Definir las propiedades de la lista](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

## Propriedades compatíveis

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable-and-droppable) - [Droppable](properties_Action.md#draggable-and-droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
