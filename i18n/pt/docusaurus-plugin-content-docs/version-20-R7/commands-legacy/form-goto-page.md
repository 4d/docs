---
id: form-goto-page
title: FORM GOTO PAGE
slug: /commands/form-goto-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM GOTO PAGE.Syntax-->**FORM GOTO PAGE** ( *numPag* {; *} )<!-- END REF-->
<!--REF #_command_.FORM GOTO PAGE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numPag | Integer | &#8594;  | Exibir página de formulário |
| * | Operador | &#8594;  | Mudar página do subformulário atual |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM GOTO PAGE.Summary-->**FORM GOTO PAGE** modifica a página atual de um formulário para mostrar a página especificada por *numPag*.<!-- END REF-->

Se não for mostrado nenhum formulário ou carregado pelo comando [FORM LOAD](form-load.md) ou se *numPag* corresponde à página atual do formulário, **FORM GOTO PAGE** não faz nada. Se *numPag* é superior ao número de páginas do formulário, a última página é mostrada. Se *numPag* é menor que um, a primeira página é mostrada.  
  
O parâmetro *\** é útil quando o comando é chamado no contexto de um subformulário em página que contém muitas páginas. Neste caso, quando passar este parâmetro, o comando muda a página do subformulário atual (a que chamou o comando). Por padrão, quando o parâmetro *\** é omitido, o comando é sempre aplicado ao formulário pai.

##### Sobre os comandos de gestão de páginas de formulário 

Os botões de ação automática realizam as mesmas tarefas que os comandos [FIRST PAGE](first-page.md), [LAST PAGE](last-page.md), [NEXT PAGE](next-page.md), [PREVIOUS PAGE](previous-page.md) e **FORM GOTO PAGE** que você pode aplicar a objetos tais como abas, list box drop downs, etc. Sempre que seja possível, utilize botões de ação automática ao invés dos comandos. 

Os comandos de página podem ser utilizadas com formulários de entrada ou com formulários de saída em diálogos.Os formulários de saída utilizam apenas a primeira página. Um formulário sempre tem ao menos uma página, a primeira página. Lembre que sem importar o número de páginas que um formulário tenha, só existe um método de formulário para cada formulário. 

* Utilize o comando [FORM Get current page](form-get-current-page.md) para saber que página está sendo mostrada.
* Utilize [Form event code](form-event-code.md) On Page Change que é gerado cada vez que a página atual do formulário muda.

**Nota:** quando **desenha** um formulário, pode trabalhar com as páginas da 1 à X, como também com a página 0, na qual põe os objetos que aparecem em todas as páginas. Quando **utiliza** um formulário, e chama os comandos de página, você trabalha com as páginas da 1 a X; a página 0 é combinada automaticamente com a página que está sendo mostrada.

#### Exemplo 

O exemplo a seguir é um método de objeto para um botão que mostra uma página específica, a página 3: 

```4d
 FORM GOTO PAGE(3)
```

#### Ver também 

[FIRST PAGE](first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[LAST PAGE](last-page.md)  
[NEXT PAGE](next-page.md)  
[PREVIOUS PAGE](previous-page.md)  