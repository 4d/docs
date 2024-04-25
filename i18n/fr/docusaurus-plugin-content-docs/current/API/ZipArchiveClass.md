---
id: ZipArchiveClass
title: ZIPArchive
---

A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. Ces archives sont créées avec une extension ".zip" et peuvent être utilisées pour économiser de l'espace sur le disque ou transférer des fichiers sur des supports de taille limitée (par exemple, l'email ou le réseau).

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.

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

|                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## ZIP Create archive

<details><summary>Historique</summary>

| Release | Modifications                                                         |
| ------- | --------------------------------------------------------------------- |
| 19 R3   | Added `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` property |
| 18      | Ajout                                                                 |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| Paramètres      | Type                      |     | Description                                                          |
| --------------- | ------------------------- | :-: | -------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  -> | Objet fichier ou dossier à compresser                                |
| folderToZip     | 4D.Folder |  -> | Objet fichier ou dossier à compresser                                |
| zipStructure    | Object                    |  -> | Objet fichier ou dossier à compresser                                |
| destinationFile | 4D.File   |  -> | Fichier de destination de l'archive                                  |
| options         | Integer                   |  -> | _folderToZip_ option: `ZIP Without enclosing folder` |
| Résultat        | Object                    |  <- | Objet statut                                                         |

<!-- END REF -->

#### Description

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

Vous pouvez passer un objet 4D.File, 4D.Folder, ou une structure Zip en tant que premier paramètre :

- _fileToZip_: You simply pass a `4D.File` to compress.

- _folderToZip_: You pass a `4D.Folder` to compress. In this case, the _options_ parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the _options_ parameter.

- _zipStructure_: You pass an object describing the ZIP archive object. Les propriétés suivantes sont disponibles pour définir la structure :

| Propriété   | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer                     | <li>`ZIP Compression standard`: Deflate compression (default)</li><li>`ZIP Compression LZMA`: LZMA compression</li><li>`ZIP Compression XZ`: XZ compression</li><li>`ZIP Compression none`: No compression</li>                                                                                                                                                                                                                                                                                                                                                  |
| level       | Integer                     | Niveau de compression. Valeurs possibles : 1 à 10. Une valeur plus faible produira un fichier plus volumineux, tandis qu'une valeur plus élevée produira un fichier plus petit. Le niveau de compression a toutefois un impact sur les performances. Default values if omitted: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                         |
| encryption  | Integer                     | The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>                     |
| password    | Text                        | Un mot de passe à définir si le chiffrement est requis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Historique  | Collection                  | <li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder</td><td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table> |
| callback    | 4D.Function | Une formule de rétro-appel qui recevra la progression de la compression (0 à 100) dans $1.                                                                                                                                                                                                                                                                                                                                                                                                                                    |

In the _destinationFile_ parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). Il est conseillé d'utiliser l'extension ".zip" si vous souhaitez que l'archive ZIP soit traitée automatiquement par un logiciel.

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

L'objet statut retourné contient les propriétés suivantes :

| Propriété  | Type    | Description                                                                                                                                                              |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText | Text    | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status     | Integer | Code d'état                                                                                                                                                              |
| success    | Boolean | Vrai si l'archive a été créée avec succès, sinon faux                                                                                                                    |

#### Exemple 1

To compress a `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### Exemple 2

To compress a `4D.Folder` without the folder itself:

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

 progID:=Progress New //we use the 4D Progress component

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```

`myFormulaCompressingMethod`:

```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```

#### Exemple 4

You want to pass a collection of folders and files to compress to the _zipStructure_ object:

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

| Release | Modifications |
| ------- | ------------- |
| 18      | Ajout         |

</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| Paramètres | Type                          |     | Description                                   |
| ---------- | ----------------------------- | :-: | --------------------------------------------- |
| zipFile    | 4D.File       |  -> | Fichier archive ZIP                           |
| password   | Text                          |  -> | Mot de passe de l'archive ZIP, le cas échéant |
| Résultat   | 4D.ZipArchive |  <- | Objet archive                                 |

<!-- END REF -->

#### Description

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of _zipFile_ and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> Cette commande ne décompresse pas l'archive ZIP, elle fournit seulement un aperçu de son contenu. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the _zipFile_ parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the _zipFile_ is password protected, you need to use the optional _password_ parameter to provide a password. Si un mot de passe est requis mais qu'il n'est pas passé lorsque vous tentez de lire le contenu de l'archive, une erreur est générée.

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. Ce dossier décrit le contenu de l'archive ZIP.

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

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Description

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

This property is **read-only**.
