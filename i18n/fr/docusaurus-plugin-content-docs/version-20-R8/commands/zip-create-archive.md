---
id: zip-create-archive
title: ZIP Create archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| Paramètres      | Type                      |     | Description                                                               |
| --------------- | ------------------------- | :-: | ------------------------------------------------------------------------- |
| fileToZip       | 4D.File   |  →  | Objet fichier ou dossier à compresser                                     |
| folderToZip     | 4D.Folder |  →  | Objet fichier ou dossier à compresser                                     |
| zipStructure    | Object                    |  →  | Objet fichier ou dossier à compresser                                     |
| destinationFile | 4D.File   |  →  | Fichier de destination de l'archive                                       |
| options         | Integer                   |  →  | Si *folderToZip* utilisé : `ZIP Without enclosing folder` |
| Résultat        | Object                    |  ←  | Objet statut                                                              |

<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications                                                               |
| ------- | --------------------------------------------------------------------------- |
| 19 R3   | Ajout des propriétés `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| 18      | Ajout                                                                       |

</details>

#### Description

La commande `ZIP Create archive` <!-- REF #_command_.ZIP Create archive.Summary -->crée un objet d'archive ZIP compressée et renvoie le statut de l'opération<!-- END REF -->.

Vous pouvez passer un objet 4D.File, 4D.Folder, ou une structure Zip en tant que premier paramètre :

- *fileToZip* : passez simplement un `4D.File` à compresser.

- *folderToZip* : passez un `4D.Folder` à compresser. Dans ce cas, le paramètre *options* vous permet de compresser uniquement le contenu du dossier (c'est-à-dire d'exclure le dossier parent). Par défaut, l'archive `ZIP Create archive` compressera le dossier et son contenu, de sorte que l'opération de décompression recrée un dossier. Si vous souhaitez que l'opération de décompression ne restaure que le contenu du dossier, passez la constante `ZIP Without enclosing folder` dans le paramètre *options*.

- *zipStructure* : passez un objet décrivant l'objet ZIP archive. Les propriétés suivantes sont disponibles pour définir la structure :

| Propriété   | Type                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer                     | <li>`ZIP Compression standard` : Compression Deflate (par défaut)</li><li>`ZIP Compression LZMA` : Compression LZMA</li><li>`ZIP Compression XZ` : Compression XZ</li><li>`ZIP Compression none` : Pas de compression</li>                                                                                                                                                                                                                                                                                                                                                                                                                      |
| level       | Integer                     | Niveau de compression. Valeurs possibles : 1 à 10. Une valeur plus faible produira un fichier plus volumineux, tandis qu'une valeur plus élevée produira un fichier plus petit. Le niveau de compression a toutefois un impact sur les performances. Valeurs par défaut si omis : <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                                                                                      |
| encryption  | Integer                     | Le chiffrement à utiliser si un mot de passe est défini :<li>`ZIP Encryption AES128` : chiffrement AES utilisant une clé de 128 bits.</li><li>`ZIP Encryption AES192` : chiffrement AES utilisant une clé de 192 bits.</li><li>`ZIP Encryption AES256` : chiffrement AES utilisant une clé de 256 bits (par défaut si un mot de passe est défini).</li><li>`ZIP Encryption none` : les données ne sont pas chiffrées (par défaut si aucun mot de passe n'est défini)</li> |
| password    | Text                        | Un mot de passe à définir si le chiffrement est requis.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Historique  | Collection                  | <li>une collection d'objets `4D.File` ou `4D.Folder` ou</li><li>une collection d'objets avec les propriétés suivantes :</li><table><tr><td>Propriété</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File ou 4D.Folder</td><td>Fichier ou dossier</td></tr><tr><td>destination</td><td>Texte</td><td>(facultatif) - Spécifie un chemin relatif pour changer l'organisation du contenu de l'archive</td></tr><tr><td>option</td><td>nombre</td><td>(facultatif) - `ZIP Ignore invisible files` ou 0 pour compresser l'intégralité du fichier</td></tr></table>                                                               |
| callback    | 4D.Function | Une formule de rétro-appel qui recevra la progression de la compression (0 à 100) dans $1.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

Dans le paramètre *destinationFile*, passez un objet `4D.File` décrivant l'archive ZIP à créer (nom, emplacement, etc.). Il est conseillé d'utiliser l'extension ".zip" si vous souhaitez que l'archive ZIP soit traitée automatiquement par un logiciel.

Une fois que l'archive est créée, vous pouvez utiliser la commande [ZIP Read archive](#zip-read-archive) pour y accéder.

**Status object**

L'objet statut retourné contient les propriétés suivantes :

| Propriété  | Type    | Description                                                                                                                                                                          |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText | Text    | Message d'erreur (le cas échéant) :<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status     | Integer | Code d'état                                                                                                                                                                          |
| success    | Boolean | Vrai si l'archive a été créée avec succès, sinon faux                                                                                                                                |

#### Exemple 1

Pour compresser un `4D.File` :

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### Exemple 2

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

 progID:=Progress New //utilisation du composant 4D Progress

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

#### Voir également

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Read archive`](zip-read-archive.md)

#### Propriétés

|                    |                                                                 |
| ------------------ | --------------------------------------------------------------- |
| Numéro de commande | 1640                                                            |
| Thread safe        | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
