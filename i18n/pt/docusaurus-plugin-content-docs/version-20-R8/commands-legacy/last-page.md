---
id: last-page
title: LAST PAGE
slug: /commands/last-page
displayed_sidebar: docs
---

<!--REF #_command_.LAST PAGE.Syntax-->**LAST PAGE**<!-- END REF-->
<!--REF #_command_.LAST PAGE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LAST PAGE.Summary-->LAST PAGE modifica a página atual de um formulário para mostrar a última página do formulário.<!-- END REF--> Se não é mostrado nenhum formulário ou carregado pelo comando [FORM LOAD](../commands/form-load.md), ou se já é mostrada ultima página do formulário, LAST PAGE não faz nada.

#### Exemplo 

O exemplo é um método de uma linha, chamado por um comando de menu, o qual mostra a última página do formulário:

```4d
 FORM LAST PAGE
```

#### Ver também 

[FIRST PAGE](first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[NEXT PAGE](next-page.md)  
[PREVIOUS PAGE](previous-page.md)  