---
id: code-overview
title: Managing Methods and Classes
---

El código 4D utilizado en todo el proyecto está escrito en [métodos](../Concepts/methods.md) y [clases](../Concepts/classes.md).

El IDE de 4D le ofrece varias funcionalidades para crear, editar, exportar o eliminar su código. Por lo general, utilizará el [editor integrado de código](../code-editor/write-class-method.md) de 4D para trabajar con su código. También puede utilizar otros editores como **VS Code**, para el que está disponible la [extensión 4D-Analyzer](https://github.com/4d/4D-Analyzer-VSCode).

## Creación de métodos

Un método en 4D se almacena en un archivo **.4dm** ubicado en la carpeta apropiada de la carpeta [`/Project/Sources/`](../Project/architecture.md#sources).

Puede crear [varios tipos de métodos](../Concepts/methods.md#method-types):

- Todos los tipos de métodos pueden crearse o abrirse desde la ventana del **Explorador** (excepto los métodos Objeto que se gestionan desde el [editor de formularios](../FormEditor/formEditor.md)).
- Los métodos proyecto también pueden crearse o abrirse desde el menú **Archivo** o desde la barra de herramientas (**Nuevo/Método...** o **Abrir/Método...**) o utilizando los accesos directos de la ventana del [editor de código](../code-editor/write-class-method.md#shortcuts).
- **Triggers** can also be created or opened from the [Structure editor](../Develop-legacy/triggers.md#activating-and-creating-a-trigger).
- Los métodos formulario también pueden crearse o abrirse desde el [editor de formularios](../FormEditor/formEditor.md).

## Crear las clases

### User classes

Una clase usuario en 4D está definida por un archivo de método específico (**.4dm**), almacenado en la carpeta [`/Project/Sources/Classes/`](../Project/architecture.md#sources). El nombre del archivo es el nombre de la clase. Por ejemplo, una clase llamada "Polygon" se almacenará en el siguiente archivo:

```
Project folder Project Sources Classes Polygon.4dm
```

You can create a class file from the **File** menu or toolbar (**New > Class...**) or in the **Methods** page of the **Explorer** window. También puede utilizar el atajo **Ctrl+Mayús+Alt+k**.

En la página **Métodos** del Explorador, las clases se agrupan en la categoría **Clases**.

Para crear una nueva clase, puede:

- seleccione la categoría **Clases** y haga clic en el botón ![](../assets/en/Users/PlussNew.png).
- seleccione **Nueva clase...** en el menú de acciones de la parte inferior de la ventana del Explorador, o en el menú contextual del grupo Clases.
  ![](../assets/en/Concepts/newClass.png)
- seleccione **Nueva > Clase...** en el menú contextual de la página de inicio del Explorador.

Al nombrar las clases, debe tener en cuenta las siguientes reglas:

- Un [nombre de clase](../Concepts/identifiers.md#classes) debe cumplir con [reglas de denominación de las propiedades](../Concepts/identifiers.md#object-properties).
- .
- No se recomienda dar el mismo nombre a una clase y a una tabla de la base, para evitar conflictos.

### ORDA classes

[ORDA data model user classes](../ORDA/ordaClasses.md) are high-level class functions created above the data model.

An ORDA data model class is defined by adding, at the same location as regular class files (*i.e.* in the `/Sources/Classes` folder of the project folder), a .4dm file with the name of the class. Por ejemplo, una clase de entidad para la dataclass `Utilities` se definirá a través de un archivo `UtilitiesEntity.4dm`.

4D crea previa y automáticamente las clases vacías en memoria para cada objeto del modelo de datos disponible.

![](../assets/en/ORDA/ORDA_Classes-3.png)

Por defecto, las clases ORDA vacías no se muestran en el Explorador. Para mostrarlas, debe seleccionar **Mostrar todas las clases de datos** en el menú de opciones del Explorador:
![](../assets/en/ORDA/showClass.png)

Las clases de usuarios ORDA tienen un icono diferente de las otras clases. Las clases vacías se atenúan:

![](../assets/en/ORDA/classORDA2.png)

Para crear un archivo de clase ORDA, basta con hacer doble clic en la clase predefinida correspondiente en el Explorador. 4D creates the class file and add the [`extends`](../Concepts/classes.md#class-extends-classname) code. Por ejemplo, para una clase Entity:

```
Class extends Entity
```

Una vez definida una clase, su nombre ya no aparece atenuado en el Explorador.

Para abrir una clase ORDA definida en el editor de código 4D, seleccione o haga doble clic en el nombre de una clase ORDA y utilice **Editar...** en el menú contextual/menú de opciones de la ventana del Explorador:

![](../assets/en/ORDA/classORDA4.png)

Para las clases ORDA basadas en el datastore local (`ds`), puede acceder directamente al código de la clase desde la ventana de estructura 4D:

![](../assets/en/ORDA/classORDA5.png)

### Soporte en IDE 4D

En las diferentes ventanas 4D (editor de código, compilador, depurador, explorador de ejecución), el código de la clase se maneja básicamente como un método proyecto con algunas especificidades:

- En el editor de código:
  - una clase no puede ser ejecutada
  - una función de clase es un bloque de código
  - **Ir a la definición** en un objeto miembro busca las declaraciones de función de clase; por ejemplo, "$o.f()" encontrará "Function f".
  - **Buscar referencias** en la declaración de función de clase busca la función utilizada como miembro de objeto; por ejemplo, "Function f" encontrará "$o.f()".
  - variables typed as a user or ORDA class automatically benefit from autocompletion features. Ejemplo con una variable de clase Entity:

![](../assets/en/ORDA/AutoCompletionEntity.png)

- En el explorador de tiempo de ejecución y en el depurador, las funciones de clase se muestran con el `<ClassName>` constructor o `<ClassName>.<FunctionName>` el formato.

## Eliminar los métodos o las clases

Para eliminar un método o clase existente, puede:

- en su disco, elimine el archivo *.4dm* de la carpeta "Sources",
- en el Explorador 4D, seleccione el método y haga clic ![](../assets/en/Users/MinussNew.png) o elija **Mover a la Papelera** en el menú contextual.

> Para eliminar un método objeto, seleccione **Borrar el método de objeto** en el [editor de formularios](../FormEditor/formEditor.md) (menú **Objeto** o menú contextual).

## Design Object Access commands

You can access the contents and paths of all methods in your applications by programming, thanks to the [**"Design Object Access" command theme**](../commands/theme/Design_Object_Access.md). This source toolkit facilitates the integration into your applications of code control tools and more particularly version control systems (VCS). It also lets you implement advanced systems for [code documentation](../Project/documentation.md), for building a custom explorer or for organizing scheduled backups of the code saved as disk files.

Se aplican los siguientes principios:

- Each method and form in a 4D application has its own address in the form of a pathname. Por ejemplo, el método de activación de la tabla 1 se encuentra en "[trigger]/tabla_1". Cada nombre de ruta de objeto es único en una aplicación.
- You can access objects in the 4D application using the commands of the **"Design Object Access"** command theme, for example [`METHOD GET NAMES`](../commands/method-get-names) or [`METHOD GET PATHS`](../commands/method-get-paths).
- Most of the commands in this theme work in both [interpreted and compiled](../Concepts/interpreted.md) mode. However, commands that modify properties or access contents executable from methods can only be used in interpreted mode (see the table below).
- Puede utilizar todos los comandos de este tema con 4D en modo local o remoto. However, keep in mind that you cannot use certain commands in compiled mode: the purpose of this theme is to create custom development support tools. You must not use these commands to dynamically change the functioning of a database that is running. For example, you cannot use [`METHOD SET ATTRIBUTE`](../commands/method-set-attribute) to change a method attribute according to the status of the current user.
- When a command of this theme is called from a [component](../Project/components.md), by default it accesses the component objects. In this case, to access objects of the host, you just pass a `*` as the last parameter.

### Uso en modo compilado

For reasons related to the principle of the compilation process, only certain commands in this theme can be used in compiled mode. The following table indicates the available of the commands in compiled mode:

| Comando                                                                  | Can be used in compiled mode |
| ------------------------------------------------------------------------ | ---------------------------- |
| [Current method path](../commands/current-method-path)                   | Sí                           |
| [FORM GET NAMES](../commands/form-get-names)                             | Sí                           |
| [METHOD Get attribute](../commands/method-get-attribute)                 | Sí                           |
| [METHOD GET ATTRIBUTES](../commands/method-get-attributes)               | Sí                           |
| [METHOD GET CODE](../commands/method-get-code)                           | No                           |
| [METHOD GET COMMENTS](../commands/method-get-comments)                   | Sí                           |
| [METHOD GET FOLDERS](../commands/method-get-folders)                     | Sí                           |
| [METHOD GET MODIFICATION DATE](../commands/method-get-modification-date) | Sí                           |
| [METHOD GET NAMES](../commands/method-get-names)                         | Sí                           |
| [METHOD Get path](../commands/method-get-path)                           | Sí                           |
| [METHOD GET PATHS](../commands/method-get-paths)                         | Sí                           |
| [METHOD GET PATHS FORM](../commands/method-get-paths-form)               | Sí                           |
| [METHOD OPEN PATH](../commands/method-open-path)                         | No                           |
| [METHOD RESOLVE PATH](../commands/method-resolve-path)                   | Sí                           |
| [METHOD SET ACCESS MODE](../commands/method-set-access-mode)             | Sí                           |
| [METHOD SET ATTRIBUTE](../commands/method-set-attribute)                 | No                           |
| [METHOD SET ATTRIBUTES](../commands/method-set-attributes)               | No                           |
| [METHOD SET CODE](../commands/method-set-code)                           | No                           |
| [METHOD SET COMMENTS](../commands/method-set-comments)                   | No                           |

:::note

The error -9762 "The command cannot be executed in a compiled database." is generated when the command is executed in compiled mode.

:::

### Creation of pathnames

Pathnames generated for 4D objects must be compatible with the file management of the operating system. Characters that are forbidden at the OS level such as ":" are automatically encoded in method names, so that generated files may be integrated automatically in a version control system.

Estos son los caracteres codificados:

| Caracter                     | Encoding |
| ---------------------------- | -------- |
| "                            | %22      |
| \*                           | %2A      |
| /                            | %2F      |
| :            | %3A      |
| \< | %3C      |
| \>                          | %3E      |
| ?                            | %3F      |
| \|                           | %7C      |
| \\                         | %5C      |
| %                            | %25      |

#### Ejemplos

`Form?1` está codificado `Form%3F1`  
`Button/1` está codificado `Button%2F1`