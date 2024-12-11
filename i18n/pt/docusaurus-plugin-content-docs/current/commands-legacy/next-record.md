---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual mover o novo registro selecionado, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.NEXT RECORD.Summary-->NEXT RECORD move o ponteiro do registro atual ao seguinte registro na seleção atual de tabela para o processo atual.<!-- END REF--> Se a seleção atual estiver vazia, ou se [Before selection](before-selection.md) ou [End selection](end-selection.md) for TRUE, NEXT RECORD não tem nenhum efeito.  

Se NEXT RECORD move o ponteiro do registro atual ao final da seleção atual, [End selection](end-selection.md) retorna TRUE, e não houver registro atual. Se [End selection](end-selection.md) retorna TRUE, utilize [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md) para mover o ponteiro do registro atual de regresso a seleção atual.

#### Exemplo 

Ver o exemplo do comando [DISPLAY RECORD](display-record.md "DISPLAY RECORD").

#### Ver também 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[PREVIOUS RECORD](previous-record.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 51 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Proibido no servidor ||


