---
id: execute-on-client
title: EXECUTE ON CLIENT
slug: /commands/execute-on-client
displayed_sidebar: docs
---

<!--REF #_command_.EXECUTE ON CLIENT.Syntax-->**EXECUTE ON CLIENT** ( *nomeCliente* ; *nomeMetodo* {; *param*}{; *param2* ; ... ; *paramN*} )<!-- END REF-->
<!--REF #_command_.EXECUTE ON CLIENT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomeCliente | Text | &#8594;  | Nome da sessão 4D Client |
| nomeMetodo | Text | &#8594;  | Nome do método a ser executado |
| param | &#8594;  | Parâmetro(s) do método |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.EXECUTE ON CLIENT.Summary-->O comando **EXECUTE ON CLIENT** é usado para forçar a execução do método *nomeMetodo*, com lo parâmetros *param1.<!-- END REF-->.. paramN*, se necessário, no cliente 4D registrado de nome *nomeCliente*.. O nome registrado do cliente 4D é definido pelo comando [REGISTER CLIENT](register-client.md). 

Este comando pode ser chamado desde um cliente 4D ou desde um procedimento armazenado em 4D Server.

Se o método requer um ou mais parâmetros, passe-os depois do nome do método. 

A execução do método no cliente 4D é efetuada num processo criado automaticamente na máquina cliente, e seu nome será o nome de registro de 4D Client.

Se este comando é chamado muitas vezes para o mesmo 4D Client, as ordens de execução serão empilhadas. Portanto, os métodos serão tratados um depois do outro em modo assíncrono. Quanto mais métodos estejam empilhados, maior será a carga de trabalho para o 4D Client. Agora você pode conhecer o estado da carga de trabalho de cada cliente utilizando o comando [GET REGISTERED CLIENTS](get-registered-clients.md).

**Nota:** O empilhamento de ordens de execução não pode ser modificado ou detido, a não ser que o cliente 4D seja removido do registro com a ajuda do comando [UNREGISTER CLIENT](unregister-client.md).

Pode executar simultaneamente o mesmo método em vários ou em todos os 4D Clients registrados. Para fazê-lo, utilize o caractere arroba (@) no parâmetro *nomeCliente*.

#### Exemplo 1 

Vamos supor que você quer executar o método “GerarNums” na máquina cliente “Client1”:

```4d
 EXECUTE ON CLIENT("Client1";"GerarNums";12;$a;"Text")
```

#### Exemplo 2 

Se você quiser que todos os clientes executem o método “VazioTemp”:

```4d
 EXECUTE ON CLIENT("@";"EmptyTemp")
```

#### Exemplo 3 

Consulte o exemplo do comando [REGISTER CLIENT](register-client.md).

#### Variáveis e conjuntos do sistema 

A variável do sistema **OK é** igual a 1 se o 4D Server recebeu corretamente o pedido de execução de um método; contudo, isto não é garantia de que o método foi executado pelo 4D Client.

#### Ver também 

[Execute on server](execute-on-server.md)  
[GET REGISTERED CLIENTS](get-registered-clients.md)  
[REGISTER CLIENT](register-client.md)  
[UNREGISTER CLIENT](unregister-client.md)  