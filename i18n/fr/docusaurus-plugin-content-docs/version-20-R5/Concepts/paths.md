---
id: paths
title: Chemins d'accès
---

Les fonctions, propriétés et commandes des classes File et Folder vous permettent de manipuler les fichiers et les dossiers comme des objets. Cela rend la gestion des fichiers et dossiers flexible et puissante. Par exemple, pour créer un nouveau fichier dans le dossier Documents de l'utilisateur courant, vous pouvez écrire :

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

In addition, file and folder objects support `fileSystems`, which provide contextual path to main application folders.

## Chemins des filesystem

4D accepts several `filesystem` pathnames that designate specific 4D folders with variable location on macOS and Windows. Les chemins des filesystem sont utiles pour deux raisons principales :

- Indépendance : Vous pouvez déplacer votre solution d'un emplacement à un autre, indépendamment du système d'exploitation, sans vous préoccuper des chemins,
- Sécurité : Aucun code ne peut accéder aux éléments situés au-dessus de la racine des filesystem sur disque (sandboxing).

Les filesystem suivants sont pris en charge :

| filesystem   | Désigne                                                                     |
| ------------ | --------------------------------------------------------------------------- |
| "/DATA"      | Dossier data courant                                                        |
| "/LOGS"      | Dossier Logs                                                                |
| "/PACKAGE"   | Dossier racine du projet (avec ou sans extension 4dbase) |
| "/PROJECT"   | Dossier Project                                                             |
| "/RESOURCES" | Dossier de ressources du projet courant                                     |
| "/SOURCES"   | Dossier des sources du projet courant                                       |

## Syntaxe POSIX

La syntaxe POSIX est prise en charge sur toutes les plates-formes. **POSIX syntax is recommended** since it is the most flexible. It is used by default (returned by [file.path](../API/FileClass.md#path) and [folder.path](../API/FolderClass.md#path) properties).

Avec cette syntaxe :

- les dossiers sont séparés par "/"
- les chemins absolus commencent par un "/"
- pour remonter d'un dossier dans un chemin relatif, utilisez "../" devant le nom du chemin (par sécurité, vous ne pouvez pas remonter au-dessus du filesystem).

In POSIX syntax, you will generally use `filesystem` pathnames with [`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands, for example:

```4d
$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```

## Syntaxe spécifique à la plate-forme

La syntaxe spécifique à la plate-forme dépend du système d'exploitation sur lequel la commande est exécutée. Note that when creating a file or folder object with this syntax, you must declare it using the `fk platform path` constant as parameter.

### Windows

Les règles suivantes sont pris en charge :

- les séparateurs de dossiers sont "\"
- le texte contient " :" et "\" comme deuxième et troisième caractère,
- le texte commence par "\".

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Chemins d'accès Windows et séquences d'échappement

The 4D language allows the use of [escape sequences](quick-tour.md#escape-sequences). Escape sequences begin with a backslash `\`, followed by a character. For example, `\t` is the escape sequence for the `Tab` character.

Since the `\` character is also used as the separator in pathnames in Windows, you need to enter a double `\\` in windows pathnames.

### macOS

Les règles suivantes s'appliquent (syntaxe HFS+) :

- les séparateurs de dossiers sont ":"
- le chemin ne doit pas commencer par un ":"

Examples with [`Folder`](../API/FolderClass.md#folder):

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume doit s'appeler Monday
```

## Chemins absolus et relatifs

### `File` and `Folder` constructors

[`File`](../API/FileClass.md#file) and [`Folder`](../API/FolderClass.md#folder) commands only accept **absolute pathnames**. Les chemins relatifs ne sont pas pris en charge et provoqueront des erreurs. Par exemple, le code suivant n'est pas autorisé :

```4d
	//ERROR
$ko:=Folder("myFolder").create() //relative pathname with constructor
```

If you want to handle files or folders in various locations (project folder, system folders, etc.), you can use `filesystems` (see above). Par exemple, vous pouvez écrire :

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //dossier créé au niveau de la structure
$okFile:=File("/DATA/Prefs/tempo.txt").create() //fichier créé dans le dossier data
```

### `.file()` and `.folder()` folder functions

Functions of folder objects such as [`folder.file()`](../API/FolderClass.md#file) and [`folder.folder()`](../API/FolderClass.md#folder-1) expect relative POSIX pathnames. Par exemple :

```4d
  //pour référencer un dossier "Picture" dans le dossier des documents de l'utilisateur
$userImages:=Folder(fk documents folder).folder("Pictures")
  //pour créer un dossier sur le bureau
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Les chemins absolus ne sont pas pris en charge et provoqueront des erreurs.

## Exemples

La flexibilité des fonctions de fichiers et de dossiers vous offre diverses possibilités de manipulation des fichiers et des dossiers, comme dans les exemples suivants :

```4d
$f:=Folder(fk desktop folder).folder("archive/jan2019")
 
$f2:=Folder("/DATA/archive/jan2019").file("total.txt")
 
$f3:=Folder("/DATA/archive/jan2019")
 
$f4:=File("/DATA/info.txt")
 
$f5:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
 
$f6:=File(fk backup log file)
```
