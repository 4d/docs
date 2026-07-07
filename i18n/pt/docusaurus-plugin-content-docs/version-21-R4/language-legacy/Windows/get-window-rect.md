---
id: get-window-rect
title: GET WINDOW RECT
slug: /commands/get-window-rect
displayed_sidebar: docs
---

<!--REF #_command_.GET WINDOW RECT.Syntax-->**GET WINDOW RECT** ( *esquerda* : Integer ; *superior* : Integer ; *direita* : Integer ; *inferior* : Integer {; *janela* : Integer} )<!-- END REF-->
<!--REF #_command_.GET WINDOW RECT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| esquerda | Integer | &#8592; | Coordenada esquerda da área de conteúdo da janela |
| superior | Integer | &#8592; | Coordenada superior da área de conteúdo da janela |
| direita | Integer | &#8592; | Coordenada direita da área de conteúdo da janela |
| inferior | Integer | &#8592; | Coordenada inferior da área de conteúdo da janela |
| janela | Integer | &#8594; | Número de referência de janela; ou janela do primeiro plano do processo atual, se omitido; ou janela MDI se for -1 (Windows) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2003|Modificado|
|<6|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.GET WINDOW RECT.Summary-->O comando GET WINDOW RECT devolve as coordenadas globais da janela cujo número de referência se passa em janela.<!-- END REF--> Se a janela não existir, as variáveis dos parâmetros não modificam.  

Se omite o parâmetro *janela*, GET WINDOW RECT se aplica a janela do primeiro plano do processo atual.  
  
As coordenadas retornadas são expressadas em relação ao canto superior esquerdo da área de conteúdo da janela de aplicação (em modo Windows MDI) ou da tela principal (MacOS e modo Windows SDI). As coordenadas devolvem o retângulo correspondente à área de conteúdo da janela (excluindo as barras de títulos e as margens).

**Nota**: em windows, se passa -1 em *janela*, GET WINDOW RECT devolve as coordenadas da janela de aplicação (janela MDI). Estas coordenadas correspondem a área de conteúdo da janela (excluindo barras de menus e margens). Neste caso em modo SDI, **GET WINDOW RECT** devolve (0;0;0;0) como coordenadas.

## Exemplo 

Ver o exemplo do comando [WINDOW LIST](../commands/window-list)..

## Ver também 

[CONVERT COORDINATES](../commands/convert-coordinates)  
[SET WINDOW RECT](../commands/set-window-rect)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 443 |
| Thread-seguro | no |


