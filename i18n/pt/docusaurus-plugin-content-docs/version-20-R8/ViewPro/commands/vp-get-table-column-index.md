---
id: vp-get-table-column-index
title: VP Get table column index
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP Get table column index.Syntax -->

**VP Get table column index** ( *vpAreaName* : Text ; *tableName* : Text ; *columnName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get table column index.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                   |                  |
| ---------- | ------- | --------------------------- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                  |                  |
| tableName  | Text    | ->                          | Nome da tabela                                              |                  |
| columnName | Text    | ->                          | Nome da coluna da tabela                                    |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida) |                  |
| Resultados | Integer | <- | Índice de *columnName*                                      | <!-- END REF --> |

#### Descrição

The `VP Get table column index` command <!-- REF #_method_.VP Get table column index.Summary -->returns the index of the *columnName* in the *tableName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

In *columnName*, pass the name of the table column for which you want to get the index.

Em *sheet*, passe o índice da folha de destino. Se nenhum indice for especcificado ou se passar -1, o comando se aplica a folha atual.

> A indexação começa em 0.

If *tableName* or *columnName* is not found, the command returns -1.

#### Exemplo

```4d
	// Search the column id according the column name
var $id : Integer
$id:=VP Get table column index($area; $tableName; "Weight price")
	// Remove the column by id
VP REMOVE TABLE COLUMNS($area; $tableName; $id)
```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP Get table column attributes](vp-get-table-column-attributes.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)
