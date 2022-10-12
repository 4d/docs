---
id: creating-using-macros
title: Creación y uso de macros
---

Puede utilizar macrocomandos en sus métodos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de código.

## ¿Qué es una macro?

A macro-command is a section of 4D code that is permanently accessible and that can be inserted anywhere in your methods, whatever the type of database open. Macros can contain all types of 4D text, commands and constants, as well as special tags which are replaced at the time of macro insertion by values derived from the method context. For instance, a macro may contain the tag `<method_name/>;` at the time of macro insertion, this tag will be replaced by the name of the current project method.

Las macros se almacenan en uno o varios archivos en formato XML (texto). They can be placed in a Code Editor list; they can also be called using the context menu of the editor or using the autocomplete function.

Las macros 4D están escritas en formato XML. Puede utilizar el archivo de macros por defecto de 4D tal como está o modificarlo.

## Ubicación de las macros

4D loads the macros from a folder named **Macros v2**. Macros must be in the form of one or more XML files that are placed in this folder.

La carpeta "Macros v2" puede ser ubicada:

- En la carpeta 4D activa de la máquina. Las macros son compartidas para todas las bases. **Note:** The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html) command in the 4D *Language Reference* manual.
- Junto al archivo de estructura de la base. Las macros sólo se cargan para esta estructura.
- For components: in the **Components** folder of the database. Las macros sólo se cargan si el componente está instalado.

These three locations can be used simultaneously: it is possible to install a "Macros v2" folder in each location. The macros will be loaded in the following order: 4D folder, structure file, component 1... component X.

## Macros por defecto

4D offers a set of default macros corresponding, in particular, to the list of keywords in previous versions of 4D. These macros are included in the default "*Macros.xml*" file, placed in the "Macros v2" folder that is created in the active 4D folder of the machine during the initial startup of 4D.

You can modify this file or the contents of the folder subsequently as desired (see the following paragraph). In the event of problems with this folder, it can be deleted and 4D will re-create it on the next startup.

## Adding customized macros

You can add customized macros in the "Macros.xml" file using a standard text editor or by programming. También puede añadir archivos XML de macros personalizados en esta carpeta.

En modo local, el archivo de macros puede abrirse mientras se utiliza 4D. La lista de macros disponibles se actualiza en cada evento de activación de 4D. For instance, it is possible to bring the text editor to the foreground, modify the macro file, then return to the method: the new macro is then available in the Code Editor.

No se muestran macros vacías o erróneas.

### Comprobación de la sintaxis de las macros personalizadas

The macro-command files of 4D must be in conformity with the XML standard. This means more particularly that XML declaration `<?xml version="1.0" ...?>` and document declaration `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` statements are mandatory at the beginning of a macro file in order for it to be loaded. Se soportan los diferentes tipos de codificación XML. However, it is recommended to use encoding that is Mac/PC (UTF-8) compatible. 4D ofrece un DTD que puede utilizarse para validar los archivos de macros. Este archivo se encuentra en la siguiente ubicación:

- Windows: \Resources\DTD\macros.dtd
- Mac OS: :Contents:Resources:DTD:macros.dtd

If a macros file does not contain the declaration statements or cannot be validated, it is not loaded.

## Syntax of 4D macros

Las macros 4D se crean utilizando etiquetas XML personalizadas llamadas "elementos"

Some tags indicate the start and end of the definition (double tags of the type `<tag> </tag>`), others are replaced by insertion context values (`<tag/>`).

In conformity with XML specifications, some element tags can include attributes. Unless otherwise indicated, these attributes are optional and a default value is used when they are omitted. La sintaxis de los elementos con atributos es la siguiente:

- Double tags: `<tag attribute="value"> </macro>`
- Single tags: `<tag attribute="value"/>`

If the element accepts several attributes, you can group them in the same line of command, separated by a space: `\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;`

Aquí está la lista de etiquetas y su modo de uso:

| **Etiquetas de elementos**       | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<macros> </macros>` | Inicio y fin del archivo macro (etiqueta obligatoria).                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `<macro> </macro>`   | Inicio y fin de la definición de una macro y sus atributos.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | *Atributos*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - name: Name**of macro as it appears in menus and Code Editor lists (mandatory attribute).                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                  | - type_ahead_text: Character string** to be entered to call the macro using the type-ahead (aka autocomplete) function*.                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - in_menu: Boolean indicating whether the macro can be called using the context menu*. Valores = "true" (por defecto) o "false"                                                                                                                                                                                                                                                                                                                                                                          |
|                                  | - type_ahead: Boolean indicating whether the macro can be called using the type-ahead (aka autocomplete) function*. Valores = "true" (por defecto) o "false"                                                                                                                                                                                                                                                                                                                                             |
|                                  | - method_event: Used to trigger the automatic calling of the macro depending on the current handling phase of each method (creation, closing, and so on). Values = "on_load": The macro is triggered on the opening of each method, "on_save": The macro is triggered when each method is saved (closing of a modified method or saving using the File>Save command, "on_create": The macro is triggered when each method is created, "on_close": The macro is triggered when each method is closed. |
|                                  | "on_save" and "on_close" can be used jointly --- in other words, both of these events are generated when a modified method is closed. On the other hand, "on_create" and "on_load" are never generated in a consecutive manner. This attribute can be used, for example, to preformat methods when they are created (comments in header area) or to record information such as the date and time when they are closed.                                                                               |
|                                  | - version: Used to activate the new mode of supporting text selections for the macro (see the "About the `<method>` Tag" section below). Para activar este nuevo modo, pase el valor "2". If you omit this attribute or pass version="1", the former mode is kept.                                                                                                                                                                                                                                 |
|                                  | - in_toolbar: Boolean indicating if the macro must be present in the menu of the Macro button of the toolbar. Valores= "true" (por defecto) o "false".                                                                                                                                                                                                                                                                                                                                                   |
| `<selection/>`             | Etiqueta reemplazada por el texto seleccionado cuando la macro se inserta. La selección puede estar vacía.                                                                                                                                                                                                                                                                                                                                                                                               |
| `<text> </text>`     | Inicio y fin del código que debe insertarse en el método. Se añadirá un retorno de carro antes y después del código.                                                                                                                                                                                                                                                                                                                                                                                     |
| `<method> </method>` | Start and end of the name of the project method and its (optional) parameter. El método se ejecuta cuando se llama a la macro. Puede pasar un parámetro de la forma ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the `<method>` Tag" section below.                                                                                                                        |
| `<caret/>`                 | Location of the insertion point in the code after the macro has been inserted.                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `<user_4D/>`               | Etiqueta reemplazada por el nombre del usuario 4D actual.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `<user_os/>`               | Etiqueta reemplazada por el nombre de usuario actual del sistema.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `<method_name/>`           | Etiqueta reemplazada por el nombre del método proyecto actual.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `<method_path/>`           | Etiqueta sustituida por el nombre completo del método proyecto actual.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `<date/>`                  | Etiqueta reemplazada por la fecha actual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | - format: formato 4D utilizado para mostrar la fecha. Si no se define ningún formato, se utilizará el formato predeterminado. Valores = número de formato 4D (0 a 8).                                                                                                                                                                                                                                                                                                                                    |
| `<time/>`                  | Tag replaced by the current time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | - format: formato 4D utilizado para mostrar la hora. Si no se define ningún formato, se utilizará el formato predeterminado. Valores = número de formato 4D (0 a 6).                                                                                                                                                                                                                                                                                                                                     |
| `<clipboard/>`             | Etiqueta reemplazada por el contenido del portapapeles.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | - index: Clipboard to be pasted. Valores = número del portapapeles (0 a 9).                                                                                                                                                                                                                                                                                                                                                                                                                              |

- Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).\
  ** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).
- If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).

Este es un ejemplo de definición de una macro:

| **Contenido de la macro**                            | **Comentarios**                                                                                                                                 |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `<?xml version="1.0"...?>`                     | Declaración XML                                                                                                                                 |
| `<!DOCTYPE macros SYSTEM>`                     | Declaración del documento                                                                                                                       |
| `<macros>`                                     | Start of macros XML file                                                                                                                        |
| `<macro name="RecordLoop">`                    | Start of macro definition and name                                                                                                              |
| `<text>`                                       | Start of macro code                                                                                                                             |
| For($i;1;Records in selection(`<Selection/>`)) | The `<Selection/>` tag will be replaced by the selected code in the 4D method at the time of macro insertion (for instance, a table name) |
| SAVE RECORD(`<Selection/>`)                    |                                                                                                                                                 |
| NEXT RECORD(`<Selection/>`)                    |                                                                                                                                                 |
| End for                                              |                                                                                                                                                 |
| `</text>`                                      | Fin del código macro                                                                                                                            |
| `</macro>`                                     | Fin de la definición de macro                                                                                                                   |
| `</macros>`                                    | Fin del archivo XML de macros                                                                                                                   |

## Sobre la etiqueta `<method>`

The `<method>` tag allows you to generate and use macro-commands that execute 4D project methods. This allows developers to create sophisticated functions that can be distributed via macro-commands which are associated with components. For example, the following macro will cause the *MyMethod* method to be executed with the name of the current method as parameter:

`<method>MyMethod("<method_name/>")</method>`

El código de un método llamado se ejecuta en un nuevo proceso. Este proceso se cierra una vez se ejecuta el método.

> **Note:** The structure process remains frozen until the called method execution is completed. You must make sure that the execution is quick and that there is no risk of it blocking the application. If this occurs, use the **Ctrl+F8** (Windows) or **Command+F8** (Mac OS) command to "kill" the process.

## Llamando macros

By default, macros can be called using the context menu or toolbar of the Code Editor, the autocomplete function, or a specific list at the bottom of the Code Editor window.

Note that for each macro it is possible to restrict the possibility of calling it using the context menu and/or the autocomplete function.

### Context menu and toolbar

By default, all macros can be called via the context menu of the Code Editor (using the **Insert macro** hierarchical command) or the **Macros** button of the toolbar.

The *in_menu* attribute of the `<macro>` tag is used to set whether or not the macro appears in this menu.

In the context menu, macros are displayed in the order of the "Macros.xml" file and any additional XML files. Por lo tanto, es posible cambiar el orden modificando estos archivos.

### Autocompletar

By default, all macros are accessible using the autocomplete (aka type-ahead) function (see [Writing a method](./write-class-method.md)). The *type_ahead* attribute of the `<macro>` tag can be used to exclude a macro from this type of operation.

**Note:** If the macro contains the `<selection/>` tag, it will not appear in the autocomplete pop-up window.

### Lista del editor de código

You can display your macros in a list of the Code Editor (see [Writing a method](./write-class-method.md)). Basta con hacer doble clic en el nombre de una macro de la lista para llamarla. No es posible excluir una macro específica de esta lista.

## Compatibility notes

El soporte de macros puede cambiar de una versión de 4D a otra. In order to keep the different versions compatible while maintaining your customizations, 4D does not remove any previous versions. If you want to use the latest features available, you must adapt your version accordingly.

### Variables de selección de texto para métodos

It is recommended to manage text selections using the [GET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html)and [SET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html) commands. These commands can be used to overcome the partitioning of the host project/component execution spaces and thus allow the creation of components dedicated to the management of macros. In order to activate this mode for a macro, you must declare the Version attribute with the value 2 in the Macro element. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the [GET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html)and [SET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html) are used. Este atributo debe declararse así:

`<macro name="MyMacro" version="2">`<br/> `--- Text of the macro ---`<br/> `</macro>`

Si no se pasa este atributo, el modo anterior se mantiene.

### Incompatibilidades relacionadas con el estándar XML

Strict syntax rules must be observed in order for macros files to respect the XML standard. This may lead to incompatibilities with the code of macros created with previous versions and prevent the loading of XML files. Las siguientes son las principales fuentes de mal funcionamiento:

- Comments of the "// my comment" type, allowed inside `<macro>` elements in previous versions of 4D, are not compatible with the XML syntax. The lines of comments must respect the standard `"<!-- my comment -->"` form.
- The `<>` symbols used more particularly for interprocess object names must be encoded. For example, the `<>params` variable must be written `&lt;>params`.
- The initial `<macros>` declaration tag could be omitted in previous versions of 4D. Ahora es obligatorio; de lo contrario, el archivo no se cargará.
