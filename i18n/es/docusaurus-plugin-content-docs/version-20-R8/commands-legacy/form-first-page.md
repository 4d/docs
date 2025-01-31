---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM FIRST PAGE.Summary-->FORM FIRST PAGE cambia la página actual del formulario por la primera página del formulario.<!-- END REF-->Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load.md), o si la primera página del formulario ya se muestra, FORM FIRST PAGE no hace nada.

#### Ejemplo 

El siguiente ejemplo es un método de una línea, llamado por un comando de menú, el cual muestra la primera página de un formulario.

```4d
 FORM FIRST PAGE
```

#### Ver también 

[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 250 |
| Hilo seguro | &cross; |


