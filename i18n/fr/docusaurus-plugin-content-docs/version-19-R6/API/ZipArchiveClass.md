---
id: ZipArchiveClass
title: ZIPArchive
---


Une archive ZIP 4D est un objet `File` ou `Folder` contenant un ou plusieurs fichiers ou dossiers, qui sont compressés afin d'être plus petits que leur taille d'origine. Ces archives sont créées avec une extension ".zip" et peuvent être utilisées pour économiser de l'espace sur le disque ou transférer des fichiers sur des supports de taille limitée (par exemple, l'email ou le réseau).

- Créez une archive ZIP 4D avec la commande [ZIP Create archive](#zip-create-archive).
- Les instances [`ZIPFile`](ZipFileClass.md) et [`ZIPFolder`](ZipFolderClass.md) de 4D sont disponibles via la propriété [`root`](#root) (`ZIPFolder`) de l'objet retourné par la commande [ZIP Read archive](#zip-read-archive).

### Exemple

Pour récupérer et visualiser le contenu d'un objet ZIP file :

```4d
var $path; $archive : 4D.File
var $zipFile : 4D.ZipFile
var $zipFolder : 4D.ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // store the zip main folder
$zipFile:=$zipFolder.files()[0] //read the first zipped file

If($zipFile.extension=".txt")
 $txt:=$zipFile.getText()
End if
```

### Sommaire

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|

## ZIP Create archive

<details><summary>Historique</summary>

| Version | Modifications                                                               |
| ------- | --------------------------------------------------------------------------- |
| v19 R3  | Ajout des propriétés `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| v18     | Ajoutées                                                                    |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->

**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Paramètres      | Type      |    | Description                                               |
| --------------- | --------- |:--:| --------------------------------------------------------- |
| fileToZip       | 4D.File   | -> | Objet fichier ou dossier à compresser                     |
| folderToZip     | 4D.Folder | -> | Objet fichier ou dossier à compresser                     |
| zipStructure    | Object    | -> | Objet fichier ou dossier à compresser                     |
| destinationFile | 4D.File   | -> | Fichier de destination de l'archive                       |
| options         | Integer   | -> | Si *folderToZip* utilisé : `ZIP Without enclosing folder` |
| Result          | Object    | <- | Objet statut|<!-- END REF -->

|

#### Description

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

Vous pouvez passer un objet 4D.File, 4D.Folder, ou une structure Zip en tant que premier paramètre :

- *fileToZip* : passez simplement un `4D.File` à compresser.

- *folderToZip* : passez un `4D.Folder` à compresser. Dans ce cas, le paramètre *options* vous permet de compresser uniquement le contenu du dossier (c'est-à-dire d'exclure le dossier parent). Par défaut, l'archive `ZIP Create archive` compressera le dossier et son contenu, de sorte que l'opération de décompression recrée un dossier. Si vous souhaitez que l'opération de décompression ne restaure que le contenu du dossier, passez la constante `ZIP Without enclosing folder` dans le paramètre *options*.

- *zipStructure* : passez un objet décrivant l'objet ZIP archive. Les propriétés suivantes sont disponibles pour définir la structure :

| Propriété   | Type        | Description                                                                                                                                                                                                                                                                                                                                                   |
| ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer     | <li>`ZIP Compression standard`: Réduire la compression (par défaut)</li><li>`ZIP Compression LZMA`: compression LZMA</li><li>`ZIP Compression XZ`: compression XZ</li><li>`ZIP Compression none`: Pas de compression</li>                                                                                                                                                                                                                                                          |
| level       | Integer     | Niveau de compression. Valeurs possibles : 1 à 10. Une valeur plus faible produira un fichier plus volumineux, tandis qu'une valeur plus élevée produira un fichier plus petit. Le niveau de compression a toutefois un impact sur les performances. Valeur par défaut (si omis) : <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li> |
| encryption  | Integer     | Le chiffrement à utiliser si un mot de passe est défini :<li>`ZIP Encryption AES128`: chiffrement AES à l'aide d'une clé 128 octets.</li><li>`ZIP Encryption AES192`: chiffrement AES à l'aide d'une clé 192 octets.</li><li>`ZIP Encryption AES256`: chiffrement AES à l'aide d'une clé 256 octets (par défaut si un mot de passe est défini).</li><li>`ZIP Encryption none`: les données ne sont pas chiffrées (par défaut si aucun mot de passe n'est défini)</li>                                                                                                                                                                                               |
| password    | Text        | Un mot de passe à définir si le chiffrement est requis.                                                                                                                                                                                                                                                                                                       |
| Historique  | Collections | <li>une collection d'objets `4D.File` ou `4D.Folder` ou</li><li>une collection d'objets dont les propriétés sont les suivantes :</li><table><tr><td>Propriété</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File ou 4D.Folder</td><td>File ou Folder</td></tr><tr><td>destination</td><td>Text</td><td>(facultatif) - Indiquer un chemin de fichier relatif pour modifier l'organisation du contenu de l'archive</td></tr><tr><td>option</td><td>number</td><td>(facultatif) - `ZIP Ignore invisible files` ou 0 pour compresser tout le fichier</td></tr></table>                                                                                                                                                                                                                                                                                |
| callback    | 4D.Function | Une formule de rétro-appel qui recevra la progression de la compression (0 à 100) dans $1.                                                                                                                                                                                                                                                                    |

Dans le paramètre *destinationFile*, passez un objet `4D.File` décrivant l'archive ZIP à créer (nom, emplacement, etc.). Il est conseillé d'utiliser l'extension ".zip" si vous souhaitez que l'archive ZIP soit traitée automatiquement par un logiciel.

Une fois que l'archive est créée, vous pouvez utiliser la commande [ZIP Read archive](#zip-read-archive) pour y accéder.

**Objet statut**

L'objet statut retourné contient les propriétés suivantes :

| Propriété  | Type    | Description                                                                                                       |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| statusText | Text    | Message d'erreur (le cas échéant) :<li>Impossible d'ouvrir l'archive ZIP</li><li>Impossible de créer une archive ZIP</li><li>Le mot de passe est requis pour le chiffrement</li> |
| status     | Integer | Code d'état                                                                                                       |
| success    | Boolean | Vrai si l'archive a été créée avec succès, sinon faux                                                             |

#### Exemple 1

Pour compresser un `4D.File` :

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### Exemple 3

Pour compresser un `4D.Folder` sans le dossier lui-même :

```4d
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Exemple 3

Pour compresser une structure d'archive ZIP avec un mot de passe et une barre de progression :

```4d
 var $destination : 4D.File
 var $zip;$status : Object
 var progID : Integer

 $destination:=Folder(fk desktop folder).file("MyDocs/Archive.zip")

 $zip:=New object
 $zip.files:=Folder(fk desktop folder).folder("MyDocs/Resources").folders()
 $zip.password:="password"
 $zip.callback:=Formula(myFormulaCompressingMethod($1))

 progID:=Progress New //nous utilisons le composant 4D Progress

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```

`myFormulaCompressingMethod`:

```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```

#### Exemple 4

Vous souhaitez passer une collection de dossiers et de fichiers à compresser à l'objet *zipStructure* :

```4d
 var $destination : 4D.File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))

 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```

#### Exemple 5

Vous souhaitez utiliser un autre algorithme de compression à un niveau de compression élevé :

```4d
var $destination : 4D.File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 //4 par défaut

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18     | Ajoutées      |

</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->

**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Paramètres | Type          |    | Description                                   |
| ---------- | ------------- |:--:| --------------------------------------------- |
| zipFile    | 4D.File       | -> | Fichier archive ZIP                           |
| password   | Text          | -> | Mot de passe de l'archive ZIP, le cas échéant |
| Result     | 4D.ZipArchive | <- | Objet archive|<!-- END REF -->

|

#### Description

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> Cette commande ne décompresse pas l'archive ZIP, elle fournit seulement un aperçu de son contenu. Pour extraire le contenu d'une archive, vous devez utiliser des méthodes telles que [file.copyTo()](Document.md#copyto) ou [folder.copyTo()](Directory.md#copyto).

Passez un objet `4D.File` référençant l'archive ZIP compressée dans le paramètre *zipFile*. Le fichier d'archive cible est ouvert jusqu'à la fin de l'exécution de la commande `ZIP Read archive` et jusqu'à ce que tous les contenus/références soient extrait(e)s/publié(e)s ; il est ensuite fermé automatiquement.

Si le *zipFile* est protégé par un mot de passe, vous devez utiliser le paramètre *password* pour fournir un mot de passe. Si un mot de passe est requis mais qu'il n'est pas passé lorsque vous tentez de lire le contenu de l'archive, une erreur est générée.

**Objet archive**

L'objet `4D.ZipArchive` retourné contient une seule propriété, [`root`](#root), dont la valeur est un objet `4D.ZipFolder`. Ce dossier décrit le contenu de l'archive ZIP.

#### Exemple

Pour récupérer et visualiser le contenu d'un objet ZIP file :

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

Pour récupérer la liste des fichiers et dossiers de l'archive :

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

Pour lire le contenu d'un fichier sans l'extraire du dossier root :

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Pour extraire à partir du dossier root :

```4d
  //extract a file
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extract all files
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->

**.root** : 4D.ZipFolder<!-- END REF -->

#### Description

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

Le dossier `root` et son contenu sont manipulés à l'aide des fonctions et propriétés des classes [ZipFile](ZipFileClass.md) et [ZipFolder](ZipFolderClass.md).

Cette propriété est en **lecture seule**.
