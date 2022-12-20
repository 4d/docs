---
id: general
title: Página general
---

Esta página contiene varias opciones para configurar el funcionamiento general de su aplicación 4D.

## Opciones

### Al inicio

Esta opción permite configurar la visualización por defecto de 4D al inicio, cuando el usuario lanza únicamente la aplicación.

* **No hacer nada**: sólo aparece la ventana de la aplicación, vacía.
* **Diálogo de apertura de proyecto local**: 4D muestra una caja de diálogo estándar de apertura de documentos, permitiéndole seleccionar un proyecto local.
* **Abrir el último proyecto utilizado**: 4D abre directamente el último proyecto utilizado; no aparece ninguna caja de diálogo de apertura.
> To force the display of the opening dialog box when this option is selected, hold down the **Alt** (Windows) or **Option** (macOS) key while launching the project.

* **Diálogo de apertura del proyecto remoto**: 4D muestra el diálogo estándar de inicio de sesión de 4D Server, permitiéndole seleccionar un proyecto publicado en la red.
* **Diálogo del Asistente de Bienvenida** (configuración de fábrica): 4D muestra la caja de diálogo del Asistente de Bienvenida.
> **4D Server**: la aplicación 4D Server ignora esta opción. En este entorno, se utiliza siempre el modo **No hacer nada**.

### Creación de formularios automática

> Esta opción sólo se utiliza en bases de datos binarias; se ignora en la arquitectura proyectos. Ver doc.4d.com.

#### Ventana con pestañas (sólo en macOS)

A partir de macOS Sierra, las aplicaciones Mac pueden beneficiarse de la función de tabulación automática de ventanas que ayuda a organizar varias ventanas: las ventanas de documentos se apilan en una única ventana principal y se puede navegar a través de pestañas. Esta función es útil en pantallas pequeñas y/o cuando se utiliza un trackpad.

Puede beneficiarse de esta funcionalidad en los siguientes entornos (sólo con las versiones 4D de 64 bits):

* Ventana del editor de métodos
* Ventanas del editor de formularios

Todas las ventanas de estos editores se pueden poner en forma de pestaña:

![](../assets/en/Preferences/general2.png)

Un conjunto de comandos en el menú **Ventana** permite gestionar las pestañas:

![](../assets/en/Preferences/general3.png)

En la caja de diálogo de Preferencias de 4D, la opción **Ventana con pestañas** le permite controlar este funcionamiento:

![](../assets/en/Preferences/general4.png)

Hay tres opciones disponibles:

* **Según las Preferencias sistema** (por defecto): las ventanas 4D se comportarán como se definen en las Preferencias Sistema de macOS (En pantalla completa, Siempre o Manualmente).
* **Never**: Opening a new document in 4D form editor or method editor will always result in creating a new window (tabs are never created).
* **Siempre**: al abrir un nuevo documento en el editor de formularios o en los editores de métodos de 4D, siempre se creará una nueva pestaña.

### Salir del modo Diseño al ir al modo Aplicación

Si esta opción está marcada, cuando el usuario cambia al entorno Aplicación utilizando el comando de menú **Probar la aplicación**, se cierran todas las ventanas del entorno Diseño. Si esta opción no está marcada (configuración de fábrica), las ventanas del entorno Diseño permanecen visibles al fondo del entorno Aplicación.

### Activar la creación de bases de datos binarias

Si marca esta opción, se añaden dos elementos en el menú **Archivo > Nuevo** y el botón **Nuevo** de la barra de herramientas:

* **Base de datos...**
* **Base de datos a partir de una definición de estructura...**

![](../assets/en/Preferences/general5.png)

Estos elementos permiten crear bases de datos binarias (ver la sección [Crear una nueva base](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html)). Ya no se proponen por defecto porque 4D recomienda utilizar la arquitectura basada en proyectos para los nuevos desarrollos.

## Al crear un nuevo proyecto

### Utilizar archivo historial

Cuando esta opción está marcada, se inicia automáticamente un archivo de historial que se utiliza cuando se crea una nueva base. Para más información, consulte [Archivo de historial (.journal)](Backup/log.md).

### Crear un paquete

Cuando esta opción está seleccionada, las bases de datos 4D se crean automáticamente en una carpeta con el sufijo .4dbase.

Gracias a este principio, en macOS las carpetas de las bases aparecen como paquetes con propiedades específicas. En Windows, este funcionamiento no tiene ningún impacto particular.

### Lenguaje de comparación de texto

Este parámetro permite definir el lenguaje utilizado por defecto utilizado para el procesamiento y la comparación de cadenas de caracteres en las nuevas bases. La elección de un idioma de comparación afecta a la ordenación y la búsqueda de textos, así como al cambio entre minúsculas y mayúsculas, pero no afecta a la traducción de etiquetas ni a los formatos de fecha, hora o moneda, que permanecen en el idioma del sistema. Por defecto (configuración de fábrica), 4D utiliza el idioma actual del usuario definido en el sistema.

Una base 4D puede funcionar en un lenguaje distinto al del sistema. Cuando se abre una base, el motor de 4D detecta el lenguaje utilizado por el fichero de datos y lo pasa al lenguaje (modo intérpretado o compilado). Las comparaciones de texto, independientemente de si las realiza el motor de la base de datos o el lenguaje, se hacen en el mismo lenguaje.

Al crear un nuevo archivo de datos, 4D utiliza el idioma previamente configurado en este menú. Al abrir un archivo de datos que no está en el mismo idioma que la estructura, se utiliza el idioma del archivo de datos y el código del idioma se copia en la estructura.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## Ubicación de la documentation

This area configures access to the 4D HTML documentation displayed in the current browser:

* When the user double-clicks on a command on the **Commands Page** of the Explorer;
* When the user clicks on a command name in the Method editor and hits the **F1** key.

You can choose to access the 4D online documentation site directly or to access a static version that is stored locally.

### Carpeta local

Indica la ubicación de la documentación HTML estática. Por defecto, se trata de la subcarpeta \Help\Command\language. Puede ver la ubicación haciendo clic en el menú asociado al área. Si esta subcarpeta no está presente, la ubicación se muestra en rojo.

Puede modificar esta ubicación como desee, por ejemplo, si quiere mostrar la documentación en un idioma diferente al de la aplicación. La documentación HTML estática puede estar ubicada en otro volumen, en un servidor web, etc. To designate a different location, click on the [...] button next to the entry area and choose a documentation root folder (folder corresponding to the language: fr, en, es, de or ja).

### Sitio Web

Acceso URL a la documentación en línea de la versión en el 4D Doc Center. 4D builds calls to the pages of the documentation based on this URL. You can modify it, for example if you want to display documentation in a different language from the application language. The test button to the right of the area launches the default browser to go to the URL specified.

### Primero buscar en la carpeta local

This option (checked by default) sets where 4D will look for the documentation page called using the Explorer or the F1 key.

* When it is checked, 4D first looks for the page in the local folder. Si se encuentra, 4D muestra la página en el navegador actual. If it is found, 4D displays the page in the current browser. Esto permite acceder a la documentación incluso cuando se está desconectado.
* When it is not checked, 4D looks for the desired page directly in the on-line documentation of the Web site and displays it in the current browser. Si no se encuentra, 4D muestra un mensaje de error en el navegador.
