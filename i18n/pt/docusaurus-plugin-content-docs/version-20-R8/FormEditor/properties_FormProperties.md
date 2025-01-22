---
id: propertiesForm
title: Propriedades do formulário
---

---

## Esquema de cores

> A propriedade Esquema de cores só é aplicada no macOS.

Esta propriedade define o esquema de cores para o formulário. Por padrão, quando a propriedade não está definida, o valor de um esquema de cores é **herdado** (o formulário usa o esquema definido no [nível da aplicação](../commands-legacy/set-application-color-scheme.md)). Isto pode ser alterado para o formulário para uma das duas opções seguintes:

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

Um ficheiro CSS definido ao nível do formulário substituirá a(s) folha(s) de estilo predefinida(s). Para obter mais informações, consulte a página [Folhas de estilo] (createStylesheet.md).

#### Gramática JSON

| Nome | Tipo de dados      | Valores possíveis                                                                                                                                                                                                                                                                                                                                                                            |
| ---- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| css  | cadeia ou colecção | Caminho(s) do arquivo CSS fornecido(s) como<li>:uma string (um arquivo para ambas as plataformas)</li><li>uma coleção de strings (uma lista de arquivos para ambas as plataformas)</li><li>uma coleção de objetos {"path":string; "media": "mac" \| "win"} </li> |

---

## Classe de formulário

Nome de uma [classe usuário](../Concepts/classes.md#class-definition) existente para associar ao formulário. A classe do usuário pode pertencer ao projeto host ou a um [componente](../Extensions/develop-components.md#sharing-of-classes), caso em que a sintaxe formal é "[*componentNameSpace*](../settings/general.md#component-namespace-in-the-class-store).className".

A associação de uma classe ao formulário oferece os seguintes benefícios:

- Quando você trabalha no [Editor de formulário](../FormEditor/formEditor.md), a classe associada é usada para verificações de sintaxe precisas de expressões como `Form. yProperty` em todas as áreas da [lista de propriedades](../FormEditor/formEditor.md#property-list) que suportam [expressions](../Concepts/quick-tour.md#expressions) (por exemplo, **Variável ou Expressão**, **expressão de cor da fonte**...). Erros são exibidos em vermelho e avisos são exibidos no amarelo na coluna esquerda da lista de propriedades e você pode passar o mouse para obter explicações:

![](../assets/en/FormObjects/warning-proplist.png)

- A detecção de erros no código de expressões do objeto de forma por [compiler](../Project/compiler.md) é melhorada.

- Você também pode se beneficiar de [recursos de preenchimento automático](../code-editor/write-class-method.md#autocomplete-functions) no editor de código.

- Quando o formulário for executado, 4D instancia automaticamente um objeto de classe de usuário para o formulário, que é retornado pelo objeto [`Form`](../commands/form.md). Seu código pode acessar diretamente as funções de classe definidas na classe do usuário por meio do comando `Form` (por exemplo, `Form.message()`) sem precisar passar um objeto *formData* como parâmetro para os comandos [`DIALOG`](../commands/dialog.md), [`Print form`](../commands/print-form.md) ou [`FORM LOAD`](../commands/form-load.md).

:::note

Consulte [esta postagem no blog](http://blog.4d.com/empower-your-development-process-with-your-forms) para ver uma ilustração desse recurso.

:::

#### Gramática JSON

| Nome      | Tipo de dados | Valores possíveis                                                                                                                |
| --------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| formClass | string        | nome de uma classe de usuário existente ("*className*" ou "*componentNameSpace*.*className*") |

---

## Nome do formulário

Essa propriedade é o nome do próprio formulário sendo usada para fazer referência ao formulário pelo nome usando a linguagem 4D. O nome do formulário deve estar em conformidade com as [regras especificadas para identificadores] (Concepts/identifiers.md) em 4D.

#### Gramática JSON

O nome do formulário é definido pelo nome da pasta que contém o arquivo form.4Dform. Consulte [arquitetura do projeto](Project/architecture.md#sources-folder) para obter mais informações.

---

## Tipo de formulário

O tipo de formulário, *ou seja*, seu destino, define as características que estarão disponíveis para o formulário. Por exemplo, [markers](properties_Markers.md) só pode ser definido para formulários de tabela de lista (saída).

Cada tabela de um banco de dados tem geralmente pelo menos duas formas de tabela. Uma para listar os registos no ecrã e a outra para visualizar um registo de cada vez (utilizada para a introdução de dados e modificações):

- Formulário de saída - o *formulário de saída* ou *formulário de lista* exibe uma lista de registros, com uma única linha por registro. Os resultados das consultas são apresentados num formulário de saída e os usuários podem fazer duplo clique numa linha para visualizar o formulário de entrada para esse registo.
  ![](../assets/en/FormObjects/formOutput.png)

- Formulário de entrada - utilizado para entrada de dados. Exibe um único registro por tela e, normalmente, tem botões para salvar e cancelar modificações no registro e para navegar de registro em registro (\*primeiro registro, último registro, registro anterior, próximo registro).
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

Essa propriedade designa o [formulário a ser herdado] (forms.md#inherited-forms) no formulário atual.

Para herdar de um formulário de tabela, defina a tabela na propriedade [Inherited Form Table] (#inherited-form-table).

Para remover a herança, selecione `\<None>` na Property List (ou " " em JSON).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                                                                                                     |
| ------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string        | Nome do formulário da tabela ou do projeto OU um caminho POSIX para um arquivo .json que descreve o formulário OU um objeto que descreve o formulário |

---

## Tabelas de formulário herdadas

Essa propriedade especifica a tabela do banco de dados da qual [herdar um formulário] (forms.md#inherited-forms) no formulário atual.

Defina como `\<None>` na Property List (ou " " em JSON) para herdar de um formulário de projeto.

#### Gramática JSON

| Nome               | Tipo de dados    | Valores possíveis        |
| ------------------ | ---------------- | ------------------------ |
| inheritedFormTable | string ou number | nome ou número da tabela |

---

## Pages

Cada formulário é composto por, pelo menos, duas páginas:

- uma página 0 (página de fundo)
- uma página 1 (página principal)

Para obter mais informações, consulte [Páginas de formulário] (forms.md#form-pages).

#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis                                                                                 |
| ----- | ------------- | ------------------------------------------------------------------------------------------------- |
| pages | collection    | Coleção de páginas (cada página é um objeto, a página 0 é o primeiro elemento) |

---

## Publicado como subformulário

Para que um formulário de componente seja selecionado como um [subformulário] (FormObjects/subform_overview.md) em um aplicativo host, ele deve ter sido explicitamente compartilhado. Quando esta propriedade for selecionada, o formulário será publicado na aplicação host.

Apenas os projetos formulário podem ser especificados como subformulários publicados.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| shared | boolean       | true, false       |

---

## Guardar geometria

Quando a opção é usada, se a janela for aberta usando o comando "Abrir janela de formulário" com o parâmetro "\*", vários parâmetros de formulário são salvos automaticamente pelo 4D quando a janela é fechada, independentemente de como foram modificados durante a sessão:

- a página atual,
- a posição, tamanho e visibilidade de cada objecto de formulário (incluindo o tamanho e visibilidade das colunas da lista box).

> Esta opção não leva em conta objetos gerados usando o comando `OBJECT DUPLICATE`. Para que um usuário recupere seu ambiente ao usar este comando, o desenvolvedor deve repetir a sequência de criação, definição e posicionamento dos objetos.

Quando essa opção é selecionada, a opção [Save Value] (FormObjects/properties_Object.md#save-value) fica disponível para determinados objetos.

#### Gramática JSON

| Nome             | Tipo de dados | Valores possíveis |
| ---------------- | ------------- | ----------------- |
| memorizeGeometry | boolean       | true, false       |

#### Veja também

[**Salvar valor**](FormObjects/properties_Object.md#save-value)

---

## Título da janela

O título da janela é usado quando o formulário é aberto usando os comandos `Abrir janela do formulário` e `Abrir janela` 4D no ambiente de aplicativos. O título da janela aparece na barra de título da janela.

Você pode usar referências dinâmicas para definir os títulos das janelas dos formulários, ou seja, \*:

- Uma referência XLIFF padrão armazenada na pasta Resources.
- Um rótulo de tabela ou campo: A sintaxe a ser aplicada é `<?[TableNum]FieldNum>` ou `<?[TableName]FieldName>`.
- Uma variável ou um campo: A sintaxe a ser aplicada é `\<VariableName>` ou `<[TableName]FieldName>`. O valor atual do campo ou variável será exibido no título da janela.

> O número de caracteres para um título de janela é limitado a 31.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                      |
| ----------- | ------------- | ------------------------------------------------------ |
| windowTitle | string        | O nome da janela como texto simples ou como referência |
