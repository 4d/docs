---
id: overview
title: Generalidades
---

Los parámetros configuran el funcionamiento del proyecto actual. Estos parámetros pueden ser diferentes para cada proyecto. They include the listening ports, backup configurations, security options, Web parameters, etc.

![](../assets/en/settings/main.png)

> 4D provides another set of parameters, called **Preferences**, that apply to the 4D IDE application. For more information, refer to [Preferences](../Preferences/general.md).


## Acceso a los parámetros

Puede acceder a la caja de diálogo Parámetros:

-   utilizando la opción de menú **Diseño > Parámetros...**
-   haciendo clic en **Parámetros** en la barra de herramientas 4D
-   on 4D Server, using the **Edit > Settings...** menu option

When [**User settings** mode is enabled](../Desktop/user-settings.md), **Settings...** is renamed **Structure Settings...** and two additional menu commands are available at each location:

-   **User Settings...** gives you access to settings that can be stored externally in a user file. Si se modifican, se utilizan en lugar de los parámetro de estructura.
-   **User Settings for Data File...** gives you access to settings that can be stored externally in a user file attached to the current data file. If they are modified, they are used instead of user or structure settings.

### Información sobre el bloqueo

Locking can occur in both Project and Client/server modes when:

-   The *settings.4DSettings* file is 'Read-only' (Projects only). Al modificar un parámetro se mostrará una alerta para desbloquearlo, si es posible.
-   Dos o más usuarios intentan modificar los mismos parámetros al tiempo. Los parámetros no pueden utilizarse hasta que el primer usuario los libere cerrando la ventana. (Cliente/servidor únicamente)

In both cases, the settings can be opened in 'Read-only', but cannot be used until the lock is removed.



## Personalización de los parámetros

In the Settings dialog boxes, parameters whose values have been modified appear **in bold**:

![](../assets/en/settings/customize-settings.png)

Parameters indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted project.

Un parámetro sigue apareciendo en negrita aunque su valor se remplace manualmente por sus valores por defecto. De este modo, siempre es posible identificar visualmente los parámetros que se hayan personalizado.

La mayoría de los parámetros se aplican inmediatamente. However, a few of them (such as the Startup environment setting) only take effect when the database is restarted. In this case, a dialog box appears to inform you that the change will take effect at the next startup.


## Reinicialización de los parámetros

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en **Restablecer los valores de fábrica**.

Este botón reinicializa todos los parámetros de la página actual. Se activa cuando se ha modificado al menos un parámetro en la página actual.
