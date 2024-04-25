---
id: propertiesForm
title: Propriedades do formulário
---

---

## Esquema de cores

> A propriedade Esquema de cores só é aplicada no macOS.

Esta propriedade define o esquema de cores para o formulário. By default when the property is not set, the value for a color scheme is **inherited** (the form uses the scheme defined at the [application level](https://doc.4d.com/4dv19/help/command/en/page1762.html)). Isto pode ser alterado para o formulário para uma das duas opções seguintes:

- dark - texto claro sobre um fundo escuro
- light - texto escuro sobre um fundo claro

> \> A defined color scheme can not be overridden by a CSS.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| colorScheme | string        | "dark", "light"   |

---

## CSS

Esta propriedade permite-lhe carregar ficheiros CSS específicos para o formulário.

Um ficheiro CSS definido ao nível do formulário substituirá a(s) folha(s) de estilo predefinida(s). For more information, please refer to [Style sheets](createStylesheet.md) page.

#### Gramática JSON

| Nome | Tipo de dados      | Valores possíveis                                                                                                                                                                                                                                                                                                               |
| ---- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css  | cadeia ou colecção | CSS file path(s) provided as:<li>a string (a file for both platforms)</li><li>a collection of strings (a list of files for both platform)</li><li>a collection of {"path":string;"media":"mac" \| "win"} objects </li> |

---

## Pages

Cada formulário é composto por, pelo menos, duas páginas:

- uma página 0 (página de fundo)
- uma página 1 (página principal)

For more information, please refer to [Form pages](forms.md#form-pages).

#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis                                                                                 |
| ----- | ------------- | ------------------------------------------------------------------------------------------------- |
| pages | collection    | Coleção de páginas (cada página é um objeto, a página 0 é o primeiro elemento) |

---

## Nome do formulário

This property is the name of the form itself and is used to refer to the form by name using the 4D language. The form name must comply with the [rules specified for identifiers](Concepts/identifiers.md) in 4D.

#### Gramática JSON

The form name is defined by the name of the folder that contains the form.4Dform file. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Tipo de formulário

The form type, _i.e._ its destination, defines the features that will be available to the form. For example, [markers](properties_Markers.md) can only be set for list (output) table forms.

Cada tabela de um banco de dados tem geralmente pelo menos duas formas de tabela. Uma para listar os registos no ecrã e a outra para visualizar um registo de cada vez (utilizada para a introdução de dados e modificações):

- Output form - the _output form_ or _list form_ displays a list of records, with a single line per record. Os resultados das consultas são apresentados num formulário de saída e os usuários podem fazer duplo clique numa linha para visualizar o formulário de entrada para esse registo.
  ![](../assets/en/FormObjects/formOutput.png)

- Formulário de entrada - utilizado para entrada de dados. It displays a single record per screen and typically has buttons for saving and canceling modifications to the record and for navigating from record to record (_i.e._, First Record, Last Record, Previous Record, Next Record).
  ![](../assets/en/FormObjects/formInput.png)

Os tipos suportados dependem da categoria do formulário:

| Tipo de formulário                  | Gramática JSON   | Descrição                                                            | Suportado por                            |
| ----------------------------------- | ---------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Formulário detalhado                | detailScreen     | Um formulário de visualização para introdução e modificação de dados | Formulários projeto - Formulários tabela |
| Formulário detalhado para impressão | detailPrinter    | Um relatório impresso com uma página por registo, como uma fatura    | Formulários projeto - Formulários tabela |
| Formulário lista                    | listScreen       | Um formulário para listar os registos no ecrã                        | Formularios tabla                        |
| Formulário de lista para impressão  | listPrinter      | Um relatório impresso que lista os registos                          | Formularios tabla                        |
| Nenhum                              | _no destination_ | Um formulário sem caraterística específica                           | Formulários projeto - Formulários tabela |

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                            |
| ----------- | ------------- | ------------------------------------------------------------ |
| destination | string        | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nome do formulário herdado

This property designates the [form to inherit](forms.md#inherited-forms) in the current form.

To inherit from a table form, set the table in the [Inherited Form Table](#inherited-form-table) property.

To remove inheritance, select `\<None>` in the Property List (or " " in JSON).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                                                                  |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string        | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---

## Tabelas de formulário herdadas

This property specifies the database table from which to [inherit a form](forms.md#inherited-forms) in the current form.

Set to `\<None>` in the Property List (or " " in JSON) to inherited from a project form.

#### Gramática JSON

| Nome               | Tipo de dados    | Valores possíveis        |
| ------------------ | ---------------- | ------------------------ |
| inheritedFormTable | string ou number | nome ou número da tabela |

---

## Publicado como subformulário

For a component form to be selected as a [subform](FormObjects/subform_overview.md) in a host application, it must have been explicitly shared. When this property is selected, the form will be published in the host application.

Apenas os projetos formulário podem ser especificados como subformulários publicados.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| shared | boolean       | true, false       |

---

## Guardar geometria

When the option is used, if the window is opened using the `Open form window` command with the `*` parameter, several form parameters are automatically saved by 4D when the window is closed, regardless of how they were modified during the session:

- a página atual,
- a posição, tamanho e visibilidade de cada objecto de formulário (incluindo o tamanho e visibilidade das colunas da lista box).

> This option does not take into account objects generated using the `OBJECT DUPLICATE` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects.

When this option is selected, the [Save Value](FormObjects/properties_Object.md#save-value) option is available for certain objects.

#### Gramática JSON

| Nome             | Tipo de dados | Valores possíveis |
| ---------------- | ------------- | ----------------- |
| memorizeGeometry | boolean       | true, false       |

#### Veja também

[**Save Value**](FormObjects/properties_Object.md#save-value)

---

## Título da janela

The window title is used when the form is opened using the `Open form window` and `Open window` 4D commands in Application environment. O título da janela aparece na barra de título da janela.

You can use dynamic references to set the window titles for forms, _i.e._:

- Uma referência XLIFF padrão armazenada na pasta Resources.
- A table or field label: The syntax to apply is `<?[TableNum]FieldNum>` or `<?[TableName]FieldName>`.
- A variable or a field: The syntax to apply is `\<VariableName>` or `<[TableName]FieldName>`. The current value of the field or variable will be displayed in the window title.

> O número de caracteres para um título de janela é limitado a 31.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                      |
| ----------- | ------------- | ------------------------------------------------------ |
| windowTitle | string        | O nome da janela como texto simples ou como referência |
