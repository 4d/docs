---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** {( *tabela* )}<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual mover ao último registro selecionado, ou tabela padrão, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LAST RECORD.Summary-->LAST RECORD designa o último registro da seleção de *tabela* como registro atual e é carregado em memória.<!-- END REF--> Se a seleção atual estiver vazia ou se o registro atual já é o último da seleção, LAST RECORD não tem efeito.

#### Exemplo 

O exemplo a seguir designa o último registro da tabela \[Pessoas\] como registro atual: 

```4d
 LAST RECORD([Pessoas])
```

#### Ver também 

[Before selection](before-selection.md)  
[End selection](end-selection.md)  
[FIRST RECORD](first-record.md)  
[NEXT RECORD](next-record.md)  
[PREVIOUS RECORD](previous-record.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 200 |
| Thread-seguro | &check; |
| Modificar o registro atual ||
| Proibido no servidor ||


