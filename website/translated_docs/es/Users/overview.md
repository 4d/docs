---
id: generalidades
title: Generalidades
---

Si diferentes personas utilizan una base de datos, lo que suele ocurrir en la arquitectura cliente-servidor o en las interfaces web, es necesario controlar el acceso u ofrecer diferentes funcionalidades en función de los usuarios conectados. It is also essential to provide security for sensitive data. Puede ofrecer esta protección asignando contraseñas a los usuarios y creando grupos que tengan diferentes niveles de acceso a la información de la base o a las operaciones de la misma.

> For an overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).





## Assigning group access

4D’s password access system is based on users and groups. Se crean usuarios y se les asignan contraseñas, se colocan los usuarios en grupos y se les asignan a cada grupo derechos de acceso apropiados a las partes de la base.

Los grupos pueden entonces asignar privilegios de acceso a partes específicas o funcionalidades de la base (acceso al modo Diseño, servidor HTTP, servidor SQL, etc.), o a cualquier parte personalizada.

The following example shows Design and Runtime explorer access rights being assigned to the "Devs" group:

![](assets/en/Users/Access1.png)



## Activating access control

You initiate the 4D password access control system in client-server by **assigning a password to the Designer**.

Hasta que no le asigne una contraseña al Diseñador, todos los accesos a la base se hacen con los derechos de acceso del Diseñador, incluso si ha configurado usuarios y grupos (cuando se abre la base, no se requiere ninguna identificación). Se puede abrir cualquier parte de la base.

When a password is assigned to the Designer, all the access privileges take effect. Para poder conectarse a la base, los usuarios remotos deben introducir una contraseña.

To disable the password access system, you just need to remove the Designer password.


## Users and groups in project architecture

En las bases proyecto (archivos .4DProject o .4dz), los usuarios y grupos 4D pueden configurarse tanto en entornos monousuario como cliente-servidor. Sin embargo, el control de acceso sólo es efectivo en las bases 4D Server. The following table lists the main users and groups features and their availability:

|                                                               | 4D Developer (monopuesto)    | 4D Server |
| ------------------------------------------------------------- | ---------------------------- | --------- |
| Adding/editing users and groups                               | sí                           | sí        |
| Assigning user/group access to servers                        | sí                           | sí        |
| User identification                                           | no (all users are Designer)  | sí        |
| Access control once the Designer has been assigned a password | no (all access are Designer) | sí        |





## Toolbox editor

The editors for users and groups are located in the toolbox of 4D. These editors can be used to create both users and groups, assign passwords to users, place users in groups, etc.

![](assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html) command.



## Directory.json file

Los usuarios, grupos, así como sus derechos de acceso se almacenan en un archivo específico de la base llamado **directory.json**.

This file can be stored at the following locations:

- en la carpeta de propiedades de la base usuario, es decir, en la carpeta "Settings" al mismo nivel que la carpeta "Project". Estas propiedades se utilizan por defecto para la base.
- in the data settings folder,  i.e. in the "Settings" folder in the "Data" folder. Si un archivo directory.json está presente en esta ubicación, tiene prioridad sobre el archivo en la carpeta Settings de la base usuario. This feature allows you to define custom/local Users and Groups configurations. La configuración personalizada no se verá afectada por una actualización de la base.

> Si la gestión de usuarios y grupos no está activa, el archivo directory.json no se crea.
