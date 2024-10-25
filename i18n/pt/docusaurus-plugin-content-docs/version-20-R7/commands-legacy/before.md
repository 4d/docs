---
id: before
title: Before
slug: /commands/before
displayed_sidebar: docs
---

<!--REF #_command_.Before.Syntax-->**Before**  -> Resultado<!-- END REF-->
<!--REF #_command_.Before.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Devolve True se o ciclo de execução é um Before |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Before.Summary-->**Before** devolve True para o ciclo de execução Before.<!-- END REF-->

Para que se gere o ciclo de execução **Before** tenha certeza de que a propriedade do evento On Load tenha sido selecionado no ambiente Desenho, nas propriedades do formulário ou dos objetos.

**Nota:** este comando é equivalente a usar [Form event code](form-event-code.md) e provar se devolve o evento On Load.

#### Ver também 

[Form event code](form-event-code.md)  