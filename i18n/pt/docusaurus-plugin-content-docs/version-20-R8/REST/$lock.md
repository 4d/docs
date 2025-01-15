---
id: lock
title: $lock
---

Bloquea y desbloquea una entidad utilizando el [mecanismo pesimista](../ORDA/entities.md#pessimistic-lock).

## Sintaxe

Para bloquear uma entidade para outras sessões e processos 4D:

```
/?$lock=true
```

Para desbloquear a entidade para outras sessões e processos 4D:

```
/?$lock=false
```

A [propriedade `lockKindText`](../API/EntityClass.md#lock) é "Locked by session".

### Descrição

Los bloqueos activados por la API REST se colocan al nivel de la [sesión](authUsers.md#opening-sessions).

Una entidad bloqueada se ve como _bloqueada_ (es decir, las acciones de bloqueo / desbloqueo / actualización / eliminación no son posibles) por:

- outras sessões REST
- Processos 4D (cliente/servidor, datastore remoto, autónomo) em execução no servidor REST.

Uma entidade bloqueada pela API REST só pode ser desbloqueada:

- por su bloqueador, es decir un `/?$lock=false` en la sesión REST que define `/?$lock=true`
- o si el [timeout de inactividad]($directory.md) de la sesión se alcanza (la sesión se cierra).

### Resposta

Una petición `?$lock` devuelve un objeto JSON con `"result"=true` si la operación de bloqueo se reutiliza y `"result"=false` si falla.

O objeto "__STATUS" devolvido tem as seguintes propriedades:

| Propriedade  |                                     | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------ | ----------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                                     |         | _**Disponível apenas em caso de sucesso:**_                                                                                                                                                                                                                                                                                                                                  |
| success      |                                     | boolean | true se a ação de bloqueio for bem sucedida (ou se a entidade já estiver bloqueada na sessão atual), false caso contrário (não devolvido neste caso).                                                                                                                                                                                  |
|              |                                     |         | _**Disponível apenas em caso de erro:**_                                                                                                                                                                                                                                                                                                                                     |
| status       |                                     | number  | Código de erro, ver abaixo                                                                                                                                                                                                                                                                                                                                                                   |
| statusText   |                                     | text    | Descrição do erro, ver abaixo                                                                                                                                                                                                                                                                                                                                                                |
| lockKind     |                                     | number  | Código de bloqueio                                                                                                                                                                                                                                                                                                                                                                           |
| lockKindText |                                     | text    | "Bloqueado por sessão" se bloqueado por uma sessão REST, "Bloqueado por registo" se bloqueado por um processo 4D                                                                                                                                                                                                                                                                             |
| lockInfo     |                                     | object  | Informações sobre a origem do bloqueio. Retorna propriedades dependendo da origem da trava (processo 4D ou sessão REST)                                                                                                                                                                                                                                   |
|              |                                     |         | _**Disponível só para um processo trava 4D:**_                                                                                                                                                                                                                                                                                                                               |
|              | task_id        | number  | Process ID                                                                                                                                                                                                                                                                                                                                                                                   |
|              | user_name      | text    | Nome de usuário de sessão na máquina                                                                                                                                                                                                                                                                                                                                                         |
|              | user4d_alias   | text    | Nome ou apelido do usuário 4D                                                                                                                                                                                                                                                                                                                                                                |
|              | user4d_id      | number  | Id do usuário no diretório do banco de dados 4D                                                                                                                                                                                                                                                                                                                                              |
|              | host_name      | text    | Nome da máquina                                                                                                                                                                                                                                                                                                                                                                              |
|              | task_name      | text    | Nome de processo                                                                                                                                                                                                                                                                                                                                                                             |
|              | client_version | text    | Versão do cliente                                                                                                                                                                                                                                                                                                                                                                            |
|              |                                     |         | _**Disponível só para um processo trava REST:**_                                                                                                                                                                                                                                                                                                                             |
|              | host                                | text    | URL que bloqueou a entidade (por exemplo, "127.0.0.1:8043")                                                                                                                                                                                                                                               |
|              | IPAddr                              | text    | Endereço IP da trava (por exemplo. "127.0.0.1")                                                                                                                                                                                                                                                           |
|              | recordNumber                        | number  | Número de registo do registo bloqueado                                                                                                                                                                                                                                                                                                                                                       |
|              | userAgent                           | text    | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |

Los siguientes valores pueden ser devueltos en las propiedade _status_ y _statusText_ del objeto ___STATUS_ en caso de error:

| status | statusText                      | Comentário                                                                                                                                            |
| ------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2      | "Stamp has changed"             | O valor de selo interno da entidade não corresponde a uma da entidade armazenada nos dados (bloqueio otimista).    |
| 3      | "Already locked"                | A entidade está fechada por uma fechadura pessimista.                                                                                 |
| 4      | "Other error"                   | Um erro grave é um erro de banco de dados de baixo nível (por exemplo, chave duplicada), um erro de hardware, etc. |
| 5      | "Entity does not exist anymore" | A entidade não existe mais nos dados.                                                                                                 |

## Exemplo

Bloqueamos uma entidade num primeiro navegador:

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```
{
	"result": true,
	"__STATUS": {
		"success": true
	}
}
```

Num segundo navegador (outra sessão), enviamos o mesmo pedido.

**Response:**

```
{
	"result":false,
	"__STATUS":{
		"status":3,
		"statusText":"Already Locked",
		"lockKind":7,
		"lockKindText":"Locked By Session",
		"lockInfo":{
			"host":"127.0.0.1:8043",
			"IPAddr":"127.0.0.1",
			"recordNumber": 7,
			"userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."
		}
	}
}
```
