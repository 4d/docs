---
id: editing
title: Gestión de usuarios y grupos 4D
---

En las aplicaciones multiusuarios, 4D ofrece a los usuarios ciertos privilegios de acceso estándar y ciertas prerrogativas. Una vez iniciado un sistema de usuarios y grupos, estos privilegios estándar toman efecto.

## Usuarios y grupos en los proyectos

En las aplicaciones proyecto (archivos .4DProject o .4dz), los usuarios y grupos 4D pueden configurarse tanto en entornos monopuesto como en multiusuarios. However, **access control** is only effective with 4D Server. La siguiente tabla enumera las principales funcionalidades de los usuarios y grupos y su disponibilidad:

|                                                                          | 4D (monopuesto)                       | 4D Server |
| ------------------------------------------------------------------------ | -------------------------------------------------------- | --------- |
| Añadir/editar usuarios y grupos                                          | sí                                                       | sí        |
| Asignar el acceso de usuarios/grupos a los servidores                    | sí                                                       | sí        |
| Identificación del usuario                                               | no (todos los usuarios son Diseñador) | sí        |
| Control de acceso una vez que se ha asignado una contraseña al Diseñador | no (todos los accesos son Diseñador)  | sí        |

> For information about user identification and access control in single-user deployments, see [this paragraph](overview.md#access-control-in-single-user-applications).

## Diseñador y administrador

The most powerful user is named **Designer**. Ningún aspecto de la aplicación es inaccesible al Diseñador.
El diseñador puede:

- acceder a todos los servidores de la aplicación sin restricciones,
- crear usuarios y grupos,
- asignar privilegios de acceso a los grupos,
- acceder al entorno Diseño.
  En un entorno monopuesto, siempre se utilizan los derechos de acceso del Diseñador.
  En el entorno cliente/servidor, la asignación de una contraseña al Diseñador activa la visualización del diálogo de inicio de sesión del usuario 4D.  El acceso al entorno Diseño es de sólo lectura.

After the Designer, the next most powerful user is the **Administrator**, who is usually given the tasks of managing the access system and administration features.

El administrador puede:

- crear usuarios y grupos,
- acceder al monitor y a la ventana de administración de 4D Server
- acceder a la ventana CSM para supervisar la copia de seguridad, la restauración o el servidor.

El administrador no puede:

- modificar el usuario Diseñador
- por defecto, el acceso a las partes protegidas de la aplicación. En particular, el administrador no puede acceder al modo Diseño si está restringido. En particular, el administrador no puede acceder al modo Diseño si está restringido. El administrador se coloca en todos los grupos nuevos, pero puede eliminar el nombre del administrador de cualquier grupo.

Tanto el Diseñador como el Administrador están disponibles por defecto en todas las aplicaciones. In the [user management dialog box](#users-and-groups-editor), the icons of the Designer and Administrator are displayed in red and green respectively:

- Designer icon: ![](../assets/en/Users/iconDesigner.png)
- Administrator icon: ![](../assets/en/Users/iconAdmin.png)

Puede cambiar el nombre de los usuarios Diseñador y Administrador. En el lenguaje, el ID del diseñador es siempre 1 y el ID del administrador es siempre 2.

El Diseñador y el Administrador pueden crear hasta 16.000 grupos y 16.000 usuarios cada uno.

## Editor de usuarios

El editor de usuarios se encuentran en la caja de herramientas de 4D.

![](../assets/en/Users/editor.png)

> Users and groups editor can be displayed at runtime using the [EDIT ACCESS](https://doc.4d.com/4dv19R/help/command/en/page281.html) command.
> The whole users and groups configuration can also be edited during application execution using 4D language commands of the `Users and Groups` theme.

### Añadir y modificar usuarios

El editor de usuarios permite crear cuentas de usuario, definir sus propiedades y asignarlas a distintos grupos.

Para añadir un usuario desde la caja de herramientas :

1. Select **Tool Box > Users** from the **Design** menu or click on the **Tool Box** button of the 4D toolbar.
   4D muestra el editor de usuarios.

The list of users displays all the users, including the [Designer and the Administrator](#designer-and-administrator).

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of users.
   OR
   Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> The **Duplicate** command can be used to create several users having the same characteristics quickly.

4D añade un nuevo usuario a la lista, llamado por defecto "Nuevo usuarioX".

3. Introduzca el nombre de usuario.
   Introduzca el nombre de usuario. You can rename a user at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

4. To enter a password for the user, click the **Edit...** button in the user properties area and enter the password twice in the dialog box.
   Puede utilizar hasta 15 caracteres alfanuméricos para una contraseña. El editor de contraseñas es sensible a las mayúsculas y minúsculas.

> Users can change their password at any time according to the options in the "Security" page of the structure settings, or using the `CHANGE PASSWORD` command.

5. Defina el grupo o los grupos a los que pertenece el usuario mediante la tabla "Miembro de los grupos".
   Puede añadir o eliminar el usuario seleccionado a un grupo marcando la opción correspondiente en la columna Miembro.

The membership of users to different groups can also be set by group on the [Groups page](#configuring-access-groups).

### Eliminar un usuario

To delete a user, select it then click the deletion button or use the **Delete** command of the context menu.
![](../assets/en/Users/MinussNew.png)

Los nombres de usuario borrados ya no aparecen en el editor de usuarios. Tenga en cuenta que los ID de los usuarios eliminados se reasignan cuando se crean nuevas cuentas de usuario.

### Propiedades de los usuarios

- **User Kind**: The User Kind field contains "Designer", "Administrator", or (for all other users) "User".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the application (optional). Este método puede utilizarse, por ejemplo, para cargar las preferencias usuario.

## Editor de grupos

El editor de grupos se encuentra en la caja de herramientas de 4D.

### Configurar grupos

El editor de grupos sirve para definir los elementos que contiene cada grupo (usuarios y/o otros grupos) y para distribuir los accesos a los plug-ins.

Tenga en cuenta que una vez que se ha creado un grupo, no se puede eliminar. Si desea desactivar un grupo, sólo tiene que eliminar los usuarios que contiene.

Para crear un grupo:

1. Select **Tool Box > Groups** in the **Design** menu or click  on the **Tool Box** button of the 4D toolbar then on the **Groups** button.
   4D muestra la ventana del editor de grupos. La lista de grupos muestra todos los grupos del proyecto de aplicación.

2. Click on the ![](../assets/en/Users/PlussNew.png) button located below the list of groups.\
   OR\
   Right-click in the list of groups and choose the **Add** or **Duplicate** command in the context menu.

> El comando Duplicar se puede utilizar para crear varios grupos que tengan las mismas características rápidamente.

4D añade un nuevo grupo a la lista, llamado por defecto "Nuevo grupoX".

3. Introduzca el nombre del nuevo grupo.
   El nombre del grupo puede tener hasta 15 caracteres.
   You can rename a group at any time using the **Rename** command of the context menu, or by using the Alt+click (Windows) or Option+click (macOS) shortcuts, or by clicking twice on the name you want to change.

### Colocar los usuarios o los grupos en grupos

Puede colocar cualquier usuario o grupo en un grupo, y también puede colocar el propio grupo en varios otros grupos. No es obligatorio colocar a un usuario en un grupo.

Para incluir a un usuario o grupo en un grupo, basta con marcar la opción "Miembro" para cada usuario o grupo en el área de atribución de los miembros:

![](../assets/en/Users/groups.png)

Si se marca el nombre de un usuario, éste se añade al grupo. Si marca el nombre de un grupo, todos los usuarios del grupo se añaden al nuevo grupo.
El usuario o grupo afiliado tendrá entonces los mismos privilegios de acceso que los asignados al nuevo grupo.

La colocación de grupos dentro de otros grupos permite crear una jerarquía de usuarios. Los usuarios de un grupo colocados en otro grupo tendrán los privilegios de acceso de ambos grupos. See "[An access hierarchy scheme](#an-access-hierarchy-scheme)" below.

Para eliminar un usuario o grupo de otro grupo, basta con deseleccionar la opción correspondiente en el área de asignación de miembros.

### Asignar un grupo a un plug-in o a un servidor

Puede asignar privilegios de grupo a cualquier plug-in instalado en el proyecto. Esto incluye todos los plug-ins de 4D y los de terceros.

Distribuir los accesos a los plug-ins le permite controlar el uso de las licencias que posee para estos plug-ins. Todo usuario que no pertenezca al grupo de acceso de un plug-in no puede cargar este plug-in.

> Las licencias utilizadas permanecen vinculadas a las cuentas de usuario 4D del grupo durante toda la sesión 4D.

El área "Plug-in" de la página Grupos de la caja de herramientas lista todos los plug-ins cargados por la aplicación 4D. Para dar acceso a un grupo a un complemento, basta con marcar la opción correspondiente.

![](../assets/en/Users/plugins.png)

The **4D Client Web Server** and **4D Client SOAP Server** items lets you control the possibility of Web and SOAP (Web Services) publication for each 4D in remote mode. Estas licencias son consideradas por 4D Server como licencias de plug-in. Por lo tanto, al igual que en el caso de los plug-ins, puede restringir el derecho de uso de estas licencias a un grupo específico de usuarios.

### Un esquema de acceso jerárquico

La mejor manera de garantizar la seguridad de su aplicación y ofrecer a los usuarios diferentes niveles de acceso es utilizar un esquema de jerarquía de acceso. Los usuarios pueden ser asignados a los grupos apropiados y los grupos pueden ser anidados para crear una jerarquía de derechos de acceso. Esta sección describe varios enfoques de este esquema.

En este ejemplo, un usuario es asignado a uno de los tres grupos en función de su nivel de responsabilidad. Los usuarios asignados al grupo Contabilidad son responsables de la entrada de datos. Los usuarios asignados al grupo Finanzas son responsables de mantener los datos, incluyendo la actualización de los registros y la eliminación de los registros obsoletos. Los usuarios asignados al grupo de Gestión General se encargan de analizar los datos, incluyendo la realización de búsquedas y la impresión de informes analíticos.

A continuación, los grupos se anidan para que los privilegios se distribuyan correctamente entre los usuarios de cada grupo.

- El grupo de Dirección General sólo contiene usuarios de "alto nivel".
  ![](../assets/en/Users/schema1.png)

- El grupo Finanzas contiene usuarios de mantenimiento de datos, así como también usuarios de Dirección General, por lo que los usuarios de Dirección General también tienen los privilegios del grupo Finanzas.
  ![](../assets/en/Users/schema2.png)

- El grupo Contabilidad contiene usuarios de entrada de datos así como usuarios del grupo Finanzas, por lo que los usuarios que pertenecen al grupo Finanzas y al grupo Dirección General disfrutan también de los privilegios del grupo Contabilidad.
  ![](../assets/en/Users/schema3.png)

Puede decidir qué privilegios de acceso asignar a cada grupo en función del nivel de responsabilidad de los usuarios que contiene.

Este sistema jerárquico permite recordar fácilmente a qué grupo debe asignarse un nuevo usuario. Sólo tiene que asignar cada usuario a un grupo y utilizar la jerarquía de grupos para determinar los accesos.

## Asignación de acceso a grupos

Los grupos tienen asignados privilegios de acceso para partes o funcionalidades específicas de la aplicación:

- Acceso al entorno Diseño y al Explorador de ejecución,
- Servidor HTTP,
- Servidor REST,
- Servidor SQL.

Estos accesos se definen en la caja de diálogo Parámetros. El siguiente ejemplo muestra los derechos de acceso del explorador de diseño y tiempo de ejecución asignados al grupo "Devs":

![](../assets/en/Users/Access1.png)

You also use groups to [distribute available licenses](#assigning-a-group-to-a-plug-in-or-to-a-server). Esta distribución se define en el editor Grupos.

## Archivo directory.json

Users, groups, as well as their access rights are stored in a specific project file named **directory.json**.

Este archivo puede ser almacenado en las siguientes ubicaciones, dependiendo de sus necesidades:

- If you want to use the same directory for all data files (or if you use a single data file), store the **directory.json** file in the user settings folder, i.e. in the "Settings" folder at the [same level as the "Project" folder](Project/architecture.md#project-folder) (default location).
- If you want to use a specific directory file per data file, store the **directory.json** file in the data settings folder, i.e. in the ["Settings" folder of the "Data" folder](Project/architecture.md#settings). If a **directory.json** file is present at this location, it takes priority over the file in the user settings folder. Esta configuración personalizada/local de los usuarios y de los grupos no se verá afectada por una actualización de la aplicación.

> To allow for safe changes of passwords and group memberships in a deployed environment, you can include your **directory.json** file in the server application during the build, using the [corresponding build application option](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).
