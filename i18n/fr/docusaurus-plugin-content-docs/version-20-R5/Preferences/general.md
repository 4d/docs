---
id: general
title: Page Général
---

Cette page regroupe diverses options permettant de paramétrer le fonctionnement général de votre application 4D.

## Options

### Au démarrage

Cette option permet de configurer l’affichage proposé par défaut par 4D au démarrage, lorsque l’utilisateur lance uniquement l’application.

- **Do nothing**: Only the application window appears, empty.
- **Open Local Project dialog**: 4D displays a standard open document dialog box, allowing you to select a local project.
- **Open last used project**: 4D directly opens the last project used; no opening dialog box appears.
  > To force the display of the opening dialog box when this option is selected, hold down the **Alt** (Windows) or **Option** (macOS) key while launching the project.
- **Open Remote Project dialog**: 4D displays the standard 4D Server logon dialog, allowing you to select a project published on the network.
- **Open Welcome Wizard dialog** (factory setting): 4D displays the Welcome Wizard dialog box.

> **4D Server**: The 4D Server application ignores this option. In this environment, the **Do nothing** mode is always used.

### Création de formulaire automatique

> Cette option n'est utilisée que dans les bases de données binaires ; elle est ignorée dans l'architecture projets. Voir doc.4d.com.

### Fenêtre à onglets (macOS seulement)

Depuis macOS Sierra, les applications Mac bénéficient d'onglets automatiques facilitant l'organisation de l'écran lors de l'ouverture de fenêtres multiples : les fenêtres documents sont regroupées dans une seule fenêtre parente et sont accessibles via des onglets. Cette fonctionnalité est particulièrement utile avec les écrans de taille réduite ou lorsqu'un trackpad est utilisé.

Vous pouvez bénéficier de cette fonctionnalité dans les environnements de 4D suivants (versions 64 bits uniquement) :

- Code Editor windows
- Fenêtres de l'éditeur de formulaires

Toutes les fenêtres de ces éditeurs peuvent être ouvertes sous forme d'onglets :

![](../assets/en/Preferences/general2.png)

A set of commands in the **Window** menu allows managing the tabs:

![](../assets/en/Preferences/general3.png)

In the 4D's Preferences dialog box, the **Window tabbing** option allows you to control this feature:

![](../assets/en/Preferences/general4.png)

Trois options sont disponibles :

- **According to System Preferences** (default): 4D windows will behave like defined in the macOS System Preferences (In full screen, Always, or Manually).
- **Never**: Opening a new document in 4D form editor or Code Editor will always result in creating a new window (tabs are never created).
- **Always**: Opening a new document in 4D form editor or method editors will always result in creating a new tab.

### Apparence (macOS uniquement)

This menu lets you select the color scheme to use for the **4D development** environment. La palette spécifiée sera appliquée à tous les éditeurs et fenêtres du mode Développement.

> You can also set the color scheme to use in your **desktop applications** in the "Interface" page of the Settings dialog box.

Trois options sont disponibles :

- **According to System Color Scheme Preferences** (default): Use the color scheme defined in the macOS System Preferences.
- **Light**: Use the Light Theme
- **Dark**: Use the Dark Theme

> Cette préférence n'est prise en charge que sur macOS. Sous Windows, la palette "Light" est toujours utilisée.

### Quitter le mode Développement lors du passage en mode Application

If this option is checked, when the user switches to the Application environment using the **Test Application** menu command, all the windows of the Design environment are closed. Si cette option n’est pas cochée (valeur par défaut), les fenêtres du mode Développement restent affichées à l’arrière-plan du mode Application.

### Activer la création de bases de données en binaire

If you check this option, two items are added in the **File > New** menu and the **New** toolbar button:

- **Database...**
- **Base de données à partir d'une définition de structure...**

![](../assets/en/Preferences/general5.png)

These items allow you to create binary databases (see [Creating a new database](https://doc.4d.com/4Dv18R6/4D/18-R6/Creating-a-new-database.300-5217610.en.html) section). Ils ne sont plus proposés par défaut car 4D recommande, pour les nouveaux développements, l'utilisation d'une architecture de bases projets.

## Lors de la création d'un nouveau projet

### Utiliser le fichier d'historique

Lorsque cette option est cochée, un fichier d'historique est automatiquement démarré et utilisé dans chaque nouvelle base. For more information, please refer to [Log file (.journal)](Backup/log.md).

### Créer un paquet

Lorsque cette option est cochée, les bases de données 4D sont automatiquement créées dans un dossier suffixé .4dbase.

Grâce à ce principe, sous macOS les dossiers des bases apparaissent sous forme de paquets (packages) disposant de propriétés spécifiques. Sous Windows, ce fonctionnement n’a pas d’incidence particulière.

### Inclure les tokens dans les fichiers sources des projets

When this option is checked, saved [method source files](../Project/architecture.md#sources) in new 4D projects will contain **tokens** for classic language and database objects (constants, commands, tables and fields). Tokens are additional characters such as `:C10` or `:5` inserted in the source code files, that allow renaming tables and fields and identifying elements whatever the 4D version (see [Using tokens in formulas](https://doc.4d.com/4Dv19R3/4D/19-R3/Using-tokens-in-formulas.300-5583062.en.html)).

Si vous avez l'intention d'utiliser des VCS ou des éditeurs de code externes avec vos nouveaux projets, il est préférable de décocher cette option pour une meilleure lisibilité du code avec ces outils.

> Vous pouvez toujours obtenir le code avec les tokens en appelant la <a href="https://doc.4d.com/4dv19R/help/command/en/page1190.html"><code>METHOD GET CODE</code></a> avec 1 dans le paramètre <em x-id="3">option</em>.

> You can always get the code with tokens by calling [`METHOD GET CODE`](https://doc.4d.com/4dv19R/help/command/en/page1190.html) with 1 in the _option_ parameter.

#### Exclusion des tokens dans les projets existants

You can configure your existing projects to save code **without tokens** by inserting the following key in the [`<applicationName>.4DProject`](../Project/architecture.md#applicationname4dproject-file) file using a text editor:

```
"tokenizedText" : false
```

> Ce paramètre n'est pris en compte que lors de l'enregistrement des méthodes. Les méthodes existantes dans vos projets ne sont pas modifiées, sauf si vous les enregistrez à nouveau.

### Create `.gitignore` file

Si vous avez besoin ou souhaitez que git ignore certains fichiers dans vos nouveaux projets.

You can set this preference by checking the **Create .gitignore file**  option.

When a project is created in 4D and that box is checked, 4D creates a `.gitignore` file at the same level as the `Project` folder (see [Architecture of a Project](Project/architecture.md#gitignore-file-optional)).

You can define the default contents of the `.gitignore` file by clicking the pencil icon. Cela ouvrira le fichier de configuration .gitignore dans votre éditeur de texte. The contents of this file will be used to generate the `.gitignore` files in your new projects.

The [official git documentation](https://git-scm.com/docs/gitignore) is a great resource to understand how `.gitignore` files work.

### Langue de comparaison de texte

Ce paramètre permet de définir la langue utilisée par défaut pour le traitement et la comparaison des chaînes de caractères dans les nouvelles bases. Le choix d’une langue de comparaison influe sur le tri et la recherche des textes ainsi que le passage en minuscules/majuscules mais n’a pas d’incidence sur la traduction des libellés ou sur les formats de dates, d’heure ou monétaires qui restent, eux, dans la langue du système. Par défaut (réglage d'usine), 4D utilise la langue courante de l'utilisateur définie dans le système.

Une base 4D peut donc fonctionner dans une langue différente de celle du système. A l’ouverture d’une base, le moteur de 4D détecte la langue utilisée par le fichier de données et la fournit au langage (interpréteur ou mode compilé). Les comparaisons de texte, qu’elles soient effectuées par le moteur de base de données ou par le langage, sont donc toujours effectuées dans la même langue.

Lors de la création d’un nouveau fichier de données, 4D utilise la langue définie dans ce menu. En cas d’ouverture d’un fichier de données qui n’est pas dans la même langue que la structure, la langue du fichier de données est utilisée et le code de langue est recopié dans la structure.

> You can modify this parameter for the open database using the Database Settings (see [Text comparison](../settings/database.md#text-comparison)).

## Emplacement de la documentation

Cette zone permet de configurer l'accès à la documentation HTML de 4D qui s'affiche dans votre navigateur courant :

- When you hit the **F1** key while the cursor is inserted in a 4D class function or command name in the Code Editor;
- When you double-click on a 4D command in the **Commands Page** of the Explorer.

### Langue de documentation

Langue de la documentation HTML à afficher. Vous pouvez sélectionner une documentation dans une langue différente de celle de l'application.

### Commencer par consulter le dossier local

> Cette option n'est prise en compte que pour l'accès à la documentation des commandes (à l'exclusion des fonctions de classe).

Définit l'emplacement des pages de documentation recherchées par 4D.

- Lorsque cette option est cochée (par défaut), 4D recherche d'abord la page dans le dossier local (voir ci-dessous). Si la page est trouvée à l'emplacement défini, elle est affichée dans le navigateur courant. Si la page est trouvée à l'emplacement défini, elle est affichée dans le navigateur courant. Ce principe permet par exemple de travailler en mode déconnecté, en accédant à une version locale de la documentation.
- If it is not found, 4D displays an error message in the browser. Si elle n'est pas trouvée, 4D affiche un message d'erreur dans le navigateur.

### Dossier local

> Cette option n'est prise en compte que pour l'accès à la documentation des commandes (à l'exclusion des fonctions de classe).

Indique l'emplacement de la version statique de la documentation HTML. Par défaut, cet emplacement correspond au sous-dossier \Help\Command\langue. Vous pouvez le visualiser en affichant le menu associé à la zone (clic sur la zone). Si le sous-dossier n'est pas présent, l'emplacement est affiché en rouge.

Vous pouvez modifier cet emplacement si vous le souhaitez, par exemple pour afficher la documentation dans une langue différente de celle de l'application. La documentation HTML statique peut être située sur un autre volume, un serveur web, etc. To designate a different location, click on the **[...]** button next to the entry area and choose a documentation root folder (folder corresponding to the language: `fr`, `en`, `es`, `de` or `ja`).
