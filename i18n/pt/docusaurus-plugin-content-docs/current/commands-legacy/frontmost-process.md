---
id: frontmost-process
title: Frontmost process
slug: /commands/frontmost-process
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost process.Syntax-->**Frontmost process** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Frontmost process.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Número do processo para a primeira janela não flutuante |
| Resultado | Integer | &#8592; | Número do processo cujas janelas estão em primeiro plano |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Frontmost process.Summary-->Frontmost process devolve o número do processo cuja janela (ou janelas) estão no primeiro plano.<!-- END REF--> 

Quando tiver uma ou mais janelas flutuantes abertas, há duas camadas de janelas:

* janelas padrão
* janelas flutuantes

Se a função Frontmost process é utilizada no método de formulário ou em um método de objeto de uma janela flutuante, a função devolve o número de referência da janela flutuante que se encontra mais adiante na capa de janelas flutuantes. Se especifica o parâmetro opcional *\**, a função devolve o número de referência do processo da janela ativa que se encontra no primeiro plano nas camadas de janelas padrão.

#### Exemplo 

Ver o exemplo para [BRING TO FRONT](bring-to-front.md "BRING TO FRONT").

#### Ver também 

[BRING TO FRONT](bring-to-front.md)  
[WINDOW LIST](window-list.md)  