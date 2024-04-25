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

La fuente y el tamaño de la fuente por defecto dependen de la plataforma de ejecución de 4D.

> This property also affects the following parts of 4D: <li>certain preview areas of the Explorer</li><li>the ruler of the Form editor</li>

### Mostrar ventanas

Otras opciones permiten configurar la visualización de varias ventanas del modo Aplicación.

- **Splash screen**: When this option is deselected, the [splash screen of the current menu bar](Menus/bars.md#splash-screen) does not appear in the Application mode. When you hide this window, it is up to you to manage the display of all your windows by programming, for example in the `On Startup` database method.

- **Flushing progress**: When this option is checked, 4D displays a window at the bottom left of the screen while the data in the cache is flushed. Dado que esta operación bloquea momentáneamente las acciones del usuario, la visualización de esta ventana le permite saber que la descarga está en curso.

:::note

You can set the [frequency for cache flushing](database.md#memory-page) in **Settings** > **Database** > **Memory**.

:::

- **Printing progress**: Lets you enable or disable the display of the printing progress dialog box when printing.

- **Use SDI mode on Windows**: When this option checked, 4D enables automatically the [SDI mode (Single-Document Interface)](../Menus/sdi.md) in your application when executed in a [supported context](../Menus/sdi.md#sdi-mode-availability). When you select this option, on Windows the **Run** menu of the 4D menu bar allows you to select the mode in which you want to test the application:

  ![](../assets/en/settings/sdi-mdi.png)

:::note

Esta opción puede seleccionarse en macOS, pero se ignorará cuando la aplicación se ejecute en esta plataforma.

:::

### Apariencia

Este menú permite seleccionar la paleta de colores que se utilizará en la aplicación principal. Una paleta de colores define un conjunto global de colores de interfaz para los textos, los fondos, las ventanas, etc., utilizados en sus formularios.

> Esta opción sólo funciona en macOS. En Windows, se utiliza siempre el esquema "Light".

Los siguientes esquemas están disponibles:

- **Light**: the application will use the Default Light Theme
  ![](../assets/en/settings/light-appearance.png)
- **Dark**: the application will use the Default Dark Theme
  ![](../assets/en/settings/dark-appearance.png)
- **Inherited** (default): the application will inherit from the higher priority level (i.e., OS user preferences)

> Los temas por defecto pueden ser manejados utilizando CSS. For more information, please refer to the [Media Queries](../FormEditor/createStylesheet.md#media-queries) section.

El esquema de aplicación principal se aplicará a los formularios por defecto. Sin embargo, se puede remplazar:

- by the [SET APPLICATION COLOR SCHEME](https://doc.4d.com/4dv19R/help/command/en/page1762.html) command at the working session level;
- using by the [Color Scheme](../FormEditor/propertiesForm.html#color-scheme) form property at each form level (highest priority level). **Note:** When printed, forms always use the "Light" scheme.

## Atajos

El área de Atajos directos sirve para ver y modificar los atajos por defecto para tres operaciones básicas del formulario 4D en sus aplicaciones de escritorio. Estos atajos son idénticos para ambas plataformas. Los iconos de las teclas indican las teclas correspondientes a Windows y a macOS.

Los accesos directos por defecto son los siguientes:

- Accept input form: **Enter**
- Cancel input form: **Esc**
- Add to subform: **Ctrl+Shift+/** (Windows) or **Command+Shift+/** (macOS)

To change the shortcut of an operation, click the corresponding **Edit** button. Aparece la siguiente caja de diálogo:

![](../assets/en/settings/shortcut.png)

To change the shortcut, type the new key combination on your keyboard and click **OK**. If you prefer not to have a shortcut for an operation, click **Clear**.
