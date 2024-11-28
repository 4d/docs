---
id: deactivated
title: Deactivated
slug: /commands/deactivated
displayed_sidebar: docs
---

<!--REF #_command_.Deactivated.Syntax-->**Deactivated**  : Boolean<!-- END REF-->
<!--REF #_command_.Deactivated.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Retorna TRUE se o ciclo de execução é uma desativação |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Deactivated.Summary-->O comando Deactivated retorna TRUE em um método formulário de objeto quando a janela do primeiro plano do processo do primeiro plano, que contém ol formulário, passa ao segundo plano.<!-- END REF--> 

Para que seja gerado o ciclo de execução Deactivated, tenha certeza de que o evento On Deactivate, tenha sido selecionado no ambiente Desenho, nas propriedades do formulário ou dos objetos. 

**Nota:** este comando é equivalente a utilizar [Form event code](../commands/form-event-code.md) e provar se devolve o evento On Deactivate.

#### Ver também 

[Activated](activated.md)  
[Form event code](../commands/form-event-code.md)  