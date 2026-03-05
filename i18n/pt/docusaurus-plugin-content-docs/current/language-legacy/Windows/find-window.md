---
id: find-window
title: Find window
slug: /commands/find-window
displayed_sidebar: docs
---

<!--REF #_command_.Find window.Syntax-->**Find window** ( *esquerda* : Integer ; *superior* : Integer {; *parteJanela* : Integer} ) : Integer<!-- END REF-->
<!--REF #_command_.Find window.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| esquerda | Integer | &#8594; | Coordenada esquerda global |
| superior | Integer | &#8594; | Coordenada superior global |
| parteJanela | Integer | &#8592; | Número de parte ID da janela |
| Resultado | Integer | &#8592; | Número de referência de janela |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14|Modificado|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Find window.Summary-->O comando Find window devolve (se existe) o número de referência da primeira janela “tocada” pelo ponto cujas coordenadas se passam em *esquerda e superior*.<!-- END REF-->  

As coordenadas devem ser expressas com relação a esquina superior esquerda da área de conteúdo da janela de aplicação (Windows) ou da tela principal (Macintosh).  
  
O parâmetro *parteJanela*, devolve 3 se toca a janela, caso contrário 0\. (**Nota de compatibilidade:** a partir de 4D v14, as constantes do tema *Buscar janela* são obsoletas).

## Ver também 

[Frontmost window](../commands/frontmost-window)  
[Next window](../commands/next-window)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 449 |
| Thread-seguro | no |


