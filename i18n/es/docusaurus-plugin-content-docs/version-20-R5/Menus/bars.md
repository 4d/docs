---
id: bars
title: Barras de menús
---

Las barras de menú constituyen la principal interfaz de las aplicaciones personalizadas. Para cada aplicación personalizada, debe crear al menos una barra de menú con al menos un menú. Por defecto, Menu Bar #1 es la barra de menús que se muestra en el entorno de la aplicación. You can change which menu bar is displayed using the `SET MENU BAR` command.

4D le permite asociar una imagen de pantalla de inicio personalizada con cada barra de menús y previsualizar esta barra de menú en cualquier momento.

## Pantalla de bienvenida

Puede mejorar la apariencia de cada barra de menú asociando una pantalla de inicio personalizada. La ventana que contiene la pantalla de inicio se muestra debajo de la barra de menús cuando aparece. Puede contener un logo o cualquier tipo de imagen. Por defecto, 4D muestra el logo 4D en la pantalla de inicio:

![](../assets/en/Menus/splash1.png)

Una imagen de pantalla de inicio personalizada puede provenir de cualquier aplicación gráfica. 4D le permite pegar una imagen del portapapeles o utilizar cualquier imagen presente en su disco duro. Se puede utilizar cualquier formato de imagen estándar soportado por 4D.

La imagen de la pantalla de inicio sólo puede definirse en el editor de menús: seleccione la barra de menús a la que desea asociar la pantalla de inicio personalizada. Observe el área "Imagen de fondo" en la parte derecha de la ventana.
To open a picture stored on your disk directly, click on the **Open** button or click in the "Background Image" area. Aparece un menú emergente:

- To paste a picture from the clipboard, choose **Paste**.
- To open a picture stored in a disk file, choose **Open**.
  Si selecciona Abrir, aparecerá una caja de diálogo estándar de Abrir archivo para que pueda seleccionar el archivo de imagen que va a utilizar. Una vez definida, la imagen se muestra en miniatura en la zona. A continuación, se asocia a la barra de menús.

![](../assets/en/Menus/splash2.png)

Puede ver el resultado final probando la barra de menús (ver la sección siguiente). En el modo Aplicación, la imagen se muestra en la pantalla de inicio con el formato de tipo "Truncado (Centrado)".

> You can choose whether to display or hide this window using the **Display toolbar** option in the Settings.

To remove the custom picture and display the default one instead, click on the **Clear** button or select **Clear** in the area pop-up menu.

## Vista previa de las barras de menús

El editor de la barra de menús le permite ver los menús personalizados y la pantalla de inicio en cualquier momento, sin cerrar la ventana de la caja de herramientas.

To do so, simply select the menu bar and choose **Test the menu bar "Menu Bar #X"** in the context menu or the options menu of the editor.

![](../assets/en/Menus/splash3.png)

4D muestra una vista previa de la barra de menús así como de la pantalla de inicio. Puede desplazarse por los menús y submenús para ver su contenido. Sin embargo, estos menús no están activos. To test the functioning of menus and the toolbar, you must use the **Test Application** command from the **Run** menu.

:::info

If the **Use SDI mode on Windows** option is selected in the ["Interface" page of the Settings dialog box](../settings/interface.md#display-windows), the **Test Application** menu allows you to test your application in [SDI or MDI mode](sdi/md) on Windows:

![](../assets/en/settings/sdi-mdi.png)

:::
