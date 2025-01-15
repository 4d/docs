---
id: ZipArchiveClass
title: ZIPArchive
---

A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. Esses arquivos são criados com uma extensão ".zip" e podem ser usados para poupar espaço em disco ou transferir arquivos via meios que tenham limitações de tamanho (por exemplo, um email ou por uma rede).

- Você cria um arquivo ZIP 4D com o comando [`ZIP Create archive`](../commands/zip-create-archive.md).
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [`ZIP Read archive`](../commands/zip-read-archive.md) command.

### Exemplo

Para recuperar e ver os conteúdos de um objeto ZIP file:

```4d
var $path; $archive : 4D. File
var $zipFile : 4D. ZipFile
var $zipFolder : 4D. ZipFolder
var $txt : Text

$path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
$archive:=ZIP Read archive($path)
$zipFolder:=$archive.root // store the zip main folder
$zipFile:=$zipFolder.files()[0] //read the first zipped file If($zipFile.extension=".txt")
 $txt:=$zipFile.getText()
End if
```

### Resumo

|                                                                                                           |
| --------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)<br/><!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Descrição

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

Essa propriedade é **somente leitura**.
