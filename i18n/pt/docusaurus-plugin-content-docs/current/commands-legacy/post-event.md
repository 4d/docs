---
id: post-event
title: POST EVENT
slug: /commands/post-event
displayed_sidebar: docs
---

<!--REF #_command_.POST EVENT.Syntax-->**POST EVENT** ( *que* ; *mensagem* ; *quando* ; *mouseX* ; *mouseY* ; *modificadores* {; *processo*} )<!-- END REF-->
<!--REF #_command_.POST EVENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| que | Integer | &#8594;  | Tipo de evento |
| mensagem | Integer | &#8594;  | Mensagem de evento |
| quando | Integer | &#8594;  | Tempo de evento expresso em ticks |
| mouseX | Integer | &#8594;  | Coordenadas horizontais do mouse |
| mouseY | Integer | &#8594;  | Coordenadas verticais do mouse |
| modificadores | Integer | &#8594;  | Estado de teclas modificadoras |
| processo | Integer | &#8594;  | Número de referência do processo de destino; ou fila de evento de aplicação, se omitido, ou 0. |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.POST EVENT.Summary-->O comando POST EVENT simula um evento de teclado ou de mouse.<!-- END REF--> Tem o mesmo efeito que quando o usuário atua através do teclado ou do mouse.  
  
Passe uma das próximas constantes pré-definidas em *que*:  
  
| Constante        | Tipo          | Valor |
| ---------------- | ------------- | ----- |
| Auto key event   | Inteiro longo | 5     |
| Key down event   | Inteiro longo | 3     |
| Key up event     | Inteiro longo | 4     |
| Mouse down event | Inteiro longo | 1     |
| Mouse up event   | Inteiro longo | 2     |

Se o evento for um evento relacionado com o mouse, passe *0* (zero) em *mensagem*. Se o evento for um evento relacionado com o teclado, passe o código do caractere simulado em *mensagem*.  
  
Geralmente, se passa o valor retornado por [Tickcount](tickcount.md) em *quando*.  
Se o evento for um evento relacionado com o mouse, passe as coordenadas horizontal e vertical do clique em *mouseX* e *mouseY*.  
  
No parâmetro *modificadores*, passe uma constante ou uma combinação de constantes do tema *Eventos (Modificadores)*.   

| Constante              | Tipo          | Valor | Comentário                                                           |
| ---------------------- | ------------- | ----- | -------------------------------------------------------------------- |
| Activate window bit    | Inteiro longo | 0     |                                                                      |
| Activate window mask   | Inteiro longo | 1     |                                                                      |
| Caps lock key bit      | Inteiro longo | 10    | Windows e OS X                                                       |
| Caps lock key mask     | Inteiro longo | 1024  | Windows e OS X                                                       |
| Command key bit        | Inteiro longo | 8     | Tecla Ctrl em Windows, tecla Comando em OS X)                        |
| Command key mask       | Inteiro longo | 256   | Windows = tecla Ctrl, Mac OS = tecla Comando                         |
| Control key bit        | Inteiro longo | 12    | Tecla Ctrl em OS X, ou clique direito em Windows e OS X<br/> |
| Control key mask       | Inteiro longo | 4096  | Tecla Ctrl em OS X, ou clique direito em Windows e OS X              |
| Mouse button bit       | Inteiro longo | 7     |                                                                      |
| Mouse button mask      | Inteiro longo | 128   |                                                                      |
| Option key bit         | Inteiro longo | 11    | Tecla Alt (também chamada Opção em OS X)                             |
| Option key mask        | Inteiro longo | 2048  | Windows = tecla Alt, Mac OS = tecla Opção                            |
| Right control key bit  | Inteiro longo | 15    |                                                                      |
| Right control key mask | Inteiro longo | 32768 |                                                                      |
| Right option key bit   | Inteiro longo | 14    |                                                                      |
| Right option key mask  | Inteiro longo | 16384 |                                                                      |
| Right shift key bit    | Inteiro longo | 13    |                                                                      |
| Right shift key mask   | Inteiro longo | 8192  |                                                                      |
| Shift key bit          | Inteiro longo | 9     | Windows e OS X                                                       |
| Shift key mask         | Inteiro longo | 512   | Windows e Mac Os                                                     |

Por exemplo, para simular a tecla Shift, passe Shift key bit.  
  
Se passa o parâmetro *processo,* o evento é enviado através do processo cujo número se passa em *processo*. Se passa 0 (*zero*) ou se omite este parâmetro, o evento é enviado ao nível da aplicação e o agendador de tarefas (scheduler) de 4D o enviará ao processo apropriado.  

#### Ver também 

[POST CLICK](post-click.md)  
[POST KEY](post-key.md)  