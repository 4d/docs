---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->



## Descrição 

<!--REF #_command_.FORM NEXT PAGE.Summary-->FORM NEXT PAGE modifica a página atual exibida do formulário para mostrar a página seguinte.<!-- END REF--> Se não é mostrado nenhum formulário ou for carregado pelo comando [FORM LOAD](../commands/form-load), ou se mostrar a última página do formulário, NEXT PAGE não faz nada.

## Exemplo 

O seguinte exemplo é um método de uma linha, chamado por um comando de menu, o qual mostra a página do formulário que segue a página mostrada atualmente:

```4d
 FORM NEXT PAGE
```

## Ver também 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  
