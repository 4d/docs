---
id: outside-call
title: Outside call
slug: /commands/outside-call
displayed_sidebar: docs
---

<!--REF #_command_.Outside call.Syntax-->**Outside call**  : Boolean<!-- END REF-->
<!--REF #_command_.Outside call.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devolve True se o ciclo de execução é Outside call |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Outside call.Summary-->**Outside call** retorna True para o ciclo de execução After.<!-- END REF--> 

Para que seja gerado o ciclo de execução **Outside call,** tenha certeza de que o evento On Outside call, tenha sido selecionado no ambiente Desenho, nas propriedades do formulário ou dos objetos.

**Nota:** este comando é equivalente a utilizar [Form event code](form-event-code.md) e provar se devolve o evento On Outside call.

#### Ver também 

[Form event code](form-event-code.md)  
[POST OUTSIDE CALL](post-outside-call.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 328 |
| Thread-seguro | &check; |
| Proibido no servidor ||


