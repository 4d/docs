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
$zipFolder:=$archive.root // stocker le dossier principal du zip
$zipFile:=$zipFolder.files()[0] //lire le premier fichier zippé

If($zipFile.extension=".txt")
    $txt:=$zipFile.getText()
End if
```

### Sommaire

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## ZIP Create archive

<details><summary>Historique</summary>
| Version | Modifications                                                               |
| ------- | --------------------------------------------------------------------------- |
| v19 R3  | Ajout des propriétés `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| v18     | Ajout                                                                       |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| Paramètres      | Type        |    | Description                                          |
| --------------- | ----------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D.File     | -> | File or Folder object to compress                    |
| folderToZip     | 4D.Folder   | -> | File or Folder object to compress                    |
| zipStructure    | Objet       | -> | File or Folder object to compress                    |
| destinationFile | 4D.File     | -> | Destination file for the archive                     |
| options         | Entier long | -> | *folderToZip* option: `ZIP Without enclosing folder` |
| Résultat        | Objet       | <- | Objet statut                                         |
<!-- END REF -->


#### Description

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:

- *fileToZip* : passez simplement un `4D.File` à compresser.

- *folderToZip* : passez un `4D.Folder` à compresser. Dans ce cas, le paramètre *options* vous permet de compresser uniquement le contenu du dossier (c'est-à-dire d'exclure le dossier parent). Par défaut, l'archive `ZIP Create archive` compressera le dossier et son contenu, de sorte que l'opération de décompression recrée un dossier. Si vous souhaitez que l'opération de décompression ne restaure que le contenu du dossier, passez la constante `ZIP Without enclosing folder` dans le paramètre *options*.

- *zipStructure* : passez un objet décrivant l'objet ZIP archive. Les propriétés suivantes sont disponibles pour définir la structure :<li>une collection d'objets `4D.File` ou `4D.Folder` ou</li><li>une collection d'objets dont les propriétés sont les suivantes :</li><table>
  <tr>
    <td>
      Propriété
    </td>
    
    <td>
      Type
    </td>
    
    <td>
      Description
    </td>
  </tr>
  
  <tr>
    <td>
      source
    </td>
    
    <td>
      4D.File ou 4D.Folder
      
      <td>
        File ou Folder
      </td></tr>
      
      <tr>
        <td>
          destination
        </td>
        
        <td>
          Text
        </td>
        
        <td>
          (facultatif) - Indiquer un chemin de fichier relatif pour modifier l'organisation du contenu de l'archive
        </td>
      </tr>
      
      <tr>
        <td>
          option
        </td>
        
        <td>
          number
        </td>
        
        <td>
          (facultatif) - `ZIP Ignore invisible files` ou 0 pour compresser tout le fichier
        </td>
      </tr></table></html>
    </td>
  </tr>
  
  <tr>
    <td>
      callback
    </td>
    
    <td>
      4D.Function
    </td>
    
    <td>
      Une formule de rétro-appel qui recevra la progression de la compression (0 à 100) dans $1.
    </td>
  </tr></tbody> 
</table>

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software. 

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Objet statut**

The returned status object contains the following properties:

| Propriété  | Type    | Description                                                                                                                                                     |
| ---------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| statusText | Text    | Message d'erreur (le cas échéant) :<li>Impossible d'ouvrir l'archive ZIP</li><li>Impossible de créer une archive ZIP</li><li>Le mot de passe est requis pour le chiffrement |
| status     | Integer | Code d'état                                                                                                                                                     |
| success    | Boolean | Vrai si l'archive a été créée avec succès, sinon faux                                                                                                           |





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



```4D
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```




#### Exemple 3

To compress a ZIP archive structure with a password and progress bar:



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

You want to pass a collection of folders and files to compress to the *zipStructure* object:



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
| v18     | Ajout         |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| Paramètres | Type          |    | Description                 |
| ---------- | ------------- |:--:| --------------------------- |
| zipFile    | 4D.File       | -> | Zip archive file            |
| password   | Texte         | -> | ZIP archive password if any |
| Résultat   | 4D.ZipArchive | <- | Archive object              |
<!-- END REF -->


#### Description

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.



> Cette commande ne décompresse pas l'archive ZIP, elle fournit seulement un aperçu de son contenu. Pour extraire le contenu d'une archive, vous devez utiliser des méthodes telles que [file.copyTo()](Document.md#copyto) ou [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically. 

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive. 





#### Exemple

Pour récupérer et visualiser le contenu d'un objet ZIP file :



```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```


To retrieve the list of the files and folders in the archive:



```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```


To read the contents of a file without extracting it from the root folder:



```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```


To extract from the root folder:



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

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

Cette propriété est en **lecture seule**.


<style> h2 { background: #d9ebff;}</style>
