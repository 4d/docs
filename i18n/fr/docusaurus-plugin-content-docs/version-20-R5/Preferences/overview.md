---
id: overview
title: Préférences
---

User preferences specify various settings affecting your working environment, e.g. default options, display themes, Code Editor features, shortcuts, etc. Elles sont appliquées à tous les projets ouverts avec votre application 4D ou 4D Server.

**4D Server**: Object locking occurs when two or more users try to modify the settings in the Preferences dialog box at the same time. Un seul utilisateur à la fois peut utiliser la boîte de dialogue Préférences.

> 4D offers a different set of parameters specific to the open projet: **Settings** (available from the **Design** menu). Pour plus d'informations, reportez-vous au chapitre Paramètres.

## Accès

You can access the Preferences dialog box from the **Edit > Preferences...** menu (Windows) or the **4D** Application menu (macOS):

![](../assets/en/Preferences/overviewAccess.png)

Cette option de menu est disponible même lorsqu'il n'y a pas de projet ouvert.

You can also display the Preferences dialog box in Application mode using the "Preferences" standard action (associated with a menu item or a button) or using the `OPEN SETTINGS WINDOW` command.

## Storage

Settings made in the Preferences dialog box are saved in an XML format preferences file named **4D Preferences vXX.4DPreferences** that is stored in the active 4D folder of the current user, as returned by the [`Get 4D folder`](https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html) command:

- Windows: `{disk}\Users\{UserName}\AppData\Roaming\4D`
- macOS: `{disk}:Users:{UserName}:Library:Application Support:4D`

## Personnalisation des paramètres et réinitialisation des réglages

Dans les boîtes de dialogue des paramètres, les paramètres dont les valeurs ont été modifiées apparaissent en gras :

![](../assets/en/Preferences/overviewUser.png)

Les préférences indiquées comme personnalisées peuvent avoir été modifiées directement dans la boîte de dialogue, ou avoir été modifiées précédemment dans le cas d'une base de données convertie.

Un paramètre apparaît toujours en gras même lorsque sa valeur est remplacée manuellement par ses valeurs par défaut. Ainsi, il est toujours possible d'identifier visuellement les paramètres qui ont été personnalisés.

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click on the **Reset to factory settings** button:

![](../assets/en/Preferences/overviewSettings.png)

Ce bouton réinitialise tous les paramètres de la page courante. Il devient actif lorsqu'au moins un paramètre a été modifié sur la page courante.
