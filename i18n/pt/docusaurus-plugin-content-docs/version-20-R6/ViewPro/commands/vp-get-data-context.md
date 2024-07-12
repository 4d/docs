---
id: vp-get-data-context
title: VP Get data context
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R5   | Adicionado |

</details>

<!-- REF #_method_.VP Get data context.Syntax -->

**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Object<br/>**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

| Parâmetro  | Tipo                 |    | Descrição                                                     |                  |
| ---------- | -------------------- | -- | ------------------------------------------------------------- | ---------------- |
| vpAreaName | Object               | -> | Nome de objeto formulário área 4D View Pro                    |                  |
| sheet      | Integer              | -> | Índice da folha a partir da qual se obtém o contexto de dados |                  |
| Resultados | Object \| Collection | <- | Contexto de dados                                             | <!-- END REF --> |

#### Descrição

The `VP Get data context` command <!-- REF #_method_.VP Get data context.Summary -->returns the current data context of a worksheet<!-- END REF -->. O contexto retornado inclui todas as modificações feitas no conteúdo do contexto de dados.

In *sheet*, pass the index of the sheet to get the data context from. Se nenhum índice for passado, o comando retornará o contexto de dados da planilha atual. If there is no context for the worksheet, the command returns `Null`.

The function returns an object or a collection depending on the type of data context set with [VP SET DATA CONTEXT](vp-set-data-context.md).

#### Exemplo

Para obter o contexto de dados ligado às células seguintes:

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

#### Veja também

[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP SET BINDING PATH](vp-set-binding-path.md)
