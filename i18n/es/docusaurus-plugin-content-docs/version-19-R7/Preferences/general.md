---
id: general
title: Página general
---

Esta página contiene varias opciones para configurar el funcionamiento general de su aplicación 4D.

## Opciones

### Al inicio

Esta opción permite configurar la visualización por defecto de 4D al inicio, cuando el usuario lanza únicamente la aplicación.

*   **No hacer nada**: sólo aparece la ventana de la aplicación, vacía.
*   **Diálogo de apertura de proyecto local**: 4D muestra una caja de diálogo estándar de apertura de documentos, permitiéndole seleccionar un proyecto local.
*   **Abrir el último proyecto utilizado**: 4D abre directamente el último proyecto utilizado; no aparece ninguna caja de diálogo de apertura. >Para forzar la visualización de la caja de diálogo de apertura cuando se selecciona esta opción, mantenga presionada la tecla **Alt** (Windows) u **Opción** (macOS) mientras lanza el proyecto.
*   **Diálogo de apertura del proyecto remoto**: 4D muestra el diálogo estándar de inicio de sesión de 4D Server, permitiéndole seleccionar un proyecto publicado en la red.
*   **Diálogo del Asistente de Bienvenida** (configuración de fábrica): 4D muestra la caja de diálogo del Asistente de Bienvenida.
> **4D Server**: la aplicación 4D Server ignora esta opción. En este entorno, se utiliza siempre el modo **No hacer nada**.

### Creación de formularios automática

> Esta opción sólo se utiliza en bases de datos binarias; se ignora en la arquitectura proyectos. Ver doc.4d.com.

### Ventana con pestañas (sólo en macOS)

A partir de macOS Sierra, las aplicaciones Mac pueden beneficiarse de la función de tabulación automática de ventanas que ayuda a organizar varias ventanas: las ventanas de documentos se apilan en una única ventana principal y se puede navegar a través de pestañas. Esta función es útil en pantallas pequeñas y/o cuando se utiliza un trackpad.

Puede beneficiarse de esta funcionalidad en los siguientes entornos (sólo con las versiones 4D de 64 bits):

*   Ventanas del editor de código
*   Ventanas del editor de formularios

Todas las ventanas de estos editores se pueden poner en forma de pestaña:

![](../assets/en/Preferences/general2.png)

Un conjunto de comandos en el menú **Ventana** permite gestionar las pestañas:

![](../assets/en/Preferences/general3.png)

En la caja de diálogo de Preferencias de 4D, la opción **Ventana con pestañas** le permite controlar este funcionamiento:

![](../assets/en/Preferences/general4.png)

Hay tres opciones disponibles:

*   **Según las Preferencias sistema** (por defecto): las ventanas 4D se comportarán como se definen en las Preferencias Sistema de macOS (En pantalla completa, Siempre o Manualmente).
*   **Nunca**: al abrir un nuevo documento en el editor de formularios 4D o en el Editor de Código siempre se crea una nueva ventana (nunca se crean pestañas).
*   **Siempre**: al abrir un nuevo documento en el editor de formularios o en los editores de métodos de 4D, siempre se creará una nueva pestaña.

### Apariencia (sólo para macOS)

Este menú permite seleccionar la combinación de colores que se utilizará para el entorno de **desarrollo 4D**. El esquema especificado se aplicará a todos los editores y ventanas del modo Diseño.

> También puede definir la paleta de colores que se utilizará en sus **aplicaciones de escritorio** en la página "Interfaz" de la caja de diálogo de los Parámetros.

Hay tres opciones disponibles:

*   **Según las preferencias de la paleta de colores del sistema** (por defecto): utiliza la paleta de colores definida en las Preferencias sistema de macOS.
*   **Claro**: utilizar el tema claro
*   **Sombra**: utilizar el tema Sombra

> Esta preferencia sólo es compatible en macOS. En Windows, se utiliza siempre el esquema "Light".


### Salir del modo Diseño al ir al modo Aplicación

Si esta opción está marcada, cuando el usuario cambia al entorno Aplicación utilizando el comando de menú **Probar la aplicación**, se cierran todas las ventanas del entorno Diseño. Si esta opción no está marcada (configuración de fábrica), las ventanas del entorno Diseño permanecen visibles al fondo del entorno Aplicación.


### Activar la creación de bases de datos binarias

Si marca esta opción, se añaden dos elementos en el menú **Archivo > Nuevo** y el botón **Nuevo** de la barra de herramientas:

*   **Base de datos...**
*   **Base de datos a partir de una definición de estructura...**

![](../assets/en/Preferences/general5.png)

Estos elementos permiten crear bases de datos binarias (ver la sección [Crear una nueva base](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html)). Ya no se proponen por defecto porque 4D recomienda utilizar la arquitectura basada en proyectos para los nuevos desarrollos.

## Al crear un nuevo proyecto

### Utilizar archivo historial

Cuando esta opción está marcada, se inicia automáticamente un archivo de historial que se utiliza cuando se crea una nueva base. Para más información, consulte [Archivo de historial (.journal)](Backup/log.md).

### Crear un paquete

Cuando esta opción está seleccionada, las bases de datos 4D se crean automáticamente en una carpeta con el sufijo .4dbase.

Gracias a este principio, en macOS las carpetas de las bases aparecen como paquetes con propiedades específicas. En Windows, este funcionamiento no tiene ningún impacto particular.

### Incluir los tokens en los archivos fuente del proyecto

When this option is checked, saved [method source files](../Project/architecture.md#sources) in new 4D projects will contain **tokens** for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as `:C10` or `:5` inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see [Using tokens in formulas](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html)).

If you intend to use VCS or external code editors with your new projects, you might want to uncheck this option for a better readability of the code with these tools.

> This option can only be applied to projects (binary databases always include tokens).

> You can always get the code with tokens by calling [`METHOD GET CODE`](https://doc.4d.com/4dv19R/help/command/en/page1190.html) with 1 in the *option* parameter.

#### Exclusión de los tokens en los proyectos existentes

You can configure your existing projects to save code **without tokens** by inserting the following key in the [`<applicationName>.4DProject`](../Project/architecture.md#applicationname4dproject-file) file using a text editor:

```
"tokenizedText": false
```

> This setting is only taken into account when methods are saved. Existing methods in your projects are left untouched, unless you resave them.


### Crear el archivo `.gitignore`

You might need or want git to ignore some files in your new projects.

You can set this preference by checking the **Create .gitignore file**  option.

When a project is created in 4D and that box is checked, 4D creates a `.gitignore` file at the same level as the `Project` folder (see [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

You can define the default contents of the `.gitignore` file by clicking the pencil icon. This will open the .gitignore configuration file in your text editor. The contents of this file will be used to generate the `.gitignore` files in your new projects.

The [official git documentation](https://git-scm.com/docs/gitignore) is a great resource to understand how `.gitignore` files work.

### Lenguaje de comparación de texte

This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.

A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](../settings/database.md#text-comparison)).

## Ubicación de la documentation

This area configures access to the 4D HTML documentation displayed in your current browser:

*   When you hit the **F1** key while the cursor is inserted in a 4D class function or command name in the Code Editor;
*   When you double-click on a 4D command in the **Commands Page** of the Explorer.


### Lenguaje de la documentación

Lenguaje de la documentación HTML a mostrar. You can select a documentation in a different language from the application language.

### Primero buscar en la carpeta local

> Esta opción sólo se tiene en cuenta para el acceso a la documentación de comandos (excluyendo las funciones de clase).

Define dónde buscará 4D las páginas de documentación.

*   Cuando está marcada (por defecto), 4D busca primero la página en la carpeta local (ver abajo). Si se encuentra, 4D muestra la página en el navegador actual. If it is found, 4D displays the page in the current browser. Esto permite acceder a la documentación incluso cuando se está desconectado.
*   Cuando no está marcada, 4D busca la página deseada directamente en el sitio web de documentación en línea y la muestra en el navegador actual. Si no se encuentra, 4D muestra un mensaje de error en el navegador.

### Carpeta local

> Esta opción sólo se tiene en cuenta para el acceso a la documentación de comandos (excluyendo las funciones de clase).

Indica la ubicación de la documentación HTML estática. Por defecto, se trata de la subcarpeta \Help\Command\language. Puede ver la ubicación haciendo clic en el menú asociado al área. Si esta subcarpeta no está presente, la ubicación se muestra en rojo.

Puede modificar esta ubicación como desee, por ejemplo, si quiere mostrar la documentación en un idioma diferente al de la aplicación. La documentación HTML estática puede estar ubicada en otro volumen, en un servidor web, etc. Para designar una ubicación diferente, haga clic en el botón **[...]** junto al área de entrada y elija una carpeta raíz de documentación (carpeta correspondiente al idioma: `fr`, `en`, `es`, `de` o `ja`). 
