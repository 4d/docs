---
id: previous-record
title: PREVIOUS RECORD
slug: /commands/previous-record
displayed_sidebar: docs
---

<!--REF #_command_.PREVIOUS RECORD.Syntax-->**PREVIOUS RECORD** ({ *tabela* : Table })<!-- END REF-->
<!--REF #_command_.PREVIOUS RECORD.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela para a qual vai mover o registro previamente selecionado, ou tabela padrão, se omitido |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.PREVIOUS RECORD.Summary-->PREVIOUS RECORD move o ponteiro do registro atual ao registro anterior na seleção de *tabela* para o processo atual.<!-- END REF--> Se a seleção atual estiver vazia, ou se [Before selection](../commands/before-selection) ou [End selection](../commands/end-selection) for TRUE, PREVIOUS RECORD não tem nenhum efeito.  
  
Se PREVIOUS RECORD move o ponteiro do registro atual antes da seleção atual, Before selection retorna TRUE, e não há registro atual. Se [End selection](../commands/end-selection) retorna TRUE, utilize [FIRST RECORD](../commands/first-record), [LAST RECORD](../commands/last-record) ou [GOTO SELECTED RECORD](../commands/goto-selected-record) para mover o ponteiro do registro atual na seleção atual.

## Ver também 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[LAST RECORD](../commands/last-record)  
[NEXT RECORD](../commands/next-record)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 110 |
| Thread-seguro | yes |
| Modificar o registro atual ||


