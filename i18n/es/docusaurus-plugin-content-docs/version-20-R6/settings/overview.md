---
id: overview
title: Settings
---

Los parámetros configuran el funcionamiento del proyecto actual. Estos parámetros pueden ser diferentes para cada proyecto. Incluyen los puertos de escucha, las configuraciones de copia de seguridad, las opciones de seguridad, los parámetros Web, etc.

![](../assets/en/settings/main.png)

> 4D ofrece otro conjunto de parámetros, llamados **Preferencias**, que se aplican a la aplicación 4D IDE. Para más información, consulte [Preferencias](../Preferences/general.md).

## Acceso a los parámetros

Puede acceder a la caja de diálogo Parámetros:

- utilizando la opción de menú **Diseño > Parámetros...**
- haciendo clic en **Parámetros** en la barra de herramientas 4D
- en 4D Server, utilizando la opción de menú **Edición > Parámetros...**

Cuando el [modo **Propiedades usuario** está activado](../Desktop/user-settings.md), **Propiedades...** pasa a llamarse **Propiedades de la estructura...** y hay dos comandos de menú adicionales disponibles en cada ubicación:

- **Parámetros usuario...** le da acceso a los parámetros que pueden almacenarse externamente en un archivo usuario. Si se modifican, se utilizan en lugar de los parámetro de estructura.
- **Parámetros usuario para el archivo de datos...** le da acceso a los parámetros que pueden almacenarse externamente en un archivo usuario adjunto al archivo de datos actual. Si se modifican, se utilizan en lugar de los parámetros usuario de los parámetros de estructura.

### Información sobre el bloqueo

El bloqueo puede ocurrir tanto en los modos Proyecto y Cliente/servidor cuando:

- El archivo *settings.4DSettings* es de "sólo lectura" (sólo Proyectos). Al modificar un parámetro se mostrará una alerta para desbloquearlo, si es posible.
- Dos o más usuarios intentan modificar los mismos parámetros al tiempo. Los parámetros no pueden utilizarse hasta que el primer usuario los libere cerrando la ventana. (Cliente/servidor únicamente)

En ambos casos, los parámetros pueden abrirse en "Sólo lectura", pero no pueden utilizarse hasta que se elimine el bloqueo.

## Personalización de los parámetros

En las cajas de diálogo de las Propiedades, los parámetros cuyos valores se han modificado aparecen **en negrita**:

![](../assets/en/settings/customize-settings.png)

Los parámetros indicados como personalizados pueden haber sido modificados directamente en la caja de diálogo, o pueden haber sido modificados previamente en el caso de un proyecto convertido.

Un parámetro sigue apareciendo en negrita aunque su valor se remplace manualmente por sus valores por defecto. De este modo, siempre es posible identificar visualmente los parámetros que se hayan personalizado.

La mayoría de los parámetros se aplican inmediatamente. Sin embargo, algunas de ellas (como la configuración del entorno de inicio) sólo surten efecto cuando se reinicia la base de datos. En este caso, aparece una caja de diálogo para informarle de que el cambio surtirá efecto en el próximo inicio.

## Reinicialización de los parámetros

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en **Restablecer los valores de fábrica**.

Este botón reinicializa todos los parámetros de la página actual. Se activa cuando se ha modificado al menos un parámetro en la página actual.
