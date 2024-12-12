---
id: hide-tool-bar
title: HIDE TOOL BAR
slug: /commands/hide-tool-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE TOOL BAR.Syntax-->**HIDE TOOL BAR**<!-- END REF-->
<!--REF #_command_.HIDE TOOL BAR.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.HIDE TOOL BAR.Summary-->El comando **HIDE TOOL BAR** maneja la visualización de las barras de herramientas personalizadas creadas por el comando [Open form window](open-form-window.md) para el proceso actual.<!-- END REF-->

Si una ventana barra de herramientas ha sido creado por el comando [Open form window](open-form-window.md) con la opción Toolbar form window, el comando oculta esta ventana. Si la ventana barra de herramientas ya estaba oculta o si ninguna ventana de este tipo ha sido creada, el comando no hace nada.

#### Ejemplo 

En OS X, se ha definido una barra de herramientas personalizada y una ventana estándar que tiene la opción Has full screen mode Mac. Cuando una ventana estándar es maximizada por un usuario mientras se muestra la ventana de la barra de herramientas, usted no desea que la barra de herramientas solape la ventana maximizada.

Para evitar esto, en el evento formulario On Resize de la ventana estándar, es necesario detectar cuando la ventana pasa a modo pantalla completa y luego llamar **HIDE TOOL BAR**:

```4d
 Case of
    :(FORM Event=On Resize)
       GET WINDOW RECT($left;$top;$right;$bottom)
       If(Screen height=($bottom-$top))
          HIDE TOOL BAR
       Else
          SHOW TOOL BAR
       End if
 End case
```

#### Ver también 

[SHOW TOOL BAR](show-tool-bar.md)  