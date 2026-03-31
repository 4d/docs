---
id: get-window-title
title: Get window title
slug: /commands/get-window-title
displayed_sidebar: docs
---

<!--REF #_command_.Get window title.Syntax-->**Get window title** ( *janela* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Get window title.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594; | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |
| Resultado | Text | &#8592; | Título da janela |
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

<!--REF #_command_.Get window title.Summary-->O comando Get window title devolve o título da janela cujo número de referência se passa em *janela*.<!-- END REF--> Se a janela não existir, se devolve uma cadeia vazia.  

Se omitir o parâmetro *janela*, Get window title devolve o título da janela do primeiro plano do processo atual.

## Exemplo 

Ver exemplo do comando [SET WINDOW TITLE](../commands/set-window-title).

## Ver também 

[SET WINDOW TITLE](../commands/set-window-title)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 450 |
| Thread-seguro | no |


