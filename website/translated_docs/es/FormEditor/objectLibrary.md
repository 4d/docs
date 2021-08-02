---
id: objectLibrary
title: Librerías de objetos
---


You can use object librairies in your forms. An object library offers a collection of preconfigured objects that can be used in your forms by simple or copy-paste or drag-and-drop.

4D proposes two kinds of object libraries:

- a standard, preconfigured object library, available in all your projects.
- custom object librairies, that you can use to store your favorite form objects or full project forms.


## Utilización de la librería de objetos estándar

The standard object library is available from the Form editor: click on the last button of the toolbar:  
![](assets/en/FormEditor/library1.png)

The library is displayed in a separate window:

![](assets/en/FormEditor/library2.png)

The window has the following main features:

- Preview area with tips: The central area displays a preview of each object. You can hover on an object to obtain information about the object in a tip.
- You can filter the window contents by using the **Categories** menu: ![](assets/en/FormEditor/library3.png)
- To use an object from the library to your form, you can either:
    - right-click on an object and select **Copy** in the contextual menu
    - or drag and drop the object from the library The object is then added to the form.

This library is read-only. If you want to edit default objects or create your own library of preconfigured objects or project forms, you need to create a custom object library (see below).

All objects proposed in the standard object library are described on [this section on doc.4d.com](https://doc.4d.com/4Dv17R6/4D/17-R6/Library-objects.200-4354586.en.html).


## Crear y utilizar librerías de objetos personalizadas

You can create and use custom object libraries in 4D. A custom object library is a 4D project where you can store your favorite objects (buttons, texts, pictures, etc.) You can then reuse these objects in different forms and different projects.

Objects are stored with all their properties, including their object methods. Libraries are put together and used by simple drag-and-drop or copy-paste operations.

Using libraries, you can build form object backgrounds grouped by graphic families, by behavior, etc.


### Crear una librería de objetos

Para crear una librería de objetos, seleccione **Nuevo>Librería de objetos...** en el menú **Archivo** o en la barra de herramientas de 4D. Aparece una caja de diálogo estándar para guardar el archivo, que le permite elegir el nombre y la ubicación de la librería de objetos.

Una vez validada la caja de diálogo, 4D crea una nueva librería de objetos en su disco y muestra su ventana (vacía por defecto).

![](assets/en/FormEditor/library4.png)

Puede crear tantas librerías como desee por proyecto. Una librería creada y construida en macOS puede utilizarse en Windows y viceversa.

### Abrir una librería de objetos

Una determinada librería de objetos sólo puede ser abierta por un proyecto a la vez. Sin embargo, se pueden abrir varias librerías diferentes en el mismo proyecto.

Para abrir una librería de objetos personalizada, seleccione el comando **Abrir>Librería de objetos...** en el menú **Archivo** o en la barra de herramientas de 4D. Aparece una caja de diálogo estándar para abrir archivos, que le permite seleccionar la librería de objetos que desea abrir. Puede seleccionar los siguientes tipos de archivos:
- **.4dproject**
- **.4dz**

De hecho, las librerías de objetos personalizadas son proyectos 4D clásicos. Sólo se exponen las siguientes partes de un proyecto cuando se abre como librería:

- formularios proyecto
- form pages 1


### Crear una librería de objetos

Los objetos se colocan en una librería de objetos mediante una operación de arrastrar y soltar o de cortar, copiar y pegar. Pueden provenir de un formulario o de otra librería de objetos (incluyendo la [librería estándar](#using-the-standard-object-library)). No se conserva ningún enlace con el objeto original: si el original se modifica, el objeto copiado no se ve afectado.

> In order to be able to drag and drop objects from forms to object libraries, you must make sure the **Start drag and drop** option in the 4D Preferences is selected.

Basic operations are available in the context menu or the options menu of the window:

![](assets/en/FormEditor/library5.png)

- **Cut** or **Copy** to the pasteboard
- **Paste** an object from the pasteboard
- **Clear** - deletes the object from the library
- **Rename** - a dialog box appears allowing you to rename the item. Note that object names must be unique in a library.


You can place individual objects (including subforms) or sets of objects in an object library. Each object or set is grouped into a single item:

![](assets/en/FormEditor/library6.png)

An object library can contain up to 32,000 items.

Objects are copied with all their properties, both graphic and functional, including their methods. These properties are kept in full when the item is copied into a form or another library.

#### Dependent objects
Using copy-paste or drag-and-drop with certain library objects also causes their dependent objects to be copied. For example, copying a button will cause the object method that may be attached to be copied as well. These dependent objects cannot be copied or dragged and dropped directly.

The following is a list of dependent objects that will be pasted into the library at the same time as the main object that uses them (when applicable):

- Listas
- Formats/Filters
- Imágenes
- Help Tips (linked to a field)
- Object methods

