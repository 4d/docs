---
id: FileClass
title: File
---

Les objets `File` sont créés avec la commande [`File`](#file). Ils contiennent des références à des fichiers du disque qui peuvent exister réellement ou non sur le disque. Par exemple, lorsque vous exécutez la commande `File` pour créer un nouveau fichier, un objet `File` valide est créé mais rien n'est réellement stocké sur le disque jusqu'à ce que vous appeliez la fonction [`file.create( )`](#create).

### Exemple

L'exemple suivant crée un fichier de préférences dans le dossier du projet :

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Chemins d'accès

Les objets de type `File` prennent en charge plusieurs noms de chemin, y compris les syntaxes `filesystems` et `posix`. Les noms de chemin pris en charge sont détaillés dans la page [**Pathnames**](../Concepts/paths.md) .



### Objet File

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.copyTo().Summary -->|
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.create().Summary -->|
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.createAlias().Summary -->|
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationDate.Summary -->|
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.creationTime.Summary -->|
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.delete().Summary -->|
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.exists.Summary -->|
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.extension.Summary -->|
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.fullName.Summary -->|
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.getAppInfo().Summary -->|
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->|
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getIcon().Summary -->|
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.getText().Summary -->|
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.hidden.Summary -->|
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isAlias.Summary -->|
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFile.Summary -->|
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isFolder.Summary -->|
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.isWritable.Summary -->|
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationDate.Summary -->|
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.modificationTime.Summary -->|
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.moveTo().Summary -->|
| [<!-- INCLUDE #document.name.Syntax -->](#name)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.name.Summary -->|
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.open().Summary -->|
| [<!-- INCLUDE #document.original.Syntax -->](#original)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.original.Summary -->|
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.parent.Summary -->|
| [<!-- INCLUDE #document.path.Syntax -->](#path)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.path.Summary -->|
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.platformPath.Summary -->|
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.rename().Summary -->|
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setAppInfo().Summary -->|
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setContent().Summary -->|
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #FileClass.setText().Summary -->|
| [<!-- INCLUDE #document.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #document.size.Summary -->|

## File

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->


<!-- REF #_command_.File.Params -->
| Paramètres   | Type    |    | Description                                        |
| ------------ | ------- |:--:| -------------------------------------------------- |
| path         | Text    | -> | Chemin de fichier                                  |
| fileConstant | Integer | -> | Constante de fichier 4D                            |
| pathType     | Integer | -> | `fk posix path` (par défaut) ou `fk platform path` |
| *            |         | -> | * pour retourner le fichier de la base hôte        |
| Résultat     | 4D.File | <- | Nouvel objet fichier|<!-- END REF -->

|

#### Description

La commande `File` <!-- REF #_command_.File.Summary -->crée et renvoie un nouvel objet du type `4D.File`<!-- END REF -->. La commande accepte deux syntaxes :

**File ( path { ; pathType } { ; * })**

Dans le paramètre *path*, passez un chemin de fichier. Vous pouvez utiliser une chaine personnalisée ou un "filesystem" (ex : "/DATA/myfile.txt").

> Seuls les noms de chemin absolus sont pris en charge par la commande `File`.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les déclarer à l'aide du paramètre *pathType*. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                               |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**File ( fileConstant { ; * } )**

Dans le paramètre *fileConstant*, passez un fichier 4D interne ou un fichier système, à l'aide d'une des constantes suivantes :

| Constante                         | Valeur | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backup history file               | 19     | Fichier d'historique des sauvegardes (voir Fichiers de configuration et de suivi). Stocké dans le dossier de destination de sauvegarde.                                                                                                                                                                                                                                                                                                                                         |
| Backup log file                   | 13     | Fichier journal des sauvegardes courant. Stocké dans le dossier Logs de l'application.                                                                                                                                                                                                                                                                                                                                                                                          |
| Backup settings file              | 1      | Fichier backup.4DSettings par défaut (format xml), stocké dans le dossier Settings du projet                                                                                                                                                                                                                                                                                                                                                                                    |
| Backup settings file for data     | 17     | fichier backup.4DSettings du fichier de données (format xml), stocké dans le dossier Settings du dossier data                                                                                                                                                                                                                                                                                                                                                                   |
| Build application log file        | 14     | Fichier d'historique courant au format xml du générateur d'application. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                            |
| Build application settings file   | 20     | Fichier de configuration par défaut du générateur d'application ("buildApp.4DSettings"). Stocké dans le dossier Settings du projet.                                                                                                                                                                                                                                                                                                                                             |
| Compacting log file               | 6      | Fichier d'historique du compactage le plus récent de la base, effectué avec la commande Compact data file ou le Centre de sécurité et de maintenance (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                        |
| Current backup settings file      | 18     | fichier backup.4DSettings utilisé actuellement par l'application. Il peut s'agir du fichier backup.4DSettings par défaut ou d'un fichier de settings de backup utilisateur défini pour le fichier de données                                                                                                                                                                                                                                                                    |
| Debug log file                    | 12     | Fichier d'enregistrement des événements pour le débogage créé par la commande `SET DATABASE PARAMETER(Debug log recording)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                       |
| Diagnostic log file               | 11     | Fichier de diagnostic de 4D, créé par la commande `SET DATABASE PARAMETER(Diagnostic log recording)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                              |
| Directory file                    | 16     | fichier directory.json, contenant la description des groupes et utilisateurs (le cas échéant) du projet. Il se situe soit dans le dossier Settings de l'utilisateur (par défaut, s'applique à tout le projet), soit dans le dossier Settings du data (spécifique à un fichier de données).                                                                                                                                                                                      |
| HTTP debug log file               | 9      | Fichier d'enregistrement des requêtes Web créé par la commande `WEB SET OPTION(Web log recording)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                |
| HTTP log file                     | 8      | Fichier de débogage des requêtes HTTP, créé par la commande `WEB SET OPTION(Web debug log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                       |
| IMAP Log file                     | 23     | Fichier d'historique créé par la commande `SET DATABASE PARAMETER(IMAP Log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                      |
| Last backup file                  | 2      | Dernier fichier de sauvegarde généré, nommé `\<applicationName>[bkpNum].4BK`, stocké à un emplacement personnalisé.                                                                                                                                                                                                                                                                                                                                                      |
| Last journal integration log file | 22     | Chemin complet du dernier fichier journal d'intégration de l'historique (stocké dans le dossier Logs de l'application restaurée), le cas échéant. Ce fichier est créé en mode auto-repair, dès qu'une intégration de fichier d'historique a lieu                                                                                                                                                                                                                                |
| Repair log file                   | 7      | Fichier d'historique des réparations effectuées sur la base par le Centre de sécurité et de maintenance (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                     |
| Request log file                  | 10     | Fichier des requêtes client/server standard (hors requêtes Web), créé par `SET DATABASE PARAMETER(4D Server log recording)` ou `SET DATABASE PARAMETER(Client log recording)`. Si la commande est appelée sur le serveur, le chemin du fichier des requêtes du serveur est retourné (stocké dans le dossier Logs du serveur). Si la commande est appelée sur un client, le chemin du fichier des requêtes du client est retourné (stocké dans le dossier Logs local du client). |
| SMTP log file                     | 15     | Fichier des requêtes SMTP créé par la commande `SET DATABASE PARAMETER(SMTP Log)`. Stocké dans le dossier Logs.                                                                                                                                                                                                                                                                                                                                                                 |
| User settings file                | 3      | Fichier settings.4DSettings pour tous les fichiers de données (si activé), stocké dans le dossier Preferences à côté du fichier de structure.                                                                                                                                                                                                                                                                                                                                   |
| User settings file for data       | 4      | Fichier settings.4DSettings file pour le fichier de données courant, stocké dans le dossier Preferences à côté du fichier de données.                                                                                                                                                                                                                                                                                                                                           |
| Verification log file             | 5      | Fichier d'historique de vérification le plus récent de la base, créé par les commandes `VERIFY CURRENT DATA FILE` et `VERIFY DATA FILE` ou via le Centre de sécurité et de maintenance de la base (CSM). Stocké dans le dossier Logs.                                                                                                                                                                                                                                           |

Si le fichier *fileConstant* cible n'existe pas, un objet null est retourné. Aucune erreur n'est générée.

Si la commande est appelée à partir d'un composant, passez le paramètre optionnel `*` pour lire le chemin de la base hôte. Sinon, si vous omettez le paramètre `*`, un objet null est systématiquement retourné.

## 4D.File.new()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R6  | Ajout         |
</details>

<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : Text { ; *pathType* : Integer }{ ; * } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer { ; * } ) : 4D.File<!-- END REF -->

#### Description

La fonction `4D.File.new()` <!-- REF #4D.File.new().Summary -->crée et renvoie un nouvel objet du type `4D.File`<!-- END REF -->. Elle est identique à la commande [`File`](#file) (raccourci).

> Il est recommandé d'utiliser la commande raccourci [`File`](#file) au lieu de `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF file.create().Note -->
**Non disponible pour les archives ZIP**<!-- END REF -->


<!--REF #FileClass.create().Syntax -->**.create()** : Boolean <!-- END REF -->


<!--REF #FileClass.create().Params -->
| Paramètres | Type    |    | Description                                                                      |
| ---------- | ------- | -- | -------------------------------------------------------------------------------- |
| Résultat   | Boolean | <- | Vrai si le fichier a été créé avec succès, sinon Faux|<!-- END REF -->

|

#### Description

La fonction `.create()` <!-- REF #FileClass.create().Summary -->crée un fichier sur le disque selon les propriétés de l'objet `File`<!-- END REF -->.

Le cas échéant, la fonction crée la hiérarchie du dossier en se basant sur la description des propriétés [platformPath](#platformpath) ou [path](#path). Si le fichier existe déjà sur disque, la fonction ne fait rien (aucune erreur n'est générée) et retourne faux.

**Valeur retournée**

* **Vrai** si le fichier est créé avec succès ;
* **Faux** si un fichier du même nom existe déjà ou si une erreur s'est produite.

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

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FileClass.createAlias().Syntax -->**.createAlias**( *destinationFolder* : 4D.Folder ; *aliasName* : Text { ; *aliasType* : Integer } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.createAlias().Params -->
| Paramètres         | Type      |    | Description                                                                |
| ------------------ | --------- | -- | -------------------------------------------------------------------------- |
| dossierDestination | 4D.Folder | -> | Dossier de destination pour l'alias ou le raccourci                        |
| aliasName          | Text      | -> | Nom de l'alias ou du raccourci                                             |
| aliasType          | Integer   | -> | Type de lien de l'alias                                                    |
| Résultat           | 4D.File   | <- | Référence du fichier de l'alias ou du raccourci|<!-- END REF -->

|

#### Description

La fonction `.createAlias()` <!-- REF #FileClass.createAlias().Summary -->crée un alias (macOS) ou un raccourci (Windows)<!-- END REF --> nommé *aliasName* pour le fichier dans le dossier désigné par l'objet *destinationFolder *.

Passez le nom de l'alias ou du raccourci à créer dans le paramètre *aliasName*.

Par défaut sur macOS, la fonction crée un alias standard. Vous pouvez également créer un lien symbolique à l'aide du paramètre *aliasType*. Les constantes suivantes sont disponibles :

| Constante          | Valeur | Commentaire                               |
| ------------------ | ------ | ----------------------------------------- |
| `fk alias link`    | 0      | Lien alias (macOS uniquement)(par défaut) |
| `fk symbolic link` | 1      | Lien symbolique (macOS uniquement)        |

Sur Windows, un raccourci (fichier .lnk) est toujours créé (le paramètre *aliasType* est ignoré).

**Objet retourné**

Un objet `4D.File` avec la propriété `isAlias` mise à **true**.

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

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->


<!-- REF #FileClass.delete().Params -->

| Paramètres | Type |  | Description                                            |
| ---------- | ---- |  | ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->



|



#### Description

La fonction `delete()` <!-- REF #FileClass.delete().Summary -->deletes the file<!-- END REF -->.

If the file is currently open, an error is generated.

If the file does not exist on disk, the function does nothing (no error is generated).
> **ATTENTION** : `.delete()` peut supprimer n'importe quel fichier sur un disque. Cela inclut les documents créés avec d'autres applications, ainsi que les applications elles-mêmes. `.delete()` doit être utilisé avec prudence. La suppression d'un fichier est une opération permanente et irréversible.

#### Exemple

You want to delete a specific file in the database folder:

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

| Version | Modifications |
| ------- | ------------- |
| v19     | Ajout         |
</details>

<!--REF #FileClass.getAppInfo().Syntax -->**.getAppInfo**() : Object<!-- END REF -->


<!--REF #FileClass.getAppInfo().Params -->
| Paramètres | Type   |    | Description                                                                      |
| ---------- | ------ | -- | -------------------------------------------------------------------------------- |
| Résultat   | Object | <- | Contents of .exe/.dll version resource or .plist file|<!-- END REF -->


|


#### Description

The `.getAppInfo()` function <!-- REF #FileClass.getAppInfo().Summary -->returns the contents of a **.exe**, **.dll** or **.plist** file information as an object<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function returns an empty object (no error is generated).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

**Returned object with a .exe or .dll file**

> La lecture d'un fichier .exe ou .dll est possible uniquement sous Windows.

All property values are Text.

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

**Returned object with a .plist file**

The xml file contents is parsed and keys are returned as properties of the object, preserving their types (text, boolean, number). `.plist dict` is returned as a JSON object and `.plist array` is returned as a JSON array.

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

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FileClass.moveTo().Syntax -->**.moveTo**( *destinationFolder* : 4D.Folder { ; *newName* : Text } ) : 4D.File<!-- END REF -->


<!--REF #FileClass.moveTo().Params -->
| Paramètres         | Type      |    | Description                           |
| ------------------ | --------- | -- | ------------------------------------- |
| dossierDestination | 4D.Folder | -> | Dossier de destination                |
| nouveauNom         | Text      | -> | Full name for the moved file          |
| Résultat           | 4D.File   | <- | Moved file|<!-- END REF -->


|


#### Description

The `.moveTo()` function <!-- REF #FileClass.moveTo().Summary -->moves or renames the `File` object into the specified *destinationFolder*<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

By default, the file retains its name when moved. If you want to rename the moved file, pass the new full name in the *newName* parameter. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Objet retourné**

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

| Version | Modifications |
| ------- | ------------- |
| v19 R7  | Ajout         |
</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->


<!--REF #FileClass.open().Params -->
| Paramètres | Type                             |    | Description                                       |
| ---------- | -------------------------------- | -- | ------------------------------------------------- |
| mode       | Text                             | -> | Opening mode: "read", "write", "append"           |
| options    | Object                           | -> | Opening options                                   |
| Résultat   | [4D.FileHandle](FileHandleClass) | <- | New File handle object|<!-- END REF -->

|

#### Description

The `.open()` function <!-- REF #FileClass.open().Summary -->creates and returns a new [4D.FileHandle](FileHandleClass) object on the file, in the specified *mode* or with the specified *options*<!-- END REF -->. You can use functions and properties of the [4D.FileHandle](FileHandleClass) class to write, read, or append contents to the file.

If you use the *mode* (text) parameter, pass the opening mode for the file handle:



| *mode*   | Description                                                                                                                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "read"   | (Default) Creates a file handle to read values from the file. If the file does not exist on disk, an error is returned. You can open as many file handles as you want in "read" mode on the same File object.                    |
| "write"  | Creates a file handle to write values to the file (starting at the beginning of the file content). If the file does not exist on disk, it is created. You can open only one file handle in "write" mode on the same File object. |
| "append" | Creates a file handle to write values to the file (starting at the end of the file content). If the file does not exist on disk, it is created. You can open only one file handle in "append" mode on the same File object.      |

> La valeur du paramètre *mode* est sensible à la casse.

If you use the *options* (object) parameter, you can pass more options for the file handle through the following properties (these properties can be read afterwards from the opened [file handle object](FileHandleClass)):

| *options*         | Type           | Description                                                                                                                   | Default       |
| ----------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `.mode`           | Text           | Opening mode (see *mode* above)                                                                                               | "read"        |
| `.charset`        | Text           | Charset used when reading from or writing to the file. Use the standard name of the set (for example "ISO-8859-1" or "UTF-8") | "UTF-8"       |
| `.breakModeRead`  | Text or Number | Processing mode for line breaks used when reading in the file (see below)                                                     | "native" or 1 |
| `.breakModeWrite` | Text or Number | Processing mode for line breaks used when writing to the file (see below)                                                     | "native" or 1 |

The `.breakModeRead` and `.breakModeWrite` indicate the processing to apply to end-of-line characters in the document. You can use one of the following values (text or number):

| Break mode as text | Break mode as number (constant)   | Description                                                                                                                                                    |
| ------------------ | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"           | 1 (`Document with native format`) | (Default) Line breaks are converted to the native format of the operating system: LF (line feed) under macOS, CRLF (carriage return + line feed) under Windows |
| "crlf"             | 2 (`Document with CRLF`)          | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format                                                                    |
| "cr"               | 3 (`Document with CR`)            | Line breaks are converted to CR (carriage return), the default Classic Mac OS format                                                                           |
| "lf"               | 4 (`Document with LF`)            | Line breaks are converted to LF (line feed), the default Unix and macOS format                                                                                 |

> La valeur du paramètre *break mode en texte* est sensible à la casse.

#### Exemple

You want to create a file handle for reading the "ReadMe.txt" file:

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

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FileClass.rename().Syntax -->**.rename**( *newName* : Text ) : 4D.File<!-- END REF -->


<!--REF #FileClass.rename().Params -->
| Paramètres | Type    |    | Description                             |
| ---------- | ------- | -- | --------------------------------------- |
| nouveauNom | Text    | -> | New full name for the file              |
| Résultat   | 4D.File | <- | Renamed file|<!-- END REF -->

|

#### Description

The `.rename()` function <!-- REF #FileClass.rename().Summary -->renames the file with the name you passed in *newName* and returns the renamed `File` object<!-- END REF -->.

The *newName* parameter must comply with naming rules (e.g., it must not contain characters such as ":", "/", etc.), otherwise an error is returned. If a file with the same name already exists, an error is returned.

Note that the function modifies the full name of the file, i.e. if you do not pass an extension in *newName*, the file will have a name without an extension.

**Objet retourné**

The renamed `File` object.

#### Exemple

You want to rename "ReadMe.txt" in "ReadMe_new.txt":

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->

<!-- REF file.setAppInfo().Desc -->
## .setAppInfo()

<details><summary>Historique</summary>

| Version | Modifications      |
| ------- | ------------------ |
| v20     | Support of WinIcon |
| v19     | Ajout              |
</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->


<!--REF #FileClass.setAppInfo().Params -->
| Paramètres | Type   |    | Description                                                                                 |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------- |
| info       | Object | -> | Properties to write in .exe/.dll version resource or .plist file|<!-- END REF -->

|

#### Description

The `.setAppInfo()` function <!-- REF #FileClass.setAppInfo().Summary -->writes the *info* properties as information contents of a **.exe**, **.dll** or **.plist** file<!-- END REF -->.

The function must be used with an existing .exe, .dll or .plist file. If the file does not exist on disk or is not a valid .exe, .dll or .plist file, the function does nothing (no error is generated).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

***info* parameter object with a .exe or .dll file**

> Ecrire les informations de fichiers .exe ou .dll est possible uniquement sous Windows.

Each valid property set in the *info* object parameter is written in the version resource of the .exe or .dll file. Available properties are (any other property will be ignored):

| Propriété        | Type | Commentaire                                                                           |
| ---------------- | ---- | ------------------------------------------------------------------------------------- |
| InternalName     | Text |                                                                                       |
| ProductName      | Text |                                                                                       |
| CompanyName      | Text |                                                                                       |
| LegalCopyright   | Text |                                                                                       |
| ProductVersion   | Text |                                                                                       |
| FileDescription  | Text |                                                                                       |
| FileVersion      | Text |                                                                                       |
| OriginalFilename | Text |                                                                                       |
| WinIcon          | Text | Posix path of .ico file. This property applies only to 4D generated executable files. |

For all properties except `WinIcon`, if you pass a null or empty text as value, an empty string is written in the property. If you pass a value type different from text, it is stringified.

For the `WinIcon` property, if the icon file does not exist or has an incorrect format, an error is generated.

***info* parameter object with a .plist file**

Each valid property set in the *info* object parameter is written in the .plist file as a key. Any key name is accepted. Value types are preserved when possible.

If a key set in the *info* parameter is already defined in the .plist file, its value is updated while keeping its original type. Other existing keys in the .plist file are left untouched.

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

| Version | Modifications |
| ------- | ------------- |
| v17 R5  | Ajout         |
</details>

<!--REF #FileClass.setContent().Syntax -->**.setContent** ( *content* : Blob ) <!-- END REF -->


<!--REF #FileClass.setContent().Params -->
| Paramètres | Type |    | Description                                          |
| ---------- | ---- | -- | ---------------------------------------------------- |
| content    | BLOB | -> | New contents for the file|<!-- END REF -->

|

#### Description

The `.setContent( )` function <!-- REF #FileClass.setContent().Summary -->rewrites the entire content of the file using the data stored in the *content* BLOB<!-- END REF -->. Pour plus d'informations sur les BLOBs, veuillez vous reporter à la section [BLOB](Concepts/dt_blob.md).

#### Exemple

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>Historique</summary>

| Version | Modifications                                           |
| ------- | ------------------------------------------------------- |
| v19 R3  | Default for new projects: no BOM and (macOS) LF for EOL |
| v17 R5  | Ajout                                                   |

</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->



<!--REF #FileClass.setText().Params -->
| Paramètres  | Type    |    | Description                                                |
| ----------- | ------- | -- | ---------------------------------------------------------- |
| text        | Text    | -> | Text to store in the file                                  |
| charSetName | Text    | -> | Nom du jeu de caractères                                   |
| charSetNum  | Integer | -> | Numéro du jeu de caractères                                |
| breakMode   | Integer | -> | Processing mode for line breaks|<!-- END REF -->


|


#### Description

The `.setText()` function <!-- REF #FileClass.setText().Summary -->writes *text* as the new contents of the file<!-- END REF -->.

If the file referenced in the `File` object does not exist on the disk, it is created by the function. When the file already exists on the disk, its prior contents are erased, except if it is already open, in which case, its contents are locked and an error is generated.

In *text*, pass the text to write to the file. It can be a literal ("my text"), or a 4D text field or variable.

Optionally, you can designate the character set to be used for writing the contents. Vous pouvez passer soit :

* dans *charSetName*, une chaîne contenant le nom de jeu standard (par exemple "ISO-8859-1" ou "UTF-8"),
* ou dans *charSetNum*, l'ID MIBEnum (numéro) du nom du jeu standard.

> Pour consulter la liste des jeux de caractères pris en charge par 4D, veuillez vous reporter à la description de la commande `CONVERT FROM TEXT`.

If a Byte Order Mark (BOM) exists for the character set, 4D inserts it into the file unless the character set used contains the suffix "-no-bom" (e.g. "UTF-8-no-bom"). If you do not specify a character set, by default 4D uses the "UTF-8" character set without BOM.

In *breakMode*, you can pass a number indicating the processing to apply to end-of-line characters before saving them in the file. The following constants, found in the **System Documents** theme, are available:

| Constante                     | Valeur | Commentaire                                                                                                                                                          |
| ----------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0      | Aucun traitement                                                                                                                                                     |
| `Document with native format` | 1      | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : LF (line feed) sous macOS, CRLF (carriage return + line feed) sous Windows |
| `Document with CRLF`          | 2      | Line breaks are converted to CRLF (carriage return + line feed), the default Windows format                                                                          |
| `Document with CR`            | 3      | Line breaks are converted to CR (carriage return), the default Classic Mac OS format                                                                                 |
| `Document with LF`            | 4      | Line breaks are converted to LF (line feed), the default Unix and macOS format                                                                                       |

Par défaut, lorsque vous omettez le paramètre *breakMode* les retours à la ligne sont traités en mode natif (1).

> **Note de compatibilité** : Des options de compatibilité sont disponibles pour la gestion des fins de ligne et des BOM. Voir la [page Compatibilité](https://doc.4d.com/4dv19R/help/title/en/page3239.html) sur doc.4d.com.

#### Exemple

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
