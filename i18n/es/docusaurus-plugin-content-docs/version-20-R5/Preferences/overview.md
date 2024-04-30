---
id: overview
title: Preferencias
---

Las preferencias del usuario especifican varios ajustes que afectan a su entorno de trabajo, por ejemplo, las opciones predeterminadas, los temas de visualización, las características del Editor de Código, los accesos directos, etc. Se aplican a todos los proyectos abiertos con su aplicación 4D o 4D Server.

**4D Server**: Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. Sólo un usuario puede utilizar la caja de diálogo Preferencias.

> 4D offers a different set of parameters specific to the open projet: **Settings** (available from the **Design** menu). Para más información, consulte el capítulo de Parámetros.

## Acceso

You can access the Preferences dialog box from the **Edit > Preferences...** menu (Windows) or the **4D** Application menu (macOS):

![](../assets/en/Preferences/overviewAccess.png)

Esta opción de menú está disponible incluso cuando no hay ningún proyecto abierto.

You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the `OPEN SETTINGS WINDOW` command.

## Storage

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

- Windows: `{disk}\Users\{UserName}\AppData\Roaming\4D`
- macOS: `{disk}:Users:{UserName}:Library:Application Support:4D`

## Personalización y reinicialización de los parámetros

En las cajas de diálogo de los parámetros, los parámetros cuyos valores han sido modificados aparecen en negrita:

![](../assets/en/Preferences/overviewUser.png)

Las preferencias indicadas como personalizadas pueden haber sido modificadas directamente en la caja de diálogo, o pueden haber sido modificadas previamente en el caso de una base convertida.

Un parámetro sigue apareciendo en negrita aunque su valor se remplace manualmente por sus valores por defecto. De este modo, siempre es posible identificar visualmente los parámetros que se hayan personalizado.

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Reset to factory settings** button:

![](../assets/en/Preferences/overviewSettings.png)

Este botón reinicializa todos los parámetros de la página actual. Se activa cuando se ha modificado al menos un parámetro en la página actual.
