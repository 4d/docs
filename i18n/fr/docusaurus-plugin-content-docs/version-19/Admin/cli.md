---
id: cli
title: Interface de ligne de commande
---

Vous pouvez utiliser le terminal macOS ou la console Windows pour piloter vos applications 4D (4D et 4D Server) à l'aide de lignes de commande. Cette fonctionnalité vous permet notamment :

- de lancer une base de données à distance, ce qui peut être particulièrement utile pour administrer des serveurs Web.
- d'exécuter des tests automatiques pour vos applications.

## Informations de base

Vous pouvez exécuter des lignes de commande pour les applications 4D à l'aide du terminal macOS ou de la console Windows.

- Sous macOS, vous devez utiliser la commande `open`.
- Sous Windows, vous pouvez simplement passer les arguments directement.

> Sous macOS, vous pouvez passer les arguments directement en allant dans le dossier contenant l'application, à l'intérieur du package (Contents/MacOS), ce qui permet d'adresser le flux stderr. Par exemple, si le package 4D se trouve dans le dossier `MyFolder`, vous devez écrire la ligne de commande comme suit : `/MyFolder/4D.app/Contents/MacOS/4D`. Nous vous recommandons cependant d'utiliser la commande `open` chaque fois que vous n'avez pas besoin d'accéder au flux stderr.

## Lancer une application 4D

Voici une description des lignes de commande et des arguments pris en charge pour le lancement d'applications 4D.

Syntaxe :
```
<applicationPath> [--version] [--help] [--project] [<projectPath | packagePath | 4dlinkPath> [--data <dataPath>]]
[--opening-mode interpreted | compiled] [--create-data] [--user-param <user string>] [--headless] [--dataless]
[--webadmin-settings-file] [--webadmin-access-key] [--webadmin-auto-start] [--webadmin-store-settings]
```
| Argument                    | Valeur                                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Chemin de 4D, 4D Server ou de l'application fusionnée | Lance l'application. Identique au double-clic sur l'application 4D. Lorsqu'elle est appelée sans argument de fichier de structure, l'application est exécutée et la boîte de dialogue «sélectionner la base de données» apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--version`                 |                                                       | Affiche la version de l'application et quitte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--help`                    |                                                       | Affiche le message d'aide et quitte. Autres arguments : -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--project`                 | projectPath &#124; packagePath &#124; 4dlinkPath      | Fichier de projet à ouvrir avec le fichier de données courant. Aucune boîte de dialogue n'apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--data`                    | dataPath                                              | Fichier de données à ouvrir avec le fichier de projet désigné. S'il n'est pas indoqué, 4D utilise le dernier fichier de données ouvert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--opening-mode`            | interpreted &#124; compiled                           | Base de données de requêtes à ouvrir en mode interprété ou compilé. Aucune erreur n'est générée si le mode demandé n'est pas disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--create-data`             |                                                       | Crée automatiquement un nouveau fichier de données si aucun fichier de données valide n'est trouvé. Aucune boîte de dialogue n'apparaît. 4D utilise le nom de fichier passé dans l'argument "--data" s'il en exise un (génère une erreur si un fichier du même nom existe déjà).                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--user-param`              | Chaîne utilisateur personnalisée                      | Une chaîne qui sera disponible dans l'application 4D via la commande Get database parameter (la chaîne ne doit pas commencer par un caractère "-", qui est réservé).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `--headless`                |                                                       | Lance 4D, 4D Server ou l'application fusionnée sans interface (mode headless). Dans ce mode :<li> Le mode Développement n'est pas disponible, la base de données démarre en mode Application</li><li> Aucune barre d'outils, barre de menus, fenêtre MDI ou écran de démarrage ne s'affiche</li><li>Aucune icône n'est affichée dans le dock ou la barre des tâches</li><li>La base de données ouverte n'est pas enregistrée dans le menu "Bases de données récentes"</li><li>Le journal de diagnostic est automatiquement lancé (voir [SET DATABASE PARAMETER](https://doc.4d.com/4dv19/help/command/en/page642.html), sélecteur 79)</li><li>Chaque appel à une boîte de dialogue est intercepté et une réponse automatique est fournie (par exemple OK pour la commande [ALERT](https://doc.4d.com/4dv19/help/command/en/page41.html), Abort pour un boîte de dialogue d'erreur, etc.). Toutes les commandes interceptées (*) sont enregistrées dans le journal de diagnostic.</li><br/>Pour les besoins de maintenance, vous pouvez envoyer n'importe quel texte aux flux de sortie standard à l'aide de la commande [LOG EVENT](https://doc.4d.com/4dv19/help/command/en/page667.html). A noter que les applications 4D headless ne peuvent être fermées qu'en appelant [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou en utilisant le gestionnaire de tâches du système d'exploitation. |
| `--dataless`                |                                                       | Lance 4D, 4D Server ou une application fusionnée en mode headless. Le mode Dataless est utile lorsque 4D exécute des tâches sans données (compilation de projet par exemple). Dans ce mode : <li>Aucun fichier contenant des données n'est ouvert, même s'il est spécifié dans la ligne de commande ou le fichier `.4DLink`, ou lors de l'utilisation des commandes `CREATE DATA FILE` et `OPEN DATA FILE`.</li><li>Les commandes qui manipulent les données généreront une erreur. Par exemple, `CREATE RECORD` renvoie le message "aucune table à laquelle appliquer la commande".</li><br/>**Note** :<li>S'il est passé en ligne de commande, le mode dataless s'applique à toutes les bases de données ouvertes dans 4D, tant que l'application n'est pas fermée.</li><li>S'il est passé à l'aide du fichier `.4DLink`, le mode dataless ne s'applique qu'à la base de données spécifiée dans le fichier` .4DLink`. Pour plus d'informations sur les fichiers `.4DLink`, voir [Raccourcis d'ouverture de projet] (../Project/creation.md#project-opening-shortcuts).</li>                                                                                                                                                                                                                                                                                                                                                                 |
| `--webadmin-settings-file`  | Chemin de fichier                                     | Chemin du fichier WebAdmin `.4DSettings` personnalisé pour le [serveur Web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--webadmin-access-key`     | Text                                                  | Clé d'accès au [serveur Web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--webadmin-auto-start`     | Boolean                                               | Statut du démarrage automatique du [serveur Web WebAdmin](webAdmin.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--webadmin-store-settings` |                                                       | Stocke la clé d'accès et les paramètres de démarrage automatique dans le fichier de paramètres courant (c'est-à-dire le fichier [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) par défaut ou un fichier personnalisé désigné par le paramètre `--webadmin-settings-path`). Utilisez l'argument `--webadmin-store-settings` pour enregistrer ces paramètres si nécessaire                                                                                                                                                                                                                                                                                                      |


[Diagnostic log file](debugLogFiles.md#4ddiagnosticlogtxt) (licence alert, conversion dialog, database selection, data file selection). Dans ce cas, un message d'erreur est envoyé à la fois dans le flux stderr et dans le journal d'événements système, puis l'application se ferme.

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
