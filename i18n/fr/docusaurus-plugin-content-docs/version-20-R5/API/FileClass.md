---
id: FileClass
title: File
---

`File` objects are created with the [`File`](#file) command. Ils contiennent des références à des fichiers du disque qui peuvent exister réellement ou non sur le disque. For example, when you execute the `File` command to create a new file, a valid `File` object is created but nothing is actually stored on disk until you call the [`file.create( )`](#create) function.

### Exemple

L'exemple suivant crée un fichier de préférences dans le dossier du projet :

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Chemins d'accès

`File` objects support several pathnames, including `filesystems` or `posix` syntax. Supported pathnames are detailed in the [**Pathnames**](../Concepts/paths.md) page.

### Objet File

|                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.copyTo().Summary -->                           |
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.create().Summary -->                         |
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->          |
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.creationDate.Summary -->             |
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.creationTime.Summary -->             |
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.delete().Summary -->                         |
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.exists.Summary -->                               |
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.extension.Summary -->                      |
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.fullName.Summary -->                         |
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->             |
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->                                                                                                                                       |
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.getIcon().Summary -->                        |
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.getText().Summary -->                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.hidden.Summary -->                               |
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isAlias.Summary -->                            |
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isFile.Summary -->                               |
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isFolder.Summary -->                         |
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.isWritable.Summary -->                   |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.modificationDate.Summary --> |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.modificationTime.Summary --> |
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->                         |
| [<!-- INCLUDE #document.name.Syntax -->](#name)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.name.Summary -->                                     |
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.open().Summary -->                               |
| [<!-- INCLUDE #document.original.Syntax -->](#original)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.original.Summary -->                         |
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.parent.Summary -->                               |
| [<!-- INCLUDE #document.path.Syntax -->](#path)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.path.Summary -->                                     |
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.platformPath.Summary -->             |
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.rename().Summary -->                         |
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->             |
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->             |
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #FileClass.setText().Summary -->                      |
| [<!-- INCLUDE #document.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #document.size.Summary -->                                     |

## File

<details><summary>Historique</summary>

| Release | Modifications                       |
| ------- | ----------------------------------- |
| 19 R4   | New `HTTP Client log file` constant |
| 17 R5   | Ajout                               |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->

<!-- REF #_command_.File.Params -->

| Paramètres   | Type                    |     | Description                                                        |
| ------------ | ----------------------- | :-: | ------------------------------------------------------------------ |
| path         | Text                    |  -> | Chemin de fichier                                                  |
| fileConstant | Integer                 |  -> | Constante de fichier 4D                                            |
| pathType     | Integer                 |  -> | `fk posix path` (default) or `fk platform path` |
| -            |                         |  -> | * pour retourner le fichier de la base hôte                        |
| Résultat     | 4D.File |  <- | Nouvel objet fichier                                               |

<!-- END REF -->

#### Description

The `File` command <!-- REF #_command_.File.Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. La commande accepte deux syntaxes :

**File ( path { ; pathType } { ; \* })**

In the _path_ parameter, pass a file path string. Vous pouvez utiliser une chaine personnalisée ou un "filesystem" (ex : "/DATA/myfile.txt").

> Only absolute pathnames are supported with the `File` command.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. If you work with platform pathnames (Windows or macOS), you must declare it using the _pathType_ parameter. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                                                  |
| ---------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**File ( fileConstant { ; \* } )**

In the _fileConstant_ parameter, pass a 4D built-in or system file, using one of the following constants:

| Constante                         | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19     | Fichier d'historique des sauvegardes (voir Fichiers de configuration et de suivi). Stocké dans le dossier de destination de sauvegarde.                                                                                                                                                                                                                                                                                                                                                                                                              |
| Backup log file                   | 13     | Fichier journal des sauvegardes courant. Stocké dans le dossier Logs de l'application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Backup settings file              | 1      | Fichier backup.4DSettings par défaut (format xml), stocké dans le dossier Settings du projet                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Backup settings file for data     | 17     | fichier backup.4DSettings du fichier de données (format xml), stocké dans le dossier Settings du dossier data                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Build application log file        | 14     | Fichier d'historique courant au format xml du générateur d'application. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Build application settings file   | 20     | Fichier de configuration par défaut du générateur d'application ("buildApp.4DSettings"). Stocké dans le dossier Settings du projet.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Compacting log file               | 6      | Fichier d'historique du compactage le plus récent de la base, effectué avec la commande Compact data file ou le Centre de sécurité et de maintenance (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                             |
| Current backup settings file      | 18     | fichier backup.4DSettings utilisé actuellement par l'application. Il peut s'agir du fichier backup.4DSettings par défaut ou d'un fichier de settings de backup utilisateur défini pour le fichier de données                                                                                                                                                                                                                                                                                                                                            |
| Debug log file                    | 12     | Log file created by the `SET DATABASE PARAMETER(Debug log recording)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Diagnostic log file               | 11     | Log file created by the `SET DATABASE PARAMETER(Diagnostic log recording)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Directory file                    | 16     | fichier directory.json, contenant la description des groupes et utilisateurs (le cas échéant) du projet. Il se situe soit dans le dossier Settings de l'utilisateur (par défaut, s'applique à tout le projet), soit dans le dossier Settings du data (spécifique à un fichier de données).                                                                                                                                                                                                     |
| HTTP Client log file              | 24     | Log file created by the `HTTP SET OPTION(HTTP client log)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| HTTP debug log file               | 9      | Log file created by the `WEB SET OPTION(Web debug log)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| HTTP log file                     | 8      | Log file created by the `WEB SET OPTION(Web log recording)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| IMAP Log file                     | 23     | Log file created by the `SET DATABASE PARAMETER(IMAP Log)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Last backup file                  | 2      | Last backup file, named `\<applicationName>[bkpNum].4BK`, stored at a custom location.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Last journal integration log file | 22     | Chemin complet du dernier fichier journal d'intégration de l'historique (stocké dans le dossier Logs de l'application restaurée), le cas échéant. Ce fichier est créé en mode auto-repair, dès qu'une intégration de fichier d'historique a lieu                                                                                                                                                                                                                                                                                                                     |
| Repair log file                   | 7      | Fichier d'historique des réparations effectuées sur la base par le Centre de sécurité et de maintenance (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                          |
| Request log file                  | 10     | Standard client/server request log file (excluding Web requests) created by the `SET DATABASE PARAMETER(4D Server log recording)` or `SET DATABASE PARAMETER(Client log recording)` commands. Si la commande est appelée sur le serveur, le chemin du fichier des requêtes du serveur est retourné (stocké dans le dossier Logs du serveur). Si la commande est appelée sur un client, le chemin du fichier des requêtes du client est retourné (stocké dans le dossier Logs local du client). |
| SMTP log file                     | 15     | Log file created by the `SET DATABASE PARAMETER(SMTP Log)` command. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| User settings file                | 3      | Fichier settings.4DSettings pour tous les fichiers de données (si activé), stocké dans le dossier Preferences à côté du fichier de structure.                                                                                                                                                                                                                                                                                                                                                                                                        |
| User settings file for data       | 4      | Fichier settings.4DSettings file pour le fichier de données courant, stocké dans le dossier Preferences à côté du fichier de données.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Verification log file             | 5      | Log files created by the `VERIFY CURRENT DATA FILE` and `VERIFY DATA FILE` commands or the Maintenance and Security Center (MSC). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                                       |

If the target _fileConstant_ does not exist, a null object is returned. Aucune erreur n'est générée.

If the command is called from a component, pass the optional `*` parameter to get the path of the host database. Otherwise, if you omit the `*` parameter, a null object is always returned.

## 4D.File.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( _path_ : Text { ; _pathType_ : Integer }{ ; \* } ) : 4D.File<br/>**4D.File.new** ( _fileConstant_ : Integer { ; \* } ) : 4D.File<!-- END REF -->

#### Description

The `4D.File.new()` function <!-- REF #4D.File.new().Summary -->creates and returns a new object of the `4D.File` type<!-- END REF -->. It is identical to the [`File`](#file) command (shortcut).

> It is recommended to use the [`File`](#file) shortcut command instead of `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->

## .create()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF file.create().Note -->

**Not available for ZIP archives**<!-- END REF -->

<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->

<!--REF #FileClass.create().Params -->

| Paramètres | Type    |    | Description                                           |
| ---------- | ------- | -- | ----------------------------------------------------- |
| Résultat   | Boolean | <- | Vrai si le fichier a été créé avec succès, sinon Faux |

<!-- END REF -->

#### Description

The `.create()` function <!-- REF #FileClass.create().Summary -->creates a file on disk according to the properties of the `File` object<!-- END REF -->.

If necessary, the function creates the folder hierachy as described in the [platformPath](#platformpath) or [path](#path) properties. Si le fichier existe déjà sur disque, la fonction ne fait rien (aucune erreur n'est générée) et retourne faux.

**Valeur retournée**

- **True** if the file is created successfully;
- **False** if a file with the same name already exists or if an error occured.

#### Exemple

Création d'un fichier de préférences dans le dossier principal :

```4d
 var $created : Boolean
 $created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

<!-- END REF -->

<!-- REF file.createAlias().Desc -->

## .createAlias()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.createAlias().Params -->

| Paramètres         | Type                      |    | Description                                         |
| ------------------ | ------------------------- | -- | --------------------------------------------------- |
| dossierDestination | 4D.Folder | -> | Dossier de destination pour l'alias ou le raccourci |
| aliasName          | Text                      | -> | Nom de l'alias ou du raccourci                      |
| aliasType          | Integer                   | -> | Type de lien de l'alias                             |
| Résultat           | 4D.File   | <- | Référence du fichier de l'alias ou du raccourci     |

<!-- END REF -->

#### Description

The `.createAlias()` function <!-- REF #FileClass.createAlias().Summary -->creates an alias (macOS) or a shortcut (Windows)<!-- END REF --> to the file with the specified _aliasName_ name in the folder designated by the _destinationFolder_ object.

Pass the name of the alias or shortcut to create in the _aliasName_ parameter.

Par défaut sur macOS, la fonction crée un alias standard. You can also create a symbolic link by using the _aliasType_ parameter. Les constantes suivantes sont disponibles :

| Constante          | Valeur | Commentaire                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------- |
| `fk alias link`    | 0      | Lien alias (macOS uniquement)(par défaut) |
| `fk symbolic link` | 1      | Lien symbolique (macOS uniquement)                           |

On Windows, a shortcut (.lnk file) is always created (the _aliasType_ parameter is ignored).

**Returned object**

A `4D.File` object with the `isAlias` property set to **true**.

#### Exemple

Vous souhaitez créer un alias pour un fichier contenu dans votre dossier principal :

```4d
 $myFile:=Folder(fk documents folder).file("Archives/ReadMe.txt")
 $aliasFile:=$myFile.createAlias(File("/PACKAGE");"ReadMe")
```

<!-- END REF -->

<!-- INCLUDE document.creationDate.Desc -->

<!-- INCLUDE document.creationTime.Desc -->

<!-- REF file.delete().Desc -->

## .delete()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->

<!-- REF #FileClass.delete().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

The `.delete()` function <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

Si le fichier n'existe pas sur le disque, la fonction ne fait rien (aucune erreur n'est générée).

Si le fichier est actuellement ouvert, le résultat dépend du système d'exploitation :

- sous Windows, une erreur est générée,
- sous macOS, aucune erreur n'est générée et le fichier est supprimé.

:::caution

`.delete()` can delete any file on a disk. Cela inclut les documents créés avec d'autres applications, ainsi que les applications elles-mêmes. `.delete()` should be used with extreme caution. La suppression d'un fichier est une opération permanente et irréversible.

:::

#### Exemple

Vous souhaitez supprimer un fichier spécifique dans le dossier de la base de données :

```4d
 $tempo:=File("/PACKAGE/SpecialPrefs/"+Current user+".prefs")
 If($tempo.exists)
    $tempo.delete()
    ALERT("User preference file deleted.")
 End if
```

<!-- END REF -->

<!-- INCLUDE document.exists.Desc -->

<!-- INCLUDE document.extension.Desc -->

<!-- INCLUDE document.fullName.Desc -->

<!-- REF file.getAppInfo().Desc -->

## .getAppInfo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |

</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->

<!--REF #FileClass.getAppInfo().Params -->

| Paramètres | Type   |    | Description                                                                                                 |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------------------- |
| Résultat   | Object | <- | Contenu du fichier de ressource version .exe/.dll ou .plist |

<!-- END REF -->

#### Description

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

La fonction doit être utilisée avec un fichier .exe, .dll ou .plist existant. Si le fichier n'existe pas sur le disque ou n'est pas un fichier .exe, .dll ou .plist valide, la fonction renvoie un objet vide (aucune erreur n'est générée).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

**Objet retourné dans le cas d'un fichier .exe ou .dll**

> La lecture d'un fichier .exe ou .dll est possible uniquement sous Windows.

Toutes les valeurs de propriétés sont de type Texte.

| Propriété        | Type |
| ---------------- | ---- |
| InternalName     | Text |
| ProductName      | Text |
| CompanyName      | Text |
| LegalCopyright   | Text |
| ProductVersion   | Text |
| FileDescription  | Text |
| FileVersion      | Text |
| OriginalFilename | Text |

**Objet retourné dans le cas d'un fichier .plist**

Le contenu du fichier xml est analysé et les clés sont renvoyées en tant que propriétés de l'objet, en préservant leur type (texte, booléen, numérique). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

#### Exemple

```4d
 // display copyright info of application .exe file (windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=$exeFile.getAppInfo()
ALERT($info.LegalCopyright)

  // display copyright info of an info.plist (any platform)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=$infoPlistFile.getAppInfo()
ALERT($info.Copyright)
```

#### Voir également

[.setAppInfo()](#setappinfo)

<!-- END REF -->

<!-- INCLUDE document.getContent().Desc -->

<!-- INCLUDE document.getIcon().Desc -->

<!-- INCLUDE document.getText().Desc -->

<!-- INCLUDE document.hidden.Desc -->

<!-- INCLUDE document.isAlias.Desc -->

<!-- INCLUDE document.isFile.Desc -->

<!-- INCLUDE document.isFolder.Desc -->

<!-- INCLUDE document.isWritable.Desc -->

<!-- INCLUDE document.modificationDate.Desc -->

<!-- INCLUDE document.modificationTime.Desc -->

<!-- REF file.moveTo().Desc -->

## .moveTo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->

<!--REF #FileClass.moveTo().Params -->

| Paramètres         | Type                      |    | Description                    |
| ------------------ | ------------------------- | -- | ------------------------------ |
| dossierDestination | 4D.Folder | -> | Dossier de destination         |
| nouveauNom         | Text                      | -> | Nom complet du fichier déplacé |
| Résultat           | 4D.File   | <- | Fichier déplacé                |

<!-- END REF -->

#### Description

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified _destinationFolder_<!-- END REF -->.

The _destinationFolder_ must exist on disk, otherwise an error is generated.

Par défaut, le fichier garde le même nom lorsqu'il est déplacé. If you want to rename the moved file, pass the new full name in the _newName_ parameter. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Returned object**

The moved `File` object.

#### Exemple

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```

<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

<!-- REF file.open().Desc -->

## .open()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->

| Paramètres | Type                                             |    | Description                                                  |
| ---------- | ------------------------------------------------ | -- | ------------------------------------------------------------ |
| mode       | Text                                             | -> | Mode d'ouverture : "read", "write", "append" |
| options    | Object                                           | -> | Options d'ouverture                                          |
| Résultat   | [4D.FileHandle](FileHandleClass) | <- | Nouvel objet File handle                                     |

<!-- END REF -->

#### Description

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified _mode_ or with the specified _options_<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the _mode_ (text) parameter, pass the opening mode for the file handle:

| _mode_   | Description                                                                                                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "read"   | (Par défaut) Crée un file handle pour lire les valeurs dans le fichier. Si le fichier n'existe pas sur disque, une erreur est renvoyée. Vous pouvez ouvrir autant de file handles que vous voulez en mode "read" sur le même objet File.                    |
| "write"  | Crée un file handle pour écrire des valeurs dans le fichier (en commençant par le début du contenu du fichier). Si le fichier n'existe pas sur le disque, il est créé. Vous ne pouvez ouvrir qu'un seul file handle en mode "write" sur le même objet File. |
| "append" | Crée un file handle pour écrire des valeurs dans le fichier (en commençant par la fin du fichier). Si le fichier n'existe pas sur le disque, il est créé. Vous ne pouvez ouvrir qu'un seul file handle en mode "append" sur le même objet File.             |

> The _mode_ value is case sensitive.

If you use the _options_ (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| _options_         | Type              | Description                                                                                                                                                                             | Par défaut    |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `.mode`           | Text              | Opening mode (see _mode_ above)                                                                                                                                      | "read"        |
| `.charset`        | Text              | Jeu de caractères utilisé lors de la lecture ou de l'écriture dans le fichier. Utilisez le nom standard du jeu (par exemple "ISO-8859-1" ou "UTF-8") | "UTF-8"       |
| `.breakModeRead`  | Text ou numérique | Mode de traitement des sauts de ligne utilisés lors de la lecture du fichier (voir ci-dessous)                                                                       | "native" ou 1 |
| `.breakModeWrite` | Text ou numérique | Mode de traitement des sauts de ligne utilisés lors de l'écriture dans le fichier (voir ci-dessous)                                                                  | "native" ou 1 |

La fonction remplace tous les délimiteurs de fin de ligne d'origine. Par défaut, le délimiteur natif est utilisé, mais vous pouvez définir un autre délimiteur. The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. Vous pouvez utiliser l'une des valeurs suivantes (texte ou numérique) :

| Mode de rupture en texte | Break mode en numérique (constante) | Description                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                 | 1 (`Document with native format`)   | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : LF (line feed) sous macOS, CRLF (carriage return + line feed) sous Windows |
| "crlf"                   | 2 (`Document with CRLF`)            | Les fins de ligne sont converties en CRLF (retour chariot + saut de ligne), le format par défaut de Windows                                                                                                                |
| "cr"                     | 3 (`Document with CR`)              | Les fins de ligne sont converties en CR (retour chariot), le format MacOS classique par défaut                                                                                                                             |
| "lf"                     | 4 (`Document with LF`)              | Les fins de ligne sont converties en LF (line feed), le format Unix et macOS par défaut                                                                                                                                    |

> The _break mode as text_ value is case sensitive.

#### Exemple

Vous voulez créer un file handle pour lire le fichier "ReadMe.txt" :

```4d
var $f : 4D.File
var $fhandle : 4D.FileHandle

$f:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
$fhandle:=$f.open("read")

```

<!-- END REF -->

<!-- INCLUDE document.original.Desc -->

<!-- INCLUDE document.parent.Desc -->

<!-- INCLUDE document.path.Desc -->

<!-- INCLUDE document.platformPath.Desc -->

<!-- REF file.rename().Desc -->

## .rename()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->

<!--REF #FileClass.rename().Params -->

| Paramètres | Type                    |    | Description                    |
| ---------- | ----------------------- | -- | ------------------------------ |
| nouveauNom | Text                    | -> | Nouveau nom complet du fichier |
| Résultat   | 4D.File | <- | Fichier renommé                |

<!-- END REF -->

#### Description

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in _newName_ and returns the renamed `File` object<!-- END REF -->.

The _newName_ parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. S'il existe déjà un fichier portant le même nom, une erreur est retournée.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in _newName_, the file will have a name without an extension.

**Returned object**

The renamed `File` object.

#### Exemple

Vous souhaitez que "ReadMe.txt" soit renommé "ReadMe_new.txt" :

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```

<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->

## .setAppInfo()

<details><summary>Historique</summary>

| Release | Modifications              |
| ------- | -------------------------- |
| 20      | Prise en charge de WinIcon |
| 19      | Ajout                      |

</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->

<!--REF #FileClass.setAppInfo().Params -->

| Paramètres | Type   |    | Description                                                                                                                             |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------------------------------------------------- |
| info       | Object | -> | Propriétés à écrire dans le fichier .plist ou la ressource version du fichier .exe/.dll |

<!-- END REF -->

#### Description

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the _info_ properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

La fonction doit être utilisée avec un fichier .exe, .dll ou .plist existant. Si le fichier n'existe pas sur le disque ou n'est pas un fichier .exe, .dll ou .plist valide, la fonction ne fait rien (aucune erreur n'est générée).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

**_info_ parameter object with a .exe or .dll file**

> Ecrire les informations de fichiers .exe ou .dll est possible uniquement sous Windows.

Each valid property set in the _info_ object parameter is written in the version resource of the .exe or .dll file. Les propriétés disponibles sont (toute autre propriété sera ignorée) :

| Propriété        | Type | Commentaire                                                                                                                                             |
| ---------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| InternalName     | Text |                                                                                                                                                         |
| ProductName      | Text |                                                                                                                                                         |
| CompanyName      | Text |                                                                                                                                                         |
| LegalCopyright   | Text |                                                                                                                                                         |
| ProductVersion   | Text |                                                                                                                                                         |
| FileDescription  | Text |                                                                                                                                                         |
| FileVersion      | Text |                                                                                                                                                         |
| OriginalFilename | Text |                                                                                                                                                         |
| WinIcon          | Text | Chemin Posix du fichier .ico. Cette propriété ne s'applique qu'aux fichiers exécutables générés par 4D. |

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. Si vous passez une valeur de type autre que Texte, elle est "stringifiée".

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

**_info_ parameter object with a .plist file**

Each valid property set in the _info_ object parameter is written in the .plist file as a key. Tous les noms de clés sont acceptés. Les types des valeurs sont préservés si possible.

If a key set in the _info_ parameter is already defined in the .plist file, its value is updated while keeping its original type. Les autres clés définies dans le fichier .plist ne sont pas modifiées.

> Pour définir une valeur de type Date, le format à utiliser est chaîne de timestamp json formatée en ISO UTC sans les millisecondes ("2003-02-01T01:02:03Z") comme dans l'éditeur de plist Xcode.

#### Exemple

```4d
  // définir le copyright, la version et l'icône d'un fichier .exe (Windows)
var $exeFile; $iconFile : 4D.File
var $info : Object
$exeFile:=File(Application file ; fk platform path)
$iconFile:=File("/RESOURCES/myApp.ico")
$info:=Nouvel objet
$info.LegalCopyright:="Copyright 4D 2023"
$info.ProductVersion:="1.0.0"
$info.WinIcon:=$iconFile.path
$exeFile.setAppInfo($info)
```

```4d
  // définir certaines clés dans un fichier info.plist (toutes plateformes)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=Nouvel objet
$info.Copyright:="Copyright 4D 2023" //text
$info.ProductVersion:=12 //integer .ShipmentDate:="2023-04-22T06:00:00Z" //timestamp .ProductVersion:=12 //integer
$info.ShipmentDate:="2023-04-22T06:00:00Z" //timestamp
$info.CFBundleIconFile:="myApp.icns" //pour macOS
$infoPlistFile.setAppInfo($info)
```

#### Voir également

[.getAppInfo()](#getappinfo)

<!-- REF file.setContent().Desc -->

## .setContent()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->

<!--REF #FileClass.setContent().Params -->

| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| content    | BLOB | -> | Nouveau contenu du fichier |

<!-- END REF -->

#### Description

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the _content_ BLOB<!-- END REF -->. For information on BLOBs, please refer to the [BLOB](Concepts/dt_blob.md) section.

#### Exemple

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```

<!-- END REF -->

<!-- REF file.setText().Desc -->

## .setText()

<details><summary>Historique</summary>

| Release | Modifications                                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------------- |
| 19 R3   | Par défaut pour les nouveaux projets : pas de BOM et (macOS) LF comme saut de ligne |
| 17 R5   | Ajout                                                                                                                  |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->

<!--REF #FileClass.setText().Params -->

| Paramètres  | Type    |    | Description                               |
| ----------- | ------- | -- | ----------------------------------------- |
| text        | Text    | -> | Texte à stocker dans le fichier           |
| charSetName | Text    | -> | Nom du jeu de caractères                  |
| charSetNum  | Integer | -> | Numéro du jeu de caractères               |
| breakMode   | Integer | -> | Mode de traitement des retours à la ligne |

<!-- END REF -->

#### Description

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes _text_ as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. Lorsque le fichier existe déjà sur disque, son contenu antérieur est supprimé, sauf s'il est déjà ouvert, auquel cas son contenu est verrouillé et une erreur est générée.

In _text_, pass the text to write to the file. Cela peut être un texte littéral ("my text"), ou un champ / variable texte 4D.

Optionnellement, vous pouvez indiquer le jeu de caractères à utiliser pour l'écriture du contenu. Vous pouvez passer soit :

- in _charSetName_, a string containing the standard set name (for example "ISO-8859-1" or "UTF-8"),
- or in _charSetNum_, the MIBEnum ID (number) of the standard set name.

> For the list of character sets supported by 4D, refer to the description of the `CONVERT FROM TEXT` command.

Si une marque d'ordre d'octet (BOM) existe pour le jeu de caractères, 4D l'insère dans le fichier, sauf si le jeu de caractères utilisé contient le suffixe "-no-bom" (par exemple "UTF-8-no-bom"). Si vous n'indiquez pas un jeu de caractères, 4D utilise par défaut le jeu de caractères "UTF-8" sans BOM.

In _breakMode_, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| Constante                     | Valeur | Commentaire                                                                                                                                                                                                                                   |
| ----------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0      | Aucun traitement                                                                                                                                                                                                                              |
| `Document with native format` | 1      | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : LF (line feed) sous macOS, CRLF (carriage return + line feed) sous Windows |
| `Document with CRLF`          | 2      | Les fins de ligne sont converties en CRLF (retour chariot + saut de ligne), le format par défaut de Windows                                                                                                                |
| `Document with CR`            | 3      | Les fins de ligne sont converties en CR (retour chariot), le format MacOS classique par défaut                                                                                                                             |
| `Document with LF`            | 4      | Les fins de ligne sont converties en LF (line feed), le format Unix et macOS par défaut                                                                                                                                    |

By default, when you omit the _breakMode_ parameter, line breaks are processed in native mode (1).

> **Compatibility Note**: Compatibility options are available for EOL and BOM management. See [Compatibility page](https://doc.4d.com/4dv19R/help/title/en/page3239.html) on doc.4d.com.

#### Exemple

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
