---
id: general
title: Page Général
---

Cette page regroupe diverses options permettant de paramétrer le fonctionnement général de votre application 4D.

## Options

### Au démarrage

Cette option permet de configurer l’affichage proposé par défaut par 4D au démarrage, lorsque l’utilisateur lance uniquement l’application.

*   **Ne rien faire** : seule la fenêtre de l’application apparaît, vide.
*   **Dialogue d’ouverture de base de données locale** : 4D affiche une boîte de dialogue standard d’ouverture de documents, permettant de désigner un projet local.
*   **Ouvrir le dernier projet utilisé** : 4D ouvre directement le dernier projet utilisé, aucune boîte de dialogue d’ouverture n’apparaît. >Pour forcer l’affichage de la boîte de dialogue d’ouverture lorsque cette option est sélectionnée, maintenez enfoncée la touche **Alt** (Windows) ou **Option** (macOS) pendant le lancement du projet.
*   **Dialogue d’ouverture du projet distant** : 4D affiche la boîte de dialogue standard de connexion avec 4D Server, permettant de désigner une base de données publiée sur le réseau.
*   **Dialogue Assistant de bienvenue** (réglage d'usine) : 4D affiche la boîte de dialogue de l'Assistant de bienvenue.
> **4D Server** : L'application 4D Server ne tient pas compte de cette option. Dans cet environnement, le mode **Ne rien faire** est toujours utilisé.

### Création de formulaire automatique

> Cette option n'est utilisée que dans les bases de données binaires ; elle est ignorée dans l'architecture projets. Voir doc.4d.com.

### Window tabbing (macOS only)

Depuis macOS Sierra, les applications Mac bénéficient d'onglets automatiques facilitant l'organisation de l'écran lors de l'ouverture de fenêtres multiples : les fenêtres documents sont regroupées dans une seule fenêtre parente et sont accessibles via des onglets. Cette fonctionnalité est particulièrement utile avec les écrans de taille réduite ou lorsqu'un trackpad est utilisé.

Vous pouvez bénéficier de cette fonctionnalité dans les environnements de 4D suivants (versions 64 bits uniquement) :

*   Fenêtres de l'éditeur de méthodes
*   Fenêtres de l'éditeur de formulaires

Toutes les fenêtres de ces éditeurs peuvent être ouvertes sous forme d'onglets :

![](assets/en/Preferences/general2.png)

Un ensemble de commandes du menu **Fenêtre** permet de gérer les onglets :

![](assets/en/Preferences/general3.png)

Dans la boîte de dialogue des Préférences de 4D, l'option **Fenêtre à onglets** vous permet de contrôler ce fonctionnement :

![](assets/en/Preferences/general4.png)

Trois options sont disponibles :

*   **Selon les préférences système** (défaut) : les fenêtres de 4D se comporteront comme elles ont été définies dans les Préférences Système de macOS (En plein écran uniquement, Toujours ou Manuellement).
*   **Jamais** : L'ouverture d'un nouveau document dans l'éditeur de formulaires ou l'éditeur de méthodes de 4D provoquera toujours la création d'une nouvelle fenêtre (les onglets ne sont jamais créés).
*   **Toujours** : L'ouverture d'un nouveau document dans l'éditeur de formulaires ou l'éditeur de méthodes de 4D provoquera l'ajout d'un onglet.

### Apparence (macOS uniquement)

Ce menu vous permet de sélectionner la palette de couleurs à utiliser pour l'environnement de **développement 4D**. Le schéma spécifié sera appliqué à tous les éditeurs et fenêtres du mode Développement.

> You can also set the color scheme to use in your **desktop applications** in the "Interface" page of the Settings dialog box.

Trois options sont disponibles :

*   **According to System Color Scheme Preferences** (default): Use the color scheme defined in the macOS System Preferences.
*   **Light**: Use the Light Theme
*   **Dark**: Use the Dark Theme

> This preference is only supported on macOS. On Windows, the "Light" scheme is always used.


### Exit Design when going to Application Environment

If this option is checked, when the user switches to the Application environment using the **Test Application** menu command, all the windows of the Design environment are closed. If this option is not checked (factory setting), the windows of the Design environment remain visible in the background of the Application environment.


### Enable binary database creation

If you check this option, two items are added in the **File > New** menu and the **New** toolbar button:

*   **Database...**
*   **Database from Structure Definition...**

![](assets/en/Preferences/general5.png)

These items allow you to create binary databases (see [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html) section). They are no longer proposed by default because 4D recommends using project-based architecture for new developments.

## Lors de la création d'un nouveau projet

### Use Log File

When this option is checked, a log file is automatically started and used when a new database is created. For more information, please refer to [Log file (.journal)](Backup/log.md).

### Create package

When this option is checked, 4D databases are automatically created in a folder suffixed .4dbase.

Thanks to this principle, under macOS the database folders appear as packages having specific properties. Under Windows, this has no particular impact.

### Créer le fichier `.gitignore`

You might need or want git to ignore some files in your new projects.

You can set this preference by checking the **Create .gitignore file**  option.

![](assets/en/Preferences/gitignore.png)

When a project is created in 4D and that box is checked, 4D creates a `.gitignore` file at the same level as the `Project` folder (see [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

You can define the default contents of the `.gitignore` file by clicking the pencil icon. This will open the .gitignore configuration file in your text editor. The contents of this file will be used to generate the `.gitignore` files in your new projects.

The [official git documentation](https://git-scm.com/docs/gitignore) is a great resource to understand how `.gitignore` files work.

### Language of text comparison

This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.

A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).

## Emplacement de la documentation

Cette zone permet de configurer l'accès à la documentation HTML de 4D qui s'affiche dans votre navigateur courant :

*   When you hit the **F1** key while the cursor is inserted in a 4D class function or command name in the Method editor;
*   When you double-click on a 4D command in the **Commands Page** of the Explorer.


### Documentation language

Language of the HTML documentation to display. You can select a documentation in a different language from the application language.

### Commencer par consulter le dossier local

> This option is only taken into account for command documentation access (excluding class functions).

Sets where 4D will look for documentation pages.

*   When checked (default), 4D first looks for the page in the local folder (see below). If it is found, 4D displays the page in the current browser. If not, 4D automatically looks for it in the on-line documentation Web site. This makes it possible to access the documentation even when you are offline.
*   If it is not found, 4D displays an error message in the browser. When not checked, 4D looks for the desired page directly in the on-line documentation Web site and displays it in the current browser.

### Local folder

> This option is only taken into account for command documentation access (excluding class functions).

Indicates the location of the static HTML documentation. By default, this is the \Help\Command\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red.

You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. Pour désigner un autre emplacement, cliquez sur le bouton **[...]** à côté de la zone de saisie et choisissez un dossier racine de documentation (dossier correspondant à la langue : `fr`, `en`, `es`, `de` ou `ja`). 
