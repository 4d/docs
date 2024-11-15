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

| Argument                    | Valeur                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :-------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationPath`           | Chemin d'accès à 4D, 4D Server, application fusionnée ou tool4d | Lance l'application.<br/>S'il ne s'agit pas d'une application headless : identique à un double-clic sur l'application ; lorsqu'elle est appelée sans argument de fichier de structure, l'application est exécutée et la boîte de dialogue "sélectionner une base de données" apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `--version`                 |                                                                 | Affiche la version de l'application et quitte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `--help`                    |                                                                 | Affiche le message d'aide et quitte. Autres arguments : -?, -h                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--project`                 | projectPath \| packagePath \| 4dlinkPath                        | Fichier de projet à ouvrir avec le fichier de données courant. Aucune boîte de dialogue n'apparaît.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--data`                    | dataPath                                                        | Fichier de données à ouvrir avec le fichier de projet désigné. S'il n'est pas spécifié, le dernier fichier de données ouvert est utilisé.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--opening-mode`            | interpreted \| compiled                                         | Base de données de requêtes à ouvrir en mode interprété ou compilé. Aucune erreur n'est générée si le mode demandé n'est pas disponible.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `--create-data`             |                                                                 | Crée automatiquement un nouveau fichier de données si aucun fichier de données valide n'est trouvé. Aucune boîte de dialogue n'apparaît. 4D utilise le nom de fichier passé dans l'argument "--data" s'il en exise un (génère une erreur si un fichier du même nom existe déjà).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `--user-param`              | Chaîne utilisateur personnalisée                                | Une chaîne qui sera disponible dans l'application via la commande [`Get database parameter`](https://doc.4d.com/4dv19R/help/command/fr/page643.html) (la chaîne ne doit pas commencer par un caractère "-", qui est réservé).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--headless`                |                                                                 | Lance 4D, 4D Server ou l'application fusionnée sans interface (mode headless). Dans ce mode:<li> Le mode Conception n'est pas disponible, la base de données démarre en mode Application</li><li> Pas de barre d'outils, barre de menus, la fenêtre MDI ou l'écran de démarrage est affiché</li><li>Aucune icône n'est affichée dans le dock ou la barre de tâches</li><li>La base de données ouverte n'est pas enregistrée dans le menu "bases de données récentes"</li><li>Le journal de diagnostic est automatiquement démarré (voir [SET DATABASE PARAMETER](https://doc.4d.com/4dv20/help/command/fr/page642.html), selecteur 79)</li><li>Chaque appel à une boîte de dialogue est intercepté et une réponse automatique fournie (par exemple, OK pour la commande [ALERT](https://doc.4d.com/4dv20/help/command/fr/page41.html), Abort pour un dialogue d'erreur...). Toutes les commandes interceptées(\*) sont journalisées dans le journal de diagnostic.</li><br/>Pour les besoins de maintenance, vous pouvez envoyer n'importe quel texte vers les flux de sortie standard en utilisant la commande [LOG EVENT](https://doc.4d.com/4dv20/help/command/fr/page667.html). A noter que les applications 4D headless ne peuvent être fermées qu'en appelant [QUIT 4D](https://doc.4d.com/4dv19/help/command/en/page291.html) ou en utilisant le gestionnaire de tâches du système d'exploitation. |
| `--dataless`                |                                                                 | Lance 4D, 4D Server, une application fusionnée ou tool4d en mode sans données. Le mode Dataless est utile lorsque 4D exécute des tâches sans données (compilation de projet par exemple). Dans ce mode : <li>Aucun fichier contenant des données n'est ouvert, même s'il est spécifié dans la ligne de commande ou le fichier `.4DLink`, ou lors de l'utilisation des commandes `CREATE DATA FILE` et `OPEN DATA FILE`.</li><li>Les commandes qui manipulent les données généreront une erreur. Par exemple, `CREATE RECORD` génère l'erreur « aucune table sur laquelle appliquer la commande ».</li><br/>**Note**:<li>Si le mode dataless est activé en ligne de commande, il s'applique à toutes les bases de données ouvertes dans 4D, tant que l'application n'est pas fermée.</li><li>Si le mode dataless est activé via le fichier `.4DLink`, il s'applique uniquement à la base de données spécifiée dans le fichier `.4DLink`. Pour plus d'informations sur les fichiers `.4DLink`, voir [Raccourcis d'ouverture des projets](../GettingStarted/creating.md#raccourcis-douverture-des-projets).</li>                                                                                                                                                                                                                                                                                                                                      |
| `--webadmin-settings-file`  | Chemin de fichier                                               | Chemin du fichier `.4DSettings` personnalisé pour le [serveur web WebAdmin](webAdmin.md). Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `--webadmin-access-key`     | Text                                                            | Clé d'accès pour le [serveur web WebAdmin](webAdmin.md). Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--webadmin-auto-start`     | Boolean                                                         | Statut du lancement automatique du [serveur web WebAdmin](webAdmin.md). Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `--webadmin-store-settings` |                                                                 | Stocke la clé d'accès et les paramètres de démarrage automatique dans le fichier de paramètres actuellement utilisé (c'est-à-dire le fichier [`WebAdmin.4DSettings`](webAdmin.md#webadmin-settings) par défaut ou un fichier personnalisé désigné avec le paramètre `--webadmin-settings-path`). Utilisez l'argument `--webadmin-store-settings` pour enregistrer ces paramètres si nécessaire. Non disponible avec [tool4d](#tool4d).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `--utility`                 |                                                                 | Disponible uniquement avec 4D Server. Lance [4D Server en mode utilitaire](#4d-server-in-utility-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `--skip-onstartup`          |                                                                 | Lance le projet sans exécuter aucune méthode "automatique", y compris les méthodes base `On Startup` et `On Exit`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `--startup-method`          | Nom de méthode projet (chaîne)               | Méthode projet à exécuter immédiatement après la méthode base `On Startup` (si elle n'est pas ignorée avec `--skip-onstartup`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

(\*) Certaines boîtes de dialogue sont affichées avant l'ouverture de la base de données, de sorte qu'il est impossible d'écrire dans le [fichier journal de diagnostic](Debugging/debugLogFiles.md#4ddiagnosticlogtxt) (alerte de licence, boîte de dialogue de Dans ce cas, un message d'erreur est envoyé à la fois dans le flux stderr et dans le journal d'événements système, puis l'application se ferme.

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

**tool4d** est une application gratuite, légère et autonome qui vous permet d'ouvrir un projet 4D en mode headless et d'exécuter du code 4D à l'aide de la CLI.

tool4d est disponible sur Windows et macOS et est toujours associé à une version de 4D (même version et même numéro de build). Il n'est disponible qu'en anglais.

tool4d est l'outil parfait si vous souhaitez :

- mettre en place une chaîne CI/CD pour votre application 4D,
- utiliser un exécutable 4D léger pour lancer des scripts 4D, par exemple pour exécuter des tests unitaires automatiques.

### Utilisation de tool4d

Vous pouvez obtenir tool4d à partir de la [page de téléchargement](https://product-download.4d.com/) des produits 4D.

Vous utilisez tool4d en exécutant une [ligne de commande](#launch-a-4d-application) avec un projet 4D standard. Vous pouvez utiliser tous les arguments décrits dans le tableau ci-dessus, à l'exception de --`webadmin` puisque ce composant est [désactivé dans tool4d](#disabled-4d-features). Avec tool4d, la séquence spécifique suivante est lancée :

1. tool4d exécute la méthode base `On Startup` (et toutes les méthodes "automatiques" telles que la [méthode utilisateur](../Users/handling_users_groups.md#user-properties)), sauf si l'argument `--skip-onstartup` est passé.
2. tool4d exécute la méthode désignée par l'argument `--startup-method` , le cas échéant.
3. tool4d exécute la méthode base `On Exit`, sauf si l'argument `--skip-onstartup` est fourni.
4. tool4d quitte.

Sous Windows, tool4d est une application console de sorte que le flux `stdout` est affiché dans le terminal (cmd, powershell...).

:::note Notes

- tool4d est toujours exécuté headless (l'option de ligne de commande `headless` est inutile).
- La commande [`Application type`](https://doc.4d.com/4dv20/help/command/fr/page494.html) renvoie la valeur 6 ("tool4d") lorsqu'elle est appelée à partir de l'application tool4d.
- le [fichier journal de diagnostic](../Debugging/debugLogFiles.md#4ddiagnosticlogtxt) est préfixé par "4DDiagnosticLogTool".

:::

### Fonctionnalités 4D désactivées

N'oubliez pas que tool4d s'exécute automatiquement en mode **headless** (voir `--headless` dans [ce tableau](#launch-a-4d-application)), et ne donne accès ni à l'IDE 4D ni à aucun de ses serveurs. En particulier, les fonctions suivantes ne sont pas accessibles :

- serveur d'application, serveur Web, serveur SQL,
- planificateur de sauvegarde,
- ODBC et SQL pass-through,
- tous les composants tels que 4D View Pro, 4D SVG, 4D NetKit...,
- correcteur orthographique hunspell,
- correcteur orthographique japonais (*mecab* library),
- WebAdmin,
- CEF,
- PHP,
- débogueur distant (le débogueur local, `TRACE` et les points d'arrêt sont ignorés dans les applications headless).

## 4D Server en mode utilitaire

Vous pouvez lancer une instance de 4D Server en mode utilitaire (headless) en utilisant l'option CLI `--utility` . Dans ce cas, la séquence suivante est déclenchée :

1. 4D Server exécute la méthode base `On Startup` (et toutes les méthodes "automatiques" telles que la [méthode utilisateur](../Users/handling_users_groups.md#user-properties)), sauf si le paramètre `--skip-onstartup` est passé.
2. 4D Server exécute la méthode désignée par l'option `--startup-method`, le cas échéant.
3. 4D Server exécute la méthode base `On Exit` , sauf si le paramètre `--skip-onstartup` est passé.
4. 4D Server quitte.

:::info

Contrairement à tool4d, 4D Server en mode utilitaire a toutes ses fonctionnalités activées. Cependant, le serveur d'application et tous les autres serveurs ne sont pas démarrés.

:::

:::tip Voir également

Voir [ce billet de blog](https://blog.4d.com/a-tool-for-4d-code-execution-in-cli/) pour des exemples d'utilisation de tool4d et 4D Server en mode utilitaire.

:::
