---
id: application-info
title: Application info
slug: /commands/application-info
displayed_sidebar: docs
---

<!--REF #_command_.Application info.Syntax-->**Application info** : Object<!-- END REF-->
<!--REF #_command_.Application info.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Object | &#8592; | Informação sobre a atividade da aplicação ativa |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Application info.Summary-->O comando **Application info** retorna um objeto que traz informação detalhada sobre a atividade da aplicação ativa e da configuração de rede.<!-- END REF-->

O comando pode ser executado em aplicações rodando tanto em modo standalone e ambientes cliente/servidor. A informação retornada depende de onde **Application info** for executado. Por exemplo, se executado a partir de um 4D remoto, a informação se aplica apenas a uma workstation remota. Entretanto, se o comando for selecionado, a informação retornada aplica ao servidor.

O objeto retornado contém as propriedades abaixo:

| **Propriedade**         | **Tipo**   | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | **Exemplo**                                     |
| ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| cpuUsage(\*)            | number     | Porcentagem de processamento usado por 4D. Note que para Macs, o número exibido é para 1 núcleo e representa a média do processador.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 10.03                                           |
| headless                | boolean    | True se a aplicação estiver rodando em modo headless. Valores possíveis: true, false. Para saber mais, veja *Interface da linha de comando*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | false                                           |
| IPAddressesAllowDeny    | collection | Só em 4D Servidor. Retorna uma coleção de endereços IP que são permitidos ou negados nas configurações de banco de dados. Para saber mais, veja *IP configuration*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | \[{"mode": "allow", "ip": "192.168.\*"},{...}\] |
| \[ \].mode              | string     | Propriedade descrevendo se o endereço IP é permitido ou não. Valores possíveis: : "allow" ou "deny"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | "allow"                                         |
| \[ \].ip                | string     | IP addresses                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | "192.167.1.2"                                   |
| IPAddressesToListen     | collection | Só em 4D Servidor. Retorna o endereço IP que o Servidor 4D escuta. Para saber mais, veja *IP configuration*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | \["192.168.18.12","192.168.18.10"\]             |
| launchedAsService       | boolean    | True se a aplicação for lançada como um serviço. Valores possíveis: true, false. Para saber mais, veja *Registrar um banco de dados como serviço*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | false                                           |
| networkInputThroughput  | number     | A taxa de dados (bytes/segundos) para input de rede da máquina rodando a aplicação. Em modo remoto, a taxa para a máquinia remota é retornada. Para saber mais, veja *Página Monitor*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 37311495                                        |
| networkOutputThroughput | number     | A taxa de dados (bytes/segundos) para output de rede da máquina rodando a aplicação. Em modo remoto, a taxa para a máquina remota é retornada. Para saber mais, veja *Página Monitor*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 88058023                                        |
| useLegacyNetworkLayer   | boolean    | True se a capa de rede legado usada para a aplicação servidor. Não retorna nada em modo standalone. Valores possíveis: true, false. Para saber mais, veja *Ativar ou desativar a capa de rede antiga*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | false                                           |
| newConnectionsAllowed   | boolean    | Só em 4D Server. True se novas conexões forem permitidas. Valores possíveis: true, false. Para saber mais, veja .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | true                                            |
| pid                     | number     | ID da instância do processo da aplicação 4D (fornecida pelo OS) -- permite identificar cada instância 4D executando, por exemplo a partir de um script externo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 16600                                           |
| portID                  | number     | 4D Server: porta para listening ativo, 4D remote: porta para conexões remotas. Não retorna nada em modo standalone. Minimum: 1\. Para saber mais, veja *Número de porta*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 19814                                           |
| remoteDebuggerSessionID | text       | Sessão ID da aplicação remota a qual o depurador servidor está anexado. Essa ID também é retornada por [Process activity](../commands/process-activity.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | "A838A40BJN3NJKH..."                            |
| TLSEnabled              | boolean    | True se TLS estiver ativado para comunicações cliente/servidor. Não retorna nada em modo standalone. Valores possíveis: true, false. Para saber mais, veja *O protocolo SSL e as conexões cliente/servidor*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | true                                            |
| uptime                  | number     | Tempo passado (em segundos) desde que o banco de dados 4D local foi aberto. Para conexões remotas, retorna o tempo decorrido desde que a conexão foi feita.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 143                                             |
| useLegacyNetworkLayer   | boolean    | True se a camada de rede legado for usada pelo servidor de aplicação. Não retornado em ambiente standalone. Possíveis valores: true, false. Para saber mais veja *Ativar ou desativar a capa de rede antiga*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | false                                           |
| useQUICNetworkLayer     | booleano   | True si la capa de red QUIC utilizada para el servidor de la aplicación y el servidor db4d (beta en 4D v20, ver *Página Compatibilidade*). No devuelto en entorno monopuesto. Valores posibles: true, false. Para más información ver este blog post.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | false                                           |
| volumeShadowCopyStatus  | string     | Retorna o estado do Serviço Volume Shadow Copy. Só para Windows. Para saber mais, veja *Usar Serviço Volume Shadow Copy em Windows*.  Valores possíveis: <table> <thead> <tr> <td>Constante</td> <td>Valor</td> <td>Comentário</td> </tr> </thead> <tbody> <tr> <td>vss available</td> <td>available</td> <td>O serviço está disponível<br/></td> </tr><tr> <td>vss error</td> <td>error</td> <td>O serviço experimentou um erro.</td> </tr><tr> <td>vss not available</td> <td>notAvailable</td> <td>O serviço não está disponível</td> </tr><tr> <td>vss update required</td> <td>updateRequired</td> <td>O serviço precisa ser atualizado</td> </tr> </tbody> </table> | "available"                                     |

(\*) Em Windows, deve ser iniciado previamente este contador, por exemplo, mediante uma chamada ao comando **Application info** em [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md).

#### Exemplo

O código abaixo retorna um objeto que contém informação sobre a aplicação que está rodando:

```4d
 var $appInfo : Object
 $appInfo:=Application info
```

Se o código for executado de um ambiente standalone, o objeto vai conter (por exemplo):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "uptime": 469,
  "headless": false,
  "pid": 16500,
  "networkInputThroughput": 377263157,
  "networkOutputThroughput": 12345242236
}
```

Se o código for executado de um cliente remoto 4D, o objeto vai conter (por exemplo):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.035875,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 143,
  "headless": false,
  "pid": 1550,
  "useLegacyNetworkLayer": true,
  "networkInputThroughput": 268047058,
  "networkOutputThroughput": 12207686274
}
```

Se o código for executado em 4D Server, o objeto contém (por exemplo):

```json
{
  "launchedAsService": false,
  "volumeShadowCopyStatus": "notAvailable",
  "cpuUsage": 10.016125,
  "portID": 19814,
  "TLSEnabled": false,
  "uptime": 192,
  "headless": false,
  "pid": 9560,
  "useLegacyNetworkLayer": true,
  "useQUICNetworkLayer": false,
  "newConnectionsAllowed": true,
  "IPAddressesToListen": [
    "192.168.18.8",
    "192.168.18.7"
  ],
  "IPAddressesAllowDeny": [
    {
      "mode": "allow",
      "ip": "192.168.*"
    },
    {
      "mode": "deny",
      "ip": "192.167.15.3"
    },
    {
      "mode": "allow",
      "ip": "192.167.1.2"
    }
  ],
  "networkInputThroughput": 149014925,
  "networkOutputThroughput": 80238805
}
```

#### Ver também 

[Execute on server](execute-on-server.md)  
[Get database parameter](get-database-parameter.md)  
[System info](system-info.md)  
[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1599 |
| Thread-seguro | &check; |


