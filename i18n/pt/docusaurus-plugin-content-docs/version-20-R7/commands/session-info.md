---
id: session-info
title: Session info
displayed_sidebar: docs
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 20 R7   | Adicionado |

</details>

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Parâmetro  | Tipo    |                             | Descrição                  |
| ---------- | ------- | :-------------------------: | -------------------------- |
| sessionID  | Integer | &#8594; | ID da sessão               |
| Resultados | Object  | &#8592; | Informações sobre a sessão |

<!-- END REF -->

## Descrição

O comando `Session info` <!-- REF #_command_.Session info.Summary -->retorna um objeto que descreve o ID da sessão no parâmetro *sessionID*.<!-- END REF -->. Se você passar um *sessionID* inválido, o comando retorna um objeto nulo.

O objeto retornado contém as propriedades abaixo:

| Nome da propriedade | Tipo                                    | Descrição                                                                                    |
| ------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------- |
| type                | Text (enum)          | Tipo de sessão Valores possíveis: "remote", "storedProcedure", "rest"        |
| userName            | Text                                    | Nome de usuario                                                                              |
| machineName         | Text                                    | Nome da máquina remota                                                                       |
| systemUserName      | Text                                    | Nome da sessão do sistema aberta na máquina remota                                           |
| IPAddress           | Text                                    | Endereço IP da máquina remota                                                                |
| hostType            | Text (enum)          | Tipo de host. Valores possíveis: "windows", "mac", "browser" |
| creationDateTime    | Text (Date ISO 8601) | Data e hora da conexão da máquina remota                                                     |
| state               | Text (enum)          | Estado da sessão Valores possíveis: "active", "postponed", "sleeping"        |
| ID                  | Text                                    | UUID da sessão                                                                               |
| persistentID        | Text                                    | ID persistente da sessão                                                                     |

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

[Session](../API/SessionClass.md)
[Process info](process-info.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1844                        |
| Thread safe       | &check; |
