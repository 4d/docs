---
id: ZipArchiveClass
title: ZIPArchive
---

Um arquivo 4D Zip é um objeto `File` ou `Folder`contendo um ou mais arquivos ou pastas, que são comprimidos para ter um tamanho menor que o original. Esses arquivos são criados com uma extensão ".zip" e podem ser usados para poupar espaço em disco ou transferir arquivos via meios que tenham limitações de tamanho (por exemplo, um email ou por uma rede).

- Você cria um arquivo ZIP 4D com o comando [`ZIP Create archive`](../commands/zip-create-archive.md).
- As instâncias 4D [`ZIPFile`](ZipFileClass.md) e [`ZIPFolder`](ZipFolderClass.md) estão disponíveis por meio da propriedade [`root`](#root) (`ZIPFolder`) do objeto retornado pelo comando [`ZIP Read archive`](../commands/zip-read-archive.md).

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

A propriedade `.root` contém <!-- REF #ZipArchiveClass.root.Summary --> uma pasta virtual fornecendo acesso ao conteúdo do arquivo ZIP <!-- END REF -->.

A pasta `root` e seu conteúdo podem ser manipulados com as funções e propriedades [ZipFile](ZipFileClass.md) e [ZipFolder](ZipFolderClass.md).

Essa propriedade é **somente leitura**.
