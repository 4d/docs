---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *lista* ) : Integer<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referência da lista a copiar |
| Resultado | Integer | &#8592; | Número de referência da nova lista |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Copy list.Summary-->O comando Copy list duplica a lista cujo número de referência é passado no parâmetro *lista* e retorna o número de referência da nova lista.<!-- END REF-->

Quando tiver terminado de utilizar a nova lista, chame a [CLEAR LIST](clear-list.md "CLEAR LIST") para apagá-la.

#### Ver também 

[CLEAR LIST](clear-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  