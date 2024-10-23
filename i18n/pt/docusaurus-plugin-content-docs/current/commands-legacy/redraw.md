---
id: redraw
title: REDRAW
slug: /commands/redraw
displayed_sidebar: docs
---

<!--REF #_command_.REDRAW.Syntax-->**REDRAW** ( *objeto* )<!-- END REF-->
<!--REF #_command_.REDRAW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objeto | any | &#8594;  | Tabela para a qual vai redesenhar o sub-formulário; ou Campo para o qual redesenhar a área; ou Variável para a qual redesenhar a área; ou List Box a ser atualizada; ou Formulário de tabela a redesenhar ou um navegador Web. |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.REDRAW.Summary-->Quando utilizar um método para modificar o conteúdo de um campo ou sub campo mostrado em um sub-formulário, deve executar REDRAW para ter certeza que o formulário esteja corretamente atualizado.<!-- END REF--> .  
  
No contexto dos list boxes em modo seleção,quando a instrução REDRAW for aplicada a um objeto de tipo list box provoca a atualização dos dados mostrados no objeto. Esta instrução deve ser chamada tipicamente depois de uma modificação dos dados nos registros da seleção.

#### Ver também 

[SET TIMER](set-timer.md)  