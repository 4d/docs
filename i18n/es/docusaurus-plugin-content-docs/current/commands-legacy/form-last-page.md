---
id: form-last-page
title: FORM LAST PAGE
slug: /commands/form-last-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM LAST PAGE.Syntax-->**FORM LAST PAGE**<!-- END REF-->
<!--REF #_command_.FORM LAST PAGE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.FORM LAST PAGE.Summary-->FORM LAST PAGE cambia la página actual de un formulario para mostrar la última página del formulario.<!-- END REF--> Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load.md), o si ya se muestra la última página del formulario, FORM LAST PAGE no hace nada.

#### Ejemplo 

El siguiente ejemplo es un método de una línea, llamado por un comando de menú, el cual muestra la última página del formulario:

```4d
 FORM LAST PAGE
```

#### Ver también 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  