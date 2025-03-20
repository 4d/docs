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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |

</details>

<!-- REF #_command_.File.Syntax -->**File** ( *path* : Text { ; *pathType* : Integer }{ ; \* } ) : 4D.File<br/>**File** ( *fileConstant* : Integer { ; \* } ) : 4D.File<!-- END REF -->


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

**File ( path { ; pathType } { ; \* })**

Dans le paramètre *path*, passez un chemin de fichier. Vous pouvez utiliser une chaine personnalisée ou un "filesystem" (ex : "/DATA/myfile.txt").

> Seuls les noms de chemin absolus sont pris en charge par la commande `File`.

Par défaut, 4D attend un chemin exprimé avec la syntaxe POSIX. Si vous travaillez avec des chemins de plate-forme (Windows ou macOS), vous devez les déclarer à l'aide du paramètre *pathType*. Les constantes suivantes sont disponibles :

| Constante        | Valeur | Commentaire                                                                                               |
| ---------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| fk platform path | 1      | Chemin exprimé dans une syntaxe spécifique à la plate-forme (obligatoire en cas de chemin de plate-forme) |
| fk posix path    | 0      | Chemin exprimé avec la syntaxe POSIX (par défaut)                                                         |

**File ( fileConstant { ; \* } )**

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

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |
</details>

<!-- REF #4D.File.new().Syntax -->
**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### Description

La fonction `4D.File.new()` <!-- REF #4D.File.new().Summary -->crée et renvoie un nouvel objet du type `4D.File`<!-- END REF -->. Elle est identique à la commande [`File`](#file) (raccourci).

> Il est recommandé d'utiliser la commande raccourci [`File`](#file) au lieu de `4D.File.new()`.

<!-- INCLUDE document.copyTo().Desc -->

<!-- REF file.create().Desc -->
## .create()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |
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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |
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

La fonction `.createAlias()` <!-- REF #FileClass.createAlias().Summary -->crée un alias (macOS) ou un raccourci (Windows)<!-- END REF --> pour le fichier nommé *aliasName* dans le dossier désigné par l'objet *destinationFolder *.

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

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |
</details>

<!--REF #FileClass.delete().Syntax -->**.delete( )**<!-- END REF -->


<!-- REF #FileClass.delete().Params -->

| Paramètres | Type |  | Description                                            |
| ---------- | ---- |  | ------------------------------------------------------ |
|            |      |  | Ne requiert aucun paramètre|<!-- END REF -->

|

#### Description

La fonction `delete()` <!-- REF #FileClass.delete().Summary -->supprime le fichier<!-- END REF -->.

Si le fichier n'existe pas sur le disque, la fonction ne fait rien (aucune erreur n'est générée).

Si le fichier est actuellement ouvert, le résultat dépend du système d'exploitation :

- sous Windows, une erreur est générée,
- sous macOS, aucune erreur n'est générée et le fichier est supprimé.

:::caution

`.delete()` peut supprimer n'importe quel fichier sur un disque. Cela inclut les documents créés avec d'autres applications, ainsi que les applications elles-mêmes. `.delete()` doit être utilisé avec prudence. La suppression d'un fichier est une opération permanente et irréversible.

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
| Paramètres | Type   |    | Description                                                                        |
| ---------- | ------ | -- | ---------------------------------------------------------------------------------- |
| Résultat   | Object | <- | Contenu du fichier version resource .exe/.dll ou .plist|<!-- END REF -->

|

#### Description

La fonction `.getAppInfo()` <!-- REF #FileClass.getAppInfo().Summary -->renvoie le contenu d'un fichier d'information **.exe**, **.dll** ou **.plist** sous la forme d'un objet<!-- END REF -->.

La fonction doit être utilisée avec un fichier .exe, .dll ou .plist existant. Si le fichier n'existe pas sur le disque ou n'est pas un fichier .exe, .dll ou .plist valide, la fonction renvoie un objet vide (aucune erreur n'est générée).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

**Objet retourné dans le cas d'un fichier .exe ou .dll**

> La lecture d'un fichier .exe ou .dll est possible uniquement sous Windows.

Toutes les valeurs de propriétés sont de type Texte.

| Propriété    | Type |
| ------------ | ---- |
| InternalName | Text |
| ProductName  | Text |

|CompanyName|Text| |LegalCopyright|Text| |ProductVersion|Text| |FileDescription|Text| |FileVersion|Text| |OriginalFilename|Text|

**Objet retourné dans le cas d'un fichier .plist**

Le contenu du fichier xml est analysé et les clés sont renvoyées en tant que propriétés de l'objet, en préservant leur type (texte, booléen, numérique). `.plist dict` est renvoyé sous forme d'objet JSON et `.plist array` est renvoyé sous forme de tableau JSON.

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
| Paramètres         | Type      |    | Description                                |
| ------------------ | --------- | -- | ------------------------------------------ |
| dossierDestination | 4D.Folder | -> | Dossier de destination                     |
| nouveauNom         | Text      | -> | Nom complet du fichier déplacé             |
| Résultat           | 4D.File   | <- | Fichier déplacé|<!-- END REF -->


|


#### Description

La fonction `.moveTo()` <!-- REF #FileClass.moveTo().Summary -->déplace ou renomme l'objet `File` dans le *destinationFolder* spécifié<!-- END REF -->.

Le *destinationFolder* doit exister sur disque, sinon une erreur est générée.

Par défaut, le fichier garde le même nom lorsqu'il est déplacé. Si vous souhaitez renommer le fichier déplacé, passez le nom complet dans le paramètre *newName*. Le nouveau nom doit être conforme aux règles de nommage (ex : il ne doit pas contenir de caractères tels que ":", "/", etc.), sinon une erreur est retournée.

**Objet retourné**

L'objet `File` déplacé.

#### Exemple

```4d
$DocFolder:=Folder(fk documents folder)
$myFile:=$DocFolder.file("Current/Infos.txt")
$myFile.moveTo($DocFolder.folder("Archives");"Infos_old.txt")
```
<!-- END REF -->

<!-- INCLUDE document.name.Desc -->

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
| Paramètres | Type    |    | Description                                |
| ---------- | ------- | -- | ------------------------------------------ |
| nouveauNom | Text    | -> | Nouveau nom complet du fichier             |
| Résultat   | 4D.File | <- | Fichier renommé|<!-- END REF -->

|

#### Description

La fonction `.rename()` <!-- REF #FileClass.rename().Summary -->renomme le fichier avec le nom que vous avez passé dans *newName* et renvoie l'objet `File` renommé<!-- END REF -->.

Le paramètre *newName* doit être conforme aux règles de nommage (ex : il ne doit pas contenir des caractères tels que ":", "/", etc.), sinon une erreur est retournée. S'il existe déjà un fichier portant le même nom, une erreur est retournée.

A noter que la fonction modifie le nom complet du fichier, c'est-à-dire que si vous ne passez pas une extension dans le paramètre *newName*, le fichier aura un nom sans extension.

**Objet retourné**

L'objet `File` renommé.

#### Exemple

Vous souhaitez que "ReadMe.txt" soit renommé "ReadMe_new.txt" :

```4d
 $toRename:=File("C:\\Documents\\Archives\\ReadMe.txt";fk platform path)
 $newName:=$toRename.rename($toRename.name+"_new"+$toRename.extension)
```
<!-- END REF -->

## .setAppInfo()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19      | Ajout         |
</details>

<!--REF #FileClass.setAppInfo().Syntax -->**.setAppInfo**( *info* : Object )<!-- END REF -->


<!--REF #FileClass.setAppInfo().Params -->
| Paramètres | Type   |    | Description                                                                                                        |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------ |
| info       | Object | -> | Propriétés à écrire dans le fichier .plist ou la ressource version du fichier .exe/.dll|<!-- END REF -->

|

#### Description

La fonction `.setAppInfo()` <!-- REF #FileClass.setAppInfo().Summary -->écrit les propriétés de *info* comme contenu d'information d'un fichier **.exe**, **.dll** ou **.plist**<!-- END REF -->.

La fonction doit être utilisée avec un fichier .exe, .dll ou .plist existant. Si le fichier n'existe pas sur le disque ou n'est pas un fichier .exe, .dll ou .plist valide, la fonction ne fait rien (aucune erreur n'est générée).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

**Paramètre *info* avec un fichier .exe or .dll**

> La modification des informations d'un fichier .exe ou .dll n'est possible que sous Windows.

Chaque propriété valide définie dans le paramètre objet *info* est écrite dans la ressource de version du fichier .exe ou .dll. Les propriétés disponibles sont (toute autre propriété sera ignorée) :

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

Si vous passez null ou un texte vide comme valeur, une chaîne vide est écrite dans la propriété. Si vous passez une valeur de type autre que Texte, elle est "stringifiée".

**Paramètre *info* avec un fichier .plist**

Chaque propriété valide définie dans le paramètre objet *info* est écrite dans le fichier . plist sous forme de clé. Tous les noms de clés sont acceptés. Les types des valeurs sont préservés si possible.

Si une clé définie dans le paramètre *info* est déjà définie dans le fichier .plist, sa valeur est mise à jour tout en conservant son type d'origine. Les autres clés définies dans le fichier .plist ne sont pas modifiées.

> Pour définir une valeur de type Date, le format à utiliser est chaîne de timestamp json formatée en ISO UTC sans les millisecondes ("2003-02-01T01:02:03Z") comme dans l'éditeur de plist Xcode.

#### Exemple

```4d
  // définir copyright et version d'un fichier.exe (Windows)
var $exeFile : 4D.File
var $info : Object
$exeFile:=File(Application file; fk platform path)
$info:=New object
$info.LegalCopyright:="Copyright 4D 2021"
$info.ProductVersion:="1.0.0"
$exeFile.setAppInfo($info)
```

```4d
  // définir des clés dans un fichier info.plist (toutes plates-formes)
var $infoPlistFile : 4D.File
var $info : Object
$infoPlistFile:=File("/RESOURCES/info.plist")
$info:=New object
$info.Copyright:="Copyright 4D 2021" //text
$info.ProductVersion:=12 //integer
$info.ShipmentDate:="2021-04-22T06:00:00Z" //timestamp
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
| Paramètres | Type |    | Description                                           |
| ---------- | ---- | -- | ----------------------------------------------------- |
| content    | BLOB | -> | Nouveau contenu du fichier|<!-- END REF -->


|


#### Description

La fonction `.setContent()` <!-- REF #FileClass.setContent().Summary -->réécrit le contenu intégral du fichier à l'aide des données stockées dans le BLOB *content*<!-- END REF -->. Pour plus d'informations sur les BLOBs, veuillez vous reporter à la section [BLOB](Concepts/dt_blob.md).

#### Exemple

```4d
 $myFile:=Folder(fk documents folder).file("Archives/data.txt")
 $myFile.setContent([aTable]aBlobField)
```
<!-- END REF -->

<!-- REF file.setText().Desc -->
## .setText()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 17 R5   | Ajout         |
</details>

<!--REF #FileClass.setText().Syntax -->**.setText** ( *text* : Text {; *charSetName* : Text { ; *breakMode* : Integer } } )<br/>**.setText** ( *text* : Text {; *charSetNum* : Integer { ; *breakMode* : Integer } } )<!-- END REF -->


<!--REF #FileClass.setText().Params -->
| Paramètres  | Type    |    | Description                                                          |
| ----------- | ------- | -- | -------------------------------------------------------------------- |
| text        | Text    | -> | Texte à stocker dans le fichier                                      |
| charSetName | Text    | -> | Nom du jeu de caractères                                             |
| charSetNum  | Integer | -> | Numéro du jeu de caractères                                          |
| breakMode   | Integer | -> | Mode de traitement des retours à la ligne|<!-- END REF -->


|


#### Description

La fonction `.setText()` <!-- REF #FileClass.setText().Summary -->écrit *text* comme nouveau contenu du fichier<!-- END REF -->.

Si le fichier référencé dans l'objet `File` n'existe pas sur disque, il est créé par la fonction. Lorsque le fichier existe déjà sur disque, son contenu antérieur est supprimé, sauf s'il est déjà ouvert, auquel cas son contenu est verrouillé et une erreur est générée.

Dans le paramètre *text*, passez le texte à écrire dans le fichier. Cela peut être un texte littéral ("my text"), ou un champ / variable texte 4D.

Optionnellement, vous pouvez indiquer le jeu de caractères à utiliser pour l'écriture du contenu. Vous pouvez passer soit :

* dans *charSetName*, une chaîne contenant le nom de jeu standard (par exemple "ISO-8859-1" ou ""UTF-8"),
* ou dans *charSetNum*, l'ID MIBEnum (numéro) du nom du jeu standard.

> Pour consulter la liste des jeux de caractères pris en charge par 4D, veuillez vous reporter à la description de la commande `CONVERT FROM TEXT`.

Si un BOM (Byte Order Mark) existe pour le jeu de caractères, 4D l'insère dans le fichier. Si vous n'indiquez pas de jeu de caractères, 4D utilise par défaut le jeu de caractères "UTF-8" et un BOM.

Dans le paramètre *breakMode*, vous pouvez passer une valeur numérique indiquant le traitement à appliquer aux caractères de fin de ligne avant de les stocker dans le fichier. Les constantes suivantes du thème **Documents système** sont disponibles :

| Constante                     | Valeur | Commentaire                                                                                                                                                          |
| ----------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0      | Aucun traitement                                                                                                                                                     |
| `Document with native format` | 1      | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : LF (line feed) sous macOS, CRLF (carriage return + line feed) sous Windows |
| `Document with CRLF`          | 2      | Les fins de ligne sont converties en CRLF (retour chariot + saut de ligne), le format par défaut de Windows                                                          |
| `Document with CR`            | 3      | Les fins de ligne sont converties en CR (retour chariot), le format MacOS classique par défaut                                                                       |
| `Document with LF`            | 4      | Les fins de ligne sont converties en LF (line feed), le format Unix et macOS par défaut                                                                              |

Par défaut, lorsque vous omettez le paramètre *breakMode* les retours à la ligne sont traités en mode natif (1).

#### Exemple

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```
<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
