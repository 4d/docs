---
id: overview
title: Generalidades
---

If more than one person uses an application, which is usually the case in client-server architecture or Web interfaces, you need to control access or provide different features according to the connected users. También es esencial ofrecer seguridad a los datos sensibles. You can provide this security by assigning passwords to users and creating access groups that have different levels of access to information in the application or to application operations.

> Consulte la documentación [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/) para una visión de conjunto de las funciones de seguridad de 4D.





## Asignación de acceso a grupos

El sistema de acceso con contraseña de 4D se basa en usuarios y grupos. You create users and assign passwords, put users in groups, and assign each group access rights to appropriate parts of the application.

Groups can then be assigned access privileges to specific parts or features of the application (Design access, HTTP server, SQL server, etc.), or any custom part.

El siguiente ejemplo muestra los derechos de acceso del explorador de diseño y tiempo de ejecución asignados al grupo "Devs":

![](assets/en/Users/Access1.png)



## Activar el control de acceso

El sistema de control de acceso por contraseña de 4D en cliente-servidor se activa mediante **la asignación de una contraseña al Diseñador**.

Until you give the Designer a password, all application access are done with the Designer's access rights, even if you have set up users and groups (when the application opens, no ID is required). Any part of the application can be opened.

Cuando se asigna una contraseña al Diseñador, todos los privilegios de acceso entran en vigor. In order to connect to the application, remote users must enter a password.

Para desactivar el sistema de acceso por contraseña, basta con eliminar la contraseña del Diseñador.


## Usuarios y grupos en la arquitectura proyecto

In project applications (.4DProject or .4dz files), 4D users and groups can be configured in both single-user and client-server environments. However, access control is only effective with 4D Server. La siguiente tabla enumera las principales funcionalidades de los usuarios y grupos y su disponibilidad:

|                                                                          | 4D (monopuesto)                       | 4D Server |
| ------------------------------------------------------------------------ | ------------------------------------- | --------- |
| Añadir/editar usuarios y grupos                                          | sí                                    | sí        |
| Asignar el acceso de usuarios/grupos a los servidores                    | sí                                    | sí        |
| Identificación del usuario                                               | no (todos los usuarios son Diseñador) | sí        |
| Control de acceso una vez que se ha asignado una contraseña al Diseñador | no (todos los accesos son Diseñador)  | sí        |





## Editor de la caja de herramientas

Los editores de usuarios y grupos se encuentran en la caja de herramientas de 4D. Estos editores pueden utilizarse para crear tanto usuarios como grupos, asignar contraseñas a los usuarios, colocar a los usuarios en grupos, etc.

![](assets/en/Users/editor.png)

> El editor de usuarios y grupos se puede mostrar en tiempo de ejecución utilizando el comando [EDIT ACCESS](https://doc.4d.com/4Dv18/4D/18/EDIT-ACCESS.301-4504687.en.html). The whole users and groups configuration can also be edited during application execution using 4D language commands of the [Users and Groups](https://doc.4d.com/4Dv18R3/4D/18-R3/Users-and-Groups.201-4900438.en.html) theme.



## Archivo directory.json

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

Este archivo puede almacenarse en las siguientes ubicaciones:

- in the user settings folder, i.e. in the "Settings" folder at the same level as the "Project" folder. These settings are used by default for the application.
- en la carpeta de propiedades de los datos, es decir, en la carpeta " Settings " de la carpeta " Data ". If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. Esta funcionalidad permite definir configuraciones Usuarios y Grupos personalizadas/locales. The custom configuration will left untouched by an application upgrade.

> If 4D password access control is not enabled, the **directory.json** is not created.

