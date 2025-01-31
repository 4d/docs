---
id: MailAttachmentClass
title: MailAttachment
---

Los objetos Attachment permiten referenciar archivos en un objeto [`Email`](EmailObjectClass.md). Los objetos Attachment son creados utilizando el comando [`MAIL New attachment`](../commands/mail-new-attachment.md).

### Objetos adjuntos

Los objetos Attachment ofrecen las siguientes propiedades y funciones de sólo lectura:

|                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #MailAttachmentClass.cid.Syntax -->](#cid)<br/><!-- INCLUDE #MailAttachmentClass.cid.Summary -->                            |
| [<!-- INCLUDE #MailAttachmentClass.disposition.Syntax -->](#disposition)<br/><!-- INCLUDE #MailAttachmentClass.disposition.Summary -->    |
| [<!-- INCLUDE #MailAttachmentClass.getContent().Syntax -->](#getcontent)<br/><!-- INCLUDE #MailAttachmentClass.getContent().Summary -->   |
| [<!-- INCLUDE #MailAttachmentClass.name.Syntax -->](#name)<br/><!-- INCLUDE #MailAttachmentClass.name.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.path.Syntax -->](#path)<br/><!-- INCLUDE #MailAttachmentClass.path.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #MailAttachmentClass.platformPath.Summary --> |
| [<!-- INCLUDE #MailAttachmentClass.size.Syntax -->](#size)<br/><!-- INCLUDE #MailAttachmentClass.size.Summary -->                         |
| [<!-- INCLUDE #MailAttachmentClass.type.Syntax -->](#type)<br/><!-- INCLUDE #MailAttachmentClass.type.Summary -->                         |

## 4D.MailAttachment.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                                                                      |
| ----------- | ----------------------------------------------------------------------------------- |
| 19 R2       | Acepta 4D.File, 4D.ZipFile, 4D.Blob |

</details>

<!-- REF #4D.MailAttachment.new().Syntax -->**4D.MailAttachment.new**( *file* : 4D.File { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *zipFile* : 4D.ZipFile { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *blob* : 4D.Blob { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<br/>**4D.MailAttachment.new**( *path* : Text { ; *name* : Text {; *cid* : Text{ ; *type* : Text { ; *disposition* :Text } } } } ) : 4D.MailAttachment<!-- END REF -->

<!-- REF #4D.MailAttachment.new().Params -->

| Parámetros  | Tipo                              |                             | Descripción                                                                                        |
| ----------- | --------------------------------- | :-------------------------: | -------------------------------------------------------------------------------------------------- |
| file        | 4D.File           |              ->             | Archivo adjunto                                                                                    |
| zIPFile     | 4D.ZipFile        |              ->             | Archivo zip adjunto                                                                                |
| blob        | 4D.Blob           |              ->             | BLOB que contiene el adjunto                                                                       |
| path        | Text                              |              ->             | Ruta del archivo adjunto                                                                           |
| name        | Text                              |              ->             | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto            |
| cid         | Text                              |              ->             | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid     |
| type        | Text                              |              ->             | Valor del encabezado content-type                                                                  |
| disposition | Text                              |              ->             | Valor del encabezado content-disposition: "inline" o "attachment". |
| Result      | 4D.MailAttachment | <- | Objeto adjunto                                                                                     |

<!-- END REF -->

#### Descripción

La función `4D.MailAttachment.new()` <!-- REF #4D.MailAttachment.new().Summary -->crea y devuelve un nuevo objeto de tipo `4D.MailAttachment`<!-- END REF -->. Es idéntico al comando [`MAIL New attachment`](../commands/mail-new-attachment.md) (acceso directo).

## .cid

<!-- REF #MailAttachmentClass.cid.Syntax -->**.cid** : Text<!-- END REF -->

#### Descripción

La propiedad `.cid` contiene <!-- REF #MailAttachmentClass.cid.Summary -->el ID del archivo adjunto<!-- END REF -->. Esta propiedad se utiliza sólo en los mensajes HTML. Si falta esta propiedad, el archivo se maneja como un simple adjunto (enlace).

## .disposition

<!-- REF #MailAttachmentClass.disposition.Syntax -->**.disposition** : Text<!-- END REF -->

#### Descripción

La propiedad `.disposition` contiene <!-- REF #MailAttachmentClass.disposition.Summary -->el valor del encabezado `Content-Disposition`<!-- END REF -->. Hay dos valores disponibles:

- "inline": el archivo adjunto se muestra dentro del contenido del mensaje, en la ubicación "cid". La renderización depende del cliente de correo.
- "attachment": el archivo adjunto se presenta como un enlace en el mensaje.

## .getContent()

<!-- REF #MailAttachmentClass.getContent().Syntax -->**.getContent()** : 4D.Blob<!-- END REF -->

<!-- REF #MailAttachmentClass.getContent().Params -->

| Parámetros | Tipo                    |                             | Descripción         |
| ---------- | ----------------------- | :-------------------------: | ------------------- |
| Result     | 4D.Blob | <- | Contenido del anexo |

<!-- END REF -->

#### Descripción

La función `.getContent()` <!-- REF #MailAttachmentClass.getContent().Summary -->devuelve el contenido del objeto adjunto en un objeto `4D.Blob`<!-- END REF -->. Puede utilizar este método con objetos adjuntos recibidos por el comando [`MAIL Convert from MIME`](EmailObjectClass.md#mail-convert-from-mime).

## .name

<!-- REF #MailAttachmentClass.name.Syntax -->**.name** : Text<!-- END REF -->

#### Descripción

La propiedad `.name` contiene <!-- REF #MailAttachmentClass.name.Summary -->el nombre y la extensión del adjunto<!-- END REF -->.  Por defecto, es el nombre del archivo, a menos que se haya indicado otro nombre en el comando [`MAIL New attachment`](../commands/mail-new-attachment.md).

## .path

<!-- REF #MailAttachmentClass.path.Syntax -->**.path** : Text<!-- END REF -->

#### Descripción

La propiedad `.path` contiene <!-- REF #MailAttachmentClass.path.Summary -->la ruta POSIX del archivo adjunto, si existe<!-- END REF -->.

## .platformPath

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

<!-- REF #MailAttachmentClass.platformPath.Syntax -->**.platformPath** : Text<!-- END REF -->

#### Descripción

La propiedad `.platformPath` contiene <!-- REF #MailAttachmentClass.platformPath.Summary -->la ruta del archivo adjunto expresada con la sintaxis de la plataforma actual<!-- END REF -->.

## .size

<!-- REF #MailAttachmentClass.size.Syntax -->**.size** : Integer<!-- END REF -->

#### Descripción

La propiedad `.size` contiene <!-- REF #MailAttachmentClass.size.Summary -->el valor del encabezado `size` del archivo adjunto<!-- END REF -->. La propiedad `.size` se devuelve cuando el mensaje MIME define un encabezado de tamaño en la parte adjunta.

## .type

<!-- REF #MailAttachmentClass.type.Syntax -->**.type** : Text<!-- END REF -->

#### Descripción

La propiedad `.type` contiene <!-- REF #MailAttachmentClass.type.Summary -->el `content-type` del archivo adjunto<!-- END REF -->. Si este tipo no se pasa explícitamente al comando [`MAIL New attachment`](../commands/mail-new-attachment.md), el `content-type` se basa en su extensión de archivo.
