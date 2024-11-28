---
id: in-header
title: In header
slug: /commands/in-header
displayed_sidebar: docs
---

<!--REF #_command_.In header.Syntax-->**In header**  : Boolean<!-- END REF-->
<!--REF #_command_.In header.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devolve True se o ciclo de execução é In header |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.In header.Summary-->**In header** devolve True para o ciclo de execução In header.<!-- END REF--> 

Para que seja gerado o ciclo de execução **In header**, tenha certeza de que o evento On Header, tenha sido selecionado no ambiente Desenho, nas propriedades do formulário ou dos objetos. 

**Nota:** este comando é equivalente a utilizar [Form event code](../commands/form-event-code.md) e provar se devolve o evento On Header

#### Ver também 

*\_o\_During*  
[In break](in-break.md)  
[In footer](in-footer.md)  