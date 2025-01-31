---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** {( *usuario* )} : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| usuario | Integer | &#8594;  | Alias do usuário ou usuário 4D da conta. |
| Resultado | Text | &#8592; | Nome de usuário do usuário atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current user.Summary-->Current user retorna o apelido ou nome de usuário do usuário atual.<!-- END REF-->

De forma predeterminada, se for omitido o parâmetro *usuario*, se tiver definido um apelido (alias) para o usuário com [SET USER ALIAS](set-user-alias.md) durante a sessão, o comando devolve o alias do usuário. Do contrário, devolve o nome de conta de usuário 4D.

No parâmetro *usuário* opcional, pode especificar qual dos abaixo quer devolver:

| Constante                | Valor | Comentário                                                                                                                                                                        |
| ------------------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1     | Nome de conta de usuário 4D                                                                                                                                                       |
| 4D user alias            | 2     | Alterna o nome para conta usuário 4D se definida com o comando [SET USER ALIAS](set-user-alias.md) ou uma string vazia ("") se nenhum apelido for definido para o usuário 4D.     |
| 4D user alias or account | 0     | Alterna o nome para a conta de usuário 4D como definido com o comando [SET USER ALIAS](set-user-alias.md), ou o nome de conta 4D normal de usuário se nenhum apelido for definido |

#### Exemplo 

Ver exemplo do comando [User in group](user-in-group.md).

#### Ver também 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  
[User in group](user-in-group.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 182 |
| Thread-seguro | &check; |


