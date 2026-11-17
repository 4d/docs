---
id: privileges
title: Rôles et privilèges
---

L'architecture de sécurité ORDA contrôle l'accès aux ressources du projet pour les sessions web et REST. Elle vous permet d'accorder des permissions spécifiques sur des ressources telles que le datastore, les dataclass, les attributs et les fonctions.

## Vue d’ensemble

Le modèle de sécurité combine des **privilèges**, des **actions** (comme `read` et `create`), et des **ressources**.

Assignez des privilèges à une **session** en utilisant [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges).

Chaque requête est vérifiée par rapport aux permissions définies dans le fichier `roles.json` du projet. Une action non autorisée génère une erreur de privilège. Les attributs sans permission de lecture ne sont pas présents dans la réponse.

![schema](../assets/en/ORDA/privileges-schema.png)

:::tip Articles de blog liés

[**Filtrez l'accès à vos données avec un système complet de permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/)

:::

:::info

Les permissions contrôlent l'accès aux objets ou fonctions du datastore. Si vous voulez filtrer les données de lecture selon certains critères, vous pouvez envisager d'utiliser les [entity selections restreintes](entities.md#restricting-entity-selections) qui peuvent être plus appropriées dans ce cas.

:::

## Portée

Les permissions s'appliquent aux **sessions web et REST** : les [requêtes REST](../REST/gettingStarted.md), y compris celles des [pages Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview), et le **code 4D exécuté dans un process web**. Cela inclut les [fonctions exposées](./ordaClasses.md), les [gestionnaires de requêtes HTTP](../WebServer/http-request-handler.md), la méthode base [Sur connexion Web](../commands/on-web-connection-database-method), et tout code qu'ils appellent. Par exemple, un appel à une fonction autorisée échoue malgré tout si la fonction lit une dataclass pour laquelle la session n'a pas de permission de lecture.

:::info Exception

La permission **execute** d'un [singleton partagé](../Concepts/classes.md#shared-singleton) ou d'une [fonction de singleton](../Concepts/classes.md#singleton-classes) n'est vérifiée que lorsque la fonction est [appelée via REST](../REST/$singleton.md). Lorsque le code 4D qui s'exécute dans une session web l'appelle directement (`cs.MySingleton.me.myFunction()`), aucune permission n'est vérifiée, contrairement aux fonctions de dataclass, d'entités, d'entity selection d'entités et de datastore qui sont vérifiées dans les deux cas.

:::

Les permissions ne s'appliquent jamais à au [code d'une session desktop](../Desktop/sessions.md) (autonome, client/serveur, procédures stockées) ou [tool4d](../Admin/cli.md#tool4d).

:::warning

Lorsqu'une permission référence un [privilège](#privileges-and-roles) non déclaré, 4D enregistre une erreur et ignore le tout. Dans ce cas, la permission est ignorée. Si le [mode restreint par défaut](#restriction-modes) n'est pas activé, la ressource est accessible dans les sessions `guest`.

:::

### MCP tools

The same permissions apply to the sessions of the [MCP server](../WebServer/mcp-server.md), with nothing specific to configure:

- A [custom tool](../WebServer/mcp-server.md#custom-tools) (`exposed MCP Function`) requires the **execute** permission on its function, and benefits from its **promote** permission.
- The [built-in CRUD tools](../WebServer/mcp-server.md#built-in-crud-tools) require the **read**, **create**, **update**, or **drop** permission on the dataclass, and the attribute permissions apply. Each attribute of a path used in a filter, a sort, or a projection requires the **read** permission.
- The CRUD tools are listed only if the session has at least one data permission on a dataclass, and the `describeModel` tool only describes the dataclasses on which the session has a data permission, with their readable or writable attributes.
- A tool, a dataclass, or an attribute that the session cannot access is reported as if it did not exist.

#### Exemple

MCP clients authenticated with the "salesReader" privilege can read the Customer and Order dataclasses with the CRUD tools, and call the tools published by the `OrderManager` singleton (for example `OrderManager-getYearTotal`):

```json
{
	"privileges": [{"privilege": "salesReader", "includes": []}],
	"roles": [],
	"permissions": {
		"allowed": [
			{"applyTo": "Customer", "type": "dataclass", "read": ["salesReader"]},
			{"applyTo": "Order", "type": "dataclass", "read": ["salesReader"]},
			{"applyTo": "OrderManager", "type": "singleton", "execute": ["salesReader"]}
		]
	},
	"restrictedByDefault": true
}
```

### MCP tools

The same permissions apply to the sessions of the [MCP server](../WebServer/mcp-server.md), with nothing specific to configure:

- A [custom tool](../WebServer/mcp-server.md#custom-tools) (`exposed MCP Function`) requires the **execute** permission on its function, and benefits from its **promote** permission.
- The [built-in CRUD tools](../WebServer/mcp-server.md#built-in-crud-tools) require the **read**, **create**, **update**, or **drop** permission on the dataclass, and the attribute permissions apply. Each attribute of a path used in a filter, a sort, or a projection requires the **read** permission.
- The CRUD tools are listed only if the session has at least one data permission on a dataclass, and the `describeModel` tool only describes the dataclasses on which the session has a data permission, with their readable or writable attributes.
- A tool, a dataclass, or an attribute that the session cannot access is reported as if it did not exist.

#### Exemple

MCP clients authenticated with the "salesReader" privilege can read the Customer and Order dataclasses with the CRUD tools, and call the tools published by the `OrderManager` singleton (for example `OrderManager-getYearTotal`):

```json
{
	"privileges": [{"privilege": "salesReader", "includes": []}],
	"roles": [],
	"permissions": {
		"allowed": [
			{"applyTo": "Customer", "type": "dataclass", "read": ["salesReader"]},
			{"applyTo": "Order", "type": "dataclass", "read": ["salesReader"]},
			{"applyTo": "OrderManager", "type": "singleton", "execute": ["salesReader"]}
		]
	},
	"restrictedByDefault": true
}
```

## Resources

4D vérifie les permissions de la session chaque fois que l'accès à une ressource est requis. Les ressources suivantes peuvent avoir des permissions spécifiques :

| Ressource                                                                                                                                                                        | `applyTo`                 | `type`            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------- |
| [Datastore](./dsMapping.md#datastore)                                                                                                                                            | `ds`                      | `datastore`       |
| [Fonction de datastore class](./ordaClasses.md#datastore-class)                                                                                                                  | `ds.<function>`           | `method`          |
| [Dataclass](./dsMapping.md#dataclass)                                                                                                                                            | `<Dataclass>`             | `dataclass`       |
| [Attribut](./dsMapping.md#attribute) (y compris [attributs calculés](./ordaClasses.md#computed-attributes-1) et [alias](./ordaClasses.md#alias-attributes-1)) | `<Dataclass>.<attribute>` | `attribut`        |
| [Fonction de dataclass, entity selection ou entité](./ordaClasses.md)                                                                                                            | `<Dataclass>.<function>`  | `method`          |
| [Singleton partagé](../Concepts/classes.md#shared-singleton) (toutes ses fonctions exposées)                                                                  | `<Singleton>`             | `singleton`       |
| [Fonction de singleton](../Concepts/classes.md#singleton-classes)                                                                                                                | `<Singleton>.<function>`  | `singletonMethod` |

Utilisez les valeurs `applyTo` et `type` décrites dans ce tableau lors de la définition des permissions dans [`roles.json`](#rolesjson-file).

:::note Attribution de permissions aux fonctions de la classe ORDA

Dans `roles.json`, vous identifiez une fonction de classe ORDA dans `applyTo` avec cette syntaxe :

```json
<DataclassName>.<functionName>
```

Par exemple, si vous voulez appliquer une permission à la fonction suivante :

```4d
// cs.CityEntity class
Class extends Entity
  Function getPopulation() : Integer
   ...
```

Vous utilisez cette valeur :

```json
"applyTo":"City.getPopulation"
```

Comme les permissions identifient des fonctions par dataclass et nom de fonction, des fonctions avec le même nom mais dans différentes classes ORDA (entité, entity selection, dataclass) ne pourront pas se voir assigner des privilèges différents. Donnez-leur des noms distincts à la place. Par exemple, nommez les fonctions `dropEntity()` et `dropSelection()` dans `cs.CityEntity` et `cs.CitySelection`, respectivement :

```json
	"permissions": {
		"allowed": [
			{
				"applyTo": "City.dropEntity",
				"type": "method",
				"promote": [
					"name"
				]
			},
			{
				"applyTo": "City.dropSelection",
				"type": "method",
				"promote": [
					"name"
				]
			}
		]
	}
}
```

:::

## Permissions

Une **permission** permet une action sur une ressource ; par exemple, exécuter `ds.myTable.myFunction()`. Les permissions sont définies dans [`roles.json`](#rolesjson-file) et accordées à un ou plusieurs [privilège(s)](#privileges-and-roles).

Si aucune permission n'est définie pour une ressource, l'accès dépend du [mode de restriction](#restriction-modes) du projet.

### Actions de permission

Les actions disponibles dépendent de la ressource :

| Action                                                   | Datastore                                                                                                                      | Dataclass                                                                                                                                                        | Attribut                                                                                                                               | Function                                                                                                                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **create**                                               | Créer une entité dans n'importe quelle dataclass                                                                               | Créer une entité dans cette dataclass                                                                                                                            | Créer une entité avec une valeur qui n'est pas celle par défaut pour cet attribut (ignoré pour les attributs alias) | n/a                                                                                                                                                                                                                                                                                                                                                                                       |
| **read**                                                 | Lire les attributs de n'importe quelle dataclass                                                                               | Lire les attributs de cette dataclass                                                                                                                            | Lire le contenu de cet attribut                                                                                                        | n/a                                                                                                                                                                                                                                                                                                                                                                                       |
| **update**                                               | Mettre à jour les attributs dans n'importe quelle dataclass                                                                    | Mettre à jour les attributs de cette dataclass                                                                                                                   | Mettre à jour le contenu de cet attribut (ignoré pour les attributs alias)                                          | n/a                                                                                                                                                                                                                                                                                                                                                                                       |
| **drop** ("Delete" dans Qodly Studio) | Supprimer des données dans n'importe quelle dataclass                                                                          | Supprimer des données dans cette dataclass                                                                                                                       | Supprimer une valeur non nulle pour cet attribut (sauf alias et attributs calculés)                                 | n/a                                                                                                                                                                                                                                                                                                                                                                                       |
| **execute**                                              | Exécuter n'importe quelle fonction du projet (datastore, dataclass, entity selection, entité, ou singleton) | Exécuter n'importe quelle fonction sur la dataclass ; les fonctions de dataclass, d'entités et d'entity selection sont traitées comme des fonctions de dataclass | n/a                                                                                                                                    | Exécuter cette fonction                                                                                                                                                                                                                                                                                                                                                                   |
| **promote**                                              | n/a                                                                                                                            | n/a                                                                                                                                                              | n/a                                                                                                                                    | Ajoute temporairement un privilège pendant la durée de l'appel de la fonction. Seul le process qui exécute la fonction le reçoit, pas la session entière. Utilisez [`promote()`](../API/SessionClass.md#promote) et [`demote()`](../API/SessionClass.md#demote) pour définir ou supprimer cette action dynamiquement dans un process web. |

### Règles des permissions

- **update** et **drop** nécessitent **read** sur la ressource ; pas **create**.
- Une fonction peut avoir un **promote** par plusieurs privilèges. Lors de l'exécution, elle reçoit les permissions combinées de tous ces privilèges ; il n'y a pas d'ordre de priorité.
- Un [attribut alias](./ordaClasses.md#alias-attributes-1) peut être lu si la session a la permission de lire l'alias, même si elle ne peut pas lire les attributs qui résolvent l'alias.
- Un [attribut calculé](./ordaClasses.md#computed-attributes-1) est accessible même si ses attributs sous-jacents n'ont pas de permissions.
- En [mode force login](../REST/authUsers.md#force-login-mode) de REST, les utilisateurs guest peuvent toujours exécuter [`authentify()`](../REST/authUsers.md#function-authentify), quelle que soit la configuration des permissions.

### Permissions héritées

Les actions de permission sont héritées selon les règles suivantes :

1. Les permissions descendent **datastore → dataclass → attribut / fonction**, et **datastore → singleton → fonction singleton**.
2. La résolution est **par action**. Définir `read` sur une dataclass ne change pas comment `create`, `update`, `drop` ou `execute` sont résolus pour elle.
3. **La dataclass remplace le datastore**. Une permission définie sur une dataclasse pour une action remplace l'autorisation du datastore pour cette action. Les privilèges permettant l'action uniquement sur le datastore la perdent pour cette dataclass.
4. **La fonction remplace la dataclass**. Une permission `execute` définie sur une fonction remplace la permission `execute` pour cette fonction sur la dataclass (et le datastore). Les fonctions d'entity selection et d'entité suivent la même règle que les fonctions de dataclass.
5. **Le singleton remplace le datastore**, **la fonction singleton remplace le singleton**.
6. **La fonction de datastore remplace le datastore**.
7. **L'attribut s'ajoute à son parent**. Pour agir sur un attribut qui a sa propre permission, une session a besoin du privilège accordé par la permission de l'attribut **et** un privilège accordé à l'action sur la dataclass (directement ou via le datastore).
8. Une action accordée à **aucun privilège** (par exemple, `"read": []`) est "non définie", donc la permission au niveau du dessus s'applique. Cela ne veut pas dire "personne". Pour refuser l'action, utilisez [mode restreint](#restriction-modes) sans définir cette permission, ou accordez-la à un privilège qu'aucune session ne reçoit.

Les permissions ne peuvent que permettre l'accès ; il n'y a pas de refus explicite. Une permission de dataclass ou de fonction peut donc réduire une permission plus large du datastore en la remplaçant. Une permission d'attribut s'ajoute : elle n'autorise l'accès à cet attribut que lorsque la session a aussi l'action sur sa dataclass.

:::tip Pratique recommandée

- Assignez les accès aux sessions via les **rôles** avec `Session.setPrivileges({roles: [...]})`. Définissez les rôles autour des profils métiers ; les privilèges sont les blocs de construction réutilisables. [Qodly Studio](https://developer.4d.com/qodly/4DQodlyPro/roles/overview) affiche les permissions réelles par rôle.
- Si un rôle d'administration a besoin d'un accès complet, incluez tous les privilèges dans ce rôle sauf un droit de verrouillage, s'il est utilisé. Ajoutez chaque nouveau privilège à ce rôle : une permission au niveau du dataclass peut remplacer une permission plus large du datastore .
- Examinez l'effet des changements de privilèges sur chaque rôle. Dans Qodly Studio, la **vue détaillée des permissions** montre l'accès effectif d'un rôle. Un rôle sans privilège peut vous aider à visualiser l'accès réservé aux guests.

:::

## Privilèges et Rôles

A **privilege** grants actions on resources. A **role** groups privileges into a business profile that an administrator can assign to a session.

For example, `manageInvoices` could be a privilege and `secretary` a role that includes it and other privileges. Assign roles to sessions with [`Session.setPrivileges({roles: [...]})`](../API/SessionClass.md#setprivileges); the role grants all its privileges.

Privileges can be granted permission on multiple action-resource combinations, and an action can be granted to multiple privileges.

Define privileges and roles in [`roles.json`](#rolesjson-file), then grant roles to sessions with `Session.setPrivileges()`.

### Including privileges

A privilege can include other privileges using the `includes` property in `roles.json`. Inclusion is transitive and one-way: if A includes B, and B includes C, A receives the permissions of B and C.

[`Session.getPrivileges()`](../API/SessionClass.md#getprivileges) returns the expanded collection (for example, A, B, and C) in no guaranteed order. Declare an included privilege before the privilege that includes it; otherwise, 4D drops the inclusion and logs an error.

### Exemple

This authentication function assigns the user's role to the session:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="You are authenticated as Guest"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Your are authenticated as "+$user.role
        End if
    End if


```

## `guest` privilege

`guest` is built in; declaring a privilege named `Guest` is an error ("privilege already defined"). Sessions without privileges (`Session.isGuest() = True`) receive the permissions granted to `guest`.

Permissions granted to `guest` are available to every session, regardless of its other privileges. Do not grant `guest` access that should be withheld from other sessions, and account for its permissions when restricting access at the dataclass level.

## `roles.json`

The project's web security settings are defined in `roles.json`:

| Propriété                       | Type                             | Obligatoire | Description                                                                                                                                      |
| ------------------------------- | -------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `privilèges`                    | Collection of privilege objects  | Oui         | Defined privileges. Each object has a `privilege` name and can have an `includes` collection of privilege names. |
| `rôles`                         | Collection of role objects       | Non         | Defined roles. Each object has a `role` name and a `privileges` collection of privilege names.                   |
| `permissions.allowed`           | Collection of permission objects | Oui         | Permissions assigned to resources.                                                                                               |
| `permissions.allowed[].applyTo` | Text                             | Oui         | Target [resource](#resources) name.                                                                                              |
| `permissions.allowed[].type`    | Text                             | Oui         | [Resource](#resources) type: `datastore`, `dataclass`, `attribute`, `method`, `singletonMethod`, or `singleton`. |
| `permissions.allowed[].read`    | Collection de chaînes            | Non         | Privileges granted read access.                                                                                                  |
| `permissions.allowed[].create`  | Collection de chaînes            | Non         | Privileges granted create access.                                                                                                |
| `permissions.allowed[].update`  | Collection de chaînes            | Non         | Privileges granted update access.                                                                                                |
| `permissions.allowed[].drop`    | Collection de chaînes            | Non         | Privileges granted delete access.                                                                                                |
| `permissions.allowed[].execute` | Collection de chaînes            | Non         | Privileges granted execute access.                                                                                               |
| `permissions.allowed[].promote` | Collection de chaînes            | Non         | Privileges temporarily granted during function execution.                                                                        |
| `restrictedByDefault`           | Boolean                          | Non         | If `true`, access to resources without explicit permissions is denied.                                                           |
| `forceLogin`                    | Boolean                          | Non         | If `true`, enables [force login mode](../REST/authUsers.md#force-login-mode).                                                    |

:::note Notes

- The `WebAdmin` privilege name is reserved for the application; do not use it for custom privileges.
- Privilege and role names are case-insensitive. Unknown names passed to [`.setPrivileges()`](../API/SessionClass.md#setprivileges) are ignored.
- Qodly Studio can add an optional `id` property to privileges and roles to preserve references when they are renamed.
- Multiple entries with the same `applyTo` are not merged: the last entry wins without an error. Define only one entry per resource.
- A resource entry that grants no actions has no effect.

:::

:::warning

Lorsqu'une permission référence un [privilège](#privileges-and-roles) non déclaré, 4D enregistre une erreur et ignore le tout. Dans ce cas, la permission est ignorée. Si le [mode restreint par défaut](#restriction-modes) n'est pas activé, la ressource est accessible dans les sessions `guest`.

:::

### Default location and content

New projects generate `roles.json` at:

```
<project folder>/Project/Sources/ 
```

See the [Architecture](../Project/architecture.md#sources) section for details.

Contenu par défaut :

```json title="/Project/Sources/roles.json"

{
  "privileges": [
  ],
  "roles": [
  ],
  "permissions": {
    "allowed": [
      {
        "applyTo": "ds",
        "type": "datastore",
        "read": [],
        "create": [],
        "update": [],
        "drop": [],
        "execute": [],
        "promote": []
      }
    ]
  },
  "restrictedByDefault": false,
  "forceLogin": false
}
```

:::note Compatibilité

In releases before 4D 20 R6, `roles.json` was not created by default. In 4D 20 R6 and later, opening an existing project without a `roles.json` file or `"forceLogin": true` setting makes the **Activate REST authentication through ds.authentify() function** button available on the [Web Features page of the Settings dialog box](../settings/web.md#access). This button upgrades the security settings; you may need to modify your code. Plus d'informations dans [cet article de blog](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/).

:::

:::note Qodly Studio

Dans Qodly Studio pour 4D, le mode de connexion peut être réglé en utilisant l'option [**Force login**](https://developer.4d.com/qodly/4DQodlyPro/force-login) dans le panneau Rôles et Privilèges.

:::

## Modes de restriction

`restrictedByDefault` determines access to a [resource](#resources) when no [specific permission](#permissions) is defined:

- **Unrestricted mode** (`restrictedByDefault: false`): Resources without defined permissions are accessible to all requests.
- **Restricted mode** (`restrictedByDefault: true`): Resources without defined permissions are blocked. Access is granted explicitly, and the [permission inheritance rules](#inherited-permissions) still apply.

:::note Compatibilité

- New projects set `restrictedByDefault` to `false` by default; see [recommended configurations](#recommended-configuration).
- For projects converted from earlier releases, enabling access to Qodly Studio through the [One-click configuration dialog](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#one-click-configuration) adds `restrictedByDefault: true` to `roles.json`.

:::

### Restriction strategies

#### Lock everything and open gradually

Choose either restricted mode or a lock privilege to close access by default:

|                              | Restricted mode                                                                                                                                                                                                                                                                                                                                            | Lock privilege                                                                                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Setting                      | `"restrictedByDefault": true` (Qodly Studio: **Restrict Access By Default**)                                                                                                                                                                                                                                            | `"restrictedByDefault": false`, with every action on `ds` granted to a privilege that no session receives (for example, `none`) |
| What is closed               | Every resource without a permission                                                                                                                                                                                                                                                                                                                        | Every resource that inherits datastore permissions                                                                                                 |
| How to open                  | Grant permissions on the datastore, dataclasses, attributes, and functions                                                                                                                                                                                                                                                                                 | Grant permissions on dataclasses and functions to replace the lock                                                                                 |
| If 4D drops an invalid entry | The resource stays closed                                                                                                                                                                                                                                                                                                                                  | The resource falls back to the lock and stays closed                                                                                               |
| Important                    | Explicitly grant access to public resources, usually to `guest`, including the login function unless [force login](../REST/authUsers.md#force-login-mode) is used, and [HTTP request handlers](../WebServer/http-request-handler.md) called before login. In this mode, Qodly Studio's role review is currently incorrect. | Never assign the lock privilege to a role, including the administration role.                                                      |

Both approaches close access by default and follow the same inheritance and replacement rules. A lock privilege makes the lock visible in the editor; restricted mode requires no extra privilege.

#### Open everything, restrict gradually

Set unrestricted mode (`"restrictedByDefault": false`), grant `guest` read access to `ds`, then restrict sensitive dataclasses with dataclass-level permissions.

Remember that [guest](#guest-privilege) permissions apply to every session. Without a lock privilege, an invalid entry dropped by 4D leaves the resource open in unrestricted mode.

#### Configuration recommandée {#recommended-configuration}

Use these settings as a starting point:

- **Development**: Set both properties to `false` for easier access while developing and debugging. Apply restrictions gradually as needed.
- **Production**: Set `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to `true` so that users must authenticate and resource access must be explicitly granted.

## Permission errors

### `Roles_Errors.json`

4D parses `roles.json` at startup. Restart the application for changes to take effect.

If parsing fails, 4D writes the errors to `Roles_Errors.json` in the project's [`Logs` folder](../Project/architecture.md#logs). It deletes this file after `roles.json` is corrected.

Check at startup, especially in production, whether `Roles_Errors.json` exists. Its presence indicates a parsing error, and permissions may not be enforced as intended. Vous pouvez écrire par exemple :

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
...
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if
```

Permission errors are returned as follows:

| Chemin                                | read / create / update / drop refused                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | execute refused                                                                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| REST                                  | HTTP 401 with message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **HTTP 500** with message (singleton: "Bad permission...") |
| Code (web session) | Read: error 1557 (dataclass) or 1607 (attribute). Create: error 1608 when assigning an attribute to a new entity if create is restricted by a permission; in restricted mode without permission, `save()` returns `success: false` and `statusText: "Permission Error"`. Update/drop: error 1557 when loading the entity (both require read). | Error 1561                                                                                                                                    |

## Exemple

This example grants a broad set of permissions through a `manager` privilege, while the `payroll` privilege grants read access to the sensitive `Salaries` dataclass.

```json title="roles.json"
{
  "forceLogin": true,
  "restrictedByDefault": true,
  "privileges": [
    {"privilege": "payroll", "includes": []},
    {"privilege": "manager", "includes": []}
  ],
  "roles": [
    {"role": "administrator", "privileges": ["manager", "payroll"]}
  ],
  "permissions": {
    "allowed": [
      {
        "applyTo": "ds",
        "type": "datastore",
        "read": ["manager"],
        "create": ["manager"],
        "update": ["manager"],
        "drop": ["manager"],
        "execute": ["manager"]
      },
      {
        "applyTo": "Salaries",
        "type": "dataclass",
        "read": ["payroll"]
      }
    ]
  }
}

```

Here are the resulting rules:

| Session              | Read Salaries                                                                                 | Create Salaries                                                                    | Update/drop Salaries                          | Read other dataclasses |
| -------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------- | ---------------------- |
| `manager`            | Refused (the `Salaries` read permission replaces the datastore permission) | Allowed (inherited from the datastore)                          | Refused (read is required) | Allowed                |
| `payroll`            | Allowed                                                                                       | Refused (the datastore permission is granted only to `manager`) | Refused                                       | Refused                |
| `administrator` role | Allowed                                                                                       | Allowed                                                                            | Allowed                                       | Allowed                |

The `Salaries` read permission replaces the datastore read permission, so `manager` alone cannot read that dataclass. The `administrator` role receives the combined permissions of `manager` and `payroll`.
