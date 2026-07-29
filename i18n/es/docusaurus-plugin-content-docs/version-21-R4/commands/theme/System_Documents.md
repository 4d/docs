---
id: System_Documents_theme
title: Documentos sistema
sidebar_label: Documentos sistema
slug: /commands/theme/System-Documents
---

|                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #_command_.Append document.Syntax -->](../../commands/append-document)<br/>                           |
| [<!-- INCLUDE #_command_.CLOSE DOCUMENT.Syntax -->](../../commands/close-document)<br/>                             |
| [<!-- INCLUDE #_command_.Convert path POSIX to system.Syntax -->](../../commands/convert-path-posix-to-system)<br/> |
| [<!-- INCLUDE #_command_.Convert path system to POSIX.Syntax -->](../../commands/convert-path-system-to-posix)<br/> |
| [<!-- INCLUDE #_command_.COPY DOCUMENT.Syntax -->](../../commands/copy-document)<br/>                               |
| [<!-- INCLUDE #_command_.CREATE ALIAS.Syntax -->](../../commands/create-alias)<br/>                                 |
| [<!-- INCLUDE #_command_.Create document.Syntax -->](../../commands/create-document)<br/>                           |
| [<!-- INCLUDE #_command_.CREATE FOLDER.Syntax -->](../../commands/create-folder)<br/>                               |
| [<!-- INCLUDE #_command_.DELETE DOCUMENT.Syntax -->](../../commands/delete-document)<br/>                           |
| [<!-- INCLUDE #_command_.DELETE FOLDER.Syntax -->](../../commands/delete-folder)<br/>                               |
| [<!-- INCLUDE #_command_.DOCUMENT LIST.Syntax -->](../../commands/document-list)<br/>                               |
| [<!-- INCLUDE #_command_.Document to text.Syntax -->](../../commands/document-to-text)<br/>                         |
| [<!-- INCLUDE #_command_.FOLDER LIST.Syntax -->](../../commands/folder-list)<br/>                                   |
| [<!-- INCLUDE #_command_.GET DOCUMENT ICON.Syntax -->](../../commands/get-document-icon)<br/>                       |
| [<!-- INCLUDE #_command_.Get document position.Syntax -->](../../commands/get-document-position)<br/>               |
| [<!-- INCLUDE #_command_.GET DOCUMENT PROPERTIES.Syntax -->](../../commands/get-document-properties)<br/>           |
| [<!-- INCLUDE #_command_.Get document size.Syntax -->](../../commands/get-document-size)<br/>                       |
| [<!-- INCLUDE #_command_.Localized document path.Syntax -->](../../commands/localized-document-path)<br/>           |
| [<!-- INCLUDE #_command_.MOVE DOCUMENT.Syntax -->](../../commands/move-document)<br/>                               |
| [<!-- INCLUDE #_command_.Object to path.Syntax -->](../../commands/object-to-path)<br/>                             |
| [<!-- INCLUDE #_command_.Open document.Syntax -->](../../commands/open-document)<br/>                               |
| [<!-- INCLUDE #_command_.Path to object.Syntax -->](../../commands/path-to-object)<br/>                             |
| [<!-- INCLUDE #_command_.RESOLVE ALIAS.Syntax -->](../../commands/resolve-alias)<br/>                               |
| [<!-- INCLUDE #_command_.Select document.Syntax -->](../../commands/select-document)<br/>                           |
| [<!-- INCLUDE #_command_.Select folder.Syntax -->](../../commands/select-folder)<br/>                               |
| [<!-- INCLUDE #_command_.SET DOCUMENT POSITION.Syntax -->](../../commands/set-document-position)<br/>               |
| [<!-- INCLUDE #_command_.SET DOCUMENT PROPERTIES.Syntax -->](../../commands/set-document-properties)<br/>           |
| [<!-- INCLUDE #_command_.SET DOCUMENT SIZE.Syntax -->](../../commands/set-document-size)<br/>                       |
| [<!-- INCLUDE #_command_.SHOW ON DISK.Syntax -->](../../commands/show-on-disk)<br/>                                 |
| [<!-- INCLUDE #_command_.Test path name.Syntax -->](../../commands/test-path-name)<br/>                             |
| [<!-- INCLUDE #_command_.TEXT TO DOCUMENT.Syntax -->](../../commands/text-to-document)<br/>                         |
| [<!-- INCLUDE #_command_.VOLUME ATTRIBUTES.Syntax -->](../../commands/volume-attributes)<br/>                       |
| [<!-- INCLUDE #_command_.VOLUME LIST.Syntax -->](../../commands/volume-list)<br/>                                   |

:::info Compatibilidad

Los comandos heredados de este tema pueden normalmente ser reemplazados por comandos del tema [*Archivo y Carpeta*](./File_and_Folder.md) y sus clases asociadas [Archivo](../../API/FileClass.md), [Carpeta](../../API/FolderClass.md), [ZipFile](../../API/ZipFileClass.md) y [ZipFolder](../../API/ZipFolderClass.md), permitiéndole manejar archivos y carpetas como objetos.

:::

## Número de referencia del documento

Un documento se abre con los comandos [`Open document`](../../commands/open-document), [`Create document`](../../commands/create-document) y [`Append document`](../../commands/append-document). Una vez abierto el documento, puede leer y escribir caracteres en él mediante comandos como [`RECEIVE PACKET`](../../commands/receive-packet) y [`SEND PACKET`](../../commands/send-packet). Cuando haya terminado con el documento, normalmente lo cierra usando el comando `CLOSE DOCUMENT`.

Todos los documentos abiertos devueltos por estos comandos se referencian utilizando un **número de referencia del documento** (*DocRef*). Un *DocRef* identifica de forma única un documento abierto. Formalmente es una expresión del tipo **Tiempo**. Todos los comandos que trabajan con documentos abiertos esperan *DocRef* como parámetro. Si pasa un *DocRef* incorrecto a uno de estos comandos, se produce un error del gestor de archivos.

Un documento sólo puede ser abierto en modo **lectura/escritura** por un proceso a la vez. En modo **solo lectura**, un proceso puede abrir varios documentos, varios procesos pueden abrir múltiples documentos y se puede abrir el mismo documento tantas veces como sea necesario, pero no se puede abrir el mismo documento en modo lectura/escritura dos veces a la vez. Los comandos `Create document` y `Append document` automáticamente abren documentos en modo de lectura/escritura. Solo el comando `Open document` le permite elegir el modo de apertura.

:::note

Cuando se llama desde un [proceso apropiativo](../../Develop/preemptive.md), una referencia *DocRef* sólo puede usarse desde este proceso preferente. Cuando se llama desde un proceso cooperativo, se puede utilizar una referencia *DocRef* de cualquier otro proceso cooperativo.

:::

## La variable sistema Documento

Los comandos [`Open document`](../../commands/open-document), [`Create document`](../../commands/create-document), [`Append document`](../../commands/append-document`) y [`Select document`](../../commands/select-document) le permiten acceder a un documento mediante los cuadros de diálogo estándar para abrir o guardar archivos. Cuando se accede a un documento a través de un cuadro de diálogo estándar, 4D devuelve la ruta completa del documento en la [variable de sistema `Document`](../../Concepts/variables.md#system-variables). Esta variable del sistema debe distinguirse del parámetro *document* que aparece en la lista de parámetros de los comandos.

## Ruta absoluta o relativa

La mayoría de las rutinas de esta sección admiten **nombres de documentos**, **rutas relativas** o **rutas absolutas**.

- **Los nombres de ruta relativos** definen una ubicación con respecto a una carpeta situada en el disco. Si sólo se pasa el nombre del documento, se considera que se está utilizando una ruta relativa. En 4D, una ruta relativa suele expresarse con respecto a la [carpeta del proyecto](../../Project/architecture.md#project-folder), es decir, la carpeta que contiene el archivo .project. Los nombres de ruta relativos son especialmente útiles cuando se despliegan aplicaciones en entornos heterogéneos.
- **Las rutas absolutas** definen una ubicación con respecto a la raíz del volumen, por lo que no dependen de la ubicación actual de la carpeta del proyecto.

Para determinar si una ruta pasada a un comando debe ser interpretada como absoluta o relativa, 4D aplica un algoritmo específico en cada plataforma.

### Windows

- Si el parámetro contiene solo dos caracteres y el segundo es un ':'
- o si el texto contiene ':' y '\' como segundo y tercer caracter,
- o si el texto empieza por "\\",
- entonces la ruta es absoluta.

En todos los demás casos, la ruta es relativa.

Ejemplos con el comando [`CREATE FOLDER`](../../commands/create-folder):

```4d
 CREATE FOLDER("lundi") // ruta relativa
 CREATE FOLDER("\Monday") // ruta relativa
 CREATE FOLDER("\Monday\Tuesday") // ruta relativa
 CREATE FOLDER("c:") // ruta absoluta
 CREATE FOLDER("d:\Monday") // ruta absoluta
 CREATE FOLDER("\\srv-Internal\temp") // ruta absoluta
```

:::note

El editor de código de 4D permite el uso de [secuencias de escape](../../Concepts/quick-tour.md#escape-sequences). Una secuencia de escape comienza con una barra invertida `\`, seguida de un caracter. Por ejemplo, `\t` es la secuencia de escape para el carácter de tabulación.

El carácter `\` también se utiliza como separador en las rutas de acceso en Windows. En general, 4D interpretará correctamente las rutas de Windows introducidas en el editor de métodos sustituyendo las barras invertidas simples `\` por barras invertidas dobles `\\`. Por ejemplo, `C:\Folder` se convertirá en `C:\\Folder`.

Sin embargo, si escribe `C:\MyDocuments\New`, 4D mostrará `C:\\MyDocuments\New`. En este caso, el segundo `\` se interpreta erróneamente como `\N` (una secuencia de escape válida). Por lo tanto, debe introducir un doble "-" cuando quiera insertar una barra invertida antes de un caracter que se utiliza en una de las secuencias de escape reconocidas por 4D.

:::

### macOS

- Si el texto comienza con el separador de carpetas ':',
- o si no contiene ninguno,
- entonces la ruta es relativa.

En los demás casos, es absoluta.

Ejemplos con el comando [`CREATE FOLDER`](../../commands/create-folder):

```4d

 CREATE FOLDER("Monday") // ruta relativa
 CREATE FOLDER("macintosh hd:") // ruta absoluta
 CREATE FOLDER("Monday:Tuesday") // ruta absoluta (un volumen debe llamarse Monday)
 CREATE FOLDER(":Monday:Tuesday") // ruta relativa
```

:::note

Ver también [**Nombres absolutos y relativos** en la sección Conceptos](../../Concepts/paths.md#absolute-and-relative-pathnames).

:::

## Extracción del contenido de una ruta

Puedes gestionar el contenido de las rutas de acceso mediante los comandos [`Path to object`](../../commands/path-to-object) y [`Object to path`](../../commands/object-to-path). En particular, usando estos comandos, se puede extraer de una ruta:

- un nombre de archivo,
- la ruta de la carpeta padre,
- la extensión del archivo o carpeta.