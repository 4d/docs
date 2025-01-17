---
id: vp-create-table
title: VP CREATE TABLE
---

<details><summary>História</summary>

| Release | Mudanças                                                                                                                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 19 R8   | Suporte das opções do tema: `bandColumns`, `bandRows`, `highlightFirstColumn`, `highlightLastColumn`, `theme` |
| 18 R6   | Suporte da opção `allowAutoExpand`                                                                                            |
| 19 R6   | Adicionado                                                                                                                    |

</details>

<!-- REF #_method_.VP CREATE TABLE.Syntax -->

**VP CREATE TABLE** ( *rangeObj* : Object ; *tableName* : Text {; *source* : Text} {; *options* : cs.ViewPro.TableOptions} )<!-- END REF -->

<!-- REF #_method_.VP CREATE TABLE.Params -->

| Parâmetro | Tipo                                                                                  |    | Descrição                                                       |                  |
| --------- | ------------------------------------------------------------------------------------- | -- | --------------------------------------------------------------- | ---------------- |
| rangeObj  | Object                                                                                | -> | Objeto intervalo                                                |                  |
| tableName | Text                                                                                  | -> | Nome da tabela                                                  |                  |
| source    | Text                                                                                  | -> | Nome da propriedade de contexto de dados a apresentar na tabela |                  |
| options   | [cs.ViewPro.TableOptions](../classes.md#tableoptions) | -> | Opções adicionais                                               | <!-- END REF --> |

#### Descrição

O comando `VP CREATE TABLE` <!-- REF #_method_.VP CREATE TABLE.Summary -->cria uma tabela no intervalo especificado<!-- END REF -->. É possível criar uma tabela em um intervalo de células para facilitar o gerenciamento e a análise de um grupo de dados relacionados. Em geral, uma tabela contém dados relacionados em linhas e colunas e aproveita um [contexto de dados] (vp-set-data-context).

![](../../assets/en/ViewPro/vp-create-table.png)

Em *rangeObj*, passe o intervalo de células em que a tabela será criada.

Em *tableName*, passe um nome para a tabela. O nome deve:

- ser único na folha
- incluir pelo menos 5 caracteres
- não incluir espaços ou começar com um número

Em *source*, você pode passar um nome de propriedade de um [contexto de dados] (vp-set-data-context.md) para exibir seus dados na tabela. Isto liga a tabela ao contexto de dados. Quando o contexto de dados é atualizado, os dados exibidos na tabela são atualizados de acordo. A propriedade *source* deve conter uma coleção de objetos e cada elemento representa uma linha.

- Se você não especificar uma *fonte*, o comando cria uma tabela vazia com o tamanho definido em *rangeObj*.
- Se a *fonte* especificada não puder ser totalmente exibida no documento, nenhuma tabela será criada.

In the *options* parameter, pass an object of the [`cs.ViewPro.TableOptions` class](../classes.md#tableoptions) that contains the table properties to set.

Dentro do objeto *opções*, a coleção *tableColumns* determina a estrutura das colunas da tabela. O comprimento da coleção *tableColumns* deve ser igual à contagem de colunas de intervalo:

- Quando a contagem de colunas no *intervaloObj* excede o número de colunas em *tableColumns*, a tabela é preenchida com colunas vazias adicionais.
- Quando a contagem de colunas no *intervaloObj* é inferior ao número de *tableColumns*, a tabela exibe um número de colunas que correspondem ao número de colunas do intervalo.

Se você passar uma opção *source*, mas sem a opção *tableColumn*, o comando gera colunas automaticamente. Nesse caso, *rangeObj* deve ser uma faixa de célula. Caso contrário, é utilizada a primeira célula do intervalo. Ao gerar colunas automaticamente, as seguintes regras se aplicam:

- Se os dados passados para o comando forem uma coleção de objetos, os nomes das propriedades serão usados como títulos de coluna. Por exemplo:

```4d
([{ LastName: \"Freehafer\", FirstName: \"Nancy\"},{ LastName: \"John\", FirstName: \"Doe\"})
```

Aqui, os títulos das colunas seriam `LastName` e `FirstName`.

- Se os dados passados para o comando forem uma coleção de valores escalares, eles deverão conter uma coleção de subcoleções:

  - A coleção de primeiro nível contém subcoleções de valores. Cada subcolecção define uma linha. Passa uma coleção vazia para saltar uma linha. O número de valores na primeira subcoleção determina quantas colunas são criadas.
  - Os índices das subcoleções são utilizados como títulos das colunas.
  - Cada subcoleção define os valores das células para a linha. Os valores podem ser `Integer`, `Real`, `Boolean`, `Text`, `Date`, `Null`, `Time` ou `Picture`. Um valor `Time` deve ser um objeto que contenha um atributo de tempo, conforme descrito em [VP SET VALUE](vp-set-value.md).

> Isto só funciona quando se geram colunas automaticamente. Não é possível usar uma coleção de dados escalares com a opção *tableColumns*.

#### Exemplo

Para criar uma tabela utilizando um contexto de dados:

```4d
// Set a data context
var $data : Object

$data:=New object()
$data.people:=New collection()
$data.people.push(New object("firstName"; "John"; "lastName"; "Smith"; "email"; "johnsmith@gmail.com"))
$data.people.push(New object("firstName"; "Mary"; "lastName"; "Poppins"; "email"; "marypoppins@gmail.com"))


VP SET DATA CONTEXT("ViewProArea"; $data)

// Define the columns for the table
var $options : cs.ViewPro.TableOptions

$options:=cs.ViewPro.TableOptions.new()
$options.tableColumns:=New collection()
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "First name"; "dataField"; "firstName"))
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Last name"; "dataField"; "lastName"))
$options.tableColumns.push(cs.ViewPro.TableColumn.new("name"; "Email"; "dataField"; "email"))

// Create a table from the "people" collection
VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; $options.tableColumns.length; 1); "ContextTable"; "people"; $options)
```

Aqui está o resultado:

![](../../assets/en/ViewPro/vp-create-table.png)

#### Veja também

[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP Get table column index](vp-get-table-column-index.md)<br/>
[VP INSERT TABLE COLUMNS](vp-insert-table-columns.md)<br/>
[VP INSERT TABLE ROWS](vp-insert-table-rows.md)<br/>
[VP REMOVE TABLE](vp-remove-table.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
