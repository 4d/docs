---
id: is-nil-pointer
title: Is nil pointer
slug: /commands/is-nil-pointer
displayed_sidebar: docs
---

<!--REF #_command_.Is nil pointer.Syntax-->**Is nil pointer** ( *umPonteiro* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is nil pointer.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| umPointer | Pointer | &#8594;  | Ponteiros a ser testado |
| Resultado | Boolean | &#8592; | TRUE = ponteiro nulo (->[])FALSE = ponteiro válido a um objeto existente |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is nil pointer.Summary-->O comando **Is nil pointer** devolve True se o ponteiro que você passa em *umPonteiro* é Nulo (*\->\[\]*).<!-- END REF--> Devolve False em todos os outros casos (ponteiro a um campo, tabela ou variável).

Caso deseje conhecer o nome da variável apontada ou o número do campo, pode utilizar o comando [RESOLVE POINTER](resolve-pointer.md).

#### Exemplo 

```4d
 var $ptr : Pointer
 ...
 If(Is nil pointer($ptr))
 End if
  // é equivalente a
 If($ptr=Null)
 End if
```

#### Ver também 

[Is a variable](is-a-variable.md)  
[RESOLVE POINTER](resolve-pointer.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 315 |
| Thread-seguro | &check; |
| Proibido no servidor ||


