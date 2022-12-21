---
id: privileges
title: Privileges
---


Protecting data while allowing fast and easy access to authorized users is a major challenge for web applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Overview

The ORDA security architecture is based upon the concepts of privileges, permission actions (read, create, etc.), and resources. 

When users get logged, their session is automatically loaded with associated privilege(s). Privileges are assigned to the session using the [`session.setPrivileges()`](../API/SessionClass.md#setprivileges) function

Every user request sent within the session is evaluated against privileges defined in the project's `roles.json` file.

If a user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read privilege on attributes, they are not sent. 

![](../assets/en/ORDA/privileges-schema.png)


## Resources and permission hierarchy

You can assign specific permission actions to the following exposed resources in your project:

- the datastore
- a dataclass
- a dataclass attribute (including computed attribute and alias attribute)
- a data model class function

A permission action defined at a given level is inherited by default at lowel levels. It can also be overriden, i.e. you can set additional permissions. In particular, attributes inherit from their dataclass permissions but you can set permissions for one or more attributes, in which case you limit their access to those permissions only. 

Let's consider the following diagram:

![](../assets/en/ORDA/permissions2.png)

The following permission(s) will be required to execute any action on entities:

- For attributes A1 to A3: **Green**
- For attributes B1 and B2: **Blue**
- For attributes C1 and C2: **Green**
- For attribute C3: **Orange**



## Permission actions


Available actions depend on the target resource. 

Note that some permission actions have *implicit dependencies*. It means that the corresponding permission must not be disallowed. It can be allowed through inheritance. 

|Actions|datastore|dataclass|attribute|data model function|
|---|---|---|---|---|			
|**create**|Create entity in any dataclass|Create entity in this dataclass|Create an entity with a value different from default value allowed for this attribute (ignored for alias attributes). *implicit: **create** on the dataclass*|n/a|
|**read**|Read data in any dataclass|Read data in this dataclass|Read this attribute content|n/a|
|**update**|Update data in any dataclass. *implicit: **read** on the datastore*|Update data in this dataclass. *implicit: **read** on the dataclass*|Update this attribute content, i.e. the attribute is returned by the [`touchedAttributes()`](../API/EntityClass.md#touchedattributes-) function (ignored for alias attributes). *implicit: **update** on the dataclass and **read** on the attribute*|n/a|
|**drop**|Delete data in any dataclass. *implicit: **read** on the datastore*|Delete data in this dataclass. *implicit: **read** on the dataclass*|Delete a not null value for this attribute (except for alias and computed attribute). *implicit: **drop** on the dataclass and **read** on the dataclass and the attribute*|n/a|
|**execute**|Execute any function on the project (datastore, dataclass, entity selection, entity)|Execute any function on the dataclass. Dataclass functions, entity functions, and entity selection functions are handled as dataclass functions|n/a|Run this function|
|**describe**|All the dataclasses are available in the /rest/$catalog API|This dataclass is available in the /rest/$catalog API|This attribute is available in the /rest/$catalog API. *implicit: **describe** on the dataclass*|This dataclass function is available in the /rest/$catalog API|
|**promote**|n/a|n/a|n/a|Associates a given privilege during the execution of the function. The privilege is temporary added to the session and removed at the end of the function execution. By security, only the process executing the function is added the privilege, not the whole session. *implicit: **execute** on data model function or higher level*|

**Notes:**

- An alias can be read even if there is no permissions on the attributes upon which it is built.
- A computed attribute can be accessed even if there are no permissions on the attributes upon which it is built.
- Default values: In the current implementation, only *Null* is available as default value.



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

:::note

In a context other than *Qodly* (cloud), you have to create this file at the following location: `<project folder>/Project/Sources/`. See [Architecture](../Project/architecture.md#sources) section.

:::


The `roles.json` file syntax is the following:

|Property name|||Type|Mandatory|Description|
|---|---|---|---|---|---|
|privileges|||Collection of `privilege` objects|X|List of defined privileges|
||\[].privilege||String||Privilege name|
||\[].includes||Collection of strings||List of included privilege names|
|roles|||Collection of `role` objects||List of defined roles|
||\[].role||String||Role name|
||\[].privileges||Collection of strings||List of included privilege names|
|permissions|||Object|X|List of allowed actions|
||allowed||Collection of `permission` objects||List of allowed permissions|
|||\[].applyTo|String|X|Targeted [resource](#resources)|
|||\[].type|String|X|Resource type: "datastore", "dataclass", "method", "attribute" |
|||\[].read|Collection of strings||List of privileges|
|||\[].create|Collection of strings||List of privileges|
|||\[].update|Collection of strings||List of privileges|
|||\[].drop|Collection of strings||List of privileges|
|||\[].describe|Collection of strings||List of privileges|
|||\[].execute|Collection of strings||List of privileges|
|||\[].promote|Collection of strings||List of privileges|


:::caution Reminder

- The "WebAdmin" privilege name is reserved to the application. It is not recommended to use this name for custom privileges.
- `privileges` and `roles` names are case insensitive.

:::

## Initializing privileges for deployment

By default, if no specific parameters are defined in the roles.json file, accesses are not limited. This configuration allows you to develop the application without having to worry about accesses.

However, when the application is about to be deployed, a good practice is to lock all privileges and then, to configure the file to only open controlled parts to authorized sessions. To lock all privileges on all resources, put the following `roles.json` file in your project folder:
   
```json title="/Project/Sources/roles.json"
{
	"privileges": [
		{
			"privilege": "nobody",
			"includes": []
		}
	],

	"roles": [],

	"permissions": {
		"allowed": [{
			"applyTo": "ds",
			"type": "datastore",
			"read": [
				"nobody"
			],
			"create": [
				"nobody"
			],
			"update": [
				"nobody"
			],
			"drop": [
				"nobody"
			],
			"execute": [

				"nobody"
			],
			"describe": [
				"nobody"
			],
			"promote": [
				"nobody"
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

## Roles.json example file

Example of ``Roles.json file for an medical application. Note that we first assign "nobody" permissions to initialize the system. "nobody" are never assigned to any session.

```json title="Patients/Project/Sources/roles.json"
{
	"permissions": {
		"allowed": [
			{
				"applyTo": "ds",
				"type": "datastore",
				"read": [
					"nobody"
				],
				"create": [
					"nobody"
				],
				"update": [
					"nobody"
				],
				"drop": [
					"nobody"
				],
				"execute": [
					"nobody"
				]
			},
			{
				"applyTo": "UserInfo",
				"type": "dataclass",
				"read": [
					"anActor"
				]
			},
			{
				"applyTo": "UserInfo.authenticate",
				"type": "method",
				"promote": [
					"anActor"
				],
				"execute": [
					"guest"
				]
			},
			{
				"applyTo": "Utility",
				"type": "dataclass",
				"execute": [
					"anActor"
				]
			},
			{
				"applyTo": "Appointment",
				"type": "dataclass",
				"execute": [
					"anActor"
				],
				"read": [
					"admin",
					"intern",
					"patient"
				],
				"drop": [
					"admin",
					"doctor",
					"patient"
				],
				"update": [
					"intern"
				],
				"create": [
					"patient"
				]
			},
			{
				"applyTo": "Utility.loadOffsets",
				"type": "method",
				"execute": [
					"admin"
				]
			},
			{
				"applyTo": "Appointment.deleteFrom",
				"type": "method",
				"execute": [
					"admin"
				]
			},
			{
				"applyTo": "Patient",
				"type": "dataclass",
				"read": [
					"intern",
					"patient"
				],
				"drop": [
					"patient"
				],
				"execute": [
					"patient"
				]
			},
			{
				"applyTo": "Record",
				"type": "dataclass",
				"read": [
					"intern",
					"patient"
				],
				"create": [
					"intern"
				],
				"update": [
					"intern"
				]
			},
			{
				"applyTo": "Appointment.updateMe",
				"type": "method",
				"execute": [
					"intern"
				]
			},
			{
				"applyTo": "Doctor",
				"type": "dataclass",
				"read": [
					"intern",
					"patient"
				],
				"execute": [
					"intern"
				]
			},
			{
				"applyTo": "Record.personalNotes",
				"type": "attribute",
				"read": [
					"intern"
				],
				"create": [
					"doctor"
				],
				"update": [
					"doctor"
				],
				"drop": [
					"doctor"
				]
			},
			{
				"applyTo": "Appointment.dropMe",
				"type": "method",
				"execute": [
					"doctor",
					"patient"
				]
			},
			{
				"applyTo": "Appointment.initMe",
				"type": "method",
				"execute": [
					"patient"
				]
			},
			{
				"applyTo": "Appointment.createAppointment",
				"type": "method",
				"execute": [
					"patient"
				]
			},
			{
				"applyTo": "Appointment.check",
				"type": "method",
				"execute": [
					"patient"
				]
			},
			{
				"applyTo": "Doctor.search",
				"type": "method",
				"execute": [
					"patient"
				]
			},
			{
				"applyTo": "Speciality",
				"type": "dataclass",
				"read": [
					"patient"
				]
			},
			{
				"applyTo": "Utility.checkRolesConsistency",
				"type": "method",
				"execute": [
					"guest"
				]
			},
			{
				"applyTo": "Utility.rolesErrors",
				"type": "method",
				"execute": [
					"guest"
				]
			},
			{
				"applyTo": "Utility.getAuthenticationError",
				"type": "method",
				"execute": [
					"guest"
				]
			}
		]
	},
	"privileges": [
		{
			"id": "dQHF6NwihU2BREEBR9rDao",
			"privilege": "nobody",
			"includes": []
		},
		{
			"id": "61eQR37NdpNA3E9BDEGxWc",
			"privilege": "anActor",
			"includes": []
		},
		{
			"id": "si4xJgAkGAGRqZtvRUbzMn",
			"privilege": "patient",
			"includes": [
				"anActor"
			]
		},
		{
			"id": "69zBSwFXncVVX2qM27Zrvh",
			"privilege": "intern",
			"includes": [
				"anActor"
			]
		},
		{
			"id": "gfzERNibcPjeE8BWhVmDi9",
			"privilege": "doctor",
			"includes": [
				"intern"
			]
		},
		{
			"id": "4a2dUeCUFiwtToX3ioQgWZ",
			"privilege": "admin",
			"includes": [
				"anActor"
			]
		}
	],
	"roles": [
		{
			"id": "tkvRCgvByZ6tZD6kvjerow",
			"role": "A Patient",
			"privileges": [
				"patient"
			]
		},
		{
			"id": "2zeeREEgyWrMj248tRqF2D",
			"role": "A Doctor",
			"privileges": [
				"doctor"
			]
		},
		{
			"id": "daF7HZHmteFgzKQ15G47Rs",
			"role": "An Admin",
			"privileges": [
				"admin"
			]
		},
		{
			"id": "utHkKNtorR5W47FwE7fbKf",
			"role": "An Intern",
			"privileges": [
				"intern"
			]
		}
	]
}
```