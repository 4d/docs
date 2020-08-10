---
id: architecture
title: Architecture of a project
---

A 4D project is made of several folders and files, stored within a single parent database folder (package folder). Par exemple:

- MyProject
    - Composants
    - Données
        - Logs
        - Settings
    - Documentation
    - Plugins
    - Project
        - DerivedData
        - Sources
        - Trash
    - Resources
    - Settings
    - userPreference.username
    - WebFolder

> Si votre projet a été converti depuis une base binaire, des dossiers supplémentaires peuvent être présents. Voir "Conversion de bases en projets" sur [doc.4d.com](https://doc.4d.com).


## Dossier Project

La hiérarchie du dossier Project se présente généralement comme suit :

- Fichier *nomBase*.4DProject
- Sources
    + Classes
    + DatabaseMethods
    + Méthodes
    + Formulaires
    + TableForms
    + Triggers
- DerivedData
- Trash (le cas échéant)


### Fichier *nomBase*.4DProject

Le fichier de développement de projet, utilisé pour désigner et lancer le projet. Ce fichier peut être ouvert par :

- 4D Developer
- 4D Server (lecture seule, voir [Développer un projet](developing.md))

**Note :** Dans les projets 4D, le développement est réalisé avec 4D Developer et le développement multi-utilisateurs est géré par des outils de contrôle de version. 4D Server peut ouvrir des fichiers .4DProject à des fins de test.


### Dossier Sources

| Contenu                 | Description                                                                                                                                                                                                                                    | Format |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| catalog.4DCatalog       | Définit des tables et des champs                                                                                                                                                                                                               | XML    |
| folders.json            | Explorer folder definitions                                                                                                                                                                                                                    | JSON   |
| menus.json              | Définit les menus                                                                                                                                                                                                                              | JSON   |
| settings.4DSettings     | Propriétés de la base *Structure*. Si les *propriétés utilisateur* sont définis, ils auront la priorité sur ces propriétés. Si les *propriétés utilisateur pour fichier de données* sont définies, elles auront la priorité sur ces propriétés | XML    |
| tips.json               | Définit les messages d'aide                                                                                                                                                                                                                    | JSON   |
| lists.json              | Listes définies                                                                                                                                                                                                                                | JSON   |
| filters.json            | Filtres définis                                                                                                                                                                                                                                | JSON   |
| styleSheets.css         | Feuilles de style CSS                                                                                                                                                                                                                          | CSS    |
| styleSheets_mac.css     | Feuilles de style css sur Mac (à partir d'une base binaire convertie)                                                                                                                                                                          | CSS    |
| styleSheets_windows.css | Feuilles de style css sur Windows (à partir d'une base binaire convertie)                                                                                                                                                                      | CSS    |


#### Dossier DatabaseMethods

| Contenu                  | Description                                                      | Format |
| ------------------------ | ---------------------------------------------------------------- | ------ |
| *databaseMethodName*.4dm | Méthodes base définies dans la base. Un fichier par méthode base | Texte  |

#### Dossier Methods

| Contenu          | Description                                                   | Format |
| ---------------- | ------------------------------------------------------------- | ------ |
| *methodName*.4dm | Méthodes projet définies dans la base. Un fichier par méthode | Texte  |

#### Dossier Classes

| Contenu         | Description                                                                                                                        | Format |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------ |
| *className*.4dm | User class definition method, allowing to instantiate specific objects. One file per class, the name of the file is the class name | Texte  |


#### Dossier Forms

| Contenu                                   | Description                                  | Format  |
| ----------------------------------------- | -------------------------------------------- | ------- |
| *formName*/form.4DForm                    | Description du formulaire projet             | json    |
| *formName*/method.4dm                     | Méthode formulaire projet                    | Texte   |
| *formName*/Images/*pictureName*           | Image statique du formulaire projet          | picture |
| *formName*/ObjectMethods/*objectName*.4dm | Méthodes objet. Un fichier par méthode objet | Texte   |

#### Dossier TableForms

| Contenu                                              | Description                                                                  | Format  |
| ---------------------------------------------------- | ---------------------------------------------------------------------------- | ------- |
| *n*/Input/*formName*/form.4DForm                     | Description du formulaire d'entrée de la table (n étant le numéro de table)  | json    |
| *n*/Input/*formName*/Images/*pictureName*            | Images statiques du formulaire d'entrée de la table                          | picture |
| *n*/Input/*formName*/method.4dm                      | Méthode du formulaire d'entrée de la table                                   | Texte   |
| *n*/Input/*formName*/ObjectMethods/*objectName*.4dm  | Méthodes objet du formulaire d'entrée. Un fichier par méthode objet          | Texte   |
| *n*/Output/*formName*/form.4DForm                    | Description du formulaire de sortie de la table (n étant le numéro de table) | json    |
| *n*/Output/*formName*/Images/*pictureName*           | Images statiques du formulaire de sortie de la table                         | picture |
| *n*/Output/*formName*/method.4dm                     | Méthode du formulaire de sortie de la table                                  | Texte   |
| *n*/Output/*formName*/ObjectMethods/*objectName*.4dm | Méthodes objet du formulaire de sortie. Un fichier par méthode objet         | Texte   |

#### Dossier Triggers

| Contenu       | Description                                                                                          | Format |
| ------------- | ---------------------------------------------------------------------------------------------------- | ------ |
| table_*n*.4dm | Méthodes trigger définies dans la base. Un fichier de trigger par table (n étant le numéro de table) | Texte  |

**Note :** L'extension de fichier .4dm est un format de fichier texte contenant le code d'une méthode 4D. Il est compatible avec les outils de contrôle de version.


### Dossier Trash

Le dossier Trash contient des méthodes et des formulaires qui ont été supprimés du projet (le cas échéant). Il peut contenir les dossiers suivants :

- Méthodes
- Formulaires
- TableForms

Dans ces dossiers, les noms des éléments supprimés sont entre parenthèses, par exemple. "(myMethod).4dm". L'organisation des dossiers est identique à celle du dossier [Sources](#sources).


### Dossier DerivedData

Le dossier DerivedData contient des données en cache utilisées en interne par 4D pour optimiser le traitement. Il est automatiquement créé ou recréé si nécessaire. Vous pouvez ignorer ce dossier.


## Dossier Resources

Le dossier Resources contient tous les fichiers et dossiers de ressources personnalisés de la base de données. Dans ce dossier, vous pouvez placer tous les fichiers nécessaires à la traduction ou à la personnalisation de l'interface de l'application (fichiers image, fichiers texte, fichiers XLIFF, etc.). 4D utilise des mécanismes automatiques pour manipuler le contenu de ce dossier, notamment pour le traitement des fichiers XLIFF et des images statiques. Pour l'utilisation en mode distant, le dossier Resources vous permet de partager des fichiers entre le serveur et tous les ordinateurs clients. Voir le *Manuel 4D Server - Référence*.

| Contenu               | Description                                                                                                                                                                                 | Format  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| *item*                | Fichiers et dossiers de ressources de la base                                                                                                                                               | variés  |
| Images/Library/*item* | Images de la bibliothèque d'images sous forme de fichiers séparés(*). Les noms de ces éléments deviennent des noms de fichiers. Si un élément dupliqué existe, un numéro est ajouté au nom. | picture |

(*) uniquement si le projet a été exporté depuis une base binaire .4db.


## Dossier Data

Le dossier Data contient le fichier de données ainsi que tous les fichiers et dossiers relatifs aux données.

| Contenu      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Format  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| data.4dd(*)  | Fichier de données contenant les données saisies dans les enregistrements et toutes les données appartenant aux enregistrements. Lorsque vous ouvrez un projet 4D, l'application ouvre par défaut le fichier de données courant. Si vous modifiez le nom ou l'emplacement de ce fichier, la boîte de dialogue *Ouvrir un fichier de données* apparaît alors pour vous permettre de sélectionner le fichier de données à utiliser ou d'en créer un nouveau                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | binaire |
| data.journal | Créé uniquement lorsque la base de données utilise un fichier journal. Le fichier journal est utilisé pour assurer la sécurité des données entre les sauvegardes. Toutes les opérations effectuées sur les données sont enregistrées séquentiellement dans ce fichier. Par conséquent, chaque opération sur les données entraîne deux actions simultanées : la première sur les données (l'instruction est exécutée normalement) et la seconde dans le fichier journal (une description de l'opération est enregistrée). Le fichier journal est construit indépendamment, sans perturber ni ralentir le travail de l'utilisateur. Une base de données ne peut fonctionner qu'avec un seul fichier journal à la fois. Le fichier journal enregistre des opérations telles que des ajouts, des modifications ou des suppressions d'enregistrements, des transactions, etc. Il est généré par défaut lors de la création d'une base de données. | binaire |
| data.match   | (interne) UUID correspondant au numéro de la table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | XML     |

(*) Lorsque le projet est créé depuis une base binaire .4b, le fichier de données demeure inchangé. Ainsi, il peut être nommé différemment et placé dans un autre emplacement.

### Dossier Settings

Ce dossier contient des **fichiers de propriétés utilisateur pour fichier de données** utilisés pour l'administration de la base de données.

> Ces paramètres ont la priorité sur les **[fichiers de propriétés utilisateur](#settings-folder-1)** et les fichiers de **propriétés structure**.

| Contenu             | Description                                                                                                                                                                                                                                                                                    | Format |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Backup.4DSettings   | Paramètres de sauvegarde de la base de données, utilisés pour définir les [options de sauvegarde](Backup/settings.md)) lorsque la base est lancée avec ce fichier de données. Les clés concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*. | XML    |
| settings.4DSettings | Propriétés de la base personnalisée pour ce fichier de données                                                                                                                                                                                                                                 | XML    |
| directory.json      | Description of 4D groups, users, and their access rights when the database is run with this data file.                                                                                                                                                                                         | JSON   |



### Dossier Logs

Le dossier Logs contient tous les fichiers journaux utilisés par le projet. Les fichiers journaux comprennent notamment :

- conversion de base de données,
- requêtes de serveur Web,
- journal des activités de sauvegarde/restitution (*Journal de sauvegarde\[xxx].txt*, voir [Journal de sauvegarde](Backup/backup.md#backup-journal))
- débogage de commandes,
- Requêtes 4D Server (générées sur les postes clients et sur le serveur).

> Un dossier Logs supplémentaire est disponible dans le dossier des préférences utilisateur du système (dossier 4D actif, voir la commande [Lire dossier 4D](https://doc.4d.com/4Dv17R6/4D/17-R6/Get-4D-folder.301-4311294.en.html)) pour les fichiers journaux de maintenance et dans les cas où le dossier de données est en lecture seule.

## Dossier Settings

Ce dossier contient des **fichiers de propriétés utilisateur** utilisés pour l'administration de la base de données. Les fichiers sont ajoutés au dossier si nécessaire.

> If a data settings file exists in a Settings folder [in the data folder](#settings-folder), it takes priority over user settings file.

| Contenu             | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        | Format |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| directory.json      | Description des groupes et utilisateurs 4D pour la base de données, ainsi que leurs droits d'accès                                                                                                                                                                                                                                                                                                                                                 | JSON   |
| BuildApp.4DSettings | Fichier de paramètres de génération, créé automatiquement lors de l'utilisation de la boîte de dialogue du générateur d'applications ou de la commande `BUILD APPLICATION`                                                                                                                                                                                                                                                                         | XML    |
| Backup.4DSettings   | Paramètres de sauvegarde de la base de données, utilisés pour définir les [options de sauvegarde](Backup/settings.md)) à chaque lancement de sauvegarde. Ce fichier peut également être utilisé pour lire ou définir des options supplémentaires, telles que la quantité d'informations stockées dans le *journal de sauvegarde*. Les clés concernant la configuration de la sauvegarde sont décrites dans le manuel *Sauvegarde des clés XML 4D*. | XML    |


## Dossier userPreferences.*userName*

Ce dossier contient des fichiers qui mémorisent les configurations utilisateur, par exemple la position des points de rupture. Vous pouvez simplement ignorer ce dossier. Il contient par exemple :

| Contenu                      | Description                                                           | Format |
| ---------------------------- | --------------------------------------------------------------------- | ------ |
| methodPreferences.json       | Préférences de l'éditeur de méthodes de l'utilisateur courant         | JSON   |
| methodWindowPositions.json   | Position de la fenêtre de l'utilisateur courant pour les méthodes     | JSON   |
| formWindowPositions.json     | Position de la fenêtre de l'utilisateur courant pour les formulaires  | JSON   |
| workspace.json               | Liste de fenêtres ouvertes : sous macOS, ordre des fenêtres à onglets | JSON   |
| debuggerCatches.json         | Appels vers commandes                                                 | JSON   |
| recentTables.json            | Liste ordonée de tables                                               | JSON   |
| preferencesv15.4DPreferences | Préférences utilisateur                                               | JSON   |


## Dossier Components

Ce dossier contient les composants disponibles dans la base projet uniquement. Il doit être stocké au même niveau que le dossier Project.

> Une base projet peut être elle-même un composant : - à des fins de développement : insérer un alias du fichier .4dproject dans le dossier Components de la base hôte. - à des fins de déploiement : créer le composant (voir [Créer un package projet](building.md)) et insérer le fichier .4dz résultant dans un dossier .4dbase dans le dossier Components de la base hôte.


## Dossier Plugins

Ce dossier contient les plug-ins disponibles dans la base projet uniquement. Il doit être stocké au même niveau que le dossier Project.


## Dossier documentation

Ce dossier contient tous les fichiers de documentation (.md) créés pour les éléments du projet, tels que les classes, les méthodes ou les formulaires. Les fichiers de documentation sont gérés et affichés dans l'Explorateur 4D.

Pour plus d'informations, reportez-vous à [Documenter un projet](Project/documentation.md).

## WebFolder

Il s'agit du dossier racine par défaut du serveur Web 4D pour les pages, les images, etc. Il est automatiquement créé lors du premier lancement du serveur Web. 