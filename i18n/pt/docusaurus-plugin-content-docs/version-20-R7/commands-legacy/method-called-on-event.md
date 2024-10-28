---
id: method-called-on-event
title: Method called on event
slug: /commands/method-called-on-event
displayed_sidebar: docs
---

<!--REF #_command_.Method called on event.Syntax-->**Method called on event**  -> Resultado<!-- END REF-->
<!--REF #_command_.Method called on event.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome de método de chamada de evento |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Method called on event.Summary-->O comando Method called on event devolve o nome do método instalado pelo comando [ON EVENT CALL](on-event-call.md "ON EVENT CALL").<!-- END REF--> 

Se nenhum método do tipo for instalado, uma cadeia vazia ("") é retornada.

#### Ver também 

[ON EVENT CALL](on-event-call.md)  