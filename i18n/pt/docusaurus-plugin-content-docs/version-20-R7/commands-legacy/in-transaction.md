---
id: in-transaction
title: In transaction
slug: /commands/in-transaction
displayed_sidebar: docs
---

<!--REF #_command_.In transaction.Syntax-->**In transaction**  : Boolean<!-- END REF-->
<!--REF #_command_.In transaction.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Retorna TRUE se processo atual estiver na transação |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.In transaction.Summary-->O comando In transaction retorna **TRUE** se o processo atual estiver na transação, senão, retorna **FALSE**.<!-- END REF-->

#### Exemplo 

Se realiza as operações (adição, modificação, ou eliminação de registros) com múltiplos registros, pode encontrar registros bloqueados. Neste caso, para preservar a integridade dos dados, deve ter aberta uma transação, de modo que possa “devolver” toda a operação e deixar o banco intacto.  

 Se realizar a operação desde um trigger ou uma subrotina que pode ser chamado(a) em uma transação ou fora de transação, a utilização do comando In transaction permite verificar se foi o método do processo atual ou o método chamamento quem abriu uma transação. Se não for o caso, a transação nem ao menos começa, porque no caso de uma falha no processo, não seria possível desfazer as operações realizadas.  

#### Ver também 

[Active transaction](active-transaction.md)  
[CANCEL TRANSACTION](cancel-transaction.md)  
[START TRANSACTION](start-transaction.md)  
*Triggers*  
[VALIDATE TRANSACTION](validate-transaction.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 397 |
| Thread-seguro | &check; |
| Proibido no servidor ||


