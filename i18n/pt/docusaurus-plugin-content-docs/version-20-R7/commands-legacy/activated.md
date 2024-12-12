---
id: activated
title: Activated
slug: /commands/activated
displayed_sidebar: docs
---

<!--REF #_command_.Activated.Syntax-->**Activated**  : Boolean<!-- END REF-->
<!--REF #_command_.Activated.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devolve True se o ciclo de execução está em ativação |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Activated.Summary-->O comando **Activated** retorna **True** em um método de formulário quando a janela que contém o formulário passa ao primeiro plano.<!-- END REF--> 

**Nota:** este comando é equivalente a usar [Form event code](form-event-code.md) e provar se devolve o evento On Activate.

**Advertência:** não coloque um comando como [TRACE](trace.md) ou [ALERT](alert.md) na fase **Activated** do formulário, isso provocará um ciclo infinito.

**Nota:** para que se gere o ciclo de execução **Activated** , tenha certeza de que o evento On Activate tenha sido selecionado no ambiente Desenho. 

#### Ver também 

[Deactivated](deactivated.md)  
[Form event code](form-event-code.md)  