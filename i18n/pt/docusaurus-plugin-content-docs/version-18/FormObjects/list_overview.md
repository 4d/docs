---
id: listOverview
title: Lista hierárquica
---

## Visão geral

As listas hierárquicas são objetos de formulário que podem ser utilizados para apresentar dados como listas com um ou mais níveis que podem ser expandidos ou recolhidos.

![](../assets/en/FormObjects/Hlist1.png)

Quando apropriado, o ícone de expansão/colapso é automaticamente apresentado à esquerda do item. As listas hierárquicas suportam um número ilimitado de subníveis.

## Fonte de dados de lista hierárquica

O conteúdo de um objeto formulário lista hierárquica pode ser inicializado de uma das seguintes formas:

- Associar uma [lista de opções](properties_DataSource.md#choice-list) existente ao objeto. A lista de opções deve ter sido definida no editor de listas no modo Desenho.
- Atribuir diretamente uma referência de lista hierárquica à [variável ou à expressão](properties_Object.md#variable-or-expression) associada ao objeto formulário.

Em ambos os casos, gere uma lista hierárquica em tempo de execução através da sua referência *ListRef*, utilizando os comandos [Lista jerárquica](https://doc.4d.com/4Dv17R6/4D/17-R6/Hierarchical-Lists.201-4310291.en.html) na linguagem 4D.

## RefList e nome de objeto

Uma lista hierárquica é simultaneamente um **objeto de linguagem** existente na memória e um **objeto de formulário**.

O **objeto de linguagem ** é referenciado por um ID interno único do tipo Longint, designado por *ListRef* na manual da Linguagem 4D. Este ID é devolvido pelos comandos que podem ser utilizados para criar listas: `New list`, `Copy list`, `Load list`, `BLOB to list`. Existe apenas uma instância do objeto língua na memória e qualquer modificação efetuada neste objeto é imediatamente transferida para todos os locais onde é utilizado.

O **objeto de formulário** não é necessariamente único: podem existir várias representações da mesma lista hierárquica na mesma forma ou em formas diferentes. Tal como acontece com outros objetos de formulário, especifica-se o objeto na linguagem utilizando a sintaxe (*; "ListName", etc.).

You connect the hierarchical list "language object" with the hierarchical list "form object" by the intermediary of the variable containing the ListRef value. Por exemplo, se tiver associado a $mylist [variável](properties_Object.md#variable-or-expression) ao objeto formulário, pode escrever:

```4d
$mylist:=New list
```

Each representation of the list has its own specific characteristics and shares common characteristics with all the other representations. The following characteristics are specific to each representation of the list:

- A selecção,
- O estado expandido/recolhido dos seus itens,
- A posição do cursor de rolagem.

The other characteristics (font, font size, style, entry control, color, list contents, icons, etc.) are common to all the representations and cannot be modified separately. Consequentemente, quando você usa comandos com base na configuração expandida/colapsada ou no item atual, por exemplo, `Count list items` (quando o parâmetro final `*` não é passado), é importante poder especificar a representação a ser usada sem nenhuma ambiguidade.

You must use the `ListRef` ID with language commands when you want to specify the hierarchical list found in memory. Por outro lado, se você quiser especificar a representação de um objeto lista hierárquica no nível do formulário, deverá usar o nome do objeto (tipo string) no comando, por meio da sintaxe padrão (*; "ListName", etc.).

> In the case of commands that set properties, the syntax based on the object name does not mean that only the form object specified will be modified by the command, but rather that the action of the command will be based on the state of this object. The common characteristics of hierarchical lists are always modified in all of their representations. Por exemplo, se executa:

```4d
SET LIST ITEM FONT(*;"mylist1";*;thefont)
```
> ... está a indicar que pretende modificar o tipo de letra do item da lista hierárquica associado ao objeto de formulário *mylist1*. The command will take the current item of the *mylist1* object into account to specify the item to modify, but this modification will be carried over to all the representations of the list in all of the processes.

### Suporte da @

As with other object property management commands, it is possible to use the “@” character in the `ListName` parameter. Regra geral, esta sintaxe é utilizada para designar um conjunto de objetos no formulário. However, in the context of hierarchical list commands, this does not apply in every case. Essa sintaxe tem dois efeitos diferentes, dependendo do comando:

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

It is possible to modify the appearance of a hierarchical list form objects using several generic 4D commands. Você pode passar para esses comandos o nome do objeto da lista hierárquica (usando o parâmetro *) ou o nome da variável (contendo o valor ListRef):

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

## Prioridade dos comandos de propriedade

Certain properties of hierarchical lists (for example, the **Enterable** attribute or the color) can be set in different ways: in the form properties, via a command of the “Object Properties” theme or via a command of the “Hierarchical Lists” theme. When all three of these means are used to set list properties, the following order of priority is applied:

1. Comandos do tema "Listas hierárquicas"
2. Comandos genéricos de propriedades de objectos
3. Propriedade formulário

This principle is applied regardless of the order in which the commands are called. If an item property is modified individually via a hierarchical list command, the equivalent object property command will have no effect on this item even if it is called subsequently. For example, if the color of an item is modified via the `SET LIST ITEM PROPERTIES` command, the `OBJECT SET COLOR` command will have no effect on this item.

## Gerenciamento dos itens por posição ou referência

You can usually work in two ways with the contents of hierarchical lists: by position or by reference.

- When you work by position, 4D bases itself on the position in relation to the items of the list displayed on screen in order to identify them. The result will differ according to whether or not certain hierarchical items are expanded or collapsed. Note that in the case of multiple representations, each form object has its own configuration of expanded/collapsed items.
- When you work by reference, 4D bases itself on the *itemRef* ID number of the list items. Each item can thus be specified individually, regardless of its position or its display in the hierarchical list.

### Utilização de números de referência dos items (itemRef)

Each item of a hierarchical list has a reference number (*itemRef*) of the Longint type. Este valor é apenas destinado ao seu próprio uso: 4D simplesmente o mantém.

> Warning: You can use any type of Longint value as a reference number, except for 0. In fact, for most of the commands in this theme, the value 0 is used to specify the last item added to the list.

Seguem-se algumas sugestões para a utilização de números de referência:

1. You do not need to identify each item with a unique number (beginner level).

 - First example: you build a system of tabs by programming, for example, an address book. Since the system returns the number of the tab selected, you will probably not need more information than this. In this case, do not worry about item reference numbers: pass any value (except 0) in the *itemRef* parameter. Note that for an address book system, you can predefine a list A, B, ..., Z in Design mode. You can also create it by programming in order to eliminate any letters for which there are no records.
 - Second example: while working with a database, you progressively build a list of keywords. You can save this list at the end of each session by using the `SAVE LIST` or `LIST TO BLOB` commands and reload it at the beginning of each new session using the `Load list` or `BLOB to list` commands. You can display this list in a floating palette; when each user clicks on a keyword in the list, the item chosen is inserted into the enterable area that is selected in the foreground process. The important thing is that you only process the item selected, because the `Selected list items` command returns the position of the item that you must process. When using this position value, you obtain the title of the item by means of the `GET LIST ITEM` command. Here again, you do not need to identify each item individually; you can pass any value (except 0) in the *itemRef* parameter.

2. You need to partially identify the list items (intermediary level).  
   You use the item reference number to store information needed when you must work with the item; this point is detailed in the example of the `APPEND TO LIST` command. In this example, we use the item reference numbers to store record numbers. However, we must be able to establish a distinction between items that correspond to the [Department] records and those that correspond to the [Employees] records.

3. You need to identify all the list items individually (advanced level).  
   You program an elaborate management of hierarchical lists in which you absolutely must be able to identify each item individually at every level of the list. Uma forma simples de o fazer é manter um contador pessoal. Suppose that you create a *hlList* list using the `APPEND TO LIST` command. Nesse estágio, você inicializa um contador *vhlCounter* para 1. Each time you call `APPEND TO LIST` or `INSERT IN LIST`, you increment this counter `(vhlCounter:=vhlCounter+1)`, and you pass the counter number as the item reference number. The trick consists in never decrementing the counter when you delete items — the counter can only increase. In this way, you guarantee the uniqueness of the item reference numbers. Since these numbers are of the Longint type, you can add or insert more than two billion items in a list that has been reinitialized... (however if you are working with such a great number of items, this usually means that you should use a table rather than a list.)

> If you use Bitwise Operators, you can also use item reference numbers for storing information that can be put into a Longint, i.e. 2 Integers, 4-byte values or, yet again, 32 Booleans.

### Quando é que são necessários números de referência únicos?

In most cases, when using hierarchical lists for user interface purposes and when only dealing with the selected item (the one that was clicked or dragged), you will not need to use item reference numbers at all. Using `Selected list items` and `GET LIST ITEM` you have all you need to deal with the currently selected item. In addition, commands such as `INSERT IN LIST` and `DELETE FROM LIST` allow you to manipulate the list “relatively” with respect to the selected item.

Basically, you need to deal with item reference numbers when you want direct access to any item of the list programmatically and not necessarily the one currently selected in the list.

## Elemento modificável

Pode controlar se os itens da lista hierárquica podem ser modificados pelo usuário, utilizando o atalho **Alt+click**(Windows) / **Option+click** (macOS), ou fazendo um clique longo no texto do item.

- Independentemente da fonte de dados da lista hierárquica, é possível controlar todo o objeto com a propriedade [Editável](properties_Entry.md#enterable).

- In addition, if you populate the hierarchical list using a list created in the Lists editor, you control whether an item in a hierarchical list is modifiable using the **Modifiable Element** option in the Lists editor. Para obter mais informações, consulte [Definição das propriedades da lista](https://doc.4d.com/4Dv17R6/4D/17-R6/Setting-list-properties.300-4354625.en.html).

## Propriedades compatíveis

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Fill Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multi-selectable](properties_Action.md#multi-selectable) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
