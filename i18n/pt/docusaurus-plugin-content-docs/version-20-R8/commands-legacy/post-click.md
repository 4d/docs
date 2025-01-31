---
id: post-click
title: POST CLICK
slug: /commands/post-click
displayed_sidebar: docs
---

<!--REF #_command_.POST CLICK.Syntax-->**POST CLICK** ( *mouseX* ; *mouseY* {; *processo*} {; *} )<!-- END REF-->
<!--REF #_command_.POST CLICK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mouseX | Integer | &#8594;  | Coordenada Horizontal |
| mouseY | Integer | &#8594;  | Coordenada Vertical |
| processo | Integer | &#8594;  | Número de referência do processo destino; ou, omitido, fila de evento de Aplicação, ou 0 |
| * | Operator |  &#8594;  | Se especificado sistema de coordenadas global é usado; se omitido, sistema de coordenadas locais é usado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.POST CLICK.Summary-->O comando POST CLICK simula um clique do mouse.<!-- END REF--> Tem o mesmo efeito que quando o usuário clicar no botão do mouse 

Passe as coordenadas horizontal e vertical do clique em *mouseX* e *mouseY*. Se passar o parâmetro *\**, expressa estas coordenadas com relação à tela. Se omitir o parâmetro *\**, expressa estas coordenadas relativas à janela do primeiro plano do processo cujo número de processo for passado em *processo*. 

Se especificar o parâmetro processo *processo*, o clique é enviado ao processo cujo número de processo é passado em *processo*. Se passar 0 (*zero*), ou se omitir o parâmetro, o clique é enviado ao nível da aplicação e o planejador 4D lhe enviará ao processo apropriado.

#### Ver também 

[POST EVENT](post-event.md)  
[POST KEY](post-key.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 466 |
| Thread-seguro | &cross; |


