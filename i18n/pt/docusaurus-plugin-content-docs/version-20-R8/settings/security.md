---
id: security
title: Página segurança
---

This page contains options related to data access and protection for your desktop applications.

**Nota**: para una visión general de las funciones de seguridad de 4D, consulte la [guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).

## Acesso aos dados / Acesso de usuários remotos

> These settings do not apply to project databases opened in single-user mode.

- **Acceso Diseño y al Explorador de ejecución**: da al grupo especificado la capacidad de entrar al modo Diseño de la base y mostrar el Explorador de ejecución.

  Note que:

  - La definición de un grupo de acceso en el entorno Diseño también permite desactivar la opción **Crear una tabla** de la caja de diálogo de importación de datos. Para más información sobre esta caja de diálogo, consulte [Importar los datos desde los archivos](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

  - The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

- **Usuario por defecto**: cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. Já não é necessário introduzir um nome de usuário. Moreover, if you have not associated a password with the Default User, the Password dialog box no longer appears and the database opens directly.
  This option simplifies access to the database while maintaining a complete data control system.

  - If you have associated a password with the Default User, a dialog box appears when the database is opened and the users must enter a password.
  - If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. Para ello, presione la tecla **Mayús** mientras abre la base de datos o se conecta a ella.

- **Mostrar lista de usuarios en la caja de diálogo Contraseña**: si se marca esta opción, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contraseña en la caja de diálogo de identificación de usuario. Se essa opção não estiver marcada, os usuários deverão digitar o nome e a senha. Para obtener más información sobre las dos versiones de la caja de diálogo de contraseña, consulte la sección "Acceso a las bases protegidas" en [Presentación del control de acceso](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html

  - **Ordenar la lista de los usuarios en orden alfabético** (sólo disponible si está marcada la opción anterior): cuando esta opción está seleccionada, la lista de los usuarios de la caja de diálogo de introducción de contraseña se ordena por orden alfabétic

- **Los usuarios pueden cambiar su contraseña**: cuando esta opción está marcada, aparece un botón **Cambiar** en la caja de diálogo Identificación del usuario. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Si lo desea, puede ocultar el botón **Cambiar** para que los usuarios no puedan modificar sus contraseñas. Para o fazer, basta desmarcar esta opção.

## Opções

- **Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents**:
  For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to multistyle areas (using [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html)), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. You can completely or partially remove this filtering using the following options.
  - **Activado para todos** (opción por defecto): el acceso a los comandos, funciones y métodos proyecto está restringido para todos los usuarios, incluidos el Diseñador y el Administrador.
  - **Desactivado para el Diseñador y el Administrador**: esta opción concede acceso completo a los comandos 4D y a los métodos sólo al Diseñador y al Administrador. It can be used to set up an unlimited access mode to commands and methods while remaining in control of the operations carried out. During the development phase, this mode can be used to freely test all the formulas, reports, and so on. During operation, it can be used to set up secure solutions that allow access to commands and methods on a temporary basis. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
    **Nota:** si se ha activado el acceso completo mediante la opción anterior, esta opción no tendrá ningún efecto.
  - **Desactivado para todos**: esta opción desactiva el control en las fórmulas. When this option is checked, users have access to all the 4D commands and plug-ins as well as all project methods (except for invisible ones).
    **Nota:** esta opción tiene prioridad sobre el comando [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html). Quando está selecionado, este comando não faz nada.

- **Autorizar las propiedades usuario**: debe marcar esta opción para poder mostrar cajas de diálogo separadas para las propiedades usuario. Cuando esta opción está marcada, hay disponibles hasta tres cuadros de diálogo: **Propiedades estructura**, **Propiedades usuario**, y **Propiedades usuario para archivo de datos**. Para más información, consulte [Propiedades usuario](overview.md#user-settings).

- **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. For security reasons, you must explicitly authorize the execution of this method in each host database. Para o efeito, é necessário marcar esta opção. Por padrão, não está marcada.

  Quando esta opção está seleccionada:

  - os componentes 4D são carregados,
  - cada método base [On Host Database Event](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) del componente (si lo hay) es llamado por la base local,
  - o código do método é executado.

  Quando não é verificado:

  - 4D components are loaded but they have to manage their initialization and backup phases themselves.
  - the developer of the component has to publish the component methods that must be called by the host database during these phases (startup and shutdown)
  - the developer of the host database must call the appropriate methods of the component at the right time (must be covered in the component documentation).
