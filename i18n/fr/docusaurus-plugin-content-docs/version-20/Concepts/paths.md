---
id: paths
title: Chemins d'accès
---

Les fonctions, propriétés et commandes des classes File et Folder vous permettent de manipuler les fichiers et les dossiers comme des objets. Cela rend la gestion des fichiers et dossiers flexible et puissante. Par exemple, pour créer un nouveau fichier dans le dossier Documents de l'utilisateur courant, vous pouvez écrire :

```4d
$ok:=Folder(fk documents folder).file("Archives/John4D.prefs").create()
```

De plus, les objets fichier et dossier prennent en charge les `fileSystems`, fournissant un chemin contextuel aux principaux dossiers de l'application.


4D accepte plusieurs chemins de `filesystem` qui désignent des dossiers 4D spécifiques avec un emplacement variable sur macOS et Windows. Un chemin d'accès filesystem est évalué par rapport au contexte et est renvoyé sous forme de chemin absolu.

Les chemins des filesystem sont utiles pour deux raisons principales :

- Indépendance : Vous pouvez déplacer votre solution d'un emplacement à un autre, indépendamment du système d'exploitation, sans vous préoccuper des chemins,
- Sécurité : Aucun code ne peut accéder aux éléments situés au-dessus de la racine des filesystem sur disque (sandboxing).

Les filesystem suivants sont pris en charge :

| filesystem   | Désigne                                                  | Exemple                                              |
| ------------ | -------------------------------------------------------- | ---------------------------------------------------- |
| "/DATA"      | Dossier data courant                                     | "C:\\MyApps\\Students\\Data\\"               |
| "/LOGS"      | Dossier Logs                                             | "C:\\MyApps\\Students\\Data\\Logs\\"       |
| "/PACKAGE"   | Dossier racine du projet (avec ou sans extension 4dbase) | "C:\\MyApps\\Students\\"                       |
| "/PROJECT"   | Dossier Project                                          | "C:\\MyApps\\Students\\Project\\"            |
| "/RESOURCES" | Dossier de ressources du projet courant                  | "C:\\MyApps\\Students\\Resources\\"          |
| "/SOURCES"   | Dossier des sources du projet courant                    | "C:\\MyApps\\Students\\Project\\Sources\\" |

## Syntaxe POSIX

La syntaxe POSIX est prise en charge sur toutes les plates-formes. **La syntaxe POSIX est recommandée** car elle est la plus flexible. Elle est utilisée par défaut (retournée par les propriétés [file.path](../API/FileClass.md#path) et [folder.path](../API/FolderClass.md#path)).

Avec cette syntaxe :

- les dossiers sont séparés par "/"
- les chemins absolus commencent par un "/"
- pour remonter d'un dossier dans un chemin relatif, utilisez "../" devant le nom du chemin (par sécurité, vous ne pouvez pas remonter au-dessus du filesystem).

Dans la syntaxe POSIX, vous utiliserez généralement les chemins `filesystem` avec les commandes [`File`](../API/FileClass.md#file) et [`Folder`](../API/FolderClass.md#folder), par exemple :

```4d
var $pathFile : 4D.File
var $pathFolder : 4D.Folder

$pathFile:=File("/DATA/Archives/file 2.txt")
$pathFolder:=Folder("/RESOURCES/Pictures")
```




## Syntaxe spécifique à la plate-forme

La syntaxe spécifique à la plate-forme dépend du système d'exploitation sur lequel la commande est exécutée. Notez que lorsque vous créez un objet fichier ou dossier avec cette syntaxe, vous devez le déclarer en utilisant la constante `fk platform path` comme paramètre.

### Windows

Les règles suivantes sont pris en charge :

- les séparateurs de dossiers sont "\"
- le texte contient " :" et "\" comme deuxième et troisième caractère,
- le texte commence par "\".

Exemples avec [`Folder`](../API/FolderClass.md#folder) :

```4d
$ok:=Folder("C:\\Monday";fk platform path).create()
$ok:=Folder("\\\\svr-internal\\tempo";fk platform path).create()
```

#### Chemins d'accès Windows et séquences d'échappement

Le langage 4D permet l'utilisation de [séquences d'échappement](quick-tour.md#sequences-dechappement). Les séquences d'échappement commencent par une barre oblique inverse `\`, suivie d'un caractère. Par exemple, `\t` est la séquence d'échappement pour le caractère `Tab`.

Étant donné que le caractère `\` est également utilisé comme séparateur dans les noms de chemins sous Windows, vous devez saisir un double `\\` dans ces noms de chemins.

### macOS

Les règles suivantes s'appliquent (syntaxe HFS+) :

- les séparateurs de dossiers sont ":"
- le chemin ne doit pas commencer par un ":"

Exemples avec [`Folder`](../API/FolderClass.md#folder) :

```4d
$ok:=Folder("macintosh hd:";fk platform path).create()
$ok:=Folder("Monday:Tuesday";fk platform path).create() //un volume doit s'appeler Monday
```

## Chemins absolus et relatifs

### Constructeurs `File` et `Folder`

Les commandes [`File`](../API/FileClass.md#file) et [`Folder`](../API/FolderClass.md#folder) n'acceptent que les **chemins absolus**. Les chemins relatifs ne sont pas pris en charge et provoqueront des erreurs. Par exemple, le code suivant n'est pas autorisé :

```4d
    //ERROR
$ko:=Folder("myFolder").create() //nom de chemin relatif avec constructeur
```

Si vous souhaitez gérer des fichiers ou des dossiers situés à différents endroits (dossier de projet, dossiers système, etc.), vous pouvez utiliser `filesystems` (voir ci-dessus). Par exemple, vous pouvez écrire :

```4d
$okFolder:=Folder("/PACKAGE/myFolder").create() //dossier créé au niveau de la structure
$okFile:=File("/DATA/Prefs/tempo.txt").create() //fichier créé dans le dossier data
```

### Fonctions de dossier `.file()` et `.folder()`

Les fonctions des objets dossier telles que [`folder.file()`](../API/FolderClass.md#file) et [`folder.folder()`](../API/FolderClass.md#folder-1) attendent des noms de chemin POSIX relatifs. Par exemple :

```4d
var $userImages : 4D.Folder
var $ok : Boolean

  //to reference a "Picture" folder within the user documents folder
$userImages:=Folder(fk documents folder).folder("Pictures")
  //to create a folder on the desktop
$ok:=Folder(fk desktop folder).folder("myFolder").create()
```

Les chemins absolus ne sont pas pris en charge et provoqueront des erreurs.


## Exemples

La flexibilité des fonctions de fichiers et de dossiers vous offre diverses possibilités de manipulation des fichiers et des dossiers, comme dans les exemples suivants :
```4d
var $fold : 4D.Folder
var $file : 4D.File

$fold:=Folder(fk desktop folder).folder("archive/jan2019")
$fold:=Folder("/DATA/archive/jan2019")
$file:=Folder("/DATA/archive/jan2019").file("total.txt")
$file:=File("/DATA/info.txt")
$file:=File("c:\\archives\\local\\jan2019.txt";fk platform path)
$file:=File(fk backup log file)
```
