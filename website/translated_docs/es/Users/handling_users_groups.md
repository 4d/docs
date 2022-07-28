---
id: editing
title: Gestión de usuarios y grupos 4D
---

## Diseñador y administrador

4D ofrece a los usuarios ciertos privilegios de acceso estándar y ciertas prerrogativas. Una vez iniciado un sistema de usuarios y grupos, estos privilegios estándar toman efecto.

El usuario más poderoso se llama el **Diseñador**. Ningún aspecto de la base de datos está cerrado al Diseñador. El diseñador puede:
- acceder a todos los servidores de la base sin restricciones,
- crear usuarios y grupos,
- asignar privilegios de acceso a los grupos,
- acceder al entorno Diseño. En un entorno monopuesto, siempre se utilizan los derechos de acceso del Diseñador. En el entorno cliente/servidor, la asignación de una contraseña al Diseñador activa la visualización del diálogo de inicio de sesión del usuario 4D.  El acceso al entorno Diseño es de sólo lectura.

Después del Diseñador, el siguiente usuario más poderoso es el **Administrador**, al que se le suelen encomendar las tareas de gestión del sistema de acceso y las funciones de administración.

El administrador puede:
- crear usuarios y grupos,
- acceder al monitor y a la ventana de administración de 4D Server
- acceder a la ventana CSM para supervisar la copia de seguridad, la restauración o el servidor.

El administrador no puede:
- modificar el usuario Diseñador
- por defecto, el acceso a las partes protegidas de la base. En particular, el administrador no puede acceder al modo Diseño si está restringido. En particular, el administrador no puede acceder al modo Diseño si está restringido. El administrador se coloca en todos los grupos nuevos, pero puede eliminar el nombre del administrador de cualquier grupo.

Tanto el Diseñador como el Administrador están disponibles por defecto en todas las bases. En la [caja de diálogo de gestión de usuarios](#users-and-groups-editor), los iconos del Diseñador y del Administrador se muestran en rojo y verde respectivamente:

- Icono Diseñador: ![](assets/en/Users/iconDesigner.png)
- Icono del Administrador: ![](assets/en/Users/iconAdmin.png)

Puede cambiar el nombre de los usuarios Diseñador y Administrador. En el lenguaje, el ID del diseñador es siempre 1 y el ID del administrador es siempre 2.

El Diseñador y el Administrador pueden crear hasta 16.000 grupos y 16.000 usuarios cada uno.



## Editor de usuarios

El editor de usuarios se encuentran en la caja de herramientas de 4D.

![](assets/en/Users/editor.png)

### Añadir y modificar usuarios

El editor de usuarios permite crear cuentas de usuario, definir sus propiedades y asignarlas a distintos grupos.

Para añadir un usuario desde la caja de herramientas :

1. Seleccione **Caja de herramientas > Usuarios** en el menú **Diseño** o haga clic en el botón **Caja de herramientas** de la barra de herramientas de 4D. 4D muestra el editor de usuarios.

La lista de usuarios muestra todos los usuarios, incluyendo el [Diseñador y el Administrador](#designer-and-administrator).

2. Haga clic en el botón ![](assets/en/Users/PlussNew.png) situado debajo de la lista de usuarios. O Haga clic derecho en la lista de usuarios y seleccione **Añadir** o **Duplicar** en el menú contextual.

> El comando **Duplicar** se puede utilizar para crear varios usuarios que tengan las mismas características rápidamente.

4D añade un nuevo usuario a la lista, llamado por defecto "Nuevo usuarioX".

3. Introduzca el nombre de usuario. Este nombre será utilizado por el usuario para abrir la base. Puede renombrar un usuario en cualquier momento utilizando el comando **Renombrar** del menú contextual, o utilizando los atajos Alt+clic (Windows) u Opción+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar.

4. To enter a password for the user, click the **Edit...** button in the user properties area and enter the password twice in the dialog box. Puede utilizar hasta 15 caracteres alfanuméricos para una contraseña. El editor de contraseñas es sensible a las mayúsculas y minúsculas.

> Users can change their password at any time according to the options in the "Security" page of the database settings, or using the `CHANGE PASSWORD` command.

5. Set the group(s) to which the user belongs using the "Member of Groups" table. You can add or remove the selected user to/from a group by checking the corresponding option in the Member column.

The membership of users to different groups can also be set by group on the [Groups page](#configuring-access-groups).

### Eliminar un usuario

To delete a user, select it then click the deletion button or use the **Delete** command of the context menu. ![](assets/en/Users/MinussNew.png)

Los nombres de usuario borrados ya no aparecen en el editor de usuarios. Note that the IDs for deleted users are reassigned when new user accounts are created.

### Propiedades de los usuarios

- **User Kind**: The User Kind field contains "Designer", "Administrator", or (for all other users) "User".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the database (optional). This method can be used for example to load the user preferences.


## Editor de grupos

El editor de grupos se encuentra en la caja de herramientas de 4D.

### Configurar grupos

You use the groups editor to set the elements that each group contains (users and/or other groups) and to distribute access to plug-ins.

Keep in mind that once a group has been created, it cannot be deleted. If you want to deactivate a group, you just need to remove any users it contains.

Para crear un grupo:

1. Select **Tool Box > Groups** in the **Design** menu or click  on the **Tool Box** button of the 4D toolbar then on the **Groups** button. 4D muestra la ventana del editor de grupos. La lista de grupos muestra todos los grupos de la base.

2. Click on the ![](assets/en/Users/PlussNew.png) button located below the list of groups.  
   OR  
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> The Duplicate command can be used to create several groups having the same characteristics quickly.

4D añade un nuevo grupo a la lista, llamado por defecto "Nuevo grupoX".

3. Introduzca el nombre del nuevo grupo. El nombre del grupo puede tener hasta 15 caracteres. You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.


### Colocar los usuarios o los grupos en grupos

You can place any user or group into a group, and you can also place the group itself into several other groups. No es obligatorio colocar a un usuario en un grupo.

To place a user or group in a group, you simply need to check the "Member" option for each user or group in the member attribution area:

![](assets/en/Users/groups.png)

If you check the name of a user, this user is added to the group. If you check the name of a group, all the users of the group are added to the new group. The affiliated user or group will then have the same access privileges as those assigned to the new group.

Placing groups into other groups lets you create a user hierarchy. The users of a group placed in another group will have the access privileges of both groups. See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

To remove a user or group from another group, you just need to deselect the corresponding option in the member attribution area.

### Asignar un grupo a un plug-in o a un servidor

You can assign a group privileges to any plug-ins installed in the database. Esto incluye todos los plug-ins de 4D y los de terceros.

Distributing access to the plug-ins lets you control the use of the licenses you possess for these plug-ins. Any users that do not belong to the access group of a plug-in cannot load this plug-in.

You can also restrict the use of the 4D Client Web server and SOAP server via the plug-in access area.

The “Plug-in” area on the Groups page of the tool box lists all the plug-ins loaded by the 4D application. To give a group access to a plug-in, you simply need to check the corresponding option.

![](assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. Estas licencias son consideradas por 4D Server como licencias de plug-in. Therefore, in the same way as for plug-ins, you can restrict the right to use these licenses to a specific group of users.


### Un esquema de acceso jerárquico

The best way to ensure the security of your database and provide users with different levels of access is to use an access hierarchy scheme. Users can be assigned to appropriate groups and groups can be nested to create a hierarchy of access rights. Esta sección describe varios enfoques de este esquema.

In this example, a user is assigned to one of three groups depending on their level of responsibility. Users assigned to the Accounting group are responsible for data entry. Users assigned to the Finances group are responsible for maintaining the data, including updating records and deleting outdated records. Users assigned to the General Management group are responsible for analyzing the data, including performing searches and printing analytical reports.

The groups are then nested so that privileges are correctly distributed to the users of each group.

- The General Management group contains only “high-level” users. ![](assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](assets/en/Users/schema3.png)

You can decide which access privileges to assign to each group based on the level of responsibility of the users it includes.

Such a hierarchical system makes it easy to remember to which group a new user should be assigned. You only have to assign each user to one group and use the hierarchy of groups to determine access.
