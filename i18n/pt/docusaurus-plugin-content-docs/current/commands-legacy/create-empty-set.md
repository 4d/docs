---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*tabela* ;} *conjunto* )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual vai criar um conjunto vazio, ou tabela padrão, se omitido |
| conjunto | Text | &#8594;  | Nome do conjunto vazio |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CREATE EMPTY SET.Summary-->CREATE EMPTY SET cria um conjunto vazio, *conjunto*, para *tabela*.<!-- END REF--> Pode adicionar registros a este conjunto com o comando [ADD TO SET](add-to-set.md). Se já existir um conjunto com o mesmo nome, o conjunto existente é apagado e substitui com o novo conjunto.  
  
**Nota**: não tem que utilizar CREATE EMPTY SET antes de utilizar [CREATE SET](create-set.md).

#### Exemplo 

Consulte o exemplo da seção *Conjuntos*.

#### Ver também 

[CLEAR SET](clear-set.md)  
[CREATE SET](create-set.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 140 |
| Thread-seguro | &check; |
| Proibido no servidor ||


