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

Legacy commands from this theme can usually be usefully replaced by commands of the [*File and Folder*](./File_and_Folder.md) theme and their associated [File](../../API/FileClass.md), [Folder](../../API/FolderClass.md), [ZipFile](../../API/ZipFileClass.md) and [ZipFolder](../../API/ZipFolderClass.md) classes, allowing you to handle files and folders as objects.

:::

## Número de referencia del documento

You open a document with the [`Open document`](../../commands/open-document), [`Create document`](../../commands/create-document) and [`Append document`](../../commands/append-document) commands. Once a document is open, you can read and write characters from and to the document using commands such as [`RECEIVE PACKET`](../../commands/receive-packet) and [`SEND PACKET`](../../commands/send-packet). When you are finished with the document, you usually close it using the `CLOSE DOCUMENT` command.

All open documents returned by these commands are referred to using a **document reference number** (*DocRef*). A *DocRef* uniquely identifies an open document. It is formally an expression of the **Time** type. Todos los comandos que trabajan con documentos abiertos esperan *DocRef* como parámetro. Si pasa un *DocRef* incorrecto a uno de estos comandos, se produce un error del gestor de archivos.

Un documento sólo puede ser abierto en modo **lectura/escritura** por un proceso a la vez. In **read-only** mode, one process can open several documents, several processes can open multiple documents, you can open the same document as many times as necessary, but you cannot open the same document in read/write mode twice at a time. The `Create document` and `Append document` commands automatically open documents in read/write mode. Only the `Open document` command lets you choose the opening mode.

:::note

When it is called from a [preemptive process](../../Develop/preemptive.md), a *DocRef* reference can only be used from this preemptive process. When it is called from a cooperative process, a *DocRef* reference can be used from any other cooperative process.

:::

## The Document system variable

`Open document`, `Create document`, `Append document` and `Select document` enable you to access a document using the standard Open or Save file dialog boxes. When you access a document through a standard dialog, 4D returns the full pathname of the document in the [`Document` system variable](../../Concepts/variables.md#system-variables). This system variable has to be distinguished from the *document* parameter that appears in the parameter list of the commands.

## Ruta absoluta o relativa

Most of the routines of this section accept document names, relative pathnames or absolute pathnames:

Los nombres de ruta relativos definen una ubicación con respecto a una carpeta situada en el disco. Si sólo se pasa el nombre del documento, se considera que se está utilizando una ruta relativa. In 4D, a relative pathname is usually expressed with respect to the database folder, i.e. the folder containing the structure file. Relative pathnames are especially useful when deploying applications in heterogenous environments.
Absolute pathnames define a location with respect to the root of the volume and so they do not depend on the current location of the database folder.
To determine whether a pathname passed to a command must be interpreted as absolute or relative, 4D applies a specific algorithm on each platform.

Windows  
If the parameter contains only two characters and if the second one is a ':',
or if the text contains ':' and '\' as the second and third character,
or if the text starts with "\\",
then the pathname is absolute.

In all other cases, the pathname is relative.

Ejemplos con el comando CREATE FOLDER:

CREATE FOLDER("lundi") // relative path
CREATE FOLDER("\Monday") // relative path
CREATE FOLDER("\Monday\Tuesday") // relative path
CREATE FOLDER("c:") // absolute path
CREATE FOLDER("d:\Monday") // absolute path
CREATE FOLDER("\\srv-Internal\temp") // absolute path

macOS  
If the text starts with a folder separator ':',
or if does not contain any,
then the path is relative.

En los demás casos, es absoluta.

Ejemplos con el comando CREATE FOLDER:

CREATE FOLDER("Monday") // relative path
CREATE FOLDER("macintosh hd:") // absolute path
CREATE FOLDER("Monday:Tuesday") // absolute path (a volume must be called Monday)
CREATE FOLDER(":Monday:Tuesday") // relative path

:::note

See also [**Absolute and relative pathnames** in the Concepts section](../../Concepts/paths.md#absolute-and-relative-pathnames).

:::

## Extracting pathname contents

Puede manejar el contenido de las rutas utilizando los comandos Path to object y Object to path. En particular, usando estos comandos, se puede extraer de una ruta:

a file name,
the parent folder path,
the file or folder extension.