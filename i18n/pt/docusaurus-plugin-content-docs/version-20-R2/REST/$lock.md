---
id: lock
title: '$lock'
---


Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).


## Sintaxe

To lock an entity for other sessions and 4D processes:

```
/?$lock=true
```


To unlock the entity for other sessions and 4D processes:

```
/?$lock=false
```


A propriedade [`lockKindText`](../API/EntityClass.md#lock) é "Locked by session".


### Descrição

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level.

A locked entity is seen as *locked* (i.e. lock / unlock / update / delete actions are not possible) by:

- outras sessões REST
- 4D processes (client/server, remote datastore, standalone) running on the REST server.

An entity locked by the REST API can only be unlocked:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### Resposta

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed.

The returned "__STATUS" object has the following properties:

| Propriedade  |                | Tipo    | Descrição                                                                                                                                                   |
| ------------ | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                |         | ***Disponível apenas em caso de sucesso:***                                                                                                                 |
| success      |                | boolean | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).             |
|              |                |         | ***Disponível apenas em caso de erro:***                                                                                                                    |
| status       |                | number  | Código de erro, ver abaixo                                                                                                                                  |
| statusText   |                | text    | Descrição do erro, ver abaixo                                                                                                                               |
| lockKind     |                | number  | Código de bloqueio                                                                                                                                          |
| lockKindText |                | text    | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                               |
| lockInfo     |                | object  | Informações sobre a origem do bloqueio. Retorna propriedades dependendo da origem da trava (processo 4D ou sessão REST)                                     |
|              |                |         | ***Disponível só para um processo trava 4D:***                                                                                                              |
|              | task_id        | number  | Process ID                                                                                                                                                  |
|              | user_name      | text    | Nome de usuário de sessão na máquina                                                                                                                        |
|              | user4d_alias   | text    | Nome ou apelido do usuário 4D                                                                                                                               |
|              | user4d_id      | number  | Id do usuário no diretório do banco de dados 4D                                                                                                             |
|              | host_name      | text    | Nome da máquina                                                                                                                                             |
|              | task_name      | text    | Nome de processo                                                                                                                                            |
|              | client_version | text    | Versão do cliente                                                                                                                                           |
|              |                |         | ***Disponível só para um processo trava REST:***                                                                                                            |
|              | host           | text    | URL que bloqueou a entidade (por exemplo, "127.0.0.1:8043")                                                                                                 |
|              | IPAddr         | text    | Endereço IP da trava (por exemplo. "127.0.0.1")                                                                                                             |
|              | recordNumber   | number  | Número de registo do registo bloqueado                                                                                                                      |
|              | userAgent      | text    | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |


Os seguintes valores podem ser devolvidos nas propriedades *status* e *statusText* do objeto *__STATUS* em caso de erro:

| status | statusText                      | Comentário                                                                                                         |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 2      | "Stamp has changed"             | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).    |
| 3      | "Already locked"                | A entidade está fechada por uma fechadura pessimista.                                                              |
| 4      | "Other error"                   | Um erro grave é um erro de banco de dados de baixo nível (por exemplo, chave duplicada), um erro de hardware, etc. |
| 5      | "Entity does not exist anymore" | A entidade não existe mais nos dados.                                                                              |




## Exemplo


Bloqueamos uma entidade num primeiro navegador:

```
GET /rest/Customers(1)/?$lock=true
```

**Responsa:**

```
{
    "result": true,
    "__STATUS": {
        "success": true
    }
}
```

Num segundo navegador (outra sessão), enviamos o mesmo pedido.

**Responsa:**

```
{
    "result":false,
    "__STATUS":{
        "status":3,
        "statusText":"Already Locked",
        "lockKind":7,
        "lockKindText":"Locked By Session",
    }
}
        }
    }
}
```

