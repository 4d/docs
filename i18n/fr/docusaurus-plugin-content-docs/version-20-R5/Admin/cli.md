---
id: cli
title: Interface de ligne de commande
---

Vous pouvez utiliser le Terminal macOS ou la console Windows pour piloter vos applications 4D (4D, 4D Server, application fusionnée, et [tool4d](#tool4d)) en utilisant des lignes de commande. Cette fonctionnalité vous permet notamment :

- de lancer une base de données à distance, ce qui peut être particulièrement utile pour administrer des serveurs Web.
- d'exécuter des tests automatiques pour vos applications.

## Informations de base

Vous pouvez exécuter des lignes de commande pour les applications 4D à l'aide du terminal macOS ou de la console Windows.

- Sous macOS, vous devez utiliser la commande `open`.
- Sous Windows, vous pouvez simplement passer les arguments directement.

> Sous macOS, vous pouvez passer les arguments directement en allant dans le dossier contenant l'application, à l'intérieur du package (Contents/MacOS), ce qui permet d'adresser le flux stderr. Par exemple, si le package 4D se trouve dans le dossier `MyFolder`, vous devez écrire la ligne de commande comme suit : `/MyFolder/4D.app/Contents/MacOS/4D`. Cependant, nous vous recommandons d'utiliser la commande `open` chaque fois que vous n'avez pas besoin d'accéder au flux stderr.

## Lancer une application 4D

Voici une description des lignes de commande et des arguments pris en charge pour lancer les applications 4D.

Syntaxe :

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>]
```

| Argument                    | Valeur                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :-------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Chemin d'accès à 4D, 4D Server, application fusionnée ou tool4d | Lance l'application.<br/>S'il ne s'agit pas d'une application headless : identique à un double-clic sur l'application ; lorsqu'elle est appelée sans argument de fichier de structure, l'application est exécutée et la boîte de dialogue "sélectionner une base de données" apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--version`                 |                                                                 | Affiche la version de l'application et quitte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--help`                    |                                                                 | Affiche le message d'aide et quitte. Autres arguments : -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--project`                 | projectPath \| packagePath \| 4dlinkPath                        | Fichier de projet à ouvrir avec le fichier de données courant. Aucune boîte de dialogue n'apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--data`                    | dataPath                                                        | Fichier de données à ouvrir avec le fichier de projet désigné. S'il n'est pas spécifié, le dernier fichier de données ouvert est utilisé.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--opening-mode`            | interpreted \| compiled                                         | Base de données de requêtes à ouvrir en mode interprété ou compilé. Aucune erreur n'est générée si le mode demandé n'est pas disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--create-data`             |                                                                 | Crée automatiquement un nouveau fichier de données si aucun fichier de données valide n'est trouvé. Aucune boîte de dialogue n'apparaît. 4D utilise le nom de fichier passé dans l'argument "--data" s'il en exise un (génère une erreur si un fichier du même nom existe déjà).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--user-param`              | Chaîne utilisateur personnalisée                                | Une chaîne qui sera disponible dans l'application via la commande [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/fr/page643.html) (la chaîne ne doit pas commencer par un caractère "-", qui est réservé).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--headless`                |                                                                 | Lance 4D, 4D Server ou l'application fusionnée sans interface (mode headless). Dans ce mode :<li> Le mode Conception n'est pas disponible, la base de données démarre en mode Application</li><li> Pas de barre d'outils, barre de menus, La fenêtre MDI ou l'écran de démarrage est affiché</li><li>Aucune icône n'est affichée dans le dock ou la barre de tâches</li><li>La base de données ouverte n'est pas enregistrée dans le menu "bases de données récentes"</li><li>Le journal de diagnostic est automatiquement démarré (voir [SET DATABASE PARAMETER](https://doc. d.com/4dv19/help/command/fr/page642.html), selector 79)</li><li>Chaque appel à une boîte de dialogue est intercepté et une réponse automatique fournie (par exemple, OK pour la commande [ALERT](https://doc.4d.com/4dv19/help/command/fr/page41.html), Abandonner pour un dialogue d'erreur...). All intercepted commands(\*) are logged in the diagnostic log.</li><br/>For maintenance needs, you can send any text to standard output streams using the [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html) command. Note that headless 4D applications can only be closed by a call to [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) or using the OS task manager. |
| `--dataless`                |                                                                 | Lance 4D, 4D Server, une application fusionnée ou tool4d en mode sans données. Le mode Dataless est utile lorsque 4D exécute des tâches sans données (compilation de projet par exemple). Dans ce mode : <li>Aucun fichier contenant des données n'est ouvert, même s'il est spécifié dans la ligne de commande ou le fichier `.4DLink`, ou lors de l'utilisation des commandes `CREATE DATA FILE` et `OPEN DATA FILE`.</li><li>Les commandes qui manipulent les données généreront une erreur. For example, `CREATE RECORD` throws “no table to apply the command to”.</li><br/>**Note**:<li>If passed in the command line, dataless mode applies to all databases opened in 4D, as long as the application is not closed.</li><li>If passed using the `.4DLink` file, dataless mode only applies to the database specified in the `.4DLink` file. For more information on `.4DLink` files, see [Project opening shortcuts](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--webadmin-settings-file`  | Chemin de fichier                                               | Chemin du fichier `.4DSettings` personnalisé pour le [serveur web WebAdmin](webAdmin.md). Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--webadmin-access-key`     | String                                                          | Clé d'accès pour le [serveur web WebAdmin](webAdmin.md). Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-auto-start`     | Boolean                                                         | Statut du lancement automatique du [serveur web WebAdmin](webAdmin.md). Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--webadmin-store-settings` |                                                                 | Store the access key and automatic starting parameters in the currently used settings file (i.e. the default [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) file or a custom file designated with the `--webadmin-settings-path` parameter). Use the `--webadmin-store-settings` argument to save these settings if necessary. Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `--utility`                 |                                                                 | Disponible uniquement avec 4D Server. Launches [4D Server in utility mode](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--skip-onstartup`          |                                                                 | Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--startup-method`          | Nom de méthode projet (chaîne)               | Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

(\*) Some dialogs are displayed before the database is opened, so that it's impossible to write into the [Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). Dans ce cas, un message d'erreur est envoyé à la fois dans le flux stderr et dans le journal d'événements système, puis l'application se ferme.

### Exemples

> Le dossier courant de l'utilisateur est atteint à l'aide de la commande "~" sous macOS et de la commande "%HOMEPATH%" sous Windows.

Lancez une application 4D stockée sur le bureau :

- Sous macOS :

```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

- Sous Windows :

```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```

Ouvrez un paquet sur macOS :

```bash
--args ~/Documents/myDB.4dbase
```

Ouvrez un fichier de projet :

- Sous macOS :

```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```

- Sous Windows :

```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```

Ouvrez un fichier de projet et un fichier de données :

- Sous macOS :

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

- Sous Windows :

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
ou :
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Ouvrez un fichier .4DLink :

- Sous macOS :

```bash
~/Desktop/MyDatabase.4DLink
```

- Sous Windows :

```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Lancez l'application en mode compilé et créer un fichier de données s'il n'est pas disponible :

- Sous macOS :

```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

- Sous Windows :

```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Lancez l'application avec un fichier projet et un fichier de données :

- Sous macOS :

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

- Sous Windows :

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Ouverture sans interface (mode headless) :

- Sous macOS :

```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

- Sous Windows :

```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```

## tool4d

**tool4d** is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI.

tool4d est disponible sur Windows et macOS et est toujours associé à une version de 4D (même version et même numéro de build). Il n'est disponible qu'en anglais.

tool4d est l'outil parfait si vous souhaitez :

- mettre en place une chaîne CI/CD pour votre application 4D,
- utiliser un exécutable 4D léger pour lancer des scripts 4D, par exemple pour exécuter des tests unitaires automatiques.

### Utilisation de tool4d

You can get tool4d from the 4D [Product download page](https://product-download.4d.com/).

You use tool4d by executing a [command line](#launch-a-4d-application) with a standard 4D project. You can use all arguments described in the above table, except --`webadmin` since this component is [disabled in tool4d](#disabled-4d-features). Avec tool4d, la séquence spécifique suivante est lancée :

1. tool4d executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` argument is passed.
2. tool4d executes the method designated by the `--startup-method` argument, if any.
3. tool4d executes the `On Exit` database method, except if the `--skip-onstartup` argument is passed.
4. tool4d quitte.

On Windows, tool4d is a console application so that the `stdout` stream is displayed in the terminal (cmd, powershell...).

:::note Notes

- tool4d is always executed headless (the `headless` command line option is useless).
- The [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) command returns the value 6 ("tool4d") when called from the tool4d application.
- the [diagnostic log file](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) is prefixed with "4DDiagnosticLogTool".

:::

### Fonctionnalités 4D désactivées

Keep in mind that tool4d runs automatically in **headless mode** (see `--headless` in [this table](#launch-a-4d-application)), and does neither give access to the 4D IDE nor any of its servers. En particulier, les fonctions suivantes ne sont pas accessibles :

- serveur d'application, serveur Web, serveur SQL,
- planificateur de sauvegarde,
- ODBC et SQL pass-through,
- tous les composants tels que 4D View Pro, 4D SVG, 4D NetKit...,
- correcteur orthographique hunspell,
- japanese spellchecker (_mecab_ library),
- WebAdmin,
- CEF,
- PHP,
- remote debugger (local debugger, `TRACE` command and breakpoints are ignored in headless applications).

## 4D Server en mode utilitaire

You can launch a 4D Server instance in a utility mode (headless) by using the `--utility` CLI option. Dans ce cas, la séquence suivante est déclenchée :

1. 4D Server executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` parameter is passed.
2. 4D Server executes the method designated by the `--startup-method`, if any.
3. 4D Server executes the `On Exit` database method, except if the `--skip-onstartup` parameter is passed.
4. 4D Server quitte.

:::info

Contrairement à tool4d, 4D Server en mode utilitaire a toutes ses fonctionnalités activées. Cependant, le serveur d'application et tous les autres serveurs ne sont pas démarrés.

:::

:::tip Voir également

See [this blog post](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) for examples of how to use tool4d and 4D Server in utility mode.

:::
