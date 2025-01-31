---
id: query-selection
title: QUERY SELECTION
slug: /commands/query-selection
displayed_sidebar: docs
---

<!--REF #_command_.QUERY SELECTION.Syntax-->**QUERY SELECTION** ( {*tabela* }{;}{ *criterioPesquisa* {; *}} )<!-- END REF-->
<!--REF #_command_.QUERY SELECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual devolver uma seleção de registros ou Tabela por padrão, se for omitido |
| criterioPesquisa | Expression | &#8594;  | Critério de Pesquisa |
| * | Operador | &#8594;  | Flag para continuar a pesquisa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QUERY SELECTION.Summary-->**QUERY SELECTION** busca registros em *tabela*.<!-- END REF--> O comando **QUERY SELECTION** muda a seleção atual de *tabela* para o processo atual e faz do primeiro registro da nova seleção no registro atual.

**QUERY SELECTION** funciona e realiza as mesmas ações que [QUERY](query.md). A diferença entre os dois comandos é o alcance da pesquisa:

* [QUERY](query.md) busca registros entre os registros na tabela.
* **QUERY SELECTION** busca registros entre os registros da seleção atual da tabela.

Para maior informação, consulte a descrição do comando [QUERY](query.md).

O comando **QUERY SELECTION** é útil quando uma pesquisa não pode ser definida usando a sequência [QUERY](query.md) chamadas unidas com o parâmetro *\** . Tipicamente, é o caso quando quer pesquisar uma seleção atual que não resulta de uma pesquisa anterior, mas de um comando como por exemplo [USE SET](use-set.md). 

#### Exemplo 

Se quiser pesquisar os registros que foram anteriormente ressaltados pelo usuário em uma lista formulário, pode escrever:

```4d
 USE SET("UserSet") //substitui a seleção atual com os registros ressaltados
 QUERY SELECTION([Company];[Company]City="New York City";*)
 QUERY SELECTION([Company]Type Business="Stock Exchange")
```

Isso faz com que encontre todas as empresas localizadas em Nova Iorque, com atividade na Bolsa de Valores, entre a seleção inicial do usuário

#### Ver também 

[QUERY](query.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 341 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Modificar o registro atual ||
| Modificar a seleção atual ||


