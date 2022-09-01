---
id: general
title: Página general
---

This page contains various options to configure the general operation of your 4D application.

## Opciones

### Al inicio

This option allows you to configure the default 4D display at startup, when the user launches only the application.

* **Do nothing**: Only the application window appears, empty.
* **Open Local Project dialog**: 4D displays a standard open document dialog box, allowing you to select a local project.
* **Open last used project**: 4D directly opens the last project used; no opening dialog box appears.
> To force the display of the opening dialog box when this option is selected, hold down the **Alt** (Windows) or **Option** (macOS) key while launching the project.

* **Open Remote Project dialog**: 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network.
* **Open Welcome Wizard dialog** (factory setting): 4D displays the Welcome Wizard dialog box.
> > **4D Server**: The 4D Server application ignores this option. In this environment, the **Do nothing** mode is always used.

### Creación de formularios automática

> This option is only used in binary databases; it is ignored in project architecture. Ver doc.4d.com.

#### Ventana con pestañas (sólo en macOS)

Starting with macOS Sierra, Mac applications can benefit from the Automatic Window Tabbing feature that helps organizing multiple windows: document windows are stacked into a single parent window and can be browsed through tabs. This feature is useful on small screens and/or when using a trackpad.

You can benefit from this feature in the following environments (with 4D 64-bit versions only):

* Ventana del editor de métodos
* Ventana del editor de formularios

Todas las ventanas de estos editores se pueden poner en forma de pestaña:

![](../assets/en/Preferences/general2.png)

A set of commands in the **Window** menu allows managing the tabs:

![](../assets/en/Preferences/general3.png)

In the 4D's Preferences dialog box, the **Window tabbing** option allows you to control this feature:

![](../assets/en/Preferences/general4.png)

Hay tres opciones disponibles:

* **According to System Preferences** (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually).
* **Never**: Opening a new document in 4D form editor or method editor will always result in creating a new window (tabs are never created).
* **Always**: Opening a new document in 4D form editor or method editors will always result in creating a new tab.

### Salir del modo Diseño al ir al modo Aplicación

If this option is checked, when the user switches to the Application environment using the **Test Application** menu command, all the windows of the Design environment are closed. If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment.

### Activar la creación de bases de datos binarias

If you check this option, two items are added in the **File > New** menu and the **New** toolbar button:

* **Base de datos...**
* **Base de datos a partir de una definición de estructura...**

![](../assets/en/Preferences/general5.png)

These items allow you to create binary databases (see [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html) section). They are no longer proposed by default because 4D recommends using project-based architecture for new developments.

## Al crear un nuevo proyecto

### Utilizar archivo historial

When this option is checked, a log file is automatically started and used when a new database is created. For more information, please refer to [Log file (.journal)](Backup/log.md).

### Crear un paquete

When this option is checked, 4D databases are automatically created in a folder suffixed .4dbase.

Thanks to this principle, under macOS the database folders appear as packages having specific properties. En Windows, este funcionamiento no tiene ningún impacto particular.

### Lenguaje de comparación de texte

This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.

A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## Ubicación de la documentation

This area configures access to the 4D HTML documentation displayed in the current browser:

* When the user double-clicks on a command on the **Commands Page** of the Explorer;
* When the user clicks on a command name in the Method editor and hits the **F1** key.

You can choose to access the 4D online documentation site directly or to access a static version that is stored locally.

### Carpeta local

Indica la ubicación de la documentación HTML estática. Por defecto, se trata de la subcarpeta \Help\Command\language. Puede ver la ubicación haciendo clic en el menú asociado al área. Si esta subcarpeta no está presente, la ubicación se muestra en rojo.

You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. To designate a different location, click on the [...] button next to the entry area and choose a documentation root folder (folder corresponding to the language: fr, en, es, de or ja).

### Sitio Web

Acceso URL a la documentación en línea de la versión en el 4D Doc Center. 4D builds calls to the pages of the documentation based on this URL. You can modify it, for example if you want to display documentation in a different language from the application language. The test button to the right of the area launches the default browser to go to the URL specified.

### Primero buscar en la carpeta local

This option (checked by default) sets where 4D will look for the documentation page called using the Explorer or the F1 key.

* When it is checked, 4D first looks for the page in the local folder. Si se encuentra, 4D muestra la página en el navegador actual. If it is found, 4D displays the page in the current browser. This makes it possible to access the documentation even when you are offline.
* When it is not checked, 4D looks for the desired page directly in the on-line documentation of the Web site and displays it in the current browser. When not checked, 4D looks for the desired page directly in the on-line documentation Web site and displays it in the current browser.
