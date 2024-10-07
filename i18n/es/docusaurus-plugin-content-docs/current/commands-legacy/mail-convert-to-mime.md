---
id: mail-convert-to-mime
title: MAIL Convert to MIME
slug: /commands/mail-convert-to-mime
displayed_sidebar: docs
---

<!--REF #_command_.MAIL Convert to MIME.Syntax-->**MAIL Convert to MIME** ( *mail* {; *opciones*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.MAIL Convert to MIME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| mail | Object | &srarr; | Objeto Email |
| opciones | Object | &srarr; | Opciones de codificación de correo y Charset |
| Resultado | Text | &larr; | Objeto de correo electrónico convertido a MIME |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MAIL Convert to MIME.Summary-->**Documentación trasladada**

Se ha trasladado la documentación de este comando.<!-- END REF--> Consulte *developer.4d.com/docs* para ver la documentación actualizada.

El comando **MAIL Convert to MIME** convierte un objeto de correo electrónico en texto MIME. Este comando es llamado internamente por *transporter.send( )* para formatear el objeto de correo electrónico antes de enviarlo. Se puede utilizar para analizar el formato MIME del objeto.
