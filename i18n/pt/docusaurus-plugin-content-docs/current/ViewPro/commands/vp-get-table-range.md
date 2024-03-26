---
id: vp-get-table-range
title: VP Get table range
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R7 | Adicionado |

</details>

<!-- REF #_method_.VP Get table range.Syntax -->

**VP Get table range** ( _vpAreaName_ : Text ; _tableName_ : Text {; _onlyData_ : Integer {; _sheet_ : Integer }} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get table range.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                                   |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome de objeto formulário área 4D View Pro                                  |                  |
| tableName  | Text    | -> | Nome da tabela                                                              |                  |
| onlyData   | Integer | -> | `vk table full range` (default) or `vk table data range` |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida)                 |                  |
| Resultados | Object  | <- | Intervalo que contém a tabela                                               | <!-- END REF --> |

#### Descrição

The `VP Get table range` command <!-- REF #_method_.VP Get table range.Summary -->returns the range of _tableName_<!-- END REF -->.

Em _vpAreaName_, passe o nome da área 4D View Pro.

In the _onlyData_ parameter, you can pass one of the following constants to indicate if you want to get the data only:

| Parâmetros            | Valor | Descrição                                                                                                        |
| --------------------- | ----- | ---------------------------------------------------------------------------------------------------------------- |
| `vk table full range` | 0     | Obtém o intervalo de células para a área da tabela com rodapé e cabeçalho (padrão se omitido) |
| `vk table data range` | 1     | Obter o intervalo de células apenas para a área de dados da tabela                                               |

In _sheet_, pass the index of the target sheet. Se nenhum índice for especificado, o comando se aplica à folha atual.

> A indexação começa em 0.

If _tableName_ is not found, the command returns **null**.

#### Veja também

[VP RESIZE TABLE](vp-resize-table.md)<br/>
[VP Find table](vp-find-table.md)
