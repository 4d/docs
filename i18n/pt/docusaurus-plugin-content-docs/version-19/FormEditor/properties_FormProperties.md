---
id: propertiesForm
title: Propriedades do formulário
---

---

## Esquema de cores
> A propriedade Esquema de cores só é aplicada no macOS.

Esta propriedade define o esquema de cores para o formulário. Por defeito, quando a propriedade não está definida, o valor para um esquema de cores é **herdado** (o formulário utiliza o esquema definido ao [nível da aplicação](https://doc.4d.com/4dv19/help/command/en/page1762.html)). Isto pode ser alterado para o formulário para uma das duas opções seguintes:

*   dark - texto claro sobre um fundo escuro
*   light - texto escuro sobre um fundo claro
> > A defined color scheme can not be overridden by a CSS.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| colorScheme | string        | "dark", "light"   |

---

## CSS

Esta propriedade permite-lhe carregar ficheiros CSS específicos para o formulário.

Um ficheiro CSS definido ao nível do formulário substituirá a(s) folha(s) de estilo predefinida(s). Para mais informações, consulte a página [Folhas de estilo](createStylesheet.md).


#### Gramática JSON

| Nome | Tipo de dados      | Valores possíveis                                                                                                              |
| ---- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| css  | cadeia ou colecção | Caminho(s) do(s) ficheiro(s) CSS fornecido(s) como:<li>uma cadeia de caracteres (um ficheiro para ambas plataformas)</li><li>uma coleção de cadeias de caracteres (uma lista de ficheiros para ambas as plataformas)</li><li>uma coleção de objectos {"path":string; "media": "mac" &#124; "win"} </li> |

---


## Pages

Cada formulário é composto por, pelo menos, duas páginas:

- uma página 0 (página de fundo)
- uma página 1 (página principal)

Para mais informações, consulte por favor [Páginas formulário](forms.md#form-pages).


#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis                                                              |
| ----- | ------------- | ------------------------------------------------------------------------------ |
| pages | collection    | Coleção de páginas (cada página é um objeto, a página 0 é o primeiro elemento) |

---


## Nome do formulário

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.


#### Gramática JSON

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Tipo de formulário

The form type, *i.e.* its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Each table in a database generally has at least two table forms. One for listing records on-screen and the other for displaying one record at a time (used for data entry and modifications):

- Output form - the *output form* or *list form* displays a list of records, with a single line per record. The results of queries are shown in an output form and users can double-click a line to display the input form for that record. ![](../assets/en/FormObjects/formOutput.png)

- Formulário de entrada - utilizado para entrada de dados. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (*i.e.*, First Record, Last Record, Previous Record, Next Record). ![](../assets/en/FormObjects/formInput.png)


Os tipos suportados dependem da categoria do formulário:


| Tipo de formulário                 | Gramática JSON   | Descrição                                                            | Suportado por                            |
| ---------------------------------- | ---------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Formulário detalhado               | detailScreen     | Um formulário de visualização para introdução e modificação de dados | Formulários projeto - Formulários tabela |
| Detail Form for Printing           | detailPrinter    | A printed report with one page per record, such as an invoice        | Formulários projeto - Formulários tabela |
| Formulário lista                   | listScreen       | Um formulário para listar os registos no ecrã                        | Formularios tabla                        |
| Formulário de lista para impressão | listPrinter      | Um relatório impresso que lista os registos                          | Formularios tabla                        |
| Nenhum                             | *no destination* | Um formulário sem caraterística específica                           | Formulários projeto - Formulários tabela |


#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                            |
| ----------- | ------------- | ------------------------------------------------------------ |
| destination | string        | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nome do formulário herdado

Esta propriedade designa o formulário [para herdar](forms.md#inherited-forms) no formulário atual.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\&#060;None&#062;` in the Property List (or " " in JSON).


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                                                  |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------ |
| inheritedForm | string        | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---


## Tabelas de formulário herdadas

Esta propriedade específica a tabela da base de dados da qual para [herda um formulário](forms.md#inherited-forms) no formulário atual.

Set to `\&#060;None&#062;` in the Property List (or " " in JSON) to inherited from a project form.




#### Gramática JSON

| Nome               | Tipo de dados    | Valores possíveis        |
| ------------------ | ---------------- | ------------------------ |
| inheritedFormTable | string ou number | nome ou número da tabela |


---

## Publicado como subformulário

For a component form to be selected as a [subform](FormObjects/subform_overview.md) in a host application, it must have been explicitly shared. When this property is selected, the form will be published in the host application.

Only project forms can be specified as published subforms.



#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| shared | boolean       | true, false       |


---

## Guardar geometria

When the option is used, if the window is opened using the `Open form window` command with the `*` parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

*   a página atual,
*   a posição, tamanho e visibilidade de cada objecto de formulário (incluindo o tamanho e visibilidade das colunas da lista box).
> > > This option does not take into account objects generated using the `OBJECT DUPLICATE` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects.

When this option is selected, the [Save Value](FormObjects/properties_Object.md#save-value) option is available for certain objects.

#### Gramática JSON

| Nome             | Tipo de dados | Valores possíveis |
| ---------------- | ------------- | ----------------- |
| memorizeGeometry | boolean       | true, false       |

#### Veja também
[**Guardar valor**](FormObjects/properties_Object.md#save-value)


---

## Título da janela

The window title is used when the form is opened using the `Open form window` and `Open window` 4D commands in Application environment. The window title appears in the Title bar of the window.

You can use dynamic references to set the window titles for forms, *i.e.*:

*   A standard XLIFF reference stored in the Resources folder.
*   A table or field label: The syntax to apply is `<?[TableNum]FieldNum>` or `<?[TableName]FieldName>`.
*   A variable or a field: The syntax to apply is `\&#060;VariableName&#062;` or `&#060;[TableName]FieldName&#062;`. The current value of the field or variable will be displayed in the window title.

> The number of characters for a window title is limited to 31.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                      |
| ----------- | ------------- | ------------------------------------------------------ |
| windowTitle | string        | The name of the window as plain text or as a reference |


