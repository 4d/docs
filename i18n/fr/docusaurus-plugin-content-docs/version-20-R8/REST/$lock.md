---
id: lock
title: $lock
---

Verrouille et déverrouille une entité en utilisant le [mécanisme pessimiste](../ORDA/entities.md#pessimistic-lock).

## Syntaxe

Pour verrouiller une entité pour les autres sessions et process 4D :

```
/?$lock=true
```

Pour déverrouiller l'entité pour les autres sessions et processus 4D :

```
/?$lock=false
```

La propriété [`lockKindText`](../API/EntityClass.md#lock) est "Locked by session".

### Description

Les verrouillages déclenchés par l'API REST sont placés au niveau de la [session](authUsers.md#opening-sessions).

Une entité verrouillée est considérée comme _verrouillée_ (c'est-à-dire que les actions de verrouillage / déverrouillage / mise à jour / suppression ne sont pas possibles) par :

- d'autres sessions REST
- les process 4D (client/serveur, datastore distant, monoposte) exécutés sur le serveur REST.

Une entité verrouillée par l'API REST peut être déverrouillée uniquement :

- via son verrou, c'est-à-dire un `/?$lock=false` dans la session REST qui définit `/?$lock=true`
- ou si le [timeout d'inactivité]($directory.md) de la session est atteint (la session est fermée).

### Réponse

Une requête `?$lock` retourne un objet JSON avec `"result"=true` si l'opération de verrouillage est réussie et `"result"=false` si elle échoue.

L'objet "__STATUS" retourné possède les propriétés suivantes :

| Propriété    |                                     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                                     |         | _**Disponible uniquement en cas de succès:**_                                                                                                                                                                                                                                                                                                                               |
| success      |                                     | boolean | vrai si l'action de verrouillage a été réussie (ou si l'entité est déjà verrouillée dans la session courante), sinon faux (non retourné dans ce cas).                                                                                                                                                                                 |
|              |                                     |         | _**Disponible uniquement en cas d'erreur :**_                                                                                                                                                                                                                                                                                                                               |
| status       |                                     | number  | Code d'erreur, voir ci-dessous                                                                                                                                                                                                                                                                                                                                                              |
| statusText   |                                     | text    | Description de l'erreur, voir ci-dessous                                                                                                                                                                                                                                                                                                                                                    |
| lockKind     |                                     | number  | Code de verrouillage                                                                                                                                                                                                                                                                                                                                                                        |
| lockKindText |                                     | text    | "Locked by session" en cas de verrouillage par une session REST, "Locked by record" en cas de verrouillage par un process 4D                                                                                                                                                                                                                                                                |
| lockInfo     |                                     | object  | Information sur l'origine du verrouillage. Les propriétés retournées dépendent de l'origine du verrouillage (process 4D ou session REST).                                                                                                                                                                                                |
|              |                                     |         | _**Disponible uniquement pour un verrouillage par process 4D :**_                                                                                                                                                                                                                                                                                                           |
|              | task_id        | number  | ID du process                                                                                                                                                                                                                                                                                                                                                                               |
|              | user_name      | text    | Nom d'utilisateur de la session sur la machine                                                                                                                                                                                                                                                                                                                                              |
|              | user4d_alias   | text    | Nom ou alias de l'utilisateur 4D                                                                                                                                                                                                                                                                                                                                                            |
|              | user4d_id      | number  | Identifiant utilisateur dans le répertoire de la base 4D                                                                                                                                                                                                                                                                                                                                    |
|              | host_name      | text    | Nom de la machine                                                                                                                                                                                                                                                                                                                                                                           |
|              | task_name      | text    | Nom du process                                                                                                                                                                                                                                                                                                                                                                              |
|              | client_version | text    | Version du client                                                                                                                                                                                                                                                                                                                                                                           |
|              |                                     |         | _**Disponible uniquement pour le verrouillage d'une session REST :**_                                                                                                                                                                                                                                                                                                       |
|              | host                                | text    | URL d'origine du verrouillage de l'entité (ex : "127.0.0.1:8043")                                                                                                                                                                                                                        |
|              | IPAddr                              | text    | Adresse IP d'origine du verrouillage (ex. 127.0.0.1")                                                                                                                                                                                                                                                    |
|              | recordNumber                        | number  | Numéro de l'enregistrement verrouillé                                                                                                                                                                                                                                                                                                                                                       |
|              | userAgent                           | text    | userAgent de l'origine du verouillage (ex : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |

Les valeurs suivantes peuvent être retournées dans les propriétés _status_ et _statusText_ de l'objet ___STATUS_ en cas d'erreur :

| status | statusText                      | Commentaire                                                                                                                                                                                      |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2      | "Stamp has changed"             | La valeur du marqueur interne (stamp) de l'entité ne correspond pas à celle de l'entité stockée dans les données (verrouillage optimiste). |
| 3      | "Already locked"                | L'entité est verrouillée par un verrou pessimiste.                                                                                                                               |
| 4      | "Other error"                   | Une erreur critique peut être une erreur de bas niveau de la base de données (ex. clé dupliquée), une erreur matérielle, etc.                 |
| 5      | "Entity does not exist anymore" | L'entité n'existe plus dans les données.                                                                                                                                         |

## Exemple

Nous verrouillons une entité dans un premier navigateur :

```
GET /rest/Customers(1)/?$lock=true
```

**Réponse :**

```
{
	"result": true,
	"__STATUS": {
		"success": true
	}
}
```

Dans un second navigateur (autre session), nous envoyons la même requête.

**Réponse :**

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
