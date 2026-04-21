---
id: get-query-limit
title: Get query limit
slug: /commands/get-query-limit
displayed_sidebar: docs
---

<!--REF #_command_.Get query limit.Syntax-->**Get query limit** : Integer<!-- END REF-->
<!--REF #_command_.Get query limit.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número limite de registros,0 = número ilimitado |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Get query limit.Summary-->O comando **Get query limit** devolve o limite do número de registros que uma pesquisa pode encontrar no processo atual.<!-- END REF-->

Se define este limite utilizando o comando [SET QUERY LIMIT](../commands/set-query-limit). 

Por defeito, caso nenhum limite tenha sido definido, o comando devolve 0.

## Ver também 

[SET QUERY LIMIT](../commands/set-query-limit)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1156 |
| Thread-seguro | yes |


