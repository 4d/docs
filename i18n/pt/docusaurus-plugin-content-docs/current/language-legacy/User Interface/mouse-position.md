---
id: mouse-position
title: MOUSE POSITION
slug: /commands/mouse-position
displayed_sidebar: docs
---

<!--REF #_command_.MOUSE POSITION.Syntax-->**MOUSE POSITION** ( *mouseX* : Real ; *mouseY* : Real ; *botaoMouse* : Integer {; *} )<!-- END REF-->
<!--REF #_command_.MOUSE POSITION.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mouseX | Real | &#8592; | Coordenadas horizontais do mouse |
| mouseY | Real | &#8592; | Coordenadas verticais do mouse |
| botaoMouse | Integer | &#8592; | Estado do botão do mouse: 0=botão sem pressionar; 1=botão pressionado; 2= botão direito pressionado; 3=dois botões pressionados |
| * | Operador | &#8594; | Se especificado, sistema global de coordenadas é usado, se omitido, sistema de coordenadas locais é usado |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.MOUSE POSITION.Summary-->O comando MOUSE POSITION retorna o estado atual do mouse.<!-- END REF-->  

As coordenadas horizontal e vertical são retornadas em *mouseX* e *mouseY*. Se passar o parâmetro *\** , as coordenadas são expressas em relação à tela (modo macOS e Windows SDI) ou a janela da aplicação (modo Windows MDI). Se omitir o parâmetro \*, são expressas em relação à janela do formulário atual (se houver) do processo atual. 

O parâmetro *botaoMouse* retorna o estado dos botões, como foi descrito anteriormente.  

  
**Nota**: os valores 2 e 3 podem ser retornados em macOS a partir da versão 10.2.5 apenas.

## Exemplo 

Ver o exemplo do comando [Pop up menu](../commands/pop-up-menu).

## Ver também 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[ON EVENT CALL](../commands/on-event-call)  
[Shift down](../commands/shift-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 468 |
| Thread-seguro | no |


