---
id: set-document-properties
title: SET DOCUMENT PROPERTIES
slug: /commands/set-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT PROPERTIES.Syntax-->**SET DOCUMENT PROPERTIES** ( *doc* ; *bloqueado* ; *invisible* ; creado el ; creado a las ; modificado el ; modificado a las )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| doc | Text | &#8594;  | Nombre del documento o ruta de acceso completa al documento |
| bloqueado | Boolean | &#8594;  | Bloqueado (True) o desbloqueado (False) |
| invisible | Boolean | &#8594;  | Invisible (True) o Visible (False) |
| creado el | Fecha | &#8594;  | Fecha de creación |
| creado a las | Hora | &#8594;  | Hora de creación |
| modificado el | Fecha | &#8594;  | Última fecha de modificación |
| modificado a las | Hora | &#8594;  | Hora de la última modificación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET DOCUMENT PROPERTIES.Summary-->El comando SET DOCUMENT PROPERTIES modifica la información del documento cuyo nombre o ruta de acceso se pasa en *documento*.<!-- END REF--> 

Antes de llamar:

* Pase True en *bloqueado* para bloquear el documento. Un documento bloqueado no puede ser modificado. Pase False en *bloqueado* para desbloquear un documento.
* Pase True en *invisible* para ocultar el documento. Pase False en *invisible* para volver visible el documento en las ventanas del escritorio.
* Pase la fecha y hora de creación del documento en *creado el* y *creado a las*.
* Pase la fecha y hora de la última modificación del documento en *modificado en* y *modificado a las*.

Las fechas y horas de creación y última modificación son administradas por el administrador de archivos de su sistema cada vez que crea o accede a un documento. Utilizando este comando, puede cambiar estas propiedades en casos particulares. Ver el ejemplo del comando [GET DOCUMENT PROPERTIES](get-document-properties.md "GET DOCUMENT PROPERTIES").

#### Ver también 

[GET DOCUMENT PROPERTIES](get-document-properties.md)  