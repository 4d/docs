---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->O comando UNREGISTER CLIENT cancela o registro de uma máquina 4D Client.<!-- END REF--> O cliente deverá ter sido registrado pelo comando [REGISTER CLIENT](register-client.md).

**Nota:** O registro de um cliente 4D é cancelado automaticamente quando o usuário sai da aplicação. 

Se a máquina cliente não foi registrada anteriormente ou se o comando foi executado no 4D em modo local, o comando não faz nada.

#### Exemplo 

Consulte o exemplo do comando [REGISTER CLIENT](register-client.md) .

#### Variáveis e conjuntos do sistema 

Se o registro de um cliente é cancelado corretamente, a variável do sistema OK tem valor 1, do contrário tem valor 0.

#### Ver também 

[EXECUTE ON CLIENT](execute-on-client.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 649 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |
| Proibido no servidor ||


