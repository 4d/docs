---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** ( *janela* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Window process.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594; | Número de referência da janela |
| Resultado | Integer | &#8592; | Número de referência do processo |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Window process.Summary-->O comando Window process devolve o número de processo que executa a janela cujo número de referência é passado em *janela*.<!-- END REF--> Se a janela não existir, o comando devolve *0 (zero)*.  

Se omitir o parâmetro *janela*, Window process devolve o número do processo da janela do primeiro plano do processo atual.

## Ver também 

[Current process](../commands/current-process)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 446 |
| Thread-seguro | no |


