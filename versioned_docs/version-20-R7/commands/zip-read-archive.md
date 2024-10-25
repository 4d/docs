---
id: zip-read-archive
title: ZIP Read archive
displayed_sidebar: docs
---

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
|Parameter|Type||Description|
|---------|--- |:---:|------|
|zipFile|4D.File|&#8594; |Zip archive file|
|password|Text|&#8594; |ZIP archive password if any|
|Result|4D.ZipArchive|&#8592;|Archive object|
<!-- END REF -->

<details><summary>History</summary>

|Release|Changes|
|---|---|
|18|Added|

</details>

#### Description 

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](../API/Document.md#copyto) or [folder.copyTo()](../API/Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.

**Archive object**

The returned `4D.ZipArchive` object contains a single [`root`](../API/ZipArchiveClass.md#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive.

#### Example

To retrieve and view the contents of a ZIP file object:

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

#### See also 

[ZipArchive Class](../API/ZipArchiveClass.md)
[ZipFile Class](../API/ZipFileClass.md)
[ZipFolder Class](../API/ZipFolderClass.md)
[`ZIP Create archive`](zip-create-archive.md)  