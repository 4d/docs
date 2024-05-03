---
id: overview
title: Presentación del control de acceso
---

Si diferentes personas utilizan una aplicación, lo que suele ocurrir en la arquitectura cliente-servidor o de interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades según de los usuarios conectados. También es esencial ofrecer la seguridad de los datos sensibles, incluso en las aplicaciones monopuesto.

La estrategia de control de acceso 4D depende de la configuración de su despliegue:

- en las aplicaciones multiusuario, puede confiar en los usuarios y grupos 4D,
- in single-user applications, user access is controlled through the system session, using commands such as [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html).

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Control de acceso en las aplicaciones multiusuario

Las aplicaciones multiusuario se despliegan con 4D Server. Incluyen aplicaciones cliente-servidor, web o REST.

In multi-user applications, access control is done through [4D users and groups](handling_users_groups.md). Puede crear usuarios, asignar contraseñas, crear grupos de acceso con diferentes niveles de privilegios en la aplicación.

You initiate the 4D password access control system with 4D Server by [assigning a password to the Designer user](handling_users_groups.md#designer-and-administrator). Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have [set up users and groups](handling_users_groups.md) (when the application opens, no ID is required). Se puede abrir cualquier parte de la aplicación.

Cuando se asigna una contraseña al Diseñador, todos los privilegios de acceso entran en vigor. In order to connect to the application or to a [server with protected access](handling_users_groups.md#assigning-group-access), remote users must enter a login/password.

Para desactivar el sistema de acceso por contraseña, basta con eliminar la contraseña del Diseñador.

## Control de acceso en las aplicaciones monopuesto

Las aplicaciones monopuesto son aplicaciones de escritorio, desplegadas con 4D o fusionadas con 4D Volume License. In single-user applications all users opening the application are [Designers](handling_users_groups.md#designer-and-administrator), they have all privileges and their name is "Designer". Access control is not based upon 4D users and groups, but upon **user sessions**.

### Identificación del usuario

To identify the current user in a 4D single-user application, you can rely on the [`Current system user`](https://doc.4d.com/4dv19R/help/command/en/page484.html) command, which returns the user who opened the system session. Por lo tanto, la autenticación de los usuarios se delega al sistema operativo.

A continuación, puede permitir o denegar el acceso dentro de su aplicación utilizando un código como:

```4d
If(Current system user = $user) //you can store users in a database table
	// give access to some features
End if
```

If you want to use the system user name in 4D instead of "Designer" (e.g. in log files), you can call the [`SET USER ALIAS`](https://doc.4d.com/4dv19R/help/command/en/page1666.html) command, for example:

```4d
SET USER ALIAS(Current system user)
```

### Protección del acceso

#### Privilegios

En una máquina compartida por varios usuarios, puede instalar la aplicación 4D en una carpeta y dar privilegios de acceso usuario apropiados a la carpeta a nivel del sistema operativo.

#### Cifrado de datos

If you want to protect access to the application data, we recommend to [encrypt data](MSC/encrypt.md) and provide the encryption key to the authorized user(s).
