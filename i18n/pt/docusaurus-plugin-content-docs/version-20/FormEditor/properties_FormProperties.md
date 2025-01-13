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

Essa propriedade é o nome do próprio formulário sendo usada para fazer referência ao formulário pelo nome usando a linguagem 4D. O nome do formulário deve estar em conformidade com as [regras especificadas para identificadores](Concepts/identifiers.md) em 4D.


#### Gramática JSON

O nome do formulário é definido pelo nome da pasta que contém o arquivo form.4Dform. See [project architecture](Project/architecture.md#sources-folder) for more information.

---

## Tipo de formulário

O tipo de formulário, *ou seja,* o seu destino, define as características que estarão disponíveis para o formulário. Por exemplo, os [marcadores ](properties_Markers.md) só podem ser definidos para formulários tabela lista (saída).

Cada tabela de um banco de dados tem geralmente pelo menos duas formas de tabela. Uma para listar os registos no ecrã e a outra para visualizar um registo de cada vez (utilizada para a introdução de dados e modificações):

- Formulário de saída - o *formulário de saída* ou o *formulário lista* apresenta uma lista de registos, com uma única linha por registo. Os resultados das consultas são apresentados num formulário de saída e os usuários podem fazer duplo clique numa linha para visualizar o formulário de entrada para esse registo. ![](../assets/en/FormObjects/formOutput.png)

- Formulário de entrada - utilizado para entrada de dados. Apresenta um único registo por ecrã e, normalmente, tem botões para guardar e cancelar alterações ao registo e para navegar de registo em registo (*i.e.*, Primeiro Registo, Último Registo, Registo Anterior, Registo Seguinte). ![](../assets/en/FormObjects/formInput.png)


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

Esta propriedade designa o formulário [para herdar](forms.md#inherited-forms) no formulário atual.

Para herdar de um formulário tabela, defina a tabela na propriedade [Tabela de formulário herdado](#inherited-form-table).

Para remover a herança, selecione `\&#060;None&#062;` na Lista de Propriedades (ou " " em JSON).


#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                                                                                                                     |
| ------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| inheritedForm | string        | Nome do formulário da tabela ou do projeto OU um caminho POSIX para um arquivo .json que descreve o formulário OU um objeto que descreve o formulário |

---


## Tabelas de formulário herdadas

Esta propriedade específica a tabela da base de dados da qual para [herda um formulário](forms.md#inherited-forms) no formulário atual.

Defina como \ `&#060;None&#062;` na Lista de Propriedades (ou " " em JSON) para herdar de um formulário projeto.




#### Gramática JSON

| Nome               | Tipo de dados    | Valores possíveis        |
| ------------------ | ---------------- | ------------------------ |
| inheritedFormTable | string ou number | nome ou número da tabela |


---

## Publicado como subformulário

Para que um formulário de componente seja selecionado como um [subformulário](FormObjects/subform_overview.md) em uma aplicação host, ele deve ter sido explicitamente compartilhado. Quando esta propriedade for selecionada, o formulário será publicado na aplicação host.

Apenas os projetos formulário podem ser especificados como subformulários publicados.



#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| shared | boolean       | true, false       |


---

## Guardar geometria

Quando a opção é usada, se a janela for aberta usando o comando `Open form window` com o parâmetro `*`, vários parâmetros de formulário são salvos automaticamente pelo 4D quando a janela é fechada, independentemente de como foram modificados durante a sessão:

*   a página atual,
*   a posição, tamanho e visibilidade de cada objecto de formulário (incluindo o tamanho e visibilidade das colunas da lista box).
> Esta opção não considera objetos gerados usando o comando `OBJECT DUPLICATE`. Para que um usuário recupere seu ambiente ao usar este comando, o desenvolvedor deve repetir a sequência de criação, definição e posicionamento dos objetos.

Quando essa opção é selecionada, a opção [Save Value](FormObjects/properties_Object.md#save-value) fica disponível para determinados objetos.

#### Gramática JSON

| Nome             | Tipo de dados | Valores possíveis |
| ---------------- | ------------- | ----------------- |
| memorizeGeometry | boolean       | true, false       |

#### Veja também
[**Guardar valor**](FormObjects/properties_Object.md#save-value)


---

## Título da janela

O título da janela é usado quando o formulário é aberto usando os comandos `Open form window` e `Open window` 4D no ambiente da aplicação. O título da janela aparece na barra de título da janela.

Você pode usar referências dinâmicas para definir os títulos das janelas dos formulários, *ou seja*:

*   Uma referência XLIFF padrão armazenada na pasta Resources.
*   Um rótulo de tabela ou campo: a sintaxe a ser aplicada é `<?[TableNum]FieldNum>` ou `<?[TableName]FieldName>`.
*   Uma variável ou um campo: a sintaxe a ser aplicada é \ `&#060;VariableName&#062;` ou `&#060;[TableName]FieldName&#062;`. O valor atual do campo ou variável será exibido no título da janela.

> O número de caracteres para um título de janela é limitado a 31.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis                                      |
| ----------- | ------------- | ------------------------------------------------------ |
| windowTitle | string        | O nome da janela como texto simples ou como referência |


