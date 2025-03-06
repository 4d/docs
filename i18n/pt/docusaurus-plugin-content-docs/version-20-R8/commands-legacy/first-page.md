---
id: first-page
title: FIRST PAGE
slug: /commands/first-page
displayed_sidebar: docs
---

<!--REF #_command_.FIRST PAGE.Syntax-->**FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FIRST PAGE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FIRST PAGE.Summary-->FORM FIRST PAGE modifica a página atual do formulário pela primeira página do formulário.<!-- END REF--> Se não mostra nenhum formulário, ou carregado pelo comando [FORM LOAD](../commands/form-load.md), ou se a primeira página do formulário já se mostra, FIRST PAGE não faz nada.

#### Exemplo 

O exemplo a seguir é um método de uma linha, chamado por um comando de menu, o qual mostra a primeira página de um formulário.

```4d
 FORM FIRST PAGE
```

#### Ver também 

[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[LAST PAGE](last-page.md)  
[NEXT PAGE](next-page.md)  
[PREVIOUS PAGE](previous-page.md)  