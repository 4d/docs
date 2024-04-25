---
id: security
title: Página seguridad
---

Esta página contiene opciones relacionadas con la protección del acceso y de los datos de sus aplicaciones de escritorio.

**Note**: For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).

## Acceso a datos / Acceso de usuarios remotos

> Estos parámetros no se aplican a las bases proyecto abiertas en modo monopuesto.

- **Design and Runtime Explorer Access**: Gives the specified group the ability to enter the Design environment of the database and display the Runtime Explorer.

  Note que:

  - Setting an access group in the Design environment also lets you deactivate the **Create table** option in the data import dialog box. For more information about this dialog box, refer to [Importing data from files](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

  - The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

- **Default User**: When a Default User has been set, every user that opens the database or logs onto it has the same access privileges and restrictions defined for this Default User. Ya no es necesario ingresar un nombre de usuario. Además, si no ha asociado una contraseña al usuario por defecto, la caja de diálogo Contraseña ya no aparece y la base se abre directamente.
  Esta opción simplifica el acceso a la base de datos a la vez que mantiene un sistema completo de control de datos.

  - Si ha asociado una contraseña al usuario predeterminado, al abrir la base aparece una caja de diálogo en el que los usuarios deben introducir una contraseña.
  - If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. To do so, press the **Shift** key while opening the database or connecting to it.

- **Display User List in Password Dialog Box**: If this option is checked, users must choose their name from the list of users and enter their password in the User Identification dialog box. Si no está marcada, los usuarios deben introducir tanto su nombre como su contraseña. For more information about the two versions of the password dialog box, see the section "Access system overview" in [Access system overview](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

  - **User List in Alphabetical Order** (only available if the previous option is checked): When this option is checked, the list of users in the password entry dialog box is sorted by alphabetical order.

- **Users can change their password**: When this option is checked, a **Change** button is displayed in the User Identification dialog box. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). If desired, you can hide the **Change** button so that users cannot modify their passwords. Para ello, desmarque esta opción.

## Opciones

- **Filtering of commands and project methods in the formula editor and 4D Write Pro documents**:
  For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to mutlistyle areas or 4D Write Pro documents using the [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html) command: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. Puede eliminar total o parcialmente este filtrado mediante las siguientes opciones.
  - **Enabled for all** (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator.
  - **Disable for the Designer and the Administrator**: This option grants full access to 4D commands and to methods only for the Designer and Administrator. Permite definir un modo de acceso ilimitado a los comandos y métodos sin perder el control de las operaciones efectuadas. Durante la fase de desarrollo, este modo puede utilizarse para probar libremente todas las fórmulas, informes, etc. Durante el funcionamiento, puede utilizarse para definir soluciones seguras que permitan el acceso temporal a comandos y métodos. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
    **Note:** If full access has been enabled using the previous option, this option will have no effect.
  - **Disabled for all**: This option disables control within formulas. Cuando esta opción está marcada, los usuarios tienen acceso a todos los comandos 4D, plug-ins y métodos proyecto (excepto los invisibles).
    **Note:** This option takes priority over the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command. Cuando se selecciona, este comando no hace nada.

- **Enable User Settings**: You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: **Structure Settings**, **User Settings**, and **User Settings for Data File**. For more information, refer to [User settings](overview.md#user-settings).

- **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. Por razones de seguridad, debe autorizar explícitamente la ejecución de este método en cada base de datos local. Para hacer esto, debe marcar esta opción. Por defecto, no está marcado.

  Cuando esta opción está seleccionada:

  - los componentes 4D están cargados,
  - each [On Host Database Event database method](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) of the component (if any) is called by the host database,
  - se ejecuta el código del método.

  Cuando no está marcada:

  - Los componentes 4D se cargan, pero tienen que gestionar ellos mismos sus fases de inicialización y copia de seguridad.
  - el desarrollador del componente tiene que publicar los métodos del componente que deben ser llamados por la base de datos anfitriona durante estas fases (inicio y cierre)
  - el desarrollador de la base local debe llamar a los métodos apropiados del componente en el momento adecuado (debe estar contemplado en la documentación del componente).
