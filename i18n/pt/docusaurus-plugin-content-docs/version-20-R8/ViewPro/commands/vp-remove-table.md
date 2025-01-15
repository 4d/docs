---
id: vp-remove-table
title: VP REMOVE TABLE
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R6   | Adicionado |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( *vpAreaName* : Object; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

| Parâmetro  | Tipo    |    | Descrição                                                   |                  |
| ---------- | ------- | -- | ----------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nome da área View Pro                                       |                  |
| tableName  | Text    | -> | Nome da tabela a remover                                    |                  |
| options    | Integer | -> | Opções adicionais                                           |                  |
| sheet      | Integer | -> | Índice da folha (folha atual se omitida) | <!-- END REF --> |

#### Descrição

The `VP REMOVE TABLE` command <!-- REF #_method_.VP REMOVE TABLE.Summary -->removes a table<!-- END REF --> that you created with [VP CREATE TABLE](vp-create-table.md).

Em *vpAreaName*, passe o nome da área onde a tabela a ser removida está localizada.

In *tableName*, pass the name of the table to remove.

Em *options*, você pode especificar o comportamento adicional. Valores possíveis:

| Parâmetros            | Valor | Descrição                                   |
| --------------------- | ----- | ------------------------------------------- |
| vk table remove all   | 0     | Remover tudo, incluindo o estilo e os dados |
| vk table remove style | 1     | Remover o estilo, mas manter os dados       |
| vk table remove data  | 2     | Remover dados, mas manter o estilo          |

Os nomes das tabelas são definidos ao nível da folha. You can specify where the table is located using the optional *sheet* parameter (indexing starts at 0).

#### Exemplo

Para remover a tabela "pessoas" na segunda folha e manter os dados nas células:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)
