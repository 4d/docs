---
id: hide-menu-bar
title: HIDE MENU BAR
slug: /commands/hide-menu-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE MENU BAR.Syntax-->**HIDE MENU BAR**<!-- END REF-->
<!--REF #_command_.HIDE MENU BAR.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.HIDE MENU BAR.Summary-->O comando HIDE MENU BAR torna invisível a barra de menus.<!-- END REF-->  

Se a barra de menus já estiver oculta, o comando não faz nada  

#### Exemplo 

O método abaixo mostra um registro em toda a tela (Macintosh) até que dê um clique: 

```4d
 HIDE TOOL BAR
 HIDE MENU BAR
 Open window(-1;-1;1+Screen width;1+Screen height;Alternate dialog box)
 FORM SET INPUT([Pinturas];"Full Screen 800")
 DISPLAY RECORD([Pinturas])
 Repeat
    MOUSE POSITION($vlX;$vlY;$vlBoton)
 Until($vlBoton#0)
 CLOSE WINDOW
 SHOW MENU BAR
 SHOW TOOL BAR
```

**Nota:** em Windows, a janela estará limitada pelos limites da janena da aplicação. 

#### Ver também 

[HIDE TOOL BAR](hide-tool-bar.md)  
[SHOW MENU BAR](show-menu-bar.md)  
[SHOW TOOL BAR](show-tool-bar.md)  