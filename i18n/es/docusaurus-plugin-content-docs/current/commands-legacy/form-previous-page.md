---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE cambia la página actual de un formulario para mostrar la página anterior.<!-- END REF--> Si ningún formulario es mostrado o cargado por el comando [FORM LOAD](../commands/form-load.md) o si ya se muestra la primera página del formulario, FORM PREVIOUS PAGE no hace nada.

#### Ejemplo 

El siguiente ejemplo es un método de una línea llamado por un comando de menú, el cual muestra la página del formulario anterior a la página mostrada actualmente:

```4d
 FORM PREVIOUS PAGE
```

#### Ver también 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 249 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


