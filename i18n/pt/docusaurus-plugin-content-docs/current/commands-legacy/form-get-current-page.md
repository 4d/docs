---
id: form-get-current-page
title: FORM Get current page
slug: /commands/form-get-current-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get current page.Syntax-->**FORM Get current page** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.FORM Get current page.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Retorna o número da página de subformulário atual |
| Resultado | Integer | &#8592; | Número da página de formulário exibida atualmente |

<!-- END REF-->

## Descrição 

<!--REF #_command_.FORM Get current page.Summary-->O comando **FORM Get current page** retorna o número da página atual do formulário mostrado atualmente ou do formulário atual carregado via o comando [FORM LOAD](../commands/form-load.md).<!-- END REF--> 

O parâmetro *\** é útil quando o comando é chamado no contexto de um subformulário em página que contém muitas páginas. Neste caso, quando passar este parâmetro, o comando muda a página do subformulário atual (a que chamou o comando). Por padrão, quando o parâmetro *\** é omitido, o comando é sempre aplicado ao formulário pai.

## Exemplo 

Em um formulário, se seleciona um comando de menu da barra de menu ou quando o formulário recebe uma chamada de outro processo, pode realizar diferentes ações dependendo da página do formulário mostrada atualmente. Neste exemplo, você escreve:

```4d
  // Método de formulário [minhaTabela];"meuForm"
 Case of
    :(FORM Event.code=On Load)
  // ...
    :(FORM Event.code=On Unload)
  // ...
    :(FORM Event.code=On Menu Selected)
       $vlNumeroMenu:=Menu selected>>16
       $vlNumeroCmdo:=Menu selected & 0xFFFF
       Case of
          :($vlNumeroMenu=...)
             Case of
                :($vlNumeroCmdo=...)
                :(FORM Get current page=1)
  // Efetuar uma ação apropriada para a página 1
                :(FORM Get current page=2)
  // Efetuar uma ação apropriada para a página 2
  // ...
                :($vlItemNumber=...)
  // ...
             End case
          :($vlMenuNumber=...)
  // ...
       End case
    :(FORM Event.code=On Outside Call)
       Case of
          :(FORM Get current page=1)
  // Dar uma resposta apropriada para a página 1
          :(FORM Get current page=2)
  // Dar uma resposta apropriada para a página 2
       End case
  // ...
 End case
```

## Ver também 

[FORM FIRST PAGE](form-first-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 276 |
| Thread-seguro | &cross; |


