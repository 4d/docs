---
id: propertiesDataSource
title: Fonte de dados
---

## Inserção automática

When this option is selected, if a user enters a value that is not found in the choice list associated with the object, this value is automatically added to the list stored in memory.

Cuando la opción **inserción automática** no está definida (por defecto), el valor introducido se almacena en el objeto formulario pero no en la lista en memoria.

Esta propriedade é suportada por:

- objetos formulario [Combo box](comboBox_overview.md) y [columna list box](listbox_overview.md#list-box-columns) asociadoa a una lista de selección.
- objetos de formulario [Combo box](comboBox_overview.md) cuya lista asociada se llena mediante su array o fuente de datos de objetos.

For example, given a choice list containing "France, Germany, Italy" that is associated with a "Countries" combo box: if the **automatic insertion** property is set and a user enters "Spain", then the value "Spain" is automatically added to the list in memory:

![](../assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

> If the list was created from a list defined in Design mode, the original list is not modified.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| automaticInsertion | boolean       | true, false       |

#### Objectos suportados

[Combo Box](comboBox_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Lista de escolha

Associa uma lista de opções a um objeto. It can be a choice list name (a list reference) or a collection of default values.

También se pueden asociar listas de selección a objetos utilizando los comandos [OBJECT SET LIST BY NAME](https://doc.4d.com/4dv19/help/command/en/page237.html) o [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4dv19/help/command/en/page1266.html).

#### Gramática JSON

| Nome       | Tipo de dados     | Valores possíveis                                                              |
| ---------- | ----------------- | ------------------------------------------------------------------------------ |
| choiceList | liste, collection | Uma lista de valores possíveis                                                 |
| lista      | liste, collection | Uma lista de valores possíveis (apenas listas hierárquicas) |

#### Objectos suportados

[Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)

---

## Lista de opções (lista estática)

Lista de valores estáticos a serem usados como etiquetas para o objeto de controle de tabulação.

#### Gramática JSON

| Nome   | Tipo de dados     | Valores possíveis                                          |
| ------ | ----------------- | ---------------------------------------------------------- |
| labels | liste, collection | Uma lista de valores para preencher o controlo de pestanas |

#### Objectos suportados

[Tab Control](tabControl.md)

---

## Item atual

`List box de tipo collection ou entity selection`

Specifies a variable or expression that will be assigned the collection element/entity selected by the user. You must use an object variable or an assignable expression that accepts objects. If the user does not select anything or if you used a collection of scalar values, the Null value is assigned.

> This property is "read-only", it is automatically updated according to user actions in the list box. Não é possível editar o seu valor para modificar o estado de seleção do list box.

#### Gramática JSON

| Nome              | Tipo de dados | Valores possíveis    |
| ----------------- | ------------- | -------------------- |
| currentItemSource | string        | Expressão de objecto |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

---

## Posição item atual

`List box de tipo collection ou entity selection`

Specifies a variable or expression that will be assigned a longint indicating the position of the collection element/entity selected by the user.

- if no element/entity is selected, the variable or expression receives zero,
- if a single element/entity is selected, the variable or expression receives its location,
- if multiple elements/entities are selected, the variable or expression receives the position of element/entity that was last selected.

> This property is "read-only", it is automatically updated according to user actions in the list box. Não é possível editar o seu valor para modificar o estado de seleção do list box.

#### Gramática JSON

| Nome                      | Tipo de dados | Valores possíveis  |
| ------------------------- | ------------- | ------------------ |
| currentItemPositionSource | string        | Expressão numérica |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Tipo de dados

Define o tipo de dados para a expressão apresentada. Esta propriedade é utilizada com:

- [Columnas del List box](listbox_overview.md#list-box-columns) de los tipos de selección y colección.
- [Listas desplegables](dropdownList_Overview.md) asociadas a objetos o arrays.

See also [**Expression Type**](properties_Object.md#expression-type) section.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis                                                                                                                                                                                                                      |
| ------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string        | <li>**list box columns:** "boolean", "number", "picture", "text", date", "time". *Array/selection list box only*: "integer", "object"</li><li>**drop-down lists:** "object", "arrayText", "arrayDate", "arrayTime", "arrayNumber"</li> |

#### Objectos suportados

[Listas desplegables](dropdownList_Overview.md) asociadas a objetos o arrays - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Tipo de dados (lista)

Define el tipo de datos a guardar en el campo o variable asociado a la [lista desplegable](dropdownList_Overview.md). Esta propriedade é utilizada com:

- Listas desplegables [asociadas a una lista de opciones](dropdownList_Overview.md#using-a-choice-list).
- Listas desplegables [asociadas a una lista de selección jerárquica](dropdownList_Overview.md#using-a-hierarchical-choice-list).

Estão disponíveis três opções:

- **Referencia de lista**: declara que la lista desplegable es jerárquica. Significa que la lista desplegable puede mostrar hasta dos niveles jerárquicos y su contenido puede gestionarse mediante los comandos del lenguaje 4D del tema **Listas jerárquicas**.
- **Valor del elemento seleccionado** (por defecto): la lista desplegable no es jerárquica y el valor del elemento elegido en la lista por el usuario se guarda directamente. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Referencia del elemento seleccionado**: la lista desplegable no es jerárquica y la referencia del elemento de la lista de selección se guarda en el objeto. This reference is the numeric value associated with each item either through the _itemRef_ parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor. This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

La utilización de la opción **Referencia del elemento seleccionado** requiere el cumplimiento de los siguientes principios:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). La propiedad [expresión ](properties_Object.md#expression-type) se define automáticamente.
- Devem ser associadas referências válidas e únicas aos itens da lista.
- A lista pendente deve estar associada a um campo ou a uma variável.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis    |
| ------ | ------------- | -------------------- |
| saveAs | string        | "value", "reference" |

> Definir sólo `"dataSourceTypeHint" : "integer"` con un `"type": "dropdown"` objeto de formulario declarará una lista desplegable jerárquica.

#### Objectos suportados

[Listas desplegables](dropdownList_Overview.md) asociadas a listas

---

## Valores padrão (lista de)

List of values that will be used as default values for the list box column (array type only). Estos valores están disponibles automáticamente en la [variable array](properties_Object.md#variable-or-expression) asociada a esta columna cuando se ejecuta el formulario. Using the language, you can manage the object by referring to this array.

> No confunda esta propiedad con la propiedad "[valor por defecto](properties_RangeOfValues.md#default-list-of-values)" que permite definir un valor de campo en los nuevos registros.

É necessário introduzir uma lista de valores. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:

![](../assets/en/FormObjects/defaultValues.png)

> También puede definir una [lista de selección](properties_DataSource.md#choice-list) con la columna list box. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                                                                              |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| values | collection    | Uma coleção de valores por defeito (cadeias de caracteres), por exemplo: "a", "b", "c", "d" |

#### Objectos suportados

[List Box Column (array type only)](listbox_overview.md#list-box-columns)

---

## Expression

This description is specific to [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. Ver también la sección **[Variable o Expresión](properties_Object.md#variable-or-expression)**.

Uma expressão 4D a associar a uma coluna. Você pode entrar:

- Una **variable simple** (en este caso, debe ser declarada explícitamente para la compilación). Pode utilizar qualquer tipo de variável, exceto BLOBs e arrays. El valor de la variable se calculará generalmente en el evento `On Display Detail`.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes)
  only), for example: `[Employees]LastName`. Podem ser utilizados os seguintes tipos de campos:
  - String
  - Numeric
  - Date
  - Hora
  - Imagem
  - Boolean\
    You can use fields from the Master Table or from other tables.

- Una **expresión 4D** (expresión simple, fórmula o método 4D). A expressão deve devolver um valor. El valor se evaluará en los eventos `On Display Detail` y `On Data Change`. O resultado da expressão será automaticamente apresentado quando mudar para o modo Aplicação. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). Se estiver vazia, a coluna não apresentará nenhum resultado.
  São suportados os seguintes tipos de expressão:
  - String
  - Numeric
  - Date
  - Imagem
  - Parâmetros

For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.\
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` es un comando 4D dedicado que devuelve una referencia al elemento actualmente procesado. Por ejemplo, puede utilizar `This.\<propertyPath>` donde `\<propertyPath>` es la ruta de una propiedad en la colección o una ruta de atributo de entidad para acceder al valor actual de cada elemento/entidad.
If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. En este caso, utilizará `This.value` como expresión.

Si se utiliza una expresión no asignable  (por ejemplo, `[Person]FirstName+" "+[Person]LastName`), la columna nunca se podrá introducir aunque la propiedad [Editable](properties_Entry.md#enterable) esté activada.

Si se utiliza un campo, una variable o una expresión asignable (_por ejemplo Person.lastName_), la columna puede ser editable o no dependiendo de la propiedad [Editable](properties_Entry.md#enterable).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                                                                 |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------- |
| dataSource | string        | Uma variável 4D, nome de campo ou uma expressão de linguagem complexa arbitrária. |

#### Objectos suportados

[List Box Column](listbox_overview.md#list-box-columns)

---

## Tabela mestre

`Current selection list boxes`

Especifica a tabela cuja seleção atual será utilizada. This table and its current selection will form the reference for the fields associated with the columns of the list box (field references or expressions containing fields). Even if some columns contain fields from other tables, the number of rows displayed will be defined by the master table.

All database tables can be used, regardless of whether the form is related to a table (table form) or not (project form).

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| tabela | number        | Número de tabela  |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

---

## Salvar como

Esta propriedade está disponível nas seguintes condições:

- una [lista de selección](#choice-list) está asociada al objeto
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:

- **Guardar como valor** (opción por defecto): el valor del elemento elegido en la lista por el usuario se guarda directamente. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Guardar como referencia**: la referencia del elemento de la lista de opciones se guarda en el objeto. This reference is the numeric value associated with each item either through the _itemRef_ parameter of the [`APPEND TO LIST`](https://doc.4d.com/4dv19/help/command/en/page376.html) or [`SET LIST ITEM`](https://doc.4d.com/4dv19/help/command/en/page385.html) commands, or in the list editor.

This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

A utilização deste bem exige o cumprimento dos seguintes princípios:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list). La propiedad [expresión ](properties_Object.md#expression-type) se define automáticamente.
- Devem ser associadas referências válidas e únicas aos itens da lista.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis    |
| ------ | ------------- | -------------------- |
| saveAs | string        | "value", "reference" |

#### Objectos suportados

[Área de entrada](input_overview.md) - [Columna List Box](listbox_overview.md#list-box-columns)

---

## Itens selecionados

`List box de tipo collection ou entity selection`

Specifies a variable or expression that will be assigned the elements or entities selected by the user.

- for a collection list box, you must use a collection variable or an assignable expression that accepts collections,
- para um list box seleção de entidades, é criado um objeto de seleção de entidades. You must use an object variable or an assignable expression that accepts objects.

> This property is "read-only", it is automatically updated according to user actions in the list box. Não é possível editar o seu valor para modificar o estado de seleção do list box.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis     |
| ------------------- | ------------- | --------------------- |
| selectedItemsSource | string        | Expressão da colecção |

#### Objectos suportados

[List Box](listbox_overview.md#overview)

---

## Nome da seleção

`List boxes de tipo seleção nomeada`

Especifica a seleção nomeada a ser utilizada. Você deve inserir o nome de uma seleção nomeada válida. It can be a process or interprocess named selection. O conteúdo do list box será baseado nesta seleção. The named selection chosen must exist and be valid at the time the list box is displayed, otherwise the list box will be displayed blank.

> As selecções nomeadas são listas ordenadas de registos. They are used to keep the order and current record of a selection in memory. Para más información, consulte la sección **Selecciones temporales** del manual _Lenguaje 4D_.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis |
| -------------- | ------------- | ----------------- |
| namedSelection | string        | Nome da selecção  |

#### Objectos suportados

[List Box](listbox_overview.md#overview)
