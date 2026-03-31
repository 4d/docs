---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *campo* : Field )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| campo | Field | &#8594; | Campo da tabela Muitos (onde a relação começa) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->O comando RELATE MANY SELECTION cria uma seleção de registros na tabela Muitos, baseada na seleção atual da tabela Um.<!-- END REF-->  

**Nota**: RELATE MANY SELECTION muda o registro atual da tabela Um.

## Exemplo 

Este exemplo seleciona todas as faturas de clientes com crédito superior ou igual a $1.000\. O campo *\[Faturas\]IDCliente* está relacionado com o campo *\[Clientes\]NumID*. 

```4d
  // Selecionar os clientes
 QUERY([Clientes];[Clientes]Credit>=1000)
  // Buscar todas as faturas relacionadas com cada um desses clientes
 RELATE MANY SELECTION([Faturas]IDCliente)
```

## Ver também 

[QUERY](../commands/query)  
[RELATE ONE](../commands/relate-one)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 340 |
| Thread-seguro | yes |
| Modificar o registro atual ||
| Modificar a seleção atual ||


