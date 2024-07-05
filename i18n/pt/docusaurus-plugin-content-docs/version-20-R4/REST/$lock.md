---
id: lock
title: $lock
---


Bloqueia e desbloqueia uma entidade utilizando o [mecanismo pessimista](../ORDA/entities.md#pessimistic-lock).


## Sintaxe

Para bloquear uma entidade para outras sessões e processos 4D:

```
/?$lock=true
```


Para desbloquear a entidade para outras sessões e processos 4D:

```
/?$lock=false
```


A propriedade [`lockKindText`](../API/EntityClass.md#lock) é "Locked by session".


### Descrição

Os bloqueios accionados pela API REST são colocados ao nível da  [sessão](authUsers.md#opening-sessions).

Uma entidade bloqueada é vista como *bloqueada* (ou seja, as acções de bloquear/desbloquear/atualizar/eliminar não são possíveis) por:

- outras sessões REST
- Processos 4D (cliente/servidor, datastore remoto, autónomo) em execução no servidor REST.

Uma entidade bloqueada pela API REST só pode ser desbloqueada:

- pelo seu locker, ou seja, um `/?$lock=false` na sessão REST que define `/?$lock=true`
- ou se o tempo limite de inatividade da sessão []($directory.md) for atingido (a sessão é encerrada).

### Resposta

Um pedido `?$lock` devolve um objeto JSON com `"result"=true` se a operação de bloqueio for bem sucedida e `"result"=false` se falhar.

O objeto "__STATUS" devolvido tem as seguintes propriedades:

| Propriedade  |                | Tipo    | Descrição                                                                                                                                                   |
| ------------ | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                |         | ***Disponível apenas em caso de sucesso:***                                                                                                                 |
| success      |                | boolean | true se a ação de bloqueio for bem sucedida (ou se a entidade já estiver bloqueada na sessão atual), false caso contrário (não devolvido neste caso).       |
|              |                |         | ***Disponível apenas em caso de erro:***                                                                                                                    |
| status       |                | number  | Código de erro, ver abaixo                                                                                                                                  |
| statusText   |                | text    | Descrição do erro, ver abaixo                                                                                                                               |
| lockKind     |                | number  | Código de bloqueio                                                                                                                                          |
| lockKindText |                | text    | "Bloqueado por sessão" se bloqueado por uma sessão REST, "Bloqueado por registo" se bloqueado por um processo 4D                                            |
| lockInfo     |                | object  | Informações sobre a origem do bloqueio. Retorna propriedades dependendo da origem da trava (processo 4D ou sessão REST)                                     |
|              |                |         | ***Disponível só para um processo trava 4D:***                                                                                                              |
|              | task_id        | number  | Process ID                                                                                                                                                  |
|              | user_name      | text    | Nome de usuário de sessão na máquina                                                                                                                        |
|              | user4d_alias   | text    | Nome ou apelido do usuário 4D                                                                                                                               |
|              | user4d_id      | number  | Id do usuário no diretório do banco de dados 4D                                                                                                             |
|              | host_name      | text    | Nome da máquina                                                                                                                                             |
|              | task_name      | text    | Nome de processo                                                                                                                                            |
|              | client_version | text    | Liberação do cliente                                                                                                                                        |
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

