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
> Para forzar la visualización de la caja de diálogo de apertura cuando se selecciona esta opción, mantenga presionada la tecla **Alt** (Windows) u **Opción** (macOS) mientras lanza el proyecto.

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
* **Nunca**: al abrir un nuevo documento en el editor de formularios o en el editor de métodos de 4D siempre se crea una nueva ventana (nunca se crean pestañas).
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
> Puede modificar este parámetro para la base abierta utilizando las Propiedades de la base (ver [Comparación de textos](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## Ubicación de la documentation

Esta área configura el acceso a la documentación HTML de 4D que se muestra en el navegador actual:

* Cuando el usuario hace doble clic en un comando en la **página Comandos** del Explorador;
* Cuando el usuario hace clic en el nombre de un comando en el editor de métodos y presiona la tecla **F1**.

Puede elegir entre acceder directamente al sitio de documentación en línea de 4D o acceder a una versión estática almacenada localmente.

### Carpeta local

Indica la ubicación de la documentación HTML estática. Por defecto, se trata de la subcarpeta \Help\Command\language. Puede ver la ubicación haciendo clic en el menú asociado al área. Si esta subcarpeta no está presente, la ubicación se muestra en rojo.

Puede modificar esta ubicación como desee, por ejemplo, si quiere mostrar la documentación en un idioma diferente al de la aplicación. La documentación HTML estática puede estar ubicada en otro volumen, en un servidor web, etc. Para designar una ubicación diferente, haga clic en el botón [...] junto al área de entrada y elija una carpeta raíz de documentación (carpeta correspondiente al lenguaje: fr, en, es, de o ja).

### Sitio Web

Acceso URL a la documentación en línea de la versión en el 4D Doc Center. 4D crea llamadas a las páginas de la documentación basándose en esta URL. Puede modificarla, por ejemplo, si desea mostrar la documentación en un idioma distinto al de la aplicación. El botón de prueba situado a la derecha del áreaa lanza el navegador por defecto para acceder a la URL especificada.

### Primero buscar en la carpeta local

Esta opción (marcada por defecto) define donde 4D buscará la página de documentación llamada utilizando el Explorador o la tecla F1.

* Cuando está marcada, 4D busca primero la página en la carpeta local. Si se encuentra, 4D muestra la página en el navegador actual. If it is found, 4D displays the page in the current browser. Esto permite acceder a la documentación incluso cuando se está desconectado.
* Cuando no está marcada, 4D busca la página deseada directamente en la documentación en línea del sitio Web y la muestra en el navegador actual. Si no se encuentra, 4D muestra un mensaje de error en el navegador.
