---
id: ZipArchiveClass
title: ZIPArchive
---

Une archive ZIP 4D est un objet `File` ou `Folder` contenant un ou plusieurs fichiers ou dossiers, qui sont compressés afin d'être plus petits que leur taille d'origine. Ces archives sont créées avec une extension ".zip" et peuvent être utilisées pour économiser de l'espace sur le disque ou transférer des fichiers sur des supports de taille limitée (par exemple, l'email ou le réseau).

- Vous créez une archive ZIP 4D avec la commande [`ZIP Create archive`](../commands/zip-create-archive.md).
- Les instances 4D [`ZIPFile`](ZipFileClass.md) et [`ZIPFolder`](ZipFolderClass.md) sont disponibles à travers la propriété [`root`](#root) (`ZIPFolder`) de l'objet retourné par la commande [`ZIP Read archive`](../commands/zip-read-archive.md).

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

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<br/><!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Description

La propriété `.root` contient <!-- REF #ZipArchiveClass.root.Summary -->un dossier virtuel permettant d'accéder au contenu de l'archive ZIP<!-- END REF -->.

Le dossier `root` et son contenu sont manipulés à l'aide des fonctions et propriétés des classes [ZipFile](ZipFileClass.md) et [ZipFolder](ZipFolderClass.md).

Cette propriété est en **lecture seule**.
