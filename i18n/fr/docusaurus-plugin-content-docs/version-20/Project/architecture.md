---
id: architecture
title: Architecture d'un projet
---

Un projet 4D est composé de plusieurs dossiers et fichiers, stockés dans un dossier racine de projet (dossier package). Par exemple :

- MyPackage (*dossier racine du projet*)
    - `Composants`
    - `Data`
        - `Logs`
        - `Propriétés`
    - `Documentation`
    - `Plugins`
    - `Project`
        - `DerivedData`
        - `Sources`
        - `Trash`
    - `Resources`
    - `Propriétés`
    - `userPreferences.jSmith`
    - `WebFolder`

> Si votre projet a été converti depuis une base binaire, des dossiers supplémentaires peuvent être présents. Voir "Conversion de bases en projets" sur [doc.4d.com](https://doc.4d.com).


## `Project`

La hiérarchie du dossier Project se présente généralement comme suit :

- fichier `<applicationName>.4DProject`
- `Sources`
    + `Classes`
    + `DatabaseMethods`
    + `Methods`
    + `Formulaires`
    + `TableForms`
    + `Triggers`
- `DerivedData`
- `Trash` (le cas échéant)


### fichier `<applicationName>.4DProject`

Le fichier de développement de projet, utilisé pour désigner et lancer le projet. Ce fichier peut être ouvert par :

- 4D
- 4D Server (lecture seule, voir [Ouvrir un projet distant](Desktop/clientServer.md#opening-a-remote-project))

> Dans les projets 4D, le développement est réalisé avec 4D et le développement multi-utilisateurs est géré par des outils de contrôle de version. 4D Server peut ouvrir des fichiers .4DProject à des fins de test.

Ce fichier texte peut également contenir des clés de configuration, notamment "[`tokenizedText" : false`](../Preferences/general.md#excluding-tokens-in-existing-projects).

### `Sources`

| Contenu                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Format |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| catalog.4DCatalog       | Définit des tables et des champs                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | XML    |
| folders.json            | Définitions des dossiers de l'Explorateur                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | JSON   |
| menus.json              | Définit les menus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | JSON   |
| settings.4DSettings     | Propriétés de la base *Structure*. Elles ne sont pas prises en compte si les *[paramètres utilisateur](#settings-user)* ou les *[paramètres utilisateur pour les données](#settings-user-data)* sont définis (voir également [Priorité des paramètres](../Desktop/user-settings.md#priorite-des-parametres)). **Attention** : dans les applications compilées, les paramètres de structure sont stockés dans le fichier .4dz (lecture seule). Pour les besoins du déploiement, il est nécessaire d'[activer](../Desktop/user-settings.md#enabling-user-settings) et d'utiliser les *paramètres utilisateurs* ou les *paramètres utilisateurs pour les données* pour définir des paramètres personnalisés. | XML    |
| tips.json               | Définit les messages d'aide                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | JSON   |
| lists.json              | Listes définies                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | JSON   |
| filters.json            | Filtres définis                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | JSON   |
| styleSheets.css         | Feuilles de style CSS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | CSS    |
| styleSheets_mac.css     | Feuilles de style css sur Windows (à partir d'une base binaire convertie)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | CSS    |
| styleSheets_windows.css | Feuilles de style css sur Mac (à partir d'une base binaire convertie)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | CSS    |


#### `DatabaseMethods`

| Contenu                  | Description                                                        | Format |
| ------------------------ | ------------------------------------------------------------------ | ------ |
| *databaseMethodName*.4dm | Méthodes base définies dans le projet. Un fichier par méthode base | text   |

#### `Methods`

| Contenu          | Description                                                     | Format |
| ---------------- | --------------------------------------------------------------- | ------ |
| *methodName*.4dm | Méthodes projet définies dans le projet. Un fichier par méthode | text   |

#### `Classes`

| Contenu         | Description                                                                                                                                                   | Format |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| *className*.4dm | Méthode de définition de classe utilisateur, permettant d'instancier des objets spécifiques. Un fichier par classe, le nom du fichier est le nom de la classe | text   |


#### `Formulaires`

| Contenu                                   | Description                                  | Format  |
| ----------------------------------------- | -------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Description du formulaire projet             | json    |
| *formName*/method.4dm                     | Méthode formulaire projet                    | text    |
| *formName*/Images/*pictureName*           | Image statique du formulaire projet          | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Méthodes objet. Un fichier par méthode objet | text    |

#### `TableForms`

| Contenu                                              | Description                                                                  | Format  |
| ---------------------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Description du formulaire d'entrée de la table (n étant le numéro de table)  | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Images statiques du formulaire d'entrée de la table                          | picture |
| *n*/Input/*formName*/method.4dm                      | Méthode du formulaire d'entrée de la table                                   | text    |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Méthodes objet du formulaire d'entrée. Un fichier par méthode objet          | text    |
| *n*/Output/*formName*/form.4DForm                    | Description du formulaire de sortie de la table (n étant le numéro de table) | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Images statiques du formulaire de sortie de la table                         | picture |
| *n*/Output/*formName*/method.4dm                     | Méthode du formulaire de sortie de la table                                  | text    |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Méthodes objet du formulaire de sortie. Un fichier par méthode objet         | text    |

#### `Triggers`

| Contenu       | Description                                                                                            | Format |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------ |
| table_*n*.4dm | Méthodes trigger définies dans le projet. Un fichier de trigger par table (n étant le numéro de table) | text   |

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

## `Resources`

Le dossier Resources contient tous les fichiers et dossiers de ressources personnalisés du projet. Dans ce dossier, vous pouvez placer tous les fichiers nécessaires à la traduction ou à la personnalisation de l'interface de l'application (fichiers image, fichiers texte, fichiers XLIFF, etc.). 4D utilise des mécanismes automatiques pour manipuler le contenu de ce dossier, notamment pour le traitement des fichiers XLIFF et des images statiques. Pour l'utilisation en mode distant, le dossier Resources vous permet de partager des fichiers entre le serveur et tous les ordinateurs clients. Voir le *Manuel 4D Server - Référence*.

| Contenu               | Description                                                                                                                                                                                 | Format  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Fichiers et dossiers de ressources de la base                                                                                                                                               | variés  |
| Images/Library/*item* | Images de la bibliothèque d'images sous forme de fichiers séparés(*). Les noms de ces éléments deviennent des noms de fichiers. Si un élément dupliqué existe, un numéro est ajouté au nom. | picture |

(*) uniquement si le projet a été exporté depuis une base binaire .4db.


## `Data`

Le dossier Data contient le fichier de données ainsi que tous les fichiers et dossiers relatifs aux données.

| Contenu      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Format |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| data.4dd(*)  | Fichier de données contenant les données saisies dans les enregistrements et toutes les données appartenant aux enregistrements. Lorsque vous ouvrez un projet 4D, l'application ouvre par défaut le fichier de données courant. Si vous modifiez le nom ou l'emplacement de ce fichier, la boîte de dialogue *Ouvrir un fichier de données* apparaît alors pour vous permettre de sélectionner le fichier de données à utiliser ou d'en créer un nouveau                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | binary |
| data.journal | Créé uniquement lorsque la base de données utilise un fichier journal. Le fichier journal est utilisé pour assurer la sécurité des données entre les sauvegardes. Toutes les opérations effectuées sur les données sont enregistrées séquentiellement dans ce fichier. Par conséquent, chaque opération sur les données entraîne deux actions simultanées : la première sur les données (l'instruction est exécutée normalement) et la seconde dans le fichier journal (une description de l'opération est enregistrée). Le fichier journal est construit indépendamment, sans perturber ni ralentir le travail de l'utilisateur. Une base de données ne peut fonctionner qu'avec un seul fichier journal à la fois. Le fichier journal enregistre des opérations telles que des ajouts, des modifications ou des suppressions d'enregistrements, des transactions, etc. Il est généré par défaut lors de la création d'une base de données. | binary |
| data.match   | (interne) UUID correspondant au numéro de la table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | XML    |

(*) Lorsque le projet est créé depuis une base binaire .4b, le fichier de données demeure inchangé. Ainsi, il peut être nommé différemment et placé dans un autre emplacement.

### `Settings` (user data)

Ce dossier contient les [**paramètres utilisateur pour les données**](../Desktop/user-settings.md#user-settings-for-data-file) utilisées pour l'administration de l'application.

> Ces paramètres ont la priorité sur les [paramètres utilisateur ](#settings-user) et sur les [paramètres de structure](#sources). Voir aussi [Priorité des paramètres](../Desktop/user-settings.md#priorite-des-parametres).

| Contenu             | Description                                                                                                                                                                                                                                                                                    | Format |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| directory.json      | Description des groupes et utilisateurs 4D et de leurs droits d'accès lorsque l'application est lancée avec ce fichier de données.                                                                                                                                                             | JSON   |
| Backup.4DSettings   | Paramètres de sauvegarde de la base de données, utilisés pour définir les [options de sauvegarde](Backup/settings.md)) lorsque la base est lancée avec ce fichier de données. Les clés concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*. | XML    |
| settings.4DSettings | Propriétés de la base personnalisées pour ce fichier de données.                                                                                                                                                                                                                               | XML    |


### `Logs`

Le dossier Logs contient tous les fichiers journaux utilisés par le projet. Les fichiers journaux comprennent notamment :

- conversion de base de données,
- requêtes de serveur Web,
- journal des activités de sauvegarde/restitution (*Journal de sauvegarde\[xxx].txt*, voir [Journal de sauvegarde](Backup/backup.md#backup-journal))
- débogage de commandes,
- Requêtes 4D Server (générées sur les postes clients et sur le serveur).

> Un dossier Logs supplémentaire est disponible dans le dossier des préférences système de l'utilisateur (dossier 4D actif, voir commande [Get 4D folder](https://doc.4d.com/4dv19R/help/command/en/page485.html)) pour les fichiers journaux de maintenance et dans les cas où le dossier de données est en lecture seule.

## `Settings` (user)

Ce dossier contient les [paramètres utilisateur****](../Desktop/user-settings.md#user-settings) utilisés pour l'administration de l'application.

> Ces paramètres ont la priorité sur les [paramètres de structure](#sources). Toutefois, s'il existe des [paramètres utilisateur pour les données](#settings-user-data), ils ont la priorité sur ces paramètres utilisateur. Voir aussi [Priorité des paramètres](../Desktop/user-settings.md#priorite-des-parametres).

| Contenu             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Format |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| directory.json      | Description des groupes et utilisateurs 4D pour l'application, ainsi que leurs droits d'accès                                                                                                                                                                                                                                                                                                                                                      | JSON   |
| Backup.4DSettings   | Paramètres de sauvegarde de la base de données, utilisés pour définir les [options de sauvegarde](Backup/settings.md)) à chaque lancement de sauvegarde. Ce fichier peut également être utilisé pour lire ou définir des options supplémentaires, telles que la quantité d'informations stockées dans le *journal de sauvegarde*. Les clés concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*. | XML    |
| BuildApp.4DSettings | Fichier de paramètres de génération, créé automatiquement lors de l'utilisation de la boîte de dialogue du générateur d'applications ou de la commande `BUILD APPLICATION`                                                                                                                                                                                                                                                                         | XML    |
| settings.4DSettings | Paramètres personnalisés pour ce projet (tous les fichiers de données)                                                                                                                                                                                                                                                                                                                                                                             | XML    |
| logConfig.json      | [Fichier de configuration du journal](../Debugging/debugLogFiles.md#using-a-log-configuration-file) personnalisé                                                                                                                                                                                                                                                                                                                                   | json   |


## `userPreferences.<userName>`

Ce dossier contient des fichiers qui mémorisent les configurations utilisateur, par exemple la position des points de rupture ou de la fenêtre. Vous pouvez simplement ignorer ce dossier. Il contient par exemple :

| Contenu                    | Description                                                           | Format |
| -------------------------- | --------------------------------------------------------------------- | ------ |
| methodPreferences.json     | Préférences de l'éditeur de code de l'utilisateur courant             | JSON   |
| methodWindowPositions.json | Position de la fenêtre de l'utilisateur courant pour les méthodes     | JSON   |
| formWindowPositions.json   | Position de la fenêtre de l'utilisateur courant pour les formulaires  | JSON   |
| workspace.json             | Liste de fenêtres ouvertes : sous macOS, ordre des fenêtres à onglets | JSON   |
| debuggerCatches.json       | Appels vers commandes                                                 | JSON   |
| recentTables.json          | Liste ordonée de tables                                               | JSON   |
| preferences.4DPreferences  | Chemin de données courant et position de la fenêtre principale        | XML    |
| CompilerIntermediateFiles  | Fichiers intermédiaires résultant de la compilation Apple Silicon     | Folder |


## `Composants`

Ce dossier contient les composants qui seront disponibles dans le projet d'application. Il doit être stocké au même niveau que le dossier Project.

> An application project can be used itself as a component: - for development: put an alias of the .4dproject file in the Components folder of the host project. - à des fins de déploiement : [créer le composant](Desktop/building.md#build-component) et insérer le fichier .4dz résultant dans un dossier .4dbase dans le dossier Components de l'application hôte.


## `Plugins`

Ce dossier contient les plug-ins qui seront disponibles dans le projet d'application. Il doit être stocké au même niveau que le dossier Project.


## `Documentation`

Ce dossier contient tous les fichiers de documentation (.md) créés pour les éléments du projet, tels que les classes, les méthodes ou les formulaires. Les fichiers de documentation sont gérés et affichés dans l'Explorateur 4D.

Pour plus d'informations, reportez-vous à [Documenter un projet](Project/documentation.md).

## `WebFolder`

Il s'agit du dossier racine par défaut du serveur Web 4D pour les pages, les images, etc. Il est automatiquement créé lors du premier lancement du serveur Web.

## Fichier `.gitignore` (optionnel)

Fichier qui spécifie les fichiers qui seront ignorés par git. Vous pouvez inclure un fichier gitignore dans vos projets en utilisant l'option **Créer un fichier .gitignore** sur la page **Général** des préférences. Pour configurer le contenu de ce fichier, voir [Créer un fichier `.gitignore`](Preferences/general.md#create-gitignore-file).
