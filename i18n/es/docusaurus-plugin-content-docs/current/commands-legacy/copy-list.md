---
id: copy-list
title: Copy list
slug: /commands/copy-list
displayed_sidebar: docs
---

<!--REF #_command_.Copy list.Syntax-->**Copy list** ( *lista* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Copy list.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | ListRef | &#x1F852; | Número de referencia de la lista a copiar |
| Resultado | ListRef | &#x1F850; | Número de referencia de la nueva lista |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Copy list.Summary-->El comando Copy list duplica la lista cuyo número de referencia se pasa en el parámetro *lista* y devuelve el número de referencia de la nueva lista.<!-- END REF-->

Una vez hay terminado de utilizar la nueva lista, llame a [CLEAR LIST](clear-list.md "CLEAR LIST") para borrarla.

#### Ver también 

[CLEAR LIST](clear-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  