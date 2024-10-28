---
id: minimize-window
title: MINIMIZE WINDOW
slug: /commands/minimize-window
displayed_sidebar: docs
---

<!--REF #_command_.MINIMIZE WINDOW.Syntax-->**MINIMIZE WINDOW** {( *janela* )}<!-- END REF-->
<!--REF #_command_.MINIMIZE WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência de janela ou se for omitido, todos os processos atuais e janelas de primeiro plano (Windows) ou processo atual de primeiro plano (Mac OS) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.MINIMIZE WINDOW.Summary-->O comando MINIMIZE WINDOW define o tamanho da janela, cujo número foi passado em *janela*, do tamanho que tinha antes de ser maximizada.<!-- END REF--> Se for omitido janela, o comando aplica a cada janela da aplicação (Windows) ou a janela do primeiro plano do processo atual (em Mac OS).  

Este comando tem o mesmo efeito que um clique na caixa de redução da aplicação 4D:

##### On Windows 

A janela retorna a seu tamanho inicial, ou seja, seu tamanho antes de ser maximizada. Se for omitido o parâmetro janela, todas as janelas da aplicação são redimensionadas a seu tamanho inicial.  

![](../assets/en/commands/pict39369.en.png)

Caixa de redução em Windows

##### On Mac OS 

O tamanho da janela é reduzido a seu tamanho inicial (seu tamanho antes de ser maximizada). Se o parâmetro janela for omitido, a janela do primeiro plano do processo atual retorna a seu tamanho inicial.  

![](../assets/en/commands/pict39370.en.png)  
  
Caixa de zoom/redução em Mac OS  
  
Se as janelas às quais forem aplicados este comando não forem maximizadas previamente (manualmente ou utilizando [MAXIMIZE WINDOW](maximize-window.md)), ou se o tipo de janela não incluir uma caixa de zoom, o comando não tem efeito. Para maior informação sobre tipos de janelas, consulte a seção *Tipos de Janelas*.  
  
**Nota**: esta função não deve se confundir com a redução de uma janela a um botão (Windows) ou no Dock (Mac OS), a qual é gerada através de um clique no botão abaixo:

![](../assets/en/commands/pict39371.en.png)  

Windows

![](../assets/en/commands/pict39372.en.png)  
Mac OS

#### Ver também 

[MAXIMIZE WINDOW](maximize-window.md)  
[REDUCE RESTORE WINDOW](reduce-restore-window.md)  