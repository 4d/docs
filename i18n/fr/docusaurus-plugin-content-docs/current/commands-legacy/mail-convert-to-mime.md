---
id: mail-convert-to-mime
title: MAIL Convert to MIME
slug: /commands/mail-convert-to-mime
displayed_sidebar: docs
---

<!--REF #_command_.MAIL Convert to MIME.Syntax-->**MAIL Convert to MIME** ( *mail* {; *options*} ) -> Résultat<!-- END REF-->
<!--REF #_command_.MAIL Convert to MIME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| mail | Object | &srarr; | Email object |
| options | Object | &srarr; | Charset and encoding mail options |
| Résultat | Text | &larr; | Email object converted to MIME |

<!-- END REF-->

#### Description 

<!--REF #_command_.MAIL Convert to MIME.Summary-->**Documentation déplacée**

La documentation de cette commande a été déplacée.<!-- END REF--> Consultez *developer.4d.com/docs* pour obtenir une documentation à jour.

La commande **MAIL Convert to MIME** convertit un objet e-mail en un texte MIME. Cette commande est appelée en interne par *transporteur.send( )* pour formater l'objet e-mail avant de l'envoyer. Elle peut être utilisée pour analyser le format MIME de l'objet.
