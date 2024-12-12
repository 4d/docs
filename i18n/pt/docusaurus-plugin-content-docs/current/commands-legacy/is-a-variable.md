---
id: is-a-variable
title: Is a variable
slug: /commands/is-a-variable
displayed_sidebar: docs
---

<!--REF #_command_.Is a variable.Syntax-->**Is a variable** ( *umPonteiro* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a variable.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| umPointer | Pointer | &#8594;  | Ponteiro a ser testado |
| Resultado | Boolean | &#8592; | TRUE= Ponteiro aponta a variável FALSE = Ponteiro não aponta a variável |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is a variable.Summary-->O comando Is a variable devolve True se o ponteiro passado em *umPonteiro* referenciar uma variável definida.<!-- END REF--> Devolve False em todos os outros casos (ponteiro até um campo ou tabela, ponteiro Nil, etc.). 

 Se você quer conhecer o nome da variável que está sendo apontada ou o número do campo, você pode utilizar o comando [RESOLVE POINTER](resolve-pointer.md). 

#### Ver também 

[Is nil pointer](is-nil-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  