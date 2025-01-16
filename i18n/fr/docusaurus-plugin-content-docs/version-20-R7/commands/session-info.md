---
id: session-info
title: Session info
displayed_sidebar: docs
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 20 R7   | Ajout         |

</details>

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| Paramètres | Type    |     | Description                 |
| ---------- | ------- | :-: | --------------------------- |
| sessionID  | Integer |  →  | ID de session               |
| Résultat   | Object  |  ←  | Informations sur la session |

<!-- END REF -->

#### Description

La commande `Session info` <!-- REF #_command_.Session info.Summary -->retourne un objet décrivant la session dont vous passez l'ID dans le paramètre *sessionID*<!-- END REF -->. Si vous transmettez une *sessionID* invalide, la commande renvoie un objet nul.

L'objet retourné contient les propriétés suivantes :

| Nom de propriété | Type                                    | Description                                                                                               |
| ---------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| type             | Text (enum)          | Type de session. Valeurs possibles : "remote", "storedProcedure", "rest"  |
| userName         | Text                                    | Nom d'utilisateur                                                                                         |
| machineName      | Text                                    | Nom de la machine distante                                                                                |
| systemUserName   | Text                                    | Nom de la session système ouverte sur la machine distante                                                 |
| IPAddress        | Text                                    | Adresse IP de la machine distante                                                                         |
| hostType         | Text (enum)          | Type d'hôte. Valeurs possibles : "windows", "mac", "browser"              |
| creationDateTime | Text (Date ISO 8601) | Date et heure de connexion de la machine distante                                                         |
| state            | Text (enum)          | État de la session. Valeurs possibles : "active", "postponed", "sleeping" |
| ID               | Text                                    | UUID de la session                                                                                        |
| persistentID     | Text                                    | ID persistant de la session                                                                               |

:::note

Cette commande renvoie la propriété [`.info`](../API/SessionClass.md#info) de la session *sessionID*. Pour obtenir des informations sur la session en cours, vous pouvez appeler directement `Session.info`.

:::

Voici un exemple d'objet de sortie :

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

[Session](../API/SessionClass.md)
[Process info](process-info.md)
