---
id: interface
title: Page Interface
---

La page Interface vous permet de régler diverses options liées à l'interface du projet.

## Général

Cette zone vous permet de personnaliser diverses options d'affichage.

![](../assets/en/settings/interface-page.png)

### Police à utiliser avec la commande MESSAGE

Click **Select...** to set the font and size for the characters used by the `MESSAGE` command.

La police et la taille de police par défaut dépendent de la plate-forme d'exécution de 4D.

> This property also affects the following parts of 4D: <li>certain preview areas of the Explorer</li><li>the ruler of the Form editor</li>

### Display Windows

D'autres options permettent de configurer l'affichage de diverses fenêtres du mode Application.

- **Splash screen**: When this option is deselected, the [splash screen of the current menu bar](Menus/bars.md#splash-screen) does not appear in the Application mode. When you hide this window, it is up to you to manage the display of all your windows by programming, for example in the `On Startup` database method.

- **Flushing progress**: When this option is checked, 4D displays a window at the bottom left of the screen while the data in the cache is flushed. Etant donné que cette opération bloque momentanément les actions de l'utilisateur, l'affichage de cette fenêtre lui permet de savoir que l'écriture du cache est en cours.

:::note

You can set the [frequency for cache flushing](database.md#memory-page) in **Settings** > **Database** > **Memory**.

:::

- **Printing progress**: Lets you enable or disable the display of the printing progress dialog box when printing.

- **Use SDI mode on Windows**: When this option checked, 4D enables automatically the [SDI mode (Single-Document Interface)](../Menus/sdi.md) in your application when executed in a [supported context](../Menus/sdi.md#sdi-mode-availability). When you select this option, on Windows the **Run** menu of the 4D menu bar allows you to select the mode in which you want to test the application:

  ![](../assets/en/settings/sdi-mdi.png)

:::note

Cette option peut être sélectionnée sur macOS mais sera ignorée lorsque l'application sera exécutée sur cette plateforme.

:::

### Apparence

Ce menu vous permet de sélectionner la palette de couleurs à utiliser au niveau de l'application principale. Une palette de couleurs définit un ensemble global de couleurs d'interface pour les textes, les arrière-plans, les fenêtres, etc., utilisés dans vos formulaires.

> Cette option fonctionne uniquement sur macOS. Sous Windows, la palette "Light" est toujours utilisée.

Les palettes suivants sont disponibles :

- **Light**: the application will use the Default Light Theme
  ![](../assets/en/settings/light-appearance.png)
- **Dark**: the application will use the Default Dark Theme
  ![](../assets/en/settings/dark-appearance.png)
- **Inherited** (default): the application will inherit from the higher priority level (i.e., OS user preferences)

> Les thèmes par défaut peuvent être gérés par du CSS. For more information, please refer to the [Media Queries](../FormEditor/createStylesheet.md#media-queries) section.

La palette d'application principale sera appliquée aux formulaires par défaut. Toutefois, elle peut être remplacée :

- by the [SET APPLICATION COLOR SCHEME](https://doc.4d.com/4dv19R/help/command/en/page1762.html) command at the working session level;
- using by the [Color Scheme](../FormEditor/propertiesForm.html#color-scheme) form property at each form level (highest priority level). **Note:** When printed, forms always use the "Light" scheme.

## Raccourcis

La zone Raccourcis clavier permet d'afficher et de modifier les raccourcis clavier par défaut pour trois opérations de base du formulaire 4D dans vos applications desktop. Ces raccourcis clavier sont identiques pour les deux plateformes. Les icônes des touches indiquent les touches correspondant à Windows et à macOS.

Les raccourcis clavier par défaut sont les suivants :

- Accept input form: **Enter**
- Cancel input form: **Esc**
- Add to subform: **Ctrl+Shift+/** (Windows) or **Command+Shift+/** (macOS)

To change the shortcut of an operation, click the corresponding **Edit** button. La boîte de dialogue suivante apparaît :

![](../assets/en/settings/shortcut.png)

To change the shortcut, type the new key combination on your keyboard and click **OK**. If you prefer not to have a shortcut for an operation, click **Clear**.
