---
id: vp-resize-table
title: VP RESIZE TABLE
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP RESIZE TABLE.Syntax -->

**VP RESIZE TABLE** ( *rangeObj* : Object; *tableName* : Text )<!-- END REF -->

<!-- REF #_method_.VP RESIZE TABLE.Params -->

| Parâmetro | Tipo   |    | Descrição               |                  |
| --------- | ------ | -- | ----------------------- | ---------------- |
| rangeObj  | Object | -> | Nova gama para a tabela |                  |
| tableName | Text   | -> | Nombre da tabela        | <!-- END REF --> |

## Descrição

O comando `VP RESIZE TABLE` <!-- REF #_method_.VP RESIZE TABLE.Summary --> altera o tamanho da *tabela* em relação ao *rangeObj*<!-- END REF -->.

As regras abaixo são válidas:

- Cabeçalhos devem permanecer na mesma linha e o intervalo de tabelas resultante deve sobrepor o intervalo de tabela original.
- Se a contagem de linha da tabela redimensionada é inferior à contagem de linhas inicial, valores em linhas ou colunas cortadas são mantidos se eles não fossem vinculados a um [contexto de dados](vp-set-data-context.md), caso contrário, eles serão excluídos.
- Se a tabela se expandir nas células que contêm dados:
    - se as linhas forem adicionadas, os dados serão excluídos,
    - se colunas forem adicionadas, dados serão mantidos e exibidos em novas colunas.

Se *tableName* não existir, não acontece nada.

## Exemplo

Você cria uma tabela com um contexto de dados:

```4d
var $context : Object
$context:=New object()

$context.col:=New collection
$context.col.push(New object("name"; "Smith"; "salary"; 10000))
$context.col.push(New object("name"; "Wesson"; "salary"; 50000))
$context.col.push(New object("name"; "Gross"; "salary"; 10500)) VP SET DATA CONTEXT("ViewProArea"; $context) VP CREATE TABLE(VP Cells("ViewProArea"; 1; 1; 3; 3); "PeopleTable"; "col")
```

![](../../assets/en/ViewPro/table-base.png)

Se quiser adicionar uma coluna antes e depois da tabela, bem como duas linhas vazias. Você pode escrever:

```4d
VP RESIZE TABLE(VP Cells("ViewProArea"; 0; 1; 4; 6); "PeopleTable")
```

![](../../assets/en/ViewPro/table-resize.png)

## Veja também

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table range](vp-get-table-range.md)
