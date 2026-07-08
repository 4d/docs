---
id: last-record
title: LAST RECORD
slug: /commands/last-record
displayed_sidebar: docs
---

<!--REF #_command_.LAST RECORD.Syntax-->**LAST RECORD** ({ *tabela* : Table })<!-- END REF-->
<!--REF #_command_.LAST RECORD.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela para a qual mover ao último registro selecionado, ou tabela padrão, se omitido |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.LAST RECORD.Summary-->LAST RECORD designa o último registro da seleção de *tabela* como registro atual e é carregado em memória.<!-- END REF--> Se a seleção atual estiver vazia ou se o registro atual já é o último da seleção, LAST RECORD não tem efeito.

## Exemplo 

O exemplo a seguir designa o último registro da tabela \[Pessoas\] como registro atual: 

```4d
 LAST RECORD([Pessoas])
```

## Ver também 

[Before selection](../commands/before-selection)  
[End selection](../commands/end-selection)  
[FIRST RECORD](../commands/first-record)  
[NEXT RECORD](../commands/next-record)  
[PREVIOUS RECORD](../commands/previous-record)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 200 |
| Thread-seguro | yes |
| Modificar o registro atual ||


