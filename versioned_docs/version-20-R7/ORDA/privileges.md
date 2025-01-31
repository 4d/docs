---
id: privileges
title: Privileges
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Overview

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

When web users or REST users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![schema](../assets/en/ORDA/privileges-schema.png)

### See also

For a detailed overview of the whole permissions architecture, please read the [**Filter access to your data with a complete system of permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/) blog post.  


## Resources

You can assign specific permission actions to the following resources in your project:

- the datastore
- a dataclass
- an attribute (including computed and alias)
- a data model class function
- a [singleton](../REST/$singleton.md) function

Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized. 

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses.
- A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.

:::info

Permissions control access to datastore objects or functions. If you want to filter read data according to some criteria, you might consider [restricting entity selections](entities.md#restricting-entity-selections) which can be more appropriate in this case.

:::

## Permission actions


Available actions are related to target resource.

|Actions|datastore|dataclass|attribute|data model function or singleton function|
|---|---|---|---|---|			
|**create**|Create entity in any dataclass|Create entity in this dataclass|Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes).|n/a|
|**read**|Read attributes in any dataclass|Read attributes in this dataclass|Read this attribute content|n/a|
|**update**|Update attributes in any dataclass. |Update attributes in this dataclass.|Update this attribute content (ignored for alias attributes).|n/a|
|**drop**|Delete data in any dataclass. |Delete data in this dataclass. |Delete a not null value for this attribute (except for alias and computed attribute).|n/a|
|**execute**|Execute any function on the project (datastore, dataclass, entity selection, entity)|Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions|n/a|Execute this function|
|**promote**|n/a|n/a|n/a|Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.|

**Notes:**

- An alias can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- You can assign a permission action to a singleton class (`singleton` type), in which case it will be applied to all its exposed functions, or to a singleton function (`singletonMethod` type).
- Default values: in the current implementation, only *Null* is available as default value.
- In REST [force login mode](../REST/authUsers.md#force-login-mode), the [`authentify()` function](../REST/authUsers.md#function-authentify) is always executable by guest users, whatever the permissions configuration.

Setting permissions requires to be consistent, in particular **update** and **drop** permissions also need **read** permission (but **create** does not need it).



## Privileges and Roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a business user profile. For example, "manageInvoices" could be a privilege while "secretary" could be a role (which includes "manageInvoices" and other privileges).

A privilege or a role can be associated to several "action + resource" combinations. Several privileges can be associated to an action. A privilege can include other privileges.

- You **create** privileges and/or roles in the `roles.json` file (see below). You **configure** their scope by assigning them to permission action(s) applied to resource(s).

- You **allow** privileges and/or roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the `Session` class.


### Example

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

### Default file

When you create a project, a default `roles.json` file is created at the following location: `<project folder>/Project/Sources/` (see [Architecture](../Project/architecture.md#sources) section).

The default file has the following contents:

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
        "allowed": [
            {
                "applyTo": "ds",
                "type": "datastore",
                "read": ["none"],
                "create": ["none"],
                "update": ["none"],
                "drop": ["none"],
                "execute": ["none"],
                "promote": ["none"]                
            }
        ]
    },

    "forceLogin": true

}

```

For a highest level of security, the "none" privilege is assigned to all permissions in the datastore, thus data access on the whole `ds` object is disabled by default. It is recommended not to modified or use this locking privilege, but to add specific permissions to each resource you wish to make available from web or REST requests ([see example below](#example-of-privilege-configuration)).

:::caution

When no specific parameters are defined in the `roles.json` file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses, but is not recommended in production environment.

:::

:::note Compatibility

In previous releases, the `roles.json` file was not created by default. As of 4D 20 R6, when opening an existing project that does not contain a `roles.json` file or the `"forceLogin": true` settings, the **Activate REST authentication through ds.authentify() function** button is available in the [**Web Features** page of the Settings dialog box](../settings/web.md#access). This button automatically upgrades your security settings (you may have to modify your code, [see this blog post](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).
:::

:::note Qodly Studio

In Qodly Studio for 4D, the mode can be set using the [**Force login** option](../WebServer/qodly-studio.md#force-login) in the Privileges panel.

:::


### Syntax

The `roles.json` file syntax is the following:

|Property name|||Type|Mandatory|Description|
|---|---|---|---|---|---|
|privileges|||Collection of `privilege` objects|X|List of defined privileges|
||\[].privilege||Text||Privilege name|
||\[].includes||Collection of strings||List of included privilege names|
|roles|||Collection of `role` objects||List of defined roles|
||\[].role||Text||Role name|
||\[].privileges||Collection of strings||List of included privilege names|
|permissions|||Object|X|List of allowed actions|
||allowed||Collection of `permission` objects||List of allowed permissions|
|||\[].applyTo|Text|X|Targeted [resource](#resources) name|
|||\[].type|Text|X|[Resource](#resources) type: "datastore", "dataclass", "attribute", "method", "singletonMethod", "singleton"|
|||\[].read|Collection of strings||List of privileges|
|||\[].create|Collection of strings||List of privileges|
|||\[].update|Collection of strings||List of privileges|
|||\[].drop|Collection of strings||List of privileges|
|||\[].execute|Collection of strings||List of privileges|
|||\[].promote|Collection of strings||List of privileges|
|forceLogin|||Boolean||True to enable the ["forceLogin" mode](../REST/authUsers.md#force-login-mode) |


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

## Example of privilege configuration

The good practice is to keep all data access locked by default thanks to the "none" privilege and to configure the `roles.json` file to only open controlled parts to authorized sessions. For example, to allow some accesses to guest sessions:

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
    "allowed": [
      {
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
      },
      {
        "applyTo": "mySingletonClass.createID",
        "type": "singletonMethod",
        "execute": [
          "guest"
        ]
      }
    ]
  },
  "forceLogin": true
}
```
