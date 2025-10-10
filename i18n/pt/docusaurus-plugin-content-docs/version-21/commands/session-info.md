---
id: session-info
title: Session info
displayed_sidebar: docs
---

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Parâmetro  | Tipo    |                             | Descrição                  |
| ---------- | ------- | :-------------------------: | -------------------------- |
| sessionID  | Integer | &#8594; | ID da sessão               |
| Resultados | Object  | &#8592; | Informações sobre a sessão |

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças                       |
| ------- | ------------------------------ |
| 20 R8   | Support of standalone sessions |
| 20 R7   | Adicionado                     |

</details>

## Descrição

O comando `Session info` <!-- REF #_command_.Session info.Summary -->retorna um objeto que descreve o ID da sessão no parâmetro *sessionID*.<!-- END REF -->. Se você passar um *sessionID* inválido, o comando retorna um objeto nulo.

O objeto retornado contém as propriedades abaixo:

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                                                   |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Tipo de sessão: "remote", "storedProcedure", "standalone"                                                                                                                                                   |
| userName         | Text          | Nome de usuário 4D (o mesmo valor de [`Session.userName`](../API/SessionClass.md#username))                                                                                                              |
| machineName      | Text          | Sessões remotas: nome da máquina remota. Sessão de procedimentos armazenados: nome da máquina do servidor. Sessão autônoma: nome da máquina |
| systemUserName   | Text          | Sessões remotas: nome da sessão do sistema aberta na máquina remota.                                                                                                                        |
| IPAddress        | Text          | Endereço IP da máquina remota                                                                                                                                                                                               |
| hostType         | Text          | Tipo de host: "windows" ou "mac"                                                                                                                                                                            |
| creationDateTime | Date ISO 8601 | Data e hora de criação da sessão. Sessão autônoma: data e hora da inicialização do aplicativo                                                                                               |
| state            | Text          | Estado da sessão: "ativa", "adiada", "em espera"                                                                                                                                                            |
| ID               | Text          | UUID da sessão (o mesmo valor de [`Session.id`](../API/SessionClass.md#id))                                                                                                                              |
| persistentID     | Text          | Sessões remotas: ID persistente da sessão                                                                                                                                                                   |

:::note

Este comando retorna a propriedade [`.info`](../API/SessionClass.md#info) da sessão *sessionID*. Para obter informações sobre a sessão atual, você pode chamar diretamente `Session.info`.

:::

Aqui está um exemplo de objeto de saída:

```json

{
    "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
    "userName": "Designer",
    "machineName": "My Computer",
    "systemUserName": "John Doe",
    "IPAddress": "localhost",
    "hostType": "mac",
    "type": "remote",
    "state": "active",
    "creationDateTime: "2024-09-10T09:55:54.787Z",
    "persistentID:"8FFDAE519F1F4DCDB81E8E8DB00AD101"
}

```

## Exemplo

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

## Veja também

[`Session` class](../API/SessionClass.md)
[Session](session.md)
[Session storage](session-storage.md)\
[Process info](process-info.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1844                        |
| Thread safe       | &check; |
