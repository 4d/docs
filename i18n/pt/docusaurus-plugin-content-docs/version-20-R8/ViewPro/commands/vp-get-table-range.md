---
id: vp-get-table-range
title: VP Get table range
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R6   | Adicionado |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( *vpAreaName* : Text ; *tableName* : Text {; *onlyData* : Integer {; *sheet* : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Parâmetro  | Tipo    |                             | Descrição                                                                  |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nome de objeto formulário área 4D View Pro                                 |                  |
| tableName  | Text    | ->                          | Nome da tabela                                                             |                  |
| onlyData   | Integer | ->                          | `vk table full range` (padrão) ou `vk table data range` |                  |
| sheet      | Integer | ->                          | Índice da folha (folha atual se omitida)                |                  |
| Resultados | Object  | <- | Intervalo que contém a tabela                                              | <!-- END REF --> |

#### Descrição

The `VP Get table range` command <!-- REF #_method_.VP Get table range.Summary -->returns the range of *tableName*<!-- END REF -->.

Em *vpAreaName*, passe o nome da área 4D View Pro.

In the *onlyData* parameter, you can pass one of the following constants to indicate if you want to get the data only:

| Parâmetros            | Valor | Descrição                                                                                                        |
| --------------------- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0     | Obtém o intervalo de células para a área da tabela com rodapé e cabeçalho (padrão se omitido) |
| `vk table data range` | 1     | Obter o intervalo de células apenas para a área de dados da tabela                                               |

Em *sheet*, passe o índice da folha de destino. Se nenhum índice for especificado, o comando se aplica à folha atual.

> A indexação começa em 0.

Se *tableName* não for encontrado, o comando retornará **null**.

#### Veja também

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
