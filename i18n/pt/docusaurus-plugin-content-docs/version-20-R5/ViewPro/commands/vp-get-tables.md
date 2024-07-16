---
id: vp-get-tables
title: VP Get tables
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP Get tables.Syntax -->

**VP Get tables** ( _vpAreaName_ : Text { ; _sheet_ : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get tables.Params -->

| Parâmetro  | Tipo       |    | Descrição                                                   |                  |
| ---------- | ---------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nome de objeto formulário área 4D View Pro                  |                  |
| sheet      | Integer    | -> | Índice da folha (folha atual se omitida) |                  |
| Resultados | Collection | <- | Coleção de texto com todos os nomes das tabelas             | <!-- END REF --> |

#### Descrição

The `VP Get tables` command <!-- REF #_method_.VP Get tables.Summary -->returns a collection of all table names defined in the _sheet_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro.

In _sheet_, pass the index of the target sheet. Se nenhum índice for especificado, o comando se aplica à folha atual.

> A indexação começa em 0.

#### Exemplo

O código abaixo devolverá uma coleção de todos os nomes de tabelas da folha atual:

```4d
$tables:=VP Get tables("ViewProArea")
//$tables contém por exemplo ["contextTable","emailTable"]

```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)
