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
- por defecto, el acceso a las partes protegidas de la base. En particular, el administrador no puede acceder al modo Diseño si está restringido. In particular, the Administrator cannot access to the Design mode if it is restricted. El administrador se coloca en todos los grupos nuevos, pero puede eliminar el nombre del administrador de cualquier grupo.

Tanto el Diseñador como el Administrador están disponibles por defecto en todas las bases. En la [caja de diálogo de gestión de usuarios](#users-and-groups-editor), los iconos del Diseñador y del Administrador se muestran en rojo y verde respectivamente:

- Icono Diseñador: ![](../assets/en/Users/iconDesigner.png)
- Icono del Administrador: ![](../assets/en/Users/iconAdmin.png)

Puede cambiar el nombre de los usuarios Diseñador y Administrador. En el lenguaje, el ID del diseñador es siempre 1 y el ID del administrador es siempre 2.

El Diseñador y el Administrador pueden crear hasta 16.000 grupos y 16.000 usuarios cada uno.

## Editor de usuarios

El editor de usuarios se encuentran en la caja de herramientas de 4D.

![](../assets/en/Users/editor.png)

### Añadir y modificar usuarios

El editor de usuarios permite crear cuentas de usuario, definir sus propiedades y asignarlas a distintos grupos.

Para añadir un usuario desde la caja de herramientas :

1. Seleccione **Caja de herramientas > Usuarios** en el menú **Diseño** o haga clic en el botón **Caja de herramientas** de la barra de herramientas de 4D. 4D muestra el editor de usuarios.

La lista de usuarios muestra todos los usuarios, incluyendo el [Diseñador y el Administrador](#designer-and-administrator).

2. Haga clic en el botón ![](../assets/en/Users/PlussNew.png) situado debajo de la lista de usuarios. OR Right-click in the list of users and choose **Add** or **Duplicate** in the context menu.

> El comando **Duplicar** se puede utilizar para crear varios usuarios que tengan las mismas características rápidamente.

4D añade un nuevo usuario a la lista, llamado por defecto "Nuevo usuarioX".

3. Introduzca el nombre de usuario. Enter the user name. Puede renombrar un usuario en cualquier momento utilizando el comando **Renombrar** del menú contextual, o utilizando los atajos Alt+clic (Windows) u Opción+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar.

4. Para introducir una contraseña del usuario, haga clic en el botón **Editar...** en el área de propiedades del usuario e introduzca la contraseña dos veces en la caja de diálogo. Puede utilizar hasta 15 caracteres alfanuméricos para una contraseña. El editor de contraseñas es sensible a las mayúsculas y minúsculas.

> Users can change their password at any time according to the options in the "Security" page of the database settings, or using the `CHANGE PASSWORD` command.

5. Defina el grupo o los grupos a los que pertenece el usuario mediante la tabla "Miembro de los grupos". Puede añadir o eliminar el usuario seleccionado a un grupo marcando la opción correspondiente en la columna Miembro.

La pertenencia de los usuarios a los distintos grupos también puede definirse por grupos en la página [Grupos](#configuring-access-groups).

### Eliminar un usuario

Para eliminar un usuario, selecciónelo y haga clic en el botón de eliminación o utilice el comando **Suprimir** del menú contextual. ![](../assets/en/Users/MinussNew.png)

Los nombres de usuario borrados ya no aparecen en el editor de usuarios. Tenga en cuenta que los ID de los usuarios eliminados se reasignan cuando se crean nuevas cuentas de usuario.

### Propiedades de los usuarios

- El campo **Tipo de usuario**: el campo Tipo de usuario contiene "Diseñador", "Administrador" o (para todos los demás usuarios) "Usuario".

- **Startup Method**: Name of an associated method that will be automatically executed when the user opens the database (optional). Este método puede utilizarse, por ejemplo, para cargar las preferencias usuario.

## Editor de grupos

El editor de grupos se encuentra en la caja de herramientas de 4D.

### Configurar grupos

El editor de grupos sirve para definir los elementos que contiene cada grupo (usuarios y/o otros grupos) y para distribuir los accesos a los plug-ins.

Tenga en cuenta que una vez que se ha creado un grupo, no se puede eliminar. Si desea desactivar un grupo, sólo tiene que eliminar los usuarios que contiene.

Para crear un grupo:

1. Seleccione **Caja de herramientas > Grupos** en el menú **Diseño** o haga clic en el botón **Caja de herramientas** de la barra de herramientas de 4D luego haga clic en el botón **Grupos**. 4D muestra la ventana del editor de grupos. La lista de grupos muestra todos los grupos de la base.

2. Haga clic en el botón ![](../assets/en/Users/PlussNew.png)ubicado debajo de la lista de grupos.  
   O  
   Haga clic derecho en la lista de grupos y elija el comando **Añadir** o **Duplicar** en el menú contextual.

> El comando Duplicar se puede utilizar para crear varios grupos que tengan las mismas características rápidamente.

4D añade un nuevo grupo a la lista, llamado por defecto "Nuevo grupoX".

3. Introduzca el nombre del nuevo grupo. El nombre del grupo puede tener hasta 15 caracteres. Puede renombrar un grupo en cualquier momento utilizando el comando **Renombrar** del menú contextual, o utilizando los atajos Alt+clic (Windows) u Opción+clic (macOS), o haciendo dos veces clic en el nombre que quiera cambiar.

### Colocar los usuarios o los grupos en grupos

Puede colocar cualquier usuario o grupo en un grupo, y también puede colocar el propio grupo en varios otros grupos. No es obligatorio colocar a un usuario en un grupo.

Para incluir a un usuario o grupo en un grupo, basta con marcar la opción "Miembro" para cada usuario o grupo en el área de atribución de los miembros:

![](../assets/en/Users/groups.png)

Si se marca el nombre de un usuario, éste se añade al grupo. Si marca el nombre de un grupo, todos los usuarios del grupo se añaden al nuevo grupo. El usuario o grupo afiliado tendrá entonces los mismos privilegios de acceso que los asignados al nuevo grupo.

La colocación de grupos dentro de otros grupos permite crear una jerarquía de usuarios. Los usuarios de un grupo colocados en otro grupo tendrán los privilegios de acceso de ambos grupos. Ver "[Un esquema de jerarquía de acceso](#an-access-hierarchy-scheme)" abajo.

Para eliminar un usuario o grupo de otro grupo, basta con deseleccionar la opción correspondiente en el área de asignación de miembros.

### Asignar un grupo a un plug-in o a un servidor

You can assign a group privileges to any plug-ins installed in the database. Esto incluye todos los plug-ins de 4D y los de terceros.

Distribuir los accesos a los plug-ins le permite controlar el uso de las licencias que posee para estos plug-ins. Todo usuario que no pertenezca al grupo de acceso de un plug-in no puede cargar este plug-in.

You can also restrict the use of the 4D Client Web server and SOAP server via the plug-in access area.

El área "Plug-in" de la página Grupos de la caja de herramientas lista todos los plug-ins cargados por la aplicación 4D. Para dar acceso a un grupo a un complemento, basta con marcar la opción correspondiente.

![](../assets/en/Users/plugins.png)

Las líneas **4D Client Web Server** y **4D Client SOAP Server** permiten controlar la posibilidad de publicación Web y SOAP (Web Services) de cada 4D en modo remoto. Estas licencias son consideradas por 4D Server como licencias de plug-in. Por lo tanto, al igual que en el caso de los plug-ins, puede restringir el derecho de uso de estas licencias a un grupo específico de usuarios.

### Un esquema de acceso jerárquico

The best way to ensure the security of your database and provide users with different levels of access is to use an access hierarchy scheme. Los usuarios pueden ser asignados a los grupos apropiados y los grupos pueden ser anidados para crear una jerarquía de derechos de acceso. Esta sección describe varios enfoques de este esquema.

En este ejemplo, un usuario es asignado a uno de los tres grupos en función de su nivel de responsabilidad. Los usuarios asignados al grupo Contabilidad son responsables de la entrada de datos. Los usuarios asignados al grupo Finanzas son responsables de mantener los datos, incluyendo la actualización de los registros y la eliminación de los registros obsoletos. Los usuarios asignados al grupo de Gestión General se encargan de analizar los datos, incluyendo la realización de búsquedas y la impresión de informes analíticos.

A continuación, los grupos se anidan para que los privilegios se distribuyan correctamente entre los usuarios de cada grupo.

- The General Management group contains only “high-level” users. ![](../assets/en/Users/schema1.png)

- The Finances group contains data maintenance users as well as General Management users, thus the users in General Management have the privileges of the Finances group as well. ![](../assets/en/Users/schema2.png)

- The Accounting group contains data entry users as well as Finances group users, so the users who belong to the Finances group and the General Management group enjoy the privileges of the Accounting group as well. ![](../assets/en/Users/schema3.png)

Puede decidir qué privilegios de acceso asignar a cada grupo en función del nivel de responsabilidad de los usuarios que contiene.

Este sistema jerárquico permite recordar fácilmente a qué grupo debe asignarse un nuevo usuario. Sólo tiene que asignar cada usuario a un grupo y utilizar la jerarquía de grupos para determinar los accesos.
