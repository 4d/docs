---
id: erase-window
title: ERASE WINDOW
slug: /commands/erase-window
displayed_sidebar: docs
---

<!--REF #_command_.ERASE WINDOW.Syntax-->**ERASE WINDOW** ({ *janela* : Integer })<!-- END REF-->
<!--REF #_command_.ERASE WINDOW.Params-->
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
|6|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.ERASE WINDOW.Summary-->O comando ERASE WINDOW apaga o conteúdo da janela cujo número de referência se passa em janela.<!-- END REF-->  

Se omite o parâmetro *janela*, ERASE WINDOW apaga o conteúdo da *janela* do primeiro plano do processo atual.  
  
Geralmente, utilizará ERASE WINDOW em combinação com [MESSAGE](../commands/message) e [GOTO XY](../commands/goto-xy). Neste caso, ERASE WINDOW apaga o conteúdo da janela e coloca o cursor na esquina superior esquerda da janela, ou seja a posição correspondente a [GOTO XY](../commands/goto-xy) (0; 0).  
  
No confunda ERASE WINDOW , que apaga o conteúdo de uma janela, com [CLOSE WINDOW](../commands/close-window), que suprime a janela da tela.

## Ver também 

[GOTO XY](../commands/goto-xy)  
[MESSAGE](../commands/message)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 160 |
| Thread-seguro | no |


