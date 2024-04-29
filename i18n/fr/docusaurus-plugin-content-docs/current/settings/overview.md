---
id: overview
title: Settings
---

Les Paramètres configurent le fonctionnement du projet en cours. Ces paramètres peuvent être différents pour chaque projet. Ils comprennent les ports d'écoute, les configurations de sauvegarde, les options de sécurité, les paramètres Web, etc.

![](../assets/en/settings/main.png)

> 4D provides another set of parameters, called **Preferences**, that apply to the 4D IDE application. For more information, refer to [Preferences](../Preferences/general.md).

## Accès aux paramètres

Vous pouvez accéder à la boîte de dialogue Paramètres :

- using the **Design > Settings...** menu option
- by clicking **Settings** on the 4D toolbar
- on 4D Server, using the **Edit > Settings...** menu option

When [**User settings** mode is enabled](../Desktop/user-settings.md), **Settings...** is renamed **Structure Settings...** and two additional menu commands are available at each location:

- **User Settings...** gives you access to settings that can be stored externally in a user file. Si ceux-ci sont modifiés, ils sont utilisés à la place des paramètres de structure.
- **User Settings for Data File...** gives you access to settings that can be stored externally in a user file attached to the current data file. S'ils sont modifiés, ils sont utilisés à la place des paramètres utilisateur ou des paramètres de structure.

### Informations sur le verrouillage

Le verrouillage peut se produire dans les modes Projet et Client/serveur lorsque :

- The _settings.4DSettings_ file is 'Read-only' (Projects only). La modification d'un paramètre affiche une alerte pour le déverrouiller, le cas échéant.
- Deux utilisateurs ou plus tentent de modifier les mêmes paramètres en même temps. Les paramètres ne peuvent pas être utilisés jusqu'à ce que le premier utilisateur les libère en fermant la fenêtre. (Client/serveur uniquement)

Dans les deux cas, les paramètres peuvent être ouverts en 'Lecture seule', mais ne peuvent pas être utilisés tant qu'ils sont verrouillés.

## Personnalisation des paramètres

In the Settings dialog boxes, parameters whose values have been modified appear **in bold**:

![](../assets/en/settings/customize-settings.png)

Les paramètres indiqués comme personnalisés peuvent avoir été modifiés directement dans la boîte de dialogue, ou avoir été modifiés précédemment dans le cas d'un projet converti.

Un paramètre apparaît toujours en gras même lorsque sa valeur est remplacée manuellement par ses valeurs par défaut. Ainsi, il est toujours possible d'identifier visuellement les paramètres qui ont été personnalisés.

La plupart des paramètres sont appliqués immédiatement. Toutefois, certains d'entre eux (tels que le paramètre de démarrage) ne prennent effet que lorsque la base de données est redémarrée. Dans ce cas, une boîte de dialogue apparaît pour vous informer que la modification prendra effet au prochain démarrage.

## Réinitialisation des paramètres

To reset the parameters to their default values and remove the bold style indicating that they have been customized, click **Reset to factory settings**.

Ce bouton réinitialise tous les paramètres de la page courante. Il devient actif lorsqu'au moins un paramètre a été modifié sur la page courante.
