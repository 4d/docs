---
id: mail-new-attachment
title: MAIL New attachment
slug: /commands/mail-new-attachment
displayed_sidebar: docs
---

<!--REF #_command_.MAIL New attachment.Syntax-->**MAIL New attachment** ( *valor* {; *nombre* {; *cid* {; *tipo* {; *disposición*}}}} ) -> Resultado<!-- END REF-->
<!--REF #_command_.MAIL New attachment.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| valor | Texto, BLOB, Objeto | &#x1F852; | Objeto (4D.File, 4D.ZipFile, 4D.Blob), oRuta del archivo adjunto (texto), oBlob que contiene el archivo adjunto (BLOB) |
| nombre | Texto | &#x1F852; | Nombre + extensión utilizados por el cliente de correo para designar el archivo adjunto |
| cid | Texto | &#x1F852; | ID del archivo adjunto (sólo en mensajes HTML), o " " si no se requiere cid |
| tipo | Texto | &#x1F852; | Valor de del encabezado content-type |
| disposición | Texto | &#x1F852; | Valor del encabezado content-disposition: "inline" o "attachment". |
| Resultado | Objeto | &#x1F850; | Objeto adjunto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MAIL New attachment.Summary-->**Documentación trasladada**

La documentación de este comando ha sido trasladada.<!-- END REF--> Visite *developer.4d.com* para ver la documentación actualizada.

El comando **MAIL New attachment** le permite crear un objeto adjunto que puede añadir a un objeto de correo electrónico (ver *transporter.send( )*)
