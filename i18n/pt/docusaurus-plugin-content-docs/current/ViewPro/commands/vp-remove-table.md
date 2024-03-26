---
id: vp-remove-table
title: VP REMOVE TABLE
---

<details><summary>História</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v19 R6 | Adicionado |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( _vpAreaName_ : Object; _tableName_ : Text {; _options_ : Integer} {; _sheet_ : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome da área View Pro                                       |                  |
| tableName  | Text    | -> | Nome da tabela a remover                                    |                  |
| options    | Integer | -> | Opções adicionais                                           |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP REMOVE TABLE` command <!-- REF #_method_.VP REMOVE TABLE.Summary -->removes a table<!-- END REF --> that you created with [VP CREATE TABLE](vp-create-table.md).

In _vpAreaName_, pass the name of the area where the table to remove is located.

In _tableName_, pass the name of the table to remove.

In _options_, you can specify additional behavior. Valores possíveis:

| Parâmetros            | Valor | Descrição                                   |
| --------------------- | ----- | ------------------------------------------- |
| vk table remove all   | 0     | Remover tudo, incluindo o estilo e os dados |
| vk table remove style | 1     | Remover o estilo, mas manter os dados       |
| vk table remove data  | 2     | Remover dados, mas manter o estilo          |

Os nomes das tabelas são definidos ao nível da folha. You can specify where the table is located using the optional _sheet_ parameter (indexing starts at 0).

#### Exemplo

Para remover a tabela "pessoas" na segunda folha e manter os dados nas células:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)
