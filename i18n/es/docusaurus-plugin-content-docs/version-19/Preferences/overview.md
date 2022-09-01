---
id: overview
title: Generalidades
---

User preferences specify various settings affecting your working environment, e.g. default options, display themes, method editor features, shortcuts, etc. They are applied to all projects opened with your 4D or 4D Server application.

**4D Server**: Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. Sólo un usuario puede utilizar la caja de diálogo Preferencias.
> 4D offers a different set of parameters specific to the open projet: **Settings** (available from the **Design** menu). Para más información, consulte el capítulo de Parámetros.

## Acceso

You can access the Preferences dialog box from the **Edit > Preferences...** menu (Windows) or the **4D** Application menu (macOS):

![](../assets/en/Preferences/overviewAccess.png)

Esta opción de menú está disponible incluso cuando no hay ningún proyecto abierto.

You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the `OPEN SETTINGS WINDOW` command.

## Storage

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

* Windows: `{disk}\Users\{UserName}\AppData\Roaming\4D`
* macOS: `{disk}:Users:{UserName}:Library:Application Support:4D`

## Personalización de los parámetros y reinicialización de los parámetros

In settings dialog boxes, parameters whose values have been modified appear in bold:

![](../assets/en/Preferences/overviewUser.png)

Preferences indicated as customized may have been modified directly in the dialog box, or may have been modified previously in the case of a converted database.

A parameter still appears in bold even when its value is replaced manually with its default values. This way it is always possible to visually identify any parameters that have been customized.

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Reset to factory settings** button:

![](../assets/en/Preferences/overviewSettings.png)

Este botón reinicializa todos los parámetros de la página actual. It becomes active when at least one parameter has been modified on the current page.
