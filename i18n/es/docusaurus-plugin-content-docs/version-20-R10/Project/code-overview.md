---
id: code-overview
title: Creación de métodos y clases
---

El código 4D utilizado en todo el proyecto está escrito en [métodos](../Concepts/methods.md) y [clases](../Concepts/classes.md).

El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su código. Por lo general, utilizará el [editor integrado de código](../code-editor/write-class-method.md) de 4D para trabajar con su código. También puede utilizar otros editores como **VS Code**, para el que está disponible la [extensión 4D-Analyzer](https://github.com/4d/4D-Analyzer-VSCode).

## Creación de métodos

Un método en 4D se almacena en un archivo **.4dm** ubicado en la carpeta apropiada de la carpeta [`/Project/Sources/`](../Project/architecture.md#sources).

Puede crear [varios tipos de métodos](../Concepts/methods.md):

- Todos los tipos de métodos pueden crearse o abrirse desde la ventana del **Explorador** (excepto los métodos Objeto que se gestionan desde el [editor de formularios](../FormEditor/formEditor.md)).
- Los métodos proyecto también pueden crearse o abrirse desde el menú **Archivo** o desde la barra de herramientas (**Nuevo/Método...** o **Abrir/Método...**) o utilizando los accesos directos de la ventana del [editor de código](../code-editor/write-class-method.md#shortcuts).
- Los triggers también pueden crearse o abrirse desde el editor de Estructura.
- Los métodos formulario también pueden crearse o abrirse desde el [editor de formularios](../FormEditor/formEditor.md).

## Crear las clases

Una clase usuario en 4D está definida por un archivo de método específico (**.4dm**), almacenado en la carpeta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). El nombre del archivo es el nombre de la clase.

Puede crear un archivo de clase desde el menú **Archivo** o la barra de herramientas (**Nuevo/Clase...**) o en la página **Métodos** de la ventana **Explorador**.

Para más información, consulte la sección [Clases](../Concepts/classes.md).

## Eliminar los métodos o las clases

Para eliminar un método o clase existente, puede:

- en su disco, elimine el archivo *.4dm* de la carpeta "Sources",
- en el Explorador 4D, seleccione el método y haga clic ![](../assets/en/Users/MinussNew.png) o elija **Mover a la Papelera** en el menú contextual.

> Para eliminar un método objeto, seleccione **Borrar el método de objeto** en el [editor de formularios](../FormEditor/formEditor.md) (menú **Objeto** o menú contextual).

