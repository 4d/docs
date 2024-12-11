---
id: reject-new-remote-connections
title: REJECT NEW REMOTE CONNECTIONS
slug: /commands/reject-new-remote-connections
displayed_sidebar: docs
---

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Syntax-->**REJECT NEW REMOTE CONNECTIONS** ( *rejeitarStatus* )<!-- END REF-->
<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rejeitarStatus | Boolean | &#8594;  | Verdadeiro se novas conexões forem rejeitadas, senão false |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.REJECT NEW REMOTE CONNECTIONS.Summary-->O comando **REJECT NEW REMOTE CONNECTIONS** especifica se o servidor de aplicações aceita ou não as novas conexões de usuários remotos.<!-- END REF--> 

Em *rejectStatus*, passe **true** para rejeitar novas conexões remotas. Ao passar **false**, especifica que são permitidas novas conexões remotas.

**Nota**: este comando só pode ser executado em 4D Server. Se o método for utilizado localmente ou de forma remota em um único cliente, **REJECT NEW REMOTE CONNECTIONS** não faz nada.

#### Exemplo 

Se quiser rejeitar ou aceitar as novas conexões de clientes:

```4d
  // Rejeitar as novas conexões
 REJECT NEW REMOTE CONNECTIONS(True)
  // Executar a operação de manutenção
 ...
  // Aceitar as novas conexões
 REJECT NEW REMOTE CONNECTIONS(False)
```

#### Ver também 

[DROP REMOTE USER](drop-remote-user.md)  
[Application info](application-info.md)  
[SOAP REJECT NEW REQUESTS](soap-reject-new-requests.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1635 |
| Thread-seguro | &check; |
| Proibido no servidor ||


