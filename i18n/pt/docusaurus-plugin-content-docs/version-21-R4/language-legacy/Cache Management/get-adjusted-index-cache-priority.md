---
id: get-adjusted-index-cache-priority
title: Get adjusted index cache priority
slug: /commands/get-adjusted-index-cache-priority
displayed_sidebar: docs
---

<!--REF #_command_.Get adjusted index cache priority.Syntax-->**Get adjusted index cache priority** ( *Campo* : Field ) : Integer<!-- END REF-->
<!--REF #_command_.Get adjusted index cache priority.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Field | Field | &#8594; | Campo para o qual a prioridade dos índices vai ser recuperada |
| Resultado | Integer | &#8592; | O valor atual da prioridade dos índices |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|16 R2|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Get adjusted index cache priority.Summary-->O comando **Get adjusted index cache priority** devolve o valor de prioridade de cache ajustado atual aplicado pelo gestor de cache para os índices de campo.<!-- END REF--> Este comando só é necessário para propósitos de depuração.

**Nota:** este comando só funciona em modo local (4D Server e 4D); Não pode ser utilizado em modo remoto 4D.

## Ver também 

[ADJUST INDEX CACHE PRIORITY](../commands/adjust-index-cache-priority)  
*Gerenciar prioridades em cache de banco de dados*  
[SET INDEX CACHE PRIORITY](../commands/set-index-cache-priority)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1427 |
| Thread-seguro | yes |


