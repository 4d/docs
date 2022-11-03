---
id: interface
title: Página interfaz
---

 
La página Interfaz sirve para establecer varias opciones relacionadas con la interfaz del proyecto.

## General

Esta área le permite configurar varias opciones relativas a la visualización.

![](../assets/en/settings/interface-page.png)

### Fuente a utilizar con el comando MESSAGE

Click **Select...** to set the font and size for the characters used by the `MESSAGE` command.

La fuente por defecto y su tamaño dependen de la plataforma en la que se ejecute 4D.

> Esta propiedad también afecta a las siguientes partes de 4D: <li>ciertas áreas de vista previa del Explorador</li><li>la regla del editor de formularios</li>
Other options configure the display of various windows in the Application mode.

-   **Splash screen**: When this option is deselected, the [splash screen of the current menu bar](Menus/bars.md#splash-screen) does not appear in the Application mode. When you hide this window, it is up to you to manage the display of all your windows by programming, for example in the `On Startup` database method.

-   **Flushing progress**: When this option is checked, 4D displays a window at the bottom left of the screen while the data in the cache is flushed. Since this operation momentarily blocks user actions, displaying this window lets them know that flushing is underway.

    > You can set the [frequency for cache flushing](database.md#memory-page) in **Settings** > **Database** > **Memory**.

-   **Printing progress**: Lets you enable or disable the display of the printing progress dialog box when printing.

-   **Use SDI mode on Windows**: When this option checked, 4D enables automatically the SDI mode (Single-Document Interface) in your merged application if executed in a supported context.

    > This option can be selected on macOS but will be ignored when the application is executed on this platform.

### Apariencia

This menu lets you select the color scheme to use at the main application level. A color scheme defines a global set of interface colors for texts, backgrounds, windows, etc., used in your forms.

> Esta opción sólo funciona en macOS. En Windows, se utiliza siempre el esquema "Light".

Los siguientes esquemas están disponibles:

-   **Light**: the application will use the Default Light Theme ![](../assets/en/settings/light-appearance.png)
-   **Dark**: the application will use the Default Dark Theme ![](../assets/en/settings/dark-appearance.png)
-   **Inherited** (default): the application will inherit from the higher priority level (i.e., OS user preferences)

> Los temas por defecto pueden ser manejados utilizando CSS. For more information, please refer to the [Media Queries](../FormEditor/createStylesheet.md#media-queries) section.

El esquema de aplicación principal se aplicará a los formularios por defecto. Sin embargo, se puede remplazar:

-   by the [SET APPLICATION COLOR SCHEME](https://doc.4d.com/4dv19R/help/command/en/page1762.html) command at the working session level;
-   using by the [Color Scheme](../FormEditor/propertiesForm.html#color-scheme) form property at each form level (highest priority level). **Note:** When printed, forms always use the "Light" scheme.

## Atajos

El área de Atajos directos sirve para ver y modificar los atajos por defecto para tres operaciones básicas del formulario 4D en sus aplicaciones de escritorio. Estos atajos son idénticos para ambas plataformas. Los iconos de las teclas indican las teclas correspondientes a Windows y a macOS.

Los accesos directos por defecto son los siguientes:

-   Aceptación de formulario de entrada: **Entrada**
-   Anulación de entrada: **Esc**
-   Añadir al subformulario: **Ctrl+Mayús+/** (Windows) o **Comando+Mayús+/** (macOS)

Para cambiar el acceso directo de una operación, haga clic en el botón **Editar** correspondiente. Aparece la siguiente caja de diálogo:

![](../assets/en/settings/shortcut.png)

Para cambiar el acceso directo, escriba la nueva combinación de teclas en su teclado y haga clic en **OK**. Si prefiere no tener un acceso directo para una operación, haga clic en **Borrar**.


