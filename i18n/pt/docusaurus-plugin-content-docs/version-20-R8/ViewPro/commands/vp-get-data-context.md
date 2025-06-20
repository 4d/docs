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

**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : any<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

| Parâmetro  | Tipo         |                             | Descrição                                                     |                  |
| ---------- | ------------ | --------------------------- | ------------------------------------------------------------- | ---------------- |
| vpAreaName | Text         | ->                          | Nome de objeto formulário área 4D View Pro                    |                  |
| sheet      | Integer      | ->                          | Índice da folha a partir da qual se obtém o contexto de dados |                  |
| Resultados | Diferente de | <- | Contexto de dados. Objeto ou coleção          | <!-- END REF --> |

## Descrição

O comando `VP Get data context` <!-- REF #_method_.VP Get data context.Summary -->retorna o contexto de dados atual de uma planilha<!-- END REF -->. O contexto retornado inclui todas as modificações feitas no conteúdo do contexto de dados.

Em *sheet*, passe o índice da planilha para obter o contexto de dados. Se nenhum índice for passado, o comando retornará o contexto de dados da planilha atual. Se não houver contexto para a planilha, o comando retornará `Null`.

A função retorna um objeto ou uma coleção, dependendo do tipo de contexto de dados definido com [VP SET DATA CONTEXT](vp-set-data-context.md).

## Exemplo

Para obter o contexto de dados ligado às células seguintes:

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

## Veja também

[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP SET BINDING PATH](vp-set-binding-path.md)