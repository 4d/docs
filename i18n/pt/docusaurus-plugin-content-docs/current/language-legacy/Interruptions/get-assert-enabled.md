---
id: get-assert-enabled
title: Get assert enabled
slug: /commands/get-assert-enabled
displayed_sidebar: docs
---

<!--REF #_command_.Get assert enabled.Syntax-->**Get assert enabled** : Boolean<!-- END REF-->
<!--REF #_command_.Get assert enabled.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True=asserções ativas False =  asserções desativadas |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|12|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Get assert enabled.Summary-->O comando Get assert enabled devolve True ou False dependendo de se as asserções estão ativas ou não no processo atual.<!-- END REF--> Para maior informação sobre asserções, consulte a descrição do comando [ASSERT](assert.md "ASSERT"). 

Automaticamente, as asserções estão ativas mas é possível desativá-las utilizando o comando [SET ASSERT ENABLED](set-assert-enabled.md "SET ASSERT ENABLED"). 

## Ver também 

[ASSERT](../commands/assert)  
[Asserted](../commands/asserted)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1130 |
| Thread-seguro | yes |


