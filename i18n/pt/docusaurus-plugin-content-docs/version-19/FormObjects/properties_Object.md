---
id: propertiesObject
title: Objetos
---

---

## Tipo

 `CONFIGURAÇÃO OBRIGATÓRIA`

Esta propriedade designa o tipo de [objecto formulárioactivo ou inactivo](formObjects_overview.md).

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis                                                                                                                                                                                                                                                                                        |
| ---- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string        | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |

#### Objectos suportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) -[Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Nome de objeto

Cada objeto de formulário ativo está associado a um nome de objeto. Cada nome de objeto deve ser único.
> Os nomes dos objectos estão limitados a um tamanho de 255 bytes.

When using 4D’s language, you can refer to an active form object by its object name (for more information about this, refer to [Object Properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Object-Properties.300-4128195.en.html) in the 4D Language Reference manual).

For more information about naming rules for form objects, refer to [Identifiers](Concepts/identifiers.md) section.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis                                                    |
| ---- | ------------- | -------------------------------------------------------------------- |
| name | string        | Any allowed name which does not belong to an already existing object |

#### Objectos suportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)

---

## Guardar valor

This property is available when the [Save Geometry](FormEditor/properties_FormProperties.md#save-geometry) option is checked for the form.

This feature is only supported for objects that contribute to the overall geometry of the form. For example, this option is available for check boxes because their value can be used to hide or display additional areas in the window.

Eis a lista de objetos cujo valor pode ser guardado:

| Object                                                  | Valor guardado                                                                         |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Caixa de selecção](checkbox_overview.md)               | Valor da variável associada (0, 1, 2)                                                  |
| [Lista suspensa ou drop down](dropdownList_Overview.md) | Número da linha seleccionada                                                           |
| [Botão rádio](radio_overview.md)                        | Valor da variável associada (1, 0, True ou False para os botões, consoante o seu tipo) |
| [Tab control](tabControl.md)                            | Number of selected tab                                                                 |

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis |
| ------------- | ------------- | ----------------- |
| memorizeValue | boolean       | true, false       |

#### Objectos suportados

[Caixa de verificação](checkbox_overview.md) - [Lista pendente](dropdownList_Overview.md) - [Botão de rádio](radio_overview.md) - [Controlo de separadores](tabControl.md)

---

## Variável ou expressão

> See also **[Expression](properties_DataSource#expression)** for Selection and collection type list box columns.

Esta propriedade especifica a fonte dos dados. Each active form object is associated with an object name and a variable name. O nome da variável pode diferir do nome do objeto. In the same form, you can use the same variable several times while each [object name](#object-name) must be unique.
> O tamanho do nome da variável é limitado a 31 bytes. See [Identifiers](Concepts/identifiers.md) section for more information about naming rules.

The form object variables allow you to control and monitor the objects. For example, when a button is clicked, its variable is set to 1; at all other times, it is 0. The expression associated with a progress indicator lets you read and change the current setting.

Variables or expressions can be enterable or non-enterable and can receive data of the Text, Integer, Numeric, Date, Time, Picture, Boolean, or Object type.

#### Gramática JSON

| Nome       | Tipo de dados              | Valores possíveis                                                           |
| ---------- | -------------------------- | --------------------------------------------------------------------------- |
| dataSource | string ou array de strings | <li>4D variable, field name, or arbitrary complex language expression. </li><li>Cadeia vazia para [variáveis dinâmicas](#variáveis-dinâmicas). </li><li>String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column]</li> |

### Expressões

You can use an expression as data source for an object. Any valid 4D expression is allowed: simple expression, formula, 4D function, project method name or field using the standard `[Table]Field` syntax. The expression is evaluated when the form is executed and reevaluated for each form event. Note that expressions can be [assignable or non-assignable](Concepts/quick-tour.md#expressions).
> If the value entered corresponds to both a variable name and a method name, 4D considers that you are indicating the method.

### Variáveis dinâmicas

You can leave it up to 4D to create variables associated with your form objects (buttons, enterable variables, check boxes, etc.) dynamically and according to your needs. To do this, simply leave the "Variable or Expression" property (or `dataSource` JSON field) blank.

When a variable is not named, when the form is loaded, 4D creates a new variable for the object, with a calculated name that is unique in the space of the process variables of the interpreter (which means that this mechanism can be used even in compiled mode). Esta variável temporária será destruída quando o formulário for fechado. Para que este princípio funcione em modo compilado, é imperativo que as variáveis dinâmicas sejam explicitamente tipadas. Há duas formas de o fazer:

- Pode definir o tipo utilizando a propriedade [Tipo de expressão](#expression-type).
- É possível utilizar um código de inicialização específico quando o formulário é carregado, que utiliza, por exemplo, o comando `VARIABLE TO VARIABLE`:

```4d
 If(Form event=On Load)
    C_TEXT($init)
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

No código 4D, as variáveis dinâmicas podem ser acedidas através de um ponteiro obtido com o comando `OBJECT Get pointer`. Por exemplo:

```4d
  // atribuir a hora 12:00:00 à variável do objeto "tstart"
 $p :=OBJECT Get pointer(Object named; "tstart")
 $p->:=?12:00:00?
```

Este mecanismo tem duas vantagens:

- On the one hand, it allows the development of "subform" type components that can be used several times in the same host form. Let us take as an example the case of a datepicker subform that is inserted twice in a host form to set a start date and an end date. This subform will use objects for choosing the date of the month and the year. It will be necessary for these objects to work with different variables for the start date and the end date. Letting 4D create their variable with a unique name is a way of resolving this difficulty.
- Por outro lado, pode ser utilizado para limitar a utilização da memória. De facto, os objectos formulário só funcionam com variáveis processo ou inter-processo. No entanto, no modo compilado, uma instância de cada variável de processo é criada em todos os processos, incluindo os processos do servidor. This instance takes up memory, even when the form is not used during the session. Therefore, letting 4D create variables dynamically when loading the forms can save memory.

### List box array

For an array list box, the **Variable or Expression** property usually holds the name of the array variable defined for the list box, and for each column. However, you can use a string array (containing arrays names) as *dataSource* value for a list box column to define a [hierarchical list box](listbox_overview.md#hierarchical-list-boxes).

#### Objectos suportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper.md) - [Tab control](tabControl.md) - [Subform](subform_overview.md#overview) - [Radio Button](radio_overview.md) - [Web Area](webArea_overview.md)

---

## Tipo de expressão

> This property is called [**Data Type**](properties_DataSource.md#data-type-expression-type) in the Property List for [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns and for [Drop-down Lists](dropdownList_Overview.md) associated to an [object](FormObjects/dropdownList_Overview.md#using-an-object) or an [array](FormObjects/dropdownList_Overview.md#using-an-array).

Specify the data type for the expression or variable associated to the object. Note that main purpose of this setting is to configure options (such as display formats) available for the data type. Não digita efetivamente a variável em si. Em vista da compilação de um banco de dados, deve utilizar os comandos da linguagem 4D do tema `Compilador`.

No entanto, essa propriedade tem uma função de digitação nos seguintes casos específicos:

- **[Dynamic variables](#dynamic-variables)**: you can use this property to declare the type of dynamic variables.
- **[List Box Columns](listbox_overview.md#list-box-columns)**: this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. O tipo de texto não tem formatos de visualização específicos. Também estão disponíveis quaisquer formatos personalizados existentes.
- **[Picture variables](input_overview.md)**: you can use this menu to declare the variables before loading the form in interpreted mode. Specific native mechanisms govern the display of picture variables in forms. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property. Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis                                  |
| ------------------ | ------------- | -------------------------------------------------- |
| dataSourceTypeHint | string        | <li>**objectos standard:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"</li><li>**columnas list box:** "boolean", "number", "picture", "text", date", "time". *Apenas para Array/seleção list box*: "integer", "object"</li> |

#### Objectos suportados

[Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab Control](tabControl.md)

---

## Classe CSS

A list of space-separated words used as class selectors in css files.

#### Gramática JSON

| Nome    | Tipo de dados | Valores possíveis                                                                   |
| ------- | ------------- | ----------------------------------------------------------------------------------- |
| "class" | string        | Uma cadeia de caracteres com o(s) nome(s) do CSS separados por caracteres de espaço |

#### Objectos suportados

[4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Radio Button](radio_overview.md) - [Static Picture](staticPicture.md) - [Subform](subform_overview.md#overview) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## Seleção de entidade ou coleção

To use collection elements or entities to define the row contents of the list box.

Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection.

The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [`This`](../Concepts/classes.md#this) keyword:

- if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example `This.<propertyPath>`.
- if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example `This.<attributePath>`.
> > If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling `This.value` in the datasource expression. However in this case you will not be able to modify values or to access the current object (see below).

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                                              |
| ---------- | ------------- | -------------------------------------------------------------- |
| dataSource | string        | Expressão que devolve uma coleção ou uma seleção de entidades. |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Fonte de dados

Especifique o tipo de list box.

![](../assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(default): use array elements as the rows of the list box.
- **Current Selection**: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.
- **Named Selection**: use expressions, fields or methods whose values will be evaluated for each record of a named selection.
- **Collection or Entity Selection**: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the [Collection or Entity Selection](properties_Object.md#collection-or-entity-selection) property.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                           |
| ----------- | ------------- | ----------------------------------------------------------- |
| listboxType | string        | "array", "currentSelection", "namedSelection", "collection" |

#### Objectos suportados

[List Box](listbox_overview.md)

---

## Tipo de plug-in

Name of the [plug-in external area](pluginArea_overview.md) associated to the object. Plug-in external area names are published in the manifest.json file of the plug-in.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                          |
| -------------- | ------------- | ---------------------------------------------------------- |
| pluginAreaKind | string        | Nome da área externa do plug-in (começa com um carácter %) |

#### Objectos suportados

[Área Plug-in](pluginArea_overview.md)

---

## Radio Group

Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis   |
| ---------- | ------------- | ------------------- |
| radioGroup | string        | Nome do grupo rádio |

#### Objectos suportados

[Botão rádio](radio_overview.md)

---

## Título

Permite inserir uma etiqueta num objeto. O tipo de letra e o estilo desta etiqueta podem ser especificados.

Pode forçar um retorno de carro na etiqueta utilizando o carácter \ (barra invertida).

![](../assets/en/FormObjects/property_title.png)

Para inserir um \ na etiqueta, introduzir "&#92;&#92;".

Por padrão, a etiqueta é colocada no centro do objeto. When the object also contains an icon, you can modify the relative location of these two elements using the [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) property.

Para a tradução do banco de dados, pode introduzir uma referência XLIFF na área do título de um botão (ver [Apêndice B: arquitetura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis |
| ---- | ------------- | ----------------- |
| text | string        | qualquer texto    |

#### Objectos suportados

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## Cálculo de variáveis

This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.
> Ó cálculo de rodapés também pode ser definido com o comando 4D `LISTBOX SET FOOTER CALCULATION`.

Existem vários tipos de cálculos disponíveis. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):

| Cálculo                | Num | Text | Date | Hora | Bool | Pict | footer var type         |
| ---------------------- | --- | ---- | ---- | ---- | ---- | ---- | ----------------------- |
| Mínimo                 | X   | X    | X    | X    | X    |      | Igual ao tipo de coluna |
| Máximo                 | X   | X    | X    | X    | X    |      | Igual ao tipo de coluna |
| Soma                   | X   |      |      | X    | X    |      | Igual ao tipo de coluna |
| Contagem               | X   | X    | X    | X    | X    | X    | Longint                 |
| Média                  | X   |      |      | X    |      |      | Real                    |
| Desvio padrão(*)       | X   |      |      | X    |      |      | Real                    |
| Variância(*)           | X   |      |      | X    |      |      | Real                    |
| Soma dos quadrados(*)  | X   |      |      | X    |      |      | Real                    |
| Personalizado ("none") | X   | X    | X    | X    | X    | X    | Qualquer                |

(*) Apenas para list boxes do tipo array.

> Only declared or dynamic [variables](Concepts/variables.md) can be used to display footer calculations. Other kinds of [expressions](Concepts/quick-tour.md#expressions) such as `Form.value` are not supported.

Note that the calculation does not take the shown/hidden state of list box rows into account. If you want to restrict a calculation to only visible rows, you must use a custom calculation.

*Null* values are not taken into account for any calculations.

If the column contains different types of values (collection-based column for example):

- Average and Sum only take numerical elements into account (other element types are ignored).
- Minimum and Maximum return a result according to the usual type list order as defined in the [collection.sort()](API/CollectionClass.md#sort) function.

Using automatic calculations in footers of columns based upon expressions has the following limitations:

- This property is called **Data Type** in the Property List for Selection and collection type list box columns.
- **list box columns:** "boolean", "number", "picture", "text", date" (*array/selection list box only*) "integer", "time", "object"
- footers of [Collection and Entity selection](listbox_overview.md#collection-or-entity-selection-list-boxes) list boxes. Precisa utilizar cálculos personalizados.

When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.

#### Gramática JSON

| Nome                | Tipo de dados | Valores possíveis                                                                                     |
| ------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string        | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### Objectos suportados

[Rodapé do List Box](listbox_overview.md#list-box-footers)
