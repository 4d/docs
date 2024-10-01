---
id: overview
title: Preferencias
---

Las preferencias del usuario especifican varios ajustes que afectan a su entorno de trabajo, por ejemplo, las opciones predeterminadas, los temas de visualización, las características del Editor de Código, los accesos directos, etc. Se aplican a todos los proyectos abiertos con su aplicación 4D o 4D Server.

**4D Server**: el bloqueo de objetos se produce cuando dos o más usuarios intentan modificar los parámetros de la caja de diálogo Preferencias al mismo tiempo. Sólo un usuario puede utilizar la caja de diálogo Preferencias.

> 4D ofrece un conjunto de parámetros específicos diferente para el proyecto abierto: **Parámetros** (disponible en el menú **Diseño**). Para más información, consulte el capítulo de Parámetros.

## Acceso

Puede acceder a la caja de diálogo Preferencias desde el menú **Editar > Preferencias...** (Windows) o el menú de la aplicación **4D** (macOS):

![](../assets/en/Preferences/overviewAccess.png)

Esta opción de menú está disponible incluso cuando no hay ningún proyecto abierto.

También puede mostrar el cuadro de diálogo de Preferencias en el modo Aplicación mediante la acción estándar "Preferencias" (asociada a un elemento de menú o a un botón) o mediante el comando `OPEN VENTANA DE AJUSTES`.

## Storage

Los ajustes realizados en la caja de diálogo Preferencias se guardan en un archivo de preferencias en formato XML llamado **4D Preferences vXX.4DPreferences** que se almacena en la carpeta 4D activa del usuario actual, tal y como lo devuelve el comando [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html):

- Windows: `{disk}\Users\\{username\}\AppData\Roaming\4D`
- macOS: `{disk}:Users:\{username\}:Library:Application Support:4D`

## Personalización y reinicialización de los parámetros

En las cajas de diálogo de los parámetros, los parámetros cuyos valores han sido modificados aparecen en negrita:

![](../assets/en/Preferences/overviewUser.png)

Las preferencias indicadas como personalizadas pueden haber sido modificadas directamente en la caja de diálogo, o pueden haber sido modificadas previamente en el caso de una base convertida.

Un parámetro sigue apareciendo en negrita aunque su valor se remplace manualmente por sus valores por defecto. De este modo, siempre es posible identificar visualmente los parámetros que se hayan personalizado.

Para reiniciar los parámetros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en el botón **Restablecer los parámetros de fábrica**:

![](../assets/en/Preferences/overviewSettings.png)

Este botón reinicializa todos los parámetros de la página actual. Se activa cuando se ha modificado al menos un parámetro en la página actual.
