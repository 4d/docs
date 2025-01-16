---
id: one-record-select
title: ONE RECORD SELECT
slug: /commands/one-record-select
displayed_sidebar: docs
---

<!--REF #_command_.ONE RECORD SELECT.Syntax-->**ONE RECORD SELECT** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.ONE RECORD SELECT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela na qual reduzir a seleção ao registro atual, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ONE RECORD SELECT.Summary-->ONE RECORD SELECT reduza seleção atual de *tabela* ao registro atual.<!-- END REF--> Se não existir um registro atual ou se o registro atual não estiver carregado na memória (caso particular), ONE RECORD SELECT não tem nenhum efeito.

#### Nota 

Este comando era útil para “retirar” um registro que tivesse sido empilhado e desempilhado da pilha de registro enquanto a seleção da tabela for modificada. [SET QUERY DESTINATION](set-query-destination.md) permite realizar uma pesquisa sem ter que mudar a seleção nem o registro atual de uma tabela; portanto, não necessita mais empilhar e desempilhar um registro atual para realizar uma pesquisa em sua tabela. Por isso, ONE RECORD SELECT é menos útil, a não ser que queira expressamente reduzir a seleção de uma tabela ao registro atual.

Aviso: lembre que um número de registro pode ser reutilizado se o registro for apagado e outro registro for criado (ver *Sobre Números de Registros*). 

)

#### Ver também 

[CREATE SELECTION FROM ARRAY](create-selection-from-array.md)  
*Seleções temporárias*  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 189 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Modificar a seleção atual ||


