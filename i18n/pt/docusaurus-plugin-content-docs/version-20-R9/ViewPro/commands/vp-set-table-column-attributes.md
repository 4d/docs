---
id: vp-set-table-column-attributes
title: VP SET TABLE COLUMN ATTRIBUTES
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Syntax -->

**VP SET TABLE COLUMN ATTRIBUTES** ( *vpAreaName* : Text ; *tableName* : Text ; *column* : Integer ; *attributes* : Object {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| tableName  | Text    | -> | Nome da tabela                                              |                  |
| column     | Integer | -> | Índice da coluna na tabela                                  |                  |
| attributes | Object  | -> | Atributo(s) a aplicar à *column*         |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

## Descrição

O comando `VP SET TABLE COLUMN ATTRIBUTES` <!-- REF #_method_.VP SET TABLE COLUMN ATTRIBUTES.Summary -->aplica os *atributos* definidos à *coluna* na *tableName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

No parâmetro *attributes*, passe um objeto que contenha as propriedades a serem definidas:

| Propriedade         | Tipo    | Descrição                                                                                                                                                                                                    |
| ------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| dataField           | text    | Nome da propriedade da coluna da tabela no contexto de dados.                                                                                                                                |
| name                | text    | Nome da coluna da tabela. Deve ser único na tabela. Se esse nome já for usado por outra coluna, ele não é aplicado e um nome padrão é usado automaticamente. |
| formula             | text    | Define a fórmula para cada célula da coluna. See [Structured Reference Formulas in the SpreadJS documentation](https://developer.mescius.com/spreadjs/docs/features/tablegen/structref)      |
| footerText          | text    | Valor do rodapé da coluna.                                                                                                                                                                   |
| footerFormula       | text    | Fórmula do rodapé da coluna.                                                                                                                                                                 |
| filterButtonVisible | boolean | Sets whether the table column's filter button is displayed (default is `True` when the table is created).                                                                 |

Em *sheet*, passe o índice da folha de destino. Se nenhum indice for especcificado ou se passar -1, o comando se aplica a folha atual.

> A indexação começa em 0.

Se *tableName* não for encontrado ou se *column* for maior que o número de colunas, o comando não fará nada.

## Exemplo

Você cria uma tabela com um contexto de dados:

```4d
var $context;$options : Object

$context:=New object()
$context.col:=New collection()
$context.col.push(New object("name"; "Smith"; "firstname"; "John"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "firstname"; "Jim"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "firstname"; "Maria"; "salary"; 10500))
VP SET DATA CONTEXT("ViewProArea"; $context)

	//Define the columns for the table
$options:=New object()
$options.tableColumns:=New collection()
$options.tableColumns.push(New object("name"; "Last Name"; "dataField"; "name"))
$options.tableColumns.push(New object("name"; "Salary"; "dataField"; "salary"))

VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 2; 3); "PeopleTable"; "col"; $options)
```

![](../../assets/en/ViewPro/table-inserta.png)

Em seguida, você deseja inserir uma coluna com dados do contexto de dados e ocultar alguns botões de filtro:

```4d
	//insert a column
VP INSERT TABLE COLUMNS("ViewProArea"; "PeopleTable"; 1; 1)

var $param : Object
$param:=New object()
	// Bind the column to the firstname field from the datacontext
$param.dataField:="firstname"
	// Change the default name of the column to "First name"
	// and hide the filter button
$param.name:="First Name"
$param.filterButtonVisible:=False

VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 1; $param)

	// Hide the filter button of the first column
VP SET TABLE COLUMN ATTRIBUTES("ViewProArea"; "PeopleTable"; 0; \
	New object("filterButtonVisible"; False))

```

![](../../assets/en/ViewPro/table-insertb.png)

## Veja também

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)









