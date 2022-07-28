---
id: overview
title: Presentación del control de acceso
---

Si diferentes personas utilizan una aplicación, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades según de los usuarios conectados. It is also essential to provide security for sensitive data, even in single-user applications.

4D access control strategy depends on your deployment configuration:

- en las aplicaciones multiusuario, puede confiar en los usuarios y grupos 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> Consulte la documentación [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/) para una visión de conjunto de las funciones de seguridad de 4D.




## Control de acceso en las aplicaciones multiusuario

Las aplicaciones multiusuario se despliegan con 4D Server. Incluyen aplicaciones cliente-servidor, web o REST.

In multi-user applications, access control is done through [4D users and groups](handling_users_groups.md). You create users, assign passwords, create access groups that have different levels of privileges in the application.

You initiate the 4D password access control system with 4D Server by [assigning a password to the Designer user](handling_users_groups.md#designer-and-administrator). Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have [set up users and groups](handling_users_groups.md) (when the application opens, no ID is required). Se puede abrir cualquier parte de la aplicación.

Cuando se asigna una contraseña al Diseñador, todos los privilegios de acceso entran en vigor. In order to connect to the application or to a [server with protected access](handling_users_groups.md#assigning-group-access), remote users must enter a login/password.

Para desactivar el sistema de acceso por contraseña, basta con eliminar la contraseña del Diseñador.


## Control de acceso en las aplicaciones monopuesto



Single-user applications are desktop applications, deployed with 4D or merged with 4D Volume License. In single-user applications all users opening the application are [Designers](handling_users_groups.md#designer-and-administrator), they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon **user sessions**.

### Identificación del usuario

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) command, which returns the user who opened the system session. Por lo tanto, la autenticación de los usuarios se delega al sistema operativo.

You can then allow or deny access within your application by using code such as:

```4d
If(Current system user = $user) //vous pouvez stocker les utilisateurs dans une table de base de données
    // dar acceso a algunas funcionalidades
Enf if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protección del acceso

#### Privilegios

On a machine that is shared by several users, you can install the 4D application in a folder and give appropriate user access privileges to the folder at the OS level.

#### Cifrado de datos

If you want to protect access to the application data, we recommend to [encrypt data](MSC/encrypt.md) and provide the encryption key to the authorized user(s). 