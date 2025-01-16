---
id: mouse-position
title: MOUSE POSITION
slug: /commands/mouse-position
displayed_sidebar: docs
---

<!--REF #_command_.MOUSE POSITION.Syntax-->**MOUSE POSITION** ( *mouseX* ; *mouseY* ; *botaoMouse* {; *} )<!-- END REF-->
<!--REF #_command_.MOUSE POSITION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mouseX | Real | &#8592; | Coordenadas horizontais do mouse |
| mouseY | Real | &#8592; | Coordenadas verticais do mouse |
| botaoMouse | Integer | &#8592; | Estado do botão do mouse: 0=botão sem pressionar; 1=botão pressionado; 2= botão direito pressionado; 3=dois botões pressionados |
| * | Operador | &#8594;  | Se especificado, sistema global de coordenadas é usado, se omitido, sistema de coordenadas locais é usado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.MOUSE POSITION.Summary-->O comando MOUSE POSITION retorna o estado atual do mouse.<!-- END REF-->  

As coordenadas horizontal e vertical são retornadas em *mouseX* e *mouseY*. Se passar o parâmetro *\** , as coordenadas são expressas em relação à tela (modo macOS e Windows SDI) ou a janela da aplicação (modo Windows MDI). Se omitir o parâmetro \*, são expressas em relação à janela do formulário atual (se houver) do processo atual. 

O parâmetro *botaoMouse* retorna o estado dos botões, como foi descrito anteriormente.  

  
**Nota**: os valores 2 e 3 podem ser retornados em Mac OS X a partir da versão 10.2.5 apenas.

#### Exemplo 

Ver o exemplo do comando [Pop up menu](pop-up-menu.md).

#### Ver também 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[ON EVENT CALL](on-event-call.md)  
[Shift down](shift-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 468 |
| Thread-seguro | &cross; |


