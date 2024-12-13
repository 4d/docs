---
id: session-info
title: Session info
displayed_sidebar: docs
---

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Paramètres | Type    |     | Description                   |
| ---------- | ------- | :-: | ----------------------------- |
| sessionID  | Integer |  →  | Session ID                    |
| Résultat   | Object  |  ←  | Information about the session |

<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications                  |
| ------- | ------------------------------ |
| 20 R8   | Support of standalone sessions |
| 20 R7   | Ajout                          |

</details>

#### Description

The `Session info` command <!-- REF #_command_.Session info.Summary -->returns an object describing the session whose ID you pass in the *sessionID* parameter.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

L'objet retourné contient les propriétés suivantes :

| Propriété        | Type          | Description                                                                                                                                                                                                                    |
| ---------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| type             | Text          | Type de session : "remote", "storedProcedure", "standalone"                                                                                                                                                    |
| userName         | Text          | 4D user name (same value as [`Session.userName`](../API/SessionClass.md#username))                                                                                                                          |
| machineName      | Text          | Sessions distantes : nom de la machine distante. Session procédures stockées : nom de la machine serveur. Session autonome : nom de la machine |
| systemUserName   | Text          | Sessions distantes : nom de la session système ouverte sur la machine distante.                                                                                                                |
| IPAddress        | Text          | Adresse IP de la machine distante                                                                                                                                                                                              |
| hostType         | Text          | Type d'hôte : "windows" ou "mac"                                                                                                                                                                               |
| creationDateTime | Date ISO 8601 | Date et heure de création de la session. Session autonome : date et heure de démarrage de l'application                                                                                        |
| state            | Text          | État de la session : "active", "postponed", "sleeping"                                                                                                                                                         |
| ID               | Text          | Session UUID (same value as [`Session.id`](../API/SessionClass.md#id))                                                                                                                                      |
| persistentID     | Text          | Sessions distantes : ID persistant de la session                                                                                                                                                               |

:::note

This command returns the [`.info`](../API/SessionClass.md#info) property of the *sessionID* session. To get information about the current session, you can directly call `Session.info`.

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

#### Exemple

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

#### Voir également

[`Session` class](../API/SessionClass.md)
[Session](session.md)
[Session storage](session-storage.md)\
[Process info](process-info.md)
