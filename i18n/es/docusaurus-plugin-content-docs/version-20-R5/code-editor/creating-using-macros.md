---
id: creating-using-macros
title: Creación y uso de macros
---

Puede utilizar macrocomandos en sus métodos. El uso de macrocomandos permite ahorrar mucho tiempo durante la entrada de código.

## ¿Qué es una macro?

Un macro-comando es una parte de código 4D accesible permanentemente y que puede insertarse en cualquier parte de sus métodos, sea cual sea el tipo de la base abierta. Las macros pueden contener todo tipo de texto, comandos y constantes 4D, así como también etiquetas especiales, que se sustituyen en el momento de la inserción de la macro por valores derivados del contexto del método. Por ejemplo, una macro puede contener la etiqueta `<method_name/>;` en el momento de la inserción de la macro, esta etiqueta será sustituida por el nombre del método proyecto actual.

Las macros se almacenan en uno o varios archivos en formato XML (texto). Pueden colocarse en una lista del editor de código; también pueden llamarse utilizando el menú contextual del editor o utilizando la función de entrada predictiva.

Las macros 4D están escritas en formato XML. Puede utilizar el archivo de macros por defecto de 4D tal como está o modificarlo.

## Ubicación de las macros

4D carga las macros desde una carpeta llamada **Macros v2**. Las macros deben estar en forma de uno o varios archivos XML ubicados en esta carpeta.

La carpeta "Macros v2" puede ser ubicada:

- En la carpeta 4D activa de la máquina. Las macros son compartidas para todas las bases. **Note:** The location of the active 4D folder varies according to the operating system used. For more information, refer to the description of the [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html) command in the 4D *Language Reference* manual.
- Junto al archivo de estructura de la base. Las macros sólo se cargan para esta estructura.
- Para los componentes: en la carpeta **Components** de la base. Las macros sólo se cargan si el componente está instalado.

Estas tres ubicaciones pueden utilizarse simultáneamente: es posible instalar una carpeta "Macros v2" en cada una de ellas. Las macros se cargarán en el siguiente orden: carpeta 4D, archivo de estructura, componente 1... componente X.

## Macros por defecto



4D ofrece un conjunto de macros por defecto que contienen, por ejemplo, palabras clave de flujo de control. Estas macros se incluyen en el archivo por defecto "*Macros.xml*", ubicado en la carpeta "Macros v2" que se crea en la carpeta 4D activa de la máquina durante el arranque inicial de 4D.

Posteriormente, puede modificar este archivo o el contenido de la carpeta como desee (ver el párrafo siguiente). En caso de problemas con esta carpeta, se puede borrar y 4D la volverá a crear en el siguiente inicio.

## Añadir macros personalizadas

Puede añadir macros personalizadas en el archivo "Macros.xml" utilizando un editor de texto estándar o por programación. También puede añadir archivos XML de macros personalizados en esta carpeta.

En modo local, el archivo de macros puede abrirse mientras se utiliza 4D. La lista de macros disponibles se actualiza en cada evento de activación de 4D. Por ejemplo, es posible traer el editor de texto al primer plano, modificar el archivo de macros y, a continuación, volver al método: la nueva macro estará entonces disponible en el Editor de código.

No se muestran macros vacías o erróneas.

### Comprobación de la sintaxis de las macros personalizadas

Los archivos de macrocomandos de 4D deben ser conformes al estándar XML. Esto significa, más concretamente, que las declaraciones XML `<?xml version="1.0" ...?>` y la declaración de documento `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` son obligatorias al principio de un archivo de macros para que pueda cargarse. Se soportan los diferentes tipos de codificación XML. No obstante, se recomienda utilizar una codificación compatible con Mac/PC (UTF-8). 4D ofrece un DTD que puede utilizarse para validar los archivos de macros. Este archivo se encuentra en la siguiente ubicación:

- Windows: \Resources\DTD\macros.dtd
- Mac OS: :Contents:Resources:DTD:macros.dtd

Si un archivo de macros no contiene las declaraciones o no puede validarse, no se carga.

## Síntaxis de macros 4D

Las macros 4D se crean utilizando etiquetas XML personalizadas llamadas "elementos"

Algunas etiquetas indican el inicio y el final de la definición (etiquetas dobles del tipo `<tag> </tag>`), otras se sustituyen por valores de contexto de inserción (`<tag/>`).

De conformidad con las especificaciones XML, algunas etiquetas de elementos pueden incluir atributos. A menos que se indique lo contrario, estos atributos son opcionales y se utiliza un valor por defecto cuando se omiten. La sintaxis de los elementos con atributos es la siguiente:

- Etiquetas dobles: `<tag attribute="value"> </macro>`
- Etiquetas individuales: `<tag attribute="value"/>`

If the element accepts several attributes, you can group them in the same line of command, separated by a space: `\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;`

Aquí está la lista de etiquetas y su modo de uso:

| **Etiquetas de elementos**       | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<macros> </macros>` | Inicio y fin del archivo macro (etiqueta obligatoria).                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `<macro> </macro>`   | Inicio y fin de la definición de una macro y sus atributos.                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | *Atributos*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                  | - name: Nombre**de la macro tal y como aparece en los menús y en las listas del Editor de código (atributo obligatorio).                                                                                                                                                                                                                                                                                                                                                                 |
|                                  | - type_ahead_text: Cadena de caracteres** que debe introducirse para llamar a la macro utilizando la función type-ahead (también conocida como autocompletar)*.                                                                                                                                                                                                                                                                                                                      |
|                                  | - in_menu: booleano que indica si la macro se puede llamar utilizando el menú contextual*. Valores = "true" (por defecto) o "false"                                                                                                                                                                                                                                                                                                                                                      |
|                                  | - type_ahead: Booleano que indica si la macro puede llamarse utilizando la función de tecleo predictivo (o autocompletar)*. Valores = "true" (por defecto) o "false"                                                                                                                                                                                                                                                                                                                     |
|                                  | - method_event: se utiliza para activar la llamada automática de la macro en función de la fase actualde manejo de cada método (creación, cierre, etc.). Valores = "on_load": la macro se dispara al abrir cada método, "on_save": la macro se dispara al guardar cada método (cierre de un método modificado o guardado utilizando el comando File>Save, "on_create": la macro se dispara cuando se crea cada método, "on_close": la macro se dispara cuando se cierra cada método. |
|                                  | "on_save" y "on_close" pueden utilizarse conjuntamente --- en otras palabras, ambos eventos se generan cuando se cierra un método modificado. Por otro lado, "on_create" y "on_load" nunca se generan de forma consecutiva. Este atributo puede utilizarse, por ejemplo, para preformatear los métodos cuando se crean (comentarios en el área de encabezado) o para registrar información como la fecha y la hora en que se cierran.                                                |
|                                  | - version: utilizada para activar el nuevo modo de soportar selecciones de texto para la macro (ver más adelante la sección "Acerca de la etiqueta `<method>`"). Para activar este nuevo modo, pase el valor "2". Si omite este atributo o pasa la version="1", se conserva el modo anterior.                                                                                                                                                                                      |
|                                  | - in_toolbar: booleano que indica si la macro debe estar presente en el menú del botón Macro de la barra de herramientas. Valores= "true" (por defecto) o "false".                                                                                                                                                                                                                                                                                                                       |
| `<selection/>`             | Etiqueta reemplazada por el texto seleccionado cuando la macro se inserta. La selección puede estar vacía.                                                                                                                                                                                                                                                                                                                                                                               |
| `<text> </text>`     | Inicio y fin del código que debe insertarse en el método. Se añadirá un retorno de carro antes y después del código.                                                                                                                                                                                                                                                                                                                                                                     |
| `<method> </method>` | Inicio y fin del nombre del método proyecto y de su parámetro (opcional). El método se ejecuta cuando se llama a la macro. Puede pasar un parámetro de la forma ("param1;param2;..."). Este parámetro se recibirá en el método utilizando las variables $1, $2, etc. Para más información sobre esta etiqueta, consulte la sección "Acerca de la etiqueta `<method>`".                                                                                                             |
| `<caret/>`                 | Ubicación del punto de inserción en el código una vez insertada la macro.                                                                                                                                                                                                                                                                                                                                                                                                                |
| `<user_4D/>`               | Etiqueta reemplazada por el nombre del usuario 4D actual.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `<user_os/>`               | Etiqueta reemplazada por el nombre de usuario actual del sistema.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `<method_name/>`           | Etiqueta reemplazada por el nombre del método actual.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `<method_path/>`           | Etiqueta sustituida por la sintaxis de la ruta (tal como la devuelve [`METHOD Get path`](https://doc.4d.com/4dv19R/help/command/en/page1164.html) del método actual.                                                                                                                                                                                                                                                                                                                     |
| `<date/>`                  | Etiqueta reemplazada por la fecha actual.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | - format: formato 4D utilizado para mostrar la fecha. Si no se define ningún formato, se utilizará el formato predeterminado. Valores = número de formato 4D (0 a 8).                                                                                                                                                                                                                                                                                                                    |
| `<time/>`                  | Etiqueta reemplazada por la hora actual.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | - format: formato 4D utilizado para mostrar la hora. Si no se define ningún formato, se utilizará el formato predeterminado. Valores = número de formato 4D (0 a 6).                                                                                                                                                                                                                                                                                                                     |
| `<clipboard/>`             | Etiqueta reemplazada por el contenido del portapapeles.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                                  | - index: portapapeles a pegar. Valores = número del portapapeles (0 a 9).                                                                                                                                                                                                                                                                                                                                                                                                                |

- Macros can be called using the context menu of the Code Editor or using the type-ahead function (see the following section).\
  ** If you want to conform to XML language specifications, you must not use extended characters (accented characters, quotation marks, etc.).
- Si desea ajustarse a las especificaciones del lenguaje XML, no debe utilizar caracteres extendidos (caracteres acentuados, comillas, etc.).

Este es un ejemplo de definición de una macro:

| **Contenido de la macro**                            | **Comentarios**                                                                                                                                                       |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<?xml version="1.0"...?>`                     | Declaración XML                                                                                                                                                       |
| `<!DOCTYPE macros SYSTEM>`                     | Declaración del documento                                                                                                                                             |
| `<macros>`                                     | Inicio del archivo XML de macros                                                                                                                                      |
| `<macro name="RecordLoop">`                    | Inicio de la definición y del nombre de la macro                                                                                                                      |
| `<text>`                                       | Inicio del código de la macro                                                                                                                                         |
| For($i;1;Records in selection(`<Selection/>`)) | La etiqueta `<Selection/>` será reemplazada por el código seleccionado en el método 4D al momento de la inserción de la macro (por ejemplo, un nombre de tabla) |
| SAVE RECORD(`<Selection/>`)                    |                                                                                                                                                                       |
| NEXT RECORD(`<Selection/>`)                    |                                                                                                                                                                       |
| End for                                              |                                                                                                                                                                       |
| `</text>`                                      | Fin del código macro                                                                                                                                                  |
| `</macro>`                                     | Fin de la definición de macro                                                                                                                                         |
| `</macros>`                                    | Fin del archivo XML de macros                                                                                                                                         |

## Sobre la etiqueta `<method>`

La etiqueta `<method>` permite generar y utilizar macrocomandos que ejecutan métodos proyecto 4D. Esto permite a los desarrolladores crear funciones sofisticadas que pueden distribuirse mediante macrocomandos asociados a los componentes. For example, the following macro will cause the *MyMethod* method to be executed with the name of the current method as parameter:

`<method>MyMethod("<method_name/>")</method>`

El código de un método llamado se ejecuta en un nuevo proceso. Este proceso se cierra una vez se ejecuta el método.

> **Note:** The structure process remains frozen until the called method execution is completed. Debe asegurarse de que la ejecución es rápida y de que no hay riesgo de que bloquee la aplicación. If this occurs, use the **Ctrl+F8** (Windows) or **Command+F8** (Mac OS) command to "kill" the process.

## Llamando macros

Por defecto, las macros pueden llamarse mediante el menú contextual o la barra de herramientas del editor de código, de la función de autocompletar o de una lista específica en la parte inferior de la ventana del editor de código.

Tenga en cuenta que para cada macro es posible restringir la posibilidad de llamarla utilizando el menú contextual y/o la función de autocompletar.

### Menú contextual y barra de herramientas

By default, all macros can be called via the context menu of the Code Editor (using the **Insert macro** hierarchical command) or the **Macros** button of the toolbar.

The *in_menu* attribute of the `<macro>` tag is used to set whether or not the macro appears in this menu.

En el menú contextual, las macros se muestran en el orden del archivo "Macros.xml" y de cualquier archivo XML adicional. Por lo tanto, es posible cambiar el orden modificando estos archivos.

### Autocompletar

By default, all macros are accessible using the autocomplete (aka type-ahead) function (see [Writing a method](./write-class-method.md)). The *type_ahead* attribute of the `<macro>` tag can be used to exclude a macro from this type of operation.

**Note:** If the macro contains the `<selection/>` tag, it will not appear in the autocomplete pop-up window.

### Lista del editor de código

You can display your macros in a list of the Code Editor (see [Writing a method](./write-class-method.md)). Basta con hacer doble clic en el nombre de una macro de la lista para llamarla. No es posible excluir una macro específica de esta lista.

## Notas de compatibilidad

El soporte de macros puede cambiar de una versión de 4D a otra. Con el fin de mantener la compatibilidad entre las diferentes versiones y conservar sus personalizaciones, 4D no elimina ninguna versión anterior. Si desea utilizar las últimas funciones disponibles, debe adaptar su versión en consecuencia.

### Variables de selección de texto para métodos

It is recommended to manage text selections using the [GET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html)and [SET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html) commands. Estos comandos pueden utilizarse para superar la partición de los espacios de ejecución del proyecto local/componente y permitir así la creación de componentes dedicados a la gestión de macros. Para activar este modo para una macro, debe declarar el atributo Version con el valor 2 en el elemento Macro. In this case, 4D no longer manages the predefined variables _textSel,_textReplace, etc. and the [GET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/GET-MACRO-PARAMETER.301-5739797.en.html)and [SET MACRO PARAMETER](https://doc.4d.com/4Dv19R4/4D/19-R4/SET-MACRO-PARAMETER.301-5739788.en.html) are used. Este atributo debe declararse así:

`<macro name="MyMacro" version="2">`<br/> `--- Text of the macro ---`<br/> `</macro>`

Si no se pasa este atributo, el modo anterior se mantiene.

### Incompatibilidades relacionadas con el estándar XML

Para que los archivos de macros respeten la norma XML, deben observarse reglas sintácticas estrictas. Esto puede provocar incompatibilidades con el código de las macros creadas con versiones anteriores e impedir la carga de archivos XML. Las siguientes son las principales fuentes de mal funcionamiento:

- Los comentarios del tipo "// mi comentario", permitidos dentro de los elementos `<macro>` en versiones anteriores de 4D, no son compatibles con la sintaxis XML. Las líneas de comentarios deben respetar la forma estándar `"<!-- mi comentario -->"`.
- Los símbolos `<>` utilizados más particularmente para los nombres de objetos interprocesos deben codificarse. Por ejemplo, la variable `<>params` debe escribirse `&lt;>params`.
- La etiqueta de declaración inicial `<macros>` podía omitirse en versiones anteriores de 4D. Ahora es obligatorio; de lo contrario, el archivo no se cargará.
