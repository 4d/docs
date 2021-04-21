---
id: ZipArchiveClass
title: ZIPArchive
---


A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. These archives are created with a ".zip" extension and can be used to save disk space or transfer files via mediums which may have size limitations (e.g., email or network).

- You create a 4D ZIP archive with the [ZIP Create archive](#zip-create-archive) command.
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.


### 例題

To retrieve and view the contents of a ZIP file object:

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

### 概要

|                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary -->|


## ZIP Create archive

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->
**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->
| 参照              | タイプ       |    | 説明                                                                             |
| --------------- | --------- |:--:| ------------------------------------------------------------------------------ |
| fileToZip       | 4D.File   | -> | 圧縮する File または Folder オブジェクト                                                    |
| folderToZip     | 4D.Folder | -> | 圧縮する File または Folder オブジェクト                                                    |
| zipStructure    | オブジェクト    | -> | 圧縮する File または Folder オブジェクト                                                    |
| destinationFile | 4D.File   | -> | アーカイブの保存先ファイル                                                                  |
| options         | 整数        | -> | *folderToZip* オプション: `ZIP Without enclosing folder` (外側のフォルダーを除外して ZIP圧縮をおこなう) |
| 戻り値             | オブジェクト    | <- | ステータスオブジェクト                                                                    |
<!-- END REF -->


#### 説明

`ZIP Create archive` コマンドは、 <!-- REF #_command_.ZIP Create archive.Summary -->圧縮された ZIPアーカイブオブジェクトを作成し、その処理のステータスを返します<!-- END REF -->。

You can pass a 4D.File, a 4D.Folder, or a zip structure object as first parameter:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: You pass a `4D.Folder` to compress. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: You pass an object describing the ZIP archive object. The following properties are available to define the structure:<li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table>
  <tr>
    <td>
      プロパティ
    </td>
    
    <td>
      タイプ
    </td>
    
    <td>
      説明
    </td>
  </tr>
  
  <tr>
    <td>
      source
    </td>
    
    <td>
      4D.File or 4D.Folder
      
      <td>
        File or Folder
      </td></tr>
      
      <tr>
        <td>
          destination
        </td>
        
        <td>
          テキスト
        </td>
        
        <td>
          (optional) - Specify a relative filepath to change the organization of the contents of the archive
        </td>
      </tr>
      
      <tr>
        <td>
          オプション
        </td>
        
        <td>
          number
        </td>
        
        <td>
          (optional) - `ZIP Ignore invisible files` or 0 to compress all of the file
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
      A callback formula that will receive the compression progress (0 - 100) in $1.
    </td>
  </tr></tbody> 
</table>

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). It is advised to use the ".zip" extension if you want the ZIP archive to be processed automatically by any software. 

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**ステータスオブジェクト**

The returned status object contains the following properties:

| プロパティ      | タイプ  | 説明                                                                                                                                      |
| ---------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| statusText | テキスト | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption |
| status     | 整数   | Status code                                                                                                                             |
| success    | ブール  | True if archive created successfully, else false                                                                                        |





#### 例題 1

To compress a `4D.File`:



```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```





#### 例題 2

To compress a `4D.Folder` without the folder itself:



```4D
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```




#### 例題 3

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

 progID:=Progress New //we use the 4D Progress component

 $status:=ZIP Create archive($zip;$destination)

 Progress QUIT(progID)
```


`myFormulaCompressingMethod`:



```4d
 var $1 : Integer
 Progress SET PROGRESS(progID;Num($1/100))
```





#### 例題 4

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







## ZIP Read archive

<details><summary>履歴</summary>
| バージョン | 内容 |
| ----- | -- |
| v18   | 追加 |
</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->
**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->
| 参照       | タイプ           |    | 説明                      |
| -------- | ------------- |:--:| ----------------------- |
| zipFile  | 4D.File       | -> | ZIPアーカイブファイル            |
| password | テキスト          | -> | ZIPアーカイブのパスワード (必要であれば) |
| 戻り値      | 4D.ZipArchive | <- | アーカイブオブジェクト             |
<!-- END REF -->


#### 説明

`ZIP Read archive` コマンドは、 <!-- REF #_command_.ZIP Read archive.Summary -->*zipFile* のコンテンツを取得し、`4D.ZipArchive` オブジェクト形式で返します<!-- END REF -->。



> This command does not uncompress the ZIP archive, it only provides a view of its contents. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically. 

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. If a password is required but not passed when trying to read the contents of the archive, an error is generated.

**アーカイブオブジェクト**

The returned `4D.ZipArchive` object contains a single [`root`](#root) property whose value is a `4D.ZipFolder` object. This folder describes the whole contents of the ZIP archive. 





#### 例題

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






## .root

<!-- REF #ZipArchiveClass.root.Syntax -->
**.root** : 4D.ZipFolder<!-- END REF -->


#### 説明

`.root` プロパティは、 <!-- REF #ZipArchiveClass.root.Summary -->ZIPアーカイブのコンテンツにアクセスするためのバーチャルフォルダー<!-- END REF -->を格納します。

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

このプロパティは **読み取り専用** です。 

<style> h2 { background: #d9ebff;}</style>
