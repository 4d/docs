---
id: next-page
title: NEXT PAGE
slug: /commands/next-page
displayed_sidebar: docs
---

<!--REF #_command_.NEXT PAGE.Syntax-->**NEXT PAGE**<!-- END REF-->
<!--REF #_command_.NEXT PAGE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.NEXT PAGE.Summary-->NEXT PAGE modifica a página atual exibida do formulário para mostrar a página seguinte.<!-- END REF--> Se não é mostrado nenhum formulário ou for carregado pelo comando [FORM LOAD](../commands/form-load.md), ou se mostrar a última página do formulário, NEXT PAGE não faz nada.

#### Exemplo 

O seguinte exemplo é um método de uma linha, chamado por um comando de menu, o qual mostra a página do formulário que segue a página mostrada atualmente:

```4d
 FORM NEXT PAGE
```

#### Ver também 

[FIRST PAGE](first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[LAST PAGE](last-page.md)  
[PREVIOUS PAGE](previous-page.md)  