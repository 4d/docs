---
id: next-record
title: NEXT RECORD
slug: /commands/next-record
displayed_sidebar: docs
---

<!--REF #_command_.NEXT RECORD.Syntax-->**NEXT RECORD** ({ *tabela* : Table })<!-- END REF-->
<!--REF #_command_.NEXT RECORD.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela para a qual mover o novo registro selecionado, ou tabela padrão, se omitido |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.NEXT RECORD.Summary-->NEXT RECORD move o ponteiro do registro atual ao seguinte registro na seleção atual de tabela para o processo atual.<!-- END REF--> Se a seleção atual estiver vazia, ou se [Before selection](../commands/before-selection) ou [End selection](../commands/end-selection) for TRUE, NEXT RECORD não tem nenhum efeito.  

Se NEXT RECORD move o ponteiro do registro atual ao final da seleção atual, [End selection](../commands/end-selection) retorna TRUE, e não houver registro atual. Se [End selection](../commands/end-selection) retorna TRUE, utilize [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) ou [GOTO SELECTED RECORD](../commands/goto-selected-record) para mover o ponteiro do registro atual de regresso a seleção atual.

## Exemplo 

Ver o exemplo do comando [DISPLAY RECORD](display-record.md "DISPLAY RECORD").

## Ver também 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 51 |
| Thread-seguro | yes |
| Modificar o registro atual ||


