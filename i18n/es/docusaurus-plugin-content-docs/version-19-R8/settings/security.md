---
id: security
title: Página seguridad
---

Esta página contiene opciones relacionadas con la protección del acceso y de los datos de sus aplicaciones de escritorio.

**Nota**: para una visión general de las funciones de seguridad de 4D, consulte la [guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).

## Acceso a datos / Acceso de usuarios remotos

> Estos parámetros no se aplican a las bases proyecto abiertas en modo monopuesto.

-   **Acceso Diseño y al Explorador de ejecución**: da al grupo especificado la capacidad de entrar al modo Diseño de la base y mostrar el Explorador de ejecución.

    Note que:
    -   La definición de un grupo de acceso en el entorno Diseño también permite desactivar la opción **Crear una tabla** de la caja de diálogo de importación de datos. Para más información sobre esta caja de diálogo, consulte [Importar los datos desde los archivos](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

    -   The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group. For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

-   **Usuario por defecto**: cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. Ya no es necesario ingresar un nombre de usuario. Además, si no ha asociado una contraseña al usuario por defecto, la caja de diálogo Contraseña ya no aparece y la base se abre directamente. Esta opción simplifica el acceso a la base de datos a la vez que mantiene un sistema completo de control de datos.

    -   Si ha asociado una contraseña al usuario predeterminado, al abrir la base aparece una caja de diálogo en el que los usuarios deben introducir una contraseña.
    -   Si no ha asociado una contraseña al Usuario Predeterminado, la caja de diálogo de Identificación de Usuario no aparecerá.**Nota:** puede "forzar" la visualización de la caja de diálogo Identificación de usuario cuando el modo "Usuario por defecto" está activo, por ejemplo para conectarse como Administrador o Diseñador. Para ello, presione la tecla **Mayús** mientras abre la base de datos o se conecta a ella.

-   **Mostrar lista de usuarios en la caja de diálogo Contraseña**: si se marca esta opción, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contraseña en la caja de diálogo de identificación de usuario. Si no está marcada, los usuarios deben introducir tanto su nombre como su contraseña. Para obtener más información sobre las dos versiones de la caja de diálogo de contraseña, consulte la sección "Acceso a las bases protegidas" en [Presentación del control de acceso](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html).

    -   **Ordenar la lista de los usuarios en orden alfabético** (sólo disponible si está marcada la opción anterior): cuando esta opción está seleccionada, la lista de los usuarios de la caja de diálogo de introducción de contraseña se ordena por orden alfabético.

-   **Los usuarios pueden cambiar su contraseña**: cuando esta opción está marcada, aparece un botón **Cambiar** en la caja de diálogo Identificación del usuario. Este botón permite al usuario acceder a la caja de diálogo que puede utilizar para modificar su contraseña (para más información sobre esta caja de diálogo, consulte "Modificación de la contraseña por parte del usuario" en [Garantizar el mantenimiento del sistema](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Si lo desea, puede ocultar el botón **Cambiar** para que los usuarios no puedan modificar sus contraseñas. Para ello, desmarque esta opción.

## Opciones

-   **Filtering of commands and project methods in the formula editor and 4D Write Pro documents**: For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to mutlistyle areas or 4D Write Pro documents using the [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html) command: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. You can completely or partially remove this filtering using the following options.
    -   **Enabled for all** (default option): Access to commands, functions and project methods is restricted for all users, including the Designer and the Administrator.
    -   **Disable for the Designer and the Administrator**: This option grants full access to 4D commands and to methods only for the Designer and Administrator. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed. **Note:** If full access has been enabled using the previous option, this option will have no effect.
    -   **Disabled for all**: This option disables control within formulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones). **Note:** This option takes priority over the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command. Cuando se selecciona, este comando no hace nada.

-   **Enable User Settings**: You need to check this option to be able to display separated dialog boxes for user settings. When this option is checked, up to three dialog boxes are available: **Structure Settings**, **User Settings**, and **User Settings for Data File**. For more information, refer to [User settings](overview.md#user-settings).

-   **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. Para hacer esto, debe marcar esta opción. Por defecto, no está marcado.

    Cuando esta opción está seleccionada:
    * los componentes 4D están cargados,
    * cada método base [On Host Database Event](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) del componente (si lo hay) es llamado por la base local,
    * se ejecuta el código del método.

    Cuando no está marcada:
    * 4D components are loaded but they have to manage their initialization and backup phases themselves.
    * the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)
    * the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation).