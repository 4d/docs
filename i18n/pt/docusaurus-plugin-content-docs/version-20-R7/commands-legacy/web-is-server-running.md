---
id: web-is-server-running
title: WEB Is server running
slug: /commands/web-is-server-running
displayed_sidebar: docs
---

<!--REF #_command_.WEB Is server running.Syntax-->**WEB Is server running** : Boolean<!-- END REF-->
<!--REF #_command_.WEB Is server running.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True se o servidor Web está sendo executado, caso contrário False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WEB Is server running.Summary-->O comando **WEB Is server running** devolve **True** se o servidor web integrado 4D está executando e **False** se o servidor web está desligado.<!-- END REF-->

Este comando oferece o estado de funcionamento do servidor Web no qual se executa: 

| **Contexto de execução**                                 | **Devolve o estado de**   |
| -------------------------------------------------------- | ------------------------- |
| Aplicação independente 4D                                | servidor Web 4D local     |
| 4D Server                                                | servidor web de 4D Server |
| Modo remoto 4D (processo local)                          | servidor web 4D local     |
| Modo remoto 4D (procedimento armazenado 4D Server)       | servidor web 4D Server    |
| Modo remoto 4D (outro procedimento armazenado 4D remoto) | servidor web 4D remoto    |

#### Exemplo 

Você quer verificar que o servidor web se está executando:

```4d
 If(WEB Is server running)
    ... //fazer as ações apropriadas
 End if
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1313 |
| Thread-seguro | &check; |
| Proibido no servidor ||


