---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.FORM NEXT PAGE.Summary-->FORM NEXT PAGE cambia la página actual del formulario para mostrar la página siguiente.<!-- END REF-->Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load.md), o si ya se muestra la última página del formulario, FORM NEXT PAGE no hace nada.

#### Ejemplo 

El siguiente ejemplo es un método de una línea, llamado por un comando de menú, el cual muestra la página del formulario que sigue a la página mostrada actualmente:

```4d
 FORM NEXT PAGE
```

#### Ver también 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  