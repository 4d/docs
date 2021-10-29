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

#### Window tabbing (macOS only)

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

### Language of text comparison

This parameter configures the default language used for character string processing and comparison in new databases. The language choice has a direct influence on the sorting and searching of text, as well as the character case, but it has no effect on the translation of texts or on the date, time or currency formats, which remain in the system language. By default (factory setting), 4D uses the current user language set in the system.

A 4D database can thus operate in a language different from that of the system. When a database is opened, the 4D engine detects the language used by the data file and provides it to the language (interpreter or compiled mode). Text comparisons, regardless of whether they are carried out by the database engine or the language, are done in the same language.

When creating a new data file, 4D uses the language previously set in this menu. When opening a data file that is not in the same language as the structure, the data file language is used and the language code is copied into the structure.
> You can modify this parameter for the open database using the Database Settings (see [Text comparison](https://doc.4d.com/4Dv18R6/4D/18-R6/DatabaseData-storage-page.300-5217842.en.html#460252)).


## Emplacement de la documentation

Cette zone permet de configurer l'accès à la documentation HTML de 4D qui s'affiche dans le navigateur courant :

*   Lorsque l'utilisateur double-clique sur une commande dans la **page des commandes** de l'Explorateur ;
*   Lorsque l'utilisateur clique sur un nom de commande dans l'éditeur de méthodes et appuie sur la touche **F1**.

Vous pouvez choisir d'accéder directement au site de documentation en ligne de 4D ou d'accéder à une version statique stockée localement.

### Local folder

Indicates the location of the static HTML documentation. By default, this is the \Help\Command\language subfolder. You can view the location by clicking on the menu associated with the area. If this subfolder is not present, the location is shown in red.

You can modify this location as desired, for example if you want to display the documentation in a language different from that of the application. The static HTML documentation can be located on another volume, on a web server, etc. Pour désigner un autre emplacement, cliquez sur le bouton [...] à côté de la zone de saisie et choisissez un dossier racine de documentation (dossier correspondant à la langue : fr, en, es, de ou ja).


### Site Web

Accès URL à la documentation en ligne de la version sur 4D Doc Center. 4D crée des appels vers les pages de la documentation en fonction de cette URL. Vous pouvez le modifier, par exemple si vous souhaitez afficher la documentation dans une langue différente de la langue de l'application. Le bouton de test à droite de la zone lance le navigateur par défaut pour accéder à l'URL spécifiée.

### Commencer par consulter le dossier local

Cette option (cochée par défaut) définit là où 4D recherchera la page de documentation qui a été appelée via l'Explorateur ou la touche F1.

*   Lorsqu'elle est cochée, 4D recherche d'abord la page dans le dossier local. If it is found, 4D displays the page in the current browser. If not, 4D will automatically look for it in the on-line documentation of the Web site. This makes it possible to access the documentation even when you are offline.
*   Lorsqu'elle n'est pas cochée, 4D recherche la page souhaitée directement dans la documentation en ligne du site Web et l'affiche dans le navigateur en cours. When not checked, 4D looks for the desired page directly in the on-line documentation Web site and displays it in the current browser.

