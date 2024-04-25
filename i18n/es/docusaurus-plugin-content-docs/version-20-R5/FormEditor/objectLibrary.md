---
id: objectLibrary
title: Librerías de objetos
---

Puede utilizar librerías de objetos en sus formularios. Una librería de objetos ofrece una colección de objetos preconfigurados que pueden ser utilizados en sus formularios mediante un simple copiar y pegar o arrastrar y soltar.

4D propone dos tipos de librerías de objetos:

- una librería de objetos estándar y preconfigurada, disponible en todos sus proyectos.
- librerías de objetos personalizadas, que puede utilizar para almacenar sus objetos formularios favoritos o formularios proyecto completos.

## Utilización de la librería de objetos estándar

The standard object library is available from the Form editor: click on the last button of the toolbar:\
![](../assets/en/FormEditor/library1.png)

La librería se muestra en una ventana aparte:

![](../assets/en/FormEditor/library2.png)

La ventana tiene las siguientes características principales:

- Área de vista previa con mensajes de ayuda: el área central muestra una vista previa de cada objeto. Puede pasar el ratón por encima de un objeto para obtener información sobre el mismo en un mensaje de ayuda.
- You can filter the window contents by using the **Categories** menu:
  ![](../assets/en/FormEditor/library3.png)
- Para utilizar un objeto de la librería en su formulario, puede:
  - right-click on an object and select **Copy** in the contextual menu
  - or drag and drop the object from the library The object is then added to the form.

Esta librería es de sólo lectura. Si desea editar objetos por defecto o crear su propia librería de objetos preconfigurados o formularios proyecto, deberá crear una librería de objetos personalizada (ver abajo).

All objects proposed in the standard object library are described on [this section on doc.4d.com](https://doc.4d.com/4Dv17R6/4D/17-R6/Library-objects.200-4354586.en.html).

## Crear y utilizar librerías de objetos personalizadas

Puede crear y utilizar librerías de objetos personalizadas en 4D. A custom object library is a 4D project where you can store your favorite objects (buttons, texts, pictures, etc.) You can then reuse these objects in different forms and different projects. A continuación, puede reutilizar estos objetos en diferentes formularios y proyectos.

Los objetos se almacenan con todas sus propiedades, incluidos sus métodos. Las librerías se arman y utilizan mediante simples operaciones de arrastrar y soltar o copiar y pegar.

Mediante el uso de librerías, se pueden construir fondos de objetos de formulario agrupados por familias gráficas, por funcionalidades, etc.

### Crear una librería de objetos

To create an object library, select **New>Object Library...** from the 4D **File** menu or tool bar. Aparece una caja de diálogo estándar para guardar el archivo, que le permite elegir el nombre y la ubicación de la librería de objetos.

Una vez validada la caja de diálogo, 4D crea una nueva librería de objetos en su disco y muestra su ventana (vacía por defecto).

![](../assets/en/FormEditor/library4.png)

Puede crear tantas librerías como desee por proyecto. Una librería creada y construida en macOS puede utilizarse en Windows y viceversa.

### Abrir una librería de objetos

Una determinada librería de objetos sólo puede ser abierta por un proyecto a la vez. Sin embargo, se pueden abrir varias librerías diferentes en el mismo proyecto.

To open a custom object library, select **Open>Object Library...** command in the 4D **File** menu or tool bar. Aparece una caja de diálogo estándar para abrir archivos, que le permite seleccionar la librería de objetos que desea abrir. Puede seleccionar los siguientes tipos de archivos:

- **.4dproject**
- **.4dz**

De hecho, las librerías de objetos personalizadas son proyectos 4D clásicos. Sólo se exponen las siguientes partes de un proyecto cuando se abre como librería:

- formularios proyecto
- páginas formulario 1

### Crear una librería de objetos

Los objetos se colocan en una librería de objetos mediante una operación de arrastrar y soltar o de cortar, copiar y pegar. They can come from either a form or another object library (including the [standard library](#using-the-standard-object-library)). No se conserva ningún enlace con el objeto original: si el original se modifica, el objeto copiado no se ve afectado.

> In order to be able to drag and drop objects from forms to object libraries, you must make sure the **Start drag and drop** option in the 4D Preferences is selected.

Las principales operaciones están disponibles en el menú contextual o en el menú de opciones de la ventana:

![](../assets/en/FormEditor/library5.png)

- **Cut** or **Copy** to the pasteboard
- **Paste** an object from the pasteboard
- **Clear** - deletes the object from the library
- **Rename** - a dialog box appears allowing you to rename the item. Tenga en cuenta que los nombres de los objetos deben ser únicos en una librería.

Puede colocar objetos individuales (incluidos los subformularios) o conjuntos de objetos en una librería de objetos. Cada objeto o conjunto se agrupa en un solo elemento:

![](../assets/en/FormEditor/library6.png)

Una librería de objetos puede contener hasta 32.000 elementos.

Los objetos se copian con todas sus propiedades, tanto gráficas como funcionales, incluidos sus métodos. Estas propiedades se mantienen en su totalidad cuando el elemento se copia en un formulario o en otra librería.

#### Objetos dependientes

El uso de copiar y pegar o arrastrar y soltar con ciertos objetos de librería también hace que se copien sus objetos dependientes. Por ejemplo, si se copia un botón, se copiará también el método del objeto que se pueda adjuntar. Estos objetos dependientes no se pueden copiar ni arrastrar y soltar directamente.

A continuación se muestra una lista de objetos dependientes que se pegarán en la librería al mismo tiempo que el objeto principal que los utiliza (cuando corresponda):

- Listas
- Formatos/Filtros
- Imágenes
- Mensajes de ayuda (asociados a un campo)
- Métodos objeto
