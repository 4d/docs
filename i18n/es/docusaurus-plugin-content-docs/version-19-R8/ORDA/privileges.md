---
id: privileges
title: Privilegios
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Generalidades

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![](../assets/en/ORDA/privileges-schema.png)


## Resources

You can assign specific permission actions to the following exposed resources in your project:

- the datastore
- a dataclass
- an attribute (including computed and alias)
- a data model class function

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses.
- A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.


## Permission actions


Available actions are related to target resource.

| Acciones     | datastore                                                                            | dataclass                                                                                                                                       | attribute                                                                                                             | data model function                                                                                                                                                                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **create**   | Create entity in any dataclass                                                       | Create entity in this dataclass                                                                                                                 | Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). | n/a                                                                                                                                                                                                                                                                      |
| **read**     | Read attributes in any dataclass                                                     | Read attributes in this dataclass                                                                                                               | Read this attribute content                                                                                           | n/a                                                                                                                                                                                                                                                                      |
| **update**   | Update attributes in any dataclass.                                                  | Update attributes in this dataclass.                                                                                                            | Update this attribute content (ignored for alias attributes).                                                         | n/a                                                                                                                                                                                                                                                                      |
| **drop**     | Delete data in any dataclass.                                                        | Delete data in this dataclass.                                                                                                                  | Delete a not null value for this attribute (except for alias and computed attribute).                                 | n/a                                                                                                                                                                                                                                                                      |
| **execute**  | Execute any function on the project (datastore, dataclass, entity selection, entity) | Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions | n/a                                                                                                                   | Execute this function                                                                                                                                                                                                                                                    |
| **describe** | All the dataclasses are available in the /rest/$catalog API                          | This dataclass is available in the /rest/$catalog API                                                                                           | This attribute is available in the /rest/$catalog API.                                                                | This dataclass function is available in the /rest/$catalog API                                                                                                                                                                                                           |
| **promote**  | n/a                                                                                  | n/a                                                                                                                                             | n/a                                                                                                                   | Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. |

**Notas:**

- An alias can be read even if there is no permissions on the attributes upon which it is built.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- Default values: in the current implementation, only *Null* is available as default value.

Setting permissions requires to be consistent, in particular:

- **update** and **drop** permissions also need **read** permission (but **create** does not need it)
- **promote** permission also need **describe** permission.



## Privileges and Roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Several privileges can be associated to an action. A privilege can include other privileges.

- You **create** privileges and/or roles in the `roles.json` file (see below). You **configure** their scope by assigning them to permission action(s) applied to resource(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.


### Ejemplo

To allow a role in a session:

```4d

exposed Function authenticate($identifier : Text; $password : Text)->$result : Text

    var $user : cs.UsersEntity

    Session.clearPrivileges()

    $result:="Your are authenticated as Guest"

    $user:=ds.Users.query("identifier = :1"; $identifier).first()

    If ($user#Null)
        If (Verify password hash($password; $user.password))
            Session.setPrivileges(New object("roles"; $user.role))
            $result:="Your are authenticated as "+$user.role
        End if
    End if


```



## `roles.json` file


The `roles.json` file describes the whole security settings for the project.

:::note

In a context other than *Qodly* (cloud), you have to create this file at the following location: `<project folder>/Project/Sources/`. See [Architecture](../Project/architecture.md#sources) section.

:::


The `roles.json` file syntax is the following:

| Nombre de propiedad |                 |               | Tipo                               | Obligatorio | Descripción                                                                  |
| ------------------- | --------------- | ------------- | ---------------------------------- | ----------- | ---------------------------------------------------------------------------- |
| privileges          |                 |               | Collection of `privilege` objects  | X           | List of defined privileges                                                   |
|                     | \[].privilege  |               | String                             |             | Nombre del privilegio                                                        |
|                     | \[].includes   |               | Colección de cadenas               |             | List of included privilege names                                             |
| roles               |                 |               | Collection of `role` objects       |             | List of defined roles                                                        |
|                     | \[].role       |               | String                             |             | Role name                                                                    |
|                     | \[].privileges |               | Colección de cadenas               |             | List of included privilege names                                             |
| permissions         |                 |               | Object                             | X           | List of allowed actions                                                      |
|                     | allowed         |               | Collection of `permission` objects |             | List of allowed permissions                                                  |
|                     |                 | \[].applyTo  | String                             | X           | Targeted [resource](#resources) name                                         |
|                     |                 | \[].type     | String                             | X           | [Resource](#resources) type: "datastore", "dataclass", "attribute", "method" |
|                     |                 | \[].read     | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].create   | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].update   | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].drop     | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].describe | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].execute  | Colección de cadenas               |             | List of privileges                                                           |
|                     |                 | \[].promote  | Colección de cadenas               |             | List of privileges                                                           |


:::caution Reminder

- The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.
- `privileges` and `roles` names are case insensitive.

:::

### `Roles_Errors.json` file

The `roles.json` file is parsed by 4D at startup. You need to restart the application if you want modifications in this file to be taken into account.

In case of error(s) when parsing the `roles.json` file, 4D loads the project but disables the global access protection - this allows the developer to access the files and to fix the error. An error file named `Roles_Errors.json` is generated in the [`Logs` folder of the project](../Project/architecture.md#logs) and describes the error line(s). This file is automatically deleted when the `roles.json` file no longer contains error(s).

It is recommended to check at startup if a `Roles_Errors.json` file exists in the [Logs folder](../Project/architecture.md#logs), which means that there was a parsing error and that accesses will not limited. You can write for example:

```4d title="/Sources/DatabaseMethods/onStartup.4dm"
If (Not(File("/LOGS/"+"Roles_Errors.json").exists))
…
Else // you can prevent the project to open
 ALERT("The roles.json file is malformed or contains inconsistencies, the application will quit.")
 QUIT 4D
End if 
```

## Initializing privileges for deployment

By default, if no specific parameters are defined in the `roles.json` file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses.

However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following `roles.json` file in your project folder (it includes examples of methods):

```json title="/Project/Sources/roles.json"
{
    "privileges": [
        {
            "privilege": "none",
            "includes": []
        }
    ],

    "roles": [],

    "permissions": {
        "allowed": [{
            "applyTo": "ds",
            "type": "datastore",
            "read": [
                "none"
            ],
            "create": [
                "none"
            ],
            "update": [
                "none"
            ],
            "drop": [
                "none"
            ],
            "execute": [
                "none"
            ],
            "describe": [
                "none"
            ],
            "promote": [
                "none"
            ]
        },
        {
            "applyTo": "ds.loginAs",
            "type": "method",
            "execute": [
                    "guest"
                ]
        },
        {
            "applyTo": "ds.hasPrivilege",
            "type": "method",
            "execute": [
                    "guest"
                ]
        },
        {
            "applyTo": "ds.clearPrivileges",
            "type": "method",
            "execute": [
                    "guest"
                ]
        },
        {
            "applyTo": "ds.isGuest",
            "type": "method",
            "execute": [
                    "guest"
                ]
        },
        {
            "applyTo": "ds.getPrivileges",
            "type": "method",
            "execute": [
                    "guest"
                ]
        },
        {
            "applyTo": "ds.setAllPrivileges",
            "type": "method",
            "execute": [
                "guest"
            ]
    }

        ]
    }
}
```
