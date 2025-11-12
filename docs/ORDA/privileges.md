---
id: privileges
title: Roles and Privileges
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all web or REST user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Overview

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources.

When web users or REST users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function.

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read permission on attributes, they are not sent.

![schema](../assets/en/ORDA/privileges-schema.png)

:::tip Related Blog posts

[**Filter access to your data with a complete system of permissions**](https://blog.4d.com/filter-access-to-your-data-with-a-complete-system-of-permissions/)

:::

## Resources

You can assign specific permission actions to the following resources in your project:

- the [datastore](../ORDA/dsMapping.md#datastore)
- the [dataclasses](../ORDA/dsMapping.md#dataclass)
- [attributes](../ORDA/dsMapping.md#attribute) (including [computed](./ordaClasses.md#computed-attributes-1) and [alias](./ordaClasses.md#alias-attributes-1))
- functions of the [data model classes](../ORDA/ordaClasses.md)
- [singleton](../REST/$singleton.md) functions

Each time a resource is accessed within a session (whatever the way it is accessed), 4D checks that the session has the appropriate permissions, and rejects the access if it is not authorized. 



## Permissions

A permission is the ability to do an action on a resource. For example, *execute the ds.myTable.myFunction()* represents a **permission**. Permissions are defined for the project in the [`roles.json`](#rolesjson-file) file. Each permission can be given to one or more [privileges](#privileges-and-roles). 

When **no specific permission** has been defined for a resource, access to the resource may be automatically **unrestricted** or **restricted** depending on the [default mode defined for the project](#restriction-modes). 


### Permission actions

Available actions are related to target resource.

|Actions|datastore|dataclass|attribute|data model function or singleton function|
|---|---|---|---|---|			
|**create**|Create entity in any dataclass|Create entity in this dataclass|Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes).|n/a|
|**read**|Read attributes in any dataclass|Read attributes in this dataclass|Read this attribute content|n/a|
|**update**|Update attributes in any dataclass. |Update attributes in this dataclass.|Update this attribute content (ignored for alias attributes).|n/a|
|**drop**|Delete data in any dataclass. |Delete data in this dataclass. |Delete a not null value for this attribute (except for alias and computed attribute).|n/a|
|**execute**|Execute any function on the project (datastore, dataclass, entity selection, entity, singleton)|Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions|n/a|Execute this function|
|**promote**|n/a|n/a|n/a|Associates a given privilege during the execution of the function. The privilege is temporary added and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session.|

:::note Notes

- An [alias](./ordaClasses.md#alias-attributes-1) can be read as soon as the session privileges allow the access to the alias itself, even if the session privileges do no allow the access to the attributes resolving the alias.
- A [computed attribute](./ordaClasses.md#computed-attributes-1) can be accessed even if there are no permissions on the attributes upon which it is built.
- You can assign a permission action to a singleton class (`singleton` type), in which case it will be applied to all its exposed functions, or to a singleton function (`singletonMethod` type). 
- You can set/remove the **promote** action dynamically to a web process using the [`promote()`](../API/SessionClass.md#promote) and [`demote()`](../API/SessionClass.md#demote) functions. 
- Default values: in the current implementation, only *Null* is available as default value.
- In REST [force login mode](../REST/authUsers.md#force-login-mode), the [`authentify()` function](../REST/authUsers.md#function-authentify) is always executable by guest users, whatever the permissions configuration.

:::

Setting permissions requires to be consistent, in particular **update** and **drop** permissions also need **read** permission (but **create** does not need it).



### Inherited permissions

A permission action defined at a given level is inherited by default at lower levels, but several permissions can be set:

- A permission action defined at the datastore level is automatically assigned to all dataclasses. The *execute* permission action defined at the datastore level applies to all functions of the project, including all [singleton](../REST/$singleton.md) functions. 
- A permission action defined at a dataclass level overrides the datastore setting (if any). By default, all attributes of the dataclass inherit from the dataclass permission(s).
- Unlike dataclass permissions, a permission action defined at the attribute level does not override the parent dataclass permission(s), but is added to. For example, if you assigned the "general" privilege to a dataclass and the "detail" privilege to an attribute of the dataclass, both "general" and "detail" privileges must be set to the session to access the attribute.

:::info

Permissions control access to datastore objects or functions. If you want to filter read data according to some criteria, you might consider [restricting entity selections](entities.md#restricting-entity-selections) which can be more appropriate in this case.

:::

### Assigning permissions to ORDA class functions

When configuring permissions, ORDA class functions are declared in the `applyTo` element using the following syntax:

```json
<DataclassName>.<functionName>
```
For example, if you want to apply a permission to the following function:

```4d
// cs.CityEntity class
Class extends Entity
  Function getPopulation() : Integer
   ...
```
... you have to write:

```json
"applyTo":"City.getPopulation"
```

It means that you cannot use the same function names in the various ORDA classes (entity, entity selection, dataclass) if you want them to be assigned privileges. In this case, you need to use distinct function names. For example, if you have created a "drop" function in both `cs.CityEntity` and `cs.CitySelection` classes, you need to give them different names such as `dropEntity()` and `dropSelection()`. You can then write in the "roles.json" file:

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
```



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


The `roles.json` file describes the whole web security settings for the project. The `roles.json` file syntax is the following:

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
|restrictedByDefault|||Boolean||If true, access to resources without explicit permissions is denied |
|forceLogin|||Boolean||If true, enables ["forceLogin" mode](../REST/authUsers.md#force-login-mode) |


:::caution Reminder

- The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.
- `privileges` and `roles` names are case-insensitive.

:::

### Default File Location and Content

When a new project is created, a default `roles.json` file is generated at:

```
<project folder>/Project/Sources/ 
```

See [Architecture](../Project/architecture.md#sources) section.

Default content:

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




:::note Compatibility

In previous releases, the `roles.json` file was not created by default. As of 4D 20 R6, when opening an existing project that does not contain a `roles.json` file or the `"forceLogin": true` settings, the **Activate REST authentication through ds.authentify() function** button is available in the [**Web Features** page of the Settings dialog box](../settings/web.md#access). This button automatically upgrades your security settings (you may have to modify your code, [see this blog post](https://blog.4d.com/force-login-becomes-default-for-all-rest-auth/)).

:::

:::note Qodly Studio

In Qodly Studio for 4D, the login mode can be set using the [**Force login** option](https://developer.4d.com/qodly/4DQodlyPro/force-login) in the Roles and Privileges panel.

:::


## Restriction Modes

The `restrictedByDefault` property configures how every [resource](#resources) are accessed when [no specific permission is defined for it](#permission):

- **Unrestricted mode** (`restrictedByDefault`: **false**): Resources without defined permissions are accessible to all requests. This mode is suitable for development environments where access can be gradually restricted.
- **Restricted mode** (`restrictedByDefault`: **true**): Resources without defined permissions are blocked by default. This mode is recommended for production environments where access must be explicitly granted.


:::note Compatibility

- When **creating a new project**, the `restrictedByDefault` property is set to **false** in the *roles.json* file (see below). Keep in mind that this configuration is tailored for quick start and smooth development. In production environment, [it is recommended to set the `restrictedByDefault` and `forceLogin` properties to **true**](#configuring-restrictedbydefault-and-forcelogin-properties).
- In **projects converted from previous releases**; when enabling access to Qodly Studio using the [One-click configuration dialog](https://developer.4d.com/qodly/4DQodlyPro/gettingStarted#one-click-configuration), the `restrictedByDefault` property is added with value **true** in the *roles.json* file. 

:::

### Recommended Configuration

Depending on your environment, the recommended settings are:

- **Production**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **true**. This ensures maximum security by requiring user authentication and explicitly defined permissions for resource access. 
- **Development**: Set both `restrictedByDefault` and [`forceLogin`](../REST/authUsers.md#force-login-mode) to **false**. This allows easier access during development and debugging, with the possibility to gradually apply restrictions.






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


```json title="/Project/Sources/roles.json"

{
	"forceLogin": true,
	"restrictedByDefault": true,
	"permissions": {
		"allowed": [
						{
				"applyTo": "People",
				"type": "dataclass",
				"read": [
					"viewPeople"
				]
			}
		]
	},
	"privileges": [
		{
			"privilege": "viewPeople",
			"includes": []
		}
	],
	"roles": []
}
```
