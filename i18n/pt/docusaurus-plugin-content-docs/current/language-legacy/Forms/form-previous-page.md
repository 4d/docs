---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->



## Descrição 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE modifica a página atual de um formulário para mostrar a página anterior.<!-- END REF--> Se nenhum formulário é mostrado ou carregado pelo comando \[#cmd id="1103"/\] ou se já é mostrada a primeira página do formulário, FORM PREVIOUS PAGE não faz nada.

## Exemplo 

O exemplo a seguir é um método de uma linha chamado por um comando de menu, o qual mostra a página do formulário anterior a página mostrada atualmente:

```4d
 FORM PREVIOUS PAGE
```

## Ver também 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  