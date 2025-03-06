---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai mover o registro previamente selecionado, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PREVIOUS RECORD.Summary-->PREVIOUS RECORD move o ponteiro do registro atual ao registro anterior na seleção de *tabela* para o processo atual.<!-- END REF--> Se a seleção atual estiver vazia, ou se [Before selection](before-selection.md) ou [End selection](end-selection.md) for TRUE, PREVIOUS RECORD não tem nenhum efeito.  
  
Se PREVIOUS RECORD move o ponteiro do registro atual antes da seleção atual, Before selection retorna TRUE, e não há registro atual. Se [End selection](end-selection.md) retorna TRUE, utilize [FIRST RECORD](first-record.md), [LAST RECORD](last-record.md) ou [GOTO SELECTED RECORD](goto-selected-record.md) para mover o ponteiro do registro atual na seleção atual.

#### Ver também 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[LAST RECORD](last-record.md)  
[NEXT RECORD](next-record.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 110 |
| Thread-seguro | &check; |
| Modificar o registro atual ||


