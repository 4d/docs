---
id: wp-use-page-setup
title: WP USE PAGE SETUP
slug: /WritePro/commands/wp-use-page-setup
displayed_sidebar: docs
---

<!--REF #_command_.WP USE PAGE SETUP.Syntax-->**WP USE PAGE SETUP** ( *docWP* )<!-- END REF-->
<!--REF #_command_.WP USE PAGE SETUP.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP USE PAGE SETUP.Summary-->El comando **WP USE PAGE SETUP** modifica las opciones de impresión de la página actual, basado en los atributos del documento 4D Write Pro para el tamaño de página y la orientación.<!-- END REF--> Este comando debe ser llamado justo antes de [WP PRINT](wp-print.md) con el fin de sincronizar los parámetros actuales de impresión de la página con las opciones de página del documento 4D Write Pro. 

Otras opciones son definidas por el comando 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md). Las opciones de impresión actuales se establecen para toda la sesión 4D.

#### Ejemplo 

Antes de imprimir un documento, que desea restablecer su tamaño y orientación a los valores almacenados en el documento:

```4d
 WP USE PAGE SETUP(writeProDoc)
```

#### Ver también 

[WP PRINT](wp-print.md)  