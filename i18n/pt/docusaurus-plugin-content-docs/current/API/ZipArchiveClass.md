---
id: ZipArchiveClass
title: ZIPArchive
---


Um arquivo 4D Zip é um  objeto`File` ou `Folder` contendo um ou mais arquivos ou pastas, que são comprimidos para ter um tamanho menor que o original. Esses arquivos são criados com uma extensão ".zip" e podem ser usados para poupar espaço em disco ou transferir arquivos via meios que tenham limitações de tamanho (por exemplo, um email ou por uma rede).

- Pode criar um arquivo 4D ZIP com o comando [ZIP Create archive](#zip-create-archive).
- As instâncias [`ZIPFile`](ZipFileClass.md) e [`ZIPFolder`](ZipFolderClass.md) de 4D estão disponíveis vai a propriedade [`root`](#root) (`ZIPFolder`) do objeto retornado pelo comando [ZIP Read archive](#zip-read-archive).

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

|                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #ZipArchiveClass.root.Syntax -->](#root)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #ZipArchiveClass.root.Summary --> |

## ZIP Create archive

<details><summary>Histórico</summary>

| Versão | Mudanças                                                              |
| ------ | --------------------------------------------------------------------- |
| v19 R3 | Added `ZIP Compression LZMA`, `ZIP Compression xy`, `.level` property |
| v18    | Adicionado                                                            |

</details>

<!-- REF #_command_.ZIP Create archive.Syntax -->

**ZIP Create archive** ( *fileToZip* : 4D. File ; *destinationFile* : 4D. File ) : Object<br/>**ZIP Create archive** ( *folderToZip* : 4D. Folder ; *destinationFile* : 4D. File { ; *options* : Integer }) : Object<br/>**ZIP Create archive** ( *zipStructure* : Object ; *destinationFile* : 4D. File ) : Object<!-- END REF -->


<!-- REF #_command_.ZIP Create archive.Params -->
| Parameter       | Tipo       |    | Descrção                                             |
| --------------- | ---------- |:--:| ---------------------------------------------------- |
| fileToZip       | 4D. File   | -> | Objeto File ou Folder a comprimir                    |
| folderToZip     | 4D. Folder | -> | Objeto File ou Folder a comprimir                    |
| zipStructure    | Objeto     | -> | Objeto File ou Folder a comprimir                    |
| destinationFile | 4D. File   | -> | Arquivo destino para o arquivo                       |
| options         | Integer    | -> | *folderToZip* option: `ZIP Without enclosing folder` |
| Resultados      | Objeto     | <- | Objeto de estado|<!-- END REF -->          |

#### Descrção

The `ZIP Create archive` command <!-- REF #_command_.ZIP Create archive.Summary -->creates a compressed ZIP archive object and returns the status of the operation<!-- END REF -->.

You can pass a 4D. File, a 4D. Folder, or a zip structure object as first parameter:

- *fileToZip*: simplesmente passar  `4D.File` para compactar.

- *folderToZip*: You pass a `4D. Folder` to compress. Nesse caso, o parâmetro *options* permite compactar só os conteúdos da pasta (ou seja, excluir a pasta parente). Como padrão, `ZIP Create archive` compacta a pasta e seus conteúdos, assim a operação de descompactação vai recriar a pasta. Se quiser que a operação de descompactação restaure apenas os conteúdos da pasta, passe a cosntante `ZIP Without enclosing folder` no parâmetro *options*.

- *zipStructure*: pode passar um objeto descrevendo o objeto ZIP archive. As propriedades abaixo estão disponíveis para definir a estrutura:

| Propriedade | Tipo         | Descrção                                                                                                                                                                                                                                                                                                                          |
| ----------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compression | Integer      | <li>`ZIP Compression standard`: Reduz a compactação (padrão)</li><li>`ZIP Compression LZMA`: compactação LZMA</li><li>`ZIP Compression XZ`: compactação XZ</li><li>`ZIP Compression none`: Sem compactação</li>                                                                                                                                                                                                                              |
| level       | Integer      | Nível de compressão. Valores possíveis: de 1 a 10. Um valor pequeno produz um arquivo de maior tamanho, enquanto um valor grande produz um arquivo de tamanho menor. O nível de compactação tem um impacto na performance. Valores padrão se omitidos: <li>`ZIP Compression standard`: 6</li><li>`ZIP Compression LZMA`: 4</li><li>`ZIP Compression XZ`: 4</li> |
| encryption  | Integer      | A criptografia a usar se uma senha for estabelecida:<li>`ZIP Encryption AES128`: criptografia AES com uma chave de 128-bits.</li><li>`ZIP Encryption AES192`: criptografia AES com uma chave de 192-bits.</li><li>`ZIP Encryption AES256`: criptografia AES com chave de 256-bits (padrão se uma senha for estabelecida).</li><li>`ZIP Encryption none`: os dados não são criptografados (padrão se não estabelecer uma senha)</li>                                                                                                                                                                        |
| senha       | Text         | Uma senha a usar se a criptografia for necessária.                                                                                                                                                                                                                                                                                |
| files       | Collection   | <li>a collection of `4D. File` or `4D. Folder` objects or</li><li>uma coleção de objetos com as propriedades abaixo:</li><table><tr><td>Propriedade</td><td>Tipo</td><td>Descrção</td></tr><tr><td>source</td><td>4D. File or 4D. Folder</td><td>File ou Folder</td></tr><tr><td>destination</td><td>Text</td><td>(opcional) especifique uma rota de arquivo relativa para mudar a organização dos conteúdos do arquivo</td></tr><tr><td>option</td><td>number</td><td>(opcional) - 'ZIP ignore invisible files' ou 0 para compactar o arquivo inteiro</td></tr></table>                                                                                                                                                                                                                                                    |
| callback    | 4D. Function | Uma fórmula de callback (retrochamada) que recebe o progresso da compactação (0-100) em $1.                                                                                                                                                                                                                                       |

In the *destinationFile* parameter, pass a `4D. File` object describing the ZIP archive to create (name, location, etc.). É recomendado usar a extensão ".zip" se quiser que o arquivo ZIP seja processado automaticamente por um software.

Quando um arquivo for criado, pode usar o comando [ZIP Read archive](#zip-read-archive) para acessá-lo.

**Objeto de estado**

O estado do objeto retornado contém as propriedades abaixo:

| Propriedade | Tipo     | Descrção                                                                                                    |
| ----------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| statusText  | Text     | Mensagem de erro (se houver):<li>Impossível abrir o arquivo ZIP</li><li>IMpossível criar o arquivo ZIP</li><li>Uma senha é necessária para criptografia</li> |
| status      | Integer  | Código de estado                                                                                            |
| success     | Booleano | True se o arquivo for criado com sucesso, senão false                                                       |

#### Exemplo 1

To compress a `4D. File`:

```4d
 var $file; $destination : 4D. File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/file.zip")
 $file:=Folder(fk desktop folder).file("MyDocs/text.txt")

 $status:=ZIP Create archive($file;$destination)
```

#### Exemplo 2

To compress a `4D. Folder` without the folder itself:

```4d
 var $folder : 4D. Folder
 var $destination : 4D. File
 var $status : Object

 $destination:=Folder(fk desktop folder).file("MyDocs/Images.zip")
 $folder:=Folder(fk desktop folder).folder("MyDocs/Images")

 $status:=ZIP Create archive($folder;$destination;ZIP Without enclosing folder)
```

#### Exemplo 3

Para compactar uma estrutura de arquivo ZIP sem uma senha e barra de progresso:

```4d
 var $destination : 4D. File
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

#### Exemplo 4

Pode passar uma coleção de pastas e arquivos para compactar ao objeto *zipStructure*:

```4d
 var $destination : 4D. File
 var $zip;$err : Object
 $zip:=New object
 $zip.files:=New collection
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Tests/text2.txt")))
 $zip.files.push(New object("source";Folder(fk desktop folder).file("Images/image.png")))

 $destination:=Folder(fk desktop folder).file("file.zip")
 $err:=ZIP Create archive($zip;$destination)
```

#### Exemplo 5

You want to use an alternative compression algorithm with a high compression level:

```4d
var $destination : 4D. File
var $zip; $err : Object

$zip:=New object
$zip.files:=New collection
$zip.files.push(Folder(fk desktop folder).folder("images"))
$zip.compression:=ZIP Compression LZMA
$zip.level:=7 //default is 4

$destination:=Folder(fk desktop folder).file("images.zip")
$err:=ZIP Create archive($zip; $destination)
```

## ZIP Read archive

<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v18    | Adicionado |

</details>

<!-- REF #_command_.ZIP Read archive.Syntax -->

**ZIP Read archive** ( *zipFile* : 4D. File { ; *password* : Text }) : 4D. ZipArchive<!-- END REF -->


<!-- REF #_command_.ZIP Read archive.Params -->
| Parameter  | Tipo           |    | Descrção                                  |
| ---------- | -------------- |:--:| ----------------------------------------- |
| zipFile    | 4D. File       | -> | Arquivos Zip                              |
| senha      | Text           | -> | Senha do arquivo ZIP, se houver           |
| Resultados | 4D. ZipArchive | <- | Objeto arquivo|<!-- END REF --> |

#### Descrção

The `.root` property contains <!-- REF #_command_.ZIP Read archive.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

> O comando não descompacta o arquivo ZIP, apenas oferece uma visão de seus conteúdos. Para extrair os conteúdos do arquivo, precisa usar métodos como [file.copyTo()](Document.md#copyto) ou [folder.copyTo()](Directory.md#copyto).

*fileToZip*: You simply pass a `4D. File` to compress.

Se *zipFile* for protegido por uma senha, precisa usar o parâmetro opcional *password* ´para fornecer uma senha. Se uma senha for exigida mas não for passada, quando tentar ler os conteúdos do arquivo um erro será gerado.

**Objeto arquivo**

The returned `4D. ZipArchive` object contains a single [`root`](#root) property whose value is a `4D. ZipFolder` object. Summary -->uma pasta virtual que oferece acesso aos conteúdos do arquivo ZIP<!-- END REF -->.

#### Exemplo

Para recuperar e ver os conteúdos de um objeto ZIP file:

```4d
 var $archive : 4D. ZipArchive
 var $path : 4D. File

 $path:=Folder(fk desktop folder).file("MyDocs/Archive.zip")
 $archive:=ZIP Read archive($path)
```

Para recuperar a lista dos arquivos e pastas no arquivo:

```4d
 $folders:=$archive.root.folders()
 $files:=$archive.root.files()
```

Para ler todos os conteúdos de um arquivo sem extraí-lo da pasta root:

```4d

 If($files[$i].extension=".txt")
    $txt:=$files[$i].getText()
 Else
    $blob:=$files[$i].getContent()
 End if
```

Para extrair da pasta root:

```4d
  //extrair um arquivo
 $folderResult:=$files[$i].copyTo(Folder(fk desktop folder).folder("MyDocs"))

  //extrair todos os arquivos
 $folderResult:=$archive.root.copyTo(Folder(fk desktop folder).folder("MyDocs"))
```

## .root

<!-- REF #ZipArchiveClass.root.Syntax -->

**.root** : 4D. ZipFolder<!-- END REF -->

#### Descrção

The `.root` property contains <!-- REF #ZipArchiveClass.root.Summary -->a virtual folder providing access to the contents of the ZIP archive<!-- END REF -->.

A pasta `root` e seus conteúdos podem ser manipulados com as funções e propriedades [ZipFile](ZipFileClass.md) e [ZipFolder](ZipFolderClass.md).

Essa propriedade é**apenas leitura**.
