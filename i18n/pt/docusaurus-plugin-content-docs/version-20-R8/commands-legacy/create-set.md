---
id: create-set
title: CREATE SET
slug: /commands/create-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET.Syntax-->**CREATE SET** ( {*tabela* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.CREATE SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | tabela para qual criar um conjunto a partir da seleção, ou tabela padrão se omitido |
| conjunto | Text | &#8594;  | Nome do novo conjunto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE SET.Summary-->CREATE SET cria um novo conjunto, *conjunto*, para *tabela*, e coloca a seleção atual em *conjunto*.<!-- END REF--> O ponteiro do registro atual da tabela é guardada com conjunto. Se *conjunto* for utilizado com [USE SET](use-set.md), a seleção atual e o registro atual são restauradas. Como para todo conjunto, não há critério de ordenação; quando *conjunto* é utilizado, se utiliza a ordem padrão. Se já existir um conjunto com o mesmo nome, o conjunto existente se Apaga e substituído pelo novo conjunto.

#### Exemplo 

O seguinte exemplo cria um conjunto depois de realizar uma pesquisa, de maneira que o conjunto possa ser salvo no disco:   

```4d
 QUERY([Pessoas]) // O usuário realiza uma pesquisa
 &NBSP;CRIATE SET([Pessoas];"ConjuntoPesquisa") // Criação de um novo conjunto
 &NBSP;SAVE SET("ConjuntoPesquisa";"MinhaPesquisa") // O conjunto se guarda no disco
```

#### Ver também 

[CLEAR SET](clear-set.md)  
[CREATE EMPTY SET](create-empty-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 116 |
| Thread-seguro | &check; |


