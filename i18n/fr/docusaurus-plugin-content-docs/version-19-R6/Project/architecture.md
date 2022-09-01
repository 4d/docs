---
id: architecture
title: Architecture of a project
---

Un projet 4D est constitué de plusieurs fichiers et dossiers, stockés dans un seul dossier parent de l'application (dossier package).

- MonProjet
  - `Composants`
  - `Données`
    - `Fichiers d'historique`
    - `Settings`
  - `Documentation`
  - `Plugins`
  - `Project`
    - `DerivedData`
    - `Sources`
    - `Trash`
  - `Ressources`
  - `Settings`
  - `userPreferences.jSmith`
  - `WebFolder`

> Si votre projet a été converti depuis une base binaire, des dossiers supplémentaires peuvent être présents. Voir "Conversion de bases en projets" sur [doc.4d.com](https://doc.4d.com).

## Dossier Project

La hiérarchie du dossier Project se présente généralement comme suit :

- fichier `<applicationName>.4DProject`
- `Sources`
  - `Classes`
  - `DatabaseMethods`
  - `Methods`
  - `Formulaires`
  - `TableForms`
  - `Triggers`
- `DerivedData`
- `Trash` (le cas échéant)

### fichier `<applicationName>.4DProject`

Le fichier de développement de projet, utilisé pour désigner et lancer le projet. Ce fichier peut être ouvert par :

- 4D
- 4D Server (read-only, see [Opening a remote project](Desktop/clientServer.md#opening-a-remote-project))

> Dans les projets 4D, le développement est réalisé avec 4D et le développement multi-utilisateurs est géré par des outils de contrôle de version. 4D Server peut ouvrir des fichiers .4DProject à des fins de test.

Ce fichier texte peut également contenir des clés de configuration, notamment "[`tokenizedText" : false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Contenu                 | Description                                                                                                                                                                                                                        | Le format |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| catalog.4DCatalog       | Définit des tables et des champs                                                                                                                                                                                                   | XML       |
| folders.json            | Définitions des dossiers de l'Explorateur                                                                                                                                                                                          | JSON      |
| menus.json              | Définit les menus                                                                                                                                                                                                                  | JSON      |
| settings.4DSettings     | Propriétés de la base *Structure*. Elles ne sont pas prises en compte si les *[paramètres utilisateur](#settings-folder-1)* ou les *[paramètres utilisateur des données](#settings-folder)* sont définis.<p>**Warning**: In compiled applications, structure settings are stored in the .4dz file (read-only). For deployment needs, it is necessary to use *user settings* or *user settings for data* to define custom settings.</p> | XML       |
| tips.json               | Définit les messages d'aide                                                                                                                                                                                                        | JSON      |
| lists.json              | Listes définies                                                                                                                                                                                                                    | JSON      |
| filters.json            | Filtres définis                                                                                                                                                                                                                    | JSON      |
| styleSheets.css         | Feuilles de style CSS                                                                                                                                                                                                              | CSS       |
| styleSheets_mac.css     | Feuilles de style css sur Mac (à partir d'une base binaire convertie)                                                                                                                                                              | CSS       |
| styleSheets_windows.css | Feuilles de style css sur Windows (à partir d'une base binaire convertie)                                                                                                                                                          | CSS       |

#### `DatabaseMethods`

| Contenu                  | Description                                                        | Le format |
| ------------------------ | ------------------------------------------------------------------ | --------- |
| *databaseMethodName*.4dm | Méthodes base définies dans le projet. Un fichier par méthode base | text      |

#### `Methods`

| Contenu          | Description                                                     | Le format |
| ---------------- | --------------------------------------------------------------- | --------- |
| *methodName*.4dm | Méthodes projet définies dans le projet. Un fichier par méthode | text      |

#### `Classes`

| Contenu         | Description                                                                                                                                                   | Le format |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| *className*.4dm | Méthode de définition de classe utilisateur, permettant d'instancier des objets spécifiques. Un fichier par classe, le nom du fichier est le nom de la classe | text      |

#### `Formulaires`

| Contenu                                   | Description                                  | Le format |
| ----------------------------------------- | -------------------------------------------- | --------- |
| *formName*/form.4DForm                    | Description du formulaire projet             | json      |
| *formName*/method.4dm                     | Méthode formulaire projet                    | text      |
| *formName*/Images/*pictureName*           | Image statique du formulaire projet          | picture   |
| *formName*/ObjectMethods/*objectName*.4dm | Méthodes objet. Un fichier par méthode objet | text      |

#### `TableForms`

| Contenu                                              | Description                                                                  | Le format |
| ---------------------------------------------------- | ---------------------------------------------------------------------------- | --------- |
| *n*/Input/*formName*/form.4DForm                     | Description du formulaire d'entrée de la table (n étant le numéro de table)  | json      |
| *n*/Input/*formName*/Images/*pictureName*            | Images statiques du formulaire d'entrée de la table                          | picture   |
| *n*/Input/*formName*/method.4dm                      | Méthode du formulaire d'entrée de la table                                   | text      |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Méthodes objet du formulaire d'entrée. Un fichier par méthode objet          | text      |
| *n*/Output/*formName*/form.4DForm                    | Description du formulaire de sortie de la table (n étant le numéro de table) | json      |
| *n*/Output/*formName*/Images/*pictureName*           | Images statiques du formulaire de sortie de la table                         | picture   |
| *n*/Output/*formName*/method.4dm                     | Méthode du formulaire de sortie de la table                                  | text      |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Méthodes objet du formulaire de sortie. Un fichier par méthode objet         | text      |

#### `Triggers`

| Contenu       | Description                                                                                            | Le format |
| ------------- | ------------------------------------------------------------------------------------------------------ | --------- |
| table_*n*.4dm | Méthodes trigger définies dans le projet. Un fichier de trigger par table (n étant le numéro de table) | text      |

**Note:** The .4dm file extension is a text-based file format, containing the code of a 4D method. Il est compatible avec les outils de contrôle de version.

### `Trash`

Le dossier Trash contient des méthodes et des formulaires qui ont été supprimés du projet (le cas échéant). Il peut contenir les dossiers suivants :

- `Methods`
- `Formulaires`
- `TableForms`

Dans ces dossiers, les noms des éléments supprimés sont entre parenthèses, par exemple. "(myMethod).4dm". L'organisation des dossiers est identique à celle du dossier [Sources](#sources).

### `DerivedData`

Le dossier DerivedData contient des données en cache utilisées en interne par 4D pour optimiser le traitement. Il est automatiquement créé ou recréé si nécessaire. Vous pouvez ignorer ce dossier.

## `Libraries`

> Ce dossier n'est utilisé que sur macOS.

Le dossier Librairies contient le fichier résultant d'une compilation avec le [compilateur Silicon](compiler.md#silicon-compiler) sur macOS.

## `Ressources`

Le dossier Resources contient tous les fichiers et dossiers de ressources personnalisés du projet. Dans ce dossier, vous pouvez placer tous les fichiers nécessaires à la traduction ou à la personnalisation de l'interface de l'application (fichiers image, fichiers texte, fichiers XLIFF, etc.). 4D utilise des mécanismes automatiques pour manipuler le contenu de ce dossier, notamment pour le traitement des fichiers XLIFF et des images statiques. Pour l'utilisation en mode distant, le dossier Resources vous permet de partager des fichiers entre le serveur et tous les ordinateurs clients. Voir le *Manuel 4D Server - Référence*.

| Contenu               | Description                                                                                                                                                                                 | Le format |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| *item*                | Fichiers et dossiers de ressources de la base                                                                                                                                               | variés    |
| Images/Library/*item* | Images de la bibliothèque d'images sous forme de fichiers séparés(*). Les noms de ces éléments deviennent des noms de fichiers. Si un élément dupliqué existe, un numéro est ajouté au nom. | picture   |

(*) uniquement si le projet a été exporté depuis une base binaire .4db.

## `Données`

Le dossier Data contient le fichier de données ainsi que tous les fichiers et dossiers relatifs aux données.

| Contenu      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Le format |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| data.4dd(*)  | Fichier de données contenant les données saisies dans les enregistrements et toutes les données appartenant aux enregistrements. Lorsque vous ouvrez un projet 4D, l'application ouvre par défaut le fichier de données courant. Si vous modifiez le nom ou l'emplacement de ce fichier, la boîte de dialogue *Ouvrir un fichier de données* apparaît alors pour vous permettre de sélectionner le fichier de données à utiliser ou d'en créer un nouveau                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | binary    |
| data.journal | Créé uniquement lorsque la base de données utilise un fichier journal. Le fichier journal est utilisé pour assurer la sécurité des données entre les sauvegardes. Toutes les opérations effectuées sur les données sont enregistrées séquentiellement dans ce fichier. Par conséquent, chaque opération sur les données entraîne deux actions simultanées : la première sur les données (l'instruction est exécutée normalement) et la seconde dans le fichier journal (une description de l'opération est enregistrée). Le fichier journal est construit indépendamment, sans perturber ni ralentir le travail de l'utilisateur. Une base de données ne peut fonctionner qu'avec un seul fichier journal à la fois. Le fichier journal enregistre des opérations telles que des ajouts, des modifications ou des suppressions d'enregistrements, des transactions, etc. Il est généré par défaut lors de la création d'une base de données. | binary    |
| data.match   | (interne) UUID correspondant au numéro de la table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | XML       |

(*) Lorsque le projet est créé depuis une base binaire .4b, le fichier de données demeure inchangé. Ainsi, il peut être nommé différemment et placé dans un autre emplacement.

### `Settings`

Ce dossier contient des **fichiers de propriétés utilisateur des données** utilisés pour l'administration de l'application.

> Ces paramètres ont la priorité sur les **[fichiers de propriétés utilisateur](#settings-1)** et les fichiers de **[propriétés structure](#sources)**.

| Contenu             | Description                                                                                                                                                                                                                                                                                    | Le format |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| directory.json      | Description des groupes et utilisateurs 4D et de leurs droits d'accès lorsque l'application est lancée avec ce fichier de données.                                                                                                                                                             | JSON      |
| Backup.4DSettings   | Paramètres de sauvegarde de la base de données, utilisés pour définir les [options de sauvegarde](Backup/settings.md)) lorsque la base est lancée avec ce fichier de données. Les clés concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*. | XML       |
| settings.4DSettings | Propriétés de la base personnalisées pour ce fichier de données.                                                                                                                                                                                                                               | XML       |

### `Fichiers d'historique`

Le dossier Logs contient tous les fichiers journaux utilisés par le projet. Les fichiers journaux comprennent notamment :

- conversion de base de données,
- requêtes de serveur Web,
- journal des activités de sauvegarde/restitution (*Journal de sauvegarde\[xxx].txt*, voir [Journal de sauvegarde](Backup/backup.md#backup-journal))
- débogage de commandes,
- Requêtes 4D Server (générées sur les postes clients et sur le serveur).

> Un dossier Logs supplémentaire est disponible dans le dossier des préférences utilisateur du système (dossier 4D actif, voir la commande [Get 4D folder](https://doc.4d.com/4Dv18R4/4D/18-R4/Get-4D-folder.301-4982857.en.html)) pour les fichiers journaux de maintenance et dans les cas où le dossier de données est en lecture seule.

## `Settings`

Ce dossier contient des **fichiers de propriétés utilisateur** utilisés pour l'administration de l'application.

> Ces paramètres ont la priorité sur les fichiers de **[propriétés structure](#sources)**. Toutefois, si un **[fichier de paramètres utilisateur](#settings)** existe, il est prioritaire par rapport au fichier des propriétés utilisateur.

| Contenu             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Le format |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| directory.json      | Description des groupes et utilisateurs 4D pour l'application, ainsi que leurs droits d'accès                                                                                                                                                                                                                                                                                                                                                      | JSON      |
| Backup.4DSettings   | Paramètres de sauvegarde de la base de données, utilisés pour définir les [options de sauvegarde](Backup/settings.md)) à chaque lancement de sauvegarde. Ce fichier peut également être utilisé pour lire ou définir des options supplémentaires, telles que la quantité d'informations stockées dans le *journal de sauvegarde*. Les clés concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*. | XML       |
| BuildApp.4DSettings | Fichier de paramètres de génération, créé automatiquement lors de l'utilisation de la boîte de dialogue du générateur d'applications ou de la commande `BUILD APPLICATION`                                                                                                                                                                                                                                                                         | XML       |
| settings.4DSettings | Paramètres personnalisés pour ce projet (tous les fichiers de données)                                                                                                                                                                                                                                                                                                                                                                             | XML       |

## `userPreferences.<userName>`

Ce dossier contient des fichiers qui mémorisent les configurations utilisateur, par exemple la position des points de rupture ou de la fenêtre. Vous pouvez simplement ignorer ce dossier. Il contient par exemple :

| Contenu                    | Description                                                           | Le format |
| -------------------------- | --------------------------------------------------------------------- | --------- |
| methodPreferences.json     | Current user Code Editor preferences                                  | JSON      |
| methodWindowPositions.json | Position de la fenêtre de l'utilisateur courant pour les méthodes     | JSON      |
| formWindowPositions.json   | Position de la fenêtre de l'utilisateur courant pour les formulaires  | JSON      |
| workspace.json             | Liste de fenêtres ouvertes : sous macOS, ordre des fenêtres à onglets | JSON      |
| debuggerCatches.json       | Appels vers commandes                                                 | JSON      |
| recentTables.json          | Liste ordonée de tables                                               | JSON      |
| preferences.4DPreferences  | Current data path and main window positions                           | XML       |
| CompilerIntermediateFiles  | Fichiers intermédiaires résultant de la compilation Apple Silicon     | Folder    |

## `Composants`

This folder contains the components to be available in the application project. Il doit être stocké au même niveau que le dossier Project.

> An application project can be used itself as a component:
> 
> - for development: put an alias of the .4dproject file in the Components folder of the host project.
> - à des fins de déploiement : [créer le composant](Desktop/building.md#build-component) et insérer le fichier .4dz résultant dans un dossier .4dbase dans le dossier Components de l'application hôte.

## `Plugins`

This folder contains the plug-ins to be available in the application project. Il doit être stocké au même niveau que le dossier Project.

## `Documentation`

Ce dossier contient tous les fichiers de documentation (.md) créés pour les éléments du projet, tels que les classes, les méthodes ou les formulaires. Les fichiers de documentation sont gérés et affichés dans l'Explorateur 4D.

Pour plus d'informations, reportez-vous à [Documenter un projet](Project/documentation.md).

## `WebFolder`

Il s'agit du dossier racine par défaut du serveur Web 4D pour les pages, les images, etc. Il est automatiquement créé lors du premier lancement du serveur Web.

## Fichier `.gitignore` (optionnel)

Fichier qui spécifie les fichiers qui seront ignorés par git. Vous pouvez inclure un fichier gitignore dans vos projets en utilisant l'option **Créer un fichier .gitignore** sur la page **Général** des préférences. Pour configurer le contenu de ce fichier, voir [Créer un fichier `.gitignore`](Preferences/general.md#create-gitignore-file).
