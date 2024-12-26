---
id: ZipArchiveClass
title: ZIPArchive
---

A 4D ZIP archive is a `File` or `Folder` object containing one or more files or folders, which are compressed to be smaller than their original size. Esses arquivos são criados com uma extensão ".zip" e podem ser usados para poupar espaço em disco ou transferir arquivos via meios que tenham limitações de tamanho (por exemplo, um email ou por uma rede).

- Você cria um arquivo ZIP 4D com o comando [ZIP Create archive](#zip-create-archive).
- 4D [`ZIPFile`](ZipFileClass.md) and [`ZIPFolder`](ZipFolderClass.md) instances are available through the [`root`](#root) property (`ZIPFolder`) of the object returned by [ZIP Read archive](#zip-read-archive) command.

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

## ZIP Create archive

<details><summary>História</summary>

| Release | Mudanças                                                                       |
| ------- | ------------------------------------------------------------------------------ |
| 19 R3   | Adição das propriedades `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` |
| 18      | Adicionado                                                                     |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->**ZIP Create archive** ( *fileToZip* : 4D.File ; *destinationFile* : 4D.File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D.Folder ; *destinationFile* : 4D.File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D.File ) : Object<!-- END REF -->

<!-- REF #_command_.ZIP Create archive.Params -->

| Parâmetro       | Tipo                       |                             | Descrição                                                           |
| --------------- | -------------------------- | :-------------------------: | ------------------------------------------------------------------- |
| fileToZip       | 4D. File   |              ->             | Objeto File ou Folder a comprimir                                   |
| folderToZip     | 4D. Folder |              ->             | Objeto File ou Folder a comprimir                                   |
| zipStructure    | Object                     |              ->             | Objeto File ou Folder a comprimir                                   |
| destinationFile | 4D. File   |              ->             | Arquivo destino para o arquivo                                      |
| options         | Integer                    |              ->             | Opção *folderToZip*: `ZIP Without enclosing folder` |
| Resultados      | Object                     | <- | Objeto de estado                                                    |

<!-- END REF -->

#### Descrição

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D. File, a 4D. Folder, or a zip structure object as first parameter:

- *fileToZip*: You simply pass a `4D.File` to compress.

- *folderToZip*: você passa um `4D.Folder` para compactar. In this case, the *options* parameter allows you to compress only the contents of the folder (i.e., exclude the enclosing folder). By default, `ZIP Create archive` will compress the folder and its contents, so that the decompressing operation will recreate a folder. If you want the decompressing operation to restore only the contents of the folder, pass the `ZIP Without enclosing folder` constant in the *options* parameter.

- *zipStructure*: pode passar um objeto descrevendo o objeto ZIP archive. As propriedades abaixo estão disponíveis para definir a estrutura:

| Propriedade | Tipo                         | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer                      | <li>`ZIP Compression standard`: Deflate compression (default)</li><li>`ZIP Compression LZMA`: LZMA compression</li><li>`ZIP Compression XZ`: XZ compression</li><li>`ZIP Compression none`: No compression</li>                                                                                                                                                                                                                                                                                                                                                  |
| level       | Integer                      | Nível de compressão. Valores possíveis: de 1 a 10. Um valor pequeno produz um arquivo de maior tamanho, enquanto um valor grande produz um arquivo de tamanho menor. O nível de compactação tem um impacto na performance. Default values if omitted: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li>                                                   |
| encryption  | Integer                      | The encryption to use if a password is set:<li>`ZIP Encryption AES128`: AES encryption using 128-bit key.</li><li>`ZIP Encryption AES192`: AES encryption using 192-bit key.</li><li>`ZIP Encryption AES256`: AES encryption using 256-bit key (default if password is set).</li><li>`ZIP Encryption none`: Data is not encrypted (default if no password is set)</li>                     |
| senha       | Text                         | Uma senha a usar se a criptografia for necessária.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| files       | Collection                   | <li>a collection of `4D.File` or `4D.Folder` objects or</li><li>a collection of objects with the following properties:</li><table><tr><td>Property</td><td>Type</td><td>Description</td></tr><tr><td>source</td><td>4D.File or 4D.Folder</td><td>File or Folder</td></tr><tr><td>destination</td><td>Text</td><td>(optional) - Specify a relative filepath to change the organization of the contents of the archive</td></tr><tr><td>option</td><td>number</td><td>(optional) - `ZIP Ignore invisible files` or 0 to compress all of the file</td></tr></table> |
| callback    | 4D. Function | Uma fórmula de callback (retrochamada) que recebe o progresso da compactação (0-100) em $1.                                                                                                                                                                                                                                                                                                                                                                                                                |

In the *destinationFile* parameter, pass a `4D.File` object describing the ZIP archive to create (name, location, etc.). É recomendado usar a extensão ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.

Once an archive is created, you can use the [ZIP Read archive](#zip-read-archive) command to access it.

**Status object**

O estado do objeto retornado contém as propriedades abaixo:

| Propriedade | Tipo       | Descrição                                                                                                                                                                |
| ----------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| statusText  | Text       | Error message (if any):<li>Cannot open ZIP archive</li><li>Cannot create ZIP archive</li><li>Password is required for encryption</li> |
| status      | Integer    | Código de estado                                                                                                                                                         |
| success     | Parâmetros | True se o arquivo for criado com sucesso, senão false                                                                                                                    |

#### Exemplo 1

Para compactar um `4D.File`:

```4d
 var $file; $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### Exemplo 2

Para comprimir uma `4D.Folder` sem a própria pasta:

```4d
 var $folder : 4D.Folder
 var $destination : 4D.File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Exemplo 3

Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:

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

#### Exemplo

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

#### Exemplo 2

Deseja utilizar um algoritmo de compressão alternativo com um elevado nível de compressão:

```4d
var $destination : 4D. File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 //padrão é 4

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18      | Adicionado |

</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->**ZIP Read archive** ( *zipFile* : 4D.File { ; *password* : Text }) : 4D.ZipArchive<!-- END REF -->

<!-- REF #_command_.ZIP Read archive.Params -->

| Parâmetro  | Tipo                     |                             | Descrição                       |
| ---------- | ------------------------ | :-------------------------: | ------------------------------- |
| zipFile    | 4D. File |              ->             | Arquivos Zip                    |
| senha      | Text                     |              ->             | Senha do arquivo ZIP, se houver |
| Resultados | Parâmetros               | <- | Objeto arquivo                  |

<!-- END REF -->

#### Descrição

The `ZIP Read archive` command <!-- REF #_command_.ZIP Read archive.Summary -->retrieves the contents of *zipFile* and returns it as a `4D.ZipArchive` object<!-- END REF -->.

> O comando não descompacta o arquivo ZIP, apenas oferece uma visão de seus conteúdos. To extract the contents of an archive, you need to use methods such as [file.copyTo()](Document.md#copyto) or [folder.copyTo()](Directory.md#copyto).

Pass a `4D.File` object referencing the compressed ZIP archive in the *zipFile* parameter. The target archive file will be opened until the `ZIP Read archive` has finished executing and all contents/references have been extracted/released, then it will be closed automatically.

If the *zipFile* is password protected, you need to use the optional *password* parameter to provide a password. Se uma senha for exigida mas não for passada, quando tentar ler os conteúdos do arquivo um erro será gerado.

**Objeto arquivo**

O objeto retornado `4D.ZipArchive` contém uma única propriedade [`root`](#root) cujo valor é um objeto `4D.ZipFolder`. Esta pasta descreve todo o conteúdo do ficheiro ZIP.

#### Exemplo

Para recuperar e ver os conteúdos de um objeto ZIP file:

```4d
 var $archive : 4D.ZipArchive
 var $path : 4D.File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

Para recuperar a lista dos arquivos e pastas no arquivo:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

Para extrair da pasta root:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Para ler todos os conteúdos de um arquivo sem extraí-lo da pasta root:

```4d
  //extract a file
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extract all files
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->**.root** : 4D.ZipFolder<!-- END REF -->

#### Descrição

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

The `root` folder and its contents can be manipulated with the [ZipFile](ZipFileClass.md) and [ZipFolder](ZipFolderClass.md) functions and properties.

Essa propriedade é **somente leitura**.
