---
id: security
title: Página seguridad
---

Esta página contiene opciones relacionadas con la protección del acceso y de los datos de sus aplicaciones de escritorio.

**Nota**: para una visión general de las funciones de seguridad de 4D, consulte la [guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).

## Acceso a datos / Acceso de usuarios remotos

> Estos parámetros no se aplican a las bases proyecto abiertas en modo monopuesto.

- **Acceso Diseño y al Explorador de ejecución**: da al grupo especificado la capacidad de entrar al modo Diseño de la base y mostrar el Explorador de ejecución.

  Note que:

  - La definición de un grupo de acceso en el entorno Diseño también permite desactivar la opción **Crear una tabla** de la caja de diálogo de importación de datos. Para más información sobre esta caja de diálogo, consulte [Importar los datos desde los archivos](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

  - The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

- **Usuario por defecto**: cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. Ya no es necesario ingresar un nombre de usuario. Además, si no ha asociado una contraseña al usuario por defecto, la caja de diálogo Contraseña ya no aparece y la base se abre directamente.
  Esta opción simplifica el acceso a la base de datos a la vez que mantiene un sistema completo de control de datos.

  - Si ha asociado una contraseña al usuario predeterminado, al abrir la base aparece una caja de diálogo en el que los usuarios deben introducir una contraseña.
  - If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. Para ello, presione la tecla **Mayús** mientras abre la base de datos o se conecta a ella.

- **Mostrar lista de usuarios en la caja de diálogo Contraseña**: si se marca esta opción, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contraseña en la caja de diálogo de identificación de usuario. Si no está marcada, los usuarios deben introducir tanto su nombre como su contraseña. Para obtener más información sobre las dos versiones de la caja de diálogo de contraseña, consulte la sección "Acceso a las bases protegidas" en [Presentación del control de acceso](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html

  - **Ordenar la lista de los usuarios en orden alfabético** (sólo disponible si está marcada la opción anterior): cuando esta opción está seleccionada, la lista de los usuarios de la caja de diálogo de introducción de contraseña se ordena por orden alfabétic

- **Los usuarios pueden cambiar su contraseña**: cuando esta opción está marcada, aparece un botón **Cambiar** en la caja de diálogo Identificación del usuario. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Si lo desea, puede ocultar el botón **Cambiar** para que los usuarios no puedan modificar sus contraseñas. Para ello, desmarque esta opción.

## Opciones

- **Filtering of commands and project methods in the formula editor and 4D Write Pro documents**:
  For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to mutlistyle areas or 4D Write Pro documents using the [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html) command: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. Puede eliminar total o parcialmente este filtrado mediante las siguientes opciones.
  - **Activado para todos** (opción por defecto): el acceso a los comandos, funciones y métodos proyecto está restringido para todos los usuarios, incluidos el Diseñador y el Administrador.
  - **Desactivado para el Diseñador y el Administrador**: esta opción concede acceso completo a los comandos 4D y a los métodos sólo al Diseñador y al Administrador. Permite definir un modo de acceso ilimitado a los comandos y métodos sin perder el control de las operaciones efectuadas. Durante la fase de desarrollo, este modo puede utilizarse para probar libremente todas las fórmulas, informes, etc. Durante el funcionamiento, puede utilizarse para definir soluciones seguras que permitan el acceso temporal a comandos y métodos. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
    **Nota:** si se ha activado el acceso completo mediante la opción anterior, esta opción no tendrá ningún efecto.
  - **Desactivado para todos**: esta opción desactiva el control en las fórmulas. Cuando esta opción está marcada, los usuarios tienen acceso a todos los comandos 4D, plug-ins y métodos proyecto (excepto los invisibles).
    **Nota:** esta opción tiene prioridad sobre el comando [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html). Cuando se selecciona, este comando no hace nada.

- **Autorizar las propiedades usuario**: debe marcar esta opción para poder mostrar cajas de diálogo separadas para las propiedades usuario. Cuando esta opción está marcada, hay disponibles hasta tres cuadros de diálogo: **Propiedades estructura**, **Propiedades usuario**, y **Propiedades usuario para archivo de datos**. Para más información, consulte [Propiedades usuario](overview.md#user-settings).

- **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. Por razones de seguridad, debe autorizar explícitamente la ejecución de este método en cada base de datos local. Para hacer esto, debe marcar esta opción. Por defecto, no está marcado.

  Cuando esta opción está seleccionada:

  - los componentes 4D están cargados,
  - cada método base [On Host Database Event](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) del componente (si lo hay) es llamado por la base local,
  - se ejecuta el código del método.

  Cuando no está marcada:

  - Los componentes 4D se cargan, pero tienen que gestionar ellos mismos sus fases de inicialización y copia de seguridad.
  - el desarrollador del componente tiene que publicar los métodos del componente que deben ser llamados por la base de datos anfitriona durante estas fases (inicio y cierre)
  - el desarrollador de la base local debe llamar a los métodos apropiados del componente en el momento adecuado (debe estar contemplado en la documentación del componente).
