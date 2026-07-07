---
id: redraw-window
title: REDRAW WINDOW
slug: /commands/redraw-window
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW WINDOW.Syntax-->**REDRAW WINDOW** ({ *janela* : Integer })<!-- END REF-->
<!--REF #_command_.REDRAW WINDOW.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594; | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |
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

<!--REF #_command_.REDRAW WINDOW.Summary-->O comando REDRAW WINDOW provoca uma atualização do conteúdo da janela cujo número de referência é passado em janela.<!-- END REF-->  

Se omitir o parâmetro *janela*, REDRAW WINDOW aplica à janela do primeiro plano do processo atual.  
  
**Nota**: 4D administra automaticamente as atualizações gráficas das janelas cada vez que você mover, redimensionar ou passar ao primeiro plano uma janela, assim como quando você muda o formulário ou os valores mostrados na janela. Este comando se utiliza raramente.

## Ver também 

[ERASE WINDOW](../commands/erase-window)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 456 |
| Thread-seguro | no |


