---
id: session-info
title: Session info
displayed_sidebar: docs
---

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Parâmetro  | Tipo    |     | Descrição                     |
| ---------- | ------- | :-: | ----------------------------- |
| sessionID  | Integer |  →  | Session ID                    |
| Resultados | Object  |  ←  | Information about the session |

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças                       |
| ------- | ------------------------------ |
| 20 R8   | Support of standalone sessions |
| 20 R7   | Adicionado                     |

</details>

#### Descrição

The `Session info` command <!-- REF #_command_.Session info.Summary -->returns an object describing the session whose ID you pass in the *sessionID* parameter.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

O objeto retornado contém as propriedades abaixo:

| Propriedade      | Tipo          | Descrição                                                                                                                                                                                                               |
| ---------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote", "storedProcedure", "standalone"                                                                                                                                                 |
| userName         | Text          | Nome de usuário 4D (o mesmo valor de [`Session.userName`](../API/SessionClass.md#username))                                                                                                          |
| machineName      | Text          | Sessões remotas: nome da máquina remota. Stored procedures session: name of the server machine. Standalone session: name of the machine |
| systemUserName   | Text          | Sessões remotas: nome da sessão do sistema aberta na máquina remota.                                                                                                                    |
| IPAddress        | Text          | Endereço IP da máquina remota                                                                                                                                                                                           |
| hostType         | Text          | Tipo de host: "windows" ou "mac"                                                                                                                                                                        |
| creationDateTime | Date ISO 8601 | Date and time of session creation. Standalone session: date and time of application startup                                                                                             |
| state            | Text          | Estado da sessão: "ativa", "adiada", "em espera"                                                                                                                                                        |
| ID               | Text          | Session UUID (same value as [`Session.id`](../API/SessionClass.md#id))                                                                                                                               |
| persistentID     | Text          | Remote sessions: Session's persistent ID                                                                                                                                                                |

:::note

Este comando retorna a propriedade [`.info`](../API/SessionClass.md#info) da sessão *sessionID*. To get information about the current session, you can directly call `Session.info`.

:::

Here is an example of output object:

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

#### Exemplo

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

#### Veja também

[`Session` class](../API/SessionClass.md)
[Session](session.md)
[Session storage](session-storage.md)\
[Process info](process-info.md)
