---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

## Descrição 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE modifica a página atual de um formulário para mostrar a página anterior.<!-- END REF--> Se nenhum formulário é mostrado ou carregado pelo comando \[#cmd id="1103"/\] ou se já é mostrada a primeira página do formulário, PREVIOUS PAGE não faz nada.

## Exemplo 

O exemplo a seguir é um método de uma linha chamado por um comando de menu, o qual mostra a página do formulário anterior a página mostrada atualmente:

```4d
 FORM PREVIOUS PAGE
```

## Ver também 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  