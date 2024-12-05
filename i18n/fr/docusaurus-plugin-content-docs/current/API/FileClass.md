---
id: FileClass
title: File
---

Les objets `File` sont créés avec la commande [`File`](../commands/file.md). Ils contiennent des références à des fichiers du disque qui peuvent exister réellement ou non sur le disque. Par exemple, lorsque vous exécutez la commande `File` pour créer un nouveau fichier, un objet `File` valide est créé mais rien n'est réellement stocké sur le disque jusqu'à ce que vous appeliez la fonction [`file.create( )`](#create).

### Exemple

L'exemple suivant crée un fichier de préférences dans le dossier du projet :

```code4d
var $created : Boolean
$created:=File("/PACKAGE/SpecialPrefs/"+Current user+".myPrefs").create()
```

### Chemins d'accès

Les objets de type `File` prennent en charge plusieurs noms de chemin, y compris les syntaxes `filesystems` et `posix`. Les chemins d'accès pris en charge sont détaillés dans la page [**Chemins d'accès**](../Concepts/paths.md).

### Objet File

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #document.copyTo().Syntax -->](#copyto)<br/><!-- INCLUDE #document.copyTo().Summary -->                           |
| [<!-- INCLUDE #FileClass.create().Syntax -->](#create)<br/><!-- INCLUDE #FileClass.create().Summary -->                         |
| [<!-- INCLUDE #FileClass.createAlias().Syntax -->](#createalias)<br/><!-- INCLUDE #FileClass.createAlias().Summary -->          |
| [<!-- INCLUDE #document.creationDate.Syntax -->](#creationdate)<br/><!-- INCLUDE #document.creationDate.Summary -->             |
| [<!-- INCLUDE #document.creationTime.Syntax -->](#creationtime)<br/><!-- INCLUDE #document.creationTime.Summary -->             |
| [<!-- INCLUDE #FileClass.delete().Syntax -->](#delete)<br/><!-- INCLUDE #FileClass.delete().Summary -->                         |
| [<!-- INCLUDE #document.exists.Syntax -->](#exists)<br/><!-- INCLUDE #document.exists.Summary -->                               |
| [<!-- INCLUDE #document.extension.Syntax -->](#extension)<br/><!-- INCLUDE #document.extension.Summary -->                      |
| [<!-- INCLUDE #document.fullName.Syntax -->](#fullname)<br/><!-- INCLUDE #document.fullName.Summary -->                         |
| [<!-- INCLUDE #FileClass.getAppInfo().Syntax -->](#getappinfo)<br/><!-- INCLUDE #FileClass.getAppInfo().Summary -->             |
| [<!-- INCLUDE #document.getContent().Syntax -->](#getcontent)<!-- INCLUDE #document.getContent().Summary -->                    |
| [<!-- INCLUDE #document.getIcon().Syntax -->](#geticon)<br/><!-- INCLUDE #document.getIcon().Summary -->                        |
| [<!-- INCLUDE #document.getText().Syntax -->](#gettext)<br/><!-- INCLUDE #document.getText().Summary -->                        |
| [<!-- INCLUDE #document.hidden.Syntax -->](#hidden)<br/><!-- INCLUDE #document.hidden.Summary -->                               |
| [<!-- INCLUDE #document.isAlias.Syntax -->](#isalias)<br/><!-- INCLUDE #document.isAlias.Summary -->                            |
| [<!-- INCLUDE #document.isFile.Syntax -->](#isfile)<br/><!-- INCLUDE #document.isFile.Summary -->                               |
| [<!-- INCLUDE #document.isFolder.Syntax -->](#isfolder)<br/><!-- INCLUDE #document.isFolder.Summary -->                         |
| [<!-- INCLUDE #document.isWritable.Syntax -->](#iswritable)<br/><!-- INCLUDE #document.isWritable.Summary -->                   |
| [<!-- INCLUDE #document.modificationDate.Syntax -->](#modificationdate)<br/><!-- INCLUDE #document.modificationDate.Summary --> |
| [<!-- INCLUDE #document.modificationTime.Syntax -->](#modificationtime)<br/><!-- INCLUDE #document.modificationTime.Summary --> |
| [<!-- INCLUDE #FileClass.moveTo().Syntax -->](#moveto)<br/><!-- INCLUDE #FileClass.moveTo().Summary -->                         |
| [<!-- INCLUDE #document.name.Syntax -->](#name)<br/><!-- INCLUDE #document.name.Summary -->                                     |
| [<!-- INCLUDE #FileClass.open().Syntax -->](#open)<br/><!-- INCLUDE #FileClass.open().Summary -->                               |
| [<!-- INCLUDE #document.original.Syntax -->](#original)<br/><!-- INCLUDE #document.original.Summary -->                         |
| [<!-- INCLUDE #document.parent.Syntax -->](#parent)<br/><!-- INCLUDE #document.parent.Summary -->                               |
| [<!-- INCLUDE #document.path.Syntax -->](#path)<br/><!-- INCLUDE #document.path.Summary -->                                     |
| [<!-- INCLUDE #document.platformPath.Syntax -->](#platformpath)<br/><!-- INCLUDE #document.platformPath.Summary -->             |
| [<!-- INCLUDE #FileClass.rename().Syntax -->](#rename)<br/><!-- INCLUDE #FileClass.rename().Summary -->                         |
| [<!-- INCLUDE #FileClass.setAppInfo().Syntax -->](#setappinfo)<br/><!-- INCLUDE #FileClass.setAppInfo().Summary -->             |
| [<!-- INCLUDE #FileClass.setContent().Syntax -->](#setcontent)<br/><!-- INCLUDE #FileClass.setContent().Summary -->             |
| [<!-- INCLUDE #FileClass.setText().Syntax -->](#settext)<br/><!-- INCLUDE #FileClass.setText().Summary -->                      |
| [<!-- INCLUDE #document.size.Syntax -->](#size)<br/><!-- INCLUDE #document.size.Summary -->                                     |

## 4D.File.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R6   | Ajout         |

</details>

<!-- REF #4D.File.new().Syntax -->

**4D.File.new** ( *path* : Text { ; *pathType* : Integer } ) : 4D.File<br/>**4D.File.new** ( *fileConstant* : Integer ) : 4D.File<!-- END REF -->

#### Description

La fonction `4D.File.new()` <!-- REF #4D.File.new().Summary -->crée et retourne un nouvel objet de type `4D.File`<!-- END REF -->. Elle est identique à la commande [`File`](../commands/file.md) (raccourci).

> Il est recommandé d'utiliser la commande [`File`](../commande/file.md) au lieu de `4D.File.new()`.

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

| Paramètres | Type    |                             | Description                                           |
| ---------- | ------- | --------------------------- | ----------------------------------------------------- |
| Résultat   | Boolean | <- | Vrai si le fichier a été créé avec succès, sinon Faux |

<!-- END REF -->

#### Description

La fonction `.create()` <!-- REF #FileClass.create().Summary -->crée un fichier sur disque en fonction des propriétés de l'objet `File`<!-- END REF -->.

Le cas échéant, la fonction crée la hiérarchie du dossier en se basant sur la description des propriétés [platformPath](#platformpath) ou [path](#path). Si le fichier existe déjà sur disque, la fonction ne fait rien (aucune erreur n'est générée) et retourne faux.

**Valeur retournée**

- **Vrai** si le fichier est créé avec succès ;
- **Faux** si un fichier du même nom existe déjà ou si une erreur s'est produite.

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

| Paramètres         | Type                      |                             | Description                                         |
| ------------------ | ------------------------- | --------------------------- | --------------------------------------------------- |
| dossierDestination | 4D.Folder | ->                          | Dossier de destination pour l'alias ou le raccourci |
| aliasName          | Text                      | ->                          | Nom de l'alias ou du raccourci                      |
| aliasType          | Integer                   | ->                          | Type de lien de l'alias                             |
| Résultat           | 4D.File   | <- | Référence du fichier de l'alias ou du raccourci     |

<!-- END REF -->

#### Description

La fonction `.createAlias()` <!-- REF #FileClass.createAlias().Summary -->crée un alias (macOS) ou un raccourci (Windows)<!-- END REF --> vers le fichier avec le nom *aliasName* spécifié dans le dossier désigné par l'objet *destinationFolder*.

Passez le nom de l'alias ou du raccourci à créer dans le paramètre *aliasName*.

Par défaut sur macOS, la fonction crée un alias standard. Vous pouvez également créer un lien symbolique à l'aide du paramètre *aliasType*. Les constantes suivantes sont disponibles :

| Constante          | Valeur | Commentaire                                                                     |
| ------------------ | ------ | ------------------------------------------------------------------------------- |
| `fk alias link`    | 0      | Lien alias (macOS uniquement)(par défaut) |
| `fk symbolic link` | 1      | Lien symbolique (macOS uniquement)                           |

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

<!--REF #FileClass.delete().Syntax -->**.delete**()<!-- END REF -->

<!-- REF #FileClass.delete().Params -->

| Paramètres | Type |     | Description                 |
| ---------- | ---- | :-: | --------------------------- |
|            |      |     | Ne requiert aucun paramètre |

<!-- END REF -->

#### Description

La fonction `.delete()` <!-- REF #FileClass.delete().Summary -->supprime le fichier<!-- END REF -->.

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

| Paramètres | Type   |                             | Description                                                                                                 |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Résultat   | Object | <- | Contenu du fichier de ressource version .exe/.dll ou .plist |

<!-- END REF -->

#### Description

La fonction `.getAppInfo()` <!-- REF #FileClass.getAppInfo().Summary -->retourne le contenu d'un fichier d'information **.exe**, **.dll** ou **.plist** sous forme d'objet<!-- END REF -->.

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

| Paramètres         | Type                      |                             | Description                    |
| ------------------ | ------------------------- | --------------------------- | ------------------------------ |
| dossierDestination | 4D.Folder | ->                          | Dossier de destination         |
| nouveauNom         | Text                      | ->                          | Nom complet du fichier déplacé |
| Résultat           | 4D.File   | <- | Fichier déplacé                |

<!-- END REF -->

#### Description

La fonction `.moveTo()` <!-- REF #FileClass.moveTo().Summary -->déplace ou déplace et renomme l'objet `File` dans le dossier *destinationFolder* spécifié<!-- END REF -->.

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

<!-- REF file.open().Desc -->

## .open()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R7   | Ajout         |

</details>

<!--REF #FileClass.open().Syntax -->**.open**( { *mode* : Text } ) : 4D.FileHandle<br/>**.open**( { *options* : Object } ) : 4D.FileHandle<!-- END REF -->

<!--REF #FileClass.open().Params -->

| Paramètres | Type                                             |                             | Description                                                  |
| ---------- | ------------------------------------------------ | --------------------------- | ------------------------------------------------------------ |
| mode       | Text                                             | ->                          | Mode d'ouverture : "read", "write", "append" |
| options    | Object                                           | ->                          | Options d'ouverture                                          |
| Résultat   | [4D.FileHandle](FileHandleClass) | <- | Nouvel objet File handle                                     |

<!-- END REF -->

#### Description

Chemins d'accès Vous pouvez utiliser les fonctions et les propriétés de la classe [4D.FileHandle](FileHandleClass) pour écrire, lire ou ajouter du contenu au fichier.

Si vous utilisez le paramètre *mode* (texte), passez le mode d'ouverture pour le file handle :

| *mode*   | Description                                                                                                                                                                                                                                                                                                                    |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "read"   | (Par défaut) Crée un file handle pour lire les valeurs dans le fichier. Si le fichier n'existe pas sur disque, une erreur est renvoyée. Vous pouvez ouvrir autant de file handles que vous voulez en mode "read" sur le même objet File.                    |
| "write"  | Crée un file handle pour écrire des valeurs dans le fichier (en commençant par le début du contenu du fichier). Si le fichier n'existe pas sur le disque, il est créé. Vous ne pouvez ouvrir qu'un seul file handle en mode "write" sur le même objet File. |
| "append" | Crée un file handle pour écrire des valeurs dans le fichier (en commençant par la fin du fichier). Si le fichier n'existe pas sur le disque, il est créé. Vous ne pouvez ouvrir qu'un seul file handle en mode "append" sur le même objet File.             |

> La valeur du paramètre *mode* est sensible à la casse.

Si vous utilisez le paramètre *options* (objet), vous pouvez passer d'autres options pour le file handle par le biais des propriétés suivantes (ces propriétés peuvent être lues ultérieurement à partir de l'[objet file handle](FileHandleClass) ouvert) :

| *options*         | Type              | Description                                                                                                                                                                             | Par défaut    |
| ----------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `.mode`           | Text              | Mode d'ouverture (voir *mode* ci-dessus)                                                                                                                             | "read"        |
| `.charset`        | Text              | Jeu de caractères utilisé lors de la lecture ou de l'écriture dans le fichier. Utilisez le nom standard du jeu (par exemple "ISO-8859-1" ou "UTF-8") | "UTF-8"       |
| `.breakModeRead`  | Text ou numérique | Mode de traitement des sauts de ligne utilisés lors de la lecture du fichier (voir ci-dessous)                                                                       | "native" ou 1 |
| `.breakModeWrite` | Text ou numérique | Mode de traitement des sauts de ligne utilisés lors de l'écriture dans le fichier (voir ci-dessous)                                                                  | "native" ou 1 |

La fonction remplace tous les délimiteurs de fin de ligne d'origine. Par défaut, le délimiteur natif est utilisé, mais vous pouvez définir un autre délimiteur. Les propriétés `.breakModeRead` et `.breakModeWrite` indiquent le traitement à appliquer aux caractères de fin de ligne dans le document. Vous pouvez utiliser l'une des valeurs suivantes (texte ou numérique) :

| Mode de rupture en texte | Break mode en numérique (constante) | Description                                                                                                                                                                                                                                   |
| ------------------------ | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "native"                 | 1 (`Document with native format`)   | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : LF (line feed) sous macOS, CRLF (carriage return + line feed) sous Windows |
| "crlf"                   | 2 (`Document with CRLF`)            | Les fins de ligne sont converties en CRLF (retour chariot + saut de ligne), le format par défaut de Windows                                                                                                                |
| "cr"                     | 3 (`Document with CR`)              | Les fins de ligne sont converties en CR (retour chariot), le format MacOS classique par défaut                                                                                                                             |
| "lf"                     | 4 (`Document with LF`)              | Les fins de ligne sont converties en LF (line feed), le format Unix et macOS par défaut                                                                                                                                    |

> La valeur du paramètre *break mode en texte* est sensible à la casse.

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

| Paramètres | Type                    |                             | Description                    |
| ---------- | ----------------------- | --------------------------- | ------------------------------ |
| nouveauNom | Text                    | ->                          | Nouveau nom complet du fichier |
| Résultat   | 4D.File | <- | Fichier renommé                |

<!-- END REF -->

#### Description

La fonction `.rename()` <!-- REF #FileClass.rename().Summary -->renomme le fichier avec le nom que vous avez passé dans *newName* et retourne l'objet `File` renommé<!-- END REF -->.

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

La fonction `.setAppInfo()` <!-- REF #FileClass.setAppInfo().Summary -->écrit les propriétés *info* en tant que contenu d'information d'un fichier **.exe**, **.dll** ou **.plist**<!-- END REF -->.

La fonction doit être utilisée avec un fichier .exe, .dll ou .plist existant. Si le fichier n'existe pas sur le disque ou n'est pas un fichier .exe, .dll ou .plist valide, la fonction ne fait rien (aucune erreur n'est générée).

> Cette fonction ne prend en charge que les fichiers .plist au format xml (texte). Une erreur est retournée si elle est utilisée avec un fichier .plist au format binaire.

**Paramètre *info* avec un fichier .exe or .dll**

> La modification des informations d'un fichier .exe ou .dll n'est possible que sous Windows.

Chaque propriété valide définie dans le paramètre objet *info* est écrite dans la ressource de version du fichier .exe ou .dll. Les propriétés disponibles sont (toute autre propriété sera ignorée) :

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

Pour toutes les propriétés à l'exception de `WinIcon`, si vous passez un texte null ou vide comme valeur, une chaîne vide est écrite dans la propriété. Si vous passez une valeur de type autre que Texte, elle est "stringifiée".

Pour la propriété `WinIcon`, si le fichier d'icône n'existe pas ou a un format incorrect, une erreur est générée.

**Paramètre *info* avec un fichier .plist**

Chaque propriété valide définie dans le paramètre objet *info* est écrite dans le fichier . plist sous forme de clé. Tous les noms de clés sont acceptés. Les types des valeurs sont préservés si possible.

Si une clé définie dans le paramètre *info* est déjà définie dans le fichier .plist, sa valeur est mise à jour tout en conservant son type d'origine. Les autres clés définies dans le fichier .plist ne sont pas modifiées.

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

La fonction `.setContent()` <!-- REF #FileClass.setContent().Summary -->réécrit l'intégralité du contenu du fichier en utilisant les données stockées dans le BLOB *content*<!-- END REF -->. Pour plus d'informations sur les BLOBs, veuillez vous reporter à la section [BLOB](Concepts/dt_blob.md).

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

La fonction `.setText()` <!-- REF #FileClass.setText().Summary -->écrit *text* comme nouveau contenu du fichier<!-- END REF -->.

Si le fichier référencé dans l'objet `File` n'existe pas sur disque, il est créé par la fonction. Lorsque le fichier existe déjà sur disque, son contenu antérieur est supprimé, sauf s'il est déjà ouvert, auquel cas son contenu est verrouillé et une erreur est générée.

Dans le paramètre *text*, passez le texte à écrire dans le fichier. Cela peut être un texte littéral ("my text"), ou un champ / variable texte 4D.

Optionnellement, vous pouvez indiquer le jeu de caractères à utiliser pour l'écriture du contenu. Vous pouvez passer soit :

- dans *charSetName*, une chaîne contenant le nom de jeu standard (par exemple "ISO-8859-1" ou "UTF-8"),
- ou dans *charSetNum*, l'ID MIBEnum (numéro) du nom du jeu standard.

> Pour consulter la liste des jeux de caractères pris en charge par 4D, veuillez vous reporter à la description de la commande `CONVERT FROM TEXT`.

Si une marque d'ordre d'octet (BOM) existe pour le jeu de caractères, 4D l'insère dans le fichier, sauf si le jeu de caractères utilisé contient le suffixe "-no-bom" (par exemple "UTF-8-no-bom"). Si vous n'indiquez pas un jeu de caractères, 4D utilise par défaut le jeu de caractères "UTF-8" sans BOM.

Dans le paramètre *breakMode*, vous pouvez passer une valeur numérique indiquant le traitement à appliquer aux caractères de fin de ligne avant de les stocker dans le fichier. Les constantes suivantes du thème **Documents système** sont disponibles :

| Constante                     | Valeur | Commentaire                                                                                                                                                                                                                                   |
| ----------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Document unchanged`          | 0      | Aucun traitement                                                                                                                                                                                                                              |
| `Document with native format` | 1      | (Défaut) Les fins de ligne sont convertis au format natif de la plate-forme d’exécution : LF (line feed) sous macOS, CRLF (carriage return + line feed) sous Windows |
| `Document with CRLF`          | 2      | Les fins de ligne sont converties en CRLF (retour chariot + saut de ligne), le format par défaut de Windows                                                                                                                |
| `Document with CR`            | 3      | Les fins de ligne sont converties en CR (retour chariot), le format MacOS classique par défaut                                                                                                                             |
| `Document with LF`            | 4      | Les fins de ligne sont converties en LF (line feed), le format Unix et macOS par défaut                                                                                                                                    |

Par défaut, lorsque vous omettez le paramètre *breakMode* les retours à la ligne sont traités en mode natif (1).

> **Note de compatibilité** : Des options de compatibilité sont disponibles pour la gestion des fins de ligne et des BOM. Voir la [page Compatibilité](https://doc.4d.com/4dv19R/help/title/en/page3239.html) sur doc.4d.com.

#### Exemple

```4d
$myFile:=File("C:\\Documents\\Hello.txt";fk platform path)
$myFile.setText("Hello world")
```

<!-- END REF -->

<!-- INCLUDE document.size.Desc -->
