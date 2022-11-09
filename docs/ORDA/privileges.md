---
id: privileges
title: Privileges
---


Protecting data while allowing easy access to authorized people is a major issue for applications. The ORDA security architecture is implemented at the heart of your datastore and allows you to define specific privileges to all user sessions for the various resources in your project (datastore, dataclasses, functions, etc.).



## Overview

The ORDA security architecture is based upon the concepts of privileges, actions, and resources. When a user gets logged, their session is automatically loaded with associated privileges. Every REST request is evaluated against privileges defined in the project's `roles.json` file.

If the user attempts to execute an action and does not have the appropriate access rights, a privilege error is generated or, in the case of missing Read privilege on attributes, a null value is sent. 

![](../assets/en/ORDA/privileges-schema.png)


## Resources

You can assign specific permission actions to the following exposed resources in your project:

- the datastore
- a dataclass
- a dataclass attribute (including computed attribute and alias attribute)
- a data model class function

A permission action defined at a given level is inherited at lower levels and can be overriden. For example, dataclasses attributes inherit from their dataclass permissions but you can override them for one or more attributes. 

![](../assets/en/ORDA/permission-hierarchy.png)


## Permission actions

Available actions depend on the target resource.

|Actions|datastore|dataclass|dataclass attribute|data model function|
|---|---|---|---|---|			
|**create**|Create data in any dataclass|Create data in this dataclass|Create a not null value for this attribute (except for alias)|Not applicable|
|**update**|Update data in any dataclass|Update data in this dataclass|Update this attribute content with a not null value (except for alias)|Not applicable|
|**read**|Read data in any dataclass|Read data in this dataclass|Read this attribute content|Not applicable|
|**drop**|Delete data in any dataclass|Delete data in this dataclass|Delete a not null value for this attribute (except for alias and computed attribute)|Not applicable|
|**execute**|Execute any function on the project (datastore, dataclass, entity selection, entity)|Execute any function on the dataclass (dataclass, entity selection, entity)|Not applicable|Run this function|
|**describe**|All the dataclasses are available in the /rest/$catalog API|This dataclass is available in the /rest/$catalog API|This dataclass attribute is available in the /rest/$catalog API|This dataclass function is available in the /rest/$catalog API|
|**promote**|Not applicable|Not applicable|Not applicable|Associates a given privilege during the execution of the function|

An alias can be read even if there is no permissions on the attributes making the alias.

Keep in mind that actions are logically embedded, and therefore call a chain of implicit actions:

- Read action is granted Describe action automatically.
- Update and Remove actions are granted Read and Describe actions automatically.

The following graphic shows the interactions between actions:

![](../assets/en/ORDA/implicit.png)



## Privileges and Roles

A **privilege** is the technical ability to run **actions** on **resources**, while a **role** is a privilege pusblished to be used by an administrator. Basically, a role gathers several privileges to define a user profile. 

- You **create** privileges and roles by associating permission action(s) to resource(s) in the `roles.json` file (see below).

- You **allow** privileges and roles to every user session using the [`.setPrivileges()`](../API/SessionClass.md#setprivileges) function of the Session class.





## `roles.json` file


