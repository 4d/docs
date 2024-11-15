---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Altura (expresso em pixels) da barra de ferramentas ou 0 se a barra de ferramentas estiver escondida |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Tool bar height.Summary-->O comando Tool bar height devolve a altura da barra de ferramentas visível atualmente, expressada em píxels.<!-- END REF--> Dependendo do contexto, pode ser a barra de ferramentas de modo Desenho 4D, ou uma barra de ferramentas personalizada criada com [Open form window](open-form-window.md) (a barra de ferramentas de modo Desenho se oculta automaticamente quando é mostrada uma barra de ferramentas personalizada).

Se não se mostrar nenhuma barra de ferramentas, o comando devolve 0.

#### Ver também 

[HIDE TOOL BAR](hide-tool-bar.md)  
[Menu bar height](menu-bar-height.md)  
[SHOW TOOL BAR](show-tool-bar.md)  