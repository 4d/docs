---
id: cli
title: Interface de ligne de commande
---

You can use the macOS Terminal or the Windows console to drive your 4D applications (4D, 4D Server, merged application, and [tool4d](#tool4d)) using command lines. Cette fonctionnalité vous permet notamment :

- de lancer une base de données à distance, ce qui peut être particulièrement utile pour administrer des serveurs Web.
- d'exécuter des tests automatiques pour vos applications.

## Informations de base

Vous pouvez exécuter des lignes de commande pour les applications 4D à l'aide du terminal macOS ou de la console Windows.

- Sous macOS, vous devez utiliser la commande `open`.
- Sous Windows, vous pouvez simplement passer les arguments directement.

> Sous macOS, vous pouvez passer les arguments directement en allant dans le dossier contenant l'application, à l'intérieur du package (Contents/MacOS), ce qui permet d'adresser le flux stderr. Par exemple, si le package 4D se trouve dans le dossier `MyFolder`, vous devez écrire la ligne de commande comme suit : `/MyFolder/4D.app/Contents/MacOS/4D`. Nous vous recommandons cependant d'utiliser la commande `open` chaque fois que vous n'avez pas besoin d'accéder au flux stderr.

## Lancer une application 4D

Here is a description of command lines and arguments supported to launch 4D applications.

Syntaxe :

```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]] 
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]  
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]  
[--utility] [--skip-onstartup] [--startup-method <methodName string>] 
```

| Argument&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Valeur                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`                                                                                                                                                                            | Path of 4D, 4D Server, merged application, or tool4d | Launches the application.<br/>If not headless: identical to double-clicking the application; when called without structure file argument, the application is executed and the 'select database' dialog box appears.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--version`                                                                                                                                                                                  |                                                      | Affiche la version de l'application et quitte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--help`                                                                                                                                                                                     |                                                      | Affiche le message d'aide et quitte. Autres arguments : -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--project`                                                                                                                                                                                  | projectPath &#124; packagePath &#124; 4dlinkPath     | Fichier de projet à ouvrir avec le fichier de données courant. Aucune boîte de dialogue n'apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--data`                                                                                                                                                                                     | dataPath                                             | Fichier de données à ouvrir avec le fichier de projet désigné. If not specified, the last opened data file is used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--opening-mode`                                                                                                                                                                             | interpreted &#124; compiled                          | Base de données de requêtes à ouvrir en mode interprété ou compilé. Aucune erreur n'est générée si le mode demandé n'est pas disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--create-data`                                                                                                                                                                              |                                                      | Crée automatiquement un nouveau fichier de données si aucun fichier de données valide n'est trouvé. Aucune boîte de dialogue n'apparaît. 4D utilise le nom de fichier passé dans l'argument "--data" s'il en exise un (génère une erreur si un fichier du même nom existe déjà).                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--user-param`                                                                                                                                                                               | Chaîne utilisateur personnalisée                     | A string that will be available within the application through the [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/en/page643.html) command (the string must not start with a "-" character, which is reserved).                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--headless`                                                                                                                                                                                 |                                                      | Lance 4D, 4D Server ou l'application fusionnée sans interface (mode headless). Dans ce mode :<li> Le mode Développement n'est pas disponible, la base de données démarre en mode Application</li><li> Aucune barre d'outils, barre de menus, fenêtre MDI ou écran de démarrage ne s'affiche</li><li>Aucune icône n'est affichée dans le dock ou la barre des tâches</li><li>La base de données ouverte n'est pas enregistrée dans le menu "Bases de données récentes"</li><li>Le journal de diagnostic est automatiquement lancé (voir [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), sélecteur 79)</li><li>Chaque appel à une boîte de dialogue est intercepté et une réponse automatique est fournie (par exemple OK pour la commande [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html), Abort pour un boîte de dialogue d'erreur, etc.). Toutes les commandes interceptées (*) sont enregistrées dans le journal de diagnostic.</li><br/>Pour les besoins de maintenance, vous pouvez envoyer n'importe quel texte aux flux de sortie standard à l'aide de la commande [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). A noter que les applications 4D headless ne peuvent être fermées qu'en appelant [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou en utilisant le gestionnaire de tâches du système d'exploitation. |
| `--dataless`                                                                                                                                                                                 |                                                      | Launches 4D, 4D Server, merged application or tool4d in dataless mode. Le mode Dataless est utile lorsque 4D exécute des tâches sans données (compilation de projet par exemple). Dans ce mode : <li>Aucun fichier contenant des données n'est ouvert, même s'il est spécifié dans la ligne de commande ou le fichier `.4DLink`, ou lors de l'utilisation des commandes `CREATE DATA FILE` et `OPEN DATA FILE`.</li><li>Les commandes qui manipulent les données généreront une erreur. Par exemple, `CREATE RECORD` renvoie le message "aucune table à laquelle appliquer la commande".</li><br/>**Note** :<li>S'il est passé en ligne de commande, le mode dataless s'applique à toutes les bases de données ouvertes dans 4D, tant que l'application n'est pas fermée.</li><li>S'il est passé à l'aide du fichier `.4DLink`, le mode dataless ne s'applique qu'à la base de données spécifiée dans le fichier` .4DLink`. Pour plus d'informations sur les fichiers `.4DLink`, voir [Raccourcis d'ouverture de projet](../GettingStarted/creating.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                             |
| `--webadmin-settings-file`                                                                                                                                                                   | Chemin de fichier                                    | Path of the custom WebAdmin `.4DSettings` file for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--webadmin-access-key`                                                                                                                                                                      | String                                               | Access key for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `--webadmin-auto-start`                                                                                                                                                                      | Boolean                                              | Status of the automatic startup for the [WebAdmin web server](webAdmin.md). Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--webadmin-store-settings`                                                                                                                                                                  |                                                      | Stocke la clé d'accès et les paramètres de démarrage automatique dans le fichier de paramètres courant (c'est-à-dire le fichier [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) par défaut ou un fichier personnalisé désigné par le paramètre `--webadmin-settings-path`). Use the `--webadmin-store-settings` argument to save these settings if necessary. Not available with [tool4d](#tool4d).                                                                                                                                                                                                                                                                            |
| `--utility`                                                                                                                                                                                  |                                                      | Only available with 4D Server. Launches [4D Server in utility mode](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--skip-onstartup`                                                                                                                                                                           |                                                      | Launches the project without executing any "automatic" methods, including the `On Startup` and `On Exit` database methods                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--startup-method`                                                                                                                                                                           | Project method name (string)                         | Project method to execute immediately after the `On Startup` database method (if not skipped with `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

[Diagnostic log file](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). Dans ce cas, un message d'erreur est envoyé à la fois dans le flux stderr et dans le journal d'événements système, puis l'application se ferme.

### Exemples

> Le dossier courant de l'utilisateur est atteint à l'aide de la commande "~" sous macOS et de la commande "%HOMEPATH%" sous Windows.

Lancez une application 4D stockée sur le bureau :

*   Sous macOS :


```bash
open ~/Desktop/4D.app
open "~/Desktop/4D Server.app"
```

*   Sous Windows :


```bash
%HOMEPATH%\Desktop\4D\4D.exe
%HOMEPATH%\Desktop\"4D Server.exe"
```


Ouvrez un paquet sur macOS :

```bash
--args ~/Documents/myDB.4dbase
```

Ouvrez un fichier de projet :

*   Sous macOS :


```bash
--args ~/Documents/myProj/Project/myProj.4DProject
```


*   Sous Windows :


```bash
%HOMEPATH%\Documents\myProj\Project\myProj.4DProject
```



Ouvrez un fichier de projet et un fichier de données :

*   Sous macOS :


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD
```

*   Sous Windows :


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD
ou :
/project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject /data %HOMEPATH%\Documents\data\myData.4DD
```

Ouvrez un fichier .4DLink :

*   Sous macOS :


```bash
~/Desktop/MyDatabase.4DLink
```


*   Sous Windows :


```bash
%HOMEPATH%\Desktop\MyDatabase.4DLink
```

Lancez l'application en mode compilé et créer un fichier de données s'il n'est pas disponible :

*   Sous macOS :


```bash
~/Documents/myBase.4dbase --args --opening-mode compiled --create-data true
```

*   Sous Windows :


```bash
%HOMEPATH%\Documents\myBase.4dbase\myDB.4db --opening-mode compiled --create-data true
```

Lancez l'application avec un fichier projet et un fichier de données :

*   Sous macOS :


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --user-param "Hello world"
```

*   Sous Windows :


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --user-param "Hello world"
```

Ouverture sans interface (mode headless) :

*   Sous macOS :


```bash
--args --project ~/Documents/myProj/Project/myProj.4DProject --data ~/Documents/data/myData.4DD --headless  
```

*   Sous Windows :


```bash
--project %HOMEPATH%\Documents\myProj\Project\myProj.4DProject --data %HOMEPATH%\Documents\data\myData.4DD --headless
```



## tool4d


**tool4d** is a free, lightweight, stand-alone application allowing you to open a 4D project in headless mode and execute some 4D code using the CLI.

tool4d is available on Windows and macOS and is always associated to a 4D release (same version and build number). It is only provided in English localization.

tool4d is a perfect tool if you want to:

- implement a CI/CD chain for your 4D application,
- use a light 4D executable to run 4D scripts, for example to execute automatic unit tests.



### Using tool4d

You can get tool4d from the 4D [Product download page](https://product-download.4d.com/).

You use tool4d by executing a [command line](#launch-a-4d-application) with a standard 4D project. You can use all arguments described in the above table, except --`webadmin` since this component is [disabled in tool4d](#disabled-4d-features). With tool4d, the following specific sequence is launched:

1. tool4d executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` argument is passed.
2. tool4d executes the method designated by the `--startup-method` argument, if any.
3. tool4d executes the `On Exit` database method, except if the `--skip-onstartup` argument is passed.
4. tool4d quits.

On Windows, tool4d is a console application so that the `stdout` stream is displayed in the terminal (cmd, powershell...).


:::note Notes

- tool4d is always executed headless (the `headless` command line option is useless).
- The [`Application type`](https://doc.4d.com/4dv19R/help/command/en/page494.html) command returns the value 6 ("tool4d") when called from the tool4d application.
- the [diagnostic log file](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) is prefixed with "4DDiagnosticLogTool".

:::


### Disabled 4D features

Keep in mind that tool4d runs automatically in **headless mode** (see `--headless` in [this table](#launch-a-4d-application)), and does neither give access to the 4D IDE nor any of its servers. In particular, the following features are disabled:

- application server, Web server, SQL server,
- backup scheduler,
- ODBC and SQL pass-through,
- all components such as 4D View Pro, 4D SVG, 4D NetKit...,
- hunspell spell checker,
- japanese spellchecker (*mecab* library),
- WebAdmin,
- CEF,
- PHP,
- remote debugger (local debugger, `TRACE` command and breakpoints are ignored in headless applications).



## 4D Server in utility mode

You can launch a 4D Server instance in a utility mode (headless) by using the `--utility` CLI option. In this case, the following workflow is triggered:

1. 4D Server executes the `On Startup` database method (and all "automatic" methods such as [user method](../Users/handling_users_groups.md#user-properties)), except if the `--skip-onstartup` parameter is passed.
2. 4D Server executes the method designated by the `--startup-method`, if any.
3. 4D Server executes the `On Exit` database method, except if the `--skip-onstartup` parameter is passed.
4. 4D Server quits.

:::info

Unlike tool4d, 4D Server in utility mode has all its features enabled. However, the application server and all other servers are not started.

:::


:::tip See also

See [this blog post](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) for examples of how to use tool4d and 4D Server in utility mode.

:::