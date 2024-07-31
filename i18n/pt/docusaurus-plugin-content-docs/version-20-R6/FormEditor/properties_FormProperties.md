---
id: propertiesForm
title: Propriedades do formulário
---

---

## Esquema de cores

> A propriedade Esquema de cores só é aplicada no macOS.

Esta propriedade define o esquema de cores para o formulário. This property defines the color scheme for the form. Isto pode ser alterado para o formulário para uma das duas opções seguintes:

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

Um ficheiro CSS definido ao nível do formulário substituirá a(s) folha(s) de estilo predefinida(s). Para más información, consulte la página [Hojas de estilo](createStylesheet.md).

#### Gramática JSON

| Nome | Tipo de dados      | Valores possíveis                                                                                                                                                                                                                                                                                                               |
| ---- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css  | cadeia ou colecção | CSS file path(s) provided as:<li>a string (a file for both platforms)</li><li>a collection of strings (a list of files for both platform)</li><li>a collection of {"path":string;"media":"mac" \| "win"} objects </li> |

---

## Pages

Cada formulário é composto por, pelo menos, duas páginas:

- uma página 0 (página de fundo)
- uma página 1 (página principal)

Para más información, consulte [Páginas formulario](forms.md#form-pages).

#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis                                                                                 |
| ----- | ------------- | ------------------------------------------------------------------------------------------------- |
| pages | collection    | Coleção de páginas (cada página é um objeto, a página 0 é o primeiro elemento) |

---

## Nome do formulário

This property is the name of the form itself and is used to refer to the form by name using the 4D language. El nombre del formulario debe cumplir con las [reglas especificadas para los identificadores](Concepts/identifiers.md) en 4D.

#### Gramática JSON

The form name is defined by the name of the folder that contains the form.4Dform file. Ver [arquitectura del proyecto](Project/architecture.md#sources-folder) para más información.

---

## Tipo de formulário

El tipo de formulario, *es decir,* su destino, define las características que tendrá el formulario. Por ejemplo, [marcadores](properties_Markers.md) sólo puede definirse para formularios tabla listados (de salida).

Cada tabela de um banco de dados tem geralmente pelo menos duas formas de tabela. Uma para listar os registos no ecrã e a outra para visualizar um registo de cada vez (utilizada para a introdução de dados e modificações):

- Formulario de salida: el *formulario de salida* o *formulario lista* muestra una lista de registros, con una sola línea por registro. Os resultados das consultas são apresentados num formulário de saída e os usuários podem fazer duplo clique numa linha para visualizar o formulário de entrada para esse registo.
  ![](../assets/en/FormObjects/formOutput.png)

- Formulário de entrada - utilizado para entrada de dados. Muestra un único registro por pantalla y suele tener botones para guardar y cancelar las modificaciones del registro y para navegar de registro en registro (\*es decir, \*, Primer registro, Último registro, Registro anterior, Registro siguiente).
  ![](../assets/en/FormObjects/formInput.png)

Os tipos suportados dependem da categoria do formulário:

| Tipo de formulário                  | Gramática JSON   | Descrição                                                            | Suportado por                            |
| ----------------------------------- | ---------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| Formulário detalhado                | detailScreen     | Um formulário de visualização para introdução e modificação de dados | Formulários projeto - Formulários tabela |
| Formulário detalhado para impressão | detailPrinter    | Um relatório impresso com uma página por registo, como uma fatura    | Formulários projeto - Formulários tabela |
| Formulário lista                    | listScreen       | Um formulário para listar os registos no ecrã                        | Formularios tabla                        |
| Formulário de lista para impressão  | listPrinter      | Um relatório impresso que lista os registos                          | Formularios tabla                        |
| Nenhum                              | *no destination* | Um formulário sem caraterística específica                           | Formulários projeto - Formulários tabela |

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                            |
| ----------- | ------------- | ------------------------------------------------------------ |
| destination | string        | "detailScreen", "listScreen", "detailPrinter", "listPrinter" |

---

## Nome do formulário herdado

Esta propiedad designa el [formulario a heredar](forms.md#inherited-forms) en el formulario actual.

Para heredar de un formulario tabla, defina la tabla en la propiedad [Tabla de formulario heredada](#inherited-form-table).

Para eliminar la herencia, seleccione `\<None>` en la lista de propiedades (o " " en JSON).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                                                                  |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string        | Name of table or project form OR a POSIX path to a .json file describing the form OR an object describing the form |

---

## Tabelas de formulário herdadas

Esta propiedad especifica la tabla de la base de datos de la que [hereda un formulario](forms.md#inherited-forms) en el formulario actual.

Define `\<None>` en la lista de propiedades (o " " en JSON) para heredar un formulario proyecto.

#### Gramática JSON

| Nome               | Tipo de dados    | Valores possíveis        |
| ------------------ | ---------------- | ------------------------ |
| inheritedFormTable | string ou number | nome ou número da tabela |

---

## Publicado como subformulário

Para que un formulario componente sea seleccionado como [subformulario](FormObjects/subform_overview.md) en una aplicación anfitriona, debe haber sido compartido explícitamente. When this property is selected, the form will be published in the host application.

Apenas os projetos formulário podem ser especificados como subformulários publicados.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| shared | boolean       | true, false       |

---

## Guardar geometria

Cuando se utiliza esta opción, si la ventana se abre utilizando el comando `Open form window` con el parámetro `*`, varios parámetros del formulario son guardados automáticamente por 4D cuando se cierra la ventana, independientemente de cómo se hayan modi

- a página atual,
- a posição, tamanho e visibilidade de cada objecto de formulário (incluindo o tamanho e visibilidade das colunas da lista box).

> > This option does not take into account objects generated using the `OBJECT DUPLICATE` command. In order for a user to recover their environment when using this command, the developer must repeat the sequence of creation, definition and positioning of the objects.

Cuando se selecciona esta opción, la opción [Guardar valor](FormObjects/properties_Object.md#save-value) está disponible para ciertos objetos.

#### Gramática JSON

| Nome             | Tipo de dados | Valores possíveis |
| ---------------- | ------------- | ----------------- |
| memorizeGeometry | boolean       | true, false       |

#### Veja também

[**Save Value**](FormObjects/properties_Object.md#save-value)

---

## Título da janela

El título de la ventana se utiliza cuando se abre el formulario mediante los comandos `Open form window` y `Open window`4D en el entorno de la aplicación. O título da janela aparece na barra de título da janela.

Puede utilizar referencias dinámicas para definir los nombres de ventana de los formularios, *es decir*:

- Uma referência XLIFF padrão armazenada na pasta Resources.
- Una etiqueta de tabla o de campo: la sintaxis a aplicar es `<?[TableNum]FieldNum>` o `<?[TableName]FieldName>`.
- Una variable o un campo: la sintaxis a aplicar es `\<VariableName>` o `<[TableName]FieldName>`. The current value of the field or variable will be displayed in the window title.

> O número de caracteres para um título de janela é limitado a 31.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                      |
| ----------- | ------------- | ------------------------------------------------------ |
| windowTitle | string        | O nome da janela como texto simples ou como referência |
