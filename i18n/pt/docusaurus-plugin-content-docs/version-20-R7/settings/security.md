---
id: security
title: Página segurança
---

Esta página contém opções relacionadas ao acesso e à proteção de dados para seus aplicativos de desktop.

**Nota**: para una visión general de las funciones de seguridad de 4D, consulte la [guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).

## Acesso aos dados / Acesso de usuários remotos

> Essas configurações não se aplicam às bases de dados do projeto abertas no modo de usuário único.

- **Acceso Diseño y al Explorador de ejecución**: da al grupo especificado la capacidad de entrar al modo Diseño de la base y mostrar el Explorador de ejecución.

  Note que:

  - La definición de un grupo de acceso en el entorno Diseño también permite desactivar la opción **Crear una tabla** de la caja de diálogo de importación de datos. Para más información sobre esta caja de diálogo, consulte [Importar los datos desde los archivos](https://doc.4d.com/4Dv19/4D/19/Importing-data-from-files.300-5416859.en.html).

  - The Designer and Administrator always have access to the Design environment and Runtime Explorer, even if they are not explicitly part of the specified access group.For more information about users and user groups, refer to the [Users and groups](https://doc.4d.com/4Dv19/4D/19/Users-and-groups.200-5416628.en.html) chapter.

- **Usuario por defecto**: cuando se ha definido un Usuario por defecto, todos los usuarios que abren o se conectan a la base tienen los mismos privilegios y restricciones de acceso definidos para este Usuario por defecto. Já não é necessário introduzir um nome de usuário. Além disso, se você não tiver associado uma senha com o usuário padrão, a caixa de diálogo de senha não aparece mais e o banco de dados abre diretamente.
  Esta opção simplifica o acesso ao banco de dados, mantendo um sistema completo de controle de dados.

  - Se você associou uma senha ao usuário padrão, uma caixa de diálogo aparece quando o banco de dados está aberto e os usuários devem inserir uma senha.
  - If you haven't associated a password with the Default User, the User Identification dialog box will not appear.**Note:** You can "force" the display of the User Identification dialog box when the "Default User" mode is active, for instance in order to connect as Administrator or Designer. Para ello, presione la tecla **Mayús** mientras abre la base de datos o se conecta a ella.

- **Mostrar lista de usuarios en la caja de diálogo Contraseña**: si se marca esta opción, los usuarios deben elegir su nombre en la lista de usuarios e introducir su contraseña en la caja de diálogo de identificación de usuario. Se essa opção não estiver marcada, os usuários deverão digitar o nome e a senha. Para obtener más información sobre las dos versiones de la caja de diálogo de contraseña, consulte la sección "Acceso a las bases protegidas" en [Presentación del control de acceso](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html

  - **Ordenar la lista de los usuarios en orden alfabético** (sólo disponible si está marcada la opción anterior): cuando esta opción está seleccionada, la lista de los usuarios de la caja de diálogo de introducción de contraseña se ordena por orden alfabétic

- **Los usuarios pueden cambiar su contraseña**: cuando esta opción está marcada, aparece un botón **Cambiar** en la caja de diálogo Identificación del usuario. This button lets the user access a dialog box that can be used to change their password (for more information about this dialog box, refer to the "Modification of password by user" in [Ensuring system maintenance](https://doc.4d.com/4Dv19/4D/19/Access-system-overview.300-5416896.en.html)). Si lo desea, puede ocultar el botón **Cambiar** para que los usuarios no puedan modificar sus contraseñas. Para o fazer, basta desmarcar esta opção.

## Opções

- **Filtering of commands and project methods in the formula editor and in the 4D View Pro and 4D Write Pro documents**:
  For security reasons, by default 4D restricts access to the commands, functions and project methods in the [Formula editor](https://doc.4d.com/4Dv19/4D/19/Formula-editor.200-5416596.en.html) in Application mode or added to multistyle areas (using [ST INSERT EXPRESSION](https://doc.4d.com/4dv19R/help/command/en/page1281.html)), 4D Write Pro and 4D View Pro documents: only certain 4D functions and project methods that have been explicitly declared using the [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html) command can be used. Você pode remover completamente ou parcialmente esta filtragem usando as seguintes opções.
  - **Activado para todos** (opción por defecto): el acceso a los comandos, funciones y métodos proyecto está restringido para todos los usuarios, incluidos el Diseñador y el Administrador.
  - **Desactivado para el Diseñador y el Administrador**: esta opción concede acceso completo a los comandos 4D y a los métodos sólo al Diseñador y al Administrador. Ele pode ser usado para definir um modo de acesso ilimitado para comandos e métodos, enquanto permanece no controle das operações realizadas. Durante a fase de desenvolvimento, este modo pode ser usado para testar livremente todas as fórmulas, relatórios e assim por diante. Durante a operação, pode ser usado para configurar soluções seguras que permitam o acesso a comandos e métodos temporários. This consists in changing the user (via the [CHANGE CURRENT USER](https://doc.4d.com/4dv19R/help/command/en/page289.html) command) before calling a dialog box or starting a printing process that requires full access to the commands, then returning to the original user when the specific operation is completed.
    **Nota:** si se ha activado el acceso completo mediante la opción anterior, esta opción no tendrá ningún efecto.
  - **Desactivado para todos**: esta opción desactiva el control en las fórmulas. Quando esta opção estiver marcada, os usuários terão acesso a todos os comandos 4D e plug-ins, bem como a todos os métodos do projeto (exceto para os invisíveis).
    **Nota:** esta opción tiene prioridad sobre el comando [SET ALLOWED METHODS](https://doc.4d.com/4dv19R/help/command/en/page805.html). Quando está selecionado, este comando não faz nada.

- **Autorizar las propiedades usuario**: debe marcar esta opción para poder mostrar cajas de diálogo separadas para las propiedades usuario. Cuando esta opción está marcada, hay disponibles hasta tres cuadros de diálogo: **Propiedades estructura**, **Propiedades usuario**, y **Propiedades usuario para archivo de datos**. Para más información, consulte [Propiedades usuario](overview.md#user-settings).

- **Execute "On Host Database Event" method of the components**: The [On Host Database Event database method](https://doc.4d.com/4D-Language-Reference-19-R4/Database-Methods/On-Host-Database-Event-database-method.301-5739713.en.html) facilitates the initialization and backup phases for 4D components. Por razões de segurança, você deve autorizar explicitamente a execução deste método em cada banco de dados de host. Para o efeito, é necessário marcar esta opção. Por padrão, não está marcada.

  Quando esta opção está seleccionada:

  - os componentes 4D são carregados,
  - cada método base [On Host Database Event](https://doc.4d.com/4Dv19/4D/19.1/On-Host-Database-Event-database-method.301-5653908.en.html) del componente (si lo hay) es llamado por la base local,
  - o código do método é executado.

  Quando não é verificado:

  - Os componentes 4D são carregados, mas eles têm que gerenciar suas fases de inicialização e backup por conta própria.
  - o desenvolvedor do componente tem que publicar os métodos do componente que devem ser chamados pelo banco de dados de host durante estas fases (inicialização e desligamento)
  - o desenvolvedor da base de dados de host deve chamar os métodos apropriados do componente no momento certo (deve ser coberto na documentação do componente).
