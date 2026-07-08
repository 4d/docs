---
id: all-records
title: ALL RECORDS
slug: /commands/all-records
displayed_sidebar: docs
---

<!--REF #_command_.ALL RECORDS.Syntax-->**ALL RECORDS** ({ *tabela* : Table })<!-- END REF-->
<!--REF #_command_.ALL RECORDS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela para a qual vai selecionar todos os registros, ou tabela padrão, se omitido |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.ALL RECORDS.Summary-->ALL RECORDS seleciona todos os registros de *tabela* para o processo atual.<!-- END REF--> ALL RECORDS faz do primeiro registro da seleção o registro atual e o carrega em memória. ALL RECORDS retorna os registros na ordem padrão, que é a ordem no qual os registros são armazenados no disco

## Exemplo 

O exemplo a seguir mostra todos os registros da tabela \[Pessoas\]: 

```4d
 ALL RECORDS([Pessoas]) // Seleção de todos os registros na tabela
 DISPLAY SELECTION([Pessoas]) // Mostrar os registros no formulário de saída
```

## Ver também 

[DISPLAY SELECTION](../commands/display-selection)  
[MODIFY SELECTION](../commands/modify-selection)  
[ORDER BY](../commands/order-by)  
[QUERY](../commands/query)  
[Records in selection](../commands/records-in-selection)  
[Records in table](../commands/records-in-table)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 47 |
| Thread-seguro | yes |
| Modificar o registro atual ||
| Modificar a seleção atual ||


